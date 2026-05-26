import type { CardSeed, TarotCard } from "./types"

const swordCardSeeds = [
  {
    imageName: "ACE of SORDS",
    number: 1,
    name: "ソードのエース",
    keywords: ["明晰さ", "決断", "真実", "始まり", "突破口"],
    symbolism: ["雲から現れる剣", "王冠", "冷たい空", "山並み", "一点の光"],
    atmosphere: ["澄んでいる", "緊張感がある", "静かに強い", "切り開く"],
    observationAxes: [
      "感情や迷いの奥に、ひとつだけはっきりしている事実が見え始めています。",
      "今は気合いよりも、言葉を整え、判断の軸をまっすぐにすることが助けになります。",
      "曖昧だった状況に、名前をつけることで次の一手が見えてきそうです。",
    ],
    reflectionPrompts: [
      "今日、正直に認めると状況が軽くなる真実は何ですか。",
      "迷いを減らすために、ひとつだけ決められることはありますか。",
      "言葉にしておいたほうがよい考えや境界線は何ですか。",
    ],
    answerNotes: [
      "答えは、はっきりさせることに近いです。やさしさを失わずに、曖昧さを少し切り分けてください。",
      "新しい始まりは、勢いよりも明確な判断から開きます。まず一文で結論を書いてみるとよさそうです。",
      "今は複雑に抱え込むより、核になる事実を選ぶ流れです。余分な解釈をいったん脇に置いてください。",
    ],
    tensions: {
      expansive: ["明晰さ", "真実", "決断", "突破"],
      restrictive: ["冷たさ", "言い過ぎ", "理屈への偏り", "切り急ぎ"],
    },
    imagePrompt:
      "A single upright steel sword emerging from a pale clouded hand, crown and laurel near the blade tip, cold dawn mountains",
  },
  {
    imageName: "TWO of SORDS",
    number: 2,
    name: "ソードの2",
    keywords: ["保留", "均衡", "選択", "防衛", "静かな葛藤"],
    symbolism: ["目隠しの人物", "交差する二本の剣", "月", "静かな水", "遠い岸"],
    atmosphere: ["閉じている", "慎重", "均衡している", "張りつめた静けさ"],
    observationAxes: [
      "すぐに結論を出すより、両方の言い分を静かに持っている段階かもしれません。",
      "見ないようにしている情報がある一方で、今の保留が心を守っている面もあります。",
      "対立しているように見える選択肢の下に、共通する不安や願いがありそうです。",
    ],
    reflectionPrompts: [
      "今、決めないことで守っているものは何ですか。",
      "判断に必要なのに、まだ見ようとしていない情報はありますか。",
      "両方の選択肢に共通している本音は何でしょうか。",
    ],
    answerNotes: [
      "答えは、急いで選ぶことよりも、選べない理由を丁寧に見ることにあります。",
      "心が閉じているときは、無理に開かなくても大丈夫です。ただし、事実確認だけは少し進めてください。",
      "均衡は永遠ではありません。落ち着いて見直せば、自然に重さの違いがわかってきます。",
    ],
    tensions: {
      expansive: ["均衡", "慎重さ", "冷静な判断", "一時停止"],
      restrictive: ["回避", "迷い", "感情の遮断", "決断の先延ばし"],
    },
    imagePrompt:
      "A blindfolded figure seated beside still dark water, two crossed steel swords, crescent moon behind thin clouds",
  },
  {
    imageName: "THREE of SORDS",
    number: 3,
    name: "ソードの3",
    keywords: ["痛み", "失望", "真実の直視", "悲しみ", "回復の始まり"],
    symbolism: ["三本の剣", "象徴的な心", "雨", "灰色の空", "裂ける雲"],
    atmosphere: ["痛切", "静かに悲しい", "露わになる", "通り雨のよう"],
    observationAxes: [
      "痛みを避けるより、何が刺さっているのかを認めることで回復が始まりそうです。",
      "期待していた形とは違う事実が現れ、心が整理を求めています。",
      "悲しみは弱さではなく、大切だったものを知らせる感覚として現れています。",
    ],
    reflectionPrompts: [
      "今の痛みは、何を大切にしていたことを教えていますか。",
      "事実と解釈を分けるなら、まず何が残りますか。",
      "悲しみを少し軽くするために、今日できる小さな手当ては何ですか。",
    ],
    answerNotes: [
      "答えは、痛みをなかったことにしないことに近いです。事実を静かに認めるほど、回復の道ができます。",
      "今は前向きな言葉で急いで覆うより、傷ついた部分に正確な名前をつける時間です。",
      "雨は長く続かないかもしれません。まずは自分を責めず、感情が通り抜ける場所を作ってください。",
    ],
    tensions: {
      expansive: ["受容", "真実の直視", "回復", "感情の整理"],
      restrictive: ["傷心", "失望", "言葉の痛み", "悲観"],
    },
    imagePrompt:
      "A stylized luminous heart pierced symbolically by three slender steel swords without blood, rain in a storm-gray sky",
  },
  {
    imageName: "FOUR of SORDS",
    number: 4,
    name: "ソードの4",
    keywords: ["休息", "回復", "沈黙", "祈り", "一時停止"],
    symbolism: ["横たわる人物", "壁の三本の剣", "下に置かれた剣", "礼拝堂", "月明かり"],
    atmosphere: ["静謐", "守られている", "回復中", "深く休む"],
    observationAxes: [
      "考え続けるより、思考を休ませることで次の判断が整う場面です。",
      "動けない時間ではなく、回復のために守られた時間として扱うとよさそうです。",
      "外の問題に答える前に、内側の消耗を落ち着かせる必要があります。",
    ],
    reflectionPrompts: [
      "今日、これ以上考えなくてよいことは何ですか。",
      "心身を回復させるために、短くても確保できる静かな時間はありますか。",
      "判断を保留して休むことで、むしろ守れるものは何でしょうか。",
    ],
    answerNotes: [
      "答えは、いったん休むことに近いです。止まることは後退ではなく、次の明晰さを戻す準備です。",
      "反応を急がず、静かな場所に戻ってください。回復した思考のほうが正確に選べます。",
      "今は結論よりも余白です。眠る、離れる、祈る、黙るといった行為が流れを整えます。",
    ],
    tensions: {
      expansive: ["休息", "回復", "保護", "沈黙"],
      restrictive: ["停滞", "孤立", "先送り", "閉じこもり"],
    },
    imagePrompt:
      "A peaceful figure lying on a stone tomb-like bench in a quiet chapel, three swords above and one below, cool moonlight",
  },
  {
    imageName: "FIVE of SORDS",
    number: 5,
    name: "ソードの5",
    keywords: ["空しい勝利", "対立", "言葉の衝突", "駆け引き", "後味"],
    symbolism: ["集められた剣", "去っていく人物", "荒れた雲", "海辺", "残された剣"],
    atmosphere: ["気まずい", "冷たい", "勝っても重い", "不穏"],
    observationAxes: [
      "勝ち負けで見れば優位でも、関係や気持ちには後味が残っているかもしれません。",
      "正しさを証明することと、本当に守りたいものを守ることは別の課題です。",
      "言葉の刃が鋭くなりやすい日です。勝つための一言より、残したい関係を見てください。",
    ],
    reflectionPrompts: [
      "今、勝ちたい気持ちの奥にある本当の願いは何ですか。",
      "正しさを主張することで、失いそうなものはありますか。",
      "ここで一歩引くなら、何を守ることになりますか。",
    ],
    answerNotes: [
      "答えは、勝ち切ることよりも、後味まで含めて選ぶことにあります。",
      "言い返す前に、目的を確認してください。関係を終わらせたいのか、整えたいのかで言葉が変わります。",
      "自分を守ることは大切ですが、相手を打ち負かす必要まではないかもしれません。",
    ],
    tensions: {
      expansive: ["戦略", "境界線", "撤退の判断", "現実認識"],
      restrictive: ["対立", "皮肉", "空しい勝利", "不信"],
    },
    imagePrompt:
      "One figure holding three collected swords on a tense shoreline while two distant figures walk away, two swords on the ground",
  },
  {
    imageName: "SIX of SORDS",
    number: 6,
    name: "ソードの6",
    keywords: ["移行", "通過", "静かな旅立ち", "回復への移動", "距離を置く"],
    symbolism: ["小舟", "六本の剣", "渡し守", "霧の水面", "遠い岸"],
    atmosphere: ["静かに進む", "寂しいが穏やか", "移り変わる", "慎重"],
    observationAxes: [
      "すべてを解決してからではなく、抱えたまま安全な場所へ移る流れです。",
      "距離を置くことが逃げではなく、回復のための現実的な選択になりそうです。",
      "今は大きな宣言より、静かに環境や関わり方を変えることが助けになります。",
    ],
    reflectionPrompts: [
      "今日、少し距離を置くことで楽になる場所や関係はありますか。",
      "完全に片づいていなくても、次へ運んでよいものは何ですか。",
      "安全な岸へ向かうために、いま必要な小さな移動は何でしょうか。",
    ],
    answerNotes: [
      "答えは、静かに移ることに近いです。問題を置き去りにするのではなく、抱え方を変えて進んでください。",
      "急な変化でなくて大丈夫です。少し離れる、場所を変える、連絡の速度を落とすことが助けになります。",
      "今の旅は派手ではありませんが、回復に向かっています。遠い岸を見失わないでください。",
    ],
    tensions: {
      expansive: ["移行", "回復", "距離", "安全な通過"],
      restrictive: ["未解決", "寂しさ", "消極的な撤退", "荷物の重さ"],
    },
    imagePrompt:
      "A narrow wooden boat crossing quiet misty water toward a pale far shore, six upright swords arranged safely in the boat",
  },
  {
    imageName: "SEVEN of SORDS",
    number: 7,
    name: "ソードの7",
    keywords: ["戦略", "秘密", "抜け道", "慎重な行動", "境界線"],
    symbolism: ["持ち去られる五本の剣", "残された二本の剣", "静かな野営地", "月明かり", "背後を気にする人物"],
    atmosphere: ["用心深い", "静かに緊張している", "抜け目ない", "曖昧さがある"],
    observationAxes: [
      "正面からぶつかるより、今は静かに距離や情報を整える流れが強まっています。",
      "全部を持っていく必要はありません。残すものを決めることも、賢い選択の一部です。",
      "うまく立ち回りたい気持ちの奥に、誰にも言えていない不安や本音がありそうです。",
    ],
    reflectionPrompts: [
      "今、正直に言うよりも隠しておきたいことは何ですか。",
      "守るための沈黙と、避けるための沈黙はどこで違いますか。",
      "最小の摩擦で抜けるために、置いていけるものはありますか。",
    ],
    answerNotes: [
      "答えは、力押しよりも戦略に近いです。急いで説明し切ろうとせず、手順と距離感を選んでください。",
      "すべてを明かす必要はありませんが、自分の誠実さまで手放さないことが大切です。",
      "静かな撤退や準備は、負けではありません。次に守りたいものを明確にして動いてください。",
    ],
    tensions: {
      expansive: ["戦略", "機転", "慎重さ", "軽やかな撤退"],
      restrictive: ["ごまかし", "不信", "逃げ癖", "曖昧な倫理"],
    },
    imagePrompt:
      "A cautious figure moving away from a quiet moonlit camp while carrying five slender swords carefully, two swords still planted behind",
  },
  {
    imageName: "EIGHT of SORDS",
    number: 8,
    name: "ソードの8",
    keywords: ["制限", "思い込み", "不安", "身動きの取れなさ", "出口"],
    symbolism: ["目隠しの人物", "ゆるい布の拘束", "八本の剣", "湿った地面", "遠い城"],
    atmosphere: ["閉じ込められた", "不安定", "静かに怖い", "出口が隠れている"],
    observationAxes: [
      "状況そのものよりも、考えの囲いが選択肢を狭く見せている可能性があります。",
      "完全に自由ではなくても、少し動かせる部分は残っています。そこが出口の始まりです。",
      "助けを待つ前に、自分を縛っている言葉をひとつ疑ってみるとよさそうです。",
    ],
    reflectionPrompts: [
      "今の自分に『できない』と言わせている前提は何ですか。",
      "小さくても動かせる範囲はどこにありますか。",
      "誰かに確認すれば弱まる不安はありますか。",
    ],
    answerNotes: [
      "答えは、まず制限を事実と思い込みに分けることにあります。全部を解かなくても、一箇所ゆるめれば進めます。",
      "見えていない出口があります。焦らず、足元の安全な一歩から確かめてください。",
      "恐れは無視しなくて大丈夫です。ただし恐れだけに判断を任せないでください。",
    ],
    tensions: {
      expansive: ["気づき", "制限の見直し", "小さな自由", "出口の発見"],
      restrictive: ["思い込み", "恐れ", "自己制限", "孤立感"],
    },
    imagePrompt:
      "A blindfolded figure standing in loose cloth bindings, eight upright swords forming an open narrow enclosure, distant castle on a gray hill",
  },
  {
    imageName: "NINE of SORDS",
    number: 9,
    name: "ソードの9",
    keywords: ["不安", "後悔", "眠れない思考", "罪悪感", "内省"],
    symbolism: ["暗い寝台", "顔を覆う人物", "壁の九本の剣", "細い月光", "夜明け前の影"],
    atmosphere: ["重たい", "内側へ沈む", "眠れない", "繊細で痛い"],
    observationAxes: [
      "頭の中で同じ場面を繰り返し、実際以上に苦しさが大きくなっているかもしれません。",
      "後悔は罰ではなく、次に大切にしたいものを知らせる合図として扱えます。",
      "ひとりで抱えるほど、考えは鋭くなります。外に出す方法を探す時です。",
    ],
    reflectionPrompts: [
      "今夜いちばん大きく聞こえている不安は、事実ですか、予想ですか。",
      "自分を責める代わりに、修復できる小さな行動はありますか。",
      "誰に、どのくらいだけ話せば少し軽くなりますか。",
    ],
    answerNotes: [
      "答えは、ひとりで考え続けることから少し離れる方向にあります。書く、話す、眠る準備を整える、どれか一つで十分です。",
      "不安が強い時ほど、結論を急がないでください。朝の自分にも判断を渡してあげてください。",
      "責める声より、回復のための具体策を優先してください。小さな修復はもう始められます。",
    ],
    tensions: {
      expansive: ["反省", "修復", "感情の整理", "助けを求める"],
      restrictive: ["不安", "罪悪感", "眠れない思考", "自己批判"],
    },
    imagePrompt:
      "A figure sitting upright in a dark simple bed, face lowered into hands, nine slender swords arranged horizontally across the shadowed wall",
  },
  {
    imageName: "TEN of SORDS",
    number: 10,
    name: "ソードの10",
    keywords: ["終わり", "底打ち", "手放し", "降伏", "夜明け"],
    symbolism: ["倒れた人物", "十本の剣", "暗い岸辺", "黒い水", "金色の水平線"],
    atmosphere: ["終幕の静けさ", "重いが明けていく", "受け入れている", "張りつめた解放"],
    observationAxes: [
      "もう続けられないものを認めることで、ようやく次の朝が見え始めます。",
      "痛みを否定するより、ここが底だったと知ることが回復の支点になります。",
      "終わりは失敗だけではありません。これ以上傷を増やさないための区切りでもあります。",
    ],
    reflectionPrompts: [
      "もう終わったと認めてよいことは何ですか。",
      "最後まで抱えようとして、余計に苦しくしているものはありますか。",
      "夜明けのために、今日やめることを一つ選ぶなら何ですか。",
    ],
    answerNotes: [
      "答えは、無理に続けることではなく区切ることに近いです。終わりを認めるほど、回復の場所ができます。",
      "今は劇的な再出発より、痛みを増やさない選択が大切です。休むことも立派な行動です。",
      "すべてが失われたわけではありません。終わったものの向こうに、静かな次の光があります。",
    ],
    tensions: {
      expansive: ["完了", "解放", "底打ち", "再生前の静けさ"],
      restrictive: ["消耗", "破綻", "諦め", "過剰な痛み"],
    },
    imagePrompt:
      "A still cloaked figure lying face down on a dark shore at sunrise, ten slender swords planted symbolically without blood, golden horizon",
  },
  {
    imageName: "PAGE of SORDS",
    number: 11,
    name: "ソードのペイジ",
    keywords: ["好奇心", "観察", "学び始め", "問い", "警戒"],
    symbolism: ["若い人物", "掲げた剣", "風の強い丘", "雲", "軽い構え"],
    atmosphere: ["鋭く若い", "好奇心がある", "少し落ち着かない", "観察している"],
    observationAxes: [
      "まだ結論よりも観察が必要です。問いを立てることで、状況の輪郭がはっきりしてきます。",
      "勢いよく言葉にする前に、集めた情報の質を確かめるとよさそうです。",
      "未熟さは弱点ではなく、学び始めるための感度として働いています。",
    ],
    reflectionPrompts: [
      "今、もっと知るべきことは何ですか。",
      "その言葉を発する前に、確認できる事実はありますか。",
      "好奇心と警戒心のどちらが強く出ていますか。",
    ],
    answerNotes: [
      "答えは、まず調べることに近いです。すぐに断言せず、質問を増やしてください。",
      "小さな違和感は拾って大丈夫です。ただし疑いだけで相手や自分を決めつけないようにしてください。",
      "新しい学びの入口にいます。軽やかに、でも丁寧に情報を扱いましょう。",
    ],
    tensions: {
      expansive: ["好奇心", "学習", "観察力", "率直な問い"],
      restrictive: ["疑いすぎ", "未熟な言葉", "落ち着かなさ", "早合点"],
    },
    imagePrompt:
      "A curious young page standing on a windy hill with one slender upright sword, racing clouds, alert posture and clear sky",
  },
  {
    imageName: "KNIGHT of SORDS",
    number: 12,
    name: "ソードのナイト",
    keywords: ["突進", "決断", "集中", "速度", "言葉の力"],
    symbolism: ["走る馬", "掲げた剣", "強い風", "なびく外套", "流れる雲"],
    atmosphere: ["速い", "確信に満ちた", "切迫している", "前のめり"],
    observationAxes: [
      "考えがまとまった瞬間に、一気に動き出したくなる勢いがあります。",
      "速度は力になりますが、周囲の状況を置き去りにすると摩擦が生まれそうです。",
      "今の言葉は強い影響を持ちます。何を切り開き、何を傷つけるかを見てください。",
    ],
    reflectionPrompts: [
      "急ぐことで得られるものと失うものは何ですか。",
      "今の確信には、確認済みの事実がどれだけありますか。",
      "強く言う前に、目的を一文で言えますか。",
    ],
    answerNotes: [
      "答えは、動くことに傾いています。ただし速さに任せず、目的と伝え方を整えてから進んでください。",
      "突破力があります。だからこそ、相手を切り捨てる言葉になっていないか一呼吸置きましょう。",
      "迷い続ける段階は過ぎています。進むなら、論点を絞ってまっすぐに。",
    ],
    tensions: {
      expansive: ["決断", "突破力", "集中", "迅速な行動"],
      restrictive: ["性急さ", "攻撃的な言葉", "視野の狭さ", "衝突"],
    },
    imagePrompt:
      "A determined knight on a pale horse charging across a windy open plain, slender sword lifted forward into storm-bright air",
  },
  {
    imageName: "QUEEN of SORDS",
    number: 13,
    name: "ソードのクイーン",
    keywords: ["見極め", "独立", "境界線", "率直さ", "知性"],
    symbolism: ["石の玉座", "まっすぐな剣", "差し出した手", "雲と蝶の意匠", "冷たい空"],
    atmosphere: ["澄んでいる", "凛としている", "公平", "孤高"],
    observationAxes: [
      "感情を切り捨てるのではなく、感情に飲まれず本質を見る力が求められています。",
      "優しさと境界線は両立します。曖昧にしないことが、かえって誠実さになります。",
      "過去の痛みから得た知恵が、今の判断を支えてくれそうです。",
    ],
    reflectionPrompts: [
      "今、はっきり線を引くべきことは何ですか。",
      "率直に言うなら、何をどんな言葉で伝えますか。",
      "冷静さの下にある本当の願いは何ですか。",
    ],
    answerNotes: [
      "答えは、明確にすることにあります。曖昧な優しさより、敬意ある率直さを選んでください。",
      "距離を取ることは冷たさではありません。自分の尊厳を守るための知性です。",
      "判断する力があります。感情を否定せず、言葉を整えて境界線を示しましょう。",
    ],
    tensions: {
      expansive: ["見極め", "自立", "明晰さ", "健全な境界線"],
      restrictive: ["厳しさ", "孤立", "切り捨て", "防衛的な言葉"],
    },
    imagePrompt:
      "A composed queen seated on a high stone throne beneath a cold bright sky, one hand extended and one upright sword held beside her",
  },
  {
    imageName: "KING of SORDS",
    number: 14,
    name: "ソードのキング",
    keywords: ["論理", "判断", "責任", "公正", "統率"],
    symbolism: ["正面の王", "垂直の剣", "厳かな石の玉座", "山道", "整った雲"],
    atmosphere: ["厳格", "公平", "落ち着いた権威", "明晰"],
    observationAxes: [
      "感情の波があっても、判断基準を明確にすることで全体を導ける場面です。",
      "責任ある立場から、言葉やルールを整える必要がありそうです。",
      "公平さは冷たさではありません。誰にとっても筋の通る形を探してください。",
    ],
    reflectionPrompts: [
      "今の判断基準を一つだけ選ぶなら何ですか。",
      "感情ではなく原則から見ると、答えはどう変わりますか。",
      "責任を持って言い切るべきことは何ですか。",
    ],
    answerNotes: [
      "答えは、冷静な基準を立てることにあります。好悪よりも、長く通用する筋道を選んでください。",
      "曖昧にしているほど混乱が増えます。必要なルールや結論を、落ち着いて示しましょう。",
      "強さは支配ではなく、公正さを保つために使ってください。言葉に責任を持つ時です。",
    ],
    tensions: {
      expansive: ["公正", "判断力", "責任", "論理的な統率"],
      restrictive: ["支配的", "冷淡", "融通のなさ", "正論の圧力"],
    },
    imagePrompt:
      "A steady king seated front-facing on a severe stone throne at a mountain pass, holding an upright steel sword like a symbol of law",
  },
] satisfies Array<CardSeed & { imageName: string }>

const toCardId = (imageName: string) =>
  imageName.toLowerCase().replaceAll(" ", "-").replaceAll("sords", "swords")

export const swordMinorCards: TarotCard[] = swordCardSeeds.map(
  ({ imageName, ...seed }) => ({
    id: toCardId(imageName),
    image: `/cards/sords/${imageName}.png`,
    ...seed,
  }),
)
