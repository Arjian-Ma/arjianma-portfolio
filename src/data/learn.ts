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

export const lastUpdated = "2026-08-25";

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
        title: "The complexity landscape of robust (integer) linear programming",
        source: "arXiv",
        date: "2026-08-25",
        href: "https://arxiv.org/abs/2608.21574",
        summary:
          "Maps the computational complexity of classic robust optimization variants, a useful guide for deciding when uncertainty-aware linear models are tractable or inherently hard.",
        tags: ["Robust Optimization", "Integer Programming", "Complexity"],
      },
      {
        type: "Paper",
        title: "A counterexample to global convergence of classical DFP under the standard strong Wolfe conditions",
        source: "arXiv",
        date: "2026-08-25",
        href: "https://arxiv.org/abs/2608.21708",
        summary:
          "Resolves a long-standing quasi-Newton question with a counterexample, sharpening intuition about where elegant optimization algorithms can still fail.",
        tags: ["Optimization", "Quasi-Newton", "DFP"],
      },
      {
        type: "Paper",
        title: "Non-asymptotic Analysis of Matérn Regression: The Roles of Target and Kernel Lengthscales",
        source: "arXiv",
        date: "2026-08-25",
        href: "https://arxiv.org/abs/2608.22553",
        summary:
          "Connects kernel-regression guarantees to practical lengthscale choices, bridging statistical theory, numerical analysis, and model selection.",
        tags: ["Statistics", "Kernel Methods", "Numerical Analysis"],
      },
      {
        type: "Paper",
        title: "When Is Two-Stage Sample Robust Optimization Asymptotically Optimal? A Simple Perspective",
        source: "arXiv",
        date: "2026-08-24",
        href: "https://arxiv.org/abs/2608.22999",
        summary:
          "Shows how the geometry of the support set controls asymptotic optimality in two-stage sample robust optimization, turning a technical condition into a clear diagnostic.",
        tags: ["Stochastic Optimization", "Robust Optimization", "Geometry"],
      },
      {
        type: "GitHub",
        title: "statsmodels/statsmodels",
        source: "GitHub",
        date: "Updated 2026-08-25",
        href: "https://github.com/statsmodels/statsmodels",
        summary:
          "A mature Python library for statistical modeling and econometrics, useful for seeing how rigorous inference tools are engineered for everyday data work.",
        tags: ["Statistics", "Econometrics", "Python"],
      },
      {
        type: "GitHub",
        title: "stdlib-js/stdlib",
        source: "GitHub",
        date: "Updated 2026-08-25",
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
        title: "The geometry of AI validation: Exact certification limits for iid best-of-N search",
        source: "arXiv",
        date: "2026-08-25",
        href: "https://arxiv.org/abs/2608.21496",
        summary:
          "Studies what evidence can certify after best-of-N selection, a timely warning for evaluation pipelines that generate many candidates and report only the winner.",
        tags: ["Evaluation", "Certification", "Best-of-N"],
      },
      {
        type: "Paper",
        title: "Beyond Sparse Weights: When Is Attention Compressible?",
        source: "arXiv",
        date: "2026-08-25",
        href: "https://arxiv.org/abs/2608.21541",
        summary:
          "Looks past sparse attention weights to ask when KV-cache compression actually preserves useful context, directly relevant to efficient long-context inference.",
        tags: ["Attention", "KV Cache", "LLM Inference"],
      },
      {
        type: "Paper",
        title: "ChemDIRT: A Diversified Instruction, Representation, and Task Benchmark for Robust Chemistry-LLM Evaluation",
        source: "arXiv",
        date: "2026-08-25",
        href: "https://arxiv.org/abs/2608.21504",
        summary:
          "Adds a chemistry-focused benchmark for LLM evaluation, useful for tracking whether scientific language models generalize beyond generic instruction following.",
        tags: ["Benchmarks", "Scientific ML", "Chemistry LLMs"],
      },
      {
        type: "Paper",
        title: "Token-Level Likelihood-Array Regression for Membership Inference and AI-Generated Text Detection",
        source: "arXiv",
        date: "2026-08-25",
        href: "https://arxiv.org/abs/2608.22179",
        summary:
          "Uses token-level likelihood structure for both membership inference and generated-text detection, connecting privacy risk with model-output forensics.",
        tags: ["Model Auditing", "Privacy", "Detection"],
      },
      {
        type: "GitHub",
        title: "huggingface/transformers",
        source: "GitHub",
        date: "Updated 2026-08-25",
        href: "https://github.com/huggingface/transformers",
        summary:
          "The central model-definition toolkit for modern text, vision, audio, and multimodal models, still one of the best codebases to read for practical ML systems.",
        tags: ["Transformers", "Multimodal", "Python"],
      },
      {
        type: "GitHub",
        title: "bentoml/BentoML",
        source: "GitHub",
        date: "Updated 2026-08-25",
        href: "https://github.com/bentoml/BentoML",
        summary:
          "A production-oriented framework for serving model inference APIs and LLM applications, useful for learning the deployment layer around ML models.",
        tags: ["Model Serving", "LLMOps", "Inference"],
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
        title: "LitReview Arena: Evaluating Literature Review Agents with Battle-Style Peer Review Platform",
        source: "arXiv",
        date: "2026-08-25",
        href: "https://arxiv.org/abs/2608.21374",
        summary:
          "Turns literature-review agents into a comparative arena judged through peer-review-style battles, a concrete step toward evaluating research assistants.",
        tags: ["Agent Evaluation", "Research Agents", "Benchmarks"],
      },
      {
        type: "Paper",
        title: "SchemaRouter: Field-Aware Tool Routing for Efficient Heterogeneous Agentic RAG",
        source: "arXiv",
        date: "2026-08-25",
        href: "https://arxiv.org/abs/2608.21375",
        summary:
          "Focuses on routing tools and data sources in heterogeneous agentic RAG, exactly the kind of plumbing that makes retrieval agents practical.",
        tags: ["Agentic RAG", "Tool Routing", "Retrieval"],
      },
      {
        type: "Paper",
        title: "Retrieval-grounded robot program generation and simulation-based correction via Model Context Protocol",
        source: "arXiv",
        date: "2026-08-25",
        href: "https://arxiv.org/abs/2608.21417",
        summary:
          "Combines retrieval, robotics code generation, simulation feedback, and MCP, showing how agent tooling can move from text workflows into physical automation.",
        tags: ["Robotics Agents", "MCP", "Tool Use"],
      },
      {
        type: "Paper",
        title: "AIREP: A Protocol for Per-Decision Evidence in AI Runtime Governance",
        source: "arXiv",
        date: "2026-08-25",
        href: "https://arxiv.org/abs/2608.21363",
        summary:
          "Proposes evidence records for individual runtime decisions, a useful governance primitive for agents that block, defer, redact, or call tools.",
        tags: ["Runtime Governance", "Auditability", "Agent Safety"],
      },
      {
        type: "GitHub",
        title: "omnigent-ai/omnigent",
        source: "GitHub",
        date: "Updated 2026-08-25",
        href: "https://github.com/omnigent-ai/omnigent",
        summary:
          "A meta-harness for orchestrating coding agents with policy, sandboxing, and real-time collaboration, useful for studying the agent-control layer above models.",
        tags: ["Agent Framework", "Orchestration", "Governance"],
      },
      {
        type: "GitHub",
        title: "deepset-ai/haystack",
        source: "GitHub",
        date: "Updated 2026-08-25",
        href: "https://github.com/deepset-ai/haystack",
        summary:
          "A modular orchestration framework for RAG, routing, memory, and agent workflows, helpful for learning production context-engineering patterns.",
        tags: ["Agentic RAG", "Pipelines", "Context Engineering"],
      },
    ],
  },
];
