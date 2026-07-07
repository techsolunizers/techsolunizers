// All copy, testimonials, stats and chart data for the PraTej Solutions landing page.
// Kept in one place so non-technical editors can update text without touching components.

export const nav = {
  logo: "PraTej Solutions",
  links: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#features" },
    { label: "Solutions", href: "#spectrum" },
    { label: "About", href: "#growth" },
    { label: "Contact", href: "#cta" },
  ],
  cta: "Book a Demo",
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
    { label: "Home", href: "#home" },
    { label: "Services", href: "#features" },
    { label: "About", href: "#growth" },
    { label: "Contact", href: "#cta" },
    { label: "Privacy Policy", href: "#" },
  ],
  socials: ["LinkedIn", "Twitter", "YouTube", "Instagram"],
  copyright: "© 2026 PraTej Solutions. All rights reserved.",
};
