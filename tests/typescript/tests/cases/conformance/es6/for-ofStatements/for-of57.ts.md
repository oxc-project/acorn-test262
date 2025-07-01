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
            "name": "iter",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Iterable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 10,
                  "end": 18
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 19,
                      "end": 25
                    }
                  ],
                  "start": 18,
                  "end": 26
                },
                "start": 10,
                "end": 26
              },
              "start": 8,
              "end": 26
            },
            "start": 4,
            "end": 26
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 26
        }
      ],
      "declare": false,
      "start": 0,
      "end": 27
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "num",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 40
            },
            "init": null,
            "definite": false,
            "start": 37,
            "end": 40
          }
        ],
        "declare": false,
        "start": 33,
        "end": 40
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "iter",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 48
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 50,
        "end": 53
      },
      "start": 28,
      "end": 53
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 53
}
```
