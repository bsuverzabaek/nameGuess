<template>
	<div>
		<table v-for="(item, index) in infoArray2">
			<tbody v-if="item!=='Undetermined'">
				<tr v-if="index%2==0 && item=='male'">
					<td>Your gender might be:</td>
					<td>Male</td>
				</tr>
				<tr v-else-if="index%2==0 && item=='female'">
					<td>Your gender might be:</td>
					<td>Female</td>
				</tr>
				<tr v-else>
					<td class="probStyle">Probability:</td>
					<td class="probStyle">{{ (item*100).toFixed(2) }}%</td>
				</tr>
			</tbody>
			<tbody v-else>
				<tr>
					<td>Your gender is:</td>
					<td>Undetermined</td>
				</tr>
			</tbody>
		</table>
		<div class=spaceStyle></div>
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

<style>
	.probStyle{
		font-size: small;
	}
</style>