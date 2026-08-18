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

export const lastUpdated = "2026-08-18";

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
        title: "A Local Central Limit Theorem for Clique Counts in Sparse Random Graphs",
        source: "arXiv",
        date: "2026-08-17",
        href: "https://arxiv.org/abs/2608.16882",
        summary:
          "Advances local central limit theory for subgraph counts in sparse Erdős-Rényi graphs, connecting probability, combinatorics, and random-graph asymptotics.",
        tags: ["Probability", "Random Graphs", "Limit Theorems"],
      },
      {
        type: "Paper",
        title: "Gradient Gibbs measures with non-convex potentials and the universality class of the Gaussian Free Field",
        source: "arXiv",
        date: "2026-08-14",
        href: "https://arxiv.org/abs/2608.14526",
        summary:
          "Extends Gaussian Free Field scaling-limit results from convex settings to a broad non-convex class of gradient interface models.",
        tags: ["Probability", "Statistical Mechanics", "Gaussian Free Field"],
      },
      {
        type: "Paper",
        title: "On quantitative sufficient second-order optimality conditions for elliptic optimal control problems",
        source: "arXiv",
        date: "2026-08-14",
        href: "https://arxiv.org/abs/2608.14525",
        summary:
          "Develops quantitative stability conditions for semilinear elliptic optimal-control problems without relying on Tikhonov regularization.",
        tags: ["Optimization", "Optimal Control", "PDEs"],
      },
      {
        type: "Paper",
        title: "Nodal discontinuous Galerkin methods for non-ideal equations of state: pressure equilibrium preservation and entropy correction",
        source: "arXiv",
        date: "2026-08-14",
        href: "https://arxiv.org/abs/2608.14506",
        summary:
          "Studies structure-preserving DG schemes for real-fluid simulation, balancing pressure-equilibrium preservation with entropy corrections.",
        tags: ["Numerical Analysis", "Discontinuous Galerkin", "Scientific Computing"],
      },
      {
        type: "GitHub",
        title: "statsmodels/statsmodels",
        source: "GitHub",
        date: "Updated 2026-08-17",
        href: "https://github.com/statsmodels/statsmodels",
        summary:
          "A mature Python library for statistical modeling and econometrics, useful for learning how rigorous statistical APIs are maintained in production.",
        tags: ["Statistics", "Econometrics", "Python"],
      },
      {
        type: "GitHub",
        title: "stdlib-js/stdlib",
        source: "GitHub",
        date: "Updated 2026-08-16",
        href: "https://github.com/stdlib-js/stdlib",
        summary:
          "A broad numerical and statistical standard library for JavaScript and TypeScript, useful for seeing how mathematical computing primitives are engineered for production environments.",
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
        title: "Q-based Variational Inverse Reinforcement Learning",
        source: "arXiv",
        date: "2026-08-17",
        href: "https://arxiv.org/abs/2608.16888",
        summary:
          "Introduces a Bayesian inverse-reinforcement-learning method that learns a variational distribution over optimal Q-values to recover reward uncertainty from demonstrations.",
        tags: ["Reinforcement Learning", "Bayesian ML", "Preference Learning"],
      },
      {
        type: "Paper",
        title: "Generation-Powered Inference for Distribution-Valued Outcomes",
        source: "arXiv",
        date: "2026-08-14",
        href: "https://arxiv.org/abs/2608.14542",
        summary:
          "Builds statistical inference tools that can use imperfect generative-model outputs for distribution-valued quantities without assuming the model is correct.",
        tags: ["Statistical ML", "Generative Models", "Inference"],
      },
      {
        type: "Paper",
        title: "ArGEnT: Arbitrary Geometry-encoded Transformer for Operator Learning",
        source: "arXiv",
        date: "Updated 2026-08-14",
        href: "https://arxiv.org/abs/2602.11626",
        summary:
          "Proposes a geometry-conditioned transformer for operator learning on irregular domains, a strong direction for scientific machine learning.",
        tags: ["Operator Learning", "Transformers", "Scientific ML"],
      },
      {
        type: "Paper",
        title: "Marionette: Predicting World States, Rendering Geometry, Painting Appearance",
        source: "arXiv",
        date: "2026-08-14",
        href: "https://arxiv.org/abs/2608.14530",
        summary:
          "Separates world-state prediction, deterministic geometry rendering, and neural appearance synthesis to improve controllability in interactive world models.",
        tags: ["World Models", "Computer Vision", "Generative Models"],
      },
      {
        type: "GitHub",
        title: "unslothai/unsloth",
        source: "GitHub",
        date: "Updated 2026-08-17",
        href: "https://github.com/unslothai/unsloth",
        summary:
          "A fast local training and fine-tuning stack for LLMs and diffusion models, worth following for practical efficiency techniques.",
        tags: ["LLM Fine-Tuning", "Efficiency", "PyTorch"],
      },
      {
        type: "GitHub",
        title: "NVIDIA/TensorRT-LLM",
        source: "GitHub",
        date: "Updated 2026-08-16",
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
        title: "Don't Drop the BATON: Long-Horizon Robot Manipulation via Agentic Subtask Exploration and Transition-aware Memory",
        source: "arXiv",
        date: "2026-08-17",
        href: "https://arxiv.org/abs/2608.16889",
        summary:
          "Combines an LLM agent, transition-aware memory, and frozen vision-language-action policies to make long-horizon robot manipulation more reliable.",
        tags: ["VLM Agents", "Robotics", "Memory"],
      },
      {
        type: "Paper",
        title: "AgentRewind: Recoverable Execution for Long-Horizon LLM Agents",
        source: "arXiv",
        date: "2026-08-14",
        href: "https://arxiv.org/abs/2608.14380",
        summary:
          "Introduces checkpoint-based recovery for long-horizon agents so failures can be rolled back across both context and environment state.",
        tags: ["Long-Horizon Agents", "Recovery", "Runtime Systems"],
      },
      {
        type: "Paper",
        title: "ScienceFlow: A long-horizon agent for ML research, scientific discovery and beyond",
        source: "arXiv",
        date: "2026-08-14",
        href: "https://arxiv.org/abs/2608.14354",
        summary:
          "Targets continuity, recovery, and compute allocation for autonomous research agents working across extended scientific workflows.",
        tags: ["Research Agents", "Scientific Discovery", "Long-Horizon"],
      },
      {
        type: "Paper",
        title: "ATLAS: Discovering Agent Strategies through LLM-Guided Abstraction and Automata Learning",
        source: "arXiv",
        date: "2026-08-14",
        href: "https://arxiv.org/abs/2608.14352",
        summary:
          "Recovers interpretable finite-state strategy models from agent trajectories, moving evaluation beyond final success rates.",
        tags: ["Agent Evaluation", "Strategy Discovery", "Automata Learning"],
      },
      {
        type: "Paper",
        title: "The Past and Future of AI Scientists",
        source: "arXiv",
        date: "2026-08-14",
        href: "https://arxiv.org/abs/2608.14407",
        summary:
          "Surveys AI-scientist systems from early self-driving laboratories to foundation-model research agents connected to tools, data, and experiments.",
        tags: ["AI Scientists", "Survey", "Research Automation"],
      },
      {
        type: "GitHub",
        title: "elizaOS/eliza",
        source: "GitHub",
        date: "Updated 2026-08-17",
        href: "https://github.com/elizaOS/eliza",
        summary:
          "An open-source agentic operating system, useful for studying practical abstractions around agent runtimes, memory, and integrations.",
        tags: ["Agent Framework", "Agent OS", "TypeScript"],
      },
    ],
  },
];
