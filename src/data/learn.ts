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

export const lastUpdated = "2026-07-05";

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
        date: "Updated 2026-07-05",
        href: "https://github.com/stdlib-js/stdlib",
        summary:
          "A broad numerical and scientific standard library for JavaScript/TypeScript, useful for portable statistics and computational tooling.",
        tags: ["Numerical Computing", "Statistics", "TypeScript"],
      },
      {
        type: "Paper",
        title: "Almost Supermartingale Extensions of Olivier's Theorem",
        source: "arXiv",
        date: "2026-07-02",
        href: "https://arxiv.org/abs/2607.02489",
        summary:
          "Extends a classical convergence-rate theorem to almost supermartingales, with applications to stochastic iterative processes.",
        tags: ["Probability", "Stochastic Processes", "Optimization"],
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
        type: "GitHub",
        title: "spiceai/spiceai",
        source: "GitHub",
        date: "Updated 2026-07-05",
        href: "https://github.com/spiceai/spiceai",
        summary:
          "A Rust-based SQL, search, and LLM-inference engine for data-grounded AI applications, bridging retrieval, analytics, and serving.",
        tags: ["LLM Inference", "Data Systems", "Rust"],
      },
      {
        type: "Paper",
        title: "Program-as-Weights: A Programming Paradigm for Fuzzy Functions",
        source: "arXiv",
        date: "2026-07-02",
        href: "https://arxiv.org/abs/2607.02512",
        summary:
          "Compiles natural-language fuzzy-function specs into small local neural adapters, trading repeated large-model calls for reproducible lightweight execution.",
        tags: ["Neural Programs", "LLMs", "Efficient Inference"],
      },
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
        type: "GitHub",
        title: "unohee/OpenSwarm",
        source: "GitHub",
        date: "Updated 2026-07-05",
        href: "https://github.com/unohee/OpenSwarm",
        summary:
          "An autonomous AI development-team orchestrator with Discord control, Linear integration, and cognitive memory for studying practical multi-agent workflows.",
        tags: ["Multi-Agent", "Orchestration", "Memory"],
      },
      {
        type: "Paper",
        title: "What LLM Agents Say When No One Is Watching: Social Structure and Latent Objective Emergence in Multi-Agent Debates",
        source: "arXiv",
        date: "2026-07-02",
        href: "https://arxiv.org/abs/2607.02507",
        summary:
          "Uses public and off-the-record debate channels to probe how social context can produce latent objectives and divergent agent behavior.",
        tags: ["Multi-Agent Systems", "Evaluation", "Agent Behavior"],
      },
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
    ],
  },
];
