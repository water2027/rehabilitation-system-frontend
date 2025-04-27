<!-- 性能不如原生，uniapp不推荐使用自定义的，微信小程序有一套自己的方案，也是不推荐 -->
<!-- https://uniapp.dcloud.net.cn/collocation/pages.html#custom-tab-bar -->
<!-- https://uniapp.dcloud.net.cn/component/custom-tab-bar.html#custom-tab-bar -->
<template>
	<view class="bar-root">
		<view :class="`item ${item.name === currentPage?'select':''}`" v-for="(item,index) in routes" :key="item.name">
			<text>{{ item.name }}</text>
		</view>
	</view>
</template>

<script setup>
	import { ref } from 'vue';
	const routes = [{
			name: '首页',
			path: '',
		},
		{
			name: '虚拟社区',
			path: ''
		},
		{
			name: '康复方案',
			path: ''
		},
		{
			name: '我的',
			path: ''
		},
	]
	const currentPage = ref('')
</script>

<style lang="scss">
.bar-root {
	display: flex;
	flex-direction: row;
	
	.item {
		text-align: center;
		width:100%;
		margin-left: 2px;
		margin-right: 2px;
		padding:4px;
		border: solid;
		border-color: $uni-bg-color-mask;
		border-radius: 20%;
	}
	.item.select {
		color: rgba(255, 170, 0, 1.0);
		border-color: rgba(255, 170, 0, 1.0);
	}
}
</style>