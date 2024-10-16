export type NewsInfoType = {
  status: string;
  totalResults: number;
  results: NewsResultsType[];
  nextPage: string;
};

export type NewsResultsType = {
  article_id: string;
  title: string;
  link: string;
  keywords: string | null;
  creator: string[];
  video_url: string | null;
  description: string;
  content: string;
  pubDate: string;
  pubDateTZ: string;
  image_url: string;
  source_id: string;
  source_priority: number;
  source_name: string;
  source_url: string;
  source_icon: string;
  language: string;
  country: string[];
  category: string[];
  ai_tag: string[];
  ai_region: string[];
  ai_org: string | null;
  sentiment: string;
  sentiment_stats: {
    positive: number;
    neutral: number;
    negative: number;
  };
  duplicate: boolean;
};
