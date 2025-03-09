import { ArrayLiteral, Value, NodeType, ObjectLiteral } from "./ast";

export function evaluate(astNode: Value) {
  switch (astNode.kind) {
    case NodeType.Object: {
      return evaluateObject(astNode);
    }
    case NodeType.Array: {
      return evaluateArray(astNode);
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

function evaluateArray(arr: ArrayLiteral) {
  const res: unknown[] = [];
  for (const value of arr.children) {
    res.push(evaluate(value));
  }
  return res;
}
