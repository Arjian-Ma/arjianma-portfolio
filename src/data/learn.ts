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

export const lastUpdated = "2026-07-13";

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
        title: "Deep Gaussian Processes on Directed Acyclic Graphs",
        source: "arXiv",
        date: "2026-07-10",
        href: "https://arxiv.org/abs/2607.09645",
        summary:
          "Extends Gaussian-process modeling to functions composed along DAGs, with theory on prior collapse, graph topology, and information preservation under partial observations.",
        tags: ["Statistics", "Gaussian Processes", "Directed Graphs"],
      },
      {
        type: "Paper",
        title: "A Quantum Path to Partial Differential Equations",
        source: "arXiv",
        date: "2026-07-10",
        href: "https://arxiv.org/abs/2607.09639",
        summary:
          "Lecture notes that connect finite-difference and finite-element discretizations with block encodings and quantum algorithms for elliptic, hyperbolic, and parabolic PDEs.",
        tags: ["Numerical Analysis", "PDEs", "Quantum Algorithms"],
      },
      {
        type: "GitHub",
        title: "ad-si/Woxi",
        source: "GitHub",
        date: "Updated 2026-07-13",
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
      {
        type: "GitHub",
        title: "oscar-system/Oscar.jl",
        source: "GitHub",
        date: "Updated 2026-07-12",
        href: "https://github.com/oscar-system/Oscar.jl",
        summary:
          "A comprehensive Julia computer algebra system for algebra, geometry, and number theory, useful for seeing modern mathematical software design in practice.",
        tags: ["Computer Algebra", "Julia", "Mathematics"],
      },
      {
        type: "Paper",
        title: "Neural and Spectral Operator Surrogates on Gaussian Spaces",
        source: "arXiv",
        date: "2026-07-09",
        href: "https://arxiv.org/abs/2607.08492",
        summary:
          "Proves approximation-rate guarantees for spectral and neural operator surrogates on Gaussian Hilbert spaces, including gradient-sensitive error control.",
        tags: ["Numerical Analysis", "Operator Learning", "Gaussian Spaces"],
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
        type: "Paper",
        title: "Evolution of Accuracy and Visual-Cognitive Errors in a Decade of Vision-Language AI Models",
        source: "arXiv",
        date: "2026-07-10",
        href: "https://arxiv.org/abs/2607.09654",
        summary:
          "Tracks VLM progress from 2017 to 2025 on complex social scenes, breaking errors into detection, recognition, hallucination, scene understanding, and spatial dependence.",
        tags: ["Vision-Language Models", "Evaluation", "Model Errors"],
      },
      {
        type: "Paper",
        title: "SLORR: Simple and Efficient In-Training Low-Rank Regularization",
        source: "arXiv",
        date: "2026-07-09",
        href: "https://arxiv.org/abs/2607.08754",
        summary:
          "Introduces a stateless, architecture-preserving low-rank regularizer that makes vision and language models more compressible with small training overhead.",
        tags: ["Compression", "Low-Rank", "LLMs"],
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
        title: "Shared Selective Persistent Memory for Agentic LLM Systems",
        source: "arXiv",
        date: "2026-07-10",
        href: "https://arxiv.org/abs/2607.09493",
        summary:
          "Proposes reusable workspace memory that preserves task specs, schemas, tool configurations, and output constraints while discarding noisy session traces.",
        tags: ["Agent Memory", "Tool Use", "Collaboration"],
      },
      {
        type: "Paper",
        title: "Toward Auditable AI Scientists: A Hypothesis Evolution Protocol for LLM Agents",
        source: "arXiv",
        date: "2026-07-10",
        href: "https://arxiv.org/abs/2607.09195",
        summary:
          "Turns scientific-agent hypothesis generation, testing, evidence, and belief updates into explicit auditable operations instead of burying them in logs.",
        tags: ["AI Scientists", "Auditing", "Planning"],
      },
      {
        type: "Paper",
        title: "VEXAIoT: Autonomous IoT Vulnerability EXploitation using AI Agents",
        source: "arXiv",
        date: "2026-07-10",
        href: "https://arxiv.org/abs/2607.09653",
        summary:
          "Builds a multi-agent vulnerability discovery and exploit-execution loop for IoT security testing, highlighting both practical autonomy and safety concerns.",
        tags: ["Tool Use", "Security", "Autonomous Agents"],
      },
      {
        type: "GitHub",
        title: "strukto-ai/mirage",
        source: "GitHub",
        date: "Updated 2026-07-13",
        href: "https://github.com/strukto-ai/mirage",
        summary:
          "A virtual filesystem layer for AI agents, pointing toward safer and more observable file access patterns for tool-using coding systems.",
        tags: ["Agent Tools", "Virtual Filesystem", "Sandboxing"],
      },
      {
        type: "Paper",
        title: "Workflow as Knowledge: Semantic Persistence for LLM-Mediated Workflows",
        source: "arXiv",
        date: "2026-07-09",
        href: "https://arxiv.org/abs/2607.08740",
        summary:
          "Frames agent workflows, inference records, context snapshots, and dependencies as persistent knowledge objects that can be inspected and resumed.",
        tags: ["Agent Workflows", "Persistence", "Tool Use"],
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
