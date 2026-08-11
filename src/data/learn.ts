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

export const lastUpdated = "2026-08-11";

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
        title: "Dynamic e-closure for online hypotheses with any-time-valid evidence",
        source: "arXiv",
        date: "2026-08-10",
        href: "https://arxiv.org/abs/2608.09927",
        summary:
          "Builds a dynamic e-value closure framework for online hypotheses and arbitrary stopping times, useful for understanding modern sequential testing and FDR control.",
        tags: ["Statistics Theory", "Sequential Testing", "e-values"],
      },
      {
        type: "Paper",
        title: "Safe Start: Configuring Optimization Algorithms for Decision-Making under Extreme Risks",
        source: "arXiv",
        date: "2026-08-10",
        href: "https://arxiv.org/abs/2608.09872",
        summary:
          "Studies stochastic optimization when rare catastrophic events matter, introducing safe-start conditions for finite-time control in risk-sensitive decision problems.",
        tags: ["Optimization", "Risk", "Stochastic Methods"],
      },
      {
        type: "GitHub",
        title: "pymc-devs/pytensor",
        source: "GitHub",
        date: "Updated 2026-08-11",
        href: "https://github.com/pymc-devs/pytensor",
        summary:
          "A tensor-expression compiler used by PyMC, worth tracking for how probabilistic and statistical computation is optimized under the hood.",
        tags: ["Statistics", "Tensor Computing", "Python"],
      },
      {
        type: "GitHub",
        title: "stdlib-js/stdlib",
        source: "GitHub",
        date: "Updated 2026-08-11",
        href: "https://github.com/stdlib-js/stdlib",
        summary:
          "A broad numerical and statistical standard library for JavaScript and TypeScript, useful for seeing how mathematical computing primitives are engineered for production environments.",
        tags: ["Numerical Computing", "Statistics", "TypeScript"],
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
        title: "SR-OPSD: Self-Referenced On-Policy Self-Distillation",
        source: "arXiv",
        date: "2026-08-10",
        href: "https://arxiv.org/abs/2608.09745",
        summary:
          "Reframes on-policy self-distillation with adaptive token-level targets and Rényi projection geometry, relevant to stable LLM training and reasoning improvements.",
        tags: ["Self-Distillation", "LLM Training", "Optimization"],
      },
      {
        type: "Paper",
        title: "Test-Time Augmentation for LLMs: When Input Diversity Beats Output Diversity at Matched Compute",
        source: "arXiv",
        date: "2026-08-10",
        href: "https://arxiv.org/abs/2608.09351",
        summary:
          "Compares input-side diversity with output sampling for test-time scaling, a practical lens on how to spend inference compute more effectively.",
        tags: ["Test-Time Scaling", "LLMs", "Evaluation"],
      },
      {
        type: "GitHub",
        title: "flashinfer-ai/flashinfer",
        source: "GitHub",
        date: "Updated 2026-08-11",
        href: "https://github.com/flashinfer-ai/flashinfer",
        summary:
          "A kernel library for LLM serving, useful for studying practical performance work around attention, batching, and inference memory efficiency.",
        tags: ["LLM Serving", "Kernels", "Systems"],
      },
      {
        type: "GitHub",
        title: "sgl-project/sglang",
        source: "GitHub",
        date: "Updated 2026-08-11",
        href: "https://github.com/sgl-project/sglang",
        summary:
          "A high-performance serving framework for large language and multimodal models, worth following for practical inference, scheduling, and systems-level LLM work.",
        tags: ["LLM Serving", "Inference", "Systems"],
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
        title: "SHE: Trajectory-driven Safety Harness Evolution for LLM Agents",
        source: "arXiv",
        date: "2026-08-10",
        href: "https://arxiv.org/abs/2608.09885",
        summary:
          "Treats agent safety as an evolving harness problem across prompts, rule banks, memory, and tool policies, grounded in rollout trajectories and safety-utility validation.",
        tags: ["Agent Safety", "Tool Policy", "Memory"],
      },
      {
        type: "Paper",
        title: "Multi-Agent AI Safety as an Institutional Design Problem",
        source: "arXiv",
        date: "2026-08-10",
        href: "https://arxiv.org/abs/2608.09828",
        summary:
          "Frames multi-agent safety around delegation rules, authority state, guards, and fallback paths, making it a useful systems view of agent governance.",
        tags: ["Multi-Agent Systems", "Safety", "Governance"],
      },
      {
        type: "GitHub",
        title: "Ontos-AI/knowhere",
        source: "GitHub",
        date: "Updated 2026-08-11",
        href: "https://github.com/Ontos-AI/knowhere",
        summary:
          "A structured chunking tool for AI agents and RAG, useful for thinking about retrieval-ready context as part of agent infrastructure.",
        tags: ["RAG", "Agent Context", "Parsing"],
      },
      {
        type: "GitHub",
        title: "HKUDS/nanobot",
        source: "GitHub",
        date: "Updated 2026-08-11",
        href: "https://github.com/HKUDS/nanobot",
        summary:
          "A lightweight self-hosted personal agent framework with tools, memory, MCP, and multi-agent workflows to study compact agent runtime design.",
        tags: ["Agent Framework", "Memory", "MCP"],
      },
      {
        type: "GitHub",
        title: "elizaOS/eliza",
        source: "GitHub",
        date: "Updated 2026-08-11",
        href: "https://github.com/elizaOS/eliza",
        summary:
          "An open-source agentic operating system that is useful for studying how agent runtimes combine plugins, memory, model routing, and long-running workflows.",
        tags: ["Agent Runtime", "Plugins", "Memory"],
      },
    ],
  },
];
