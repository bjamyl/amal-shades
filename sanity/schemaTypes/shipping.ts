import { defineField, defineType } from "sanity";

export default defineType({
  name: "shipping",
  title: "Shipping",
  type: "document",
  fields: [
    defineField({
      name: "region",
      title: "Region",
      type: "string",
    }),
    defineField({
      name: "cost",
      title: "Cost",
      description: "Provide your shipping rate for the region",
      type: "number",
    }),
  ],
});
