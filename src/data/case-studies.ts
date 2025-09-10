export type MediaItem = {
  src: string;
  alt: string;
  caption?: string;
  span?: 1 | 2 | 3;
  width?: number;
  height?: number;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  client: string;
  logo?: string;
  role: string;
  duration: string;
  team: string[];
  tags: string[];
  heroImage: string;
  challenge: string;
  solution: string;
  impact: string[];
  businessContext?: string;
  businessContextImages?: MediaItem[];
  problemBreakdown?: string;
  problemImages?: MediaItem[];
  researchImages?: MediaItem[];
  researchMethods?: string[];
  keyInsight?: string;
  solutions?: {
    title: string;
    problem: string;
    solution: string;
    diagram?: string;
    media?: MediaItem[];
  }[];
  implementationResults?: string;
  testimonials?: string[];
  technologyStack?: string;
  designPrinciples?: string[];
  keyTakeaway?: string;
  media?: MediaItem[];
  gallery?: MediaItem[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'electrolux-ai',
    title: 'Electrolux Manufacturing Platform',
    subtitle: 'Redesigning OEE platform for human-machine collaboration',
    year: '2024',
    client: 'Electrolux Group',
    logo: '/logos/electroluxLogo.png',
    role: 'Design Director / UX Lead',
    duration: '8 months',
    team: ['Product Managers', 'Data Scientists', 'Engineers', 'Operators'],
    tags: ['AI/ML', 'Manufacturing', 'Enterprise'],
    heroImage: 'bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900',
    challenge: 'Manufacturing complexity across 30+ production sites with 90% unique machines, overwhelming information displays, AI-human disconnect in defect detection, and low user adoption rates.',
    solution: 'Created intelligent priority dashboards, human-AI collaboration workflows, and contextual interfaces that enhanced rather than replaced human expertise.',
    impact: [
      '89% daily active users',
      '75% training time reduction', 
      '4.2/5.0 user satisfaction',
      '60% faster issue resolution'
    ],
    problemImages: [],
    media: [
      {
        src: '/logos/electroluxLogo.png',
        alt: 'Electrolux logo placeholder',
        caption: 'Production dashboard redesign: priority surfacing and operator validation.',
        span: 2,
        width: 1600,
        height: 900
      },
      {
        src: '/logos/electroluxLogo.png',
        alt: 'Electrolux logo placeholder',
        caption: 'AI-human collaboration workflow.',
        span: 1,
        width: 1000,
        height: 1000
      },
      {
        src: '/logos/electroluxLogo.png',
        alt: 'Electrolux logo placeholder',
        caption: 'Real-time machine analytics interface.',
        span: 3,
        width: 2100,
        height: 900
      }
    ],
    businessContext: 'Electrolux Group (50,000+ employees, 120 countries) embarked on comprehensive digital transformation to move from gut-driven decisions to data-driven manufacturing excellence.',
    problemBreakdown: `🏭 ELECTROLUX MANUFACTURING LANDSCAPE
├── 30+ Production Sites Worldwide
├── 90% Unique Machines 
└── Multiple Product Lines: AEG, Zanussi, etc.

❌ CRITICAL PROBLEMS
├── 📊 Information Overload
│   ├── Multiple dashboard screens
│   ├── Complex status indicators
│   └── Overwhelming data streams
└── 📈 Low Adoption Rates
    ├── Complex interfaces
    ├── Inadequate training
    └── Poor change management`,
    researchMethods: [
      'Ethnographic research with operators across 3 shifts',
      'Stakeholder interviews (Production Supervisors, Quality Managers, Engineering Teams)',
      'Journey mapping sessions and pain point prioritization'
    ],
    researchImages: [
      {
        src: '/case-studie/electrolux/elex-highlevel.png',
        alt: 'High-level OEE redesign overview',
        caption: 'Research synthesis and high-level UX direction for OEE platform.',
        width: 2048,
        height: 1152
      }
    ],
    keyInsight: '"We know our machines better than anyone, but we can\'t always see what they\'re  doing" - Production Operator',
    solutions: [
      {
        title: 'Intelligent Priority Dashboard',
        problem: 'Information overload from multiple systems',
        solution: 'Clean dashboard that automatically surfaces highest-priority issues',
        media: [
          {
            src: '/case-studie/electrolux/electrolux-before.png',
            alt: 'Electrolux legacy materials grid UI screenshot',
            caption: 'Before: dense materials grid causing information overload and high cognitive load.',
            span: 2,
            width: 1920,
            height: 931
          },
          {
            src: '/case-studie/electrolux/electrolux-after.png',
            alt: 'Electrolux redesigned dashboard in use at the office',
            caption: 'After: Data visualisation and oversight.',
            span: 3,
            width: 1512,
            height: 735
          },
          {
            src: '/case-studie/electrolux/STATION-DASHBOARD.png',
            alt: 'Station dashboard overview with OEE KPIs',
            caption: 'Station dashboard: clear KPI hierarchy, quantity gap, and status timeline.',
            span: 3,
            width: 2048,
            height: 1152
          },
        ],
        diagram: `BEFORE: Multiple Overwhelming Screens
┌─────────┬─────────┬─────────┬─────────┐
│Screen 1 │Screen 2 │Screen 3 │Screen 4 │
│Status A │Status B │Status C │Status D │
│Status E │Status F │Status G │Status H │
│Status I │Status J │Status K │Status L │
└─────────┴─────────┴─────────┴─────────┘
        ↓ COGNITIVE OVERLOAD ↓

AFTER: Unified Priority Interface
┌─────────────────────────────────────┐
│  🔴 CRITICAL: Furnace Temp Alert    
│  ⚠️  HIGH: Quality Check Required   
│  🟡 MEDIUM: Maintenance Due Soon    
│  ✅ NORMAL: All Systems Operating   
└─────────────────────────────────────┘`
      },
      {
        title: 'Defect Detection System for Production',
        problem: 'Defect detection needed human validation',
        solution: 'Seamless feedback system for continuous improvement',
        media: [
          {
            src: '/case-studie/electrolux/Downtime justification.png',
            alt: 'Downtime justification interface',
            caption: 'Operator workflow for downtime classification and justification.',
            span: 3,
            width: 2048,
            height: 1152
          }
        ],
        diagram: `AI DEFECT DETECTION WORKFLOW
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   CAMERA    │───▶│  AI MODEL   │───▶│  OPERATOR   │
│   CAPTURE   │    │  ANALYSIS   │    │ VALIDATION  │
└─────────────┘    └─────────────┘    └─────────────┘
       ▲                  │                   │
       │                  ▼                   ▼
┌─────────────────────────────────────────────────────┐
│           CONTINUOUS LEARNING LOOP                
│  Pattern Learned: Similar defects auto-approved    
└─────────────────────────────────────────────────────┘`
      },
      {
        title: 'Real-Time Machine Analytics',
        problem: 'Hidden machine behavior affecting quality and energy',
        solution: 'Live visibility into defects and critical machine parameter through PowerBI dashboards. Redesigned dashboard to stream real-time data to andon screens (monitors inside the factory).  ',
        media: [
          {
            src: '/case-studie/electrolux/DASHBOARD.png',
            alt: 'Responsive real-time dashboard for andon screens',
            caption: 'The interface was made responsive to stream real-time data to andon screens (monitors inside the factory).',
            span: 3,
            width: 2048,
            height: 1152
          },
          {
            src: '/case-studie/electrolux/DASHBOARD-Month.png',
            alt: 'Monthly shift calendar view',
            caption: 'Month view to plan and review shifts with aggregated production context was needed to give better visibility and planning context to the operators.',
            span: 3,
            width: 2048,
            height: 1152
          }
        ],
        diagram: `🔥 ANDON SCREENS`
      }
    ],
    gallery: [
      {
        src: '/case-studie/electrolux/detail.png',
        alt: 'Electrolux KPI tiles and OEE detail',
        caption: 'Design exploration of KPI tiles, OEE gauge, and exception indicators.',
        width: 2400,
        height: 1200
      },
      {
        src: '/case-studie/electrolux/colorsDS.png',
        alt: 'Typography and color accessibility combinations',
        caption: 'Design system: secondary color palette and WCAG AA/AAA combinations guidance.',
        width: 2048,
        height: 1152
      },
      {
        src: '/case-studie/electrolux/day2.png',
        alt: 'Shift overview timeline with events and tooltip',
        caption: 'First iteration of the timeline component with annotated events and tooltips for operator context.',
        width: 1600,
        height: 414
      }
    ],
    implementationResults: `📊 PERFORMANCE METRICS (12 MONTHS POST-LAUNCH)


OPERATIONAL EXCELLENCE
┌─────────────────────────────────────┐
│ 🎯 Quality Improvements             
│ ▓▓▓▓▓▓▓▓░░ +15% defect detection   
     
│ 📈 OEE Score                       
│ ▓▓▓▓▓▓▓▓▓▓ +12% overall efficiency 
│  
│ 😊 Satisfaction Score              
│ ▓▓▓▓▓▓▓▓░░ 4.2/5.0 user rating    
└─────────────────────────────────────────────────────┘`,
    testimonials: [
      '"Finally someone shows us that we did a good job" - Mark, Production Operator'
    ],
    technologyStack: `🚀 TECHNOLOGY STACK


DEVELOPMENT STACK  
├── ☁️ Microsoft Azure: Cloud infrastructure
├── 🤖 Computer vision
├── 📊 Power BI: Analytics dashboards  
└── 🔗 IoT Hub: Device connectivity`,
    designPrinciples: [
      'Transparency First: Show confidence levels and reasoning',
      'Amplify Human Expertise: Enhance, don\'t replace human judgment',
      'Contextual Intelligence: Right information at the right time',
      'Continuous Learning: Natural feedback loops for both humans and AI'
    ],
    keyTakeaway: 'This project demonstrates how strategic UX design can successfully bridge advanced technologies with human operators, creating a sustainable model for Industry 5.0 manufacturing that prioritizes both operational excellence and human wellbeing.'
  },
  {
    id: 'arcelormittal-steel',
    title: 'ArcelorMittal Supply Chain Platform',
    subtitle: 'Redesigning enterprise platform for steel industry',
    year: '2017-2020',
    client: 'ArcelorMittal (via Capgemini)',
    logo: '/logos/Arcelormittal-logo.svg',
    role: 'UX Designer',
    duration: '3 years',
    team: ['Ben (Senior UX Designer)', 'Dev Teams', 'Steel Industry Experts'],
    tags: ['Enterprise', 'Manufacturing', 'B2B'],
    heroImage: 'bg-gradient-to-br from-orange-800 via-red-800 to-orange-900',
    challenge: 'World\'s largest steel producer had fragmented systems across sales, planning, production, and shipping, with email/phone coordination causing delays and inefficiencies.',
    solution: 'Created unified ScaleUp platform integrating all departments with real-time communication, centralized data management, and streamlined workflows.',
    impact: [
      'Faster order processing',
      'Better cross-department communication', 
      'Reduction in information search time',
      'Higher user satisfaction rate'
    ],
    businessContext: 'Complete steel supply chain software overhaul for ArcelorMittal Belgium over 3 years, transforming fragmented departmental systems into unified platform.',
    businessContextImages: [
      {
        src: '/case-studie/arcelor/steel.png',
        alt: 'Steel coils in ArcelorMittal warehouse',
        caption: 'Steel production context for the ScaleUp platform',
        span: 3,
        width: 1321,
        height: 768
      }
    ],
    problemBreakdown: `📧 EMAIL OVERLOAD          🔀 SYSTEM FRAGMENTATION        📊 DATA CHAOS
├─ Lost decisions          ├─ Sales software              ├─ Complex databases
├─ No tracking            ├─ Planning software           ├─ Giant spreadsheets  
├─ Communication gaps     ├─ Production software         ├─ Hidden information
└─ Accountability issues  ├─ Quality software            └─ Manual searching
                         └─ Shipping software

BEFORE: Fragmented Chaos
┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│   SALES     │  │  PLANNING   │  │ PRODUCTION  │  │  SHIPPING   │
│  System A   │  │  System B   │  │  System C   │  │  System D   │
└─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘
       │                │                │                │
    📧 EMAIL         📞 PHONE        📋 MANUAL       💾 DATABASE`,
    researchMethods: [
      '50+ stakeholder interviews across all departments',
      'Co-creation workshops with cross-functional teams',
      'Journey mapping sessions and workflow analysis'
    ],
    keyInsight: 'Each department had deep expertise but lacked visibility into other areas, creating communication silos and inefficient handoffs.',
    solutions: [
      {
        title: 'Unified ScaleUp Platform',
        problem: 'Five disconnected systems with manual handoffs',
        solution: 'Single integrated platform with shared data and communication',
        diagram: `AFTER: Unified ScaleUp Platform
┌────────────────────────────────────────────────────────────────────
│                    🚀 SCALEUP PLATFORM                          
├─────────────┬─────────────┬──────────────┬─────────────────────────┤
│ 📊 SALES      📅 PLANNING   🏭 PRODUCTION   🚛 SHIPPING & QUALITY 
│             │             │              │                        
│ • Orders    │ • Schedules │ • Real-time  │ • Logistics           
│ • Specs     │ • Resources │ • Monitoring │ • Quality Control     
│ • Progress  │ • Capacity  │ • Alerts     │ • Delivery Tracking   
└─────────────┴─────────────┴──────────────┴─────────────────────────┘
                               ↕️
                    💬 INTEGRATED COMMUNICATION`,
        media: [
          {
            src: '/case-studie/arcelor/pageflow.png',
            alt: 'Application architecture and key pageflows',
            caption: 'Application architecture: key pageflows across modules',
            span: 3
          },
          {
            src: '/case-studie/arcelor/pages.png',
            alt: 'Wireframes modules and page structure',
            caption: 'Wireframes: modules and page structure for ScaleUp',
            span: 3
          }
        ]
      },
      {
        title: 'Progressive Information Disclosure',
        problem: 'Information overload and complex data structures',
        solution: 'Hierarchical information architecture with contextual details',
        media: [
          {
            src: '/case-studie/arcelor/flowdetail.png',
            alt: 'Flow orders detail with progressive disclosure',
            caption: 'Progressive information disclosure: from high-level to detailed flow alignment and status. Here a single view that informs planning, production and shipping. Before the redesign, each department had their own view and they were not aware of each other\'s work.',
            span: 3,
            width: 1536,
            height: 900
          },
          {
            src: '/case-studie/arcelor/floworderslist.png',
            alt: 'Flow orders list with inline timelines',
            caption: 'Overview list: compact inline timelines summarize order progress for fast scanning.',
            span: 3,
            width: 1272,
            height: 517
          }
        ],
        diagram: `📊 DASHBOARD LEVEL 1: At-a-Glance
┌─────────────────────────────────────────┐
│  🎯 Today's Priority Orders             
│  ⚡ Urgent Quality Issues                
│  🚛 Ready for Shipment                 
│  📈 Production Efficiency: 94%         
└─────────────────────────────────────────┘
                    ↓ CLICK TO EXPAND
                    
📋 LEVEL 2: Contextual Details
┌─────────────────────────────────────────┐
│  📦 Order #AM-2024-1847                │
│  🏗️ Steel Grade: Usibor 2000           │
│  📅 Due Date: March 15                 │
│  👤 Customer: BMW Group                │
│  📊 Progress: Quality Control (87%)    │
└─────────────────────────────────────────┘`
      },
      {
        title: 'Integrated Communication System',
        problem: 'Email chaos and lost decision context',
        solution: 'In-app chat with order context and shareable views',
        diagram: `💬 IN-APP CHAT SYSTEM
┌─────────────────────────────────────────────────────────────┐
│ 🎯 Order #AM-2024-1847 Discussion                          
├─────────────────────────────────────────────────────────────┤
│ 👤 Miguel (Planning): "Updated delivery date to March 20"  
│ 👤 Dr. Chen (Quality): "Steel composition approved ✅"       
│ 👤 Lisa (Transport): "Truck scheduled for March 19"       
│ 👤 Sarah (Production): "Batch ready for quality check"    
├─────────────────────────────────────────────────────────────┤
│ 🔗 Shared Views: [Production Dashboard] [Quality Report]   
│ 📎 Attachments: [Steel_Spec_v2.pdf] [Transport_Route.map] 
└─────────────────────────────────────────────────────────────┘`,
        media: [
          {
            src: '/case-studie/arcelor/chat.png',
            alt: 'In-app messages, alerts, and warnings popover',
            caption: 'Integrated communication: messages, alerts, and warnings in context'
          }
        ]
      },
      {
        title: 'Design System',
        problem: 'Inconsistent UI across modules reduced usability and slowed delivery',
        solution: 'Introduced a tailored design system and iconography aligned with industrial brand',
        media: [
          {
            src: '/case-studie/arcelor/icons.png',
            alt: 'Transportation and logistics icon set for the platform',
            caption: 'Custom iconography in line with the platform look & feel',
            span: 2
          },
          {
            src: '/case-studie/arcelor/ds.png',
            alt: 'Design system components (buttons, states, themes)',
            caption: 'Components and states across light/dark themes',
            span: 2
          }
        ]
      }
    ],
    implementationResults: `📊 OPERATIONAL METRICS

Communication Efficiency     Data Access Speed         Decision Making
██████████ 85%              ██████████ 92%           ██████████ 78%
Faster coordination         Reduced search time        Quicker approvals

Cross-Department Visibility  User Satisfaction         Error Reduction  
██████████ 95%              ██████████ 88%           ██████████ 67%
Complete transparency       High adoption rate         Fewer mistakes
`,
    testimonials: [
      'We went from email chaos to having all our conversations in context with the actual work - it\'s revolutionary for how we coordinate across departments.',
      'Finally we can see what\'s happening in production without having to walk the floor.'
    ],
    technologyStack: `🚀 TECHNOLOGY STACK

PLATFORM ARCHITECTURE
┌─────────────────────────────────────┐
│ 💻 Frontend: Angular            
│ ├── Responsive design              
│ ├── Component library              
│ └── Progressive web app            
│                                     
│ 🔧 Backend: .NET Core              
│ ├── RESTful APIs                   
│ ├── Real-time SignalR              
│ └── Microservices architecture     
└─────────────────────────────────────┘

DEVELOPMENT STACK  
├── 🎨 Design: Figma, Sketch, InVision
├── 📊 Workshops: Miro, journey mapping
├── 🧪 Testing: User testing, A/B testing  
└── 🔗 Collaboration: Agile, co-creation`,
    designPrinciples: [
      'User Research First: Always start with understanding real user workflows',
      'Cross-Functional Transparency: Enable visibility across departmental silos',
      'Contextual Communication: Embed discussions within work context'
    ],
    keyTakeaway: 'By placing user needs at the center, we fundamentally changed how hundreds of steel industry professionals collaborate daily.'
  },
  {
    id: 'bisq-dex',
    title: 'Bisq Decentralized Exchange',
    subtitle: 'Crypto trading interfaces',
    year: '2022',
    client: 'Bisq.network (DAO)',
    logo: '/logos/bisqlogo.png',
    role: 'Senior UX/UI Designer',
    duration: '1 week sprint',
    team: ['Product Owner', 'Data Scientist', 'DAO Community'],
    tags: ['Web3', 'Blockchain', 'P2P Trading'],
    heroImage: 'bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900',
    challenge: 'Dense orderbook interface with overwhelming data presentation prevented new users from completing first trades.',
    solution: 'Working closely with a product owner and a data scientist, I redesigned the orderbook with clear visual hierarchy and trust-building mechanisms, and prototyped how a new multi-currency version could work.',
    impact: [
      'Improved orderbook scanability',
      'Reduced first-trade friction',
      'Enhanced multi-currency support',
      'Stronger trust indicators'
    ],
    businessContext: 'Bisq DEX is an open-source desktop application that allows you to buy and sell bitcoin. The DAO planned to add multiple currencies to the platform.',
    problemBreakdown: `📊 ORDERBOOK COMPLEXITY               🚫 USER FRICTION
├─ Overwhelming data               ├─ Complex first-time UX
├─ Poor visual hierarchy           ├─ Hidden trading options
├─ Hidden trading pairs            ├─ No progressive disclosure
└─ No progressive flow             └─ Steep learning curve

BEFORE: Dense Interface
┌─────────────────────────────────────────────────────────────────┐
│ BTC/USD Orderbook - All Data Visible                           
│ Price │ Amount │ Total │ Time │ Reputation │ Location │ Status 
│ 45.2k │ 0.5   │ 22.6k │ 2min │ ⭐⭐⭐⭐⭐   │ 🇺🇸      │ Active 
│ 45.1k │ 1.2   │ 54.1k │ 5min │ ⭐⭐⭐⭐    │ 🇪🇺      │ Active 
│ 45.0k │ 0.8   │ 36.0k │ 8min │ ⭐⭐⭐⭐⭐   │ 🇨🇦      │ Active 
└─────────────────────────────────────────────────────────────────┘`,
    researchMethods: [
      'Design thinking workshop with PO',
      'Community feedback',
      'Competitive analysis of centralized and DEX platforms'
    ],
    keyInsight: 'New users needed simplicity, while experienced traders wanted quick access to advanced features. The interface had to serve both audiences simultaneously.',
    solutions: [
      {
        title: 'Minimalist Orderbook',
        problem: 'Information overload from dense data presentation',
        solution: 'Layered interface showing essential info first, details on demand',
        diagram: `LEVEL 1: Essential Trading Info
┌─────────────────────────────────────────┐
│ 🎯 BTC/USD - Simple View               
│                                         
│ 💰 Best Price: $45,200                 
│ 📊 Available: 0.5 BTC                  
│ ⭐ Trust: Excellent (5/5)              
│ 🚀 Quick Trade Button                  
└─────────────────────────────────────────┘
                    ↓ EXPAND FOR DETAILS
                    
LEVEL 2: Advanced Trading Details
┌─────────────────────────────────────────┐
│ 📊 Full Orderbook                      
│ Price │ Amount │ Total │ Trust │ Time  
│ 45.2k │ 0.5   │ 22.6k │ ⭐⭐⭐⭐⭐│ 2min 
│ 45.1k │ 1.2   │ 54.1k │ ⭐⭐⭐⭐ │ 5min 
└─────────────────────────────────────────┘`,
        media: [
          {
            src: '/case-studie/bisq/ui.png',
            alt: 'Bisq buy & sell orderbook prototype UI',
            caption: 'Prototype of the simplified orderbook with protocols and offers list',
            span: 3
          }
        ]
      },
      {
        title: 'Trust-Building Interface',
        problem: 'P2P trading required confidence in counterparties',
        solution: 'Visual reputation system with clear trust indicators',
        diagram: `🔐 TRUST INDICATOR SYSTEM
┌─────────────────────────────────────────┐
│ 👤 Trader Profile: CryptoVeteran       
│ ⭐ Reputation: 4.8/5 (127 trades)      
│ 🏆 Badges: Verified, Fast Trader       
│ 📍 Location: 🇺🇸 (Disclosed)            
│ 💬 Response Time: <5 minutes           
│ 🔒 Escrow: Multi-sig Protected         
└─────────────────────────────────────────┘
                    ↓ TRUST BUILDING
                    
💬 COMMUNITY VALIDATION
┌─────────────────────────────────────────┐
│ Recent Feedback (Last 30 days)          
│ ✅ "Fast settlement, great experience"  
│ ✅ "Reliable counterparty"              
│ ✅ "Smooth trade process"               
└─────────────────────────────────────────┘`
      },
      {
        title: 'Multi-Currency Support',
        problem: 'Adding new trading pairs increased interface complexity',
        solution: 'Currency selector with smart defaults and progressive complexity',
        diagram: `🌍 CURRENCY SELECTION FLOW
┌─────────────────────────────────────────┐
│ 🎯 Popular Pairs (Quick Access)        
│ BTC/USD  BTC/EUR  BTC/GBP              
│                                         
│ 🔍 Search Other Currencies             
│ [Type to search...]                    
│                                         
│ 📊 All Available Pairs                 
│ (Advanced users only)                  
└─────────────────────────────────────────┘
                    ↓ SELECTION
                    
💰 TRADING INTERFACE
┌─────────────────────────────────────────┐
│ 🎯 BTC/USD Trade                       
│ 💱 Amount: [0.01] BTC                  
│ 💰 Total: $452.00                      
│ ⚡ Fee: $0.45 (0.1%)                   
│ 🚀 Confirm Trade                       
└─────────────────────────────────────────┘`
      }
    ],
    implementationResults: `📊 USER EXPERIENCE METRICS

First-Time User Success     Orderbook Usability      Trust Indicators
██████████ 78%             ██████████ 85%          ██████████ 92%
Completed first trade      Found desired trades     Clear reputation

Multi-Currency Support     Community Engagement     Platform Growth
██████████ 89%             ██████████ 76%          ██████████ 67%
Easy pair switching        Active participation     User retention

USER JOURNEY IMPROVEMENTS
BEFORE Redesign:  ████████████████████ 12 steps to first trade
AFTER Redesign:   ██████████ 6 steps to first trade

Complexity Reduction: 50% fewer steps for new users`,
    testimonials: [
      'The new interface made my first trade so much easier - I could actually see what I was doing instead of feeling overwhelmed by all the data.',
      'As an experienced trader, I still have access to all the advanced features, but the interface is much cleaner and more intuitive.'
    ],
    technologyStack: `🚀 TECHNOLOGY STACK

DECENTRALIZED ARCHITECTURE
┌─────────────────────────────────────┐
│ 🔗 P2P Network                      
│ ├── Tor network integration        
│ ├── Distributed orderbook          
│ └── No central servers             
│                                     
│ 🔐 Security & Trust                
│ ├── Multi-signature escrow         
│ ├── Reputation system              
│ └── Community validation           
└─────────────────────────────────────┘

FRONTEND STACK  
├── 💻 JavaFX: Desktop application
├── 🎨 Custom UI components
├── 📱 Responsive design patterns  
└── 🔧 Local-first architecture`,
    designPrinciples: [
      'Progressive Decentralization: Start simple, reveal complexity gradually',
      'Trust Through Transparency: Clear reputation and validation systems',
      'Dual-Audience Design: Serve both newcomers and experts effectively',
      'Community-Centric: Enable user validation and feedback loops'
    ],
    keyTakeaway: 'This project demonstrates how thoughtful UX design can make complex decentralized technologies accessible to mainstream users while preserving the advanced functionality that power users require. The key was balancing simplicity with capability.'
  },
  {
    id: 'robovision-ai',
    title: 'Robovision AI Platform',
    subtitle: 'Making machine learning accessible',
    year: '2020',
    client: 'Robovision',
    logo: '/logos/robologo.png',
    role: 'UX Lead',
    duration: '6 months',
    team: ['Remote Designers', 'Data Scientists', 'ML Engineers', 'Marketing'],
    tags: ['AI/ML', 'Computer Vision', 'Industrial'],
    heroImage: 'bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-900',
    challenge: 'Robovision\'s AI platform had powerful computer vision capabilities but suffered from low adoption across manufacturing, agriculture, and quality control industries due to technical jargon and complex workflows.',
    solution: 'Created AI-assisted annotation tools, visual performance metrics, and industry-specific templates that transformed technical complexity into intuitive workflows accessible to non-technical operators.',
    impact: [
      '35% faster operator onboarding',
      '60% reduction in annotation time',
      'Self-service AI model maintenance',
      'improvement in user satisfaction'
    ],
    businessContext: 'Leading a team of remote designers to redesign Robovision\'s computer vision platform, serving manufacturing, agriculture (rose cutting), and quality control industries with non-technical operators.',
    problemBreakdown: `🏭 INDUSTRIAL AI ADOPTION BARRIERS
├── Technical jargon preventing operator use
├── Complex ML workflows requiring expertise
├── Multi-step annotation processes
└── Industry-specific customization needs

❌ CORE PROBLEMS
├── 📊 Technical Complexity
│   ├── ML terminology everywhere
│   ├── Model confidence scores
│   ├── Training epoch displays
├── 🔧 Annotation Workflow
│   ├── Multi-step manual processes
│   ├── Required deep ML knowledge
│   └── Time-intensive labeling
├── 🏭 Industry Barriers
│   ├── Rose cutting operations
│   ├── Manufacturing quality control
│   └── Agricultural robotics
└── 👥 User Adoption
    ├── High learning curves
    ├── Technical intimidation
    └── Production floor resistance`,
    researchMethods: [
      'Field studies with operators across manufacturing, agriculture, and quality control',
      'Cross-functional workshops with data scientists, engineers, and marketing',
      'Competitive analysis and ROI assessment for workflow improvements'
    ],
    keyInsight: 'Users understood their domain expertise but were blocked by technical AI terminology and complex workflows - they needed AI-powered tools without understanding underlying machine learning complexity.',
    solutions: [
      {
        title: 'AI-Assisted Annotation Interface',
        problem: 'Complex manual annotation workflows requiring ML expertise',
        solution: 'Smart annotation tool with AI-powered suggestions and progressive disclosure',
        diagram: `BEFORE: Manual Technical Process
┌─────────────────────────────────────────┐
│ Step 1: Load training data              
│ Step 2: Define bounding boxes manually  
│ Step 3: Set confidence thresholds       
│ Step 4: Adjust hyperparameters         
│ Step 5: Monitor F1 scores               
│ Step 6: Validate with test sets        
└─────────────────────────────────────────┘

AFTER: AI-Assisted Workflow
┌─────────────────────────────────────────┐
│ 🎯 Point & Click Object Selection      
│ 🤖 AI Suggests Similar Objects         
│ ✅ Operator Confirms/Corrects          
│ 📊 Visual Training Progress            
│ 🚀 One-Click Deployment               
└─────────────────────────────────────────┘`,
        media: [
          {
            src: '/case-studie/robovision/blakcircle.png',
            alt: 'Robovision labeler identifying blue circles on production edge',
            caption: 'AI-assisted labeling: defect circle classes in the Robovision tool',
            span: 3
          }
        ]
      },
      {
        title: 'Visual Performance Communication',
        problem: 'Technical ML readouts incomprehensible to operators',
        solution: 'Business-relevant dashboards with visual indicators and plain language',
        diagram: `BEFORE: Technical Metrics
┌─────────────────────────────────────────┐
│ F1 Score: 0.94                         
│ Precision: 0.97                        
│ Recall: 0.91                           
│ mAP@0.5: 0.89                          
│ Training Loss: 0.0034                  
│ Validation Accuracy: 92.4%             
└─────────────────────────────────────────┘

AFTER: Operator-Friendly Display
┌─────────────────────────────────────────┐
│ 🎯 Quality Detection: 94% Accurate     
│ 📈 Model Performance: Excellent        
│ 🟢 Status: Ready for Production        
│ ⏱️ Processing: 2.3 items per second    
│ 🔄 Last Updated: 15 minutes ago        
└─────────────────────────────────────────┘`
      },
      {
        title: 'Industry-Specific AI Templates',
        problem: 'Platform needed flexibility for diverse use cases while maintaining usability',
        solution: 'AI Store with pre-built solutions and customizable templates',
        diagram: `🏪 AI MARKETPLACE CONCEPT
┌─────────────────────────────────────────┐
│ 🌹 Agriculture Templates               
│ ├── Rose Cutting Detection             
│ ├── Crop Quality Assessment            
│ └── Harvest Timing Optimization       
│                                         
│ 🔧 Manufacturing Templates             
│ ├── Defect Detection                   
│ ├── Assembly Line QC                   
│ └── Part Classification                 
│                                         
│ 📊 Custom Solutions                    
│ ├── Template Customization             
│ ├── Industry-Specific Workflows        
│ └── Deployment Automation              
└─────────────────────────────────────────┘`
      ,
        media: [
          {
            src: '/case-studie/robovision/promo.png',
            alt: 'Automated computer vision without coding promo',
            caption: 'Operator-friendly positioning and value props for the platform',
            span: 3
          }
        ]
      }
    ],
    implementationResults: `📊 PLATFORM ADOPTION METRICS

USER ONBOARDING
┌─────────────────────────────────────┐
│ 🚀 Onboarding Speed                
│ ▓▓▓▓▓▓▓▓▓░ 85% faster              
│                                     
│ 📚 Training Time                   
│ ▓▓▓▓░░░░░░ 60% reduction           
│                                     
│ 😊 User Satisfaction               
│ ▓▓▓▓▓▓▓▓▓▓ 100% improvement        
└─────────────────────────────────────┘

BUSINESS IMPACT
┌─────────────────────────────────────┐
│ 🏭 Industry Coverage               
│ Manufacturing, Agriculture, QC      
│                                     
│ ⚡ Implementation Time             
│ From weeks to hours setup          
│                                     
│ 🔧 Self-Service Capability         
│ Independent model maintenance       
└─────────────────────────────────────┘`,
    testimonials: [
      'The redesigned interface transformed our production line. What used to take days of training now takes hours, and our operators can maintain AI models independently. - Production Manager, Manufacturing Client',
      'Finally, an AI platform that speaks our language instead of requiring us to learn computer science. The visual feedback makes it clear when the system is working properly. - Quality Inspector, Agricultural Facility'
    ],
    technologyStack: `🚀 AI PLATFORM ARCHITECTURE

COMPUTER VISION ENGINE
┌─────────────────────────────────────┐
│ 🤖 Machine Learning                
│ ├── Object detection models        
│ ├── Classification algorithms      
│ └── Custom training pipelines      
│                                     
│ 📹 Vision Processing               
│ ├── Real-time image analysis       
│ ├── Video stream handling          
│ └── Multi-camera integration       
└─────────────────────────────────────┘

USER EXPERIENCE STACK
├── 🎨 Design: Figma, rapid prototyping
├── 🧪 Testing: Field studies, user validation  
├── 📊 Analytics: Usage metrics, performance tracking
└── 🔗 Collaboration: Cross-functional workshops`,
    designPrinciples: [
      'Progressive AI Transparency: Reveal technical complexity only when users need deeper control',
      'Human-AI Collaboration: AI enhances human capabilities rather than replacing judgment',
      'Industry-Agnostic Flexibility: Core patterns work across diverse use cases with customization',
      'Trust Through Clarity: Build confidence via clear visual feedback about model performance'
    ],
    keyTakeaway: 'This project demonstrates expertise in making complex AI technology accessible to non-technical users while maintaining the flexibility needed for diverse industrial applications. By focusing on user goals rather than technical capabilities, we transformed a low-adoption technical tool into a widely-used industrial solution.'
  }
]; 