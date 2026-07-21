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

export const lastUpdated = "2026-07-21";

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
        title: "Sharp Asymptotics for Regularized Optimal Transport",
        source: "arXiv",
        date: "2026-07-20",
        href: "https://arxiv.org/abs/2607.18191",
        summary:
          "Derives exact small-regularization limits for Lp and entropic optimal transport, sharpening the theory behind one of the most-used numerical tools in statistics and ML.",
        tags: ["Optimal Transport", "Probability", "Optimization"],
      },
      {
        type: "Paper",
        title: "Risk-sensitive exit-time control for stochastic differential equations with path-dependent coefficients",
        source: "arXiv",
        date: "2026-07-20",
        href: "https://arxiv.org/abs/2607.18192",
        summary:
          "Studies small-noise asymptotics for path-dependent stochastic control, connecting probability, optimal control, and robust decision-making under rare events.",
        tags: ["Stochastic Control", "Probability", "SDEs"],
      },
      {
        type: "Paper",
        title: "Optimal control of symmetry-breaking dynamics near criticality",
        source: "arXiv",
        date: "2026-07-17",
        href: "https://arxiv.org/abs/2607.16188",
        summary:
          "Uses Pontryagin-style asymptotics to study how control strength changes optimal steering near pitchfork bifurcations, connecting dynamical-systems theory with natural symmetry-breaking processes.",
        tags: ["Optimal Control", "Dynamical Systems", "Bifurcations"],
      },
      {
        type: "Paper",
        title: "Cluster-Aware Matching via Laplacian Optimal Transport",
        source: "arXiv",
        date: "2026-07-17",
        href: "https://arxiv.org/abs/2607.16178",
        summary:
          "Regularizes optimal transport with graph Laplacians so matched point clouds respect cluster structure, a useful bridge between numerical optimization and statistical learning.",
        tags: ["Optimal Transport", "Numerical Analysis", "Statistics"],
      },
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
        type: "GitHub",
        title: "stdlib-js/stdlib",
        source: "GitHub",
        date: "Updated 2026-07-21",
        href: "https://github.com/stdlib-js/stdlib",
        summary:
          "A broad numerical and statistical standard library for JavaScript/TypeScript, useful for seeing how scientific-computing primitives are packaged for production web stacks.",
        tags: ["Numerical Computing", "Statistics", "TypeScript"],
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
        title: "Causal Discovery on Irregular Time Series",
        source: "arXiv",
        date: "2026-07-20",
        href: "https://arxiv.org/abs/2607.18226",
        summary:
          "Targets causal discovery when observations arrive at irregular times, a realistic setting where many standard temporal ML assumptions break down.",
        tags: ["Causal Discovery", "Time Series", "Statistical ML"],
      },
      {
        type: "Paper",
        title: "Patch Policy: Efficient Embodied Control via Dense Visual Representations",
        source: "arXiv",
        date: "2026-07-20",
        href: "https://arxiv.org/abs/2607.18236",
        summary:
          "Reuses dense ViT features for robot policies, offering a practical route to stronger embodied-control models without retraining visual backbones from scratch.",
        tags: ["Robot Learning", "Vision Transformers", "Embodied AI"],
      },
      {
        type: "Paper",
        title: "PagedWeight: Efficient MoE LLM Serving with Dynamic Quality-Aware Weight Quantization",
        source: "arXiv",
        date: "2026-07-17",
        href: "https://arxiv.org/abs/2607.16184",
        summary:
          "Dynamically quantizes MoE weights at runtime to balance expert precision against KV-cache pressure, giving a concrete systems idea for memory-sensitive LLM serving.",
        tags: ["LLM Serving", "MoE", "Quantization"],
      },
      {
        type: "Paper",
        title: "When Does Muon Help Agentic Reinforcement Learning?",
        source: "arXiv",
        date: "2026-07-17",
        href: "https://arxiv.org/abs/2607.16169",
        summary:
          "Compares Muon and AdamW in sparse-reward agentic RL, showing optimizer choice can materially affect post-training success in environments like ALFWorld.",
        tags: ["Agentic RL", "Optimization", "Post-Training"],
      },
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
        type: "GitHub",
        title: "vllm-project/vllm",
        source: "GitHub",
        date: "Updated 2026-07-21",
        href: "https://github.com/vllm-project/vllm",
        summary:
          "A high-throughput LLM inference engine whose active development is worth following for serving, batching, memory, and deployment patterns.",
        tags: ["LLM Serving", "Inference", "PyTorch"],
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
        title: "FlashRT: Agent Harness for Guiding Agents to Deploy Real-Time Multimodal Applications",
        source: "arXiv",
        date: "2026-07-20",
        href: "https://arxiv.org/abs/2607.18171",
        summary:
          "Frames deployment of real-time multimodal apps as an agent-guided systems problem, spanning placement, streaming, and cross-pipeline tradeoffs.",
        tags: ["Agent Harness", "Multimodal Systems", "Deployment"],
      },
      {
        type: "Paper",
        title: "TRIM: Reducing AI-Generated CodeSlop via Agent Trajectory Minimization",
        source: "arXiv",
        date: "2026-07-20",
        href: "https://arxiv.org/abs/2607.18161",
        summary:
          "Looks at code quality through the lens of shortening and cleaning agent trajectories, a useful idea for making coding agents more maintainable.",
        tags: ["Coding Agents", "Agent Trajectories", "Software Engineering"],
      },
      {
        type: "Paper",
        title: "Searching Videos as Trees: Self-Correcting Agents for Grounded Long Video QA",
        source: "arXiv",
        date: "2026-07-17",
        href: "https://arxiv.org/abs/2607.16189",
        summary:
          "Frames long-video QA as adaptive tree search with self-correction, showing how agentic backtracking can improve grounded multimodal reasoning.",
        tags: ["VLM Agents", "Video QA", "Self-Correction"],
      },
      {
        type: "Paper",
        title: "When Do Multi-Agent Systems Help? An Information Bottleneck Perspective",
        source: "arXiv",
        date: "2026-07-17",
        href: "https://arxiv.org/abs/2607.16133",
        summary:
          "Analyzes when isolated agent contexts and bounded relay messages can outperform a single shared-context agent, giving a useful lens for multi-agent design.",
        tags: ["Multi-Agent Systems", "Information Bottleneck", "Agent Design"],
      },
      {
        type: "Paper",
        title: "The Honest Quorum Problem: Epistemic Byzantine Fault Tolerance for Agentic Infrastructure",
        source: "arXiv",
        date: "2026-07-17",
        href: "https://arxiv.org/abs/2607.16109",
        summary:
          "Introduces epistemic faults for protocol-compliant but semantically mistaken agentic validators, a sharp safety problem for distributed agent infrastructure.",
        tags: ["Agent Infrastructure", "Byzantine Fault Tolerance", "Safety"],
      },
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
    ],
  },
];
