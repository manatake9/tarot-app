export type SpreadType = "daily" | "three-card" | "celtic-cross"

export type TarotCard = {
  id: string
  name: string
  image: string
  symbolism: string[]
  atmosphere: string[]
  observation: string
  reflectionPrompts: string[]
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
    observation:
      "崖の縁に立つ姿は、危うさにも、まだ名前のついていない自由にも見える。白い犬は警告者かもしれないし、旅に同行する存在かもしれない。ここでは結論を急がず、まだ意味が固まっていない状態そのものを眺めてみる。",
    reflectionPrompts: [
      "いま自分が「危険」と呼んでいるものは、本当に危険なのか。",
      "身軽でいるために、今日いったん置いておける荷物は何か。",
    ],
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
    observation:
      "上と下をつなぐ手の形は、何かを支配する姿にも、ただ通路になっている姿にも見える。机の道具は力の証明ではなく、注意を向ける対象として置かれている。いま持っているものをどう使うか以前に、それをどのように見ているかを観察してみる。",
    reflectionPrompts: [
      "すでに手元にあるのに、まだ道具として見えていないものは何か。",
      "今日の自分は、何を変えようとするより前に、何をよく見る必要があるか。",
    ],
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
    observation:
      "黒と白の柱のあいだに座る姿は、どちらか一方を選ぶ前の静けさを保っている。巻物は開かれているようで、すべてを見せてはいない。見えないものを暴くのではなく、まだ見えないまま存在しているものに気づく時間として読む。",
    reflectionPrompts: [
      "今日、すぐに言葉にしないほうがよい感覚はあるか。",
      "判断を保留したとき、そこに残る微かな違和感や静けさは何か。",
    ],
    imagePrompt:
      "A quiet philosophical tarot card of The High Priestess between black and white pillars, scroll, moon crown, veil, dark violet starlit ambience, subtle glow",
  },
]
