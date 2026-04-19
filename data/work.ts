export type SectionLayout = 'intro' | 'two-col' | 'prose' | 'quote' | 'stats'
export type ImageBlockLayout = 'full' | 'pair' | 'stack' | 'logos'

export type CaseStudyImage = {
  src?: string
  alt: string
  caption?: string
  objectPosition?: string
  shadow?: boolean
}

export type ImageBlock = {
  layout?: ImageBlockLayout
  images: CaseStudyImage[]
}

export type DiagramVariant = 'workflow'

export type Section = {
  heading: string
  eyebrow?: string
  body?: string | string[]
  list?: string[]
  listColumns?: 1 | 2
  stats?: Stat[]
  layout?: SectionLayout
  after?: ImageBlock
  diagram?: DiagramVariant
}

export type Stat = {
  value: string
  label: string
}

export type PullQuote = {
  text: string
  attribution?: string
}

export type CaseStudyContent = {
  overview?: string
  stats?: Stat[]
  pullQuote?: PullQuote
  sections: Section[]
  images: CaseStudyImage[]
  nextSlug?: string
  nextLabel?: string
}

export type WorkItem = {
  slug: string
  title: string
  subtitle: string
  outcome?: string
  tags: string[]
  coverImage: string
  year: string
  status: 'published' | 'coming-soon'
  client: string
  banner?: string
  content?: CaseStudyContent
  protected?: true
}

