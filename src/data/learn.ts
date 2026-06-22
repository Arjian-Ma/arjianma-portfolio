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

export const lastUpdated = "2026-06-22";

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
        title: "Stability of Khintchine-type inequalities via log-monotonicity",
        source: "arXiv",
        date: "2026-06-17",
        href: "https://arxiv.org/abs/2606.19313",
        summary:
          "Studies sharp comparison and stability behavior for weighted sums of independent symmetric random variables through log-monotonicity.",
        tags: ["Probability", "Inequalities", "Stability"],
      },
      {
        type: "Paper",
        title: "On Second-Order Methods for Bilevel Optimization",
        source: "arXiv",
        date: "2026-06-18",
        href: "https://arxiv.org/abs/2606.20534",
        summary:
          "Studies second-order stationarity for bilevel optimization, a mathematical foundation behind many modern ML and engineering design problems.",
        tags: ["Optimization", "Bilevel Optimization", "Second-Order Methods"],
      },
      {
        type: "Paper",
        title: "Projected Stochastic Gradient Descent with Decision Dependent Distributions: Extended Version",
        source: "arXiv",
        date: "2026-06-17",
        href: "https://arxiv.org/abs/2606.19284",
        summary:
          "Develops online feedback optimization for constrained stochastic systems where the data distribution shifts with the chosen decision.",
        tags: ["Optimization", "Stochastic Gradient", "Feedback Systems"],
      },
      {
        type: "GitHub",
        title: "stdlib-js/stdlib",
        source: "GitHub",
        date: "Updated 2026-06-22",
        href: "https://github.com/stdlib-js/stdlib",
        summary:
          "A broad numerical computing library for JavaScript and TypeScript, useful as a practical computational reference.",
        tags: ["Numerical Computing", "Library"],
      },
      {
        type: "GitHub",
        title: "root-project/root",
        source: "GitHub",
        date: "Updated 2026-06-22",
        href: "https://github.com/root-project/root",
        summary:
          "A mature scientific data analysis framework for storing, analyzing, and visualizing large experimental datasets.",
        tags: ["Scientific Computing", "Data Analysis", "C++"],
      },
      {
        type: "Paper",
        title: "Agentic Symbolic Search: Characterizing PDEs Beyond Hand-crafted Expressions, Meshes, and Neural Networks",
        source: "arXiv",
        date: "2026-06-18",
        href: "https://arxiv.org/abs/2606.20467",
        summary:
          "Frames PDE understanding as a symbolic search problem, connecting numerical analysis, scientific ML, and human-readable mathematical structure.",
        tags: ["Numerical Analysis", "PDEs", "Symbolic Search"],
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
        title: "Rethinking Reward Supervision: Rubric-Conditioned Self-Distillation",
        source: "arXiv",
        date: "2026-06-17",
        href: "https://arxiv.org/abs/2606.19327",
        summary:
          "Explores reward supervision for reasoning models by conditioning self-distillation on rubrics rather than relying only on expensive chain-of-thought labels.",
        tags: ["Reasoning Models", "Post-Training", "Reward Models"],
      },
      {
        type: "Paper",
        title: "Explaining Attention with Program Synthesis",
        source: "arXiv",
        date: "2026-06-17",
        href: "https://arxiv.org/abs/2606.19317",
        summary:
          "Uses program synthesis to approximate attention behavior with symbolic descriptions that are easier to inspect and reason about.",
        tags: ["Interpretability", "Attention", "Program Synthesis"],
      },
      {
        type: "Paper",
        title: "How Transparent is DiffusionGemma?",
        source: "arXiv",
        date: "2026-06-18",
        href: "https://arxiv.org/abs/2606.20560",
        summary:
          "Examines whether diffusion-style LLM computation changes how visible and interpretable model reasoning remains.",
        tags: ["Interpretability", "Diffusion LLMs", "Reasoning"],
      },
      {
        type: "GitHub",
        title: "vllm-project/vllm",
        source: "GitHub",
        date: "Updated 2026-06-22",
        href: "https://github.com/vllm-project/vllm",
        summary:
          "A high-throughput inference and serving engine for LLMs, useful for understanding practical deployment bottlenecks.",
        tags: ["LLM Serving", "Inference", "Systems"],
      },
      {
        type: "Paper",
        title: "The Token Is a Group Element: On Lie-Algebra Attention over Matrix Lie Groups",
        source: "arXiv",
        date: "2026-06-18",
        href: "https://arxiv.org/abs/2606.20547",
        summary:
          "Explores attention over matrix Lie groups, a geometric perspective on representation learning for vision, robotics, and structured tokens.",
        tags: ["Geometric Deep Learning", "Attention", "Lie Groups"],
      },
      {
        type: "Paper",
        title: "Optimal Deterministic Multicalibration and Omniprediction",
        source: "arXiv",
        date: "2026-06-18",
        href: "https://arxiv.org/abs/2606.20557",
        summary:
          "Improves the theoretical toolkit around calibration and omniprediction, connecting statistical learning guarantees with reliable downstream decisions.",
        tags: ["Calibration", "Statistical Learning", "Omniprediction"],
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
        title: "Data Intelligence Agents: Interpreting, Modeling, and Querying Enterprise Data via Autonomous Coding Agents",
        source: "arXiv",
        date: "2026-06-17",
        href: "https://arxiv.org/abs/2606.19319",
        summary:
          "Presents autonomous coding agents for discovering, modeling, and querying enterprise data, a practical direction for agentic data work.",
        tags: ["Autonomous Agents", "Data Systems", "Coding Agents"],
      },
      {
        type: "Paper",
        title: "LedgerAgent: Structured State for Policy-Adherent Tool-Calling Agents",
        source: "arXiv",
        date: "2026-06-18",
        href: "https://arxiv.org/abs/2606.20529",
        summary:
          "Introduces structured task-state tracking for tool-calling agents that must follow domain policies across multi-turn workflows.",
        tags: ["Tool Use", "State Management", "Policy Adherence"],
      },
      {
        type: "Paper",
        title: "Efficient and Sound Probabilistic Verification for AI Agents",
        source: "arXiv",
        date: "2026-06-18",
        href: "https://arxiv.org/abs/2606.20510",
        summary:
          "Develops probabilistic runtime verification for agents, extending formal policy monitoring beyond deterministic tool-use assumptions.",
        tags: ["Agent Verification", "Runtime Monitoring", "Safety"],
      },
      {
        type: "GitHub",
        title: "omnigent-ai/omnigent",
        source: "GitHub",
        date: "Updated 2026-06-22",
        href: "https://github.com/omnigent-ai/omnigent",
        summary:
          "An open-source meta-harness for orchestrating coding agents such as Claude Code, Codex, and Cursor while adding policy and telemetry layers.",
        tags: ["Agent Framework", "Coding Agents", "Orchestration"],
      },
      {
        type: "GitHub",
        title: "elizaOS/eliza",
        source: "GitHub",
        date: "Updated 2026-06-21",
        href: "https://github.com/elizaOS/eliza",
        summary:
          "An open-source agentic operating system and framework for building long-running AI agents and workflows.",
        tags: ["Agent Framework", "Workflows", "LLM Agents"],
      },
      {
        type: "Paper",
        title: "Contagion Networks: Evaluator Bias Propagation in Multi-Agent LLM Systems",
        source: "arXiv",
        date: "2026-06-18",
        href: "https://arxiv.org/abs/2606.20493",
        summary:
          "Models how evaluation biases can spread through multi-agent LLM systems, which is useful for designing safer agent evaluation loops.",
        tags: ["Multi-Agent Systems", "Evaluation", "Bias"],
      },
    ],
  },
];
