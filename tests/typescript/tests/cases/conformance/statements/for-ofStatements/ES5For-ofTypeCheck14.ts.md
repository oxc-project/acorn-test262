__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "union",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 11,
                    "end": 17
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Set",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 20,
                      "end": 23
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 24,
                          "end": 30
                        }
                      ],
                      "start": 23,
                      "end": 31
                    },
                    "start": 20,
                    "end": 31
                  }
                ],
                "start": 11,
                "end": 31
              },
              "start": 9,
              "end": 31
            },
            "start": 4,
            "end": 31
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 31
        }
      ],
      "declare": false,
      "start": 0,
      "end": 31
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 43,
              "end": 44
            },
            "init": null,
            "definite": false,
            "start": 43,
            "end": 44
          }
        ],
        "declare": false,
        "start": 37,
        "end": 44
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "union",
        "optional": false,
        "typeAnnotation": null,
        "start": 48,
        "end": 53
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 55,
        "end": 58
      },
      "start": 32,
      "end": 58
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 58
}
```