export const work: WorkItem[] = [
  // ─── Published work ───────────────────────────────────────
  {
    slug: 'rebl-website',
    title: 'Building a telehealth platform from scratch',
    subtitle:
      'Architecture, design, and content infrastructure for a fully async medical practice — four weeks from concept to live.',
    outcome: '4 weeks to launch',
    tags: [
      'Product Design',
      'Frontend Development',
      'Content Architecture',
      'CMS',
    ],
    coverImage: '/images/rebl-hero.png',
    year: '2025',
    status: 'published',
    protected: true,
    client: 'REBL',
    banner:
      'For user privacy, the names and data shown here are placeholders. The work and outcomes are real.',
    content: {
      sections: [
        {
          heading: 'The situation',
          layout: 'intro',
          body: [
            'REBL had just hired its first prescribing provider — and no infrastructure to support her.',
            'No patient portal, no way to surface treatments, no mechanism for the async visits that would define their care model. Within weeks of joining as a contractor, I was scoping what would become REBL: a fully online, asynchronous telehealth practice built around compounded medications and peptide protocols.',
            'The business need was immediate. Treatments needed to be discoverable. Patients needed a way to initiate care. The provider needed a system that could scale without adding scheduling overhead. Everything had to work before the practice could see its first patient.',
          ],
        },
        {
          heading: 'What we built',
          eyebrow: 'Scope',
          layout: 'two-col',
          body: [
            'REBL launched as the patient-facing side of a two-product system. The companion product, Connect, gave the provider the ability to approve requests, order prescriptions, and send follow-ups — the clinical layer. REBL was the front door.',
            'Before I got there, there was no portal and no way to market provider support to patients. Four weeks later, REBL was live.',
            'I started in Framer, moving quickly through architecture and visual design with brand guidelines from the clinical team. When it became clear the site needed more flexibility than Framer could offer — dynamic medication pages, non-technical content editing, a data model that could grow — I rebuilt it from scratch in Next.js with Sanity CMS as the content layer.',
          ],
          after: {
            layout: 'pair',
            images: [
              {
                src: '/images/rebl-homepage.png',
                alt: 'Homepage',
                caption: 'REBL homepage — patient entry point.',
                objectPosition: 'top left',
              },
              {
                src: '/images/rebl-medication.png',
                alt: 'Treatment detail page',
                caption: 'Dynamic medication pages generated from the Sanity schema.',
                objectPosition: 'top left',
              },
            ],
          },
        },
        {
          heading: 'At a glance',
          layout: 'stats',
          stats: [
            { value: '4 wks', label: 'Concept to live' },
            { value: '33+', label: 'Medications modeled' },
            { value: '2', label: 'Products shipped' },
          ],
        },
        {
          heading: 'Content architecture',
          eyebrow: 'Design',
          layout: 'two-col',
          body: [
            "REBL's catalog included 33+ active medications and peptide protocols, each with variants, compound breakdowns, patient education content, and clinical flags. I modeled this in both Sanity (for the site) and Notion (as an editorial layer for clinical staff who weren't developers).",
            'The two systems were designed to stay in sync, with Notion as the place Nicole and the care team could review, annotate, and update — and Sanity as the source of truth that powered the live site.',
          ],
          after: {
            layout: 'full',
            images: [
              {
                src: '/images/rebl-sanity-schema.png',
                alt: 'Sanity schema diagram',
                caption: 'Medication schema — variants, compounds, patient education, and clinical flags as relational fields.',
                objectPosition: 'top left',
              },
              {
                src: '/images/rebl-notion-database.png',
                alt: 'Notion editorial layer',
                caption: 'Notion database used by the clinical team to review and annotate medication content.',
                objectPosition: 'top left',
              },
            ],
          },
        },
        {
          heading: 'Attribution',
          layout: 'prose',
          body: 'I built UTM attribution across the domain boundary between joinrebl.com and the assessment platform at care.heyrebl.com, so that partner referral links and campaign traffic could be tracked all the way through to completed assessments.',
          after: {
            layout: 'full',
            images: [
              {
                src: '/images/rebl-utm-promo.png',
                alt: 'UTM attribution flow diagram',
                caption: 'Referral link → assessment completion tracked across the domain boundary.',
                objectPosition: 'center center',
                shadow: true,
              },
            ],
          },
        },
        {
          heading: 'The stack',
          eyebrow: 'Engineering',
          layout: 'two-col',
          body: [
            'The architecture was chosen to move fast while staying extensible.',
            "Sanity's schema system made it straightforward to model complex relational content — medication variants, blend components, status fields at multiple levels — without committing to a rigid database structure too early.",
          ],
          after: {
            layout: 'logos',
            images: [
              { src: '/logo/next.js.png', alt: 'Next.js' },
              { src: '/logo/sanity.png', alt: 'Sanity' },
              { src: '/logo/clerk.png', alt: 'Clerk' },
              { src: '/logo/vercel.png', alt: 'Vercel' },
              { src: '/logo/notion.png', alt: 'Notion' },
              { src: '/logo/framer.png', alt: 'Framer' },
            ],
          },
        },
        {
          heading: 'Built for migration',
          layout: 'prose',
          body: "The Notion → Sanity pipeline was deliberately designed for migration. The medication catalog doesn't need to live in a third-party CMS forever — by building the schema cleanly and keeping the data model well-documented, the dev team has a clear path to migrate the content layer into REBL's internal systems when the time comes.",
        },
        {
          heading: 'Launch and beyond',
          layout: 'prose',
          body: [
            "REBL went live with a controlled rollout — close friends and family first, monitoring the async visit flow end-to-end before opening access to select partnerships. Those partners made REBL's treatment catalog and async care model available to their own provider networks, each with tracked referral attribution.",
            'The platform is still growing. The site architecture was built as a template: new treatment categories, new provider partnerships, and new content can all be added through the CMS without a developer. The dev team has a stable foundation to build from rather than a tangle to untangle.',
          ],
          after: {
            layout: 'pair',
            images: [
              {
                src: '/images/rebl-partner.png',
                alt: 'Partner portal',
                caption: 'Partner-branded entry points for referral networks.',
                objectPosition: 'top left',
              },
              {
                src: '/images/rebl-monitoring.png',
                alt: 'Async visit flow',
                caption: 'End-to-end async visit flow, monitored during controlled rollout.',
                objectPosition: 'top left',
              },
            ],
          },
        },
        {
          heading: 'My role',
          layout: 'prose',
          body: 'I was one of two designers and the primary developer on REBL. The clinical team — particularly the prescribing provider — shaped the treatment catalog and patient education content. Brand guidelines came from a colleague on the design side. Everything else — site architecture, content modeling, frontend development, CMS configuration, data pipeline design, and UTM attribution — was mine.',
        },
      ],
      images: [],
      nextSlug: 'script-design-system',
      nextLabel: 'Script: a design system for humans and AI agents',
    },
  },
  {
    slug: 'script-design-system',
    title: 'Script: A design system written for humans and AI agents',
    subtitle:
      'A design system written for humans and AI agents alike — the infrastructure that brought visual consistency to a fast-moving clinical product.',
    outcome: 'In active use',
    tags: [
      'Design Systems',
      'AI Tooling',
      'Documentation',
      'Tailwind v4',
      'Multi-App Architecture',
    ],
    coverImage: '/images/script-design-system.png',
    year: '2025',
    status: 'published',
    protected: true,
    client: 'Connect',
    banner:
      'For user privacy, the names and data shown here are placeholders. The work and outcomes are real.',
    content: {
      sections: [
        {
          heading: 'The situation',
          layout: 'intro',
          body: [
            'Connect was being built fast, and the development team needed a system that would get the AI agents they were using to build the UI trained correctly.',
            'The provider app that clinical staff used to approve patient requests, order prescriptions, and send follow-ups was moving quickly, and the codebase was accumulating decisions — color choices, spacing patterns, component structures — made in the moment by a development team without a shared visual language.',
            'I had been pushing for design consistency. The feedback I got back was pointed: if I wanted to influence how the UI was built, I needed to document it in a way developers and AI coding agents could actually use. It was a challenge wrapped in skepticism. I took it seriously.',
            "The question wasn't just how to design the system. It was how to write it so a person and an AI could read the same file and reach the same conclusion.",
          ],
        },
        {
          heading: 'Before and after',
          eyebrow: 'The shift',
          layout: 'two-col',
          body: 'The treatment plans page is the clearest illustration of what changed. Before Script, it reflected the accumulated decisions of a fast-moving build — functional, but visually inconsistent. After, the same page follows a coherent system: tokens, spacing, and component patterns all pulling in the same direction.',
          after: {
            layout: 'pair',
            images: [
              {
                src: '/images/script-before.png',
                alt: 'Treatment plans page before Script',
                caption: 'Before — accumulated decisions, no shared visual language.',
                objectPosition: 'top left',
              },
              {
                src: '/images/script-after.png',
                alt: 'Treatment plans page after Script',
                caption: 'After — tokens, spacing, and patterns pulling in the same direction.',
                objectPosition: 'top left',
              },
            ],
          },
        },
        {
          heading: 'What we built',
          eyebrow: 'The system',
          layout: 'two-col',
          body: [
            'Script is a markdown-based design system structured in layers. At the foundation is atoms.md — every color token, typographic decision, spacing scale, motion curve, elevation level, and accessibility rule defined in one place. Built on top of that is molecules.md, which documents how atoms combine into reusable interface patterns.',
            'The system is multi-app by design. Connect runs a provider-facing app and a patient-facing app that white-labels for partner practices. Script handles both through a brand layer: global tokens stay consistent, while app-specific files define how each surface inherits and overrides them. A new practice can be skinned without touching the underlying system.',
          ],
          after: {
            layout: 'full',
            images: [
              {
                src: '/images/script-readme.png',
                alt: 'Script readme routing agents to design system files',
                caption: 'Script lives in markdown files in the repo, managed by the design team for developers and AI agents to easily reference and build from.',
                objectPosition: 'center center',
              },
            ],
          },
        },
        {
          heading: 'Routing the agent',
          layout: 'prose',
          body: "The readme.md is the system's entry point — it orients an AI agent to the right files based on what it's building. An agent working on the provider interface gets routed to provider/brand.md and provider/components.md alongside the global files. An agent building patient-facing UI gets the patient layer instead. The system tells the agent what it needs to know and nothing more.\n\nToken usage follows Tailwind v4's CSS variable integration. Every decision in the doc maps to a utility class, so there's no ambiguity between what the documentation says and what goes into the code.",
        },
        {
          heading: 'At a glance',
          layout: 'stats',
          stats: [
            { value: '3', label: 'Apps governed' },
            { value: '∞', label: 'White-label practices' },
            { value: '0', label: 'Hardcoded hex values' },
          ],
        },
        {
          heading: '',
          layout: 'quote',
          body: 'Writing for AI is expensive when vague. Every ambiguous rule becomes an inconsistent UI.',
        },
        {
          heading: 'How it\'s used',
          eyebrow: 'In practice',
          layout: 'two-col',
          body: [
            "Script is now part of the dev team's standard AI agent workflow. Alongside the project readme, agents are pointed to the design system files before generating or auditing UI code. The system functions as a constraint layer — it narrows the space of valid decisions before an agent writes a single line.",
            "That's the thing about writing for AI: vagueness is expensive. Every ambiguous rule becomes an inconsistent UI. Script was written to be unambiguous — each token named, each rule stated flatly, each exception explicitly called out. The discipline of writing for agents turned out to make the system better for human developers too.",
          ],
          diagram: 'workflow',
        },
        {
          heading: 'My role',
          layout: 'prose',
          body: [
            'I wrote Script. The dev team informed what it needed to do — they needed something agents could consume reliably — and I designed the architecture, wrote every rule, and iterated on both structure and language until the system was legible to a developer, an AI, and a designer in the same reading.',
            'It started as a response to pushback. It became something the team actually uses.',
            'Disciplines involved: Design systems · Technical writing · AI tooling · Token architecture · Multi-app design · Documentation strategy',
          ],
        },
      ],
      images: [],
      nextSlug: 'patient-education',
      nextLabel: 'Patient Education Model',
    },
  },
  {
    slug: 'patient-education',
    title: 'Scalable education model for patient medications at a telehealth startup',
    subtitle:
      'Designing a patient education model with an internal provider team to improve health outcomes.',
    outcome: 'Improved health outcomes through education',
    tags: ['UX Design', 'Healthcare'],
    coverImage: '/images/patient-education-placeholder.png',
    year: '2025',
    status: 'coming-soon',
    client: 'Internal',
    content: {
      sections: [
        {
          heading: 'Overview',
          body: 'Designing a patient education model with an internal provider team to improve health outcomes.',
        },
      ],
      images: [
        {
          src: '/images/patient-education-placeholder.png',
          alt: 'Patient Education Model',
        },
      ],
      nextSlug: 'luminous-estate',
      nextLabel: 'Luminous Estate',
    },
  },
  {
    slug: 'luminous-estate',
    title: 'A space for collaborative storytelling: Luminous Estate',
    subtitle: '',
    tags: [],
    coverImage: '',
    year: '2025',
    status: 'coming-soon',
    client: 'Luminous Estate',
    content: {
      sections: [],
      images: [],
      nextSlug: 'optavia-coach-app',
      nextLabel: 'Optavia Coach App',
    },
  },
  {
    slug: 'optavia-coach-app',
    title: 'Managing a growing organization: Optavia Coach App',
    subtitle: 'Coming soon.',
    tags: ['B2B SaaS'],
    coverImage: '',
    year: '2025',
    status: 'coming-soon',
    client: 'Optavia',
    content: {
      sections: [],
      images: [],
      nextSlug: 'optavia-client-app',
      nextLabel: 'Optavia Client App',
    },
  },
  {
    slug: 'optavia-client-app',
    title: 'Building healthy habits: Optavia Client App',
    subtitle: 'Coming soon.',
    tags: ['B2B2C SaaS'],
    coverImage: '',
    year: '2025',
    status: 'coming-soon',
    client: 'Optavia',
    content: {
      sections: [],
      images: [],
      nextSlug: 'optavia-design-system',
      nextLabel: 'Optavia Design System',
    },
  },
  {
    slug: 'optavia-design-system',
    title: 'A component library built around what teams actually use',
    subtitle:
      'Rather than trying to accommodate every possible design variation, we built a reference library of components we actually needed.',
    tags: ['Design Systems', 'Component Library', 'Brand'],
    coverImage: '/images/optavia-design-system-1.png',
    year: '2023',
    status: 'coming-soon',
    client: 'Optavia',
    content: {
      sections: [
        {
          heading: 'The Problem',
          body: "Optavia's product team was rebuilding components from scratch for every new feature, slowing down development and creating inconsistencies across the health platform. The brand felt dated and inconsistent on top of it — Darby Sans was used everywhere, creating readability issues, and twelve different gradients gave the product an 'earthy and dirty' appearance. Every component felt generic, with no systematic approach to typography, color, or spacing.",
        },
        {
          heading: 'The Approach',
          body: "We audited the entire product, cataloging inconsistencies across components and patterns. Working with developers, we studied how they built features and designed a system they'd actually adopt, referencing Dropbox and Shopify to understand scalable approaches. Instead of trying to accommodate every possible design variation, we focused on the components we actually used most — buttons, forms, alerts — and made them bulletproof.",
        },
        {
          heading: 'The Solution',
          list: [
            'Refined typographic hierarchy: Brando (modern serif for headers with tight tracking) and Gibson (open-source sans serif for body with generous line height)',
            'Simplified, accessibility-compliant color palette with semantic tokens (primary, success, warning, error) that modernized the brand while keeping migration costs low',
            '8px spacing system and defined component states for consistency across touchpoints',
            'Component library covering 80% of common use cases, with clear usage guidelines so designers and developers made consistent choices',
          ],
        },
        {
          heading: 'Impact',
          body: "The team could ship new features faster without sacrificing quality. Developers stopped asking 'what color should this button be?' because the system made those decisions obvious. Coaches and clients immediately adopted the new brand, creating their own materials using the updated design language — users described it as more professional and trustworthy.",
        },
        {
          heading: 'Why This Worked',
          body: "Constraints breed creativity. By limiting options to what actually mattered for the product, we freed up mental bandwidth for solving harder problems. Sometimes the best design system is the one people actually use.",
        },
      ],
      images: [
        {
          src: '/images/optavia-design-system-1.png',
          alt: 'Optavia design system color palette documentation',
          caption: 'Semantic color tokens — meaningful names, not just hex values.',
        },
        {
          src: '/images/optavia-design-system-2.png',
          alt: 'Typography guidelines showing Open Sans font family',
          caption: 'Typography scale with clear hierarchy and usage guidelines.',
        },
        {
          src: '/images/optavia-design-system-3.png',
          alt: 'Button component documentation showing six variants',
          caption: 'Component documentation with states and usage guidelines.',
        },
        {
          src: '/images/optavia-design-system-4.png',
          alt: 'Form fields component library showing input variations',
          caption: 'Form components with all states: default, focus, error, success.',
        },
        {
          src: '/eric-portfolio/3.1.png',
          alt: 'Design system specifications',
          caption: 'Samples from the design system including typography, iconography, logos, and colors — surprisingly simple, but a much better and more elegant solution.',
        },
        {
          src: '/eric-portfolio/3.2.png',
          alt: 'Product photography art direction',
          caption: 'The system extended to art direction guidelines for product photography, ensuring visual consistency across all brand touchpoints.',
        },
      ],
      nextSlug: 'optavia-app',
      nextLabel: 'From 2 to 4.7 Stars: The Impact of Truly Understanding Your Users',
    },
  },
  {
    slug: 'optavia-app',
    title: 'Taking a health app from 2 to 4.7 stars: Optavia',
    subtitle:
      "Optavia's mobile app had a 2-star rating because it was built like an e-commerce platform when users needed a behavior change companion.",
    outcome: '2 → 4.7 stars · 800K MAU',
    tags: ['Mobile', 'UX Research', 'Product Design'],
    coverImage: '/images/optavia-app-1.png',
    year: '2023',
    status: 'coming-soon',
    client: 'Optavia',
    content: {
      stats: [
        { value: '2 → 4.7', label: 'App store rating' },
        { value: '800K', label: 'Monthly active users' },
      ],
      sections: [
        {
          heading: 'The Problem',
          body: "Optavia's mobile app had a 2-star rating because it was built like an e-commerce platform when users needed a behavior change companion. Multiple outsourced rebuilds had created a frankenstein product that missed the point entirely.",
        },
        {
          heading: 'The Approach',
          body: 'We conducted deep user research with both coaches and clients to understand how the program actually worked. The key insight: success came from the coach relationship and lifestyle adoption, not product browsing.',
        },
        {
          heading: 'The Solution',
          body: 'We repositioned the app from shopping platform to habit support tool:',
          list: [
            'Habit tracking that reinforced the "Optavia lifestyle"',
            'Coach-client communication features',
            'Progress visualization that celebrated behavior change',
            'Product ordering became secondary, not primary',
          ],
        },
        {
          heading: 'Results',
          list: [
            'App store rating jumped from 2 to 4.7 stars',
            '800K monthly active users',
            'Validated that understanding real user needs trumps feature assumptions',
          ],
        },
        {
          heading: 'Why This Worked',
          body: "We stopped building what we thought users wanted and started supporting what they actually needed. The coach-client relationship was the real product — the app just needed to strengthen it rather than compete with it.",
        },
      ],
      images: [
        {
          src: '/images/optavia-app-1.png',
          alt: 'Optavia mobile app screens showing nutrition tracking, health dashboard, and hydration tracking',
          caption: 'The redesigned app focused on habit tracking and behavior change rather than product browsing.',
        },
        {
          src: '/images/optavia-app-2.png',
          alt: 'Optavia app gamification system with achievement badges',
          caption: 'Gamification reinforced healthy habits and kept users engaged with their progress.',
        },
        {
          src: '/images/optavia-app-3.png',
          alt: 'Body composition tracking and Apple Health integration screens',
          caption: 'Health integrations made tracking feel effortless and connected to the broader lifestyle.',
        },
      ],
      nextSlug: 'optavia-business-programs',
      nextLabel: 'Turning Endless Loops of Frustration into Simple Program Delivery',
    },
  },
  {
    slug: 'optavia-business-programs',
    title: 'Cutting a 4-month delivery cycle down to 3 weeks',
    subtitle:
      'How systematic thinking and design cut the average development cycle from 4 months to 3 weeks.',
    outcome: '4 months → 3 weeks',
    tags: ['Systems Thinking', 'Product Design', 'Design Systems'],
    coverImage: '/images/optavia-business-programs-hero.png',
    year: '2023',
    status: 'coming-soon',
    client: 'Optavia',
    content: {
      stats: [
        { value: '4mo → 3wks', label: 'Development cycle' },
        { value: '3×', label: 'Quarterly programs delivered' },
      ],
      sections: [
        {
          heading: 'The Problem',
          body: "Leadership requested new coach business programs every 3 months, but our team was taking 4 months to build one (that's −1 month per cycle ☠️). Every person was already behind by the time they started. Management was frustrated, and the product management team was stuck in endless meetings trying to figure out what to do.\n\nAfter experiencing 3 of these cycles firsthand, I started to pick up on a few patterns: all programs were time-bound challenges with rank-based requirements, and each request started from scratch — creating bottlenecks and team tension.",
        },
        {
          heading: 'The Approach',
          body: 'Rather than taking orders blindly, I interviewed product managers and company stakeholders to understand what was going on, then analyzed requirements from my interviews as well as what I could learn about previous program requests to identify the underlying system.',
          list: [
            'Timelines',
            'Monthly requirements',
            'Rank-based qualification criteria',
            'Performance thresholds',
          ],
        },
        {
          heading: 'The Solution',
          body: 'I designed a modular program framework that abstracted the common elements while allowing customization of specific requirements. This covered all historical program types and could adapt to new variations without custom development.',
        },
        {
          heading: 'Impact',
          body: 'This system reduced the 4-month development cycle to 3 weeks. Leadership requests could actually be delivered on time, and coaches received incentive details within the window they needed to prepare their teams.',
          list: [
            'Freed up product management from repetitive scoping meetings',
            'Changed team dynamic from reactive frustration to proactive problem-solving',
            'Consistently high performance earned our design team a reputation for reliable execution',
          ],
        },
        {
          heading: 'Why This Worked',
          body: "Instead of treating each business program request as a unique design challenge, I recognized it as an organizational problem that needed a systematic solution. I used critical and systems thinking to identify the root cause and solved the real problem rather than just continuing to deliver what was requested.",
        },
      ],
      images: [
        {
          src: '/images/optavia-business-programs-hero.png',
          alt: 'Annotated diagram of a business program card interface',
          caption: 'Modular card component: configured, not custom-built.',
        },
        {
          src: '/images/optavia-business-programs-1.png',
          alt: 'Hand-drawn sketches showing three core variable concepts',
          caption: 'Sketches identifying the underlying system shared by all business programs.',
        },
        {
          src: '/images/optavia-business-programs-2.png',
          alt: 'Hand-drawn wireframe sketch of a program card component',
          caption: 'Early wireframe of the modular card framework.',
        },
        {
          src: '/images/optavia-business-programs-3.png',
          alt: 'Design system diagram showing the modular business program framework',
          caption: 'The system abstracted common elements while allowing customization.',
        },
        {
          src: '/images/optavia-business-programs-4.png',
          alt: 'Mobile and desktop views of incentive cards',
          caption: 'The component in context: mobile (left) and desktop (right).',
        },
      ],
      nextSlug: 'time4uspa',
      nextLabel: 'Helping a Small Utah Spa Go From Struggling to Profitable',
    },
  },
  {
    slug: 'time4uspa',
    title: 'Website and ads that made a local spa profitable in 60 days',
    subtitle:
      'Delivered a website, booking system, and targeted ads in 3 days — resulting in 62% revenue increase and 57% more appointments within two months.',
    outcome: '+62% revenue · +57% appointments',
    tags: ['Web Design', 'Growth Strategy', 'Small Business'],
    coverImage: '/images/time4uspa-1.png',
    year: '2024',
    status: 'coming-soon',
    client: 'Time 4 U Spa',
    content: {
      stats: [
        { value: '+62%', label: 'Revenue increase (2 months)' },
        { value: '+57%', label: 'Appointments booked' },
        { value: '3 → 53', label: 'Online booking clicks' },
      ],
      sections: [
        {
          heading: 'The Problem',
          body: 'A local spa opened with great services but zero digital presence — no way for customers to find them or book appointments during their crucial launch window.',
        },
        {
          heading: 'The Approach',
          body: 'Three-day digital launch. I prioritized the essentials that would drive immediate bookings — professional website with online booking, local search optimization, and targeted ads to reach people actively looking for spa services.',
        },
        {
          heading: 'The Solution',
          list: [
            'Clean, mobile-first website with integrated booking system',
            'Google Business Profile optimization for local discovery',
            'Facebook and Google ads targeting local wellness seekers',
            'Tracking setup to measure what actually drove appointments',
          ],
        },
        {
          heading: 'Results',
          list: [
            '62% revenue increase (May to June)',
            '57% more appointments booked',
            'Google ad launch drove immediate action: online bookings jumped from 3 to 53 clicks',
          ],
        },
        {
          heading: 'Why This Worked',
          body: "Speed and focus. Instead of a months-long rebrand, I identified the minimum viable marketing stack that would get them profitable fast. Sometimes the best solution is the simplest one that actually ships.",
        },
      ],
      images: [
        {
          src: '/images/time4uspa-1.png',
          alt: 'Promotional flyer for Lehi massage spa featuring grand opening sale',
          caption: 'Marketing materials designed to drive immediate action.',
        },
      ],
      nextSlug: 'optavia-agency',
      nextLabel: 'Two Weeks, 22% Better Results',
    },
  },
  {
    slug: 'optavia-agency',
    title: "Outperforming an agency's landing page in two weeks",
    subtitle:
      "Our design team created a landing page that outperformed an external agency's version by 22% conversion rate.",
    outcome: '+22% conversion vs. external agency',
    tags: ['UX Design', 'Conversion', 'A/B Testing'],
    coverImage: '/images/optavia-agency-1.png',
    year: '2024',
    status: 'coming-soon',
    client: 'Optavia',
    content: {
      stats: [
        { value: '+22%', label: 'Conversion rate' },
        { value: '+7%', label: 'Engagement' },
        { value: '−6%', label: 'Bounce rate' },
        { value: '2 weeks', label: 'vs. their 12 weeks' },
      ],
      sections: [
        {
          heading: 'The Problem',
          body: "A wellness company needed a landing page that could both educate prospects and drive conversions. They were testing our internal approach against an external agency's work.",
        },
        {
          heading: 'The Approach',
          body: 'We focused on user needs over visual flourishes — clear navigation, straightforward journey mapping, and reducing friction in the conversion flow. The external agency went heavy on brand styling; we prioritized usability.',
        },
        {
          heading: 'The Solution',
          body: 'Simplified user flow that matched how people actually wanted to engage:',
          list: [
            'Clear entry points (login, start journey, find coach)',
            'Streamlined information architecture',
            'Mobile-first responsive design',
            'Faster load times through cleaner code',
          ],
        },
        {
          heading: 'Results',
          body: 'Head-to-head testing over one month:',
          list: [
            '22% higher conversion rate',
            '7% better engagement',
            '6% lower bounce rate',
          ],
        },
        {
          heading: 'Why This Worked',
          body: "When users can accomplish their goals easily, they convert better. The agency focused on looking impressive; we focused on removing barriers. Sometimes the best design is the one users don't have to think about.",
        },
      ],
      images: [
        {
          src: '/images/optavia-agency-1.png',
          alt: 'Optavia website homepage hero section',
          caption: 'Our approach: clear hierarchy, reduced friction, user-led flow.',
        },
        {
          src: '/images/optavia-agency-2.png',
          alt: 'Side-by-side comparison of two mobile homepage designs',
          caption: 'Our user-focused design (left) vs. the agency\'s visual-first approach (right).',
        },
        {
          src: '/images/optavia-agency-4.png',
          alt: 'A/B test results comparison table',
          caption: 'Head-to-head test results: our page outperformed on every metric.',
        },
        {
          src: '/eric-portfolio/6.2.png',
          alt: 'Mobile onboarding flow',
          caption: "Onboarding screens that helped users understand the product's value and personalize their experience before purchase.",
        },
      ],
      nextSlug: 'simplenexus-agent-experience',
      nextLabel: 'SimpleNexus Agent Experience',
    },
  },
  {
    slug: 'simplenexus-agent-experience',
    title: 'Expanding into a new user segment: SimpleNexus',
    subtitle:
      'Led a design sprint that identified a key opportunity in pre-qualification letters, creating agent tools that strengthened lender relationships while opening a new market segment.',
    tags: ['UX Research', 'Design Sprint', 'Fintech'],
    coverImage: '/images/simplenexus-1.png',
    year: '2022',
    status: 'coming-soon',
    client: 'SimpleNexus',
    content: {
      sections: [
        {
          heading: 'The Problem',
          body: 'SimpleNexus dominated digital mortgage solutions for lenders but was missing a key opportunity — real estate agents who influence which lenders their buyers work with. How do you expand into a new user base without disrupting your core business?',
        },
        {
          heading: 'The Approach',
          body: "I immersed myself in the real estate world — took licensing courses, interviewed agents, visited open houses. The key insight: agents and lenders had a communication breakdown around pre-qualification letters that hurt everyone involved.",
        },
        {
          heading: 'The Solution',
          body: 'I led a 5-day design sprint that resulted in an agent dashboard where:',
          list: [
            'Agents could generate pre-qual letters with borrower-friendly language',
            'Parameters stayed within lender guidelines but gave agents control',
            'Borrowers could self-serve updates within agent-defined limits',
            'Everyone stayed informed as loan conditions changed',
          ],
        },
        {
          heading: 'Results',
          body: 'Successfully brought a new user segment into the SimpleNexus ecosystem while strengthening relationships between our existing lender clients and their agent partners. The solution adapted well when market conditions shifted in 2022.',
        },
        {
          heading: 'Why This Worked',
          body: "Instead of building what we assumed agents needed, we validated the core problem first. The design sprint let us test our hypothesis quickly before committing significant development resources.",
        },
      ],
      images: [
        {
          src: '/images/simplenexus-1.png',
          alt: 'NexusMortgage loan application welcome screen',
          caption: 'The existing borrower experience — which agents were trying to bridge.',
        },
        {
          src: '/images/simplenexus-3.avif',
          alt: 'Hand-drawn design sprint process diagram',
          caption: '5-day design sprint process.',
        },
        {
          src: '/images/simplenexus-12.avif',
          alt: 'Desktop interface for NexusMortgage loan management',
          caption: 'The agent dashboard: pre-qual letter generation within lender-defined parameters.',
        },
        {
          src: '/eric-portfolio/4.1.png',
          alt: 'SimpleNexus mobile app screens',
          caption: "The agent dashboard solved the real problem — communication friction around pre-qualification — rather than just adding 'agent features' to the existing product.",
        },
      ],
      nextSlug: 'optavia-mapping',
      nextLabel: 'Building Shared Understanding: Mapping the Optavia Experience',
    },
  },
  {
    slug: 'optavia-mapping',
    title: 'Mapping a complex product to stop building on assumptions',
    subtitle:
      'How "drawing the bigger picture" together as a team prevented future assumption-based product work and earned a promotion to Senior Designer.',
    tags: ['UX Research', 'Information Architecture', 'Facilitation'],
    coverImage: '/images/optavia-mapping-5.png',
    year: '2022',
    status: 'coming-soon',
    client: 'Optavia',
    content: {
      sections: [
        {
          heading: 'The Problem',
          body: "When I joined the team, the coach experience at Optavia was more complex and nuanced than anyone fully understood. Product decisions were being made based on incomplete mental models rather than true understanding of user behavior. Teams were responding to surface-level requests to 'make things look nice' instead of addressing the real problems coaches were experiencing.",
        },
        {
          heading: 'The Approach',
          body: 'I took ownership of mapping the entire coach experience as part of a larger company-wide user journey initiative. Working with the coach portfolio product managers, I facilitated weekly collaborative sessions to build shared and deep understanding of the coach journey map.',
        },
        {
          heading: 'The Process',
          body: "This wasn't traditional user research — it was facilitative leadership of a complex organizational challenge. Together with the design team and product managers, we designed a collaborative process where stakeholders could work through complexity together and see the bigger picture.",
        },
        {
          heading: 'The Impact',
          body: "Our teams created a comprehensive artifact that outlined the entire Optavia user experience. The coach experience sitemap became the foundational document referenced for all subsequent product decisions in the coach portfolio. This work was significant enough that it earned my personal promotion to Senior Designer.",
        },
        {
          heading: 'Why This Worked',
          body: 'Sometimes the most valuable design work happens before any interfaces are created. By persisting through the ambiguity to build genuine organizational understanding, we created a reliable and sturdy foundation for all future strategic decisions.',
        },
      ],
      images: [
        {
          src: '/images/optavia-mapping-5.png',
          alt: 'Information architecture diagram showing the Optavia mobile app navigation structure',
          caption: 'The coach experience sitemap — foundational documentation for the entire coach portfolio.',
        },
        {
          src: '/images/optavia-mapping-1.png',
          alt: 'Iceberg diagram showing documented vs undocumented user experience',
          caption: 'The iceberg problem: most of the experience was undocumented and avoided.',
        },
        {
          src: '/images/optavia-mapping-3.png',
          alt: 'Whiteboard from a collaborative mapping session',
          caption: 'Collaborative sessions: making a mess together until patterns emerged.',
        },
        {
          src: '/eric-portfolio/7.1.png',
          alt: 'Whiteboard collaborative session',
          caption: 'Collaborative mapping sessions with product managers and stakeholders — making sense of complexity together rather than working in silos.',
        },
        {
          src: '/eric-portfolio/7.2.png',
          alt: 'Sketch iterations',
          caption: 'Early sketches and process artifacts showing the messy middle of collaborative work.',
        },
        {
          src: '/eric-portfolio/7.3.png',
          alt: 'Final sitemap',
          caption: 'The result: a comprehensive sitemap that became the foundational document for all coach portfolio product decisions.',
        },
        {
          src: '/eric-portfolio/7.4.png',
          alt: 'Stakeholder testimonial',
          caption: 'Testimonial from the Director of Product Management validating the impact of this collaborative work.',
        },
      ],
      nextSlug: 'optavia-health-journey-questionnaire',
      nextLabel: 'Personalized onboarding for a multi-path wellness platform',
    },
  },
  {
    slug: 'optavia-health-journey-questionnaire',
    title: 'Personalized onboarding for a multi-path wellness platform',
    subtitle:
      "Optavia needed to transform its coach-dependent acquisition model to create a scalable direct-to-consumer pathway.",
    tags: ['UX Design', 'Onboarding', 'Mobile'],
    coverImage: '/images/optavia-questionnaire-hero.avif',
    year: '2024',
    status: 'coming-soon',
    client: 'Optavia',
    content: {
      sections: [
        {
          heading: 'The Problem',
          body: "Optavia's coach-dependent acquisition model couldn't scale. New users arrived motivated but confused about which health program fit their needs, creating a bottleneck that limited growth.",
        },
        {
          heading: 'The Approach',
          body: "We designed a smart questionnaire that does two things at once: educates users about their options while gathering the information needed to route them properly. The key insight was that people don't just need a program recommendation — they need to understand why it's right for them.",
        },
        {
          heading: 'The Solution',
          body: 'An adaptive questionnaire system that:',
          list: [
            'Starts broad (goals, exercise habits) then gets specific based on responses',
            'Identifies specialized needs (diabetes, pregnancy, medication compatibility)',
            'Routes users to appropriate programs while preserving coach relationships',
            'Seamlessly hands off to LifeMD for weight loss medication when relevant',
          ],
        },
        {
          heading: 'Why This Worked',
          body: "The branching logic handles dozens of user scenarios while feeling simple. Users get personalized recommendations that make sense to them, coaches get better-prepared leads, and the business opened new pathways without losing what made them successful.",
        },
      ],
      images: [
        {
          src: '/images/optavia-questionnaire-hero.avif',
          alt: 'Hand holding iPhone displaying Optavia health journey questionnaire',
          caption: 'The questionnaire starts with a simple goal selection — the foundation for all subsequent routing.',
        },
        {
          src: '/images/optavia-questionnaire-7.avif',
          alt: 'Comprehensive user flow diagram showing questionnaire logic',
          caption: 'Branching logic handling dozens of user scenarios while maintaining a simple front-end experience.',
        },
        {
          src: '/images/optavia-questionnaire-1.avif',
          alt: 'Three mobile screens showing personalized onboarding flow',
          caption: 'Adaptive flow — responses shape the experience in real time.',
        },
        {
          src: '/eric-portfolio/8.1.png',
          alt: 'Questionnaire start screen',
          caption: 'User flow diagrams showing the adaptive branching logic that routes dozens of user scenarios to appropriate programs while maintaining simplicity on the front end.',
        },
        {
          src: '/eric-portfolio/8.2.png',
          alt: 'Questionnaire and post-purchase flow',
          caption: 'Questionnaire start screen — the first step in an adaptive flow that personalizes program recommendations.',
        },
        {
          src: '/eric-portfolio/8.3.png',
          alt: 'User flow diagrams',
          caption: 'Questionnaire flow and post-purchase experience showing how we guided users from goal selection through program recommendation to coach connection.',
        },
      ],
      nextSlug: 'optavia-ecommerce-experience-redesign',
      nextLabel: 'E-commerce Experience Redesign',
    },
  },
  {
    slug: 'optavia-ecommerce-experience-redesign',
    title: 'Multi-path e-commerce redesign for a health platform',
    subtitle:
      "Optavia's website couldn't accommodate users with different health goals beyond traditional weight loss.",
    tags: ['UX Design', 'E-commerce', 'Information Architecture'],
    coverImage: '/images/optavia-path-to-purchase-7.png',
    year: '2024',
    status: 'coming-soon',
    client: 'Optavia',
    content: {
      sections: [
        {
          heading: 'The Problem',
          body: "Optavia's website was built around one user journey — traditional weight loss — but users had diverse goals like GLP-1 medication support, maintenance, and muscle building. The site couldn't effectively guide users to appropriate programs or products.",
        },
        {
          heading: 'The Approach',
          body: "I collaborated across teams (marketing, nutrition, legal, development) to redesign the user experience around multiple pathways. Key insight: users needed to understand not just what to buy, but why it would work for their specific situation.",
        },
        {
          heading: 'The Solution',
          list: [
            'Clear program differentiation with benefit comparisons (GLP-1 + Optavia vs. GLP-1 alone)',
            'Product education that explains nutritional benefits rather than just features',
            'Streamlined conversion funnel with multiple entry points',
            'Visual consistency through systematic product photography approach',
          ],
        },
        {
          heading: 'The Impact',
          body: 'Created a scalable e-commerce experience that could accommodate new user segments and product lines while maintaining conversion effectiveness.',
        },
        {
          heading: 'Why This Worked',
          body: "Instead of cramming everything into one generic funnel, we created specialized pathways that spoke to each user's specific needs and concerns. This reduced cognitive load while increasing relevance.",
        },
      ],
      images: [
        {
          src: '/images/optavia-path-to-purchase-7.png',
          alt: 'Optavia e-commerce product page for GLP-1 Nutrition Support Plan',
          caption: 'Redesigned product pages with educational content and clear program differentiation.',
        },
        {
          src: '/images/optavia-path-to-purchase-1.png',
          alt: 'Three clickable cards showing Optavia turnkey nutrition plans',
          caption: 'New entry point: users choose their journey before browsing products.',
        },
        {
          src: '/images/optavia-path-to-purchase-4.png',
          alt: 'Feature comparison table',
          caption: 'Benefit comparison table helping users understand why GLP-1 + Optavia beats GLP-1 alone.',
        },
      ],
      nextSlug: 'epic-marketing-rebrand',
      nextLabel: 'Epic Marketing Agency Rebrand',
    },
  },
  {
    slug: 'epic-marketing-rebrand',
    title: 'Bold rebrand to compete with larger agencies: Epic Marketing',
    subtitle:
      'Rebranded a marketing agency to compete with larger firms for premium clients using a bold visual system with high-contrast colors and modular layouts.',
    tags: ['Branding', 'Identity', 'Web Design'],
    coverImage: '/images/epic-marketing.png',
    year: '2021',
    status: 'coming-soon',
    client: 'Epic Marketing',
    content: {
      sections: [
        {
          heading: 'The Problem',
          body: 'Our agency needed to compete with larger firms for premium clients. The existing brand looked like every other small marketing agency — generic and forgettable.',
        },
        {
          heading: 'The Approach',
          body: 'We designed a bold visual system that would make potential clients stop and take notice. The key insight: businesses hire agencies they perceive as successful, so the brand needed to project confidence and capability.',
        },
        {
          heading: 'The Solution',
          list: [
            'High-contrast black and yellow color system that stands out in a sea of safe blues and grays',
            'Modular layout system that works across mobile and desktop',
            'Typography hierarchy that makes content scannable',
            'Interactive elements that make users feel "part of something special"',
          ],
        },
        {
          heading: 'Results',
          body: 'The rebrand positioned Epic to win larger accounts and move into a branded office space that reinforces the premium positioning.',
        },
        {
          heading: 'Why This Worked',
          body: "Sometimes you have to be willing to polarize to stand out. The bold design attracts clients who value creativity and confidence while filtering out those looking for the cheapest option. Better to be someone's strong yes than everyone's maybe.",
        },
      ],
      images: [
        {
          src: '/images/epic-marketing-hero.png',
          alt: 'Two iPhone mockups showing Epic Marketing Agency website',
          caption: 'Bold, high-contrast identity that commands attention.',
        },
        {
          src: '/images/epic-marketing-4.png',
          alt: 'Three-page brand style guide spread',
          caption: 'Brand system: typography, color, and component library.',
        },
        {
          src: '/images/epic-marketing-7.png',
          alt: 'Desktop website pages showing design services and team page',
          caption: 'The system applied across web, team pages, and marketing materials.',
        },
      ],
      nextSlug: 'pip-campaign-builder',
      nextLabel: 'Helping small businesses think about customers, not transactions',
    },
  },
  {
    slug: 'pip-campaign-builder',
    title: 'Helping small businesses think about customers, not transactions',
    subtitle:
      "A Target Customer Profile framework that shifted how Pip's clients thought about their audience — turning 'more leads' into better-qualified leads.",
    outcome: 'Better lead quality through user empathy',
    tags: ['UX Research', 'Strategy', 'Small Business'],
    coverImage: '/eric-portfolio/1.1.png',
    year: '2025',
    status: 'coming-soon',
    client: 'Pip',
    content: {
      sections: [
        {
          heading: 'The Problem',
          body: '"I will take money from whoever wants to give it to me." — Every home service business owner, ever.\n\nThis quote from a discovery workshop captures how most small business owners think about their customers — as transactions rather than people. Through research with our own clients, we discovered nearly everyone was requesting more leads, more volume, more work, rather than considering what people really needed — resulting in unqualified leads and wasted dollars.',
        },
        {
          heading: 'The Approach',
          body: 'We conducted structured discovery workshops with clients to understand how they think about the people they serve. The pattern was clear: they were making assumptions about what their potential customers wanted rather than thinking about them the way they talked about their current and past relationships.',
        },
        {
          heading: 'The Solution',
          body: 'We developed a Target Customer Profile framework that required defining user motivations, pain points, and decision criteria. This shifted how clients thought about their audience and became the foundation for all campaign strategy, ensuring every message spoke to real human needs rather than generic assumptions.',
        },
        {
          heading: 'Impact',
          body: 'Lead quality improved dramatically, clients spent less on ineffective outreach, we were better aligned internally, and campaigns resonated because they were designed around actual user thoughts and behaviors.',
        },
      ],
      images: [
        {
          src: '/eric-portfolio/1.1.png',
          alt: 'Target Customer Profile framework mockup',
          caption: 'By providing our clients with their own way to fill out information about their ideal customers, it helped them to see beyond their own needs and put themselves in the shoes of their buyer.',
        },
        {
          src: '/eric-portfolio/1.2.png',
          alt: 'Ideal Customer Profile output',
          caption: "Personas are a tool I've used for years in different contexts. Just like at large corporations, this helped small business owners to get out of survival mode and find their voice.",
        },
      ],
      nextSlug: 'habits-of-health',
      nextLabel: 'Digitize the Habits of Health',
    },
  },
  {
    slug: 'habits-of-health',
    title: 'Making 800 pages of dense health content feel effortless',
    subtitle:
      "Digitizing Optavia's behavior change program — locked in two 400-page textbooks nobody read — into a flexible resource library coaches and clients actually used.",
    outcome: '$1.5M/month opportunity unlocked',
    tags: ['UX Design', 'Content Strategy', 'Healthcare'],
    coverImage: '/eric-portfolio/5.1.png',
    year: '2023',
    status: 'coming-soon',
    client: 'Optavia',
    content: {
      sections: [
        {
          heading: 'The Problem',
          body: "Optavia's behavior change program was proven effective through thousands of transformations, but it was locked in two 400-page textbooks that nobody read. Market research revealed a $1.5M/month opportunity if we could make the content accessible.",
        },
        {
          heading: 'The Approach',
          body: "We conducted focus groups with coaches through the Scientific & Clinical Affairs team and discovered they were already creating workarounds — sending abridged digital versions to clients. Rather than digitizing everything, we focused on what coaches and clients actually needed: flexible access to the content in formats that fit their lives.",
        },
        {
          heading: 'The Solution',
          body: 'We tested multiple formats (chatbot, podcasts, digital reading experience) and found the audio and e-book experience resonated most strongly. We designed an accessible resource library that let users consume 800 pages of dense content in manageable, context-appropriate ways — reading chapters when focused, listening while commuting.',
        },
        {
          heading: 'Impact',
          body: 'Adoption of the program increased significantly. Coaches stopped building their own unofficial materials and could focus on coaching. Years of requests for an official digital version were finally resolved through a solution that made complexity feel effortless.',
        },
      ],
      images: [
        {
          src: '/eric-portfolio/5.1.png',
          alt: 'Audiobook interface',
          caption: "Samples from the audiobook experience including the updated homepage — 'up next' carousel that shows users what they want to see and allows the business to post important announcements as needed.",
        },
        {
          src: '/eric-portfolio/5.2.png',
          alt: 'Chatbot teaser image',
          caption: "We provided users and stakeholders with examples of 'what's possible' — including the user experience for a chatbot our team trained using a custom GPT model and the Habits of Health books.",
        },
        {
          src: '/eric-portfolio/5.3.png',
          alt: 'Chatbot interface examples',
          caption: 'Chatbot interface examples showing how we made complex health concepts feel like a conversation.',
        },
      ],
      nextSlug: 'pip-growth-platform',
      nextLabel: 'Building a growth platform for small businesses',
    },
  },
  {
    slug: 'pip-growth-platform',
    title: 'Building a growth platform for small businesses',
    subtitle:
      'Left a senior role at a large health company to co-found Pip — using AI to deliver results in 60 days that traditional agencies take months to produce.',
    outcome: '+162% revenue growth in 60 days',
    tags: ['Strategy', 'AI', 'Small Business'],
    coverImage: '/eric-portfolio/9.1.png',
    year: '2025',
    status: 'coming-soon',
    client: 'Pip',
    content: {
      stats: [
        { value: '+162%', label: 'Client revenue growth (60 days)' },
        { value: '36.8%', label: 'Click-through rate (roofing)' },
      ],
      sections: [
        {
          heading: 'The Problem',
          body: 'In 2025, I left my Senior Product Designer role to co-found Pip because I was frustrated watching enterprise companies move at glacier speed while AI was unlocking 10x opportunities for people who could move fast. Small businesses needed lead generation through digital strategy, but traditional agency approaches were too slow and expensive.',
        },
        {
          heading: 'The Approach',
          body: "Instead of building everything upfront, we followed our own principle: don't invest too much before experimenting. We tested quickly with real clients — a massage company, a roofing company, a window cleaner — learning what actually worked through iteration rather than assumptions.",
        },
        {
          heading: 'The Solution',
          body: "We built a repeatable 'Online Presence Builder' system that delivered results in 60 days by using AI to automate parts of the process while keeping the strategic thinking human. The constraint of limited resources forced us to identify patterns across different business types and build a flexible system rather than custom solutions.",
        },
        {
          heading: 'Impact',
          body: 'Achieved 162% revenue growth for a massage company in 60 days, 36.79% click-through rate for a roofing company using user empathy strategies, and validated that messy transparency and rapid iteration builds better client partnerships than polished promises.',
        },
      ],
      images: [
        {
          src: '/eric-portfolio/9.1.png',
          alt: 'Pip brand identity',
          caption: 'Brand identity developed in-house to keep costs low while maintaining professional quality.',
        },
        {
          src: '/eric-portfolio/9.2.png',
          alt: 'Service framework',
          caption: 'Repeatable service framework that delivered results in 60 days — constraints forced us to identify patterns across business types.',
        },
        {
          src: '/eric-portfolio/9.3.png',
          alt: 'Client results',
          caption: 'Client results and discovery process showing rapid iteration and validation before scaling.',
        },
      ],
    },
  },
]

export function getWorkBySlug(slug: string): WorkItem | undefined {
  return work.find((w) => w.slug === slug)
}
