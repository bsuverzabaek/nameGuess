<template>
	<div>
		<ul>
			<li v-for="(item, index) in infoArray3">
				<div v-if="index%2==0">
					<span v-if="item=='FR'">
						Your nationality might be: France
					</span>
					<span v-else-if="item=='IT'">
						Your nationality might be: Italy
					</span>
					<span v-else-if="item=='ES'">
						Your nationality might be: Spain
					</span>
					<span v-else-if="item=='TR'">
						Your nationality might be: Turkey
					</span>
					<span v-else-if="item=='DE'">
						Your nationality might be: Germany
					</span>
					<span v-else-if="item=='PL'">
						Your nationality might be: Poland
					</span>
					<span v-else-if="item=='GB'">
						Your nationality might be: United Kingdom
					</span>
					<span v-else-if="item=='RU'">
						Your nationality might be: Russia
					</span>
					<span v-else-if="item=='CZ'">
						Your nationality might be: Czech Republic
					</span>
					<span v-else-if="item=='PT'">
						Your nationality might be: Portugal
					</span>
					<span v-else-if="item=='NL'">
						Your nationality might be: Netherlands
					</span>
					<span v-else-if="item=='BE'">
						Your nationality might be: Belgium
					</span>
					<span v-else-if="item=='MA'">
						Your nationality might be: Morocco
					</span>
					<span v-else-if="item=='PH'">
						Your nationality might be: Philippines
					</span>
					<span v-else-if="item=='US'">
						Your nationality might be: United States
					</span>
					<span v-else-if="item=='RO'">
						Your nationality might be: Romania
					</span>
					<span v-else-if="item=='DZ'">
						Your nationality might be: Algeria
					</span>
					<span v-else-if="item=='NG'">
						Your nationality might be: Nigeria
					</span>
					<span v-else-if="item=='CH'">
						Your nationality might be: Switzerland
					</span>
					<span v-else-if="item=='HU'">
						Your nationality might be: Hungary
					</span>
					<span v-else-if="item=='TH'">
						Your nationality might be: Thailand
					</span>
					<span v-else-if="item=='SE'">
						Your nationality might be: Sweden
					</span>
					<span v-else-if="item=='ID'">
						Your nationality might be: Indonesia
					</span>
					<span v-else-if="item=='IN'">
						Your nationality might be: India
					</span>
					<span v-else-if="item=='UA'">
						Your nationality might be: Ukraine
					</span>
					<span v-else-if="item=='MY'">
						Your nationality might be: Malaysia
					</span>
					<span v-else-if="item=='TN'">
						Your nationality might be: Tunisia
					</span>
					<span v-else-if="item=='SA'">
						Your nationality might be: Saudi Arabia
					</span>
					<span v-else-if="item=='GR'">
						Your nationality might be: Greece
					</span>
					<span v-else-if="item=='CI'">
						Your nationality might be: Ivory Coast
					</span>
					<span v-else-if="item=='AT'">
						Your nationality might be: Austria
					</span>
					<span v-else-if="item=='ZA'">
						Your nationality might be: South Africa
					</span>
					<span v-else-if="item=='KR'">
						Your nationality might be: South Korea
					</span>
					<span v-else-if="item=='CN'">
						Your nationality might be: China
					</span>
					<span v-else-if="item=='RS'">
						Your nationality might be: Serbia
					</span>
					<span v-else-if="item=='JP'">
						Your nationality might be: Japan
					</span>
					<span v-else-if="item=='EG'">
						Your nationality might be: Egypt
					</span>
					<span v-else-if="item=='SK'">
						Your nationality might be: Slovakia
					</span>
					<span v-else-if="item=='SN'">
						Your nationality might be: Senegal
					</span>
					<span v-else-if="item=='DK'">
						Your nationality might be: Denmark
					</span>
					<span v-else-if="item=='FI'">
						Your nationality might be: Finland
					</span>
					<span v-else-if="item=='CM'">
						Your nationality might be: Cameroon
					</span>
					<span v-else-if="item=='IR'">
						Your nationality might be: Iran
					</span>
					<span v-else-if="item=='AR'">
						Your nationality might be: Argentina
					</span>
					<span v-else-if="item=='CA'">
						Your nationality might be: Canada
					</span>
					<span v-else-if="item=='SG'">
						Your nationality might be: Singapore
					</span>
					<span v-else-if="item=='PK'">
						Your nationality might be: Pakistan
					</span>
					<span v-else-if="item=='GH'">
						Your nationality might be: Ghana
					</span>
					<span v-else-if="item=='LB'">
						Your nationality might be: Lebanon
					</span>
					<span v-else-if="item=='IE'">
						Your nationality might be: Ireland
					</span>
					<span v-else-if="item=='AO'">
						Your nationality might be: Angola
					</span>
					<span v-else-if="item=='NO'">
						Your nationality might be: Norway
					</span>
					<span v-else-if="item=='BY'">
						Your nationality might be: Belarus
					</span>
					<span v-else-if="item=='BR'">
						Your nationality might be: Brazil
					</span>
					<span v-else-if="item=='MX'">
						Your nationality might be: Mexico
					</span>
					<span v-else-if="item=='CO'">
						Your nationality might be: Colombia
					</span>
					<span v-else-if="item=='KE'">
						Your nationality might be: Kenya
					</span>
					<span v-else-if="item=='CL'">
						Your nationality might be: Chile
					</span>
					<span v-else-if="item=='KW'">
						Your nationality might be: Kuwait
					</span>
					<span v-else-if="item=='AL'">
						Your nationality might be: Albania
					</span>
					<span v-else-if="item=='VE'">
						Your nationality might be: Venezuela
					</span>
					<span v-else-if="item=='RE'">
						Your nationality might be: Reunion
					</span>
					<span v-else-if="item=='BA'">
						Your nationality might be: Bosnia and Herzegovina
					</span>
					<span v-else-if="item=='IL'">
						Your nationality might be: Israel
					</span>
					<span v-else-if="item=='TW'">
						Your nationality might be: Taiwan
					</span>
					<span v-else-if="item=='SI'">
						Your nationality might be: Slovenia
					</span>
					<span v-else-if="item=='KZ'">
						Your nationality might be: Kazakhstan
					</span>
					<span v-else-if="item=='PE'">
						Your nationality might be: Peru
					</span>
					<span v-else-if="item=='AZ'">
						Your nationality might be: Azerbaijan
					</span>
					<span v-else-if="item=='AE'">
						Your nationality might be: United Arab Emirates
					</span>
					<span v-else-if="item=='CY'">
						Your nationality might be: Cyprus
					</span>
					<span v-else-if="item=='LT'">
						Your nationality might be: Lithuania
					</span>
					<span v-else-if="item=='DO'">
						Your nationality might be: Dominican Republic
					</span>
					<span v-else-if="item=='JO'">
						Your nationality might be: Jordan
					</span>
					<span v-else-if="item=='MD'">
						Your nationality might be: Moldova
					</span>
					<span v-else-if="item=='BJ'">
						Your nationality might be: Benin
					</span>
					<span v-else-if="item=='BG'">
						Your nationality might be: Bulgaria
					</span>
					<span v-else-if="item=='CD'">
						Your nationality might be: Democratic Republic of the Congo
					</span>
					<span v-else-if="item=='HR'">
						Your nationality might be: Croatia
					</span>
					<span v-else-if="item=='LV'">
						Your nationality might be: Latvia
					</span>
					<span v-else-if="item=='HK'">
						Your nationality might be: Hong Kong
					</span>
					<span v-else-if="item=='MZ'">
						Your nationality might be: Mozambique
					</span>
					<span v-else-if="item=='AU'">
						Your nationality might be: Australia
					</span>
					<span v-else-if="item=='LU'">
						Your nationality might be: Luxembourg
					</span>
					<span v-else-if="item=='UG'">
						Your nationality might be: Uganda
					</span>
					<span v-else-if="item=='ML'">
						Your nationality might be: Mali
					</span>
					<span v-else-if="item=='BF'">
						Your nationality might be: Burkina Faso
					</span>
					<span v-else-if="item=='MU'">
						Your nationality might be: Mauritius
					</span>
					<span v-else-if="item=='OM'">
						Your nationality might be: Oman
					</span>
					<span v-else-if="item=='TG'">
						Your nationality might be: Togo
					</span>
					<span v-else-if="item=='QA'">
						Your nationality might be: Qatar
					</span>
					<span v-else-if="item=='MK'">
						Your nationality might be: Macedonia
					</span>
					<span v-else-if="item=='MG'">
						Your nationality might be: Madagascar
					</span>
					<span v-else-if="item=='VN'">
						Your nationality might be: Vietnam
					</span>
					<span v-else-if="item=='GA'">
						Your nationality might be: Gabon
					</span>
					<span v-else-if="item=='EE'">
						Your nationality might be: Estonia
					</span>
					<span v-else-if="item=='IQ'">
						Your nationality might be: Iraq
					</span>
					<span v-else-if="item=='MT'">
						Your nationality might be: Malta
					</span>
					<span v-else-if="item=='BH'">
						Your nationality might be: Bahrain
					</span>
					<span v-else-if="item=='TZ'">
						Your nationality might be: Tanzania
					</span>
					<span v-else-if="item=='EC'">
						Your nationality might be: Ecuador
					</span>
					<span v-else-if="item=='GE'">
						Your nationality might be: Georgia
					</span>
					<span v-else-if="item=='AM'">
						Your nationality might be: Armenia
					</span>
					<span v-else-if="item=='SD'">
						Your nationality might be: Sudan
					</span>
					<span v-else-if="item=='ET'">
						Your nationality might be: Ethiopia
					</span>
					<span v-else-if="item=='MM'">
						Your nationality might be: Myanmar
					</span>
					<span v-else-if="item=='ME'">
						Your nationality might be: Montenegro
					</span>
					<span v-else-if="item=='SY'">
						Your nationality might be: Syria
					</span>
					<span v-else-if="item=='UZ'">
						Your nationality might be: Uzbekistan
					</span>
					<span v-else-if="item=='ZW'">
						Your nationality might be: Zimbabwe
					</span>
					<span v-else-if="item=='DJ'">
						Your nationality might be: Djibouti
					</span>
					<span v-else-if="item=='LK'">
						Your nationality might be: Sri Lanka
					</span>
					<span v-else-if="item=='BD'">
						Your nationality might be: Bangladesh
					</span>
					<span v-else-if="item=='SH'">
						Your nationality might be: Saint Helena
					</span>
					<span v-else-if="item=='BW'">
						Your nationality might be: Botswana
					</span>
					<span v-else-if="item=='CV'">
						Your nationality might be: Cape Verde
					</span>
					<span v-else-if="item=='BO'">
						Your nationality might be: Bolivia
					</span>
					<span v-else-if="item=='YE'">
						Your nationality might be: Yemen
					</span>
					<span v-else-if="item=='RW'">
						Your nationality might be: Rwanda
					</span>
					<span v-else-if="item=='IS'">
						Your nationality might be: Iceland
					</span>
					<span v-else-if="item=='LY'">
						Your nationality might be: Libya
					</span>
					<span v-else-if="item=='NE'">
						Your nationality might be: Niger
					</span>
					<span v-else-if="item=='AD'">
						Your nationality might be: Andorra
					</span>
					<span v-else-if="item=='GM'">
						Your nationality might be: Gambia
					</span>
					<span v-else-if="item=='CG'">
						Your nationality might be: Republic of the Congo
					</span>
					<span v-else-if="item=='ZM'">
						Your nationality might be: Zambia
					</span>
					<span v-else-if="item=='AF'">
						Your nationality might be: Afghanistan
					</span>
					<span v-else-if="item=='NA'">
						Your nationality might be: Namibia
					</span>
					<span v-else-if="item=='MR'">
						Your nationality might be: Mauritania
					</span>
					<span v-else-if="item=='UY'">
						Your nationality might be: Uruguay
					</span>
					<span v-else-if="item=='CR'">
						Your nationality might be: Costa Rica
					</span>
					<span v-else-if="item=='KG'">
						Your nationality might be: Kyrgyzstan
					</span>
					<span v-else-if="item=='PA'">
						Your nationality might be: Panama
					</span>
					<span v-else-if="item=='NP'">
						Your nationality might be: Nepal
					</span>
					<span v-else-if="item=='GN'">
						Your nationality might be: Guinea
					</span>
					<span v-else-if="item=='GP'">
						Your nationality might be: Guadeloupe
					</span>
					<span v-else-if="item=='GQ'">
						Your nationality might be: Equatorial Guinea
					</span>
					<span v-else-if="item=='MQ'">
						Your nationality might be: Martinique
					</span>
					<span v-else-if="item=='SC'">
						Your nationality might be: Seychelles
					</span>
					<span v-else-if="item=='CU'">
						Your nationality might be: Cuba
					</span>
					<span v-else-if="item=='NZ'">
						Your nationality might be: New Zealand
					</span>
					<span v-else-if="item=='GT'">
						Your nationality might be: Guatemala
					</span>
					<span v-else-if="item=='MC'">
						Your nationality might be: Monaco
					</span>
					<span v-else-if="item=='MV'">
						Your nationality might be: Maldives
					</span>
					<span v-else-if="item=='MW'">
						Your nationality might be: Malawi
					</span>
					<span v-else-if="item=='SV'">
						Your nationality might be: El Salvador
					</span>
					<span v-else-if="item=='GF'">
						Your nationality might be: French Guiana
					</span>
					<span v-else-if="item=='SL'">
						Your nationality might be: Sierra Leone
					</span>
					<span v-else-if="item=='LR'">
						Your nationality might be: Liberia
					</span>
					<span v-else-if="item=='NI'">
						Your nationality might be: Nicaragua
					</span>
					<span v-else-if="item=='KH'">
						Your nationality might be: Cambodia
					</span>
					<span v-else-if="item=='TJ'">
						Your nationality might be: Tajikistan
					</span>
					<span v-else-if="item=='PR'">
						Your nationality might be: Puerto Rico
					</span>
					<span v-else-if="item=='BI'">
						Your nationality might be: Burundi
					</span>
					<span v-else-if="item=='PY'">
						Your nationality might be: Paraguay
					</span>
					<span v-else-if="item=='KM'">
						Your nationality might be: Comoros
					</span>
					<span v-else-if="item=='LS'">
						Your nationality might be: Lesotho
					</span>
					<span v-else-if="item=='SO'">
						Your nationality might be: Somalia
					</span>
					<span v-else-if="item=='HN'">
						Your nationality might be: Honduras
					</span>
					<span v-else-if="item=='TD'">
						Your nationality might be: Chad
					</span>
					<span v-else-if="item=='GI'">
						Your nationality might be: Gibraltar
					</span>
					<span v-else-if="item=='BN'">
						Your nationality might be: Brunei
					</span>
					<span v-else-if="item=='SM'">
						Your nationality might be: San Marino
					</span>
					<span v-else-if="item=='JE'">
						Your nationality might be: Jersey
					</span>
					<span v-else-if="item=='SZ'">
						Your nationality might be: Swaziland
					</span>
					<span v-else-if="item=='TM'">
						Your nationality might be: Turkmenistan
					</span>
					<span v-else-if="item=='NC'">
						Your nationality might be: New Caledonia
					</span>
					<span v-else-if="item=='MN'">
						Your nationality might be: Mongolia
					</span>
					<span v-else-if="item=='LI'">
						Your nationality might be: Liechtenstein
					</span>
					<span v-else-if="item=='GL'">
						Your nationality might be: Greenland
					</span>
					<span v-else-if="item=='BT'">
						Your nationality might be: Bhutan
					</span>
					<span v-else-if="item=='PF'">
						Your nationality might be: French Polynesia
					</span>
					<span v-else-if="item=='ST'">
						Your nationality might be: Sao Tome and Principe
					</span>
					<span v-else-if="item=='YT'">
						Your nationality might be: Mayotte
					</span>
					<span v-else-if="item=='FO'">
						Your nationality might be: Faroe Islands
					</span>
					<span v-else-if="item=='JM'">
						Your nationality might be: Jamaica
					</span>
					<span v-else-if="item=='HT'">
						Your nationality might be: Haiti
					</span>
					<span v-else-if="item=='BS'">
						Your nationality might be: Bahamas
					</span>
					<span v-else-if="item=='GW'">
						Your nationality might be: Guinea-Bissau
					</span>
					<span v-else-if="item=='FJ'">
						Your nationality might be: Fiji
					</span>
					<span v-else-if="item=='GG'">
						Your nationality might be: Guernsey
					</span>
					<span v-else-if="item=='LA'">
						Your nationality might be: Laos
					</span>
					<span v-else-if="item=='TL'">
						Your nationality might be: East Timor
					</span>
					<span v-else-if="item=='TT'">
						Your nationality might be: Trinidad and Tobago
					</span>
					<span v-else-if="item=='AG'">
						Your nationality might be: Antigua and Barbuda
					</span>
					<span v-else-if="item=='EH'">
						Your nationality might be: Western Sahara
					</span>
					<span v-else-if="item=='CF'">
						Your nationality might be: Central African Republic
					</span>
					<span v-else-if="item=='PW'">
						Your nationality might be: Palau
					</span>
					<span v-else-if="item=='IM'">
						Your nationality might be: Isle of Man
					</span>
					<span v-else-if="item=='AW'">
						Your nationality might be: Aruba
					</span>
					<span v-else-if="item=='BZ'">
						Your nationality might be: Belize
					</span>
					<span v-else-if="item=='AS'">
						Your nationality might be: American Samoa
					</span>
					<span v-else-if="item=='AI'">
						Your nationality might be: Anguilla
					</span>
					<span v-else-if="item=='MP'">
						Your nationality might be: Northern Mariana Islands
					</span>
					<span v-else-if="item=='BM'">
						Your nationality might be: Bermuda
					</span>
					<span v-else-if="item=='ER'">
						Your nationality might be: Eritrea
					</span>
					<span v-else-if="item=='SR'">
						Your nationality might be: Suriname
					</span>
					<span v-else-if="item=='VG'">
						Your nationality might be: British Virgin Islands
					</span>
					<span v-else-if="item=='VI'">
						Your nationality might be: U.S. Virgin Islands
					</span>
					<span v-else-if="item=='GY'">
						Your nationality might be: Guyana
					</span>
					<span v-else-if="item=='BB'">
						Your nationality might be: Barbados
					</span>
					<span v-else-if="item=='MH'">
						Your nationality might be: Marshall Islands
					</span>
					<span v-else-if="item=='MO'">
						Your nationality might be: Macao
					</span>
					<span v-else-if="item=='PG'">
						Your nationality might be: Papua New Guinea
					</span>
					<span v-else-if="item=='KY'">
						Your nationality might be: Cayman Islands
					</span>
					<span v-else-if="item=='KI'">
						Your nationality might be: Kiribati
					</span>
					<span v-else-if="item=='AN'">
						Your nationality might be: Netherlands Antilles
					</span>
					<span v-else-if="item=='CK'">
						Your nationality might be: Cook Islands
					</span>
					<span v-else-if="item=='GU'">
						Your nationality might be: Guam
					</span>
					<span v-else-if="item=='WF'">
						Your nationality might be: Wallis and Futuna
					</span>
					<span v-else-if="item=='PS'">
						Your nationality might be: Palestine
					</span>
					<span v-else-if="item=='TC'">
						Your nationality might be: Turks and Caicos Islands
					</span>
					<span v-else-if="item=='VU'">
						Your nationality might be: Vanuatu
					</span>
					<span v-else-if="item=='LC'">
						Your nationality might be: Saint Lucia
					</span>
					<span v-else-if="item=='TO'">
						Your nationality might be: Tonga
					</span>
					<span v-else-if="item=='CC'">
						Your nationality might be: Cocos Islands
					</span>
					<span v-else-if="item=='WS'">
						Your nationality might be: Samoa
					</span>
					<span v-else-if="item=='GD'">
						Your nationality might be: Grenada
					</span>
					<span v-else-if="item=='VA'">
						Your nationality might be: Vatican
					</span>
					<span v-else-if="item=='IO'">
						Your nationality might be: British Indian Ocean Territory
					</span>
					<span v-else-if="item=='FM'">
						Your nationality might be: Micronesia
					</span>
					<span v-else-if="item=='NU'">
						Your nationality might be: Niue
					</span>
					<span v-else-if="item=='BL'">
						Your nationality might be: Saint Barthelemy
					</span>
					<span v-else-if="item=='KN'">
						Your nationality might be: Saint Kitts and Nevis
					</span>
					<span v-else-if="item=='PM'">
						Your nationality might be: Saint Pierre and Miquelon
					</span>
					<span v-else-if="item=='FK'">
						Your nationality might be: Falkland Islands
					</span>
					<span v-else-if="item=='AQ'">
						Your nationality might be: Antarctica
					</span>
					<span v-else-if="item=='PN'">
						Your nationality might be: Pitcairn
					</span>
					<span v-else-if="item=='MF'">
						Your nationality might be: Saint Martin
					</span>
					<span v-else-if="item=='TV'">
						Your nationality might be: Tuvalu
					</span>
					<span v-else-if="item=='VC'">
						Your nationality might be: Saint Vincent and the Grenadines
					</span>
					<span v-else-if="item=='DM'">
						Your nationality might be: Dominica
					</span>
					<span v-else-if="item=='SB'">
						Your nationality might be: Solomon Islands
					</span>
					<span v-else-if="item=='TK'">
						Your nationality might be: Tokelau
					</span>
					<span v-else-if="item=='NF'">
						Your nationality might be: Norfolk Island
					</span>
					<span v-else-if="item=='CX'">
						Your nationality might be: Christmas Island
					</span>
					<span v-else-if="item=='NR'">
						Your nationality might be: Nauru
					</span>
					<span v-else-if="item=='SJ'">
						Your nationality might be: Svalbard and Jan Mayen
					</span>
					<span v-else-if="item=='MS'">
						Your nationality might be: Montserrat
					</span>
					<span v-else-if="item=='KP'">
						Your nationality might be: North Korea
					</span>
					<span v-else-if="item=='GS'">
						Your nationality might be: South Georgia And Sandwich Isl.
					</span>
					<span v-else-if="item=='BV'">
						Your nationality might be: Bouvet Island
					</span>
					<span v-else>
						Your nationality is: Undetermined
					</span>
				</div>
				<div v-else>
					Probability: {{ (item*100).toFixed(2) }}%
				</div>
			</li>
		</ul>
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