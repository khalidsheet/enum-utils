[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Enum Utils

Enum Utils is a utility function that allows you to create enum-like objects with read-only properties in JavaScript.

## Installation

You can install Enum Utils using npm:

```sh
npm install enum-utils
```

## Usage
```js
// Import the createEnum function
import createEnum from 'enum-utils';

// Create an enum-like object
const colors = createEnum({
  RED: 'red',
  BLUE: 'blue',
  GREEN: 'green',
});

console.log(colors.RED); // Output: red
console.log(colors.BLUE); // Output: blue
```

---

## API
`createEnum(enumObject)`
Create an enum-like object.

- `enumObject` (Object): An object containing the enum values by thier keys.

Returns: A Proxy object that allows accessing the enum values by their keys.

Throws:

- **Error** if enumObject is not an object.
- **Error** if enumObject is empty.
- **Error** if values in enumObject are not strings or numbers.
- **Error** if accessing a key that doesn't exist in the enum.
- **Error** if attempting to set a value (enum is read-only).

---
## Examples
```js
import createEnum from 'enum-utils';

const daysOfWeek = createEnum({
  SUNDAY: 'sunday',
  MONDAY: 'monday',
  TUESDAY: 'tuesday',
  // ... and so on
});

console.log(daysOfWeek.SUNDAY); // Output: sunday
console.log(daysOfWeek.WEDNESDAY); // Throws an Error: Invalid key, WEDNESDAY does not exist
```

## License
MIT License

Copyright (c) 2023 Khalid M. Sheet

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.