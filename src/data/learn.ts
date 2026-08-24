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

export const lastUpdated = "2026-08-24";

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
        title: "Primal Acceleration of Newton's Method",
        source: "arXiv",
        date: "2026-08-21",
        href: "https://arxiv.org/abs/2608.21359",
        summary:
          "Develops an accelerated Newton method using only primal variables and one linear solve per iteration, a clean bridge between convex optimization theory and practical second-order algorithms.",
        tags: ["Optimization", "Newton Methods", "Convex Analysis"],
      },
      {
        type: "Paper",
        title: "A simple stability analysis of the Lanczos algorithm in finite precision arithmetic",
        source: "arXiv",
        date: "2026-08-21",
        href: "https://arxiv.org/abs/2608.21268",
        summary:
          "Gives a self-contained finite-precision view of Lanczos recurrences and loss of orthogonality, useful for understanding why numerical linear algebra behaves differently on real machines.",
        tags: ["Numerical Linear Algebra", "Finite Precision", "Lanczos"],
      },
      {
        type: "Paper",
        title: "Interface between competing random walks on a cycle",
        source: "arXiv",
        date: "2026-08-21",
        href: "https://arxiv.org/abs/2608.21312",
        summary:
          "Studies how two random walks divide a cycle by first visits, a compact probability model for competition, interfaces, and stochastic spatial structure.",
        tags: ["Probability", "Random Walks", "Interfaces"],
      },
      {
        type: "Paper",
        title: "Cohomological Reduction for Fiber-Contracting Extensions: From Subcohomology to Thermodynamic Formalism",
        source: "arXiv",
        date: "2026-08-21",
        href: "https://arxiv.org/abs/2608.21352",
        summary:
          "Builds a reduction framework for fiber-contracting dynamical systems, connecting cohomological problems with variational and thermodynamic formalism.",
        tags: ["Dynamical Systems", "Thermodynamic Formalism", "Cohomology"],
      },
      {
        type: "GitHub",
        title: "daisy/MathCAT",
        source: "GitHub",
        date: "Updated 2026-08-24",
        href: "https://github.com/daisy/MathCAT",
        summary:
          "A Rust project that turns MathML into speech, braille, and navigable math, reminding me that mathematical software is also an accessibility problem.",
        tags: ["Mathematics", "Accessibility", "Rust"],
      },
      {
        type: "GitHub",
        title: "stdlib-js/stdlib",
        source: "GitHub",
        date: "Updated 2026-08-24",
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
        title: "Asymmetric Capacity Allocation in Self-Refinement Pipelines",
        source: "arXiv",
        date: "2026-08-21",
        href: "https://arxiv.org/abs/2608.21345",
        summary:
          "Looks at how generation, critique, and revision stages should share model capacity, a practical question for LLM systems that rely on iterative improvement.",
        tags: ["Self-Refinement", "LLM Systems", "Model Capacity"],
      },
      {
        type: "Paper",
        title: "Truthful Calibration Measures for Sequential Prediction",
        source: "arXiv",
        date: "2026-08-21",
        href: "https://arxiv.org/abs/2608.21348",
        summary:
          "Studies calibration error for sequential probabilistic reports, directly relevant to measuring whether model confidence is reliable over time.",
        tags: ["Calibration", "Sequential Prediction", "Evaluation"],
      },
      {
        type: "Paper",
        title: "PerturbRx: Learning Treatment-Conditioned Latent Transitions for Patient Drug Response Prediction",
        source: "arXiv",
        date: "2026-08-21",
        href: "https://arxiv.org/abs/2608.21349",
        summary:
          "Models treatment-conditioned latent transitions for cancer drug response, a concrete example of ML methods trying to encode intervention effects rather than static correlations.",
        tags: ["Healthcare ML", "Latent Dynamics", "Drug Response"],
      },
      {
        type: "Paper",
        title: "VIALS: A Benchmark for Visual Interpretation of Artifacts in the Life Sciences",
        source: "arXiv",
        date: "2026-08-21",
        href: "https://arxiv.org/abs/2608.21357",
        summary:
          "Introduces a benchmark for interpreting life-science visual artifacts, useful for tracking multimodal models beyond generic image-captioning tasks.",
        tags: ["Multimodal ML", "Benchmarks", "Life Sciences"],
      },
      {
        type: "GitHub",
        title: "mudler/vllm.cpp",
        source: "GitHub",
        date: "Updated 2026-08-24",
        href: "https://github.com/mudler/vllm.cpp",
        summary:
          "A C++ vLLM-like inference engine with continuous batching, paged KV cache ideas, and GGUF support, worth watching for local and efficient LLM serving.",
        tags: ["LLM Serving", "C++", "Inference"],
      },
      {
        type: "GitHub",
        title: "pytorch/pytorch",
        source: "GitHub",
        date: "Updated 2026-08-24",
        href: "https://github.com/pytorch/pytorch",
        summary:
          "The core dynamic deep-learning framework remains essential reading for understanding how autograd, GPU tensors, and production ML infrastructure evolve.",
        tags: ["Deep Learning", "Autograd", "PyTorch"],
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
        title: "Utility Under Attack: Agent Memory Poisoning and the Limits of Content Screening and Provenance Ranking",
        source: "arXiv",
        date: "2026-08-21",
        href: "https://arxiv.org/abs/2608.21230",
        summary:
          "Tests how persistent agent memory can make false information durable, which is exactly the kind of failure mode long-running assistants must defend against.",
        tags: ["Agent Memory", "Security", "Evaluation"],
      },
      {
        type: "Paper",
        title: "AID-Guard: Stateful Authorization for Delegated Agent Effects",
        source: "arXiv",
        date: "2026-08-21",
        href: "https://arxiv.org/abs/2608.21159",
        summary:
          "Frames authorization as a stateful problem for tool-using agents whose actions may change, retry, or recover after the initial request.",
        tags: ["Authorization", "Tool Use", "Agent Safety"],
      },
      {
        type: "Paper",
        title: "Memory Augmentation Unlocks Efficient Chain-of-Thought Reasoning",
        source: "arXiv",
        date: "2026-08-21",
        href: "https://arxiv.org/abs/2608.21265",
        summary:
          "Explores memory as a way to reduce expensive chain-of-thought traces, connecting reasoning efficiency with external context management.",
        tags: ["Memory", "Reasoning", "Efficiency"],
      },
      {
        type: "Paper",
        title: "Graph Engineering in the Era of LLM Agents: From Individual Intelligence to System Intelligence",
        source: "arXiv",
        date: "2026-08-21",
        href: "https://arxiv.org/abs/2608.21156",
        summary:
          "Surveys graph-oriented engineering for agent systems, a useful lens for moving from individual prompts toward coordinated, structured intelligence.",
        tags: ["Agent Systems", "Graph Engineering", "Context Engineering"],
      },
      {
        type: "GitHub",
        title: "pydantic/pydantic-ai",
        source: "GitHub",
        date: "Updated 2026-08-24",
        href: "https://github.com/pydantic/pydantic-ai",
        summary:
          "A typed Python agent framework from the Pydantic ecosystem, useful for studying how schemas, tools, and model interfaces can stay explicit in production code.",
        tags: ["Agent Framework", "Python", "Typed Interfaces"],
      },
      {
        type: "GitHub",
        title: "caura-ai/caura",
        source: "GitHub",
        date: "Updated 2026-08-24",
        href: "https://github.com/caura-ai/caura",
        summary:
          "An MCP-native shared-memory system for agent fleets with governance and audit trails, matching the emerging need for safer multi-agent context layers.",
        tags: ["Agent Memory", "MCP", "Governance"],
      },
    ],
  },
];
