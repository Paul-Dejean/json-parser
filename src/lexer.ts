export enum TokenType {
  OpenBrace = "OpenBrace",
  CloseBrace = "CloseBrace",
  String = "String",
  Number = "Number",
  Boolean = "Boolean",
  Null = "Null",
  Colon = "Colon",
  Comma = "Comma",
  EOF = "EOF",
}
export type Token = {
  type: TokenType;
  value: string;
};

export function tokenize(sourceCode: string): Token[] {
  const source = sourceCode.split("");
  const tokens = [];
  while (source.length > 0) {
    const char = source[0];
    if (char === "{") {
      tokens.push({ type: TokenType.OpenBrace, value: source.shift() as string });
    } else if (char === "}") {
      tokens.push({ type: TokenType.CloseBrace, value: source.shift() as string });
    } else if (char === ":") {
      tokens.push({ type: TokenType.Colon, value: source.shift() as string });
    } else if (char === ",") {
      tokens.push({ type: TokenType.Comma, value: source.shift() as string });
    } else if (/\d/.test(char)) {
      let val = "";
      while (/\d/.test(source[0])) {
        val += source.shift() as string;
      }
      tokens.push({ type: TokenType.Number, value: val });
    } else if (char === '"') {
      let val = source.shift() as string;
      while (source.length && source[0] !== '"') {
        val += source.shift() as string;
      }
      val += source.shift() as string;
      tokens.push({ type: TokenType.String, value: val });
    } else if (/[a-z]/.test(char)) {
      let val = "";
      while (/[a-z]/.test(source[0])) {
        val += source.shift() as string;
      }

      if (val === "true" || val === "false") {
        tokens.push({ type: TokenType.Boolean, value: val });
      } else if (val === "null") {
        tokens.push({ type: TokenType.Null, value: val });
      } else {
        throw new Error(`unrecognized token: "${val}`);
      }
    } else if (/\s/.test(char)) {
      while (/\s/.test(source[0])) {
        source.shift();
      }
    } else {
      throw new Error(`unrecognized character found in source : "${source[0]}"`);
    }
  }

  tokens.push({ type: TokenType.EOF, value: "EOF" });
  return tokens;
}
