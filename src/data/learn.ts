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

export const lastUpdated = "2026-07-27";

export const learnTopics: LearnTopic[] = [
  {
    slug: "mathematics",
    title: "Mathematics",
    subtitle: "Probability, dynamics, optimization, and mathematical foundations",
    description:
      "Papers and repositories that connect rigorous mathematical ideas with modeling, simulation, and computational tools.",
    resources: [
      {
        type: "GitHub",
        title: "stdlib-js/stdlib",
        source: "GitHub",
        date: "Updated 2026-07-27",
        href: "https://github.com/stdlib-js/stdlib",
        summary:
          "A broad JavaScript/TypeScript numerical library whose active development is useful for studying portable implementations of statistics, linear algebra, and scientific-computing primitives.",
        tags: ["Numerical Computing", "Statistics", "JavaScript"],
      },
      {
        type: "Paper",
        title: "Fully Convergent Projection-based Methods with Momentum under Nonconvex Geometric Constraints",
        source: "arXiv",
        date: "2026-07-24",
        href: "https://arxiv.org/abs/2607.22510",
        summary:
          "Extends momentum-style projection methods to difficult nonconvex geometric constraints, a useful optimization reference for constrained modeling and inverse problems.",
        tags: ["Optimization", "Nonconvex Methods", "Projection Algorithms"],
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
        title: "PinEqualizer: Full Funnel Content Exploration and Debiasing System at Pinterest",
        source: "arXiv",
        date: "2026-07-24",
        href: "https://arxiv.org/abs/2607.22518",
        summary:
          "Describes a production exploration and debiasing system for recommender funnels, giving a concrete case study in how large platforms balance discovery, feedback loops, and ranking quality.",
        tags: ["Recommender Systems", "Debiasing", "Applied ML"],
      },
      {
        type: "GitHub",
        title: "ultralytics/ultralytics",
        source: "GitHub",
        date: "Updated 2026-07-27",
        href: "https://github.com/ultralytics/ultralytics",
        summary:
          "An actively maintained YOLO computer-vision toolkit with practical training, deployment, and model-zoo patterns for object detection, segmentation, classification, and pose tasks.",
        tags: ["Computer Vision", "Deep Learning", "Deployment"],
      },
      {
        type: "Paper",
        title: "Quantum Spectral Model: Data Reuploading with Input-Conditioned Frequency Support",
        source: "arXiv",
        date: "2026-07-24",
        href: "https://arxiv.org/abs/2607.22516",
        summary:
          "Studies input-conditioned frequency support for data-reuploading quantum models, a useful angle on matching model inductive bias to signal structure.",
        tags: ["Model Architecture", "Inductive Bias", "Quantum ML"],
      },
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
        type: "GitHub",
        title: "pytorch/pytorch",
        source: "GitHub",
        date: "Updated 2026-07-27",
        href: "https://github.com/pytorch/pytorch",
        summary:
          "The core dynamic-tensor and autograd framework remains a high-signal codebase for learning practical deep-learning kernels, compiler integration, distributed training, and GPU systems design.",
        tags: ["Deep Learning", "PyTorch", "ML Systems"],
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
        title: "CausalForge: A Formally Grounded, Self-Improving Agentic Framework for Automated Research in Causal Inference",
        source: "arXiv",
        date: "2026-07-24",
        href: "https://arxiv.org/abs/2607.22511",
        summary:
          "Frames automated causal-inference research as a self-improving agentic workflow, connecting formal reasoning with practical scientific-agent design.",
        tags: ["Research Agents", "Causal Inference", "Self-Improvement"],
      },
      {
        type: "GitHub",
        title: "activepieces/activepieces",
        source: "GitHub",
        date: "Updated 2026-07-27",
        href: "https://github.com/activepieces/activepieces",
        summary:
          "A large open-source automation platform for AI agents, MCP servers, and workflow orchestration, useful for seeing how agent tools are packaged for real integrations.",
        tags: ["Agent Workflows", "MCP", "Automation"],
      },
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
