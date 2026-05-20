import type { CardSeed, TarotCard } from "./types"

const wandCardSeeds = [
  {
    imageName: "ACE of WANDS",
    number: 1,
    name: "ワンドのエース",
    keywords: ["始まり", "創造力", "情熱", "可能性", "行動の火種"],
    symbolism: ["芽吹く杖", "差し出された手", "朝日", "火花", "遠い山並み"],
    atmosphere: ["勢いがある", "明るい", "目覚める", "前向き"],
    observationAxes: [
      "まだ形になる前の衝動やひらめきが、行動の入口として現れています。",
      "考えすぎるよりも、小さく試すことで流れが開きやすい場面です。",
      "今ある熱量は、丁寧に扱えば新しい計画や表現に育っていきます。",
    ],
    reflectionPrompts: [
      "今、最初の一歩に変えられそうなひらめきは何ですか。",
      "まだ小さいけれど大事にしたい情熱はどこにありますか。",
      "勢いを消さずに、現実へ移すための一番小さな行動は何ですか。",
    ],
    answerNotes: [
      "答えは、始めることに近いです。完璧な準備よりも火を絶やさないことが大切です。",
      "新しい挑戦や表現を試すタイミングです。小さな着手が全体を動かします。",
      "衝動だけで走らず、育てたい方向をひとつ決めると力がまとまります。",
    ],
    tensions: {
      expansive: ["創造力", "情熱", "開始", "成長"],
      restrictive: ["焦り", "空回り", "準備不足", "熱しやすさ"],
    },
    imagePrompt:
      "A single living wooden staff rising from a luminous hand of warm cloud, leaves sprouting, sparks drifting upward, sunrise over distant hills",
  },
  {
    imageName: "TWO of WANDS",
    number: 2,
    name: "ワンドの2",
    keywords: ["計画", "展望", "選択", "外の世界", "野心"],
    symbolism: ["二本の杖", "城壁", "小さな地球儀", "遠い海", "夕焼け"],
    atmosphere: ["見渡す", "静かな意欲", "準備中", "広がり"],
    observationAxes: [
      "今いる場所から次の可能性を見渡し、進む方向を選ぼうとしています。",
      "行動の前に、視野を広げて全体像を確かめる時間が役に立ちます。",
      "安心できる場所にいながらも、心はすでに外の世界へ向かっています。",
    ],
    reflectionPrompts: [
      "今、広げたい世界や関わりはどこにありますか。",
      "動き出す前に確認しておきたい条件は何ですか。",
      "慣れた場所に残る理由と、外へ出たい理由をそれぞれ挙げるなら何ですか。",
    ],
    answerNotes: [
      "答えは、すぐに飛び出すよりも計画を持って視野を広げることにあります。",
      "選択肢は増えています。どの方向に力を注ぐかを決める段階です。",
      "小さな調査や準備が、次の大きな一歩を現実的にします。",
    ],
    tensions: {
      expansive: ["展望", "計画", "野心", "選択肢"],
      restrictive: ["先延ばし", "迷い", "現状維持", "決断不足"],
    },
    imagePrompt:
      "A solitary figure on a stone terrace between two wooden staffs, holding a small globe, looking over a wide valley and sea",
  },
  {
    imageName: "THREE of WANDS",
    number: 3,
    name: "ワンドの3",
    keywords: ["拡大", "旅立ち", "成果待ち", "見通し", "協力"],
    symbolism: ["三本の杖", "高い崖", "遠い船", "広い水平線", "風を受ける外套"],
    atmosphere: ["遠くを見る", "期待", "落ち着いた前進", "開放感"],
    observationAxes: [
      "すでに打った手が外へ広がり、結果や反応を待つ段階に入っています。",
      "今は目先だけでなく、長い距離を見通す姿勢が流れを支えます。",
      "自分ひとりの内側から、他者や遠方との関係へ力が伸びています。",
    ],
    reflectionPrompts: [
      "今、外へ向けて広がり始めているものは何ですか。",
      "すぐに結果を急がず、待ちながら整えられることはありますか。",
      "次に協力や交流を広げるなら、どんな相手や場所が浮かびますか。",
    ],
    answerNotes: [
      "答えは、視野を広げたまま次の展開を待ち、必要な準備を続けることにあります。",
      "すでに流れは外へ出ています。焦らず、遠くから返ってくる兆しを見てください。",
      "拡大のカードですが、足元の拠点を保つことで勢いが安定します。",
    ],
    tensions: {
      expansive: ["拡大", "展望", "交流", "成長"],
      restrictive: ["待てなさ", "過信", "見込み違い", "距離感の不足"],
    },
    imagePrompt:
      "A traveler on a high ridge with three upright wooden staffs, watching distant ships under a golden horizon",
  },
  {
    imageName: "FOUR of WANDS",
    number: 4,
    name: "ワンドの4",
    keywords: ["祝福", "安定", "節目", "居場所", "共同体"],
    symbolism: ["四本の杖", "花飾りの門", "村の入口", "集う人々", "灯り"],
    atmosphere: ["あたたかい", "迎え入れる", "安心", "穏やかな喜び"],
    observationAxes: [
      "努力の途中にある節目を祝い、安心できる土台を確認するカードです。",
      "誰かと喜びを分かち合うことで、次へ進む力が戻ってきます。",
      "完成ではなく、これから育てるための安定した場所が見えています。",
    ],
    reflectionPrompts: [
      "最近、きちんと祝ってよい小さな達成は何ですか。",
      "安心して戻れる場所や関係はどこにありますか。",
      "喜びを誰かと分かち合うなら、どんな形が自然ですか。",
    ],
    answerNotes: [
      "答えは、いったん節目を認めて場を整えることにあります。",
      "孤独に進めるより、安心できる人や場所と喜びを共有すると力が増します。",
      "安定は停滞ではありません。次の挑戦へ向かうための足場です。",
    ],
    tensions: {
      expansive: ["祝福", "居場所", "安定", "共有"],
      restrictive: ["内輪化", "油断", "見せかけの平和", "節目への執着"],
    },
    imagePrompt:
      "Four upright wooden staffs forming a garlanded arch before a village gate, a small group gathering beneath warm lanterns",
  },
  {
    imageName: "FIVE of WANDS",
    number: 5,
    name: "ワンドの5",
    keywords: ["競争", "摩擦", "意見の衝突", "試行錯誤", "活気"],
    symbolism: ["五本の杖", "訓練場", "交差する動き", "砂埃", "夕日の火花"],
    atmosphere: ["騒がしい", "活発", "ぶつかる", "熱がある"],
    observationAxes: [
      "複数の力や考えがぶつかり、方向がまだまとまりきっていません。",
      "摩擦は必ずしも悪いものではなく、調整や成長の材料になります。",
      "勝ち負けだけを見ると、そこで起きている学びを見落としやすくなります。",
    ],
    reflectionPrompts: [
      "今、どんな意見や欲求がぶつかっていますか。",
      "競争を消すのではなく、建設的に使う方法はありますか。",
      "自分が守りたい立場と、相手が守りたい立場は何でしょうか。",
    ],
    answerNotes: [
      "答えは、摩擦を避けることではなく、整理して扱うことにあります。",
      "混乱の中にもエネルギーがあります。ルールや目的を明確にすると前へ進みます。",
      "今は静かな合意より、ぶつかりながら形を探す段階かもしれません。",
    ],
    tensions: {
      expansive: ["活気", "練習", "多様性", "成長"],
      restrictive: ["争い", "散漫", "消耗", "勝ち負けへの固執"],
    },
    imagePrompt:
      "Five young figures crossing wooden staffs in a dusty training ground, competitive practice rather than violence, sunset sparks",
  },
  {
    imageName: "SIX of WANDS",
    number: 6,
    name: "ワンドの6",
    keywords: ["勝利", "承認", "自信", "達成", "信頼"],
    symbolism: ["月桂冠の杖", "白い馬", "村の道", "見守る人々", "夕陽"],
    atmosphere: ["誇らしい", "明るい", "堂々とした", "認められる"],
    observationAxes: [
      "努力が見える形で認められ、次の自信につながるタイミングです。",
      "個人の勝利でありながら、周囲の支えや期待も同時に映っています。",
      "称賛を受け取ることは、次の責任を引き受ける準備にもなります。",
    ],
    reflectionPrompts: [
      "今、素直に受け取ってよい評価や成果は何ですか。",
      "その達成を支えてくれた人や環境はありますか。",
      "認められたあと、どんな姿勢で次へ進みたいですか。",
    ],
    answerNotes: [
      "答えは、自分の成果を過小評価せず受け取ることにあります。",
      "前進してきたことが周囲にも伝わっています。堂々としていて大丈夫です。",
      "ただし承認だけを目的にすると力が外へ流れます。中心の意志も忘れないでください。",
    ],
    tensions: {
      expansive: ["勝利", "承認", "自信", "信頼"],
      restrictive: ["慢心", "評価依存", "期待の重さ", "見栄"],
    },
    imagePrompt:
      "A calm rider on a pale horse holding an upright wooden staff crowned with laurel, moving through a village path",
  },
  {
    imageName: "SEVEN of WANDS",
    number: 7,
    name: "ワンドの7",
    keywords: ["防衛", "勇気", "立場を守る", "挑戦", "粘り"],
    symbolism: ["丘の上の人物", "一本の杖", "下から迫る六本の杖", "強い風", "高低差"],
    atmosphere: ["緊張感", "踏ん張る", "孤独", "覚悟"],
    observationAxes: [
      "得た場所や信念を守るために、踏みとどまる力が求められています。",
      "周囲の圧力が強くても、自分の立場を明確にすることで流されにくくなります。",
      "すべてに反応するより、何を守るのかを絞ることが大切です。",
    ],
    reflectionPrompts: [
      "今、守りたい立場や価値観は何ですか。",
      "全部に応戦せず、優先して向き合うべきことはどれですか。",
      "孤立しているように感じる中で、足場にできるものはありますか。",
    ],
    answerNotes: [
      "答えは、引き下がるよりも大事な線を守ることに近いです。",
      "強い態度が必要な場面ですが、反射的に戦うより意図を持つことが助けになります。",
      "守る対象を明確にすれば、余計な争いに力を取られにくくなります。",
    ],
    tensions: {
      expansive: ["勇気", "防衛", "集中", "粘り"],
      restrictive: ["孤立", "過剰防衛", "消耗", "警戒しすぎ"],
    },
    imagePrompt:
      "A lone figure on a steep hilltop holding one wooden staff defensively, six other staffs rising from below",
  },
  {
    imageName: "EIGHT of WANDS",
    number: 8,
    name: "ワンドの8",
    keywords: ["急展開", "連絡", "加速", "移動", "勢い"],
    symbolism: ["八本の飛ぶ杖", "黄金の空", "川", "遠い町", "流れる火の跡"],
    atmosphere: ["速い", "開けている", "一直線", "動き出す"],
    observationAxes: [
      "停滞していたものが急に動き出し、流れが速くなっています。",
      "情報や連絡、移動が鍵になり、遠くのものが近づいてくる気配があります。",
      "勢いがある分、受け取ったものをすばやく整理することも大切です。",
    ],
    reflectionPrompts: [
      "今、急に動き出していることや連絡はありますか。",
      "流れに乗るために、手放して身軽にできるものは何ですか。",
      "速さに飲まれず、確認しておきたい一点は何ですか。",
    ],
    answerNotes: [
      "答えは、流れが来たら素早く反応することにあります。",
      "物事は動きやすくなっています。短い連絡や即時の対応が効果的です。",
      "ただし勢いだけで決めすぎないよう、重要な確認は残してください。",
    ],
    tensions: {
      expansive: ["加速", "連絡", "移動", "進展"],
      restrictive: ["性急さ", "確認不足", "情報過多", "流される"],
    },
    imagePrompt:
      "Eight wooden staffs flying diagonally through a clear golden sky above rolling hills and a winding river",
  },
] satisfies Array<CardSeed & { imageName: string }>

const toCardId = (imageName: string) =>
  imageName.toLowerCase().replaceAll(" ", "-")

export const wandMinorCards: TarotCard[] = wandCardSeeds.map(
  ({ imageName, ...seed }) => ({
    id: toCardId(imageName),
    image: `/cards/wands/${imageName}.png`,
    ...seed,
  }),
)
