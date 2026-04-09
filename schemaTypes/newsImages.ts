export default {
  name: "newsImage",
  title: "News Images",
  type: "document",

  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },

    // ✅ NEW DESCRIPTION FIELD
    {
      name: "description",
      title: "Description",
      type: "text", // multi-line text
      rows: 3, // better UI in CMS
    },

    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    },

    {
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
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
      title: "title",
      subtitle: "description",
      media: "image",
    },
  },
}