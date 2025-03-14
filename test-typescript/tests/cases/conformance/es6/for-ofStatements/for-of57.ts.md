for-of57.ts
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
      "type": "ForOfStatement",
      "start": 28,
      "end": 53,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 50,
        "end": 53,
        "body": []
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 33,
        "end": 40,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 37,
            "end": 40,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 37,
              "end": 40,
              "decorators": [],
              "name": "num",
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "Identifier",
        "start": 44,
        "end": 48,
        "decorators": [],
        "name": "iter",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
