<template>
	<DefaultLayout>
		<!-- 一张图片 -->
		<view class="cover">
			<img class="cover-img" src="http://iph.href.lu/768x256?text=test" alt="" />
		</view>
		<!-- 康复测评等进入入口 -->
		<view class="cards-root">
			<LittleCard class="card" v-for="item in littleCards" :key="item.name" :name="item.name" :img-url="item.imgUrl" />
		</view>
		<!-- 每日打卡 -->
		<view class=""></view>
		<!-- 康复咨询 -->
		<view class=""></view>
	</DefaultLayout>
</template>

<script setup>
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
		display:flex;
		flex-direction: row;
		padding: 2px;
		margin-left: auto;
		margin-right: auto;
		width:80%;
		
		.card {
			width:100%;
		}
	}
</style>