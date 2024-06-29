import * as handlebars from "handlebars/dist/cjs/handlebars";
import { confirmedTemplate } from "./email-templates/confirmed";

export function compileConfirmTemplate(name: string, amount:number, itemname:string,price:number) {
  const template = handlebars.compile(confirmedTemplate);

  const htmlBody = template({
    name: name,
    amount:amount,
    itemname:itemname,
    price:price
  });

  return htmlBody;
}
