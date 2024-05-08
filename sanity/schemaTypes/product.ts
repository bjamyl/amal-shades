import { defineField, defineType } from "sanity";

export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
    }),
    defineField({
      name: "gallery",
      type: "array",
      description: "Upload all images of the item",
      of: [
        {
          type: "image",
        },
      ],
    }),
    defineField({
      name: "size",
      title: "Size",
      type: "array",
      description: "Select the available sizes",
      of: [
        {
          type: "string",
          options: {
            list: [
              { title: "Narrow", value: "narrow" },
              { title: "Medium", value: "medium" },
              { title: "Wide", value: "wide" },
            ],
          },
        },
      ],
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),

    defineField({
      name: "color",
      title: "Color",
      type: "string",
    }),
    defineField({
      name: "rim",
      title: "Rim type",
      description: "Select the rim type",
      type: "string",
      options: {
        list: [
          { title: "Full rim", value: "full-rim" },
          { title: "Semi-rimless", value: "semi-rim" },
          { title: "Rimless", value: "rimless" },
        ],
      },
    }),
    defineField({
      name: "shape",
      title: "Frame shape",
      description: "Select the frame shape",
      type: "string",
      options: {
        list: [
          { title: "Square", value: "square" },
          { title: "Round", value: "round" },
          { title: "Rectangle", value: "rectangle" },
          { title: "Aviator", value: "aviator" },
          { title: "Cat Eye", value: "cat-eye" },
        ],
      },
    }),

    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    }),
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
