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

export const lastUpdated = "2026-08-05";

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
        title: "Reduced-order modeling for electromagnetic inverse problems: a layered medium benchmark",
        source: "arXiv",
        date: "2026-08-04",
        href: "https://arxiv.org/abs/2608.03996",
        summary:
          "Uses reduced-order modeling on a layered-medium inverse problem, a good numerical-analysis example where discretized dynamics and inverse objectives meet.",
        tags: ["Numerical Analysis", "Inverse Problems", "Reduced-Order Models"],
      },
      {
        type: "Paper",
        title: "Simulation-Based Neural Policies for Portfolio Choice: Architecture, Training, and Interpretability",
        source: "arXiv",
        date: "2026-08-04",
        href: "https://arxiv.org/abs/2608.03933",
        summary:
          "Frames portfolio choice as stochastic control with neural policies, making it useful for connecting optimal control, simulation, and interpretable decision rules.",
        tags: ["Stochastic Control", "Optimization", "Finance"],
      },
      {
        type: "Paper",
        title: "Robust Low-Tubal-Rank Tensor Completion under Cross-Concentrated Sampling",
        source: "arXiv",
        date: "2026-08-04",
        href: "https://arxiv.org/abs/2608.03928",
        summary:
          "Studies robust tensor completion when observations are concentrated in slices, a relevant bridge between numerical linear algebra and statistical ML.",
        tags: ["Tensor Completion", "Numerical Linear Algebra", "Statistical ML"],
      },
      {
        type: "Paper",
        title: "Trajectory inference via Acceleration Matching",
        source: "arXiv",
        date: "2026-08-04",
        href: "https://arxiv.org/abs/2608.03916",
        summary:
          "Proposes a trajectory-inference method based on matching accelerations, an elegant optimization view of dynamics from unpaired time snapshots.",
        tags: ["Optimal Control", "Dynamical Systems", "Trajectory Inference"],
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
        title: "Test-Time Scaling in Reasoning LLMs: Inference Regimes, Evaluation, and Reproducibility",
        source: "arXiv",
        date: "2026-08-04",
        href: "https://arxiv.org/abs/2608.04001",
        summary:
          "Clarifies inference-time compute strategies for reasoning models and emphasizes evaluation hygiene, directly useful for reading LLM benchmark claims.",
        tags: ["Reasoning", "Evaluation", "LLMs"],
      },
      {
        type: "Paper",
        title: "Information-Geometric Forward Policy Training in GFlowNets",
        source: "arXiv",
        date: "2026-08-04",
        href: "https://arxiv.org/abs/2608.03967",
        summary:
          "Recasts GFlowNet forward-policy training with information geometry, a compact theory angle on amortized inference and structured generation.",
        tags: ["GFlowNets", "Information Geometry", "Amortized Inference"],
      },
      {
        type: "Paper",
        title: "Interpretable Adaptive Sampling for LLM Test-Time Scaling",
        source: "arXiv",
        date: "2026-08-04",
        href: "https://arxiv.org/abs/2608.03961",
        summary:
          "Explores adaptive compute allocation during LLM reasoning, a practical idea for making test-time scaling less wasteful and more inspectable.",
        tags: ["Test-Time Scaling", "Adaptive Sampling", "LLMs"],
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
      {
        type: "GitHub",
        title: "optuna/optuna",
        source: "GitHub",
        date: "Updated 2026-08-05",
        href: "https://github.com/optuna/optuna",
        summary:
          "A mature hyperparameter-optimization framework that remains a useful reference for reproducible experiment search and automated tuning workflows.",
        tags: ["Hyperparameter Optimization", "Experimentation", "Python"],
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
        title: "TurnSight: Turn-Level Hindsight Self-Distillation for Tool-Integrated Reasoning",
        source: "arXiv",
        date: "2026-08-04",
        href: "https://arxiv.org/abs/2608.04007",
        summary:
          "Improves credit assignment across multi-turn tool interactions, a core bottleneck for training reliable tool-using agents.",
        tags: ["Tool Use", "Self-Distillation", "Reasoning"],
      },
      {
        type: "Paper",
        title: "PAST-Bench: Benchmarking the Foundations of Recursive Self-Improvement in Personal Agents",
        source: "arXiv",
        date: "2026-08-04",
        href: "https://arxiv.org/abs/2608.04003",
        summary:
          "Introduces a benchmark for whether personal agents can convert stored experience into better future behavior, putting memory and self-improvement under test.",
        tags: ["Benchmarks", "Personal Agents", "Memory"],
      },
      {
        type: "Paper",
        title: "Video-DeepResearch: Towards the Next-Generation Multimodal Deepresearch Agent",
        source: "arXiv",
        date: "2026-08-04",
        href: "https://arxiv.org/abs/2608.03979",
        summary:
          "Extends deep-research agents into continuous video, highlighting the next set of challenges for multimodal grounding and web exploration.",
        tags: ["Multimodal Agents", "Video", "Deep Research"],
      },
      {
        type: "Paper",
        title: "Should We Type or Talk to LLM Agents? A Comprehensive Study of Voice and Keyboard Input Perturbations",
        source: "arXiv",
        date: "2026-08-04",
        href: "https://arxiv.org/abs/2608.03970",
        summary:
          "Studies how typed versus spoken user input changes agent performance, a practical reminder that interface noise affects downstream autonomy.",
        tags: ["Human-Agent Interaction", "Robustness", "Evaluation"],
      },
      {
        type: "GitHub",
        title: "infiniflow/ragflow",
        source: "GitHub",
        date: "Updated 2026-08-05",
        href: "https://github.com/infiniflow/ragflow",
        summary:
          "A production-oriented RAG and agent context engine, useful for studying how retrieval, context management, and agent capabilities are packaged together.",
        tags: ["RAG", "Agentic Retrieval", "Context Engineering"],
      },
    ],
  },
];
