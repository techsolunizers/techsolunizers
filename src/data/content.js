// All copy, testimonials, stats and chart data for the PraTej Solutions site.
// Kept in one place so non-technical editors can update text without touching components.

export const nav = {
  logo: "PraTej",
  logoSuffix: "Solutions",
  links: [
    { label: "Home", href: "/", n: "01" },
    { label: "Solutions", href: "/solutions", n: "02" },
    { label: "Services", href: "/services", n: "03" },
    { label: "About", href: "/about", n: "04" },
    { label: "Contact", href: "/contact", n: "05" },
  ],
  cta: "Book a Demo",
  ctaHref: "/demo",
};

export const hero = {
  headline: "One Solution. Every Business. Unlimited Growth.",
  subheadline:
    "From your neighborhood grocery store to the biggest malls — PraTej Solutions powers businesses of every size with one unified platform.",
  primaryCta: "Start Your Free Trial",
  secondaryCta: "See How It Works",
  trust: "Trusted by 500+ Businesses Across India",
};

export const spectrum = {
  heading: "Built for Every Business, Big or Small",
  description:
    "One platform, three scales of ambition. Whichever segment you run today, PraTej grows with you into the next.",
  segments: [
    {
      tier: "Small",
      label: "Neighborhood Roots",
      examples: ["Grocery Stores", "Kirana Shops", "Cafes"],
      solution: "Fast billing, simple stock counts, and a POS that works on any phone.",
      color: "#3DD9B3",
    },
    {
      tier: "Medium",
      label: "Growing Chains",
      examples: ["Retail Chains", "Restaurants", "Boutiques"],
      solution: "Multi-branch inventory sync, staff roles, and loyalty campaigns.",
      color: "#7C6CF6",
    },
    {
      tier: "Large",
      label: "Enterprise Scale",
      examples: ["Shopping Malls", "Department Stores", "Corporate Hubs"],
      solution: "Enterprise analytics, tenant management, and dedicated support.",
      color: "#FF7A59",
    },
  ],
};

export const features = {
  heading: "Everything You Need to Run Your Business",
  cards: [
    {
      title: "Inventory Management",
      description: "Real-time tracking across all locations, so stock never goes silent.",
      icon: "inventory",
    },
    {
      title: "Billing & POS",
      description: "Seamless checkout for any business size — from a single till to a hundred.",
      icon: "billing",
    },
    {
      title: "Analytics & Insights",
      description: "Data-driven decisions made simple, with reports that read like a story.",
      icon: "analytics",
    },
    {
      title: "Customer Engagement",
      description: "Loyalty programs and CRM that turn one-time buyers into regulars.",
      icon: "engagement",
    },
  ],
};

export const growth = {
  heading: "Watch Your Business Grow",
  description: "Our clients see an average of 40% increase in operational efficiency.",
  lineData: [
    { month: "Jan", revenue: 100, efficiency: 65 },
    { month: "Mar", revenue: 180, efficiency: 78 },
    { month: "May", revenue: 280, efficiency: 85 },
    { month: "Jul", revenue: 400, efficiency: 92 },
    { month: "Sep", revenue: 550, efficiency: 96 },
    { month: "Nov", revenue: 720, efficiency: 99 },
  ],
  barData: [
    { metric: "Order Speed", before: 40, after: 88 },
    { metric: "Stock Accuracy", before: 55, after: 96 },
    { metric: "Repeat Customers", before: 30, after: 74 },
    { metric: "Monthly Revenue", before: 100, after: 168 },
  ],
  pieData: [
    { name: "Small Business", value: 45, color: "#3DD9B3" },
    { name: "Medium Business", value: 35, color: "#7C6CF6" },
    { name: "Large Enterprise", value: 20, color: "#FF7A59" },
  ],
};

export const howItWorks = {
  heading: "Get Started in 3 Simple Steps",
  steps: [
    { title: "Sign Up", description: "Create your account in minutes — no paperwork, no waiting." },
    { title: "Customize", description: "Tailor the solution to your business size and workflow." },
    { title: "Grow", description: "Watch your business transform with data on your side." },
  ],
};

export const testimonials = {
  heading: "What Our Clients Say",
  items: [
    {
      name: "Rajesh Mehta",
      business: "Mehta Kirana Store, Pune",
      quote:
        "Billing used to take five minutes per customer during rush hour. Now it takes fifteen seconds, and I finally know what's actually on my shelves.",
      rating: 5,
      segment: "Small",
    },
    {
      name: "Anita Sharma",
      business: "Sharma Retail Chain, Ahmedabad",
      quote:
        "Running twelve stores felt like twelve different businesses until PraTej synced our inventory and loyalty program across every branch.",
      rating: 5,
      segment: "Medium",
    },
    {
      name: "Vikram Anand",
      business: "Anand Mall Group, Bengaluru",
      quote:
        "We manage over 200 tenant stores from a single dashboard now. The analytics alone paid for the platform within a quarter.",
      rating: 4,
      segment: "Large",
    },
  ],
};

export const stats = {
  heading: "PraTej Solutions by the Numbers",
  items: [
    { value: 500, suffix: "+", label: "Businesses Trust Us" },
    { value: 40, suffix: "%", label: "Average Efficiency Gain" },
    { value: 99.9, suffix: "%", label: "Uptime Guarantee" },
    { value: 4.9, suffix: "/5", label: "Average Client Rating" },
  ],
};

export const finalCta = {
  heading: "Ready to Transform Your Business?",
  subheading: "Join 500+ businesses that have already made the switch",
  cta: "Get Started Today",
  contact: {
    email: "hello@pratejsolutions.com",
    phone: "+91 98765 43210",
  },
};

