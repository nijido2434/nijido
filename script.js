// 質問の配列
const questions = [
  { text: "あなたは推しの配信スケジュールをチェックして、できるだけリアルタイムで見ようとする。", category: "a" },
  { text: "あなたは推しのファンアート等を発信するタイプだ。", category: "a" },
  { text: "推しの影響で新たなコンテンツに興味を持ったり挑戦したりする。", category: "a" },
  { text: "配信を見る際、コメントを送ったりできるだけ参加したりするタイプだ。", category: "a" },
  { text: "あなたは推しの誕生日や記念日を特別な日だと意識し、何らかの形で祝うことがある。", category: "a" },
  { text: "あなたは配信を見ていて、ストーリーや背景、演出に注目することが多い。", category: "b" },
  { text: "過去の配信や関連する情報を調べて、推しのことをより深く知ろうとする。", category: "b" },
  { text: "推しの配信は切り抜きよりも配信をフルで見ようとするタイプだ。", category: "b" },
  { text: "配信を見る際に、考察や解釈をするのが好きだ。", category: "b" },
  { text: "リアルタイムだけではなくアーカイブも見返すことがよくある。", category: "b" },
  { text: "あなたは推しのグッズやボイスをよく購入する。", category: "c" },
  { text: "イベントやライブがあればできるだけ参戦したい。", category: "c" },
  { text: "メンバーシップやスパチャで応援することがよくある。", category: "c" },
  { text: "あなたは推しの魅力を広めるために、友人に紹介したりSNS等で話題にすることがある。", category: "c" },
  { text: "推しのために使う金額を考えることがあるが、つい予算以上に応援してしまうことがある。", category: "c" },
  { text: "あなたはリスナー同士の交流を楽しむことが多い。", category: "d" },
  { text: "友達と推しの話をして盛り上がったり、一緒にイベントに参加したりしたい。", category: "d" },
  { text: "あなたはファンイベントや応援企画に積極的に参加したいと思う。", category: "d" },
  { text: "配信を見るときコメント欄も含めて楽しむことが多い。", category: "d" },
  { text: "推し単体の配信よりも、ユニットやコラボ配信のほうが好きだ、またはよく見る。", category: "d" },
];

// カテゴリーごとのスコア
const categoryScores = {
  a: 0,
  b: 0,
  c: 0,
  d: 0,
};

