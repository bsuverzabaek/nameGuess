<template>
	<div>
		<table class="tableStyle">
			<tbody v-for="item in infoArray" :key="item.id">
				<tr v-if="item!=='Undetermined'">
						<td class="tdStyle">推測された年齢：</td>
						<td class="tdStyle">{{ item }}</td>
				</tr>
				<tr v-else>
					<td class="tdStyle">年齢は</td>
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
			const infoArray = inject('array');

			return { infoArray };
		},
	};
</script>

<style>
	.tableStyle{
		font-family : 'ヒラギノ角ゴ ProN' , 'Hiragino Kaku Gothic ProN' , '游ゴシック' , '游ゴシック体' , YuGothic , 'Yu Gothic' , 'メイリオ' , Meiryo , 'ＭＳ ゴシック' , 'MS Gothic' , HiraKakuProN-W3 , 'TakaoExゴシック' , TakaoExGothic , 'MotoyaLCedar' , 'Droid Sans Japanese' , sans-serif;
	}

	.tdStyle{
		line-height: 130%;
		font-size: large;
	}
</style>