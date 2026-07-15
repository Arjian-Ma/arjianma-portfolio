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

export const lastUpdated = "2026-07-15";

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
        title: "Online Control via Counterfactual Tracking",
        source: "arXiv",
        date: "2026-07-14",
        href: "https://arxiv.org/abs/2607.13029",
        summary:
          "Introduces an online-control method that competes with broad classes of causal policies under adversarial disturbances, expanding beyond standard linear-controller benchmarks.",
        tags: ["Online Control", "Dynamical Systems", "Optimization"],
      },
      {
        type: "Paper",
        title: "Low-Precision Rank Compensation for Matrices and Tensor Trains",
        source: "arXiv",
        date: "2026-07-14",
        href: "https://arxiv.org/abs/2607.12969",
        summary:
          "Studies when saved memory from lower precision can be reinvested into higher rank, giving practical guidance for numerical linear algebra with matrices and tensor trains.",
        tags: ["Numerical Analysis", "Low Precision", "Tensor Trains"],
      },
      {
        type: "Paper",
        title: "Optimal Parameter-Free First-Order Methods for Convex Optimization with Unknown Growth and Smoothness",
        source: "arXiv",
        date: "2026-07-13",
        href: "https://arxiv.org/abs/2607.11878",
        summary:
          "Develops anytime, parameter-free bundle-level first-order methods for convex optimization when growth and smoothness constants are not known in advance.",
        tags: ["Optimization", "First-Order Methods", "Convex Analysis"],
      },
      {
        type: "Paper",
        title: "Stabilize-then-optimize: Feedback transformations as preconditioners in optimal control",
        source: "arXiv",
        date: "2026-07-13",
        href: "https://arxiv.org/abs/2607.11835",
        summary:
          "Uses feedback transformations as preconditioners for optimal-control systems, linking numerical linear algebra with more stable control optimization workflows.",
        tags: ["Optimal Control", "Numerical Analysis", "Preconditioning"],
      },
      {
        type: "GitHub",
        title: "stdlib-js/stdlib",
        source: "GitHub",
        date: "Updated 2026-07-15",
        href: "https://github.com/stdlib-js/stdlib",
        summary:
          "A fundamental numerical library for JavaScript and TypeScript, useful for studying how scientific-computing primitives are engineered for the web ecosystem.",
        tags: ["Numerical Computing", "JavaScript", "Scientific Libraries"],
      },
      {
        type: "Paper",
        title: "Deep Gaussian Processes on Directed Acyclic Graphs",
        source: "arXiv",
        date: "2026-07-10",
        href: "https://arxiv.org/abs/2607.09645",
        summary:
          "Extends Gaussian-process modeling to functions composed along DAGs, with theory on prior collapse, graph topology, and information preservation under partial observations.",
        tags: ["Statistics", "Gaussian Processes", "Directed Graphs"],
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
        title: "The Seriality Gap in Video Diffusion Models",
        source: "arXiv",
        date: "2026-07-14",
        href: "https://arxiv.org/abs/2607.13031",
        summary:
          "Uses controlled multi-ball dynamics to show where bidirectional video diffusion struggles with long causal chains, sharpening evaluation for physical reasoning in generative models.",
        tags: ["Video Diffusion", "Causal Reasoning", "Evaluation"],
      },
      {
        type: "GitHub",
        title: "LMCache/LMCache",
        source: "GitHub",
        date: "Updated 2026-07-15",
        href: "https://github.com/LMCache/LMCache",
        summary:
          "A KV-cache layer for accelerating LLM serving, worth following for practical inference performance, reuse, and memory-management ideas.",
        tags: ["LLM Serving", "KV Cache", "Inference Systems"],
      },
      {
        type: "Paper",
        title: "Requential Coding: Pushing the Limits of Model Compression with Self-Generated Training Data",
        source: "arXiv",
        date: "2026-07-13",
        href: "https://arxiv.org/abs/2607.11883",
        summary:
          "Studies model compression through requential coding and self-generated training data, tying shorter codes to the regularities neural networks learn.",
        tags: ["Compression", "Generalization", "Self-Generated Data"],
      },
      {
        type: "Paper",
        title: "Metacognition in LLMs: Foundations, Progress, and Opportunities",
        source: "arXiv",
        date: "2026-07-13",
        href: "https://arxiv.org/abs/2607.11881",
        summary:
          "Surveys how large language models monitor, assess, and improve their own reasoning, highlighting open problems in reliable self-evaluation.",
        tags: ["LLMs", "Metacognition", "Evaluation"],
      },
      {
        type: "GitHub",
        title: "sgl-project/sglang",
        source: "GitHub",
        date: "Updated 2026-07-15",
        href: "https://github.com/sgl-project/sglang",
        summary:
          "A high-performance serving framework for large language and multimodal models, worth tracking for inference systems and structured generation workflows.",
        tags: ["LLM Serving", "Inference", "Multimodal Models"],
      },
      {
        type: "Paper",
        title: "Scalable Visual Pretraining for Language Intelligence",
        source: "arXiv",
        date: "2026-07-10",
        href: "https://arxiv.org/abs/2607.09657",
        summary:
          "Challenges text-only pretraining by showing that visually rich documents, equations, and layouts can improve foundation-model intelligence at scale.",
        tags: ["Visual Pretraining", "Foundation Models", "Multimodal ML"],
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
        title: "Do AI Agents Know When a Task Is Simple? Toward Complexity-Aware Reasoning and Execution",
        source: "arXiv",
        date: "2026-07-14",
        href: "https://arxiv.org/abs/2607.13034",
        summary:
          "Argues that LLM agents often over-spend context and effort on simple tasks, motivating complexity-aware execution policies for more efficient automation.",
        tags: ["Agent Efficiency", "Complexity Awareness", "Execution"],
      },
      {
        type: "Paper",
        title: "PalmClaw: A Native On-Device Agent Framework for Mobile Phones",
        source: "arXiv",
        date: "2026-07-14",
        href: "https://arxiv.org/abs/2607.13027",
        summary:
          "Explores agent execution directly on mobile devices, an important direction for privacy-preserving and latency-sensitive personal assistants.",
        tags: ["Mobile Agents", "Tool Use", "On-Device AI"],
      },
      {
        type: "Paper",
        title: "MemOps: Benchmarking Lifecycle Memory Operations in Long-Horizon Conversations",
        source: "arXiv",
        date: "2026-07-14",
        href: "https://arxiv.org/abs/2607.12893",
        summary:
          "Benchmarks the full lifecycle of agent memory operations rather than only downstream question answering, making long-horizon memory evaluation more diagnostic.",
        tags: ["Agent Memory", "Benchmarks", "Long-Horizon Tasks"],
      },
      {
        type: "Paper",
        title: "When Local Monitors Miss Compositional Harm: Diagnosing Distributed Backdoors in Multi-Agent Systems",
        source: "arXiv",
        date: "2026-07-13",
        href: "https://arxiv.org/abs/2607.11751",
        summary:
          "Shows how monitoring each tool call or message in isolation can miss coordinated failures across multi-agent systems, a practical warning for agent safety design.",
        tags: ["Multi-Agent Systems", "Safety", "Monitoring"],
      },
      {
        type: "Paper",
        title: "Agent Hacks Agent: Autoresearch for Production-Agent Red-Teaming",
        source: "arXiv",
        date: "2026-07-13",
        href: "https://arxiv.org/abs/2607.11698",
        summary:
          "Focuses on red-teaming production coding agents such as Claude Code and Codex, where untrusted files, commands, and workspace state make failures actionable.",
        tags: ["Red Teaming", "Coding Agents", "Tool Safety"],
      },
      {
        type: "GitHub",
        title: "smithersai/smithers",
        source: "GitHub",
        date: "Updated 2026-07-14",
        href: "https://github.com/smithersai/smithers",
        summary:
          "An agent-workflow system with live observability, rewind, fork, and replay, useful for understanding durable execution and debugging of autonomous runs.",
        tags: ["Agent Workflows", "Observability", "Durable Execution"],
      },
    ],
  },
];
