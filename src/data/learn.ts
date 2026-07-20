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

export const lastUpdated = "2026-07-20";

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
        title: "NVIDIA/TensorRT-LLM",
        source: "GitHub",
        date: "Updated 2026-07-19",
        href: "https://github.com/NVIDIA/TensorRT-LLM",
        summary:
          "A production-oriented toolkit for optimizing and serving large language models on NVIDIA GPUs, worth tracking for practical inference-engineering patterns.",
        tags: ["LLM Serving", "Inference Optimization", "PyTorch"],
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
    ],
  },
];