//各タイプの名称
const typeName = {
  ADSC: "戌亥とこタイプ",
  ADSI: "竜胆尊タイプ",
  ADEC: "でびでび・でびるタイプ",
  ADEI: "文野環タイプ",
  PDSC: "壱百満天原サロメタイプ",
  PDSI: "健屋花那タイプ",
  PDEC: "イブラヒムタイプ",
  PDEI: "社築タイプ",
  PLSC: "不破湊タイプ",
  PLSI: "叶タイプ",
  PLEC: "本間ひまわりタイプ",
  PLEI: "葛葉タイプ",
  ALEC: "笹木咲タイプ",
  ALSI: "星川タイプ",
  ALEI: "剣持タイプ",
  ALSC: "アンジュタイプ",
};
// 各タイプの詳細
const typeDescriptions = {
  ADSC: `ADSCタイプのあなたの世界は、まさに推しを中心に回っている！
        新しい情報が出れば即チェック、グッズ情報も逃さずキャッチし、イベントがあれば予定を調整してでも参加！周りからのあなたが持っている推しの情報の信頼度も抜群！
        そんなあなたの行動力には、周りの友達も一目置いているはず。推しの最新情報や豆知識に関する信頼度は抜群で、友達から「これってどういうこと？」と質問されることも多いのでは？
        その知識量と愛情の深さで、今日もｴｯﾎｴｯﾎと応援し続ける！`,

  ADSI: `ADSIタイプのあなたは、ひたすら推しに身を捧げる、まさに貢献型のオタク！
        ひたすら推しに向き合い、情報を集めたり、解釈を深めたりするのが得意。周りが驚くほどの集中力で推しの魅力を探求し、推しのために何ができるかを常に考えているタイプ。
        黙々と活動しながらも、その熱意は確実に推しに届いているはず！`,

  ADEC: `ADECタイプのあなたは、普段聞けないような話を聞くのが好きで、推しに関する考察や裏話に興味津々！
        その話をみんなで共有し、盛り上がるのが最高の楽しみ！ただ見るだけではなく、推しに関する深い話を知ることで、より一層愛が深まるタイプ。あなたの好奇心が、推し活をより充実させている！`,

  ADEI: `ADEIタイプのあなたは、推しの持っている独特の世界観の虜になっているみたい。
        個人で楽しむことが多いものの、推しに関する考察を語るときは意外と熱くなることも。時に仲間と語り合い、団結したりしなかったり…！？
        推しワールドにどんどんハマっていっぞ！`,

  PDSC: `PDSCタイプのあなたは、推しのことをただ好きなだけじゃなく、徹底的に深掘りして楽しむ研究者タイプ！
        推しの言動の意味をじっくり考察し、友達とも知識を共有しながら盛り上がるのが大好き！コンテンツはとにかく貪るように消費し、推しに関する情報を見つけるたびにワクワクが止まらない！
        深く知れば知るほど魅力が増す推しの世界に、今日もどっぷり浸ってコンテンツを消費しまくる！！`,

  PDSI: `PDSIタイプのあなたは、一度ハマったら抜け出せない、まさに専門特化型のオタク！
        自分から積極的に調べることは多くなくても、推しの影響で気づいたら特定の知識が身についているなんてことも。
        推しに導かれるままに、新たな世界へと足を踏み入れてしまうタイプ！`,

  PDEC: `PDECタイプのあなたは、話しや行動に一貫性のあるところに惹かれ、推しの信念や考え方に共感するタイプ！
        推し単体ももちろん好きだけど、他の人とのコラボや掛け合いで生まれる化学反応も楽しみにしている。
        推しの魅力が引き立つ瞬間を見逃さず、その瞬間を全力で味わう！`,

  PDEI: `PDEIタイプのあなたは、個性派の推しを好み、普通では満足できないタイプ。
        同担が少なくても気にせず、自分の好きなものを追求するスタイル。推しの魅力を知るほどに、どこまでも沼にハマっていく！
        普通じゃ満足できないんだよ、、、`,

  PLSC: `PLSCタイプのあなたは、推しのグッズは絶対に逃さない！
        限定アイテムがあれば予約戦争に参戦し、イベントがあれば全力で予定を調整。推しの話で友達と盛り上がるのも日常の一部で、共通の推しを持つ仲間とはいつもアツい語り合いを繰り広げている！
        現場の熱気や推しとの距離の近さを大切にするアクティブなオタク気質。
        推し活は一旦ステイできない！`,

  PLSI: `PLSIタイプのあなたは、SNSや日常のふとした瞬間に、つい推しの良さを独り言のように語ってしまうことが多いタイプ。
        「いや、みないでよ！ただの独り言だから！」と思いながらも、結局熱く語ってしまうのがあなたの特徴。推しへの愛が溢れすぎて、気づけばタイムラインも推し一色になっていることも？
        黒歴史になるって？あ、それ言っちゃだめですよ～`,

  PLEC: `PLECタイプのあなたは、なんだかんだで推しを見守ることが多いタイプ！
        推しの良さを語るのも好きだけど、基本的にはそっと応援していることが多い。
        推しの成長を見届けることで満足し、安心感をもって推し活を続けている！`,

  PLEI: `PLEIタイプのあなたは、刺激を求め、少しクセのある推しを好むタイプ！
        王道かと思いきや、ちょっとズレた推し方をしているのが特徴。推しの発言や行動に一喜一憂しながら、日常にちょっとしたスパイスを求める！`,

  ALEC: `ALECタイプのあなたは、推しが多いからお金がかけずに推せるところは逃さないコスパも精神の安定も最強型！
        周りからはどこにそんな時間があるのか不思議に思われてるかも？効率的に推し活を楽しむ才能があり、同じ推しを持つ人たちとの交流も大切にしている！`,

  ALSI: `ALSIタイプのあなたにとって推しは癒しそのもの！
        疲れたときの「推し接種」は欠かせないルーティンで、推しの存在が心の支えになっている。時には情緒が不安定になる？いやいやそんな心配はちっちゃいかぁ。
        推しの誕生日や記念日はしっかりお祝い！あなたにとって、推しはただの趣味ではなく、日々の生活の活力そのもの！
        推したいだけじゃだめですか？`,

  ALEI: `ALEIタイプのあなたは、推しが日常の癒しであり、時には推しの影響を受けて行動が変わることも。
        推しにツッコミを入れたり推し虐を楽しんだりと、意外とS気質な部分が垣間見えることも！？
        推しを見るときだけは別人格が前に行っちゃうんだよねぇ`,

  ALSC: `ALSCタイプのあなたは、推し活が大好きで息抜きになっている！
        推しの話題で盛り上がる時間が何よりの楽しみ。
        でも、ついつい財布の紐がゆるくなりがちで、気づけば金欠になっていることも…。でも楽しいから散財やめられないんだよね。
        節約キャンセル界隈って知ってますか？`,
};
// 各タイプにおすすめのライバー
const recommendedLiversWithImages = {
  ADSC: [
    { title: "戌亥とこ", img: "pic/inui_toko.png", url: "https://www.nijisanji.jp/talents/l/toko-inui" },
    { title: "町田ちま", img: "pic/machita_chima.png", url: "https://www.nijisanji.jp/talents/l/chima-machita" },
    { title: "ましろ爻", img: "pic/mashiro_meme.png", url: "https://www.nijisanji.jp/talents/l/meme-mashiro" },
    { title: "レイン・パターソン", img: "pic/lain_paterson.png", url: "https://www.nijisanji.jp/talents/l/lain-paterson" },
    { title: "森中花咲", img: "pic/morinaka_kazaki.png", url: "https://www.nijisanji.jp/talents/l/kazaki-morinaka" },
    { title: "星導ショウ", img: "pic/hoshirube_sho.png", url: "https://www.nijisanji.jp/talents/l/sho-hoshirube" },
    { title: "山神カルタ", img: "pic/yamagami_karuta.png", url: "https://www.nijisanji.jp/talents/l/karuta-yamagami"},
    { title: "来栖夏芽", img: "pic/kurusu_natsume.png", url: "https://www.nijisanji.jp/talents/l/natsume-kurusu" },
    { title: "飛鳥ひな", img: "pic/asuka_hina.png", url: "https://www.nijisanji.jp/talents/l/hina-asuka" }
    
  ],
  ADSI: [
    { title: "竜胆尊", img: "pic/rindou_mikoto.png", url: "https://www.nijisanji.jp/talents/l/mikoto-rindou" },
    { title: "白雪巴", img: "pic/shirayuki_tomoe.png", url: "https://www.nijisanji.jp/talents/l/tomoe-shirayuki" },
    { title: "夢追翔", img: "pic/yumeoi_kakeru.png", url: "https://www.nijisanji.jp/talents/l/kakeru-yumeoi" },
    { title: "ドーラ", img: "pic/dola.png", url: "https://www.nijisanji.jp/talents/l/dola" },
    { title: "エリー・コニファー", img: "pic/eli_conifer.png", url: "https://www.nijisanji.jp/talents/l/eli-conifer" },
    { title: "えま★おうがすと", img: "pic/emma_august.png", url: "https://www.nijisanji.jp/talents/l/emma-august" },
    { title: "愛園愛美", img: "pic/aizono_manami.png", url: "https://www.nijisanji.jp/talents/l/manami-aizono" },
    { title: "東堂コハク", img: "pic/todo_kohaku.png", url: "https://www.nijisanji.jp/talents/l/kohaku-todo" },
  ],
  ADEC: [
    { title: "でびでび・でびる", img: "pic/debidebi_debiru.png", url: "https://www.nijisanji.jp/talents/l/debidebi-debiru" },
    { title: "ジョー・力一", img: "pic/joe_rikiichi.png", url: "https://www.nijisanji.jp/talents/l/joe-rikiichi" },
    { title: "ベルモンド・バンデラス", img: "pic/belmond_banderas.png", url: "https://www.nijisanji.jp/talents/l/belmond-banderas" },
    { title: "オリバー・エバンス", img: "pic/oliver_evans.png", url: "https://www.nijisanji.jp/talents/l/oliver-evans"},
    { title: "黒井しば", img: "pic/kuroi_shiba.png", url: "https://www.nijisanji.jp/talents/l/shiba-kuroi"},
    { title: "小野町春香", img: "pic/onomachi_haruka.png", url: "https://www.nijisanji.jp/talents/l/haruka-onomachi"},
    { title: "雪城眞尋", img: "pic/yukishiro_mahiro.png", url: "https://www.nijisanji.jp/talents/l/mahiro-yukishiro"},
    { title: "綺沙良", img: "pic/kisara.png", url: "https://www.nijisanji.jp/talents/l/kisara"},
    { title: "梢桃音", img: "pic/kozue_mone.png", url: "https://www.nijisanji.jp/talents/l/mone-kozue"},
  ],
  ADEI: [
    { title: "文野環", img: "pic/fumino_tamaki.png", url: "https://www.nijisanji.jp/talents/l/tamaki-fumino" },
    { title: "卯月コウ", img: "pic/uzuki_kou.png", url: "https://www.nijisanji.jp/talents/l/kou-uzuki" },
    { title: "レヴィ・エリファ", img: "pic/levi_elipha.png", url: "https://www.nijisanji.jp/talents/l/levi-elipha" },
    { title: "北小路ヒスイ", img: "pic/kitakoji_hisui.png", url: "https://www.nijisanji.jp/talents/l/hisui-kitakoji" },
    { title: "空星きらめ", img: "pic/sorahoshi_kirame.png", url: "https://www.nijisanji.jp/talents/l/kirame-sorahoshi" },
    { title: "雨森小夜", img: "pic/amemori_sayo.png", url: "https://www.nijisanji.jp/talents/l/sayo-amemori" },
    { title: "ミラン・ケストレル", img: "pic/milan_kestrel.png", url: "https://www.nijisanji.jp/talents/l/milan-kestrel" },
    { title: "轟京子", img: "pic/todoroki_kyoko.png", url: "https://www.nijisanji.jp/talents/l/kyoko-todoroki" },
    { title: "矢車りね", img: "pic/yaguruma_rine.png", url: "https://www.nijisanji.jp/talents/l/rine-yaguruma" },
  ],
  PDSC: [
    { title: "壱百満天原サロメ", img: "pic/hyakumantenbara_salome.png", url: "https://www.nijisanji.jp/talents/l/salome-hyakumantenbara" },
    { title: "加賀美ハヤト", img: "pic/kagami_hayato.png", url: "https://www.nijisanji.jp/talents/l/hayato-kagami" },
    { title: "弦月藤士郎", img: "pic/genzuki_tojiro.png", url: "https://www.nijisanji.jp/talents/l/tojiro-genzuki" },
    { title: "佐伯イッテツ", img: "pic/saiki_ittetsu.png", url: "https://www.nijisanji.jp/talents/l/ittetsu-saiki" },
    { title: "ルイス・キャミー", img: "pic/luis_cammy.png", url: "https://www.nijisanji.jp/talents/l/luis-cammy" },
    { title: "春崎エアル", img: "pic/harusaki_air.png", url: "https://www.nijisanji.jp/talents/l/air-harusaki" },
  ],
  PDSI: [
    { title: "健屋花那", img: "pic/sukoya_kana.png", url: "https://www.nijisanji.jp/talents/l/kana-sukoya" },
    { title: "葉加瀬冬雪", img: "pic/hakase_fuyuki.png", url: "https://www.nijisanji.jp/talents/l/fuyuki-hakase" },
    { title: "シェリン・バーガンディ", img: "pic/shellin_burgundy.png", url: "https://www.nijisanji.jp/talents/l/shellin-burgundy" },
    { title: "夕陽リリ", img: "pic/yuhi_riri.png", url: "https://www.nijisanji.jp/talents/l/riri-yuhi" },
    { title: "魁星", img: "pic/kaisei.png", url: "https://www.nijisanji.jp/talents/l/kaisei" },
    { title: "神田笑一", img: "pic/kanda_shoichi.png", url: "https://www.nijisanji.jp/talents/l/shoichi-kanda" },
  ],
  PDEC: [
    { title: "イブラヒム", img: "pic/ibrahim.png", url: "https://www.nijisanji.jp/talents/l/ibrahim" },
    { title: "える", img: "pic/elu.png", url: "https://www.nijisanji.jp/talents/l/elu" },
    { title: "鷹宮りおん", img: "pic/takamiya_rion.png", url: "https://www.nijisanji.jp/talents/l/rion-takamiya" },
    { title: "鈴木勝", img: "pic/suzuki_masaru.png", url: "https://www.nijisanji.jp/talents/l/masaru-suzuki" },
    { title: "魔使マオ", img: "pic/matsukai_mao.png", url: "https://www.nijisanji.jp/talents/l/mao-matsukai" },
    { title: "家長むぎ", img: "pic/ienaga_mugi.png", url: "https://www.nijisanji.jp/talents/l/mugi-ienaga" },
    { title: "渋谷はじめ", img: "pic/shibuya_hajime.png", url: "https://www.nijisanji.jp/talents/l/hajime-shibuya" },
  ],
  PDEI: [
    { title: "社築", img: "pic/yashiro_kizuku.png", url: "https://www.nijisanji.jp/talents/l/kizuku-yashiro"},
    { title: "ニュイ・ソシエール", img: "pic/nui_sociere.png", url: "https://www.nijisanji.jp/talents/l/nui-sociere" },
    { title: "葉山舞鈴", img: "pic/hayama_marin.png", url: "https://www.nijisanji.jp/talents/l/marin-hayama" },
    { title: "グウェル・オス・ガール", img: "pic/gwelu_os_gar.png", url: "https://www.nijisanji.jp/talents/l/gwelu-os-gar" },
    { title: "静凛", img: "pic/shizuka_rin.png", url: "https://www.nijisanji.jp/talents/l/rin-shizuka" },
    { title: "フミ", img: "pic/fumi.png", url: "https://www.nijisanji.jp/talents/l/fumi" },
    { title: "赤羽葉子", img: "pic/akabane_youko.png", url: "https://www.nijisanji.jp/talents/l/youko-akabane" },
    { title: "宇志海いちご", img: "pic/ushimi_ichigo.png", url: "https://www.nijisanji.jp/talents/l/ichigo-ushimi" },
    { title: "ギルザレンⅢ世", img: "pic/gilzaren_Ⅲ.png", url: "https://www.nijisanji.jp/talents/l/gilzaren-iii" },
  ],
  PLSC: [
    { title: "不破湊", img: "pic/fuwa_minato.png", url: "https://www.nijisanji.jp/talents/l/minato-fuwa" },
    { title: "夜見れな", img: "pic/yorumi_rena.png", url: "https://www.nijisanji.jp/talents/l/rena-yorumi" },
    { title: "アルス・アルマル", img: "pic/ars_almal.png", url: "https://www.nijisanji.jp/talents/l/ars-almal" },
    { title: "風楽奏斗", img: "pic/fura_kanato.png", url: "https://www.nijisanji.jp/talents/l/kanato-fura" },
    { title: "甲斐田晴", img: "pic/kaida_haru.png", url: "https://www.nijisanji.jp/talents/l/haru-kaida" },
    { title: "榊ネス", img: "pic/sakaki_ness.png", url: "https://www.nijisanji.jp/talents/l/ness-sakaki" },
    { title: "叢雲カゲツ", img: "pic/murakumo_kagetsu.png", url: "https://www.nijisanji.jp/talents/l/kagetsu-murakumo" },
    { title: "伊波ライ", img: "pic/inami_rai.png", url: "https://www.nijisanji.jp/talents/l/rai-inami" },
  ],
  PLSI: [
    { title: "叶", img: "pic/kanae.png", url: "https://www.nijisanji.jp/talents/l/kanae" },
    { title: "樋口楓", img: "pic/higuchi_kaede.png", url: "https://www.nijisanji.jp/talents/l/kaede-higuchi" },
    { title: "ローレン・イロアス", img: "pic/lauren_iroas.png", url: "https://www.nijisanji.jp/talents/l/lauren-iroas" },
    { title: "ラトナ・プティ", img: "pic/ratna_petit.png", url: "https://www.nijisanji.jp/talents/l/ratna-petit" },
    { title: "周央サンゴ", img: "pic/suo_sango.png", url: "https://www.nijisanji.jp/talents/l/sango-suo" },
    { title: "渡会雲雀", img: "pic/watarai_hibari.png", url: "https://www.nijisanji.jp/talents/l/hibari-watarai" },
    { title: "エクス・アルビオ", img: "pic/ex_albio.png", url: "https://www.nijisanji.jp/talents/l/ex-albio" },
  ],
  PLEC: [
    { title: "本間ひまわり", img: "pic/honma_himawari.png", url: "https://www.nijisanji.jp/talents/l/himawari-honma" },
    { title: "レオス・ヴィンセント", img: "pic/leos_vincent.png", url: "https://www.nijisanji.jp/talents/l/leos-vincent" },
    { title: "小清水透", img: "pic/koshimizu_toru.png", url: "https://www.nijisanji.jp/talents/l/toru-koshimizu" },
    { title: "獅子堂あかり", img: "pic/shishido_akari.png", url: "https://www.nijisanji.jp/talents/l/akari-shishido" },
    { title: "渚トラウト", img: "pic/nagisa_trout.png", url: "https://www.nijisanji.jp/talents/l/trout-nagisa" },
    { title: "早乙女ベリー", img: "pic/saotome_berry.png", url: "https://www.nijisanji.jp/talents/l/berry-saotome" },
    { title: "司賀りこ", img: "pic/shiga_riko.png", url: "https://www.nijisanji.jp/talents/l/riko-shiga" },
    { title: "雲母たまこ", img: "pic/kirara_tamako.png", url: "https://www.nijisanji.jp/talents/l/tamako-kirara" },
  ],
  PLEI: [
    { title: "葛葉", img: "pic/kuzuha.png", url: "https://www.nijisanji.jp/talents/l/kuzuha" },
    { title: "月ノ美兎", img: "pic/tsukino_mito.png", url: "https://www.nijisanji.jp/talents/l/mito-tsukino" },
    { title: "花畑チャイカ", img: "pic/hanabatake_chaika.png", url: "https://www.nijisanji.jp/talents/l/chaika-hanabatake" },
    { title: "奈羅花", img: "pic/naraka.png", url: "https://www.nijisanji.jp/talents/l/naraka" },
    { title: "舞元啓介", img: "pic/maimoto_keisuke.png", url: "https://www.nijisanji.jp/talents/l/keisuke-maimoto" },
    { title: "桜凛月", img: "pic/sakura_ritsuki.png", url: "https://www.nijisanji.jp/talents/l/ritsuki-sakura" },
    { title: "酒寄颯馬", img: "pic/sakayori_soma.png", url: "https://www.nijisanji.jp/talents/l/soma-sakayori" },
  ],
  ALEC: [
    { title: "笹木咲", img: "pic/sasaki_saku.png", url: "https://www.nijisanji.jp/talents/l/saku-sasaki" },
    { title: "フレン・E・ルスタリオ", img: "pic/furen_E_lustario.png", url: "https://www.nijisanji.jp/talents/l/furen-e-lustario" },
    { title: "西園チグサ", img: "pic/nishizono_chigusa.png", url: "https://www.nijisanji.jp/talents/l/chigusa-nishizono" },
    { title: "伏見ガク", img: "pic/fushimi_gaku.png", url: "https://www.nijisanji.jp/talents/l/gaku-fushimi" },
    { title: "海妹四葉", img: "pic/umise_yotsuha.png", url: "https://www.nijisanji.jp/talents/l/yotsuha-umise" },
    { title: "倉持めると", img: "pic/kuramochi_meruto.png", url: "https://www.nijisanji.jp/talents/l/meruto-kuramochi" },
    { title: "赤城ウェン", img: "pic/akagi_wen.png", url: "https://www.nijisanji.jp/talents/l/wen-akagi" },
    { title: "鏑木ろこ", img: "pic/kaburaki_roco.png", url: "https://www.nijisanji.jp/talents/l/roco-kaburaki" },
    { title: "珠乃井ナナ", img: "pic/tamanoi_nana.png", url: "https://www.nijisanji.jp/talents/l/nana-tamanoi" },
  ],
  ALSI: [
    { title: "星川サラ", img: "pic/hoshikawa_sara.png", url: "https://www.nijisanji.jp/talents/l/sara-hoshikawa" },
    { title: "天宮こころ", img: "pic/amamiya_kokoro.png", url: "https://www.nijisanji.jp/talents/l/kokoro-amamiya" },
    { title: "三枝明那", img: "pic/saegusa_akina.png", url: "https://www.nijisanji.jp/talents/l/akina-saegusa" },
    { title: "ソフィア・ヴァレンタイン", img: "pic/sophia_valentine.png", url: "https://www.nijisanji.jp/talents/l/sophia-valentine" },
    { title: "小柳ロウ", img: "pic/koyanagi_rou.png", url: "https://www.nijisanji.jp/talents/l/rou-koyanagi" },
    { title: "ヤン　ナリ", img: "pic/yang_nari.png", url: "https://www.nijisanji.jp/talents/l/yang-nari" },
    { title: "緋八マナ", img: "pic/hibachi_mana.png", url: "https://www.nijisanji.jp/talents/l/mana-hibachi" },
    { title: "石神のぞみ", img: "pic/ishigami_nozomi.png", url: "https://www.nijisanji.jp/talents/l/nozomi-ishigami" },
    { title: "七瀬すず菜", img: "pic/nanase_suzuna.png", url: "https://www.nijisanji.jp/talents/l/suzuna-nanase" },
  ],
  ALEI: [
    { title: "剣持刀也", img: "pic/kenmochi_toya.png", url: "https://www.nijisanji.jp/talents/l/toya-kenmochi" },
    { title: "リゼ・ヘルエスタ", img: "pic/lize_helesta.png", url: "https://www.nijisanji.jp/talents/l/lize-helesta" },
    { title: "緑仙", img: "pic/ryushen.png", url: "https://www.nijisanji.jp/talents/l/ryushen" },
    { title: "ルンルン", img: "pic/lunlun.png", url: "https://www.nijisanji.jp/talents/l/lunlun" },
    { title: "シスター・クレア", img: "pic/sister_claire.png", url: "https://www.nijisanji.jp/talents/l/sister-claire" },
    { title: "栞葉るり", img: "pic/shioriha_ruri.png", url: "https://www.nijisanji.jp/talents/l/ruri-shioriha" },
    { title: "早瀬走", img: "pic/hayase_sou.png", url: "https://www.nijisanji.jp/talents/l/sou-hayase" },
    { title: "立伝都々", img: "pic/tachitsute_toto.png", url: "https://www.nijisanji.jp/talents/l/toto-tachitsute" },
  ],
  ALSC: [
    { title: "アンジュ・カトリーナ", img: "pic/ange_katrina.png", url: "https://www.nijisanji.jp/talents/l/ange-katrina" },
    { title: "椎名唯華", img: "pic/shiina_yuika.png", url: "https://www.nijisanji.jp/talents/l/yuika-shiina" },
    { title: "魔界ノりりむ", img: "pic/makaino_ririmu.png", url: "https://www.nijisanji.jp/talents/l/makaino-ririmu" },
    { title: "長尾景", img: "pic/nagao_kei.png", url: "https://www.nijisanji.jp/talents/l/kei-nagao" },
    { title: "四季凪アキラ", img: "pic/shikinagi_akira.png", url: "https://www.nijisanji.jp/talents/l/akira-shikinagi" },
    { title: "セラフ・ダズルガーデン", img: "pic/seraph_dazzlegarden.png", url: "https://www.nijisanji.jp/talents/l/seraph-dazzlegarden" },
    { title: "五十嵐梨花", img: "pic/igarashi_rika.png", url: "https://www.nijisanji.jp/talents/l/rika-igarashi"},
    { title: "宇佐美リト", img: "pic/usami_rito.png", url: "https://www.nijisanji.jp/talents/l/rito-usami" },
    { title: "北見遊征", img: "pic/kitami_yusei.png", url: "https://www.nijisanji.jp/talents/l/yusei-kitami" },
  ],
};

