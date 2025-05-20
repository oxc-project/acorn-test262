__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 58,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 31,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 31,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 31,
            "decorators": [],
            "name": "union",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 9,
              "end": 31,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 11,
                "end": 31,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 11,
                    "end": 17
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 20,
                    "end": 31,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 23,
                      "end": 31,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 24,
                          "end": 30
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 20,
                      "end": 23,
                      "decorators": [],
                      "name": "Set",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
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
      "start": 32,
      "end": 58,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 55,
        "end": 58,
        "body": []
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 37,
        "end": 44,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 43,
            "end": 44,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 43,
              "end": 44,
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "right": {
        "type": "Identifier",
        "start": 48,
        "end": 53,
        "decorators": [],
        "name": "union",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
