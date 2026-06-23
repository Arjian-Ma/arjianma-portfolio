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

export const lastUpdated = "2026-06-23";

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
        title: "Optimal Stopping for a Diffusion with Unobserved Bernoulli Drift",
        source: "arXiv",
        date: "2026-06-22",
        href: "https://arxiv.org/abs/2606.23648",
        summary:
          "Solves a partially observed Wiener-process stopping problem by filtering and lifting the free-boundary analysis into a two-dimensional state space.",
        tags: ["Probability", "Optimal Stopping", "Free Boundaries"],
      },
      {
        type: "Paper",
        title: "A posteriori error bounds for finite element approximations of time-dependent mean field games",
        source: "arXiv",
        date: "2026-06-22",
        href: "https://arxiv.org/abs/2606.23613",
        summary:
          "Builds reliable and efficient residual-based error estimators for stabilized finite element methods on coupled mean-field-game PDEs.",
        tags: ["Numerical Analysis", "Finite Elements", "Mean Field Games"],
      },
      {
        type: "Paper",
        title: "Open Problem: Is AdamW Effective Under Heavy-Tailed Noise?",
        source: "arXiv",
        date: "2026-06-22",
        href: "https://arxiv.org/abs/2606.23676",
        summary:
          "Connects optimization theory with LLM training by asking whether AdamW's second-moment memory remains reliable under heavy-tailed stochastic gradients.",
        tags: ["Optimization", "Heavy-Tailed Noise", "LLM Training"],
      },
      {
        type: "GitHub",
        title: "stdlib-js/stdlib",
        source: "GitHub",
        date: "Updated 2026-06-23",
        href: "https://github.com/stdlib-js/stdlib",
        summary:
          "A broad numerical computing library for JavaScript and TypeScript, useful as a practical computational reference.",
        tags: ["Numerical Computing", "Library"],
      },
      {
        type: "GitHub",
        title: "root-project/root",
        source: "GitHub",
        date: "Updated 2026-06-23",
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
        title: "Tapered Language Models",
        source: "arXiv",
        date: "2026-06-22",
        href: "https://arxiv.org/abs/2606.23670",
        summary:
          "Shows that reallocating MLP capacity toward earlier layers can improve language-model performance without increasing parameter or compute budgets.",
        tags: ["Language Models", "Architecture", "Efficiency"],
      },
      {
        type: "Paper",
        title: "Diffusion Models Adapt to Low-Dimensional Structure Under Flexible Coefficient Choices",
        source: "arXiv",
        date: "2026-06-22",
        href: "https://arxiv.org/abs/2606.23627",
        summary:
          "Proves that diffusion samplers can retain dimension-independent convergence under broad coefficient schedules when data has low-dimensional structure.",
        tags: ["Diffusion Models", "Theory", "Sampling"],
      },
      {
        type: "Paper",
        title: "Scheduling Thoughts: Learning the Order of Thought in Diffusion Language Models",
        source: "arXiv",
        date: "2026-06-22",
        href: "https://arxiv.org/abs/2606.23567",
        summary:
          "Learns token-unmasking schedules for diffusion language models, improving reasoning accuracy by optimizing the model's decoding order.",
        tags: ["Diffusion LLMs", "Reasoning", "Policy Optimization"],
      },
      {
        type: "GitHub",
        title: "vllm-project/vllm",
        source: "GitHub",
        date: "Updated 2026-06-23",
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
        title: "MAS-PromptBench: When Does Prompt Optimization Improve Multi-Agent LLM Systems?",
        source: "arXiv",
        date: "2026-06-22",
        href: "https://arxiv.org/abs/2606.23664",
        summary:
          "Benchmarks prompt optimization across multi-agent workflows, communication protocols, tasks, and team sizes to show when MAS prompting helps.",
        tags: ["Multi-Agent Systems", "Prompt Optimization", "Benchmarks"],
      },
      {
        type: "Paper",
        title: "SPIRAL: Learning to Search and Aggregate",
        source: "arXiv",
        date: "2026-06-22",
        href: "https://arxiv.org/abs/2606.23595",
        summary:
          "Trains language models to combine sequential reasoning, parallel search, and aggregation so inference-time compute scales more effectively.",
        tags: ["Reasoning", "Search", "Aggregation"],
      },
      {
        type: "Paper",
        title: "Causal Discovery in the Era of Agents",
        source: "arXiv",
        date: "2026-06-22",
        href: "https://arxiv.org/abs/2606.23608",
        summary:
          "Argues for agents as workflow assistants in causal discovery while keeping causal claims grounded in data, assumptions, algorithms, and experts.",
        tags: ["Agent Workflows", "Causal Discovery", "Scientific AI"],
      },
      {
        type: "GitHub",
        title: "omnigent-ai/omnigent",
        source: "GitHub",
        date: "Updated 2026-06-23",
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
