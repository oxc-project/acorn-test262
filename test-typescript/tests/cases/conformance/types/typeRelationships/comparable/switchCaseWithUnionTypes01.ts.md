__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 371,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 30,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 29,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 29,
            "name": "strOrNum",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 12,
              "end": 29,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 14,
                "end": 29,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 14,
                    "end": 20
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 23,
                    "end": 29
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
      "type": "VariableDeclaration",
      "start": 31,
      "end": 63,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 35,
          "end": 62,
          "id": {
            "type": "Identifier",
            "start": 35,
            "end": 62,
            "name": "numOrBool",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 44,
              "end": 62,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 46,
                "end": 62,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 46,
                    "end": 52
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 55,
                    "end": 62
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
      "type": "VariableDeclaration",
      "start": 64,
      "end": 80,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 68,
          "end": 79,
          "id": {
            "type": "Identifier",
            "start": 68,
            "end": 79,
            "name": "str",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 71,
              "end": 79,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 73,
                "end": 79
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
      "type": "VariableDeclaration",
      "start": 81,
      "end": 97,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 85,
          "end": 96,
          "id": {
            "type": "Identifier",
            "start": 85,
            "end": 96,
            "name": "num",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 88,
              "end": 96,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 90,
                "end": 96
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
      "type": "VariableDeclaration",
      "start": 98,
      "end": 116,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 102,
          "end": 115,
          "id": {
            "type": "Identifier",
            "start": 102,
            "end": 115,
            "name": "bool",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 106,
              "end": 115,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 108,
                "end": 115
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
      "type": "SwitchStatement",
      "start": 118,
      "end": 371,
      "discriminant": {
        "type": "Identifier",
        "start": 126,
        "end": 134,
        "name": "strOrNum",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "cases": [
        {
          "type": "SwitchCase",
          "start": 159,
          "end": 188,
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 182,
              "end": 188,
              "label": null
            }
          ],
          "test": {
            "type": "Identifier",
            "start": 164,
            "end": 172,
            "name": "strOrNum",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        {
          "type": "SwitchCase",
          "start": 214,
          "end": 223,
          "consequent": [],
          "test": {
            "type": "Identifier",
            "start": 219,
            "end": 222,
            "name": "str",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        {
          "type": "SwitchCase",
          "start": 228,
          "end": 252,
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 246,
              "end": 252,
              "label": null
            }
          ],
          "test": {
            "type": "Identifier",
            "start": 233,
            "end": 236,
            "name": "num",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        {
          "type": "SwitchCase",
          "start": 289,
          "end": 319,
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 313,
              "end": 319,
              "label": null
            }
          ],
          "test": {
            "type": "Identifier",
            "start": 294,
            "end": 303,
            "name": "numOrBool",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        {
          "type": "SwitchCase",
          "start": 344,
          "end": 369,
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 363,
              "end": 369,
              "label": null
            }
          ],
          "test": {
            "type": "Identifier",
            "start": 349,
            "end": 353,
            "name": "bool",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