// 結果に基づいてライバーデータを表示
function displayRecommendedLivers(result) {
  const liversList = document.getElementById("recommended-liver-list");
  liversList.innerHTML = ""; // 初期化

  const livers = recommendedLiversWithImages[result];
  if (livers) {
    livers.forEach((liver) => {
      const liverItem = document.createElement("div");
      liverItem.classList.add("liver-item");
      liverItem.innerHTML = `
        <img src="${liver.img}" alt="${liver.title}">
        <p>${liver.title}</p>
      `;
      liversList.appendChild(liverItem);
    });
  } else {
    liversList.innerHTML = `
      <p class="error-message">このタイプのおすすめライバーはまだ登録されていません。</p>
    `;
  }
}

// 現在のページ
let currentPage = 0;

// 回答の状態を保存
const answers = new Array(questions.length).fill(null);

// 質問ページをロード
function loadPage() {
  const questionsList = document.getElementById("questions-list");
  questionsList.innerHTML = "";

  const start = currentPage * 5;
  const end = start + 5;
  const pageQuestions = questions.slice(start, end);

  pageQuestions.forEach((question, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question-item");
    questionDiv.innerHTML = `
      <p class="question-text">${question.text}</p>
      <div class="answers">
        <span class="label positive">賛成</span>
        <button class="circle" data-value="5" data-category="${question.category}" data-question-index="${start + index}"></button>
        <button class="circle" data-value="3" data-category="${question.category}" data-question-index="${start + index}"></button>
        <button class="circle" data-value="1" data-category="${question.category}" data-question-index="${start + index}"></button>
        <button class="circle" data-value="0" data-category="${question.category}" data-question-index="${start + index}"></button>
        <button class="circle" data-value="-1" data-category="${question.category}" data-question-index="${start + index}"></button>
        <button class="circle" data-value="-3" data-category="${question.category}" data-question-index="${start + index}"></button>
        <button class="circle" data-value="-5" data-category="${question.category}" data-question-index="${start + index}"></button>
        <span class="label negative">反対</span>
      </div>
    `;
    questionsList.appendChild(questionDiv);

    // 過去の回答を復元
    const previousAnswer = answers[start + index];
    if (previousAnswer !== null) {
      const selectedButton = document.querySelector(
        `.circle[data-question-index="${start + index}"][data-value="${previousAnswer}"]`
      );
      if (selectedButton) {
        selectedButton.classList.add("selected");
      }
    }
  });

  const nextButton = document.getElementById("next-button");
  nextButton.innerText = currentPage === 3 ? "結果を見る" : "次へ進む";
  nextButton.disabled = !isPageComplete();
}

