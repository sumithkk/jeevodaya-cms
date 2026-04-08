export default {
    name: "midBanner",
    title: "Mid Banner",
    type: "document",
    fields: [
      {
        name: "image",
        type: "image",
      },
      {
        name: "link",
        type: "string",
      },
      {
        name: "isActive",
        type: "boolean",
        initialValue: true,
      },
    ],
  }