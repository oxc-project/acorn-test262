__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 376,
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
            "name": "strAndNum",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 30,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 15,
                "end": 30,
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
      "start": 32,
      "end": 65,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 36,
          "end": 64,
          "id": {
            "type": "Identifier",
            "start": 36,
            "end": 64,
            "name": "numAndBool",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 46,
              "end": 64,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 48,
                "end": 64,
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
      "start": 66,
      "end": 82,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 70,
          "end": 81,
          "id": {
            "type": "Identifier",
            "start": 70,
            "end": 81,
            "name": "str",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 73,
              "end": 81,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 75,
                "end": 81
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
      "start": 83,
      "end": 99,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 87,
          "end": 98,
          "id": {
            "type": "Identifier",
            "start": 87,
            "end": 98,
            "name": "num",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 90,
              "end": 98,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 92,
                "end": 98
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
      "start": 100,
      "end": 118,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 104,
          "end": 117,
          "id": {
            "type": "Identifier",
            "start": 104,
            "end": 117,
            "name": "bool",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 108,
              "end": 117,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 110,
                "end": 117
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
      "start": 120,
      "end": 376,
      "discriminant": {
        "type": "Identifier",
        "start": 128,
        "end": 137,
        "name": "strAndNum",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "cases": [
        {
          "type": "SwitchCase",
          "start": 162,
          "end": 192,
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 186,
              "end": 192,
              "label": null
            }
          ],
          "test": {
            "type": "Identifier",
            "start": 167,
            "end": 176,
            "name": "strAndNum",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        {
          "type": "SwitchCase",
          "start": 218,
          "end": 227,
          "consequent": [],
          "test": {
            "type": "Identifier",
            "start": 223,
            "end": 226,
            "name": "str",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        {
          "type": "SwitchCase",
          "start": 232,
          "end": 256,
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 250,
              "end": 256,
              "label": null
            }
          ],
          "test": {
            "type": "Identifier",
            "start": 237,
            "end": 240,
            "name": "num",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        {
          "type": "SwitchCase",
          "start": 293,
          "end": 324,
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 318,
              "end": 324,
              "label": null
            }
          ],
          "test": {
            "type": "Identifier",
            "start": 298,
            "end": 308,
            "name": "numAndBool",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        {
          "type": "SwitchCase",
          "start": 349,
          "end": 374,
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 368,
              "end": 374,
              "label": null
            }
          ],
          "test": {
            "type": "Identifier",
            "start": 354,
            "end": 358,
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
