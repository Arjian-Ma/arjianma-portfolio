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

export const lastUpdated = "2026-07-02";

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
        title: "Random Reshuffling Dominates Stochastic Gradient Descent",
        source: "arXiv",
        date: "2026-06-30",
        href: "https://arxiv.org/abs/2606.32005",
        summary:
          "A timely optimization-theory result explaining why random reshuffling can outperform classical SGD in the regimes used by modern ML practice.",
        tags: ["Optimization", "Stochastic Algorithms", "Machine Learning"],
      },
      {
        type: "Paper",
        title: "Analysis of a maximum-entropy based estimator for dynamic random graph models",
        source: "arXiv",
        date: "2026-06-30",
        href: "https://arxiv.org/abs/2606.32013",
        summary:
          "Studies estimation for evolving random graphs through a maximum-entropy lens, connecting probability, statistics, and network modeling.",
        tags: ["Probability", "Statistics", "Dynamic Graphs"],
      },
      {
        type: "GitHub",
        title: "root-project/root",
        source: "GitHub",
        date: "Updated 2026-07-01",
        href: "https://github.com/root-project/root",
        summary:
          "A mature scientific data-analysis, storage, and visualization platform whose active development makes it useful for computational science workflows.",
        tags: ["Scientific Computing", "Data Analysis", "Visualization"],
      },
      {
        type: "Paper",
        title: "GAIA: Geometry-Adaptive Operator Learning for Forward and Inverse Problems",
        source: "arXiv",
        date: "2026-07-01",
        href: "https://arxiv.org/abs/2607.01128",
        summary:
          "Extends neural operator learning to forward, boundary-value, and inverse PDE problems on changing geometries through geometry-conditioned integral layers.",
        tags: ["Numerical Analysis", "Operator Learning", "PDEs"],
      },
      {
        type: "Paper",
        title: "Characterizing and Identifying Separable Graphical Models",
        source: "arXiv",
        date: "2026-07-01",
        href: "https://arxiv.org/abs/2607.01057",
        summary:
          "Develops structure and identification results for mixed graphical models that encode feedback, latent variables, and selection effects.",
        tags: ["Statistics", "Graphical Models", "Independence"],
      },
      {
        type: "GitHub",
        title: "stdlib-js/stdlib",
        source: "GitHub",
        date: "Updated 2026-07-01",
        href: "https://github.com/stdlib-js/stdlib",
        summary:
          "A broad numerical computing library for JavaScript and TypeScript, useful as a practical computational reference.",
        tags: ["Numerical Computing", "Library", "TypeScript"],
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
        title: "Introspective Coupling: Self-Explanation Training Tracks Behavioral Change Despite Fixed Supervision",
        source: "arXiv",
        date: "2026-06-30",
        href: "https://arxiv.org/abs/2606.32038",
        summary:
          "Investigates when self-explanation training produces faithful introspection instead of shallow rationale imitation, which is important for trustworthy model behavior.",
        tags: ["Interpretability", "Self-Explanation", "LLMs"],
      },
      {
        type: "Paper",
        title: "Reinforcement Learning with Metacognitive Feedback Elicits Faithful Uncertainty Expression in LLMs",
        source: "arXiv",
        date: "2026-06-30",
        href: "https://arxiv.org/abs/2606.32032",
        summary:
          "Uses metacognitive feedback to make LLM uncertainty expression more faithful, a useful direction for calibration and reliability.",
        tags: ["Reinforcement Learning", "Calibration", "LLMs"],
      },
      {
        type: "GitHub",
        title: "LMCache/LMCache",
        source: "GitHub",
        date: "Updated 2026-07-01",
        href: "https://github.com/LMCache/LMCache",
        summary:
          "An actively developed KV-cache layer for accelerating LLM serving, directly relevant to practical inference systems.",
        tags: ["LLM Serving", "KV Cache", "Systems"],
      },
      {
        type: "Paper",
        title: "Is One Layer Enough? Training A Single Transformer Layer Can Match Full-Parameter RL Training",
        source: "arXiv",
        date: "2026-07-01",
        href: "https://arxiv.org/abs/2607.01232",
        summary:
          "A layer-wise RL post-training study showing that carefully selected single-layer updates can recover much of full-parameter LLM adaptation.",
        tags: ["LLM Post-Training", "Reinforcement Learning", "Efficiency"],
      },
      {
        type: "Paper",
        title: "Language-Critique Imitation Learning from Suboptimal Demonstrations",
        source: "arXiv",
        date: "2026-07-01",
        href: "https://arxiv.org/abs/2607.01225",
        summary:
          "Uses natural-language critiques as richer supervision than scalar confidence scores when learning from imperfect demonstrations.",
        tags: ["Imitation Learning", "Language Feedback", "Policy Learning"],
      },
      {
        type: "GitHub",
        title: "vllm-project/vllm",
        source: "GitHub",
        date: "Updated 2026-06-30",
        href: "https://github.com/vllm-project/vllm",
        summary:
          "A high-throughput LLM inference and serving engine that is central to practical deployment and systems-level ML work.",
        tags: ["LLM Serving", "Inference", "PyTorch"],
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
        title: "QVal: Cheaply Evaluating Dense Supervision Signals for Long-Horizon LLM Agents",
        source: "arXiv",
        date: "2026-06-30",
        href: "https://arxiv.org/abs/2606.32034",
        summary:
          "Targets the evaluation problem behind dense intermediate rewards for long-horizon agents, where outcome-only signals are too sparse.",
        tags: ["Agent Evaluation", "Dense Rewards", "Long-Horizon Tasks"],
      },
      {
        type: "Paper",
        title: "Generative Skill Composition for LLM Agents",
        source: "arXiv",
        date: "2026-06-30",
        href: "https://arxiv.org/abs/2606.32025",
        summary:
          "Frames skill selection as a generative composition problem, matching the way reusable agent skill libraries are likely to grow.",
        tags: ["Skills", "Agent Planning", "Tool Use"],
      },
      {
        type: "GitHub",
        title: "infiniflow/ragflow",
        source: "GitHub",
        date: "Updated 2026-07-01",
        href: "https://github.com/infiniflow/ragflow",
        summary:
          "A widely used RAG engine with agent capabilities, useful for studying the retrieval and context layer behind production agents.",
        tags: ["RAG", "Agent Infrastructure", "Retrieval"],
      },
      {
        type: "Paper",
        title: "Can Agents Generalize to the Open World? Unveiling the Fragility of Static Training in Tool Use",
        source: "arXiv",
        date: "2026-07-01",
        href: "https://arxiv.org/abs/2607.01084",
        summary:
          "Formalizes open-world tool-use shifts and shows why static agent training can be brittle when queries, tools, observations, or domains change.",
        tags: ["Tool Use", "Generalization", "Agent Evaluation"],
      },
      {
        type: "Paper",
        title: "Skills Are Not Islands: Measuring Dependency and Risk in Agent Skill Supply Chains",
        source: "arXiv",
        date: "2026-07-01",
        href: "https://arxiv.org/abs/2607.01136",
        summary:
          "Treats reusable agent skills as dependency-bearing artifacts and adapts SBOM-style analysis to track provenance, versions, and risk.",
        tags: ["Agent Skills", "Supply Chain", "Safety"],
      },
      {
        type: "GitHub",
        title: "omnigent-ai/omnigent",
        source: "GitHub",
        date: "Updated 2026-07-01",
        href: "https://github.com/omnigent-ai/omnigent",
        summary:
          "A meta-harness for orchestrating coding and research agents while swapping harnesses, enforcing policies, and sandboxing execution.",
        tags: ["Agent Framework", "Orchestration", "Sandboxing"],
      },
    ],
  },
];
