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
    role: "Data Analyst",
    period: "Jan 2022 - Jul 2024",
    location: "Bengaluru, India",
    bullets: [
      "Partnered with 5+ global clients via stakeholder interviews and SQL data audits to define KPI frameworks, reducing requirement rework by ~20% through structured data-driven analysis.",
      "Analyzed large datasets using Python and SQL to surface actionable insights for consulting clients, cutting monthly report generation time by 15+ hours through optimized querying workflows.",
      "Cleaned and validated 150+ production defect records from Warehouse Management Systems, conducting root-cause analysis that established a single source of truth and reduced repeat reporting errors by 30%.",
      "Automated reporting workflows using DAX and Power BI, reducing dashboard refresh times by 35% and freeing 10+ hours/week for client-facing analysis and stakeholder presentations.",
    ],
  },
  {
    title: "Jagate Industries",
    role: "Supply Chain Analyst Intern",
    period: "Sep 2021 - Jan 2022",
    location: "Bengaluru, India",
    bullets: [
      "Consolidated 3+ years of sales, service, and inventory data using SQL and Advanced Excel, building a single source of truth for demand forecasting, stock planning, and margin reporting.",
      "Mapped the order-to-fulfillment process with Excel flowcharts and data analysis, pinpointing 6 bottlenecks across scheduling, dispatch, and installation and cutting cycle time by 3 days.",
      "Built an executive Tableau dashboard integrating Python ML outputs for demand forecasting and anomaly detection, giving leadership clear KPIs on inventory, fulfillment, and margins.",
    ],
  },
  {
    title: "Electrowing Technologies Pvt Ltd",
    role: "Data Analyst Intern",
    period: "Jun 2021 - Aug 2021",
    location: "Bengaluru, India",
    bullets: [
      "Wrote SQL queries against system log data to debug recurring application failures, improving system reliability by 12% and reducing monthly incident count by 15.",
      "Presented data-driven findings and recommendations to engineering teams, enabling root-cause resolution and improving cross-functional stakeholder alignment.",
    ],
  },
];

