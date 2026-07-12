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

export const lastUpdated = "2026-07-12";

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
        title: "Finding Simple Proofs for First-Order Optimization",
        source: "arXiv",
        date: "2026-07-09",
        href: "https://arxiv.org/abs/2607.08753",
        summary:
          "Turns dense optimization certificates into simpler, reusable proof structures using sparsification, learning heuristics, and semidefinite programming.",
        tags: ["Optimization", "Proof Discovery", "First-Order Methods"],
      },
      {
        type: "GitHub",
        title: "pymc-devs/pytensor",
        source: "GitHub",
        date: "Updated 2026-07-10",
        href: "https://github.com/pymc-devs/pytensor",
        summary:
          "A symbolic math and array-computation backend for PyMC with static graph optimization, gradients, and C/JAX/Numba compilation paths.",
        tags: ["Symbolic Math", "Statistics", "Numerical Computing"],
      },
      {
        type: "GitHub",
        title: "oscar-system/Oscar.jl",
        source: "GitHub",
        date: "Updated 2026-07-12",
        href: "https://github.com/oscar-system/Oscar.jl",
        summary:
          "A comprehensive Julia computer algebra system for algebra, geometry, and number theory, useful for seeing modern mathematical software design in practice.",
        tags: ["Computer Algebra", "Julia", "Mathematics"],
      },
      {
        type: "Paper",
        title: "Neural and Spectral Operator Surrogates on Gaussian Spaces",
        source: "arXiv",
        date: "2026-07-09",
        href: "https://arxiv.org/abs/2607.08492",
        summary:
          "Proves approximation-rate guarantees for spectral and neural operator surrogates on Gaussian Hilbert spaces, including gradient-sensitive error control.",
        tags: ["Numerical Analysis", "Operator Learning", "Gaussian Spaces"],
      },
      {
        type: "Paper",
        title:
          "Minimum Norm Interpolation via The Local Theory of Banach Spaces: The Role of Gaussianity",
        source: "arXiv",
        date: "2026-07-08",
        href: "https://arxiv.org/abs/2607.07694",
        summary:
          "Revisits overparameterized minimum-norm interpolation with tools from Banach-space local theory, clarifying when Gaussian structure drives benign behavior.",
        tags: ["Statistics", "Probability", "Interpolation"],
      },
      {
        type: "GitHub",
        title: "stdlib-js/stdlib",
        source: "GitHub",
        date: "Updated 2026-07-07",
        href: "https://github.com/stdlib-js/stdlib",
        summary:
          "A broad numerical and scientific computing standard library for JavaScript/TypeScript, useful for seeing production-grade implementations of statistical and numerical routines.",
        tags: ["Numerical Computing", "Statistics", "JavaScript"],
      },
      {
        type: "Paper",
        title: "Random Reshuffling Dominates Stochastic Gradient Descent",
        source: "arXiv",
        date: "2026-06-30",
        href: "https://arxiv.org/abs/2606.32005",
        summary:
          "A timely optimization-theory result explaining why random reshuffling can outperform classical SGD in the regimes used by modern ML practice.",
        tags: ["Optimization", "Stochastic Algorithms", "Machine Learning"],
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
        title: "SLORR: Simple and Efficient In-Training Low-Rank Regularization",
        source: "arXiv",
        date: "2026-07-09",
        href: "https://arxiv.org/abs/2607.08754",
        summary:
          "Introduces a stateless, architecture-preserving low-rank regularizer that makes vision and language models more compressible with small training overhead.",
        tags: ["Compression", "Low-Rank", "LLMs"],
      },
      {
        type: "GitHub",
        title: "flagos-ai/FlagGems",
        source: "GitHub",
        date: "Updated 2026-07-10",
        href: "https://github.com/flagos-ai/FlagGems",
        summary:
          "A Triton-based operator library for LLM training and inference that aims to provide PyTorch-compatible kernels across heterogeneous accelerators.",
        tags: ["PyTorch", "Triton", "LLM Systems"],
      },
      {
        type: "GitHub",
        title: "vllm-project/vllm",
        source: "GitHub",
        date: "Updated 2026-07-12",
        href: "https://github.com/vllm-project/vllm",
        summary:
          "A high-throughput LLM inference and serving engine that is worth tracking for practical deployment, batching, and memory-management ideas.",
        tags: ["LLM Systems", "Inference", "Serving"],
      },
      {
        type: "Paper",
        title: "Super Weights in LLMs and the Failure of Selective Training",
        source: "arXiv",
        date: "2026-07-09",
        href: "https://arxiv.org/abs/2607.08733",
        summary:
          "Shows that individually important LLM parameters are not necessarily good fine-tuning targets, reinforcing why structured updates like LoRA work.",
        tags: ["LLM Fine-Tuning", "LoRA", "Model Analysis"],
      },
      {
        type: "Paper",
        title: "Co-LMLM: Continuous-Query Limited Memory Language Models",
        source: "arXiv",
        date: "2026-07-08",
        href: "https://arxiv.org/abs/2607.07707",
        summary:
          "Explores language models that externalize factual knowledge to a continuously queried knowledge base instead of relying only on memorized weights.",
        tags: ["Language Models", "Memory", "Retrieval"],
      },
      {
        type: "GitHub",
        title: "huggingface/transformers",
        source: "GitHub",
        date: "Updated 2026-07-07",
        href: "https://github.com/huggingface/transformers",
        summary:
          "The core open-source model-definition framework for modern text, vision, audio, and multimodal ML systems, worth tracking as production model APIs evolve.",
        tags: ["Transformers", "Deep Learning", "Open Source"],
      },
      {
        type: "Paper",
        title: "Weak-to-Strong Generalization via Direct On-Policy Distillation",
        source: "arXiv",
        date: "2026-07-06",
        href: "https://arxiv.org/abs/2607.05394",
        summary:
          "Transfers RL gains from cheaper weak-model rollouts into stronger models, targeting the cost bottleneck of post-training at scale.",
        tags: ["RLVR", "Distillation", "LLMs"],
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
        title: "Workflow as Knowledge: Semantic Persistence for LLM-Mediated Workflows",
        source: "arXiv",
        date: "2026-07-09",
        href: "https://arxiv.org/abs/2607.08740",
        summary:
          "Frames agent workflows, inference records, context snapshots, and dependencies as persistent knowledge objects that can be inspected and resumed.",
        tags: ["Agent Workflows", "Persistence", "Tool Use"],
      },
      {
        type: "GitHub",
        title: "microsoft/agent-framework",
        source: "GitHub",
        date: "Updated 2026-07-10",
        href: "https://github.com/microsoft/agent-framework",
        summary:
          "A production-oriented Python/.NET framework for building and orchestrating agents and multi-agent workflows with observability and governance hooks.",
        tags: ["Agent Framework", "Multi-Agent", "Production"],
      },
      {
        type: "Paper",
        title: "DexVerse: A Modular Benchmark for Multi-Task, Multi-Embodiment Dexterous Manipulation",
        source: "arXiv",
        date: "2026-07-09",
        href: "https://arxiv.org/abs/2607.08751",
        summary:
          "Provides 100 dexterous manipulation tasks and multimodal demonstrations to stress-test tool use, embodiment transfer, and long-horizon visuomotor policies.",
        tags: ["Agent Benchmarks", "Robotics", "Tool Use"],
      },
      {
        type: "Paper",
        title: "SkillCenter: A Large-Scale Source-Grounded Skill Library for Autonomous AI Agents",
        source: "arXiv",
        date: "2026-07-08",
        href: "https://arxiv.org/abs/2607.07676",
        summary:
          "Builds a source-grounded skill library for autonomous agents, emphasizing executable, secure, and maintainable operational knowledge.",
        tags: ["Agent Skills", "Autonomous Agents", "Knowledge Libraries"],
      },
      {
        type: "Paper",
        title: "Beyond Attack-Success Rate: Action-Graded Severity Scale for Tool-Using AI Agents",
        source: "arXiv",
        date: "2026-07-08",
        href: "https://arxiv.org/abs/2607.07474",
        summary:
          "Argues that agent security evaluations should grade the severity of tool actions, not just binary jailbreak success, improving risk triage.",
        tags: ["Tool Use", "Agent Security", "Evaluation"],
      },
      {
        type: "GitHub",
        title: "zjunlp/LightMem",
        source: "GitHub",
        date: "Updated 2026-07-12",
        href: "https://github.com/zjunlp/LightMem",
        summary:
          "An ICLR 2026 memory-augmented generation project focused on lightweight, efficient long-term memory for agentic and RAG-style systems.",
        tags: ["Agent Memory", "RAG", "Long-Term Memory"],
      },
    ],
  },
];
