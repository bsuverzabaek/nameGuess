<template>
	<div>
		<table v-for="(item, index) in infoArray3">
			<tbody v-if="index%2==0">
				<tr v-if="item=='FR'">
					<td>Your nationality might be:</td>
					<td>France</td>
				</tr>
				<tr v-else-if="item=='IT'">
					<td>Your nationality might be:</td>
					<td>Italy</td>
				</tr>
				<tr v-else-if="item=='ES'">
					<td>Your nationality might be:</td>
					<td>Spain</td>
				</tr>
				<tr v-else-if="item=='TR'">
					<td>Your nationality might be:</td>
					<td>Turkey</td>
				</tr>
				<tr v-else-if="item=='DE'">
					<td>Your nationality might be:</td>
					<td>Germany</td>
				</tr>
				<tr v-else-if="item=='PL'">
					<td>Your nationality might be:</td>
					<td>Poland</td>
				</tr>
				<tr v-else-if="item=='GB'">
					<td>Your nationality might be:</td>
					<td>United Kingdom</td>
				</tr>
				<tr v-else-if="item=='RU'">
					<td>Your nationality might be:</td>
					<td>Russia</td>
				</tr>
				<tr v-else-if="item=='CZ'">
					<td>Your nationality might be:</td>
					<td>Czech Republic</td>
				</tr>
				<tr v-else-if="item=='PT'">
					<td>Your nationality might be:</td>
					<td>Portugal</td>
				</tr>
				<tr v-else-if="item=='NL'">
					<td>Your nationality might be:</td>
					<td>Netherlands</td>
				</tr>
				<tr v-else-if="item=='BE'">
					<td>Your nationality might be:</td>
					<td>Belgium</td>
				</tr>
				<tr v-else-if="item=='MA'">
					<td>Your nationality might be:</td>
					<td>Morocco</td>
				</tr>
				<tr v-else-if="item=='PH'">
					<td>Your nationality might be:</td>
					<td>Philippines</td>
				</tr>
				<tr v-else-if="item=='US'">
					<td>Your nationality might be:</td>
					<td>United States</td>
				</tr>
				<tr v-else-if="item=='RO'">
					<td>Your nationality might be:</td>
					<td>Romania</td>
				</tr>
				<tr v-else-if="item=='DZ'">
					<td>Your nationality might be:</td>
					<td>Algeria</td>
				</tr>
				<tr v-else-if="item=='NG'">
					<td>Your nationality might be:</td>
					<td>Nigeria</td>
				</tr>
				<tr v-else-if="item=='CH'">
					<td>Your nationality might be:</td>
					<td>Switzerland</td>
				</tr>
				<tr v-else-if="item=='HU'">
					<td>Your nationality might be:</td>
					<td>Hungary</td>
				</tr>
				<tr v-else-if="item=='TH'">
					<td>Your nationality might be:</td>
					<td>Thailand</td>
				</tr>
				<tr v-else-if="item=='SE'">
					<td>Your nationality might be:</td>
					<td>Sweden</td>
				</tr>
				<tr v-else-if="item=='ID'">
					<td>Your nationality might be:</td>
					<td>Indonesia</td>
				</tr>
				<tr v-else-if="item=='IN'">
					<td>Your nationality might be:</td>
					<td>India</td>
				</tr>
				<tr v-else-if="item=='UA'">
					<td>Your nationality might be:</td>
					<td>Ukraine</td>
				</tr>
				<tr v-else-if="item=='MY'">
					<td>Your nationality might be:</td>
					<td>Malaysia</td>
				</tr>
				<tr v-else-if="item=='TN'">
					<td>Your nationality might be:</td>
					<td>Tunisia</td>
				</tr>
				<tr v-else-if="item=='SA'">
					<td>Your nationality might be:</td>
					<td>Saudi Arabia</td>
				</tr>
				<tr v-else-if="item=='GR'">
					<td>Your nationality might be:</td>
					<td>Greece</td>
				</tr>
				<tr v-else-if="item=='CI'">
					<td>Your nationality might be:</td>
					<td>Ivory Coast</td>
				</tr>
				<tr v-else-if="item=='AT'">
					<td>Your nationality might be:</td>
					<td>Austria</td>
				</tr>
				<tr v-else-if="item=='ZA'">
					<td>Your nationality might be:</td>
					<td>South Africa</td>
				</tr>
				<tr v-else-if="item=='KR'">
					<td>Your nationality might be:</td>
					<td>South Korea</td>
				</tr>
				<tr v-else-if="item=='CN'">
					<td>Your nationality might be:</td>
					<td>China</td>
				</tr>
				<tr v-else-if="item=='RS'">
					<td>Your nationality might be:</td>
					<td>Serbia</td>
				</tr>
				<tr v-else-if="item=='JP'">
					<td>Your nationality might be:</td>
					<td>Japan</td>
				</tr>
				<tr v-else-if="item=='EG'">
					<td>Your nationality might be:</td>
					<td>Egypt</td>
				</tr>
				<tr v-else-if="item=='SK'">
					<td>Your nationality might be:</td>
					<td>Slovakia</td>
				</tr>
				<tr v-else-if="item=='SN'">
					<td>Your nationality might be:</td>
					<td>Senegal</td>
				</tr>
				<tr v-else-if="item=='DK'">
					<td>Your nationality might be:</td>
					<td>Denmark</td>
				</tr>
				<tr v-else-if="item=='FI'">
					<td>Your nationality might be:</td>
					<td>Finland</td>
				</tr>
				<tr v-else-if="item=='CM'">
					<td>Your nationality might be:</td>
					<td>Cameroon</td>
				</tr>
				<tr v-else-if="item=='IR'">
					<td>Your nationality might be:</td>
					<td>Iran</td>
				</tr>
				<tr v-else-if="item=='AR'">
					<td>Your nationality might be:</td>
					<td>Argentina</td>
				</tr>
				<tr v-else-if="item=='CA'">
					<td>Your nationality might be:</td>
					<td>Canada</td>
				</tr>
				<tr v-else-if="item=='SG'">
					<td>Your nationality might be:</td>
					<td>Singapore</td>
				</tr>
				<tr v-else-if="item=='PK'">
					<td>Your nationality might be:</td>
					<td>Pakistan</td>
				</tr>
				<tr v-else-if="item=='GH'">
					<td>Your nationality might be:</td>
					<td>Ghana</td>
				</tr>
				<tr v-else-if="item=='LB'">
					<td>Your nationality might be:</td>
					<td>Lebanon</td>
				</tr>
				<tr v-else-if="item=='IE'">
					<td>Your nationality might be:</td>
					<td>Ireland</td>
				</tr>
				<tr v-else-if="item=='AO'">
					<td>Your nationality might be:</td>
					<td>Angola</td>
				</tr>
				<tr v-else-if="item=='NO'">
					<td>Your nationality might be:</td>
					<td>Norway</td>
				</tr>
				<tr v-else-if="item=='BY'">
					<td>Your nationality might be:</td>
					<td>Belarus</td>
				</tr>
				<tr v-else-if="item=='BR'">
					<td>Your nationality might be:</td>
					<td>Brazil</td>
				</tr>
				<tr v-else-if="item=='MX'">
					<td>Your nationality might be:</td>
					<td>Mexico</td>
				</tr>
				<tr v-else-if="item=='CO'">
					<td>Your nationality might be:</td>
					<td>Colombia</td>
				</tr>
				<tr v-else-if="item=='KE'">
					<td>Your nationality might be:</td>
					<td>Kenya</td>
				</tr>
				<tr v-else-if="item=='CL'">
					<td>Your nationality might be:</td>
					<td>Chile</td>
				</tr>
				<tr v-else-if="item=='KW'">
					<td>Your nationality might be:</td>
					<td>Kuwait</td>
				</tr>
				<tr v-else-if="item=='AL'">
					<td>Your nationality might be:</td>
					<td>Albania</td>
				</tr>
				<tr v-else-if="item=='VE'">
					<td>Your nationality might be:</td>
					<td>Venezuela</td>
				</tr>
				<tr v-else-if="item=='RE'">
					<td>Your nationality might be:</td>
					<td>Reunion</td>
				</tr>
				<tr v-else-if="item=='BA'">
					<td>Your nationality might be:</td>
					<td>Bosnia and Herzegovina</td>
				</tr>
				<tr v-else-if="item=='IL'">
					<td>Your nationality might be:</td>
					<td>Israel</td>
				</tr>
				<tr v-else-if="item=='TW'">
					<td>Your nationality might be:</td>
					<td>Taiwan</td>
				</tr>
				<tr v-else-if="item=='SI'">
					<td>Your nationality might be:</td>
					<td>Slovenia</td>
				</tr>
				<tr v-else-if="item=='KZ'">
					<td>Your nationality might be:</td>
					<td>Kazakhstan</td>
				</tr>
				<tr v-else-if="item=='PE'">
					<td>Your nationality might be:</td>
					<td>Peru</td>
				</tr>
				<tr v-else-if="item=='AZ'">
					<td>Your nationality might be:</td>
					<td>Azerbaijan</td>
				</tr>
				<tr v-else-if="item=='AE'">
					<td>Your nationality might be:</td>
					<td>United Arab Emirates</td>
				</tr>
				<tr v-else-if="item=='CY'">
					<td>Your nationality might be:</td>
					<td>Cyprus</td>
				</tr>
				<tr v-else-if="item=='LT'">
					<td>Your nationality might be:</td>
					<td>Lithuania</td>
				</tr>
				<tr v-else-if="item=='DO'">
					<td>Your nationality might be:</td>
					<td>Dominican Republic</td>
				</tr>
				<tr v-else-if="item=='JO'">
					<td>Your nationality might be:</td>
					<td>Jordan</td>
				</tr>
				<tr v-else-if="item=='MD'">
					<td>Your nationality might be:</td>
					<td>Moldova</td>
				</tr>
				<tr v-else-if="item=='BJ'">
					<td>Your nationality might be:</td>
					<td>Benin</td>
				</tr>
				<tr v-else-if="item=='BG'">
					<td>Your nationality might be:</td>
					<td>Bulgaria</td>
				</tr>
				<tr v-else-if="item=='CD'">
					<td>Your nationality might be:</td>
					<td>Democratic Republic of the Congo</td>
				</tr>
				<tr v-else-if="item=='HR'">
					<td>Your nationality might be:</td>
					<td>Croatia</td>
				</tr>
				<tr v-else-if="item=='LV'">
					<td>Your nationality might be:</td>
					<td>Latvia</td>
				</tr>
				<tr v-else-if="item=='HK'">
					<td>Your nationality might be:</td>
					<td>Hong Kong</td>
				</tr>
				<tr v-else-if="item=='MZ'">
					<td>Your nationality might be:</td>
					<td>Mozambique</td>
				</tr>
				<tr v-else-if="item=='AU'">
					<td>Your nationality might be:</td>
					<td>Australia</td>
				</tr>
				<tr v-else-if="item=='LU'">
					<td>Your nationality might be:</td>
					<td>Luxembourg</td>
				</tr>
				<tr v-else-if="item=='UG'">
					<td>Your nationality might be:</td>
					<td>Uganda</td>
				</tr>
				<tr v-else-if="item=='ML'">
					<td>Your nationality might be:</td>
					<td>Mali</td>
				</tr>
				<tr v-else-if="item=='BF'">
					<td>Your nationality might be:</td>
					<td>Burkina Faso</td>
				</tr>
				<tr v-else-if="item=='MU'">
					<td>Your nationality might be:</td>
					<td>Mauritius</td>
				</tr>
				<tr v-else-if="item=='OM'">
					<td>Your nationality might be:</td>
					<td>Oman</td>
				</tr>
				<tr v-else-if="item=='TG'">
					<td>Your nationality might be:</td>
					<td>Togo</td>
				</tr>
				<tr v-else-if="item=='QA'">
					<td>Your nationality might be:</td>
					<td>Qatar</td>
				</tr>
				<tr v-else-if="item=='MK'">
					<td>Your nationality might be:</td>
					<td>Macedonia</td>
				</tr>
				<tr v-else-if="item=='MG'">
					<td>Your nationality might be:</td>
					<td>Madagascar</td>
				</tr>
				<tr v-else-if="item=='VN'">
					<td>Your nationality might be:</td>
					<td>Vietnam</td>
				</tr>
				<tr v-else-if="item=='GA'">
					<td>Your nationality might be:</td>
					<td>Gabon</td>
				</tr>
				<tr v-else-if="item=='EE'">
					<td>Your nationality might be:</td>
					<td>Estonia</td>
				</tr>
				<tr v-else-if="item=='IQ'">
					<td>Your nationality might be:</td>
					<td>Iraq</td>
				</tr>
				<tr v-else-if="item=='MT'">
					<td>Your nationality might be:</td>
					<td>Malta</td>
				</tr>
				<tr v-else-if="item=='BH'">
					<td>Your nationality might be:</td>
					<td>Bahrain</td>
				</tr>
				<tr v-else-if="item=='TZ'">
					<td>Your nationality might be:</td>
					<td>Tanzania</td>
				</tr>
				<tr v-else-if="item=='EC'">
					<td>Your nationality might be:</td>
					<td>Ecuador</td>
				</tr>
				<tr v-else-if="item=='GE'">
					<td>Your nationality might be:</td>
					<td>Georgia</td>
				</tr>
				<tr v-else-if="item=='AM'">
					<td>Your nationality might be:</td>
					<td>Armenia</td>
				</tr>
				<tr v-else-if="item=='SD'">
					<td>Your nationality might be:</td>
					<td>Sudan</td>
				</tr>
				<tr v-else-if="item=='ET'">
					<td>Your nationality might be:</td>
					<td>Ethiopia</td>
				</tr>
				<tr v-else-if="item=='MM'">
					<td>Your nationality might be:</td>
					<td>Myanmar</td>
				</tr>
				<tr v-else-if="item=='ME'">
					<td>Your nationality might be:</td>
					<td>Montenegro</td>
				</tr>
				<tr v-else-if="item=='SY'">
					<td>Your nationality might be:</td>
					<td>Syria</td>
				</tr>
				<tr v-else-if="item=='UZ'">
					<td>Your nationality might be:</td>
					<td>Uzbekistan</td>
				</tr>
				<tr v-else-if="item=='ZW'">
					<td>Your nationality might be:</td>
					<td>Zimbabwe</td>
				</tr>
				<tr v-else-if="item=='DJ'">
					<td>Your nationality might be:</td>
					<td>Djibouti</td>
				</tr>
				<tr v-else-if="item=='LK'">
					<td>Your nationality might be:</td>
					<td>Sri Lanka</td>
				</tr>
				<tr v-else-if="item=='BD'">
					<td>Your nationality might be:</td>
					<td>Bangladesh</td>
				</tr>
				<tr v-else-if="item=='SH'">
					<td>Your nationality might be:</td>
					<td>Saint Helena</td>
				</tr>
				<tr v-else-if="item=='BW'">
					<td>Your nationality might be:</td>
					<td>Botswana</td>
				</tr>
				<tr v-else-if="item=='CV'">
					<td>Your nationality might be:</td>
					<td>Cape Verde</td>
				</tr>
				<tr v-else-if="item=='BO'">
					<td>Your nationality might be:</td>
					<td>Bolivia</td>
				</tr>
				<tr v-else-if="item=='YE'">
					<td>Your nationality might be:</td>
					<td>Yemen</td>
				</tr>
				<tr v-else-if="item=='RW'">
					<td>Your nationality might be:</td>
					<td>Rwanda</td>
				</tr>
				<tr v-else-if="item=='IS'">
					<td>Your nationality might be:</td>
					<td>Iceland</td>
				</tr>
				<tr v-else-if="item=='LY'">
					<td>Your nationality might be:</td>
					<td>Libya</td>
				</tr>
				<tr v-else-if="item=='NE'">
					<td>Your nationality might be:</td>
					<td>Niger</td>
				</tr>
				<tr v-else-if="item=='AD'">
					<td>Your nationality might be:</td>
					<td>Andorra</td>
				</tr>
				<tr v-else-if="item=='GM'">
					<td>Your nationality might be:</td>
					<td>Gambia</td>
				</tr>
				<tr v-else-if="item=='CG'">
					<td>Your nationality might be:</td>
					<td>Republic of the Congo</td>
				</tr>
				<tr v-else-if="item=='ZM'">
					<td>Your nationality might be:</td>
					<td>Zambia</td>
				</tr>
				<tr v-else-if="item=='AF'">
					<td>Your nationality might be:</td>
					<td>Afghanistan</td>
				</tr>
				<tr v-else-if="item=='NA'">
					<td>Your nationality might be:</td>
					<td>Namibia</td>
				</tr>
				<tr v-else-if="item=='MR'">
					<td>Your nationality might be:</td>
					<td>Mauritania</td>
				</tr>
				<tr v-else-if="item=='UY'">
					<td>Your nationality might be:</td>
					<td>Uruguay</td>
				</tr>
				<tr v-else-if="item=='CR'">
					<td>Your nationality might be:</td>
					<td>Costa Rica</td>
				</tr>
				<tr v-else-if="item=='KG'">
					<td>Your nationality might be:</td>
					<td>Kyrgyzstan</td>
				</tr>
				<tr v-else-if="item=='PA'">
					<td>Your nationality might be:</td>
					<td>Panama</td>
				</tr>
				<tr v-else-if="item=='NP'">
					<td>Your nationality might be:</td>
					<td>Nepal</td>
				</tr>
				<tr v-else-if="item=='GN'">
					<td>Your nationality might be:</td>
					<td>Guinea</td>
				</tr>
				<tr v-else-if="item=='GP'">
					<td>Your nationality might be:</td>
					<td>Guadeloupe</td>
				</tr>
				<tr v-else-if="item=='GQ'">
					<td>Your nationality might be:</td>
					<td>Equatorial Guinea</td>
				</tr>
				<tr v-else-if="item=='MQ'">
					<td>Your nationality might be:</td>
					<td>Martinique</td>
				</tr>
				<tr v-else-if="item=='SC'">
					<td>Your nationality might be:</td>
					<td>Seychelles</td>
				</tr>
				<tr v-else-if="item=='CU'">
					<td>Your nationality might be:</td>
					<td>Cuba</td>
				</tr>
				<tr v-else-if="item=='NZ'">
					<td>Your nationality might be:</td>
					<td>New Zealand</td>
				</tr>
				<tr v-else-if="item=='GT'">
					<td>Your nationality might be:</td>
					<td>Guatemala</td>
				</tr>
				<tr v-else-if="item=='MC'">
					<td>Your nationality might be:</td>
					<td>Monaco</td>
				</tr>
				<tr v-else-if="item=='MV'">
					<td>Your nationality might be:</td>
					<td>Maldives</td>
				</tr>
				<tr v-else-if="item=='MW'">
					<td>Your nationality might be:</td>
					<td>Malawi</td>
				</tr>
				<tr v-else-if="item=='SV'">
					<td>Your nationality might be:</td>
					<td>El Salvador</td>
				</tr>
				<tr v-else-if="item=='GF'">
					<td>Your nationality might be:</td>
					<td>French Guiana</td>
				</tr>
				<tr v-else-if="item=='SL'">
					<td>Your nationality might be:</td>
					<td>Sierra Leone</td>
				</tr>
				<tr v-else-if="item=='LR'">
					<td>Your nationality might be:</td>
					<td>Liberia</td>
				</tr>
				<tr v-else-if="item=='NI'">
					<td>Your nationality might be:</td>
					<td>Nicaragua</td>
				</tr>
				<tr v-else-if="item=='KH'">
					<td>Your nationality might be:</td>
					<td>Cambodia</td>
				</tr>
				<tr v-else-if="item=='TJ'">
					<td>Your nationality might be:</td>
					<td>Tajikistan</td>
				</tr>
				<tr v-else-if="item=='PR'">
					<td>Your nationality might be:</td>
					<td>Puerto Rico</td>
				</tr>
				<tr v-else-if="item=='BI'">
					<td>Your nationality might be:</td>
					<td>Burundi</td>
				</tr>
				<tr v-else-if="item=='PY'">
					<td>Your nationality might be:</td>
					<td>Paraguay</td>
				</tr>
				<tr v-else-if="item=='KM'">
					<td>Your nationality might be:</td>
					<td>Comoros</td>
				</tr>
				<tr v-else-if="item=='LS'">
					<td>Your nationality might be:</td>
					<td>Lesotho</td>
				</tr>
				<tr v-else-if="item=='SO'">
					<td>Your nationality might be:</td>
					<td>Somalia</td>
				</tr>
				<tr v-else-if="item=='HN'">
					<td>Your nationality might be:</td>
					<td>Honduras</td>
				</tr>
				<tr v-else-if="item=='TD'">
					<td>Your nationality might be:</td>
					<td>Chad</td>
				</tr>
				<tr v-else-if="item=='GI'">
					<td>Your nationality might be:</td>
					<td>Gibraltar</td>
				</tr>
				<tr v-else-if="item=='BN'">
					<td>Your nationality might be:</td>
					<td>Brunei</td>
				</tr>
				<tr v-else-if="item=='SM'">
					<td>Your nationality might be:</td>
					<td>San Marino</td>
				</tr>
				<tr v-else-if="item=='JE'">
					<td>Your nationality might be:</td>
					<td>Jersey</td>
				</tr>
				<tr v-else-if="item=='SZ'">
					<td>Your nationality might be:</td>
					<td>Swaziland</td>
				</tr>
				<tr v-else-if="item=='TM'">
					<td>Your nationality might be:</td>
					<td>Turkmenistan</td>
				</tr>
				<tr v-else-if="item=='NC'">
					<td>Your nationality might be:</td>
					<td>New Caledonia</td>
				</tr>
				<tr v-else-if="item=='MN'">
					<td>Your nationality might be:</td>
					<td>Mongolia</td>
				</tr>
				<tr v-else-if="item=='LI'">
					<td>Your nationality might be:</td>
					<td>Liechtenstein</td>
				</tr>
				<tr v-else-if="item=='GL'">
					<td>Your nationality might be:</td>
					<td>Greenland</td>
				</tr>
				<tr v-else-if="item=='BT'">
					<td>Your nationality might be:</td>
					<td>Bhutan</td>
				</tr>
				<tr v-else-if="item=='PF'">
					<td>Your nationality might be:</td>
					<td>French Polynesia</td>
				</tr>
				<tr v-else-if="item=='ST'">
					<td>Your nationality might be:</td>
					<td>Sao Tome and Principe</td>
				</tr>
				<tr v-else-if="item=='YT'">
					<td>Your nationality might be:</td>
					<td>Mayotte</td>
				</tr>
				<tr v-else-if="item=='FO'">
					<td>Your nationality might be:</td>
					<td>Faroe Islands</td>
				</tr>
				<tr v-else-if="item=='JM'">
					<td>Your nationality might be:</td>
					<td>Jamaica</td>
				</tr>
				<tr v-else-if="item=='HT'">
					<td>Your nationality might be:</td>
					<td>Haiti</td>
				</tr>
				<tr v-else-if="item=='BS'">
					<td>Your nationality might be:</td>
					<td>Bahamas</td>
				</tr>
				<tr v-else-if="item=='GW'">
					<td>Your nationality might be:</td>
					<td>Guinea-Bissau</td>
				</tr>
				<tr v-else-if="item=='FJ'">
					<td>Your nationality might be:</td>
					<td>Fiji</td>
				</tr>
				<tr v-else-if="item=='GG'">
					<td>Your nationality might be:</td>
					<td>Guernsey</td>
				</tr>
				<tr v-else-if="item=='LA'">
					<td>Your nationality might be:</td>
					<td>Laos</td>
				</tr>
				<tr v-else-if="item=='TL'">
					<td>Your nationality might be:</td>
					<td>East Timor</td>
				</tr>
				<tr v-else-if="item=='TT'">
					<td>Your nationality might be:</td>
					<td>Trinidad and Tobago</td>
				</tr>
				<tr v-else-if="item=='AG'">
					<td>Your nationality might be:</td>
					<td>Antigua and Barbuda</td>
				</tr>
				<tr v-else-if="item=='EH'">
					<td>Your nationality might be:</td>
					<td>Western Sahara</td>
				</tr>
				<tr v-else-if="item=='CF'">
					<td>Your nationality might be:</td>
					<td>Central African Republic</td>
				</tr>
				<tr v-else-if="item=='PW'">
					<td>Your nationality might be:</td>
					<td>Palau</td>
				</tr>
				<tr v-else-if="item=='IM'">
					<td>Your nationality might be:</td>
					<td>Isle of Man</td>
				</tr>
				<tr v-else-if="item=='AW'">
					<td>Your nationality might be:</td>
					<td>Aruba</td>
				</tr>
				<tr v-else-if="item=='BZ'">
					<td>Your nationality might be:</td>
					<td>Belize</td>
				</tr>
				<tr v-else-if="item=='AS'">
					<td>Your nationality might be:</td>
					<td>American Samoa</td>
				</tr>
				<tr v-else-if="item=='AI'">
					<td>Your nationality might be:</td>
					<td>Anguilla</td>
				</tr>
				<tr v-else-if="item=='MP'">
					<td>Your nationality might be:</td>
					<td>Northern Mariana Islands</td>
				</tr>
				<tr v-else-if="item=='BM'">
					<td>Your nationality might be:</td>
					<td>Bermuda</td>
				</tr>
				<tr v-else-if="item=='ER'">
					<td>Your nationality might be:</td>
					<td>Eritrea</td>
				</tr>
				<tr v-else-if="item=='SR'">
					<td>Your nationality might be:</td>
					<td>Suriname</td>
				</tr>
				<tr v-else-if="item=='VG'">
					<td>Your nationality might be:</td>
					<td>British Virgin Islands</td>
				</tr>
				<tr v-else-if="item=='VI'">
					<td>Your nationality might be:</td>
					<td>U.S. Virgin Islands</td>
				</tr>
				<tr v-else-if="item=='GY'">
					<td>Your nationality might be:</td>
					<td>Guyana</td>
				</tr>
				<tr v-else-if="item=='BB'">
					<td>Your nationality might be:</td>
					<td>Barbados</td>
				</tr>
				<tr v-else-if="item=='MH'">
					<td>Your nationality might be:</td>
					<td>Marshall Islands</td>
				</tr>
				<tr v-else-if="item=='MO'">
					<td>Your nationality might be:</td>
					<td>Macao</td>
				</tr>
				<tr v-else-if="item=='PG'">
					<td>Your nationality might be:</td>
					<td>Papua New Guinea</td>
				</tr>
				<tr v-else-if="item=='KY'">
					<td>Your nationality might be:</td>
					<td>Cayman Islands</td>
				</tr>
				<tr v-else-if="item=='KI'">
					<td>Your nationality might be:</td>
					<td>Kiribati</td>
				</tr>
				<tr v-else-if="item=='AN'">
					<td>Your nationality might be:</td>
					<td>Netherlands Antilles</td>
				</tr>
				<tr v-else-if="item=='CK'">
					<td>Your nationality might be:</td>
					<td>Cook Islands</td>
				</tr>
				<tr v-else-if="item=='GU'">
					<td>Your nationality might be:</td>
					<td>Guam</td>
				</tr>
				<tr v-else-if="item=='WF'">
					<td>Your nationality might be:</td>
					<td>Wallis and Futuna</td>
				</tr>
				<tr v-else-if="item=='PS'">
					<td>Your nationality might be:</td>
					<td>Palestine</td>
				</tr>
				<tr v-else-if="item=='TC'">
					<td>Your nationality might be:</td>
					<td>Turks and Caicos Islands</td>
				</tr>
				<tr v-else-if="item=='VU'">
					<td>Your nationality might be:</td>
					<td>Vanuatu</td>
				</tr>
				<tr v-else-if="item=='LC'">
					<td>Your nationality might be:</td>
					<td>Saint Lucia</td>
				</tr>
				<tr v-else-if="item=='TO'">
					<td>Your nationality might be:</td>
					<td>Tonga</td>
				</tr>
				<tr v-else-if="item=='CC'">
					<td>Your nationality might be:</td>
					<td>Cocos Islands</td>
				</tr>
				<tr v-else-if="item=='WS'">
					<td>Your nationality might be:</td>
					<td>Samoa</td>
				</tr>
				<tr v-else-if="item=='GD'">
					<td>Your nationality might be:</td>
					<td>Grenada</td>
				</tr>
				<tr v-else-if="item=='VA'">
					<td>Your nationality might be:</td>
					<td>Vatican</td>
				</tr>
				<tr v-else-if="item=='IO'">
					<td>Your nationality might be:</td>
					<td>British Indian Ocean Territory</td>
				</tr>
				<tr v-else-if="item=='FM'">
					<td>Your nationality might be:</td>
					<td>Micronesia</td>
				</tr>
				<tr v-else-if="item=='NU'">
					<td>Your nationality might be:</td>
					<td>Niue</td>
				</tr>
				<tr v-else-if="item=='BL'">
					<td>Your nationality might be:</td>
					<td>Saint Barthelemy</td>
				</tr>
				<tr v-else-if="item=='KN'">
					<td>Your nationality might be:</td>
					<td>Saint Kitts and Nevis</td>
				</tr>
				<tr v-else-if="item=='PM'">
					<td>Your nationality might be:</td>
					<td>Saint Pierre and Miquelon</td>
				</tr>
				<tr v-else-if="item=='FK'">
					<td>Your nationality might be:</td>
					<td>Falkland Islands</td>
				</tr>
				<tr v-else-if="item=='AQ'">
					<td>Your nationality might be:</td>
					<td>Antarctica</td>
				</tr>
				<tr v-else-if="item=='PN'">
					<td>Your nationality might be:</td>
					<td>Pitcairn</td>
				</tr>
				<tr v-else-if="item=='MF'">
					<td>Your nationality might be:</td>
					<td>Saint Martin</td>
				</tr>
				<tr v-else-if="item=='TV'">
					<td>Your nationality might be:</td>
					<td>Tuvalu</td>
				</tr>
				<tr v-else-if="item=='VC'">
					<td>Your nationality might be:</td>
					<td>Saint Vincent and the Grenadines</td>
				</tr>
				<tr v-else-if="item=='DM'">
					<td>Your nationality might be:</td>
					<td>Dominica</td>
				</tr>
				<tr v-else-if="item=='SB'">
					<td>Your nationality might be:</td>
					<td>Solomon Islands</td>
				</tr>
				<tr v-else-if="item=='TK'">
					<td>Your nationality might be:</td>
					<td>Tokelau</td>
				</tr>
				<tr v-else-if="item=='NF'">
					<td>Your nationality might be:</td>
					<td>Norfolk Island</td>
				</tr>
				<tr v-else-if="item=='CX'">
					<td>Your nationality might be:</td>
					<td>Christmas Island</td>
				</tr>
				<tr v-else-if="item=='NR'">
					<td>Your nationality might be:</td>
					<td>Nauru</td>
				</tr>
				<tr v-else-if="item=='SJ'">
					<td>Your nationality might be:</td>
					<td>Svalbard and Jan Mayen</td>
				</tr>
				<tr v-else-if="item=='MS'">
					<td>Your nationality might be:</td>
					<td>Montserrat</td>
				</tr>
				<tr v-else-if="item=='KP'">
					<td>Your nationality might be:</td>
					<td>North Korea</td>
				</tr>
				<tr v-else-if="item=='GS'">
					<td>Your nationality might be:</td>
					<td>South Georgia and Sandwich Isl.</td>
				</tr>
				<tr v-else-if="item=='BV'">
					<td>Your nationality might be:</td>
					<td>Bouvet Island</td>
				</tr>
				<tr v-else>
					<td>Your nationality is:</td>
					<td>Undetermined</td>
				</tr>
			</tbody>
			<tbody v-else>
				<tr>
					<td class="probStyle">
						Probability:
						<div class=spaceStyle></div>
					</td>
					<td class="probStyle">
						{{ (item*100).toFixed(2) }}%
						<div class=spaceStyle></div>
					</td>
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
			const infoArray3 = inject('array3');

			return { infoArray3 };
		},
	};
</script>

<style>

</style>