export interface LearnResource {
  type: "Paper" | "GitHub" | "Reading List";
  title: string;
  source: string;
  date: string;
  href: string;
  summary: string;
  tags: string[];
}

export interface LearnTopic {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  resources: LearnResource[];
}

export const lastUpdated = "2026-09-01";

export const learnTopics: LearnTopic[] = [
  {
    slug: "mathematics",
    title: "Mathematics",
    subtitle: "Probability, dynamics, optimization, and mathematical foundations",
    description:
      "Papers and repositories that connect rigorous mathematical ideas with modeling, simulation, and computational tools.",
    resources: [
      {
        type: "Paper",
        title: "Colorful Exponential Random Graph Models",
        source: "arXiv",
        date: "2026-08-31",
        href: "https://arxiv.org/abs/2608.31130",
        summary:
          "Extends exponential random graph models to colored networks and graphon limits, linking probability, statistical mechanics, and modern network modeling.",
        tags: ["Probability", "Random Graphs", "Statistics"],
      },
      {
        type: "Paper",
        title: "Scale Analysis and Shape Selection for the Generalized Gaussian Mechanism under Approximate Differential Privacy",
        source: "arXiv",
        date: "2026-08-31",
        href: "https://arxiv.org/abs/2608.31138",
        summary:
          "Studies how to tune generalized Gaussian noise for approximate differential privacy, a useful bridge between mathematical statistics and privacy-aware data analysis.",
        tags: ["Statistics", "Differential Privacy", "Mechanism Design"],
      },
      {
        type: "Paper",
        title: "On (fake) Stationarity in Stochastic Volterra Equations with Affine Drift and Regular Kernels",
        source: "arXiv",
        date: "2026-08-31",
        href: "https://arxiv.org/abs/2608.31099",
        summary:
          "Clarifies stationarity-like behavior in stochastic Volterra equations, giving a compact window into long-memory stochastic dynamics.",
        tags: ["Probability", "Stochastic Processes", "Volterra Equations"],
      },
      {
        type: "GitHub",
        title: "stdlib-js/stdlib",
        source: "GitHub",
        date: "Updated 2026-09-01",
        href: "https://github.com/stdlib-js/stdlib",
        summary:
          "A substantial JavaScript/TypeScript numerical and scientific standard library, useful for seeing how mathematical computing APIs are organized for the web ecosystem.",
        tags: ["Numerical Computing", "Statistics", "TypeScript"],
      },
      {
        type: "GitHub",
        title: "root-project/root",
        source: "GitHub",
        date: "Updated 2026-09-01",
        href: "https://github.com/root-project/root",
        summary:
          "CERN's ROOT toolkit remains a rich case study in statistical analysis, visualization, and large-scale scientific data infrastructure.",
        tags: ["Statistics", "Scientific Computing", "C++"],
      },
    ],
  },
  {
    slug: "machine-learning",
    title: "Machine Learning",
    subtitle: "Deep learning, evaluation, optimization, and applied ML systems",
    description:
      "A running list of ML papers and codebases I am reading to improve model-building, evaluation, and deployment intuition.",
    resources: [
      {
        type: "Paper",
        title: "Sharp Approximation Rates for Neural Networks with Affine Latent Parameterizations",
        source: "arXiv",
        date: "2026-08-31",
        href: "https://arxiv.org/abs/2608.31157",
        summary:
          "Analyzes parameter-efficient neural networks where full weights are generated from low-dimensional latent variables, sharpening intuition about compact model families.",
        tags: ["Approximation Theory", "Neural Networks", "Parameter Efficiency"],
      },
      {
        type: "Paper",
        title: "On the Complexity of the Compatibility Problem for Succinctly Encoded Conditional Distributions",
        source: "arXiv",
        date: "2026-08-31",
        href: "https://arxiv.org/abs/2608.31120",
        summary:
          "Examines when separately specified conditionals can come from a coherent joint distribution, a foundational issue for probabilistic ML modeling.",
        tags: ["Probabilistic ML", "Complexity", "Conditional Models"],
      },
      {
        type: "Paper",
        title: "Constant Individual Regret in General Games",
        source: "arXiv",
        date: "2026-08-31",
        href: "https://arxiv.org/abs/2608.31166",
        summary:
          "Improves no-regret guarantees in finite games, relevant to learning dynamics and equilibrium-seeking algorithms.",
        tags: ["Game Theory", "Online Learning", "Regret"],
      },
      {
        type: "GitHub",
        title: "vllm-project/vllm",
        source: "GitHub",
        date: "Updated 2026-09-01",
        href: "https://github.com/vllm-project/vllm",
        summary:
          "A high-throughput LLM inference server and engine; its active updates are worth tracking for practical serving, batching, and memory-management patterns.",
        tags: ["LLM Inference", "Serving", "Systems"],
      },
      {
        type: "GitHub",
        title: "flagos-ai/FlagGems",
        source: "GitHub",
        date: "Updated 2026-09-01",
        href: "https://github.com/flagos-ai/FlagGems",
        summary:
          "A Triton-based operator library for large language models, useful for studying the lower-level kernels behind efficient training and inference.",
        tags: ["LLM Systems", "Triton", "Kernels"],
      },
    ],
  },
  {
    slug: "ai-agents",
    title: "AI Agents",
    subtitle: "Tool use, memory, autonomy, benchmarks, and agent infrastructure",
    description:
      "Resources for understanding how AI agents plan, use tools, evaluate themselves, and operate as long-running systems.",
    resources: [
      {
        type: "Paper",
        title: "S3Gym: Can LLMs Turn Self-Testing and Self-Judging into Self-Improvement?",
        source: "arXiv",
        date: "2026-08-31",
        href: "https://arxiv.org/abs/2608.31100",
        summary:
          "Tests whether agents can convert accumulated experience into self-generated tests, judgments, and improved behavior rather than remaining fixed policies.",
        tags: ["Self-Improvement", "Agent Benchmarks", "Evaluation"],
      },
      {
        type: "Paper",
        title: "Token-Efficient Data Reasoning Agents via Adaptive Structuring of Unstructured Data",
        source: "arXiv",
        date: "2026-08-31",
        href: "https://arxiv.org/abs/2608.31082",
        summary:
          "Focuses on reducing token cost for agents reasoning over messy enterprise documents by adaptively structuring unstructured data.",
        tags: ["Data Agents", "Token Efficiency", "Reasoning"],
      },
      {
        type: "Paper",
        title: "Reconciling Process Supervision with Outcome-Based Credit in Agentic Policy Optimization",
        source: "arXiv",
        date: "2026-08-31",
        href: "https://arxiv.org/abs/2608.31077",
        summary:
          "Targets the credit-assignment problem in long-horizon agent training by combining outcome feedback with finer process supervision.",
        tags: ["Agent Training", "Policy Optimization", "Credit Assignment"],
      },
      {
        type: "GitHub",
        title: "aaif-goose/goose",
        source: "GitHub",
        date: "Updated 2026-09-01",
        href: "https://github.com/aaif-goose/goose",
        summary:
          "An extensible open-source AI agent that can execute, edit, and test with external tools, making it a practical reference for tool-using coding agents.",
        tags: ["Coding Agents", "Tool Use", "Open Source"],
      },
      {
        type: "GitHub",
        title: "stablyai/orca",
        source: "GitHub",
        date: "Updated 2026-09-01",
        href: "https://github.com/stablyai/orca",
        summary:
          "An agent development environment for running fleets of parallel coding agents, relevant for understanding orchestration and human oversight workflows.",
        tags: ["Agent Orchestration", "Parallel Agents", "Developer Tools"],
      },
    ],
  },
];
