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

export const lastUpdated = "2026-07-25";

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
        title: "Barzilai-Borwein Fails Superlinear Convergence on an Open Set of Quadratics for Every Dimension n≥4",
        source: "arXiv",
        date: "2026-07-23",
        href: "https://arxiv.org/abs/2607.21579",
        summary:
          "Gives a constructive negative result for superlinear convergence of the long Barzilai-Borwein method on convex quadratics, sharpening intuition about a widely used optimization heuristic.",
        tags: ["Optimization", "Numerical Methods", "Convergence"],
      },
      {
        type: "Paper",
        title: "Optimal use of a black-box learner in semiparametric estimation",
        source: "arXiv",
        date: "2026-07-23",
        href: "https://arxiv.org/abs/2607.21541",
        summary:
          "Characterizes when black-box nuisance learners help semiparametric estimation, linking statistical theory with practical ML-style estimators.",
        tags: ["Statistics", "Semiparametric Estimation", "Statistical ML"],
      },
      {
        type: "Paper",
        title: "Asymptotic Analysis of Empirical Dynamic Programming in Infinite-Horizon Stochastic Optimal Control",
        source: "arXiv",
        date: "2026-07-23",
        href: "https://arxiv.org/abs/2607.21520",
        summary:
          "Derives limit theorems for sample-based dynamic programming, a useful bridge between stochastic control, probability, and data-driven decision systems.",
        tags: ["Stochastic Control", "Dynamic Programming", "Probability"],
      },
      {
        type: "Paper",
        title: "Flux-Corrected Diagonal Frog: second order and positivity at all time steps",
        source: "arXiv",
        date: "2026-07-22",
        href: "https://arxiv.org/abs/2607.20415",
        summary:
          "Builds positivity-preserving, mass-conserving second-order finite-difference schemes for Fokker-Planck equations, a useful numerical-analysis idea for stable stochastic simulation.",
        tags: ["Numerical Analysis", "Fokker-Planck", "Scientific Computing"],
      },
      {
        type: "Paper",
        title: "Sharp Asymptotics for Regularized Optimal Transport",
        source: "arXiv",
        date: "2026-07-20",
        href: "https://arxiv.org/abs/2607.18191",
        summary:
          "Derives exact small-regularization limits for Lp and entropic optimal transport, sharpening the theory behind one of the most-used numerical tools in statistics and ML.",
        tags: ["Optimal Transport", "Probability", "Optimization"],
      },
      {
        type: "GitHub",
        title: "stdlib-js/stdlib",
        source: "GitHub",
        date: "Updated 2026-07-25",
        href: "https://github.com/stdlib-js/stdlib",
        summary:
          "A broad numerical and statistical standard library for JavaScript/TypeScript, useful for seeing how scientific-computing primitives are packaged for production web stacks.",
        tags: ["Numerical Computing", "Statistics", "TypeScript"],
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
        title: "3D-Aware VLMs with Implicit and Explicit Geometries",
        source: "arXiv",
        date: "2026-07-23",
        href: "https://arxiv.org/abs/2607.21595",
        summary:
          "Adds implicit and explicit geometry tokens to VLMs so they can reason over 3D scenes from video, a practical direction for spatially grounded multimodal models.",
        tags: ["Vision-Language Models", "3D Understanding", "Multimodal ML"],
      },
      {
        type: "Paper",
        title: "Expanding Flow Maps",
        source: "arXiv",
        date: "2026-07-23",
        href: "https://arxiv.org/abs/2607.21585",
        summary:
          "Introduces generative flows that grow dimensionality over time, expanding the flow-model toolkit beyond fixed-size continuous or sequence spaces.",
        tags: ["Generative Models", "Flow Matching", "Model Architecture"],
      },
      {
        type: "Paper",
        title: "GraphVid: Interactive Graph-Controllable Video Generation",
        source: "arXiv",
        date: "2026-07-23",
        href: "https://arxiv.org/abs/2607.21580",
        summary:
          "Controls multi-object video generation with structured interaction graphs, a clean interface for specifying relationships that text prompts and trajectories often miss.",
        tags: ["Video Generation", "Controllable Generation", "Graphs"],
      },
      {
        type: "Paper",
        title: "SoftReason: A Fully Differentiable Neuro-Soft-Symbolic Deductive Reasoning Architecture over High-Dimensional Perceptual Data",
        source: "arXiv",
        date: "2026-07-22",
        href: "https://arxiv.org/abs/2607.20402",
        summary:
          "Makes deductive reasoning differentiable over perceptual inputs and knowledge-graph evidence, a clean reference point for neuro-symbolic model design.",
        tags: ["Neuro-Symbolic AI", "Reasoning", "Knowledge Graphs"],
      },
      {
        type: "Paper",
        title: "PagedWeight: Efficient MoE LLM Serving with Dynamic Quality-Aware Weight Quantization",
        source: "arXiv",
        date: "2026-07-17",
        href: "https://arxiv.org/abs/2607.16184",
        summary:
          "Dynamically quantizes MoE weights at runtime to balance expert precision against KV-cache pressure, giving a concrete systems idea for memory-sensitive LLM serving.",
        tags: ["LLM Serving", "MoE", "Quantization"],
      },
      {
        type: "GitHub",
        title: "vllm-project/vllm",
        source: "GitHub",
        date: "Updated 2026-07-25",
        href: "https://github.com/vllm-project/vllm",
        summary:
          "A high-throughput LLM inference engine whose active development is worth following for serving, batching, memory, and deployment patterns.",
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
        title: "OpenForgeRL: Train Harness-native Agents in Any Environment",
        source: "arXiv",
        date: "2026-07-23",
        href: "https://arxiv.org/abs/2607.21557",
        summary:
          "Targets RL training for real multi-turn harness agents by recording model calls through a proxy, bringing open training loops closer to production agent workflows.",
        tags: ["Agent Training", "RL", "Tool Use"],
      },
      {
        type: "Paper",
        title: "GS-Agent: Creating 4D Physical Worlds With Generative Simulation",
        source: "arXiv",
        date: "2026-07-23",
        href: "https://arxiv.org/abs/2607.21522",
        summary:
          "Uses an agentic generative-simulation pipeline to turn language into dynamic physical worlds, showing how agents can coordinate multimodal creation tasks.",
        tags: ["Embodied Agents", "Generative Simulation", "Multimodal AI"],
      },
      {
        type: "GitHub",
        title: "oomol-lab/open-connector",
        source: "GitHub",
        date: "Updated 2026-07-25",
        href: "https://github.com/oomol-lab/open-connector",
        summary:
          "An open-source auth gateway connecting SaaS providers to AI agents through SDK, CLI, MCP, HTTP, and OpenAPI, useful for studying secure tool and integration layers.",
        tags: ["Agent Tools", "MCP", "Integrations"],
      },
      {
        type: "Paper",
        title: "PRO-LONG: Programmatic Memory Enables Long-Horizon Reasoning",
        source: "arXiv",
        date: "2026-07-22",
        href: "https://arxiv.org/abs/2607.20064",
        summary:
          "Uses complete structured logs plus code-searchable memory to improve long-horizon agent performance, a strong design pattern for agents that must revisit past context.",
        tags: ["Agent Memory", "Long-Horizon Reasoning", "ARC-AGI"],
      },
      {
        type: "Paper",
        title: "JANUS: Foreseeing Latent Risk for Long-Horizon Agent Safety",
        source: "arXiv",
        date: "2026-07-22",
        href: "https://arxiv.org/abs/2607.19913",
        summary:
          "Moves agent safety from reactive moderation toward foresight over partial trajectories, which is important for tool-using systems with delayed consequences.",
        tags: ["Agent Safety", "Tool Use", "Risk Forecasting"],
      },
      {
        type: "GitHub",
        title: "trpc-group/trpc-agent-go",
        source: "GitHub",
        date: "Updated 2026-07-25",
        href: "https://github.com/trpc-group/trpc-agent-go",
        summary:
          "A Go framework for production agent systems with graph workflows, tools, memory, MCP, evaluation, and observability, useful for comparing agent infrastructure patterns.",
        tags: ["Agent Framework", "Go", "MCP"],
      },
    ],
  },
];
