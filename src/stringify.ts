export function stringifyElement(
  value: unknown,
  visited = new WeakSet(),
  options?: { isArrayElement: boolean },
): string | undefined {
  if (typeof value === "undefined") {
    return options?.isArrayElement ? "null" : undefined;
  }
  if (value === null) {
    return "null";
  }

  if (typeof value !== "object") {
    return typeof value === "string" ? `"${value}"` : String(value as number | boolean);
  }

  if (visited.has(value)) {
    throw new Error("Circular reference detected");
  }

  visited.add(value);

  // Handle arrays
  if (Array.isArray(value)) {
    const arrayItems = value.map((item) =>
      stringifyElement(item, visited, { isArrayElement: true }),
    );
    visited.delete(value);
    return `[${arrayItems.join(",")}]`;
  }

  // Handle objects
  const obj = value as Record<string, unknown>;
  const keys = Object.keys(value);
  const values = keys
    .map((key) => {
      const keyString = `"${key}"`;
      const valueString = stringifyElement(obj[key], visited);
      return {
        key: keyString,
        value: valueString,
      };
    })
    .filter(({ value }) => value !== undefined)
    .map(({ key, value }) => `${key}:${value as string}`);
  visited.delete(value);
  return `{${values.join(",")}}`;
}
