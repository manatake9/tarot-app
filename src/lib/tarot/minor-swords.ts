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
