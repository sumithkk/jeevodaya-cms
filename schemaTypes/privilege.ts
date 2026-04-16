export default {
    name: "privilege",
    title: "Privilege Cards",
    type: "document",
  
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
      },
  
      {
        name: "cards",
        title: "Cards",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              {
                name: "image",
                title: "Image",
                type: "image",
                options: { hotspot: true },
              },
              {
                name: "alt",
                title: "Alt Text",
                type: "string",
              },
            ],
          },
        ],
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
      },
    },
  }