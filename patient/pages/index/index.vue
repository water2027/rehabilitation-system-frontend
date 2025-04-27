<template>
	<DefaultLayout>
		<!-- 一张图片 -->
		<view class="cover">
			<img class="cover-img" src="http://iph.href.lu/768x256?text=test" alt="" />
		</view>
		<!-- 康复测评等进入入口 -->
		<view class="cards-root">
			<LittleCard class="card" v-for="item in littleCards" :key="item.name" :name="item.name"
				:img-url="item.imgUrl" />
		</view>
		<!-- 每日打卡 -->
		<MoreCard class="more-card" name="每日打卡" more-title="详情" link="/MeView/MeView">
			<view class="">
				今日还有2个打卡任务未完成
			</view>
		</MoreCard>
		<!-- 康复咨询 -->
		<MoreCard class="more-card" name="康复咨询" more-title="更多" link="/MeView/MeView">
			<ArticleCard class="article" v-for="article in articles" :key="article.title" :article="article"></ArticleCard>
		</MoreCard>
	</DefaultLayout>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	const littleCards = [{
			name: '康复测评',
			imgUrl: 'http://iph.href.lu/768x256?text=test'
		},
		{
			name: '康复预约',
			imgUrl: 'http://iph.href.lu/768x256?text=test'
		},
		{
			name: '康复团队',
			imgUrl: 'http://iph.href.lu/768x256?text=test'
		},
		{
			name: '康复打卡',
			imgUrl: 'http://iph.href.lu/768x256?text=test'
		},
	]
	const articles = ref([
		{
			title: '因为经常掏耳朵，女子患上恶性肿瘤！紧急提醒：这样掏耳朵真不行！这样掏耳朵真不行！这样掏耳朵真不行！这样掏耳朵真不行！这样掏耳朵真不行！',
			time:'2024-06-25',
			cover:'http://iph.href.lu/768x256?text=test'
		},
		{
			title: '因为经常掏耳朵，女子患上恶性肿瘤！紧急提醒：这样掏耳朵真不行！这样掏耳朵真不行！这样掏耳朵真不行！这样掏耳朵真不行！这样掏耳朵真不行！',
			time:'2024-06-25',
			cover:'http://iph.href.lu/768x256?text=test'
		},
	])
</script>

<style lang="scss">
	.cover {
		margin-left: auto;
		margin-right: auto;

		.cover-img {
			border-radius: 5%;
		}
	}

	.cards-root {
		display: flex;
		flex-direction: row;
		padding: 2px;
		margin-left: auto;
		margin-right: auto;
		width: 80%;

		.card {
			width: 100%;
		}
	}

	.more-card {
		width: 90%;
		margin-left: auto;
		margin-right: auto;
	}
	
	.article {
		height:125px;
	}
</style>