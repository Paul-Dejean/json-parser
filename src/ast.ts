export enum NodeType {
  Object = "Object",
  Literal = "Literal",
  Property = "Property",
  Identifier = "Identifier",
}

export type Expr = ObjectLiteral | Literal | Property | Identifier;
export type ObjectLiteral = {
  kind: NodeType.Object;
  children: Property[];
};

export type Identifier = {
  kind: NodeType.Identifier;
  value: string;
};

export type Literal = {
  kind: NodeType.Literal;
  value: string;
};

export type Property = {
  kind: NodeType.Property;
  key: Identifier;
  value: Literal;
};
