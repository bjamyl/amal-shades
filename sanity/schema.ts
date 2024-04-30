import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemaTypes/blockContent";
import category from "./schemaTypes/category";
import testimonial from "./schemaTypes/testimonial";
import product from "./schemaTypes/product";
import author from "./schemaTypes/author";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, author, category, blockContent, testimonial],
};
