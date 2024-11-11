<template>
	<div class="top-bar">
		<button @click="goTo('magic')">Магия</button>
		<button @click="goTo('heros')">Герои</button>
		<button @click="goTo('artifacts')">Артефакты</button>
	</div>
</template>

<script>
export default {
	methods: {
		goTo(route) {
			this.$router.push(`/${route}`)
		},
	},
};
</script>

<style>
.top-bar{
	display: flex;
	justify-content: space-around;
	background-color: #333;
	padding:10px;
	color: white;
}
button {
	background: none;
	color: white;
	border: none;
	cursor: pointer;
}
button:hover {
	text-decoration: underline;
}
</style>

