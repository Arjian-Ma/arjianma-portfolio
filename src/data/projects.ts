export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
  caption: string;
}

export interface ProjectSection {
  heading: string;
  body: string;
  bullets?: string[];
}

export interface Project {
  slug: string;
  title: string;
  date: string;
  description: string;
  overview: string;
  highlights?: string[];
  tags: string[];
  links?: ProjectLink[];
  images?: ProjectImage[];
  sections?: ProjectSection[];
}

export const projects: Project[] = [
  {
    slug: "distributed-search-engine",
    title: "Distributed Web Crawler and Search Engine",
    date: "Aug 2025",
    description:
      "Built an end-to-end distributed search engine in Java with a custom HTTP server, distributed key-value store, Flame-style compute layer, robust crawler, inverted indexer, PageRank ranking, and frontend search interface.",
    overview:
      "This project implements a distributed web search engine from the ground up. The system combines a custom Java web server, distributed key-value storage, a Flame-style compute layer, crawler jobs, an inverted indexer, PageRank, and a query frontend into one search pipeline.",
    highlights: [
      "Custom web server, KVS, crawler, indexer, PageRank, and search frontend",
      "Robots.txt handling, rate limiting, blacklist filtering, and URL normalization",
      "SHA-256 content deduplication, anchor text extraction, and spider-trap protection",
    ],
    tags: ["Java", "Distributed Systems", "Web Crawling", "KVS", "PageRank", "Search"],
    links: [
      {
        label: "Details",
        href: "/projects/distributed-search-engine/",
      },
      {
        label: "GitHub",
        href: "https://github.com/Arjian-Ma/CIS555",
      },
    ],
    images: [
      {
        src: "/project-images/search-engine-architecture.svg",
        alt: "Architecture diagram for the distributed search engine",
        caption: "End-to-end architecture: crawler workers collect pages, KVS stores content, indexing and PageRank jobs rank results, and the frontend serves queries.",
      },
      {
        src: "/project-images/search-engine-crawler-flow.svg",
        alt: "Crawler data-flow diagram showing URL filtering, robots checks, deduplication, and storage",
        caption: "Crawler pipeline with URL normalization, robots.txt checks, blacklist filtering, content hashing, and domain statistics.",
      },
    ],
    sections: [
      {
        heading: "Problem",
        body:
          "Search engines require several systems to work together: crawling, storage, distributed computation, ranking, and query serving. I built this project to understand how those pieces fit together in a scalable architecture rather than relying on existing search libraries.",
      },
      {
        heading: "System Design",
        body:
          "The system starts with seed URLs and uses Flame workers to crawl pages in parallel. Crawled content is stored in a distributed key-value store, then processed by indexing and PageRank jobs. A frontend service combines inverted-index matches with ranking signals to return search results.",
        bullets: [
          "Custom HTTP server and frontend search interface",
          "Distributed KVS for crawled pages, host metadata, content hashes, and blacklist rules",
          "Flame-style distributed jobs for crawling, indexing, and PageRank",
          "PageRank-enhanced retrieval for ranked query results",
        ],
      },
      {
        heading: "Crawler Robustness",
        body:
          "The crawler includes practical protections needed for real web crawling. It normalizes URLs, respects robots.txt constraints, limits per-domain crawl depth and volume, filters blacklisted patterns, deduplicates page content with SHA-256 hashes, and tracks domain-level statistics.",
        bullets: [
          "Robots.txt and domain-level rate limiting",
          "Spider-trap protection through depth, URL length, and page-count limits",
          "Content-size checks to avoid oversized downloads",
          "Anchor text extraction for better downstream ranking signals",
        ],
      },
      {
        heading: "What I Learned",
        body:
          "This project strengthened my understanding of distributed systems tradeoffs: batching vs. memory pressure, crawl politeness vs. throughput, fault tolerance in long-running jobs, and how ranking quality depends on both crawler quality and index design.",
      },
    ],
  },
  {
    slug: "league-match-prediction",
    title: "League of Legends Match Outcome Prediction",
    date: "Nov 2025",
    description:
      "Built a time-series machine learning pipeline to predict League of Legends match outcomes from Riot API timeline data. Engineered temporal player/team features and compared deep learning models with tree-based baselines across multiple game-time checkpoints.",
    overview:
      "This project studies how predictable a League of Legends match becomes as the game evolves. I built a machine learning pipeline around Riot API timeline data, converted raw match events into temporal player/team features, and compared sequential deep learning models against traditional ML baselines.",
    highlights: [
      "Processed 128K+ in-game frames from 4,546 matches",
      "Engineered 256 temporal features with leakage-aware train/validation/test splits",
      "Compared LSTM, GRU, TCN, Transformer, Random Forest, Gradient Boosting, and XGBoost models",
      "Reached roughly 85% late-game test accuracy",
    ],
    tags: ["Python", "PyTorch", "Riot API", "Time Series", "LSTM", "XGBoost"],
    links: [
      {
        label: "Details",
        href: "/projects/league-match-prediction/",
      },
      {
        label: "GitHub",
        href: "https://github.com/Arjian-Ma/ESE5380_FINAL",
      },
    ],
    images: [
      {
        src: "/project-images/lol-ml-pipeline.svg",
        alt: "Machine learning pipeline for League of Legends match prediction",
        caption: "Pipeline from Riot API timelines to feature engineering, temporal splits, model training, and checkpoint-based evaluation.",
      },
      {
        src: "/project-images/lol-accuracy-timeline.svg",
        alt: "Accuracy trend across different game-time checkpoints",
        caption: "Prediction becomes more reliable later in the game as more gold, XP, map, combat, and objective signals become available.",
      },
    ],
    sections: [
      {
        heading: "Problem",
        body:
          "League of Legends is a dynamic, partially observable game where early leads may or may not convert into wins. The goal was to predict match outcomes from evolving game-state data and understand how prediction confidence changes across time checkpoints.",
      },
      {
        heading: "Data and Features",
        body:
          "I collected Riot API timeline data and converted raw event frames into a structured modeling dataset. Features capture player statistics, team-level differences, gold and XP dynamics, combat signals, vision control, map position, and objective progress.",
        bullets: [
          "4,546 matches and 128,684 temporal frames",
          "256 engineered features after leakage checks",
          "Match-level train/validation/test splits to avoid frame leakage",
          "Separate evaluations at 10, 15, 20, 25, and 30 minute checkpoints",
        ],
      },
      {
        heading: "Modeling Approach",
        body:
          "I compared sequential models that can learn temporal game dynamics with tree-based baselines that perform well on structured tabular features. The comparison highlights where sequence modeling helps and where strong engineered features allow simpler models to remain competitive.",
        bullets: [
          "LSTM, GRU, TCN, and Transformer-style temporal models",
          "Random Forest, Gradient Boosting, AdaBoost, and XGBoost baselines",
          "Checkpoint-specific classifiers for different stages of the match",
          "Game-level visualization of prediction trajectories",
        ],
      },
      {
        heading: "Results and Takeaways",
        body:
          "Late-game models reached roughly 85% test accuracy, while earlier checkpoints were naturally harder because the game state contains less decisive information. The project showed how temporal information, leakage prevention, and careful split design are just as important as model choice.",
      },
    ],
  },
  {
    slug: "idea-intrusion-modeling",
    title: "Mathematical Modeling of Idea Intrusion",
    date: "Jul 2023",
    description:
      "Models of ideological conflict incorporating committed minorities and deradicalization factors. Applied bifurcation and stability analyses to study opinion fragmentation and group dynamics.",
    overview:
      "This research project uses mathematical modeling to study how committed minority groups, mainstream populations, and deradicalization mechanisms can shape opinion dynamics over time.",
    highlights: [
      "Modeled interaction dynamics between mainstream and committed minority groups",
      "Studied stability, bifurcation behavior, and deradicalization strategies",
    ],
    tags: ["Mathematical Modeling", "Stability Analysis", "MATLAB", "Research"],
    links: [
      {
        label: "Details",
        href: "/projects/idea-intrusion-modeling/",
      },
    ],
    images: [
      {
        src: "/project-images/idea-model-phase.svg",
        alt: "Conceptual phase diagram for opinion dynamics model",
        caption: "Conceptual view of competing social forces: mainstream influence, committed minority pressure, and deradicalization effects.",
      },
    ],
    sections: [
      {
        heading: "Problem",
        body:
          "The project explores how a committed minority can influence a larger population and under what conditions the system converges, fragments, or shifts toward a new equilibrium.",
      },
      {
        heading: "Approach",
        body:
          "I formulated a dynamical-system model and studied equilibrium behavior under different parameter settings. Stability and bifurcation analysis helped identify how changes in influence strength or deradicalization rates alter long-term outcomes.",
        bullets: [
          "Defined state variables for population groups and belief states",
          "Analyzed fixed points and local stability",
          "Explored parameter regimes with numerical simulation",
        ],
      },
      {
        heading: "Takeaway",
        body:
          "The work connected applied mathematics with social dynamics, showing how qualitative behavior can change sharply when influence or intervention parameters cross critical thresholds.",
      },
    ],
  },
];
