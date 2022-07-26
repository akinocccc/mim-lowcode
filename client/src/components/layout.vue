<template>
	<div class="common-layout">
		<el-container>
			<el-header class="header" height="50px">
				<text>MiM低代码平台</text>
				<div class="userinfo-wrapper">
					<el-avatar
						:size="35"
						src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
					/>
					<el-dropdown>
						<span class="el-dropdown-link">
							<text>user</text>
							<el-icon class="el-icon--right">
								<arrow-down />
							</el-icon>
						</span>
						<template #dropdown>
							<el-dropdown-menu>
								<el-dropdown-item>我的页面</el-dropdown-item>
								<el-dropdown-item>修改密码</el-dropdown-item>
								<el-dropdown-item divided>退出登录</el-dropdown-item>
							</el-dropdown-menu>
						</template>
					</el-dropdown>
				</div>
			</el-header>
			<el-container>
				<el-aside class="aside" width="64px">
					<el-menu
						:default-active="$route.path"
						:collapse="true"
						:unique-opened="true"
						:router="true"
						background-color="#1c2538"
						text-color="#ffffff"
						v-for="item in menuItems"
						:route="item.path"
						:key="item.name"
						:index="item.name"
					>
						<el-menu-item :index="item.path">
							<el-icon><component :is="item.meta.icon" /></el-icon>
							<template #title>{{ item.meta.title }}</template>
						</el-menu-item>
					</el-menu>
				</el-aside>
				<el-main><router-view /></el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script lang="ts">
	import router from '../routers/index';
	export default {
		setup() {
			const routes: Array<any> = router.getRoutes();
			console.log(routes);
			const menuItems = routes.filter((item) => item.name && !item.meta.hideInMenu);
			return {
				menuItems,
			};
		},
	};
</script>

<style lang="less">
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #121d33;
		color: #fff;
		.userinfo-wrapper {
			display: flex;
			align-items: center;
			text {
				margin-left: 10px;
			}
			.el-dropdown-link {
				cursor: pointer;
				color: #fff;
			}
		}
	}
	.aside {
		overflow: hidden !important;
		height: 100%;
		border-right: 1px solid #ccc;
		background-color: #1c2538;
	}
</style>
