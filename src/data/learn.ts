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

export const lastUpdated = "2026-08-23";

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
        title: "Information on trajectories: martingales and random times",
        source: "arXiv",
        date: "2026-08-20",
        href: "https://arxiv.org/abs/2608.20337",
        summary:
          "Frames martingale concentration as information flow on path space, tying probability, PAC-Bayes-style bounds, and stopping-time reasoning together.",
        tags: ["Probability", "Martingales", "Information Theory"],
      },
      {
        type: "Paper",
        title: "Large Sample Properties of Higher Order Markov Models",
        source: "arXiv",
        date: "2026-08-20",
        href: "https://arxiv.org/abs/2608.20321",
        summary:
          "Studies asymptotics for growing-order Markov chains, useful for understanding when richer sequential statistical models remain well behaved.",
        tags: ["Statistics", "Markov Chains", "Asymptotics"],
      },
      {
        type: "Paper",
        title: "Robustness of random-walk Metropolis for steep potentials",
        source: "arXiv",
        date: "2026-08-20",
        href: "https://arxiv.org/abs/2608.20279",
        summary:
          "Revisits random-walk Metropolis under light-tailed targets, a practical MCMC question where geometry and sampling performance meet.",
        tags: ["MCMC", "Probability", "Statistics"],
      },
      {
        type: "Paper",
        title: "Dynamic Portfolio Optimization under CVaR Constraints",
        source: "arXiv",
        date: "2026-08-20",
        href: "https://arxiv.org/abs/2608.20179",
        summary:
          "Develops continuous-time portfolio optimization with explicit CVaR risk constraints, linking stochastic control with applied risk management.",
        tags: ["Optimal Control", "Risk", "Finance"],
      },
      {
        type: "GitHub",
        title: "JuliaSymbolics/Symbolics.jl",
        source: "GitHub",
        date: "Updated 2026-08-22",
        href: "https://github.com/JuliaSymbolics/Symbolics.jl",
        summary:
          "A Julia symbolic-programming system for numerical software, worth following for the interface between exact math and high-performance computing.",
        tags: ["Symbolic Computing", "Numerical Computing", "Julia"],
      },
      {
        type: "GitHub",
        title: "stdlib-js/stdlib",
        source: "GitHub",
        date: "Updated 2026-08-23",
        href: "https://github.com/stdlib-js/stdlib",
        summary:
          "A broad numerical library for JavaScript and TypeScript, useful for seeing how scientific-computing primitives can be packaged for the web platform.",
        tags: ["Numerical Computing", "JavaScript", "Scientific Computing"],
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
        title: "$TCP_α$: Margin-Controlled Confidence estimation for reliable Music Information Retrieval",
        source: "arXiv",
        date: "2026-08-20",
        href: "https://arxiv.org/abs/2608.20326",
        summary:
          "Explores post-hoc confidence estimation for deep audio models, a compact example of calibration work that matters for trustworthy ML products.",
        tags: ["Calibration", "Reliability", "Audio ML"],
      },
      {
        type: "Paper",
        title: "Transfer Learning in Nonparametric Regression with Deep ReLU Networks",
        source: "arXiv",
        date: "2026-08-20",
        href: "https://arxiv.org/abs/2608.20255",
        summary:
          "Gives theory for transfer learning with deep ReLU regressors, clarifying when shared structure across groups can improve sample efficiency.",
        tags: ["Transfer Learning", "Theory", "Deep ReLU Networks"],
      },
      {
        type: "Paper",
        title: "Exact Algebraic Computation of Learning Coefficients for Two-Dimensional Singular Models",
        source: "arXiv",
        date: "2026-08-20",
        href: "https://arxiv.org/abs/2608.20183",
        summary:
          "Connects algebraic geometry with singular learning theory, helping explain why familiar information criteria can fail for modern models.",
        tags: ["Learning Theory", "Singular Models", "Algebra"],
      },
      {
        type: "Paper",
        title: "Discrete Diffusion Inference-Time Control with Nested Sequential Monte Carlo",
        source: "arXiv",
        date: "2026-08-20",
        href: "https://arxiv.org/abs/2608.20123",
        summary:
          "Studies reward-guided control for discrete diffusion language models without retraining, directly relevant to controllable generation systems.",
        tags: ["Diffusion Models", "Inference-Time Control", "SMC"],
      },
      {
        type: "GitHub",
        title: "xorbitsai/inference",
        source: "GitHub",
        date: "Updated 2026-08-22",
        href: "https://github.com/xorbitsai/inference",
        summary:
          "Xinference provides a unified API for running open-source LLM, speech, and multimodal models across local and cloud setups.",
        tags: ["LLM Serving", "Multimodal", "Deployment"],
      },
      {
        type: "GitHub",
        title: "deepspeedai/DeepSpeed",
        source: "GitHub",
        date: "Updated 2026-08-23",
        href: "https://github.com/deepspeedai/DeepSpeed",
        summary:
          "A widely used optimization library for distributed deep-learning training and inference, useful for understanding how large models are made efficient in practice.",
        tags: ["Distributed Training", "Optimization", "Deep Learning"],
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
        title: "AI4AI-Bench: Benchmarking LLM Agents in Algorithmic Design for Recursive Self-Improvement",
        source: "arXiv",
        date: "2026-08-20",
        href: "https://arxiv.org/abs/2608.20318",
        summary:
          "Benchmarks whether agents can improve training algorithms themselves, making recursive self-improvement more concrete and testable.",
        tags: ["Agent Benchmarks", "Recursive Self-Improvement", "Evaluation"],
      },
      {
        type: "Paper",
        title: "Inducing Task Models from Computer-Use Traces",
        source: "arXiv",
        date: "2026-08-20",
        href: "https://arxiv.org/abs/2608.20319",
        summary:
          "Turns recorded computer-use traces into symbolic task models, a useful direction for making GUI agents more auditable and reusable.",
        tags: ["Computer-Use Agents", "Task Modeling", "Auditability"],
      },
      {
        type: "Paper",
        title: "MidTool: Mid-training Data Synthesis for Agentic Tool Use",
        source: "arXiv",
        date: "2026-08-20",
        href: "https://arxiv.org/abs/2608.20314",
        summary:
          "Focuses on mid-training data for tool-use behavior, highlighting how agentic capabilities can be shaped before post-training.",
        tags: ["Tool Use", "Mid-Training", "Data Synthesis"],
      },
      {
        type: "Paper",
        title: "Break It Down, Pass It On: Cross-Task Skill Transfer in LLM Agents",
        source: "arXiv",
        date: "2026-08-20",
        href: "https://arxiv.org/abs/2608.20274",
        summary:
          "Tests when agent-induced skills transfer across tasks and when they backfire, a practical reliability issue for memory-based agents.",
        tags: ["Skill Transfer", "Agent Memory", "Reliability"],
      },
      {
        type: "GitHub",
        title: "openai/openai-agents-python",
        source: "GitHub",
        date: "Updated 2026-08-22",
        href: "https://github.com/openai/openai-agents-python",
        summary:
          "A lightweight Python framework for multi-agent workflows, useful for studying practical tool orchestration and handoff patterns.",
        tags: ["Agent Framework", "Multi-Agent", "Python"],
      },
      {
        type: "GitHub",
        title: "strukto-ai/mirage",
        source: "GitHub",
        date: "Updated 2026-08-23",
        href: "https://github.com/strukto-ai/mirage",
        summary:
          "A virtual filesystem layer for AI agents, relevant to the emerging infrastructure pattern of giving agents safer, structured access to project context.",
        tags: ["Agent Infrastructure", "Virtual Filesystem", "Context"],
      },
    ],
  },
];
