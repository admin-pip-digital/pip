export type ServiceFeature = {
  title: string
  description: string
  image: string
  objectPosition?: string
}

export type ServiceStep = {
  number: string
  title: string
  description: string
}

export type ServiceTwoUp = {
  src: string
  alt: string
  caption: string
  objectPosition?: string
}

export type ServiceQuote = {
  text: string
  attribution: string
}

export type Service = {
  slug: 'ux' | 'brand' | 'web'
  metaTitle: string
  metaDescription: string

  eyebrow: string
  title: string
  intro: string
  primaryCta: string

  heroImage: string
  heroImageAlt: string
  heroImageCaption: string

  statementHeading: string
  statementBody: string[]
  statementQuote?: ServiceQuote

  twoUp?: [ServiceTwoUp, ServiceTwoUp]

  featuresEyebrow: string
  featuresHeading: string
  features: ServiceFeature[]

  quote: ServiceQuote
  secondaryQuote?: ServiceQuote

  processHeading: string
  processIntro?: string
  steps: ServiceStep[]

  ctaTitle: string
  ctaIntro?: string
  ctaButton: string
  ctaFooter: string
}

export const services: Service[] = [
  {
    slug: 'ux',
    metaTitle: 'UX, Product & Systems Design',
    metaDescription:
      'Product and systems design that turns complex workflows into clear, confident user experiences.',

    eyebrow: 'UX, product & systems',
    title: 'Improve your user experience',
    intro:
      'Good products don\u2019t happen by accident. I help teams untangle complexity, align on the right problems, and build experiences that actually hold together — from first flow to final component.',
    primaryCta: 'Start a project',

    heroImage: '/images/ux-hero.png',
    heroImageAlt: 'Ecommerce product experience design',
    heroImageCaption: 'Recent work: product experience redesign',

    statementHeading:
      'Great UX isn\u2019t a coat of paint. It\u2019s how the product thinks.',
    statementBody: [
      'Most product problems aren\u2019t surface problems. They\u2019re structural — the wrong object model, the wrong flow, the wrong place to make a decision. I work at that layer first, then let the pixels follow.',
      'The result is a product that feels coherent end-to-end. The foundation holds up, so the team stops relitigating old decisions — and users get an experience that quietly does its job.',
      'I\u2019ve helped a telehealth platform go from concept to launched product in four weeks — design system, core flows, and clinical content architecture included.',
    ],

    featuresEyebrow: 'How I help',
    featuresHeading: 'Thoughtful systems, end to end.',
    features: [
      {
        title: 'Product & UX strategy',
        description:
          'Scoping, research synthesis, and prioritization so the team ships the right thing next, not just the next thing. I work upstream so decisions don\u2019t have to get undone later.',
        image: '/images/simplenexus-1.png',
      },
      {
        title: 'Design systems',
        description:
          'Token-first component libraries in Figma and code, so future work stays coherent and consistent without reinventing primitives. Built to hand off cleanly to engineering.',
        image: '/images/script-design-system.png',
      },
      {
        title: 'Cross-functional collaboration',
        description:
          'I\u2019m used to working inside existing teams — with PMs, engineers, and stakeholders — not around them. I don\u2019t need a lot of direction to get moving, and I don\u2019t create drag while I do.',
        image: '/images/simplenexus-11.avif',
      },
    ],

    quote: {
      text: '\u201CEric used his skills in UX research... demonstrating how results driven he truly is. His analytical thinking along with keen eye for design always impressed me.\u201D',
      attribution: '\u2013 UX Designer',
    },

    secondaryQuote: {
      text: '\u201CEric\u2019s keen eye for design resulted in increased leads, sales and installs. He understands all aspects of design and how they play a role in the marketplace.\u201D',
      attribution: '\u2013 Affiliate Marketing Manager',
    },

    processHeading: 'A smooth, collaborative process.',
    processIntro:
      'I don\u2019t show up with a methodology to sell you. I show up to understand your product, your team, and where things are breaking down — then I work in whatever way actually moves the product forward.',
    steps: [
      {
        number: '01',
        title: 'Understand the problem',
        description:
          'Interviews, audits, and analytics — whatever it takes to separate symptoms from root causes before touching Figma. I\u2019m looking for the structural issue, not just the surface one.',
      },
      {
        number: '02',
        title: 'Design the system',
        description:
          'Flows, IA, and core screens in tight loops with your team. You see work weekly, not after a month of silence. I stay close to engineering so nothing gets lost in translation.',
      },
      {
        number: '03',
        title: 'Launch & iterate',
        description:
          'I partner with engineering through build and launch, then keep iterating based on what real usage teaches us. The work isn\u2019t done when it ships — it\u2019s done when it works.',
      },
    ],

    ctaTitle: 'Build a product people keep using.',
    ctaButton: 'Get in touch',
    ctaFooter: 'Based in Utah, available for remote work',
  },

  {
    slug: 'brand',
    metaTitle: 'Identity & Visual Design',
    metaDescription:
      'Brand identity and visual systems that give your company a voice people remember.',

    eyebrow: 'Identity & visual design',
    title: 'Elevate your brand image',
    intro:
      'Your brand is the first thing people judge you by. I help businesses look as good as they actually are — with visual identities that feel considered, consistent, and built to last.',
    primaryCta: 'Start a project',

    heroImage: '/images/brand-hero.png',
    heroImageAlt: 'Brand identity and marketing design',
    heroImageCaption: 'Recent work: marketing identity refresh',

    statementHeading:
      'Your brand is the first thing people feel and the last thing they forget.',
    statementBody: [
      'Most businesses underestimate how much their brand is costing them. A logo slapped together in a hurry, inconsistent colors across platforms, a website that doesn\u2019t match the business card — customers notice, even when they can\u2019t articulate why.',
      'I help you build a brand that works as hard as you do. One that looks the same whether it\u2019s on a storefront, a social post, or a pitch deck — and makes people feel like they\u2019re in good hands before you\u2019ve said a word.',
    ],

    featuresEyebrow: 'What\u2019s included',
    featuresHeading: 'More than a logo. A system that works.',
    features: [
      {
        title: 'Identity system',
        description:
          'Your logo, colors, typography, and visual style — designed to work together across everything you do. Not a one-time file drop, but a toolkit you can actually use.',
        image: '/images/brand-identity.png',
        objectPosition: 'left center',
      },
      {
        title: 'Guidelines & rollout',
        description:
          'Clear, simple guidelines so you and anyone you work with knows exactly how to use your brand. Plus hands-on support getting it live across your most important touchpoints.',
        image: '/images/epic-marketing-6.png',
        objectPosition: 'left center',
      },
    ],

    quote: {
      text: '\u201CEric brought positivity, humor, and professionalism... His ability to push creative strategy and collaborate led to stronger performing and well designed creative assets.\u201D',
      attribution: '\u2013 Product Manager',
    },

    secondaryQuote: {
      text: '\u201CEric\u2019s design talent is undeniable... his results speak for themselves.\u201D',
      attribution: '\u2013 Director of Affiliate Marketing',
    },

    processHeading: 'From fuzzy to unmistakable.',
    steps: [
      {
        number: '01',
        title: 'Discover the brand',
        description:
          'We start with a conversation about your business, your customers, and what makes you different. Then I do the homework — looking at your market and your competitors — so the brand we build is yours, not just something that looks nice.',
      },
      {
        number: '02',
        title: 'Design the system',
        description:
          'I build your visual identity piece by piece, sharing work along the way so nothing comes as a surprise. You stay involved without having to manage the process.',
      },
      {
        number: '03',
        title: 'Roll it out',
        description:
          'When the brand is ready, I help you put it into the world — templates, launch assets, and support so it shows up consistently everywhere it needs to.',
      },
    ],

    ctaTitle: 'Let\u2019s make your hard work visible.',
    ctaButton: 'Start a project',
    ctaFooter: 'Based in Utah, available for remote work',
  },

  {
    slug: 'web',
    metaTitle: 'Web, Ads & Growth',
    metaDescription:
      'Custom websites, paid ads, and growth strategy for companies ready to stop looking like everyone else.',

    eyebrow: 'Web, ads & strategy',
    title: 'Build a custom website and grow online',
    intro:
      'A great website does more than look good — it works. I build durable, custom sites and run ad campaigns that bring the right people in and give them a reason to stay.',
    primaryCta: 'Start a project',

    heroImage: '/images/ecommerce-desktop.png',
    heroImageAlt: 'Custom marketing website design',
    heroImageCaption: 'Recent work: agency marketing site',

    statementHeading:
      'A website isn\u2019t a brochure. It\u2019s the hardest-working person on your team.',
    statementBody: [
      'Most sites are built to look good on launch day and never touched again. I build sites that are built to evolve, clear to measure, and structured so every page is pulling its weight toward a real business goal.',
      'Pair that with ad creative and campaign strategy, and you have a setup that actually moves the number you care about.',
    ],

    featuresEyebrow: 'What\u2019s included',
    featuresHeading: 'Built to last, tuned to convert.',
    features: [
      {
        title: 'Custom website design & build',
        description:
          'Bespoke marketing sites on a modern stack \u2014 durable, editable by your team, and designed for the way your customers actually shop.',
        image: '/images/web-sample.png',
        objectPosition: 'left top',
      },
      {
        title: 'Ads & marketing',
        description:
          'Channel mix, ad creative, and campaign management — the thinking and the doing, pointed at the same goal.',
        image: '/images/web-mobile.png',
      },
    ],

    quote: {
      text: '\u201CEric created a great website for my spa, handled our Facebook ads, and improved our Google SEO rankings. His strategies brought in more customers and increased our revenue. I appreciate his clear communication and honest advice \u2014 I\u2019d recommend him to any business owner who wants real growth.\u201D',
      attribution: '\u2013 Business Owner, Lehi, Utah',
    },

    secondaryQuote: {
      text: '\u201CEric has been absolutely amazing! He updated our website and runs ads that drive new business. He works incredibly hard and truly cares about the success of our company. Professional, friendly, and flexible \u2014 highly recommend his services!\u201D',
      attribution: '\u2013 Business Owner, Parker, Colorado',
    },

    processHeading: 'Strategy, design, launch.',
    steps: [
      {
        number: '01',
        title: 'Align on the goal',
        description:
          'We start with the number that matters \u2014 leads, signups, revenue \u2014 and design the site and ads to move it.',
      },
      {
        number: '02',
        title: 'Design & build',
        description:
          'Custom design paired with a modern, editable build. You see progress weekly and launch without surprises.',
      },
      {
        number: '03',
        title: 'Launch & compound',
        description:
          'Ongoing ad creative, landing page experiments, and iteration — so the site gets smarter the longer it\u2019s live.',
      },
    ],

    ctaTitle: 'Your customers are waiting. Let\u2019s get growing!',
    ctaButton: 'Start a project',
    ctaFooter: 'Based in Utah, available for remote work',
  },
]

export function getService(slug: Service['slug']): Service {
  const match = services.find((s) => s.slug === slug)
  if (!match) throw new Error(`Unknown service slug: ${slug}`)
  return match
}
