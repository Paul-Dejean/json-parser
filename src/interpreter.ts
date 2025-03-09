import { Expr, NodeType, ObjectLiteral } from "./ast";

export function evaluate(astNode: Expr) {
  switch (astNode.kind) {
    case NodeType.Object: {
      return evaluateObject(astNode);
    }
    case NodeType.Literal: {
      return astNode.value;
    }
  }
}

function evaluateObject(obj: ObjectLiteral) {
  const res: Record<string, unknown> = {};
  for (const { key, value } of obj.children) {
    res[key.value] = evaluate(value);
  }
  return res;
}
