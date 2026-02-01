import type {
  Value,
  Motto,
  TimelineEvent,
  Skill,
  Project,
  SocialLink,
  ContentItem,
  WabisabiValue,
} from "./types";

export const PROFILE = {
  name: "Sota.N",
  nameJa: "楢原 爽太",
  tagline: "不完全でも、挑戦し続ける",
  bio: "組織を変える。人を支える。DX推進で組織変革をにない、侘び寂びの精神で挑戦していく人を支える世界を作っている。",
  birthYear: 1996,
  location: "東京",
  disability: "両耳の軽度聴力障害（障害者手帳6級）",
};

export const VALUES: Value[] = [
  {
    emoji: "🤝",
    title: "身近な人から始める",
    description:
      "変えたい世界があるなら、まず自分の周りの人にいかにして価値を提供できるか考える。",
  },
  {
    emoji: "🚀",
    title: "迷ったら動く",
    description:
      "完璧な情報がある前にも動く。行動を続けることで、最も理想に近づける。",
  },
  {
    emoji: "🌱",
    title: "恩を返す",
    description:
      "受けた恩を、次の世代へと繋げていく。Give & Givenの循環を続ける。",
  },
];

export const MOTTOS: Motto[] = [
  {
    text: "全員を救おうとするな。まず身近にいる人のことを考えてみよう。",
  },
  {
    text: "夢は逃げない。逃げているのは常に自分だ。",
  },
];

export const DREAM = {
  title: "夢・ビジョン",
  vision:
    "社会福祉×デジタル技術×街づくりを組み合わせた、持続可能な社会モデルを構築する。",
  goal: "土地を買って、夢を持つ人を支える空間を作る。",
};

export const WABISABI_PROJECT: {
  name: string;
  tagline: string;
  mission: string;
  vision: string;
  values: WabisabiValue[];
  principles: string[];
} = {
  name: "Wabisabi Project",
  tagline: "不完全な人が挑戦していくことを支えていく",
  mission: "不完全を受け入れ、お互いを支え合い、持続可能な未来を築く。",
  vision:
    "「侘び寂び」の精神を根拠にした、挑戦していく人々を支える世界のハブになる。",
  values: [
    { title: "共感", description: "他者の不完全さを理解し、温かい視点で見る。" },
    {
      title: "シンプルさと本質",
      description: "複雑さを排し、本質に向き合う。",
    },
    {
      title: "不完全への敬意",
      description: "完璧を求めず、あるがままの美しさを見出す。",
    },
    {
      title: "継続性",
      description: "短期的な結果だけでなく、長期的な成長を信じる。",
    },
    {
      title: "共同創造",
      description: "一人ではなく、みんなで一緒に未来を作る。",
    },
  ],
  principles: [
    "共創的思考",
    "透明な温かさ",
    "相互支援",
    "継続的学びの精神",
    "余白の価値",
  ],
};

export const TIMELINE: TimelineEvent[] = [
  {
    year: "1996",
    title: "東京で誕生",
    description: "両耳の軽度の聴力障害を持って生まれた。",
  },
  {
    year: "2004",
    title: "柔道を始める",
    description: "10年以上続けるほどの情熱を注いだ。",
  },
  {
    year: "2009",
    title: "寮生活へ",
    description: "新しい環境で自己成長を続ける。",
  },
  {
    year: "2015",
    title: "大学へ",
    description: "社会福祉を学んだ。",
  },
  {
    year: "2019",
    title: "企業に入社",
    description: "とある通信インフラ会社の一員として勤務し始めた。",
  },
  {
    year: "2022",
    title: "生成AIと出会う",
    description: "ChatGPTの登場で、DXの可能性を感じた。",
  },
  {
    year: "2023",
    title: "DX推進担当へ",
    description: "PowerPlatform・Copilotの実証実験を開始。",
  },
  {
    year: "2024",
    title: "生成AI推進活動開始",
    description: "社内外での活動を本格化させた。",
  },
  {
    year: "2025",
    title: "AI研修の開催",
    description:
      "社内のAI活用率を半年で33%から78%へと向上させた。3,000人以上にAIを伝えた。",
  },
  {
    year: "2025.12",
    title: "Wabisabi企画開始",
    description: "Wabisabi Projectの企画を開始した。",
  },
  {
    year: "2026.01",
    title: "Wabisabi正式開始",
    description:
      "個人の取り組みとして「Wabisabi Project」が公式に開始された。侘び寂びの精神を根拠にし、挑戦していく人々を支える世界のハブとなることを目指している。",
  },
];

