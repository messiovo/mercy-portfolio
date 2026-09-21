export const projects = [
  // ─────────────────────────────────────────────
  // 1. EMAIL MANAGEMENT — full case study
  // ─────────────────────────────────────────────
  {
    id: "email-management",
    title: "Email Management Using HubSpot",
    category: "Operations & CRM",
    projectType: "Personal Portfolio Project",
    experienceNote: "Gmail + HubSpot + administrative support experience applied",

    image: "/projects/email-management/email-management.jpg",

    description:
      "A workflow connecting Gmail, HubSpot and Google Calendar to organize client communication, track emails, manage follow-ups and coordinate tasks.",

    overview:
      "This portfolio project demonstrates a structured email and CRM workflow using Gmail, HubSpot and Google Calendar. The system organizes client communication, tracks emails and follow-ups, creates CRM contacts, manages tasks and connects reminders with the calendar.",

    workflow: [
      { step: "Gmail", detail: "Inbox & Labels" },
      { step: "HubSpot", detail: "Contacts → Email → Tasks" },
      { step: "Google Calendar", detail: "Reminders & Scheduling" },
    ],

    tools: ["Gmail", "HubSpot", "Google Calendar"],

    video: "/projects/email-management/email-management.mp4",
    pdf: "/projects/email-management/email-management.pdf",

    gallery: [
      {
        label: "Gmail & Inbox Management",
        images: ["/projects/email-management/labelled-emails.PNG"],
      },
      {
        label: "HubSpot CRM",
        images: [
          "/projects/email-management/hubspot-contact.PNG",
          "/projects/email-management/contact-summary.PNG",
          "/projects/email-management/deal-stage.PNG",
          "/projects/email-management/new-deal-list.PNG",
        ],
      },
      {
        label: "Email Tracking & Follow-Up",
        images: ["/projects/email-management/creating-email.PNG"],
      },
      {
        label: "Tasks & Calendar",
        images: [
          "/projects/email-management/task-view.PNG",
          "/projects/email-management/task-view-2.PNG",
          "/projects/email-management/calendar-connected.PNG",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 2–6. IMAGE-ONLY PROJECTS — keep them short
  // ─────────────────────────────────────────────
 {
  id: "meeting-tracker",
  title: "AI-Powered Meeting Summary & Action Tracker",
  category: "AI & Operations",
  projectType: "Personal Portfolio Project",

  image: "/projects/meeting-tracker/meeting-1.PNG",
  description:
    "An AI-powered workflow using Otter.ai and ClickUp to turn meeting transcripts into structured summaries, action items and follow-ups.",

  overview:
    "This project explores how AI meeting tools can be combined with a task management system to capture what was discussed, who owns what, and when follow-ups are due — without relying on manual note-taking.",

  tools: ["Otter.ai", "ChatGPT", "ClickUp", "Operations"],

  gallery: [
    {
      label: "Meeting Capture & Transcript",
      images: [
        "/projects/meeting-tracker/meeting-1.PNG",
        "/projects/meeting-tracker/transcript-view-otter-1.png",
        "/projects/meeting-tracker/transcript-view-otter-2.png",
        "/projects/meeting-tracker/transcript-view-otter-3.png",
      ],
    },
    {
      label: "AI-Generated Summaries",
      images: [
        "/projects/meeting-tracker/summary-general-1.PNG",
        "/projects/meeting-tracker/summary-general-2.PNG",
        "/projects/meeting-tracker/summary-team-meeting.PNG",
      ],
    },
    {
      label: "Action Tracking in ClickUp",
      images: [
        "/projects/meeting-tracker/clickup-board-view.PNG",
        "/projects/meeting-tracker/clickup-list-view.PNG",
        "/projects/meeting-tracker/clickup-calendar-view.PNG",
      ],
    },
  ],
},
  {
    id: "client-onboarding",
    title: "Automated Client Onboarding Workflow",
    category: "Operations & Automation",
    projectType: "Personal Portfolio Project",

    image: "/projects/client-onboarding/onboarding-1.png",
    description:
      "A structured onboarding system that moves new clients from signed to settled without chaos.",

    tools: ["Notion", "Google Workspace", "Operations"],

    gallery: [
      {
        label: "Screenshots",
        images: [
          "/projects/client-onboarding/onboarding-1.PNG",
          "/projects/client-onboarding/onboarding-2.PNG",
        ],
      },
    ],
  },

  {
    id: "content-calendar",
    title: "Social Media Content Calendar System",
    category: "Notion & Operations",
    projectType: "Personal Portfolio Project",

    image: "/projects/content-calendar/calendar-1.png",
    description:
      "A content planning system that keeps ideas, drafts, approvals and posts in one place.",

    tools: ["Notion", "Canva", "Operations"],

    gallery: [
      {
        label: "Screenshots",
        images: [
          "/projects/content-calendar/calendar-1.PNG",
          "/projects/content-calendar/calendar-2.PNG",
        ],
      },
    ],
  },

  {
    id: "crm-trello",
    title: "CRM & Trello Client Management System",
    category: "CRM & Project Management",
    projectType: "Personal Portfolio Project",

    image: "/projects/crm-trello/crm-1.PNG",
    description:
      "A lightweight CRM and Trello board for tracking clients, deals and ongoing work.",

    tools: ["Trello", "Google Sheets", "CRM"],

    gallery: [
      {
        label: "Screenshots",
        images: [
          "/projects/crm-trello/crm-1.PNG",
          "/projects/crm-trello/crm-2.PNG",
        ],
      },
    ],
  },

  {
    id: "calendar-management",
    title: "Calendar Management System",
    category: "Administration & Productivity",
    projectType: "Personal Portfolio Project",

    image: "/projects/calendar-management/calendar-1.png",
    description:
      "A calendar and scheduling system that protects focus time and keeps meetings purposeful.",

    tools: ["Google Calendar", "Scheduling", "Productivity"],

    gallery: [
      {
        label: "Screenshots",
        images: [
          "/projects/calendar-management/calendar-1.PNG",
          "/projects/calendar-management/calendar-2.PNG",
        ],
      },
    ],
  },
];

export default projects;