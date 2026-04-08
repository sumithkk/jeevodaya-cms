export default {
    name: "doctor",
    title: "Doctors",
    type: "document",
    fields: [
      {
        name: "name",
        type: "string",
      },
      {
        name: "designation",
        type: "string",
      },
      {
        name: "department",
        type: "string",
      },
      {
        name: "image",
        type: "image",
      },
      {
        name: "order",
        type: "number",
      },
      {
        name: "isActive",
        type: "boolean",
        initialValue: true,
      },
    ],
  }