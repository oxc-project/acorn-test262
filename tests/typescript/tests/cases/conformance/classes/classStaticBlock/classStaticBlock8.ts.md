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
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 17,
              "end": 23
            },
            "start": 15,
            "end": 23
          },
          "start": 14,
          "end": 23
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "LabeledStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "label",
              "optional": false,
              "typeAnnotation": null,
              "start": 31,
              "end": 36
            },
            "body": {
              "type": "WhileStatement",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 45,
                "end": 46
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 64,
                      "end": 65
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [
                        {
                          "type": "StaticBlock",
                          "body": [
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "v",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 109,
                                  "end": 110
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1",
                                  "start": 115,
                                  "end": 116
                                },
                                "start": 109,
                                "end": 116
                              },
                              "consequent": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "BreakStatement",
                                    "label": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "label",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 146,
                                      "end": 151
                                    },
                                    "start": 140,
                                    "end": 152
                                  }
                                ],
                                "start": 118,
                                "end": 170
                              },
                              "alternate": null,
                              "start": 105,
                              "end": 170
                            },
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "v",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 191,
                                  "end": 192
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Literal",
                                  "value": 2,
                                  "raw": "2",
                                  "start": 197,
                                  "end": 198
                                },
                                "start": 191,
                                "end": 198
                              },
                              "consequent": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ContinueStatement",
                                    "label": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "label",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 231,
                                      "end": 236
                                    },
                                    "start": 222,
                                    "end": 237
                                  }
                                ],
                                "start": 200,
                                "end": 255
                              },
                              "alternate": null,
                              "start": 187,
                              "end": 255
                            },
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "v",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 276,
                                  "end": 277
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Literal",
                                  "value": 3,
                                  "raw": "3",
                                  "start": 282,
                                  "end": 283
                                },
                                "start": 276,
                                "end": 283
                              },
                              "consequent": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "BreakStatement",
                                    "label": null,
                                    "start": 307,
                                    "end": 312
                                  }
                                ],
                                "start": 285,
                                "end": 330
                              },
                              "alternate": null,
                              "start": 272,
                              "end": 330
                            },
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "v",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 351,
                                  "end": 352
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Literal",
                                  "value": 4,
                                  "raw": "4",
                                  "start": 357,
                                  "end": 358
                                },
                                "start": 351,
                                "end": 358
                              },
                              "consequent": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ContinueStatement",
                                    "label": null,
                                    "start": 382,
                                    "end": 390
                                  }
                                ],
                                "start": 360,
                                "end": 408
                              },
                              "alternate": null,
                              "start": 347,
                              "end": 408
                            }
                          ],
                          "start": 80,
                          "end": 422
                        }
                      ],
                      "start": 66,
                      "end": 432
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 58,
                    "end": 432
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 446,
                        "end": 447
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 452,
                        "end": 453
                      },
                      "start": 446,
                      "end": 453
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "BreakStatement",
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "label",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 475,
                            "end": 480
                          },
                          "start": 469,
                          "end": 481
                        }
                      ],
                      "start": 455,
                      "end": 491
                    },
                    "alternate": null,
                    "start": 442,
                    "end": 491
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 504,
                        "end": 505
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": 6,
                        "raw": "6",
                        "start": 510,
                        "end": 511
                      },
                      "start": 504,
                      "end": 511
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ContinueStatement",
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "label",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 536,
                            "end": 541
                          },
                          "start": 527,
                          "end": 542
                        }
                      ],
                      "start": 513,
                      "end": 552
                    },
                    "alternate": null,
                    "start": 500,
                    "end": 552
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 565,
                        "end": 566
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": 7,
                        "raw": "7",
                        "start": 571,
                        "end": 572
                      },
                      "start": 565,
                      "end": 572
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "BreakStatement",
                          "label": null,
                          "start": 588,
                          "end": 594
                        }
                      ],
                      "start": 574,
                      "end": 604
                    },
                    "alternate": null,
                    "start": 561,
                    "end": 604
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 617,
                        "end": 618
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": 8,
                        "raw": "8",
                        "start": 623,
                        "end": 624
                      },
                      "start": 617,
                      "end": 624
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ContinueStatement",
                          "label": null,
                          "start": 640,
                          "end": 649
                        }
                      ],
                      "start": 626,
                      "end": 659
                    },
                    "alternate": null,
                    "start": 613,
                    "end": 659
                  }
                ],
                "start": 48,
                "end": 665
              },
              "start": 38,
              "end": 665
            },
            "start": 31,
            "end": 665
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 677,
              "end": 678
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "StaticBlock",
                  "body": [
                    {
                      "type": "LabeledStatement",
                      "label": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "outer",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 710,
                        "end": 715
                      },
                      "body": {
                        "type": "BreakStatement",
                        "label": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "outer",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 723,
                          "end": 728
                        },
                        "start": 717,
                        "end": 729
                      },
                      "start": 710,
                      "end": 729
                    },
                    {
                      "type": "LabeledStatement",
                      "label": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "loop",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 751,
                        "end": 755
                      },
                      "body": {
                        "type": "WhileStatement",
                        "test": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 764,
                          "end": 765
                        },
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "v",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 789,
                                  "end": 790
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1",
                                  "start": 795,
                                  "end": 796
                                },
                                "start": 789,
                                "end": 796
                              },
                              "consequent": {
                                "type": "BreakStatement",
                                "label": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "loop",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 804,
                                  "end": 808
                                },
                                "start": 798,
                                "end": 809
                              },
                              "alternate": null,
                              "start": 785,
                              "end": 809
                            },
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "v",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 839,
                                  "end": 840
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Literal",
                                  "value": 2,
                                  "raw": "2",
                                  "start": 845,
                                  "end": 846
                                },
                                "start": 839,
                                "end": 846
                              },
                              "consequent": {
                                "type": "ContinueStatement",
                                "label": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "loop",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 857,
                                  "end": 861
                                },
                                "start": 848,
                                "end": 862
                              },
                              "alternate": null,
                              "start": 835,
                              "end": 862
                            },
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "v",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 892,
                                  "end": 893
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Literal",
                                  "value": 3,
                                  "raw": "3",
                                  "start": 898,
                                  "end": 899
                                },
                                "start": 892,
                                "end": 899
                              },
                              "consequent": {
                                "type": "BreakStatement",
                                "label": null,
                                "start": 901,
                                "end": 907
                              },
                              "alternate": null,
                              "start": 888,
                              "end": 907
                            },
                            {
                              "type": "IfStatement",
                              "test": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "v",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 937,
                                  "end": 938
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Literal",
                                  "value": 4,
                                  "raw": "4",
                                  "start": 943,
                                  "end": 944
                                },
                                "start": 937,
                                "end": 944
                              },
                              "consequent": {
                                "type": "ContinueStatement",
                                "label": null,
                                "start": 946,
                                "end": 955
                              },
                              "alternate": null,
                              "start": 933,
                              "end": 955
                            }
                          ],
                          "start": 767,
                          "end": 978
                        },
                        "start": 757,
                        "end": 978
                      },
                      "start": 751,
                      "end": 978
                    },
                    {
                      "type": "SwitchStatement",
                      "discriminant": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 999,
                        "end": 1000
                      },
                      "cases": [
                        {
                          "type": "SwitchCase",
                          "test": null,
                          "consequent": [
                            {
                              "type": "BreakStatement",
                              "label": null,
                              "start": 1029,
                              "end": 1035
                            }
                          ],
                          "start": 1020,
                          "end": 1035
                        }
                      ],
                      "start": 991,
                      "end": 1058
                    }
                  ],
                  "start": 689,
                  "end": 1068
                }
              ],
              "start": 679,
              "end": 1074
            },
            "abstract": false,
            "declare": false,
            "start": 671,
            "end": 1074
          }
        ],
        "start": 25,
        "end": 1076
      },
      "expression": false,
      "start": 0,
      "end": 1076
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1076
}
```
