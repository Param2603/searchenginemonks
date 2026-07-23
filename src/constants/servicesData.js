import { Globe, Search, Share2, Megaphone, Target, Palette, Brain, FileText } from "lucide-react";

export const services = [
  { 
    slug: "website-design-development",
    icon: Globe, 
    title: "Website Design & Development", 
    description: "Custom, responsive websites built to convert visitors into customers. Modern tech stack, blazing-fast performance, and stunning UI/UX design that represents your brand.", 
    color: "text-[#059669]", 
    bg: "bg-[#d1fae5]",
    fullDescription: "Your website is the digital storefront of your business. We build lightning-fast, highly responsive websites tailored to your specific goals. Combining aesthetic design with the latest web technologies, we ensure that every visitor gets a premium experience. Our development process is focused on performance, accessibility, and conversion rate optimization (CRO) so you can turn traffic into leads and sales.",
    features: ["Responsive UI/UX Design", "Custom Web Development", "E-commerce Solutions", "Performance Optimization (Core Web Vitals)", "CMS Integration (WordPress, Next.js)", "Ongoing Maintenance & Support"],
    faqs: [
      { question: "How long does it take to build a website?", answer: "Typically, a standard business website takes 4-6 weeks from initial design to launch. Complex e-commerce or custom applications may take 8-12 weeks." },
      { question: "Will my website be mobile-friendly?", answer: "Absolutely. All our websites are built mobile-first, ensuring they look and perform flawlessly on smartphones, tablets, and desktops." },
      { question: "Do you provide ongoing website maintenance?", answer: "Yes, we offer monthly maintenance packages that include security updates, content changes, backups, and performance monitoring." },
      { question: "Which platform do you use to build websites?", answer: "We specialize in modern tech stacks like Next.js and React for custom builds, but also work with WordPress and Shopify depending on your specific needs." }
    ]
  },
  { 
    slug: "seo-services",
    icon: Search, 
    title: "SEO Services", 
    description: "Data-driven SEO strategies to boost your organic rankings on Google. Technical SEO, on-page optimization, link building, and local SEO for Canadian businesses.", 
    color: "text-orange-600", 
    bg: "bg-orange-50",
    fullDescription: "Visibility is everything. Our comprehensive Search Engine Optimization services are designed to get your business on the first page of Google. We rely on data-backed strategies instead of guesswork, conducting deep keyword research, technical audits, and content optimization. From local SEO for small businesses to enterprise-level link-building campaigns, we drive high-quality organic traffic that actually converts.",
    features: ["Comprehensive SEO Audits", "Keyword Research & Strategy", "On-Page & Technical SEO", "High-Quality Link Building", "Local SEO & GMB Optimization", "Monthly Performance Reporting"],
    faqs: [
      { question: "How long does SEO take to show results?", answer: "SEO is a long-term strategy. While you may see initial improvements in 2-3 months, significant and sustainable results typically take 6-12 months depending on competition." },
      { question: "Do you guarantee first-page rankings?", answer: "No reputable agency can guarantee specific rankings due to Google's constantly changing algorithm. However, we guarantee we will implement proven, white-hat strategies that maximize your chances of ranking highly." },
      { question: "What is local SEO?", answer: "Local SEO focuses on optimizing your presence for location-based searches. This includes managing your Google Business Profile, local citations, and acquiring local reviews to dominate the 'map pack'." },
      { question: "Will you provide reports on progress?", answer: "Yes! We provide detailed monthly reports showing keyword rankings, organic traffic growth, and most importantly, leads generated from SEO." }
    ]
  },
  { 
    slug: "social-media-marketing",
    icon: Share2, 
    title: "Social Media Marketing", 
    description: "Engage your audience and build brand awareness across all major social platforms. Content strategy, community management, and paid social campaigns that deliver results.", 
    color: "text-pink-600", 
    bg: "bg-pink-50",
    fullDescription: "Social media isn't just about posting — it's about building a community. We create tailored social media strategies that amplify your brand's voice across Instagram, Facebook, LinkedIn, TikTok, and Twitter. Our team handles everything from content calendar creation and asset design to community management and influencer outreach. Let's turn your followers into your biggest advocates.",
    features: ["Social Media Strategy", "Content Creation & Scheduling", "Community Management", "Influencer Marketing", "Brand Awareness Campaigns", "Analytics & Growth Tracking"],
    faqs: [
      { question: "Which social media platforms should my business be on?", answer: "It depends on your target audience. B2B companies usually thrive on LinkedIn, while B2C retail brands do best on Instagram and TikTok. We help you identify where your audience lives." },
      { question: "Do you create the posts and graphics?", answer: "Yes, our team handles all creative aspects including copywriting, graphic design, and video editing to ensure your brand looks professional and engaging." },
      { question: "How often will you post on my accounts?", answer: "Posting frequency varies by platform and strategy, but typically we recommend 3-5 high-quality posts per week per platform for optimal engagement." }
    ]
  },
  { 
    slug: "google-ads",
    icon: Megaphone, 
    title: "Google Ads", 
    description: "Maximize your ROI with expertly managed Google Ads campaigns. Search, display, shopping, and YouTube ads optimized for conversions and lead generation.", 
    color: "text-blue-600", 
    bg: "bg-blue-50",
    fullDescription: "Get in front of customers exactly when they are searching for what you offer. As Google Ads experts, we design and manage high-performing campaigns that maximize your Return on Ad Spend (ROAS). We continuously test ad copy, refine bidding strategies, and optimize landing pages to lower your Cost Per Acquisition (CPA) and drive qualified leads directly to your sales team.",
    features: ["Search & Display Campaigns", "Google Shopping Ads", "YouTube Video Ads", "Retargeting & Remarketing", "A/B Testing & Optimization", "Conversion Tracking"],
    faqs: [
      { question: "How much should I spend on Google Ads?", answer: "Ad spend varies drastically by industry and competition. We generally recommend starting with a minimum budget of $1,000 - $3,000/month to gather enough data for optimization." },
      { question: "How quickly will I get leads?", answer: "Unlike SEO, Google Ads can generate traffic and leads almost immediately after the campaigns go live." },
      { question: "Are you Google Partner certified?", answer: "Yes, our PPC managers are certified Google Partners with extensive experience managing multi-million dollar ad budgets." }
    ]
  },
  { 
    slug: "meta-ads",
    icon: Target, 
    title: "Meta Ads", 
    description: "Reach your ideal customers on Facebook and Instagram. Advanced targeting, creative ad design, retargeting funnels, and continuous optimization for maximum impact.", 
    color: "text-violet-600", 
    bg: "bg-violet-50",
    fullDescription: "Tap into billions of active users with highly targeted Facebook and Instagram advertising. Our Meta Ads strategies focus on full-funnel marketing: capturing top-of-funnel awareness with eye-catching creatives, and driving bottom-of-funnel conversions through sophisticated retargeting. We leverage advanced audience targeting and machine learning to deliver your ads to the people most likely to buy.",
    features: ["Custom Audience Targeting", "Creative Ad Copy & Design", "Lead Generation Forms", "Dynamic Product Ads", "Pixel Tracking Integration", "ROAS Optimization"],
    faqs: [
      { question: "Do Meta Ads work for B2B businesses?", answer: "While often associated with B2C, Meta ads can be highly effective for B2B when utilizing lead generation forms, retargeting website visitors, and targeting specific job titles or interests." },
      { question: "What is the iOS 14 update and does it affect my ads?", answer: "Apple's privacy update changed how data is tracked. We navigate this by implementing the Conversions API (CAPI) and prioritizing first-party data strategies to maintain campaign effectiveness." },
      { question: "Do you provide the ad creatives?", answer: "Yes! Our design and copy team will produce multiple variations of images, videos, and ad copy for rigorous A/B testing." }
    ]
  },
  { 
    slug: "branding-graphic-design",
    icon: Palette, 
    title: "Branding & Graphic Design", 
    description: "Build a memorable brand identity that sets you apart. Logo design, brand guidelines, marketing collateral, and visual assets that communicate your unique value.", 
    color: "text-amber-600", 
    bg: "bg-amber-50",
    fullDescription: "First impressions matter. Our design team helps you build a cohesive, premium brand identity that resonates with your target audience. From your core logo to comprehensive brand guidelines, we ensure your visual presence is consistent, professional, and memorable across all touchpoints. We craft the visual language that sets you apart from the competition.",
    features: ["Logo Design & Branding", "Comprehensive Brand Guidelines", "Marketing Collateral (Brochures, Flyers)", "Social Media Graphics", "Business Cards & Stationery", "Packaging Design"],
    faqs: [
      { question: "What is included in a brand guidelines document?", answer: "It includes logo usage rules, color palettes (HEX/RGB/CMYK), typography hierarchies, brand voice guidelines, and visual examples to ensure consistency." },
      { question: "How many logo revisions do I get?", answer: "We typically offer 3 rounds of revisions to ensure you are 100% satisfied with the final design concept." },
      { question: "Do you design print materials?", answer: "Yes, we design everything from business cards and flyers to billboards and product packaging." }
    ]
  },
  { 
    slug: "ai-marketing-solutions",
    icon: Brain, 
    title: "AI Marketing Solutions", 
    description: "Leverage the power of artificial intelligence to automate and optimize your marketing. AI chatbots, predictive analytics, content generation, and smart automation.", 
    color: "text-cyan-600", 
    bg: "bg-cyan-50",
    fullDescription: "Stay ahead of the curve by integrating the latest AI technologies into your marketing stack. We help businesses implement intelligent chatbots for 24/7 customer support, use predictive analytics to forecast trends, and automate repetitive tasks. By harnessing AI, we make your marketing more personalized, efficient, and scalable, giving you a distinct competitive advantage.",
    features: ["Custom AI Chatbots", "Predictive Customer Analytics", "Marketing Automation Workflows", "AI-Assisted Content Creation", "Personalization Engines", "Data-Driven Insights"],
    faqs: [
      { question: "What exactly is an AI Chatbot?", answer: "An AI chatbot uses natural language processing (like ChatGPT) to understand and converse with your website visitors, answering FAQs and capturing leads 24/7 without human intervention." },
      { question: "Will AI replace my marketing team?", answer: "No, AI is a tool to empower your team. It automates repetitive tasks and analyzes data quickly, allowing your human team to focus on high-level strategy and creativity." },
      { question: "Is my data safe with AI tools?", answer: "Yes, we only implement enterprise-grade AI solutions that comply with data privacy regulations (like GDPR and CCPA) and do not use your proprietary data to train public models." }
    ]
  },
  { 
    slug: "content-creation",
    icon: FileText, 
    title: "Content Creation", 
    description: "Compelling content that educates, engages, and converts. Blog posts, website copy, video scripts, email campaigns, and social media content crafted by experts.", 
    color: "text-red-500", 
    bg: "bg-red-50",
    fullDescription: "Content is the fuel for your digital marketing engine. Our team of expert copywriters, videographers, and creators produce high-quality, engaging content tailored to your audience. Whether it's SEO-optimized blog posts, persuasive landing page copy, or scroll-stopping video scripts, we create the narratives that capture attention and drive action.",
    features: ["SEO Blog & Article Writing", "Website Copywriting", "Email Newsletter Campaigns", "Video Production & Scripting", "Case Studies & Whitepapers", "PR & Press Releases"],
    faqs: [
      { question: "Do you write content that ranks on Google?", answer: "Yes, all our blog posts and website copy are written with SEO best practices in mind, utilizing keyword research while remaining highly engaging for human readers." },
      { question: "Can you match my brand's specific tone of voice?", answer: "Absolutely. Before writing a single word, we conduct a brand discovery phase to perfectly capture your brand's unique personality and tone." },
      { question: "Do you offer video production?", answer: "Yes, we offer end-to-end video production including concepting, scripting, filming, and post-production editing tailored for social media or your website." }
    ]
  }
];
