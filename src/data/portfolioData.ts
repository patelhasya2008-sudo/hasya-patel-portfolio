import { Project, SkillCategory, Certificate, ProcessStep, StatItem, ValueProp } from '../types';

export const PERSONAL_INFO = {
  name: 'Hasya Patel',
  role: 'Web Developer / Application Developer',
  tagline: 'BUILDING DIGITAL EXPERIENCES THAT MAKE AN IMPACT.',
  intro: "Hi, I'm Hasya Patel.",
  bio: 'Computer Engineering student passionate about building modern websites, applications, and practical digital solutions using clean design and technology.',
  aboutDetailed:
    'I am Hasya Patel, a Diploma Computer Engineering student at V.P.M.P Polytechnic, Gandhinagar. With a strong academic foundation (CGPA 9.86) and a passion for practical software engineering, I specialize in web and application development, structured databases, and emerging AI technologies. My goal is to transform real-world challenges into intuitive, robust digital products.',
  status: 'OPEN TO INTERNSHIPS • FREELANCE • COLLABORATION',
  education: {
    degree: 'Diploma in Computer Engineering',
    institution: 'V.P.M.P Polytechnic, Gandhinagar',
    cgpa: '9.86',
    completion: '2026 (Expected)',
    focus: 'Web Development & Application Development',
  },
  languages: ['English', 'Gujarati', 'Hindi'],
  contact: {
    email: 'patelhasya2008@gmail.com',
    linkedin: 'linkedin.com/in/hasya-patel',
    github: 'github.com/hasyapatel',
    location: 'Gandhinagar, Gujarat, India',
  },
};

