__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 66,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 66,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 24,
        "end": 66,
        "body": [
          {
            "type": "ThrowStatement",
            "start": 27,
            "end": 64,
            "argument": {
              "type": "NewExpression",
              "start": 33,
              "end": 63,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 43,
                  "end": 62,
                  "raw": "\"To be implemented\"",
                  "value": "To be implemented"
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 37,
                "end": 42,
                "decorators": [],
                "name": "Error",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 14,
        "decorators": [],
        "name": "clone",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 16,
        "end": 23,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 17,
          "end": 23
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
