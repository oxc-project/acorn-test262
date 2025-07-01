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
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 11,
                      "end": 17
                    },
                    "start": 11,
                    "end": 19
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 22,
                      "end": 28
                    },
                    "start": 22,
                    "end": 30
                  }
                ],
                "start": 11,
                "end": 30
              },
              "start": 9,
              "end": 30
            },
            "start": 4,
            "end": 30
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 30
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
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 41,
              "end": 42
            },
            "init": null,
            "definite": false,
            "start": 41,
            "end": 42
          }
        ],
        "declare": false,
        "start": 37,
        "end": 42
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "union",
        "optional": false,
        "typeAnnotation": null,
        "start": 46,
        "end": 51
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 53,
        "end": 56
      },
      "start": 32,
      "end": 56
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 56
}
```
