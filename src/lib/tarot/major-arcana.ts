import type { CardSeed, TarotCard } from "./types"

const majorCardSeeds = [
  {
    imageName: "THE FOOL",
    number: 0,
    name: "愚者",
    keywords: ["はじまり", "自由", "未知", "身軽さ", "冒険", "信頼"],
    symbolism: ["崖", "白い犬", "小さな荷物", "太陽", "空", "一歩手前"],
    atmosphere: ["軽やか", "未確定", "開放感", "少しの無防備", "風通し"],
    observationAxes: [
      "まだ形になっていない可能性が、最初の一歩を待っています。",
      "身軽さは強みですが、足元を見ない楽観は小さな警告も含みます。",
      "準備を完璧にするより、試しながら輪郭を知る時です。",
      "怖さと好奇心が同じ方向を向いているなら、その場所には意味があります。",
    ],
    reflectionPrompts: [
      "今日、完璧に準備できるまで待たなくてもよいことは何ですか。",
      "身軽になるために、いったん置いていける荷物は何ですか。",
      "小さく試すなら、どこまでなら笑って戻ってこられますか。",
    ],
    answerNotes: [
      "正解を知ってから動くより、動きながら輪郭を知る流れです。",
      "今は重い約束より、小さな実験のほうが流れに合っています。",
      "不安を消す必要はありません。不安を連れたまま軽く試すことがテーマです。",
    ],
    tensions: {
      expansive: ["自由", "出発", "信頼", "新鮮さ"],
      restrictive: ["無計画", "見落とし", "浮つき", "危うさ"],
    },
    imagePrompt:
      "The Fool at the edge of a cliff, small white dog, pale sun, minimal mystical atmosphere, contemplative mood",
  },
  {
    imageName: "THE MAGICIAN",
    number: 1,
    name: "魔術師",
    keywords: ["実行", "集中", "変換", "意志", "創造", "手段"],
    symbolism: ["机上の道具", "上を指す手", "下を指す手", "無限大", "赤い衣", "花"],
    atmosphere: ["集中", "鮮明", "準備完了", "手触り", "始動"],
    observationAxes: [
      "材料はすでに手元にあり、必要なのは組み合わせる意志です。",
      "考えを現実へ移すには、まず小さな操作可能な形にする必要があります。",
      "力の誇示より、注意を向けた対象に静かに宿る技術が鍵です。",
      "大きな変化より、最初の一手を正確に置くことが今日の中心です。",
    ],
    reflectionPrompts: [
      "今ある道具や経験のうち、まだ使っていないものは何ですか。",
      "今日、考えるだけでなく実際に手を動かせる一手は何ですか。",
      "言葉にする前に、形として見せられるものはありますか。",
    ],
    answerNotes: [
      "待つより作るほうへ重心を移す合図です。",
      "自信は先に必要ではなく、手を動かしたあとについてくる可能性があります。",
      "うまくいかない時は、目的ではなく道具の選び方を変えると進みます。",
    ],
    tensions: {
      expansive: ["創造", "集中", "実行", "発明"],
      restrictive: ["操作", "過信", "言葉だけの意志", "器用貧乏"],
    },
    imagePrompt:
      "The Magician with symbolic tools on a table, one hand upward and one downward, subtle glow, contemplative composition",
  },
  {
    imageName: "THE HIGH PRIESTESS",
    number: 2,
    name: "女教皇",
    keywords: ["直感", "沈黙", "保留", "境界", "奥行き", "観察"],
    symbolism: ["黒と白の柱", "巻物", "月冠", "ヴェール", "水", "影"],
    atmosphere: ["静けさ", "秘密", "冷静", "奥行き", "待つ気配"],
    observationAxes: [
      "すぐに言葉にしないことで、見落としていた感覚が残ります。",
      "答えは出来事そのものより、出来事に対する微かな反応に隠れています。",
      "境界の向こうを急いで暴くより、境界があること自体を観察します。",
      "判断を遅らせるほど、判断の精度が上がる場面があります。",
    ],
    reflectionPrompts: [
      "まだ判断せずに置いておいたほうがよいことは何ですか。",
      "説明できないけれど無視しないほうがよい感覚はありますか。",
      "誰かに見せる前に、自分だけで確かめたいことは何ですか。",
    ],
    answerNotes: [
      "急いで結論を出さない空気を示します。",
      "今の直感は、まだ理由を持っていなくても無視しないほうがよさそうです。",
      "外へ説明するより、自分の中で静かに照合する時間が助けになります。",
    ],
    tensions: {
      expansive: ["直感", "受容", "洞察", "静かな知性"],
      restrictive: ["閉じすぎ", "曖昧さ", "長い保留", "距離"],
    },
    imagePrompt:
      "The High Priestess between black and white pillars, scroll, moon crown, veil, starlit ambience",
  },
  {
    imageName: "THE EMPRESS",
    number: 3,
    name: "女帝",
    keywords: ["育てる", "実り", "受け取る", "感覚", "豊かさ", "安心"],
    symbolism: ["豊かな庭", "小麦", "王冠", "クッション", "川", "柔らかな布"],
    atmosphere: ["育成", "満ちる", "温度", "余白", "循環"],
    observationAxes: [
      "成果は押し出すだけでなく、育つ環境を整えることで現れます。",
      "身体の快不快は、状況の質を知らせる大切な情報です。",
      "与えることと受け取ることの均衡が、豊かさを長続きさせます。",
      "今日の豊かさは派手さではなく、満たされている感覚として現れます。",
    ],
    reflectionPrompts: [
      "いま育てる価値がある関係や習慣は何ですか。",
      "自分の身体が求めている休息や手触りは何ですか。",
      "受け取ることを遠慮している場所はありますか。",
    ],
    answerNotes: [
      "がんばるより、満ちることを思い出させます。",
      "今日の答えは効率より、心地よく続けられる形にありそうです。",
      "放置していたものに少し手をかけるだけで、流れが戻るかもしれません。",
    ],
    tensions: {
      expansive: ["豊かさ", "養育", "受容", "回復"],
      restrictive: ["過保護", "停滞", "依存", "甘やかし"],
    },
    imagePrompt:
      "The Empress in a lush moonlit garden, wheat, river, soft shadows, nurturing and grounded mood",
  },
  {
    imageName: "THE EMPEROR",
    number: 4,
    name: "皇帝",
    keywords: ["境界", "責任", "構造", "決断", "安定", "守る"],
    symbolism: ["石の玉座", "山", "王笏", "鎧", "赤い衣", "四角い地盤"],
    atmosphere: ["構造", "責任", "重み", "冷静", "統率"],
    observationAxes: [
      "気分に流されない仕組みが、動き続けるための足場になります。",
      "守るべき境界を明確にすると、余計な消耗が減ります。",
      "支配ではなく、責任を引き受ける姿勢が中心にあります。",
      "曖昧なままにした場所ほど、今日は言葉で線を引く必要があります。",
    ],
    reflectionPrompts: [
      "今日、明確に決めたほうがよい線引きは何ですか。",
      "自分が責任を持つ範囲と、持たなくてよい範囲はどこですか。",
      "安定のために、ひとつだけ固定するなら何ですか。",
    ],
    answerNotes: [
      "感情を消すのではなく、感情に足場を与えることを示します。",
      "柔らかく考えるより、先に枠を決めたほうが楽になるかもしれません。",
      "境界を示すことは冷たさではなく、関係を長持ちさせる技術です。",
    ],
    tensions: {
      expansive: ["安定", "決断", "保護", "責任"],
      restrictive: ["硬直", "支配", "孤立", "頑固さ"],
    },
    imagePrompt:
      "The Emperor on a stone throne before mountains, red robe, armor, dignified and restrained",
  },
  {
    imageName: "THE HIEROPHANT",
    number: 5,
    name: "教皇",
    keywords: ["学び", "型", "信頼", "継承", "教え", "共同体"],
    symbolism: ["二本の柱", "鍵", "祝福の手", "儀式", "弟子", "階段"],
    atmosphere: ["伝統", "相談", "共有", "落ち着き", "信頼"],
    observationAxes: [
      "型は自由を奪うものではなく、理解の入口になることがあります。",
      "誰から学ぶか、どの共同体に耳を預けるかが方向を形作ります。",
      "信じている前提を見直すと、守りたい価値も見えてきます。",
      "古いルールをそのまま従うのではなく、意味を問い直す時です。",
    ],
    reflectionPrompts: [
      "いま頼ってよい知恵や先例は何ですか。",
      "受け継いだ考えのうち、残したいものと手放したいものは何ですか。",
      "一人で判断せず、相談したほうがよい相手はいますか。",
    ],
    answerNotes: [
      "独自性より先に、足場となる型を確かめる時に出やすいカードです。",
      "誰かに聞くことは弱さではなく、流れを正確にする方法です。",
      "今日の行動に小さな儀式として意味を持たせると落ち着きます。",
    ],
    tensions: {
      expansive: ["学習", "信頼", "継承", "相談"],
      restrictive: ["同調圧力", "形式主義", "思考停止", "権威依存"],
    },
    imagePrompt:
      "The Hierophant in a dim sacred hall, keys and pillars, candlelight, contemplative traditional atmosphere",
  },
  {
    imageName: "THE LOVERS",
    number: 6,
    name: "恋人",
    keywords: ["選択", "結びつき", "誠実", "価値観", "対話", "調和"],
    symbolism: ["二人の人物", "天使", "木", "山", "裸の心", "光"],
    atmosphere: ["親密", "選択", "調和", "迷い", "開示"],
    observationAxes: [
      "惹かれるものは、価値観を映す鏡として現れます。",
      "本当の選択は、何を選び何を選ばない責任を含みます。",
      "関係の中で自分の声を失わないことが、調和を支えます。",
      "心地よい結びつきほど、正直な言葉を必要とします。",
    ],
    reflectionPrompts: [
      "今日の選択は、どんな価値観に忠実でありたいですか。",
      "誰かとの関係で、言葉にしたほうがよい本音はありますか。",
      "選ばないことで守れるものは何ですか。",
    ],
    answerNotes: [
      "外側の正解より、自分の価値観との一致を問うカードです。",
      "好みや感情だけでなく、誠実でいられるかが焦点です。",
      "迷っているなら、誰にどう見られるかより何を大切にしたいかへ戻る時です。",
    ],
    tensions: {
      expansive: ["調和", "愛", "一致", "誠実"],
      restrictive: ["迷い", "依存", "先延ばし", "迎合"],
    },
    imagePrompt:
      "The Lovers under a luminous angel, mountain and trees, intimate and symbolic mood",
  },
  {
    imageName: "THE CHARIOT",
    number: 7,
    name: "戦車",
    keywords: ["前進", "統御", "意志", "方向性", "突破", "集中"],
    symbolism: ["戦車", "二頭のスフィンクス", "星の天蓋", "鎧", "都市", "車輪"],
    atmosphere: ["緊張感", "速度", "集中", "勝負", "指揮"],
    observationAxes: [
      "対立する力を消すのではなく、同じ方向へ向けることが鍵です。",
      "勢いは役に立ちますが、進む理由が曖昧だと散らばります。",
      "勝利とは外側の制圧だけでなく、自分の衝動を扱う技術でもあります。",
      "今日の突破口は、力の強さより舵取りの精度にあります。",
    ],
    reflectionPrompts: [
      "いま自分を別方向へ引いている二つの力は何ですか。",
      "進むために、今日ひとつだけ決めるなら何を決めますか。",
      "勢いに任せず、方向を調整するための確認は何ですか。",
    ],
    answerNotes: [
      "進む力はありますが、方向を定める必要があります。",
      "相反する気持ちがあるなら、片方を潰さず役割を与えると進みます。",
      "全員に理解されるより、自分が舵を握っている感覚が大切です。",
    ],
    tensions: {
      expansive: ["前進", "統率", "達成", "突破"],
      restrictive: ["強引さ", "焦り", "分裂", "暴走"],
    },
    imagePrompt:
      "The Chariot with two sphinxes, starry canopy, night city behind, controlled motion and quiet intensity",
  },
  {
    imageName: "STRENGTH",
    number: 8,
    name: "力",
    keywords: ["柔らかな強さ", "忍耐", "自制", "勇気", "受け止める", "統合"],
    symbolism: ["獅子", "無限大", "白い衣", "花冠", "穏やかな手", "口元"],
    atmosphere: ["穏やか", "忍耐", "信頼", "温かさ", "静かな強さ"],
    observationAxes: [
      "強さは押し込む力ではなく、荒さを抱えたまま丁寧に扱う力です。",
      "感情を否定せず、反応するまでの間を作ることで選択肢が増えます。",
      "優しさは弱さではなく、場を壊さず保つ力の形です。",
      "すぐに動くことより、向き合い続けることが力になります。",
    ],
    reflectionPrompts: [
      "力で押すより穏やかに扱ったほうがよいものは何ですか。",
      "自分の中の荒い衝動に、どんな名前をつけられますか。",
      "反応する前に一呼吸置くなら、その間に何を確かめますか。",
    ],
    answerNotes: [
      "強く出るより、丁寧に扱うことで本当の力が出る時です。",
      "感情を消すのではなく、感情と一緒に動ける形を探すことです。",
      "優しさを選ぶことは、負けることではなく場を壊さない強さです。",
    ],
    tensions: {
      expansive: ["勇気", "忍耐", "柔らかな統合", "信頼"],
      restrictive: ["抑圧", "我慢しすぎ", "内側の緊張", "消耗"],
    },
    imagePrompt:
      "Strength, gentle figure calming a lion, infinity symbol, flowers, quiet courage",
  },
  {
    imageName: "THE HERMIT",
    number: 9,
    name: "隠者",
    keywords: ["探求", "内省", "距離", "静かな答え", "成熟", "灯り"],
    symbolism: ["ランタン", "杖", "雪山", "外套", "小さな星", "孤独"],
    atmosphere: ["静寂", "慎重", "深まり", "孤高", "灯り"],
    observationAxes: [
      "急いで共有する前に、自分の中で答えを熟成させる時間です。",
      "距離を取ることは拒絶ではなく、見え方を整えるための姿勢です。",
      "大きな明かりではなく、足元だけを照らす灯りで十分な場面があります。",
      "外からの評価より、自分が本当に納得できる感覚が道標になります。",
    ],
    reflectionPrompts: [
      "一人で静かに確かめたいことは何ですか。",
      "誰かの声から少し距離を置いたら、何が見えそうですか。",
      "今日、足元だけ照らせば進める一歩は何ですか。",
    ],
    answerNotes: [
      "答えを急がず、静かに深める流れです。",
      "今は派手な動きより、納得の精度を上げる時間かもしれません。",
      "孤独は罰ではなく、余計な音を減らすための場所として使えます。",
    ],
    tensions: {
      expansive: ["洞察", "成熟", "内省", "慎重さ"],
      restrictive: ["孤立", "閉じこもり", "過分析", "遠ざかりすぎ"],
    },
    imagePrompt:
      "The Hermit holding a lantern on a snowy mountain path, quiet solitary wisdom",
  },
  {
    imageName: "WHEEL of FORTUNE",
    number: 10,
    name: "運命の輪",
    keywords: ["転機", "循環", "流れ", "変化", "タイミング", "節目"],
    symbolism: ["輪", "四隅の象徴", "スフィンクス", "蛇", "雲", "回転"],
    atmosphere: ["動き", "巡り", "不意の変化", "節目", "風向き"],
    observationAxes: [
      "自分で押すより、流れの変わり目を読むことが大切です。",
      "同じことが繰り返されているなら、輪のどこに立っているかを見ます。",
      "偶然に見える出来事が、次の配置へ動かす合図になることがあります。",
      "変化に抵抗するより、タイミングを見て乗り換える姿勢が合います。",
    ],
    reflectionPrompts: [
      "最近、繰り返し現れているサインは何ですか。",
      "いま無理に固定しようとしている流れはありますか。",
      "風向きが変わったなら、どこを調整しますか。",
    ],
    answerNotes: [
      "流れが切り替わる節目にいます。",
      "全部を制御しようとするより、動き出したものに合わせるほうが進みます。",
      "偶然を軽く扱わず、次の選択の材料として見てみるとよさそうです。",
    ],
    tensions: {
      expansive: ["好機", "転換", "循環", "追い風"],
      restrictive: ["翻弄", "不安定", "繰り返し", "タイミングのずれ"],
    },
    imagePrompt:
      "Wheel of Fortune with symbolic wheel, clouds, sphinx, snake, mysterious turning point",
  },
  {
    imageName: "JUSTICE",
    number: 11,
    name: "正義",
    keywords: ["均衡", "判断", "責任", "公平", "整える", "事実"],
    symbolism: ["天秤", "剣", "柱", "赤い衣", "正面性", "王冠"],
    atmosphere: ["冷静", "明確", "均衡", "責任", "透明感"],
    observationAxes: [
      "感情を否定せず、事実と感情を分けて見る必要があります。",
      "正しさは誰かを裁くためでなく、次の選択を整えるためにあります。",
      "結果には原因があり、いま見直せる因果があります。",
      "曖昧な返事より、誠実な線引きが場を安定させます。",
    ],
    reflectionPrompts: [
      "事実として確認できることと、推測していることは何ですか。",
      "自分の責任として引き受けるべき部分はどこですか。",
      "公平であるために、今日ひとつ整えるなら何ですか。",
    ],
    answerNotes: [
      "感情だけでも理屈だけでもなく、両方を並べて見る流れです。",
      "決める前に、前提や条件を明確にするとよさそうです。",
      "誰かを責めるより、因果を見て次の一手を整えることが助けになります。",
    ],
    tensions: {
      expansive: ["公平", "明晰さ", "責任", "均衡"],
      restrictive: ["裁きすぎ", "冷たさ", "白黒思考", "自己正当化"],
    },
    imagePrompt:
      "Justice holding scales and sword between pillars, clear frontal composition, solemn balance",
  },
  {
    imageName: "THE HANGED MAN",
    number: 12,
    name: "吊るされた男",
    keywords: ["視点転換", "停止", "受容", "手放し", "待機", "逆さの知恵"],
    symbolism: ["吊られた人物", "後光", "木", "片足", "静かな表情", "逆位置"],
    atmosphere: ["停止", "受容", "奇妙な平穏", "保留", "発見"],
    observationAxes: [
      "動けないことが、別の見方を得るための時間になることがあります。",
      "無理に進めるほど絡まるなら、いったん力を抜くほうが賢明です。",
      "犠牲に見える状況の中に、選び直せる視点があります。",
      "今日の停滞は失敗ではなく、見方を反転させるための余白です。",
    ],
    reflectionPrompts: [
      "進めようとしているのに動かないことは何を教えていますか。",
      "逆の立場から見たら、状況はどう見えますか。",
      "いま手放したほうが、むしろ楽になるこだわりは何ですか。",
    ],
    answerNotes: [
      "今は急いで抜け出すより、見方を変えることで意味が出ます。",
      "止まっている時間を無駄と決めつけないほうがよさそうです。",
      "握りしめている正解を少し緩めると、新しい角度が生まれます。",
    ],
    tensions: {
      expansive: ["受容", "洞察", "手放し", "視点転換"],
      restrictive: ["停滞", "自己犠牲", "諦め", "身動きのなさ"],
    },
    imagePrompt:
      "The Hanged Man suspended from a tree, halo glow, calm expression, reversed perspective",
  },
  {
    imageName: "DEATH",
    number: 13,
    name: "死神",
    keywords: ["終わり", "変容", "区切り", "再生", "手放す", "更新"],
    symbolism: ["白い馬", "旗", "夜明け", "倒れた王冠", "川", "黒い鎧"],
    atmosphere: ["厳粛", "清算", "変化", "夜明け前", "静かな決別"],
    observationAxes: [
      "終わるものを終わらせることで、次の形が入る場所ができます。",
      "失うことへの怖さの中に、もう続けなくてよいものが混じっています。",
      "変化は劇的でなくても、戻れない区切りとして現れます。",
      "今日の終わりは罰ではなく、更新のための整理です。",
    ],
    reflectionPrompts: [
      "もう役目を終えた習慣や関係性は何ですか。",
      "手放すと怖いけれど、手放せば軽くなるものは何ですか。",
      "次に進むために、静かに区切りをつけるなら何をしますか。",
    ],
    answerNotes: [
      "何かを終わらせることが、次の始まりを守ります。",
      "変えられないものにしがみつくより、変わった事実を認めるほうへ進みます。",
      "終わりは冷たいだけでなく、古い緊張をほどく力も持っています。",
    ],
    tensions: {
      expansive: ["再生", "更新", "清算", "解放"],
      restrictive: ["喪失感", "抵抗", "急な変化", "未練"],
    },
    imagePrompt:
      "Death tarot card with white horse, black armor, dawn on horizon, solemn transformation",
  },
  {
    imageName: "TEMPERANCE",
    number: 14,
    name: "節制",
    keywords: ["調整", "統合", "節度", "回復", "混ぜる", "ほどよさ"],
    symbolism: ["天使", "二つの杯", "水の流れ", "片足", "道", "太陽"],
    atmosphere: ["穏やか", "調和", "回復", "流動", "微調整"],
    observationAxes: [
      "極端に振るより、少しずつ混ぜ合わせることで整っていきます。",
      "回復は一気に起こるのではなく、日々の配分で作られます。",
      "違う要素を対立させず、使える形に調合する時です。",
      "今日の答えは、大きな決断より小さな微調整にあります。",
    ],
    reflectionPrompts: [
      "今の自分にとって、ちょうどよい量はどのくらいですか。",
      "混ぜ合わせたら助けになりそうな二つの要素は何ですか。",
      "無理なく続けるために、今日減らすものは何ですか。",
    ],
    answerNotes: [
      "急がず、配分を整えることで流れが戻ります。",
      "正解はどちらか一方ではなく、組み合わせ方にありそうです。",
      "小さな調整を侮らないことが、長く続く安定につながります。",
    ],
    tensions: {
      expansive: ["調和", "回復", "統合", "節度"],
      restrictive: ["中途半端", "先延ばし", "薄まり", "我慢"],
    },
    imagePrompt:
      "Temperance angel pouring water between two cups, one foot in water, serene balance",
  },
  {
    imageName: "THE DEVIL",
    number: 15,
    name: "悪魔",
    keywords: ["執着", "欲望", "依存", "誘惑", "影", "鎖"],
    symbolism: ["角", "鎖", "松明", "裸の人物", "暗い台座", "逆五芒星"],
    atmosphere: ["重さ", "熱", "囚われ", "魅惑", "影の濃さ"],
    observationAxes: [
      "やめたいのに繰り返すものの中に、見たくない欲求が隠れています。",
      "鎖は外側からかけられたものだけでなく、慣れから外し忘れたものかもしれません。",
      "快楽や欲望を敵にするより、何を埋めようとしているかを見る時です。",
      "今日の影は、否定するほど強くなるため名前をつける必要があります。",
    ],
    reflectionPrompts: [
      "自由を狭めているのに手放しにくいものは何ですか。",
      "その欲望は、本当は何を求めていますか。",
      "鎖を完全に断つ前に、少し緩める方法はありますか。",
    ],
    answerNotes: [
      "悪いものを罰するカードではなく、囚われの仕組みを見るカードです。",
      "欲望を恥じるより、扱える大きさに戻すことが助けになります。",
      "抜け出す第一歩は、鎖があると認めることかもしれません。",
    ],
    tensions: {
      expansive: ["影の理解", "欲望の自覚", "解放の入口", "正直さ"],
      restrictive: ["執着", "依存", "誘惑", "自己欺瞞"],
    },
    imagePrompt:
      "The Devil tarot card with chained figures, torchlight, dark symbolic atmosphere, no horror gore",
  },
  {
    imageName: "THE TOWER",
    number: 16,
    name: "塔",
    keywords: ["崩壊", "衝撃", "解放", "真実", "急変", "建て直し"],
    symbolism: ["雷", "塔", "落ちる王冠", "炎", "落下する人影", "暗雲"],
    atmosphere: ["激しさ", "目覚め", "緊急", "露呈", "解体"],
    observationAxes: [
      "保ってきた形が崩れることで、隠れていた真実が見えます。",
      "衝撃は望ましいとは限りませんが、偽りの安定を終わらせます。",
      "壊れたものをすぐ直す前に、なぜ壊れたのかを見ます。",
      "今日の急変は、建て直すべき場所をはっきりさせる合図です。",
    ],
    reflectionPrompts: [
      "もう無理に保たなくてよい構造は何ですか。",
      "崩れたことで、かえって見えた真実はありますか。",
      "建て直すなら、次はどんな土台にしますか。",
    ],
    answerNotes: [
      "衝撃的でも、偽りの安定から抜ける力があります。",
      "すぐに元通りにするより、壊れた理由を見たほうがよさそうです。",
      "変化の痛みと、解放の可能性が同時にあります。",
    ],
    tensions: {
      expansive: ["解放", "覚醒", "真実", "建て直し"],
      restrictive: ["混乱", "喪失", "急変", "抵抗不能"],
    },
    imagePrompt:
      "The Tower struck by lightning, crown falling, dramatic storm, symbolic collapse and revelation",
  },
  {
    imageName: "THE STAR",
    number: 17,
    name: "星",
    keywords: ["希望", "癒し", "透明さ", "願い", "再生", "静かな導き"],
    symbolism: ["星", "水瓶", "池", "裸の人物", "大地", "夜空"],
    atmosphere: ["澄んだ空気", "回復", "静かな希望", "開放", "祈り"],
    observationAxes: [
      "すぐに結果が出なくても、遠くの灯りが方向を示しています。",
      "傷ついたあとに残る透明さが、次の願いを見つけます。",
      "隠さずあることが、回復の始まりになる場面です。",
      "今日の希望は派手な約束ではなく、静かな確信として現れます。",
    ],
    reflectionPrompts: [
      "まだ小さくても、消したくない願いは何ですか。",
      "無理に強く見せず、素直に置ける気持ちはありますか。",
      "回復のために、水を注ぐように続けたいことは何ですか。",
    ],
    answerNotes: [
      "焦らず、希望を小さく保つことが力になります。",
      "隠すより、静かに開くことで癒しが進む流れです。",
      "すぐ叶えるより、願いの方向を失わないことが大切です。",
    ],
    tensions: {
      expansive: ["希望", "癒し", "透明さ", "信頼"],
      restrictive: ["理想化", "現実逃避", "遠すぎる願い", "待ちすぎ"],
    },
    imagePrompt:
      "The Star with figure pouring water under a luminous night sky, calm healing atmosphere",
  },
  {
    imageName: "THE MOON",
    number: 18,
    name: "月",
    keywords: ["不安", "夢", "曖昧さ", "潜在意識", "揺らぎ", "幻影"],
    symbolism: ["月", "犬と狼", "ザリガニ", "水辺", "二つの塔", "道"],
    atmosphere: ["霧", "不確か", "夢見心地", "ざわめき", "夜"],
    observationAxes: [
      "見えているものがすべてではなく、不安が影を大きくしている可能性があります。",
      "はっきりさせようと急ぐほど、かえって歪んで見える場面です。",
      "夢や違和感は、まだ言葉にならない情報として扱えます。",
      "今日の道は暗いですが、暗さの中でしか見えないものもあります。",
    ],
    reflectionPrompts: [
      "不安が作っている物語と、実際に起きていることは分けられますか。",
      "最近の夢や違和感が伝えていることは何ですか。",
      "暗い道を急がず進むために、確認できる小さな灯りは何ですか。",
    ],
    answerNotes: [
      "今は輪郭がぼやけやすい時です。",
      "不安を事実として扱う前に、少し距離を置いて見るとよさそうです。",
      "曖昧さを消すより、曖昧なまま安全に進む工夫が助けになります。",
    ],
    tensions: {
      expansive: ["感受性", "夢", "想像力", "深層の気づき"],
      restrictive: ["不安", "混乱", "幻影", "疑心暗鬼"],
    },
    imagePrompt:
      "The Moon tarot card with path between towers, dog and wolf, crayfish by water, dreamlike night",
  },
  {
    imageName: "THE SUN",
    number: 19,
    name: "太陽",
    keywords: ["喜び", "明瞭さ", "生命力", "成功", "開放", "祝福"],
    symbolism: ["太陽", "白馬", "子ども", "ひまわり", "赤い旗", "壁"],
    atmosphere: ["明るさ", "無邪気", "活力", "祝福", "見通し"],
    observationAxes: [
      "隠れていたものが明るみに出て、複雑さがほどけます。",
      "難しく考えるより、素直な喜びが次の判断を助けます。",
      "活力が戻ることで、自分にも周囲にも見通しが生まれます。",
      "今日の成功は、大げさな達成より晴れた感覚として現れます。",
    ],
    reflectionPrompts: [
      "素直にうれしいと言えることは何ですか。",
      "もっと簡単に、明るい方向から見たらどうなりますか。",
      "自分の生命力が戻る場所や相手はどこですか。",
    ],
    answerNotes: [
      "見通しが明るくなり、素直に進める流れです。",
      "考え込みすぎていたことは、シンプルに扱うほうがよさそうです。",
      "喜びを軽く見ないことが、今日の判断を強くします。",
    ],
    tensions: {
      expansive: ["喜び", "成功", "明快さ", "活力"],
      restrictive: ["楽観しすぎ", "見せかけの明るさ", "幼さ", "まぶしすぎる期待"],
    },
    imagePrompt:
      "The Sun tarot card with child on white horse, sunflowers, bright joyful clarity",
  },
  {
    imageName: "JUDGEMENT",
    number: 20,
    name: "審判",
    keywords: ["呼びかけ", "目覚め", "再評価", "復活", "決着", "応答"],
    symbolism: ["天使のラッパ", "棺", "立ち上がる人々", "旗", "山", "空"],
    atmosphere: ["目覚め", "大きな合図", "清算", "呼応", "再起"],
    observationAxes: [
      "過去の出来事が、別の意味を持って再び呼びかけています。",
      "もう一度向き合うことで、終わったと思っていたことに決着がつきます。",
      "外からの評価ではなく、自分がどう応答するかが問われています。",
      "今日の目覚めは、責めるためでなく生き直すためのものです。",
    ],
    reflectionPrompts: [
      "過去からいま再び呼ばれているテーマは何ですか。",
      "もう一度向き合えば、違う答えを出せそうなことはありますか。",
      "自分の中で終わらせるために、どんな応答が必要ですか。",
    ],
    answerNotes: [
      "過去をやり直すというより、意味を更新する流れです。",
      "気づいてしまったことに、どう応えるかが今日の焦点です。",
      "決着は罰ではなく、次へ進むための呼びかけとして現れます。",
    ],
    tensions: {
      expansive: ["覚醒", "復活", "決着", "応答"],
      restrictive: ["自己批判", "過去への固着", "先送り", "裁かれる怖さ"],
    },
    imagePrompt:
      "Judgement tarot card with angel trumpet, rising figures, dawn sky, awakening and renewal",
  },
  {
    imageName: "THE WORLD",
    number: 21,
    name: "世界",
    keywords: ["完成", "統合", "達成", "循環の終わり", "全体性", "旅の完了"],
    symbolism: ["月桂樹の輪", "踊る人物", "四隅の象徴", "布", "空間", "円"],
    atmosphere: ["完成感", "広がり", "調和", "達成", "次の入口"],
    observationAxes: [
      "ひとつの周期がまとまり、経験が全体として意味を持ち始めます。",
      "完成は終点であると同時に、次の旅への入口でもあります。",
      "欠けていた要素が統合され、自分の輪郭が広がります。",
      "今日の達成は、過程のすべてを含めて受け取ることで深まります。",
    ],
    reflectionPrompts: [
      "ここまでの経験で、ようやくひとまとまりになったことは何ですか。",
      "完了を認めるために、受け取ってよい成果は何ですか。",
      "次の旅へ向かう前に、感謝して閉じたいものはありますか。",
    ],
    answerNotes: [
      "一区切りがつき、全体像を受け取る時です。",
      "まだ細部が残っていても、大きな流れとしては完成に近づいています。",
      "次へ急ぐ前に、ここまで来たことをきちんと認めるとよさそうです。",
    ],
    tensions: {
      expansive: ["完成", "統合", "達成", "全体性"],
      restrictive: ["終われない", "燃え尽き", "次への不安", "完璧主義"],
    },
    imagePrompt:
      "The World tarot card with dancing figure inside laurel wreath, four corner symbols, completed journey",
  },
] satisfies Array<CardSeed & { imageName: string }>

const toCardId = (imageName: string) => imageName.toLowerCase().replaceAll(" ", "-")

export const majorArcanaCards: TarotCard[] = majorCardSeeds.map(
  ({ imageName, ...seed }) => ({
    id: toCardId(imageName),
    image: `/cards/${imageName}.png`,
    ...seed,
  }),
)