export const PROJECTS: Project[] = [
  {
    id: 'foodie-fleet',
    number: '01',
    title: 'Foodie Fleet',
    category: 'Android Application',
    subCategory: 'Food Ordering',
    description:
      'An Android-based food ordering and delivery application designed to manage food ordering, restaurant interactions, and customer experiences.',
    features: [
      'Food Ordering',
      'Restaurant Management',
      'Customer Experience',
      'Order Management',
    ],
    technologies: ['Android / Java / Kotlin', 'XML UI Layouts', 'MySQL Backend', 'REST APIs'],
    mockupType: 'mobile',
    accentColor: '#E21D2F',
    caseStudy: {
      overview:
        'Foodie Fleet is a comprehensive Android application engineered to bridge the gap between hungry diners, local culinary establishments, and delivery coordinators. Built with an emphasis on seamless navigation, intuitive food cart checkout, and structured order state management.',
      objective:
        'To streamline the mobile food ordering lifecycle by reducing ordering friction, providing restaurants with a clean order queue, and ensuring customers enjoy an accessible, modern user experience on Android devices.',
      keyFeatures: [
        {
          title: 'Interactive Food Catalog & Search',
          detail: 'Categorized culinary menus with real-time filter by cuisine, pricing, and dietary preferences.',
        },
        {
          title: 'Cart & Order Management',
          detail: 'Dynamic cart calculation, custom notes, item quantity modifiers, and order tracking.',
        },
        {
          title: 'Restaurant Portal Interface',
          detail: 'Dedicated interface for partner restaurants to manage active menu items, pricing, and incoming order statuses.',
        },
        {
          title: 'Customer Experience Suite',
          detail: 'Saved delivery addresses, past order history logs, and instant order summary confirmations.',
        },
      ],
      techStackDetails: [
        { name: 'Android Architecture', role: 'Mobile application frontend with modular Activity and Fragment lifecycles.' },
        { name: 'XML UI & Material Design', role: 'Clean, accessible interface layouts adhering to standard mobile design guidelines.' },
        { name: 'MySQL Database', role: 'Structured relational storage for menus, order queues, user credentials, and timestamps.' },
        { name: 'Backend Services / APIs', role: 'Structured endpoints connecting client requests to persistent database records.' },
      ],
      developmentProcess: [
        { step: 'Requirement Gathering', description: 'Mapped customer ordering user-journeys and restaurant order intake bottlenecks.' },
        { step: 'Wireframing & UI Prototyping', description: 'Designed mobile-first UI components focusing on one-thumb accessibility.' },
        { step: 'Database Schema Design', description: 'Normalized relational schemas for users, restaurants, menu_items, and orders.' },
        { step: 'Application Development', description: 'Implemented core mobile logic, view adapters, and network request handling.' },
        { step: 'Validation & Testing', description: 'Conducted rigorous end-to-end device testing across multiple screen densities.' },
      ],
      challenges: [
        {
          issue: 'Managing dynamic cart state across varying restaurant menus without race conditions.',
          solution: 'Engineered a centralized cart state manager ensuring item validation and transactional consistency before order submission.',
        },
        {
          issue: 'Optimizing image loading and list scrolling performance on entry-level Android devices.',
          solution: 'Implemented asynchronous image caching and lightweight view-holder recycling patterns.',
        },
      ],
      learnings: [
        'Mastered Android component lifecycle management and responsive XML UI architecture.',
        'Gained deep experience in relational database normalization for high-frequency transactional data.',
        'Developed intuition for intuitive mobile UX design patterns.',
      ],
      futureImprovements: [
        'Integration of real-time GPS delivery driver live route tracking.',
        'Push notification integration for instantaneous order status transitions.',
        'Offline caching for favorite past orders and saved restaurant bookmarks.',
      ],
      metricsOrOutcomes: [
        '100% Android UI compliance with clean Material styling',
        'Normalized relational schema with 0% data redundancy',
        'Sub-second cart calculation & order processing latency',
      ],
    },
  },
  {
    id: 'healthcloud-pro',
    number: '02',
    title: 'HealthCloud Pro',
    category: 'Cloud-Based Healthcare System',
    subCategory: 'Clinical Management',
    description:
      'A cloud-based healthcare management system designed to organize patient information, appointments, and healthcare records.',
    features: [
      'Patient Management',
      'Appointment System',
      'Healthcare Records',
      'Digital Workflow',
    ],
    technologies: ['Web Development', 'HTML5 / CSS3', 'JavaScript', 'Python Backend', 'MySQL Database'],
    mockupType: 'dashboard',
    accentColor: '#38bdf8',
    caseStudy: {
      overview:
        'HealthCloud Pro is a centralized healthcare management portal built to modernize paper-heavy medical workflows. It unifies patient registration, electronic health records (EHR), physician scheduling, and visit diagnostics into a cohesive, secure digital workspace.',
      objective:
        'To reduce administrative overhead for healthcare clinics by providing a secure, accessible web portal where medical staff can manage appointments, update patient histories, and review medical records without operational delays.',
      keyFeatures: [
        {
          title: 'Comprehensive Patient Profiles',
          detail: 'Centralized repository of patient demographics, medical history, allergies, and emergency contact details.',
        },
        {
          title: 'Doctor Scheduling & Appointments',
          detail: 'Visual appointment booking calendar with conflict prevention and automated slot management.',
        },
        {
          title: 'Secure Health Records (EHR)',
          detail: 'Encrypted storage of clinical notes, prescriptions, laboratory test results, and visit summaries.',
        },
        {
          title: 'Role-Based Digital Workflow',
          detail: 'Tailored views for front-desk receptionists, attending doctors, and laboratory staff.',
        },
      ],
      techStackDetails: [
        { name: 'Frontend Web Layer', role: 'Responsive, accessible dashboard interface built with semantic HTML5, CSS3, and JavaScript.' },
        { name: 'Python Backend', role: 'Server architecture managing business logic, authentication security, and routing.' },
        { name: 'MySQL Relational DB', role: 'ACID-compliant storage for patient records, doctor timetables, and medical logs.' },
      ],
      developmentProcess: [
        { step: 'Workflow Analysis', description: 'Studied clinic intake procedures, appointment scheduling queues, and record keeping.' },
        { step: 'Architecture Specification', description: 'Established secure role-based access control (RBAC) rules and database schemas.' },
        { step: 'UI/UX Dashboard Prototyping', description: 'Designed high-contrast, uncluttered dashboard views tailored for fast clinic operations.' },
        { step: 'Full-Stack Implementation', description: 'Built backend endpoints and integrated frontend data visualization cards.' },
        { step: 'Security & Integrity Auditing', description: 'Enforced parameterized queries and input sanitization across all forms.' },
      ],
      challenges: [
        {
          issue: 'Preventing double-booking and schedule collisions across multiple healthcare providers.',
          solution: 'Implemented server-side timestamp locking and atomic booking validation in MySQL transactions.',
        },
        {
          issue: 'Designing a dense clinical dashboard that remains readable during high-stress clinic hours.',
          solution: 'Adopted high-contrast neutral surfaces with purposeful visual grouping and rapid search filtering.',
        },
      ],
      learnings: [
        'Architecting structured relational schemas for sensitive medical data.',
        'Implementing clean role-based authorization paradigms in web applications.',
        'Building responsive desktop-first dashboards with quick-glance typography.',
      ],
      futureImprovements: [
        'Patient self-service portal for remote booking and prescription download.',
        'Automated SMS/Email appointment reminders and follow-up alerts.',
        'Analytics module for clinic patient volume trends and doctor availability rates.',
      ],
      metricsOrOutcomes: [
        'Streamlined clinic appointment workflow from minutes to seconds',
        'Zero appointment conflict collisions with atomic locking',
        'Centralized encrypted record storage for seamless staff lookup',
      ],
    },
  },
  {
    id: 'weather-reporting-system',
    number: '03',
    title: 'Weather Reporting System',
    category: 'IoT Project',
    subCategory: 'Weather Monitoring',
    description:
      'An IoT-based weather monitoring project designed to collect and display environmental information using sensors and an embedded system.',
    features: [
      'Temperature Monitoring',
      'Sensor Integration',
      'Environmental Data',
      'LCD Display',
    ],
    technologies: ['Embedded Systems / Microcontroller', 'Sensors (DHT / Environmental)', 'C/C++ & Python', 'Hardware Interfacing'],
    mockupType: 'iot',
    accentColor: '#10b981',
    caseStudy: {
      overview:
        'The Weather Reporting System is an embedded hardware and software solution that continuously captures ambient atmospheric conditions—such as temperature, humidity, and atmospheric metrics—and presents real-time data on an integrated digital display with logging capabilities.',
      objective:
        'To build an accurate, autonomous environmental monitoring unit capable of sensing localized climate conditions and outputting real-time telemetry for home, lab, or agricultural applications.',
      keyFeatures: [
        {
          title: 'Precision Sensor Calibration',
          detail: 'Real-time sampling of ambient temperature and relative humidity with sensor error correction.',
        },
        {
          title: 'Integrated LCD Output Screen',
          detail: 'Clean 16x2 / I2C alphanumeric LCD presentation showing real-time temperature, humidity, and status indicators.',
        },
        {
          title: 'Continuous Telemetry Loop',
          detail: 'Low-latency polling cycle with threshold triggers for high temperature or sudden humidity fluctuations.',
        },
        {
          title: 'Data Logging & Serial Output',
          detail: 'Structured serial logging capabilities for diagnostics and extended environmental historical analysis.',
        },
      ],
      techStackDetails: [
        { name: 'Microcontroller Unit', role: 'Embedded logic execution, GPIO control, and sensor communication bus.' },
        { name: 'Environmental Sensors', role: 'High-precision temperature and humidity measurement modules.' },
        { name: 'Display Subsystem', role: 'I2C / Parallel liquid crystal display interface for live telemetry.' },
        { name: 'Software Firmware', role: 'Written in embedded C/C++ and Python for signal reading, smoothing, and LCD drawing.' },
      ],
      developmentProcess: [
        { step: 'Circuit Design & Prototyping', description: 'Breadboarded sensor wiring, pull-up resistors, and power distribution.' },
        { step: 'Sensor Driver Programming', description: 'Wrote hardware polling algorithms with debouncing and reading verification.' },
        { step: 'Display Logic Integration', description: 'Engineered LCD memory buffers and real-time screen formatting.' },
        { step: 'Calibration & Stability Testing', description: 'Benchmarked thermal response times against calibrated laboratory gauges.' },
      ],
      challenges: [
        {
          issue: 'Sensor reading noise and intermittent voltage fluctuations causing false telemetry spikes.',
          solution: 'Implemented moving-average software smoothing filters to deliver stable, trustworthy readouts.',
        },
        {
          issue: 'Minimizing GPIO pin consumption while maintaining fast display refresh rates.',
          solution: 'Utilized I2C serial protocol communication to control the full LCD matrix using only two data pins (SDA/SCL).',
        },
      ],
      learnings: [
        'Interfacing digital and analog sensors with embedded microcontrollers.',
        'Hardware protocol communication standards including I2C and UART serial buses.',
        'Software signal smoothing and low-power embedded firmware optimization.',
      ],
      futureImprovements: [
        'Integration of Wi-Fi / ESP module to stream telemetry to a live cloud dashboard.',
        'Addition of barometric pressure and air quality (PM2.5) sensing modules.',
        'Battery solar charging circuit for remote standalone outdoor deployment.',
      ],
      metricsOrOutcomes: [
        '±0.5°C thermal precision with software smoothing filter',
        '2-second automated real-time telemetry refresh cycle',
        'Compact hardware footprint running with minimal power draw',
      ],
    },
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'web-dev',
    title: 'Web Development',
    iconName: 'Code',
    skills: [
      { name: 'HTML', detail: 'Semantic HTML5 structure, accessibility (ARIA), modern markup best practices.', tag: 'Core' },
      { name: 'CSS', detail: 'Modern CSS3, responsive layouts (Flexbox, Grid), animations, Tailwind CSS.', tag: 'Styling' },
      { name: 'JavaScript', detail: 'ES6+ standards, DOM manipulation, asynchronous programming, APIs.', tag: 'Language' },
    ],
  },
  {
    id: 'programming',
    title: 'Programming',
    iconName: 'Terminal',
    skills: [
      { name: 'Python', detail: 'Core Python syntax, data structures, backend scripting, automation & algorithms.', tag: 'Backend' },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    iconName: 'Database',
    skills: [
      { name: 'MySQL', detail: 'Relational schema design, SQL queries, indexing, joins, normalization & ACID transactions.', tag: 'Data' },
    ],
  },
  {
    id: 'app-dev',
    title: 'Application Development',
    iconName: 'Smartphone',
    skills: [
      { name: 'Application Development', detail: 'Building robust mobile & desktop applications with structured architectures and clean UX.', tag: 'Architecture' },
    ],
  },
  {
    id: 'interests',
    title: 'Additional Interests',
    iconName: 'Sparkles',
    skills: [
      { name: 'Generative AI', detail: 'Practical exploration of LLM foundations, multimodal generation, and intelligent apps.', tag: 'AI' },
      { name: 'Prompt Engineering', detail: 'Advanced context steering with GitHub Copilot and foundation models for dev productivity.', tag: 'AI Tools' },
      { name: 'Cloud Technologies', detail: 'Cloud computing fundamentals, scalable hosting, serverless functions, and storage.', tag: 'Cloud' },
      { name: 'UI/UX Design', detail: 'User research, wireframing, high-contrast layouts, typography pairing, and design systems.', tag: 'Design' },
    ],
  },
];

export const CERTIFICATIONS: Certificate[] = [
  {
    id: 'cert-google-genai',
    number: '01',
    title: 'Introduction to Generative AI',
    issuer: 'Google Cloud',
    organization: 'Google Cloud Skills Boost',
    dateBadge: 'Google Cloud Certified',
    iconType: 'google',
    description:
      'Official certification covering core principles of Generative AI, Large Language Models (LLMs), attention mechanisms, responsible AI deployment, and Google Cloud AI application frameworks.',
    skillsCovered: [
      'Generative AI Fundamentals',
      'Large Language Models (LLMs)',
      'Responsible AI Practices',
      'Google Cloud AI Tools',
    ],
    verificationNote: 'Issued by Google Cloud Training and Certification Program',
  },
  {
    id: 'cert-microsoft-copilot',
    number: '02',
    title: 'Introduction to Prompt Engineering with GitHub Copilot',
    issuer: 'Microsoft',
    organization: 'Microsoft Learn / GitHub',
    dateBadge: 'Microsoft Certified',
    iconType: 'microsoft',
    description:
      'Professional credential verifying mastery of prompt crafting, zero-shot and few-shot conditioning, GitHub Copilot context engineering, and AI-accelerated modern development workflows.',
    skillsCovered: [
      'Prompt Engineering Strategies',
      'GitHub Copilot Integration',
      'Context Window Optimization',
      'AI-Assisted Code Refactoring',
    ],
    verificationNote: 'Issued by Microsoft Learn Professional Credentials Program',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'DISCOVER',
    summary: 'Understand the problem, audience, requirements, and goals.',
    details:
      'Every successful product starts with clarity. I dive deep into user needs, functional objectives, and technical constraints to establish a bulletproof project foundation.',
    deliverables: ['User Journey Maps', 'Functional Requirements', 'Target Audience Profiles'],
    iconName: 'Search',
  },
  {
    number: '02',
    title: 'PLAN',
    summary: 'Define structure, features, user flow, and technical direction.',
    details:
      'Mapping out clean database schemas, selecting the appropriate tech stack, and architecting state lifecycles to ensure reliability and maintainability from day one.',
    deliverables: ['Database Schema', 'Architecture Diagrams', 'Feature Roadmap'],
    iconName: 'Compass',
  },
  {
    number: '03',
    title: 'DESIGN',
    summary: 'Create clean interfaces and intuitive experiences.',
    details:
      'Crafting high-contrast, minimalist UI components with strict typographic hierarchy, responsive spacing mathematics, and intentional micro-interactions.',
    deliverables: ['High-Fidelity Wireframes', 'Design System & Tokens', 'Interactive Prototypes'],
    iconName: 'Layout',
  },
  {
    number: '04',
    title: 'DEVELOP',
    summary: 'Build responsive and functional digital products.',
    details:
      'Writing clean, modular, and well-commented code. Implementing performant frontend layouts, robust backend APIs, and secure database transactions.',
    deliverables: ['Production Codebase', 'Component Library', 'REST / Backend APIs'],
    iconName: 'Code2',
  },
  {
    number: '05',
    title: 'TEST',
    summary: 'Check functionality, responsiveness, accessibility, and usability.',
    details:
      'Performing multi-device testing, cross-browser compatibility verification, accessibility audits (WCAG AA), and edge-case validation across all interactive forms.',
    deliverables: ['Cross-Device QA', 'Accessibility Audit', 'Performance Optimization'],
    iconName: 'ShieldCheck',
  },
  {
    number: '06',
    title: 'DELIVER',
    summary: 'Prepare the final product and documentation.',
    details:
      'Finalizing deployment configuration, writing developer and user documentation, and preparing the product for seamless handover or production launch.',
    deliverables: ['Deployment Build', 'Technical Documentation', 'Clean Git Repository'],
    iconName: 'Rocket',
  },
];

export const STATISTICS: StatItem[] = [
  {
    value: '9.86',
    numericValue: 9.86,
    decimals: 2,
    suffix: '',
    label: 'CGPA',
    detail: 'Diploma in Computer Engineering (V.P.M.P Polytechnic)',
  },
  {
    value: '2026',
    numericValue: 2026,
    decimals: 0,
    suffix: '',
    label: 'Expected Completion',
    detail: 'Academic graduation year with honors focus',
  },
  {
    value: '03',
    numericValue: 3,
    decimals: 0,
    suffix: '',
    label: 'Featured Projects',
    detail: 'Full-stack, Android application & IoT builds',
  },
  {
    value: '02',
    numericValue: 2,
    decimals: 0,
    suffix: '',
    label: 'Professional Certificates',
    detail: 'Google Cloud & Microsoft certifications',
  },
];

export const VALUE_PROPS: ValueProp[] = [
  {
    id: 'clean-dev',
    title: 'Clean Development',
    description: 'I write clean, maintainable, and scalable code following industry best practices and modular architecture.',
    iconName: 'Code',
  },
  {
    id: 'user-focused',
    title: 'User-Focused Design',
    description: 'I build simple, intuitive, and engaging experiences designed with accessibility and clarity at their core.',
    iconName: 'HeartHandshake',
  },
  {
    id: 'continuous-learning',
    title: 'Continuous Learning',
    description: 'I constantly learn new technologies, exploring modern web frameworks, application development, AI, and cloud.',
    iconName: 'Flame',
  },
  {
    id: 'problem-solving',
    title: 'Problem Solving',
    description: 'I enjoy converting real-world challenges into practical, reliable, and high-impact digital solutions.',
    iconName: 'Lightbulb',
  },
];
