export const SERVICES = [
  { value: "web-development", label: "Web Development" },
  { value: "software-development", label: "Software Development" },
  { value: "app-development", label: "App Development" },
  { value: "data-engineering", label: "Data Engineering" },
  { value: "cloud-engineering", label: "Cloud Engineering" },
  { value: "mvp-development", label: "MVP Development" },
  { value: "devops", label: "DevOps" },
  { value: "qa-testing", label: "QA Testing" },
  { value: "it-consulting", label: "IT Consulting" },
] as const;

export type ServiceValue = typeof SERVICES[number]["value"];