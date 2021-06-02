<template>
	<div>
		<ul>
			<li v-for="item in infoArray" :key="item.id">
				<span v-if="item!=='Undetermined'">
					Your age might be: {{ item }}
				</span>
				<span v-else>
					Your age is: Undetermined
				</span>
			</li>
		</ul>
	</div>
</template>

<script>
	import { inject } from 'vue';
	
	export default{
		setup() {
			const infoArray = inject('array');

			return { infoArray };
		},
	};
</script>