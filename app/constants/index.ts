export const EMAIL = "ziad11amr@gmail.com";
export const PHONE = "+20 155 136 45 15";
export const ServiceId = "service_daotm1h";
export const Template = "template_43ngd04";
export const PUBLI_KEY = "d_dlyfwe4S0zPHDQR"; 
export const LOGOPATH = "/Hollow-Knight-Background-PNG-Image.png";
export const LOGOTEXT = "ZIAD";
export const TECHSTACK = [
  "/meta_PNG12.png",
  "/tiktok.png",
  "/canva.png",
  "/goolgeanalytics.png",
  "/Mailchimp.png",
  "/notion.png",
  "/google-icon.png",
];
export const MAINCOLOR = "#e04826";

 const SERVICES = [
  {
    title: "Meta Ads Management",
    img: "/Marketing-bro.png.webp",
    description:
      "I create and manage ad campaigns that drive high-quality traffic and maximize ROI across Meta platforms.",
  },
  {
    title: "Ad Creative Direction",
    img: "/post-amico.png.webp",
    description:
      "I craft creative concepts and visuals that stop the scroll, connect emotionally, and boost conversions.",
  },
  {
    title: "Persuasive Copywriting",
    img: "/copywriting.png.webp",
    description:
      "I write ad copy that speaks directly to your audience’s pain points and motivates them to take action.",
  },
  {
    title: "Audience Research & Segmentation",
    img: "/Search-amico.png.webp",
    description:
      "I break down your audience into micro-segments to ensure precise targeting and relevant messaging.",
  },
  {
    title: "Data-Driven Optimization",
    img: "/Data-pana.png.webp",
    description:
      "I analyze campaign performance in real-time and make strategic changes backed by data — not guesses.",
  },
  {
    title: "Landing Page Audit",
    img: "/Landingpage-amico.png.webp",
    description:
      "I review your landing pages for clarity, structure, and conversion principles to ensure a smooth user journey.",
  },
  {
    title: "Funnel & Strategy Planning",
    img: "/Strategic-amico.png.webp",
    description:
      "I build full-funnel ad strategies based on your business model, using data to guide every decision.",
  },

];


export interface Project {
  id: number;
  title: string;
  des?: string;
  img: string | string[];
  features?:string | string[];
  link?: string;
  iconLists?: string[];
}

