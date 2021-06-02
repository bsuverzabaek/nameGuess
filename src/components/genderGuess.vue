<template>
	<div>
		<ul>
			<li v-for="(item, index) in infoArray2">
				<div v-if="item!=='Undetermined'">
					<div v-if="index%2==0">
						<span v-if="item=='male'">
							Your gender might be: Male
						</span>
						<span v-else>
							Your gender might be: Female
						</span>
					</div>
					<div v-else>
						Probability: {{ (item*100).toFixed(2) }}%
					</div>
				</div>
				<div v-else>
					Your gender is: Undetermined
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import { inject } from 'vue';

	export default{
		setup() {
			const infoArray2 = inject('array2');

			return { infoArray2 };
		},
	};
</script>