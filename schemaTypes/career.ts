export default {
    name: "career",
    title: "Careers (Job Vaccancies)",
    type: "document",
  
    fields: [
      {
        name: "title",
        title: "Job Title",
        type: "string",
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: "details",
        title: "Job Details",
        type: "text",
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: "order",
        title: "Order",
        type: "number",
      },
      {
        name: "isActive",
        title: "Active",
        type: "boolean",
        initialValue: true,
      },
    ],
  
    preview: {
      select: {
        title: "title",
        subtitle: "details",
      },
    },
  }