__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 50,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 27,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 26,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 26,
            "decorators": [],
            "name": "iter",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 8,
              "end": 26,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 10,
                "end": 26,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 18,
                  "end": 26,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 19,
                      "end": 25
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 10,
                  "end": 18,
                  "decorators": [],
                  "name": "Iterable",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 28,
      "end": 50,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 32,
          "end": 49,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 32,
            "end": 37,
            "decorators": [],
            "name": "array",
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 40,
            "end": 49,
            "elements": [
              {
                "type": "SpreadElement",
                "start": 41,
                "end": 48,
                "argument": {
                  "type": "Identifier",
                  "start": 44,
                  "end": 48,
                  "decorators": [],
                  "name": "iter",
                  "optional": false
                }
              }
            ]
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
