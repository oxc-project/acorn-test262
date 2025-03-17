__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 53,
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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 26,
            "name": "iter",
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
                  "name": "Iterable",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
    },
    {
      "type": "ForOfStatement",
      "start": 28,
      "end": 53,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 33,
        "end": 40,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 37,
            "end": 40,
            "id": {
              "type": "Identifier",
              "start": 37,
              "end": 40,
              "name": "num",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 44,
        "end": 48,
        "name": "iter",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 50,
        "end": 53,
        "body": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
