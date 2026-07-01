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

export const lastUpdated = "2026-07-01";

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
        title: "Random Reshuffling Dominates Stochastic Gradient Descent",
        source: "arXiv",
        date: "2026-06-30",
        href: "https://arxiv.org/abs/2606.32005",
        summary:
          "A timely optimization-theory result explaining why random reshuffling can outperform classical SGD in the regimes used by modern ML practice.",
        tags: ["Optimization", "Stochastic Algorithms", "Machine Learning"],
      },
      {
        type: "Paper",
        title: "Analysis of a maximum-entropy based estimator for dynamic random graph models",
        source: "arXiv",
        date: "2026-06-30",
        href: "https://arxiv.org/abs/2606.32013",
        summary:
          "Studies estimation for evolving random graphs through a maximum-entropy lens, connecting probability, statistics, and network modeling.",
        tags: ["Probability", "Statistics", "Dynamic Graphs"],
      },
      {
        type: "GitHub",
        title: "root-project/root",
        source: "GitHub",
        date: "Updated 2026-07-01",
        href: "https://github.com/root-project/root",
        summary:
          "A mature scientific data-analysis, storage, and visualization platform whose active development makes it useful for computational science workflows.",
        tags: ["Scientific Computing", "Data Analysis", "Visualization"],
      },
      {
        type: "Paper",
        title: "McMg: A Learned Phase-Space Multi-channel Multigrid Preconditioner for Helmholtz Equation",
        source: "arXiv",
        date: "2026-06-29",
        href: "https://arxiv.org/abs/2606.30495",
        summary:
          "A learned multigrid preconditioner that preserves phase and direction information for difficult high-frequency Helmholtz solves.",
        tags: ["Numerical Analysis", "PDE Solvers", "Scientific ML"],
      },
      {
        type: "Paper",
        title: "Second-Order KKT Guarantees for Bregman ADMM in Nonconvex and Non-Lipschitz Optimization",
        source: "arXiv",
        date: "2026-06-26",
        href: "https://arxiv.org/abs/2606.28307",
        summary:
          "Extends ADMM analysis beyond standard Lipschitz-gradient assumptions, useful for connecting optimization theory with practical nonconvex algorithms.",
        tags: ["Optimization", "ADMM", "Nonconvex Analysis"],
      },
      {
        type: "GitHub",
        title: "stdlib-js/stdlib",
        source: "GitHub",
        date: "Updated 2026-07-01",
        href: "https://github.com/stdlib-js/stdlib",
        summary:
          "A broad numerical computing library for JavaScript and TypeScript, useful as a practical computational reference.",
        tags: ["Numerical Computing", "Library", "TypeScript"],
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
        title: "Introspective Coupling: Self-Explanation Training Tracks Behavioral Change Despite Fixed Supervision",
        source: "arXiv",
        date: "2026-06-30",
        href: "https://arxiv.org/abs/2606.32038",
        summary:
          "Investigates when self-explanation training produces faithful introspection instead of shallow rationale imitation, which is important for trustworthy model behavior.",
        tags: ["Interpretability", "Self-Explanation", "LLMs"],
      },
      {
        type: "Paper",
        title: "Reinforcement Learning with Metacognitive Feedback Elicits Faithful Uncertainty Expression in LLMs",
        source: "arXiv",
        date: "2026-06-30",
        href: "https://arxiv.org/abs/2606.32032",
        summary:
          "Uses metacognitive feedback to make LLM uncertainty expression more faithful, a useful direction for calibration and reliability.",
        tags: ["Reinforcement Learning", "Calibration", "LLMs"],
      },
      {
        type: "GitHub",
        title: "LMCache/LMCache",
        source: "GitHub",
        date: "Updated 2026-07-01",
        href: "https://github.com/LMCache/LMCache",
        summary:
          "An actively developed KV-cache layer for accelerating LLM serving, directly relevant to practical inference systems.",
        tags: ["LLM Serving", "KV Cache", "Systems"],
      },
      {
        type: "Paper",
        title: "One-Step Gradient Delay is Not a Barrier for Large-Scale Asynchronous Pipeline Parallel LLM Pretraining",
        source: "arXiv",
        date: "2026-06-29",
        href: "https://arxiv.org/abs/2606.30634",
        summary:
          "Shows that optimizer choice and error-feedback corrections can make asynchronous pipeline-parallel LLM pretraining robust to one-step gradient delay.",
        tags: ["LLM Training", "Pipeline Parallelism", "Optimization"],
      },
      {
        type: "Paper",
        title: "VGB for Masked Diffusion Model: Efficient Test-time Scaling for Reward Satisfaction and Sample Editing",
        source: "arXiv",
        date: "2026-06-26",
        href: "https://arxiv.org/abs/2606.28301",
        summary:
          "Introduces value-guided branching for masked diffusion, a clean example of test-time scaling for constrained generation and editing.",
        tags: ["Diffusion Models", "Test-Time Scaling", "Generative ML"],
      },
      {
        type: "GitHub",
        title: "vllm-project/vllm",
        source: "GitHub",
        date: "Updated 2026-06-30",
        href: "https://github.com/vllm-project/vllm",
        summary:
          "A high-throughput LLM inference and serving engine that is central to practical deployment and systems-level ML work.",
        tags: ["LLM Serving", "Inference", "PyTorch"],
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
        title: "QVal: Cheaply Evaluating Dense Supervision Signals for Long-Horizon LLM Agents",
        source: "arXiv",
        date: "2026-06-30",
        href: "https://arxiv.org/abs/2606.32034",
        summary:
          "Targets the evaluation problem behind dense intermediate rewards for long-horizon agents, where outcome-only signals are too sparse.",
        tags: ["Agent Evaluation", "Dense Rewards", "Long-Horizon Tasks"],
      },
      {
        type: "Paper",
        title: "Generative Skill Composition for LLM Agents",
        source: "arXiv",
        date: "2026-06-30",
        href: "https://arxiv.org/abs/2606.32025",
        summary:
          "Frames skill selection as a generative composition problem, matching the way reusable agent skill libraries are likely to grow.",
        tags: ["Skills", "Agent Planning", "Tool Use"],
      },
      {
        type: "GitHub",
        title: "infiniflow/ragflow",
        source: "GitHub",
        date: "Updated 2026-07-01",
        href: "https://github.com/infiniflow/ragflow",
        summary:
          "A widely used RAG engine with agent capabilities, useful for studying the retrieval and context layer behind production agents.",
        tags: ["RAG", "Agent Infrastructure", "Retrieval"],
      },
      {
        type: "Paper",
        title: "Self-Evolving World Models for LLM Agent Planning",
        source: "arXiv",
        date: "2026-06-29",
        href: "https://arxiv.org/abs/2606.30639",
        summary:
          "Introduces WorldEvolver, which improves agent planning by revising episodic and semantic memory at test time while keeping model weights frozen.",
        tags: ["World Models", "Agent Planning", "Memory"],
      },
      {
        type: "Paper",
        title: "Entity Binding Failures in Tool-Augmented Agents",
        source: "arXiv",
        date: "2026-06-29",
        href: "https://arxiv.org/abs/2606.30531",
        summary:
          "Separates tool correctness from entity correctness and shows why agents need explicit binding, clarification, and provenance before taking actions.",
        tags: ["Tool Use", "Agent Safety", "Entity Resolution"],
      },
      {
        type: "GitHub",
        title: "omnigent-ai/omnigent",
        source: "GitHub",
        date: "Updated 2026-07-01",
        href: "https://github.com/omnigent-ai/omnigent",
        summary:
          "A meta-harness for orchestrating coding and research agents while swapping harnesses, enforcing policies, and sandboxing execution.",
        tags: ["Agent Framework", "Orchestration", "Sandboxing"],
      },
    ],
  },
];
