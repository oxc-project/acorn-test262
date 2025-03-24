__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 18,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 18,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 18,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 18,
            "name": "v",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 18,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 7,
                "end": 18,
                "exprName": {
                  "type": "Identifier",
                  "start": 14,
                  "end": 15,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 15,
                  "end": 18,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 16,
                      "end": 17,
                      "typeName": {
                        "type": "Identifier",
                        "start": 16,
                        "end": 17,
                        "name": "B",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
