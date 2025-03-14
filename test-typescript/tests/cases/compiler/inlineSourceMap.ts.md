inlineSourceMap.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 26,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 10,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 9,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 9,
            "raw": "0",
            "value": 0
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 11,
      "end": 26,
      "expression": {
        "type": "CallExpression",
        "start": 11,
        "end": 25,
        "arguments": [
          {
            "type": "Identifier",
            "start": 23,
            "end": 24,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 11,
          "end": 22,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 11,
            "end": 18,
            "decorators": [],
            "name": "console",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 19,
            "end": 22,
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
