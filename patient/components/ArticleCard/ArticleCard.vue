<template>
	<view class="root">
		<view class="img-container">
			<img class="img" :src="article.cover" :alt="article.title" />
		</view>
		<view class="text-container">
			<text>{{article?.title?.length>50 ? `${article.title.slice(0,50)}...`:article.title}}</text>
			<br />
			<text>{{new Date(article.time).toLocaleString()}}</text>
		</view>
	</view>
</template>

<script setup>
	defineProps({
		article: {
			cover: String,
			title: String,
			time: String
		}
	})
</script>

<style lang="scss">
	.root {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: row;
		overflow: hidden;
		padding: 2px;

		.img-container {
			height: 100%;
			aspect-ratio: 1 / 1;

			.img {
				border-radius: 100%;
				height: 100%;
				width: 100%;
				object-fit: cover;
			}
		}

		.text-container {
			height: 100%;
		}
	}
</style>