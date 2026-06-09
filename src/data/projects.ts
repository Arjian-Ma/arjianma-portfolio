export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  date: string;
  description: string;
  highlights?: string[];
  tags: string[];
  links?: ProjectLink[];
}

export const projects: Project[] = [
  {
    title: "Distributed Web Crawler and Search Engine",
    date: "Aug 2025",
    description:
      "Built an end-to-end distributed search engine in Java with a custom HTTP server, distributed key-value store, Flame-style compute layer, robust crawler, inverted indexer, PageRank ranking, and frontend search interface.",
    highlights: [
      "Custom web server, KVS, crawler, indexer, PageRank, and search frontend",
      "Robots.txt handling, rate limiting, blacklist filtering, and URL normalization",
      "SHA-256 content deduplication, anchor text extraction, and spider-trap protection",
    ],
    tags: ["Java", "Distributed Systems", "Web Crawling", "KVS", "PageRank", "Search"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Arjian-Ma/CIS555",
      },
    ],
  },
  {
    title: "League of Legends Match Outcome Prediction",
    date: "Nov 2025",
    description:
      "Built a time-series machine learning pipeline to predict League of Legends match outcomes from Riot API timeline data. Engineered temporal player/team features and compared deep learning models with tree-based baselines across multiple game-time checkpoints.",
    highlights: [
      "Processed 128K+ in-game frames from 4,546 matches",
      "Engineered 256 temporal features with leakage-aware train/validation/test splits",
      "Compared LSTM, GRU, TCN, Transformer, Random Forest, Gradient Boosting, and XGBoost models",
      "Reached roughly 85% late-game test accuracy",
    ],
    tags: ["Python", "PyTorch", "Riot API", "Time Series", "LSTM", "XGBoost"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Arjian-Ma/ESE5380_FINAL",
      },
    ],
  },
  {
    title: "Mathematical Modeling of Idea Intrusion",
    date: "Jul 2023",
    description:
      "Models of ideological conflict incorporating committed minorities and deradicalization factors. Applied bifurcation and stability analyses to study opinion fragmentation and group dynamics.",
    highlights: [
      "Modeled interaction dynamics between mainstream and committed minority groups",
      "Studied stability, bifurcation behavior, and deradicalization strategies",
    ],
    tags: ["Mathematical Modeling", "Stability Analysis", "MATLAB", "Research"],
  },
];
