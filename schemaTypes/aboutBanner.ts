export default {
    name: "aboutBanner",
    title: "About Page Banner",
    type: "document",
  
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      {
        name: "image",
        title: "Banner Image",
        type: "image",
        options: { hotspot: true },
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
        media: "image",
      },
    },
  }