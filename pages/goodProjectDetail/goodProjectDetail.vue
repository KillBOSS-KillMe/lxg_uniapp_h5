<template>
	<view class="want">
		<view class="item">
			<view class="title">项目介绍</view>
			<image :src="IMG_URL+info.image" mode=""></image>
			<view class="every four">
				<label>项目名称：</label>
				<text>{{info.project_name}}</text>
			</view>
			<view class="every four">
				<label>所属行业：</label>
				<text>{{info.industry}}</text>
			</view>
			<view class="every four">
				<label>加盟金额：</label>
				<text>{{info.amount_of_money}}</text>
			</view>
			<view class="every four">
				<label>申请人数：</label>
				<text>{{info.apply_num}}</text>
			</view>
			<view class="every four" style="align-items: flex-start;">
				<label>项目概述：</label>
				<text class="textLine">{{info.summary}}</text>
			</view>
		</view>
		<view class="item" style="margin-bottom: 110upx;">
			<view class="title">联系方式</view>
			<view class="every">
				<label>联系人姓名：</label>
				<text>{{info.contacts}}</text>
			</view>
			<view class="every">
				<label>联系人电话：</label>
				<text>{{info.mobile}}</text>
			</view>
			<view class="every">
				<label>联系人单位：</label>
				<text>{{info.company}}</text>
			</view>
		</view>
		<view class="submit">
			<text @tap="getDetail(1)">获取联系方式</text>
			<text @tap="postMeaasge(2)">我要留言</text>
		</view>
		<uni-popup ref="popup" type="center">
			<view class="vip-box">
				<view class="close" @click="close">×</view>
				<view class="text" v-if="typeId == 1">
					<text>发布信息</text>
					<text>请先发布一条供求信息，即可查看联 系方式</text>
				</view>
				<view class="text" v-if="typeId == 2">
					<view class="textarea">
						<textarea value="" placeholder="" @input="inputValue" maxlength="200"/>
						<text>{{current}}/200</text>
					</view>
				</view>
				<view class="fot">
					<view v-if="typeId == 1" @click="navMembership">立即发布</view>
					<view v-if="typeId == 2" @click="post()">立即发布</view>
					<view class="cancel" @click="close">取消发布</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
import { ajax } from '@/static/js/base.js';
import api from '@/static/js/api.js';
import { mapGetters } from 'vuex';
export default {
	data() {
		return {
			info: {},
			typeId: '',
			current: 0
		};
	},
	onLoad(e) {
		this.id = e.id;
		ajax({
			url: api.getProjectInfo,
			type: 'POST',
			data: {
				id: this.id
			}
		}).then(res => {
			if (res.status_code == 'ok') {
				console.log(res);
				this.info = res.data;
			}
		});
	},
	methods: {
		getDetail(e) {
			this.typeId = e;
			ajax({
				url: api.getProjectDetails,
				type: 'POST',
				data: {
					id: this.id
				}
			}).then(res => {
				if (res.status_code == 'ok') {
					console.log(res);
					this.info.mobile = res.data.mobile;
				} else if (res.status_code == 'error') {
					this.$refs.popup.open();
				} else {
					uni.showToast({
						title: res.message,
						icon: 'none'
					});
				}
			});
		},
		close() {
			this.$refs.popup.close();
		},
		navMembership() {
			uni.navigateTo({
				url: '../postProject/postProject'
			});
			this.$refs.popup.close();
		},
		postMeaasge(e) {
			this.typeId = e;
			this.$refs.popup.open();
		},
		inputValue(e) {
			var len = parseInt(e.detail.value.length);
			// if (len > 200) return;
			console.log(len)
			this.content = e.detail.value
			this.current = len
		},
		post(){
			ajax({
				url: api.addMessage,
				type: 'POST',
				data: {
					content: this.content
				}
			}).then(res => {
				if (res.status_code == 'ok') {
					console.log(res);
					uni.showToast({
						title: res.message,
						icon: 'none'
					});
					this.$refs.popup.close();
					// this.info.mobile = res.data.mobile;
				}else {
					uni.showToast({
						title: res.message,
						icon: 'none'
					});
				}
			});
		}
	}
};
</script>

