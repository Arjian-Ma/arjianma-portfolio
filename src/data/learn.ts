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

export const lastUpdated = "2026-08-26";

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
        title: "Mass scaling of the near-critical Ising model in dimensions d≥4",
        source: "arXiv",
        date: "2026-08-25",
        href: "https://arxiv.org/abs/2608.24868",
        summary:
          "Derives near-critical bounds for high-dimensional Ising correlations, a clean bridge between probability, statistical mechanics, and scaling intuition.",
        tags: ["Probability", "Ising Model", "Scaling"],
      },
      {
        type: "Paper",
        title: "Uniform logarithmic Sobolev inequalities for the 2D Coulomb gas at the diffusive temperature scale",
        source: "arXiv",
        date: "2026-08-25",
        href: "https://arxiv.org/abs/2608.24863",
        summary:
          "Studies functional inequalities for Coulomb gases in a delicate scaling regime, useful for understanding how concentration tools behave in interacting particle systems.",
        tags: ["Probability", "Coulomb Gas", "Functional Inequalities"],
      },
      {
        type: "Paper",
        title: "Real-time inverse solutions via neural matrix operators",
        source: "arXiv",
        date: "2026-08-25",
        href: "https://arxiv.org/abs/2608.24833",
        summary:
          "Targets fast inverse-problem solves for digital twins, connecting numerical analysis with operator-learning ideas for real-time prediction and control.",
        tags: ["Numerical Analysis", "Inverse Problems", "Operator Learning"],
      },
      {
        type: "GitHub",
        title: "oscar-system/Oscar.jl",
        source: "GitHub",
        date: "Updated 2026-08-26",
        href: "https://github.com/oscar-system/Oscar.jl",
        summary:
          "A comprehensive Julia computer algebra system for algebra, geometry, and number theory, worth reading for large-scale mathematical software design.",
        tags: ["Computer Algebra", "Julia", "Mathematics"],
      },
      {
        type: "GitHub",
        title: "JuliaSymbolics/Symbolics.jl",
        source: "GitHub",
        date: "Updated 2026-08-26",
        href: "https://github.com/JuliaSymbolics/Symbolics.jl",
        summary:
          "A symbolic-programming system aimed at numerical software, showing how algebraic manipulation can support simulation and scientific computing workflows.",
        tags: ["Symbolic Computing", "Numerical Software", "Julia"],
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
        title: "What FID Hides: Detecting, Ranking, and Diagnosing Deviations in Generative Evaluation",
        source: "arXiv",
        date: "2026-08-25",
        href: "https://arxiv.org/abs/2608.24881",
        summary:
          "Looks beyond a single FID/KID number to diagnose distributional deviations, a useful reminder that generative-model evaluation needs calibrated tests and explanations.",
        tags: ["Generative Models", "Evaluation", "Diagnostics"],
      },
      {
        type: "Paper",
        title: "Bellman Calibration for Marginalized Importance Weighting in Offline Reinforcement Learning",
        source: "arXiv",
        date: "2026-08-25",
        href: "https://arxiv.org/abs/2608.24858",
        summary:
          "Revisits occupancy-ratio estimation for offline RL through Bellman calibration, connecting theory to more reliable off-policy evaluation.",
        tags: ["Offline RL", "Off-Policy Evaluation", "Bellman Equations"],
      },
      {
        type: "Paper",
        title: "Parameterized Complexity of Lp-Lipschitz Constants for Input Convex Neural Networks and Lp-Norm Maximization over Zonotopes",
        source: "arXiv",
        date: "2026-08-25",
        href: "https://arxiv.org/abs/2608.24865",
        summary:
          "Analyzes when neural-network sensitivity certificates are computationally hard, clarifying limits for robustness work on input-convex models.",
        tags: ["Robustness", "Complexity", "Neural Networks"],
      },
      {
        type: "GitHub",
        title: "vllm-project/vllm",
        source: "GitHub",
        date: "Updated 2026-08-26",
        href: "https://github.com/vllm-project/vllm",
        summary:
          "A high-throughput LLM inference engine that is useful for learning the systems layer behind efficient model serving.",
        tags: ["LLM Inference", "Serving", "Systems"],
      },
      {
        type: "GitHub",
        title: "NVIDIA/TensorRT-LLM",
        source: "GitHub",
        date: "Updated 2026-08-26",
        href: "https://github.com/NVIDIA/TensorRT-LLM",
        summary:
          "Production-focused tooling for defining and optimizing LLM inference on NVIDIA hardware, helpful for connecting model architecture to deployment performance.",
        tags: ["Inference Optimization", "LLMs", "GPU"],
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
        title: "Recursive Experiential-Working Memory Evolution for Long-Horizon Agent Harnesses",
        source: "arXiv",
        date: "2026-08-25",
        href: "https://arxiv.org/abs/2608.24876",
        summary:
          "Introduces Recuris for evolving experiential working memory in long-horizon harnesses, directly relevant to agents that must keep useful state without drowning in history.",
        tags: ["Agent Memory", "Long-Horizon Tasks", "Harnesses"],
      },
      {
        type: "Paper",
        title: "SPO++: Stream-Aligned Policy Optimization for Asynchronous Agentic RL",
        source: "arXiv",
        date: "2026-08-25",
        href: "https://arxiv.org/abs/2608.24870",
        summary:
          "Optimizes agentic RL for variable-length tool-use trajectories without waiting on synchronized rollout groups, a practical concern for training asynchronous agents.",
        tags: ["Agentic RL", "Tool Use", "Policy Optimization"],
      },
      {
        type: "Paper",
        title: "BrowserForge: Scaling Web Episode via Parallel Browser Sandboxes",
        source: "arXiv",
        date: "2026-08-25",
        href: "https://arxiv.org/abs/2608.24848",
        summary:
          "Focuses on generating scalable browser-interaction episodes, a key data bottleneck for training and evaluating web agents that act through rendered pages.",
        tags: ["Web Agents", "Browser Automation", "Data Generation"],
      },
      {
        type: "Paper",
        title: "Structurally-bounded Agentic Graph Exploration for Evidence-Grounded Scholarly DeepSearch",
        source: "arXiv",
        date: "2026-08-25",
        href: "https://arxiv.org/abs/2608.24809",
        summary:
          "Proposes a bounded citation-graph exploration workflow, showing a more inspectable alternative to open-ended deep-research agent loops.",
        tags: ["Research Agents", "Graph Search", "Evidence Grounding"],
      },
      {
        type: "GitHub",
        title: "omnigent-ai/omnigent",
        source: "GitHub",
        date: "Updated 2026-08-26",
        href: "https://github.com/omnigent-ai/omnigent",
        summary:
          "An agent framework and meta-harness for orchestrating coding agents with policy and sandbox controls, useful for studying the control layer around autonomous tools.",
        tags: ["Agent Framework", "Orchestration", "Sandboxing"],
      },
      {
        type: "GitHub",
        title: "infiniflow/ragflow",
        source: "GitHub",
        date: "Updated 2026-08-26",
        href: "https://github.com/infiniflow/ragflow",
        summary:
          "A retrieval-augmented generation engine with agent capabilities, helpful for understanding how production RAG systems combine parsing, retrieval, and workflow logic.",
        tags: ["Agentic RAG", "Retrieval", "Workflows"],
      },
    ],
  },
];
