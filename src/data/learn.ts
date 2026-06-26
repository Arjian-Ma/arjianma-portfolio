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

export const lastUpdated = "2026-06-26";

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
        title: "All you need is log",
        source: "arXiv",
        date: "2026-06-25",
        href: "https://arxiv.org/abs/2606.27349",
        summary:
          "Characterizes Rényi divergences through data-processing monotonicity, giving a compact bridge between probability, statistics, and ML evaluation.",
        tags: ["Probability", "Statistics", "Information Theory"],
      },
      {
        type: "Paper",
        title: "Error-Conditioned Neural Solvers",
        source: "arXiv",
        date: "2026-06-25",
        href: "https://arxiv.org/abs/2606.27354",
        summary:
          "Frames PDE surrogate modeling as an iterative error-correction problem, connecting numerical analysis with learnable solvers.",
        tags: ["Numerical Analysis", "PDEs", "Neural Solvers"],
      },
      {
        type: "Paper",
        title: "Typical distances in high-genus triangulations",
        source: "arXiv",
        date: "2026-06-25",
        href: "https://arxiv.org/abs/2606.27357",
        summary:
          "Studies logarithmic distance scaling in random triangulations with genus proportional to face count, a clean probabilistic geometry result.",
        tags: ["Probability", "Random Geometry", "Combinatorics"],
      },
      {
        type: "GitHub",
        title: "stdlib-js/stdlib",
        source: "GitHub",
        date: "Updated 2026-06-26",
        href: "https://github.com/stdlib-js/stdlib",
        summary:
          "A broad numerical computing library for JavaScript and TypeScript, useful as a practical computational reference.",
        tags: ["Numerical Computing", "Library", "TypeScript"],
      },
      {
        type: "GitHub",
        title: "pymc-devs/pytensor",
        source: "GitHub",
        date: "Updated 2026-06-26",
        href: "https://github.com/pymc-devs/pytensor",
        summary:
          "A symbolic tensor compiler used by PyMC for defining, optimizing, and evaluating mathematical expressions efficiently.",
        tags: ["Statistics", "Symbolic Math", "Probabilistic Programming"],
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
        title: "Reinforcement Learning without Ground-Truth Solutions can Improve LLMs",
        source: "arXiv",
        date: "2026-06-25",
        href: "https://arxiv.org/abs/2606.27369",
        summary:
          "Explores rank-based reinforcement learning for LLMs when ground-truth solutions are unavailable, expanding where RL-style post-training can be applied.",
        tags: ["LLMs", "Reinforcement Learning", "Post-Training"],
      },
      {
        type: "Paper",
        title: "When are likely answers right? On Sequence Probability and Correctness in LLMs",
        source: "arXiv",
        date: "2026-06-25",
        href: "https://arxiv.org/abs/2606.27359",
        summary:
          "Examines when higher sequence probability actually correlates with correctness, sharpening intuition around decoding and confidence.",
        tags: ["LLMs", "Decoding", "Evaluation"],
      },
      {
        type: "Paper",
        title: "Autoregressive Boltzmann Generators",
        source: "arXiv",
        date: "2026-06-25",
        href: "https://arxiv.org/abs/2606.27361",
        summary:
          "Uses autoregressive modeling for equilibrium molecular sampling, linking generative ML with statistical physics.",
        tags: ["Generative Models", "Molecular ML", "Sampling"],
      },
      {
        type: "GitHub",
        title: "unslothai/unsloth",
        source: "GitHub",
        date: "Updated 2026-06-26",
        href: "https://github.com/unslothai/unsloth",
        summary:
          "A fast fine-tuning and local model workflow for open LLMs, worth tracking for practical training efficiency.",
        tags: ["LLMs", "Fine-Tuning", "Local Models"],
      },
      {
        type: "GitHub",
        title: "huggingface/transformers",
        source: "GitHub",
        date: "Updated 2026-06-26",
        href: "https://github.com/huggingface/transformers",
        summary:
          "The model-definition backbone for a large share of modern text, vision, audio, and multimodal ML experimentation.",
        tags: ["Transformers", "Model Library", "Multimodal"],
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
        title: "Empowering GUI Agents via Autonomous Experience Exploration and Hindsight Experience Utilization for Task Planning",
        source: "arXiv",
        date: "2026-06-25",
        href: "https://arxiv.org/abs/2606.27330",
        summary:
          "Improves GUI-agent task planning by letting agents explore autonomously and reuse hindsight from experience traces.",
        tags: ["GUI Agents", "Planning", "Experience Learning"],
      },
      {
        type: "Paper",
        title: "When Does Combining Language Models Help? A Co-Failure Ceiling on Routing, Voting, and Mixture-of-Agents Across 67 Frontier Models",
        source: "arXiv",
        date: "2026-06-25",
        href: "https://arxiv.org/abs/2606.27288",
        summary:
          "Quantifies how correlated failures limit multi-model systems, giving a practical diagnostic for routers, voting, and mixture-of-agents designs.",
        tags: ["Mixture-of-Agents", "Evaluation", "Model Routing"],
      },
      {
        type: "Paper",
        title: "Advancing Omnimodal Embodied Agents from Isolated Skills to Everyday Physical Autonomy",
        source: "arXiv",
        date: "2026-06-25",
        href: "https://arxiv.org/abs/2606.27251",
        summary:
          "Surveys and motivates persistent embodied agents that orchestrate cyber and physical tools with recovery in real environments.",
        tags: ["Embodied Agents", "Autonomy", "Tool Orchestration"],
      },
      {
        type: "GitHub",
        title: "volcengine/OpenViking",
        source: "GitHub",
        date: "Updated 2026-06-26",
        href: "https://github.com/volcengine/OpenViking",
        summary:
          "An open context database for AI agents that treats memory, resources, and skills as filesystem-managed context.",
        tags: ["Agent Memory", "Context Engineering", "RAG"],
      },
      {
        type: "GitHub",
        title: "omnigent-ai/omnigent",
        source: "GitHub",
        date: "Updated 2026-06-26",
        href: "https://github.com/omnigent-ai/omnigent",
        summary:
          "An open-source meta-harness for orchestrating coding agents such as Claude Code, Codex, Cursor, and custom agents with policy layers.",
        tags: ["Agent Framework", "Coding Agents", "Orchestration"],
      },
    ],
  },
];