<style lang="scss">
page {
	background-color: #F6F6F6;
}
.want {
	width: 750upx;
	// padding: 26rpx 0;
}
.item {
	width: 700rpx;
	padding: 26rpx;
	background-color: #ffffff;
	margin-top: 20rpx;
	>image{
		width: 100%;
		height: 300upx;
	}
	.title {
		position: relative;
		font-weight: bold;
		color: #333333;
		font-size: 32upx;
		padding-left: 28upx;
		margin-bottom: 18upx;
		&::after {
			content: '';
			position: absolute;
			width: 10upx;
			height: 36upx;
			background: #0076ff;
			border-radius: 6upx;
			left: 0;
			top: 50%;
			transform: translateY(-50%);
		}
	}
	.every {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 10upx;
		label {
			font-size: 28upx;
			color: #343434;
		}
		> text {
			color: #999999;
			font-size: 26upx;
			display: block;
			width: 530upx;
			// background-color: #007AFF;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}
	.four {
		// align-items: flex-start;
		> text {
			color: #999999;
			font-size: 26upx;
			display: block;
			width: 555upx;
			// background-color: #007AFF;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
		.textLine {
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			white-space: pre-wrap;
		}
		.img {
			width: 555upx;
			display: flex;
			flex-wrap: wrap;
			image {
				width: 176upx;
				height: 128upx;
				margin: 0 12upx 12rpx 0;
				&:nth-of-type(3n) {
					margin-right: 0;
				}
			}
		}
	}
}
.vip-box {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 450upx;
		// height: 430upx;
		background: #FFFFFF;
		border-radius: 6upx;

		.close {
			padding: 20upx;
			position: absolute;
			right: 0;
			top: 0;
			color: #999999;
			font-weight: bold;
			font-size: 40upx;
		}
		.text {
			font-size: 26upx;
			color: #909090;
			margin-top: 60upx;
			font-weight: bold;
			text-align: center;
			padding: 0upx 30upx 0 30upx;
			box-sizing: border-box;
			width: 100%;
			line-height: 1.5;
			>text{
				display: block;
				&:first-of-type{
					color: #565656;
					font-size: 38upx;
					margin-bottom: 20upx;
				}
			}
		}

		.fot {
			height: 115upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-top: 1upx solid #DDDDDD;
			width: 100%;
			padding: 0 30upx;
			box-sizing: border-box;
			margin-top: 30upx;
			>view {
				width: 174upx;
				height: 50upx;
				line-height: 50upx;
				border-radius: 6upx;
				font-size: 24upx;
				color: #FFFFFF;
				font-weight: bold;
				background:linear-gradient(0deg,rgba(17,115,231,1),rgba(1,84,179,1));
				text-align: center;
			}

			.cancel {
				border: 1upx solid #0076FF;
				color: #0076FF;
				background: #FFFFFF;
			}
		}
	}
.bottom{
	width: 700upx;
	padding: 0 26upx;
	height: 110upx;
	background-color: #FFFFFF;
	position: fixed;
	bottom: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: space-around;
	text{
		width: 310upx;
		height: 90upx;
		display: block;
		text-align: center;
		line-height: 90upx;
		border: 1upx solid #0076FF;
		color: #0076FF;
		border-radius: 8upx;
		font-size: 28upx;
		&:first-of-type{
			background: linear-gradient(#1173E7,#0154B3);
			color: #FFFFFF;
			border: none;
		}
	}
}
.submit {
	width: 700upx;
	padding: 26upx;
	display: flex;
	justify-content: space-around;
	margin-top: 80upx;
	text {
		height: 90upx;
		width: 300upx;
		text-align: center;
		border: 1upx solid #007aff;
		line-height: 90upx;
		color: #0076ff;
		font-size: 28upx;
		border-radius: 8upx;
		&:first-of-type {
			background-color: #007aff;
			color: #ffffff;
		}
	}
}
.textarea {
	// background-color: #C0C0C0;
	width: 89%;
	margin-top: 14upx;
	border: 1upx solid #eee;
	border-radius: 6upx;
	padding: 20upx 20upx 0;
	text-align: left;
	color: #565656;
	font-size: 28upx;
	textarea{
		width: 100%;
		text-align: justify;
	}
	text{
		text-align: right !important;
		color: #C0C0C0;
		font-weight: 200;
		font-size: 26upx;
		display: block;
	}
}
</style>
