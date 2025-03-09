import { Expr, Literal, NodeType, ObjectLiteral, Property } from "./ast";
import { Token, TokenType } from "./lexer";

export default class Parser {
  constructor(private tokens: Token[]) {}

  private isEndOfFile() {
    return this.tokens[0].type === TokenType.EOF;
  }

  private peek() {
    return this.tokens[0];
  }

  private advance() {
    const token = this.tokens.shift();
    return token as Token;
  }

  private expect(tokenType: TokenType) {
    const token = this.tokens.shift();
    if (!token || token.type !== tokenType) {
      throw new Error(
        `Parser Error: \n Expected token type ${tokenType}, got ${token?.type || "undefined"}`,
      );
    }
    return token;
  }

  private parseExpression() {
    switch (this.peek().type) {
      case TokenType.OpenBrace:
        return this.parseObjectExpression();
      case TokenType.String:
        return this.parseStringValue();
      default:
        throw new Error(`Parser error: unexpected token, got ${this.peek().type}`);
    }
  }

  private parseObjectExpression(): ObjectLiteral {
    this.expect(TokenType.OpenBrace);
    const properties: Property[] = [];

    while (!this.isEndOfFile() && this.peek().type !== TokenType.CloseBrace) {
      const key = this.expect(TokenType.String);
      this.expect(TokenType.Colon);
      const value = this.parseValue();
      properties.push({
        kind: NodeType.Property,
        key: {
          kind: NodeType.Identifier,
          value: key.value.slice(1, -1),
        },
        value,
      });

      if (this.peek().type !== TokenType.CloseBrace) {
        this.expect(TokenType.Comma);
        if (this.peek().type !== TokenType.String) {
          throw new Error(`Parser error: expecting ${TokenType.String} after ${TokenType.Comma}`);
        }
      }
    }

    this.expect(TokenType.CloseBrace);
    return { kind: NodeType.Object, children: properties };
  }

  private parseValue(): Literal {
    const token = this.peek();
    switch (token.type) {
      case TokenType.String:
        return this.parseStringValue();
      case TokenType.Number:
        return this.parseNumberValue();
      case TokenType.Boolean:
        return this.parseBooleanValue();
      case TokenType.Null:
        return this.parseNullValue();
      default:
        throw new Error(`Parser error: unexpected token, got ${token.type}`);
    }
  }

  private parseStringValue(): Literal {
    const token = this.advance();
    return { kind: NodeType.Literal, value: token.value.slice(1, -1) };
  }

  private parseNumberValue(): Literal {
    const token = this.advance();
    return { kind: NodeType.Literal, value: parseFloat(token.value) };
  }

  private parseBooleanValue(): Literal {
    const token = this.advance();
    return { kind: NodeType.Literal, value: token.value === "true" };
  }

  private parseNullValue(): Literal {
    this.advance();
    return { kind: NodeType.Literal, value: null };
  }

  public produceAST(): Expr {
    const ast = this.parseExpression();
    return ast;
  }
}
