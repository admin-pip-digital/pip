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
      'Good products don\u2019t happen by accident. I help teams untangle complexity, align on the right problems, and ship experiences that actually hold together — from first flow to final component.',
    primaryCta: 'Start a project',

    heroImage: '/images/ecommerce-hero.png',
    heroImageAlt: 'Ecommerce product experience design',
    heroImageCaption: 'Recent work: product experience redesign',

    statementHeading:
      'Great UX isn\u2019t a coat of paint. It\u2019s how the product thinks.',
    statementBody: [
      'Most product problems aren\u2019t surface problems. They\u2019re structural — the wrong object model, the wrong flow, the wrong place to make a decision. I work at that layer first, then let the pixels follow.',
      'The result is a product that feels coherent end-to-end. Teams move faster because the foundation is sound, and users get an experience that quietly does its job.',
      'I\u2019ve helped a telehealth platform go from concept to launched product in four weeks — design system, core flows, and clinical content architecture included.',
    ],

    featuresEyebrow: 'How I help',
    featuresHeading: 'Thoughtful systems, end to end.',
    features: [
      {
        title: 'Product & UX strategy',
        description:
          'Scoping, research synthesis, and prioritization so the team ships the right thing next, not just the next thing. I work upstream so decisions don\u2019t have to get undone later.',
        image: '/images/rebl-homepage.png',
      },
      {
        title: 'Design systems',
        description:
          'Token-first component libraries in Figma and code, so future work stays fast and consistent without reinventing primitives. Built to hand off cleanly to engineering.',
        image: '/images/script-design-system.png',
      },
      {
        title: 'Cross-functional collaboration',
        description:
          'I\u2019m used to working inside existing teams — with PMs, engineers, and stakeholders — not around them. I don\u2019t need a lot of direction to get moving, and I don\u2019t create drag while I do.',
        image: '/images/client-app-hero.png',
      },
    ],

    quote: {
      text: '\u201CEric truly cares about the people using a product, listens closely, and works to understand what they actually need.\u201D',
      attribution: '\u2014 Product Designer, health & wellness platform',
    },

    secondaryQuote: {
      text: '\u201CEric doesn\u2019t just scratch the surface\u2014he digs deep to truly understand the core needs and motivations of users, resulting in designs that genuinely resonate.\u201D',
      attribution: '\u2014 Director of Product Management, SaaS platform',
    },

    processHeading: 'A smooth, collaborative process.',
    processIntro:
      'I don\u2019t show up with a methodology to sell you. I show up to understand your product, your team, and where things are breaking down — then I work in whatever way makes your team faster.',
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
        title: 'Ship & iterate',
        description:
          'I partner with engineering through build and launch, then keep iterating based on what real usage teaches us. The work isn\u2019t done when it ships — it\u2019s done when it works.',
      },
    ],

    ctaTitle: 'Ship a product people want to use.',
    ctaIntro:
      'If you\u2019re looking for someone who can slot into your team, move with confidence, and make the work better without making the process harder — let\u2019s talk.',
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

    heroImage: '/images/epic-marketing-hero.png',
    heroImageAlt: 'Brand identity and marketing design',
    heroImageCaption: 'Recent work: marketing identity refresh',

    statementHeading:
      'Your brand is the first thing people feel and the last thing they forget.',
    statementBody: [
      'Most brand work stops at a logo and a color palette. I go further \u2014 building voice, typography, motion, and image language into a system your team can actually use across every surface.',
      'The goal isn\u2019t novelty. It\u2019s a brand that reads as confident in every touchpoint, from a pitch deck to a paid ad to a product screen.',
    ],

    twoUp: [
      {
        src: '/images/epic-marketing-2.png',
        alt: 'Marketing campaign design',
        caption: 'Campaign design',
      },
      {
        src: '/images/epic-marketing-3.png',
        alt: 'Brand collateral system',
        caption: 'Collateral system',
      },
    ],

    featuresEyebrow: 'What\u2019s included',
    featuresHeading: 'A complete identity, not a logo drop.',
    features: [
      {
        title: 'Identity system',
        description:
          'Logo suite, typography, color, and iconography that work as a kit of parts \u2014 not a static PDF gathering dust.',
        image: '/images/script-before.png',
      },
      {
        title: 'Guidelines & rollout',
        description:
          'Living brand guidelines plus hands-on support applying the system to real campaigns and touchpoints.',
        image: '/images/epic-marketing-5.png',
      },
    ],

    quote: {
      text: '\u201CThe identity work paid for itself the first time we walked into a pitch. People remembered us.\u201D',
      attribution: '\u2014 Founder, consumer startup',
    },

    processHeading: 'From fuzzy to unmistakable.',
    steps: [
      {
        number: '01',
        title: 'Discover the brand',
        description:
          'Workshops, competitive audits, and stakeholder interviews to land on a point of view worth owning.',
      },
      {
        number: '02',
        title: 'Design the system',
        description:
          'Identity, voice, and visual language built up in parallel so nothing gets locked in before the whole picture is there.',
      },
      {
        number: '03',
        title: 'Roll it out',
        description:
          'Guidelines, templates, and launch support so the new brand shows up everywhere it needs to, cleanly.',
      },
    ],

    ctaTitle: 'Make them remember you.',
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
      'A great website does more than look good — it works. I build fast, custom sites and run ad campaigns that bring the right people in and give them a reason to stay.',
    primaryCta: 'Start a project',

    heroImage: '/images/optavia-agency-1.png',
    heroImageAlt: 'Custom marketing website design',
    heroImageCaption: 'Recent work: agency marketing site',

    statementHeading:
      'A website isn\u2019t a brochure. It\u2019s the hardest-working person on your team.',
    statementBody: [
      'Most sites are built to look good on launch day and never touched again. I build sites that are easy to evolve, fast to measure, and structured so every page is pulling its weight toward a real business goal.',
      'Pair that with ad creative and funnel strategy, and you have a setup that actually moves the number you care about \u2014 not just your portfolio.',
    ],

    twoUp: [
      {
        src: '/images/optavia-agency-2.png',
        alt: 'Responsive marketing site',
        caption: 'Marketing site',
      },
      {
        src: '/images/optavia-agency-3.png',
        alt: 'Landing page design',
        caption: 'Landing page',
      },
    ],

    featuresEyebrow: 'What\u2019s included',
    featuresHeading: 'Built to ship, tuned to convert.',
    features: [
      {
        title: 'Custom website design & build',
        description:
          'Bespoke marketing sites on a modern stack \u2014 fast, editable by your team, and designed for the way your customers actually shop.',
        image: '/images/optavia-agency-4.png',
      },
      {
        title: 'Growth strategy',
        description:
          'Channel mix, messaging, and experiment roadmap \u2014 the thinking layer that keeps the creative and the site pointed at the same goal.',
        image: '/images/time4uspa-hero.png',
      },
    ],

    quote: {
      text: '\u201CNew site, new ad system, and our CAC dropped inside a month. It finally feels like we\u2019re marketing on purpose.\u201D',
      attribution: '\u2014 COO, DTC brand',
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
          'Ongoing ad creative, landing-page experiments, and iteration \u2014 so the site gets smarter the longer it\u2019s live.',
      },
    ],

    ctaTitle: 'Let\u2019s build something that works for you.',
    ctaButton: 'Start a project',
    ctaFooter: 'Based in Utah, available for remote work',
  },
]

export function getService(slug: Service['slug']): Service {
  const match = services.find((s) => s.slug === slug)
  if (!match) throw new Error(`Unknown service slug: ${slug}`)
  return match
}
