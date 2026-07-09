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

export const lastUpdated = "2026-07-09";

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
        type: "Paper",
        title:
          "An optimal control approach for neural network architecture adaptation with a posteriori error estimation",
        source: "arXiv",
        date: "2026-07-08",
        href: "https://arxiv.org/abs/2607.07637",
        summary:
          "Connects neural-network depth adaptation to continuous-time optimal control and error estimation, blending numerical analysis with learning theory.",
        tags: ["Optimal Control", "Numerical Analysis", "Neural Networks"],
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
        title:
          "An Analytical Newsvendor Framework for Risk-Averse Energy Storage Capacity Reservation under Non-Normal Uncertainty",
        source: "arXiv",
        date: "2026-07-06",
        href: "https://arxiv.org/abs/2607.05372",
        summary:
          "Builds an optimization framework for capacity-reservation decisions under asymmetric, heavy-tailed uncertainty using expected profit, CVaR, and regret objectives.",
        tags: ["Optimization", "Risk", "Energy Systems"],
      },
      {
        type: "Paper",
        title: "Well-invertible column subsets of sparse matrices are rare",
        source: "arXiv",
        date: "2026-07-06",
        href: "https://arxiv.org/abs/2607.05384",
        summary:
          "Studies when sparse random matrices fail as oblivious subspace injections, connecting probability with randomized linear algebra limits.",
        tags: ["Probability", "Random Matrices", "Linear Algebra"],
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
        title: "Edgeworth Expansions for Linear Rank Statistics -- Consolidated Version",
        source: "arXiv",
        date: "2026-07-06",
        href: "https://arxiv.org/abs/2607.05284",
        summary:
          "Gives first-order Edgeworth expansions for linear rank statistics with refined remainder control, a useful update for asymptotic statistics.",
        tags: ["Statistics", "Asymptotics", "Rank Statistics"],
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
        title: "Co-LMLM: Continuous-Query Limited Memory Language Models",
        source: "arXiv",
        date: "2026-07-08",
        href: "https://arxiv.org/abs/2607.07707",
        summary:
          "Explores language models that externalize factual knowledge to a continuously queried knowledge base instead of relying only on memorized weights.",
        tags: ["Language Models", "Memory", "Retrieval"],
      },
      {
        type: "Paper",
        title: "The Key to Going Linear: Analysis-Driven Transformer Linearization",
        source: "arXiv",
        date: "2026-07-08",
        href: "https://arxiv.org/abs/2607.07706",
        summary:
          "Dissects which components matter when converting causal attention toward linear-time inference, a practical bottleneck for long-context models.",
        tags: ["Transformers", "Long Context", "Efficient Inference"],
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
      {
        type: "Paper",
        title: "TabPack: Efficient Hyperparameter Ensembles for Tabular Deep Learning",
        source: "arXiv",
        date: "2026-07-06",
        href: "https://arxiv.org/abs/2607.05380",
        summary:
          "Trains many tabular MLP configurations efficiently in one run, reducing the tuning burden while preserving ensemble-style robustness.",
        tags: ["Tabular Learning", "Ensembles", "Hyperparameters"],
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
        title: "agentscope-ai/agentscope",
        source: "GitHub",
        date: "Updated 2026-07-07",
        href: "https://github.com/agentscope-ai/agentscope",
        summary:
          "A high-activity agent framework focused on making multi-agent applications observable, understandable, and easier to operate.",
        tags: ["Agent Framework", "Multi-Agent", "Observability"],
      },
      {
        type: "Paper",
        title: "CompactionRL: Reinforcement Learning with Context Compaction for Long-Horizon Agents",
        source: "arXiv",
        date: "2026-07-06",
        href: "https://arxiv.org/abs/2607.05378",
        summary:
          "Trains long-horizon agents to execute tasks while compacting prior interaction context, directly addressing finite context windows.",
        tags: ["Long-Horizon Agents", "Context", "Reinforcement Learning"],
      },
      {
        type: "Paper",
        title: "AgentGym2: Benchmarking Large Language Model Agents in De-Idealized Real-World Environments",
        source: "arXiv",
        date: "2026-07-06",
        href: "https://arxiv.org/abs/2607.05174",
        summary:
          "Pushes agent evaluation beyond clean toy setups toward noisy, underspecified environments where agents must explore and recover missing tool information.",
        tags: ["Agent Benchmarks", "Evaluation", "Real-World Tasks"],
      },
      {
        type: "Paper",
        title: "Untrusted Content Masking for Web Agents with Security Guarantees",
        source: "arXiv",
        date: "2026-07-06",
        href: "https://arxiv.org/abs/2607.05277",
        summary:
          "Studies how to restore trusted/untrusted boundaries for web agents, a core issue for prompt-injection-resistant tool use.",
        tags: ["Web Agents", "Security", "Prompt Injection"],
      },

    ],
  },
];
