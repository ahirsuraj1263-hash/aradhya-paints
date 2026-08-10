export const STATS = [
  { value: "250+", label: "Projects Completed", hindi: "प्रोजेक्ट्स" },
  { value: "15+", label: "Years of Craft", hindi: "कला का अनुभव" },
  { value: "7 Days", label: "Average Turnaround", hindi: "टर्नअराउंड" },
  { value: "4.9/5", label: "Client Rating", hindi: "ग्राहक रेटिंग" },
] as const;

export const PROCESS_STEPS = [
  {
    time: "Step 1",
    hindi: "पहला कदम",
    title: "Site Visit & Quote",
    desc: "We inspect the space, understand your requirements, and recommend the right finish and paint system.",
  },
  {
    time: "Step 2",
    hindi: "दूसरा कदम",
    title: "Surface Preparation",
    desc: "Walls are cleaned, repaired, sanded, and treated for a smooth, long-lasting base coat.",
  },
  {
    time: "Step 3",
    hindi: "तीसरा कदम",
    title: "Premium Finish",
    desc: "Our team applies the selected paint, texture, or waterproofing system with strict quality control.",
  },
] as const;

export const WHY_CHOOSE = [
  {
    title: "Premium Materials",
    hindi: "प्रीमियम सामग्री",
    desc: "We work with trusted paint brands and proven texture systems that look refined and stay durable.",
  },
  {
    title: "Experienced Craftsmanship",
    hindi: "अनुभवी कारीगरी",
    desc: "Our painters bring cleaner lines, sharper detailing, and a more professional finish to every project.",
  },
  {
    title: "On-Time Execution",
    hindi: "समय पर निष्पादन",
    desc: "From planning to final touch-up, our team keeps the site tidy, punctual, and well-coordinated.",
  },
  {
    title: "Transparent Pricing",
    hindi: "स्पष्ट मूल्य",
    desc: "You receive clear scope, fair pricing, and a detailed consultation before work begins.",
  },
] as const;

export const FAQ = [
  {
    q: "How do I book a painting consultation?",
    a: "You can complete the enquiry form, call our team, or message us on WhatsApp. We will schedule a site visit and share a detailed estimate.",
  },
  {
    q: "Do you offer interior and exterior painting packages?",
    a: "Yes. We handle complete residential repainting, premium interior finishes, exterior wall protection, texture applications, and waterproofing solutions.",
  },
  {
    q: "How do I know which paint finish is right for my home?",
    a: "We recommend finishes based on room usage, lighting, maintenance goals, and the final look you want to achieve. Our consultants guide you during the visit.",
  },
  {
    q: "Do you serve commercial spaces as well?",
    a: "Yes. We work on offices, retail units, showrooms, and other professional spaces that need quality, durable finishing with minimal disruption.",
  },
  {
    q: "How long does a painting project usually take?",
    a: "The timeline depends on the area size, surface condition, and finish type. Most standard residential jobs are completed within a few days with a clear schedule shared upfront.",
  },
] as const;

export const SERVICE_SPOTLIGHT = [
  { name: "Interior Painting", hindi: "इंटीरियर पेंटिंग", benefit: "Fresh colour schemes with polished detailing" },
  { name: "Exterior Painting", hindi: "एक्सटीरियर पेंटिंग", benefit: "Weather-resistant protection and curb appeal" },
  { name: "Texture Finishes", hindi: "टेक्सचर फिनिश", benefit: "Designer walls with depth and character" },
  { name: "Waterproofing", hindi: "वॉटरप्रूफिंग", benefit: "Long-term surface protection and durability" },
] as const;

export const ABOUT_EXTRA = {
  story: [
    "A polished wall does more than look attractive; it changes the way a home or office feels. At Aradhya Paints, we approach painting as a design and workmanship craft that improves comfort, confidence, and long-term value.",
    "From premium interior repainting to exterior protection and texture detailing, we focus on clean preparation, reliable execution, and premium finishing that reflects your taste.",
    "Our process is built on consultation, precise site preparation, and a quality finish that lasts — because the details matter just as much as the final appearance.",
  ],
  process: [
    { title: "Consult", desc: "Understand the exact scope, finish type, timeline, and budget expectation." },
    { title: "Prepare", desc: "Repair surfaces, protect furniture, and ensure the base is ready for a flawless finish." },
    { title: "Finish", desc: "Deliver clean, premium painting with careful workmanship and final inspection." },
    { title: "Support", desc: "Offer post-job guidance and maintenance advice for lasting durability." },
  ],
} as const;
