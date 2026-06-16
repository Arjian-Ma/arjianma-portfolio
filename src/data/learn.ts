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

export const lastUpdated = "2026-06-16";

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
        title: "Learning the Geometry of Data: A Mathematical Review of Shape Space Analysis",
        source: "arXiv",
        date: "2026-06-15",
        href: "https://arxiv.org/abs/2606.17022",
        summary:
          "A mathematical review of shape spaces for data with rich geometric structure, connecting statistics, geometry, and machine learning.",
        tags: ["Shape Analysis", "Statistics", "Geometry"],
      },
      {
        type: "Paper",
        title: "Filtered Conformal Ellipsoids for Graph-Native Time Series",
        source: "arXiv",
        date: "2026-06-15",
        href: "https://arxiv.org/abs/2606.17014",
        summary:
          "Builds conformal ellipsoids around graph-aware state-space forecasts to give joint uncertainty sets for multivariate time series.",
        tags: ["Conformal Prediction", "Time Series", "Statistics"],
      },
      {
        type: "Paper",
        title: "Nitsche-based FEM for the Laplace eigenvalue problem: spectral approximation and a posteriori error analysis",
        source: "arXiv",
        date: "2026-06-15",
        href: "https://arxiv.org/abs/2606.17052",
        summary:
          "Analyzes a weak-boundary-condition finite element method for Laplace eigenvalue problems, with spectral approximation and error estimates.",
        tags: ["Numerical Analysis", "Finite Elements", "Eigenvalues"],
      },
      {
        type: "GitHub",
        title: "statsmodels/statsmodels",
        source: "GitHub",
        date: "Updated 2026-06-15",
        href: "https://github.com/statsmodels/statsmodels",
        summary:
          "A mature Python library for statistical modeling and econometrics, useful for building intuition around inference and model diagnostics.",
        tags: ["Statistics", "Econometrics", "Python"],
      },
      {
        type: "GitHub",
        title: "runmat-org/runmat",
        source: "GitHub",
        date: "Updated 2026-06-13",
        href: "https://github.com/runmat-org/runmat",
        summary:
          "An open-source MATLAB-style runtime written in Rust, with CPU, GPU, Jupyter, and web targets for scientific computing experiments.",
        tags: ["Numerical Analysis", "Scientific Computing", "Rust"],
      },
      {
        type: "GitHub",
        title: "stdlib-js/stdlib",
        source: "GitHub",
        date: "Updated 2026-06-16",
        href: "https://github.com/stdlib-js/stdlib",
        summary:
          "A broad numerical computing library for JavaScript and TypeScript, useful as a practical computational reference.",
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
        title: "Exact Posterior Score Estimation for Solving Linear Inverse Problems",
        source: "arXiv",
        date: "2026-06-15",
        href: "https://arxiv.org/abs/2606.17048",
        summary:
          "Studies how to estimate exact posterior scores when using diffusion or flow priors for linear inverse problems.",
        tags: ["Diffusion Models", "Inverse Problems", "Posterior Sampling"],
      },
      {
        type: "Paper",
        title: "KVEraser: Learning to Steer KV Cache for Efficient Localized Context Erasing",
        source: "arXiv",
        date: "2026-06-15",
        href: "https://arxiv.org/abs/2606.17034",
        summary:
          "Targets efficient post-hoc context erasing by directly steering the KV cache rather than replaying or pruning whole contexts.",
        tags: ["LLMs", "KV Cache", "Context Editing"],
      },
      {
        type: "Paper",
        title: "ExpRL: Exploratory RL for LLM Mid-Training",
        source: "arXiv",
        date: "2026-06-15",
        href: "https://arxiv.org/abs/2606.17024",
        summary:
          "Explores how mid-training can improve the coverage that sparse-reward reinforcement learning needs for stronger LLM reasoning.",
        tags: ["LLM Training", "Reinforcement Learning", "Reasoning"],
      },
      {
        type: "GitHub",
        title: "sgl-project/sglang",
        source: "GitHub",
        date: "Updated 2026-06-15",
        href: "https://github.com/sgl-project/sglang",
        summary:
          "A high-performance serving framework for large language and multimodal models, especially relevant for inference systems practice.",
        tags: ["LLM Serving", "Inference", "Systems"],
      },
      {
        type: "GitHub",
        title: "vllm-project/vllm",
        source: "GitHub",
        date: "Updated 2026-06-16",
        href: "https://github.com/vllm-project/vllm",
        summary:
          "A high-throughput inference and serving engine for LLMs, useful for understanding practical deployment bottlenecks.",
        tags: ["LLM Serving", "Inference", "Systems"],
      },
      {
        type: "GitHub",
        title: "comet-ml/opik",
        source: "GitHub",
        date: "Updated 2026-06-15",
        href: "https://github.com/comet-ml/opik",
        summary:
          "An observability and evaluation stack for LLM, RAG, and agentic applications, useful for making model behavior inspectable.",
        tags: ["LLM Evaluation", "Observability", "RAG"],
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
        title: "Benchmarking LLM Agents on Meta-Analysis Articles from Nature Portfolio",
        source: "arXiv",
        date: "2026-06-15",
        href: "https://arxiv.org/abs/2606.17041",
        summary:
          "Uses the structured workflow of meta-analysis articles to evaluate agentic literature retrieval, selection, and synthesis behavior.",
        tags: ["Agent Benchmarks", "Literature Review", "Evaluation"],
      },
      {
        type: "Paper",
        title: "TokenPilot: Cache-Efficient Context Management for LLM Agents",
        source: "arXiv",
        date: "2026-06-15",
        href: "https://arxiv.org/abs/2606.17016",
        summary:
          "Focuses on keeping long-horizon LLM agents cheaper by managing accumulated context without uncontrolled token reordering.",
        tags: ["Context Management", "Memory", "LLM Agents"],
      },
      {
        type: "Paper",
        title: "Semantic Flip: Synthetic OOD Generation for Robust Refusal in Embodied Question Answering and Spatial Localization",
        source: "arXiv",
        date: "2026-06-15",
        href: "https://arxiv.org/abs/2606.16898",
        summary:
          "Creates synthetic out-of-distribution cases to make embodied agents better at refusing unanswerable visual-spatial queries.",
        tags: ["Embodied Agents", "Robustness", "VLMs"],
      },
      {
        type: "Paper",
        title: "HyperTool: Beyond Step-Wise Tool Calls for Tool-Augmented Agents",
        source: "arXiv",
        date: "2026-06-11",
        href: "https://arxiv.org/abs/2606.13663",
        summary:
          "A tool-use paper addressing the mismatch between atomic tool calls and larger deterministic tool workflows.",
        tags: ["Tool Use", "Agent Workflows", "LLM Agents"],
      },
      {
        type: "GitHub",
        title: "langgenius/dify",
        source: "GitHub",
        date: "Updated 2026-06-15",
        href: "https://github.com/langgenius/dify",
        summary:
          "A production-oriented platform for building agentic workflows, combining orchestration, automation, and LLM application tooling.",
        tags: ["Agentic Workflows", "Automation", "LLM Apps"],
      },
      {
        type: "GitHub",
        title: "promptfoo/promptfoo",
        source: "GitHub",
        date: "Updated 2026-06-15",
        href: "https://github.com/promptfoo/promptfoo",
        summary:
          "A practical testing, red-teaming, and evaluation framework for prompts, RAG systems, and agents.",
        tags: ["Agent Evaluation", "Red Teaming", "RAG"],
      },
    ],
  },
];
