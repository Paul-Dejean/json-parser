import JSON from "../src";

describe("parse", () => {
  test("should be able to parse empty json object", () => {
    const text = "{}";
    expect(JSON.parse(text)).toEqual({});
  });

  test("should throw an error if json text is empty", () => {
    const text = "";
    expect(() => JSON.parse(text)).toThrow();
  });

  test("should thow an error if json object is invalid", () => {
    const text = "{";
    expect(() => JSON.parse(text)).toThrow();
  });

  test("should be able to parse json object with key value pair where value is a string", () => {
    const text = `{"name": "John"}`;
    expect(JSON.parse(text)).toEqual({ name: "John" });
  });

  test("should be able to parse json object with mutiple key value pairs where values are a string", () => {
    const text = `{"firstname": "John", "lastname": "Doe"}`;
    expect(JSON.parse(text)).toEqual({ firstname: "John", lastname: "Doe" });
  });

  test("should throw an error if json object has a key without a value", () => {
    const text = `{"name":}`;
    expect(() => JSON.parse(text)).toThrow();
  });

  test("should throw an error if json object has a value without a key", () => {
    const text = `{:"John"}`;
    expect(() => JSON.parse(text)).toThrow();
  });

  test("should throw an error if json object is malformed", () => {
    const text = `{"name: "John"}`;
    expect(() => JSON.parse(text)).toThrow();
  });

  test("should parse object even if there are spaces in the text", () => {
    const text = `{ "name":        "John" }`;
    expect(JSON.parse(text)).toEqual({ name: "John" });
  });

  test("should throw an error if a key of the object is not a string", () => {
    const text = `{true: "John"}`;
    expect(() => JSON.parse(text)).toThrow();
  });

  test("should be able to parse json object with key value pair where value is a number", () => {
    const text = `{"age": 20}`;
    expect(JSON.parse(text)).toEqual({ age: 20 });
  });

  test("should be able to parse json object with key value pair where value is true", () => {
    const text = `{"isStudent": true}`;
    expect(JSON.parse(text)).toEqual({ isStudent: true });
  });

  test("should be able to parse json object with key value pair where value is false", () => {
    const text = `{"isStudent": false}`;
    expect(JSON.parse(text)).toEqual({ isStudent: false });
  });

  test("should be able to parse json object with key value pair where value is null", () => {
    const text = `{"address": null}`;
    expect(JSON.parse(text)).toEqual({ address: null });
  });

  test("should be able to parse json object with key value pair where value is an array", () => {
    const text = `{"grades": [90, 80, 70]}`;
    expect(JSON.parse(text)).toEqual({ grades: [90, 80, 70] });
  });

  test("should be able to parse json object with nested objects", () => {
    const text = `{"address": {"city": "New York", "country": "USA"}}`;
    expect(JSON.parse(text)).toEqual({ address: { city: "New York", country: "USA" } });
  });

  test("should be able to parse json array", () => {
    const text = `[90, 80, 70]`;
    expect(JSON.parse(text)).toEqual([90, 80, 70]);
  });

  test("should be able to parse json string", () => {
    const text = `"hello"`;
    expect(JSON.parse(text)).toEqual("hello");
  });

  test("should be able to parse json object with nested arrays", () => {
    const text = `{"grades": [[90, 80], [70, 60]]}`;
    expect(JSON.parse(text)).toEqual({
      grades: [
        [90, 80],
        [70, 60],
      ],
    });
  });

  test("should be able to parse json object with nested objects and arrays", () => {
    const text = `{"student": {"name": "John", "grades": [90, 80, 70]}}`;
    expect(JSON.parse(text)).toEqual({
      student: {
        name: "John",
        grades: [90, 80, 70],
      },
    });
  });

  test("should be able to parse json object with nested objects and arrays", () => {
    const text = `{"student": {"name": "John", "grades": [90, 80, 70]}}`;
    expect(JSON.parse(text)).toEqual({
      student: {
        name: "John",
        grades: [90, 80, 70],
      },
    });
  });

  test("should be able to parse json object with nested objects and arrays", () => {
    const text = `{"student": {"name": {"firstname": "John", "lastname": "Doe"}, "grades": [{"score": 90}, {"score": 80}, {"score": 70}]}}`;
    expect(JSON.parse(text)).toEqual({
      student: {
        name: { firstname: "John", lastname: "Doe" },
        grades: [
          {
            score: 90,
          },
          {
            score: 80,
          },
          {
            score: 70,
          },
        ],
      },
    });
  });

  test("should be able to parse a reaaly complex json object", () => {
    const text = `{
      "user": {
        "name": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "isStudent": true,
        "isGraduated": false,
        "address": null,
        "grades": [
          {
            "subject": "math",
            "score": 90
          },
          {
            "subject": "science",
            "score": 80
          },
          {
            "subject": "history",
            "score": 70
          }
        ]
      }
    }`;
    expect(JSON.parse(text)).toEqual({
      user: {
        name: { firstname: "John", lastname: "Doe" },
        isGraduated: false,
        isStudent: true,
        address: null,
        grades: [
          {
            subject: "math",
            score: 90,
          },
          {
            subject: "science",
            score: 80,
          },
          {
            subject: "history",
            score: 70,
          },
        ],
      },
    });
  });
});
