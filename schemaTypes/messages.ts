export default {
    name: "message",
    title: "Management Messages (About page)",
    type: "document",
  
    fields: [
      {
        name: "role",
        title: "Role",
        type: "string",
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: "name",
        title: "Name",
        type: "string",
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: "message",
        title: "Message",
        type: "text",
        rows: 8,
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: "image",
        title: "Photo",
        type: "image",
        options: { hotspot: true },
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
  }