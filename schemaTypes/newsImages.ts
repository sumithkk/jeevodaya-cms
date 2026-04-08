export default {
    name: "newsImage", // UNIQUE
    title: "News Images",
    type: "document",  // ✅ REQUIRED
    fields: [
      { name: "title", type: "string" },
      {
        name: "image",
        type: "image",
        options: { hotspot: true },
      },
      { name: "publishedAt", type: "datetime" },
      { name: "isActive", type: "boolean", initialValue: true },
    ],
  }