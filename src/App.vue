<template>
	<Header />

	<div>
		<NameGame />
	</div>
</template>

<script>
	import Header from "./components/Header";
	import NameGame from "./components/NameGame";

	export default {
		components: { Header, NameGame },
	};
</script>