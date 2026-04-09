export default {
  name: "featuredDoctor", // ✅ RENAMED
  title: "Featured Doctors (Homepage)",
  type: "document",

  fields: [
    {
      name: "name",
      title: "Doctor Name",
      type: "string",
    },
    {
      name: "qualification",
      title: "Qualification",
      type: "string",
    },
    {
      name: "department",
      title: "Department",
      type: "string",
    },
    {
      name: "image",
      title: "Doctor Image",
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
      subtitle: "designation",
      media: "image",
    },
  },
};