const projects = [
  {
    title: "Retail Demand Forecasting & Anomaly Detection Pipeline",
    role: "Python • SQL • DuckDB • Prophet",
    bullets: [
      "Modeled 222K orders in a DuckDB SQL warehouse and forecast revenue with Prophet at 9.9% MAPE versus a 16.9% naive baseline, outperforming a SARIMAX challenger at 10.2%.",
      "Designed a two-detector anomaly system that recovered 5 of 5 injected incidents at a 0.72% false positive rate, gated by a 34-check validation suite on every automated refresh.",
    ],
  },
  {
    title: "Airline Revenue Optimization & Demand Forecasting Engine",
    role: "Python • R • SciPy • Scikit-learn • SQL",
    bullets: [
      "Designed a mathematical model simulating airline seat inventory allocation across 50+ fare classes using linear programming and optimization, maximizing projected revenue per flight by ~18% over a naïve baseline.",
      "Built a demand forecasting engine using time-series regression and XGBoost in Python and R, achieving 22% RMSE reduction vs. baseline and formulating statistical hypothesis tests to validate model assumptions.",
      "Developed prototype solutions structured for integration into a live revenue management system, validating end-to-end model pipeline from data ingestion through optimization output.",
    ],
  },
  {
    title: "JSOM Smart Advisor – AI Chatbot & Website Accessibility Audit",
    role: "Python • Claude API • Grok API • DynoMapper",
    link: "https://smartadvisor-zkpbruk7azu22m8ffxjlzp.streamlit.app/",
    bullets: [
      "Engineered an agentic AI advising assistant integrating Claude and Grok APIs with RAG and tool calling, resolving 150+ test queries with ~90% accuracy and cutting resolution time to under 15 seconds.",
      "Executed a 547-page DynoMapper accessibility audit, uncovering 95 broken links and a 10% WCAG 2.1 score, and delivered a roadmap projected to raise compliance to 60%+ across 3 stakeholder teams.",
    ],
  },
  {
    title: "Loan Origination Portal — Full-Stack Banking Application",
    role: "Full-stack banking application",
    link: "https://loan-iq-frontend-ecru.vercel.app/",
    bullets: [
      "Engineered a full-stack loan portal in React and Node.js with a 5-step applicant form, JWT role-based authentication across 2 user roles, and a dedicated underwriter dashboard, centralizing end-to-end loan intake for up to 500 concurrent applications.",
      "Built a real-time risk scoring engine computing DTI and loan-to-income ratios across 3 risk tiers, reducing manual underwriter review time by 40% and surfacing approval rates and loan volume trends via 4 interactive Recharts dashboards.",
    ],
  },
  {
    title: "Visual Analytics of the COVID-19 Boom in Global Video Game Sales",
    role: "Interactive dashboard project",
    bullets: [
      "Investigated COVID-19’s impact on global gaming demand by building parameterized Tableau dashboards across 16,598 records, segmenting by platform, genre, publisher, and region.",
      "Tested pandemic-era demand hypotheses through interactive visualizations and found results aligned with Newzoo data showing 22% global gaming revenue growth from 2019 to 2021.",
    ],
  },
  {
    title: "Wildfire Risk Prediction Using Ensemble Machine Learning Models",
    role: "Machine learning and explainable AI project",
    bullets: [
      "Built an ensemble wildfire prediction model combining Random Forest and XGBoost on satellite, climate, and terrain data, achieving 81% recall to enhance early fire-risk detection and resource planning across California.",
      "Engineered and optimized a 90K+ record dataset with spatiotemporal features, applying SHAP analysis and feature importance methods to surface key wildfire drivers such as temperature, NDVI, and humidity for decision-ready insights.",
    ],
  },
  {
    title:
      "Econometric Panel Study of Unemployment and Mass Shootings in the U.S",
    role: "Econometrics research project",
    bullets: [
      "Constructed a 2,500+ state–month panel dataset merging mass shooting records with BLS unemployment and minimum wage policy indicators to enable rigorous causal analysis of labor market effects.",
      "Estimated fixed-effects, lagged dependent variable, and difference-in-differences econometric models, finding no statistically robust short-run causal impact of unemployment or wage increases on mass shooting incidence.",
    ],
  },
  {
    title: "Heart Disease Prediction and Analysis",
    role: "Machine learning project",
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
    title: "Data & Querying",
    items: [
      "SQL",
      "MySQL",
      "PostgreSQL",
      "Python (Pandas, Scikit-learn)",
      "R",
      "ETL",
      "Power Query",
    ],
  },
  {
    title: "BI & Visualization",
    items: [
      "Tableau",
      "Power BI",
      "Advanced Excel (Pivot Tables, VLOOKUP)",
      "Dashboard Design",
      "Data Storytelling",
    ],
  },
  {
    title: "Analytics & AI",
    items: [
      "Regression Analysis",
      "Predictive Forecasting",
      "Anomaly Detection",
      "XGBoost",
      "Data Modeling",
      "Statistical Analysis",
    ],
  },
  {
    title: "GenAI & LLM",
    items: [
      "RAG",
      "Agentic Workflows",
      "Claude API",
      "Prompt Engineering",
      "LangChain",
    ],
  },
  {
    title: "Business & Tools",
    items: [
      "Agile/Scrum",
      "Jira",
      "Git",
      "Stakeholder Management",
      "Requirements Gathering",
      "Data Integrity",
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
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.25),_transparent_28%),linear-gradient(135deg,_#0b1329_0%,_#0a1120_100%)] text-slate-100">
      <header className="sticky top-0 z-20 backdrop-blur-md">
        <div className="flex w-full items-center justify-between px-6 py-4 sm:px-10 lg:px-16 xl:px-24">
          <a
            href="#"
            className="text-lg font-semibold tracking-tight text-white"
          >
            Pramit Shivakumar Jagate
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-slate-100"
          >
            Let&apos;s connect
          </a>
        </div>
      </header>

      <main className="flex flex-col">
        <HeroSection
          name="Pramit Shivakumar Jagate"
          email="pramitsjagate@gmail.com"
          github="https://github.com/pramitjagate"
          linkedin="https://www.linkedin.com/in/pramit-jagate"
        />

        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-10 lg:px-8 lg:py-16">
          <ExperienceSection items={experience} />

          <ProjectsSection items={projects} />

          <SkillsSection groups={skillGroups} />

          <EducationSection items={education} />

          {/* <HighlightsSection items={highlights} /> */}

          <AboutSection
            title="Beyond the resume: the person behind the work."
            subtitle="Outside of academics and career, I am someone who values curiosity, growth, and staying grounded in the things that keep me inspired. I enjoy exploring new ideas, learning through hands-on experiences, and building work that feels meaningful."
          />

          <ContactSection
            email="pramitsjagate@gmail.com"
            github="https://github.com/pramitjagate"
            linkedin="https://www.linkedin.com/in/pramit-jagate"
          />
        </div>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/60 py-6 text-center text-sm text-slate-400">
        © 2026 Pramit Shivakumar Jagate. Built with Next.js.
      </footer>
    </div>
  );
}
