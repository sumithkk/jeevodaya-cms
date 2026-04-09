export default {
    name: "trustee",
    title: "Trustee Members",
    type: "document",
  
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string",
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: "role",
        title: "Role",
        type: "string",
      },
      {
        name: "image",
        title: "Photo",
        type: "image",
      },
      {
        name: "order",
        title: "Display Order",
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
        title: "name",
        subtitle: "role",
        media: "image",
      },
    },
  }