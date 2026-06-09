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

export const lastUpdated = "2026-06-09";

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
        title: "Weighted universal approximation of differentiable maps on infinite-dimensional manifolds",
        source: "arXiv",
        date: "2026-06-08",
        href: "https://arxiv.org/abs/2606.09820",
        summary:
          "A recent theory paper on approximation for differentiable maps in infinite-dimensional settings.",
        tags: ["Approximation", "Manifolds", "Theory"],
      },
      {
        type: "Paper",
        title: "PTL-Diffusion: Manifold-Aware Diffusion with Periodic Terminal Laws",
        source: "arXiv",
        date: "2026-06-08",
        href: "https://arxiv.org/abs/2606.09816",
        summary:
          "A mathematically motivated diffusion-model paper involving manifold-aware dynamics.",
        tags: ["Diffusion", "Manifolds", "Stochastic Models"],
      },
      {
        type: "GitHub",
        title: "antoniolupetti/algebrica",
        source: "GitHub",
        date: "Updated 2026-06-09",
        href: "https://github.com/antoniolupetti/algebrica",
        summary:
          "An open mathematical knowledge base focused on clear structure and conceptual learning.",
        tags: ["Knowledge Base", "Math Learning"],
      },
      {
        type: "GitHub",
        title: "stdlib-js/stdlib",
        source: "GitHub",
        date: "Updated 2026-06-09",
        href: "https://github.com/stdlib-js/stdlib",
        summary:
          "A large numerical computing library for JavaScript and TypeScript, useful for computational math references.",
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
        title: "Rethinking the Divergence Regularization in LLM RL",
        source: "arXiv",
        date: "2026-06-08",
        href: "https://arxiv.org/abs/2606.09821",
        summary:
          "A recent paper on reinforcement learning for LLMs and the role of divergence regularization.",
        tags: ["LLM RL", "Regularization", "Training"],
      },
      {
        type: "Paper",
        title: "An Agency-Transferring Model-Free Policy Enhancement Technique",
        source: "arXiv",
        date: "2026-06-08",
        href: "https://arxiv.org/abs/2606.09825",
        summary:
          "A reinforcement-learning paper related to policy improvement and agent behavior transfer.",
        tags: ["Reinforcement Learning", "Policy", "Agents"],
      },
      {
        type: "GitHub",
        title: "pytorch/pytorch",
        source: "GitHub",
        date: "Updated 2026-06-09",
        href: "https://github.com/pytorch/pytorch",
        summary:
          "The core PyTorch repository for tensors, autograd, neural networks, and GPU acceleration.",
        tags: ["PyTorch", "Deep Learning", "Framework"],
      },
      {
        type: "GitHub",
        title: "pytorch/executorch",
        source: "GitHub",
        date: "Updated 2026-06-09",
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
        title: "OmniGameArena: A Unified UE5 Benchmark for VLM Game Agents with Improvement Dynamics",
        source: "arXiv",
        date: "2026-06-08",
        href: "https://arxiv.org/abs/2606.09826",
        summary:
          "A benchmark paper for visual-language game agents, focused on embodied evaluation and improvement dynamics.",
        tags: ["Benchmarks", "VLM Agents", "Game Agents"],
      },
      {
        type: "Paper",
        title: "Evaluation Cards: An Interpretive Layer for AI Evaluation Reporting",
        source: "arXiv",
        date: "2026-06-08",
        href: "https://arxiv.org/abs/2606.09809",
        summary:
          "A paper about making AI evaluation results easier to interpret, compare, and communicate.",
        tags: ["Evaluation", "Reporting", "AI Safety"],
      },
      {
        type: "GitHub",
        title: "Mintplex-Labs/anything-llm",
        source: "GitHub",
        date: "Updated 2026-06-09",
        href: "https://github.com/Mintplex-Labs/anything-llm",
        summary:
          "A popular local-first AI application stack with chat, documents, agents, and private deployment options.",
        tags: ["Local AI", "Agents", "RAG"],
      },
      {
        type: "GitHub",
        title: "winstonkoh87/Athena-Public",
        source: "GitHub",
        date: "Updated 2026-06-09",
        href: "https://github.com/winstonkoh87/Athena-Public",
        summary:
          "An experimental Linux environment for AI agents with memory, autonomy, and time-awareness concepts.",
        tags: ["Agent OS", "Memory", "Autonomy"],
      },
    ],
  },
];
