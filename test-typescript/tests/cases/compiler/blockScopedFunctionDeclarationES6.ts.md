blockScopedFunctionDeclarationES6.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 54,
  "body": [
    {
      "type": "IfStatement",
      "start": 0,
      "end": 47,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 10,
        "end": 47,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 16,
            "end": 34,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 31,
              "end": 34,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 25,
              "end": 28,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "params": []
          },
          {
            "type": "ExpressionStatement",
            "start": 39,
            "end": 45,
            "expression": {
              "type": "CallExpression",
              "start": 39,
              "end": 44,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 39,
                "end": 42,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "test": {
        "type": "Literal",
        "start": 4,
        "end": 8,
        "raw": "true",
        "value": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 48,
      "end": 54,
      "expression": {
        "type": "CallExpression",
        "start": 48,
        "end": 53,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 48,
          "end": 51,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
