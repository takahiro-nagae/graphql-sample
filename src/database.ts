export const db = {
  blogs: {
    1: {
      title: "今日の天気",
      author: "Takashi",
      body: "今日はいい天気でした。明日もいい天気になるといいな。",
      tags: ["天気", "日記"],
    },
    2: {
      title: "初めての料理",
      author: "Yumi",
      body: "今日は初めてカレーを作りました！思ったよりおいしくできました。",
    },
    3: {
      title: "ランニング日記",
      author: "Kenji",
      body: "朝5km走りました。気分爽快！",
      tags: ["ランニング", "朝活"],
    },
    4: {
      title: "映画レビュー: インセプション",
      author: "Rika",
      body: "インセプションは本当に面白かった！また見たい映画です。",
    },
    5: {
      title: "読書日記: ハリーポッター",
      author: "Hiroshi",
      body: "ハリーポッターの第1巻を読み終わりました。魔法の世界に夢中です。",
    },
    6: {
      title: "ガーデニング初心者",
      author: "Miki",
      body: "バジルの種を植えました。芽が出るのが楽しみです！",
      tags: ["ガーデニング", "初心者"],
    },
    7: {
      title: "ペットの紹介",
      author: "Tomoko",
      body: "私の猫のミケを紹介します。とてもかわいいです！",
    },
    8: {
      title: "仕事で学んだこと",
      author: "Shinji",
      body: "今日は新しいツールの使い方を学びました。業務効率が上がりそうです。",
    },
    9: {
      title: "旅行計画: 京都",
      author: "Aya",
      body: "今度の連休に京都に行く計画を立てています。楽しみ！",
    },
    10: {
      title: "写真の練習",
      author: "Naoki",
      body: "今日は公園で写真撮影をしてきました。良いショットがたくさん撮れました！",
    },
    11: {
      title: "DIY挑戦",
      author: "Kana",
      body: "自分で本棚を作ってみました。完成した時の達成感は最高です！",
    },
    12: {
      title: "プログラミング学習",
      author: "Taro",
      body: "今日はJavaScriptの非同期処理について勉強しました。少し理解が深まりました。",
    },
    13: {
      title: "美味しいカフェ巡り",
      author: "Haruka",
      body: "友達と美味しいコーヒーが飲めるカフェに行きました。また行きたい！",
    },
    14: {
      title: "筋トレ日記",
      author: "Koji",
      body: "今日は腕立て伏せを50回しました。少しずつ体が強くなっている気がします。",
    },
    15: {
      title: "音楽ライブ体験",
      author: "Nana",
      body: "お気に入りのバンドのライブに行ってきました。最高の夜でした！",
    },
    16: {
      title: "料理レシピ: オムライス",
      author: "Keiko",
      body: "オムライスのレシピをシェアします。簡単で美味しいのでぜひ試してみてください！",
    },
    17: {
      title: "週末の登山",
      author: "Ryo",
      body: "週末に友達と山登りをしてきました。自然の中でリフレッシュできました。",
    },
    18: {
      title: "自転車の旅",
      author: "Akiko",
      body: "自転車で隣町まで行ってきました。体力づくりにも良いですね。",
    },
    19: {
      title: "ボードゲームナイト",
      author: "Yuji",
      body: "友人とボードゲームを楽しみました。戦略を考えるのが面白かった！",
    },
    20: {
      title: "絵画制作",
      author: "Erika",
      body: "今日は久しぶりに絵を描きました。自分の想像を形にするのは楽しいですね。",
    },
    21: {
      title: "おすすめの映画",
      author: "Takashi",
      body: "最近見た映画でおすすめは「パラサイト」です。ストーリーが面白いです。",
    },
  },
  users: {
    Takashi: {
      name: "Takashi Sato",
    },
    Yumi: {
      name: "Yumi Tanaka",
    },
    Kenji: {
      name: "Kenji Yamamoto",
    },
    Rika: {
      name: "Rika Suzuki",
    },
    Hiroshi: {
      name: "Hiroshi Kudo",
    },
    Miki: {
      name: "Miki Yamada",
    },
    Tomoko: {
      name: "Tomoko Hayashi",
    },
    Shinji: {
      name: "Shinji Ono",
    },
    Aya: {
      name: "Aya Fukuda",
    },
    Naoki: {
      name: "Naoki Takahashi",
    },
    Kana: {
      name: "Kana Nakamura",
    },
    Taro: {
      name: "Taro Kimura",
    },
    Haruka: {
      name: "Haruka Ishikawa",
    },
    Koji: {
      name: "Koji Morita",
    },
    Nana: {
      name: "Nana Aoki",
    },
    Keiko: {
      name: "Keiko Shimizu",
    },
    Ryo: {
      name: "Ryo Matsuda",
    },
    Akiko: {
      name: "Akiko Kato",
    },
    Yuji: {
      name: "Yuji Fujimoto",
    },
    Erika: {
      name: "Erika Nishida",
    },
  },
};

