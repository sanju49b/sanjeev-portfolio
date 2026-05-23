/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true,
};

//SEO Related settings
const seo = {
  title: "Sanjeev Bandaru | AI/ML Engineer",
  description:
    "AI/ML Engineer specialising in LLMs, multi-agent systems, and RAG pipelines. MSc Artificial Intelligence (Distinction), Coventry University.",
  og: {
    title: "Sanjeev Bandaru Portfolio",
    type: "website",
    url: "https://sanju49b.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Sanjeev Bandaru",
  logo_name: "SanjeevBandaru",
  nickname: "",
  subTitle:
    "AI/ML Engineer based in London. I build production LLM systems, multi-agent orchestrators, and RAG pipelines. Presented to the UK Deputy PM and former PM. MSc AI, Distinction (Coventry University).",
  resumeLink: "",
  portfolio_repository: "https://github.com/sanju49b",
  githubProfile: "https://github.com/sanju49b",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/sanju49b",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sanjeevbandaru/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:sanju49b@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  {
    name: "Medium",
    link: "https://medium.com/@sanju49b",
    fontAwesomeIcon: "fa-medium",
    backgroundColor: "#000000",
  },
];

const skills = {
  data: [
    {
      title: "LLMs & Generative AI",
      fileName: "DataScienceImg",
      skills: [
        "Pre-trained a proprietary LLM from scratch: data prep, training, evaluation, and production inference endpoint",
        "Fine-tuning with LoRA/QLoRA across Azure OpenAI, Claude API, and locally hosted Ollama models (Qwen 2.5 14B / Qwen3)",
        "Built RAG pipelines with semantic search and vector databases, cutting hallucination rates by 60%",
      ],
      softwareSkills: [
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: { backgroundColor: "transparent", color: "#3776AB" },
        },
        {
          skillName: "Hugging Face",
          fontAwesomeClassname: "noto-emoji:hugging-face",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "OpenAI",
          fontAwesomeClassname: "simple-icons:openai",
          style: { backgroundColor: "transparent", color: "#412991" },
        },
        {
          skillName: "Ollama",
          fontAwesomeClassname: "simple-icons:ollama",
          style: { backgroundColor: "transparent", color: "#000000" },
        },
      ],
    },
    {
      title: "Multi-Agent & RAG Systems",
      fileName: "FullStackImg",
      skills: [
        "12 specialised LLM agents running in parallel per conversation, each with independent schema validation and error isolation",
        "4-layer NER stack (regex → fuzzy → spaCy → GliNER zero-shot) with semantic denoising, GPU-optimised to 10x speedup on Tesla T4",
        "LangSmith observability across 12 client orgs, tracking tokens, latency, and cost at 5,000+ daily calls",
      ],
      softwareSkills: [
        {
          skillName: "LangChain",
          fontAwesomeClassname: "simple-icons:langchain",
          style: { color: "#1C3C3C" },
        },
        {
          skillName: "Pinecone",
          fontAwesomeClassname: "simple-icons:pinecone",
          style: { color: "#000000" },
        },
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: { color: "#009688" },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: { color: "#000000" },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: { color: "#336791" },
        },
      ],
    },
    {
      title: "Cloud & MLOps Infrastructure",
      fileName: "CloudInfraImg",
      skills: [
        "Whisper-based audio transcription on Azure Blob Storage with per-org isolation, processing call recordings into structured transcripts",
        "Docker + Kubernetes deployments with GitHub Actions CI/CD, blue-green releases, and a locally hosted LLM for full data privacy",
        "GPU inference optimisation on Tesla T4 with module-level caching; also worked on AWS SageMaker and GCP",
      ],
      softwareSkills: [
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: { color: "#0089D6" },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: { color: "#FF9900" },
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: { color: "#4285F4" },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: { color: "#1488C6" },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: { color: "#326CE5" },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: { color: "#2088FF" },
        },
      ],
    },
    {
      title: "Backend, Security & Dev Tools",
      fileName: "DesignImg",
      skills: [
        "Python 3.11 backends with FastAPI and Flask at enterprise scale; PostgreSQL and SQLite for data management",
        "Security research on MCP servers: prompt injection, tool poisoning, and data exfiltration in real deployments",
        "MLflow, Weights & Biases, and OpenTelemetry for experiment tracking and production observability",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: { backgroundColor: "transparent", color: "#3776AB" },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: { color: "#336791" },
        },
        {
          skillName: "MLflow",
          fontAwesomeClassname: "simple-icons:mlflow",
          style: { color: "#0194E2" },
        },
        {
          skillName: "Weights & Biases",
          fontAwesomeClassname: "simple-icons:weightsandbiases",
          style: { color: "#FFBE00" },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: { color: "#F05032" },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "GitHub",
      iconifyClassname: "simple-icons:github",
      style: { color: "#181717" },
      profileLink: "https://github.com/sanju49b",
    },
    {
      siteName: "Medium",
      iconifyClassname: "simple-icons:medium",
      style: { color: "#000000" },
      profileLink: "https://medium.com/@sanju49b",
    },
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: { color: "#0077B5" },
      profileLink: "https://www.linkedin.com/in/sanjeevbandaru/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Coventry University",
      subtitle: "MSc Artificial Intelligence",
      logo_path: "",
      alt_name: "Coventry University",
      duration: "Sept 2024 – Aug 2025",
      descriptions: [
        "Passed with Distinction. 12 modules completed in 10 months.",
        "Key modules: Neural Networks, LLM Architectures, AI Ethics & Safety, Human Factors, Self-Driving Car Simulations.",
        "Dissertation: Designed and evaluated a multi-agent conversational AI framework for a domain-specific task.",
      ],
      website_link: "https://www.coventry.ac.uk/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "MSc Artificial Intelligence",
      subtitle: "Distinction, Coventry University",
      logo_path: "",
      certificate_link: "https://www.coventry.ac.uk/",
      alt_name: "Coventry University",
      color_code: "#431d6e",
    },
    {
      title: "AI Presented to UK Government",
      subtitle: "Deputy PM David Lammy & former PM Rishi Sunak",
      logo_path: "",
      certificate_link: "",
      alt_name: "UK Government",
      color_code: "#1F3A5F",
    },
    {
      title: "LUMA.AI",
      subtitle: "LLM Uncertainty and Hallucination Control",
      logo_path: "",
      certificate_link: "",
      alt_name: "LUMA.AI",
      color_code: "#0a0a0a",
    },
    {
      title: "MCP Security Research",
      subtitle: "Coventry University Collaboration",
      logo_path: "",
      certificate_link: "",
      alt_name: "Coventry University",
      color_code: "#6E0D25",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work & Research",
  description:
    "AI/ML Engineer with 5+ years building production LLM systems, multi-agent orchestrators, and RAG pipelines across enterprise deployments. Proven track record reducing hallucination rates by 60% and cutting processing time by 35%.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "AI Lead Engineer",
          company: "Emvigo Technologies",
          company_url: "https://www.emvigo.com/",
          logo_path: "emvigo_logo.png",
          duration: "Oct 2024 – Present",
          location: "London, UK",
          description:
            "Built an async multi-agent orchestrator running 12 specialised LLM agents in parallel per conversation (Sentiment, Commerce, Competitor, Validator, Quality Gate and more), with independent schema validation, per-agent error isolation, and full LangSmith observability across 12 organisations at 5,000+ daily calls. Implemented a 4-layer NER stack (regex, fuzzy, spaCy, GliNER zero-shot) with SentenceTransformer semantic denoising; GPU-optimised on Tesla T4 for 10x inference speedup. Architected a Whisper transcription pipeline on Azure Blob Storage with per-org isolation, Docker + GitHub Actions CI/CD, blue-green releases, and a locally hosted LLM for full data privacy.",
          color: "#7C4DFF",
        },
        {
          title: "AI/ML Engineer",
          company: "Boven Technologies",
          company_url: "https://www.linkedin.com/company/boven-technologies/",
          logo_path: "boven_logo.png",
          duration: "Aug 2021 – Jul 2024",
          location: "Bangalore, India",
          description:
            "Pre-trained and deployed a proprietary in-house LLM from scratch: data prep, training, evaluation, and production inference endpoint, giving internal teams full API access with zero reliance on third-party providers. Built CyberIntelligence, a web attack detection system using a custom ANN classifier; used nmap and Postman for attack simulation to generate labelled training data, achieving reliable classification of attack patterns on live infrastructure.",
          color: "#0079bf",
        },
      ],
    },
    {
      title: "Research",
      experiences: [
        {
          title: "MCP Security Researcher",
          company: "Coventry University",
          company_url: "https://www.coventry.ac.uk/",
          logo_path: "coventry_logo.png",
          duration: "2026 – Present",
          location: "London, UK",
          description:
            "Co-authoring a research paper with Coventry University professors on securing Model Context Protocol (MCP) servers in production, demonstrating real-world attack vectors including prompt injection, tool poisoning, data exfiltration and unauthorised access, with a hardened mitigation framework validated against each exploit class.",
          color: "#231942",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Production-grade AI systems spanning real-time LLM uncertainty control, multi-agent orchestration, and security research. Each project is built to enterprise standards with full observability and deployment pipelines.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications & Articles",
  description:
    "Technical writing on AI engineering, Kubernetes, and production deployment. Sharing lessons from real enterprise deployments.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "road-to-kubernetes-part1",
      name: "Road to Kubernetes: From Zero to Your First Running Container",
      createdAt: "2026-05-01T00:00:00Z",
      description:
        "Part 1 of an ongoing series on Kubernetes from first principles: containers, architecture and production deployment. Published on Medium.",
      url: "https://medium.com/@sanju49b",
    },
    {
      id: "mcp-security-research",
      name: "Securing MCP Servers in Production (In Progress)",
      createdAt: "2026-01-01T00:00:00Z",
      description:
        "Research paper co-authored with Coventry University professors on securing Model Context Protocol servers in production: prompt injection, tool poisoning, data exfiltration, and a hardened mitigation framework.",
      url: "https://github.com/sanju49b",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I'm available on LinkedIn and email. Interested in AI/ML engineering roles, research collaborations, or discussing LLMs, multi-agent systems, and RAG pipelines. I'll reply within 24 hours.",
  },
  blogSection: {
    title: "Articles & Writing",
    subtitle:
      "Technical writing on AI engineering, Kubernetes, and production ML systems. Lessons from real enterprise deployments.",
    link: "https://medium.com/@sanju49b",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Location",
    subtitle: "London, UK",
    locality: "London",
    country: "UK",
    region: "England",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/PXh7PBi3BDHpSw7M8",
  },
  phoneSection: {
    title: "Phone",
    subtitle: "+44 7553 499843 (UK) · +91 7995 331111 (India)",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
