import type { CardSeed, TarotCard } from "./types"

const pentacleCardSeeds = [
  {
    imageName: "ACE of PENTACLES",
    number: 1,
    name: "ペンタクルのエース",
    keywords: ["現実の始まり", "資源", "機会", "安定", "育つ種"],
    symbolism: ["金貨", "差し出された手", "庭", "門", "新芽"],
    atmosphere: ["実りの予感", "落ち着いた", "手触りがある", "堅実"],
    observationAxes: [
      "まだ小さいけれど、現実に根を下ろせる機会が差し出されています。",
      "理想を語るだけでなく、手に取れる形へ移す入口に立っています。",
      "今日の幸運は派手ではなく、育てれば価値になる種として現れます。",
    ],
    reflectionPrompts: [
      "今日、形にできそうな小さな機会は何ですか。",
      "今ある資源をひとつ挙げるなら何がありますか。",
      "育てたいもののために、最初に整える現実的な土台は何ですか。",
    ],
    answerNotes: [
      "答えは、手を伸ばせる範囲の具体的な一歩にあります。",
      "大きく広げる前に、種を植える場所を決めると流れが安定します。",
      "可能性を可能性のままにせず、予定や物や行動へ変える日です。",
    ],
    tensions: {
      expansive: ["機会", "安定", "実り", "具体化"],
      restrictive: ["保守性", "物質への偏り", "慎重すぎる", "先延ばし"],
    },
    imagePrompt:
      "A luminous golden pentacle offered by a calm hand above a garden path, archway, fresh leaves, grounded opportunity",
  },
  {
    imageName: "TWO of PENTACLES",
    number: 2,
    name: "ペンタクルの2",
    keywords: ["調整", "やりくり", "柔軟性", "変化への対応", "リズム"],
    symbolism: ["二つの金貨", "無限大の紐", "波", "揺れる船", "軽い身のこなし"],
    atmosphere: ["動きがある", "器用", "揺れている", "軽やか"],
    observationAxes: [
      "複数の現実を抱えながら、完全な安定よりも調整力が求められています。",
      "予定や役割の揺れは、崩壊ではなくリズムを取り直す合図です。",
      "今は一つに固定するより、優先順位を動かしながら進むほうが合います。",
    ],
    reflectionPrompts: [
      "今日、同時に抱えている二つの用事や役割は何ですか。",
      "少し軽くするために、順番を入れ替えられるものはありますか。",
      "今の自分に合う無理のないリズムはどんな形ですか。",
    ],
    answerNotes: [
      "答えは、完璧に片づけることより上手に回すことに近いです。",
      "優先順位を固定しすぎず、その場の波を見て調整すると進みます。",
      "余白を一つ作るだけで、全体の負担がかなり軽くなります。",
    ],
    tensions: {
      expansive: ["柔軟性", "調整", "軽やかさ", "器用さ"],
      restrictive: ["忙殺", "不安定", "散漫", "負担過多"],
    },
    imagePrompt:
      "A graceful figure juggling two golden pentacles linked by an infinity ribbon, rolling waves and small ships behind",
  },
  {
    imageName: "THREE of PENTACLES",
    number: 3,
    name: "ペンタクルの3",
    keywords: ["協働", "技術", "計画", "評価", "形にする力"],
    symbolism: ["三つの金貨", "工房", "設計図", "職人", "見守る人々"],
    atmosphere: ["集中", "実務的", "建設的", "信頼"],
    observationAxes: [
      "ひとりの努力だけでなく、役割を分けて形にする段階に入っています。",
      "自分の技術や視点が、誰かの視点と合わさることで強くなります。",
      "評価を恐れるより、途中の形を見せて調整することが役に立ちます。",
    ],
    reflectionPrompts: [
      "今日、相談したほうが完成に近づく相手は誰ですか。",
      "自分が担当すべき技術や役割はどこですか。",
      "途中段階でも見せられるものはありますか。",
    ],
    answerNotes: [
      "答えは、ひとりで抱えず、必要な人と設計図を共有することにあります。",
      "小さな確認やフィードバックが、後の手戻りを減らします。",
      "あなたの技術は、具体的な場で使うほど信頼に変わります。",
    ],
    tensions: {
      expansive: ["協働", "熟練", "信頼", "構築"],
      restrictive: ["承認欲求", "分担不足", "未熟さ", "閉じた作業"],
    },
    imagePrompt:
      "Three figures reviewing a stone arch design in a moonlit workshop, three golden pentacles carved above, collaborative craft",
  },
  {
    imageName: "FOUR of PENTACLES",
    number: 4,
    name: "ペンタクルの4",
    keywords: ["保持", "防衛", "所有", "安定への執着", "境界"],
    symbolism: ["四つの金貨", "抱え込む人物", "都市", "硬い姿勢", "足元の金貨"],
    atmosphere: ["閉じている", "慎重", "固い", "守り"],
    observationAxes: [
      "守るべきものと、握りしめすぎて流れを止めているものが混ざっています。",
      "安心を得るための境界が、必要以上に狭くなっていないか見直す時です。",
      "失う怖さが強いほど、本当に大切なものを選び直す必要があります。",
    ],
    reflectionPrompts: [
      "今日、守りたいものは何ですか。",
      "逆に、少し手をゆるめても大丈夫そうなものはありますか。",
      "安心のために作ったルールが、今の自分を窮屈にしていませんか。",
    ],
    answerNotes: [
      "答えは、全部を抱え込むことではなく、守る対象を選ぶことにあります。",
      "境界は必要ですが、空気が通る程度の余白を残すと楽になります。",
      "所有や正しさに固まりすぎず、使えるものを使える状態に戻しましょう。",
    ],
    tensions: {
      expansive: ["保持", "安定", "境界", "堅実さ"],
      restrictive: ["執着", "閉鎖性", "不信", "手放せなさ"],
    },
    imagePrompt:
      "A solitary figure holding four golden pentacles tightly before a quiet city, guarded posture, cool twilight stability",
  },
  {
    imageName: "FIVE of PENTACLES",
    number: 5,
    name: "ペンタクルの5",
    keywords: ["不足感", "孤立", "助けを求める", "回復の入口", "寒さ"],
    symbolism: ["五つの金貨", "雪", "窓の光", "寄り添う人々", "外側"],
    atmosphere: ["寒い", "心細い", "静かな痛み", "助けの気配"],
    observationAxes: [
      "不足や不安に目が向きやすい一方で、近くに助けの光もあります。",
      "困っていることを隠すほど、支援の入口が見えにくくなっています。",
      "孤立感は事実のすべてではなく、今いる場所から少し動く合図です。",
    ],
    reflectionPrompts: [
      "今日、ひとりで抱え込まず頼れることは何ですか。",
      "不足しているものと、すでに残っているものを分けて見るなら何がありますか。",
      "小さな回復のために、どの扉を叩けそうですか。",
    ],
    answerNotes: [
      "答えは、強がることより支援の光に気づくことに近いです。",
      "不足を責めるより、今使える助けを一つ選ぶと状況が動きます。",
      "寒さの中でも、完全に閉ざされているわけではありません。",
    ],
    tensions: {
      expansive: ["支援", "回復", "連帯", "現実を見る力"],
      restrictive: ["孤立", "欠乏感", "自己否定", "諦め"],
    },
    imagePrompt:
      "Two weary figures walking through gentle snow past a warm stained-glass window with five golden pentacles, hardship and nearby refuge",
  },
  {
    imageName: "SIX of PENTACLES",
    number: 6,
    name: "ペンタクルの6",
    keywords: ["分かち合い", "支援", "公平", "受け取る力", "循環"],
    symbolism: ["六つの金貨", "天秤", "差し出す手", "受け取る人", "秤量"],
    atmosphere: ["穏やか", "現実的な優しさ", "均衡", "あたたかい"],
    observationAxes: [
      "与えることと受け取ることのバランスが、今日の関係性を整えます。",
      "支援は上下関係ではなく、必要な場所へ資源を流す行為として見直せます。",
      "公平さは同じ量ではなく、状況に応じた配分として現れています。",
    ],
    reflectionPrompts: [
      "今日、無理なく分けられるものは何ですか。",
      "受け取ることを遠慮しすぎている助けはありますか。",
      "公平にするために、配分を見直したいものは何ですか。",
    ],
    answerNotes: [
      "答えは、必要な場所へ必要な分を流すことにあります。",
      "与える側と受け取る側は固定ではありません。循環を止めないことが大切です。",
      "小さな支援や調整が、関係全体を穏やかにします。",
    ],
    tensions: {
      expansive: ["寛大さ", "公平", "循環", "支援"],
      restrictive: ["上下関係", "見返り期待", "依存", "不均衡"],
    },
    imagePrompt:
      "A balanced figure holding scales while sharing coins with two people, six golden pentacles glowing softly, practical generosity",
  },
  {
    imageName: "SEVEN of PENTACLES",
    number: 7,
    name: "ペンタクルの7",
    keywords: ["待つ力", "評価", "育成", "途中経過", "忍耐"],
    symbolism: ["七つの金貨", "育つ蔓", "農具", "見つめる人物", "畑"],
    atmosphere: ["静か", "忍耐強い", "少し疲れた", "育っている"],
    observationAxes: [
      "すぐ結果が出ないものを、途中で見捨てるか育て続けるかを見ています。",
      "努力は無駄ではありませんが、続け方の調整は必要かもしれません。",
      "待つことと放置することの違いを、今日は丁寧に見分ける日です。",
    ],
    reflectionPrompts: [
      "今日、急がず成長を待つ必要があるものは何ですか。",
      "続けるために、やり方を少し変えるならどこですか。",
      "今の途中経過から、何を学べそうですか。",
    ],
    answerNotes: [
      "答えは、すぐ収穫することより育ち具合を見て手入れすることにあります。",
      "焦りは自然ですが、積み重ねたものはすでに形を持ち始めています。",
      "続けるものと見直すものを分けると、忍耐がただの我慢でなくなります。",
    ],
    tensions: {
      expansive: ["忍耐", "育成", "評価", "継続"],
      restrictive: ["焦り", "停滞感", "報われなさ", "迷い"],
    },
    imagePrompt:
      "A gardener leaning on a tool, studying a vine bearing seven golden pentacles in a quiet field, patient assessment",
  },
  {
    imageName: "EIGHT of PENTACLES",
    number: 8,
    name: "ペンタクルの8",
    keywords: ["練習", "職人性", "集中", "積み重ね", "改善"],
    symbolism: ["八つの金貨", "作業台", "刻印", "道具", "反復"],
    atmosphere: ["集中している", "地道", "静かな熱", "誠実"],
    observationAxes: [
      "才能よりも、繰り返し磨く姿勢が結果を作る段階です。",
      "小さな改善を重ねることで、見えにくい実力が確実に育っています。",
      "派手な達成より、手元の作業に意識を戻すことが流れを整えます。",
    ],
    reflectionPrompts: [
      "今日、少しだけ上達させたい作業は何ですか。",
      "反復する価値がある習慣はどこにありますか。",
      "雑になっている手元を整えるなら、何から始めますか。",
    ],
    answerNotes: [
      "答えは、地道な練習と改善の中にあります。",
      "完成度を一気に上げようとせず、ひとつの工程を丁寧にすると進みます。",
      "小さな技術の積み重ねが、後で信頼として返ってきます。",
    ],
    tensions: {
      expansive: ["熟練", "集中", "改善", "継続力"],
      restrictive: ["完璧主義", "単調さ", "視野の狭さ", "働きすぎ"],
    },
    imagePrompt:
      "A focused artisan engraving golden pentacles at a workbench, eight finished coins arranged neatly, candlelit dedication",
  },
  {
    imageName: "NINE of PENTACLES",
    number: 9,
    name: "ペンタクルの9",
    keywords: ["自立", "満足", "洗練", "成果を味わう", "余裕"],
    symbolism: ["九つの金貨", "庭園", "鳥", "葡萄", "上質な衣"],
    atmosphere: ["満ちている", "静かな誇り", "優雅", "落ち着き"],
    observationAxes: [
      "積み重ねてきたものを、遠慮せず自分の成果として受け取る場面です。",
      "自立は孤独ではなく、自分の庭を手入れできる余裕として現れます。",
      "今日の豊かさは、急いで増やすより味わうことで深まります。",
    ],
    reflectionPrompts: [
      "今日、自分の成果として認めてよいものは何ですか。",
      "ひとりの時間を豊かにするために何を整えたいですか。",
      "すでに足りているものを味わうなら、何に目を向けますか。",
    ],
    answerNotes: [
      "答えは、まだ足りないものを追うより、育てた庭を味わうことにあります。",
      "自分を満たす選択を軽く見ないことが、次の余裕につながります。",
      "静かな誇りを持ってよい日です。成果を受け取ることも実務の一部です。",
    ],
    tensions: {
      expansive: ["自立", "満足", "洗練", "余裕"],
      restrictive: ["孤立", "贅沢への偏り", "警戒心", "自己完結"],
    },
    imagePrompt:
      "An elegant solitary figure in a lush garden with nine golden pentacles and a small falcon, refined self-sufficiency",
  },
  {
    imageName: "TEN of PENTACLES",
    number: 10,
    name: "ペンタクルの10",
    keywords: ["継承", "家族", "長期的安定", "共同体", "完成した基盤"],
    symbolism: ["十の金貨", "家", "世代", "門", "模様"],
    atmosphere: ["豊か", "安心", "歴史がある", "落ち着いた祝福"],
    observationAxes: [
      "個人の成果が、家族や共同体や未来の基盤につながる場面です。",
      "短期の得より、長く残る形を選ぶことが今日の流れに合います。",
      "受け継いだものをそのまま守るだけでなく、今の形に整える必要があります。",
    ],
    reflectionPrompts: [
      "今日、長期的な安定のために整えたいことは何ですか。",
      "受け継いだものの中で、大切にしたい価値は何ですか。",
      "自分だけでなく周囲にも残る選択をするなら何を選びますか。",
    ],
    answerNotes: [
      "答えは、長く続く基盤を見て選ぶことにあります。",
      "今の行動は小さくても、後の安心や共有財産につながる可能性があります。",
      "関係や住まい、お金、仕事の仕組みを整えるのに向いた日です。",
    ],
    tensions: {
      expansive: ["安定", "継承", "共同体", "豊かさ"],
      restrictive: ["家への縛り", "形式主義", "保守性", "所有への執着"],
    },
    imagePrompt:
      "A multigenerational household gathered near an arched courtyard, ten golden pentacles forming a subtle tree pattern, legacy and stability",
  },
  {
    imageName: "PAGE of PENTACLES",
    number: 11,
    name: "ペンタクルのペイジ",
    keywords: ["学び", "実験", "観察", "現実化の芽", "初心"],
    symbolism: ["若者", "金貨", "畑", "丘", "両手で持つ姿"],
    atmosphere: ["新鮮", "真面目", "好奇心", "素朴"],
    observationAxes: [
      "新しい学びや実務の入口に、丁寧に向き合おうとしています。",
      "まだ経験は浅くても、観察しながら育てる姿勢が力になります。",
      "大きな成果より、試して記録することが今日の財産になります。",
    ],
    reflectionPrompts: [
      "今日、初心者として学び直せることは何ですか。",
      "手元で小さく試せる現実的な実験はありますか。",
      "続けて観察したい変化は何ですか。",
    ],
    answerNotes: [
      "答えは、知ったつもりにならず、手に取って学ぶことにあります。",
      "小さな実験や練習を始めるのに良い流れです。",
      "結果を急がず、観察したことを具体的に残すと次につながります。",
    ],
    tensions: {
      expansive: ["学習", "観察", "実験", "誠実さ"],
      restrictive: ["未熟さ", "慎重すぎる", "視野の狭さ", "腰が重い"],
    },
    imagePrompt:
      "A young page carefully holding a golden pentacle in an open field, distant hills, attentive study and grounded curiosity",
  },
  {
    imageName: "KNIGHT of PENTACLES",
    number: 12,
    name: "ペンタクルのナイト",
    keywords: ["着実さ", "責任", "継続", "実務", "粘り強さ"],
    symbolism: ["騎士", "馬", "金貨", "耕された畑", "止まった姿勢"],
    atmosphere: ["堅実", "重みがある", "落ち着いた", "信頼できる"],
    observationAxes: [
      "急ぐより、確実に進めることが一番強い選択になっています。",
      "同じ作業を丁寧に続ける姿勢が、周囲の信頼を作ります。",
      "動きが遅く見えても、地面を確かめながら進むことに意味があります。",
    ],
    reflectionPrompts: [
      "今日、責任を持って一歩進めたい実務は何ですか。",
      "派手ではないけれど続ける価値があることは何ですか。",
      "確実にするために、確認すべき足元はどこですか。",
    ],
    answerNotes: [
      "答えは、速さより確実性を選ぶことにあります。",
      "決めたことを淡々と進める姿勢が、後で大きな安心につながります。",
      "慎重さは弱さではありません。ただし止まり続けないよう、一歩だけ動かしましょう。",
    ],
    tensions: {
      expansive: ["責任", "継続", "信頼", "堅実さ"],
      restrictive: ["頑固", "遅さ", "融通のなさ", "退屈"],
    },
    imagePrompt:
      "A steady knight on a calm dark horse holding a golden pentacle before freshly plowed fields, patient responsibility",
  },
  {
    imageName: "QUEEN of PENTACLES",
    number: 13,
    name: "ペンタクルのクイーン",
    keywords: ["養う力", "実用的な優しさ", "身体性", "豊かさ", "世話"],
    symbolism: ["女王", "金貨", "庭", "動物", "草木"],
    atmosphere: ["あたたかい", "包容力", "豊か", "実際的"],
    observationAxes: [
      "優しさは気持ちだけでなく、食事や環境や身体を整える形で現れます。",
      "自分を含めた誰かの生活を、現実的に支える力が働いています。",
      "豊かさは使うほど減るものではなく、世話することで循環し始めます。",
    ],
    reflectionPrompts: [
      "今日、自分の身体や暮らしを少し楽にする手当ては何ですか。",
      "実用的な優しさとして誰かにできることはありますか。",
      "育てたい豊かさのために、どんな環境を整えますか。",
    ],
    answerNotes: [
      "答えは、抽象的な励ましより具体的な手当てにあります。",
      "暮らしや身体を整えることが、心の安定にもつながります。",
      "誰かを支えるなら、自分の器も同時に満たすことを忘れないでください。",
    ],
    tensions: {
      expansive: ["養育", "豊かさ", "実用性", "安定"],
      restrictive: ["世話のしすぎ", "抱え込み", "物質偏重", "自己犠牲"],
    },
    imagePrompt:
      "A nurturing queen seated in a lush garden holding a golden pentacle, small animals nearby, warm practical abundance",
  },
  {
    imageName: "KING of PENTACLES",
    number: 14,
    name: "ペンタクルのキング",
    keywords: ["成熟した安定", "管理", "豊かさ", "責任ある力", "実績"],
    symbolism: ["王", "玉座", "金貨", "葡萄", "城"],
    atmosphere: ["重厚", "安定", "豊かな", "信頼感"],
    observationAxes: [
      "経験と資源をどう管理し、周囲の安定へつなげるかが問われています。",
      "力を持つことは、増やすことだけでなく維持し支える責任を含みます。",
      "今日の判断は、長期的に信頼される形を選ぶほど強くなります。",
    ],
    reflectionPrompts: [
      "今日、責任を持って管理すべき資源は何ですか。",
      "自分の経験を、誰かの安定に役立てるならどう使えますか。",
      "長く信頼されるために、今整えるべきことは何ですか。",
    ],
    answerNotes: [
      "答えは、成熟した管理と現実的な判断にあります。",
      "豊かさを誇示するより、必要な場所へ安定して使うことが大切です。",
      "実績や資源を土台に、落ち着いて決めればよい流れです。",
    ],
    tensions: {
      expansive: ["管理力", "成功", "安定", "責任"],
      restrictive: ["支配", "保守性", "所有欲", "頑固さ"],
    },
    imagePrompt:
      "A grounded king on a vine-carved throne holding a golden pentacle, castle and fertile garden behind, mature prosperity",
  },
] satisfies Array<CardSeed & { imageName: string }>

const toCardId = (imageName: string) =>
  imageName.toLowerCase().replaceAll(" ", "-")

export const pentacleMinorCards: TarotCard[] = pentacleCardSeeds.map(
  ({ imageName, ...seed }) => ({
    id: toCardId(imageName),
    image: `/cards/Pentacles/${imageName}.png`,
    ...seed,
  }),
)