export const SKILLS: Skill[] = [
  {
    category: "DX推進・AI導入",
    items: [
      "3,000人以上への生成AI推進",
      "AI研修企画・開催",
      "DX人材育成",
      "非エンジニアへの伝え方",
      "複数AIツールの活用",
    ],
  },
  {
    category: "ビジネス効率化・アプリ開発",
    items: [
      "PowerPlatform アプリ開発",
      "AI画像解析のPoC",
      "知識管理システム構築",
    ],
  },
  {
    category: "コミュニティ活動・学びの姿勢",
    items: [
      "AIコミュニティに参加・運営",
      "ハッカスン参加",
      "即実践の文化を推進",
    ],
  },
  {
    category: "社会福祉×コミュニティ開発",
    items: ["社会福祉の知識・視点", "コミュニティ開発の実践"],
  },
  {
    category: "コミュニケーション・思想リーダーシップ",
    items: [
      "3,000人以上への登壇経験",
      "AI活用によるコミュニケーション",
      "アクセシビリティ対応のUXデザイン",
      "コンテンツ制作",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "wabisabi",
    title: "Wabisabi Project",
    description:
      "個人の取り組みとして立ち上げたプロジェクト。侘び寂びの精神を根拠とし、挑戦していく人々を支える世界のハブを構築している。",
    status: "ongoing",
    tags: ["コミュニティ", "ソーシャル", "侘び寂び"],
  },
  {
    id: "dx-promotion",
    title: "社内DX推進",
    description:
      "本業としての取り組み。社内のAI活用率を半年で33%から78%へと向上させた。複数のワークショップや研修を企画・開催した。",
    status: "ongoing",
    tags: ["DX推進", "AI", "オーガニゼーション"],
  },
  {
    id: "ai-workshop",
    title: "生成AIワークショップ",
    description:
      "社内外で3,000人以上に生成AIの知識と活用法を伝えるワークショップを開催した。",
    status: "ongoing",
    tags: ["ワークショップ", "生成AI", "教育"],
  },
  {
    id: "powerplatform",
    title: "PowerPlatform アプリ開発",
    description: "PowerPlatformを使用したビジネス効率化アプリを開発した。",
    status: "completed",
    tags: ["PowerPlatform", "アプリ開発", "効率化"],
  },
  {
    id: "future-1",
    title: "今後のプロジェクト①",
    description: "近未来に開始予定のプロジェクト。",
    status: "planning",
    tags: ["予定"],
  },
  {
    id: "future-2",
    title: "今後のプロジェクト②",
    description: "近未来に開始予定のプロジェクト。",
    status: "planning",
    tags: ["予定"],
  },
];

export const CONTENTS: ContentItem[] = [
  {
    title: "note",
    description: "DX・AI・コミュニティに関する記事を書いています。",
    url: "https://note.com/sota_n",
    icon: "note",
  },
  {
    title: "ブログ",
    description:
      "私の日々の取り組みや、感情、考え方を取り上げる個人ブログを運営しています。",
    url: "https://jinkoma-blog.com",
    icon: "blog",
  },
  {
    title: "YouTube",
    description: "動画コンテンツを公開しています。たまに作業配信しています。",
    url: "https://youtube.com/@sota.n_youtube",
    icon: "youtube",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "X (Twitter)",
    url: "https://twitter.com/narasou_dxai08",
    icon: "x",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/narasou_dxai08",
    icon: "instagram",
  },
  { name: "note", url: "https://note.com/sota_n", icon: "note" },
  {
    name: "YouTube",
    url: "https://youtube.com/@sota.n_youtube",
    icon: "youtube",
  },
  { name: "Blog", url: "https://jinkoma-blog.com", icon: "blog" },
];

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Journey", href: "/journey" },
  { label: "Projects", href: "/projects" },
  { label: "Contents", href: "/contents" },
  { label: "Contact", href: "/contact" },
];
