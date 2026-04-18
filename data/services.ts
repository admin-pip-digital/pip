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

  twoUp: [ServiceTwoUp, ServiceTwoUp]

  featuresEyebrow: string
  featuresHeading: string
  features: ServiceFeature[]

  quote: ServiceQuote

  processHeading: string
  steps: ServiceStep[]

  ctaTitle: string
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
    title: 'Experiences users actually want to use.',
    intro:
      'I design product experiences that cut through complexity — helping teams ship interfaces that feel inevitable, not improvised.',
    primaryCta: 'Start a project',

    heroImage: '/images/ecommerce-hero.png',
    heroImageAlt: 'Ecommerce product experience design',
    heroImageCaption: 'Recent work: product experience redesign',

    statementHeading:
      'Great UX isn\u2019t a coat of paint. It\u2019s how the product thinks.',
    statementBody: [
      'Most product problems aren\u2019t surface problems. They\u2019re structural — the wrong object model, the wrong flow, the wrong place to make a decision. I work at that layer first, then let the pixels follow.',
      'The result is a product that feels coherent end-to-end. Teams move faster because the foundation is sound, and users get an experience that quietly does its job.',
    ],

    twoUp: [
      {
        src: '/images/client-app-hero.png',
        alt: 'Client-facing app experience',
        caption: 'Client app',
      },
      {
        src: '/images/coach-app-hero.png',
        alt: 'Coach-facing app experience',
        caption: 'Coach app',
      },
    ],

    featuresEyebrow: 'What\u2019s included',
    featuresHeading: 'Thoughtful systems, end to end.',
    features: [
      {
        title: 'Product & UX strategy',
        description:
          'Scoping, research synthesis, and prioritization so the team ships the right thing next, not just the next thing.',
        image: '/images/rebl-homepage.png',
      },
      {
        title: 'Design systems',
        description:
          'Token-first component libraries in Figma and code, so future work stays fast and consistent without re-inventing primitives.',
        image: '/images/script-design-system.png',
      },
    ],

    quote: {
      text: '\u201CEric rewired how we think about the product. Our roadmap finally matches what users actually need.\u201D',
      attribution: '\u2014 VP Product, health platform',
    },

    processHeading: 'A calm, collaborative process.',
    steps: [
      {
        number: '01',
        title: 'Understand the problem',
        description:
          'We start with interviews, audits, and analytics \u2014 whatever it takes to separate symptoms from root causes before touching Figma.',
      },
      {
        number: '02',
        title: 'Design the system',
        description:
          'Flows, IA, and core screens in tight loops with your team. You see work weekly, not after a month of silence.',
      },
      {
        number: '03',
        title: 'Ship & iterate',
        description:
          'I partner with engineering through build and launch, then keep iterating based on what real usage teaches us.',
      },
    ],

    ctaTitle: 'Let\u2019s make the product make sense.',
    ctaButton: 'Start a project',
    ctaFooter: 'Engagements from 6 weeks',
  },

  {
    slug: 'brand',
    metaTitle: 'Identity & Visual Design',
    metaDescription:
      'Brand identity and visual systems that give your company a voice people remember.',

    eyebrow: 'Identity & visual design',
    title: 'A brand worth looking twice at.',
    intro:
      'Identity systems, visual direction, and design guidelines that make your company feel considered \u2014 from the logo to the last line of the footer.',
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
    ctaFooter: 'Engagements from 4 weeks',
  },

  {
    slug: 'web',
    metaTitle: 'Web, Ads & Growth',
    metaDescription:
      'Custom websites, paid ads, and growth strategy for companies ready to stop looking like everyone else.',

    eyebrow: 'Web, ads & strategy',
    title: 'A website that earns its keep.',
    intro:
      'Custom-built websites, landing pages, and ad creative \u2014 paired with the strategy to make them compound. No templates, no guesswork.',
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
    ctaFooter: 'Engagements from 3 weeks',
  },
]

export function getService(slug: Service['slug']): Service {
  const match = services.find((s) => s.slug === slug)
  if (!match) throw new Error(`Unknown service slug: ${slug}`)
  return match
}