// 現在のページがすべて回答済みか確認
function isPageComplete() {
  const start = currentPage * 5;
  const end = start + 5;
  return answers.slice(start, end).every((answer) => answer !== null);
}

// 回答を選択したときの処理
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("circle")) {
    const parent = event.target.parentNode;
    parent.querySelectorAll(".circle").forEach((btn) => btn.classList.remove("selected"));
    event.target.classList.add("selected");

    const questionIndex = parseInt(event.target.getAttribute("data-question-index"));
    const value = parseInt(event.target.getAttribute("data-value"));

    // 回答を保存
    answers[questionIndex] = value;

    // ボタンの状態を更新
    const nextButton = document.getElementById("next-button");
    nextButton.disabled = !isPageComplete();
  }
});

// 診断開始
document.getElementById("start-button").addEventListener("click", () => {
  document.getElementById("title-container").style.display = "none";
  document.getElementById("question-container").style.display = "block";
  loadPage();
});

// 次のページへ進む
document.getElementById("next-button").addEventListener("click", () => {
  if (currentPage < 3) {
    currentPage++;
    loadPage();
    window.scrollTo(0, 0); // ページの先頭にスクロール
  } else {
    calculateResults();
    window.scrollTo(0, 0);
  }
});

// 診断結果を計算・表示
function calculateResults() {
  document.getElementById("question-container").style.display = "none";
  document.getElementById("result-container").style.display = "block";

  // カテゴリーごとのスコア計算
  questions.forEach((question, index) => {
    const value = answers[index];
    if (value !== null) {
      categoryScores[question.category] += value;
    }
  });

  // タイプを計算
  const result =
    (categoryScores["a"] >= 0 ? "A" : "P") +
    (categoryScores["b"] >= 0 ? "D" : "L") +
    (categoryScores["c"] >= 0 ? "S" : "E") +
    (categoryScores["d"] >= 0 ? "C" : "I");

  document.getElementById("final-type").innerText = result;


  // カテゴリーごとの結果を表示
  updateCategoryResults();

  document.getElementById("final-name").textContent = typeName[result]; // 診断名を動的に設定

  // タイプ詳細を表示
  document.getElementById("type-detail-text").innerText =
    typeDescriptions[result] || "このタイプの詳細はまだ登録されていません。";

  // おすすめライバーを表示
  displayRecommendedLivers(result);
}

