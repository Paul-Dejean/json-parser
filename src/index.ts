import { evaluate } from "./interpreter";
import { tokenize } from "./lexer";
import { stringifyElement } from "./stringify";
import Parser from "./parser";

export function parse(text: string) {
  const tokens = tokenize(text);
  const parser = new Parser(tokens);
  const ast = parser.produceAST();
  const result = evaluate(ast);
  return result;
}

export function stringify(value: unknown) {
  return stringifyElement(value);
}

export default {
  parse,
  stringify,
};

JSON.parse('{"name": "John"}');