export const footer = {
  name: "PraTej Solutions",
  tagline: "One Solution. Every Business.",
  links: [
    { label: "Home", href: "/" },
    { label: "Solutions", href: "/solutions" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  socials: ["LinkedIn", "Twitter", "YouTube", "Instagram"],
  copyright: "© 2026 PraTej Solutions. All rights reserved.",
};

// ---------------------------------------------------------------------
// Additional pages: About, Solutions, Services, Demo, Contact
// ---------------------------------------------------------------------

export const about = {
  eyebrow: "Since 2019",
  heading: "We build the operating system every Indian business deserves.",
  intro:
    "PraTej Solutions started with a simple frustration: the software that runs a 200-store mall chain shouldn't be the only option — and the corner kirana shouldn't be left with a paper ledger. So we built one platform that flexes to fit both.",
  location: "PUNE, INDIA — 18.52°N 73.85°E",
  philosophy: [
    { title: "Built for the counter, not the boardroom", body: "Every feature ships tested at a real till first." },
    { title: "Grow without switching tools", body: "One account scales from a single shop to a hundred branches." },
    { title: "Data you can act on", body: "Insights that read like a story, not a spreadsheet dump." },
    { title: "Support that answers the phone", body: "Real people, real fast, in the language you run your business in." },
  ],
  timeline: [
    { year: "2019", title: "Founded", body: "Started as a billing tool for a single Pune kirana chain." },
    { year: "2021", title: "Multi-branch launch", body: "Inventory sync across locations for growing retail chains." },
    { year: "2023", title: "Enterprise tier", body: "Tenant management for shopping malls and department stores." },
    { year: "2026", title: "500+ businesses", body: "Trusted across India, from single counters to corporate hubs." },
  ],
  stats: [
    { value: "500+", label: "Businesses" },
    { value: "40%", label: "Avg. efficiency gain" },
    { value: "6", label: "Years running" },
    { value: "24/7", label: "Support" },
  ],
};

export const solutionsPage = {
  eyebrow: "Solutions",
  heading: "Retail Operations, Measured, Synced, Growth-Ready",
  subheading:
    "One platform that adapts to your scale — quantified with real usage data and built for real-world stores, not slideware.",
  problem: {
    eyebrow: "The Problem",
    heading: "Most retail software picks a lane and stays there",
    body:
      "Point-of-sale tools for small shops don't scale to chains. Enterprise ERPs are too heavy for a single counter. Businesses outgrow their software, or overpay for capability they don't need yet.",
    points: [
      "Switching systems as you grow means losing history and retraining staff",
      "Small-shop tools cap out fast; enterprise tools take months to onboard",
      "Fragmented tools mean fragmented data across billing, stock, and loyalty",
    ],
  },
  solution: {
    eyebrow: "Our Solution",
    heading: "One account. Every stage of growth.",
    body:
      "PraTej scales the same account from a single till to a hundred branches — no migration, no re-training, no lost history.",
    points: [
      "Real-time inventory sync across every branch, live",
      "Role-based staff access that grows with your team",
      "Analytics that read like a story — not a spreadsheet dump",
    ],
  },
  steps: [
    { n: "01", title: "Sign up in minutes", body: "No paperwork, no long onboarding calls — start billing the same day." },
    { n: "02", title: "Sync your stock", body: "Import existing inventory or start fresh; sync propagates across branches instantly." },
    { n: "03", title: "Watch it scale", body: "Add branches, staff, and loyalty programs as you grow — same account throughout." },
  ],
  sectors: [
    "Grocery stores & kirana shops",
    "Restaurants & cafes",
    "Retail chains & boutiques",
    "Shopping malls & department stores",
  ],
};

export const servicesPage = {
  eyebrow: "Services",
  heading: "What we build for businesses like yours",
  filters: ["All", "Billing", "Inventory", "Analytics", "Engagement"],
  items: [
    {
      name: "Mehta Kirana Store",
      title: "Billing & POS for a single-counter grocery",
      body: "Fast checkout and simple stock counts on a POS that runs on any phone.",
      tags: ["Billing", "Inventory"],
      segment: "Small",
    },
    {
      name: "Sharma Retail Chain",
      title: "Multi-branch inventory sync for 12 stores",
      body: "Synced stock and a shared loyalty program across every branch.",
      tags: ["Inventory", "Engagement"],
      segment: "Medium",
    },
    {
      name: "Anand Mall Group",
      title: "Enterprise dashboard for 200+ tenants",
      body: "Tenant management and analytics from a single enterprise dashboard.",
      tags: ["Analytics"],
      segment: "Large",
    },
    {
      name: "Growing Cafe Group",
      title: "Loyalty campaigns that turn buyers into regulars",
      body: "Customer engagement tools built for repeat business.",
      tags: ["Engagement"],
      segment: "Medium",
    },
  ],
};

export const demoPage = {
  eyebrow: "Book a Demo",
  heading: "See PraTej running on your own numbers",
  subheading: "30 minutes with our team — no slideware, just your data in the platform.",
  bullets: [
    "Walkthrough tailored to your business size",
    "Live Q&A with a product specialist",
    "No commitment — cancel anytime before go-live",
  ],
  testimonial: {
    quote: "The demo alone showed us stock gaps we didn't know we had.",
    name: "Anita Sharma",
    business: "Sharma Retail Chain",
  },
};

export const contactPage = {
  heading: "Contact",
  intro: "Talk to PraTej Solutions about billing, inventory, analytics, or a custom rollout for your business.",
  address: "Baner Road, Pune, Maharashtra, India",
  email: "hello@pratejsolutions.com",
  phone: "+91 98765 43210",
  socials: ["LinkedIn", "Twitter", "Instagram"],
};