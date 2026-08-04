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

export const lastUpdated = "2026-08-04";

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
        title: "A Simple Approximation to the Distribution of the Ridge Regression Estimator",
        source: "arXiv",
        date: "2026-08-03",
        href: "https://arxiv.org/abs/2608.02539",
        summary:
          "Builds a finite-sample Gaussian approximation for ridge regression that keeps the bias-variance tradeoff visible, a useful bridge between statistics, optimization, and applied modeling.",
        tags: ["Statistics", "Ridge Regression", "Asymptotics"],
      },
      {
        type: "Paper",
        title: "Interaction Is Not Necessary for Order-Optimal 1-Bit Mean Estimation",
        source: "arXiv",
        date: "2026-08-03",
        href: "https://arxiv.org/abs/2608.02538",
        summary:
          "Shows that fully non-adaptive one-bit protocols can match optimal adaptive mean-estimation rates, sharpening intuition about communication-limited statistics.",
        tags: ["Statistical Learning", "Estimation", "Information Theory"],
      },
      {
        type: "Paper",
        title: "On calculating polar solvation energy of nonrigid proteins in the Poisson-Boltzmann theory",
        source: "arXiv",
        date: "2026-08-03",
        href: "https://arxiv.org/abs/2608.02525",
        summary:
          "Extends Poisson-Boltzmann solvation-energy calculations to nonrigid protein conformational changes, a concrete example of careful numerical PDE modeling in biomolecular systems.",
        tags: ["Numerical PDEs", "Poisson-Boltzmann", "Scientific Computing"],
      },
      {
        type: "Paper",
        title: "Hidden Star-Convexity in Policy Optimization for Gain-Scheduled LQR: Extended Version",
        source: "arXiv",
        date: "2026-08-03",
        href: "https://arxiv.org/abs/2608.02493",
        summary:
          "Finds a star-convex structure inside gain-scheduled LQR policy optimization, connecting control theory with global convergence guarantees.",
        tags: ["Optimization", "Control", "LQR"],
      },
      {
        type: "GitHub",
        title: "statsmodels/statsmodels",
        source: "GitHub",
        date: "Updated 2026-08-04",
        href: "https://github.com/statsmodels/statsmodels",
        summary:
          "A mature Python toolkit for statistical modeling and econometrics, worth following for rigorous applied statistics APIs and reproducible analysis patterns.",
        tags: ["Statistics", "Econometrics", "Python"],
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
        title: "UEmbed: Unified Sparse and Dense Multimodal Embeddings",
        source: "arXiv",
        date: "2026-08-03",
        href: "https://arxiv.org/abs/2608.02583",
        summary:
          "Produces sparse lexical and dense multimodal embeddings in one decoder-only forward pass, directly relevant to efficient retrieval and RAG systems.",
        tags: ["Embeddings", "Multimodal", "Retrieval"],
      },
      {
        type: "Paper",
        title: "Structured Memory for Edge Language Models: Persistent Context and Corpus Retrieval via O(1) SSM State Injection",
        source: "arXiv",
        date: "2026-08-03",
        href: "https://arxiv.org/abs/2608.02560",
        summary:
          "Uses precomputed SSM hidden states for constant-time context injection, a promising idea for low-latency retrieval on edge language models.",
        tags: ["RAG", "State-Space Models", "Edge AI"],
      },
      {
        type: "Paper",
        title: "Analytic Planning under Uncertainty with Moment Closure",
        source: "arXiv",
        date: "2026-08-03",
        href: "https://arxiv.org/abs/2608.02519",
        summary:
          "Revisits model-based RL planning with distribution-aware uncertainty propagation, useful for understanding the tradeoff between sampling variance and deterministic shortcuts.",
        tags: ["Reinforcement Learning", "Planning", "Uncertainty"],
      },
      {
        type: "Paper",
        title: "A Simple Approximation to the Distribution of the Ridge Regression Estimator",
        source: "arXiv",
        date: "2026-08-03",
        href: "https://arxiv.org/abs/2608.02539",
        summary:
          "A compact statistical lens on ridge regression that can help connect regularization choices with uncertainty estimates in practical ML pipelines.",
        tags: ["Statistical ML", "Regression", "Regularization"],
      },
      {
        type: "GitHub",
        title: "huggingface/transformers",
        source: "GitHub",
        date: "Updated 2026-08-04",
        href: "https://github.com/huggingface/transformers",
        summary:
          "The central model-definition library for modern text, vision, audio, and multimodal ML, useful to track for practical changes in model APIs and deployment workflows.",
        tags: ["Transformers", "Model APIs", "Deep Learning"],
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
        title: "AtumAI: A Principled Framework for Agentic Generation of Datacenter Control-Plane Policies",
        source: "arXiv",
        date: "2026-08-03",
        href: "https://arxiv.org/abs/2608.02569",
        summary:
          "Applies agentic search to datacenter control-plane policy design with emphasis on structure, transfer, and constraints, a practical testbed for agent usefulness.",
        tags: ["Agentic Systems", "Datacenters", "Policy Search"],
      },
      {
        type: "Paper",
        title: "Structured Memory for Edge Language Models: Persistent Context and Corpus Retrieval via O(1) SSM State Injection",
        source: "arXiv",
        date: "2026-08-03",
        href: "https://arxiv.org/abs/2608.02560",
        summary:
          "Turns persistent corpus context into injectable SSM states, an interesting memory architecture for agents that must retrieve without long prefill costs.",
        tags: ["Agent Memory", "RAG", "Edge Models"],
      },
      {
        type: "Paper",
        title: "A Taxonomy of Cognitive Capability Gaps in Generative and Agentic AI",
        source: "arXiv",
        date: "2026-08-03",
        href: "https://arxiv.org/abs/2608.02553",
        summary:
          "Organizes gaps around persistent state, autonomy, self-monitoring, and control, making it a useful map for reading agent papers critically.",
        tags: ["Cognitive AI", "Agentic AI", "Survey"],
      },
      {
        type: "Paper",
        title: "Magnet: Detecting Cross-Session AI Misuse Through Capability Accumulation",
        source: "arXiv",
        date: "2026-08-03",
        href: "https://arxiv.org/abs/2608.02518",
        summary:
          "Targets a realistic safety gap where attackers split harmful goals across sessions, highlighting why agent monitoring needs cross-session reasoning.",
        tags: ["Agent Safety", "Misuse Detection", "Security"],
      },
      {
        type: "GitHub",
        title: "crewAIInc/crewAI",
        source: "GitHub",
        date: "Updated 2026-08-04",
        href: "https://github.com/crewAIInc/crewAI",
        summary:
          "A widely used framework for orchestrating role-based autonomous agents, useful for studying how multi-agent workflows are packaged for developers.",
        tags: ["Agent Framework", "Multi-Agent", "Orchestration"],
      },
    ],
  },
];
