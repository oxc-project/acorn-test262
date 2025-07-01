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
        "name": "f10",
        "optional": false,
        "typeAnnotation": null,
        "start": 58,
        "end": 61
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 65,
                  "end": 71
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 74,
                  "end": 80
                }
              ],
              "start": 65,
              "end": 80
            },
            "start": 63,
            "end": 80
          },
          "start": 62,
          "end": 80
        }
      ],
      "returnType": null,
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
                  "name": "isString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 94,
                  "end": 102
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 112,
                      "end": 113
                    },
                    "prefix": true,
                    "start": 105,
                    "end": 113
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 118,
                    "end": 126
                  },
                  "start": 105,
                  "end": 126
                },
                "definite": false,
                "start": 94,
                "end": 126
              }
            ],
            "declare": false,
            "start": 88,
            "end": 127
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "isString",
              "optional": false,
              "typeAnnotation": null,
              "start": 136,
              "end": 144
            },
            "consequent": {
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
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 163,
                            "end": 169
                          },
                          "start": 161,
                          "end": 169
                        },
                        "start": 160,
                        "end": 169
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 172,
                        "end": 173
                      },
                      "definite": false,
                      "start": 160,
                      "end": 173
                    }
                  ],
                  "declare": false,
                  "start": 156,
                  "end": 174
                }
              ],
              "start": 146,
              "end": 180
            },
            "alternate": {
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
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 207,
                            "end": 213
                          },
                          "start": 205,
                          "end": 213
                        },
                        "start": 204,
                        "end": 213
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 216,
                        "end": 217
                      },
                      "definite": false,
                      "start": 204,
                      "end": 217
                    }
                  ],
                  "declare": false,
                  "start": 200,
                  "end": 218
                }
              ],
              "start": 190,
              "end": 224
            },
            "start": 132,
            "end": 224
          }
        ],
        "start": 82,
        "end": 226
      },
      "expression": false,
      "start": 49,
      "end": 226
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null,
        "start": 237,
        "end": 240
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 244,
              "end": 251
            },
            "start": 242,
            "end": 251
          },
          "start": 241,
          "end": 251
        }
      ],
      "returnType": null,
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
                  "name": "isString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 265,
                  "end": 273
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 283,
                      "end": 284
                    },
                    "prefix": true,
                    "start": 276,
                    "end": 284
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 289,
                    "end": 297
                  },
                  "start": 276,
                  "end": 297
                },
                "definite": false,
                "start": 265,
                "end": 297
              }
            ],
            "declare": false,
            "start": 259,
            "end": 298
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "isString",
              "optional": false,
              "typeAnnotation": null,
              "start": 307,
              "end": 315
            },
            "consequent": {
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
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 334,
                            "end": 340
                          },
                          "start": 332,
                          "end": 340
                        },
                        "start": 331,
                        "end": 340
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 343,
                        "end": 344
                      },
                      "definite": false,
                      "start": 331,
                      "end": 344
                    }
                  ],
                  "declare": false,
                  "start": 327,
                  "end": 345
                }
              ],
              "start": 317,
              "end": 351
            },
            "alternate": null,
            "start": 303,
            "end": 351
          }
        ],
        "start": 253,
        "end": 353
      },
      "expression": false,
      "start": 228,
      "end": 353
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f12",
        "optional": false,
        "typeAnnotation": null,
        "start": 364,
        "end": 367
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 371,
                  "end": 377
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 380,
                  "end": 386
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 389,
                  "end": 396
                }
              ],
              "start": 371,
              "end": 396
            },
            "start": 369,
            "end": 396
          },
          "start": 368,
          "end": 396
        }
      ],
      "returnType": null,
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
                  "name": "isString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 410,
                  "end": 418
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 428,
                      "end": 429
                    },
                    "prefix": true,
                    "start": 421,
                    "end": 429
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 434,
                    "end": 442
                  },
                  "start": 421,
                  "end": 442
                },
                "definite": false,
                "start": 410,
                "end": 442
              }
            ],
            "declare": false,
            "start": 404,
            "end": 443
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isNumber",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 454,
                  "end": 462
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 472,
                      "end": 473
                    },
                    "prefix": true,
                    "start": 465,
                    "end": 473
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "number",
                    "raw": "\"number\"",
                    "start": 478,
                    "end": 486
                  },
                  "start": 465,
                  "end": 486
                },
                "definite": false,
                "start": 454,
                "end": 486
              }
            ],
            "declare": false,
            "start": 448,
            "end": 487
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "isString",
                "optional": false,
                "typeAnnotation": null,
                "start": 496,
                "end": 504
              },
              "operator": "||",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "isNumber",
                "optional": false,
                "typeAnnotation": null,
                "start": 508,
                "end": 516
              },
              "start": 496,
              "end": 516
            },
            "consequent": {
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
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSStringKeyword",
                                "start": 535,
                                "end": 541
                              },
                              {
                                "type": "TSNumberKeyword",
                                "start": 544,
                                "end": 550
                              }
                            ],
                            "start": 535,
                            "end": 550
                          },
                          "start": 533,
                          "end": 550
                        },
                        "start": 532,
                        "end": 550
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 553,
                        "end": 554
                      },
                      "definite": false,
                      "start": 532,
                      "end": 554
                    }
                  ],
                  "declare": false,
                  "start": 528,
                  "end": 555
                }
              ],
              "start": 518,
              "end": 561
            },
            "alternate": {
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
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 588,
                            "end": 595
                          },
                          "start": 586,
                          "end": 595
                        },
                        "start": 585,
                        "end": 595
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 598,
                        "end": 599
                      },
                      "definite": false,
                      "start": 585,
                      "end": 599
                    }
                  ],
                  "declare": false,
                  "start": 581,
                  "end": 600
                }
              ],
              "start": 571,
              "end": 606
            },
            "start": 492,
            "end": 606
          }
        ],
        "start": 398,
        "end": 608
      },
      "expression": false,
      "start": 355,
      "end": 608
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f13",
        "optional": false,
        "typeAnnotation": null,
        "start": 619,
        "end": 622
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 626,
                  "end": 632
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 635,
                  "end": 641
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 644,
                  "end": 651
                }
              ],
              "start": 626,
              "end": 651
            },
            "start": 624,
            "end": 651
          },
          "start": 623,
          "end": 651
        }
      ],
      "returnType": null,
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
                  "name": "isString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 665,
                  "end": 673
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 683,
                      "end": 684
                    },
                    "prefix": true,
                    "start": 676,
                    "end": 684
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "\"string\"",
                    "start": 689,
                    "end": 697
                  },
                  "start": 676,
                  "end": 697
                },
                "definite": false,
                "start": 665,
                "end": 697
              }
            ],
            "declare": false,
            "start": 659,
            "end": 698
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isNumber",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 709,
                  "end": 717
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 727,
                      "end": 728
                    },
                    "prefix": true,
                    "start": 720,
                    "end": 728
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "number",
                    "raw": "\"number\"",
                    "start": 733,
                    "end": 741
                  },
                  "start": 720,
                  "end": 741
                },
                "definite": false,
                "start": 709,
                "end": 741
              }
            ],
            "declare": false,
            "start": 703,
            "end": 742
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isStringOrNumber",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 753,
                  "end": 769
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isString",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 772,
                    "end": 780
                  },
                  "operator": "||",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isNumber",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 784,
                    "end": 792
                  },
                  "start": 772,
                  "end": 792
                },
                "definite": false,
                "start": 753,
                "end": 792
              }
            ],
            "declare": false,
            "start": 747,
            "end": 793
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "isStringOrNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 802,
              "end": 818
            },
            "consequent": {
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
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSStringKeyword",
                                "start": 837,
                                "end": 843
                              },
                              {
                                "type": "TSNumberKeyword",
                                "start": 846,
                                "end": 852
                              }
                            ],
                            "start": 837,
                            "end": 852
                          },
                          "start": 835,
                          "end": 852
                        },
                        "start": 834,
                        "end": 852
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 855,
                        "end": 856
                      },
                      "definite": false,
                      "start": 834,
                      "end": 856
                    }
                  ],
                  "declare": false,
                  "start": 830,
                  "end": 857
                }
              ],
              "start": 820,
              "end": 863
            },
            "alternate": {
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
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 890,
                            "end": 897
                          },
                          "start": 888,
                          "end": 897
                        },
                        "start": 887,
                        "end": 897
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 900,
                        "end": 901
                      },
                      "definite": false,
                      "start": 887,
                      "end": 901
                    }
                  ],
                  "declare": false,
                  "start": 883,
                  "end": 902
                }
              ],
              "start": 873,
              "end": 908
            },
            "start": 798,
            "end": 908
          }
        ],
        "start": 653,
        "end": 910
      },
      "expression": false,
      "start": 610,
      "end": 910
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f14",
        "optional": false,
        "typeAnnotation": null,
        "start": 921,
        "end": 924
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 928,
                  "end": 934
                },
                {
                  "type": "TSNullKeyword",
                  "start": 937,
                  "end": 941
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 944,
                  "end": 953
                }
              ],
              "start": 928,
              "end": 953
            },
            "start": 926,
            "end": 953
          },
          "start": 925,
          "end": 953
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSNumberKeyword",
              "start": 956,
              "end": 962
            },
            {
              "type": "TSNullKeyword",
              "start": 965,
              "end": 969
            }
          ],
          "start": 956,
          "end": 969
        },
        "start": 954,
        "end": 969
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
                  "name": "notUndefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 982,
                  "end": 994
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 997,
                    "end": 998
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1003,
                    "end": 1012
                  },
                  "start": 997,
                  "end": 1012
                },
                "definite": false,
                "start": 982,
                "end": 1012
              }
            ],
            "declare": false,
            "start": 976,
            "end": 1013
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "notUndefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1025,
                "end": 1037
              },
              "consequent": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1040,
                "end": 1041
              },
              "alternate": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1044,
                "end": 1045
              },
              "start": 1025,
              "end": 1045
            },
            "start": 1018,
            "end": 1046
          }
        ],
        "start": 970,
        "end": 1048
      },
      "expression": false,
      "start": 912,
      "end": 1048
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f15",
        "optional": false,
        "typeAnnotation": null,
        "start": 1059,
        "end": 1062
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": true,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1079,
                    "end": 1080
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1082,
                          "end": 1088
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1091,
                          "end": 1097
                        }
                      ],
                      "start": 1082,
                      "end": 1097
                    },
                    "start": 1080,
                    "end": 1097
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1070,
                  "end": 1097
                }
              ],
              "start": 1068,
              "end": 1099
            },
            "start": 1066,
            "end": 1099
          },
          "start": 1063,
          "end": 1099
        }
      ],
      "returnType": null,
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
                  "name": "isString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1113,
                  "end": 1121
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1131,
                        "end": 1134
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1135,
                        "end": 1136
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1131,
                      "end": 1136
                    },
                    "prefix": true,
                    "start": 1124,
                    "end": 1136
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "'string'",
                    "start": 1141,
                    "end": 1149
                  },
                  "start": 1124,
                  "end": 1149
                },
                "definite": false,
                "start": 1113,
                "end": 1149
              }
            ],
            "declare": false,
            "start": 1107,
            "end": 1150
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "isString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1159,
              "end": 1167
            },
            "consequent": {
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
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1186,
                            "end": 1192
                          },
                          "start": 1184,
                          "end": 1192
                        },
                        "start": 1183,
                        "end": 1192
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1195,
                          "end": 1198
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1199,
                          "end": 1200
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1195,
                        "end": 1200
                      },
                      "definite": false,
                      "start": 1183,
                      "end": 1200
                    }
                  ],
                  "declare": false,
                  "start": 1179,
                  "end": 1201
                }
              ],
              "start": 1169,
              "end": 1207
            },
            "alternate": null,
            "start": 1155,
            "end": 1207
          }
        ],
        "start": 1101,
        "end": 1209
      },
      "expression": false,
      "start": 1050,
      "end": 1209
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f16",
        "optional": false,
        "typeAnnotation": null,
        "start": 1220,
        "end": 1223
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": true,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1240,
                    "end": 1241
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1243,
                          "end": 1249
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1252,
                          "end": 1258
                        }
                      ],
                      "start": 1243,
                      "end": 1258
                    },
                    "start": 1241,
                    "end": 1258
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1231,
                  "end": 1258
                }
              ],
              "start": 1229,
              "end": 1260
            },
            "start": 1227,
            "end": 1260
          },
          "start": 1224,
          "end": 1260
        }
      ],
      "returnType": null,
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
                  "name": "isString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1274,
                  "end": 1282
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1292,
                        "end": 1295
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1296,
                        "end": 1297
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1292,
                      "end": 1297
                    },
                    "prefix": true,
                    "start": 1285,
                    "end": 1297
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "'string'",
                    "start": 1302,
                    "end": 1310
                  },
                  "start": 1285,
                  "end": 1310
                },
                "definite": false,
                "start": 1274,
                "end": 1310
              }
            ],
            "declare": false,
            "start": 1268,
            "end": 1311
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 1316,
                "end": 1319
              },
              "right": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1324,
                      "end": 1325
                    },
                    "value": {
                      "type": "Literal",
                      "value": 42,
                      "raw": "42",
                      "start": 1327,
                      "end": 1329
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1324,
                    "end": 1329
                  }
                ],
                "start": 1322,
                "end": 1331
              },
              "start": 1316,
              "end": 1331
            },
            "directive": null,
            "start": 1316,
            "end": 1332
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "isString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1341,
              "end": 1349
            },
            "consequent": {
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
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1368,
                            "end": 1374
                          },
                          "start": 1366,
                          "end": 1374
                        },
                        "start": 1365,
                        "end": 1374
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1377,
                          "end": 1380
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1381,
                          "end": 1382
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1377,
                        "end": 1382
                      },
                      "definite": false,
                      "start": 1365,
                      "end": 1382
                    }
                  ],
                  "declare": false,
                  "start": 1361,
                  "end": 1383
                }
              ],
              "start": 1351,
              "end": 1446
            },
            "alternate": null,
            "start": 1337,
            "end": 1446
          }
        ],
        "start": 1262,
        "end": 1448
      },
      "expression": false,
      "start": 1211,
      "end": 1448
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f17",
        "optional": false,
        "typeAnnotation": null,
        "start": 1459,
        "end": 1462
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 1478,
                        "end": 1484
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 1487,
                        "end": 1493
                      }
                    ],
                    "start": 1478,
                    "end": 1493
                  }
                ],
                "start": 1477,
                "end": 1494
              },
              "start": 1468,
              "end": 1494
            },
            "start": 1466,
            "end": 1494
          },
          "start": 1463,
          "end": 1494
        }
      ],
      "returnType": null,
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
                  "name": "isString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1508,
                  "end": 1516
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1526,
                        "end": 1529
                      },
                      "property": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1530,
                        "end": 1531
                      },
                      "optional": false,
                      "computed": true,
                      "start": 1526,
                      "end": 1532
                    },
                    "prefix": true,
                    "start": 1519,
                    "end": 1532
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "'string'",
                    "start": 1537,
                    "end": 1545
                  },
                  "start": 1519,
                  "end": 1545
                },
                "definite": false,
                "start": 1508,
                "end": 1545
              }
            ],
            "declare": false,
            "start": 1502,
            "end": 1546
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "isString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1555,
              "end": 1563
            },
            "consequent": {
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
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1582,
                            "end": 1588
                          },
                          "start": 1580,
                          "end": 1588
                        },
                        "start": 1579,
                        "end": 1588
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1591,
                          "end": 1594
                        },
                        "property": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 1595,
                          "end": 1596
                        },
                        "optional": false,
                        "computed": true,
                        "start": 1591,
                        "end": 1597
                      },
                      "definite": false,
                      "start": 1579,
                      "end": 1597
                    }
                  ],
                  "declare": false,
                  "start": 1575,
                  "end": 1598
                }
              ],
              "start": 1565,
              "end": 1604
            },
            "alternate": null,
            "start": 1551,
            "end": 1604
          }
        ],
        "start": 1496,
        "end": 1606
      },
      "expression": false,
      "start": 1450,
      "end": 1606
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f18",
        "optional": false,
        "typeAnnotation": null,
        "start": 1617,
        "end": 1620
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 1636,
                        "end": 1642
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 1645,
                        "end": 1651
                      }
                    ],
                    "start": 1636,
                    "end": 1651
                  }
                ],
                "start": 1635,
                "end": 1652
              },
              "start": 1626,
              "end": 1652
            },
            "start": 1624,
            "end": 1652
          },
          "start": 1621,
          "end": 1652
        }
      ],
      "returnType": null,
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
                  "name": "isString",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1666,
                  "end": 1674
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1684,
                        "end": 1687
                      },
                      "property": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1688,
                        "end": 1689
                      },
                      "optional": false,
                      "computed": true,
                      "start": 1684,
                      "end": 1690
                    },
                    "prefix": true,
                    "start": 1677,
                    "end": 1690
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "'string'",
                    "start": 1695,
                    "end": 1703
                  },
                  "start": 1677,
                  "end": 1703
                },
                "definite": false,
                "start": 1666,
                "end": 1703
              }
            ],
            "declare": false,
            "start": 1660,
            "end": 1704
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 1709,
                "end": 1712
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 42,
                    "raw": "42",
                    "start": 1716,
                    "end": 1718
                  }
                ],
                "start": 1715,
                "end": 1719
              },
              "start": 1709,
              "end": 1719
            },
            "directive": null,
            "start": 1709,
            "end": 1720
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "isString",
              "optional": false,
              "typeAnnotation": null,
              "start": 1729,
              "end": 1737
            },
            "consequent": {
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
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1756,
                            "end": 1762
                          },
                          "start": 1754,
                          "end": 1762
                        },
                        "start": 1753,
                        "end": 1762
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1765,
                          "end": 1768
                        },
                        "property": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 1769,
                          "end": 1770
                        },
                        "optional": false,
                        "computed": true,
                        "start": 1765,
                        "end": 1771
                      },
                      "definite": false,
                      "start": 1753,
                      "end": 1771
                    }
                  ],
                  "declare": false,
                  "start": 1749,
                  "end": 1772
                }
              ],
              "start": 1739,
              "end": 1835
            },
            "alternate": null,
            "start": 1725,
            "end": 1835
          }
        ],
        "start": 1654,
        "end": 1837
      },
      "expression": false,
      "start": 1608,
      "end": 1837
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f20",
        "optional": false,
        "typeAnnotation": null,
        "start": 1848,
        "end": 1851
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1859,
                        "end": 1863
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "foo",
                            "raw": "'foo'",
                            "start": 1865,
                            "end": 1870
                          },
                          "start": 1865,
                          "end": 1870
                        },
                        "start": 1863,
                        "end": 1870
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1859,
                      "end": 1871
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1872,
                        "end": 1875
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1877,
                          "end": 1883
                        },
                        "start": 1875,
                        "end": 1883
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1872,
                      "end": 1883
                    }
                  ],
                  "start": 1857,
                  "end": 1885
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1890,
                        "end": 1894
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "bar",
                            "raw": "'bar'",
                            "start": 1896,
                            "end": 1901
                          },
                          "start": 1896,
                          "end": 1901
                        },
                        "start": 1894,
                        "end": 1901
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1890,
                      "end": 1902
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1903,
                        "end": 1906
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1908,
                          "end": 1914
                        },
                        "start": 1906,
                        "end": 1914
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1903,
                      "end": 1914
                    }
                  ],
                  "start": 1888,
                  "end": 1916
                }
              ],
              "start": 1857,
              "end": 1916
            },
            "start": 1855,
            "end": 1916
          },
          "start": 1852,
          "end": 1916
        }
      ],
      "returnType": null,
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
                  "name": "isFoo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1930,
                  "end": 1935
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1938,
                      "end": 1941
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1942,
                      "end": 1946
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1938,
                    "end": 1946
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "'foo'",
                    "start": 1951,
                    "end": 1956
                  },
                  "start": 1938,
                  "end": 1956
                },
                "definite": false,
                "start": 1930,
                "end": 1956
              }
            ],
            "declare": false,
            "start": 1924,
            "end": 1957
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "isFoo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1966,
              "end": 1971
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1983,
                      "end": 1986
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1987,
                      "end": 1990
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1983,
                    "end": 1990
                  },
                  "directive": null,
                  "start": 1983,
                  "end": 1991
                }
              ],
              "start": 1973,
              "end": 1997
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2017,
                      "end": 2020
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2021,
                      "end": 2024
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2017,
                    "end": 2024
                  },
                  "directive": null,
                  "start": 2017,
                  "end": 2025
                }
              ],
              "start": 2007,
              "end": 2031
            },
            "start": 1962,
            "end": 2031
          }
        ],
        "start": 1918,
        "end": 2033
      },
      "expression": false,
      "start": 1839,
      "end": 2033
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f21",
        "optional": false,
        "typeAnnotation": null,
        "start": 2044,
        "end": 2047
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2055,
                        "end": 2059
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "foo",
                            "raw": "'foo'",
                            "start": 2061,
                            "end": 2066
                          },
                          "start": 2061,
                          "end": 2066
                        },
                        "start": 2059,
                        "end": 2066
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2055,
                      "end": 2067
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2068,
                        "end": 2071
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 2073,
                          "end": 2079
                        },
                        "start": 2071,
                        "end": 2079
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2068,
                      "end": 2079
                    }
                  ],
                  "start": 2053,
                  "end": 2081
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2086,
                        "end": 2090
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "bar",
                            "raw": "'bar'",
                            "start": 2092,
                            "end": 2097
                          },
                          "start": 2092,
                          "end": 2097
                        },
                        "start": 2090,
                        "end": 2097
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2086,
                      "end": 2098
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2099,
                        "end": 2102
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 2104,
                          "end": 2110
                        },
                        "start": 2102,
                        "end": 2110
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2099,
                      "end": 2110
                    }
                  ],
                  "start": 2084,
                  "end": 2112
                }
              ],
              "start": 2053,
              "end": 2112
            },
            "start": 2051,
            "end": 2112
          },
          "start": 2048,
          "end": 2112
        }
      ],
      "returnType": null,
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
                  "name": "isFoo",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 2133,
                      "end": 2140
                    },
                    "start": 2131,
                    "end": 2140
                  },
                  "start": 2126,
                  "end": 2140
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2143,
                      "end": 2146
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2147,
                      "end": 2151
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2143,
                    "end": 2151
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "'foo'",
                    "start": 2156,
                    "end": 2161
                  },
                  "start": 2143,
                  "end": 2161
                },
                "definite": false,
                "start": 2126,
                "end": 2161
              }
            ],
            "declare": false,
            "start": 2120,
            "end": 2162
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "isFoo",
              "optional": false,
              "typeAnnotation": null,
              "start": 2171,
              "end": 2176
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2188,
                      "end": 2191
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2192,
                      "end": 2195
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2188,
                    "end": 2195
                  },
                  "directive": null,
                  "start": 2188,
                  "end": 2196
                }
              ],
              "start": 2178,
              "end": 2253
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2273,
                      "end": 2276
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2277,
                      "end": 2280
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2273,
                    "end": 2280
                  },
                  "directive": null,
                  "start": 2273,
                  "end": 2281
                }
              ],
              "start": 2263,
              "end": 2338
            },
            "start": 2167,
            "end": 2338
          }
        ],
        "start": 2114,
        "end": 2340
      },
      "expression": false,
      "start": 2035,
      "end": 2340
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f22",
        "optional": false,
        "typeAnnotation": null,
        "start": 2351,
        "end": 2354
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2362,
                        "end": 2366
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "foo",
                            "raw": "'foo'",
                            "start": 2368,
                            "end": 2373
                          },
                          "start": 2368,
                          "end": 2373
                        },
                        "start": 2366,
                        "end": 2373
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2362,
                      "end": 2374
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2375,
                        "end": 2378
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 2380,
                          "end": 2386
                        },
                        "start": 2378,
                        "end": 2386
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2375,
                      "end": 2386
                    }
                  ],
                  "start": 2360,
                  "end": 2388
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2393,
                        "end": 2397
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "bar",
                            "raw": "'bar'",
                            "start": 2399,
                            "end": 2404
                          },
                          "start": 2399,
                          "end": 2404
                        },
                        "start": 2397,
                        "end": 2404
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2393,
                      "end": 2405
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2406,
                        "end": 2409
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 2411,
                          "end": 2417
                        },
                        "start": 2409,
                        "end": 2417
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2406,
                      "end": 2417
                    }
                  ],
                  "start": 2391,
                  "end": 2419
                }
              ],
              "start": 2360,
              "end": 2419
            },
            "start": 2358,
            "end": 2419
          },
          "start": 2355,
          "end": 2419
        }
      ],
      "returnType": null,
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
                  "name": "isFoo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2431,
                  "end": 2436
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2439,
                      "end": 2442
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2443,
                      "end": 2447
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2439,
                    "end": 2447
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "'foo'",
                    "start": 2452,
                    "end": 2457
                  },
                  "start": 2439,
                  "end": 2457
                },
                "definite": false,
                "start": 2431,
                "end": 2457
              }
            ],
            "declare": false,
            "start": 2427,
            "end": 2458
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "isFoo",
              "optional": false,
              "typeAnnotation": null,
              "start": 2467,
              "end": 2472
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2484,
                      "end": 2487
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2488,
                      "end": 2491
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2484,
                    "end": 2491
                  },
                  "directive": null,
                  "start": 2484,
                  "end": 2492
                }
              ],
              "start": 2474,
              "end": 2540
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2560,
                      "end": 2563
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2564,
                      "end": 2567
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2560,
                    "end": 2567
                  },
                  "directive": null,
                  "start": 2560,
                  "end": 2568
                }
              ],
              "start": 2550,
              "end": 2616
            },
            "start": 2463,
            "end": 2616
          }
        ],
        "start": 2421,
        "end": 2618
      },
      "expression": false,
      "start": 2342,
      "end": 2618
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f23",
        "optional": false,
        "typeAnnotation": null,
        "start": 2629,
        "end": 2632
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2640,
                        "end": 2644
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "foo",
                            "raw": "'foo'",
                            "start": 2646,
                            "end": 2651
                          },
                          "start": 2646,
                          "end": 2651
                        },
                        "start": 2644,
                        "end": 2651
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2640,
                      "end": 2652
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2653,
                        "end": 2656
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 2658,
                          "end": 2664
                        },
                        "start": 2656,
                        "end": 2664
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2653,
                      "end": 2664
                    }
                  ],
                  "start": 2638,
                  "end": 2666
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2671,
                        "end": 2675
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "bar",
                            "raw": "'bar'",
                            "start": 2677,
                            "end": 2682
                          },
                          "start": 2677,
                          "end": 2682
                        },
                        "start": 2675,
                        "end": 2682
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2671,
                      "end": 2683
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2684,
                        "end": 2687
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 2689,
                          "end": 2695
                        },
                        "start": 2687,
                        "end": 2695
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2684,
                      "end": 2695
                    }
                  ],
                  "start": 2669,
                  "end": 2697
                }
              ],
              "start": 2638,
              "end": 2697
            },
            "start": 2636,
            "end": 2697
          },
          "start": 2633,
          "end": 2697
        }
      ],
      "returnType": null,
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
                  "name": "isFoo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2711,
                  "end": 2716
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2719,
                      "end": 2722
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2723,
                      "end": 2727
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2719,
                    "end": 2727
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "'foo'",
                    "start": 2732,
                    "end": 2737
                  },
                  "start": 2719,
                  "end": 2737
                },
                "definite": false,
                "start": 2711,
                "end": 2737
              }
            ],
            "declare": false,
            "start": 2705,
            "end": 2738
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 2743,
                "end": 2746
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 2749,
                "end": 2752
              },
              "start": 2743,
              "end": 2752
            },
            "directive": null,
            "start": 2743,
            "end": 2753
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "isFoo",
              "optional": false,
              "typeAnnotation": null,
              "start": 2762,
              "end": 2767
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2779,
                      "end": 2782
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2783,
                      "end": 2786
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2779,
                    "end": 2786
                  },
                  "directive": null,
                  "start": 2779,
                  "end": 2787
                }
              ],
              "start": 2769,
              "end": 2851
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2871,
                      "end": 2874
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2875,
                      "end": 2878
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2871,
                    "end": 2878
                  },
                  "directive": null,
                  "start": 2871,
                  "end": 2879
                }
              ],
              "start": 2861,
              "end": 2943
            },
            "start": 2758,
            "end": 2943
          }
        ],
        "start": 2699,
        "end": 2945
      },
      "expression": false,
      "start": 2620,
      "end": 2945
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f24",
        "optional": false,
        "typeAnnotation": null,
        "start": 2956,
        "end": 2959
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2967,
                        "end": 2971
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "foo",
                            "raw": "'foo'",
                            "start": 2973,
                            "end": 2978
                          },
                          "start": 2973,
                          "end": 2978
                        },
                        "start": 2971,
                        "end": 2978
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2967,
                      "end": 2979
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2980,
                        "end": 2983
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 2985,
                          "end": 2991
                        },
                        "start": 2983,
                        "end": 2991
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2980,
                      "end": 2991
                    }
                  ],
                  "start": 2965,
                  "end": 2993
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2998,
                        "end": 3002
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "bar",
                            "raw": "'bar'",
                            "start": 3004,
                            "end": 3009
                          },
                          "start": 3004,
                          "end": 3009
                        },
                        "start": 3002,
                        "end": 3009
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2998,
                      "end": 3010
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3011,
                        "end": 3014
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 3016,
                          "end": 3022
                        },
                        "start": 3014,
                        "end": 3022
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 3011,
                      "end": 3022
                    }
                  ],
                  "start": 2996,
                  "end": 3024
                }
              ],
              "start": 2965,
              "end": 3024
            },
            "start": 2963,
            "end": 3024
          },
          "start": 2960,
          "end": 3024
        }
      ],
      "returnType": null,
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
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3038,
                  "end": 3041
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3044,
                  "end": 3047
                },
                "definite": false,
                "start": 3038,
                "end": 3047
              }
            ],
            "declare": false,
            "start": 3032,
            "end": 3048
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isFoo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3059,
                  "end": 3064
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3067,
                      "end": 3070
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3071,
                      "end": 3075
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3067,
                    "end": 3075
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "'foo'",
                    "start": 3080,
                    "end": 3085
                  },
                  "start": 3067,
                  "end": 3085
                },
                "definite": false,
                "start": 3059,
                "end": 3085
              }
            ],
            "declare": false,
            "start": 3053,
            "end": 3086
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "isFoo",
              "optional": false,
              "typeAnnotation": null,
              "start": 3095,
              "end": 3100
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3112,
                      "end": 3115
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3116,
                      "end": 3119
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3112,
                    "end": 3119
                  },
                  "directive": null,
                  "start": 3112,
                  "end": 3120
                }
              ],
              "start": 3102,
              "end": 3126
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3146,
                      "end": 3149
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3150,
                      "end": 3153
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3146,
                    "end": 3153
                  },
                  "directive": null,
                  "start": 3146,
                  "end": 3154
                }
              ],
              "start": 3136,
              "end": 3160
            },
            "start": 3091,
            "end": 3160
          }
        ],
        "start": 3026,
        "end": 3162
      },
      "expression": false,
      "start": 2947,
      "end": 3162
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f25",
        "optional": false,
        "typeAnnotation": null,
        "start": 3173,
        "end": 3176
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3184,
                        "end": 3188
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "foo",
                            "raw": "'foo'",
                            "start": 3190,
                            "end": 3195
                          },
                          "start": 3190,
                          "end": 3195
                        },
                        "start": 3188,
                        "end": 3195
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 3184,
                      "end": 3196
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3197,
                        "end": 3200
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3202,
                          "end": 3208
                        },
                        "start": 3200,
                        "end": 3208
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 3197,
                      "end": 3208
                    }
                  ],
                  "start": 3182,
                  "end": 3210
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3215,
                        "end": 3219
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "bar",
                            "raw": "'bar'",
                            "start": 3221,
                            "end": 3226
                          },
                          "start": 3221,
                          "end": 3226
                        },
                        "start": 3219,
                        "end": 3226
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 3215,
                      "end": 3227
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3228,
                        "end": 3231
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 3233,
                          "end": 3239
                        },
                        "start": 3231,
                        "end": 3239
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 3228,
                      "end": 3239
                    }
                  ],
                  "start": 3213,
                  "end": 3241
                }
              ],
              "start": 3182,
              "end": 3241
            },
            "start": 3180,
            "end": 3241
          },
          "start": 3177,
          "end": 3241
        }
      ],
      "returnType": null,
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
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3253,
                  "end": 3256
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3259,
                  "end": 3262
                },
                "definite": false,
                "start": 3253,
                "end": 3262
              }
            ],
            "declare": false,
            "start": 3249,
            "end": 3263
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isFoo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3274,
                  "end": 3279
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3282,
                      "end": 3285
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3286,
                      "end": 3290
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3282,
                    "end": 3290
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "'foo'",
                    "start": 3295,
                    "end": 3300
                  },
                  "start": 3282,
                  "end": 3300
                },
                "definite": false,
                "start": 3274,
                "end": 3300
              }
            ],
            "declare": false,
            "start": 3268,
            "end": 3301
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "isFoo",
              "optional": false,
              "typeAnnotation": null,
              "start": 3310,
              "end": 3315
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3327,
                      "end": 3330
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3331,
                      "end": 3334
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3327,
                    "end": 3334
                  },
                  "directive": null,
                  "start": 3327,
                  "end": 3335
                }
              ],
              "start": 3317,
              "end": 3341
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3361,
                      "end": 3364
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3365,
                      "end": 3368
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3361,
                    "end": 3368
                  },
                  "directive": null,
                  "start": 3361,
                  "end": 3369
                }
              ],
              "start": 3351,
              "end": 3375
            },
            "start": 3306,
            "end": 3375
          }
        ],
        "start": 3243,
        "end": 3377
      },
      "expression": false,
      "start": 3164,
      "end": 3377
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f26",
        "optional": false,
        "typeAnnotation": null,
        "start": 3388,
        "end": 3391
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "outer",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": true,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3410,
                    "end": 3413
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeLiteral",
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "kind",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3417,
                                "end": 3421
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": "foo",
                                    "raw": "'foo'",
                                    "start": 3423,
                                    "end": 3428
                                  },
                                  "start": 3423,
                                  "end": 3428
                                },
                                "start": 3421,
                                "end": 3428
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 3417,
                              "end": 3429
                            },
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "foo",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3430,
                                "end": 3433
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 3435,
                                  "end": 3441
                                },
                                "start": 3433,
                                "end": 3441
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 3430,
                              "end": 3441
                            }
                          ],
                          "start": 3415,
                          "end": 3443
                        },
                        {
                          "type": "TSTypeLiteral",
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "kind",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3448,
                                "end": 3452
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": "bar",
                                    "raw": "'bar'",
                                    "start": 3454,
                                    "end": 3459
                                  },
                                  "start": 3454,
                                  "end": 3459
                                },
                                "start": 3452,
                                "end": 3459
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 3448,
                              "end": 3460
                            },
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "bar",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3461,
                                "end": 3464
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 3466,
                                  "end": 3472
                                },
                                "start": 3464,
                                "end": 3472
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 3461,
                              "end": 3472
                            }
                          ],
                          "start": 3446,
                          "end": 3474
                        }
                      ],
                      "start": 3415,
                      "end": 3474
                    },
                    "start": 3413,
                    "end": 3474
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3401,
                  "end": 3474
                }
              ],
              "start": 3399,
              "end": 3476
            },
            "start": 3397,
            "end": 3476
          },
          "start": 3392,
          "end": 3476
        }
      ],
      "returnType": null,
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
                  "name": "isFoo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3490,
                  "end": 3495
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "outer",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3498,
                        "end": 3503
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3504,
                        "end": 3507
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3498,
                      "end": 3507
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3508,
                      "end": 3512
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3498,
                    "end": 3512
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "'foo'",
                    "start": 3517,
                    "end": 3522
                  },
                  "start": 3498,
                  "end": 3522
                },
                "definite": false,
                "start": 3490,
                "end": 3522
              }
            ],
            "declare": false,
            "start": 3484,
            "end": 3523
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "isFoo",
              "optional": false,
              "typeAnnotation": null,
              "start": 3532,
              "end": 3537
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "outer",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3549,
                        "end": 3554
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3555,
                        "end": 3558
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3549,
                      "end": 3558
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3559,
                      "end": 3562
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3549,
                    "end": 3562
                  },
                  "directive": null,
                  "start": 3549,
                  "end": 3563
                }
              ],
              "start": 3539,
              "end": 3569
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "outer",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3589,
                        "end": 3594
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3595,
                        "end": 3598
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3589,
                      "end": 3598
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3599,
                      "end": 3602
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3589,
                    "end": 3602
                  },
                  "directive": null,
                  "start": 3589,
                  "end": 3603
                }
              ],
              "start": 3579,
              "end": 3609
            },
            "start": 3528,
            "end": 3609
          }
        ],
        "start": 3478,
        "end": 3611
      },
      "expression": false,
      "start": 3379,
      "end": 3611
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f27",
        "optional": false,
        "typeAnnotation": null,
        "start": 3622,
        "end": 3625
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "outer",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3635,
                    "end": 3638
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeLiteral",
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "kind",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3642,
                                "end": 3646
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": "foo",
                                    "raw": "'foo'",
                                    "start": 3648,
                                    "end": 3653
                                  },
                                  "start": 3648,
                                  "end": 3653
                                },
                                "start": 3646,
                                "end": 3653
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 3642,
                              "end": 3654
                            },
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "foo",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3655,
                                "end": 3658
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 3660,
                                  "end": 3666
                                },
                                "start": 3658,
                                "end": 3666
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 3655,
                              "end": 3666
                            }
                          ],
                          "start": 3640,
                          "end": 3668
                        },
                        {
                          "type": "TSTypeLiteral",
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "kind",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3673,
                                "end": 3677
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": "bar",
                                    "raw": "'bar'",
                                    "start": 3679,
                                    "end": 3684
                                  },
                                  "start": 3679,
                                  "end": 3684
                                },
                                "start": 3677,
                                "end": 3684
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 3673,
                              "end": 3685
                            },
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "bar",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3686,
                                "end": 3689
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 3691,
                                  "end": 3697
                                },
                                "start": 3689,
                                "end": 3697
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 3686,
                              "end": 3697
                            }
                          ],
                          "start": 3671,
                          "end": 3699
                        }
                      ],
                      "start": 3640,
                      "end": 3699
                    },
                    "start": 3638,
                    "end": 3699
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3635,
                  "end": 3699
                }
              ],
              "start": 3633,
              "end": 3701
            },
            "start": 3631,
            "end": 3701
          },
          "start": 3626,
          "end": 3701
        }
      ],
      "returnType": null,
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
                  "name": "isFoo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3715,
                  "end": 3720
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "outer",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3723,
                        "end": 3728
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3729,
                        "end": 3732
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3723,
                      "end": 3732
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3733,
                      "end": 3737
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3723,
                    "end": 3737
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "'foo'",
                    "start": 3742,
                    "end": 3747
                  },
                  "start": 3723,
                  "end": 3747
                },
                "definite": false,
                "start": 3715,
                "end": 3747
              }
            ],
            "declare": false,
            "start": 3709,
            "end": 3748
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "isFoo",
              "optional": false,
              "typeAnnotation": null,
              "start": 3757,
              "end": 3762
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "outer",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3774,
                        "end": 3779
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3780,
                        "end": 3783
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3774,
                      "end": 3783
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3784,
                      "end": 3787
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3774,
                    "end": 3787
                  },
                  "directive": null,
                  "start": 3774,
                  "end": 3788
                }
              ],
              "start": 3764,
              "end": 3834
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "outer",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3854,
                        "end": 3859
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3860,
                        "end": 3863
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3854,
                      "end": 3863
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3864,
                      "end": 3867
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3854,
                    "end": 3867
                  },
                  "directive": null,
                  "start": 3854,
                  "end": 3868
                }
              ],
              "start": 3844,
              "end": 3914
            },
            "start": 3753,
            "end": 3914
          }
        ],
        "start": 3703,
        "end": 3916
      },
      "expression": false,
      "start": 3613,
      "end": 3916
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f28",
        "optional": false,
        "typeAnnotation": null,
        "start": 3927,
        "end": 3930
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3939,
                        "end": 3943
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "foo",
                            "raw": "'foo'",
                            "start": 3945,
                            "end": 3950
                          },
                          "start": 3945,
                          "end": 3950
                        },
                        "start": 3943,
                        "end": 3950
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 3939,
                      "end": 3951
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3952,
                        "end": 3955
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3957,
                          "end": 3963
                        },
                        "start": 3955,
                        "end": 3963
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 3952,
                      "end": 3963
                    }
                  ],
                  "start": 3937,
                  "end": 3965
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3970,
                        "end": 3974
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "bar",
                            "raw": "'bar'",
                            "start": 3976,
                            "end": 3981
                          },
                          "start": 3976,
                          "end": 3981
                        },
                        "start": 3974,
                        "end": 3981
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 3970,
                      "end": 3982
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3983,
                        "end": 3986
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 3988,
                          "end": 3994
                        },
                        "start": 3986,
                        "end": 3994
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 3983,
                      "end": 3994
                    }
                  ],
                  "start": 3968,
                  "end": 3996
                }
              ],
              "start": 3937,
              "end": 3996
            },
            "start": 3935,
            "end": 3996
          },
          "start": 3931,
          "end": 3996
        }
      ],
      "returnType": null,
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
                  "name": "isFoo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4010,
                  "end": 4015
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4018,
                    "end": 4021
                  },
                  "operator": "&&",
                  "right": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4025,
                        "end": 4028
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4029,
                        "end": 4033
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4025,
                      "end": 4033
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "'foo'",
                      "start": 4038,
                      "end": 4043
                    },
                    "start": 4025,
                    "end": 4043
                  },
                  "start": 4018,
                  "end": 4043
                },
                "definite": false,
                "start": 4010,
                "end": 4043
              }
            ],
            "declare": false,
            "start": 4004,
            "end": 4044
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isBar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4055,
                  "end": 4060
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4063,
                    "end": 4066
                  },
                  "operator": "&&",
                  "right": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4070,
                        "end": 4073
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4074,
                        "end": 4078
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4070,
                      "end": 4078
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "bar",
                      "raw": "'bar'",
                      "start": 4083,
                      "end": 4088
                    },
                    "start": 4070,
                    "end": 4088
                  },
                  "start": 4063,
                  "end": 4088
                },
                "definite": false,
                "start": 4055,
                "end": 4088
              }
            ],
            "declare": false,
            "start": 4049,
            "end": 4089
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "isFoo",
              "optional": false,
              "typeAnnotation": null,
              "start": 4098,
              "end": 4103
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4115,
                      "end": 4118
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4119,
                      "end": 4122
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4115,
                    "end": 4122
                  },
                  "directive": null,
                  "start": 4115,
                  "end": 4123
                }
              ],
              "start": 4105,
              "end": 4129
            },
            "alternate": null,
            "start": 4094,
            "end": 4129
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "isBar",
              "optional": false,
              "typeAnnotation": null,
              "start": 4138,
              "end": 4143
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4155,
                      "end": 4158
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4159,
                      "end": 4162
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4155,
                    "end": 4162
                  },
                  "directive": null,
                  "start": 4155,
                  "end": 4163
                }
              ],
              "start": 4145,
              "end": 4169
            },
            "alternate": null,
            "start": 4134,
            "end": 4169
          }
        ],
        "start": 3998,
        "end": 4171
      },
      "expression": false,
      "start": 3918,
      "end": 4171
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f30",
        "optional": false,
        "typeAnnotation": null,
        "start": 4236,
        "end": 4239
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4247,
                        "end": 4251
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "foo",
                            "raw": "'foo'",
                            "start": 4253,
                            "end": 4258
                          },
                          "start": 4253,
                          "end": 4258
                        },
                        "start": 4251,
                        "end": 4258
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 4247,
                      "end": 4259
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4260,
                        "end": 4263
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 4265,
                          "end": 4271
                        },
                        "start": 4263,
                        "end": 4271
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 4260,
                      "end": 4271
                    }
                  ],
                  "start": 4245,
                  "end": 4273
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4278,
                        "end": 4282
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "bar",
                            "raw": "'bar'",
                            "start": 4284,
                            "end": 4289
                          },
                          "start": 4284,
                          "end": 4289
                        },
                        "start": 4282,
                        "end": 4289
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 4278,
                      "end": 4290
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4291,
                        "end": 4294
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 4296,
                          "end": 4302
                        },
                        "start": 4294,
                        "end": 4302
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 4291,
                      "end": 4302
                    }
                  ],
                  "start": 4276,
                  "end": 4304
                }
              ],
              "start": 4245,
              "end": 4304
            },
            "start": 4243,
            "end": 4304
          },
          "start": 4240,
          "end": 4304
        }
      ],
      "returnType": null,
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
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4318,
                  "end": 4322
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4325,
                    "end": 4328
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "kind",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4329,
                    "end": 4333
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4325,
                  "end": 4333
                },
                "definite": false,
                "start": 4318,
                "end": 4333
              }
            ],
            "declare": false,
            "start": 4312,
            "end": 4334
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 4343,
                "end": 4347
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "foo",
                "raw": "'foo'",
                "start": 4352,
                "end": 4357
              },
              "start": 4343,
              "end": 4357
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4369,
                      "end": 4372
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4373,
                      "end": 4376
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4369,
                    "end": 4376
                  },
                  "directive": null,
                  "start": 4369,
                  "end": 4377
                }
              ],
              "start": 4359,
              "end": 4383
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4403,
                      "end": 4406
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4407,
                      "end": 4410
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4403,
                    "end": 4410
                  },
                  "directive": null,
                  "start": 4403,
                  "end": 4411
                }
              ],
              "start": 4393,
              "end": 4417
            },
            "start": 4339,
            "end": 4417
          }
        ],
        "start": 4306,
        "end": 4419
      },
      "expression": false,
      "start": 4227,
      "end": 4419
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f31",
        "optional": false,
        "typeAnnotation": null,
        "start": 4430,
        "end": 4433
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4441,
                        "end": 4445
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "foo",
                            "raw": "'foo'",
                            "start": 4447,
                            "end": 4452
                          },
                          "start": 4447,
                          "end": 4452
                        },
                        "start": 4445,
                        "end": 4452
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 4441,
                      "end": 4453
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4454,
                        "end": 4457
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 4459,
                          "end": 4465
                        },
                        "start": 4457,
                        "end": 4465
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 4454,
                      "end": 4465
                    }
                  ],
                  "start": 4439,
                  "end": 4467
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4472,
                        "end": 4476
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "bar",
                            "raw": "'bar'",
                            "start": 4478,
                            "end": 4483
                          },
                          "start": 4478,
                          "end": 4483
                        },
                        "start": 4476,
                        "end": 4483
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 4472,
                      "end": 4484
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4485,
                        "end": 4488
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 4490,
                          "end": 4496
                        },
                        "start": 4488,
                        "end": 4496
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 4485,
                      "end": 4496
                    }
                  ],
                  "start": 4470,
                  "end": 4498
                }
              ],
              "start": 4439,
              "end": 4498
            },
            "start": 4437,
            "end": 4498
          },
          "start": 4434,
          "end": 4498
        }
      ],
      "returnType": null,
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
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4514,
                        "end": 4518
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4514,
                        "end": 4518
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 4514,
                      "end": 4518
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4512,
                  "end": 4520
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4523,
                  "end": 4526
                },
                "definite": false,
                "start": 4512,
                "end": 4526
              }
            ],
            "declare": false,
            "start": 4506,
            "end": 4527
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 4536,
                "end": 4540
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "foo",
                "raw": "'foo'",
                "start": 4545,
                "end": 4550
              },
              "start": 4536,
              "end": 4550
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4562,
                      "end": 4565
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4566,
                      "end": 4569
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4562,
                    "end": 4569
                  },
                  "directive": null,
                  "start": 4562,
                  "end": 4570
                }
              ],
              "start": 4552,
              "end": 4576
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4596,
                      "end": 4599
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4600,
                      "end": 4603
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4596,
                    "end": 4603
                  },
                  "directive": null,
                  "start": 4596,
                  "end": 4604
                }
              ],
              "start": 4586,
              "end": 4610
            },
            "start": 4532,
            "end": 4610
          }
        ],
        "start": 4500,
        "end": 4612
      },
      "expression": false,
      "start": 4421,
      "end": 4612
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f32",
        "optional": false,
        "typeAnnotation": null,
        "start": 4623,
        "end": 4626
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4634,
                        "end": 4638
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "foo",
                            "raw": "'foo'",
                            "start": 4640,
                            "end": 4645
                          },
                          "start": 4640,
                          "end": 4645
                        },
                        "start": 4638,
                        "end": 4645
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 4634,
                      "end": 4646
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4647,
                        "end": 4650
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 4652,
                          "end": 4658
                        },
                        "start": 4650,
                        "end": 4658
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 4647,
                      "end": 4658
                    }
                  ],
                  "start": 4632,
                  "end": 4660
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4665,
                        "end": 4669
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "bar",
                            "raw": "'bar'",
                            "start": 4671,
                            "end": 4676
                          },
                          "start": 4671,
                          "end": 4676
                        },
                        "start": 4669,
                        "end": 4676
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 4665,
                      "end": 4677
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4678,
                        "end": 4681
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 4683,
                          "end": 4689
                        },
                        "start": 4681,
                        "end": 4689
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 4678,
                      "end": 4689
                    }
                  ],
                  "start": 4663,
                  "end": 4691
                }
              ],
              "start": 4632,
              "end": 4691
            },
            "start": 4630,
            "end": 4691
          },
          "start": 4627,
          "end": 4691
        }
      ],
      "returnType": null,
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
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4707,
                        "end": 4711
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "k",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4713,
                        "end": 4714
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 4707,
                      "end": 4714
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4705,
                  "end": 4716
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4719,
                  "end": 4722
                },
                "definite": false,
                "start": 4705,
                "end": 4722
              }
            ],
            "declare": false,
            "start": 4699,
            "end": 4723
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null,
                "start": 4732,
                "end": 4733
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "foo",
                "raw": "'foo'",
                "start": 4738,
                "end": 4743
              },
              "start": 4732,
              "end": 4743
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4755,
                      "end": 4758
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4759,
                      "end": 4762
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4755,
                    "end": 4762
                  },
                  "directive": null,
                  "start": 4755,
                  "end": 4763
                }
              ],
              "start": 4745,
              "end": 4769
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4789,
                      "end": 4792
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4793,
                      "end": 4796
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4789,
                    "end": 4796
                  },
                  "directive": null,
                  "start": 4789,
                  "end": 4797
                }
              ],
              "start": 4779,
              "end": 4803
            },
            "start": 4728,
            "end": 4803
          }
        ],
        "start": 4693,
        "end": 4805
      },
      "expression": false,
      "start": 4614,
      "end": 4805
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f33",
        "optional": false,
        "typeAnnotation": null,
        "start": 4816,
        "end": 4819
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4827,
                        "end": 4831
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "foo",
                            "raw": "'foo'",
                            "start": 4833,
                            "end": 4838
                          },
                          "start": 4833,
                          "end": 4838
                        },
                        "start": 4831,
                        "end": 4838
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 4827,
                      "end": 4839
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4840,
                        "end": 4843
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 4845,
                          "end": 4851
                        },
                        "start": 4843,
                        "end": 4851
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 4840,
                      "end": 4851
                    }
                  ],
                  "start": 4825,
                  "end": 4853
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4858,
                        "end": 4862
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "bar",
                            "raw": "'bar'",
                            "start": 4864,
                            "end": 4869
                          },
                          "start": 4864,
                          "end": 4869
                        },
                        "start": 4862,
                        "end": 4869
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 4858,
                      "end": 4870
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4871,
                        "end": 4874
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 4876,
                          "end": 4882
                        },
                        "start": 4874,
                        "end": 4882
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 4871,
                      "end": 4882
                    }
                  ],
                  "start": 4856,
                  "end": 4884
                }
              ],
              "start": 4825,
              "end": 4884
            },
            "start": 4823,
            "end": 4884
          },
          "start": 4820,
          "end": 4884
        }
      ],
      "returnType": null,
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
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4900,
                        "end": 4904
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4900,
                        "end": 4904
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 4900,
                      "end": 4904
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4898,
                  "end": 4906
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4909,
                  "end": 4912
                },
                "definite": false,
                "start": 4898,
                "end": 4912
              }
            ],
            "declare": false,
            "start": 4892,
            "end": 4913
          },
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 4926,
              "end": 4930
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "'foo'",
                  "start": 4947,
                  "end": 4952
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4954,
                        "end": 4957
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4958,
                        "end": 4961
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4954,
                      "end": 4961
                    },
                    "directive": null,
                    "start": 4954,
                    "end": 4962
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 4963,
                    "end": 4969
                  }
                ],
                "start": 4942,
                "end": 4969
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "bar",
                  "raw": "'bar'",
                  "start": 4983,
                  "end": 4988
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4990,
                        "end": 4993
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4994,
                        "end": 4997
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4990,
                      "end": 4997
                    },
                    "directive": null,
                    "start": 4990,
                    "end": 4998
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 4999,
                    "end": 5005
                  }
                ],
                "start": 4978,
                "end": 5005
              }
            ],
            "start": 4918,
            "end": 5011
          }
        ],
        "start": 4886,
        "end": 5013
      },
      "expression": false,
      "start": 4807,
      "end": 5013
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C10",
        "optional": false,
        "typeAnnotation": null,
        "start": 5022,
        "end": 5025
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 5032,
              "end": 5043
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": null,
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 5056,
                            "end": 5062
                          },
                          {
                            "type": "TSNumberKeyword",
                            "start": 5065,
                            "end": 5071
                          }
                        ],
                        "start": 5056,
                        "end": 5071
                      },
                      "start": 5054,
                      "end": 5071
                    },
                    "start": 5053,
                    "end": 5071
                  },
                  "readonly": true,
                  "static": false,
                  "start": 5044,
                  "end": 5071
                }
              ],
              "returnType": null,
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
                          "name": "thisX_isString",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5089,
                          "end": 5103
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 5113,
                                "end": 5117
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5118,
                                "end": 5119
                              },
                              "optional": false,
                              "computed": false,
                              "start": 5113,
                              "end": 5119
                            },
                            "prefix": true,
                            "start": 5106,
                            "end": 5119
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": "string",
                            "raw": "'string'",
                            "start": 5124,
                            "end": 5132
                          },
                          "start": 5106,
                          "end": 5132
                        },
                        "definite": false,
                        "start": 5089,
                        "end": 5132
                      }
                    ],
                    "declare": false,
                    "start": 5083,
                    "end": 5133
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "xIsString",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5148,
                          "end": 5157
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5167,
                              "end": 5168
                            },
                            "prefix": true,
                            "start": 5160,
                            "end": 5168
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": "string",
                            "raw": "'string'",
                            "start": 5173,
                            "end": 5181
                          },
                          "start": 5160,
                          "end": 5181
                        },
                        "definite": false,
                        "start": 5148,
                        "end": 5181
                      }
                    ],
                    "declare": false,
                    "start": 5142,
                    "end": 5182
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "thisX_isString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5195,
                        "end": 5209
                      },
                      "operator": "&&",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "xIsString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5213,
                        "end": 5222
                      },
                      "start": 5195,
                      "end": 5222
                    },
                    "consequent": {
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
                                "name": "s",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 5245,
                                    "end": 5251
                                  },
                                  "start": 5243,
                                  "end": 5251
                                },
                                "start": 5242,
                                "end": 5251
                              },
                              "init": null,
                              "definite": false,
                              "start": 5242,
                              "end": 5251
                            }
                          ],
                          "declare": false,
                          "start": 5238,
                          "end": 5252
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "s",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5265,
                              "end": 5266
                            },
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 5269,
                                "end": 5273
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5274,
                                "end": 5275
                              },
                              "optional": false,
                              "computed": false,
                              "start": 5269,
                              "end": 5275
                            },
                            "start": 5265,
                            "end": 5275
                          },
                          "directive": null,
                          "start": 5265,
                          "end": 5276
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "s",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5289,
                              "end": 5290
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5293,
                              "end": 5294
                            },
                            "start": 5289,
                            "end": 5294
                          },
                          "directive": null,
                          "start": 5289,
                          "end": 5295
                        }
                      ],
                      "start": 5224,
                      "end": 5305
                    },
                    "alternate": null,
                    "start": 5191,
                    "end": 5305
                  }
                ],
                "start": 5073,
                "end": 5311
              },
              "expression": false,
              "start": 5043,
              "end": 5311
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 5032,
            "end": 5311
          }
        ],
        "start": 5026,
        "end": 5313
      },
      "abstract": false,
      "declare": false,
      "start": 5016,
      "end": 5313
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C11",
        "optional": false,
        "typeAnnotation": null,
        "start": 5321,
        "end": 5324
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 5331,
              "end": 5342
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": null,
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 5355,
                            "end": 5361
                          },
                          {
                            "type": "TSNumberKeyword",
                            "start": 5364,
                            "end": 5370
                          }
                        ],
                        "start": 5355,
                        "end": 5370
                      },
                      "start": 5353,
                      "end": 5370
                    },
                    "start": 5352,
                    "end": 5370
                  },
                  "readonly": true,
                  "static": false,
                  "start": 5343,
                  "end": 5370
                }
              ],
              "returnType": null,
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
                          "name": "thisX_isString",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5388,
                          "end": 5402
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 5412,
                                "end": 5416
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5417,
                                "end": 5418
                              },
                              "optional": false,
                              "computed": false,
                              "start": 5412,
                              "end": 5418
                            },
                            "prefix": true,
                            "start": 5405,
                            "end": 5418
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": "string",
                            "raw": "'string'",
                            "start": 5423,
                            "end": 5431
                          },
                          "start": 5405,
                          "end": 5431
                        },
                        "definite": false,
                        "start": 5388,
                        "end": 5431
                      }
                    ],
                    "declare": false,
                    "start": 5382,
                    "end": 5432
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "xIsString",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5447,
                          "end": 5456
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5466,
                              "end": 5467
                            },
                            "prefix": true,
                            "start": 5459,
                            "end": 5467
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": "string",
                            "raw": "'string'",
                            "start": 5472,
                            "end": 5480
                          },
                          "start": 5459,
                          "end": 5480
                        },
                        "definite": false,
                        "start": 5447,
                        "end": 5480
                      }
                    ],
                    "declare": false,
                    "start": 5441,
                    "end": 5481
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "thisX_isString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5494,
                        "end": 5508
                      },
                      "operator": "&&",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "xIsString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5512,
                        "end": 5521
                      },
                      "start": 5494,
                      "end": 5521
                    },
                    "consequent": {
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
                                "name": "s",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 5620,
                                    "end": 5626
                                  },
                                  "start": 5618,
                                  "end": 5626
                                },
                                "start": 5617,
                                "end": 5626
                              },
                              "init": null,
                              "definite": false,
                              "start": 5617,
                              "end": 5626
                            }
                          ],
                          "declare": false,
                          "start": 5613,
                          "end": 5627
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "s",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5640,
                              "end": 5641
                            },
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 5644,
                                "end": 5648
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5649,
                                "end": 5650
                              },
                              "optional": false,
                              "computed": false,
                              "start": 5644,
                              "end": 5650
                            },
                            "start": 5640,
                            "end": 5650
                          },
                          "directive": null,
                          "start": 5640,
                          "end": 5651
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "s",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5664,
                              "end": 5665
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5668,
                              "end": 5669
                            },
                            "start": 5664,
                            "end": 5669
                          },
                          "directive": null,
                          "start": 5664,
                          "end": 5670
                        }
                      ],
                      "start": 5523,
                      "end": 5680
                    },
                    "alternate": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 5708,
                                "end": 5712
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5713,
                                "end": 5714
                              },
                              "optional": false,
                              "computed": false,
                              "start": 5708,
                              "end": 5714
                            },
                            "right": {
                              "type": "Literal",
                              "value": 10,
                              "raw": "10",
                              "start": 5717,
                              "end": 5719
                            },
                            "start": 5708,
                            "end": 5719
                          },
                          "directive": null,
                          "start": 5708,
                          "end": 5720
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5733,
                              "end": 5734
                            },
                            "right": {
                              "type": "Literal",
                              "value": 10,
                              "raw": "10",
                              "start": 5737,
                              "end": 5739
                            },
                            "start": 5733,
                            "end": 5739
                          },
                          "directive": null,
                          "start": 5733,
                          "end": 5740
                        }
                      ],
                      "start": 5694,
                      "end": 5750
                    },
                    "start": 5490,
                    "end": 5750
                  }
                ],
                "start": 5372,
                "end": 5756
              },
              "expression": false,
              "start": 5342,
              "end": 5756
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 5331,
            "end": 5756
          }
        ],
        "start": 5325,
        "end": 5758
      },
      "abstract": false,
      "declare": false,
      "start": 5315,
      "end": 5758
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f40",
        "optional": false,
        "typeAnnotation": null,
        "start": 5822,
        "end": 5825
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5833,
                        "end": 5837
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "foo",
                            "raw": "'foo'",
                            "start": 5839,
                            "end": 5844
                          },
                          "start": 5839,
                          "end": 5844
                        },
                        "start": 5837,
                        "end": 5844
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 5833,
                      "end": 5845
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": true,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5846,
                        "end": 5849
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 5852,
                          "end": 5858
                        },
                        "start": 5850,
                        "end": 5858
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 5846,
                      "end": 5858
                    }
                  ],
                  "start": 5831,
                  "end": 5860
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5865,
                        "end": 5869
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "bar",
                            "raw": "'bar'",
                            "start": 5871,
                            "end": 5876
                          },
                          "start": 5871,
                          "end": 5876
                        },
                        "start": 5869,
                        "end": 5876
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 5865,
                      "end": 5877
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": true,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5878,
                        "end": 5881
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 5884,
                          "end": 5890
                        },
                        "start": 5882,
                        "end": 5890
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 5878,
                      "end": 5890
                    }
                  ],
                  "start": 5863,
                  "end": 5892
                }
              ],
              "start": 5831,
              "end": 5892
            },
            "start": 5829,
            "end": 5892
          },
          "start": 5826,
          "end": 5892
        }
      ],
      "returnType": null,
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
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5908,
                        "end": 5912
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5908,
                        "end": 5912
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 5908,
                      "end": 5912
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5906,
                  "end": 5914
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5917,
                  "end": 5920
                },
                "definite": false,
                "start": 5906,
                "end": 5920
              }
            ],
            "declare": false,
            "start": 5900,
            "end": 5921
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isFoo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5932,
                  "end": 5937
                },
                "init": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "kind",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5940,
                    "end": 5944
                  },
                  "operator": "==",
                  "right": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "'foo'",
                    "start": 5948,
                    "end": 5953
                  },
                  "start": 5940,
                  "end": 5953
                },
                "definite": false,
                "start": 5932,
                "end": 5953
              }
            ],
            "declare": false,
            "start": 5926,
            "end": 5954
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "isFoo",
                "optional": false,
                "typeAnnotation": null,
                "start": 5963,
                "end": 5968
              },
              "operator": "&&",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5972,
                  "end": 5975
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5976,
                  "end": 5979
                },
                "optional": false,
                "computed": false,
                "start": 5972,
                "end": 5979
              },
              "start": 5963,
              "end": 5979
            },
            "consequent": {
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
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 5998,
                            "end": 6004
                          },
                          "start": 5996,
                          "end": 6004
                        },
                        "start": 5995,
                        "end": 6004
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6007,
                          "end": 6010
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6011,
                          "end": 6014
                        },
                        "optional": false,
                        "computed": false,
                        "start": 6007,
                        "end": 6014
                      },
                      "definite": false,
                      "start": 5995,
                      "end": 6014
                    }
                  ],
                  "declare": false,
                  "start": 5991,
                  "end": 6015
                }
              ],
              "start": 5981,
              "end": 6021
            },
            "alternate": null,
            "start": 5959,
            "end": 6021
          }
        ],
        "start": 5894,
        "end": 6023
      },
      "expression": false,
      "start": 5813,
      "end": 6023
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Data",
        "optional": false,
        "typeAnnotation": null,
        "start": 6109,
        "end": 6113
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6118,
                  "end": 6122
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "str",
                      "raw": "'str'",
                      "start": 6124,
                      "end": 6129
                    },
                    "start": 6124,
                    "end": 6129
                  },
                  "start": 6122,
                  "end": 6129
                },
                "accessibility": null,
                "static": false,
                "start": 6118,
                "end": 6130
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "payload",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6131,
                  "end": 6138
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 6140,
                    "end": 6146
                  },
                  "start": 6138,
                  "end": 6146
                },
                "accessibility": null,
                "static": false,
                "start": 6131,
                "end": 6146
              }
            ],
            "start": 6116,
            "end": 6148
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6153,
                  "end": 6157
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "num",
                      "raw": "'num'",
                      "start": 6159,
                      "end": 6164
                    },
                    "start": 6159,
                    "end": 6164
                  },
                  "start": 6157,
                  "end": 6164
                },
                "accessibility": null,
                "static": false,
                "start": 6153,
                "end": 6165
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "payload",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6166,
                  "end": 6173
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 6175,
                    "end": 6181
                  },
                  "start": 6173,
                  "end": 6181
                },
                "accessibility": null,
                "static": false,
                "start": 6166,
                "end": 6181
              }
            ],
            "start": 6151,
            "end": 6183
          }
        ],
        "start": 6116,
        "end": 6183
      },
      "declare": false,
      "start": 6104,
      "end": 6184
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "gg2",
        "optional": false,
        "typeAnnotation": null,
        "start": 6195,
        "end": 6198
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Data",
                "optional": false,
                "typeAnnotation": null,
                "start": 6204,
                "end": 6208
              },
              "typeArguments": null,
              "start": 6204,
              "end": 6208
            },
            "start": 6202,
            "end": 6208
          },
          "start": 6199,
          "end": 6208
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6220,
                  "end": 6223
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6224,
                  "end": 6228
                },
                "optional": false,
                "computed": false,
                "start": 6220,
                "end": 6228
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "str",
                "raw": "'str'",
                "start": 6233,
                "end": 6238
              },
              "start": 6220,
              "end": 6238
            },
            "consequent": {
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
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 6257,
                            "end": 6263
                          },
                          "start": 6255,
                          "end": 6263
                        },
                        "start": 6254,
                        "end": 6263
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6266,
                          "end": 6269
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "payload",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6270,
                          "end": 6277
                        },
                        "optional": false,
                        "computed": false,
                        "start": 6266,
                        "end": 6277
                      },
                      "definite": false,
                      "start": 6254,
                      "end": 6277
                    }
                  ],
                  "declare": false,
                  "start": 6250,
                  "end": 6278
                }
              ],
              "start": 6240,
              "end": 6284
            },
            "alternate": {
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
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 6311,
                            "end": 6317
                          },
                          "start": 6309,
                          "end": 6317
                        },
                        "start": 6308,
                        "end": 6317
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6320,
                          "end": 6323
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "payload",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6324,
                          "end": 6331
                        },
                        "optional": false,
                        "computed": false,
                        "start": 6320,
                        "end": 6331
                      },
                      "definite": false,
                      "start": 6308,
                      "end": 6331
                    }
                  ],
                  "declare": false,
                  "start": 6304,
                  "end": 6332
                }
              ],
              "start": 6294,
              "end": 6338
            },
            "start": 6216,
            "end": 6338
          }
        ],
        "start": 6210,
        "end": 6340
      },
      "expression": false,
      "start": 6186,
      "end": 6340
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 6351,
        "end": 6354
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 6357,
                "end": 6361
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 6357,
                "end": 6361
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 6357,
              "end": 6361
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "payload",
                "optional": false,
                "typeAnnotation": null,
                "start": 6363,
                "end": 6370
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "payload",
                "optional": false,
                "typeAnnotation": null,
                "start": 6363,
                "end": 6370
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 6363,
              "end": 6370
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Data",
                "optional": false,
                "typeAnnotation": null,
                "start": 6374,
                "end": 6378
              },
              "typeArguments": null,
              "start": 6374,
              "end": 6378
            },
            "start": 6372,
            "end": 6378
          },
          "start": 6355,
          "end": 6378
        }
      ],
      "returnType": null,
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
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 6390,
                "end": 6394
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "str",
                "raw": "'str'",
                "start": 6399,
                "end": 6404
              },
              "start": 6390,
              "end": 6404
            },
            "consequent": {
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
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 6423,
                            "end": 6429
                          },
                          "start": 6421,
                          "end": 6429
                        },
                        "start": 6420,
                        "end": 6429
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "payload",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6432,
                        "end": 6439
                      },
                      "definite": false,
                      "start": 6420,
                      "end": 6439
                    }
                  ],
                  "declare": false,
                  "start": 6416,
                  "end": 6440
                }
              ],
              "start": 6406,
              "end": 6446
            },
            "alternate": {
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
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 6473,
                            "end": 6479
                          },
                          "start": 6471,
                          "end": 6479
                        },
                        "start": 6470,
                        "end": 6479
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "payload",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6482,
                        "end": 6489
                      },
                      "definite": false,
                      "start": 6470,
                      "end": 6489
                    }
                  ],
                  "declare": false,
                  "start": 6466,
                  "end": 6490
                }
              ],
              "start": 6456,
              "end": 6496
            },
            "start": 6386,
            "end": 6496
          }
        ],
        "start": 6380,
        "end": 6498
      },
      "expression": false,
      "start": 6342,
      "end": 6498
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 6528,
            "end": 6531
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6540,
                  "end": 6542
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 6550,
                    "end": 6554
                  },
                  "id": null,
                  "generator": false,
                  "start": 6544,
                  "end": 6554
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 6540,
                "end": 6554
              }
            ],
            "start": 6534,
            "end": 6556
          },
          "definite": false,
          "start": 6528,
          "end": 6556
        }
      ],
      "declare": false,
      "start": 6522,
      "end": 6557
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 6563,
        "end": 6564
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 6566,
        "end": 6569
      },
      "alternate": null,
      "start": 6559,
      "end": 6569
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 6577,
            "end": 6578
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 6581,
                "end": 6584
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "fn",
                "optional": false,
                "typeAnnotation": null,
                "start": 6585,
                "end": 6587
              },
              "optional": false,
              "computed": false,
              "start": 6581,
              "end": 6587
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 6581,
            "end": 6589
          },
          "definite": false,
          "start": 6577,
          "end": 6589
        }
      ],
      "declare": false,
      "start": 6571,
      "end": 6590
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Utils",
        "optional": false,
        "typeAnnotation": null,
        "start": 6665,
        "end": 6670
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isDefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 6682,
              "end": 6691
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6692,
                      "end": 6693
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 6692,
                    "end": 6693
                  }
                ],
                "start": 6691,
                "end": 6694
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6702,
                        "end": 6703
                      },
                      "typeArguments": null,
                      "start": 6702,
                      "end": 6703
                    },
                    "start": 6700,
                    "end": 6703
                  },
                  "start": 6695,
                  "end": 6703
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6706,
                    "end": 6711
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NonNullable",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6715,
                        "end": 6726
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6727,
                              "end": 6728
                            },
                            "typeArguments": null,
                            "start": 6727,
                            "end": 6728
                          }
                        ],
                        "start": 6726,
                        "end": 6729
                      },
                      "start": 6715,
                      "end": 6729
                    },
                    "start": 6715,
                    "end": 6729
                  },
                  "start": 6706,
                  "end": 6729
                },
                "start": 6704,
                "end": 6729
              },
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
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6743,
                        "end": 6748
                      },
                      "operator": "!=",
                      "right": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 6752,
                        "end": 6756
                      },
                      "start": 6743,
                      "end": 6756
                    },
                    "start": 6736,
                    "end": 6757
                  }
                ],
                "start": 6730,
                "end": 6761
              },
              "expression": false,
              "start": 6691,
              "end": 6761
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 6675,
            "end": 6761
          }
        ],
        "start": 6671,
        "end": 6763
      },
      "abstract": false,
      "declare": false,
      "start": 6659,
      "end": 6763
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A53267",
        "optional": false,
        "typeAnnotation": null,
        "start": 6771,
        "end": 6777
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "testNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 6798,
              "end": 6808
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 6810,
                    "end": 6816
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 6819,
                    "end": 6828
                  }
                ],
                "start": 6810,
                "end": 6828
              },
              "start": 6808,
              "end": 6828
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": "public",
            "start": 6782,
            "end": 6829
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 6833,
              "end": 6836
            },
            "value": {
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
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "isNumber",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6851,
                          "end": 6859
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Utils",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6862,
                              "end": 6867
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "isDefined",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6868,
                              "end": 6877
                            },
                            "optional": false,
                            "computed": false,
                            "start": 6862,
                            "end": 6877
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 6878,
                                "end": 6882
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "testNumber",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6883,
                                "end": 6893
                              },
                              "optional": false,
                              "computed": false,
                              "start": 6878,
                              "end": 6893
                            }
                          ],
                          "optional": false,
                          "start": 6862,
                          "end": 6894
                        },
                        "definite": false,
                        "start": 6851,
                        "end": 6894
                      }
                    ],
                    "declare": false,
                    "start": 6845,
                    "end": 6895
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isNumber",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6905,
                      "end": 6913
                    },
                    "consequent": {
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
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 6932,
                                    "end": 6938
                                  },
                                  "start": 6930,
                                  "end": 6938
                                },
                                "start": 6929,
                                "end": 6938
                              },
                              "init": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 6941,
                                  "end": 6945
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "testNumber",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6946,
                                  "end": 6956
                                },
                                "optional": false,
                                "computed": false,
                                "start": 6941,
                                "end": 6956
                              },
                              "definite": false,
                              "start": 6929,
                              "end": 6956
                            }
                          ],
                          "declare": false,
                          "start": 6923,
                          "end": 6957
                        }
                      ],
                      "start": 6915,
                      "end": 6963
                    },
                    "alternate": null,
                    "start": 6901,
                    "end": 6963
                  }
                ],
                "start": 6839,
                "end": 6967
              },
              "expression": false,
              "start": 6836,
              "end": 6967
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 6833,
            "end": 6967
          }
        ],
        "start": 6778,
        "end": 6969
      },
      "abstract": false,
      "declare": false,
      "start": 6765,
      "end": 6969
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 49,
  "end": 6969
}
```
