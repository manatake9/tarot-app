import type { CardSeed, TarotCard } from "./types"

const cupCardSeeds = [
  {
    imageName: "ACE of CUPS",
    number: 1,
    name: "カップのエース",
    keywords: ["感情の始まり", "受容", "祝福", "直感", "心の潤い"],
    symbolism: ["あふれる杯", "月光の水面", "白い光", "睡蓮", "静かな波紋"],
    atmosphere: ["やわらかい", "開かれている", "清らか", "静かな喜び"],
    observationAxes: [
      "新しい感情やつながりが、まだ名前のない形で流れ込み始めています。",
      "無理に結論を出すより、心が自然に反応するものを受け取る日です。",
      "小さな好意や直感を軽く扱わないことが、次の流れを開きます。",
    ],
    reflectionPrompts: [
      "今日、素直に受け取ってもよさそうな優しさは何ですか。",
      "まだ言葉になっていない気持ちは、どこに向かおうとしていますか。",
      "心が少し潤う選択をひとつ挙げるなら何ですか。",
    ],
    answerNotes: [
      "答えは、押し切ることより受け取ることに近そうです。",
      "小さな始まりを大切にすると、感情の流れが自然に広がります。",
      "いまは説明よりも、心がやわらぐ反応を信じてよい場面です。",
    ],
    tensions: {
      expansive: ["祝福", "受容", "直感", "心の解放"],
      restrictive: ["感情過多", "期待しすぎ", "境界の薄さ", "受け身"],
    },
    imagePrompt:
      "A single ornate chalice floating above a still moonlit pool, water overflowing into ripples, lotus flowers, emotional blessing",
  },
  {
    imageName: "TWO of CUPS",
    number: 2,
    name: "カップの2",
    keywords: ["相互理解", "信頼", "対話", "調和", "心の交換"],
    symbolism: ["二つの杯", "向かい合う人物", "月明かり", "光の糸", "中庭"],
    atmosphere: ["親密", "穏やか", "慎重", "対等"],
    observationAxes: [
      "関係性の中で、同じ温度で向き合えるかが問われています。",
      "強く近づくより、相手の反応を見ながら杯を差し出すような姿勢が合います。",
      "合意や和解は、片方だけが頑張る形では長続きしません。",
    ],
    reflectionPrompts: [
      "今日、対等に話し合いたい相手は誰ですか。",
      "差し出すことと受け取ることのバランスは取れていますか。",
      "その関係で、まだ言葉にしていない本音は何ですか。",
    ],
    answerNotes: [
      "答えは、ひとりで決め切るより対話の中で見えてきます。",
      "相手に合わせすぎず、自分の杯も同じ高さに置くことが大切です。",
      "信頼を急がず、小さな一致を積み重ねる流れです。",
    ],
    tensions: {
      expansive: ["信頼", "和解", "共感", "相互性"],
      restrictive: ["依存", "遠慮", "不均衡", "期待の投影"],
    },
    imagePrompt:
      "Two calm figures facing each other in a moonlit courtyard, each holding a chalice at heart height, mutual recognition",
  },
  {
    imageName: "THREE of CUPS",
    number: 3,
    name: "カップの3",
    keywords: ["祝福", "友情", "共有", "回復", "小さな宴"],
    symbolism: ["三つの杯", "輪になる人物", "泉", "花", "月夜の庭"],
    atmosphere: ["あたたかい", "軽やか", "親しい", "安心"],
    observationAxes: [
      "喜びをひとりで抱え込まず、誰かと分かち合うことで力が戻ります。",
      "大きな成果でなくても、ねぎらい合える場を作ることに意味があります。",
      "仲間との会話が、気持ちの詰まりをほどくきっかけになります。",
    ],
    reflectionPrompts: [
      "今日、誰と小さな喜びを共有したいですか。",
      "最近、自分や誰かをきちんと祝えた出来事はありますか。",
      "ひとりで抱えずに輪の中へ戻せるものは何ですか。",
    ],
    answerNotes: [
      "孤立して整えるより、安心できる人との共有が助けになります。",
      "祝うことは浮かれることではなく、回復を認める行為です。",
      "短い会話や小さな集まりが、今日の流れを明るくします。",
    ],
    tensions: {
      expansive: ["友情", "祝福", "共有", "回復"],
      restrictive: ["同調圧力", "騒がしさ", "浅い共感", "置いてけぼり"],
    },
    imagePrompt:
      "Three robed figures raising chalices softly beside a reflective fountain, wildflowers, friendship and shared relief",
  },
  {
    imageName: "FOUR of CUPS",
    number: 4,
    name: "カップの4",
    keywords: ["内省", "停滞", "見落とし", "距離", "再評価"],
    symbolism: ["三つの杯", "差し出される杯", "木陰", "池", "伏せた視線"],
    atmosphere: ["静か", "閉じている", "考え込む", "少し重い"],
    observationAxes: [
      "目の前の提案や好意を、疲れから受け取れなくなっているかもしれません。",
      "退屈や停滞は、心が次に何を欲しがるかを確認する時間でもあります。",
      "いま見えていない選択肢は、外よりも自分の受け取り方の中にあります。",
    ],
    reflectionPrompts: [
      "今日、差し出されているのに見ないふりをしているものはありますか。",
      "本当に要らないものと、疲れて受け取れないものは分けられますか。",
      "心が閉じている理由をひとつ言葉にするなら何ですか。",
    ],
    answerNotes: [
      "急いで動くより、まず自分が何に飽き、何に疲れているかを見る流れです。",
      "受け取るか断るかの前に、見えている選択肢を整理するとよさそうです。",
      "停滞は失敗ではなく、感情の向きを調整する合図です。",
    ],
    tensions: {
      expansive: ["内省", "再評価", "静けさ", "選び直し"],
      restrictive: ["無関心", "閉鎖", "倦怠", "見落とし"],
    },
    imagePrompt:
      "A seated figure beneath a quiet tree beside a still pond, three chalices on the ground and a fourth offered by mist",
  },
  {
    imageName: "FIVE of CUPS",
    number: 5,
    name: "カップの5",
    keywords: ["喪失", "後悔", "回復の兆し", "受け止める", "残されたもの"],
    symbolism: ["倒れた杯", "二つの立つ杯", "黒い外套", "橋", "濡れた石畳"],
    atmosphere: ["悲しみ", "冷たい", "静まり返る", "余韻"],
    observationAxes: [
      "失ったものに意識が向きやすい日ですが、まだ残っている支えも同じ場にあります。",
      "悲しみを急いで前向きに変える必要はありません。",
      "後悔を責める材料ではなく、次に守りたいものを知る手がかりにできます。",
    ],
    reflectionPrompts: [
      "今日、まだ残っている二つの杯にあたるものは何ですか。",
      "後悔の奥にある、本当は大切にしたかったものは何ですか。",
      "悲しみを否定せずに一歩だけ動くなら、何ができますか。",
    ],
    answerNotes: [
      "答えは、失ったものを忘れることではなく、残ったものへ少しずつ向き直ることです。",
      "いまの痛みには意味がありますが、そこだけが全体ではありません。",
      "橋はまだ見えています。回復は小さな方向転換から始まります。",
    ],
    tensions: {
      expansive: ["受容", "回復", "学び", "残された支え"],
      restrictive: ["後悔", "喪失感", "悲観", "過去への固着"],
    },
    imagePrompt:
      "A cloaked figure before three spilled chalices on wet stone, two upright chalices behind, narrow bridge, grief and recovery",
  },
  {
    imageName: "SIX of CUPS",
    number: 6,
    name: "カップの6",
    keywords: ["記憶", "懐かしさ", "純粋さ", "贈り物", "やさしい交換"],
    symbolism: ["花の入った杯", "子どもたち", "古い庭", "石畳", "夕暮れ"],
    atmosphere: ["懐かしい", "やさしい", "無垢", "あたたかい"],
    observationAxes: [
      "過去の記憶が、今の自分を責めるためではなく支えるために戻ってきています。",
      "素朴な好意や小さな贈り物が、思った以上に心を整えます。",
      "昔のやり方に戻るのではなく、当時の純粋な願いを今に持ち帰るカードです。",
    ],
    reflectionPrompts: [
      "昔の自分が今の自分に渡してくれそうなものは何ですか。",
      "今日、見返りなく渡せる小さな親切はありますか。",
      "懐かしさの中に、今も大切にしたい願いは残っていますか。",
    ],
    answerNotes: [
      "複雑に考えすぎるより、素直な好意を基準にすると道が見えます。",
      "過去は戻る場所ではなく、やさしさを取り出す場所として使えます。",
      "小さな贈り物や思い出が、今日の答えをやわらかくします。",
    ],
    tensions: {
      expansive: ["純粋さ", "親切", "記憶の回復", "安心"],
      restrictive: ["過去への逃避", "幼さ", "理想化", "停滞"],
    },
    imagePrompt:
      "Two young figures in an old garden courtyard, one offering a flower-filled chalice, nostalgia and innocent exchange",
  },
  {
    imageName: "SEVEN of CUPS",
    number: 7,
    name: "カップの7",
    keywords: ["選択肢", "幻想", "迷い", "願望", "見極め"],
    symbolism: ["七つの杯", "霧", "象徴の影", "夢", "立ち尽くす人物"],
    atmosphere: ["夢幻的", "不確か", "魅惑的", "揺らぐ"],
    observationAxes: [
      "可能性が多いほど、どれが本当に必要なのか見えにくくなります。",
      "魅力的に見える選択肢の中に、願望の投影が混ざっているかもしれません。",
      "今日の鍵は、全部を選ぼうとせず、現実に持ち帰れる杯を見分けることです。",
    ],
    reflectionPrompts: [
      "今ある選択肢のうち、現実に一歩進められるものはどれですか。",
      "欲しいと思っているものは、本当に自分の願いですか。",
      "迷いを増やしている情報や期待は何ですか。",
    ],
    answerNotes: [
      "答えは、選択肢を増やすより絞ることにあります。",
      "夢を見る力は大切ですが、今日は形にできるものを選ぶとよさそうです。",
      "一番まぶしい杯ではなく、手に取ったあとも大切にできる杯を見てください。",
    ],
    tensions: {
      expansive: ["想像力", "可能性", "願望の発見", "選択"],
      restrictive: ["幻想", "優柔不断", "現実逃避", "欲張り"],
    },
    imagePrompt:
      "A solitary figure before seven floating chalices emerging from luminous mist, symbolic silhouettes, choice and fantasy",
  },
  {
    imageName: "EIGHT of CUPS",
    number: 8,
    name: "カップの8",
    keywords: ["旅立ち", "手放す", "成熟", "探索", "静かな決意"],
    symbolism: ["八つの杯", "去っていく旅人", "月", "山道", "水辺"],
    atmosphere: ["孤独", "決意", "静けさ", "夜明け前"],
    observationAxes: [
      "壊れていないものでも、もう心がそこに残っていないなら離れる時があります。",
      "満たされなさを責めるより、次に探したいものを認めるカードです。",
      "今日の決断は派手ではありませんが、内側では大きな節目になりそうです。",
    ],
    reflectionPrompts: [
      "まだ形は残っているけれど、心が離れ始めているものはありますか。",
      "次に探したい深い満足は何ですか。",
      "静かに離れるために、今日整えておきたいことは何ですか。",
    ],
    answerNotes: [
      "答えは、無理に満足したふりを続けないことに近そうです。",
      "手放すことは否定ではなく、より深いものを探す成熟の動きです。",
      "すぐに説明できなくても、離れる必要を感じているならその感覚を観察してください。",
    ],
    tensions: {
      expansive: ["旅立ち", "成熟", "探索", "本音への移動"],
      restrictive: ["逃避", "孤立", "未練", "説明不足"],
    },
    imagePrompt:
      "A traveler walking away from eight stacked chalices near a quiet shoreline, crescent moon, mountains, necessary solitude",
  },
] satisfies Array<CardSeed & { imageName: string }>

const toCardId = (imageName: string) =>
  imageName.toLowerCase().replaceAll(" ", "-")

export const cupMinorCards: TarotCard[] = cupCardSeeds.map(
  ({ imageName, ...seed }) => ({
    id: toCardId(imageName),
    image: `/cards/cups/${imageName}.png`,
    ...seed,
  }),
)
