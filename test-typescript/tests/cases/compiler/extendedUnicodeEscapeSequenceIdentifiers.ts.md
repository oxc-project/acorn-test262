extendedUnicodeEscapeSequenceIdentifiers.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 65,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 20,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 19,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 14,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 17,
            "end": 19,
            "raw": "12",
            "value": 12
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 21,
      "end": 42,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 27,
          "end": 41,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 27,
            "end": 36,
            "decorators": [],
            "name": "aa",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 39,
            "end": 41,
            "raw": "12",
            "value": 12
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 44,
      "end": 64,
      "expression": {
        "type": "CallExpression",
        "start": 44,
        "end": 63,
        "arguments": [
          {
            "type": "BinaryExpression",
            "start": 56,
            "end": 62,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 56,
              "end": 57,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 60,
              "end": 62,
              "decorators": [],
              "name": "aa",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 44,
          "end": 55,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 44,
            "end": 51,
            "decorators": [],
            "name": "console",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 52,
            "end": 55,
            "decorators": [],
            "name": "log",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
