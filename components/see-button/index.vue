<template>
	<!-- #ifdef H5 -->
	<view :id="seeButtonId" class="see-button" :class="itemClass" @click="onTouchstart($event)">
	<!-- #endif -->
	<!-- #ifndef H5 -->
	<view :id="seeButtonId" class="see-button" :class="itemClass" @tap="onTap" @touchstart="onTouchstart($event)">
	<!-- #endif -->
		<slot></slot>
		<view
			class="see-button-ripple"
			:class="{ 'active': active }"
			:style="{
				top: rippleTop + 'px',
				left: rippleLeft + 'px',
				width: field.finalWidth + 'px',
				height: field.finalWidth + 'px',
				'background-color': wavesColor
			}"
		></view>
	</view>
</template>

<script>
let seeButtonId = 0;
export default {
	name: 'see-button',
	props: {
		wavesColor: {
			type: String,
			default: 'rgba(0, 0, 0, .15)'
		},
		itemClass: {
			type: String,
			default: ''
		}
	},
	data() {
		seeButtonId++;
		return {
			rippleTop: 0,
			rippleLeft: 0,
			field: {},
			active: Boolean,
			seeButtonId: 'seeButton_' + seeButtonId
		};
	},
	methods: {
		onTap(e) {	// 点击事件
			this.$emit('onTap');
		},
		onTouchstart(e) {	// 触碰事件 触发波纹
			console.log(e)
			this.active = false;
			this.$nextTick(() => {
				this.activeWaves(e);
			});
		},
		activeWaves(e) {
			try{
				this.getClientRect().then(data => {
					console.log(data)
					if (!data.height) {
						return;
					};
					data.finalWidth = data.height > data.width ? data.height : data.width;
					if (!data.finalWidth) {
						return;
					};
					this.field = data;
					let touchesX;
					let touchesY;
					// #ifdef MP-BAIDU
					touchesX = e.changedTouches[0].clientX;
					touchesY = e.changedTouches[0].clientY;
					// #endif
					// #ifdef MP-ALIPAY
					touchesX = e.detail.clientX;
					touchesY = e.detail.clientY;
					// #endif
					// #ifndef MP-BAIDU || MP-ALIPAY
					touchesX = e.touches[0].clientX;
					touchesY = e.touches[0].clientY;
					// #endif
					this.rippleTop = touchesY - data.top - data.finalWidth / 2;
					this.rippleLeft = touchesX - data.left - data.finalWidth / 2;
					this.$nextTick(() => {
						this.active = true;
					});
				});
			}catch(e){
				console.warn(e)
				//TODO handle the exception
			}
		},
		getClientRect() {
			return new Promise(callback => {
				try{
					let query = uni.createSelectorQuery().in(this);
					console.log(query)
					let id = '#' + this.seeButtonId;
					query.select(id).boundingClientRect(data => {
							callback(data);
						}).exec();
				}catch(e){
					console.warn(e)
					//TODO handle the exception
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.see-button {
	position: relative;
	overflow: hidden;
	
	.see-button-ripple {
		position: absolute;
		border-radius: 100%;
		background-clip: padding-box;
		pointer-events: none;
		user-select: none;
		transform: scale(0);
		opacity: 1;
	}
	
	.active {
		opacity: 0;
		transform: scale(2);
		transition: opacity 1.2s ease-out, transform 0.5s ease-out;
	}
}


</style>