function updateCategoryResults() {
  Object.keys(categoryScores).forEach((key) => {
    const totalQuestionsPerCategory = questions.filter((q) => q.category === key).length;
    const maxScore = totalQuestionsPerCategory * 5; // 最大スコア
    const minScore = totalQuestionsPerCategory * -5; // 最小スコア

    // スコアを 0～100% の範囲に正規化
    const normalizedScore = ((categoryScores[key] - minScore) / (maxScore - minScore)) * 100;
    let percentage = Math.round(normalizedScore);

    const progressBar = document.getElementById(`${key}-bar`);
    const rightFill = progressBar.nextElementSibling;

    // 表示ラベルの決定
    let typeLabel;
    if (percentage >= 50) {
      typeLabel =
        key === "a"
          ? "能動的(A)"
          : key === "b"
          ? "深掘り型(D)"
          : key === "c"
          ? "貢献型(S)"
          : "交流型(C)";

      // 緑バーを左から表示
      progressBar.style.width = `${percentage}%`;
      progressBar.classList.add("left");
      rightFill.style.width = "0%"; // 青バー非表示
    } else {
      // スコアの反転（低いスコアを高い割合に変換）
      percentage = 100 - percentage;
      typeLabel =
        key === "a"
          ? "受動型(P)"
          : key === "b"
          ? "ライト型(L)"
          : key === "c"
          ? "享楽型(E)"
          : "個人型(I)";

      // 青バーを右から表示
      progressBar.style.width = "0%"; // 緑バー非表示
      progressBar.classList.remove("left");
      rightFill.style.width = `${percentage}%`;
    }

    // 表示テキスト更新
    document.getElementById(`${key}-percentage`).innerText = `${percentage}% ${typeLabel}`;
  });
}



// おすすめライバー情報を表示
function displayRecommendedLivers(result) {
  const liversList = document.getElementById("recommended-liver-list");
  liversList.innerHTML = ""; // 初期化

  const livers = recommendedLiversWithImages[result];
  if (livers && livers.length > 0) {
    livers.forEach((liver) => {
      const liverItem = document.createElement("div");
      liverItem.classList.add("liver-item");
      liverItem.innerHTML = `
        <img src="${liver.img}" alt="${liver.title}">
        <p><a href="${liver.url}" target="_blank" rel="noopener noreferrer">${liver.title}</a></p>
      `;
      liversList.appendChild(liverItem);
    });
  } else {
    liversList.innerHTML = `<p>おすすめのライバーが見つかりませんでした。</p>`;
  }
}

document.getElementById("share-twitter").addEventListener("click", () => {
  const type = document.getElementById("final-type").textContent;
  const name = document.getElementById("final-name").textContent;
  
  const resultText = `あなたのタイプは「${type}：${name}」でした！あなたも「にじどうMBTI診断」してみよう！`;
  const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    resultText
  )}&url=${encodeURIComponent(window.location.href)}`;

  window.open(shareUrl, "_blank");
});



