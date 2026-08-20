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

export const lastUpdated = "2026-08-20";

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
        title: "Probabilistic Representation and Convergence of Gromov-Wasserstein Gradient Flows",
        source: "arXiv",
        date: "2026-08-19",
        href: "https://arxiv.org/abs/2608.19198",
        summary:
          "Develops a probabilistic view of Gromov-Wasserstein entropy flows, connecting optimal transport geometry with diffusion-style convergence analysis.",
        tags: ["Optimal Transport", "Probability", "Gradient Flows"],
      },
      {
        type: "Paper",
        title: "Entry growth in Gaussian elimination",
        source: "arXiv",
        date: "2026-08-19",
        href: "https://arxiv.org/abs/2608.19189",
        summary:
          "Revisits a classical numerical-linear-algebra stability question by studying how pivoting can amplify entries during Gaussian elimination.",
        tags: ["Numerical Linear Algebra", "Stability", "Algorithms"],
      },
      {
        type: "Paper",
        title: "Constrained minmax density transportation for linear parabolic PDEs: a numerical optimal control perspective",
        source: "arXiv",
        date: "2026-08-19",
        href: "https://arxiv.org/abs/2608.19170",
        summary:
          "Builds a numerical optimal-control framework for robust density transport in noisy parabolic PDEs such as the heat equation.",
        tags: ["Optimal Control", "PDEs", "Numerics"],
      },
      {
        type: "Paper",
        title: "Continuous-Time Reinforcement Learning for Controlled Hawkes Jump-Diffusions",
        source: "arXiv",
        date: "2026-08-19",
        href: "https://arxiv.org/abs/2608.19151",
        summary:
          "Studies control of path-dependent Hawkes jump-diffusions, a useful bridge between stochastic processes, optimization, and learning algorithms.",
        tags: ["Stochastic Control", "Hawkes Processes", "Reinforcement Learning"],
      },
      {
        type: "GitHub",
        title: "stdlib-js/stdlib",
        source: "GitHub",
        date: "Updated 2026-08-20",
        href: "https://github.com/stdlib-js/stdlib",
        summary:
          "A broad numerical and statistical standard library for JavaScript and TypeScript, useful for seeing how mathematical computing primitives are engineered for production environments.",
        tags: ["Numerical Computing", "Statistics", "TypeScript"],
      },
      {
        type: "GitHub",
        title: "root-project/root",
        source: "GitHub",
        date: "Updated 2026-08-20",
        href: "https://github.com/root-project/root",
        summary:
          "A mature scientific data-analysis framework whose numerical, statistical, and visualization tools show large-scale scientific software design.",
        tags: ["Scientific Computing", "Statistics", "C++"],
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
        title: "Beyond Teacher Likelihood: Group-Calibrated On-Policy Distillation for Long-Context Reasoning",
        source: "arXiv",
        date: "2026-08-19",
        href: "https://arxiv.org/abs/2608.19181",
        summary:
          "Improves long-context distillation by calibrating groups of student responses rather than relying only on token-level teacher likelihood.",
        tags: ["Distillation", "Long Context", "Reasoning"],
      },
      {
        type: "Paper",
        title: "Lévy Attention: Single-Pass Predictive Uncertainty for Continuous-Time Attention",
        source: "arXiv",
        date: "2026-08-19",
        href: "https://arxiv.org/abs/2608.19171",
        summary:
          "Adds uncertainty estimates to continuous-time attention models for irregular time series without requiring a second inference pass.",
        tags: ["Attention", "Uncertainty", "Time Series"],
      },
      {
        type: "Paper",
        title: "Learned, Then Lost: A Measured Single-Example Counterfactual in Pre-training",
        source: "arXiv",
        date: "2026-08-19",
        href: "https://arxiv.org/abs/2608.19168",
        summary:
          "Measures the effect of one pretraining example through repeated counterfactual training runs, grounding data-attribution questions in direct evidence.",
        tags: ["Pretraining", "Data Attribution", "Language Models"],
      },
      {
        type: "Paper",
        title: "On the Fragility of Self-Improving Agents: Variance, Task Order, and Underspecification",
        source: "arXiv",
        date: "2026-08-18",
        href: "https://arxiv.org/abs/2608.18066",
        summary:
          "Stress-tests memory-based self-improving agents and highlights variance, task ordering, and underspecification risks that matter for reliable ML systems.",
        tags: ["Agentic ML", "Evaluation", "Reliability"],
      },
      {
        type: "GitHub",
        title: "vllm-project/vllm",
        source: "GitHub",
        date: "Updated 2026-08-19",
        href: "https://github.com/vllm-project/vllm",
        summary:
          "A high-throughput LLM inference and serving engine worth following for practical scheduling, memory management, and deployment tradeoffs.",
        tags: ["LLM Serving", "Inference", "Systems"],
      },
      {
        type: "GitHub",
        title: "NVIDIA/TensorRT-LLM",
        source: "GitHub",
        date: "Updated 2026-08-20",
        href: "https://github.com/NVIDIA/TensorRT-LLM",
        summary:
          "A production-oriented LLM inference stack for NVIDIA GPUs, worth following for kernels, runtime orchestration, and deployment performance.",
        tags: ["LLM Serving", "Inference", "CUDA"],
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
        title: "SPADE: Self-Play in Adaptive Synthetic Executable Environments",
        source: "arXiv",
        date: "2026-08-19",
        href: "https://arxiv.org/abs/2608.19197",
        summary:
          "Introduces adaptive executable environments for language-agent self-play, aiming to keep training goals evolving as agents improve.",
        tags: ["Self-Play", "Agent Training", "Synthetic Environments"],
      },
      {
        type: "Paper",
        title: "Beyond the Transcript: Detecting Covert Co ordination in Latent Multi-Agent Communication",
        source: "arXiv",
        date: "2026-08-19",
        href: "https://arxiv.org/abs/2608.19161",
        summary:
          "Targets hidden-state communication between agents with activation-aware monitoring, a concrete safety issue beyond visible chat transcripts.",
        tags: ["Multi-Agent Safety", "Monitoring", "Latent Communication"],
      },
      {
        type: "Paper",
        title: "What is Missing from AI Post-Training AI: An Empirical Analysis",
        source: "arXiv",
        date: "2026-08-19",
        href: "https://arxiv.org/abs/2608.19072",
        summary:
          "Separates execution skill from improvement skill in agents that run post-training loops, clarifying what still limits AI-for-AI workflows.",
        tags: ["Post-Training", "Agent Evaluation", "AI-for-AI"],
      },
      {
        type: "Paper",
        title: "StagedWorkspace: A Versioned Workspace for Knowledge-Work Agents",
        source: "arXiv",
        date: "2026-08-18",
        href: "https://arxiv.org/abs/2608.18050",
        summary:
          "Proposes versioned workspaces for agents editing persistent artifacts, directly relevant to reliable long-running knowledge work.",
        tags: ["Agent Workspaces", "Versioning", "Knowledge Work"],
      },
      {
        type: "GitHub",
        title: "agentscope-ai/ReMe",
        source: "GitHub",
        date: "Updated 2026-08-20",
        href: "https://github.com/agentscope-ai/ReMe",
        summary:
          "A focused memory-management kit for agents, useful for studying how retrieval, refinement, and persistence are packaged in agent systems.",
        tags: ["Agent Memory", "RAG", "Framework"],
      },
      {
        type: "GitHub",
        title: "langgenius/dify",
        source: "GitHub",
        date: "Updated 2026-08-19",
        href: "https://github.com/langgenius/dify",
        summary:
          "A widely used platform for agentic workflows and RAG pipelines, useful for learning how tools, retrieval, and deployment are packaged for teams.",
        tags: ["Agent Workflows", "RAG", "Platform"],
      },
    ],
  },
];
