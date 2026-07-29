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

export const lastUpdated = "2026-07-29";

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
        title: "Optimization under Persistent State-Dependent Bias: Gradient-based Method and Complexity Analysis",
        source: "arXiv",
        date: "2026-07-28",
        href: "https://arxiv.org/abs/2607.26032",
        summary:
          "Analyzes stochastic gradient descent when updates carry persistent state-dependent bias, a useful theoretical lens for optimization systems where implementation or feedback effects distort gradients.",
        tags: ["Optimization", "Stochastic Gradients", "Complexity"],
      },
      {
        type: "Paper",
        title: "Weak-form Extended Dynamic Mode Decomposition",
        source: "arXiv",
        date: "2026-07-28",
        href: "https://arxiv.org/abs/2607.25950",
        summary:
          "Develops a weak-form EDMD method designed to reduce noise sensitivity, connecting dynamical-systems theory with practical data-driven modeling.",
        tags: ["Dynamical Systems", "Operator Learning", "Numerical Methods"],
      },
      {
        type: "Paper",
        title: "Quasi-SVD: Learning a Lie-constrained matrix factorisation for real-time imaging",
        source: "arXiv",
        date: "2026-07-28",
        href: "https://arxiv.org/abs/2607.25967",
        summary:
          "Learns a Lie-constrained matrix factorization for real-time imaging, offering an applied numerical-linear-algebra route around the sequential cost of classical SVD.",
        tags: ["Numerical Linear Algebra", "Matrix Factorization", "Imaging"],
      },
      {
        type: "GitHub",
        title: "root-project/root",
        source: "GitHub",
        date: "Updated 2026-07-29",
        href: "https://github.com/root-project/root",
        summary:
          "A mature scientific-computing platform for storing, analyzing, and visualizing large datasets, useful for learning production-grade numerical tooling beyond notebooks.",
        tags: ["Scientific Computing", "Data Analysis", "C++"],
      },
      {
        type: "GitHub",
        title: "stdlib-js/stdlib",
        source: "GitHub",
        date: "Updated 2026-07-29",
        href: "https://github.com/stdlib-js/stdlib",
        summary:
          "A broad JavaScript/TypeScript numerical library whose active development is useful for studying portable implementations of statistics, linear algebra, and scientific-computing primitives.",
        tags: ["Numerical Computing", "Statistics", "JavaScript"],
      },
      {
        type: "Paper",
        title: "Singular value soft-thresholding via the polar decomposition",
        source: "arXiv",
        date: "2026-07-24",
        href: "https://arxiv.org/abs/2607.22484",
        summary:
          "Recasts singular-value soft-thresholding through polar decomposition, connecting a common low-rank numerical primitive with algorithms that can be easier to implement and accelerate.",
        tags: ["Numerical Linear Algebra", "Low-Rank Methods", "Optimization"],
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
        title: "Pass the Baton: Trajectory-Relayed On-Policy Distillation",
        source: "arXiv",
        date: "2026-07-28",
        href: "https://arxiv.org/abs/2607.26057",
        summary:
          "Proposes trajectory-relayed on-policy distillation to reduce prefix-failure cascades, a timely training idea for stronger reasoning models.",
        tags: ["Distillation", "Reasoning", "Language Models"],
      },
      {
        type: "Paper",
        title: "Spend Experts Where You Are Unsure: Confidence-Adaptive Routing for Mixture-of-Experts LoRA",
        source: "arXiv",
        date: "2026-07-28",
        href: "https://arxiv.org/abs/2607.26052",
        summary:
          "Adapts the number of LoRA experts to token-level uncertainty, a practical efficiency idea for MoE-style fine-tuning.",
        tags: ["Mixture of Experts", "LoRA", "Efficient Fine-Tuning"],
      },
      {
        type: "Paper",
        title: "Reinformed Dreamer: An Asymmetric World Model Efficiently Trained through Latent Guidance",
        source: "arXiv",
        date: "2026-07-28",
        href: "https://arxiv.org/abs/2607.26040",
        summary:
          "Uses extra latent guidance to train a world model more efficiently, connecting representation learning with reinforcement-learning sample efficiency.",
        tags: ["Reinforcement Learning", "World Models", "Representation Learning"],
      },
      {
        type: "GitHub",
        title: "huggingface/transformers",
        source: "GitHub",
        date: "Updated 2026-07-29",
        href: "https://github.com/huggingface/transformers",
        summary:
          "The main open-source model-definition library for modern text, vision, audio, and multimodal transformers, with constant examples of production ML ergonomics.",
        tags: ["Transformers", "Model Library", "Multimodal ML"],
      },
      {
        type: "GitHub",
        title: "flashinfer-ai/flashinfer",
        source: "GitHub",
        date: "Updated 2026-07-29",
        href: "https://github.com/flashinfer-ai/flashinfer",
        summary:
          "A kernel library for LLM serving that is worth following for inference performance, batching, and GPU-systems implementation patterns.",
        tags: ["LLM Serving", "GPU Kernels", "Inference"],
      },
      {
        type: "GitHub",
        title: "ultralytics/ultralytics",
        source: "GitHub",
        date: "Updated 2026-07-29",
        href: "https://github.com/ultralytics/ultralytics",
        summary:
          "An actively maintained YOLO computer-vision toolkit with practical training, deployment, and model-zoo patterns for detection, segmentation, classification, and pose tasks.",
        tags: ["Computer Vision", "Deep Learning", "Deployment"],
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
        title: "Desktop-Delta Bench: Do Computer-Use Models Understand Desktop GUI Transitions?",
        source: "arXiv",
        date: "2026-07-28",
        href: "https://arxiv.org/abs/2607.26041",
        summary:
          "Isolates whether computer-use agents understand causal GUI transitions, an important benchmark direction beyond single-frame grounding or final task success.",
        tags: ["Computer-Use Agents", "Benchmarks", "GUI Understanding"],
      },
      {
        type: "Paper",
        title: "UniMem: Complementary Episodic-to-Parametric Memory for Boundary-Agnostic Task Streams",
        source: "arXiv",
        date: "2026-07-28",
        href: "https://arxiv.org/abs/2607.26017",
        summary:
          "Studies agent memory over evolving task streams, balancing reusable episodic experience with parametric consolidation.",
        tags: ["Agent Memory", "Continual Learning", "Task Streams"],
      },
      {
        type: "Paper",
        title: "MemLens: A Value-Aware Memory Management System with Interactive Analytics for LLM-based Agents",
        source: "arXiv",
        date: "2026-07-28",
        href: "https://arxiv.org/abs/2607.25992",
        summary:
          "Focuses on value-aware memory management and analytics for LLM agents, a practical infrastructure topic for long-horizon deployments.",
        tags: ["Agent Memory", "Infrastructure", "Analytics"],
      },
      {
        type: "GitHub",
        title: "alookai/alook",
        source: "GitHub",
        date: "Updated 2026-07-29",
        href: "https://github.com/alookai/alook",
        summary:
          "A collaboration layer for AI workforces where agents coordinate over email and shared memory, useful for studying multi-agent operating patterns.",
        tags: ["Multi-Agent Systems", "Collaboration", "Memory"],
      },
      {
        type: "Paper",
        title: "The Regression Tax: Decomposing Why Skills Help and Hurt LLM Agents",
        source: "arXiv",
        date: "2026-07-24",
        href: "https://arxiv.org/abs/2607.22520",
        summary:
          "Breaks down why adding procedural skills can both improve and degrade agent success, a helpful evaluation lens for deciding when reusable skills are actually worth installing.",
        tags: ["LLM Agents", "Skills", "Evaluation"],
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
    ],
  },
];