export const authors = [
  { id: 1, name: "Takashi Sato" },
  { id: 2, name: "Yumi Tanaka" },
  { id: 3, name: "Kenji Yamamoto" },
  { id: 4, name: "Rika Suzuki" },
  { id: 5, name: "Hiroshi Kudo" },
  { id: 6, name: "Miki Yamada" },
  { id: 7, name: "Tomoko Hayashi" },
  { id: 8, name: "Shinji Ono" },
  { id: 9, name: "Aya Fukuda" },
  { id: 10, name: "Naoki Takahashi" },
  { id: 11, name: "Kana Nakamura" },
  { id: 12, name: "Taro Kimura" },
  { id: 13, name: "Haruka Ishikawa" },
  { id: 14, name: "Koji Morita" },
  { id: 15, name: "Nana Aoki" },
  { id: 16, name: "Keiko Shimizu" },
  { id: 17, name: "Ryo Matsuda" },
  { id: 18, name: "Akiko Kato" },
  { id: 19, name: "Yuji Fujimoto" },
  { id: 20, name: "Erika Nishida" },
];

export const posts = [
  {
    id: 1,
    author_id: 1,
    title: "今日の天気",
    body: "今日はいい天気でした。明日もいい天気になるといいな。",
  },
  {
    id: 2,
    author_id: 2,
    title: "初めての料理",
    body: "今日は初めてカレーを作りました！思ったよりおいしくできました。",
  },
  {
    id: 3,
    author_id: 3,
    title: "ランニング日記",
    body: "朝5km走りました。気分爽快！",
  },
  {
    id: 4,
    author_id: 4,
    title: "映画レビュー: インセプション",
    body: "インセプションは本当に面白かった！また見たい映画です。",
  },
  {
    id: 5,
    author_id: 5,
    title: "読書日記: ハリーポッター",
    body: "ハリーポッターの第1巻を読み終わりました。魔法の世界に夢中です。",
  },
  {
    id: 6,
    author_id: 6,
    title: "ガーデニング初心者",
    body: "バジルの種を植えました。芽が出るのが楽しみです！",
  },
  {
    id: 7,
    author_id: 7,
    title: "ペットの紹介",
    body: "私の猫のミケを紹介します。とてもかわいいです！",
  },
  {
    id: 8,
    author_id: 8,
    title: "仕事で学んだこと",
    body: "今日は新しいツールの使い方を学びました。業務効率が上がりそうです。",
  },
  {
    id: 9,
    author_id: 9,
    title: "旅行計画: 京都",
    body: "今度の連休に京都に行く計画を立てています。楽しみ！",
  },
  {
    id: 10,
    author_id: 10,
    title: "写真の練習",
    body: "今日は公園で写真撮影をしてきました。良いショットがたくさん撮れました！",
  },
  {
    id: 11,
    author_id: 11,
    title: "DIY挑戦",
    body: "自分で本棚を作ってみました。完成した時の達成感は最高です！",
  },
  {
    id: 12,
    author_id: 12,
    title: "プログラミング学習",
    body: "今日はJavaScriptの非同期処理について勉強しました。少し理解が深まりました。",
  },
  {
    id: 13,
    author_id: 13,
    title: "美味しいカフェ巡り",
    body: "友達と美味しいコーヒーが飲めるカフェに行きました。また行きたい！",
  },
  {
    id: 14,
    author_id: 14,
    title: "筋トレ日記",
    body: "今日は腕立て伏せを50回しました。少しずつ体が強くなっている気がします。",
  },
  {
    id: 15,
    author_id: 15,
    title: "音楽ライブ体験",
    body: "お気に入りのバンドのライブに行ってきました。最高の夜でした！",
  },
  {
    id: 16,
    author_id: 16,
    title: "料理レシピ: オムライス",
    body: "オムライスのレシピをシェアします。簡単で美味しいのでぜひ試してみてください！",
  },
  {
    id: 17,
    author_id: 17,
    title: "週末の登山",
    body: "週末に友達と山登りをしてきました。自然の中でリフレッシュできました。",
  },
  {
    id: 18,
    author_id: 18,
    title: "自転車の旅",
    body: "自転車で隣町まで行ってきました。体力づくりにも良いですね。",
  },
  {
    id: 19,
    author_id: 19,
    title: "ボードゲームナイト",
    body: "友人とボードゲームを楽しみました。戦略を考えるのが面白かった！",
  },
  {
    id: 20,
    author_id: 20,
    title: "絵画制作",
    body: "今日は久しぶりに絵を描きました。自分の想像を形にするのは楽しいですね。",
  },
  {
    id: 21,
    author_id: 1,
    title: "おすすめの映画",
    body: "最近見た映画でおすすめは「パラサイト」です。ストーリーが面白いです。",
  },
];

export const tags = [
  { post_id: 1, name: "天気" },
  { post_id: 1, name: "日記" },
  { post_id: 3, name: "ランニング" },
  { post_id: 3, name: "朝活" },
  { post_id: 6, name: "ガーデニング" },
  { post_id: 6, name: "初心者" },
];
