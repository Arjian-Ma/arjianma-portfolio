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

export const lastUpdated = "2026-06-29";

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
        title: "Second-Order KKT Guarantees for Bregman ADMM in Nonconvex and Non-Lipschitz Optimization",
        source: "arXiv",
        date: "2026-06-26",
        href: "https://arxiv.org/abs/2606.28307",
        summary:
          "Extends ADMM analysis beyond standard Lipschitz-gradient assumptions, useful for connecting optimization theory with practical nonconvex algorithms.",
        tags: ["Optimization", "ADMM", "Nonconvex Analysis"],
      },
      {
        type: "Paper",
        title: "All you need is log",
        source: "arXiv",
        date: "2026-06-25",
        href: "https://arxiv.org/abs/2606.27349",
        summary:
          "Characterizes Rényi divergences through data-processing monotonicity, giving a compact bridge between probability, statistics, and ML evaluation.",
        tags: ["Probability", "Statistics", "Information Theory"],
      },
      {
        type: "Paper",
        title: "Automated Galerkin time stepping in Irksome",
        source: "arXiv",
        date: "2026-06-25",
        href: "https://arxiv.org/abs/2606.27300",
        summary:
          "Automates discontinuous and continuous Galerkin-in-time discretizations, making structure-preserving time stepping easier to experiment with.",
        tags: ["Numerical Analysis", "Galerkin Methods", "Scientific Computing"],
      },
      {
        type: "Paper",
        title: "Fast algorithms for learning a Gaussian under halfspace truncation with optimal sample complexity",
        source: "arXiv",
        date: "2026-06-25",
        href: "https://arxiv.org/abs/2606.27298",
        summary:
          "Improves efficient learning of truncated high-dimensional Gaussians, a useful intersection of statistics, algorithms, and robust estimation.",
        tags: ["Statistics", "Algorithms", "Learning Theory"],
      },
      {
        type: "GitHub",
        title: "stdlib-js/stdlib",
        source: "GitHub",
        date: "Updated 2026-06-28",
        href: "https://github.com/stdlib-js/stdlib",
        summary:
          "A broad numerical computing library for JavaScript and TypeScript, useful as a practical computational reference.",
        tags: ["Numerical Computing", "Library", "TypeScript"],
      },
      {
        type: "GitHub",
        title: "quantified-uncertainty/squiggle",
        source: "GitHub",
        date: "Updated 2026-06-27",
        href: "https://github.com/quantified-uncertainty/squiggle",
        summary:
          "A probability-focused modeling language and hub for representing uncertainty in forecasts and decision models.",
        tags: ["Probability", "Uncertainty", "Forecasting"],
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
        title: "VGB for Masked Diffusion Model: Efficient Test-time Scaling for Reward Satisfaction and Sample Editing",
        source: "arXiv",
        date: "2026-06-26",
        href: "https://arxiv.org/abs/2606.28301",
        summary:
          "Introduces value-guided branching for masked diffusion, a clean example of test-time scaling for constrained generation and editing.",
        tags: ["Diffusion Models", "Test-Time Scaling", "Generative ML"],
      },
      {
        type: "Paper",
        title: "Reinforcement Learning without Ground-Truth Solutions can Improve LLMs",
        source: "arXiv",
        date: "2026-06-25",
        href: "https://arxiv.org/abs/2606.27369",
        summary:
          "Explores rank-based reinforcement learning for LLMs when ground-truth solutions are unavailable, expanding where RL-style post-training can be applied.",
        tags: ["LLMs", "Reinforcement Learning", "Post-Training"],
      },
      {
        type: "Paper",
        title: "When are likely answers right? On Sequence Probability and Correctness in LLMs",
        source: "arXiv",
        date: "2026-06-25",
        href: "https://arxiv.org/abs/2606.27359",
        summary:
          "Examines when higher sequence probability actually correlates with correctness, sharpening intuition around decoding and confidence.",
        tags: ["LLMs", "Decoding", "Evaluation"],
      },
      {
        type: "Paper",
        title: "Hallucination in World Models is Predictable and Preventable",
        source: "arXiv",
        date: "2026-06-25",
        href: "https://arxiv.org/abs/2606.27326",
        summary:
          "Introduces data-centric signals for detecting and mitigating rollout drift in visual world models, grounding generative evaluation in dynamics coverage.",
        tags: ["World Models", "Evaluation", "Data-Centric ML"],
      },
      {
        type: "GitHub",
        title: "vllm-project/vllm",
        source: "GitHub",
        date: "Updated 2026-06-28",
        href: "https://github.com/vllm-project/vllm",
        summary:
          "A high-throughput LLM inference and serving engine that is central to practical deployment and systems-level ML work.",
        tags: ["LLM Serving", "Inference", "PyTorch"],
      },
      {
        type: "GitHub",
        title: "xorbitsai/inference",
        source: "GitHub",
        date: "Updated 2026-06-28",
        href: "https://github.com/xorbitsai/inference",
        summary:
          "Xinference offers a unified API for running open-source text, speech, and multimodal models locally or in production.",
        tags: ["LLMs", "Multimodal", "Inference"],
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
        type: "GitHub",
        title: "omnigent-ai/omnigent",
        source: "GitHub",
        date: "Updated 2026-06-29",
        href: "https://github.com/omnigent-ai/omnigent",
        summary:
          "A meta-harness for orchestrating coding and research agents while swapping harnesses, enforcing policies, and sandboxing execution.",
        tags: ["Agent Framework", "Orchestration", "Sandboxing"],
      },
      {
        type: "Paper",
        title: "Empowering GUI Agents via Autonomous Experience Exploration and Hindsight Experience Utilization for Task Planning",
        source: "arXiv",
        date: "2026-06-25",
        href: "https://arxiv.org/abs/2606.27330",
        summary:
          "Improves GUI-agent task planning by letting agents explore autonomously and reuse hindsight from experience traces.",
        tags: ["GUI Agents", "Planning", "Experience Learning"],
      },
      {
        type: "Paper",
        title: "VIGIL: Runtime Enforcement of Behavioral Specifications in AI Agent Skills",
        source: "arXiv",
        date: "2026-06-25",
        href: "https://arxiv.org/abs/2606.26524",
        summary:
          "Targets a practical safety layer for agent skills by turning behavioral specifications into runtime enforcement rather than passive documentation.",
        tags: ["Agent Safety", "Skills", "Runtime Enforcement"],
      },
      {
        type: "GitHub",
        title: "caura-ai/caura-memclaw",
        source: "GitHub",
        date: "Updated 2026-06-28",
        href: "https://github.com/caura-ai/caura-memclaw",
        summary:
          "A governed shared-memory layer for agent fleets with MCP-native access, trust tiers, audit trails, and retrieval policies.",
        tags: ["Agent Memory", "MCP", "Governance"],
      },
      {
        type: "GitHub",
        title: "strukto-ai/mirage",
        source: "GitHub",
        date: "Updated 2026-06-28",
        href: "https://github.com/strukto-ai/mirage",
        summary:
          "A unified virtual filesystem for agents, relevant to how long-running systems organize context and tool-facing state.",
        tags: ["Agent Infrastructure", "Virtual Filesystem", "Context"],
      },
      {
        type: "GitHub",
        title: "IBM/AssetOpsBench",
        source: "GitHub",
        date: "Updated 2026-06-28",
        href: "https://github.com/IBM/AssetOpsBench",
        summary:
          "A domain-specific benchmark and framework for evaluating multi-agent industrial operations workflows across hundreds of scenarios.",
        tags: ["Agent Benchmarks", "Multi-Agent", "Operations"],
      },
    ],
  },
];
