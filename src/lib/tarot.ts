export type SpreadType = "daily" | "three-card" | "celtic-cross"

export type TarotCard = {
  id: string
  name: string
  image: string
  symbolism: string[]
  atmosphere: string[]
  observationAxes: string[]
  reflectionPrompts: string[]
  tensions: {
    expansive: string[]
    restrictive: string[]
  }
  imagePrompt: string
}

export const cards: TarotCard[] = [
  {
    id: "fool",
    name: "The Fool",
    image: "/cards/THE FOOL.png",
    symbolism: [
      "崖の端に立つ若者",
      "白い犬",
      "小さな荷物",
      "太陽",
      "白い花",
      "ワンド",
      "0",
    ],
    atmosphere: ["始まり", "未定義", "軽さ", "境界", "飛躍"],
    observationAxes: [
      "崖は危険にも、開けた視界にも見える",
      "白い犬は警告者にも、同行者にも見える",
      "小さな荷物は身軽さと準備不足の両方を示す",
    ],
    reflectionPrompts: [
      "いま自分が「危険」と呼んでいるものは、本当に危険なのか。",
      "身軽でいるために、今日いったん置いておける荷物は何か。",
    ],
    tensions: {
      expansive: ["自由", "未定義", "開かれた可能性"],
      restrictive: ["無防備", "見落とし", "地面からの距離"],
    },
    imagePrompt:
      "A quiet philosophical tarot card of The Fool at the edge of a cliff, small white dog, pale sun, minimal mystical atmosphere, deep violet night, contemplative mood",
  },
  {
    id: "magician",
    name: "The Magician",
    image: "/cards/THE MAGICIAN.png",
    symbolism: [
      "テーブルの上の道具",
      "上を指す右手",
      "下を指す左手",
      "無限大の記号",
      "赤いローブ",
      "薔薇",
      "百合",
      "1",
    ],
    atmosphere: ["媒介", "集中", "変換", "意志", "手ざわり"],
    observationAxes: [
      "上と下をつなぐ手は支配にも通路にも見える",
      "道具は力の証明ではなく、注意を向ける対象として置かれている",
      "無限大の記号は可能性と反復の両方を含む",
    ],
    reflectionPrompts: [
      "すでに手元にあるのに、まだ道具として見えていないものは何か。",
      "今日の自分は、何を変えようとするより前に、何をよく見る必要があるか。",
    ],
    tensions: {
      expansive: ["媒介", "集中", "形にする力"],
      restrictive: ["操作", "虚勢", "意志への過信"],
    },
    imagePrompt:
      "A restrained philosophical tarot card of The Magician, table with symbolic tools, one hand upward and one downward, violet-black ambience, subtle glow, contemplative composition",
  },
  {
    id: "high-priestess",
    name: "The High Priestess",
    image: "/cards/THE HIGH PRIESTESS.png",
    symbolism: [
      "黒と白の柱",
      "巻物",
      "月の冠",
      "青いローブ",
      "ベール",
      "ザクロ模様",
      "三日月",
      "水",
      "2",
    ],
    atmosphere: ["静寂", "保留", "奥行き", "直感", "境界"],
    observationAxes: [
      "黒と白の柱は対立ではなく、間に残る静けさを作る",
      "巻物は開示と非開示の境目にある",
      "ベールの奥は、暴く対象ではなく待つ対象として見える",
    ],
    reflectionPrompts: [
      "今日、すぐに言葉にしないほうがよい感覚はあるか。",
      "判断を保留したとき、そこに残る微かな違和感や静けさは何か。",
    ],
    tensions: {
      expansive: ["静寂", "直感", "奥行き"],
      restrictive: ["閉ざされること", "曖昧さ", "言葉にならなさ"],
    },
    imagePrompt:
      "A quiet philosophical tarot card of The High Priestess between black and white pillars, scroll, moon crown, veil, dark violet starlit ambience, subtle glow",
  },
]
