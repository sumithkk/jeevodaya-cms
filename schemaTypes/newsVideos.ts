export default {
    name: "newsVideo",
    title: "News Videos",
    type: "document",
    fields: [
      { name: "title", type: "string" },
      { name: "url", type: "string" },
      { name: "thumbnail", type: "image" },
      { name: "publishedAt", type: "datetime" },
      { name: "isActive", type: "boolean", initialValue: true },
    ],
  }