alwaysStrictAlreadyUseStrict.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 45,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 12,
      "directive": "use strict",
      "expression": {
        "type": "Literal",
        "start": 0,
        "end": 12,
        "raw": "\"use strict\"",
        "value": "use strict"
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 13,
      "end": 45,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 26,
        "end": 45,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 32,
            "end": 43,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 36,
                "end": 42,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 37,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 40,
                  "end": 42,
                  "elements": []
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 23,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script"
}
```
