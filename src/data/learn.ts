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

export const lastUpdated = "2026-08-10";

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
        title: "A Profile-Separation Framework for Quantitative Convergence of No-U-Turn Samplers",
        source: "arXiv",
        date: "2026-08-06",
        href: "https://arxiv.org/abs/2608.06336",
        summary:
          "Gives quantitative convergence tools for No-U-Turn Samplers under log-concavity assumptions, useful for connecting probability, MCMC diagnostics, and statistical computation.",
        tags: ["Probability", "MCMC", "Statistics"],
      },
      {
        type: "Paper",
        title: "Sharp Tail Bounds Beyond Twice the Mean",
        source: "arXiv",
        date: "2026-08-06",
        href: "https://arxiv.org/abs/2608.06317",
        summary:
          "Develops a sharp probability bound for sums of independent non-negative variables, a compact result worth tracking for concentration and randomized analysis.",
        tags: ["Probability", "Tail Bounds", "Concentration"],
      },
      {
        type: "Paper",
        title: "The Benefits of an Integrated Approach for Stability-Constrained Power System Planning",
        source: "arXiv",
        date: "2026-08-06",
        href: "https://arxiv.org/abs/2608.06349",
        summary:
          "Models power-system planning with stability constraints inside the optimization loop, showing how applied control problems can benefit from integrated mathematical programming.",
        tags: ["Optimization", "Control", "Power Systems"],
      },
      {
        type: "GitHub",
        title: "stdlib-js/stdlib",
        source: "GitHub",
        date: "Updated 2026-08-08",
        href: "https://github.com/stdlib-js/stdlib",
        summary:
          "A broad numerical and statistical standard library for JavaScript and TypeScript, useful for seeing how mathematical computing primitives are engineered for production environments.",
        tags: ["Numerical Computing", "Statistics", "TypeScript"],
      },
      {
        type: "GitHub",
        title: "statsmodels/statsmodels",
        source: "GitHub",
        date: "Updated 2026-08-09",
        href: "https://github.com/statsmodels/statsmodels",
        summary:
          "A mature Python library for statistical modeling and econometrics, useful for connecting mathematical statistics with transparent, inspectable modeling tools.",
        tags: ["Statistics", "Econometrics", "Python"],
      },
      {
        type: "GitHub",
        title: "DoubleML/doubleml-for-py",
        source: "GitHub",
        date: "Updated 2026-08-10",
        href: "https://github.com/DoubleML/doubleml-for-py",
        summary:
          "A Python package for double machine learning and causal inference, useful for connecting modern statistical theory with reproducible econometric workflows.",
        tags: ["Statistics", "Causal Inference", "Python"],
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
        title: "Learning When to Trust via Selective Context Preference Optimization",
        source: "arXiv",
        date: "2026-08-06",
        href: "https://arxiv.org/abs/2608.06377",
        summary:
          "Introduces selective trust as a preference-optimization problem, a practical framing for models that must use helpful context without being derailed by misleading evidence.",
        tags: ["Preference Optimization", "Robustness", "Context"],
      },
      {
        type: "GitHub",
        title: "sgl-project/sglang",
        source: "GitHub",
        date: "Updated 2026-08-08",
        href: "https://github.com/sgl-project/sglang",
        summary:
          "A high-performance serving framework for large language and multimodal models, worth following for practical inference, scheduling, and systems-level LLM work.",
        tags: ["LLM Serving", "Inference", "Systems"],
      },
      {
        type: "Paper",
        title: "The Low Frequency Trap: Video Language Models Fail at Simple Event Bookkeeping",
        source: "arXiv",
        date: "2026-08-06",
        href: "https://arxiv.org/abs/2608.06361",
        summary:
          "Uses controlled video tasks to isolate event-counting failures, highlighting a simple but important evaluation gap for multimodal ML systems.",
        tags: ["Video Language Models", "Evaluation", "Multimodal ML"],
      },
      {
        type: "GitHub",
        title: "huggingface/transformers",
        source: "GitHub",
        date: "Updated 2026-08-10",
        href: "https://github.com/huggingface/transformers",
        summary:
          "The widely used model-definition framework for text, vision, audio, and multimodal systems, worth tracking for practical training and inference patterns across modern ML.",
        tags: ["Transformers", "Deep Learning", "Multimodal ML"],
      },
      {
        type: "GitHub",
        title: "vllm-project/vllm",
        source: "GitHub",
        date: "Updated 2026-08-08",
        href: "https://github.com/vllm-project/vllm",
        summary:
          "A high-throughput LLM serving engine to track for practical inference tradeoffs around batching, memory, and deployment performance.",
        tags: ["Inference", "LLM Serving", "Systems"],
      },
      {
        type: "GitHub",
        title: "hiyouga/LlamaFactory",
        source: "GitHub",
        date: "Updated 2026-08-09",
        href: "https://github.com/hiyouga/LlamaFactory",
        summary:
          "A widely used toolkit for efficient fine-tuning of LLMs and VLMs, worth following for practical training recipes, adapters, and experiment workflows.",
        tags: ["LLM Fine-Tuning", "VLM", "Training"],
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
        title: "The Bitter Lesson of Tool Calling",
        source: "arXiv",
        date: "2026-08-06",
        href: "https://arxiv.org/abs/2608.06370",
        summary:
          "Compares programmatic tool calling with native JSON tool calls under realistic conditions, directly probing how agents should compose and execute external tools.",
        tags: ["Tool Use", "Agents", "Evaluation"],
      },
      {
        type: "Paper",
        title: "AV-AIVAT: 74x Cheaper Agent Evaluation with Certified Anytime-Valid Stopping in Imperfect-Information Games",
        source: "arXiv",
        date: "2026-08-06",
        href: "https://arxiv.org/abs/2608.06362",
        summary:
          "Proposes anytime-valid stopping for comparing agents in noisy games, making evaluation cheaper while preserving statistical guarantees.",
        tags: ["Agent Evaluation", "Games", "Statistics"],
      },
      {
        type: "GitHub",
        title: "langgenius/dify",
        source: "GitHub",
        date: "Updated 2026-08-08",
        href: "https://github.com/langgenius/dify",
        summary:
          "A collaborative platform for building agentic workflows and RAG pipelines, useful for studying how production teams package tools, retrieval, and deployment around LLM apps.",
        tags: ["Agent Workflows", "RAG", "LLM Apps"],
      },
      {
        type: "GitHub",
        title: "TeleAI-UAGI/Awesome-Agent-Memory",
        source: "GitHub",
        date: "Updated 2026-08-07",
        href: "https://github.com/TeleAI-UAGI/Awesome-Agent-Memory",
        summary:
          "A curated map of memory systems, benchmarks, and papers for LLM and multimodal agents, useful for tracking the rapidly expanding agent-memory literature.",
        tags: ["Agent Memory", "Reading List", "RAG"],
      },
      {
        type: "GitHub",
        title: "infiniflow/ragflow",
        source: "GitHub",
        date: "Updated 2026-08-10",
        href: "https://github.com/infiniflow/ragflow",
        summary:
          "A high-activity RAG engine that now emphasizes agentic retrieval and context infrastructure, useful for studying how retrieval becomes an operational layer for LLM agents.",
        tags: ["RAG", "Agentic Retrieval", "Context Engineering"],
      },
      {
        type: "GitHub",
        title: "elizaOS/eliza",
        source: "GitHub",
        date: "Updated 2026-08-09",
        href: "https://github.com/elizaOS/eliza",
        summary:
          "An open-source agentic operating system that is useful for studying how agent runtimes combine plugins, memory, model routing, and long-running workflows.",
        tags: ["Agent Runtime", "Plugins", "Memory"],
      },
    ],
  },
];
