export default {
    name: "testimonial",
    title: "Testimonials",
    type: "document",
  
    fields: [
      {
        name: "name",
        title: "Patient Name",
        type: "string",
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: "designation",
        title: "Details (Optional)",
        type: "string",
      },
      {
        name: "message",
        title: "Testimonial Message",
        type: "text",
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: "image",
        title: "Patient Image",
        type: "image",
      },
      {
        name: "rating",
        title: "Rating",
        type: "number",
        validation: (Rule: any) => Rule.min(1).max(5),
      },
      {
        name: "isActive",
        title: "Active",
        type: "boolean",
        initialValue: true,
      },
      {
        name: "order",
        title: "Display Order",
        type: "number",
      },
    ],
  
    preview: {
      select: {
        title: "name",
        subtitle: "message",
        media: "image",
      },
    },
  }