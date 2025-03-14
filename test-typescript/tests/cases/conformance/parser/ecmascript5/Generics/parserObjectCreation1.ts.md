__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 49,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 49,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 48,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 23,
            "decorators": [],
            "name": "autoToken",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 23,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 15,
                "end": 23,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 15,
                  "end": 21
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 26,
            "end": 48,
            "arguments": [
              {
                "type": "Literal",
                "start": 46,
                "end": 47,
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 30,
              "end": 35,
              "decorators": [],
              "name": "Array",
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 35,
              "end": 45,
              "params": [
                {
                  "type": "TSArrayType",
                  "start": 36,
                  "end": 44,
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 36,
                    "end": 42
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
