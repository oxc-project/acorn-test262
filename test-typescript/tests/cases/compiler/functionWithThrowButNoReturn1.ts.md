__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 61,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 60,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "name": "fn",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 22,
        "end": 60,
        "body": [
          {
            "type": "ThrowStatement",
            "start": 26,
            "end": 49,
            "argument": {
              "type": "NewExpression",
              "start": 32,
              "end": 48,
              "callee": {
                "type": "Identifier",
                "start": 36,
                "end": 41,
                "name": "Error",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 42,
                  "end": 47,
                  "value": "NYI",
                  "raw": "'NYI'"
                }
              ],
              "typeArguments": null
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 52,
            "end": 58,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 56,
                "end": 57,
                "id": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 57,
                  "name": "t",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 13,
        "end": 21,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 15,
          "end": 21
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
