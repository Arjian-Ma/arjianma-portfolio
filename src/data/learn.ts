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

export const lastUpdated = "2026-09-02";

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
        title: "Families of relative periodic orbits in the planar three-body problem via consecutive alignments",
        source: "arXiv",
        date: "2026-09-01",
        href: "https://arxiv.org/abs/2609.01585",
        summary:
          "Presents a numerical continuation procedure for families of relative periodic orbits, blending dynamical systems, celestial mechanics, and computational experimentation.",
        tags: ["Dynamical Systems", "Numerical Analysis", "Three-Body Problem"],
      },
      {
        type: "Paper",
        title: "Concentration of additive functionals of Stratonovich-type",
        source: "arXiv",
        date: "2026-09-01",
        href: "https://arxiv.org/abs/2609.01581",
        summary:
          "Develops concentration tools for Stratonovich-style additive functionals, useful for thinking about stochastic dynamics and inference from fluctuating paths.",
        tags: ["Probability", "Stochastic Processes", "Concentration"],
      },
      {
        type: "Paper",
        title: "Greedy sampling designs via reduced basis methods: optimal recovery in the uniform norm",
        source: "arXiv",
        date: "2026-09-01",
        href: "https://arxiv.org/abs/2609.01578",
        summary:
          "Connects RKHS sampling, reduced-basis ideas, and uniform-norm recovery, offering a rigorous lens on where to sample complex functions.",
        tags: ["Numerical Analysis", "RKHS", "Sampling"],
      },
      {
        type: "Paper",
        title: "Pointwise Majorization for sub-Weibull and Mixed Tail Processes with Applications in Quadratic Chaos and Ergodic Diffusions",
        source: "arXiv",
        date: "2026-09-01",
        href: "https://arxiv.org/abs/2609.01576",
        summary:
          "Refines chaining-style bounds into pointwise controls for heavy-tailed processes, with applications that touch probability, statistics, and learning theory.",
        tags: ["Probability", "Statistics", "Learning Theory"],
      },
      {
        type: "GitHub",
        title: "MoganLab/mogan",
        source: "GitHub",
        date: "Updated 2026-09-02",
        href: "https://github.com/MoganLab/mogan",
        summary:
          "A STEM-focused suite based on GNU TeXmacs; interesting as a live example of tooling for mathematical writing, computation, and technical exploration.",
        tags: ["Mathematics", "Scientific Writing", "STEM Tools"],
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
        title: "Beyond Scores: Understanding LLM-as-a-Judge Mechanisms in Summarization Evaluation",
        source: "arXiv",
        date: "2026-09-01",
        href: "https://arxiv.org/abs/2609.01604",
        summary:
          "Looks inside LLM-as-a-judge behavior for summarization, which is directly relevant to building more trustworthy evaluation pipelines.",
        tags: ["Evaluation", "LLM-as-Judge", "Summarization"],
      },
      {
        type: "Paper",
        title: "Shallower ReLU Network Representations via Exact Linear Algebra",
        source: "arXiv",
        date: "2026-09-01",
        href: "https://arxiv.org/abs/2607.21651",
        summary:
          "Uses exact linear algebra to sharpen what shallow ReLU networks can represent, a compact bridge between neural networks and theory.",
        tags: ["Neural Networks", "Representation", "Theory"],
      },
      {
        type: "Paper",
        title: "Facet-0: A Robotic Foundation Model for Contact-Rich Precise Manipulation",
        source: "arXiv",
        date: "2026-09-01",
        href: "https://arxiv.org/abs/2609.01596",
        summary:
          "Combines multimodal representation learning and RL post-training for precise contact-rich robotics, showing how foundation-model ideas move into embodied control.",
        tags: ["Robotics", "Foundation Models", "Reinforcement Learning"],
      },
      {
        type: "GitHub",
        title: "pytorch/executorch",
        source: "GitHub",
        date: "Updated 2026-09-02",
        href: "https://github.com/pytorch/executorch",
        summary:
          "PyTorch's on-device AI runtime is a practical reference for deploying models across mobile, embedded, and edge environments.",
        tags: ["PyTorch", "Edge AI", "Deployment"],
      },
      {
        type: "GitHub",
        title: "vllm-project/vllm",
        source: "GitHub",
        date: "Updated 2026-09-02",
        href: "https://github.com/vllm-project/vllm",
        summary:
          "A high-throughput LLM inference engine worth tracking for real-world serving, batching, and memory-management patterns.",
        tags: ["LLM Inference", "Serving", "Systems"],
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
        title: "Efficient SWE Agent Benchmarking via Trajectory-Aware Evaluation",
        source: "arXiv",
        date: "2026-09-01",
        href: "https://arxiv.org/abs/2609.01603",
        summary:
          "Proposes trajectory-aware benchmark sampling for software engineering agents, aiming to make expensive agent evaluation more informative per run.",
        tags: ["SWE Agents", "Evaluation", "Benchmarks"],
      },
      {
        type: "Paper",
        title: "CordisBench: Can Language Models Reason About Component Lifecycles in Dynamic Agent Harnesses?",
        source: "arXiv",
        date: "2026-09-01",
        href: "https://arxiv.org/abs/2609.01600",
        summary:
          "Tests whether models can reason about dependency and cleanup effects inside dynamic agent harnesses, a practical failure mode for tool-using systems.",
        tags: ["Agent Harnesses", "Lifecycle Reasoning", "Benchmarks"],
      },
      {
        type: "Paper",
        title: "The Rise of Verbal Reinforcement Learning",
        source: "arXiv",
        date: "2026-09-01",
        href: "https://arxiv.org/abs/2609.01597",
        summary:
          "Frames natural-language feedback as a reinforcement-learning signal for language agents, clarifying when feedback changes prompts, memory, or policies.",
        tags: ["Verbal RL", "Feedback", "Language Agents"],
      },
      {
        type: "Paper",
        title: "EvoSCM: Scientific Belief Revision Through Causal Model Evolution and Experimentation",
        source: "arXiv",
        date: "2026-09-01",
        href: "https://arxiv.org/abs/2609.01526",
        summary:
          "Gives scientific agents explicit evolving causal models, making belief revision and experiment-driven learning more inspectable.",
        tags: ["Scientific Agents", "Causal Models", "Belief Revision"],
      },
      {
        type: "GitHub",
        title: "infiniflow/ragflow",
        source: "GitHub",
        date: "Updated 2026-09-02",
        href: "https://github.com/infiniflow/ragflow",
        summary:
          "A substantial open-source RAG engine with agent capabilities, useful for studying production context layers around LLM applications.",
        tags: ["RAG", "Agentic Retrieval", "LLM Apps"],
      },
    ],
  },
];
