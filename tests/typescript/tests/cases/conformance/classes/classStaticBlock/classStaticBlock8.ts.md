__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1076,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 1076,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 14,
          "end": 23,
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 15,
            "end": 23,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 17,
              "end": 23
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 25,
        "end": 1076,
        "body": [
          {
            "type": "LabeledStatement",
            "start": 31,
            "end": 665,
            "label": {
              "type": "Identifier",
              "start": 31,
              "end": 36,
              "decorators": [],
              "name": "label",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "WhileStatement",
              "start": 38,
              "end": 665,
              "test": {
                "type": "Identifier",
                "start": 45,
                "end": 46,
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "BlockStatement",
                "start": 48,
                "end": 665,
                "body": [
                  {
                    "type": "ClassDeclaration",
                    "start": 58,
                    "end": 432,
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "start": 64,
                      "end": 65,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "start": 66,
                      "end": 432,
                      "body": [
                        {
                          "type": "StaticBlock",
                          "start": 80,
                          "end": 422,
                          "body": [
                            {
                              "type": "IfStatement",
                              "start": 105,
                              "end": 170,
                              "test": {
                                "type": "BinaryExpression",
                                "start": 109,
                                "end": 116,
                                "left": {
                                  "type": "Identifier",
                                  "start": 109,
                                  "end": 110,
                                  "decorators": [],
                                  "name": "v",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Literal",
                                  "start": 115,
                                  "end": 116,
                                  "value": 1,
                                  "raw": "1"
                                }
                              },
                              "consequent": {
                                "type": "BlockStatement",
                                "start": 118,
                                "end": 170,
                                "body": [
                                  {
                                    "type": "BreakStatement",
                                    "start": 140,
                                    "end": 152,
                                    "label": {
                                      "type": "Identifier",
                                      "start": 146,
                                      "end": 151,
                                      "decorators": [],
                                      "name": "label",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                ]
                              },
                              "alternate": null
                            },
                            {
                              "type": "IfStatement",
                              "start": 187,
                              "end": 255,
                              "test": {
                                "type": "BinaryExpression",
                                "start": 191,
                                "end": 198,
                                "left": {
                                  "type": "Identifier",
                                  "start": 191,
                                  "end": 192,
                                  "decorators": [],
                                  "name": "v",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Literal",
                                  "start": 197,
                                  "end": 198,
                                  "value": 2,
                                  "raw": "2"
                                }
                              },
                              "consequent": {
                                "type": "BlockStatement",
                                "start": 200,
                                "end": 255,
                                "body": [
                                  {
                                    "type": "ContinueStatement",
                                    "start": 222,
                                    "end": 237,
                                    "label": {
                                      "type": "Identifier",
                                      "start": 231,
                                      "end": 236,
                                      "decorators": [],
                                      "name": "label",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                ]
                              },
                              "alternate": null
                            },
                            {
                              "type": "IfStatement",
                              "start": 272,
                              "end": 330,
                              "test": {
                                "type": "BinaryExpression",
                                "start": 276,
                                "end": 283,
                                "left": {
                                  "type": "Identifier",
                                  "start": 276,
                                  "end": 277,
                                  "decorators": [],
                                  "name": "v",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Literal",
                                  "start": 282,
                                  "end": 283,
                                  "value": 3,
                                  "raw": "3"
                                }
                              },
                              "consequent": {
                                "type": "BlockStatement",
                                "start": 285,
                                "end": 330,
                                "body": [
                                  {
                                    "type": "BreakStatement",
                                    "start": 307,
                                    "end": 312,
                                    "label": null
                                  }
                                ]
                              },
                              "alternate": null
                            },
                            {
                              "type": "IfStatement",
                              "start": 347,
                              "end": 408,
                              "test": {
                                "type": "BinaryExpression",
                                "start": 351,
                                "end": 358,
                                "left": {
                                  "type": "Identifier",
                                  "start": 351,
                                  "end": 352,
                                  "decorators": [],
                                  "name": "v",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Literal",
                                  "start": 357,
                                  "end": 358,
                                  "value": 4,
                                  "raw": "4"
                                }
                              },
                              "consequent": {
                                "type": "BlockStatement",
                                "start": 360,
                                "end": 408,
                                "body": [
                                  {
                                    "type": "ContinueStatement",
                                    "start": 382,
                                    "end": 390,
                                    "label": null
                                  }
                                ]
                              },
                              "alternate": null
                            }
                          ]
                        }
                      ]
                    },
                    "abstract": false,
                    "declare": false
                  },
                  {
                    "type": "IfStatement",
                    "start": 442,
                    "end": 491,
                    "test": {
                      "type": "BinaryExpression",
                      "start": 446,
                      "end": 453,
                      "left": {
                        "type": "Identifier",
                        "start": 446,
                        "end": 447,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "start": 452,
                        "end": 453,
                        "value": 5,
                        "raw": "5"
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 455,
                      "end": 491,
                      "body": [
                        {
                          "type": "BreakStatement",
                          "start": 469,
                          "end": 481,
                          "label": {
                            "type": "Identifier",
                            "start": 475,
                            "end": 480,
                            "decorators": [],
                            "name": "label",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "alternate": null
                  },
                  {
                    "type": "IfStatement",
                    "start": 500,
                    "end": 552,
                    "test": {
                      "type": "BinaryExpression",
                      "start": 504,
                      "end": 511,
                      "left": {
                        "type": "Identifier",
                        "start": 504,
                        "end": 505,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "start": 510,
                        "end": 511,
                        "value": 6,
                        "raw": "6"
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 513,
                      "end": 552,
                      "body": [
                        {
                          "type": "ContinueStatement",
                          "start": 527,
                          "end": 542,
                          "label": {
                            "type": "Identifier",
                            "start": 536,
                            "end": 541,
                            "decorators": [],
                            "name": "label",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "alternate": null
                  },
                  {
                    "type": "IfStatement",
                    "start": 561,
                    "end": 604,
                    "test": {
                      "type": "BinaryExpression",
                      "start": 565,
                      "end": 572,
                      "left": {
                        "type": "Identifier",
                        "start": 565,
                        "end": 566,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "start": 571,
                        "end": 572,
                        "value": 7,
                        "raw": "7"
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 574,
                      "end": 604,
                      "body": [
                        {
                          "type": "BreakStatement",
                          "start": 588,
                          "end": 594,
                          "label": null
                        }
                      ]
                    },
                    "alternate": null
                  },
                  {
                    "type": "IfStatement",
                    "start": 613,
                    "end": 659,
                    "test": {
                      "type": "BinaryExpression",
                      "start": 617,
                      "end": 624,
                      "left": {
                        "type": "Identifier",
                        "start": 617,
                        "end": 618,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "start": 623,
                        "end": 624,
                        "value": 8,
                        "raw": "8"
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 626,
                      "end": 659,
                      "body": [
                        {
                          "type": "ContinueStatement",
                          "start": 640,
                          "end": 649,
                          "label": null
                        }
                      ]
                    },
                    "alternate": null
                  }
                ]
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "start": 671,
            "end": 1074,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 677,
              "end": 678,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 679,
              "end": 1074,
              "body": [
                {
                  "type": "StaticBlock",
                  "start": 689,
                  "end": 1068,
                  "body": [
                    {
                      "type": "LabeledStatement",
                      "start": 710,
                      "end": 729,
                      "label": {
                        "type": "Identifier",
                        "start": 710,
                        "end": 715,
                        "decorators": [],
                        "name": "outer",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "body": {
                        "type": "BreakStatement",
                        "start": 717,
                        "end": 729,
                        "label": {
                          "type": "Identifier",
                          "start": 723,
                          "end": 728,
                          "decorators": [],
                          "name": "outer",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    {
                      "type": "LabeledStatement",
                      "start": 751,
                      "end": 978,
                      "label": {
                        "type": "Identifier",
                        "start": 751,
                        "end": 755,
                        "decorators": [],
                        "name": "loop",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "body": {
                        "type": "WhileStatement",
                        "start": 757,
                        "end": 978,
                        "test": {
                          "type": "Identifier",
                          "start": 764,
                          "end": 765,
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "body": {
                          "type": "BlockStatement",
                          "start": 767,
                          "end": 978,
                          "body": [
                            {
                              "type": "IfStatement",
                              "start": 785,
                              "end": 809,
                              "test": {
                                "type": "BinaryExpression",
                                "start": 789,
                                "end": 796,
                                "left": {
                                  "type": "Identifier",
                                  "start": 789,
                                  "end": 790,
                                  "decorators": [],
                                  "name": "v",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Literal",
                                  "start": 795,
                                  "end": 796,
                                  "value": 1,
                                  "raw": "1"
                                }
                              },
                              "consequent": {
                                "type": "BreakStatement",
                                "start": 798,
                                "end": 809,
                                "label": {
                                  "type": "Identifier",
                                  "start": 804,
                                  "end": 808,
                                  "decorators": [],
                                  "name": "loop",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "alternate": null
                            },
                            {
                              "type": "IfStatement",
                              "start": 835,
                              "end": 862,
                              "test": {
                                "type": "BinaryExpression",
                                "start": 839,
                                "end": 846,
                                "left": {
                                  "type": "Identifier",
                                  "start": 839,
                                  "end": 840,
                                  "decorators": [],
                                  "name": "v",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Literal",
                                  "start": 845,
                                  "end": 846,
                                  "value": 2,
                                  "raw": "2"
                                }
                              },
                              "consequent": {
                                "type": "ContinueStatement",
                                "start": 848,
                                "end": 862,
                                "label": {
                                  "type": "Identifier",
                                  "start": 857,
                                  "end": 861,
                                  "decorators": [],
                                  "name": "loop",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "alternate": null
                            },
                            {
                              "type": "IfStatement",
                              "start": 888,
                              "end": 907,
                              "test": {
                                "type": "BinaryExpression",
                                "start": 892,
                                "end": 899,
                                "left": {
                                  "type": "Identifier",
                                  "start": 892,
                                  "end": 893,
                                  "decorators": [],
                                  "name": "v",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Literal",
                                  "start": 898,
                                  "end": 899,
                                  "value": 3,
                                  "raw": "3"
                                }
                              },
                              "consequent": {
                                "type": "BreakStatement",
                                "start": 901,
                                "end": 907,
                                "label": null
                              },
                              "alternate": null
                            },
                            {
                              "type": "IfStatement",
                              "start": 933,
                              "end": 955,
                              "test": {
                                "type": "BinaryExpression",
                                "start": 937,
                                "end": 944,
                                "left": {
                                  "type": "Identifier",
                                  "start": 937,
                                  "end": 938,
                                  "decorators": [],
                                  "name": "v",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Literal",
                                  "start": 943,
                                  "end": 944,
                                  "value": 4,
                                  "raw": "4"
                                }
                              },
                              "consequent": {
                                "type": "ContinueStatement",
                                "start": 946,
                                "end": 955,
                                "label": null
                              },
                              "alternate": null
                            }
                          ]
                        }
                      }
                    },
                    {
                      "type": "SwitchStatement",
                      "start": 991,
                      "end": 1058,
                      "discriminant": {
                        "type": "Identifier",
                        "start": 999,
                        "end": 1000,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "cases": [
                        {
                          "type": "SwitchCase",
                          "start": 1020,
                          "end": 1035,
                          "test": null,
                          "consequent": [
                            {
                              "type": "BreakStatement",
                              "start": 1029,
                              "end": 1035,
                              "label": null
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "abstract": false,
            "declare": false
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
