export default {
    name: "topBanner",
    title: "Top Banner",
    type: "document",
    fields: [
      {
        name: "image",
        title: "Banner Image",
        type: "image",
        options: { hotspot: true },
      },
      {
        name: "order",
        title: "Order",
        type: "number",
      },
      {
        name: "isActive",
        type: "boolean",
        initialValue: true,
      },
    ],
  }