import { Expr, NodeType, ObjectLiteral } from "./ast";

export function evaluate(astNode: Expr) {
  switch (astNode.kind) {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    case NodeType.Object: {
      return evaluateObject(astNode);
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function evaluateObject(obj: ObjectLiteral) {
  return {};
}
