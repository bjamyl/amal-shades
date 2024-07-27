import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemaTypes/blockContent";
import category from "./schemaTypes/category";
import testimonial from "./schemaTypes/testimonial";
import product from "./schemaTypes/product";
import shipping from "./schemaTypes/shipping";
import order from "./schemaTypes/order";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category, blockContent, testimonial, shipping, order],
};
