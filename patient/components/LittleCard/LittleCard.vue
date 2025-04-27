<template>
	<view class="root">
		<view class="img-container">
			<img ref="img" class="card-img" :src="imgUrl" :alt="name" />
		</view>
		<text class="card-text">{{ name }}</text>
	</view>
</template>

<script setup>
	defineProps({
		name: String,
		imgUrl: String
	})
</script>

<style lang="scss" scoped>
	.root {
		display: flex;
		flex-direction: column;

		.img-container {
			position: relative;
			width: 90%;
			padding-bottom: 100%; 
			border-radius: 100%;
			overflow: hidden;
			margin-left: auto;
			margin-right: auto;

			.card-img {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				object-fit: cover;
				border-radius: 100%;
			}
		}
		
		.card-text {
			text-align: center;
		}
	}
</style>