const ecommerceProjects  = [
  {
    id: 234,
    title: "Skincare Brand: 7.2x ROAS in Just 5 Days",
    des: `I launched a UGC-first Facebook campaign for a skincare brand, targeting women 20–35 using a broad targeting strategy and emotional hooks. The campaign generated $960+ in sales from $300 ad spend in just 5 days.`,
    img: ["/skinCare.png", "/Skincare2.png"],
    features: [
      "UGC-first mobile creative",
      "Broad targeting (no interests)",
      "Mobile-only placement optimization",
      "A/B tested emotional hooks",
      "Generated 7.2x ROAS on $300 budget",
    ],
      link: "#",
    iconLists: ["/meta_PNG12.png", "/canva.png", "/goolgeanalytics.png"],
  },
  
  {
    id: 465,
    title: "5.1x ROAS for Fashion Brand in 14 Days",
    des: `Scaled a men fashion eCom brand using a high-converting UGC video + carousel combo. Targeted TOF with fashion trends, layered MOF with social proof & styled looks. Generated $6.1K from $1.5K spend in 2 weeks.`,
    img: ["/fashon1.png",'/fashon2.png'],
    features: [
      "UGC + Carousel combo ad strategy",
      "Multi-layered full funnel (TOF + MOF)",
      "Tested 3 offer angles (BOGO, flash sale, styled bundles)",
      "5.1x blended ROAS",
      "$6.1K revenue from $1.5K ad spend",
    ],
    iconLists: ["/meta_PNG12.png", "/canva.png", "/google-icon.png", "/goolgeanalytics.png"],
      link: "#",

  },
  {
    id: 982,
    title: "High-Ticket Perfume Brand: 5.6x ROAS via Educational Storytelling Funnel",
    des: `Built a luxury scent campaign around value-first content. Crafted ASMR-style storytelling ads explaining fragrance layers, notes, and how to pick your signature scent. Used this to lead into premium offer retargeting, selling out our $85 SKU in 11 days.`,
    img: ["/perfumeOne.png","/perfumeTwo.png"],
    features: [
      "Educational content + scent psychology funnel",
      "dark aesthetic visuals",
      "Explained notes, layering, and scent profiles",
      "Retargeted with urgency-based carousel",
      "5.6x ROAS — Sold out $85 perfume line",
    ],
    iconLists: ["/meta_PNG12.png", "/tiktok.png", "/canva.png", "/goolgeanalytics.png"],
      link: "#",

  },


];
const leadGenProjects = [
  {
    id: 74,
    title: "Dr Nurse Academy – 218 Leads for Healthcare Masterclass in 6 Days",
    des: `Built a funnel to promote a free masterclass for healthcare professionals on how to land high-paying jobs abroad. Used Meta + Google Ads to drive traffic to a lead capture page with webinar registration. Achieved 218 signups with CPL of $0.74.`,
    img: ["/nurse1.png","/nurse2.png"],
    features: [
      "Lead magnet: Free webinar on international job prep",
      "Landing page with 2-step lead capture form",
      "Ad creatives focused on dream outcome (work abroad)",
      "Custom email sequence post-signup",
      "218 signups in 6 days",
      "CPL: $0.74 | CTR: 4.8%",
    ],
    iconLists: ["/meta_PNG12.png","/Mailchimp.png", "/goolgeanalytics.png"],
  link: "#",

  
  },
  {
    id: 28,
    title: "CodeLaunch Bootcamp – 457 Programming Leads in 9 Days",
    des: `Designed a high-converting lead funnel for a beginner-friendly full-stack development course targeting students & career switchers. Used Meta + TikTok ads + landing page with early-bird offer. Generated 457 hot leads in just 9 days with a $0.68 CPL.`,
img: ["/programming1.png","/programming2.png"],
    features: [
      "Landing page with social proof + bonus module for early signups",
      "Video testimonials from past students (UGC-style)",
      "Hook-focused ad creatives: 'From Zero to Hired in 3 Months'",
      "Lead magnet: Free PDF 'Top 10 Programming Projects for CVs'",
      "457 leads | CPL: $0.68 | Conversion rate: 21%",
      "Used Meta + TikTok with custom audiences based on behavior",
    ],
    iconLists: ["/meta_PNG12.png", "/tiktok.png", "Mailchimp.png", "/notion.png"],
  link: "#",

   
  }
  
];

 const CoursesProjects = [
  {
    id: 74,
    title: "Media Buying Fundamentals – Abdelrahman Alaa",
    des: `Comprehensive media buying course covering dashboards, ad platforms, and performance metrics. Learned how to manage full campaigns on Meta, TikTok, Google, and more.`,
    img: ["/course1.png"],
    features: [
      "Mastered dashboards across Meta, Google & TikTok",
      "Learned full-funnel campaign setup",
      "Tracking, budgeting, and scaling strategy",
    ],
    link: "#",
  },
  {
    id: 93,
    title: "E-Cart Academy Workshop – Osama Gamal",
    des: `Advanced workshop focused on creative testing, offer testing, and smart scaling. Learned how to test angles fast and scale winners using proven frameworks.`,
    img: ["/course2.png"],
    features: [
      "Testing frameworks (creative & offer testing)",
      "Scaling strategies based on data",
      "Real-world campaign breakdowns",
    ],
    link: "#",
  },
  {
    id: 88,
    title: "Egulf Hacking – Omar Mahmoud",
    des: `One of the most in-depth trainings on copywriting, funnel strategy, creative thinking, and dashboard analysis. Built a full understanding of strategic media buying.`,
    img: ["/course3.png"],
    features: [
      "Emotional & strategic copywriting",
      "Campaign planning & execution",
      "Deep dashboard analytics",
    ],
    link: "#",
  },
  {
    id: 28,
    title: "Udemy: Data Science for Marketing",
    des: `Practical course on using data science in marketing — helped me understand customer segmentation, A/B testing, attribution models and how to make data-driven decisions.`,
    img: ["/course4.png"],
    features: [
      "Segmentation & targeting using data",
      "A/B testing & funnel optimization",
      "Built a mindset of data-driven marketing",
    ],
    link: "#",
  },
];

 const BooksProjects = [
  {
    id: 1175,
    title: "$100M Offers by Alex Hormozi",
    des: `This book taught me how to craft irresistible offers that people feel stupid saying no to. It focuses on understanding value, pricing strategy, and how to make offers 10x more appealing.`,
    img: ["/book1.png"],
    features: [
      "Crafting high-value irresistible offers",
      "Understanding value equations & pricing",
      "Real-world case studies on scaling businesses",
    ],
    link: "#",
  },
  {
    id: 534,
    title: "$100M Leads by Alex Hormozi",
    des: `This book helped me master lead generation systems using organic & paid strategies. It breaks down how to attract attention, build pipelines, and fill calendars with qualified leads.`,
    img: ["/book2.png"],
    features: [
      "Lead generation frameworks (organic + paid)",
      "Traffic + conversion strategies",
      "Deep insights on attention, copy, and scaling",
    ],
    link: "#",
  },
];

export {
  ecommerceProjects,
  leadGenProjects,
  SERVICES,
  CoursesProjects ,
  BooksProjects
};
