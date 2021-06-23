<template>
	<div>
		<table>
			<tbody v-for="item in infoArray" :key="item.id">
				<tr v-if="item!=='Undetermined'">
						<td>Your age might be:</td>
						<td>{{ item }}</td>
				</tr>
				<tr v-else>
					<td>Your age is:</td>
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
			const infoArray = inject('array');

			return { infoArray };
		},
	};
</script>

<style>
	table{
		table-layout: fixed;
		width: 100%;
		font-family: Garamond, serif;
	}

	td{
		text-align: center;
		font-size: x-large;
	}

	.spaceStyle{
		margin-bottom: 20px;
	}	
</style>