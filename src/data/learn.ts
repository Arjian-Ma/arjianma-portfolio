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

export const lastUpdated = "2026-08-19";

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
        title: "The concentration game: Bayesian updating, regret, and information",
        source: "arXiv",
        date: "2026-08-18",
        href: "https://arxiv.org/abs/2608.18061",
        summary:
          "Frames Bayesian updating and exponential-weights regret through one zero-sum game, a useful bridge between probability, statistics, and online learning.",
        tags: ["Probability", "Statistics", "Online Learning"],
      },
      {
        type: "Paper",
        title: "Global Optimization of Flexible District Heating Networks",
        source: "arXiv",
        date: "2026-08-18",
        href: "https://arxiv.org/abs/2608.18046",
        summary:
          "Applies global optimization to low-carbon district heating networks with heterogeneous sources, storage, and meshed topology.",
        tags: ["Optimization", "Energy Systems", "Networks"],
      },
      {
        type: "Paper",
        title: "Unique Ergodicity for the Projective Process of the 2D Navier--Stokes Equation with Nondegenerate Noise",
        source: "arXiv",
        date: "2026-08-18",
        href: "https://arxiv.org/abs/2608.18075",
        summary:
          "Studies ergodic behavior for stochastic 2D Navier--Stokes dynamics, tying probability, PDEs, and long-time behavior together.",
        tags: ["Probability", "Stochastic PDEs", "Dynamics"],
      },
      {
        type: "Paper",
        title: "A Local Central Limit Theorem for Clique Counts in Sparse Random Graphs",
        source: "arXiv",
        date: "2026-08-17",
        href: "https://arxiv.org/abs/2608.16882",
        summary:
          "Advances local central limit theory for subgraph counts in sparse Erdős-Rényi graphs, connecting probability, combinatorics, and random-graph asymptotics.",
        tags: ["Probability", "Random Graphs", "Limit Theorems"],
      },
      {
        type: "GitHub",
        title: "stdlib-js/stdlib",
        source: "GitHub",
        date: "Updated 2026-08-19",
        href: "https://github.com/stdlib-js/stdlib",
        summary:
          "A broad numerical and statistical standard library for JavaScript and TypeScript, useful for seeing how mathematical computing primitives are engineered for production environments.",
        tags: ["Numerical Computing", "Statistics", "TypeScript"],
      },
      {
        type: "GitHub",
        title: "root-project/root",
        source: "GitHub",
        date: "Updated 2026-08-19",
        href: "https://github.com/root-project/root",
        summary:
          "A mature scientific data-analysis framework whose numerical, statistical, and visualization tools show large-scale scientific software design.",
        tags: ["Scientific Computing", "Statistics", "C++"],
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
        title: "On the Fragility of Self-Improving Agents: Variance, Task Order, and Underspecification",
        source: "arXiv",
        date: "2026-08-18",
        href: "https://arxiv.org/abs/2608.18066",
        summary:
          "Stress-tests memory-based self-improving agents and highlights variance, task ordering, and underspecification risks that matter for reliable ML systems.",
        tags: ["Agentic ML", "Evaluation", "Reliability"],
      },
      {
        type: "Paper",
        title: "TokEval: A Tokenizer Evaluation Suite",
        source: "arXiv",
        date: "2026-08-18",
        href: "https://arxiv.org/abs/2608.18062",
        summary:
          "Offers a focused evaluation suite for tokenizer choices, an often under-measured component that directly affects language-model behavior.",
        tags: ["Tokenization", "Evaluation", "Language Models"],
      },
      {
        type: "Paper",
        title: "From Corpora to Co-Evolving Capabilities: Capability-Centric Data Design for Generalist Image Generation",
        source: "arXiv",
        date: "2026-08-18",
        href: "https://arxiv.org/abs/2608.18076",
        summary:
          "Reframes image-generation data design around co-evolving capabilities instead of isolated task datasets, useful for thinking about data curation strategy.",
        tags: ["Data Curation", "Image Generation", "Generalist Models"],
      },
      {
        type: "Paper",
        title: "Q-based Variational Inverse Reinforcement Learning",
        source: "arXiv",
        date: "2026-08-17",
        href: "https://arxiv.org/abs/2608.16888",
        summary:
          "Introduces a Bayesian inverse-reinforcement-learning method that learns a variational distribution over optimal Q-values to recover reward uncertainty from demonstrations.",
        tags: ["Reinforcement Learning", "Bayesian ML", "Preference Learning"],
      },
      {
        type: "GitHub",
        title: "vllm-project/vllm",
        source: "GitHub",
        date: "Updated 2026-08-19",
        href: "https://github.com/vllm-project/vllm",
        summary:
          "A high-throughput LLM inference and serving engine worth following for practical scheduling, memory management, and deployment tradeoffs.",
        tags: ["LLM Serving", "Inference", "Systems"],
      },
      {
        type: "GitHub",
        title: "NVIDIA/TensorRT-LLM",
        source: "GitHub",
        date: "Updated 2026-08-19",
        href: "https://github.com/NVIDIA/TensorRT-LLM",
        summary:
          "A production-oriented LLM inference stack for NVIDIA GPUs, worth following for kernels, runtime orchestration, and deployment performance.",
        tags: ["LLM Serving", "Inference", "CUDA"],
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
        title: "StagedWorkspace: A Versioned Workspace for Knowledge-Work Agents",
        source: "arXiv",
        date: "2026-08-18",
        href: "https://arxiv.org/abs/2608.18050",
        summary:
          "Proposes versioned workspaces for agents editing persistent artifacts, directly relevant to reliable long-running knowledge work.",
        tags: ["Agent Workspaces", "Versioning", "Knowledge Work"],
      },
      {
        type: "Paper",
        title: "StartupBench: Benchmarking General-Purpose Agents on Market-Validated End-to-End Workflows",
        source: "arXiv",
        date: "2026-08-18",
        href: "https://arxiv.org/abs/2608.17800",
        summary:
          "Benchmarks agents on market-validated startup workflows, pushing evaluation toward realistic end-to-end tasks rather than toy assignments.",
        tags: ["Agent Benchmarks", "Workflows", "Evaluation"],
      },
      {
        type: "Paper",
        title: "CABLE: Extending the Reach of Memory Retrieval via Complementary Antecedent-Based Linking and Expansion",
        source: "arXiv",
        date: "2026-08-18",
        href: "https://arxiv.org/abs/2608.17911",
        summary:
          "Studies evidence reachability in bounded memory interfaces, a practical bottleneck for agents that operate across long workflows and sessions.",
        tags: ["Agent Memory", "Retrieval", "Long Context"],
      },
      {
        type: "Paper",
        title: "AgentRewind: Recoverable Execution for Long-Horizon LLM Agents",
        source: "arXiv",
        date: "2026-08-14",
        href: "https://arxiv.org/abs/2608.14380",
        summary:
          "Introduces checkpoint-based recovery for long-horizon agents so failures can be rolled back across both context and environment state.",
        tags: ["Long-Horizon Agents", "Recovery", "Runtime Systems"],
      },
      {
        type: "GitHub",
        title: "Team-Commonly/commonly",
        source: "GitHub",
        date: "Updated 2026-08-19",
        href: "https://github.com/Team-Commonly/commonly",
        summary:
          "An open-source room for humans and cross-vendor agents, useful for studying multi-agent collaboration, memory, and orchestration patterns.",
        tags: ["Multi-Agent", "Agent Framework", "Collaboration"],
      },
      {
        type: "GitHub",
        title: "langgenius/dify",
        source: "GitHub",
        date: "Updated 2026-08-19",
        href: "https://github.com/langgenius/dify",
        summary:
          "A widely used platform for agentic workflows and RAG pipelines, useful for learning how tools, retrieval, and deployment are packaged for teams.",
        tags: ["Agent Workflows", "RAG", "Platform"],
      },
    ],
  },
];
