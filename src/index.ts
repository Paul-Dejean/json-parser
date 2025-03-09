import { evaluate } from "./interpreter";
import { tokenize } from "./lexer";
import Parser from "./parser";

function parseJSON(text: string) {
  const tokens = tokenize(text);
  console.log({ tokens });
  const parser = new Parser(tokens);
  const ast = parser.produceAST();
  console.log({ ast });
  const result = evaluate(ast);
  return result;
}

export default parseJSON;
