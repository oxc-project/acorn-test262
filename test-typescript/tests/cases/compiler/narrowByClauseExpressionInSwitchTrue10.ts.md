__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 978,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 553,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 45,
        "end": 553,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 51,
            "end": 484,
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
                    "directive": null,
                    "expression": {
                      "type": "Identifier",
                      "start": 108,
                      "end": 113,
                      "decorators": [],
                      "name": "cond1",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 157,
                    "end": 163,
                    "directive": null,
                    "expression": {
                      "type": "Identifier",
                      "start": 157,
                      "end": 162,
                      "decorators": [],
                      "name": "cond2",
                      "optional": false,
                      "typeAnnotation": null
                    }
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
                  "operator": "||",
                  "left": {
                    "type": "Identifier",
                    "start": 80,
                    "end": 85,
                    "decorators": [],
                    "name": "cond1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 89,
                    "end": 94,
                    "decorators": [],
                    "name": "cond2",
                    "optional": false,
                    "typeAnnotation": null
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
                    "directive": null,
                    "expression": {
                      "type": "Identifier",
                      "start": 246,
                      "end": 251,
                      "decorators": [],
                      "name": "cond1",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 293,
                    "end": 299,
                    "directive": null,
                    "expression": {
                      "type": "Identifier",
                      "start": 293,
                      "end": 298,
                      "decorators": [],
                      "name": "cond2",
                      "optional": false,
                      "typeAnnotation": null
                    }
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
                  "decorators": [],
                  "name": "cond2",
                  "optional": false,
                  "typeAnnotation": null
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
                    "directive": null,
                    "expression": {
                      "type": "Identifier",
                      "start": 378,
                      "end": 383,
                      "decorators": [],
                      "name": "cond1",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 425,
                    "end": 431,
                    "directive": null,
                    "expression": {
                      "type": "Identifier",
                      "start": 425,
                      "end": 430,
                      "decorators": [],
                      "name": "cond2",
                      "optional": false,
                      "typeAnnotation": null
                    }
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
            ],
            "discriminant": {
              "type": "Literal",
              "start": 59,
              "end": 63,
              "raw": "true",
              "value": true,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 490,
            "end": 496,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 490,
              "end": 495,
              "decorators": [],
              "name": "cond1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 523,
            "end": 529,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 523,
              "end": 528,
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
    },
    {
      "type": "FunctionDeclaration",
      "start": 555,
      "end": 978,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 601,
        "end": 978,
        "body": [
          {
            "type": "IfStatement",
            "start": 607,
            "end": 909,
            "alternate": {
              "type": "IfStatement",
              "start": 722,
              "end": 909,
              "alternate": {
                "type": "BlockStatement",
                "start": 824,
                "end": 909,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 834,
                    "end": 840,
                    "directive": null,
                    "expression": {
                      "type": "Identifier",
                      "start": 834,
                      "end": 839,
                      "decorators": [],
                      "name": "cond1",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 873,
                    "end": 879,
                    "directive": null,
                    "expression": {
                      "type": "Identifier",
                      "start": 873,
                      "end": 878,
                      "decorators": [],
                      "name": "cond2",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
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
                    "directive": null,
                    "expression": {
                      "type": "Identifier",
                      "start": 743,
                      "end": 748,
                      "decorators": [],
                      "name": "cond1",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 782,
                    "end": 788,
                    "directive": null,
                    "expression": {
                      "type": "Identifier",
                      "start": 782,
                      "end": 787,
                      "decorators": [],
                      "name": "cond2",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "test": {
                "type": "Identifier",
                "start": 726,
                "end": 731,
                "decorators": [],
                "name": "cond2",
                "optional": false,
                "typeAnnotation": null
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
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 637,
                    "end": 642,
                    "decorators": [],
                    "name": "cond1",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 678,
                  "end": 684,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 678,
                    "end": 683,
                    "decorators": [],
                    "name": "cond2",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "LogicalExpression",
              "start": 611,
              "end": 625,
              "operator": "||",
              "left": {
                "type": "Identifier",
                "start": 611,
                "end": 616,
                "decorators": [],
                "name": "cond1",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 620,
                "end": 625,
                "decorators": [],
                "name": "cond2",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 915,
            "end": 921,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 915,
              "end": 920,
              "decorators": [],
              "name": "cond1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 948,
            "end": 954,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 948,
              "end": 953,
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
        "start": 564,
        "end": 568,
        "decorators": [],
        "name": "blah",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 569,
          "end": 583,
          "decorators": [],
          "name": "cond1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 574,
            "end": 583,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 576,
              "end": 583
            }
          }
        },
        {
          "type": "Identifier",
          "start": 585,
          "end": 599,
          "decorators": [],
          "name": "cond2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 590,
            "end": 599,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 592,
              "end": 599
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
