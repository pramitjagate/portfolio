"use client";

import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import HeroSection from "@/components/HeroSection";
import HighlightsSection from "@/components/HighlightsSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";

const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const experience = [
  {
    title: "1990minds & Co",
    role: "Data Consultant",
    period: "Jun 2022 - Jul 2024",
    location: "Bengaluru, India",
    bullets: [
      "Integrated live data endpoints into a client’s AI-powered NoSQL application, structuring and validating datasets for real-time visualization and managing application state to deliver a 28% improvement in data retrieval and response speed for users.",
      "Performed root cause analysis on 150+ production defects across client codebases, identifying recurring failure patterns and data inconsistencies to reduce repeat defect reports by 30% and improve reliability of client-facing reporting workflows.",
      "Served as a liaison between clients and engineering teams, eliciting business requirements, translating them into technical specifications, and instituting structured review cycles that accelerated feature delivery and raised quality standards.",
      "Standardized reusable UI components for data-driven client applications, optimizing rendering of dynamic content to cut page load times by 35% and improve the end-user experience of dashboards and reporting interfaces.",
    ],
  },
  {
    title: "Electrowing Technologies Private Limited",
    role: "Business Analyst Intern",
    period: "Jun 2021 - Aug 2021",
    location: "Bengaluru, India",
    bullets: [
      "Analyzed system and log data to diagnose recurring failures in a Router UPS monitoring application, identifying performance bottlenecks that, once resolved, achieved a 12% improvement in system reliability.",
      "Built Tableau dashboards and performance tracking reports analyzing operational data for senior engineering stakeholders, surfacing insights that informed a 10% boost in system optimization efforts.",
    ],
  },
];

const projects = [
  {
    title: "JSOM Smart Advisor",
    role: "AI Chatbot & Website Accessibility Audit",
    period: "Mar 2026 - May 2026",
    location: "Dallas, TX",
    link: "https://smartadvisor-zkpbruk7azu22m8ffxjlzp.streamlit.app/",
    bullets: [
      "Built an AI-powered academic advising chatbot with a team of 5 using Claude and Grok APIs with RAG architecture, enabling real-time, structured resolution of student queries.",
      "Audited 547 JSOM web pages with DynoMapper and uncovered 95 broken links, 328 non-indexable pages, and a critical 10% WCAG 2.1 accessibility score, then delivered a prioritized remediation roadmap to university stakeholders.",
    ],
  },
  {
    title: "Loan Origination Portal — Full-Stack Banking Application",
    role: "Full-stack banking application",
    period: "Sep 2025 - Dec 2025",
    location: "Dallas, TX",
    link: "https://loan-iq-frontend-ecru.vercel.app/",
    bullets: [
      "Engineered a full-stack loan portal in React and Node.js with a 5-step applicant form, JWT role-based authentication across 2 user roles, and a dedicated underwriter dashboard, centralizing end-to-end loan intake for up to 500 concurrent applications.",
      "Built a real-time risk scoring engine computing DTI and loan-to-income ratios across 3 risk tiers, reducing manual underwriter review time by 40% and surfacing approval rates and loan volume trends via 4 interactive Recharts dashboards.",
    ],
  },
  {
    title: "Visual Analytics of the COVID-19 Boom in Global Video Game Sales",
    role: "Interactive dashboard project",
    period: "Sep 2025 - Dec 2025",
    location: "Dallas, TX",
    bullets: [
      "Investigated COVID-19’s impact on global gaming demand by building parameterized Tableau dashboards across 16,598 records, segmenting by platform, genre, publisher, and region.",
      "Tested pandemic-era demand hypotheses through interactive visualizations and found results aligned with Newzoo data showing 22% global gaming revenue growth from 2019 to 2021.",
    ],
  },
  {
    title: "Wildfire Risk Prediction Using Ensemble Machine Learning Models",
    role: "Machine learning and explainable AI project",
    period: "Jan 2025 - May 2025",
    location: "Dallas, TX",
    bullets: [
      "Built an ensemble wildfire prediction model combining Random Forest and XGBoost on satellite, climate, and terrain data, achieving 81% recall to enhance early fire-risk detection and resource planning across California.",
      "Engineered and optimized a 90K+ record dataset with spatiotemporal features, applying SHAP analysis and feature importance methods to surface key wildfire drivers such as temperature, NDVI, and humidity for decision-ready insights.",
    ],
  },
  {
    title:
      "Econometric Panel Study of Unemployment and Mass Shootings in the U.S",
    role: "Econometrics research project",
    period: "Jan 2025 - May 2025",
    location: "Dallas, TX",
    bullets: [
      "Constructed a 2,500+ state–month panel dataset merging mass shooting records with BLS unemployment and minimum wage policy indicators to enable rigorous causal analysis of labor market effects.",
      "Estimated fixed-effects, lagged dependent variable, and difference-in-differences econometric models, finding no statistically robust short-run causal impact of unemployment or wage increases on mass shooting incidence.",
    ],
  },
  {
    title: "Heart Disease Prediction and Analysis",
    role: "Machine learning project",
    period: "Jan 2025 - May 2025",
    location: "Dallas, TX",
    bullets: [
      "Developed a robust heart disease prediction model using machine learning techniques like Random Forest, Decision Tree, and Neural Network, achieving an accuracy of ~91.44%.",
      "Identified key risk factors such as BMI, Age, Physical Health, and Mental Health through feature selection, enabling improved prediction accuracy and actionable insights for heart disease prevention.",
    ],
  },
];

