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

export const lastUpdated = "2026-06-15";

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
        title: "Lehner's operator norm formulas, semidefinite programming, and spiked matrix models",
        source: "arXiv",
        date: "2026-06-12",
        href: "https://arxiv.org/abs/2606.14687",
        summary:
          "Connects operator norm formulas, semidefinite programming, and random matrix ideas in a way that bridges probability and optimization.",
        tags: ["Probability", "Semidefinite Programming", "Random Matrices"],
      },
      {
        type: "Paper",
        title: "Upper tails for irregular graphs beyond the mean-field regime",
        source: "arXiv",
        date: "2026-06-12",
        href: "https://arxiv.org/abs/2606.14564",
        summary:
          "Studies sharp upper-tail behavior for subgraph counts in irregular random graph settings beyond classical mean-field assumptions.",
        tags: ["Probability", "Random Graphs", "Combinatorics"],
      },
      {
        type: "Paper",
        title: "Data-driven subsampling rates for diffusion parameter estimation of SDEs",
        source: "arXiv",
        date: "2026-06-11",
        href: "https://arxiv.org/abs/2606.13615",
        summary:
          "A statistical-probability approach to choosing subsampling scales for estimating diffusion parameters in SDE models.",
        tags: ["SDEs", "Statistics", "Parameter Estimation"],
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
        date: "Updated 2026-06-15",
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
        title: "Gaze Heads: How VLMs Look at What They Describe",
        source: "arXiv",
        date: "2026-06-12",
        href: "https://arxiv.org/abs/2606.14703",
        summary:
          "Analyzes attention heads that appear to align language generation with visual evidence inside vision-language models.",
        tags: ["Vision-Language Models", "Interpretability", "Attention"],
      },
      {
        type: "Paper",
        title: "ClinHallu: A Benchmark for Diagnosing Stage-Wise Hallucinations in Medical MLLM Reasoning",
        source: "arXiv",
        date: "2026-06-12",
        href: "https://arxiv.org/abs/2606.14697",
        summary:
          "Introduces a medical multimodal benchmark aimed at locating where hallucinations arise across reasoning stages.",
        tags: ["Multimodal Models", "Evaluation", "Medical AI"],
      },
      {
        type: "Paper",
        title: "Learning to Reason by Analogy via Retrieval-Augmented Reinforcement Fine-Tuning",
        source: "arXiv",
        date: "2026-06-11",
        href: "https://arxiv.org/abs/2606.13680",
        summary:
          "A retrieval-augmented reinforcement fine-tuning paper that targets analogy-based reasoning rather than simple semantic similarity.",
        tags: ["RAG", "Reinforcement Fine-Tuning", "Reasoning"],
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
        title: "pytorch/executorch",
        source: "GitHub",
        date: "Updated 2026-06-13",
        href: "https://github.com/pytorch/executorch",
        summary:
          "PyTorch's on-device AI runtime for mobile, embedded, and edge deployment.",
        tags: ["Edge AI", "Deployment", "PyTorch"],
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
        title: "AgentSpec: Understanding Embodied Agent Scaffolds Through Controlled Composition",
        source: "arXiv",
        date: "2026-06-12",
        href: "https://arxiv.org/abs/2606.14674",
        summary:
          "Dissects agent scaffolds by composing reasoning, memory, reflection, action execution, and learning components in controlled ways.",
        tags: ["Agent Scaffolds", "Embodied Agents", "Evaluation"],
      },
      {
        type: "Paper",
        title: "Towards Direct Latent-Space Synthesis for Parallel Branches in LLM-Agent Workflows",
        source: "arXiv",
        date: "2026-06-12",
        href: "https://arxiv.org/abs/2606.14672",
        summary:
          "Explores how agent workflows with parallel branches might move beyond purely sequential text-context execution.",
        tags: ["Agent Workflows", "Planning", "Latent Space"],
      },
      {
        type: "Paper",
        title: "EvoArena: Tracking Memory Evolution for Robust LLM Agents in Dynamic Environments",
        source: "arXiv",
        date: "2026-06-11",
        href: "https://arxiv.org/abs/2606.13681",
        summary:
          "A benchmark-style agent paper focused on memory evolution and robustness when environments change over time.",
        tags: ["Memory", "Benchmarks", "Dynamic Environments"],
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
