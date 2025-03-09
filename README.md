# @paul-dejean/json-parser

A lightweight JSON parsing and stringifying library written in TypeScript. This library provides custom implementations for converting JSON strings into JavaScript objects and vice versa, including handling edge cases such as circular references and undefined values in a manner similar to the native `JSON.parse` and `JSON.stringify`.

## Features

- **Custom JSON Parser:** Parse JSON strings into JavaScript objects.
- **Custom JSON Stringifier:** Convert JavaScript objects to JSON strings.
- **Edge Case Handling:** Deals with circular references and undefined values similarly to native JSON methods.
- **TypeScript:** Written in TypeScript for improved type safety and development experience.

## Installation

Install the package via npm:

```bash
npm install @paul-dejean/json-parser
```

## Usage

### Named Imports

You can import the functions either as named exports or as part of the default export.

```typescript
import { parse, stringify } from "@paul-dejean/json-parser";

const jsonString = '{"name": "Alice", "age": 30}';
const obj = parse(jsonString);
console.log(obj);

const newJsonString = stringify(obj);
console.log(newJsonString);
```

### Default import

```typescript
import JSONLib from "@paul-dejean/json-parser";

const jsonString = '{"name": "Alice", "age": 30}';
const obj = JSONLib.parse(jsonString);
console.log(obj);

const newJsonString = JSONLib.stringify(obj);
console.log(newJsonString);
```

## Development

### Building the project

```bash
npm run build
```

This command compiles the TypeScript source code from the src directory into the dist directory.

### Running Tests

```bash
npm test
```

## License

This project is licensed under the MIT License.

## Author

Paul Dejean (pauldejeandev@gmail.com)
