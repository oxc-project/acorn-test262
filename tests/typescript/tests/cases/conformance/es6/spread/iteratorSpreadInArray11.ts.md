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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 26,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 10,
                  "end": 18,
                  "decorators": [],
                  "name": "Iterable",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 28,
      "end": 50,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 32,
          "end": 49,
          "id": {
            "type": "Identifier",
            "start": 32,
            "end": 37,
            "decorators": [],
            "name": "array",
            "optional": false,
            "typeAnnotation": null
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
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
