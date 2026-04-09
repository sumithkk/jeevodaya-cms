export default {
  name: "newsVideo",
  title: "News Videos",
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
      type: "text",
      rows: 3,
    },

    {
      name: "url",
      title: "Video URL",
      type: "string",
      description: "Paste YouTube or video link",
    },

    {
      name: "thumbnail",
      title: "Thumbnail",
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
      media: "thumbnail",
    },
  },
}