__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 979,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 553,
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
        "end": 553,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 51,
            "end": 484,
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
                "end": 212,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 108,
                    "end": 114,
                    "expression": {
                      "type": "Identifier",
                      "start": 108,
                      "end": 113,
                      "name": "cond1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 157,
                    "end": 163,
                    "expression": {
                      "type": "Identifier",
                      "start": 157,
                      "end": 162,
                      "name": "cond2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 206,
                    "end": 212,
                    "label": null
                  }
                ],
                "test": {
                  "type": "LogicalExpression",
                  "start": 80,
                  "end": 94,
                  "left": {
                    "type": "Identifier",
                    "start": 80,
                    "end": 85,
                    "name": "cond1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "||",
                  "right": {
                    "type": "Identifier",
                    "start": 89,
                    "end": 94,
                    "name": "cond2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              },
              {
                "type": "SwitchCase",
                "start": 222,
                "end": 347,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 246,
                    "end": 252,
                    "expression": {
                      "type": "Identifier",
                      "start": 246,
                      "end": 251,
                      "name": "cond1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 293,
                    "end": 299,
                    "expression": {
                      "type": "Identifier",
                      "start": 293,
                      "end": 298,
                      "name": "cond2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "EmptyStatement",
                    "start": 299,
                    "end": 300
                  },
                  {
                    "type": "BreakStatement",
                    "start": 341,
                    "end": 347,
                    "label": null
                  }
                ],
                "test": {
                  "type": "Identifier",
                  "start": 227,
                  "end": 232,
                  "name": "cond2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              {
                "type": "SwitchCase",
                "start": 357,
                "end": 478,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 378,
                    "end": 384,
                    "expression": {
                      "type": "Identifier",
                      "start": 378,
                      "end": 383,
                      "name": "cond1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 425,
                    "end": 431,
                    "expression": {
                      "type": "Identifier",
                      "start": 425,
                      "end": 430,
                      "name": "cond2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 472,
                    "end": 478,
                    "label": null
                  }
                ],
                "test": null
              }
            ]
          },
          {
            "type": "ExpressionStatement",
            "start": 490,
            "end": 496,
            "expression": {
              "type": "Identifier",
              "start": 490,
              "end": 495,
              "name": "cond1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 523,
            "end": 529,
            "expression": {
              "type": "Identifier",
              "start": 523,
              "end": 528,
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
    },
    {
      "type": "FunctionDeclaration",
      "start": 555,
      "end": 978,
      "id": {
        "type": "Identifier",
        "start": 564,
        "end": 568,
        "name": "blah",
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
          "start": 569,
          "end": 583,
          "name": "cond1",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 574,
            "end": 583,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 576,
              "end": 583
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 585,
          "end": 599,
          "name": "cond2",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 590,
            "end": 599,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 592,
              "end": 599
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 601,
        "end": 978,
        "body": [
          {
            "type": "IfStatement",
            "start": 607,
            "end": 909,
            "test": {
              "type": "LogicalExpression",
              "start": 611,
              "end": 625,
              "left": {
                "type": "Identifier",
                "start": 611,
                "end": 616,
                "name": "cond1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "||",
              "right": {
                "type": "Identifier",
                "start": 620,
                "end": 625,
                "name": "cond2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 627,
              "end": 716,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 637,
                  "end": 643,
                  "expression": {
                    "type": "Identifier",
                    "start": 637,
                    "end": 642,
                    "name": "cond1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 678,
                  "end": 684,
                  "expression": {
                    "type": "Identifier",
                    "start": 678,
                    "end": 683,
                    "name": "cond2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "IfStatement",
              "start": 722,
              "end": 909,
              "test": {
                "type": "Identifier",
                "start": 726,
                "end": 731,
                "name": "cond2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "consequent": {
                "type": "BlockStatement",
                "start": 733,
                "end": 818,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 743,
                    "end": 749,
                    "expression": {
                      "type": "Identifier",
                      "start": 743,
                      "end": 748,
                      "name": "cond1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 782,
                    "end": 788,
                    "expression": {
                      "type": "Identifier",
                      "start": 782,
                      "end": 787,
                      "name": "cond2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "alternate": {
                "type": "BlockStatement",
                "start": 824,
                "end": 909,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 834,
                    "end": 840,
                    "expression": {
                      "type": "Identifier",
                      "start": 834,
                      "end": 839,
                      "name": "cond1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 873,
                    "end": 879,
                    "expression": {
                      "type": "Identifier",
                      "start": 873,
                      "end": 878,
                      "name": "cond2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 915,
            "end": 921,
            "expression": {
              "type": "Identifier",
              "start": 915,
              "end": 920,
              "name": "cond1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 948,
            "end": 954,
            "expression": {
              "type": "Identifier",
              "start": 948,
              "end": 953,
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
