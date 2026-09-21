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

    image: "/projects/email-management/labelled-emails.PNG",

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
  // 2. MEETING TRACKER
  // ─────────────────────────────────────────────
  {
    id: "meeting-tracker",
    title: "AI-Powered Meeting Summary & Action Tracker",
    category: "AI & Operations",
    projectType: "Personal Portfolio Project",

    image: "/projects/meeting-tracker/clickup-board-view.PNG",
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

  // ─────────────────────────────────────────────
  // 3. CLIENT ONBOARDING
  // ─────────────────────────────────────────────
  {
    id: "client-onboarding",
    title: "Automated Client Onboarding Workflow",
    category: "Operations & Automation",
    projectType: "Personal Portfolio Project",

    image: "/projects/client-onboarding/master-board.PNG",
    description:
      "A structured Asana-based onboarding system that moves new clients from signed to settled — with clear stages, reusable templates and no dropped handoffs.",

    overview:
      "This project demonstrates an end-to-end client onboarding workflow built in Asana. It covers board setup, reusable task templates, intake questions, kickoff documentation and progress tracking — so every new client moves through the same clear, repeatable process.",

    tools: ["Asana", "Google Workspace", "Operations"],

    problem:
      "Client onboarding was inconsistent. Welcome emails went out late, documents got lost, and no one could see which stage a client was in.",

    approach:
      "I mapped the entire onboarding journey, broke it into clear stages, and rebuilt it as a reusable Asana board with templated tasks, kickoff questions and a welcome letter — so any team member could run onboarding the same way.",

    built: [
      "A master Asana board with sections for each onboarding stage",
      "Reusable task templates for recurring onboarding steps",
      "A kickoff questionnaire to standardize what's collected upfront",
      "A welcome letter template sent automatically at the start",
      "A subtask structure so nothing gets lost inside a stage",
    ],

    learned:
      "Consistency comes from documentation and templates. If a process only lives in someone's head, it isn't a process.",

    gallery: [
      {
        label: "Board Setup & Structure",
        images: [
          "/projects/client-onboarding/blank-asana-board.PNG",
          "/projects/client-onboarding/master-board.PNG",
          "/projects/client-onboarding/board-section-created.PNG",
          "/projects/client-onboarding/move-across-board.PNG",
        ],
      },
      {
        label: "Client Intake & Welcome",
        images: [
          "/projects/client-onboarding/kick-off-questions.PNG",
          "/projects/client-onboarding/welcome-letter.PNG",
        ],
      },
      {
        label: "Task Templates & Subtasks",
        images: [
          "/projects/client-onboarding/convert-to-task-template.PNG",
          "/projects/client-onboarding/subtask-first.PNG",
          "/projects/client-onboarding/subtasks.PNG",
        ],
      },
      {
        label: "The End-to-End Workflow",
        images: [
          "/projects/client-onboarding/work-flow.PNG",
          "/projects/client-onboarding/client-onboarding.PNG",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 4. CONTENT CALENDAR
  // ─────────────────────────────────────────────
  {
    id: "content-calendar",
    title: "Social Media Content Calendar System",
    category: "Notion & Operations",
    projectType: "Personal Portfolio Project",

    image: "/projects/content-calendar/populated-calendar.PNG",
    description:
      "A Notion-based content planning system that keeps ideas, drafts, approvals and publishing dates in one place — viewed as a calendar, kanban, list or checklist.",

    overview:
      "This project demonstrates a complete content planning system built in Notion. It uses multiple database views — calendar, kanban, list and checklist — to move content from idea to published without losing track of anything. A heading and structure template keeps every piece of content consistent.",

    tools: ["Notion", "Content Operations", "Operations"],

    problem:
      "Content was being created reactively. Ideas were scattered across notes and chats, approvals happened in DMs, and posting was inconsistent because there was no single place to see what was coming up.",

    approach:
      "I built a Notion database with clear status stages (Idea → Draft → Review → Scheduled → Posted) and paired it with multiple views so the same content pipeline could be seen as a calendar, a kanban board, a list, or a checklist — depending on what the planner needed at that moment.",

    built: [
      "A Notion content database with clear status stages for every post",
      "A calendar view so publishing dates are visible at a glance",
      "A kanban view for tracking draft → review → scheduled flow",
      "A list view for bulk editing and quick scanning",
      "A checklist page for pre-publish tasks",
      "A heading/structure template so every post follows the same format",
    ],

    learned:
      "A calendar alone doesn't fix inconsistency — the views do. Different stages of content planning need different views, and Notion lets you show the same database multiple ways for different purposes.",

    gallery: [
      {
        label: "Calendar & Planning Views",
        images: [
          "/projects/content-calendar/populated-calendar.PNG",
          "/projects/content-calendar/calendar-view.PNG",
        ],
      },
      {
        label: "Kanban & List Views",
        images: [
          "/projects/content-calendar/kanban-view.PNG",
          "/projects/content-calendar/list-view.PNG",
        ],
      },
      {
        label: "Structure & Templates",
        images: [
          "/projects/content-calendar/content-headings.PNG",
          "/projects/content-calendar/checklist-page.PNG",
          "/projects/content-calendar/blank-notion-page.PNG",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 5. CRM / ZAPIER LEAD CAPTURE
  // ─────────────────────────────────────────────
  {
    id: "crm-trello",
    title: "Automated Lead Capture System (Trello + Zapier)",
    category: "CRM & Automation",
    projectType: "Personal Portfolio Project",

    image: "/projects/crm-trello/trello-capture.PNG",
    description:
      "A no-code automation that captures leads through a Google Form, then uses Zapier to create structured Trello cards — so no lead is ever lost in an inbox or spreadsheet.",

    overview:
      "This project demonstrates a lightweight CRM built with three free tools: Google Forms for intake, Zapier for automation, and Trello for tracking. When a lead fills out the form, Zapier instantly creates a Trello card with all their details — no manual data entry, no missed leads.",

    tools: ["Trello", "Zapier", "Google Forms", "Automation"],

    problem:
      "Leads came in through different channels and were manually re-typed into a tracker. Entries got missed, details got lost, and there was no consistent way to see what came in and when.",

    approach:
      "I replaced the manual re-typing with a Google Form and connected it to Trello through Zapier. Every form submission now creates a card with the lead's details in the right list, automatically. Trello lists act as pipeline stages, and rules keep cards organized as leads move through.",

    built: [
      "A Google Form for consistent lead intake",
      "A Zapier automation connecting the form to a Trello board",
      "A Trello board with lists representing pipeline stages",
      "Automation rules so new cards land in the correct list",
      "A card template ensuring every lead captures the same fields",
    ],

    learned:
      "The value of automation isn't speed — it's consistency. A form + Zapier + Trello setup with only three moving parts creates a reliable system that a bigger tool couldn't improve on for this use case.",

    gallery: [
      {
        label: "The Intake Form",
        images: ["/projects/crm-trello/form-created.PNG"],
      },
      {
        label: "Trello Board & Lists",
        images: [
          "/projects/crm-trello/blank-trello-page.PNG",
          "/projects/crm-trello/list-created.PNG",
          "/projects/crm-trello/trello-capture.PNG",
          "/projects/crm-trello/trello-capture-2.PNG",
          "/projects/crm-trello/news-created.PNG",
        ],
      },
      {
        label: "Zapier Automation",
        images: [
          "/projects/crm-trello/first-zap-trello.PNG",
          "/projects/crm-trello/linking-google-zapier.PNG",
          "/projects/crm-trello/creating-rules.PNG",
        ],
      },
      {
        label: "Lead Details on Cards",
        images: ["/projects/crm-trello/trello-zap-lead-description.PNG"],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // 6. CALENDAR MANAGEMENT
  // ─────────────────────────────────────────────
  {
    id: "calendar-management",
    title: "Executive Calendar Management System",
    category: "Administration & Executive Support",
    projectType: "Personal Portfolio Project",

    image: "/projects/calendar-management/finished-calendar-setup.PNG",
    description:
      "An executive calendar system covering setup, event preparation, attendee communication and daily structure — so a busy schedule runs without last-minute chaos.",

    overview:
      "This project demonstrates end-to-end executive calendar management. It covers building the calendar structure, blocking time for event preparation, sending pre-event communication to attendees, and keeping the daily schedule organised with clear buffer time between commitments.",

    tools: ["Google Calendar", "Gmail", "Executive Support", "Operations"],

    problem:
      "Executive calendars fill up fast and become reactive — back-to-back meetings with no prep time, attendees showing up without context, and no structure to protect deep work or follow-through.",

    approach:
      "I built a calendar system that treats the schedule as an operations document: blocked preparation time before important events, buffer windows between meetings, pre-event emails to attendees so everyone shows up prepared, and a clear visual structure so the executive always knows what's coming.",

    built: [
      "A structured calendar with clear event categories and colour coding",
      "Blocked preparation time for meetings that need prep work",
      "Buffer windows between commitments to prevent back-to-back fatigue",
      "Pre-event emails sent to attendees with context and details",
      "A repeating weekly structure so the schedule has a predictable rhythm",
    ],

    learned:
      "A calendar is an operations document, not just a list of meetings. How you structure time is how you structure work — protecting prep time matters as much as scheduling the meeting itself.",

    gallery: [
      {
        label: "Calendar Setup & Structure",
        images: [
          "/projects/calendar-management/title-page.PNG",
          "/projects/calendar-management/setting-up.PNG",
          "/projects/calendar-management/finished-calendar-setup.PNG",
        ],
      },
      {
        label: "Event Preparation",
        images: [
          "/projects/calendar-management/event-prep-image.PNG",
          "/projects/calendar-management/buffer-image.PNG",
        ],
      },
      {
        label: "Attendee Communication",
        images: [
          "/projects/calendar-management/email-before-sending.PNG",
          "/projects/calendar-management/sent-email.PNG",
        ],
      },
    ],
  },
];

export default projects;