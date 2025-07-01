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
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
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
                ],
                "start": 14,
                "end": 29
              },
              "start": 12,
              "end": 29
            },
            "start": 4,
            "end": 29
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 29
        }
      ],
      "declare": false,
      "start": 0,
      "end": 30
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
            "name": "numOrBool",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
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
                ],
                "start": 46,
                "end": 62
              },
              "start": 44,
              "end": 62
            },
            "start": 35,
            "end": 62
          },
          "init": null,
          "definite": false,
          "start": 35,
          "end": 62
        }
      ],
      "declare": false,
      "start": 31,
      "end": 63
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
            "name": "str",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 73,
                "end": 79
              },
              "start": 71,
              "end": 79
            },
            "start": 68,
            "end": 79
          },
          "init": null,
          "definite": false,
          "start": 68,
          "end": 79
        }
      ],
      "declare": false,
      "start": 64,
      "end": 80
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
            "name": "num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 90,
                "end": 96
              },
              "start": 88,
              "end": 96
            },
            "start": 85,
            "end": 96
          },
          "init": null,
          "definite": false,
          "start": 85,
          "end": 96
        }
      ],
      "declare": false,
      "start": 81,
      "end": 97
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
            "name": "bool",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 108,
                "end": 115
              },
              "start": 106,
              "end": 115
            },
            "start": 102,
            "end": 115
          },
          "init": null,
          "definite": false,
          "start": 102,
          "end": 115
        }
      ],
      "declare": false,
      "start": 98,
      "end": 116
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Identifier",
        "decorators": [],
        "name": "strOrNum",
        "optional": false,
        "typeAnnotation": null,
        "start": 126,
        "end": 134
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "Identifier",
            "decorators": [],
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": null,
            "start": 164,
            "end": 172
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 182,
              "end": 188
            }
          ],
          "start": 159,
          "end": 188
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Identifier",
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": null,
            "start": 219,
            "end": 222
          },
          "consequent": [],
          "start": 214,
          "end": 223
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Identifier",
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": null,
            "start": 233,
            "end": 236
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 246,
              "end": 252
            }
          ],
          "start": 228,
          "end": 252
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Identifier",
            "decorators": [],
            "name": "numOrBool",
            "optional": false,
            "typeAnnotation": null,
            "start": 294,
            "end": 303
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 313,
              "end": 319
            }
          ],
          "start": 289,
          "end": 319
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Identifier",
            "decorators": [],
            "name": "bool",
            "optional": false,
            "typeAnnotation": null,
            "start": 349,
            "end": 353
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 363,
              "end": 369
            }
          ],
          "start": 344,
          "end": 369
        }
      ],
      "start": 118,
      "end": 371
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 371
}
```
