<!-- 上面是带有标题、其它信息、跳转链接的栏 -->
<!-- 下面是文章或者其它信息 -->
<template>
	<view class="root">
		<view class="bar">
			<text class="other-text">{{name}}</text>
			<text class="center-text">{{otherInfo}}</text>
			<navigator class="other-text" :url="link">{{moreTitle || '更多'}}</navigator>
		</view>
		<slot></slot>
	</view>
</template>

<script setup>
	defineProps({
		name: String,
		moreTitle: String,
		link: String,
		otherInfo: String,
	})
</script>

<style lang="scss" scoped>
	.root {
		width: 100%;
		display: flex;
		flex-direction: column;
		border: solid;
		border-color: rgba(0, 0, 0, 0.3);
		border-radius: 8px;
		overflow: hidden;

		.bar {
			display: flex;
			flex-direction: row;
			// border-radius: 8px 8px 0 0;
			background: linear-gradient(to right, rgba(255, 165, 10, 0.6) 60%, rgba(255, 100, 100, 0.95));
			padding: 2px;

			.center-text {
				margin-left: auto;
				margin-right: auto;
			}

			.other-text {
				margin-left: 2px;
				margin-right: 2px;
			}
		}
	}
</style>