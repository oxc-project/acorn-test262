__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "l0",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 11
      },
      "body": {
        "type": "ForOfStatement",
        "await": false,
        "left": {
          "type": "VariableDeclaration",
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 22,
                "end": 23
              },
              "init": null,
              "definite": false,
              "start": 22,
              "end": 23
            }
          ],
          "declare": false,
          "start": 18,
          "end": 23
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [],
          "start": 27,
          "end": 29
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 58,
                        "end": 59
                      },
                      "start": 51,
                      "end": 59
                    }
                  ],
                  "start": 49,
                  "end": 60
                },
                "expression": false,
                "start": 38,
                "end": 60
              },
              "directive": null,
              "start": 37,
              "end": 62
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 74,
                  "end": 75
                },
                "id": null,
                "generator": false,
                "start": 68,
                "end": 75
              },
              "directive": null,
              "start": 67,
              "end": 77
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 86,
                  "end": 87
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 91,
                  "end": 92
                },
                "start": 86,
                "end": 92
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 104,
                    "end": 110
                  }
                ],
                "start": 94,
                "end": 116
              },
              "alternate": null,
              "start": 82,
              "end": 116
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 125,
                  "end": 126
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 130,
                  "end": 131
                },
                "start": 125,
                "end": 131
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l0",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 149,
                      "end": 151
                    },
                    "start": 143,
                    "end": 152
                  }
                ],
                "start": 133,
                "end": 158
              },
              "alternate": null,
              "start": 121,
              "end": 158
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 167,
                  "end": 168
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 172,
                  "end": 173
                },
                "start": 167,
                "end": 173
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": null,
                    "start": 185,
                    "end": 194
                  }
                ],
                "start": 175,
                "end": 200
              },
              "alternate": null,
              "start": 163,
              "end": 200
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 209,
                  "end": 210
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 214,
                  "end": 215
                },
                "start": 209,
                "end": 215
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l0",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 236,
                      "end": 238
                    },
                    "start": 227,
                    "end": 239
                  }
                ],
                "start": 217,
                "end": 245
              },
              "alternate": null,
              "start": 205,
              "end": 245
            }
          ],
          "start": 31,
          "end": 247
        },
        "start": 13,
        "end": 247
      },
      "start": 9,
      "end": 247
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "l00",
        "optional": false,
        "typeAnnotation": null,
        "start": 249,
        "end": 252
      },
      "body": {
        "type": "ForInStatement",
        "left": {
          "type": "VariableDeclaration",
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 263,
                "end": 264
              },
              "init": null,
              "definite": false,
              "start": 263,
              "end": 264
            }
          ],
          "declare": false,
          "start": 259,
          "end": 264
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [],
          "start": 268,
          "end": 270
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 299,
                        "end": 300
                      },
                      "start": 292,
                      "end": 300
                    }
                  ],
                  "start": 290,
                  "end": 301
                },
                "expression": false,
                "start": 279,
                "end": 301
              },
              "directive": null,
              "start": 278,
              "end": 303
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 315,
                  "end": 316
                },
                "id": null,
                "generator": false,
                "start": 309,
                "end": 316
              },
              "directive": null,
              "start": 308,
              "end": 318
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 327,
                  "end": 328
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": "1",
                  "raw": "\"1\"",
                  "start": 332,
                  "end": 335
                },
                "start": 327,
                "end": 335
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 347,
                    "end": 353
                  }
                ],
                "start": 337,
                "end": 359
              },
              "alternate": null,
              "start": 323,
              "end": 359
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 368,
                  "end": 369
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": "1",
                  "raw": "\"1\"",
                  "start": 373,
                  "end": 376
                },
                "start": 368,
                "end": 376
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l00",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 394,
                      "end": 397
                    },
                    "start": 388,
                    "end": 398
                  }
                ],
                "start": 378,
                "end": 404
              },
              "alternate": null,
              "start": 364,
              "end": 404
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 413,
                  "end": 414
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": "2",
                  "raw": "\"2\"",
                  "start": 418,
                  "end": 421
                },
                "start": 413,
                "end": 421
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": null,
                    "start": 433,
                    "end": 442
                  }
                ],
                "start": 423,
                "end": 448
              },
              "alternate": null,
              "start": 409,
              "end": 448
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 457,
                  "end": 458
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": "2",
                  "raw": "\"2\"",
                  "start": 462,
                  "end": 465
                },
                "start": 457,
                "end": 465
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l00",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 486,
                      "end": 489
                    },
                    "start": 477,
                    "end": 490
                  }
                ],
                "start": 467,
                "end": 496
              },
              "alternate": null,
              "start": 453,
              "end": 496
            }
          ],
          "start": 272,
          "end": 498
        },
        "start": 254,
        "end": 498
      },
      "start": 249,
      "end": 498
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "l1",
        "optional": false,
        "typeAnnotation": null,
        "start": 500,
        "end": 502
      },
      "body": {
        "type": "ForStatement",
        "init": {
          "type": "VariableDeclaration",
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 513,
                "end": 514
              },
              "init": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 517,
                "end": 518
              },
              "definite": false,
              "start": 513,
              "end": 518
            }
          ],
          "declare": false,
          "start": 509,
          "end": 518
        },
        "test": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 520,
            "end": 521
          },
          "operator": "<",
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 524,
            "end": 525
          },
          "start": 520,
          "end": 525
        },
        "update": {
          "type": "UpdateExpression",
          "operator": "++",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 529,
            "end": 530
          },
          "start": 527,
          "end": 530
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 559,
                        "end": 560
                      },
                      "start": 552,
                      "end": 560
                    }
                  ],
                  "start": 550,
                  "end": 561
                },
                "expression": false,
                "start": 539,
                "end": 561
              },
              "directive": null,
              "start": 538,
              "end": 563
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 575,
                  "end": 576
                },
                "id": null,
                "generator": false,
                "start": 569,
                "end": 576
              },
              "directive": null,
              "start": 568,
              "end": 578
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 587,
                  "end": 588
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 592,
                  "end": 593
                },
                "start": 587,
                "end": 593
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 605,
                    "end": 611
                  }
                ],
                "start": 595,
                "end": 617
              },
              "alternate": null,
              "start": 583,
              "end": 617
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 626,
                  "end": 627
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 631,
                  "end": 632
                },
                "start": 626,
                "end": 632
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 650,
                      "end": 652
                    },
                    "start": 644,
                    "end": 653
                  }
                ],
                "start": 634,
                "end": 659
              },
              "alternate": null,
              "start": 622,
              "end": 659
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 668,
                  "end": 669
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 673,
                  "end": 674
                },
                "start": 668,
                "end": 674
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": null,
                    "start": 686,
                    "end": 695
                  }
                ],
                "start": 676,
                "end": 701
              },
              "alternate": null,
              "start": 664,
              "end": 701
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 710,
                  "end": 711
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 715,
                  "end": 716
                },
                "start": 710,
                "end": 716
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 737,
                      "end": 739
                    },
                    "start": 728,
                    "end": 740
                  }
                ],
                "start": 718,
                "end": 746
              },
              "alternate": null,
              "start": 706,
              "end": 746
            }
          ],
          "start": 532,
          "end": 748
        },
        "start": 504,
        "end": 748
      },
      "start": 500,
      "end": 748
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "l2",
        "optional": false,
        "typeAnnotation": null,
        "start": 750,
        "end": 752
      },
      "body": {
        "type": "WhileStatement",
        "test": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 761,
            "end": 762
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 767,
            "end": 768
          },
          "start": 761,
          "end": 768
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 780,
                    "end": 781
                  },
                  "init": null,
                  "definite": false,
                  "start": 780,
                  "end": 781
                }
              ],
              "declare": false,
              "start": 776,
              "end": 782
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 808,
                        "end": 809
                      },
                      "start": 801,
                      "end": 809
                    }
                  ],
                  "start": 799,
                  "end": 810
                },
                "expression": false,
                "start": 788,
                "end": 810
              },
              "directive": null,
              "start": 787,
              "end": 812
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 824,
                  "end": 825
                },
                "id": null,
                "generator": false,
                "start": 818,
                "end": 825
              },
              "directive": null,
              "start": 817,
              "end": 827
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 836,
                  "end": 837
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 841,
                  "end": 842
                },
                "start": 836,
                "end": 842
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 854,
                    "end": 860
                  }
                ],
                "start": 844,
                "end": 866
              },
              "alternate": null,
              "start": 832,
              "end": 866
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 875,
                  "end": 876
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 880,
                  "end": 881
                },
                "start": 875,
                "end": 881
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 899,
                      "end": 901
                    },
                    "start": 893,
                    "end": 902
                  }
                ],
                "start": 883,
                "end": 908
              },
              "alternate": null,
              "start": 871,
              "end": 908
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 917,
                  "end": 918
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 922,
                  "end": 923
                },
                "start": 917,
                "end": 923
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": null,
                    "start": 935,
                    "end": 944
                  }
                ],
                "start": 925,
                "end": 950
              },
              "alternate": null,
              "start": 913,
              "end": 950
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 959,
                  "end": 960
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 964,
                  "end": 965
                },
                "start": 959,
                "end": 965
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 986,
                      "end": 988
                    },
                    "start": 977,
                    "end": 989
                  }
                ],
                "start": 967,
                "end": 995
              },
              "alternate": null,
              "start": 955,
              "end": 995
            }
          ],
          "start": 770,
          "end": 997
        },
        "start": 754,
        "end": 997
      },
      "start": 750,
      "end": 997
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "l3",
        "optional": false,
        "typeAnnotation": null,
        "start": 999,
        "end": 1001
      },
      "body": {
        "type": "DoWhileStatement",
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1016,
                    "end": 1017
                  },
                  "init": null,
                  "definite": false,
                  "start": 1016,
                  "end": 1017
                }
              ],
              "declare": false,
              "start": 1012,
              "end": 1018
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1044,
                        "end": 1045
                      },
                      "start": 1037,
                      "end": 1045
                    }
                  ],
                  "start": 1035,
                  "end": 1046
                },
                "expression": false,
                "start": 1024,
                "end": 1046
              },
              "directive": null,
              "start": 1023,
              "end": 1048
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1060,
                  "end": 1061
                },
                "id": null,
                "generator": false,
                "start": 1054,
                "end": 1061
              },
              "directive": null,
              "start": 1053,
              "end": 1063
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1072,
                  "end": 1073
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1077,
                  "end": 1078
                },
                "start": 1072,
                "end": 1078
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 1090,
                    "end": 1096
                  }
                ],
                "start": 1080,
                "end": 1102
              },
              "alternate": null,
              "start": 1068,
              "end": 1102
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1111,
                  "end": 1112
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1116,
                  "end": 1117
                },
                "start": 1111,
                "end": 1117
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1135,
                      "end": 1137
                    },
                    "start": 1129,
                    "end": 1138
                  }
                ],
                "start": 1119,
                "end": 1144
              },
              "alternate": null,
              "start": 1107,
              "end": 1144
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1153,
                  "end": 1154
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1158,
                  "end": 1159
                },
                "start": 1153,
                "end": 1159
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": null,
                    "start": 1171,
                    "end": 1180
                  }
                ],
                "start": 1161,
                "end": 1186
              },
              "alternate": null,
              "start": 1149,
              "end": 1186
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1195,
                  "end": 1196
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1200,
                  "end": 1201
                },
                "start": 1195,
                "end": 1201
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1222,
                      "end": 1224
                    },
                    "start": 1213,
                    "end": 1225
                  }
                ],
                "start": 1203,
                "end": 1231
              },
              "alternate": null,
              "start": 1191,
              "end": 1231
            }
          ],
          "start": 1006,
          "end": 1233
        },
        "test": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1241,
            "end": 1242
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1247,
            "end": 1248
          },
          "start": 1241,
          "end": 1248
        },
        "start": 1003,
        "end": 1249
      },
      "start": 999,
      "end": 1249
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "l4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1251,
        "end": 1253
      },
      "body": {
        "type": "ForStatement",
        "init": {
          "type": "VariableDeclaration",
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1264,
                "end": 1265
              },
              "init": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1268,
                "end": 1269
              },
              "definite": false,
              "start": 1264,
              "end": 1269
            }
          ],
          "declare": false,
          "start": 1260,
          "end": 1269
        },
        "test": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 1271,
            "end": 1272
          },
          "operator": "<",
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1275,
            "end": 1276
          },
          "start": 1271,
          "end": 1276
        },
        "update": {
          "type": "UpdateExpression",
          "operator": "++",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 1280,
            "end": 1281
          },
          "start": 1278,
          "end": 1281
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1293,
                    "end": 1294
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1297,
                    "end": 1298
                  },
                  "definite": false,
                  "start": 1293,
                  "end": 1298
                }
              ],
              "declare": false,
              "start": 1289,
              "end": 1299
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1325,
                        "end": 1326
                      },
                      "start": 1318,
                      "end": 1326
                    }
                  ],
                  "start": 1316,
                  "end": 1327
                },
                "expression": false,
                "start": 1305,
                "end": 1327
              },
              "directive": null,
              "start": 1304,
              "end": 1329
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1341,
                  "end": 1342
                },
                "id": null,
                "generator": false,
                "start": 1335,
                "end": 1342
              },
              "directive": null,
              "start": 1334,
              "end": 1344
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1353,
                  "end": 1354
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1358,
                  "end": 1359
                },
                "start": 1353,
                "end": 1359
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 1371,
                    "end": 1377
                  }
                ],
                "start": 1361,
                "end": 1383
              },
              "alternate": null,
              "start": 1349,
              "end": 1383
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1392,
                  "end": 1393
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1397,
                  "end": 1398
                },
                "start": 1392,
                "end": 1398
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1416,
                      "end": 1418
                    },
                    "start": 1410,
                    "end": 1419
                  }
                ],
                "start": 1400,
                "end": 1425
              },
              "alternate": null,
              "start": 1388,
              "end": 1425
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1434,
                  "end": 1435
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1439,
                  "end": 1440
                },
                "start": 1434,
                "end": 1440
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": null,
                    "start": 1452,
                    "end": 1461
                  }
                ],
                "start": 1442,
                "end": 1467
              },
              "alternate": null,
              "start": 1430,
              "end": 1467
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1476,
                  "end": 1477
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1481,
                  "end": 1482
                },
                "start": 1476,
                "end": 1482
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1503,
                      "end": 1505
                    },
                    "start": 1494,
                    "end": 1506
                  }
                ],
                "start": 1484,
                "end": 1512
              },
              "alternate": null,
              "start": 1472,
              "end": 1512
            }
          ],
          "start": 1283,
          "end": 1514
        },
        "start": 1255,
        "end": 1514
      },
      "start": 1251,
      "end": 1514
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "l5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1516,
        "end": 1518
      },
      "body": {
        "type": "ForStatement",
        "init": {
          "type": "VariableDeclaration",
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1529,
                "end": 1530
              },
              "init": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1533,
                "end": 1534
              },
              "definite": false,
              "start": 1529,
              "end": 1534
            },
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1536,
                "end": 1537
              },
              "init": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1540,
                "end": 1541
              },
              "definite": false,
              "start": 1536,
              "end": 1541
            }
          ],
          "declare": false,
          "start": 1525,
          "end": 1541
        },
        "test": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 1543,
            "end": 1544
          },
          "operator": "<",
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1547,
            "end": 1548
          },
          "start": 1543,
          "end": 1548
        },
        "update": {
          "type": "UpdateExpression",
          "operator": "++",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 1552,
            "end": 1553
          },
          "start": 1550,
          "end": 1553
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1582,
                          "end": 1583
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1586,
                          "end": 1587
                        },
                        "start": 1582,
                        "end": 1587
                      },
                      "start": 1575,
                      "end": 1587
                    }
                  ],
                  "start": 1573,
                  "end": 1588
                },
                "expression": false,
                "start": 1562,
                "end": 1588
              },
              "directive": null,
              "start": 1561,
              "end": 1590
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1602,
                    "end": 1603
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1606,
                    "end": 1607
                  },
                  "start": 1602,
                  "end": 1607
                },
                "id": null,
                "generator": false,
                "start": 1596,
                "end": 1607
              },
              "directive": null,
              "start": 1595,
              "end": 1609
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1618,
                  "end": 1619
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1623,
                  "end": 1624
                },
                "start": 1618,
                "end": 1624
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 1636,
                    "end": 1642
                  }
                ],
                "start": 1626,
                "end": 1648
              },
              "alternate": null,
              "start": 1614,
              "end": 1648
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1657,
                  "end": 1658
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1662,
                  "end": 1663
                },
                "start": 1657,
                "end": 1663
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l5",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1681,
                      "end": 1683
                    },
                    "start": 1675,
                    "end": 1684
                  }
                ],
                "start": 1665,
                "end": 1690
              },
              "alternate": null,
              "start": 1653,
              "end": 1690
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1699,
                  "end": 1700
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1704,
                  "end": 1705
                },
                "start": 1699,
                "end": 1705
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": null,
                    "start": 1717,
                    "end": 1726
                  }
                ],
                "start": 1707,
                "end": 1732
              },
              "alternate": null,
              "start": 1695,
              "end": 1732
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1741,
                  "end": 1742
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1746,
                  "end": 1747
                },
                "start": 1741,
                "end": 1747
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l5",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1768,
                      "end": 1770
                    },
                    "start": 1759,
                    "end": 1771
                  }
                ],
                "start": 1749,
                "end": 1777
              },
              "alternate": null,
              "start": 1737,
              "end": 1777
            }
          ],
          "start": 1555,
          "end": 1779
        },
        "start": 1520,
        "end": 1779
      },
      "start": 1516,
      "end": 1779
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "l6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1781,
        "end": 1783
      },
      "body": {
        "type": "WhileStatement",
        "test": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1792,
            "end": 1793
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1798,
            "end": 1799
          },
          "start": 1792,
          "end": 1799
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1811,
                    "end": 1812
                  },
                  "init": null,
                  "definite": false,
                  "start": 1811,
                  "end": 1812
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1814,
                    "end": 1815
                  },
                  "init": null,
                  "definite": false,
                  "start": 1814,
                  "end": 1815
                }
              ],
              "declare": false,
              "start": 1807,
              "end": 1816
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1842,
                          "end": 1843
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1846,
                          "end": 1847
                        },
                        "start": 1842,
                        "end": 1847
                      },
                      "start": 1835,
                      "end": 1847
                    }
                  ],
                  "start": 1833,
                  "end": 1848
                },
                "expression": false,
                "start": 1822,
                "end": 1848
              },
              "directive": null,
              "start": 1821,
              "end": 1850
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1862,
                    "end": 1863
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1866,
                    "end": 1867
                  },
                  "start": 1862,
                  "end": 1867
                },
                "id": null,
                "generator": false,
                "start": 1856,
                "end": 1867
              },
              "directive": null,
              "start": 1855,
              "end": 1869
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1878,
                  "end": 1879
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1883,
                  "end": 1884
                },
                "start": 1878,
                "end": 1884
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 1896,
                    "end": 1902
                  }
                ],
                "start": 1886,
                "end": 1908
              },
              "alternate": null,
              "start": 1874,
              "end": 1908
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1917,
                  "end": 1918
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1922,
                  "end": 1923
                },
                "start": 1917,
                "end": 1923
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l6",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1941,
                      "end": 1943
                    },
                    "start": 1935,
                    "end": 1944
                  }
                ],
                "start": 1925,
                "end": 1950
              },
              "alternate": null,
              "start": 1913,
              "end": 1950
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1959,
                  "end": 1960
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1964,
                  "end": 1965
                },
                "start": 1959,
                "end": 1965
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": null,
                    "start": 1977,
                    "end": 1986
                  }
                ],
                "start": 1967,
                "end": 1992
              },
              "alternate": null,
              "start": 1955,
              "end": 1992
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2001,
                  "end": 2002
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 2006,
                  "end": 2007
                },
                "start": 2001,
                "end": 2007
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l6",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2028,
                      "end": 2030
                    },
                    "start": 2019,
                    "end": 2031
                  }
                ],
                "start": 2009,
                "end": 2037
              },
              "alternate": null,
              "start": 1997,
              "end": 2037
            }
          ],
          "start": 1801,
          "end": 2040
        },
        "start": 1785,
        "end": 2040
      },
      "start": 1781,
      "end": 2040
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "l7",
        "optional": false,
        "typeAnnotation": null,
        "start": 2042,
        "end": 2044
      },
      "body": {
        "type": "DoWhileStatement",
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2059,
                    "end": 2060
                  },
                  "init": null,
                  "definite": false,
                  "start": 2059,
                  "end": 2060
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2062,
                    "end": 2063
                  },
                  "init": null,
                  "definite": false,
                  "start": 2062,
                  "end": 2063
                }
              ],
              "declare": false,
              "start": 2055,
              "end": 2064
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2090,
                          "end": 2091
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2094,
                          "end": 2095
                        },
                        "start": 2090,
                        "end": 2095
                      },
                      "start": 2083,
                      "end": 2095
                    }
                  ],
                  "start": 2081,
                  "end": 2096
                },
                "expression": false,
                "start": 2070,
                "end": 2096
              },
              "directive": null,
              "start": 2069,
              "end": 2098
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2110,
                    "end": 2111
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2114,
                    "end": 2115
                  },
                  "start": 2110,
                  "end": 2115
                },
                "id": null,
                "generator": false,
                "start": 2104,
                "end": 2115
              },
              "directive": null,
              "start": 2103,
              "end": 2117
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2126,
                  "end": 2127
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2131,
                  "end": 2132
                },
                "start": 2126,
                "end": 2132
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 2144,
                    "end": 2150
                  }
                ],
                "start": 2134,
                "end": 2156
              },
              "alternate": null,
              "start": 2122,
              "end": 2156
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2165,
                  "end": 2166
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2170,
                  "end": 2171
                },
                "start": 2165,
                "end": 2171
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l7",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2189,
                      "end": 2191
                    },
                    "start": 2183,
                    "end": 2192
                  }
                ],
                "start": 2173,
                "end": 2198
              },
              "alternate": null,
              "start": 2161,
              "end": 2198
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2207,
                  "end": 2208
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 2212,
                  "end": 2213
                },
                "start": 2207,
                "end": 2213
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": null,
                    "start": 2225,
                    "end": 2234
                  }
                ],
                "start": 2215,
                "end": 2240
              },
              "alternate": null,
              "start": 2203,
              "end": 2240
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2249,
                  "end": 2250
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 2254,
                  "end": 2255
                },
                "start": 2249,
                "end": 2255
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l7",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2276,
                      "end": 2278
                    },
                    "start": 2267,
                    "end": 2279
                  }
                ],
                "start": 2257,
                "end": 2285
              },
              "alternate": null,
              "start": 2245,
              "end": 2285
            }
          ],
          "start": 2049,
          "end": 2287
        },
        "test": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 2295,
            "end": 2296
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 2301,
            "end": 2302
          },
          "start": 2295,
          "end": 2302
        },
        "start": 2046,
        "end": 2303
      },
      "start": 2042,
      "end": 2303
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "l8",
        "optional": false,
        "typeAnnotation": null,
        "start": 2305,
        "end": 2307
      },
      "body": {
        "type": "ForStatement",
        "init": {
          "type": "VariableDeclaration",
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 2318,
                "end": 2319
              },
              "init": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 2322,
                "end": 2323
              },
              "definite": false,
              "start": 2318,
              "end": 2323
            }
          ],
          "declare": false,
          "start": 2314,
          "end": 2323
        },
        "test": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 2325,
            "end": 2326
          },
          "operator": "<",
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 2329,
            "end": 2330
          },
          "start": 2325,
          "end": 2330
        },
        "update": {
          "type": "UpdateExpression",
          "operator": "++",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 2334,
            "end": 2335
          },
          "start": 2332,
          "end": 2335
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2347,
                    "end": 2348
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2351,
                    "end": 2352
                  },
                  "definite": false,
                  "start": 2347,
                  "end": 2352
                }
              ],
              "declare": false,
              "start": 2343,
              "end": 2353
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2379,
                          "end": 2380
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2383,
                          "end": 2384
                        },
                        "start": 2379,
                        "end": 2384
                      },
                      "start": 2372,
                      "end": 2384
                    }
                  ],
                  "start": 2370,
                  "end": 2385
                },
                "expression": false,
                "start": 2359,
                "end": 2385
              },
              "directive": null,
              "start": 2358,
              "end": 2387
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2399,
                    "end": 2400
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2403,
                    "end": 2404
                  },
                  "start": 2399,
                  "end": 2404
                },
                "id": null,
                "generator": false,
                "start": 2393,
                "end": 2404
              },
              "directive": null,
              "start": 2392,
              "end": 2406
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2415,
                  "end": 2416
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2420,
                  "end": 2421
                },
                "start": 2415,
                "end": 2421
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 2433,
                    "end": 2439
                  }
                ],
                "start": 2423,
                "end": 2445
              },
              "alternate": null,
              "start": 2411,
              "end": 2445
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2454,
                  "end": 2455
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2459,
                  "end": 2460
                },
                "start": 2454,
                "end": 2460
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l8",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2478,
                      "end": 2480
                    },
                    "start": 2472,
                    "end": 2481
                  }
                ],
                "start": 2462,
                "end": 2487
              },
              "alternate": null,
              "start": 2450,
              "end": 2487
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2496,
                  "end": 2497
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 2501,
                  "end": 2502
                },
                "start": 2496,
                "end": 2502
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": null,
                    "start": 2514,
                    "end": 2523
                  }
                ],
                "start": 2504,
                "end": 2529
              },
              "alternate": null,
              "start": 2492,
              "end": 2529
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2538,
                  "end": 2539
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 2543,
                  "end": 2544
                },
                "start": 2538,
                "end": 2544
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l8",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2565,
                      "end": 2567
                    },
                    "start": 2556,
                    "end": 2568
                  }
                ],
                "start": 2546,
                "end": 2574
              },
              "alternate": null,
              "start": 2534,
              "end": 2574
            }
          ],
          "start": 2337,
          "end": 2576
        },
        "start": 2309,
        "end": 2576
      },
      "start": 2305,
      "end": 2576
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "l0_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 2589,
        "end": 2593
      },
      "body": {
        "type": "ForOfStatement",
        "await": false,
        "left": {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2606,
                "end": 2607
              },
              "init": null,
              "definite": false,
              "start": 2606,
              "end": 2607
            }
          ],
          "declare": false,
          "start": 2600,
          "end": 2607
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [],
          "start": 2611,
          "end": 2613
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2642,
                        "end": 2643
                      },
                      "start": 2635,
                      "end": 2643
                    }
                  ],
                  "start": 2633,
                  "end": 2644
                },
                "expression": false,
                "start": 2622,
                "end": 2644
              },
              "directive": null,
              "start": 2621,
              "end": 2646
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2658,
                  "end": 2659
                },
                "id": null,
                "generator": false,
                "start": 2652,
                "end": 2659
              },
              "directive": null,
              "start": 2651,
              "end": 2661
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2670,
                  "end": 2671
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2675,
                  "end": 2676
                },
                "start": 2670,
                "end": 2676
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 2688,
                    "end": 2694
                  }
                ],
                "start": 2678,
                "end": 2700
              },
              "alternate": null,
              "start": 2666,
              "end": 2700
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2709,
                  "end": 2710
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2714,
                  "end": 2715
                },
                "start": 2709,
                "end": 2715
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l0_c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2733,
                      "end": 2737
                    },
                    "start": 2727,
                    "end": 2738
                  }
                ],
                "start": 2717,
                "end": 2744
              },
              "alternate": null,
              "start": 2705,
              "end": 2744
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2753,
                  "end": 2754
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 2758,
                  "end": 2759
                },
                "start": 2753,
                "end": 2759
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": null,
                    "start": 2771,
                    "end": 2780
                  }
                ],
                "start": 2761,
                "end": 2786
              },
              "alternate": null,
              "start": 2749,
              "end": 2786
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2795,
                  "end": 2796
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 2800,
                  "end": 2801
                },
                "start": 2795,
                "end": 2801
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l0_c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2822,
                      "end": 2826
                    },
                    "start": 2813,
                    "end": 2827
                  }
                ],
                "start": 2803,
                "end": 2833
              },
              "alternate": null,
              "start": 2791,
              "end": 2833
            }
          ],
          "start": 2615,
          "end": 2835
        },
        "start": 2595,
        "end": 2835
      },
      "start": 2589,
      "end": 2835
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "l00_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 2837,
        "end": 2842
      },
      "body": {
        "type": "ForInStatement",
        "left": {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2855,
                "end": 2856
              },
              "init": null,
              "definite": false,
              "start": 2855,
              "end": 2856
            }
          ],
          "declare": false,
          "start": 2849,
          "end": 2856
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [],
          "start": 2860,
          "end": 2862
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2891,
                        "end": 2892
                      },
                      "start": 2884,
                      "end": 2892
                    }
                  ],
                  "start": 2882,
                  "end": 2893
                },
                "expression": false,
                "start": 2871,
                "end": 2893
              },
              "directive": null,
              "start": 2870,
              "end": 2895
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2907,
                  "end": 2908
                },
                "id": null,
                "generator": false,
                "start": 2901,
                "end": 2908
              },
              "directive": null,
              "start": 2900,
              "end": 2910
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2919,
                  "end": 2920
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": "1",
                  "raw": "\"1\"",
                  "start": 2924,
                  "end": 2927
                },
                "start": 2919,
                "end": 2927
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 2939,
                    "end": 2945
                  }
                ],
                "start": 2929,
                "end": 2951
              },
              "alternate": null,
              "start": 2915,
              "end": 2951
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2960,
                  "end": 2961
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": "1",
                  "raw": "\"1\"",
                  "start": 2965,
                  "end": 2968
                },
                "start": 2960,
                "end": 2968
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l00_c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2986,
                      "end": 2991
                    },
                    "start": 2980,
                    "end": 2992
                  }
                ],
                "start": 2970,
                "end": 2998
              },
              "alternate": null,
              "start": 2956,
              "end": 2998
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3007,
                  "end": 3008
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": "2",
                  "raw": "\"2\"",
                  "start": 3012,
                  "end": 3015
                },
                "start": 3007,
                "end": 3015
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": null,
                    "start": 3027,
                    "end": 3036
                  }
                ],
                "start": 3017,
                "end": 3042
              },
              "alternate": null,
              "start": 3003,
              "end": 3042
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3051,
                  "end": 3052
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": "2",
                  "raw": "\"2\"",
                  "start": 3056,
                  "end": 3059
                },
                "start": 3051,
                "end": 3059
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l00_c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3080,
                      "end": 3085
                    },
                    "start": 3071,
                    "end": 3086
                  }
                ],
                "start": 3061,
                "end": 3092
              },
              "alternate": null,
              "start": 3047,
              "end": 3092
            }
          ],
          "start": 2864,
          "end": 3094
        },
        "start": 2844,
        "end": 3094
      },
      "start": 2837,
      "end": 3094
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "l1_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 3096,
        "end": 3100
      },
      "body": {
        "type": "ForStatement",
        "init": {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3113,
                "end": 3114
              },
              "init": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 3117,
                "end": 3118
              },
              "definite": false,
              "start": 3113,
              "end": 3118
            }
          ],
          "declare": false,
          "start": 3107,
          "end": 3118
        },
        "test": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 3120,
            "end": 3121
          },
          "operator": "<",
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 3124,
            "end": 3125
          },
          "start": 3120,
          "end": 3125
        },
        "update": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3155,
                        "end": 3156
                      },
                      "start": 3148,
                      "end": 3156
                    }
                  ],
                  "start": 3146,
                  "end": 3157
                },
                "expression": false,
                "start": 3135,
                "end": 3157
              },
              "directive": null,
              "start": 3134,
              "end": 3159
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3171,
                  "end": 3172
                },
                "id": null,
                "generator": false,
                "start": 3165,
                "end": 3172
              },
              "directive": null,
              "start": 3164,
              "end": 3174
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3183,
                  "end": 3184
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 3188,
                  "end": 3189
                },
                "start": 3183,
                "end": 3189
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 3201,
                    "end": 3207
                  }
                ],
                "start": 3191,
                "end": 3213
              },
              "alternate": null,
              "start": 3179,
              "end": 3213
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3222,
                  "end": 3223
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 3227,
                  "end": 3228
                },
                "start": 3222,
                "end": 3228
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l1_c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3246,
                      "end": 3250
                    },
                    "start": 3240,
                    "end": 3251
                  }
                ],
                "start": 3230,
                "end": 3257
              },
              "alternate": null,
              "start": 3218,
              "end": 3257
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3266,
                  "end": 3267
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 3271,
                  "end": 3272
                },
                "start": 3266,
                "end": 3272
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": null,
                    "start": 3284,
                    "end": 3293
                  }
                ],
                "start": 3274,
                "end": 3299
              },
              "alternate": null,
              "start": 3262,
              "end": 3299
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3308,
                  "end": 3309
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 3313,
                  "end": 3314
                },
                "start": 3308,
                "end": 3314
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l1_c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3335,
                      "end": 3339
                    },
                    "start": 3326,
                    "end": 3340
                  }
                ],
                "start": 3316,
                "end": 3346
              },
              "alternate": null,
              "start": 3304,
              "end": 3346
            }
          ],
          "start": 3128,
          "end": 3348
        },
        "start": 3102,
        "end": 3348
      },
      "start": 3096,
      "end": 3348
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "l2_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 3350,
        "end": 3354
      },
      "body": {
        "type": "WhileStatement",
        "test": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 3363,
            "end": 3364
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 3369,
            "end": 3370
          },
          "start": 3363,
          "end": 3370
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3384,
                    "end": 3385
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 3388,
                    "end": 3389
                  },
                  "definite": false,
                  "start": 3384,
                  "end": 3389
                }
              ],
              "declare": false,
              "start": 3378,
              "end": 3390
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3416,
                        "end": 3417
                      },
                      "start": 3409,
                      "end": 3417
                    }
                  ],
                  "start": 3407,
                  "end": 3418
                },
                "expression": false,
                "start": 3396,
                "end": 3418
              },
              "directive": null,
              "start": 3395,
              "end": 3420
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3432,
                  "end": 3433
                },
                "id": null,
                "generator": false,
                "start": 3426,
                "end": 3433
              },
              "directive": null,
              "start": 3425,
              "end": 3435
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3444,
                  "end": 3445
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 3449,
                  "end": 3450
                },
                "start": 3444,
                "end": 3450
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 3462,
                    "end": 3468
                  }
                ],
                "start": 3452,
                "end": 3474
              },
              "alternate": null,
              "start": 3440,
              "end": 3474
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3483,
                  "end": 3484
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 3488,
                  "end": 3489
                },
                "start": 3483,
                "end": 3489
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l2_c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3507,
                      "end": 3511
                    },
                    "start": 3501,
                    "end": 3512
                  }
                ],
                "start": 3491,
                "end": 3518
              },
              "alternate": null,
              "start": 3479,
              "end": 3518
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3527,
                  "end": 3528
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 3532,
                  "end": 3533
                },
                "start": 3527,
                "end": 3533
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": null,
                    "start": 3545,
                    "end": 3554
                  }
                ],
                "start": 3535,
                "end": 3560
              },
              "alternate": null,
              "start": 3523,
              "end": 3560
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3569,
                  "end": 3570
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 3574,
                  "end": 3575
                },
                "start": 3569,
                "end": 3575
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l2_c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3596,
                      "end": 3600
                    },
                    "start": 3587,
                    "end": 3601
                  }
                ],
                "start": 3577,
                "end": 3607
              },
              "alternate": null,
              "start": 3565,
              "end": 3607
            }
          ],
          "start": 3372,
          "end": 3609
        },
        "start": 3356,
        "end": 3609
      },
      "start": 3350,
      "end": 3609
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "l3_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 3611,
        "end": 3615
      },
      "body": {
        "type": "DoWhileStatement",
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3632,
                    "end": 3633
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 3636,
                    "end": 3637
                  },
                  "definite": false,
                  "start": 3632,
                  "end": 3637
                }
              ],
              "declare": false,
              "start": 3626,
              "end": 3638
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3664,
                        "end": 3665
                      },
                      "start": 3657,
                      "end": 3665
                    }
                  ],
                  "start": 3655,
                  "end": 3666
                },
                "expression": false,
                "start": 3644,
                "end": 3666
              },
              "directive": null,
              "start": 3643,
              "end": 3668
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3680,
                  "end": 3681
                },
                "id": null,
                "generator": false,
                "start": 3674,
                "end": 3681
              },
              "directive": null,
              "start": 3673,
              "end": 3683
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3692,
                  "end": 3693
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 3697,
                  "end": 3698
                },
                "start": 3692,
                "end": 3698
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 3710,
                    "end": 3716
                  }
                ],
                "start": 3700,
                "end": 3722
              },
              "alternate": null,
              "start": 3688,
              "end": 3722
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3731,
                  "end": 3732
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 3736,
                  "end": 3737
                },
                "start": 3731,
                "end": 3737
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l3_c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3755,
                      "end": 3759
                    },
                    "start": 3749,
                    "end": 3760
                  }
                ],
                "start": 3739,
                "end": 3766
              },
              "alternate": null,
              "start": 3727,
              "end": 3766
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3775,
                  "end": 3776
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 3780,
                  "end": 3781
                },
                "start": 3775,
                "end": 3781
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": null,
                    "start": 3793,
                    "end": 3802
                  }
                ],
                "start": 3783,
                "end": 3808
              },
              "alternate": null,
              "start": 3771,
              "end": 3808
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3817,
                  "end": 3818
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 3822,
                  "end": 3823
                },
                "start": 3817,
                "end": 3823
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l3_c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3844,
                      "end": 3848
                    },
                    "start": 3835,
                    "end": 3849
                  }
                ],
                "start": 3825,
                "end": 3855
              },
              "alternate": null,
              "start": 3813,
              "end": 3855
            }
          ],
          "start": 3620,
          "end": 3857
        },
        "test": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 3865,
            "end": 3866
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 3871,
            "end": 3872
          },
          "start": 3865,
          "end": 3872
        },
        "start": 3617,
        "end": 3873
      },
      "start": 3611,
      "end": 3873
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "l4_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 3875,
        "end": 3879
      },
      "body": {
        "type": "ForStatement",
        "init": {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 3892,
                "end": 3893
              },
              "init": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 3896,
                "end": 3897
              },
              "definite": false,
              "start": 3892,
              "end": 3897
            }
          ],
          "declare": false,
          "start": 3886,
          "end": 3897
        },
        "test": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 3899,
            "end": 3900
          },
          "operator": "<",
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 3903,
            "end": 3904
          },
          "start": 3899,
          "end": 3904
        },
        "update": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3919,
                    "end": 3920
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 3923,
                    "end": 3924
                  },
                  "definite": false,
                  "start": 3919,
                  "end": 3924
                }
              ],
              "declare": false,
              "start": 3913,
              "end": 3925
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3951,
                        "end": 3952
                      },
                      "start": 3944,
                      "end": 3952
                    }
                  ],
                  "start": 3942,
                  "end": 3953
                },
                "expression": false,
                "start": 3931,
                "end": 3953
              },
              "directive": null,
              "start": 3930,
              "end": 3955
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3967,
                  "end": 3968
                },
                "id": null,
                "generator": false,
                "start": 3961,
                "end": 3968
              },
              "directive": null,
              "start": 3960,
              "end": 3970
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3979,
                  "end": 3980
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 3984,
                  "end": 3985
                },
                "start": 3979,
                "end": 3985
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 3997,
                    "end": 4003
                  }
                ],
                "start": 3987,
                "end": 4009
              },
              "alternate": null,
              "start": 3975,
              "end": 4009
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4018,
                  "end": 4019
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 4023,
                  "end": 4024
                },
                "start": 4018,
                "end": 4024
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l4_c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4042,
                      "end": 4046
                    },
                    "start": 4036,
                    "end": 4047
                  }
                ],
                "start": 4026,
                "end": 4053
              },
              "alternate": null,
              "start": 4014,
              "end": 4053
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4062,
                  "end": 4063
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 4067,
                  "end": 4068
                },
                "start": 4062,
                "end": 4068
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": null,
                    "start": 4080,
                    "end": 4089
                  }
                ],
                "start": 4070,
                "end": 4095
              },
              "alternate": null,
              "start": 4058,
              "end": 4095
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4104,
                  "end": 4105
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 4109,
                  "end": 4110
                },
                "start": 4104,
                "end": 4110
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l4_c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4131,
                      "end": 4135
                    },
                    "start": 4122,
                    "end": 4136
                  }
                ],
                "start": 4112,
                "end": 4142
              },
              "alternate": null,
              "start": 4100,
              "end": 4142
            }
          ],
          "start": 3907,
          "end": 4144
        },
        "start": 3881,
        "end": 4144
      },
      "start": 3875,
      "end": 4144
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "l5_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 4146,
        "end": 4150
      },
      "body": {
        "type": "ForStatement",
        "init": {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 4163,
                "end": 4164
              },
              "init": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 4167,
                "end": 4168
              },
              "definite": false,
              "start": 4163,
              "end": 4168
            },
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 4170,
                "end": 4171
              },
              "init": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 4174,
                "end": 4175
              },
              "definite": false,
              "start": 4170,
              "end": 4175
            }
          ],
          "declare": false,
          "start": 4157,
          "end": 4175
        },
        "test": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 4177,
            "end": 4178
          },
          "operator": "<",
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 4181,
            "end": 4182
          },
          "start": 4177,
          "end": 4182
        },
        "update": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4212,
                          "end": 4213
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4216,
                          "end": 4217
                        },
                        "start": 4212,
                        "end": 4217
                      },
                      "start": 4205,
                      "end": 4217
                    }
                  ],
                  "start": 4203,
                  "end": 4218
                },
                "expression": false,
                "start": 4192,
                "end": 4218
              },
              "directive": null,
              "start": 4191,
              "end": 4220
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4232,
                    "end": 4233
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4236,
                    "end": 4237
                  },
                  "start": 4232,
                  "end": 4237
                },
                "id": null,
                "generator": false,
                "start": 4226,
                "end": 4237
              },
              "directive": null,
              "start": 4225,
              "end": 4239
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4248,
                  "end": 4249
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 4253,
                  "end": 4254
                },
                "start": 4248,
                "end": 4254
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 4266,
                    "end": 4272
                  }
                ],
                "start": 4256,
                "end": 4278
              },
              "alternate": null,
              "start": 4244,
              "end": 4278
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4287,
                  "end": 4288
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 4292,
                  "end": 4293
                },
                "start": 4287,
                "end": 4293
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l5_c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4311,
                      "end": 4315
                    },
                    "start": 4305,
                    "end": 4316
                  }
                ],
                "start": 4295,
                "end": 4322
              },
              "alternate": null,
              "start": 4283,
              "end": 4322
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4331,
                  "end": 4332
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 4336,
                  "end": 4337
                },
                "start": 4331,
                "end": 4337
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": null,
                    "start": 4349,
                    "end": 4358
                  }
                ],
                "start": 4339,
                "end": 4364
              },
              "alternate": null,
              "start": 4327,
              "end": 4364
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4373,
                  "end": 4374
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 4378,
                  "end": 4379
                },
                "start": 4373,
                "end": 4379
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l5_c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4400,
                      "end": 4404
                    },
                    "start": 4391,
                    "end": 4405
                  }
                ],
                "start": 4381,
                "end": 4411
              },
              "alternate": null,
              "start": 4369,
              "end": 4411
            }
          ],
          "start": 4185,
          "end": 4413
        },
        "start": 4152,
        "end": 4413
      },
      "start": 4146,
      "end": 4413
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "l6_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 4415,
        "end": 4419
      },
      "body": {
        "type": "WhileStatement",
        "test": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 4428,
            "end": 4429
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 4434,
            "end": 4435
          },
          "start": 4428,
          "end": 4435
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4449,
                    "end": 4450
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 4453,
                    "end": 4454
                  },
                  "definite": false,
                  "start": 4449,
                  "end": 4454
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4456,
                    "end": 4457
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 4460,
                    "end": 4461
                  },
                  "definite": false,
                  "start": 4456,
                  "end": 4461
                }
              ],
              "declare": false,
              "start": 4443,
              "end": 4462
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4488,
                          "end": 4489
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4492,
                          "end": 4493
                        },
                        "start": 4488,
                        "end": 4493
                      },
                      "start": 4481,
                      "end": 4493
                    }
                  ],
                  "start": 4479,
                  "end": 4494
                },
                "expression": false,
                "start": 4468,
                "end": 4494
              },
              "directive": null,
              "start": 4467,
              "end": 4496
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4508,
                    "end": 4509
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4512,
                    "end": 4513
                  },
                  "start": 4508,
                  "end": 4513
                },
                "id": null,
                "generator": false,
                "start": 4502,
                "end": 4513
              },
              "directive": null,
              "start": 4501,
              "end": 4515
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4524,
                  "end": 4525
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 4529,
                  "end": 4530
                },
                "start": 4524,
                "end": 4530
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 4542,
                    "end": 4548
                  }
                ],
                "start": 4532,
                "end": 4554
              },
              "alternate": null,
              "start": 4520,
              "end": 4554
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4563,
                  "end": 4564
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 4568,
                  "end": 4569
                },
                "start": 4563,
                "end": 4569
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l6_c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4587,
                      "end": 4591
                    },
                    "start": 4581,
                    "end": 4592
                  }
                ],
                "start": 4571,
                "end": 4598
              },
              "alternate": null,
              "start": 4559,
              "end": 4598
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4607,
                  "end": 4608
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 4612,
                  "end": 4613
                },
                "start": 4607,
                "end": 4613
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": null,
                    "start": 4625,
                    "end": 4634
                  }
                ],
                "start": 4615,
                "end": 4640
              },
              "alternate": null,
              "start": 4603,
              "end": 4640
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4649,
                  "end": 4650
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 4654,
                  "end": 4655
                },
                "start": 4649,
                "end": 4655
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l6_c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4676,
                      "end": 4680
                    },
                    "start": 4667,
                    "end": 4681
                  }
                ],
                "start": 4657,
                "end": 4687
              },
              "alternate": null,
              "start": 4645,
              "end": 4687
            }
          ],
          "start": 4437,
          "end": 4690
        },
        "start": 4421,
        "end": 4690
      },
      "start": 4415,
      "end": 4690
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "l7_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 4692,
        "end": 4696
      },
      "body": {
        "type": "DoWhileStatement",
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4713,
                    "end": 4714
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 4717,
                    "end": 4718
                  },
                  "definite": false,
                  "start": 4713,
                  "end": 4718
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4720,
                    "end": 4721
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 4724,
                    "end": 4725
                  },
                  "definite": false,
                  "start": 4720,
                  "end": 4725
                }
              ],
              "declare": false,
              "start": 4707,
              "end": 4726
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4752,
                          "end": 4753
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4756,
                          "end": 4757
                        },
                        "start": 4752,
                        "end": 4757
                      },
                      "start": 4745,
                      "end": 4757
                    }
                  ],
                  "start": 4743,
                  "end": 4758
                },
                "expression": false,
                "start": 4732,
                "end": 4758
              },
              "directive": null,
              "start": 4731,
              "end": 4760
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4772,
                    "end": 4773
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4776,
                    "end": 4777
                  },
                  "start": 4772,
                  "end": 4777
                },
                "id": null,
                "generator": false,
                "start": 4766,
                "end": 4777
              },
              "directive": null,
              "start": 4765,
              "end": 4779
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4788,
                  "end": 4789
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 4793,
                  "end": 4794
                },
                "start": 4788,
                "end": 4794
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 4806,
                    "end": 4812
                  }
                ],
                "start": 4796,
                "end": 4818
              },
              "alternate": null,
              "start": 4784,
              "end": 4818
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4827,
                  "end": 4828
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 4832,
                  "end": 4833
                },
                "start": 4827,
                "end": 4833
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l7_c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4851,
                      "end": 4855
                    },
                    "start": 4845,
                    "end": 4856
                  }
                ],
                "start": 4835,
                "end": 4862
              },
              "alternate": null,
              "start": 4823,
              "end": 4862
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4871,
                  "end": 4872
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 4876,
                  "end": 4877
                },
                "start": 4871,
                "end": 4877
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": null,
                    "start": 4889,
                    "end": 4898
                  }
                ],
                "start": 4879,
                "end": 4904
              },
              "alternate": null,
              "start": 4867,
              "end": 4904
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4913,
                  "end": 4914
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 4918,
                  "end": 4919
                },
                "start": 4913,
                "end": 4919
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l7_c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4940,
                      "end": 4944
                    },
                    "start": 4931,
                    "end": 4945
                  }
                ],
                "start": 4921,
                "end": 4951
              },
              "alternate": null,
              "start": 4909,
              "end": 4951
            }
          ],
          "start": 4701,
          "end": 4953
        },
        "test": {
          "type": "BinaryExpression",
          "left": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 4961,
            "end": 4962
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 4967,
            "end": 4968
          },
          "start": 4961,
          "end": 4968
        },
        "start": 4698,
        "end": 4969
      },
      "start": 4692,
      "end": 4969
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "l8_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 4971,
        "end": 4975
      },
      "body": {
        "type": "ForStatement",
        "init": {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 4988,
                "end": 4989
              },
              "init": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 4992,
                "end": 4993
              },
              "definite": false,
              "start": 4988,
              "end": 4993
            }
          ],
          "declare": false,
          "start": 4982,
          "end": 4993
        },
        "test": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 4995,
            "end": 4996
          },
          "operator": "<",
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 4999,
            "end": 5000
          },
          "start": 4995,
          "end": 5000
        },
        "update": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5015,
                    "end": 5016
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 5019,
                    "end": 5020
                  },
                  "definite": false,
                  "start": 5015,
                  "end": 5020
                }
              ],
              "declare": false,
              "start": 5009,
              "end": 5021
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5047,
                          "end": 5048
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5051,
                          "end": 5052
                        },
                        "start": 5047,
                        "end": 5052
                      },
                      "start": 5040,
                      "end": 5052
                    }
                  ],
                  "start": 5038,
                  "end": 5053
                },
                "expression": false,
                "start": 5027,
                "end": 5053
              },
              "directive": null,
              "start": 5026,
              "end": 5055
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5067,
                    "end": 5068
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5071,
                    "end": 5072
                  },
                  "start": 5067,
                  "end": 5072
                },
                "id": null,
                "generator": false,
                "start": 5061,
                "end": 5072
              },
              "directive": null,
              "start": 5060,
              "end": 5074
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5083,
                  "end": 5084
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 5088,
                  "end": 5089
                },
                "start": 5083,
                "end": 5089
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 5101,
                    "end": 5107
                  }
                ],
                "start": 5091,
                "end": 5113
              },
              "alternate": null,
              "start": 5079,
              "end": 5113
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5122,
                  "end": 5123
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 5127,
                  "end": 5128
                },
                "start": 5122,
                "end": 5128
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l8_c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5146,
                      "end": 5150
                    },
                    "start": 5140,
                    "end": 5151
                  }
                ],
                "start": 5130,
                "end": 5157
              },
              "alternate": null,
              "start": 5118,
              "end": 5157
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5166,
                  "end": 5167
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 5171,
                  "end": 5172
                },
                "start": 5166,
                "end": 5172
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": null,
                    "start": 5184,
                    "end": 5193
                  }
                ],
                "start": 5174,
                "end": 5199
              },
              "alternate": null,
              "start": 5162,
              "end": 5199
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5208,
                  "end": 5209
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 5213,
                  "end": 5214
                },
                "start": 5208,
                "end": 5214
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l8_c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5235,
                      "end": 5239
                    },
                    "start": 5226,
                    "end": 5240
                  }
                ],
                "start": 5216,
                "end": 5246
              },
              "alternate": null,
              "start": 5204,
              "end": 5246
            }
          ],
          "start": 5003,
          "end": 5248
        },
        "start": 4977,
        "end": 5248
      },
      "start": 4971,
      "end": 5248
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 9,
  "end": 5248
}
```
