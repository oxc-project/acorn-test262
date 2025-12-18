__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 49,
    "end": 57,
    "range": [
      49,
      57
    ]
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 58,
    "end": 61,
    "range": [
      58,
      61
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 61,
    "end": 62,
    "range": [
      61,
      62
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 63,
    "end": 64,
    "range": [
      63,
      64
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 65,
    "end": 71,
    "range": [
      65,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 74,
    "end": 80,
    "range": [
      74,
      80
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 88,
    "end": 93,
    "range": [
      88,
      93
    ]
  },
  {
    "type": "Identifier",
    "value": "isString",
    "start": 94,
    "end": 102,
    "range": [
      94,
      102
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 105,
    "end": 111,
    "range": [
      105,
      111
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 114,
    "end": 117,
    "range": [
      114,
      117
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 118,
    "end": 126,
    "range": [
      118,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 132,
    "end": 134,
    "range": [
      132,
      134
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 135,
    "end": 136,
    "range": [
      135,
      136
    ]
  },
  {
    "type": "Identifier",
    "value": "isString",
    "start": 136,
    "end": 144,
    "range": [
      136,
      144
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 144,
    "end": 145,
    "range": [
      144,
      145
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 156,
    "end": 159,
    "range": [
      156,
      159
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 163,
    "end": 169,
    "range": [
      163,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 179,
    "end": 180,
    "range": [
      179,
      180
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 185,
    "end": 189,
    "range": [
      185,
      189
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 190,
    "end": 191,
    "range": [
      190,
      191
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 200,
    "end": 203,
    "range": [
      200,
      203
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 207,
    "end": 213,
    "range": [
      207,
      213
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 223,
    "end": 224,
    "range": [
      223,
      224
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 228,
    "end": 236,
    "range": [
      228,
      236
    ]
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 237,
    "end": 240,
    "range": [
      237,
      240
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 241,
    "end": 242,
    "range": [
      241,
      242
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 242,
    "end": 243,
    "range": [
      242,
      243
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 244,
    "end": 251,
    "range": [
      244,
      251
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 251,
    "end": 252,
    "range": [
      251,
      252
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 259,
    "end": 264,
    "range": [
      259,
      264
    ]
  },
  {
    "type": "Identifier",
    "value": "isString",
    "start": 265,
    "end": 273,
    "range": [
      265,
      273
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 274,
    "end": 275,
    "range": [
      274,
      275
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 276,
    "end": 282,
    "range": [
      276,
      282
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 283,
    "end": 284,
    "range": [
      283,
      284
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 285,
    "end": 288,
    "range": [
      285,
      288
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 289,
    "end": 297,
    "range": [
      289,
      297
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 297,
    "end": 298,
    "range": [
      297,
      298
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 303,
    "end": 305,
    "range": [
      303,
      305
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 306,
    "end": 307,
    "range": [
      306,
      307
    ]
  },
  {
    "type": "Identifier",
    "value": "isString",
    "start": 307,
    "end": 315,
    "range": [
      307,
      315
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 315,
    "end": 316,
    "range": [
      315,
      316
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 317,
    "end": 318,
    "range": [
      317,
      318
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 327,
    "end": 330,
    "range": [
      327,
      330
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 331,
    "end": 332,
    "range": [
      331,
      332
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 332,
    "end": 333,
    "range": [
      332,
      333
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 334,
    "end": 340,
    "range": [
      334,
      340
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 341,
    "end": 342,
    "range": [
      341,
      342
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 343,
    "end": 344,
    "range": [
      343,
      344
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 344,
    "end": 345,
    "range": [
      344,
      345
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 350,
    "end": 351,
    "range": [
      350,
      351
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 352,
    "end": 353,
    "range": [
      352,
      353
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 355,
    "end": 363,
    "range": [
      355,
      363
    ]
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 364,
    "end": 367,
    "range": [
      364,
      367
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 367,
    "end": 368,
    "range": [
      367,
      368
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 368,
    "end": 369,
    "range": [
      368,
      369
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 369,
    "end": 370,
    "range": [
      369,
      370
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 371,
    "end": 377,
    "range": [
      371,
      377
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 378,
    "end": 379,
    "range": [
      378,
      379
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 380,
    "end": 386,
    "range": [
      380,
      386
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 387,
    "end": 388,
    "range": [
      387,
      388
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 389,
    "end": 396,
    "range": [
      389,
      396
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 396,
    "end": 397,
    "range": [
      396,
      397
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 398,
    "end": 399,
    "range": [
      398,
      399
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 404,
    "end": 409,
    "range": [
      404,
      409
    ]
  },
  {
    "type": "Identifier",
    "value": "isString",
    "start": 410,
    "end": 418,
    "range": [
      410,
      418
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 419,
    "end": 420,
    "range": [
      419,
      420
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 421,
    "end": 427,
    "range": [
      421,
      427
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 428,
    "end": 429,
    "range": [
      428,
      429
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 430,
    "end": 433,
    "range": [
      430,
      433
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 434,
    "end": 442,
    "range": [
      434,
      442
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 448,
    "end": 453,
    "range": [
      448,
      453
    ]
  },
  {
    "type": "Identifier",
    "value": "isNumber",
    "start": 454,
    "end": 462,
    "range": [
      454,
      462
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 463,
    "end": 464,
    "range": [
      463,
      464
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 465,
    "end": 471,
    "range": [
      465,
      471
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 472,
    "end": 473,
    "range": [
      472,
      473
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 474,
    "end": 477,
    "range": [
      474,
      477
    ]
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 478,
    "end": 486,
    "range": [
      478,
      486
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 486,
    "end": 487,
    "range": [
      486,
      487
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 492,
    "end": 494,
    "range": [
      492,
      494
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 495,
    "end": 496,
    "range": [
      495,
      496
    ]
  },
  {
    "type": "Identifier",
    "value": "isString",
    "start": 496,
    "end": 504,
    "range": [
      496,
      504
    ]
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 505,
    "end": 507,
    "range": [
      505,
      507
    ]
  },
  {
    "type": "Identifier",
    "value": "isNumber",
    "start": 508,
    "end": 516,
    "range": [
      508,
      516
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 516,
    "end": 517,
    "range": [
      516,
      517
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 518,
    "end": 519,
    "range": [
      518,
      519
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 528,
    "end": 531,
    "range": [
      528,
      531
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 532,
    "end": 533,
    "range": [
      532,
      533
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 533,
    "end": 534,
    "range": [
      533,
      534
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 535,
    "end": 541,
    "range": [
      535,
      541
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 542,
    "end": 543,
    "range": [
      542,
      543
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 544,
    "end": 550,
    "range": [
      544,
      550
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 551,
    "end": 552,
    "range": [
      551,
      552
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 553,
    "end": 554,
    "range": [
      553,
      554
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 554,
    "end": 555,
    "range": [
      554,
      555
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 560,
    "end": 561,
    "range": [
      560,
      561
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 566,
    "end": 570,
    "range": [
      566,
      570
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 571,
    "end": 572,
    "range": [
      571,
      572
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 581,
    "end": 584,
    "range": [
      581,
      584
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 585,
    "end": 586,
    "range": [
      585,
      586
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 586,
    "end": 587,
    "range": [
      586,
      587
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 588,
    "end": 595,
    "range": [
      588,
      595
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 596,
    "end": 597,
    "range": [
      596,
      597
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 598,
    "end": 599,
    "range": [
      598,
      599
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 599,
    "end": 600,
    "range": [
      599,
      600
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 605,
    "end": 606,
    "range": [
      605,
      606
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 607,
    "end": 608,
    "range": [
      607,
      608
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 610,
    "end": 618,
    "range": [
      610,
      618
    ]
  },
  {
    "type": "Identifier",
    "value": "f13",
    "start": 619,
    "end": 622,
    "range": [
      619,
      622
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 622,
    "end": 623,
    "range": [
      622,
      623
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 623,
    "end": 624,
    "range": [
      623,
      624
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 624,
    "end": 625,
    "range": [
      624,
      625
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 626,
    "end": 632,
    "range": [
      626,
      632
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 633,
    "end": 634,
    "range": [
      633,
      634
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 635,
    "end": 641,
    "range": [
      635,
      641
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 642,
    "end": 643,
    "range": [
      642,
      643
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 644,
    "end": 651,
    "range": [
      644,
      651
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 651,
    "end": 652,
    "range": [
      651,
      652
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 653,
    "end": 654,
    "range": [
      653,
      654
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 659,
    "end": 664,
    "range": [
      659,
      664
    ]
  },
  {
    "type": "Identifier",
    "value": "isString",
    "start": 665,
    "end": 673,
    "range": [
      665,
      673
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 674,
    "end": 675,
    "range": [
      674,
      675
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 676,
    "end": 682,
    "range": [
      676,
      682
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 683,
    "end": 684,
    "range": [
      683,
      684
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 685,
    "end": 688,
    "range": [
      685,
      688
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 689,
    "end": 697,
    "range": [
      689,
      697
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 697,
    "end": 698,
    "range": [
      697,
      698
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 703,
    "end": 708,
    "range": [
      703,
      708
    ]
  },
  {
    "type": "Identifier",
    "value": "isNumber",
    "start": 709,
    "end": 717,
    "range": [
      709,
      717
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 718,
    "end": 719,
    "range": [
      718,
      719
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 720,
    "end": 726,
    "range": [
      720,
      726
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 727,
    "end": 728,
    "range": [
      727,
      728
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 729,
    "end": 732,
    "range": [
      729,
      732
    ]
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 733,
    "end": 741,
    "range": [
      733,
      741
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 741,
    "end": 742,
    "range": [
      741,
      742
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 747,
    "end": 752,
    "range": [
      747,
      752
    ]
  },
  {
    "type": "Identifier",
    "value": "isStringOrNumber",
    "start": 753,
    "end": 769,
    "range": [
      753,
      769
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 770,
    "end": 771,
    "range": [
      770,
      771
    ]
  },
  {
    "type": "Identifier",
    "value": "isString",
    "start": 772,
    "end": 780,
    "range": [
      772,
      780
    ]
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 781,
    "end": 783,
    "range": [
      781,
      783
    ]
  },
  {
    "type": "Identifier",
    "value": "isNumber",
    "start": 784,
    "end": 792,
    "range": [
      784,
      792
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 792,
    "end": 793,
    "range": [
      792,
      793
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 798,
    "end": 800,
    "range": [
      798,
      800
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 801,
    "end": 802,
    "range": [
      801,
      802
    ]
  },
  {
    "type": "Identifier",
    "value": "isStringOrNumber",
    "start": 802,
    "end": 818,
    "range": [
      802,
      818
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 818,
    "end": 819,
    "range": [
      818,
      819
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 820,
    "end": 821,
    "range": [
      820,
      821
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 830,
    "end": 833,
    "range": [
      830,
      833
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 834,
    "end": 835,
    "range": [
      834,
      835
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 835,
    "end": 836,
    "range": [
      835,
      836
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 837,
    "end": 843,
    "range": [
      837,
      843
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 844,
    "end": 845,
    "range": [
      844,
      845
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 846,
    "end": 852,
    "range": [
      846,
      852
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 853,
    "end": 854,
    "range": [
      853,
      854
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 855,
    "end": 856,
    "range": [
      855,
      856
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 856,
    "end": 857,
    "range": [
      856,
      857
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 862,
    "end": 863,
    "range": [
      862,
      863
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 868,
    "end": 872,
    "range": [
      868,
      872
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 873,
    "end": 874,
    "range": [
      873,
      874
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 883,
    "end": 886,
    "range": [
      883,
      886
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 887,
    "end": 888,
    "range": [
      887,
      888
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 888,
    "end": 889,
    "range": [
      888,
      889
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 890,
    "end": 897,
    "range": [
      890,
      897
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 898,
    "end": 899,
    "range": [
      898,
      899
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 900,
    "end": 901,
    "range": [
      900,
      901
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 901,
    "end": 902,
    "range": [
      901,
      902
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 907,
    "end": 908,
    "range": [
      907,
      908
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 909,
    "end": 910,
    "range": [
      909,
      910
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 912,
    "end": 920,
    "range": [
      912,
      920
    ]
  },
  {
    "type": "Identifier",
    "value": "f14",
    "start": 921,
    "end": 924,
    "range": [
      921,
      924
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 924,
    "end": 925,
    "range": [
      924,
      925
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 925,
    "end": 926,
    "range": [
      925,
      926
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 926,
    "end": 927,
    "range": [
      926,
      927
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 928,
    "end": 934,
    "range": [
      928,
      934
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 935,
    "end": 936,
    "range": [
      935,
      936
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 937,
    "end": 941,
    "range": [
      937,
      941
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 942,
    "end": 943,
    "range": [
      942,
      943
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 944,
    "end": 953,
    "range": [
      944,
      953
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 953,
    "end": 954,
    "range": [
      953,
      954
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 954,
    "end": 955,
    "range": [
      954,
      955
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 956,
    "end": 962,
    "range": [
      956,
      962
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 963,
    "end": 964,
    "range": [
      963,
      964
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 965,
    "end": 969,
    "range": [
      965,
      969
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 970,
    "end": 971,
    "range": [
      970,
      971
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 976,
    "end": 981,
    "range": [
      976,
      981
    ]
  },
  {
    "type": "Identifier",
    "value": "notUndefined",
    "start": 982,
    "end": 994,
    "range": [
      982,
      994
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 995,
    "end": 996,
    "range": [
      995,
      996
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 997,
    "end": 998,
    "range": [
      997,
      998
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 999,
    "end": 1002,
    "range": [
      999,
      1002
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1003,
    "end": 1012,
    "range": [
      1003,
      1012
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1012,
    "end": 1013,
    "range": [
      1012,
      1013
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1018,
    "end": 1024,
    "range": [
      1018,
      1024
    ]
  },
  {
    "type": "Identifier",
    "value": "notUndefined",
    "start": 1025,
    "end": 1037,
    "range": [
      1025,
      1037
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1038,
    "end": 1039,
    "range": [
      1038,
      1039
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1040,
    "end": 1041,
    "range": [
      1040,
      1041
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1042,
    "end": 1043,
    "range": [
      1042,
      1043
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1044,
    "end": 1045,
    "range": [
      1044,
      1045
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1045,
    "end": 1046,
    "range": [
      1045,
      1046
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1047,
    "end": 1048,
    "range": [
      1047,
      1048
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1050,
    "end": 1058,
    "range": [
      1050,
      1058
    ]
  },
  {
    "type": "Identifier",
    "value": "f15",
    "start": 1059,
    "end": 1062,
    "range": [
      1059,
      1062
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1062,
    "end": 1063,
    "range": [
      1062,
      1063
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1063,
    "end": 1066,
    "range": [
      1063,
      1066
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1066,
    "end": 1067,
    "range": [
      1066,
      1067
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1068,
    "end": 1069,
    "range": [
      1068,
      1069
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1070,
    "end": 1078,
    "range": [
      1070,
      1078
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1079,
    "end": 1080,
    "range": [
      1079,
      1080
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1080,
    "end": 1081,
    "range": [
      1080,
      1081
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1082,
    "end": 1088,
    "range": [
      1082,
      1088
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1089,
    "end": 1090,
    "range": [
      1089,
      1090
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1091,
    "end": 1097,
    "range": [
      1091,
      1097
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1098,
    "end": 1099,
    "range": [
      1098,
      1099
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1099,
    "end": 1100,
    "range": [
      1099,
      1100
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1101,
    "end": 1102,
    "range": [
      1101,
      1102
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1107,
    "end": 1112,
    "range": [
      1107,
      1112
    ]
  },
  {
    "type": "Identifier",
    "value": "isString",
    "start": 1113,
    "end": 1121,
    "range": [
      1113,
      1121
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1122,
    "end": 1123,
    "range": [
      1122,
      1123
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1124,
    "end": 1130,
    "range": [
      1124,
      1130
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1131,
    "end": 1134,
    "range": [
      1131,
      1134
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1134,
    "end": 1135,
    "range": [
      1134,
      1135
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1135,
    "end": 1136,
    "range": [
      1135,
      1136
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1137,
    "end": 1140,
    "range": [
      1137,
      1140
    ]
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 1141,
    "end": 1149,
    "range": [
      1141,
      1149
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1149,
    "end": 1150,
    "range": [
      1149,
      1150
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1155,
    "end": 1157,
    "range": [
      1155,
      1157
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1158,
    "end": 1159,
    "range": [
      1158,
      1159
    ]
  },
  {
    "type": "Identifier",
    "value": "isString",
    "start": 1159,
    "end": 1167,
    "range": [
      1159,
      1167
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1167,
    "end": 1168,
    "range": [
      1167,
      1168
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1169,
    "end": 1170,
    "range": [
      1169,
      1170
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1179,
    "end": 1182,
    "range": [
      1179,
      1182
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1183,
    "end": 1184,
    "range": [
      1183,
      1184
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1184,
    "end": 1185,
    "range": [
      1184,
      1185
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1186,
    "end": 1192,
    "range": [
      1186,
      1192
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1193,
    "end": 1194,
    "range": [
      1193,
      1194
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1195,
    "end": 1198,
    "range": [
      1195,
      1198
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1198,
    "end": 1199,
    "range": [
      1198,
      1199
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1199,
    "end": 1200,
    "range": [
      1199,
      1200
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1200,
    "end": 1201,
    "range": [
      1200,
      1201
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1206,
    "end": 1207,
    "range": [
      1206,
      1207
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1208,
    "end": 1209,
    "range": [
      1208,
      1209
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1211,
    "end": 1219,
    "range": [
      1211,
      1219
    ]
  },
  {
    "type": "Identifier",
    "value": "f16",
    "start": 1220,
    "end": 1223,
    "range": [
      1220,
      1223
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1223,
    "end": 1224,
    "range": [
      1223,
      1224
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1224,
    "end": 1227,
    "range": [
      1224,
      1227
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1227,
    "end": 1228,
    "range": [
      1227,
      1228
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1229,
    "end": 1230,
    "range": [
      1229,
      1230
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1231,
    "end": 1239,
    "range": [
      1231,
      1239
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1240,
    "end": 1241,
    "range": [
      1240,
      1241
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1241,
    "end": 1242,
    "range": [
      1241,
      1242
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1243,
    "end": 1249,
    "range": [
      1243,
      1249
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1250,
    "end": 1251,
    "range": [
      1250,
      1251
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1252,
    "end": 1258,
    "range": [
      1252,
      1258
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1259,
    "end": 1260,
    "range": [
      1259,
      1260
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1260,
    "end": 1261,
    "range": [
      1260,
      1261
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1262,
    "end": 1263,
    "range": [
      1262,
      1263
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1268,
    "end": 1273,
    "range": [
      1268,
      1273
    ]
  },
  {
    "type": "Identifier",
    "value": "isString",
    "start": 1274,
    "end": 1282,
    "range": [
      1274,
      1282
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1283,
    "end": 1284,
    "range": [
      1283,
      1284
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1285,
    "end": 1291,
    "range": [
      1285,
      1291
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1292,
    "end": 1295,
    "range": [
      1292,
      1295
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1295,
    "end": 1296,
    "range": [
      1295,
      1296
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1296,
    "end": 1297,
    "range": [
      1296,
      1297
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1298,
    "end": 1301,
    "range": [
      1298,
      1301
    ]
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 1302,
    "end": 1310,
    "range": [
      1302,
      1310
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1310,
    "end": 1311,
    "range": [
      1310,
      1311
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1316,
    "end": 1319,
    "range": [
      1316,
      1319
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1320,
    "end": 1321,
    "range": [
      1320,
      1321
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1322,
    "end": 1323,
    "range": [
      1322,
      1323
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1324,
    "end": 1325,
    "range": [
      1324,
      1325
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1325,
    "end": 1326,
    "range": [
      1325,
      1326
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1327,
    "end": 1329,
    "range": [
      1327,
      1329
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1330,
    "end": 1331,
    "range": [
      1330,
      1331
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1331,
    "end": 1332,
    "range": [
      1331,
      1332
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1337,
    "end": 1339,
    "range": [
      1337,
      1339
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1340,
    "end": 1341,
    "range": [
      1340,
      1341
    ]
  },
  {
    "type": "Identifier",
    "value": "isString",
    "start": 1341,
    "end": 1349,
    "range": [
      1341,
      1349
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1349,
    "end": 1350,
    "range": [
      1349,
      1350
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1351,
    "end": 1352,
    "range": [
      1351,
      1352
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1361,
    "end": 1364,
    "range": [
      1361,
      1364
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1365,
    "end": 1366,
    "range": [
      1365,
      1366
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1366,
    "end": 1367,
    "range": [
      1366,
      1367
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1368,
    "end": 1374,
    "range": [
      1368,
      1374
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1375,
    "end": 1376,
    "range": [
      1375,
      1376
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1377,
    "end": 1380,
    "range": [
      1377,
      1380
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1380,
    "end": 1381,
    "range": [
      1380,
      1381
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1381,
    "end": 1382,
    "range": [
      1381,
      1382
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1382,
    "end": 1383,
    "range": [
      1382,
      1383
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1445,
    "end": 1446,
    "range": [
      1445,
      1446
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1447,
    "end": 1448,
    "range": [
      1447,
      1448
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1450,
    "end": 1458,
    "range": [
      1450,
      1458
    ]
  },
  {
    "type": "Identifier",
    "value": "f17",
    "start": 1459,
    "end": 1462,
    "range": [
      1459,
      1462
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1462,
    "end": 1463,
    "range": [
      1462,
      1463
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1463,
    "end": 1466,
    "range": [
      1463,
      1466
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1466,
    "end": 1467,
    "range": [
      1466,
      1467
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1468,
    "end": 1476,
    "range": [
      1468,
      1476
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1477,
    "end": 1478,
    "range": [
      1477,
      1478
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1478,
    "end": 1484,
    "range": [
      1478,
      1484
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1485,
    "end": 1486,
    "range": [
      1485,
      1486
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1487,
    "end": 1493,
    "range": [
      1487,
      1493
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1493,
    "end": 1494,
    "range": [
      1493,
      1494
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1494,
    "end": 1495,
    "range": [
      1494,
      1495
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1496,
    "end": 1497,
    "range": [
      1496,
      1497
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1502,
    "end": 1507,
    "range": [
      1502,
      1507
    ]
  },
  {
    "type": "Identifier",
    "value": "isString",
    "start": 1508,
    "end": 1516,
    "range": [
      1508,
      1516
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1517,
    "end": 1518,
    "range": [
      1517,
      1518
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1519,
    "end": 1525,
    "range": [
      1519,
      1525
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1526,
    "end": 1529,
    "range": [
      1526,
      1529
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1529,
    "end": 1530,
    "range": [
      1529,
      1530
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1530,
    "end": 1531,
    "range": [
      1530,
      1531
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1531,
    "end": 1532,
    "range": [
      1531,
      1532
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1533,
    "end": 1536,
    "range": [
      1533,
      1536
    ]
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 1537,
    "end": 1545,
    "range": [
      1537,
      1545
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1545,
    "end": 1546,
    "range": [
      1545,
      1546
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1551,
    "end": 1553,
    "range": [
      1551,
      1553
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1554,
    "end": 1555,
    "range": [
      1554,
      1555
    ]
  },
  {
    "type": "Identifier",
    "value": "isString",
    "start": 1555,
    "end": 1563,
    "range": [
      1555,
      1563
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1563,
    "end": 1564,
    "range": [
      1563,
      1564
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1565,
    "end": 1566,
    "range": [
      1565,
      1566
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1575,
    "end": 1578,
    "range": [
      1575,
      1578
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1579,
    "end": 1580,
    "range": [
      1579,
      1580
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1580,
    "end": 1581,
    "range": [
      1580,
      1581
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1582,
    "end": 1588,
    "range": [
      1582,
      1588
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1589,
    "end": 1590,
    "range": [
      1589,
      1590
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1591,
    "end": 1594,
    "range": [
      1591,
      1594
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1594,
    "end": 1595,
    "range": [
      1594,
      1595
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1595,
    "end": 1596,
    "range": [
      1595,
      1596
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1596,
    "end": 1597,
    "range": [
      1596,
      1597
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1597,
    "end": 1598,
    "range": [
      1597,
      1598
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1603,
    "end": 1604,
    "range": [
      1603,
      1604
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1605,
    "end": 1606,
    "range": [
      1605,
      1606
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1608,
    "end": 1616,
    "range": [
      1608,
      1616
    ]
  },
  {
    "type": "Identifier",
    "value": "f18",
    "start": 1617,
    "end": 1620,
    "range": [
      1617,
      1620
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1620,
    "end": 1621,
    "range": [
      1620,
      1621
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1621,
    "end": 1624,
    "range": [
      1621,
      1624
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1624,
    "end": 1625,
    "range": [
      1624,
      1625
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1626,
    "end": 1634,
    "range": [
      1626,
      1634
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1635,
    "end": 1636,
    "range": [
      1635,
      1636
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1636,
    "end": 1642,
    "range": [
      1636,
      1642
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1643,
    "end": 1644,
    "range": [
      1643,
      1644
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1645,
    "end": 1651,
    "range": [
      1645,
      1651
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1651,
    "end": 1652,
    "range": [
      1651,
      1652
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1652,
    "end": 1653,
    "range": [
      1652,
      1653
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1654,
    "end": 1655,
    "range": [
      1654,
      1655
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1660,
    "end": 1665,
    "range": [
      1660,
      1665
    ]
  },
  {
    "type": "Identifier",
    "value": "isString",
    "start": 1666,
    "end": 1674,
    "range": [
      1666,
      1674
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1675,
    "end": 1676,
    "range": [
      1675,
      1676
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1677,
    "end": 1683,
    "range": [
      1677,
      1683
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1684,
    "end": 1687,
    "range": [
      1684,
      1687
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1687,
    "end": 1688,
    "range": [
      1687,
      1688
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1688,
    "end": 1689,
    "range": [
      1688,
      1689
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1689,
    "end": 1690,
    "range": [
      1689,
      1690
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1691,
    "end": 1694,
    "range": [
      1691,
      1694
    ]
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 1695,
    "end": 1703,
    "range": [
      1695,
      1703
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1703,
    "end": 1704,
    "range": [
      1703,
      1704
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1709,
    "end": 1712,
    "range": [
      1709,
      1712
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1713,
    "end": 1714,
    "range": [
      1713,
      1714
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1715,
    "end": 1716,
    "range": [
      1715,
      1716
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 1716,
    "end": 1718,
    "range": [
      1716,
      1718
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1718,
    "end": 1719,
    "range": [
      1718,
      1719
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1719,
    "end": 1720,
    "range": [
      1719,
      1720
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1725,
    "end": 1727,
    "range": [
      1725,
      1727
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1728,
    "end": 1729,
    "range": [
      1728,
      1729
    ]
  },
  {
    "type": "Identifier",
    "value": "isString",
    "start": 1729,
    "end": 1737,
    "range": [
      1729,
      1737
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1737,
    "end": 1738,
    "range": [
      1737,
      1738
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1739,
    "end": 1740,
    "range": [
      1739,
      1740
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1749,
    "end": 1752,
    "range": [
      1749,
      1752
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1753,
    "end": 1754,
    "range": [
      1753,
      1754
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1754,
    "end": 1755,
    "range": [
      1754,
      1755
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1756,
    "end": 1762,
    "range": [
      1756,
      1762
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1763,
    "end": 1764,
    "range": [
      1763,
      1764
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1765,
    "end": 1768,
    "range": [
      1765,
      1768
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1768,
    "end": 1769,
    "range": [
      1768,
      1769
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1769,
    "end": 1770,
    "range": [
      1769,
      1770
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1770,
    "end": 1771,
    "range": [
      1770,
      1771
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1771,
    "end": 1772,
    "range": [
      1771,
      1772
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1834,
    "end": 1835,
    "range": [
      1834,
      1835
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1836,
    "end": 1837,
    "range": [
      1836,
      1837
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1839,
    "end": 1847,
    "range": [
      1839,
      1847
    ]
  },
  {
    "type": "Identifier",
    "value": "f20",
    "start": 1848,
    "end": 1851,
    "range": [
      1848,
      1851
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1851,
    "end": 1852,
    "range": [
      1851,
      1852
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1852,
    "end": 1855,
    "range": [
      1852,
      1855
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1855,
    "end": 1856,
    "range": [
      1855,
      1856
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1857,
    "end": 1858,
    "range": [
      1857,
      1858
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1859,
    "end": 1863,
    "range": [
      1859,
      1863
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1863,
    "end": 1864,
    "range": [
      1863,
      1864
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 1865,
    "end": 1870,
    "range": [
      1865,
      1870
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1870,
    "end": 1871,
    "range": [
      1870,
      1871
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1872,
    "end": 1875,
    "range": [
      1872,
      1875
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1875,
    "end": 1876,
    "range": [
      1875,
      1876
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1877,
    "end": 1883,
    "range": [
      1877,
      1883
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1884,
    "end": 1885,
    "range": [
      1884,
      1885
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1886,
    "end": 1887,
    "range": [
      1886,
      1887
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1888,
    "end": 1889,
    "range": [
      1888,
      1889
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1890,
    "end": 1894,
    "range": [
      1890,
      1894
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1894,
    "end": 1895,
    "range": [
      1894,
      1895
    ]
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 1896,
    "end": 1901,
    "range": [
      1896,
      1901
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1901,
    "end": 1902,
    "range": [
      1901,
      1902
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1903,
    "end": 1906,
    "range": [
      1903,
      1906
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1906,
    "end": 1907,
    "range": [
      1906,
      1907
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1908,
    "end": 1914,
    "range": [
      1908,
      1914
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1915,
    "end": 1916,
    "range": [
      1915,
      1916
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1916,
    "end": 1917,
    "range": [
      1916,
      1917
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1918,
    "end": 1919,
    "range": [
      1918,
      1919
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1924,
    "end": 1929,
    "range": [
      1924,
      1929
    ]
  },
  {
    "type": "Identifier",
    "value": "isFoo",
    "start": 1930,
    "end": 1935,
    "range": [
      1930,
      1935
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1936,
    "end": 1937,
    "range": [
      1936,
      1937
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1938,
    "end": 1941,
    "range": [
      1938,
      1941
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1941,
    "end": 1942,
    "range": [
      1941,
      1942
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1942,
    "end": 1946,
    "range": [
      1942,
      1946
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1947,
    "end": 1950,
    "range": [
      1947,
      1950
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 1951,
    "end": 1956,
    "range": [
      1951,
      1956
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1956,
    "end": 1957,
    "range": [
      1956,
      1957
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1962,
    "end": 1964,
    "range": [
      1962,
      1964
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1965,
    "end": 1966,
    "range": [
      1965,
      1966
    ]
  },
  {
    "type": "Identifier",
    "value": "isFoo",
    "start": 1966,
    "end": 1971,
    "range": [
      1966,
      1971
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1971,
    "end": 1972,
    "range": [
      1971,
      1972
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1973,
    "end": 1974,
    "range": [
      1973,
      1974
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1983,
    "end": 1986,
    "range": [
      1983,
      1986
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1986,
    "end": 1987,
    "range": [
      1986,
      1987
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1987,
    "end": 1990,
    "range": [
      1987,
      1990
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1990,
    "end": 1991,
    "range": [
      1990,
      1991
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1996,
    "end": 1997,
    "range": [
      1996,
      1997
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 2002,
    "end": 2006,
    "range": [
      2002,
      2006
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2007,
    "end": 2008,
    "range": [
      2007,
      2008
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 2017,
    "end": 2020,
    "range": [
      2017,
      2020
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2020,
    "end": 2021,
    "range": [
      2020,
      2021
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 2021,
    "end": 2024,
    "range": [
      2021,
      2024
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2024,
    "end": 2025,
    "range": [
      2024,
      2025
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2030,
    "end": 2031,
    "range": [
      2030,
      2031
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2032,
    "end": 2033,
    "range": [
      2032,
      2033
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2035,
    "end": 2043,
    "range": [
      2035,
      2043
    ]
  },
  {
    "type": "Identifier",
    "value": "f21",
    "start": 2044,
    "end": 2047,
    "range": [
      2044,
      2047
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2047,
    "end": 2048,
    "range": [
      2047,
      2048
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 2048,
    "end": 2051,
    "range": [
      2048,
      2051
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2051,
    "end": 2052,
    "range": [
      2051,
      2052
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2053,
    "end": 2054,
    "range": [
      2053,
      2054
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 2055,
    "end": 2059,
    "range": [
      2055,
      2059
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2059,
    "end": 2060,
    "range": [
      2059,
      2060
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 2061,
    "end": 2066,
    "range": [
      2061,
      2066
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2066,
    "end": 2067,
    "range": [
      2066,
      2067
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2068,
    "end": 2071,
    "range": [
      2068,
      2071
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2071,
    "end": 2072,
    "range": [
      2071,
      2072
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2073,
    "end": 2079,
    "range": [
      2073,
      2079
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2080,
    "end": 2081,
    "range": [
      2080,
      2081
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2082,
    "end": 2083,
    "range": [
      2082,
      2083
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2084,
    "end": 2085,
    "range": [
      2084,
      2085
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 2086,
    "end": 2090,
    "range": [
      2086,
      2090
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2090,
    "end": 2091,
    "range": [
      2090,
      2091
    ]
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 2092,
    "end": 2097,
    "range": [
      2092,
      2097
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2097,
    "end": 2098,
    "range": [
      2097,
      2098
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 2099,
    "end": 2102,
    "range": [
      2099,
      2102
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2102,
    "end": 2103,
    "range": [
      2102,
      2103
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2104,
    "end": 2110,
    "range": [
      2104,
      2110
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2111,
    "end": 2112,
    "range": [
      2111,
      2112
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2112,
    "end": 2113,
    "range": [
      2112,
      2113
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2114,
    "end": 2115,
    "range": [
      2114,
      2115
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2120,
    "end": 2125,
    "range": [
      2120,
      2125
    ]
  },
  {
    "type": "Identifier",
    "value": "isFoo",
    "start": 2126,
    "end": 2131,
    "range": [
      2126,
      2131
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2131,
    "end": 2132,
    "range": [
      2131,
      2132
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2133,
    "end": 2140,
    "range": [
      2133,
      2140
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2141,
    "end": 2142,
    "range": [
      2141,
      2142
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 2143,
    "end": 2146,
    "range": [
      2143,
      2146
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2146,
    "end": 2147,
    "range": [
      2146,
      2147
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 2147,
    "end": 2151,
    "range": [
      2147,
      2151
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2152,
    "end": 2155,
    "range": [
      2152,
      2155
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 2156,
    "end": 2161,
    "range": [
      2156,
      2161
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2161,
    "end": 2162,
    "range": [
      2161,
      2162
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2167,
    "end": 2169,
    "range": [
      2167,
      2169
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2170,
    "end": 2171,
    "range": [
      2170,
      2171
    ]
  },
  {
    "type": "Identifier",
    "value": "isFoo",
    "start": 2171,
    "end": 2176,
    "range": [
      2171,
      2176
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2176,
    "end": 2177,
    "range": [
      2176,
      2177
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2178,
    "end": 2179,
    "range": [
      2178,
      2179
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 2188,
    "end": 2191,
    "range": [
      2188,
      2191
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2191,
    "end": 2192,
    "range": [
      2191,
      2192
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2192,
    "end": 2195,
    "range": [
      2192,
      2195
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2195,
    "end": 2196,
    "range": [
      2195,
      2196
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2252,
    "end": 2253,
    "range": [
      2252,
      2253
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 2258,
    "end": 2262,
    "range": [
      2258,
      2262
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2263,
    "end": 2264,
    "range": [
      2263,
      2264
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 2273,
    "end": 2276,
    "range": [
      2273,
      2276
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2276,
    "end": 2277,
    "range": [
      2276,
      2277
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 2277,
    "end": 2280,
    "range": [
      2277,
      2280
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2280,
    "end": 2281,
    "range": [
      2280,
      2281
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2337,
    "end": 2338,
    "range": [
      2337,
      2338
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2339,
    "end": 2340,
    "range": [
      2339,
      2340
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2342,
    "end": 2350,
    "range": [
      2342,
      2350
    ]
  },
  {
    "type": "Identifier",
    "value": "f22",
    "start": 2351,
    "end": 2354,
    "range": [
      2351,
      2354
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2354,
    "end": 2355,
    "range": [
      2354,
      2355
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 2355,
    "end": 2358,
    "range": [
      2355,
      2358
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2358,
    "end": 2359,
    "range": [
      2358,
      2359
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2360,
    "end": 2361,
    "range": [
      2360,
      2361
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 2362,
    "end": 2366,
    "range": [
      2362,
      2366
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2366,
    "end": 2367,
    "range": [
      2366,
      2367
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 2368,
    "end": 2373,
    "range": [
      2368,
      2373
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2373,
    "end": 2374,
    "range": [
      2373,
      2374
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2375,
    "end": 2378,
    "range": [
      2375,
      2378
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2378,
    "end": 2379,
    "range": [
      2378,
      2379
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2380,
    "end": 2386,
    "range": [
      2380,
      2386
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2387,
    "end": 2388,
    "range": [
      2387,
      2388
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2389,
    "end": 2390,
    "range": [
      2389,
      2390
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2391,
    "end": 2392,
    "range": [
      2391,
      2392
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 2393,
    "end": 2397,
    "range": [
      2393,
      2397
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2397,
    "end": 2398,
    "range": [
      2397,
      2398
    ]
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 2399,
    "end": 2404,
    "range": [
      2399,
      2404
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2404,
    "end": 2405,
    "range": [
      2404,
      2405
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 2406,
    "end": 2409,
    "range": [
      2406,
      2409
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2409,
    "end": 2410,
    "range": [
      2409,
      2410
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2411,
    "end": 2417,
    "range": [
      2411,
      2417
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2418,
    "end": 2419,
    "range": [
      2418,
      2419
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2419,
    "end": 2420,
    "range": [
      2419,
      2420
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2421,
    "end": 2422,
    "range": [
      2421,
      2422
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2427,
    "end": 2430,
    "range": [
      2427,
      2430
    ]
  },
  {
    "type": "Identifier",
    "value": "isFoo",
    "start": 2431,
    "end": 2436,
    "range": [
      2431,
      2436
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2437,
    "end": 2438,
    "range": [
      2437,
      2438
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 2439,
    "end": 2442,
    "range": [
      2439,
      2442
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2442,
    "end": 2443,
    "range": [
      2442,
      2443
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 2443,
    "end": 2447,
    "range": [
      2443,
      2447
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2448,
    "end": 2451,
    "range": [
      2448,
      2451
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 2452,
    "end": 2457,
    "range": [
      2452,
      2457
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2457,
    "end": 2458,
    "range": [
      2457,
      2458
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2463,
    "end": 2465,
    "range": [
      2463,
      2465
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2466,
    "end": 2467,
    "range": [
      2466,
      2467
    ]
  },
  {
    "type": "Identifier",
    "value": "isFoo",
    "start": 2467,
    "end": 2472,
    "range": [
      2467,
      2472
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2472,
    "end": 2473,
    "range": [
      2472,
      2473
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2474,
    "end": 2475,
    "range": [
      2474,
      2475
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 2484,
    "end": 2487,
    "range": [
      2484,
      2487
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2487,
    "end": 2488,
    "range": [
      2487,
      2488
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2488,
    "end": 2491,
    "range": [
      2488,
      2491
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2491,
    "end": 2492,
    "range": [
      2491,
      2492
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2539,
    "end": 2540,
    "range": [
      2539,
      2540
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 2545,
    "end": 2549,
    "range": [
      2545,
      2549
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2550,
    "end": 2551,
    "range": [
      2550,
      2551
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 2560,
    "end": 2563,
    "range": [
      2560,
      2563
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2563,
    "end": 2564,
    "range": [
      2563,
      2564
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 2564,
    "end": 2567,
    "range": [
      2564,
      2567
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2567,
    "end": 2568,
    "range": [
      2567,
      2568
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2615,
    "end": 2616,
    "range": [
      2615,
      2616
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2617,
    "end": 2618,
    "range": [
      2617,
      2618
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2620,
    "end": 2628,
    "range": [
      2620,
      2628
    ]
  },
  {
    "type": "Identifier",
    "value": "f23",
    "start": 2629,
    "end": 2632,
    "range": [
      2629,
      2632
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2632,
    "end": 2633,
    "range": [
      2632,
      2633
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 2633,
    "end": 2636,
    "range": [
      2633,
      2636
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2636,
    "end": 2637,
    "range": [
      2636,
      2637
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2638,
    "end": 2639,
    "range": [
      2638,
      2639
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 2640,
    "end": 2644,
    "range": [
      2640,
      2644
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2644,
    "end": 2645,
    "range": [
      2644,
      2645
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 2646,
    "end": 2651,
    "range": [
      2646,
      2651
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2651,
    "end": 2652,
    "range": [
      2651,
      2652
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2653,
    "end": 2656,
    "range": [
      2653,
      2656
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2656,
    "end": 2657,
    "range": [
      2656,
      2657
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2658,
    "end": 2664,
    "range": [
      2658,
      2664
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2665,
    "end": 2666,
    "range": [
      2665,
      2666
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2667,
    "end": 2668,
    "range": [
      2667,
      2668
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2669,
    "end": 2670,
    "range": [
      2669,
      2670
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 2671,
    "end": 2675,
    "range": [
      2671,
      2675
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2675,
    "end": 2676,
    "range": [
      2675,
      2676
    ]
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 2677,
    "end": 2682,
    "range": [
      2677,
      2682
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2682,
    "end": 2683,
    "range": [
      2682,
      2683
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 2684,
    "end": 2687,
    "range": [
      2684,
      2687
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2687,
    "end": 2688,
    "range": [
      2687,
      2688
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2689,
    "end": 2695,
    "range": [
      2689,
      2695
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2696,
    "end": 2697,
    "range": [
      2696,
      2697
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2697,
    "end": 2698,
    "range": [
      2697,
      2698
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2699,
    "end": 2700,
    "range": [
      2699,
      2700
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2705,
    "end": 2710,
    "range": [
      2705,
      2710
    ]
  },
  {
    "type": "Identifier",
    "value": "isFoo",
    "start": 2711,
    "end": 2716,
    "range": [
      2711,
      2716
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2717,
    "end": 2718,
    "range": [
      2717,
      2718
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 2719,
    "end": 2722,
    "range": [
      2719,
      2722
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2722,
    "end": 2723,
    "range": [
      2722,
      2723
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 2723,
    "end": 2727,
    "range": [
      2723,
      2727
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2728,
    "end": 2731,
    "range": [
      2728,
      2731
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 2732,
    "end": 2737,
    "range": [
      2732,
      2737
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2737,
    "end": 2738,
    "range": [
      2737,
      2738
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 2743,
    "end": 2746,
    "range": [
      2743,
      2746
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2747,
    "end": 2748,
    "range": [
      2747,
      2748
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 2749,
    "end": 2752,
    "range": [
      2749,
      2752
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2752,
    "end": 2753,
    "range": [
      2752,
      2753
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2758,
    "end": 2760,
    "range": [
      2758,
      2760
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2761,
    "end": 2762,
    "range": [
      2761,
      2762
    ]
  },
  {
    "type": "Identifier",
    "value": "isFoo",
    "start": 2762,
    "end": 2767,
    "range": [
      2762,
      2767
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2767,
    "end": 2768,
    "range": [
      2767,
      2768
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2769,
    "end": 2770,
    "range": [
      2769,
      2770
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 2779,
    "end": 2782,
    "range": [
      2779,
      2782
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2782,
    "end": 2783,
    "range": [
      2782,
      2783
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2783,
    "end": 2786,
    "range": [
      2783,
      2786
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2786,
    "end": 2787,
    "range": [
      2786,
      2787
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2850,
    "end": 2851,
    "range": [
      2850,
      2851
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 2856,
    "end": 2860,
    "range": [
      2856,
      2860
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2861,
    "end": 2862,
    "range": [
      2861,
      2862
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 2871,
    "end": 2874,
    "range": [
      2871,
      2874
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2874,
    "end": 2875,
    "range": [
      2874,
      2875
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 2875,
    "end": 2878,
    "range": [
      2875,
      2878
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2878,
    "end": 2879,
    "range": [
      2878,
      2879
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2942,
    "end": 2943,
    "range": [
      2942,
      2943
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2944,
    "end": 2945,
    "range": [
      2944,
      2945
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2947,
    "end": 2955,
    "range": [
      2947,
      2955
    ]
  },
  {
    "type": "Identifier",
    "value": "f24",
    "start": 2956,
    "end": 2959,
    "range": [
      2956,
      2959
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2959,
    "end": 2960,
    "range": [
      2959,
      2960
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2960,
    "end": 2963,
    "range": [
      2960,
      2963
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2963,
    "end": 2964,
    "range": [
      2963,
      2964
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2965,
    "end": 2966,
    "range": [
      2965,
      2966
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 2967,
    "end": 2971,
    "range": [
      2967,
      2971
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2971,
    "end": 2972,
    "range": [
      2971,
      2972
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 2973,
    "end": 2978,
    "range": [
      2973,
      2978
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2978,
    "end": 2979,
    "range": [
      2978,
      2979
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2980,
    "end": 2983,
    "range": [
      2980,
      2983
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2983,
    "end": 2984,
    "range": [
      2983,
      2984
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2985,
    "end": 2991,
    "range": [
      2985,
      2991
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2992,
    "end": 2993,
    "range": [
      2992,
      2993
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2994,
    "end": 2995,
    "range": [
      2994,
      2995
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2996,
    "end": 2997,
    "range": [
      2996,
      2997
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 2998,
    "end": 3002,
    "range": [
      2998,
      3002
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3002,
    "end": 3003,
    "range": [
      3002,
      3003
    ]
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 3004,
    "end": 3009,
    "range": [
      3004,
      3009
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3009,
    "end": 3010,
    "range": [
      3009,
      3010
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 3011,
    "end": 3014,
    "range": [
      3011,
      3014
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3014,
    "end": 3015,
    "range": [
      3014,
      3015
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3016,
    "end": 3022,
    "range": [
      3016,
      3022
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3023,
    "end": 3024,
    "range": [
      3023,
      3024
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3024,
    "end": 3025,
    "range": [
      3024,
      3025
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3026,
    "end": 3027,
    "range": [
      3026,
      3027
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3032,
    "end": 3037,
    "range": [
      3032,
      3037
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 3038,
    "end": 3041,
    "range": [
      3038,
      3041
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3042,
    "end": 3043,
    "range": [
      3042,
      3043
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 3044,
    "end": 3047,
    "range": [
      3044,
      3047
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3047,
    "end": 3048,
    "range": [
      3047,
      3048
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3053,
    "end": 3058,
    "range": [
      3053,
      3058
    ]
  },
  {
    "type": "Identifier",
    "value": "isFoo",
    "start": 3059,
    "end": 3064,
    "range": [
      3059,
      3064
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3065,
    "end": 3066,
    "range": [
      3065,
      3066
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 3067,
    "end": 3070,
    "range": [
      3067,
      3070
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3070,
    "end": 3071,
    "range": [
      3070,
      3071
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 3071,
    "end": 3075,
    "range": [
      3071,
      3075
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3076,
    "end": 3079,
    "range": [
      3076,
      3079
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 3080,
    "end": 3085,
    "range": [
      3080,
      3085
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3085,
    "end": 3086,
    "range": [
      3085,
      3086
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3091,
    "end": 3093,
    "range": [
      3091,
      3093
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3094,
    "end": 3095,
    "range": [
      3094,
      3095
    ]
  },
  {
    "type": "Identifier",
    "value": "isFoo",
    "start": 3095,
    "end": 3100,
    "range": [
      3095,
      3100
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3100,
    "end": 3101,
    "range": [
      3100,
      3101
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3102,
    "end": 3103,
    "range": [
      3102,
      3103
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 3112,
    "end": 3115,
    "range": [
      3112,
      3115
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3115,
    "end": 3116,
    "range": [
      3115,
      3116
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3116,
    "end": 3119,
    "range": [
      3116,
      3119
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3119,
    "end": 3120,
    "range": [
      3119,
      3120
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3125,
    "end": 3126,
    "range": [
      3125,
      3126
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 3131,
    "end": 3135,
    "range": [
      3131,
      3135
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3136,
    "end": 3137,
    "range": [
      3136,
      3137
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 3146,
    "end": 3149,
    "range": [
      3146,
      3149
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3149,
    "end": 3150,
    "range": [
      3149,
      3150
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 3150,
    "end": 3153,
    "range": [
      3150,
      3153
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3153,
    "end": 3154,
    "range": [
      3153,
      3154
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3159,
    "end": 3160,
    "range": [
      3159,
      3160
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3161,
    "end": 3162,
    "range": [
      3161,
      3162
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3164,
    "end": 3172,
    "range": [
      3164,
      3172
    ]
  },
  {
    "type": "Identifier",
    "value": "f25",
    "start": 3173,
    "end": 3176,
    "range": [
      3173,
      3176
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3176,
    "end": 3177,
    "range": [
      3176,
      3177
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 3177,
    "end": 3180,
    "range": [
      3177,
      3180
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3180,
    "end": 3181,
    "range": [
      3180,
      3181
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3182,
    "end": 3183,
    "range": [
      3182,
      3183
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 3184,
    "end": 3188,
    "range": [
      3184,
      3188
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3188,
    "end": 3189,
    "range": [
      3188,
      3189
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 3190,
    "end": 3195,
    "range": [
      3190,
      3195
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3195,
    "end": 3196,
    "range": [
      3195,
      3196
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3197,
    "end": 3200,
    "range": [
      3197,
      3200
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3200,
    "end": 3201,
    "range": [
      3200,
      3201
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3202,
    "end": 3208,
    "range": [
      3202,
      3208
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3209,
    "end": 3210,
    "range": [
      3209,
      3210
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3211,
    "end": 3212,
    "range": [
      3211,
      3212
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3213,
    "end": 3214,
    "range": [
      3213,
      3214
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 3215,
    "end": 3219,
    "range": [
      3215,
      3219
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3219,
    "end": 3220,
    "range": [
      3219,
      3220
    ]
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 3221,
    "end": 3226,
    "range": [
      3221,
      3226
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3226,
    "end": 3227,
    "range": [
      3226,
      3227
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 3228,
    "end": 3231,
    "range": [
      3228,
      3231
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3231,
    "end": 3232,
    "range": [
      3231,
      3232
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3233,
    "end": 3239,
    "range": [
      3233,
      3239
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3240,
    "end": 3241,
    "range": [
      3240,
      3241
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3241,
    "end": 3242,
    "range": [
      3241,
      3242
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3243,
    "end": 3244,
    "range": [
      3243,
      3244
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3249,
    "end": 3252,
    "range": [
      3249,
      3252
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 3253,
    "end": 3256,
    "range": [
      3253,
      3256
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3257,
    "end": 3258,
    "range": [
      3257,
      3258
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 3259,
    "end": 3262,
    "range": [
      3259,
      3262
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3262,
    "end": 3263,
    "range": [
      3262,
      3263
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3268,
    "end": 3273,
    "range": [
      3268,
      3273
    ]
  },
  {
    "type": "Identifier",
    "value": "isFoo",
    "start": 3274,
    "end": 3279,
    "range": [
      3274,
      3279
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3280,
    "end": 3281,
    "range": [
      3280,
      3281
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 3282,
    "end": 3285,
    "range": [
      3282,
      3285
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3285,
    "end": 3286,
    "range": [
      3285,
      3286
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 3286,
    "end": 3290,
    "range": [
      3286,
      3290
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3291,
    "end": 3294,
    "range": [
      3291,
      3294
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 3295,
    "end": 3300,
    "range": [
      3295,
      3300
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3300,
    "end": 3301,
    "range": [
      3300,
      3301
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3306,
    "end": 3308,
    "range": [
      3306,
      3308
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3309,
    "end": 3310,
    "range": [
      3309,
      3310
    ]
  },
  {
    "type": "Identifier",
    "value": "isFoo",
    "start": 3310,
    "end": 3315,
    "range": [
      3310,
      3315
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3315,
    "end": 3316,
    "range": [
      3315,
      3316
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3317,
    "end": 3318,
    "range": [
      3317,
      3318
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 3327,
    "end": 3330,
    "range": [
      3327,
      3330
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3330,
    "end": 3331,
    "range": [
      3330,
      3331
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3331,
    "end": 3334,
    "range": [
      3331,
      3334
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3334,
    "end": 3335,
    "range": [
      3334,
      3335
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3340,
    "end": 3341,
    "range": [
      3340,
      3341
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 3346,
    "end": 3350,
    "range": [
      3346,
      3350
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3351,
    "end": 3352,
    "range": [
      3351,
      3352
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 3361,
    "end": 3364,
    "range": [
      3361,
      3364
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3364,
    "end": 3365,
    "range": [
      3364,
      3365
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 3365,
    "end": 3368,
    "range": [
      3365,
      3368
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3368,
    "end": 3369,
    "range": [
      3368,
      3369
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3374,
    "end": 3375,
    "range": [
      3374,
      3375
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3376,
    "end": 3377,
    "range": [
      3376,
      3377
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3379,
    "end": 3387,
    "range": [
      3379,
      3387
    ]
  },
  {
    "type": "Identifier",
    "value": "f26",
    "start": 3388,
    "end": 3391,
    "range": [
      3388,
      3391
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3391,
    "end": 3392,
    "range": [
      3391,
      3392
    ]
  },
  {
    "type": "Identifier",
    "value": "outer",
    "start": 3392,
    "end": 3397,
    "range": [
      3392,
      3397
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3397,
    "end": 3398,
    "range": [
      3397,
      3398
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3399,
    "end": 3400,
    "range": [
      3399,
      3400
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 3401,
    "end": 3409,
    "range": [
      3401,
      3409
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 3410,
    "end": 3413,
    "range": [
      3410,
      3413
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3413,
    "end": 3414,
    "range": [
      3413,
      3414
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3415,
    "end": 3416,
    "range": [
      3415,
      3416
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 3417,
    "end": 3421,
    "range": [
      3417,
      3421
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3421,
    "end": 3422,
    "range": [
      3421,
      3422
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 3423,
    "end": 3428,
    "range": [
      3423,
      3428
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3428,
    "end": 3429,
    "range": [
      3428,
      3429
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3430,
    "end": 3433,
    "range": [
      3430,
      3433
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3433,
    "end": 3434,
    "range": [
      3433,
      3434
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3435,
    "end": 3441,
    "range": [
      3435,
      3441
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3442,
    "end": 3443,
    "range": [
      3442,
      3443
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3444,
    "end": 3445,
    "range": [
      3444,
      3445
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3446,
    "end": 3447,
    "range": [
      3446,
      3447
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 3448,
    "end": 3452,
    "range": [
      3448,
      3452
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3452,
    "end": 3453,
    "range": [
      3452,
      3453
    ]
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 3454,
    "end": 3459,
    "range": [
      3454,
      3459
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3459,
    "end": 3460,
    "range": [
      3459,
      3460
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 3461,
    "end": 3464,
    "range": [
      3461,
      3464
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3464,
    "end": 3465,
    "range": [
      3464,
      3465
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3466,
    "end": 3472,
    "range": [
      3466,
      3472
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3473,
    "end": 3474,
    "range": [
      3473,
      3474
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3475,
    "end": 3476,
    "range": [
      3475,
      3476
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3476,
    "end": 3477,
    "range": [
      3476,
      3477
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3478,
    "end": 3479,
    "range": [
      3478,
      3479
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3484,
    "end": 3489,
    "range": [
      3484,
      3489
    ]
  },
  {
    "type": "Identifier",
    "value": "isFoo",
    "start": 3490,
    "end": 3495,
    "range": [
      3490,
      3495
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3496,
    "end": 3497,
    "range": [
      3496,
      3497
    ]
  },
  {
    "type": "Identifier",
    "value": "outer",
    "start": 3498,
    "end": 3503,
    "range": [
      3498,
      3503
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3503,
    "end": 3504,
    "range": [
      3503,
      3504
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 3504,
    "end": 3507,
    "range": [
      3504,
      3507
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3507,
    "end": 3508,
    "range": [
      3507,
      3508
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 3508,
    "end": 3512,
    "range": [
      3508,
      3512
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3513,
    "end": 3516,
    "range": [
      3513,
      3516
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 3517,
    "end": 3522,
    "range": [
      3517,
      3522
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3522,
    "end": 3523,
    "range": [
      3522,
      3523
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3528,
    "end": 3530,
    "range": [
      3528,
      3530
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3531,
    "end": 3532,
    "range": [
      3531,
      3532
    ]
  },
  {
    "type": "Identifier",
    "value": "isFoo",
    "start": 3532,
    "end": 3537,
    "range": [
      3532,
      3537
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3537,
    "end": 3538,
    "range": [
      3537,
      3538
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3539,
    "end": 3540,
    "range": [
      3539,
      3540
    ]
  },
  {
    "type": "Identifier",
    "value": "outer",
    "start": 3549,
    "end": 3554,
    "range": [
      3549,
      3554
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3554,
    "end": 3555,
    "range": [
      3554,
      3555
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 3555,
    "end": 3558,
    "range": [
      3555,
      3558
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3558,
    "end": 3559,
    "range": [
      3558,
      3559
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3559,
    "end": 3562,
    "range": [
      3559,
      3562
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3562,
    "end": 3563,
    "range": [
      3562,
      3563
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3568,
    "end": 3569,
    "range": [
      3568,
      3569
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 3574,
    "end": 3578,
    "range": [
      3574,
      3578
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3579,
    "end": 3580,
    "range": [
      3579,
      3580
    ]
  },
  {
    "type": "Identifier",
    "value": "outer",
    "start": 3589,
    "end": 3594,
    "range": [
      3589,
      3594
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3594,
    "end": 3595,
    "range": [
      3594,
      3595
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 3595,
    "end": 3598,
    "range": [
      3595,
      3598
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3598,
    "end": 3599,
    "range": [
      3598,
      3599
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 3599,
    "end": 3602,
    "range": [
      3599,
      3602
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3602,
    "end": 3603,
    "range": [
      3602,
      3603
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3608,
    "end": 3609,
    "range": [
      3608,
      3609
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3610,
    "end": 3611,
    "range": [
      3610,
      3611
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3613,
    "end": 3621,
    "range": [
      3613,
      3621
    ]
  },
  {
    "type": "Identifier",
    "value": "f27",
    "start": 3622,
    "end": 3625,
    "range": [
      3622,
      3625
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3625,
    "end": 3626,
    "range": [
      3625,
      3626
    ]
  },
  {
    "type": "Identifier",
    "value": "outer",
    "start": 3626,
    "end": 3631,
    "range": [
      3626,
      3631
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3631,
    "end": 3632,
    "range": [
      3631,
      3632
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3633,
    "end": 3634,
    "range": [
      3633,
      3634
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 3635,
    "end": 3638,
    "range": [
      3635,
      3638
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3638,
    "end": 3639,
    "range": [
      3638,
      3639
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3640,
    "end": 3641,
    "range": [
      3640,
      3641
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 3642,
    "end": 3646,
    "range": [
      3642,
      3646
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3646,
    "end": 3647,
    "range": [
      3646,
      3647
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 3648,
    "end": 3653,
    "range": [
      3648,
      3653
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3653,
    "end": 3654,
    "range": [
      3653,
      3654
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3655,
    "end": 3658,
    "range": [
      3655,
      3658
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3658,
    "end": 3659,
    "range": [
      3658,
      3659
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3660,
    "end": 3666,
    "range": [
      3660,
      3666
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3667,
    "end": 3668,
    "range": [
      3667,
      3668
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3669,
    "end": 3670,
    "range": [
      3669,
      3670
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3671,
    "end": 3672,
    "range": [
      3671,
      3672
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 3673,
    "end": 3677,
    "range": [
      3673,
      3677
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3677,
    "end": 3678,
    "range": [
      3677,
      3678
    ]
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 3679,
    "end": 3684,
    "range": [
      3679,
      3684
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3684,
    "end": 3685,
    "range": [
      3684,
      3685
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 3686,
    "end": 3689,
    "range": [
      3686,
      3689
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3689,
    "end": 3690,
    "range": [
      3689,
      3690
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3691,
    "end": 3697,
    "range": [
      3691,
      3697
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3698,
    "end": 3699,
    "range": [
      3698,
      3699
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3700,
    "end": 3701,
    "range": [
      3700,
      3701
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3701,
    "end": 3702,
    "range": [
      3701,
      3702
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3703,
    "end": 3704,
    "range": [
      3703,
      3704
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3709,
    "end": 3714,
    "range": [
      3709,
      3714
    ]
  },
  {
    "type": "Identifier",
    "value": "isFoo",
    "start": 3715,
    "end": 3720,
    "range": [
      3715,
      3720
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3721,
    "end": 3722,
    "range": [
      3721,
      3722
    ]
  },
  {
    "type": "Identifier",
    "value": "outer",
    "start": 3723,
    "end": 3728,
    "range": [
      3723,
      3728
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3728,
    "end": 3729,
    "range": [
      3728,
      3729
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 3729,
    "end": 3732,
    "range": [
      3729,
      3732
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3732,
    "end": 3733,
    "range": [
      3732,
      3733
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 3733,
    "end": 3737,
    "range": [
      3733,
      3737
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3738,
    "end": 3741,
    "range": [
      3738,
      3741
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 3742,
    "end": 3747,
    "range": [
      3742,
      3747
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3747,
    "end": 3748,
    "range": [
      3747,
      3748
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3753,
    "end": 3755,
    "range": [
      3753,
      3755
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3756,
    "end": 3757,
    "range": [
      3756,
      3757
    ]
  },
  {
    "type": "Identifier",
    "value": "isFoo",
    "start": 3757,
    "end": 3762,
    "range": [
      3757,
      3762
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3762,
    "end": 3763,
    "range": [
      3762,
      3763
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3764,
    "end": 3765,
    "range": [
      3764,
      3765
    ]
  },
  {
    "type": "Identifier",
    "value": "outer",
    "start": 3774,
    "end": 3779,
    "range": [
      3774,
      3779
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3779,
    "end": 3780,
    "range": [
      3779,
      3780
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 3780,
    "end": 3783,
    "range": [
      3780,
      3783
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3783,
    "end": 3784,
    "range": [
      3783,
      3784
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3784,
    "end": 3787,
    "range": [
      3784,
      3787
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3787,
    "end": 3788,
    "range": [
      3787,
      3788
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3833,
    "end": 3834,
    "range": [
      3833,
      3834
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 3839,
    "end": 3843,
    "range": [
      3839,
      3843
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3844,
    "end": 3845,
    "range": [
      3844,
      3845
    ]
  },
  {
    "type": "Identifier",
    "value": "outer",
    "start": 3854,
    "end": 3859,
    "range": [
      3854,
      3859
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3859,
    "end": 3860,
    "range": [
      3859,
      3860
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 3860,
    "end": 3863,
    "range": [
      3860,
      3863
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3863,
    "end": 3864,
    "range": [
      3863,
      3864
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 3864,
    "end": 3867,
    "range": [
      3864,
      3867
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3867,
    "end": 3868,
    "range": [
      3867,
      3868
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3913,
    "end": 3914,
    "range": [
      3913,
      3914
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3915,
    "end": 3916,
    "range": [
      3915,
      3916
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3918,
    "end": 3926,
    "range": [
      3918,
      3926
    ]
  },
  {
    "type": "Identifier",
    "value": "f28",
    "start": 3927,
    "end": 3930,
    "range": [
      3927,
      3930
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3930,
    "end": 3931,
    "range": [
      3930,
      3931
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 3931,
    "end": 3934,
    "range": [
      3931,
      3934
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3934,
    "end": 3935,
    "range": [
      3934,
      3935
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3935,
    "end": 3936,
    "range": [
      3935,
      3936
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3937,
    "end": 3938,
    "range": [
      3937,
      3938
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 3939,
    "end": 3943,
    "range": [
      3939,
      3943
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3943,
    "end": 3944,
    "range": [
      3943,
      3944
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 3945,
    "end": 3950,
    "range": [
      3945,
      3950
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3950,
    "end": 3951,
    "range": [
      3950,
      3951
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3952,
    "end": 3955,
    "range": [
      3952,
      3955
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3955,
    "end": 3956,
    "range": [
      3955,
      3956
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3957,
    "end": 3963,
    "range": [
      3957,
      3963
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3964,
    "end": 3965,
    "range": [
      3964,
      3965
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3966,
    "end": 3967,
    "range": [
      3966,
      3967
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3968,
    "end": 3969,
    "range": [
      3968,
      3969
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 3970,
    "end": 3974,
    "range": [
      3970,
      3974
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3974,
    "end": 3975,
    "range": [
      3974,
      3975
    ]
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 3976,
    "end": 3981,
    "range": [
      3976,
      3981
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3981,
    "end": 3982,
    "range": [
      3981,
      3982
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 3983,
    "end": 3986,
    "range": [
      3983,
      3986
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3986,
    "end": 3987,
    "range": [
      3986,
      3987
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3988,
    "end": 3994,
    "range": [
      3988,
      3994
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3995,
    "end": 3996,
    "range": [
      3995,
      3996
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3996,
    "end": 3997,
    "range": [
      3996,
      3997
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3998,
    "end": 3999,
    "range": [
      3998,
      3999
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4004,
    "end": 4009,
    "range": [
      4004,
      4009
    ]
  },
  {
    "type": "Identifier",
    "value": "isFoo",
    "start": 4010,
    "end": 4015,
    "range": [
      4010,
      4015
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4016,
    "end": 4017,
    "range": [
      4016,
      4017
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 4018,
    "end": 4021,
    "range": [
      4018,
      4021
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 4022,
    "end": 4024,
    "range": [
      4022,
      4024
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 4025,
    "end": 4028,
    "range": [
      4025,
      4028
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4028,
    "end": 4029,
    "range": [
      4028,
      4029
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 4029,
    "end": 4033,
    "range": [
      4029,
      4033
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4034,
    "end": 4037,
    "range": [
      4034,
      4037
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 4038,
    "end": 4043,
    "range": [
      4038,
      4043
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4043,
    "end": 4044,
    "range": [
      4043,
      4044
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4049,
    "end": 4054,
    "range": [
      4049,
      4054
    ]
  },
  {
    "type": "Identifier",
    "value": "isBar",
    "start": 4055,
    "end": 4060,
    "range": [
      4055,
      4060
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4061,
    "end": 4062,
    "range": [
      4061,
      4062
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 4063,
    "end": 4066,
    "range": [
      4063,
      4066
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 4067,
    "end": 4069,
    "range": [
      4067,
      4069
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 4070,
    "end": 4073,
    "range": [
      4070,
      4073
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4073,
    "end": 4074,
    "range": [
      4073,
      4074
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 4074,
    "end": 4078,
    "range": [
      4074,
      4078
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4079,
    "end": 4082,
    "range": [
      4079,
      4082
    ]
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 4083,
    "end": 4088,
    "range": [
      4083,
      4088
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4088,
    "end": 4089,
    "range": [
      4088,
      4089
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4094,
    "end": 4096,
    "range": [
      4094,
      4096
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4097,
    "end": 4098,
    "range": [
      4097,
      4098
    ]
  },
  {
    "type": "Identifier",
    "value": "isFoo",
    "start": 4098,
    "end": 4103,
    "range": [
      4098,
      4103
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4103,
    "end": 4104,
    "range": [
      4103,
      4104
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4105,
    "end": 4106,
    "range": [
      4105,
      4106
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 4115,
    "end": 4118,
    "range": [
      4115,
      4118
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4118,
    "end": 4119,
    "range": [
      4118,
      4119
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 4119,
    "end": 4122,
    "range": [
      4119,
      4122
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4122,
    "end": 4123,
    "range": [
      4122,
      4123
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4128,
    "end": 4129,
    "range": [
      4128,
      4129
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4134,
    "end": 4136,
    "range": [
      4134,
      4136
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4137,
    "end": 4138,
    "range": [
      4137,
      4138
    ]
  },
  {
    "type": "Identifier",
    "value": "isBar",
    "start": 4138,
    "end": 4143,
    "range": [
      4138,
      4143
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4143,
    "end": 4144,
    "range": [
      4143,
      4144
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4145,
    "end": 4146,
    "range": [
      4145,
      4146
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 4155,
    "end": 4158,
    "range": [
      4155,
      4158
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4158,
    "end": 4159,
    "range": [
      4158,
      4159
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 4159,
    "end": 4162,
    "range": [
      4159,
      4162
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4162,
    "end": 4163,
    "range": [
      4162,
      4163
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4168,
    "end": 4169,
    "range": [
      4168,
      4169
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4170,
    "end": 4171,
    "range": [
      4170,
      4171
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4227,
    "end": 4235,
    "range": [
      4227,
      4235
    ]
  },
  {
    "type": "Identifier",
    "value": "f30",
    "start": 4236,
    "end": 4239,
    "range": [
      4236,
      4239
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4239,
    "end": 4240,
    "range": [
      4239,
      4240
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 4240,
    "end": 4243,
    "range": [
      4240,
      4243
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4243,
    "end": 4244,
    "range": [
      4243,
      4244
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4245,
    "end": 4246,
    "range": [
      4245,
      4246
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 4247,
    "end": 4251,
    "range": [
      4247,
      4251
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4251,
    "end": 4252,
    "range": [
      4251,
      4252
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 4253,
    "end": 4258,
    "range": [
      4253,
      4258
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4258,
    "end": 4259,
    "range": [
      4258,
      4259
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 4260,
    "end": 4263,
    "range": [
      4260,
      4263
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4263,
    "end": 4264,
    "range": [
      4263,
      4264
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4265,
    "end": 4271,
    "range": [
      4265,
      4271
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4272,
    "end": 4273,
    "range": [
      4272,
      4273
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4274,
    "end": 4275,
    "range": [
      4274,
      4275
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4276,
    "end": 4277,
    "range": [
      4276,
      4277
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 4278,
    "end": 4282,
    "range": [
      4278,
      4282
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4282,
    "end": 4283,
    "range": [
      4282,
      4283
    ]
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 4284,
    "end": 4289,
    "range": [
      4284,
      4289
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4289,
    "end": 4290,
    "range": [
      4289,
      4290
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 4291,
    "end": 4294,
    "range": [
      4291,
      4294
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4294,
    "end": 4295,
    "range": [
      4294,
      4295
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4296,
    "end": 4302,
    "range": [
      4296,
      4302
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4303,
    "end": 4304,
    "range": [
      4303,
      4304
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4304,
    "end": 4305,
    "range": [
      4304,
      4305
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4306,
    "end": 4307,
    "range": [
      4306,
      4307
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4312,
    "end": 4317,
    "range": [
      4312,
      4317
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 4318,
    "end": 4322,
    "range": [
      4318,
      4322
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4323,
    "end": 4324,
    "range": [
      4323,
      4324
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 4325,
    "end": 4328,
    "range": [
      4325,
      4328
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4328,
    "end": 4329,
    "range": [
      4328,
      4329
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 4329,
    "end": 4333,
    "range": [
      4329,
      4333
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4333,
    "end": 4334,
    "range": [
      4333,
      4334
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4339,
    "end": 4341,
    "range": [
      4339,
      4341
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4342,
    "end": 4343,
    "range": [
      4342,
      4343
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 4343,
    "end": 4347,
    "range": [
      4343,
      4347
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4348,
    "end": 4351,
    "range": [
      4348,
      4351
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 4352,
    "end": 4357,
    "range": [
      4352,
      4357
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4357,
    "end": 4358,
    "range": [
      4357,
      4358
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4359,
    "end": 4360,
    "range": [
      4359,
      4360
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 4369,
    "end": 4372,
    "range": [
      4369,
      4372
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4372,
    "end": 4373,
    "range": [
      4372,
      4373
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 4373,
    "end": 4376,
    "range": [
      4373,
      4376
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4376,
    "end": 4377,
    "range": [
      4376,
      4377
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4382,
    "end": 4383,
    "range": [
      4382,
      4383
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 4388,
    "end": 4392,
    "range": [
      4388,
      4392
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4393,
    "end": 4394,
    "range": [
      4393,
      4394
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 4403,
    "end": 4406,
    "range": [
      4403,
      4406
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4406,
    "end": 4407,
    "range": [
      4406,
      4407
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 4407,
    "end": 4410,
    "range": [
      4407,
      4410
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4410,
    "end": 4411,
    "range": [
      4410,
      4411
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4416,
    "end": 4417,
    "range": [
      4416,
      4417
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4418,
    "end": 4419,
    "range": [
      4418,
      4419
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4421,
    "end": 4429,
    "range": [
      4421,
      4429
    ]
  },
  {
    "type": "Identifier",
    "value": "f31",
    "start": 4430,
    "end": 4433,
    "range": [
      4430,
      4433
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4433,
    "end": 4434,
    "range": [
      4433,
      4434
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 4434,
    "end": 4437,
    "range": [
      4434,
      4437
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4437,
    "end": 4438,
    "range": [
      4437,
      4438
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4439,
    "end": 4440,
    "range": [
      4439,
      4440
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 4441,
    "end": 4445,
    "range": [
      4441,
      4445
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4445,
    "end": 4446,
    "range": [
      4445,
      4446
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 4447,
    "end": 4452,
    "range": [
      4447,
      4452
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4452,
    "end": 4453,
    "range": [
      4452,
      4453
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 4454,
    "end": 4457,
    "range": [
      4454,
      4457
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4457,
    "end": 4458,
    "range": [
      4457,
      4458
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4459,
    "end": 4465,
    "range": [
      4459,
      4465
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4466,
    "end": 4467,
    "range": [
      4466,
      4467
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4468,
    "end": 4469,
    "range": [
      4468,
      4469
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4470,
    "end": 4471,
    "range": [
      4470,
      4471
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 4472,
    "end": 4476,
    "range": [
      4472,
      4476
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4476,
    "end": 4477,
    "range": [
      4476,
      4477
    ]
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 4478,
    "end": 4483,
    "range": [
      4478,
      4483
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4483,
    "end": 4484,
    "range": [
      4483,
      4484
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 4485,
    "end": 4488,
    "range": [
      4485,
      4488
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4488,
    "end": 4489,
    "range": [
      4488,
      4489
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4490,
    "end": 4496,
    "range": [
      4490,
      4496
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4497,
    "end": 4498,
    "range": [
      4497,
      4498
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4498,
    "end": 4499,
    "range": [
      4498,
      4499
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4500,
    "end": 4501,
    "range": [
      4500,
      4501
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4506,
    "end": 4511,
    "range": [
      4506,
      4511
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4512,
    "end": 4513,
    "range": [
      4512,
      4513
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 4514,
    "end": 4518,
    "range": [
      4514,
      4518
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4519,
    "end": 4520,
    "range": [
      4519,
      4520
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4521,
    "end": 4522,
    "range": [
      4521,
      4522
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 4523,
    "end": 4526,
    "range": [
      4523,
      4526
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4526,
    "end": 4527,
    "range": [
      4526,
      4527
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4532,
    "end": 4534,
    "range": [
      4532,
      4534
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4535,
    "end": 4536,
    "range": [
      4535,
      4536
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 4536,
    "end": 4540,
    "range": [
      4536,
      4540
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4541,
    "end": 4544,
    "range": [
      4541,
      4544
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 4545,
    "end": 4550,
    "range": [
      4545,
      4550
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4550,
    "end": 4551,
    "range": [
      4550,
      4551
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4552,
    "end": 4553,
    "range": [
      4552,
      4553
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 4562,
    "end": 4565,
    "range": [
      4562,
      4565
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4565,
    "end": 4566,
    "range": [
      4565,
      4566
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 4566,
    "end": 4569,
    "range": [
      4566,
      4569
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4569,
    "end": 4570,
    "range": [
      4569,
      4570
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4575,
    "end": 4576,
    "range": [
      4575,
      4576
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 4581,
    "end": 4585,
    "range": [
      4581,
      4585
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4586,
    "end": 4587,
    "range": [
      4586,
      4587
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 4596,
    "end": 4599,
    "range": [
      4596,
      4599
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4599,
    "end": 4600,
    "range": [
      4599,
      4600
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 4600,
    "end": 4603,
    "range": [
      4600,
      4603
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4603,
    "end": 4604,
    "range": [
      4603,
      4604
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4609,
    "end": 4610,
    "range": [
      4609,
      4610
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4611,
    "end": 4612,
    "range": [
      4611,
      4612
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4614,
    "end": 4622,
    "range": [
      4614,
      4622
    ]
  },
  {
    "type": "Identifier",
    "value": "f32",
    "start": 4623,
    "end": 4626,
    "range": [
      4623,
      4626
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4626,
    "end": 4627,
    "range": [
      4626,
      4627
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 4627,
    "end": 4630,
    "range": [
      4627,
      4630
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4630,
    "end": 4631,
    "range": [
      4630,
      4631
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4632,
    "end": 4633,
    "range": [
      4632,
      4633
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 4634,
    "end": 4638,
    "range": [
      4634,
      4638
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4638,
    "end": 4639,
    "range": [
      4638,
      4639
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 4640,
    "end": 4645,
    "range": [
      4640,
      4645
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4645,
    "end": 4646,
    "range": [
      4645,
      4646
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 4647,
    "end": 4650,
    "range": [
      4647,
      4650
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4650,
    "end": 4651,
    "range": [
      4650,
      4651
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4652,
    "end": 4658,
    "range": [
      4652,
      4658
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4659,
    "end": 4660,
    "range": [
      4659,
      4660
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4661,
    "end": 4662,
    "range": [
      4661,
      4662
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4663,
    "end": 4664,
    "range": [
      4663,
      4664
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 4665,
    "end": 4669,
    "range": [
      4665,
      4669
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4669,
    "end": 4670,
    "range": [
      4669,
      4670
    ]
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 4671,
    "end": 4676,
    "range": [
      4671,
      4676
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4676,
    "end": 4677,
    "range": [
      4676,
      4677
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 4678,
    "end": 4681,
    "range": [
      4678,
      4681
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4681,
    "end": 4682,
    "range": [
      4681,
      4682
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4683,
    "end": 4689,
    "range": [
      4683,
      4689
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4690,
    "end": 4691,
    "range": [
      4690,
      4691
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4691,
    "end": 4692,
    "range": [
      4691,
      4692
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4693,
    "end": 4694,
    "range": [
      4693,
      4694
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4699,
    "end": 4704,
    "range": [
      4699,
      4704
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4705,
    "end": 4706,
    "range": [
      4705,
      4706
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 4707,
    "end": 4711,
    "range": [
      4707,
      4711
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4711,
    "end": 4712,
    "range": [
      4711,
      4712
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 4713,
    "end": 4714,
    "range": [
      4713,
      4714
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4715,
    "end": 4716,
    "range": [
      4715,
      4716
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4717,
    "end": 4718,
    "range": [
      4717,
      4718
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 4719,
    "end": 4722,
    "range": [
      4719,
      4722
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4722,
    "end": 4723,
    "range": [
      4722,
      4723
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4728,
    "end": 4730,
    "range": [
      4728,
      4730
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4731,
    "end": 4732,
    "range": [
      4731,
      4732
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 4732,
    "end": 4733,
    "range": [
      4732,
      4733
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4734,
    "end": 4737,
    "range": [
      4734,
      4737
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 4738,
    "end": 4743,
    "range": [
      4738,
      4743
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4743,
    "end": 4744,
    "range": [
      4743,
      4744
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4745,
    "end": 4746,
    "range": [
      4745,
      4746
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 4755,
    "end": 4758,
    "range": [
      4755,
      4758
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4758,
    "end": 4759,
    "range": [
      4758,
      4759
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 4759,
    "end": 4762,
    "range": [
      4759,
      4762
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4762,
    "end": 4763,
    "range": [
      4762,
      4763
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4768,
    "end": 4769,
    "range": [
      4768,
      4769
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 4774,
    "end": 4778,
    "range": [
      4774,
      4778
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4779,
    "end": 4780,
    "range": [
      4779,
      4780
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 4789,
    "end": 4792,
    "range": [
      4789,
      4792
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4792,
    "end": 4793,
    "range": [
      4792,
      4793
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 4793,
    "end": 4796,
    "range": [
      4793,
      4796
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4796,
    "end": 4797,
    "range": [
      4796,
      4797
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4802,
    "end": 4803,
    "range": [
      4802,
      4803
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4804,
    "end": 4805,
    "range": [
      4804,
      4805
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4807,
    "end": 4815,
    "range": [
      4807,
      4815
    ]
  },
  {
    "type": "Identifier",
    "value": "f33",
    "start": 4816,
    "end": 4819,
    "range": [
      4816,
      4819
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4819,
    "end": 4820,
    "range": [
      4819,
      4820
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 4820,
    "end": 4823,
    "range": [
      4820,
      4823
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4823,
    "end": 4824,
    "range": [
      4823,
      4824
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4825,
    "end": 4826,
    "range": [
      4825,
      4826
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 4827,
    "end": 4831,
    "range": [
      4827,
      4831
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4831,
    "end": 4832,
    "range": [
      4831,
      4832
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 4833,
    "end": 4838,
    "range": [
      4833,
      4838
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4838,
    "end": 4839,
    "range": [
      4838,
      4839
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 4840,
    "end": 4843,
    "range": [
      4840,
      4843
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4843,
    "end": 4844,
    "range": [
      4843,
      4844
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4845,
    "end": 4851,
    "range": [
      4845,
      4851
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4852,
    "end": 4853,
    "range": [
      4852,
      4853
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4854,
    "end": 4855,
    "range": [
      4854,
      4855
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4856,
    "end": 4857,
    "range": [
      4856,
      4857
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 4858,
    "end": 4862,
    "range": [
      4858,
      4862
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4862,
    "end": 4863,
    "range": [
      4862,
      4863
    ]
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 4864,
    "end": 4869,
    "range": [
      4864,
      4869
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4869,
    "end": 4870,
    "range": [
      4869,
      4870
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 4871,
    "end": 4874,
    "range": [
      4871,
      4874
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4874,
    "end": 4875,
    "range": [
      4874,
      4875
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4876,
    "end": 4882,
    "range": [
      4876,
      4882
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4883,
    "end": 4884,
    "range": [
      4883,
      4884
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4884,
    "end": 4885,
    "range": [
      4884,
      4885
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4886,
    "end": 4887,
    "range": [
      4886,
      4887
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4892,
    "end": 4897,
    "range": [
      4892,
      4897
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4898,
    "end": 4899,
    "range": [
      4898,
      4899
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 4900,
    "end": 4904,
    "range": [
      4900,
      4904
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4905,
    "end": 4906,
    "range": [
      4905,
      4906
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4907,
    "end": 4908,
    "range": [
      4907,
      4908
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 4909,
    "end": 4912,
    "range": [
      4909,
      4912
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4912,
    "end": 4913,
    "range": [
      4912,
      4913
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 4918,
    "end": 4924,
    "range": [
      4918,
      4924
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4925,
    "end": 4926,
    "range": [
      4925,
      4926
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 4926,
    "end": 4930,
    "range": [
      4926,
      4930
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4930,
    "end": 4931,
    "range": [
      4930,
      4931
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4932,
    "end": 4933,
    "range": [
      4932,
      4933
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 4942,
    "end": 4946,
    "range": [
      4942,
      4946
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 4947,
    "end": 4952,
    "range": [
      4947,
      4952
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4952,
    "end": 4953,
    "range": [
      4952,
      4953
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 4954,
    "end": 4957,
    "range": [
      4954,
      4957
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4957,
    "end": 4958,
    "range": [
      4957,
      4958
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 4958,
    "end": 4961,
    "range": [
      4958,
      4961
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4961,
    "end": 4962,
    "range": [
      4961,
      4962
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 4963,
    "end": 4968,
    "range": [
      4963,
      4968
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4968,
    "end": 4969,
    "range": [
      4968,
      4969
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 4978,
    "end": 4982,
    "range": [
      4978,
      4982
    ]
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 4983,
    "end": 4988,
    "range": [
      4983,
      4988
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4988,
    "end": 4989,
    "range": [
      4988,
      4989
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 4990,
    "end": 4993,
    "range": [
      4990,
      4993
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4993,
    "end": 4994,
    "range": [
      4993,
      4994
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 4994,
    "end": 4997,
    "range": [
      4994,
      4997
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4997,
    "end": 4998,
    "range": [
      4997,
      4998
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 4999,
    "end": 5004,
    "range": [
      4999,
      5004
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5004,
    "end": 5005,
    "range": [
      5004,
      5005
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5010,
    "end": 5011,
    "range": [
      5010,
      5011
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5012,
    "end": 5013,
    "range": [
      5012,
      5013
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 5016,
    "end": 5021,
    "range": [
      5016,
      5021
    ]
  },
  {
    "type": "Identifier",
    "value": "C10",
    "start": 5022,
    "end": 5025,
    "range": [
      5022,
      5025
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5026,
    "end": 5027,
    "range": [
      5026,
      5027
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 5032,
    "end": 5043,
    "range": [
      5032,
      5043
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5043,
    "end": 5044,
    "range": [
      5043,
      5044
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 5044,
    "end": 5052,
    "range": [
      5044,
      5052
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5053,
    "end": 5054,
    "range": [
      5053,
      5054
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5054,
    "end": 5055,
    "range": [
      5054,
      5055
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5056,
    "end": 5062,
    "range": [
      5056,
      5062
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5063,
    "end": 5064,
    "range": [
      5063,
      5064
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5065,
    "end": 5071,
    "range": [
      5065,
      5071
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5071,
    "end": 5072,
    "range": [
      5071,
      5072
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5073,
    "end": 5074,
    "range": [
      5073,
      5074
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5083,
    "end": 5088,
    "range": [
      5083,
      5088
    ]
  },
  {
    "type": "Identifier",
    "value": "thisX_isString",
    "start": 5089,
    "end": 5103,
    "range": [
      5089,
      5103
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5104,
    "end": 5105,
    "range": [
      5104,
      5105
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 5106,
    "end": 5112,
    "range": [
      5106,
      5112
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 5113,
    "end": 5117,
    "range": [
      5113,
      5117
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5117,
    "end": 5118,
    "range": [
      5117,
      5118
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5118,
    "end": 5119,
    "range": [
      5118,
      5119
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 5120,
    "end": 5123,
    "range": [
      5120,
      5123
    ]
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 5124,
    "end": 5132,
    "range": [
      5124,
      5132
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5132,
    "end": 5133,
    "range": [
      5132,
      5133
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5142,
    "end": 5147,
    "range": [
      5142,
      5147
    ]
  },
  {
    "type": "Identifier",
    "value": "xIsString",
    "start": 5148,
    "end": 5157,
    "range": [
      5148,
      5157
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5158,
    "end": 5159,
    "range": [
      5158,
      5159
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 5160,
    "end": 5166,
    "range": [
      5160,
      5166
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5167,
    "end": 5168,
    "range": [
      5167,
      5168
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 5169,
    "end": 5172,
    "range": [
      5169,
      5172
    ]
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 5173,
    "end": 5181,
    "range": [
      5173,
      5181
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5181,
    "end": 5182,
    "range": [
      5181,
      5182
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 5191,
    "end": 5193,
    "range": [
      5191,
      5193
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5194,
    "end": 5195,
    "range": [
      5194,
      5195
    ]
  },
  {
    "type": "Identifier",
    "value": "thisX_isString",
    "start": 5195,
    "end": 5209,
    "range": [
      5195,
      5209
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 5210,
    "end": 5212,
    "range": [
      5210,
      5212
    ]
  },
  {
    "type": "Identifier",
    "value": "xIsString",
    "start": 5213,
    "end": 5222,
    "range": [
      5213,
      5222
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5222,
    "end": 5223,
    "range": [
      5222,
      5223
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5224,
    "end": 5225,
    "range": [
      5224,
      5225
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 5238,
    "end": 5241,
    "range": [
      5238,
      5241
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 5242,
    "end": 5243,
    "range": [
      5242,
      5243
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5243,
    "end": 5244,
    "range": [
      5243,
      5244
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5245,
    "end": 5251,
    "range": [
      5245,
      5251
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5251,
    "end": 5252,
    "range": [
      5251,
      5252
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 5265,
    "end": 5266,
    "range": [
      5265,
      5266
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5267,
    "end": 5268,
    "range": [
      5267,
      5268
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 5269,
    "end": 5273,
    "range": [
      5269,
      5273
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5273,
    "end": 5274,
    "range": [
      5273,
      5274
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5274,
    "end": 5275,
    "range": [
      5274,
      5275
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5275,
    "end": 5276,
    "range": [
      5275,
      5276
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 5289,
    "end": 5290,
    "range": [
      5289,
      5290
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5291,
    "end": 5292,
    "range": [
      5291,
      5292
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5293,
    "end": 5294,
    "range": [
      5293,
      5294
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5294,
    "end": 5295,
    "range": [
      5294,
      5295
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5304,
    "end": 5305,
    "range": [
      5304,
      5305
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5310,
    "end": 5311,
    "range": [
      5310,
      5311
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5312,
    "end": 5313,
    "range": [
      5312,
      5313
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 5315,
    "end": 5320,
    "range": [
      5315,
      5320
    ]
  },
  {
    "type": "Identifier",
    "value": "C11",
    "start": 5321,
    "end": 5324,
    "range": [
      5321,
      5324
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5325,
    "end": 5326,
    "range": [
      5325,
      5326
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 5331,
    "end": 5342,
    "range": [
      5331,
      5342
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5342,
    "end": 5343,
    "range": [
      5342,
      5343
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 5343,
    "end": 5351,
    "range": [
      5343,
      5351
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5352,
    "end": 5353,
    "range": [
      5352,
      5353
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5353,
    "end": 5354,
    "range": [
      5353,
      5354
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5355,
    "end": 5361,
    "range": [
      5355,
      5361
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5362,
    "end": 5363,
    "range": [
      5362,
      5363
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5364,
    "end": 5370,
    "range": [
      5364,
      5370
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5370,
    "end": 5371,
    "range": [
      5370,
      5371
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5372,
    "end": 5373,
    "range": [
      5372,
      5373
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5382,
    "end": 5387,
    "range": [
      5382,
      5387
    ]
  },
  {
    "type": "Identifier",
    "value": "thisX_isString",
    "start": 5388,
    "end": 5402,
    "range": [
      5388,
      5402
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5403,
    "end": 5404,
    "range": [
      5403,
      5404
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 5405,
    "end": 5411,
    "range": [
      5405,
      5411
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 5412,
    "end": 5416,
    "range": [
      5412,
      5416
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5416,
    "end": 5417,
    "range": [
      5416,
      5417
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5417,
    "end": 5418,
    "range": [
      5417,
      5418
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 5419,
    "end": 5422,
    "range": [
      5419,
      5422
    ]
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 5423,
    "end": 5431,
    "range": [
      5423,
      5431
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5431,
    "end": 5432,
    "range": [
      5431,
      5432
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5441,
    "end": 5446,
    "range": [
      5441,
      5446
    ]
  },
  {
    "type": "Identifier",
    "value": "xIsString",
    "start": 5447,
    "end": 5456,
    "range": [
      5447,
      5456
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5457,
    "end": 5458,
    "range": [
      5457,
      5458
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 5459,
    "end": 5465,
    "range": [
      5459,
      5465
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5466,
    "end": 5467,
    "range": [
      5466,
      5467
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 5468,
    "end": 5471,
    "range": [
      5468,
      5471
    ]
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 5472,
    "end": 5480,
    "range": [
      5472,
      5480
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5480,
    "end": 5481,
    "range": [
      5480,
      5481
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 5490,
    "end": 5492,
    "range": [
      5490,
      5492
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5493,
    "end": 5494,
    "range": [
      5493,
      5494
    ]
  },
  {
    "type": "Identifier",
    "value": "thisX_isString",
    "start": 5494,
    "end": 5508,
    "range": [
      5494,
      5508
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 5509,
    "end": 5511,
    "range": [
      5509,
      5511
    ]
  },
  {
    "type": "Identifier",
    "value": "xIsString",
    "start": 5512,
    "end": 5521,
    "range": [
      5512,
      5521
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5521,
    "end": 5522,
    "range": [
      5521,
      5522
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5523,
    "end": 5524,
    "range": [
      5523,
      5524
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 5613,
    "end": 5616,
    "range": [
      5613,
      5616
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 5617,
    "end": 5618,
    "range": [
      5617,
      5618
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5618,
    "end": 5619,
    "range": [
      5618,
      5619
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5620,
    "end": 5626,
    "range": [
      5620,
      5626
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5626,
    "end": 5627,
    "range": [
      5626,
      5627
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 5640,
    "end": 5641,
    "range": [
      5640,
      5641
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5642,
    "end": 5643,
    "range": [
      5642,
      5643
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 5644,
    "end": 5648,
    "range": [
      5644,
      5648
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5648,
    "end": 5649,
    "range": [
      5648,
      5649
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5649,
    "end": 5650,
    "range": [
      5649,
      5650
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5650,
    "end": 5651,
    "range": [
      5650,
      5651
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 5664,
    "end": 5665,
    "range": [
      5664,
      5665
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5666,
    "end": 5667,
    "range": [
      5666,
      5667
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5668,
    "end": 5669,
    "range": [
      5668,
      5669
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5669,
    "end": 5670,
    "range": [
      5669,
      5670
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5679,
    "end": 5680,
    "range": [
      5679,
      5680
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 5689,
    "end": 5693,
    "range": [
      5689,
      5693
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5694,
    "end": 5695,
    "range": [
      5694,
      5695
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 5708,
    "end": 5712,
    "range": [
      5708,
      5712
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5712,
    "end": 5713,
    "range": [
      5712,
      5713
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5713,
    "end": 5714,
    "range": [
      5713,
      5714
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5715,
    "end": 5716,
    "range": [
      5715,
      5716
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 5717,
    "end": 5719,
    "range": [
      5717,
      5719
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5719,
    "end": 5720,
    "range": [
      5719,
      5720
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5733,
    "end": 5734,
    "range": [
      5733,
      5734
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5735,
    "end": 5736,
    "range": [
      5735,
      5736
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 5737,
    "end": 5739,
    "range": [
      5737,
      5739
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5739,
    "end": 5740,
    "range": [
      5739,
      5740
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5749,
    "end": 5750,
    "range": [
      5749,
      5750
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5755,
    "end": 5756,
    "range": [
      5755,
      5756
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5757,
    "end": 5758,
    "range": [
      5757,
      5758
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5813,
    "end": 5821,
    "range": [
      5813,
      5821
    ]
  },
  {
    "type": "Identifier",
    "value": "f40",
    "start": 5822,
    "end": 5825,
    "range": [
      5822,
      5825
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5825,
    "end": 5826,
    "range": [
      5825,
      5826
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 5826,
    "end": 5829,
    "range": [
      5826,
      5829
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5829,
    "end": 5830,
    "range": [
      5829,
      5830
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5831,
    "end": 5832,
    "range": [
      5831,
      5832
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 5833,
    "end": 5837,
    "range": [
      5833,
      5837
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5837,
    "end": 5838,
    "range": [
      5837,
      5838
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 5839,
    "end": 5844,
    "range": [
      5839,
      5844
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5844,
    "end": 5845,
    "range": [
      5844,
      5845
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 5846,
    "end": 5849,
    "range": [
      5846,
      5849
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5849,
    "end": 5850,
    "range": [
      5849,
      5850
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5850,
    "end": 5851,
    "range": [
      5850,
      5851
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5852,
    "end": 5858,
    "range": [
      5852,
      5858
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5859,
    "end": 5860,
    "range": [
      5859,
      5860
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5861,
    "end": 5862,
    "range": [
      5861,
      5862
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5863,
    "end": 5864,
    "range": [
      5863,
      5864
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 5865,
    "end": 5869,
    "range": [
      5865,
      5869
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5869,
    "end": 5870,
    "range": [
      5869,
      5870
    ]
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 5871,
    "end": 5876,
    "range": [
      5871,
      5876
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5876,
    "end": 5877,
    "range": [
      5876,
      5877
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 5878,
    "end": 5881,
    "range": [
      5878,
      5881
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5881,
    "end": 5882,
    "range": [
      5881,
      5882
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5882,
    "end": 5883,
    "range": [
      5882,
      5883
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5884,
    "end": 5890,
    "range": [
      5884,
      5890
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5891,
    "end": 5892,
    "range": [
      5891,
      5892
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5892,
    "end": 5893,
    "range": [
      5892,
      5893
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5894,
    "end": 5895,
    "range": [
      5894,
      5895
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5900,
    "end": 5905,
    "range": [
      5900,
      5905
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5906,
    "end": 5907,
    "range": [
      5906,
      5907
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 5908,
    "end": 5912,
    "range": [
      5908,
      5912
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5913,
    "end": 5914,
    "range": [
      5913,
      5914
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5915,
    "end": 5916,
    "range": [
      5915,
      5916
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 5917,
    "end": 5920,
    "range": [
      5917,
      5920
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5920,
    "end": 5921,
    "range": [
      5920,
      5921
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5926,
    "end": 5931,
    "range": [
      5926,
      5931
    ]
  },
  {
    "type": "Identifier",
    "value": "isFoo",
    "start": 5932,
    "end": 5937,
    "range": [
      5932,
      5937
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5938,
    "end": 5939,
    "range": [
      5938,
      5939
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 5940,
    "end": 5944,
    "range": [
      5940,
      5944
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 5945,
    "end": 5947,
    "range": [
      5945,
      5947
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 5948,
    "end": 5953,
    "range": [
      5948,
      5953
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5953,
    "end": 5954,
    "range": [
      5953,
      5954
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 5959,
    "end": 5961,
    "range": [
      5959,
      5961
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5962,
    "end": 5963,
    "range": [
      5962,
      5963
    ]
  },
  {
    "type": "Identifier",
    "value": "isFoo",
    "start": 5963,
    "end": 5968,
    "range": [
      5963,
      5968
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 5969,
    "end": 5971,
    "range": [
      5969,
      5971
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 5972,
    "end": 5975,
    "range": [
      5972,
      5975
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5975,
    "end": 5976,
    "range": [
      5975,
      5976
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 5976,
    "end": 5979,
    "range": [
      5976,
      5979
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5979,
    "end": 5980,
    "range": [
      5979,
      5980
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5981,
    "end": 5982,
    "range": [
      5981,
      5982
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 5991,
    "end": 5994,
    "range": [
      5991,
      5994
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 5995,
    "end": 5996,
    "range": [
      5995,
      5996
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5996,
    "end": 5997,
    "range": [
      5996,
      5997
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5998,
    "end": 6004,
    "range": [
      5998,
      6004
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6005,
    "end": 6006,
    "range": [
      6005,
      6006
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 6007,
    "end": 6010,
    "range": [
      6007,
      6010
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6010,
    "end": 6011,
    "range": [
      6010,
      6011
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 6011,
    "end": 6014,
    "range": [
      6011,
      6014
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6014,
    "end": 6015,
    "range": [
      6014,
      6015
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6020,
    "end": 6021,
    "range": [
      6020,
      6021
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6022,
    "end": 6023,
    "range": [
      6022,
      6023
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6104,
    "end": 6108,
    "range": [
      6104,
      6108
    ]
  },
  {
    "type": "Identifier",
    "value": "Data",
    "start": 6109,
    "end": 6113,
    "range": [
      6109,
      6113
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6114,
    "end": 6115,
    "range": [
      6114,
      6115
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6116,
    "end": 6117,
    "range": [
      6116,
      6117
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 6118,
    "end": 6122,
    "range": [
      6118,
      6122
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6122,
    "end": 6123,
    "range": [
      6122,
      6123
    ]
  },
  {
    "type": "String",
    "value": "'str'",
    "start": 6124,
    "end": 6129,
    "range": [
      6124,
      6129
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6129,
    "end": 6130,
    "range": [
      6129,
      6130
    ]
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 6131,
    "end": 6138,
    "range": [
      6131,
      6138
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6138,
    "end": 6139,
    "range": [
      6138,
      6139
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6140,
    "end": 6146,
    "range": [
      6140,
      6146
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6147,
    "end": 6148,
    "range": [
      6147,
      6148
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 6149,
    "end": 6150,
    "range": [
      6149,
      6150
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6151,
    "end": 6152,
    "range": [
      6151,
      6152
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 6153,
    "end": 6157,
    "range": [
      6153,
      6157
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6157,
    "end": 6158,
    "range": [
      6157,
      6158
    ]
  },
  {
    "type": "String",
    "value": "'num'",
    "start": 6159,
    "end": 6164,
    "range": [
      6159,
      6164
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6164,
    "end": 6165,
    "range": [
      6164,
      6165
    ]
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 6166,
    "end": 6173,
    "range": [
      6166,
      6173
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6173,
    "end": 6174,
    "range": [
      6173,
      6174
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 6175,
    "end": 6181,
    "range": [
      6175,
      6181
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6182,
    "end": 6183,
    "range": [
      6182,
      6183
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6183,
    "end": 6184,
    "range": [
      6183,
      6184
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6186,
    "end": 6194,
    "range": [
      6186,
      6194
    ]
  },
  {
    "type": "Identifier",
    "value": "gg2",
    "start": 6195,
    "end": 6198,
    "range": [
      6195,
      6198
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6198,
    "end": 6199,
    "range": [
      6198,
      6199
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 6199,
    "end": 6202,
    "range": [
      6199,
      6202
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6202,
    "end": 6203,
    "range": [
      6202,
      6203
    ]
  },
  {
    "type": "Identifier",
    "value": "Data",
    "start": 6204,
    "end": 6208,
    "range": [
      6204,
      6208
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6208,
    "end": 6209,
    "range": [
      6208,
      6209
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6210,
    "end": 6211,
    "range": [
      6210,
      6211
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 6216,
    "end": 6218,
    "range": [
      6216,
      6218
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6219,
    "end": 6220,
    "range": [
      6219,
      6220
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 6220,
    "end": 6223,
    "range": [
      6220,
      6223
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6223,
    "end": 6224,
    "range": [
      6223,
      6224
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 6224,
    "end": 6228,
    "range": [
      6224,
      6228
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 6229,
    "end": 6232,
    "range": [
      6229,
      6232
    ]
  },
  {
    "type": "String",
    "value": "'str'",
    "start": 6233,
    "end": 6238,
    "range": [
      6233,
      6238
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6238,
    "end": 6239,
    "range": [
      6238,
      6239
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6240,
    "end": 6241,
    "range": [
      6240,
      6241
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 6250,
    "end": 6253,
    "range": [
      6250,
      6253
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 6254,
    "end": 6255,
    "range": [
      6254,
      6255
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6255,
    "end": 6256,
    "range": [
      6255,
      6256
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6257,
    "end": 6263,
    "range": [
      6257,
      6263
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6264,
    "end": 6265,
    "range": [
      6264,
      6265
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 6266,
    "end": 6269,
    "range": [
      6266,
      6269
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6269,
    "end": 6270,
    "range": [
      6269,
      6270
    ]
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 6270,
    "end": 6277,
    "range": [
      6270,
      6277
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6277,
    "end": 6278,
    "range": [
      6277,
      6278
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6283,
    "end": 6284,
    "range": [
      6283,
      6284
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 6289,
    "end": 6293,
    "range": [
      6289,
      6293
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6294,
    "end": 6295,
    "range": [
      6294,
      6295
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 6304,
    "end": 6307,
    "range": [
      6304,
      6307
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 6308,
    "end": 6309,
    "range": [
      6308,
      6309
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6309,
    "end": 6310,
    "range": [
      6309,
      6310
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 6311,
    "end": 6317,
    "range": [
      6311,
      6317
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6318,
    "end": 6319,
    "range": [
      6318,
      6319
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 6320,
    "end": 6323,
    "range": [
      6320,
      6323
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6323,
    "end": 6324,
    "range": [
      6323,
      6324
    ]
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 6324,
    "end": 6331,
    "range": [
      6324,
      6331
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6331,
    "end": 6332,
    "range": [
      6331,
      6332
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6337,
    "end": 6338,
    "range": [
      6337,
      6338
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6339,
    "end": 6340,
    "range": [
      6339,
      6340
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6342,
    "end": 6350,
    "range": [
      6342,
      6350
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 6351,
    "end": 6354,
    "range": [
      6351,
      6354
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6354,
    "end": 6355,
    "range": [
      6354,
      6355
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6355,
    "end": 6356,
    "range": [
      6355,
      6356
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 6357,
    "end": 6361,
    "range": [
      6357,
      6361
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6361,
    "end": 6362,
    "range": [
      6361,
      6362
    ]
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 6363,
    "end": 6370,
    "range": [
      6363,
      6370
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6371,
    "end": 6372,
    "range": [
      6371,
      6372
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6372,
    "end": 6373,
    "range": [
      6372,
      6373
    ]
  },
  {
    "type": "Identifier",
    "value": "Data",
    "start": 6374,
    "end": 6378,
    "range": [
      6374,
      6378
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6378,
    "end": 6379,
    "range": [
      6378,
      6379
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6380,
    "end": 6381,
    "range": [
      6380,
      6381
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 6386,
    "end": 6388,
    "range": [
      6386,
      6388
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6389,
    "end": 6390,
    "range": [
      6389,
      6390
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 6390,
    "end": 6394,
    "range": [
      6390,
      6394
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 6395,
    "end": 6398,
    "range": [
      6395,
      6398
    ]
  },
  {
    "type": "String",
    "value": "'str'",
    "start": 6399,
    "end": 6404,
    "range": [
      6399,
      6404
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6404,
    "end": 6405,
    "range": [
      6404,
      6405
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6406,
    "end": 6407,
    "range": [
      6406,
      6407
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 6416,
    "end": 6419,
    "range": [
      6416,
      6419
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 6420,
    "end": 6421,
    "range": [
      6420,
      6421
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6421,
    "end": 6422,
    "range": [
      6421,
      6422
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6423,
    "end": 6429,
    "range": [
      6423,
      6429
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6430,
    "end": 6431,
    "range": [
      6430,
      6431
    ]
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 6432,
    "end": 6439,
    "range": [
      6432,
      6439
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6439,
    "end": 6440,
    "range": [
      6439,
      6440
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6445,
    "end": 6446,
    "range": [
      6445,
      6446
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 6451,
    "end": 6455,
    "range": [
      6451,
      6455
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6456,
    "end": 6457,
    "range": [
      6456,
      6457
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 6466,
    "end": 6469,
    "range": [
      6466,
      6469
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 6470,
    "end": 6471,
    "range": [
      6470,
      6471
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6471,
    "end": 6472,
    "range": [
      6471,
      6472
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 6473,
    "end": 6479,
    "range": [
      6473,
      6479
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6480,
    "end": 6481,
    "range": [
      6480,
      6481
    ]
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 6482,
    "end": 6489,
    "range": [
      6482,
      6489
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6489,
    "end": 6490,
    "range": [
      6489,
      6490
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6495,
    "end": 6496,
    "range": [
      6495,
      6496
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6497,
    "end": 6498,
    "range": [
      6497,
      6498
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 6522,
    "end": 6527,
    "range": [
      6522,
      6527
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 6528,
    "end": 6531,
    "range": [
      6528,
      6531
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6532,
    "end": 6533,
    "range": [
      6532,
      6533
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6534,
    "end": 6535,
    "range": [
      6534,
      6535
    ]
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 6540,
    "end": 6542,
    "range": [
      6540,
      6542
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6542,
    "end": 6543,
    "range": [
      6542,
      6543
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6544,
    "end": 6545,
    "range": [
      6544,
      6545
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6545,
    "end": 6546,
    "range": [
      6545,
      6546
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6547,
    "end": 6549,
    "range": [
      6547,
      6549
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 6550,
    "end": 6554,
    "range": [
      6550,
      6554
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6555,
    "end": 6556,
    "range": [
      6555,
      6556
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6556,
    "end": 6557,
    "range": [
      6556,
      6557
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 6559,
    "end": 6561,
    "range": [
      6559,
      6561
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6562,
    "end": 6563,
    "range": [
      6562,
      6563
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 6563,
    "end": 6564,
    "range": [
      6563,
      6564
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6564,
    "end": 6565,
    "range": [
      6564,
      6565
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6566,
    "end": 6567,
    "range": [
      6566,
      6567
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6568,
    "end": 6569,
    "range": [
      6568,
      6569
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 6571,
    "end": 6576,
    "range": [
      6571,
      6576
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 6577,
    "end": 6578,
    "range": [
      6577,
      6578
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6579,
    "end": 6580,
    "range": [
      6579,
      6580
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 6581,
    "end": 6584,
    "range": [
      6581,
      6584
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6584,
    "end": 6585,
    "range": [
      6584,
      6585
    ]
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 6585,
    "end": 6587,
    "range": [
      6585,
      6587
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6587,
    "end": 6588,
    "range": [
      6587,
      6588
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6588,
    "end": 6589,
    "range": [
      6588,
      6589
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6589,
    "end": 6590,
    "range": [
      6589,
      6590
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 6659,
    "end": 6664,
    "range": [
      6659,
      6664
    ]
  },
  {
    "type": "Identifier",
    "value": "Utils",
    "start": 6665,
    "end": 6670,
    "range": [
      6665,
      6670
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6671,
    "end": 6672,
    "range": [
      6671,
      6672
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 6675,
    "end": 6681,
    "range": [
      6675,
      6681
    ]
  },
  {
    "type": "Identifier",
    "value": "isDefined",
    "start": 6682,
    "end": 6691,
    "range": [
      6682,
      6691
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6691,
    "end": 6692,
    "range": [
      6691,
      6692
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6692,
    "end": 6693,
    "range": [
      6692,
      6693
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6693,
    "end": 6694,
    "range": [
      6693,
      6694
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6694,
    "end": 6695,
    "range": [
      6694,
      6695
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 6695,
    "end": 6700,
    "range": [
      6695,
      6700
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6700,
    "end": 6701,
    "range": [
      6700,
      6701
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6702,
    "end": 6703,
    "range": [
      6702,
      6703
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6703,
    "end": 6704,
    "range": [
      6703,
      6704
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6704,
    "end": 6705,
    "range": [
      6704,
      6705
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 6706,
    "end": 6711,
    "range": [
      6706,
      6711
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 6712,
    "end": 6714,
    "range": [
      6712,
      6714
    ]
  },
  {
    "type": "Identifier",
    "value": "NonNullable",
    "start": 6715,
    "end": 6726,
    "range": [
      6715,
      6726
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6726,
    "end": 6727,
    "range": [
      6726,
      6727
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6727,
    "end": 6728,
    "range": [
      6727,
      6728
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6728,
    "end": 6729,
    "range": [
      6728,
      6729
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6730,
    "end": 6731,
    "range": [
      6730,
      6731
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 6736,
    "end": 6742,
    "range": [
      6736,
      6742
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 6743,
    "end": 6748,
    "range": [
      6743,
      6748
    ]
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 6749,
    "end": 6751,
    "range": [
      6749,
      6751
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 6752,
    "end": 6756,
    "range": [
      6752,
      6756
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6756,
    "end": 6757,
    "range": [
      6756,
      6757
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6760,
    "end": 6761,
    "range": [
      6760,
      6761
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6762,
    "end": 6763,
    "range": [
      6762,
      6763
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 6765,
    "end": 6770,
    "range": [
      6765,
      6770
    ]
  },
  {
    "type": "Identifier",
    "value": "A53267",
    "start": 6771,
    "end": 6777,
    "range": [
      6771,
      6777
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6778,
    "end": 6779,
    "range": [
      6778,
      6779
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 6782,
    "end": 6788,
    "range": [
      6782,
      6788
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 6789,
    "end": 6797,
    "range": [
      6789,
      6797
    ]
  },
  {
    "type": "Identifier",
    "value": "testNumber",
    "start": 6798,
    "end": 6808,
    "range": [
      6798,
      6808
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6808,
    "end": 6809,
    "range": [
      6808,
      6809
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 6810,
    "end": 6816,
    "range": [
      6810,
      6816
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 6817,
    "end": 6818,
    "range": [
      6817,
      6818
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 6819,
    "end": 6828,
    "range": [
      6819,
      6828
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6828,
    "end": 6829,
    "range": [
      6828,
      6829
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 6833,
    "end": 6836,
    "range": [
      6833,
      6836
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6836,
    "end": 6837,
    "range": [
      6836,
      6837
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6837,
    "end": 6838,
    "range": [
      6837,
      6838
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6839,
    "end": 6840,
    "range": [
      6839,
      6840
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 6845,
    "end": 6850,
    "range": [
      6845,
      6850
    ]
  },
  {
    "type": "Identifier",
    "value": "isNumber",
    "start": 6851,
    "end": 6859,
    "range": [
      6851,
      6859
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6860,
    "end": 6861,
    "range": [
      6860,
      6861
    ]
  },
  {
    "type": "Identifier",
    "value": "Utils",
    "start": 6862,
    "end": 6867,
    "range": [
      6862,
      6867
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6867,
    "end": 6868,
    "range": [
      6867,
      6868
    ]
  },
  {
    "type": "Identifier",
    "value": "isDefined",
    "start": 6868,
    "end": 6877,
    "range": [
      6868,
      6877
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6877,
    "end": 6878,
    "range": [
      6877,
      6878
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 6878,
    "end": 6882,
    "range": [
      6878,
      6882
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6882,
    "end": 6883,
    "range": [
      6882,
      6883
    ]
  },
  {
    "type": "Identifier",
    "value": "testNumber",
    "start": 6883,
    "end": 6893,
    "range": [
      6883,
      6893
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6893,
    "end": 6894,
    "range": [
      6893,
      6894
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6894,
    "end": 6895,
    "range": [
      6894,
      6895
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 6901,
    "end": 6903,
    "range": [
      6901,
      6903
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6904,
    "end": 6905,
    "range": [
      6904,
      6905
    ]
  },
  {
    "type": "Identifier",
    "value": "isNumber",
    "start": 6905,
    "end": 6913,
    "range": [
      6905,
      6913
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6913,
    "end": 6914,
    "range": [
      6913,
      6914
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6915,
    "end": 6916,
    "range": [
      6915,
      6916
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 6923,
    "end": 6928,
    "range": [
      6923,
      6928
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 6929,
    "end": 6930,
    "range": [
      6929,
      6930
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6930,
    "end": 6931,
    "range": [
      6930,
      6931
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 6932,
    "end": 6938,
    "range": [
      6932,
      6938
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6939,
    "end": 6940,
    "range": [
      6939,
      6940
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 6941,
    "end": 6945,
    "range": [
      6941,
      6945
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6945,
    "end": 6946,
    "range": [
      6945,
      6946
    ]
  },
  {
    "type": "Identifier",
    "value": "testNumber",
    "start": 6946,
    "end": 6956,
    "range": [
      6946,
      6956
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6956,
    "end": 6957,
    "range": [
      6956,
      6957
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6962,
    "end": 6963,
    "range": [
      6962,
      6963
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6966,
    "end": 6967,
    "range": [
      6966,
      6967
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6968,
    "end": 6969,
    "range": [
      6968,
      6969
    ]
  }
]
```
