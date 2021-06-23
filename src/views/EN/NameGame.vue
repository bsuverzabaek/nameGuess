<template>
	<form @submit.prevent="addName(),mainName()" id="formStyle">
		<input
			v-model.trim.lazy="newName" 
			placeholder="Input Name Here"
			type="text"
		/>

		<button type="submit">
			Guess
		</button>
	</form>  

	<div v-if="isLoading" id="loadStyle">
		Loading ...
	</div>
	<div v-else>
		<div class="textStyle">
			<h2>
				{{ inName.charAt(0).toUpperCase() + inName.slice(1) }}
			</h2>
		</div>

		<ageGuess />
		<genderGuess />
		<nationGuess />
	</div>
</template>

<script>
	import { reactive, onMounted, ref, computed, provide } from 'vue';
	import axios from 'axios';
	import ageGuess from "./ageGuess";
	import genderGuess from "./genderGuess";
	import nationGuess from "./nationGuess";

	export default {
		components: { ageGuess, genderGuess, nationGuess },

		setup(){
			const newName = ref("");
			const isLoading = ref(false);
			const inName = ref("");

			const state = reactive({
				info: [],
				info2: [],
				info3: [],
			});

			function mainName() {
				inName.value = newName.value;
			}

			async function addName() {
				if(newName.value!==""){
					state.info.length = 0;
					state.info2.length = 0;
					state.info3.length = 0;

					isLoading.value = true;
					
					let res = await axios.get('https://api.agify.io?name=' + newName.value);

					if(res.data.age===null){
						state.info.push("Undetermined");
						state.info2.push("Undetermined");
						state.info3.push("Undetermined");
					}else{
						state.info.push(res.data.age);

						let res2 = await axios.get('https://api.genderize.io?name=' + newName.value);
						state.info2.push(res2.data.gender);
						state.info2.push(res2.data.probability);

						let res3 = await axios.get('https://api.nationalize.io?name=' + newName.value);

						for(var i=0;i<res3.data.country.length;i++){
							if(res3.data.country[i].country_id===""){
								continue;
							}

							state.info3.push(res3.data.country[i].country_id);
							state.info3.push(res3.data.country[i].probability);
						}

						if(state.info3.length===0){
							state.info3.push("Undetermined");
						}
					}

					isLoading.value = false;
				}
			}

			provide('array',state.info);
			provide('array2',state.info2);
			provide('array3',state.info3);

			return { state, newName, addName, isLoading, mainName, inName };
		},
	};
</script>

<style>
	body{
		background-color: #BDB76B;
	}

	#formStyle{
		margin-top: 10px;
		text-align: center;
		font-family: Garamond, serif;
	}

	input[type=text]{
		padding: 6px 10px;
		box-sizing: border-box;
	}

	input[type=text]:focus{
		outline: none;
	}

	button{
		background-color: white;
		color: black;
		padding: 6px 10px;
		transition-duration: 0.3s;
	}

	button:hover{
		background-color: #555555;
		color: white;
	}

	#loadStyle{
		font-family: Garamond, serif;
		text-align: center;
		margin-top: 15px;
	}
</style>