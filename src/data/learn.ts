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

export const lastUpdated = "2026-08-07";

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
        title: "A Profile-Separation Framework for Quantitative Convergence of No-U-Turn Samplers",
        source: "arXiv",
        date: "2026-08-06",
        href: "https://arxiv.org/abs/2608.06336",
        summary:
          "Gives quantitative convergence tools for No-U-Turn Samplers under log-concavity assumptions, useful for connecting probability, MCMC diagnostics, and statistical computation.",
        tags: ["Probability", "MCMC", "Statistics"],
      },
      {
        type: "Paper",
        title: "Sharp Tail Bounds Beyond Twice the Mean",
        source: "arXiv",
        date: "2026-08-06",
        href: "https://arxiv.org/abs/2608.06317",
        summary:
          "Develops a sharp probability bound for sums of independent non-negative variables, a compact result worth tracking for concentration and randomized analysis.",
        tags: ["Probability", "Tail Bounds", "Concentration"],
      },
      {
        type: "Paper",
        title: "The Benefits of an Integrated Approach for Stability-Constrained Power System Planning",
        source: "arXiv",
        date: "2026-08-06",
        href: "https://arxiv.org/abs/2608.06349",
        summary:
          "Models power-system planning with stability constraints inside the optimization loop, showing how applied control problems can benefit from integrated mathematical programming.",
        tags: ["Optimization", "Control", "Power Systems"],
      },
      {
        type: "GitHub",
        title: "stdlib-js/stdlib",
        source: "GitHub",
        date: "Updated 2026-08-07",
        href: "https://github.com/stdlib-js/stdlib",
        summary:
          "A broad numerical and statistical standard library for JavaScript and TypeScript, useful for seeing how mathematical computing primitives are engineered for production environments.",
        tags: ["Numerical Computing", "Statistics", "TypeScript"],
      },
      {
        type: "GitHub",
        title: "JuliaDynamics/DynamicalSystems.jl",
        source: "GitHub",
        date: "Updated 2026-08-05",
        href: "https://github.com/JuliaDynamics/DynamicalSystems.jl",
        summary:
          "A focused Julia ecosystem for nonlinear dynamics and time-series analysis, worth following for computational experiments with chaos and dynamical systems.",
        tags: ["Dynamical Systems", "Julia", "Scientific Computing"],
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
        title: "Learning When to Trust via Selective Context Preference Optimization",
        source: "arXiv",
        date: "2026-08-06",
        href: "https://arxiv.org/abs/2608.06377",
        summary:
          "Introduces selective trust as a preference-optimization problem, a practical framing for models that must use helpful context without being derailed by misleading evidence.",
        tags: ["Preference Optimization", "Robustness", "Context"],
      },
      {
        type: "Paper",
        title: "CalibForge: Adversarial Solver Calibration for Scaling Learnable Terminal Tasks",
        source: "arXiv",
        date: "2026-08-06",
        href: "https://arxiv.org/abs/2608.06352",
        summary:
          "Builds executable terminal tasks through adversarial solver calibration, a useful lens on making agent and coding benchmarks both verifiable and appropriately difficult.",
        tags: ["Benchmarking", "Terminal Agents", "Calibration"],
      },
      {
        type: "Paper",
        title: "The Low Frequency Trap: Video Language Models Fail at Simple Event Bookkeeping",
        source: "arXiv",
        date: "2026-08-06",
        href: "https://arxiv.org/abs/2608.06361",
        summary:
          "Uses controlled video tasks to isolate event-counting failures, highlighting a simple but important evaluation gap for multimodal ML systems.",
        tags: ["Video Language Models", "Evaluation", "Multimodal ML"],
      },
      {
        type: "GitHub",
        title: "flwrlabs/flower",
        source: "GitHub",
        date: "Updated 2026-08-07",
        href: "https://github.com/flwrlabs/flower",
        summary:
          "A federated AI framework that remains a strong reference for distributed training, privacy-aware ML workflows, and cross-device experimentation.",
        tags: ["Federated Learning", "Distributed ML", "Python"],
      },
      {
        type: "GitHub",
        title: "vllm-project/vllm",
        source: "GitHub",
        date: "Updated 2026-08-05",
        href: "https://github.com/vllm-project/vllm",
        summary:
          "A high-throughput LLM serving engine to track for practical inference tradeoffs around batching, memory, and deployment performance.",
        tags: ["Inference", "LLM Serving", "Systems"],
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
        title: "The Bitter Lesson of Tool Calling",
        source: "arXiv",
        date: "2026-08-06",
        href: "https://arxiv.org/abs/2608.06370",
        summary:
          "Compares programmatic tool calling with native JSON tool calls under realistic conditions, directly probing how agents should compose and execute external tools.",
        tags: ["Tool Use", "Agents", "Evaluation"],
      },
      {
        type: "Paper",
        title: "AV-AIVAT: 74x Cheaper Agent Evaluation with Certified Anytime-Valid Stopping in Imperfect-Information Games",
        source: "arXiv",
        date: "2026-08-06",
        href: "https://arxiv.org/abs/2608.06362",
        summary:
          "Proposes anytime-valid stopping for comparing agents in noisy games, making evaluation cheaper while preserving statistical guarantees.",
        tags: ["Agent Evaluation", "Games", "Statistics"],
      },
      {
        type: "Paper",
        title: "Resourced Authority A Mechanism-Design Model for Participatory Governance of Deployed AI Agents",
        source: "arXiv",
        date: "2026-08-06",
        href: "https://arxiv.org/abs/2608.06353",
        summary:
          "Frames deployed-agent governance as resource allocation and mechanism design, a useful formal angle on compute budgets, authorization, and oversight.",
        tags: ["Agent Governance", "Mechanism Design", "Compute Budgets"],
      },
      {
        type: "GitHub",
        title: "TeleAI-UAGI/Awesome-Agent-Memory",
        source: "GitHub",
        date: "Updated 2026-08-07",
        href: "https://github.com/TeleAI-UAGI/Awesome-Agent-Memory",
        summary:
          "A curated map of memory systems, benchmarks, and papers for LLM and multimodal agents, useful for tracking the rapidly expanding agent-memory literature.",
        tags: ["Agent Memory", "Reading List", "RAG"],
      },
      {
        type: "GitHub",
        title: "trpc-group/trpc-agent-go",
        source: "GitHub",
        date: "Updated 2026-08-07",
        href: "https://github.com/trpc-group/trpc-agent-go",
        summary:
          "A Go framework for production agent systems with graph workflows, tools, memory, MCP, evaluation, and observability in one stack.",
        tags: ["Agent Framework", "Go", "MCP"],
      },
    ],
  },
];
