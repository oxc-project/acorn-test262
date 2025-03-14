inlineSourceMap2.ts
```json
{
  "type": "Program",
  "start": 25,
  "end": 52,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 25,
      "end": 35,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 29,
          "end": 34,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 29,
            "end": 30,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 33,
            "end": 34,
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
      "start": 36,
      "end": 51,
      "expression": {
        "type": "CallExpression",
        "start": 36,
        "end": 50,
        "arguments": [
          {
            "type": "Identifier",
            "start": 48,
            "end": 49,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 36,
          "end": 47,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 36,
            "end": 43,
            "decorators": [],
            "name": "console",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 44,
            "end": 47,
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
