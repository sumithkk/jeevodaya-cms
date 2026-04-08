export default {
    name: "feedbackVideo",
    title: "Patient Feedback Videos",
    type: "document",
    fields: [
      { name: "name", type: "string" },
      { name: "url", type: "string" },
      { name: "thumbnail", type: "image" },
      { name: "isActive", type: "boolean", initialValue: true },
    ],
  }