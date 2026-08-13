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

export const lastUpdated = "2026-08-13";

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
        title: "A contiguity approach to replica symmetric marginals",
        source: "arXiv",
        date: "2026-08-12",
        href: "https://arxiv.org/abs/2608.12309",
        summary:
          "Develops a cavity-contiguity framework for proving replica-symmetric convergence of local marginals in mean-field Gibbs systems.",
        tags: ["Probability", "Statistical Mechanics", "Replica Symmetry"],
      },
      {
        type: "Paper",
        title: "When should one stop the most exciting game? Sequential Inference for win-martingales",
        source: "arXiv",
        date: "2026-08-12",
        href: "https://arxiv.org/abs/2608.12291",
        summary:
          "Studies optional stopping and sequential inference for prediction-market win probabilities, connecting martingale theory with practical evidence monitoring.",
        tags: ["Probability", "Sequential Inference", "Martingales"],
      },
      {
        type: "Paper",
        title: "Sharp Berry-Esseen Bounds for the Log Determinant of a Gaussian Sample Correlation Matrix",
        source: "arXiv",
        date: "2026-08-12",
        href: "https://arxiv.org/abs/2608.12242",
        summary:
          "Gives sharp normal-approximation bounds for log determinants of Gaussian sample correlation matrices, useful for high-dimensional statistical theory.",
        tags: ["Statistics Theory", "Random Matrices", "Berry-Esseen"],
      },

      {
        type: "GitHub",
        title: "pymc-devs/pytensor",
        source: "GitHub",
        date: "Updated 2026-08-11",
        href: "https://github.com/pymc-devs/pytensor",
        summary:
          "A tensor-expression compiler used by PyMC, worth tracking for how probabilistic and statistical computation is optimized under the hood.",
        tags: ["Statistics", "Tensor Computing", "Python"],
      },
      {
        type: "GitHub",
        title: "stdlib-js/stdlib",
        source: "GitHub",
        date: "Updated 2026-08-13",
        href: "https://github.com/stdlib-js/stdlib",
        summary:
          "A broad numerical and statistical standard library for JavaScript and TypeScript, useful for seeing how mathematical computing primitives are engineered for production environments.",
        tags: ["Numerical Computing", "Statistics", "TypeScript"],
      },
      {
        type: "GitHub",
        title: "statsmodels/statsmodels",
        source: "GitHub",
        date: "Updated 2026-08-12",
        href: "https://github.com/statsmodels/statsmodels",
        summary:
          "A core Python library for statistical modeling and econometrics, worth revisiting for rigorous applied inference workflows and production-quality statistical APIs.",
        tags: ["Statistics", "Econometrics", "Python"],
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
        title: "AI4AI at Test-Time: Strong-to-Weak Capability Transfer via Harnesses",
        source: "arXiv",
        date: "2026-08-12",
        href: "https://arxiv.org/abs/2608.12307",
        summary:
          "Explores whether stronger models can transfer capabilities to weaker ones at inference time through harnesses rather than parameter updates.",
        tags: ["Test-Time Scaling", "Distillation", "LLMs"],
      },
      {
        type: "Paper",
        title: "Redistribution-based Cost Inference Improves Sparse Safe Offline RL",
        source: "arXiv",
        date: "2026-08-12",
        href: "https://arxiv.org/abs/2608.12306",
        summary:
          "Turns sparse trajectory-level safety feedback into cost signals for offline RL, a practical direction for learning safer policies with limited supervision.",
        tags: ["Offline RL", "Safety", "Reward Modeling"],
      },
      {
        type: "Paper",
        title: "A Framework for Designing Reward Functions: From Objectives to Features to Human-Aligned Reward Functions",
        source: "arXiv",
        date: "2026-08-12",
        href: "https://arxiv.org/abs/2608.12302",
        summary:
          "Proposes a structured process for turning natural-language objectives into human-aligned reward functions, useful for applied RL and evaluation design.",
        tags: ["Reward Design", "Alignment", "Reinforcement Learning"],
      },
      {
        type: "GitHub",
        title: "flashinfer-ai/flashinfer",
        source: "GitHub",
        date: "Updated 2026-08-11",
        href: "https://github.com/flashinfer-ai/flashinfer",
        summary:
          "A kernel library for LLM serving, useful for studying practical performance work around attention, batching, and inference memory efficiency.",
        tags: ["LLM Serving", "Kernels", "Systems"],
      },
      {
        type: "GitHub",
        title: "sgl-project/sglang",
        source: "GitHub",
        date: "Updated 2026-08-13",
        href: "https://github.com/sgl-project/sglang",
        summary:
          "A high-performance serving framework for large language and multimodal models, worth following for practical inference, scheduling, and systems-level LLM work.",
        tags: ["LLM Serving", "Inference", "Systems"],
      },
      {
        type: "GitHub",
        title: "walkinglabs/hands-on-modern-rl",
        source: "GitHub",
        date: "Updated 2026-08-12",
        href: "https://github.com/walkinglabs/hands-on-modern-rl",
        summary:
          "A hands-on curriculum spanning modern reinforcement learning, LLM alignment, RLVR, and agentic systems, useful for turning theory into executable practice.",
        tags: ["Reinforcement Learning", "LLM Alignment", "Curriculum"],
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
        title: "DreamFly: Causal Memory and Receding-Horizon Diffusion Planning for Aerial Vision-Language Navigation",
        source: "arXiv",
        date: "2026-08-12",
        href: "https://arxiv.org/abs/2608.12308",
        summary:
          "Combines causal memory with receding-horizon diffusion planning for embodied aerial navigation under partial observability.",
        tags: ["VLM Agents", "Planning", "Memory"],
      },
      {
        type: "Paper",
        title: "VAKRA: Evaluating Multi-Hop Reasoning Across APIs and Retrieval Under Tool-Use Policies",
        source: "arXiv",
        date: "2026-08-12",
        href: "https://arxiv.org/abs/2608.12282",
        summary:
          "Introduces a benchmark for agents that must reason across structured APIs and retrieved documents while respecting tool-use policies.",
        tags: ["Agent Benchmarks", "Tool Use", "RAG"],
      },
      {
        type: "Paper",
        title: "Convergent Detour Hijacking: Task-Preserving Resource Amplification in Skill-Based LLM Agents",
        source: "arXiv",
        date: "2026-08-12",
        href: "https://arxiv.org/abs/2608.12273",
        summary:
          "Analyzes a security risk in skill-based agents where malicious skills preserve task success while amplifying hidden resource use.",
        tags: ["Agent Security", "Tool Use", "Skills"],
      },
      {
        type: "Paper",
        title: "AVA-Encoder: Towards Agent-Native Video Representation Learning",
        source: "arXiv",
        date: "2026-08-12",
        href: "https://arxiv.org/abs/2608.12313",
        summary:
          "Targets video representations designed for creative agents, linking multimodal understanding with agent-native generation workflows.",
        tags: ["Multimodal Agents", "Video", "Representation Learning"],
      },

      {
        type: "GitHub",
        title: "deepset-ai/haystack",
        source: "GitHub",
        date: "Updated 2026-08-13",
        href: "https://github.com/deepset-ai/haystack",
        summary:
          "A modular orchestration framework for production LLM applications, retrieval pipelines, memory, routing, and agent workflows.",
        tags: ["Agent Framework", "RAG", "Orchestration"],
      },
      {
        type: "GitHub",
        title: "Team-Commonly/commonly",
        source: "GitHub",
        date: "Updated 2026-08-13",
        href: "https://github.com/Team-Commonly/commonly",
        summary:
          "An open-source workspace for humans and cross-vendor AI agents, useful for studying multi-agent runtime, memory, and workstation design.",
        tags: ["Multi-Agent", "Agent Runtime", "Memory"],
      },
    ],
  },
];
