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

export const lastUpdated = "2026-06-18";

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
        title: "On two overlooked stick-breaking constructions of the normalized inverse Gaussian process",
        source: "arXiv",
        date: "2026-06-17",
        href: "https://arxiv.org/abs/2606.19306",
        summary:
          "Revisits Bayesian nonparametric stick-breaking views of normalized inverse Gaussian processes, useful for probabilistic modeling intuition.",
        tags: ["Probability", "Bayesian Nonparametrics", "Statistics"],
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
        date: "Updated 2026-06-18",
        href: "https://github.com/stdlib-js/stdlib",
        summary:
          "A broad numerical computing library for JavaScript and TypeScript, useful as a practical computational reference.",
        tags: ["Numerical Computing", "Library"],
      },
      {
        type: "GitHub",
        title: "root-project/root",
        source: "GitHub",
        date: "Updated 2026-06-18",
        href: "https://github.com/root-project/root",
        summary:
          "A mature scientific data analysis framework for storing, analyzing, and visualizing large experimental datasets.",
        tags: ["Scientific Computing", "Data Analysis", "C++"],
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
        title: "Diffusion-Proof: Recipe for Formal Theorem Proving Beyond Auto-Regressive Generation",
        source: "arXiv",
        date: "2026-06-17",
        href: "https://arxiv.org/abs/2606.19315",
        summary:
          "Investigates diffusion-style generation as an alternative path for improving formal mathematical reasoning and theorem proving.",
        tags: ["Theorem Proving", "Diffusion Models", "Reasoning"],
      },
      {
        type: "GitHub",
        title: "vllm-project/vllm",
        source: "GitHub",
        date: "Updated 2026-06-18",
        href: "https://github.com/vllm-project/vllm",
        summary:
          "A high-throughput inference and serving engine for LLMs, useful for understanding practical deployment bottlenecks.",
        tags: ["LLM Serving", "Inference", "Systems"],
      },
      {
        type: "GitHub",
        title: "modular/modular",
        source: "GitHub",
        date: "Updated 2026-06-18",
        href: "https://github.com/modular/modular",
        summary:
          "The open Modular platform around MAX and Mojo, relevant for learning about high-performance AI infrastructure.",
        tags: ["AI Infrastructure", "Performance", "Mojo"],
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
        title: "Zero-Shot Long-Horizon Dexterous Manipulation via Multi-View 3D-Grounded VLM Reasoning",
        source: "arXiv",
        date: "2026-06-17",
        href: "https://arxiv.org/abs/2606.19340",
        summary:
          "Uses multi-view 3D-grounded VLM reasoning to turn language instructions into executable long-horizon manipulation plans.",
        tags: ["VLM Agents", "Robotics", "Planning"],
      },
      {
        type: "Paper",
        title: "Beyond the Current Observation: Evaluating Multimodal Large Language Models in Controllable Non-Markov Games",
        source: "arXiv",
        date: "2026-06-17",
        href: "https://arxiv.org/abs/2606.19338",
        summary:
          "Evaluates multimodal models as closed-loop policies in settings that require hidden-state memory instead of only the current observation.",
        tags: ["Agent Evaluation", "Memory", "Multimodal Models"],
      },
      {
        type: "GitHub",
        title: "chopratejas/headroom",
        source: "GitHub",
        date: "Updated 2026-06-18",
        href: "https://github.com/chopratejas/headroom",
        summary:
          "Compresses tool outputs, logs, files, and RAG chunks before they reach an LLM, targeting cheaper and cleaner agent context.",
        tags: ["Context Compression", "Tool Use", "MCP"],
      },
      {
        type: "GitHub",
        title: "elizaOS/eliza",
        source: "GitHub",
        date: "Updated 2026-06-18",
        href: "https://github.com/elizaOS/eliza",
        summary:
          "An open-source agentic operating system and framework for building long-running AI agents and workflows.",
        tags: ["Agent Framework", "Workflows", "LLM Agents"],
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
