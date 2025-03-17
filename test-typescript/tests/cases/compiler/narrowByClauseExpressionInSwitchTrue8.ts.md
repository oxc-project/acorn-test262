__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 623,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 622,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 27,
          "name": "cond1",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 18,
            "end": 27,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 20,
              "end": 27
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 29,
          "end": 43,
          "name": "cond2",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 34,
            "end": 43,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 36,
              "end": 43
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 45,
        "end": 622,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 51,
            "end": 533,
            "discriminant": {
              "type": "Literal",
              "start": 59,
              "end": 63,
              "value": true,
              "raw": "true"
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 75,
                "end": 220,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 99,
                    "end": 105,
                    "expression": {
                      "type": "Identifier",
                      "start": 99,
                      "end": 104,
                      "name": "cond1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 155,
                    "end": 161,
                    "expression": {
                      "type": "Identifier",
                      "start": 155,
                      "end": 160,
                      "name": "cond2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 214,
                    "end": 220,
                    "label": null
                  }
                ],
                "test": {
                  "type": "Identifier",
                  "start": 80,
                  "end": 85,
                  "name": "cond1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              {
                "type": "SwitchCase",
                "start": 230,
                "end": 374,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 254,
                    "end": 260,
                    "expression": {
                      "type": "Identifier",
                      "start": 254,
                      "end": 259,
                      "name": "cond1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 312,
                    "end": 318,
                    "expression": {
                      "type": "Identifier",
                      "start": 312,
                      "end": 317,
                      "name": "cond2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 368,
                    "end": 374,
                    "label": null
                  }
                ],
                "test": {
                  "type": "Identifier",
                  "start": 235,
                  "end": 240,
                  "name": "cond2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              {
                "type": "SwitchCase",
                "start": 384,
                "end": 527,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 405,
                    "end": 411,
                    "expression": {
                      "type": "Identifier",
                      "start": 405,
                      "end": 410,
                      "name": "cond1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 463,
                    "end": 469,
                    "expression": {
                      "type": "Identifier",
                      "start": 463,
                      "end": 468,
                      "name": "cond2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 521,
                    "end": 527,
                    "label": null
                  }
                ],
                "test": null
              }
            ]
          },
          {
            "type": "ExpressionStatement",
            "start": 539,
            "end": 545,
            "expression": {
              "type": "Identifier",
              "start": 539,
              "end": 544,
              "name": "cond1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 582,
            "end": 588,
            "expression": {
              "type": "Identifier",
              "start": 582,
              "end": 587,
              "name": "cond2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
