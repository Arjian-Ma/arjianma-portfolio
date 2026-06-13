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

export const lastUpdated = "2026-06-13";

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
        title: "Stochastic dominations for FK percolation and sharp thinning thresholds for the Ising energy field",
        source: "arXiv",
        date: "2026-06-11",
        href: "https://arxiv.org/abs/2606.13648",
        summary:
          "A probability paper probing stochastic domination and thinning thresholds in Ising-model energy fields.",
        tags: ["Probability", "Percolation", "Ising Models"],
      },
      {
        type: "Paper",
        title: "Data-driven subsampling rates for diffusion parameter estimation of SDEs",
        source: "arXiv",
        date: "2026-06-11",
        href: "https://arxiv.org/abs/2606.13615",
        summary:
          "A statistical-probability approach to choosing subsampling scales for estimating diffusion parameters in SDE models.",
        tags: ["SDEs", "Statistics", "Parameter Estimation"],
      },
      {
        type: "GitHub",
        title: "casadi/casadi",
        source: "GitHub",
        date: "Updated 2026-06-12",
        href: "https://github.com/casadi/casadi",
        summary:
          "A symbolic framework for numerical optimization and algorithmic differentiation, useful for control and applied math workflows.",
        tags: ["Optimization", "Numerical Computing", "Control"],
      },
      {
        type: "GitHub",
        title: "runmat-org/runmat",
        source: "GitHub",
        date: "Updated 2026-06-13",
        href: "https://github.com/runmat-org/runmat",
        summary:
          "An open-source MATLAB-style runtime written in Rust, with CPU, GPU, Jupyter, and web targets for scientific computing experiments.",
        tags: ["Numerical Analysis", "Scientific Computing", "Rust"],
      },
      {
        type: "GitHub",
        title: "antoniolupetti/algebrica",
        source: "GitHub",
        date: "Updated 2026-06-13",
        href: "https://github.com/antoniolupetti/algebrica",
        summary:
          "An open mathematical knowledge base focused on clear structure, visual explanations, and conceptual learning.",
        tags: ["Knowledge Base", "Math Learning"],
      },
      {
        type: "GitHub",
        title: "stdlib-js/stdlib",
        source: "GitHub",
        date: "Updated 2026-06-13",
        href: "https://github.com/stdlib-js/stdlib",
        summary:
          "A broad numerical computing library for JavaScript and TypeScript, useful as a practical computational reference.",
        tags: ["Numerical Computing", "Library"],
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
        title: "Learning to Reason by Analogy via Retrieval-Augmented Reinforcement Fine-Tuning",
        source: "arXiv",
        date: "2026-06-11",
        href: "https://arxiv.org/abs/2606.13680",
        summary:
          "A retrieval-augmented reinforcement fine-tuning paper that targets analogy-based reasoning rather than simple semantic similarity.",
        tags: ["RAG", "Reinforcement Fine-Tuning", "Reasoning"],
      },
      {
        type: "Paper",
        title: "Understanding Truncated Positional Encodings for Graph Neural Networks",
        source: "arXiv",
        date: "2026-06-11",
        href: "https://arxiv.org/abs/2606.13671",
        summary:
          "A graph-learning paper studying how truncated positional encodings affect the power and behavior of GNNs.",
        tags: ["Graph Neural Networks", "Positional Encoding", "Theory"],
      },
      {
        type: "GitHub",
        title: "skypilot-org/skypilot",
        source: "GitHub",
        date: "Updated 2026-06-13",
        href: "https://github.com/skypilot-org/skypilot",
        summary:
          "A practical infrastructure layer for running and scaling AI workloads across Kubernetes, Slurm, cloud, and on-prem GPU environments.",
        tags: ["ML Infrastructure", "Distributed Training", "LLM Serving"],
      },
      {
        type: "GitHub",
        title: "py-why/dowhy",
        source: "GitHub",
        date: "Updated 2026-06-13",
        href: "https://github.com/py-why/dowhy",
        summary:
          "A causal machine-learning library that keeps assumptions explicit through graphical models, potential outcomes, and refutation tests.",
        tags: ["Causal ML", "Evaluation", "Statistics"],
      },
      {
        type: "GitHub",
        title: "pytorch/executorch",
        source: "GitHub",
        date: "Updated 2026-06-13",
        href: "https://github.com/pytorch/executorch",
        summary:
          "PyTorch's on-device AI runtime for mobile, embedded, and edge deployment.",
        tags: ["Edge AI", "Deployment", "PyTorch"],
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
        title: "EvoArena: Tracking Memory Evolution for Robust LLM Agents in Dynamic Environments",
        source: "arXiv",
        date: "2026-06-11",
        href: "https://arxiv.org/abs/2606.13681",
        summary:
          "A benchmark-style agent paper focused on memory evolution and robustness when environments change over time.",
        tags: ["Memory", "Benchmarks", "Dynamic Environments"],
      },
      {
        type: "Paper",
        title: "HyperTool: Beyond Step-Wise Tool Calls for Tool-Augmented Agents",
        source: "arXiv",
        date: "2026-06-11",
        href: "https://arxiv.org/abs/2606.13663",
        summary:
          "A tool-use paper addressing the mismatch between atomic tool calls and larger deterministic tool workflows.",
        tags: ["Tool Use", "Agent Workflows", "LLM Agents"],
      },
      {
        type: "Paper",
        title: "Agents-K1: Towards Agent-native Knowledge Orchestration",
        source: "arXiv",
        date: "2026-06-11",
        href: "https://arxiv.org/abs/2606.13669",
        summary:
          "A research-agent paper that shifts attention from simple paper retrieval toward richer scientific knowledge orchestration.",
        tags: ["Research Agents", "Knowledge Orchestration", "Scientific AI"],
      },
      {
        type: "Paper",
        title: "AgentBeats: Agentifying Agent Assessment for Openness, Standardization, and Reproducibility",
        source: "arXiv",
        date: "2026-06-11",
        href: "https://arxiv.org/abs/2606.13608",
        summary:
          "An evaluation-focused agent paper that proposes more open, standardized, and reproducible assessment harnesses for agent systems.",
        tags: ["Agent Evaluation", "Benchmarks", "Reproducibility"],
      },
      {
        type: "GitHub",
        title: "callstack/agent-device",
        source: "GitHub",
        date: "Updated 2026-06-13",
        href: "https://github.com/callstack/agent-device",
        summary:
          "A mobile-device control CLI that gives AI agents a concrete bridge into iOS and Android automation and testing workflows.",
        tags: ["Mobile Agents", "Tool Use", "Automation"],
      },
    ],
  },
];
