__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 56,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 31,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 30,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 30,
            "name": "union",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 9,
              "end": 30,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 11,
                "end": 30,
                "types": [
                  {
                    "type": "TSArrayType",
                    "start": 11,
                    "end": 19,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 11,
                      "end": 17
                    }
                  },
                  {
                    "type": "TSArrayType",
                    "start": 22,
                    "end": 30,
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 22,
                      "end": 28
                    }
                  }
                ]
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
      "start": 32,
      "end": 56,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 37,
        "end": 42,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 41,
            "end": 42,
            "id": {
              "type": "Identifier",
              "start": 41,
              "end": 42,
              "name": "v",
              "typeAnnotation": null,
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
      "right": {
        "type": "Identifier",
        "start": 46,
        "end": 51,
        "name": "union",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 53,
        "end": 56,
        "body": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
