import parseJSON from "../src";

describe("JSON parser", () => {
  test("should be able to parse empty json object", () => {
    const text = "{}";
    expect(parseJSON(text)).toEqual({});
  });

  test("should throw an error if json text is empty", () => {
    const text = "";
    expect(() => parseJSON(text)).toThrow();
  });
  test("should thow an error if json object is invalid", () => {
    const text = "{";
    expect(() => parseJSON(text)).toThrow();
  });
});
