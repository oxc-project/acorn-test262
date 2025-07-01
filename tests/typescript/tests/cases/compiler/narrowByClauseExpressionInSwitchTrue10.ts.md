__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 12
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cond1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 20,
              "end": 27
            },
            "start": 18,
            "end": 27
          },
          "start": 13,
          "end": 27
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cond2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 36,
              "end": 43
            },
            "start": 34,
            "end": 43
          },
          "start": 29,
          "end": 43
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 59,
              "end": 63
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cond1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 80,
                    "end": 85
                  },
                  "operator": "||",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cond2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 89,
                    "end": 94
                  },
                  "start": 80,
                  "end": 94
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cond1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 108,
                      "end": 113
                    },
                    "directive": null,
                    "start": 108,
                    "end": 114
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cond2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 157,
                      "end": 162
                    },
                    "directive": null,
                    "start": 157,
                    "end": 163
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 206,
                    "end": 212
                  }
                ],
                "start": 75,
                "end": 212
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cond2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 227,
                  "end": 232
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cond1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 246,
                      "end": 251
                    },
                    "directive": null,
                    "start": 246,
                    "end": 252
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cond2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 293,
                      "end": 298
                    },
                    "directive": null,
                    "start": 293,
                    "end": 299
                  },
                  {
                    "type": "EmptyStatement",
                    "start": 299,
                    "end": 300
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 341,
                    "end": 347
                  }
                ],
                "start": 222,
                "end": 347
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cond1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 378,
                      "end": 383
                    },
                    "directive": null,
                    "start": 378,
                    "end": 384
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cond2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 425,
                      "end": 430
                    },
                    "directive": null,
                    "start": 425,
                    "end": 431
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 472,
                    "end": 478
                  }
                ],
                "start": 357,
                "end": 478
              }
            ],
            "start": 51,
            "end": 484
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond1",
              "optional": false,
              "typeAnnotation": null,
              "start": 490,
              "end": 495
            },
            "directive": null,
            "start": 490,
            "end": 496
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond2",
              "optional": false,
              "typeAnnotation": null,
              "start": 523,
              "end": 528
            },
            "directive": null,
            "start": 523,
            "end": 529
          }
        ],
        "start": 45,
        "end": 553
      },
      "expression": false,
      "start": 0,
      "end": 553
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "blah",
        "optional": false,
        "typeAnnotation": null,
        "start": 564,
        "end": 568
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cond1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 576,
              "end": 583
            },
            "start": 574,
            "end": 583
          },
          "start": 569,
          "end": 583
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cond2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 592,
              "end": 599
            },
            "start": 590,
            "end": 599
          },
          "start": 585,
          "end": 599
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "cond1",
                "optional": false,
                "typeAnnotation": null,
                "start": 611,
                "end": 616
              },
              "operator": "||",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "cond2",
                "optional": false,
                "typeAnnotation": null,
                "start": 620,
                "end": 625
              },
              "start": 611,
              "end": 625
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cond1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 637,
                    "end": 642
                  },
                  "directive": null,
                  "start": 637,
                  "end": 643
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cond2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 678,
                    "end": 683
                  },
                  "directive": null,
                  "start": 678,
                  "end": 684
                }
              ],
              "start": 627,
              "end": 716
            },
            "alternate": {
              "type": "IfStatement",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "cond2",
                "optional": false,
                "typeAnnotation": null,
                "start": 726,
                "end": 731
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cond1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 743,
                      "end": 748
                    },
                    "directive": null,
                    "start": 743,
                    "end": 749
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cond2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 782,
                      "end": 787
                    },
                    "directive": null,
                    "start": 782,
                    "end": 788
                  }
                ],
                "start": 733,
                "end": 818
              },
              "alternate": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cond1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 834,
                      "end": 839
                    },
                    "directive": null,
                    "start": 834,
                    "end": 840
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cond2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 873,
                      "end": 878
                    },
                    "directive": null,
                    "start": 873,
                    "end": 879
                  }
                ],
                "start": 824,
                "end": 909
              },
              "start": 722,
              "end": 909
            },
            "start": 607,
            "end": 909
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond1",
              "optional": false,
              "typeAnnotation": null,
              "start": 915,
              "end": 920
            },
            "directive": null,
            "start": 915,
            "end": 921
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond2",
              "optional": false,
              "typeAnnotation": null,
              "start": 948,
              "end": 953
            },
            "directive": null,
            "start": 948,
            "end": 954
          }
        ],
        "start": 601,
        "end": 978
      },
      "expression": false,
      "start": 555,
      "end": 978
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 978
}
```
