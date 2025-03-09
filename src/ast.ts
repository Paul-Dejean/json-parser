export enum NodeType {
  Object = "Object",
  Array = "Array",
  Literal = "Literal",
  Property = "Property",
  Identifier = "Identifier",
}

export type Expr = ObjectLiteral | Literal | Property | Identifier | ArrayLiteral;

export type ObjectLiteral = {
  kind: NodeType.Object;
  children: Property[];
};

export type ArrayLiteral = {
  kind: NodeType.Array;
  children: Value[];
};

export type Identifier = {
  kind: NodeType.Identifier;
  value: string;
};

export type Literal = {
  kind: NodeType.Literal;
  value: string | number | boolean | null;
};

export type Property = {
  kind: NodeType.Property;
  key: Identifier;
  value: Value;
};

export type Value = Literal | ObjectLiteral | ArrayLiteral;
