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
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 20,
                      "end": 26
                    },
                    "start": 20,
                    "end": 28
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 30,
                      "end": 36
                    },
                    "start": 30,
                    "end": 38
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSSymbolKeyword",
                      "start": 40,
                      "end": 46
                    },
                    "start": 40,
                    "end": 48
                  }
                ],
                "start": 11,
                "end": 48
              },
              "start": 9,
              "end": 48
            },
            "start": 4,
            "end": 48
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 48
        }
      ],
      "declare": false,
      "start": 0,
      "end": 49
    },
    {
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "start": 57,
                "end": 63
              },
              "start": 55,
              "end": 63
            },
            "start": 54,
            "end": 63
          },
          "init": null,
          "definite": false,
          "start": 54,
          "end": 63
        }
      ],
      "declare": false,
      "start": 50,
      "end": 64
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "Identifier",
        "decorators": [],
        "name": "v",
        "optional": false,
        "typeAnnotation": null,
        "start": 70,
        "end": 71
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "union",
        "optional": false,
        "typeAnnotation": null,
        "start": 75,
        "end": 80
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 82,
        "end": 85
      },
      "start": 65,
      "end": 85
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 85
}
```
