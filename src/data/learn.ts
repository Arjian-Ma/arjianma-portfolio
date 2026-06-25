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

export const lastUpdated = "2026-06-25";

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
        title: "On the entropic convergence for piecewise deterministic samplers: speedup and obstruction",
        source: "arXiv",
        date: "2026-06-24",
        href: "https://arxiv.org/abs/2606.26086",
        summary:
          "Studies entropy convergence for RHMC, Bouncy Particle, and Zig-Zag samplers, clarifying when ballistic speedups over overdamped Langevin dynamics appear or fail.",
        tags: ["Probability", "Sampling", "Hypocoercivity"],
      },
      {
        type: "Paper",
        title: "Toward a Systematic Understanding and Interactive Search of Lyapunov-Style Proofs in Optimization",
        source: "arXiv",
        date: "2026-06-24",
        href: "https://arxiv.org/abs/2606.26077",
        summary:
          "Turns tight computer-assisted convergence analyses into Lyapunov-style proofs, making first-order optimization arguments easier to inspect and search.",
        tags: ["Optimization", "Lyapunov Proofs", "Computer-Assisted Math"],
      },
      {
        type: "Paper",
        title: "Bayesian Nonparametric Privacy-Preserving Synthetic Data Generation: I. Discrete Data",
        source: "arXiv",
        date: "2026-06-24",
        href: "https://arxiv.org/abs/2606.26073",
        summary:
          "Uses Pitman-Yor process posterior predictives to generate discrete synthetic data with a direct privacy-utility perspective.",
        tags: ["Statistics", "Bayesian Nonparametrics", "Synthetic Data"],
      },
      {
        type: "GitHub",
        title: "stdlib-js/stdlib",
        source: "GitHub",
        date: "Updated 2026-06-25",
        href: "https://github.com/stdlib-js/stdlib",
        summary:
          "A broad numerical computing library for JavaScript and TypeScript, useful as a practical computational reference.",
        tags: ["Numerical Computing", "Library"],
      },
      {
        type: "GitHub",
        title: "pymc-devs/pytensor",
        source: "GitHub",
        date: "Updated 2026-06-25",
        href: "https://github.com/pymc-devs/pytensor",
        summary:
          "A symbolic tensor compiler used by PyMC for defining, optimizing, and evaluating mathematical expressions efficiently.",
        tags: ["Statistics", "Symbolic Math", "Probabilistic Programming"],
      },
      {
        type: "GitHub",
        title: "root-project/root",
        source: "GitHub",
        date: "Updated 2026-06-25",
        href: "https://github.com/root-project/root",
        summary:
          "A mature scientific data analysis framework for storing, analyzing, and visualizing large experimental datasets.",
        tags: ["Scientific Computing", "Data Analysis", "C++"],
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
        title: "Learning Action Priors for Cross-embodiment Robot Manipulation",
        source: "arXiv",
        date: "2026-06-24",
        href: "https://arxiv.org/abs/2606.26095",
        summary:
          "Pretrains robot action modules with motion priors before VLA alignment, targeting better transfer across different robot embodiments.",
        tags: ["Robotics", "Vision-Language-Action", "Transfer Learning"],
      },
      {
        type: "Paper",
        title: "On-Policy Self-Distillation with Sampled Demonstrations Reduces Output Diversity",
        source: "arXiv",
        date: "2026-06-24",
        href: "https://arxiv.org/abs/2606.26091",
        summary:
          "Shows that self-distillation can improve pass@1 while flattening pass@k, a useful warning for reasoning and code-generation evaluation.",
        tags: ["Self-Distillation", "Diversity", "Evaluation"],
      },
      {
        type: "Paper",
        title: "RevengeBench: Reverse Engineering Code-Space Policies from Behavioral Experiments",
        source: "arXiv",
        date: "2026-06-24",
        href: "https://arxiv.org/abs/2606.26094",
        summary:
          "Benchmarks whether learners can reconstruct hidden decision programs from behavioral traces and targeted experiments.",
        tags: ["Benchmarks", "Program Synthesis", "Behavioral Modeling"],
      },
      {
        type: "GitHub",
        title: "huggingface/transformers",
        source: "GitHub",
        date: "Updated 2026-06-25",
        href: "https://github.com/huggingface/transformers",
        summary:
          "The model-definition backbone for a large share of modern text, vision, audio, and multimodal ML experimentation.",
        tags: ["Transformers", "Model Library", "Multimodal"],
      },
      {
        type: "GitHub",
        title: "vllm-project/vllm",
        source: "GitHub",
        date: "Updated 2026-06-25",
        href: "https://github.com/vllm-project/vllm",
        summary:
          "A high-throughput inference and serving engine for LLMs, useful for understanding practical deployment bottlenecks.",
        tags: ["LLM Serving", "Inference", "Systems"],
      },
      {
        type: "GitHub",
        title: "kvcache-ai/Mooncake",
        source: "GitHub",
        date: "Updated 2026-06-25",
        href: "https://github.com/kvcache-ai/Mooncake",
        summary:
          "An LLM serving platform from the Kimi ecosystem that is especially relevant for studying KV-cache-centric inference systems.",
        tags: ["LLM Serving", "KV Cache", "Systems"],
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
        title: "Why Multi-Step Tool-Use Reinforcement Learning Collapses and How Supervisory Signals Fix It",
        source: "arXiv",
        date: "2026-06-24",
        href: "https://arxiv.org/abs/2606.26027",
        summary:
          "Diagnoses catastrophic collapse in tool-use RL as control-token probability spikes and tests supervisory signals that recover structured tool calling.",
        tags: ["Tool Use", "Reinforcement Learning", "Agent Training"],
      },
      {
        type: "Paper",
        title: "Neglected Free Lunch from Post-training: Progress Advantage for LLM Agents",
        source: "arXiv",
        date: "2026-06-24",
        href: "https://arxiv.org/abs/2606.26080",
        summary:
          "Derives a step-level progress signal from RL post-training itself, reducing the need for separate process reward model annotation in agent tasks.",
        tags: ["LLM Agents", "Post-Training", "Process Rewards"],
      },
      {
        type: "Paper",
        title: "The Unfireable Safety Kernel: Execution-Time AI Alignment for AI Agents and Other Escapable AI Systems",
        source: "arXiv",
        date: "2026-06-24",
        href: "https://arxiv.org/abs/2606.26057",
        summary:
          "Argues for process-separated, fail-closed authorization on the action path rather than relying only on in-agent prompts or filters.",
        tags: ["Agent Safety", "Authorization", "Runtime Controls"],
      },
      {
        type: "Paper",
        title: "Shepherd: Enabling Programmable Meta-Agents via Reversible Agentic Execution Traces",
        source: "arXiv",
        date: "Updated 2026-06-24",
        href: "https://arxiv.org/abs/2605.10913",
        summary:
          "Treats agent execution as a reversible first-class object so meta-agents can inspect, halt, repair, and coordinate runs more systematically.",
        tags: ["Meta-Agents", "Execution Traces", "Agent Infrastructure"],
      },
      {
        type: "GitHub",
        title: "stablyai/orca",
        source: "GitHub",
        date: "Updated 2026-06-25",
        href: "https://github.com/stablyai/orca",
        summary:
          "An agent development environment for running fleets of parallel coding agents with local control over subscriptions and workflows.",
        tags: ["Coding Agents", "Agent IDE", "Parallel Agents"],
      },
      {
        type: "GitHub",
        title: "omnigent-ai/omnigent",
        source: "GitHub",
        date: "Updated 2026-06-25",
        href: "https://github.com/omnigent-ai/omnigent",
        summary:
          "An open-source meta-harness for orchestrating coding agents such as Claude Code, Codex, Cursor, and custom agents with policy layers.",
        tags: ["Agent Framework", "Coding Agents", "Orchestration"],
      },
    ],
  },
];
