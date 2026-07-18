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

export const lastUpdated = "2026-07-18";

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
        title: "Delocalization of bias in unadjusted Hamiltonian Monte Carlo and underdamped Langevin",
        source: "arXiv",
        date: "2026-07-16",
        href: "https://arxiv.org/abs/2607.15208",
        summary:
          "Extends delocalization-of-bias analysis to unadjusted HMC and underdamped Langevin, offering a sharper view of when biased samplers can still be useful at scale.",
        tags: ["Probability", "Sampling", "Hamiltonian Monte Carlo"],
      },
      {
        type: "Paper",
        title: "Efficient higher-order local time integration for Friedrichs' systems",
        source: "arXiv",
        date: "2026-07-16",
        href: "https://arxiv.org/abs/2607.15192",
        summary:
          "Develops local time-integration schemes for spatial discretizations with only a few small mesh elements, a practical numerical-analysis problem in multiscale simulation.",
        tags: ["Numerical Analysis", "Time Integration", "PDEs"],
      },
      {
        type: "GitHub",
        title: "stdlib-js/stdlib",
        source: "GitHub",
        date: "Updated 2026-07-18",
        href: "https://github.com/stdlib-js/stdlib",
        summary:
          "A broad numerical and statistical standard library for JavaScript/TypeScript, useful for seeing how scientific-computing primitives are packaged for production web stacks.",
        tags: ["Numerical Computing", "Statistics", "TypeScript"],
      },
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
        type: "GitHub",
        title: "NVIDIA/raft",
        source: "GitHub",
        date: "Updated 2026-07-17",
        href: "https://github.com/NVIDIA/raft",
        summary:
          "CUDA-accelerated primitives for nearest neighbors, clustering, solvers, sampling, and vector search; useful for seeing how numerical and statistical building blocks are engineered for GPUs.",
        tags: ["GPU Computing", "Statistics", "Linear Algebra"],
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
        title: "RoboTTT: Context Scaling for Robot Policies",
        source: "arXiv",
        date: "2026-07-16",
        href: "https://arxiv.org/abs/2607.15275",
        summary:
          "Scales robot-policy context to thousands of timesteps with test-time training, pointing toward models that can adapt from long demonstrations without adding inference latency.",
        tags: ["Robot Learning", "Test-Time Training", "Long Context"],
      },
      {
        type: "Paper",
        title: "Pretraining Data Can Be Poisoned through Computational Propaganda",
        source: "arXiv",
        date: "2026-07-16",
        href: "https://arxiv.org/abs/2607.15267",
        summary:
          "Shows how adversarial content can survive realistic data-curation pipelines, making pretraining-data security a concrete systems problem rather than only a benchmark concern.",
        tags: ["Data Poisoning", "Pretraining", "AI Security"],
      },
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
        title: "vllm-project/vllm",
        source: "GitHub",
        date: "Updated 2026-07-17",
        href: "https://github.com/vllm-project/vllm",
        summary:
          "A high-throughput LLM inference engine whose active development is worth following for serving, batching, memory, and deployment patterns.",
        tags: ["LLM Serving", "Inference", "PyTorch"],
      },
      {
        type: "GitHub",
        title: "vllm-project/vllm-omni",
        source: "GitHub",
        date: "Updated 2026-07-18",
        href: "https://github.com/vllm-project/vllm-omni",
        summary:
          "Extends efficient model serving toward omni-modal generation and inference, making it a practical follow-up to core vLLM for multimodal systems work.",
        tags: ["Multimodal Inference", "Model Serving", "PyTorch"],
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
        title: "Beyond Success Rate: Cost-Aware Evaluation of Offensive and Defensive Security Agents",
        source: "arXiv",
        date: "2026-07-16",
        href: "https://arxiv.org/abs/2607.15263",
        summary:
          "Evaluates security agents through both task success and the cost of reasoning steps, tool calls, and telemetry queries, which is closer to real operational constraints.",
        tags: ["Security Agents", "Evaluation", "Cost-Aware AI"],
      },
      {
        type: "Paper",
        title: "Plover: Steering GUI Agents through Plan-Centric Interaction",
        source: "arXiv",
        date: "2026-07-16",
        href: "https://arxiv.org/abs/2607.15193",
        summary:
          "Makes GUI-agent plans inspectable and steerable, highlighting human oversight as a core design layer for reliable desktop automation.",
        tags: ["GUI Agents", "Planning", "Human Oversight"],
      },
      {
        type: "Paper",
        title: "OmniaBench: Benchmarking General AI Agents Across Diverse Scenarios",
        source: "arXiv",
        date: "2026-07-16",
        href: "https://arxiv.org/abs/2607.14989",
        summary:
          "Proposes a broader benchmark for general agents across heterogeneous tasks, tools, and interaction patterns instead of a single narrow workflow.",
        tags: ["Agent Benchmarks", "Tool Use", "Evaluation"],
      },
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
        title: "MemOps: Benchmarking Lifecycle Memory Operations in Long-Horizon Conversations",
        source: "arXiv",
        date: "2026-07-14",
        href: "https://arxiv.org/abs/2607.12893",
        summary:
          "Benchmarks the full lifecycle of agent memory operations rather than only downstream question answering, making long-horizon memory evaluation more diagnostic.",
        tags: ["Agent Memory", "Benchmarks", "Long-Horizon Tasks"],
      },
      {
        type: "GitHub",
        title: "mastra-ai/mastra",
        source: "GitHub",
        date: "Updated 2026-07-18",
        href: "https://github.com/mastra-ai/mastra",
        summary:
          "A TypeScript framework for agentic applications with workflows, evals, and MCP support, worth tracking for production-oriented agent architecture patterns.",
        tags: ["Agent Framework", "Workflows", "TypeScript"],
      },
    ],
  },
];
