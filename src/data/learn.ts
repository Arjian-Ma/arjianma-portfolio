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

export const lastUpdated = "2026-08-28";

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
        title: "Cutoff with an O(1) window for Potts Glauber Dynamics on lattice at High Temperature",
        source: "arXiv",
        date: "2026-08-28",
        href: "https://arxiv.org/abs/2608.26259",
        summary:
          "Proves an optimal-window cutoff result for high-temperature Potts Glauber dynamics, a sharp example of probability methods in statistical mechanics.",
        tags: ["Probability", "Markov Chains", "Statistical Mechanics"],
      },
      {
        type: "Paper",
        title: "Physics-Informed Neural Networks for Biot's Model via Fixed-Stress Splitting and Energy Natural Gradient Descent",
        source: "arXiv",
        date: "2026-08-28",
        href: "https://arxiv.org/abs/2608.26303",
        summary:
          "Combines numerical-analysis structure with optimization geometry to make PINNs more robust on coupled poromechanics equations.",
        tags: ["Numerical Analysis", "Optimization", "PINNs"],
      },
      {
        type: "Paper",
        title: "The Birthday Paradox for non-backtracking walks on regular graphs",
        source: "arXiv",
        date: "2026-08-28",
        href: "https://arxiv.org/abs/2608.26321",
        summary:
          "Resolves a fixed-degree conjecture on self-intersections of non-backtracking walks, connecting graph structure with probabilistic threshold intuition.",
        tags: ["Probability", "Dynamical Systems", "Graphs"],
      },
      {
        type: "GitHub",
        title: "stdlib-js/stdlib",
        source: "GitHub",
        date: "Updated 2026-08-28",
        href: "https://github.com/stdlib-js/stdlib",
        summary:
          "A substantial JavaScript/TypeScript numerical and scientific standard library, useful for seeing how mathematical computing APIs are organized for the web ecosystem.",
        tags: ["Numerical Computing", "Statistics", "TypeScript"],
      },
      {
        type: "GitHub",
        title: "root-project/root",
        source: "GitHub",
        date: "Updated 2026-08-28",
        href: "https://github.com/root-project/root",
        summary:
          "CERN's ROOT toolkit remains a rich case study in statistical analysis, visualization, and large-scale scientific data infrastructure.",
        tags: ["Statistics", "Scientific Computing", "C++"],
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
        title: "NeuronFuzz: Safety Neuron Guided Fuzzing for LLM Safety Evaluation",
        source: "arXiv",
        date: "2026-08-28",
        href: "https://arxiv.org/abs/2608.26222",
        summary:
          "Uses internal safety-neuron activations as feedback for jailbreak fuzzing, a practical evaluation idea for testing aligned language models more efficiently.",
        tags: ["LLM Safety", "Evaluation", "Fuzzing"],
      },
      {
        type: "Paper",
        title: "Muon with Finite Newton-Schulz: The Smoothing Benefit in Nonsmooth Nonconvex Optimization",
        source: "arXiv",
        date: "2026-08-28",
        href: "https://arxiv.org/abs/2608.26288",
        summary:
          "Analyzes the finite Newton-Schulz iterations actually used by Muon, clarifying why optimizer approximations can help rather than merely introduce error.",
        tags: ["Optimization", "LLM Training", "Theory"],
      },
      {
        type: "Paper",
        title: "Diff Mining: Logit Differences Reveal Finetuning Objectives",
        source: "arXiv",
        date: "2026-08-28",
        href: "https://arxiv.org/abs/2608.26462",
        summary:
          "Compares base and finetuned logits to audit what behavior a model learned, a simple lens for understanding post-training side effects.",
        tags: ["Fine-Tuning", "Auditing", "LLMs"],
      },
      {
        type: "GitHub",
        title: "huggingface/transformers",
        source: "GitHub",
        date: "Updated 2026-08-28",
        href: "https://github.com/huggingface/transformers",
        summary:
          "The core model-definition library for modern text, vision, audio, and multimodal ML, worth tracking for practical architecture and inference patterns.",
        tags: ["Transformers", "PyTorch", "Multimodal ML"],
      },
      {
        type: "GitHub",
        title: "pytorch/rl",
        source: "GitHub",
        date: "Updated 2026-08-28",
        href: "https://github.com/pytorch/rl",
        summary:
          "A modular PyTorch reinforcement-learning library that exposes clean primitives for control, robotics, and multi-agent experimentation.",
        tags: ["Reinforcement Learning", "PyTorch", "Control"],
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
        title: "Invocation-Level Reliability of Tool-Using Agents",
        source: "arXiv",
        date: "2026-08-28",
        href: "https://arxiv.org/abs/2608.26189",
        summary:
          "Separates tool choice from argument correctness and shows how early invocation errors compound across multi-step agent trajectories.",
        tags: ["Tool Use", "Reliability", "Evaluation"],
      },
      {
        type: "Paper",
        title: "Same Model, Different Harness: Different Coding-Agent Results",
        source: "arXiv",
        date: "2026-08-28",
        href: "https://arxiv.org/abs/2608.26218",
        summary:
          "Demonstrates that context handling and harness choices can materially change coding-agent benchmark outcomes even when the underlying model is fixed.",
        tags: ["Coding Agents", "Harnesses", "Benchmarks"],
      },
      {
        type: "Paper",
        title: "LLM Agents for Time-Series: A Survey",
        source: "arXiv",
        date: "2026-08-28",
        href: "https://arxiv.org/abs/2608.26226",
        summary:
          "Organizes time-series agents by forecasting, synthesis, anomaly diagnosis, and decision-support problems, giving a useful map of domain-specific agent design.",
        tags: ["Survey", "Time Series", "Agent Design"],
      },
      {
        type: "GitHub",
        title: "trpc-group/trpc-agent-go",
        source: "GitHub",
        date: "Updated 2026-08-28",
        href: "https://github.com/trpc-group/trpc-agent-go",
        summary:
          "A Go framework for production agent systems with graph workflows, tools, memory, MCP, evaluation, and observability built in.",
        tags: ["Agent Framework", "Go", "Observability"],
      },
      {
        type: "GitHub",
        title: "OpenNSWM-Lab/FAROS",
        source: "GitHub",
        date: "Updated 2026-08-28",
        href: "https://github.com/OpenNSWM-Lab/FAROS",
        summary:
          "An AutoResearch runtime that orchestrates idea generation, experiments, paper writing, and review, useful for studying research-agent workflow design.",
        tags: ["Research Agents", "Workflow Orchestration", "AI for Science"],
      },
    ],
  },
];
