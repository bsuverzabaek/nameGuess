<template>
	<div>
		<table v-for="(item, index) in infoArray3" class="tableStyle">
			<tbody v-if="index%2==0">
				<tr v-if="item=='FR'">
					<td class="tdStyle">推測された国：</td>
					<td class="tdStyle">フランス</td>
				</tr>
				<tr v-else-if="item=='IT'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">イタリア</td>
				</tr>
				<tr v-else-if="item=='ES'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">スペイン</td>
				</tr>
				<tr v-else-if="item=='TR'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">トルコ</td>
				</tr>
				<tr v-else-if="item=='DE'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ドイツ</td>
				</tr>
				<tr v-else-if="item=='PL'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ポーランド</td>
				</tr>
				<tr v-else-if="item=='GB'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">イギリス</td>
				</tr>
				<tr v-else-if="item=='RU'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ロシア</td>
				</tr>
				<tr v-else-if="item=='CZ'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">チェコ</td>
				</tr>
				<tr v-else-if="item=='PT'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ポルトガル</td>
				</tr>
				<tr v-else-if="item=='NL'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">オランダ</td>
				</tr>
				<tr v-else-if="item=='BE'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ベルギー</td>
				</tr>
				<tr v-else-if="item=='MA'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">モロッコ</td>
				</tr>
				<tr v-else-if="item=='PH'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">フィリピン</td>
				</tr>
				<tr v-else-if="item=='US'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">アメリカ</td>
				</tr>
				<tr v-else-if="item=='RO'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ルーマニア</td>
				</tr>
				<tr v-else-if="item=='DZ'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">アルジェリア</td>
				</tr>
				<tr v-else-if="item=='NG'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ナイジェリア</td>
				</tr>
				<tr v-else-if="item=='CH'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">スイス</td>
				</tr>
				<tr v-else-if="item=='HU'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ハンガリー</td>
				</tr>
				<tr v-else-if="item=='TH'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">タイ</td>
				</tr>
				<tr v-else-if="item=='SE'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">スウェーデン</td>
				</tr>
				<tr v-else-if="item=='ID'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">インドネシア</td>
				</tr>
				<tr v-else-if="item=='IN'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">インド</td>
				</tr>
				<tr v-else-if="item=='UA'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ウクライナ</td>
				</tr>
				<tr v-else-if="item=='MY'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">マレーシア</td>
				</tr>
				<tr v-else-if="item=='TN'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">チュニジア</td>
				</tr>
				<tr v-else-if="item=='SA'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">サウジアラビア</td>
				</tr>
				<tr v-else-if="item=='GR'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ギリシャ</td>
				</tr>
				<tr v-else-if="item=='CI'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">コートジボワール</td>
				</tr>
				<tr v-else-if="item=='AT'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">オーストリア</td>
				</tr>
				<tr v-else-if="item=='ZA'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">南アフリカ</td>
				</tr>
				<tr v-else-if="item=='KR'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">韓国</td>
				</tr>
				<tr v-else-if="item=='CN'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">中国</td>
				</tr>
				<tr v-else-if="item=='RS'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">セルビア</td>
				</tr>
				<tr v-else-if="item=='JP'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">日本</td>
				</tr>
				<tr v-else-if="item=='EG'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">エジプト</td>
				</tr>
				<tr v-else-if="item=='SK'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">スロバキア</td>
				</tr>
				<tr v-else-if="item=='SN'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">セネガル</td>
				</tr>
				<tr v-else-if="item=='DK'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">デンマーク</td>
				</tr>
				<tr v-else-if="item=='FI'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">フィンランド</td>
				</tr>
				<tr v-else-if="item=='CM'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">カメルーン</td>
				</tr>
				<tr v-else-if="item=='IR'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">イラン</td>
				</tr>
				<tr v-else-if="item=='AR'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">アルゼンチン</td>
				</tr>
				<tr v-else-if="item=='CA'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">カナダ</td>
				</tr>
				<tr v-else-if="item=='SG'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">シンガポール</td>
				</tr>
				<tr v-else-if="item=='PK'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">パキスタン</td>
				</tr>
				<tr v-else-if="item=='GH'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ガーナ</td>
				</tr>
				<tr v-else-if="item=='LB'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">レバノン</td>
				</tr>
				<tr v-else-if="item=='IE'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">アイルランド</td>
				</tr>
				<tr v-else-if="item=='AO'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">アンゴラ</td>
				</tr>
				<tr v-else-if="item=='NO'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ノルウェー</td>
				</tr>
				<tr v-else-if="item=='BY'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ベラルーシ</td>
				</tr>
				<tr v-else-if="item=='BR'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ブラジル</td>
				</tr>
				<tr v-else-if="item=='MX'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">メキシコ</td>
				</tr>
				<tr v-else-if="item=='CO'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">コロンビア</td>
				</tr>
				<tr v-else-if="item=='KE'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ケニア</td>
				</tr>
				<tr v-else-if="item=='CL'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">チリ</td>
				</tr>
				<tr v-else-if="item=='KW'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">クウェート</td>
				</tr>
				<tr v-else-if="item=='AL'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">アルバニア</td>
				</tr>
				<tr v-else-if="item=='VE'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ベネズエラ</td>
				</tr>
				<tr v-else-if="item=='RE'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">レユニオン</td>
				</tr>
				<tr v-else-if="item=='BA'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ボスニア・ヘルツェゴビナ</td>
				</tr>
				<tr v-else-if="item=='IL'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">イスラエル</td>
				</tr>
				<tr v-else-if="item=='TW'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">台湾</td>
				</tr>
				<tr v-else-if="item=='SI'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">スロベニア</td>
				</tr>
				<tr v-else-if="item=='KZ'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">カザフスタン</td>
				</tr>
				<tr v-else-if="item=='PE'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ペルー</td>
				</tr>
				<tr v-else-if="item=='AZ'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">アゼルバイジャン</td>
				</tr>
				<tr v-else-if="item=='AE'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">アラブ首長国連邦</td>
				</tr>
				<tr v-else-if="item=='CY'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">キプロス</td>
				</tr>
				<tr v-else-if="item=='LT'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">リトアニア</td>
				</tr>
				<tr v-else-if="item=='DO'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ドミニカ共和国</td>
				</tr>
				<tr v-else-if="item=='JO'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ヨルダン</td>
				</tr>
				<tr v-else-if="item=='MD'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">モルドバ</td>
				</tr>
				<tr v-else-if="item=='BJ'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ベナン</td>
				</tr>
				<tr v-else-if="item=='BG'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ブルガリア</td>
				</tr>
				<tr v-else-if="item=='CD'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">コンゴ民主共和国</td>
				</tr>
				<tr v-else-if="item=='HR'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">クロアチア</td>
				</tr>
				<tr v-else-if="item=='LV'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ラトビア</td>
				</tr>
				<tr v-else-if="item=='HK'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">香港</td>
				</tr>
				<tr v-else-if="item=='MZ'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">モザンビーク</td>
				</tr>
				<tr v-else-if="item=='AU'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">オーストラリア</td>
				</tr>
				<tr v-else-if="item=='LU'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ルクセンブルク</td>
				</tr>
				<tr v-else-if="item=='UG'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ウガンダ</td>
				</tr>
				<tr v-else-if="item=='ML'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">マリ</td>
				</tr>
				<tr v-else-if="item=='BF'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ブルキナファソ</td>
				</tr>
				<tr v-else-if="item=='MU'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">モーリシャス</td>
				</tr>
				<tr v-else-if="item=='OM'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">オマーン</td>
				</tr>
				<tr v-else-if="item=='TG'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">トーゴ</td>
				</tr>
				<tr v-else-if="item=='QA'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">カタール</td>
				</tr>
				<tr v-else-if="item=='MK'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">マケドニア</td>
				</tr>
				<tr v-else-if="item=='MG'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">マダガスカル</td>
				</tr>
				<tr v-else-if="item=='VN'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ベトナム</td>
				</tr>
				<tr v-else-if="item=='GA'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ガボン</td>
				</tr>
				<tr v-else-if="item=='EE'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">エストニア</td>
				</tr>
				<tr v-else-if="item=='IQ'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">イラク</td>
				</tr>
				<tr v-else-if="item=='MT'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">マルタ</td>
				</tr>
				<tr v-else-if="item=='BH'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">バーレーン</td>
				</tr>
				<tr v-else-if="item=='TZ'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">タンザニア</td>
				</tr>
				<tr v-else-if="item=='EC'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">エクアドル</td>
				</tr>
				<tr v-else-if="item=='GE'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">グルジア</td>
				</tr>
				<tr v-else-if="item=='AM'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">アルメニア</td>
				</tr>
				<tr v-else-if="item=='SD'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">スーダン</td>
				</tr>
				<tr v-else-if="item=='ET'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">エチオピア</td>
				</tr>
				<tr v-else-if="item=='MM'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ミャンマー</td>
				</tr>
				<tr v-else-if="item=='ME'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">モンテネグロ</td>
				</tr>
				<tr v-else-if="item=='SY'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">シリア</td>
				</tr>
				<tr v-else-if="item=='UZ'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ウズベキスタン</td>
				</tr>
				<tr v-else-if="item=='ZW'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ジンバブエ</td>
				</tr>
				<tr v-else-if="item=='DJ'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ジブチ</td>
				</tr>
				<tr v-else-if="item=='LK'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">スリランカ</td>
				</tr>
				<tr v-else-if="item=='BD'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">バングラデシュ</td>
				</tr>
				<tr v-else-if="item=='SH'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">セントヘレナ</td>
				</tr>
				<tr v-else-if="item=='BW'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ボツワナ</td>
				</tr>
				<tr v-else-if="item=='CV'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">カーボベルデ</td>
				</tr>
				<tr v-else-if="item=='BO'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ボリビア</td>
				</tr>
				<tr v-else-if="item=='YE'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">イエメン</td>
				</tr>
				<tr v-else-if="item=='RW'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ルワンダ</td>
				</tr>
				<tr v-else-if="item=='IS'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">アイスランド</td>
				</tr>
				<tr v-else-if="item=='LY'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">リビア</td>
				</tr>
				<tr v-else-if="item=='NE'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ニジェール</td>
				</tr>
				<tr v-else-if="item=='AD'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">アンドラ</td>
				</tr>
				<tr v-else-if="item=='GM'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ガンビア</td>
				</tr>
				<tr v-else-if="item=='CG'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">コンゴ共和国</td>
				</tr>
				<tr v-else-if="item=='ZM'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ザンビア</td>
				</tr>
				<tr v-else-if="item=='AF'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">アフガニスタン</td>
				</tr>
				<tr v-else-if="item=='NA'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ナミビア</td>
				</tr>
				<tr v-else-if="item=='MR'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">モーリタニア</td>
				</tr>
				<tr v-else-if="item=='UY'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ウルグアイ</td>
				</tr>
				<tr v-else-if="item=='CR'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">コスタリカ</td>
				</tr>
				<tr v-else-if="item=='KG'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">キルギス</td>
				</tr>
				<tr v-else-if="item=='PA'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">パナマ</td>
				</tr>
				<tr v-else-if="item=='NP'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ネパール</td>
				</tr>
				<tr v-else-if="item=='GN'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ギニア</td>
				</tr>
				<tr v-else-if="item=='GP'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">グアドループ</td>
				</tr>
				<tr v-else-if="item=='GQ'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">赤道ギニア</td>
				</tr>
				<tr v-else-if="item=='MQ'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">マルティニク</td>
				</tr>
				<tr v-else-if="item=='SC'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">セイシェル</td>
				</tr>
				<tr v-else-if="item=='CU'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">キューバ</td>
				</tr>
				<tr v-else-if="item=='NZ'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ニュージーランド</td>
				</tr>
				<tr v-else-if="item=='GT'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">グアテマラ</td>
				</tr>
				<tr v-else-if="item=='MC'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">モナコ</td>
				</tr>
				<tr v-else-if="item=='MV'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">マルディブ</td>
				</tr>
				<tr v-else-if="item=='MW'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">マラウイ</td>
				</tr>
				<tr v-else-if="item=='SV'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">エルサルバドル</td>
				</tr>
				<tr v-else-if="item=='GF'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">フランス領ギアナ</td>
				</tr>
				<tr v-else-if="item=='SL'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">シエラレオネ</td>
				</tr>
				<tr v-else-if="item=='LR'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">リベリア</td>
				</tr>
				<tr v-else-if="item=='NI'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ニカラグア</td>
				</tr>
				<tr v-else-if="item=='KH'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">カンボジア</td>
				</tr>
				<tr v-else-if="item=='TJ'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">タジキスタン</td>
				</tr>
				<tr v-else-if="item=='PR'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">プエルトリコ</td>
				</tr>
				<tr v-else-if="item=='BI'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ブルンジ</td>
				</tr>
				<tr v-else-if="item=='PY'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">パラグアイ</td>
				</tr>
				<tr v-else-if="item=='KM'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">コモロ</td>
				</tr>
				<tr v-else-if="item=='LS'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">レソト</td>
				</tr>
				<tr v-else-if="item=='SO'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ソマリア</td>
				</tr>
				<tr v-else-if="item=='HN'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ホンジェラス</td>
				</tr>
				<tr v-else-if="item=='TD'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">チャド</td>
				</tr>
				<tr v-else-if="item=='GI'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ジブラルタル</td>
				</tr>
				<tr v-else-if="item=='BN'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ブルネイ</td>
				</tr>
				<tr v-else-if="item=='SM'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">サンマリノ</td>
				</tr>
				<tr v-else-if="item=='JE'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ジャージー</td>
				</tr>
				<tr v-else-if="item=='SZ'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">スワジランド</td>
				</tr>
				<tr v-else-if="item=='TM'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">トルクメニスタン</td>
				</tr>
				<tr v-else-if="item=='NC'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ニューカレドニア</td>
				</tr>
				<tr v-else-if="item=='MN'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">モンゴル国</td>
				</tr>
				<tr v-else-if="item=='LI'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">リヒテンシュタイン</td>
				</tr>
				<tr v-else-if="item=='GL'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">グリーンランド</td>
				</tr>
				<tr v-else-if="item=='BT'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ブータン</td>
				</tr>
				<tr v-else-if="item=='PF'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">フランス領ポリネシア</td>
				</tr>
				<tr v-else-if="item=='ST'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">サントメプリンシペ</td>
				</tr>
				<tr v-else-if="item=='YT'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">マヨット</td>
				</tr>
				<tr v-else-if="item=='FO'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">フェロー諸島</td>
				</tr>
				<tr v-else-if="item=='JM'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ジャマイカ</td>
				</tr>
				<tr v-else-if="item=='HT'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ハイチ</td>
				</tr>
				<tr v-else-if="item=='BS'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">バハマ</td>
				</tr>
				<tr v-else-if="item=='GW'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ギニアビサウ</td>
				</tr>
				<tr v-else-if="item=='FJ'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">フィジー</td>
				</tr>
				<tr v-else-if="item=='GG'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ガーンジー</td>
				</tr>
				<tr v-else-if="item=='LA'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ラオス</td>
				</tr>
				<tr v-else-if="item=='TL'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">東ティモール</td>
				</tr>
				<tr v-else-if="item=='TT'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">トリニダードトバゴ</td>
				</tr>
				<tr v-else-if="item=='AG'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">アンティグアバーブーダ</td>
				</tr>
				<tr v-else-if="item=='EH'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">西サハラ</td>
				</tr>
				<tr v-else-if="item=='CF'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">中央アフリカ共和国</td>
				</tr>
				<tr v-else-if="item=='PW'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">パラオ</td>
				</tr>
				<tr v-else-if="item=='IM'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">マン島</td>
				</tr>
				<tr v-else-if="item=='AW'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">アルバー</td>
				</tr>
				<tr v-else-if="item=='BZ'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ベリーズ</td>
				</tr>
				<tr v-else-if="item=='AS'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">アメリカ領サモア</td>
				</tr>
				<tr v-else-if="item=='AI'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">アンギラ</td>
				</tr>
				<tr v-else-if="item=='MP'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">北マリアナ諸島</td>
				</tr>
				<tr v-else-if="item=='BM'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">バミューダ</td>
				</tr>
				<tr v-else-if="item=='ER'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">エリトリア</td>
				</tr>
				<tr v-else-if="item=='SR'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">スリナム</td>
				</tr>
				<tr v-else-if="item=='VG'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">イギリス領ヴァージン諸島</td>
				</tr>
				<tr v-else-if="item=='VI'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">アメリカ領ヴァージン諸島</td>
				</tr>
				<tr v-else-if="item=='GY'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ガイアナ</td>
				</tr>
				<tr v-else-if="item=='BB'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">バルバドス</td>
				</tr>
				<tr v-else-if="item=='MH'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">マーシャル諸島</td>
				</tr>
				<tr v-else-if="item=='MO'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">マカオ</td>
				</tr>
				<tr v-else-if="item=='PG'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">パプアニューギニア</td>
				</tr>
				<tr v-else-if="item=='KY'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ケーマン諸島</td>
				</tr>
				<tr v-else-if="item=='KI'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">キリバス</td>
				</tr>
				<tr v-else-if="item=='AN'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">オランダ領アンティル</td>
				</tr>
				<tr v-else-if="item=='CK'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">クック諸島</td>
				</tr>
				<tr v-else-if="item=='GU'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">グアム</td>
				</tr>
				<tr v-else-if="item=='WF'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ウォリス・フツナ</td>
				</tr>
				<tr v-else-if="item=='PS'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">パレスチナ</td>
				</tr>
				<tr v-else-if="item=='TC'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">タークスカイコス諸島</td>
				</tr>
				<tr v-else-if="item=='VU'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">バヌアツ</td>
				</tr>
				<tr v-else-if="item=='LC'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">セントルシア</td>
				</tr>
				<tr v-else-if="item=='TO'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">トンガ</td>
				</tr>
				<tr v-else-if="item=='CC'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ココス諸島</td>
				</tr>
				<tr v-else-if="item=='WS'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">サモア</td>
				</tr>
				<tr v-else-if="item=='GD'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">グレナダ</td>
				</tr>
				<tr v-else-if="item=='VA'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">バチカン</td>
				</tr>
				<tr v-else-if="item=='IO'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">イギリス領インド洋地域</td>
				</tr>
				<tr v-else-if="item=='FM'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ミクロネシア</td>
				</tr>
				<tr v-else-if="item=='NU'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ニウエ</td>
				</tr>
				<tr v-else-if="item=='BL'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">サン・バルテルミー島</td>
				</tr>
				<tr v-else-if="item=='KN'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">セントクリストファーネイビス</td>
				</tr>
				<tr v-else-if="item=='PM'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">サンピエール島・ミクロン島</td>
				</tr>
				<tr v-else-if="item=='FK'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">フォークランド諸島</td>
				</tr>
				<tr v-else-if="item=='AQ'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">南極</td>
				</tr>
				<tr v-else-if="item=='PN'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ピトケアン</td>
				</tr>
				<tr v-else-if="item=='MF'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">セント・マーチン島</td>
				</tr>
				<tr v-else-if="item=='TV'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ツバル</td>
				</tr>
				<tr v-else-if="item=='VC'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">セントビンセントおよびグレナディーン諸島</td>
				</tr>
				<tr v-else-if="item=='DM'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ドミニカ国</td>
				</tr>
				<tr v-else-if="item=='SB'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ソロモン諸島</td>
				</tr>
				<tr v-else-if="item=='TK'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">トケラウ</td>
				</tr>
				<tr v-else-if="item=='NF'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ノーフォーク島</td>
				</tr>
				<tr v-else-if="item=='CX'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">クリスマス島</td>
				</tr>
				<tr v-else-if="item=='NR'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ナウル</td>
				</tr>
				<tr v-else-if="item=='SJ'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">スヴァールバル諸島およびヤンマイエン島</td>
				</tr>
				<tr v-else-if="item=='MS'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">モントセラト</td>
				</tr>
				<tr v-else-if="item=='KP'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">北朝鮮</td>
				</tr>
				<tr v-else-if="item=='GS'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">サウスジョージア・サウスサンドウィッチ諸島</td>
				</tr>
				<tr v-else-if="item=='BV'">
					<td class="tdStyle">推測された国籍：</td>
					<td class="tdStyle">ブーべ島</td>
				</tr>
				<tr v-else>
					<td class="tdStyle">国籍は</td>
					<td class="tdStyle">不明</td>
				</tr>
			</tbody>
			<tbody v-else>
				<tr>
					<td class="probStyle">
						確率
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