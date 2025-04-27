<template>
	<view class="root">
		<slot></slot>
		<!-- <BottomBar class="bottom-bar"></BottomBar> -->
	</view>
</template>

<script setup>
</script>

<style lang="scss" scoped>
	.root {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.bottom-bar {
		width:100%;
		position:fixed;
		bottom:3%;
	}
</style>