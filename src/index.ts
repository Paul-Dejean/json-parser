import { evaluate } from "./interpreter";
import { tokenize } from "./lexer";
import Parser from "./parser";

function parseJSON(text: string) {
  const tokens = tokenize(text);
  const parser = new Parser(tokens);
  const ast = parser.produceAST();
  const result = evaluate(ast);
  return result;
}

export default parseJSON;
