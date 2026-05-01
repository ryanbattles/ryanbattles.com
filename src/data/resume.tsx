import { Icons } from "@/components/icons";
import {
  HomeIcon,
  MegaphoneIcon,
  TrendingUpIcon,
  MailIcon,
  PenToolIcon,
  WorkflowIcon,
  LineChartIcon,
  BoxesIcon,
  CodeIcon,
  SparklesIcon,
} from "lucide-react";

export const DATA = {
  name: "Ryan Battles",
  initials: "RB",
  url: "https://ryanbattles.com",
  location: "Columbus, Ohio",
  locationLink: "https://www.google.com/maps/place/Columbus,Ohio",
  tagline: "VP Marketing, Web Strategy & Growth Systems",
  description:
    "I help brands clarify their message, strengthen their marketing systems, and create smarter paths to growth.",
  summary:
    "My path into marketing and technology started with an unexpected situation: my wife and I were having twins.\n\nAt the time, I was a private school computer teacher, and the cost of daycare for two children nearly matched my salary. So we decided I would become a stay-at-home dad while my wife continued her career training. Newborn twins were plenty of work, but I still had a couple of hours each day during naptime to take on a freelance client or two. What began as a practical way to earn side income grew into client work for startups, nonprofits, and larger organizations.\n\nThat side business became **Jovia Studio**, named after the middle names of my twins — Joy and Olivia. I wore a lot of hats in that season: business strategy, client communication, marketing, design, content, and development.\n\nIt didn’t take long for the studio to become a full-time responsibility, with notable clients included **Google, Dartmouth, and the YMCA**. Partnerships I developed during this time led to my role as a lead software engineer at **Crushpath**, a venture-backed startup out of San Francisco. Since then, my work has grown to include co-founding the SaaS app **Harpoon**, writing *SaaS Marketing Essentials*, and leading marketing at **Wastebits**, where I’ve spent the past decade helping companies track and reduce landfilled waste.\n\nAlong the way, I’ve learned that **good marketing is rarely about making more noise**. It is about understanding the audience, clarifying the message, building useful systems, and improving what works.\n\nToday, I’m especially energized by the AI era because it rewards the kind of range I’ve built over my career. I’ve always been drawn to the big picture: how strategy, messaging, design, data, technology, and execution fit together. Modern tools remove many of the old bottlenecks, making it possible to move faster from idea to outcome.\n\nBut **speed alone is not the advantage**. As the world fills with more content, more tools, and more computer-generated output, the real advantage belongs to people who can earn attention, build trust, and turn clarity into action. That is where my passion is now: using the speed of new tools to apply timeless principles of **marketing, growth, and communication.**",
  avatarUrl: "/assets/img/headshot.webp",
skillGroups: [
  {
    label: "Where I do my best work",
    skills: [
      { name: "Growth Strategy",          icon: TrendingUpIcon, color: "#38bdf8" },
      { name: "Positioning",              icon: MegaphoneIcon,  color: "#a78bfa" },
      { name: "Marketing Systems",        icon: WorkflowIcon,   color: "#818cf8" },
      { name: "AI-Enabled Workflows",     icon: SparklesIcon,   color: "#e879f9" },
      { name: "Product Thinking",         icon: BoxesIcon,      color: "#f59e0b" },
      { name: "Data Insights",            icon: LineChartIcon,  color: "#6366f1" },
      { name: "Practical Tooling",        icon: CodeIcon,       color: "#34d399" },
      { name: "Content & Narrative",      icon: PenToolIcon,    color: "#f472b6" },
    ],
  },
],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "",
    tel: "",
    social: {
      email: {
        name: "Contact",
        url: "/contact",
        icon: Icons.email,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ryanbattles",
        icon: Icons.linkedin,
        navbar: true,
      },
    },
  },
  work: [
  {
    company: "Wastebits",
    href: "https://wastebits.com",
    badges: [],
    location: "Remote",
    title: "Director of Marketing",
    logoUrl: "/assets/img/work/wastebits-logo.webp",
    start: "November 2015",
    end: "Present",
    description:
      "Leading the company's brand, content, website, demand generation, social media, customer communications, and sales enablement. Built a steady marketing engine around industry education, original content, newsletters, social distribution, AI-assisted workflows, and outside campaign support — helping a lean team stay visible and credible in a niche B2B market.",
  },
  {
    company: "Harpoon",
    href: "https://www.harpoonapp.com",
    badges: [],
    location: "Columbus, OH",
    title: "Co-founder & CMO",
    logoUrl: "/assets/img/work/harpoon-logo.webp",
    start: "May 2013",
    end: "December 2019 (Acquired)",
    description:
      "Harpoon began as a problem my co-founder and I understood firsthand: the spreadsheet mess of trying to forecast income, plan cash flow, and run an independent agency with confidence. We helped turn that need into a SaaS product used by agencies across the globe, personally contributing to both development and growth (supporting other currencies & languages was fun). The platform grew to combine forecasting, time tracking, recurring invoicing, automated expense tracking, budgeting, and business metrics. Harpoon is one of the projects I'm most proud of having in my portfolio.",
  },
  {
    company: "Crushpath",
    href: "#",
    badges: [],
    location: "San Francisco, CA",
    title: "Lead Front-End Engineer",
    logoUrl: "/assets/img/work/crushpath-logo.webp",
    start: "July 2012",
    end: "May 2014",
    description:
      "Led front-end development for Crushpath, an early sales enablement platform that helped teams create responsive landing pages with built-in lead generation and analytics. Translated product and design direction into a client-facing interface, building responsive layouts, polished dynamic interactions, and reusable UI components for a fast-moving venture-backed startup in the heart of San Francisco.",
  },
  {
    company: "Jovia Studio",
    href: "#",
    badges: [],
    location: "Columbus, OH",
    title: "Founder & Digital Marketing Consultant",
    logoUrl: "/assets/img/work/jovia-logo.webp",
    start: "May 2008",
    end: "July 2012",
    description:
      "Founded Jovia Studio after leaving teaching, building the business from scratch while staying home with newborn twins. Grew it into a web consulting practice that helped 100+ businesses, schools, nonprofits, entrepreneurs, public figures, and larger organizations launch websites, e-commerce projects, and CMS-driven marketing systems.",
  },
  {
    company: "Delaware Christian School",
    href: "#",
    badges: [],
    location: "Delaware, OH",
    title: "High School Computer Teacher",
    logoUrl: "/assets/img/work/dcs-logo.webp",
    start: "August 2003",
    end: "June 2007",
    description:
      "Taught high school computer courses focused on practical technology skills, problem-solving, and preparing students to use digital tools with confidence. One of the courses I taught them was on how to build a website, and that's when I realized it was what I wanted to do for a living — launching my career pivot from teaching to building.",
  },
],
  education: [
    {
      school: "Franklin University",
      href: "https://www.franklin.edu",
      degree: "B.S. Web Development — Summa Cum Laude",
      logoUrl: "/assets/img/education/franklin-logo.webp",
      start: "2007",
      end: "2009",
    },
    {
      school: "Malone University",
      href: "https://www.malone.edu",
      degree: "B.A. Theology",
      logoUrl: "/assets/img/education/malone-logo.webp",
      start: "1996",
      end: "2001",
    },
  ],
  certifications: [
    {
      name: "HubSpot Marketing Software Certification",
      issuer: "HubSpot Academy",
      href: "https://app.hubspot.com/academy/achievements/b5670aaf506f4cc8a50e441470576556",
      logoUrl: "/assets/img/work/hubspot-logo.webp",
      issued: "Jul 2021",
    },
    {
      name: "Google Analytics Individual Qualification",
      issuer: "Google",
      href: "https://skillshop.exceedlms.com/student/award/60372081",
      logoUrl: "/assets/img/work/google-logo.webp",
      issued: "Oct 2020",
    },
  ],
  projects: [
    {
      title: "Wastebits",
      category: "Enterprise",
      href: "https://wastebits.com",
      dates: "2015 - Present",
      active: true,
      description:
        "A waste and sustainability software company where I’ve helped turn deep industry expertise into public tools, sales assets, campaigns, and category-level content. Projects include the Wastebits Locator, a directory of 40,000+ waste facilities, the 50-episode Waste Wise Podcast, and marketing materials used with Fortune 500 customers to improve adoption.",
      technologies: ["Pardot", "Salesforce", "HubSpot", "SEO", "Marketing Automation", "AI Integration"],
      links: [
        {
          type: "SaaS",
          href: "https://wastebits.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/assets/img/projects/wastebits-preview.webp",
      video: "",
    },
    {
      title: "Harpoon",
      category: "SaaS",
      href: "https://www.harpoonapp.com",
      dates: "May 2013 - December 2019",
      active: false,
      description:
        "A financial planning SaaS I co-founded to solve a problem I felt firsthand as a freelancer: tracking time was not enough — I needed to forecast revenue, plan around projects, and understand the real financial picture of my business. Harpoon grew from our own spreadsheets into a product used by freelancers and studios around the world.",
      technologies: ["SEO", "Social Media", "Email Marketing", "Laravel", "PHP", "JavaScript", "MySQL"],
      links: [
        {
          type: "SaaS",
          href: "https://www.harpoonapp.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/assets/img/projects/harpoon-preview.webp",
      video: "",
    },
    {
      title: "Diabetes Management App",
      category: "Mobile",
      href: "",
      dates: "December 2020 - Present",
      active: false,
      description:
        "A private tool I built after a family member was diagnosed with Type 1 diabetes — enabling us to calculate insulin doses based on carbs, blood sugar, ratios, and common adjustment factors. Over time it has evolved to include meal-specific ratios, historical analytics, ketone adjustments, warnings, overrides, and an advanced calculator for complex meals.",
      technologies: ["JavaScript", "jQuery", "CraftCMS", "SQL", "Mobile Design", "Bootstrap", "Gulp"],
      links: [
        {
          type: "Private App",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/assets/img/projects/diabetes-management-app.jpeg",
      video: "",
    },
    {
      title: "SaaS Marketing Essentials",
      category: "Course",
      href: "",
      dates: "March 2015 - December 2024",
      active: false,
      description:
        "A premium marketing course and ebook I created for SaaS founders and marketers, selling more than 1,000 copies at prices ranging from $30 to $300. The product earned strong reviews, led to various speaking opportunities, and helped position my work around practical, founder-friendly SaaS growth strategy.",
      technologies: ["Marketing Ops", "Educational Writing", "Digital Products", "Product Strategy"],
      links: [
        {
          type: "Digital Product",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/assets/img/projects/saas-marketing-essentials.webp",
      video: "",
    },
    {
      title: "Sprigbox",
      category: "Subscription",
      href: "",
      dates: "December 2012 - April 2014",
      active: false,
      description:
        "A monthly gluten-free snack subscription service — delivering new treats for discovery to our customers, and assisting brands with getting samples to their target audience. I created the website experience, marketing, Stripe and PayPal subscription flow, and back-end order reporting while my partners handled procurement and order fulfillment.",
      technologies: ["Stripe", "Recurring Subscriptions", "E-commerce", "Consumer Products"],
      links: [
        {
          type: "Subscription",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/assets/img/projects/sprig.jpeg",
      video: "",
    },
    {
      title: "Find Bacon",
      category: "Job Board",
      href: "",
      dates: "May 2011 - April 2024",
      active: false,
      description:
        "A job search engine for designers and developers that became the coveted #1 Google result for software and design jobs for years. Using a mobile-first design, we combined listings from dozens of sources like ZipRecruiter, AngelList, Dribbble, and GitHub into a single feed, monetizing the platform through featured job placements and personalized alerts.",
      technologies: ["SEO", "Social Media", "Email Marketing", "Stripe", "Business Development"],
      links: [
        {
          type: "Job Board",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/assets/img/projects/findbacon.jpeg",
      video: "",
    },
  ],
  testimonials: [
    {
      quote:
        "Ryan brings an infectious positivity to those he works with. He is able to take a skeleton of an idea and turn it into not only a working product or feature, but also provide the marketing and growth strategy to drive adoption.",
      name: "Jonathan Hostetler",
      title: "Senior Software Engineer",
      company: "Adwerx",
      avatar: "/assets/img/testimonials/jonathan-hostetler.jpg",
      linkedinUrl: "https://www.linkedin.com/in/jonathan-hostetler-613b4030",
    },
    {
      quote:
        "Ryan is a multi-faceted, dig-in-and-get-it-done kind of teammate. His ability to move back and forth from growth  to product development was a significant asset. When he says he will do something, he will - and he'll exceed your expectations.",
      name: "Jay Oldaker",
      title: "Head of Design",
      company: "Cabana",
      avatar: "/assets/img/testimonials/jay-oldaker.jpg",
      linkedinUrl: "https://www.linkedin.com/in/jayoldaker",
    },
    {
      quote:
        "Ryan is an excellent developer, who gives great attention to details. He is not someone who just finishes the job, but someone who is more inclined to having an in depth understanding of the issue and get it done the proper way.",
      name: "Vinu Charanya",
      title: "Software Engineer",
      company: "Netflix",
      avatar: "/assets/img/testimonials/vinu-charanya.jpg",
      linkedinUrl: "https://www.linkedin.com/in/vinucharanya",
    },
    {
      quote:
        "Ryan contributed to some of our most popular products, and helped define and optimize key user conversion flows. Ryan was a positive influence on the rest of the engineering team through his optimistic, can-do attitude.",
      name: "Matt Wilkinson",
      title: "CEO, Advisor, Investor",
      company: "Monsoon, Inc.",
      avatar: "/assets/img/testimonials/matt-wilkinson.jpg",
      linkedinUrl: "https://www.linkedin.com/in/mwilkinson",
    },
    {
      quote:
        "Ryan was responsible for building many of our most successful features. He is excellent at writing CSS, HTML and JavaScript, and troubleshooting. The entire team got along with him very well.",
      name: "Mónica Goren",
      title: "Lead Architect",
      company: "Slack",
      avatar: "/assets/img/testimonials/monica-goren.jpg",
      linkedinUrl: "https://www.linkedin.com/in/ciberch",
    },
    {
      quote:
        "Ryan is a great front end developer and likable guy! He's full of enthusiasm and cares deeply about the details. He loves to understand what he's building before writing any code, and has a great design eye on top of it.",
      name: "Dennis Field",
      title: "Brand & Story Builder",
      company: "VYNE Creative",
      avatar: "/assets/img/testimonials/dennis-field.jpg",
      linkedinUrl: "https://www.linkedin.com/in/dennisfield",
    },
    {
      quote:
        "Ryan is not only an excellent employee but a great person overall. His knowledge of front-end development is second to none, able to tackle small isolated situations all the way up to complex systems with a lot of moving parts.",
      name: "Kevin Farst",
      title: "iOS Engineer",
      company: "EarnIn",
      avatar: "/assets/img/testimonials/kevin-farst.jpg",
      linkedinUrl: "https://www.linkedin.com/in/kevin-farst-14a63914",
    },
    {
      quote:
        "Ryan's work was excellent. As a remote worker, he was very accessible and with quick turnaround times. When requests for tweaks required significant development, he let us know in advance so that we could prioritize.",
      name: "Tobey Aumann",
      title: "Agile Coach",
      company: "Spotify",
      avatar: "/assets/img/testimonials/tobey-aumann.jpg",
      linkedinUrl: "https://www.linkedin.com/in/tobeyaumann",
    },
    {
      quote:
        "Ryan is the most amiable developer I've ever had the pleasure to work with. His can-do attitude makes any project with him a breeze. Plus, he's incredibly talented and built a CMS for us in record time!",
      name: "Jenny Karn",
      title: "Senior Director",
      company: "SFIA",
      avatar: "/assets/img/testimonials/jenny-karn.jpg",
      linkedinUrl: "https://www.linkedin.com/in/jennykarn",
    },
    {
      quote:
        "I would recommend Ryan to anybody looking for a consultant that is both easy to work with and extremely competent. His attention to detail and natural inclination to do what it takes to make sure the job is done right are a powerful combination.",
      name: "Stephen Jones",
      title: "SVP, Infrastructure & Cybersecurity (CISO)",
      company: "",
      avatar: "/assets/img/testimonials/stephen-jones.jpg",
      linkedinUrl: "https://www.linkedin.com/in/jonesstephen",
    },
    {
      quote:
        "Working with Ryan was a wonderful experience, he is very detailed with his job, communicative and is not happy until the UI and UX is in very good shape.",
      name: "Rubén Dávila Santos",
      title: "Ruby/Rails Developer",
      company: "GitLab",
      avatar: "/assets/img/testimonials/ruben-davila.webp",
      linkedinUrl: "https://www.linkedin.com/in/rdavila84",
    },
    {
      quote:
        "Ryan is amazing to work with - knowledgeable, reliable and extremely responsive. He's extremely knowledgable and if I ask him for something he isn't an expert on, he'll figure out how to get it done.",
      name: "Nikki May",
      title: "Former Creative Director",
      company: "IBM",
      avatar: "/assets/img/testimonials/nikki-may.webp",
      linkedinUrl: "https://www.linkedin.com/in/nikkimayart",
    },
    {
      quote:
        "We hired Ryan to design and develop a new website using the ExpressionEngine platform. I was impressed with the integrity and fresh optimism that were obvious in Ryan's professional portfolio – but it was Ryan himself that sealed the deal for me.",
      name: "Vaughn Hromiko, MBA, MS-MIS",
      title: "Principal",
      company: "WOTC Planet",
      avatar: "/assets/img/testimonials/vaughn-hromiko.webp",
      linkedinUrl: "https://www.linkedin.com/in/hromiko",
    },
    {
      quote:
        "When other team members did not perform up to task, Ryan was right there to help make sure the project was done on time by picking up the slack. Ryan is a very creative individual who possesses a breadth of knowledge.",
      name: "DJ Schleich, MBA",
      title: "Senior Product Manager",
      company: "CoverMyMeds",
      avatar: "/assets/img/testimonials/dj-schleich.webp",
      linkedinUrl: "https://www.linkedin.com/in/dschleichjr",
    },
    {
      quote:
        "Ryan's great attitude, willingness to jump in wherever needed, and ability to self-manage made him an excellent addition to the GRIP Technology team. Hope to get a chance to work with Ryan again in the future.",
      name: "Dustin Leggans",
      title: "CEO",
      company: "OSA Technology Partners",
      avatar: "/assets/img/testimonials/dustin-leggans.webp",
      linkedinUrl: "https://www.linkedin.com/in/leggans",
    },
    {
      quote:
        "Ryan is an outstanding technical resource and was a great asset at GRIP Technology. I would highly recommend Ryan to any firm looking for a professional, intelligent and dedicated employee. He is always willing to help and is a quick study.",
      name: "Bill Kiefaber",
      title: "President",
      company: "Marketing Works",
      avatar: "/assets/img/testimonials/bill-kiefaber.webp",
      linkedinUrl: "https://www.linkedin.com/in/billkiefaber",
    },
  ],
} as const;
