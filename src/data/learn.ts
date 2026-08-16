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

export const lastUpdated = "2026-08-16";

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
        title: "Hit-and-Run Mixes as Fast as the Ball Walk",
        source: "arXiv",
        date: "2026-08-13",
        href: "https://arxiv.org/abs/2608.13487",
        summary:
          "Sharpens the mixing-time picture for hit-and-run sampling on isotropic convex bodies, connecting probability, convex geometry, and randomized algorithms.",
        tags: ["Probability", "Sampling", "Convex Geometry"],
      },
      {
        type: "Paper",
        title: "The data geometry of masking diffusion: Certified-optimal schedules via unmasking growth complexity",
        source: "arXiv",
        date: "2026-08-13",
        href: "https://arxiv.org/abs/2608.13520",
        summary:
          "Introduces a path-level complexity measure for discrete diffusion schedules, a useful bridge between statistical geometry and practical generative modeling.",
        tags: ["Statistics", "Diffusion", "Data Geometry"],
      },
      {
        type: "Paper",
        title: "Wasserstein stability of the zero cell of a Poisson hyperplane tessellation under directional perturbations",
        source: "arXiv",
        date: "2026-08-13",
        href: "https://arxiv.org/abs/2608.13452",
        summary:
          "Gives quantitative stability bounds for random tessellations, useful for thinking about stochastic geometry under model perturbations.",
        tags: ["Probability", "Stochastic Geometry", "Wasserstein"],
      },
      {
        type: "GitHub",
        title: "stdlib-js/stdlib",
        source: "GitHub",
        date: "Updated 2026-08-16",
        href: "https://github.com/stdlib-js/stdlib",
        summary:
          "A broad numerical and statistical standard library for JavaScript and TypeScript, useful for seeing how mathematical computing primitives are engineered for production environments.",
        tags: ["Numerical Computing", "Statistics", "TypeScript"],
      },
      {
        type: "GitHub",
        title: "jasp-stats/jasp-desktop",
        source: "GitHub",
        date: "Updated 2026-08-15",
        href: "https://github.com/jasp-stats/jasp-desktop",
        summary:
          "A polished open-source statistics package spanning Bayesian and frequentist workflows, worth tracking for accessible statistical computing design.",
        tags: ["Statistics", "Bayesian Methods", "Desktop App"],
      },
      {
        type: "GitHub",
        title: "mne-tools/mne-python",
        source: "GitHub",
        date: "Updated 2026-08-16",
        href: "https://github.com/mne-tools/mne-python",
        summary:
          "A mature Python toolkit for MEG/EEG analysis that shows how statistical signal processing, visualization, and reproducible scientific workflows fit together.",
        tags: ["Statistics", "Signal Processing", "Python"],
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
        title: "DARTree: Speculative Diffusion Decoding with Autoregressive Draft Trees",
        source: "arXiv",
        date: "2026-08-13",
        href: "https://arxiv.org/abs/2608.13524",
        summary:
          "Extends speculative decoding with diffusion-based draft trees, a practical direction for faster language-model inference without changing outputs.",
        tags: ["LLM Inference", "Speculative Decoding", "Diffusion"],
      },
      {
        type: "Paper",
        title: "Defensive Boosting for Online Probabilistic Forecasting",
        source: "arXiv",
        date: "2026-08-13",
        href: "https://arxiv.org/abs/2608.13554",
        summary:
          "Studies online probabilistic forecasting against adaptive sequences, connecting boosting guarantees with robust calibration-style evaluation.",
        tags: ["Online Learning", "Forecasting", "Boosting"],
      },
      {
        type: "Paper",
        title: "LittleLearner: Language Models Under Pedagogically Controlled Knowledge Exposure",
        source: "arXiv",
        date: "2026-08-13",
        href: "https://arxiv.org/abs/2608.13545",
        summary:
          "Uses a deliberately controlled pretraining curriculum to study what language models learn under bounded knowledge exposure.",
        tags: ["Language Models", "Pretraining", "Evaluation"],
      },
      {
        type: "GitHub",
        title: "NVIDIA/TensorRT-LLM",
        source: "GitHub",
        date: "Updated 2026-08-16",
        href: "https://github.com/NVIDIA/TensorRT-LLM",
        summary:
          "A production-oriented LLM inference stack for NVIDIA GPUs, worth following for kernels, runtime orchestration, and deployment performance.",
        tags: ["LLM Serving", "Inference", "CUDA"],
      },
      {
        type: "GitHub",
        title: "huggingface/diffusers",
        source: "GitHub",
        date: "Updated 2026-08-16",
        href: "https://github.com/huggingface/diffusers",
        summary:
          "A widely used PyTorch library for image, video, and audio diffusion models, useful for tracking modern generative-model APIs and pipelines.",
        tags: ["Diffusion", "PyTorch", "Generative Models"],
      },
      {
        type: "GitHub",
        title: "MakazhanAlpamys/Soup",
        source: "GitHub",
        date: "Updated 2026-08-16",
        href: "https://github.com/MakazhanAlpamys/Soup",
        summary:
          "A YAML-driven LLM fine-tuning project focused on layer streaming, useful for studying how training workflows can fit tighter local-GPU memory budgets.",
        tags: ["LLM Fine-Tuning", "PyTorch", "Training Systems"],
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
        title: "Vero: Can AI Agents Build Formally Verified Software Repositories?",
        source: "arXiv",
        date: "2026-08-13",
        href: "https://arxiv.org/abs/2608.13522",
        summary:
          "Tests whether coding agents can produce full repositories with machine-checked proofs, pushing agent evaluation toward verified software outcomes.",
        tags: ["Coding Agents", "Formal Verification", "Benchmarks"],
      },
      {
        type: "Paper",
        title: "QuoteBench: How Matched Scores Can Hide Command-Path Failures",
        source: "arXiv",
        date: "2026-08-13",
        href: "https://arxiv.org/abs/2608.13547",
        summary:
          "Shows how command transport and quoting layers can mask coding-agent failures, a practical reminder that tool-use evaluation must validate final state.",
        tags: ["Tool Use", "Coding Agents", "Evaluation"],
      },
      {
        type: "Paper",
        title: "AutoDesign: Meta-Harness Optimization for Long-Horizon Agentic Design",
        source: "arXiv",
        date: "2026-08-13",
        href: "https://arxiv.org/abs/2608.13560",
        summary:
          "Frames design generation as a long-horizon model-harness loop, emphasizing experience accumulation and recursive improvement in agentic workflows.",
        tags: ["Agentic Design", "Long-Horizon", "Harnesses"],
      },
      {
        type: "Paper",
        title: "OmniScientist: An Omni-Modal Omni-Discipline AI Scientist",
        source: "arXiv",
        date: "2026-08-13",
        href: "https://arxiv.org/abs/2608.13558",
        summary:
          "Explores AI-scientist workflows that reason over multimodal scientific evidence rather than only text, code, or precomputed summaries.",
        tags: ["AI Scientist", "Multimodal", "Research Agents"],
      },
      {
        type: "GitHub",
        title: "stablyai/orca",
        source: "GitHub",
        date: "Updated 2026-08-16",
        href: "https://github.com/stablyai/orca",
        summary:
          "An agent development environment for coordinating fleets of coding agents across desktop, mobile, and VPS contexts, worth watching for practical multi-agent operations.",
        tags: ["Coding Agents", "Agent Infrastructure", "Multi-Agent"],
      },
      {
        type: "GitHub",
        title: "strukto-ai/mirage",
        source: "GitHub",
        date: "Updated 2026-08-16",
        href: "https://github.com/strukto-ai/mirage",
        summary:
          "A virtual filesystem layer for AI agents, interesting as infrastructure for safer and more observable tool-mediated workspaces.",
        tags: ["Agent Tools", "Virtual Filesystem", "Sandboxing"],
      },
    ],
  },
];
