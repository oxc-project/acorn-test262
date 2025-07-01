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
            "name": "strAndNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 15,
                    "end": 21
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 24,
                    "end": 30
                  }
                ],
                "start": 15,
                "end": 30
              },
              "start": 13,
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
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "numAndBool",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 48,
                    "end": 54
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 57,
                    "end": 64
                  }
                ],
                "start": 48,
                "end": 64
              },
              "start": 46,
              "end": 64
            },
            "start": 36,
            "end": 64
          },
          "init": null,
          "definite": false,
          "start": 36,
          "end": 64
        }
      ],
      "declare": false,
      "start": 32,
      "end": 65
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
                "start": 75,
                "end": 81
              },
              "start": 73,
              "end": 81
            },
            "start": 70,
            "end": 81
          },
          "init": null,
          "definite": false,
          "start": 70,
          "end": 81
        }
      ],
      "declare": false,
      "start": 66,
      "end": 82
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
                "start": 92,
                "end": 98
              },
              "start": 90,
              "end": 98
            },
            "start": 87,
            "end": 98
          },
          "init": null,
          "definite": false,
          "start": 87,
          "end": 98
        }
      ],
      "declare": false,
      "start": 83,
      "end": 99
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
                "start": 110,
                "end": 117
              },
              "start": 108,
              "end": 117
            },
            "start": 104,
            "end": 117
          },
          "init": null,
          "definite": false,
          "start": 104,
          "end": 117
        }
      ],
      "declare": false,
      "start": 100,
      "end": 118
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Identifier",
        "decorators": [],
        "name": "strAndNum",
        "optional": false,
        "typeAnnotation": null,
        "start": 128,
        "end": 137
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "Identifier",
            "decorators": [],
            "name": "strAndNum",
            "optional": false,
            "typeAnnotation": null,
            "start": 167,
            "end": 176
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 186,
              "end": 192
            }
          ],
          "start": 162,
          "end": 192
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Identifier",
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": null,
            "start": 223,
            "end": 226
          },
          "consequent": [],
          "start": 218,
          "end": 227
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Identifier",
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": null,
            "start": 237,
            "end": 240
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 250,
              "end": 256
            }
          ],
          "start": 232,
          "end": 256
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Identifier",
            "decorators": [],
            "name": "numAndBool",
            "optional": false,
            "typeAnnotation": null,
            "start": 298,
            "end": 308
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 318,
              "end": 324
            }
          ],
          "start": 293,
          "end": 324
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Identifier",
            "decorators": [],
            "name": "bool",
            "optional": false,
            "typeAnnotation": null,
            "start": 354,
            "end": 358
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 368,
              "end": 374
            }
          ],
          "start": 349,
          "end": 374
        }
      ],
      "start": 120,
      "end": 376
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 376
}
```
