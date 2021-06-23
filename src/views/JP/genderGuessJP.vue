<template>
	<div>
		<table v-for="(item, index) in infoArray2" class="tableStyle">
			<tbody v-if="item!=='Undetermined'">
				<tr v-if="index%2==0 && item=='male'">
					<td class="tdStyle">推測された性別：</td>
					<td class="tdStyle">男性</td>
				</tr>
				<tr v-else-if="index%2==0 && item=='female'">
					<td class="tdStyle">推測された性別：</td>
					<td class="tdStyle">女性</td>
				</tr>
				<tr v-else>
					<td class="probStyle">確率</td>
					<td class="probStyle">{{ (item*100).toFixed(2) }}%</td>
				</tr>
			</tbody>
			<tbody v-else>
				<tr>
					<td class="tdStyle">性別は</td>
					<td class="tdStyle">不明</td>
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
	
</style>