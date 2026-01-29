import type { Collection } from "tinacms";

export const HomepageCollection: Collection = {
  name: "homepage",
  label: "Homepage",
  path: "src/content/homepage",
  format: "mdx",
  ui: {
    router: () => {
      return `/`;
    },
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  fields: [
    {
      type: "object",
      name: "hero",
      label: "Hero Section",
      fields: [
        {
          type: "string",
          name: "tagline",
          label: "Small Tagline (above title)",
        },
        {
          type: "string",
          name: "title",
          label: "H1 Title",
        },
        {
          type: "rich-text",
          name: "description",
          label: "Description",
        },
        {
          type: "image",
          name: "background",
          label: "Full Background Image",
        },
        {
          type: "object",
          name: "cta",
          label: "CTA Button",
          fields: [
            {
              type: "string",
              name: "label",
              label: "Button Label",
            },
            {
              type: "string",
              name: "link",
              label: "Button Link",
            },
          ],
        },
      ],
    },
  ],
};
