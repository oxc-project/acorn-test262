ES5For-of33.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 54,
  "body": [
    {
      "type": "ForOfStatement",
      "start": 0,
      "end": 54,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 31,
        "end": 54,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 37,
            "end": 52,
            "expression": {
              "type": "CallExpression",
              "start": 37,
              "end": 51,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 49,
                  "end": 50,
                  "decorators": [],
                  "name": "v",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 37,
                "end": 48,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 44,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 45,
                  "end": 48,
                  "decorators": [],
                  "name": "log",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 5,
        "end": 10,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 9,
            "end": 10,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "decorators": [],
              "name": "v",
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "right": {
        "type": "ArrayExpression",
        "start": 14,
        "end": 29,
        "elements": [
          {
            "type": "Literal",
            "start": 15,
            "end": 18,
            "raw": "'a'",
            "value": "a"
          },
          {
            "type": "Literal",
            "start": 20,
            "end": 23,
            "raw": "'b'",
            "value": "b"
          },
          {
            "type": "Literal",
            "start": 25,
            "end": 28,
            "raw": "'c'",
            "value": "c"
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
