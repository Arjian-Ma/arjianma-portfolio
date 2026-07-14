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

export const lastUpdated = "2026-07-14";

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
        date: "Updated 2026-07-14",
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
      {
        type: "GitHub",
        title: "ad-si/Woxi",
        source: "GitHub",
        date: "Updated 2026-07-14",
        href: "https://github.com/ad-si/Woxi",
        summary:
          "A Rust reimplementation of the Wolfram Language that is useful for tracking modern design choices in symbolic computation and computer algebra systems.",
        tags: ["Symbolic Computation", "Computer Algebra", "Rust"],
      },
      {
        type: "Paper",
        title: "Finding Simple Proofs for First-Order Optimization",
        source: "arXiv",
        date: "2026-07-09",
        href: "https://arxiv.org/abs/2607.08753",
        summary:
          "Turns dense optimization certificates into simpler, reusable proof structures using sparsification, learning heuristics, and semidefinite programming.",
        tags: ["Optimization", "Proof Discovery", "First-Order Methods"],
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
        date: "Updated 2026-07-14",
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
      {
        type: "GitHub",
        title: "Comfy-Org/ComfyUI",
        source: "GitHub",
        date: "Updated 2026-07-13",
        href: "https://github.com/Comfy-Org/ComfyUI",
        summary:
          "A highly active node-graph interface and backend for diffusion workflows, useful for studying practical model orchestration and generative-media systems.",
        tags: ["Diffusion", "PyTorch", "Generative AI"],
      },
      {
        type: "GitHub",
        title: "vllm-project/vllm",
        source: "GitHub",
        date: "Updated 2026-07-12",
        href: "https://github.com/vllm-project/vllm",
        summary:
          "A high-throughput LLM inference and serving engine that is worth tracking for practical deployment, batching, and memory-management ideas.",
        tags: ["LLM Systems", "Inference", "Serving"],
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
        type: "Paper",
        title: "PaperRouter-Agent: A Content-Grounded LLM Agent for Personalized Hierarchical Paper Routing",
        source: "arXiv",
        date: "2026-07-13",
        href: "https://arxiv.org/abs/2607.11564",
        summary:
          "Builds an LLM agent for routing research papers into personal folder hierarchies, making paper triage more grounded in user-specific organization habits.",
        tags: ["Research Agents", "Paper Triage", "Personalization"],
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
      {
        type: "Paper",
        title: "Shared Selective Persistent Memory for Agentic LLM Systems",
        source: "arXiv",
        date: "2026-07-10",
        href: "https://arxiv.org/abs/2607.09493",
        summary:
          "Proposes reusable workspace memory that preserves task specs, schemas, tool configurations, and output constraints while discarding noisy session traces.",
        tags: ["Agent Memory", "Tool Use", "Collaboration"],
      },
      {
        type: "GitHub",
        title: "microsoft/agent-framework",
        source: "GitHub",
        date: "Updated 2026-07-10",
        href: "https://github.com/microsoft/agent-framework",
        summary:
          "A production-oriented Python/.NET framework for building and orchestrating agents and multi-agent workflows with observability and governance hooks.",
        tags: ["Agent Framework", "Multi-Agent", "Production"],
      },
    ],
  },
];