const education = [
  {
    school: "The University of Texas at Dallas",
    degree: "M.S. in Business Analytics and AI",
    period: "Aug 2024 - May 2026",
    location: "Richardson, TX",
    coursework:
      "Machine Learning, Database Management, Data Mining, Predictive and Prescriptive Analytics, AI, Big Data, Econometrics and Time Series Analytics, Statistical Modeling, Causal Inference, and Hypothesis Testing",
  },
  {
    school: "Ramaiah Institute of Technology",
    degree: "B.Tech. in Electrical and Electronics Engineering",
    period: "Aug 2018 - Sep 2022",
    location: "Bengaluru, India",
  },
];

const skillGroups = [
  {
    title: "Core",
    items: ["Python", "SQL", "R", "Java", "JavaScript"],
  },
  {
    title: "Data & Visualization",
    items: ["Tableau", "Power BI", "Excel", "Snowflake", "PostgreSQL", "MySQL"],
  },
  {
    title: "Machine Learning & AI",
    items: [
      "Random Forest",
      "XGBoost",
      "Neural Networks",
      "Feature Engineering",
      "Model Evaluation",
      "RAG",
      "LLM APIs",
    ],
  },
  {
    title: "Web & Tools",
    items: [
      "React",
      "Next.js",
      "HTML/CSS",
      "Git",
      "SAP ERP",
      "SharePoint",
      "MATLAB",
    ],
  },
];

const highlights = [
  "2+ years of experience across analytics, engineering, and AI applications",
  "Audited 547 web pages to deliver a prioritized accessibility remediation roadmap",
  "Drove a 12% uptime gain and resolved 150+ production bugs",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.16),_transparent_28%),linear-gradient(135deg,_#f8fbff_0%,_#f6f7ff_100%)] text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <a
            href="#"
            className="text-lg font-semibold tracking-tight text-slate-950"
          >
            Pramit Shivakumar Jagate
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition hover:text-slate-950"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-full border border-slate-300 bg-slate-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Let&apos;s connect
          </a>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 lg:px-8 lg:py-16">
        <HeroSection name="Pramit Shivakumar Jagate" />

        <ExperienceSection items={experience} />

        <ProjectsSection items={projects} />

        <SkillsSection groups={skillGroups} />

        <EducationSection items={education} />

        {/* <HighlightsSection items={highlights} /> */}

        <AboutSection
          title="Beyond the resume: the person behind the work."
          body={[
            "Outside of academics and career, I am someone who values curiosity, growth, and staying grounded in the things that keep me inspired. I enjoy exploring new ideas, learning through hands-on experiences, and building work that feels meaningful.",
            "This space is meant to capture the broader side of who I am — my interests, mindset, and the experiences that shape how I approach life and work.",
          ]}
        />

        <ContactSection
          email="pramitsjagate@gmail.com"
          github="https://github.com/pramitjagate"
          linkedin="https://www.linkedin.com/in/pramit-jagate"
        />
      </main>

      <footer className="border-t border-slate-200 bg-white/60 py-6 text-center text-sm text-slate-500">
        © 2026 Pramit Shivakumar Jagate. Built with Next.js.
      </footer>
    </div>
  );
}
