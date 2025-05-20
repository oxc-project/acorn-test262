__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 622,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 622,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 45,
        "end": 622,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 51,
            "end": 533,
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
                    "directive": null,
                    "expression": {
                      "type": "Identifier",
                      "start": 99,
                      "end": 104,
                      "decorators": [],
                      "name": "cond1",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 155,
                    "end": 161,
                    "directive": null,
                    "expression": {
                      "type": "Identifier",
                      "start": 155,
                      "end": 160,
                      "decorators": [],
                      "name": "cond2",
                      "optional": false,
                      "typeAnnotation": null
                    }
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
                  "decorators": [],
                  "name": "cond1",
                  "optional": false,
                  "typeAnnotation": null
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
                    "directive": null,
                    "expression": {
                      "type": "Identifier",
                      "start": 254,
                      "end": 259,
                      "decorators": [],
                      "name": "cond1",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 312,
                    "end": 318,
                    "directive": null,
                    "expression": {
                      "type": "Identifier",
                      "start": 312,
                      "end": 317,
                      "decorators": [],
                      "name": "cond2",
                      "optional": false,
                      "typeAnnotation": null
                    }
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
                  "decorators": [],
                  "name": "cond2",
                  "optional": false,
                  "typeAnnotation": null
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
                    "directive": null,
                    "expression": {
                      "type": "Identifier",
                      "start": 405,
                      "end": 410,
                      "decorators": [],
                      "name": "cond1",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 463,
                    "end": 469,
                    "directive": null,
                    "expression": {
                      "type": "Identifier",
                      "start": 463,
                      "end": 468,
                      "decorators": [],
                      "name": "cond2",
                      "optional": false,
                      "typeAnnotation": null
                    }
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
            ],
            "discriminant": {
              "type": "Literal",
              "start": 59,
              "end": 63,
              "raw": "true",
              "value": true
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 539,
            "end": 545,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 539,
              "end": 544,
              "decorators": [],
              "name": "cond1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 582,
            "end": 588,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 582,
              "end": 587,
              "decorators": [],
              "name": "cond2",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 27,
          "decorators": [],
          "name": "cond1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 18,
            "end": 27,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 20,
              "end": 27
            }
          }
        },
        {
          "type": "Identifier",
          "start": 29,
          "end": 43,
          "decorators": [],
          "name": "cond2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 34,
            "end": 43,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 36,
              "end": 43
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
