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

export const lastUpdated = "2026-08-01";

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
        title: "Graph Neural Multilevel Preconditioners for Iterative Solvers",
        source: "arXiv",
        date: "2026-07-30",
        href: "https://arxiv.org/abs/2607.28456",
        summary:
          "Tests graph neural networks as practical multilevel preconditioners for large sparse linear systems, a sharp meeting point between numerical linear algebra and learned scientific computing.",
        tags: ["Numerical Linear Algebra", "GNNs", "Scientific Computing"],
      },
      {
        type: "Paper",
        title: "From Classification to Regression: Using a Fruitfly to Solve Equations",
        source: "arXiv",
        date: "2026-07-29",
        href: "https://arxiv.org/abs/2607.27196",
        summary:
          "Turns regression into a classification-inspired framework motivated by fruitfly sensing, a creative bridge between numerical approximation and learning systems.",
        tags: ["Numerical Methods", "Regression", "Learning Theory"],
      },
      {
        type: "Paper",
        title: "Numerical approach to the London Equation of superconductivity",
        source: "arXiv",
        date: "2026-07-29",
        href: "https://arxiv.org/abs/2607.27103",
        summary:
          "Builds a discretization strategy for superconductivity's London equation in three-dimensional space, useful for studying careful PDE-to-computation translation.",
        tags: ["Numerical PDEs", "Scientific Computing", "Superconductivity"],
      },
      {
        type: "Paper",
        title: "Modelling Anomalous Diffusion: The Role of CTRWs and Non-Local Dynamics",
        source: "arXiv",
        date: "2026-07-29",
        href: "https://arxiv.org/abs/2607.27150",
        summary:
          "Surveys continuous-time random walks and scaling limits for anomalous diffusion, making probability models feel closer to physical and non-local dynamics.",
        tags: ["Probability", "Stochastic Processes", "Diffusion"],
      },
      {
        type: "Paper",
        title: "Optimization under Persistent State-Dependent Bias: Gradient-based Method and Complexity Analysis",
        source: "arXiv",
        date: "2026-07-28",
        href: "https://arxiv.org/abs/2607.26032",
        summary:
          "Analyzes stochastic gradient descent when updates carry persistent state-dependent bias, a useful theoretical lens for optimization systems where feedback effects distort gradients.",
        tags: ["Optimization", "Stochastic Gradients", "Complexity"],
      },
      {
        type: "GitHub",
        title: "stdlib-js/stdlib",
        source: "GitHub",
        date: "Updated 2026-07-30",
        href: "https://github.com/stdlib-js/stdlib",
        summary:
          "A broad JavaScript/TypeScript numerical library whose active development is useful for studying portable implementations of statistics, linear algebra, and scientific-computing primitives.",
        tags: ["Numerical Computing", "Statistics", "JavaScript"],
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
        title: "ReToken: One Token to Improve Vision-Language Models for Visual Retrieval",
        source: "arXiv",
        date: "2026-07-30",
        href: "https://arxiv.org/abs/2607.28627",
        summary:
          "Introduces a learned retrieval token that selects query-relevant visual tokens from a cached context, useful for thinking about efficient long-context vision-language systems.",
        tags: ["Vision-Language Models", "Retrieval", "Efficiency"],
      },
      {
        type: "Paper",
        title: "Do You Really Need to Pretrain Q-Functions for Online RL Fine-Tuning?",
        source: "arXiv",
        date: "2026-07-29",
        href: "https://arxiv.org/abs/2607.27203",
        summary:
          "Questions a common value-based RL fine-tuning recipe by separating pretrained policies from pretrained Q-functions, useful for sharper offline-to-online training intuition.",
        tags: ["Reinforcement Learning", "Fine-Tuning", "Q-Functions"],
      },
      {
        type: "Paper",
        title: "From Classification to Regression: Using a Fruitfly to Solve Equations",
        source: "arXiv",
        date: "2026-07-29",
        href: "https://arxiv.org/abs/2607.27196",
        summary:
          "A biologically inspired regression method that replaces complex global surfaces with simpler local classification-style surrogates.",
        tags: ["Regression", "Bio-Inspired ML", "Numerical Learning"],
      },
      {
        type: "Paper",
        title: "Inverse Learning of Latent Risk-Neutral Densities from Irregular Option Quotes",
        source: "arXiv",
        date: "2026-07-29",
        href: "https://arxiv.org/abs/2607.27188",
        summary:
          "Uses controlled and chronological benchmarks to test whether models recover latent financial densities, a good reminder that accurate predictions need not imply faithful inverse learning.",
        tags: ["Inverse Learning", "Benchmarks", "Financial ML"],
      },
      {
        type: "GitHub",
        title: "microsoft/onnxruntime",
        source: "GitHub",
        date: "Updated 2026-07-30",
        href: "https://github.com/microsoft/onnxruntime",
        summary:
          "A production-grade runtime for cross-platform ML inference and training acceleration, worth following for deployment, optimization, and hardware abstraction patterns.",
        tags: ["Inference", "Deployment", "Optimization"],
      },
      {
        type: "GitHub",
        title: "deepspeedai/DeepSpeed",
        source: "GitHub",
        date: "Updated 2026-07-30",
        href: "https://github.com/deepspeedai/DeepSpeed",
        summary:
          "A deep-learning optimization library for distributed training and inference, useful for understanding scaling systems around large models.",
        tags: ["Distributed Training", "Inference", "Large Models"],
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
        title: "OSReward: Instituting Standardized Evaluation for Cross-Platform Computer-Use Reward Models",
        source: "arXiv",
        date: "2026-07-30",
        href: "https://arxiv.org/abs/2607.28609",
        summary:
          "Proposes standardized evaluation for reward models that judge computer-use agent trajectories across platforms, a key piece of infrastructure for scalable CUA training and assessment.",
        tags: ["Computer-Use Agents", "Reward Models", "Evaluation"],
      },
      {
        type: "Paper",
        title: "Can AI agents conduct open-ended AI research? Early evidence from two case studies",
        source: "arXiv",
        date: "2026-07-29",
        href: "https://arxiv.org/abs/2607.27191",
        summary:
          "Directly probes whether agents can move beyond narrow verifiable tasks into open-ended AI research, an important question for forecasting agentic progress.",
        tags: ["AI Research Agents", "Evaluation", "Case Studies"],
      },
      {
        type: "Paper",
        title: "OmegaUse-OfficeVal: Benchmarking LLM Agents on Long-Horizon Office-Suite Tasks with Economic Grounding",
        source: "arXiv",
        date: "2026-07-29",
        href: "https://arxiv.org/abs/2607.27155",
        summary:
          "Introduces economically grounded office-suite workflows for testing long-horizon LLM agents, connecting benchmark scores with practical work value.",
        tags: ["Agent Benchmarks", "Office Workflows", "Long-Horizon Tasks"],
      },
      {
        type: "Paper",
        title: "Scores Are Not Decisions: Cost-Aware Stopping for Tool Acquisition in LLM Agents",
        source: "arXiv",
        date: "2026-07-29",
        href: "https://arxiv.org/abs/2607.27083",
        summary:
          "Frames tool acquisition as a stopping decision under cost, context, and privacy tradeoffs rather than a simple relevance-scoring problem.",
        tags: ["Tool Use", "Cost-Aware Agents", "Decision Policies"],
      },
      {
        type: "Paper",
        title: "MemSecBench: Tracking Agent Memory Poisoning from Persistence to Consequence and Repair",
        source: "arXiv",
        date: "2026-07-29",
        href: "https://arxiv.org/abs/2607.27080",
        summary:
          "Benchmarks how malicious instructions can persist through agent memory and later shape actions, a timely security angle for long-lived assistants.",
        tags: ["Agent Memory", "Security", "Benchmarks"],
      },
      {
        type: "GitHub",
        title: "HKUDS/nanobot",
        source: "GitHub",
        date: "Updated 2026-07-30",
        href: "https://github.com/HKUDS/nanobot",
        summary:
          "An actively maintained personal agent framework with WebUI, tools, memory, MCP, and multi-agent workflows for studying practical agent ergonomics.",
        tags: ["Agent Framework", "Memory", "MCP"],
      },
    ],
  },
];
