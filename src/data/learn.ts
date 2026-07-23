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

export const lastUpdated = "2026-07-23";

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
        title: "Lipschitzian SLLNs for random functions",
        source: "arXiv",
        date: "2026-07-22",
        href: "https://arxiv.org/abs/2607.20411",
        summary:
          "Proves strong laws of large numbers for locally Lipschitz random functions, connecting probability, variational analysis, and stochastic optimization.",
        tags: ["Probability", "Stochastic Optimization", "Variational Analysis"],
      },
      {
        type: "Paper",
        title: "PG-KINN: A Physics-Informed Petrov-Galerkin Kolmogorov-Arnold Network for Solving Forward and Inverse PDEs",
        source: "arXiv",
        date: "2026-07-22",
        href: "https://arxiv.org/abs/2607.20378",
        summary:
          "Combines Petrov-Galerkin numerical ideas with KAN-style physics-informed learning, making it a practical bridge between PDE solvers and modern ML architectures.",
        tags: ["PDEs", "Numerical Methods", "Scientific ML"],
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
        type: "Paper",
        title: "Risk-sensitive exit-time control for stochastic differential equations with path-dependent coefficients",
        source: "arXiv",
        date: "2026-07-20",
        href: "https://arxiv.org/abs/2607.18192",
        summary:
          "Studies small-noise asymptotics for path-dependent stochastic control, connecting probability, optimal control, and robust decision-making under rare events.",
        tags: ["Stochastic Control", "Probability", "SDEs"],
      },
      {
        type: "GitHub",
        title: "stdlib-js/stdlib",
        source: "GitHub",
        date: "Updated 2026-07-23",
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
        title: "Train the Model, Not the Reader: Decodability Supervision for Verifiable Activation Explanations",
        source: "arXiv",
        date: "2026-07-22",
        href: "https://arxiv.org/abs/2607.20379",
        summary:
          "Targets more verifiable activation explanations by supervising what is actually decodable from hidden states, which is directly relevant to interpretability practice.",
        tags: ["Interpretability", "Activation Explanations", "Evaluation"],
      },
      {
        type: "Paper",
        title: "Causal Discovery on Irregular Time Series",
        source: "arXiv",
        date: "2026-07-20",
        href: "https://arxiv.org/abs/2607.18226",
        summary:
          "Targets causal discovery when observations arrive at irregular times, a realistic setting where many standard temporal ML assumptions break down.",
        tags: ["Causal Discovery", "Time Series", "Statistical ML"],
      },
      {
        type: "Paper",
        title: "Patch Policy: Efficient Embodied Control via Dense Visual Representations",
        source: "arXiv",
        date: "2026-07-20",
        href: "https://arxiv.org/abs/2607.18236",
        summary:
          "Reuses dense ViT features for robot policies, offering a practical route to stronger embodied-control models without retraining visual backbones from scratch.",
        tags: ["Robot Learning", "Vision Transformers", "Embodied AI"],
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
        date: "Updated 2026-07-21",
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
        type: "Paper",
        title: "The Ethics of Autonomous AI Agents for Offensive Security",
        source: "arXiv",
        date: "2026-07-22",
        href: "https://arxiv.org/abs/2607.20255",
        summary:
          "Analyzes how autonomous offensive-security agents change predictability, impact, and access, giving a grounded governance lens for dual-use agent systems.",
        tags: ["Security Agents", "AI Ethics", "Governance"],
      },
      {
        type: "Paper",
        title: "FlashRT: Agent Harness for Guiding Agents to Deploy Real-Time Multimodal Applications",
        source: "arXiv",
        date: "2026-07-20",
        href: "https://arxiv.org/abs/2607.18171",
        summary:
          "Frames deployment of real-time multimodal apps as an agent-guided systems problem, spanning placement, streaming, and cross-pipeline tradeoffs.",
        tags: ["Agent Harness", "Multimodal Systems", "Deployment"],
      },
      {
        type: "Paper",
        title: "TRIM: Reducing AI-Generated CodeSlop via Agent Trajectory Minimization",
        source: "arXiv",
        date: "2026-07-20",
        href: "https://arxiv.org/abs/2607.18161",
        summary:
          "Looks at code quality through the lens of shortening and cleaning agent trajectories, a useful idea for making coding agents more maintainable.",
        tags: ["Coding Agents", "Agent Trajectories", "Software Engineering"],
      },
      {
        type: "GitHub",
        title: "google/adk-python",
        source: "GitHub",
        date: "Updated 2026-07-23",
        href: "https://github.com/google/adk-python",
        summary:
          "A code-first Python toolkit for building, evaluating, and deploying agents, useful for comparing practical agent framework abstractions.",
        tags: ["Agent Framework", "Python", "Evaluation"],
      },
    ],
  },
];
