export default {
    name: "healthCheckup",
    title: "Health Checkup Packages",
    type: "document",
    fields: [
      {
        name: "title",
        type: "string",
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: "image",
        type: "image",
        options: { hotspot: true },
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: "isActive",
        type: "boolean",
        initialValue: true,
      },
    ],
  }