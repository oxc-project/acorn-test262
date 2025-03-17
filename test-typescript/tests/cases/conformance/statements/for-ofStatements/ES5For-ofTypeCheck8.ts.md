__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 85,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 49,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 48,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 48,
            "decorators": [],
            "name": "union",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 9,
              "end": 48,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 11,
                "end": 48,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 11,
                    "end": 17
                  },
                  {
                    "type": "TSArrayType",
                    "start": 20,
                    "end": 28,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 20,
                      "end": 26
                    }
                  },
                  {
                    "type": "TSArrayType",
                    "start": 30,
                    "end": 38,
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 30,
                      "end": 36
                    }
                  },
                  {
                    "type": "TSArrayType",
                    "start": 40,
                    "end": 48,
                    "elementType": {
                      "type": "TSSymbolKeyword",
                      "start": 40,
                      "end": 46
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
      "type": "VariableDeclaration",
      "start": 50,
      "end": 64,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 54,
          "end": 63,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 54,
            "end": 63,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 55,
              "end": 63,
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "start": 57,
                "end": 63
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
      "start": 65,
      "end": 85,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 82,
        "end": 85,
        "body": []
      },
      "left": {
        "type": "Identifier",
        "start": 70,
        "end": 71,
        "decorators": [],
        "name": "v",
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "Identifier",
        "start": 75,
        "end": 80,
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
