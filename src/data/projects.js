export const projects = [
  {
    id: "ai-meeting-tracker",
    title: "AI-Powered Meeting Summary & Action Tracker",
    category: "AI & Operations",
    image: "/images/meeting-tracker.PNG",
    shortDescription:
      "A workflow that turns messy meeting notes into clean summaries, action items, and follow-ups.",
    problem:
      "Meeting information is often lost after the call ends. Action items get buried in chat threads, follow-ups slip through, and there's no single source of truth for who owes what to whom.",
    approach:
      "I designed a repeatable workflow where meeting recordings or transcripts are fed into an AI prompt that extracts decisions, owners, and deadlines, then formats them into a structured tracker.",
    tools: ["ChatGPT", "Google Docs", "Notion", "Operations"],
    built: [
      "A reusable AI prompt template for extracting decisions, owners, and deadlines",
      "A structured meeting tracker that keeps action items visible across weeks",
      "A follow-up checklist so nothing gets dropped after the call",
      "A simple dashboard showing open vs. completed actions",
    ],
    learned:
      "I learned that the AI part is the easy part. The real value is designing the workflow around it so a team actually uses it consistently.",
  },
  {
    id: "client-onboarding",
    title: "Automated Client Onboarding Workflow",
    category: "Operations & Automation",
    image: "/images/client-onboarding.PNG",
    shortDescription:
      "A structured onboarding system that moves new clients from signed to settled without chaos.",
    problem:
      "New client onboarding was inconsistent. Welcome emails went out late, documents got lost, and no one knew which stage a client was in.",
    approach:
      "I mapped the entire onboarding journey, identified where things broke down, and rebuilt it as a step-by-step workflow with clear owners and checkpoints.",
    tools: ["Notion", "Google Workspace", "Automation", "Operations"],
    built: [
      "A stage-based onboarding checklist from welcome to first review",
      "Templated welcome emails and intake forms",
      "A tracker showing every client's current onboarding stage",
      "A handover document so any team member can pick up mid-onboarding",
    ],
    learned:
      "I learned that consistency comes from documentation. If a process only lives in someone's head, it isn't a process.",
  },
  {
    id: "content-calendar",
    title: "Social Media Content Calendar System",
    category: "Notion & Operations",
    image: "/images/content-calendar.PNG",
    shortDescription:
      "A content planning system that keeps ideas, drafts, approvals, and posts in one place.",
    problem:
      "Content was being created reactively. Ideas were scattered, approvals happened in DMs, and posting was inconsistent.",
    approach:
      "I built a Notion-based calendar with clear stages: Idea → Draft → Review → Scheduled → Posted, so every piece of content has a visible home.",
    tools: ["Notion", "Canva", "Operations"],
    built: [
      "A content calendar database with status stages",
      "A content idea bank organised by theme",
      "A simple approval workflow inside Notion",
      "A weekly review checklist to keep the pipeline moving",
    ],
    learned:
      "I learned that a calendar doesn't just organise content — it changes how you think about it. You stop reacting and start planning.",
  },
  {
    id: "crm-trello",
    title: "CRM & Trello Client Management System",
    category: "CRM & Project Management",
    image: "/images/crm-trello.PNG",
    shortDescription:
      "A lightweight CRM and Trello board for tracking clients, deals, and ongoing work.",
    problem:
      "Client information lived in spreadsheets, emails, and memory. Nobody could see the full picture of where a client relationship stood.",
    approach:
      "I built a simple CRM in a spreadsheet and paired it with a Trello board for active work, so pipeline and delivery stayed connected.",
    tools: ["Trello", "Google Sheets", "CRM", "Project Management"],
    built: [
      "A CRM sheet with client details, deal stage, and last contact",
      "A Trello board mapping active work by client",
      "A weekly review process to keep records current",
      "A simple reporting view for pipeline health",
    ],
    learned:
      "I learned that a CRM only works if updating it is easier than not updating it. Friction kills adoption.",
  },
  {
    id: "calendar-management",
    title: "Calendar Management System",
    category: "Administration & Productivity",
    image: "/images/calendar-management.PNG",
    shortDescription:
      "A calendar and scheduling system that protects focus time and keeps meetings meaningful.",
    problem:
      "The calendar was reactive — meetings piled up, focus time disappeared, and scheduling was a back-and-forth mess.",
    approach:
      "I designed a calendar system with clear rules: themed days, protected focus blocks, and a scheduling link to remove the back-and-forth.",
    tools: ["Google Calendar", "Scheduling Tools", "Productivity"],
    built: [
      "A weekly calendar template with focus and meeting blocks",
      "A scheduling link to reduce email back-and-forth",
      "A meeting intake form so calls have a clear purpose",
      "A weekly review habit to keep the calendar honest",
    ],
    learned:
      "I learned that a calendar is an operations document. How you structure your time is how you structure your work.",
  },
  {
    id: "email-management",
    title: "Email Management System",
    category: "Operations & Administration",
    image: "/images/email-management.PNG",
    shortDescription:
      "An inbox system that turns email from a source of stress into a controlled workflow.",
    problem:
      "The inbox was being used as a to-do list. Important emails got buried, nothing got archived, and every morning felt like starting over.",
    approach:
      "I built a simple system: labels for action, waiting, and reference; a daily triage routine; and templates for common replies.",
    tools: ["Gmail", "Templates", "Operations"],
    built: [
      "A label structure for action, waiting, and reference emails",
      "A daily triage routine (clear, action, or archive)",
      "Reply templates for common messages",
      "A weekly inbox review to catch anything slipping",
    ],
    learned:
      "I learned that an inbox is not a task manager. The moment you stop treating it like one, it stops feeling overwhelming.",
  },
];