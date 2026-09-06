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

export const lastUpdated = "2026-09-06";

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
        title: "Computation of Strong Solutions to Stochastic Variational Inequalities",
        source: "arXiv",
        date: "2026-09-03",
        href: "https://arxiv.org/abs/2609.04188",
        summary:
          "Builds a computational framework for monotone stochastic variational inequalities, connecting optimization algorithms with stochastic modeling.",
        tags: ["Optimization", "Stochastic Systems", "Variational Inequalities"],
      },
      {
        type: "Paper",
        title:
          "Thermodynamic Concentration Inequalities: Controlling Uncertainty in Finite-Time and Small-Sample Thermodynamic Inference",
        source: "arXiv",
        date: "2026-09-03",
        href: "https://arxiv.org/abs/2609.04162",
        summary:
          "Derives nonasymptotic concentration bounds for currents of ergodic diffusions, a useful bridge between probability and uncertainty-aware physical inference.",
        tags: ["Probability", "Concentration", "Stochastic Processes"],
      },
      {
        type: "GitHub",
        title: "statsmodels/statsmodels",
        source: "GitHub",
        date: "Updated 2026-09-06",
        href: "https://github.com/statsmodels/statsmodels",
        summary:
          "A mature Python library for statistical modeling and econometrics, useful for learning how rigorous statistical methods are exposed through production scientific software.",
        tags: ["Statistics", "Python", "Scientific Computing"],
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
        type: "GitHub",
        title: "stdlib-js/stdlib",
        source: "GitHub",
        date: "Updated 2026-09-04",
        href: "https://github.com/stdlib-js/stdlib",
        summary:
          "A substantial numerical and scientific standard library for JavaScript/TypeScript, useful for studying how mathematical tooling is organized in production.",
        tags: ["Numerical Computing", "Statistics", "Scientific Tools"],
      },
      {
        type: "GitHub",
        title: "oscar-system/Oscar.jl",
        source: "GitHub",
        date: "Updated 2026-09-05",
        href: "https://github.com/oscar-system/Oscar.jl",
        summary:
          "A comprehensive Julia-based computer algebra system for algebra, geometry, and number theory, useful for seeing modern mathematical software design in practice.",
        tags: ["Computer Algebra", "Julia", "Mathematical Software"],
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
        title: "Compile by Training: Turning Natural-Language Specifications into Local Neural Functions",
        source: "arXiv",
        date: "2026-09-03",
        href: "https://arxiv.org/abs/2609.04199",
        summary:
          "Explores replacing repeated remote LLM calls with trained local neural functions, a practical idea for lowering cost, latency, and provider dependence.",
        tags: ["LLMs", "Model Distillation", "Applied ML"],
      },
      {
        type: "Paper",
        title:
          "Clean Engineering, Unstable Measurement: A Preregistered Reliability Failure of Black-Box LLM Observers on Shared Endpoints",
        source: "arXiv",
        date: "2026-09-03",
        href: "https://arxiv.org/abs/2609.04198",
        summary:
          "Tests black-box LLM judges as measurement instruments and highlights reliability risks that matter for evaluation pipelines and leaderboards.",
        tags: ["Evaluation", "LLM-as-Judge", "Reliability"],
      },
      {
        type: "Paper",
        title: "Legibility is Not Interpretability: Comparing Judged and Actual Importance in Chain-Of-Thought Reasoning",
        source: "arXiv",
        date: "2026-09-03",
        href: "https://arxiv.org/abs/2609.04194",
        summary:
          "Challenges the assumption that readable chain-of-thought faithfully explains model decisions, sharpening how to think about interpretability.",
        tags: ["Interpretability", "Chain-of-Thought", "Evaluation"],
      },
      {
        type: "GitHub",
        title: "scverse/scvi-tools",
        source: "GitHub",
        date: "Updated 2026-09-06",
        href: "https://github.com/scverse/scvi-tools",
        summary:
          "A widely used toolkit for deep probabilistic analysis of single-cell and spatial omics data, showing how modern ML methods become reusable scientific workflows.",
        tags: ["Probabilistic ML", "Scientific ML", "Biology"],
      },
      {
        type: "GitHub",
        title: "vllm-project/vllm",
        source: "GitHub",
        date: "Updated 2026-09-04",
        href: "https://github.com/vllm-project/vllm",
        summary:
          "A high-throughput LLM inference engine worth tracking for real-world serving, batching, and memory-management patterns.",
        tags: ["LLM Inference", "Serving", "Systems"],
      },
      {
        type: "GitHub",
        title: "sgl-project/sglang",
        source: "GitHub",
        date: "Updated 2026-09-05",
        href: "https://github.com/sgl-project/sglang",
        summary:
          "A fast serving framework for large language and multimodal models, complementing vLLM and TensorRT-LLM with another production-oriented inference stack to study.",
        tags: ["LLM Inference", "Serving", "Multimodal Models"],
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
        title: "A Case Study on Emergent Cheating and Whistleblowing in Autonomous Research Swarms",
        source: "arXiv",
        date: "2026-09-03",
        href: "https://arxiv.org/abs/2609.04170",
        summary:
          "Studies how multi-agent research systems can develop coordination failures, making it relevant to safety, incentives, and monitoring for agent teams.",
        tags: ["Multi-Agent Systems", "AI Safety", "Research Agents"],
      },
      {
        type: "Paper",
        title: "SENTINEL-RL: Offloading Topological Reasoning from LLM Agents in the Security Operations Center",
        source: "arXiv",
        date: "2026-09-03",
        href: "https://arxiv.org/abs/2609.04159",
        summary:
          "Pairs LLM security agents with specialized topological reasoning, showing a concrete pattern for tool-augmented agents in complex environments.",
        tags: ["Security Agents", "Tool Use", "Reasoning"],
      },
      {
        type: "GitHub",
        title: "callstack/agent-device",
        source: "GitHub",
        date: "Updated 2026-09-06",
        href: "https://github.com/callstack/agent-device",
        summary:
          "Provides mobile app automation and verification tools for AI coding agents, a practical bridge between agent workflows and real device testing.",
        tags: ["Agent Tools", "Mobile Automation", "Verification"],
      },
      {
        type: "Paper",
        title: "PatchBench: Evaluating AI Agents for Vulnerability Patching",
        source: "arXiv",
        date: "2026-09-03",
        href: "https://arxiv.org/abs/2609.04075",
        summary:
          "Introduces a benchmark for vulnerability-patching agents that goes beyond simple proof-of-concept crash checks toward more realistic evaluation.",
        tags: ["SWE Agents", "Security", "Benchmarks"],
      },
      {
        type: "GitHub",
        title: "agno-agi/agno",
        source: "GitHub",
        date: "Updated 2026-09-04",
        href: "https://github.com/agno-agi/agno",
        summary:
          "A widely used framework for building and managing agent platforms, useful for studying memory, tools, workflows, and production agent infrastructure.",
        tags: ["Agent Framework", "Tool Use", "Agent Platforms"],
      },
      {
        type: "GitHub",
        title: "promptfoo/promptfoo",
        source: "GitHub",
        date: "Updated 2026-09-05",
        href: "https://github.com/promptfoo/promptfoo",
        summary:
          "A practical evaluation and red-teaming toolkit for prompts, agents, and RAG systems, helpful for learning how agent behavior is tested before deployment.",
        tags: ["Agent Evaluation", "RAG", "Red Teaming"],
      },
    ],
  },
];
