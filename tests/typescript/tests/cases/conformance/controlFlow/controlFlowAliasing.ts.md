__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 49,
  "end": 6969,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 49,
      "end": 226,
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 61,
        "decorators": [],
        "name": "f10",
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
          "start": 62,
          "end": 80,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 63,
            "end": 80,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 65,
              "end": 80,
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
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 82,
        "end": 226,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 88,
            "end": 127,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 94,
                "end": 126,
                "id": {
                  "type": "Identifier",
                  "start": 94,
                  "end": 102,
                  "decorators": [],
                  "name": "isString",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 105,
                  "end": 126,
                  "left": {
                    "type": "UnaryExpression",
                    "start": 105,
                    "end": 113,
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "start": 112,
                      "end": 113,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "prefix": true
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 118,
                    "end": 126,
                    "value": "string",
                    "raw": "\"string\""
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 132,
            "end": 224,
            "test": {
              "type": "Identifier",
              "start": 136,
              "end": 144,
              "decorators": [],
              "name": "isString",
              "optional": false,
              "typeAnnotation": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 146,
              "end": 180,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 156,
                  "end": 174,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 160,
                      "end": 173,
                      "id": {
                        "type": "Identifier",
                        "start": 160,
                        "end": 169,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 161,
                          "end": 169,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 163,
                            "end": 169
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 172,
                        "end": 173,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 190,
              "end": 224,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 200,
                  "end": 218,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 204,
                      "end": 217,
                      "id": {
                        "type": "Identifier",
                        "start": 204,
                        "end": 213,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 205,
                          "end": 213,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 207,
                            "end": 213
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 216,
                        "end": 217,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 228,
      "end": 353,
      "id": {
        "type": "Identifier",
        "start": 237,
        "end": 240,
        "decorators": [],
        "name": "f11",
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
          "start": 241,
          "end": 251,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 242,
            "end": 251,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 244,
              "end": 251
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 253,
        "end": 353,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 259,
            "end": 298,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 265,
                "end": 297,
                "id": {
                  "type": "Identifier",
                  "start": 265,
                  "end": 273,
                  "decorators": [],
                  "name": "isString",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 276,
                  "end": 297,
                  "left": {
                    "type": "UnaryExpression",
                    "start": 276,
                    "end": 284,
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "start": 283,
                      "end": 284,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "prefix": true
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 289,
                    "end": 297,
                    "value": "string",
                    "raw": "\"string\""
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 303,
            "end": 351,
            "test": {
              "type": "Identifier",
              "start": 307,
              "end": 315,
              "decorators": [],
              "name": "isString",
              "optional": false,
              "typeAnnotation": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 317,
              "end": 351,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 327,
                  "end": 345,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 331,
                      "end": 344,
                      "id": {
                        "type": "Identifier",
                        "start": 331,
                        "end": 340,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 332,
                          "end": 340,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 334,
                            "end": 340
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 343,
                        "end": 344,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 355,
      "end": 608,
      "id": {
        "type": "Identifier",
        "start": 364,
        "end": 367,
        "decorators": [],
        "name": "f12",
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
          "start": 368,
          "end": 396,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 369,
            "end": 396,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 371,
              "end": 396,
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
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 398,
        "end": 608,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 404,
            "end": 443,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 410,
                "end": 442,
                "id": {
                  "type": "Identifier",
                  "start": 410,
                  "end": 418,
                  "decorators": [],
                  "name": "isString",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 421,
                  "end": 442,
                  "left": {
                    "type": "UnaryExpression",
                    "start": 421,
                    "end": 429,
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "start": 428,
                      "end": 429,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "prefix": true
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 434,
                    "end": 442,
                    "value": "string",
                    "raw": "\"string\""
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 448,
            "end": 487,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 454,
                "end": 486,
                "id": {
                  "type": "Identifier",
                  "start": 454,
                  "end": 462,
                  "decorators": [],
                  "name": "isNumber",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 465,
                  "end": 486,
                  "left": {
                    "type": "UnaryExpression",
                    "start": 465,
                    "end": 473,
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "start": 472,
                      "end": 473,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "prefix": true
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 478,
                    "end": 486,
                    "value": "number",
                    "raw": "\"number\""
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 492,
            "end": 606,
            "test": {
              "type": "LogicalExpression",
              "start": 496,
              "end": 516,
              "left": {
                "type": "Identifier",
                "start": 496,
                "end": 504,
                "decorators": [],
                "name": "isString",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "||",
              "right": {
                "type": "Identifier",
                "start": 508,
                "end": 516,
                "decorators": [],
                "name": "isNumber",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 518,
              "end": 561,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 528,
                  "end": 555,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 532,
                      "end": 554,
                      "id": {
                        "type": "Identifier",
                        "start": 532,
                        "end": 550,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 533,
                          "end": 550,
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "start": 535,
                            "end": 550,
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
                            ]
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 553,
                        "end": 554,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 571,
              "end": 606,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 581,
                  "end": 600,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 585,
                      "end": 599,
                      "id": {
                        "type": "Identifier",
                        "start": 585,
                        "end": 595,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 586,
                          "end": 595,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 588,
                            "end": 595
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 598,
                        "end": 599,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 610,
      "end": 910,
      "id": {
        "type": "Identifier",
        "start": 619,
        "end": 622,
        "decorators": [],
        "name": "f13",
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
          "start": 623,
          "end": 651,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 624,
            "end": 651,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 626,
              "end": 651,
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
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 653,
        "end": 910,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 659,
            "end": 698,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 665,
                "end": 697,
                "id": {
                  "type": "Identifier",
                  "start": 665,
                  "end": 673,
                  "decorators": [],
                  "name": "isString",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 676,
                  "end": 697,
                  "left": {
                    "type": "UnaryExpression",
                    "start": 676,
                    "end": 684,
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "start": 683,
                      "end": 684,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "prefix": true
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 689,
                    "end": 697,
                    "value": "string",
                    "raw": "\"string\""
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 703,
            "end": 742,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 709,
                "end": 741,
                "id": {
                  "type": "Identifier",
                  "start": 709,
                  "end": 717,
                  "decorators": [],
                  "name": "isNumber",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 720,
                  "end": 741,
                  "left": {
                    "type": "UnaryExpression",
                    "start": 720,
                    "end": 728,
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "start": 727,
                      "end": 728,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "prefix": true
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 733,
                    "end": 741,
                    "value": "number",
                    "raw": "\"number\""
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 747,
            "end": 793,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 753,
                "end": 792,
                "id": {
                  "type": "Identifier",
                  "start": 753,
                  "end": 769,
                  "decorators": [],
                  "name": "isStringOrNumber",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 772,
                  "end": 792,
                  "left": {
                    "type": "Identifier",
                    "start": 772,
                    "end": 780,
                    "decorators": [],
                    "name": "isString",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "||",
                  "right": {
                    "type": "Identifier",
                    "start": 784,
                    "end": 792,
                    "decorators": [],
                    "name": "isNumber",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 798,
            "end": 908,
            "test": {
              "type": "Identifier",
              "start": 802,
              "end": 818,
              "decorators": [],
              "name": "isStringOrNumber",
              "optional": false,
              "typeAnnotation": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 820,
              "end": 863,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 830,
                  "end": 857,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 834,
                      "end": 856,
                      "id": {
                        "type": "Identifier",
                        "start": 834,
                        "end": 852,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 835,
                          "end": 852,
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "start": 837,
                            "end": 852,
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
                            ]
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 855,
                        "end": 856,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 873,
              "end": 908,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 883,
                  "end": 902,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 887,
                      "end": 901,
                      "id": {
                        "type": "Identifier",
                        "start": 887,
                        "end": 897,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 888,
                          "end": 897,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 890,
                            "end": 897
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 900,
                        "end": 901,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 912,
      "end": 1048,
      "id": {
        "type": "Identifier",
        "start": 921,
        "end": 924,
        "decorators": [],
        "name": "f14",
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
          "start": 925,
          "end": 953,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 926,
            "end": 953,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 928,
              "end": 953,
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
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 954,
        "end": 969,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 956,
          "end": 969,
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
          ]
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 970,
        "end": 1048,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 976,
            "end": 1013,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 982,
                "end": 1012,
                "id": {
                  "type": "Identifier",
                  "start": 982,
                  "end": 994,
                  "decorators": [],
                  "name": "notUndefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 997,
                  "end": 1012,
                  "left": {
                    "type": "Identifier",
                    "start": 997,
                    "end": 998,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "!==",
                  "right": {
                    "type": "Identifier",
                    "start": 1003,
                    "end": 1012,
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 1018,
            "end": 1046,
            "argument": {
              "type": "ConditionalExpression",
              "start": 1025,
              "end": 1045,
              "test": {
                "type": "Identifier",
                "start": 1025,
                "end": 1037,
                "decorators": [],
                "name": "notUndefined",
                "optional": false,
                "typeAnnotation": null
              },
              "consequent": {
                "type": "Identifier",
                "start": 1040,
                "end": 1041,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "alternate": {
                "type": "Literal",
                "start": 1044,
                "end": 1045,
                "value": 0,
                "raw": "0"
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1050,
      "end": 1209,
      "id": {
        "type": "Identifier",
        "start": 1059,
        "end": 1062,
        "decorators": [],
        "name": "f15",
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
          "start": 1063,
          "end": 1099,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1066,
            "end": 1099,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 1068,
              "end": 1099,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 1070,
                  "end": 1097,
                  "computed": false,
                  "optional": false,
                  "readonly": true,
                  "key": {
                    "type": "Identifier",
                    "start": 1079,
                    "end": 1080,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1080,
                    "end": 1097,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1082,
                      "end": 1097,
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
                      ]
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1101,
        "end": 1209,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1107,
            "end": 1150,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1113,
                "end": 1149,
                "id": {
                  "type": "Identifier",
                  "start": 1113,
                  "end": 1121,
                  "decorators": [],
                  "name": "isString",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 1124,
                  "end": 1149,
                  "left": {
                    "type": "UnaryExpression",
                    "start": 1124,
                    "end": 1136,
                    "operator": "typeof",
                    "argument": {
                      "type": "MemberExpression",
                      "start": 1131,
                      "end": 1136,
                      "object": {
                        "type": "Identifier",
                        "start": 1131,
                        "end": 1134,
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1135,
                        "end": 1136,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "prefix": true
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 1141,
                    "end": 1149,
                    "value": "string",
                    "raw": "'string'"
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 1155,
            "end": 1207,
            "test": {
              "type": "Identifier",
              "start": 1159,
              "end": 1167,
              "decorators": [],
              "name": "isString",
              "optional": false,
              "typeAnnotation": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1169,
              "end": 1207,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1179,
                  "end": 1201,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1183,
                      "end": 1200,
                      "id": {
                        "type": "Identifier",
                        "start": 1183,
                        "end": 1192,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1184,
                          "end": 1192,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1186,
                            "end": 1192
                          }
                        }
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 1195,
                        "end": 1200,
                        "object": {
                          "type": "Identifier",
                          "start": 1195,
                          "end": 1198,
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1199,
                          "end": 1200,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1211,
      "end": 1448,
      "id": {
        "type": "Identifier",
        "start": 1220,
        "end": 1223,
        "decorators": [],
        "name": "f16",
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
          "start": 1224,
          "end": 1260,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1227,
            "end": 1260,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 1229,
              "end": 1260,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 1231,
                  "end": 1258,
                  "computed": false,
                  "optional": false,
                  "readonly": true,
                  "key": {
                    "type": "Identifier",
                    "start": 1240,
                    "end": 1241,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1241,
                    "end": 1258,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1243,
                      "end": 1258,
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
                      ]
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1262,
        "end": 1448,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1268,
            "end": 1311,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1274,
                "end": 1310,
                "id": {
                  "type": "Identifier",
                  "start": 1274,
                  "end": 1282,
                  "decorators": [],
                  "name": "isString",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 1285,
                  "end": 1310,
                  "left": {
                    "type": "UnaryExpression",
                    "start": 1285,
                    "end": 1297,
                    "operator": "typeof",
                    "argument": {
                      "type": "MemberExpression",
                      "start": 1292,
                      "end": 1297,
                      "object": {
                        "type": "Identifier",
                        "start": 1292,
                        "end": 1295,
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1296,
                        "end": 1297,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "prefix": true
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 1302,
                    "end": 1310,
                    "value": "string",
                    "raw": "'string'"
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1316,
            "end": 1332,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1316,
              "end": 1331,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1316,
                "end": 1319,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "ObjectExpression",
                "start": 1322,
                "end": 1331,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1324,
                    "end": 1329,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1324,
                      "end": 1325,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1327,
                      "end": 1329,
                      "value": 42,
                      "raw": "42"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 1337,
            "end": 1446,
            "test": {
              "type": "Identifier",
              "start": 1341,
              "end": 1349,
              "decorators": [],
              "name": "isString",
              "optional": false,
              "typeAnnotation": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1351,
              "end": 1446,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1361,
                  "end": 1383,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1365,
                      "end": 1382,
                      "id": {
                        "type": "Identifier",
                        "start": 1365,
                        "end": 1374,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1366,
                          "end": 1374,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1368,
                            "end": 1374
                          }
                        }
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 1377,
                        "end": 1382,
                        "object": {
                          "type": "Identifier",
                          "start": 1377,
                          "end": 1380,
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1381,
                          "end": 1382,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1450,
      "end": 1606,
      "id": {
        "type": "Identifier",
        "start": 1459,
        "end": 1462,
        "decorators": [],
        "name": "f17",
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
          "start": 1463,
          "end": 1494,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1466,
            "end": 1494,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 1468,
              "end": 1494,
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 1477,
                "end": 1494,
                "elementTypes": [
                  {
                    "type": "TSUnionType",
                    "start": 1478,
                    "end": 1493,
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
                    ]
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1496,
        "end": 1606,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1502,
            "end": 1546,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1508,
                "end": 1545,
                "id": {
                  "type": "Identifier",
                  "start": 1508,
                  "end": 1516,
                  "decorators": [],
                  "name": "isString",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 1519,
                  "end": 1545,
                  "left": {
                    "type": "UnaryExpression",
                    "start": 1519,
                    "end": 1532,
                    "operator": "typeof",
                    "argument": {
                      "type": "MemberExpression",
                      "start": 1526,
                      "end": 1532,
                      "object": {
                        "type": "Identifier",
                        "start": 1526,
                        "end": 1529,
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Literal",
                        "start": 1530,
                        "end": 1531,
                        "value": 0,
                        "raw": "0"
                      },
                      "optional": false,
                      "computed": true
                    },
                    "prefix": true
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 1537,
                    "end": 1545,
                    "value": "string",
                    "raw": "'string'"
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 1551,
            "end": 1604,
            "test": {
              "type": "Identifier",
              "start": 1555,
              "end": 1563,
              "decorators": [],
              "name": "isString",
              "optional": false,
              "typeAnnotation": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1565,
              "end": 1604,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1575,
                  "end": 1598,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1579,
                      "end": 1597,
                      "id": {
                        "type": "Identifier",
                        "start": 1579,
                        "end": 1588,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1580,
                          "end": 1588,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1582,
                            "end": 1588
                          }
                        }
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 1591,
                        "end": 1597,
                        "object": {
                          "type": "Identifier",
                          "start": 1591,
                          "end": 1594,
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Literal",
                          "start": 1595,
                          "end": 1596,
                          "value": 0,
                          "raw": "0"
                        },
                        "optional": false,
                        "computed": true
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1608,
      "end": 1837,
      "id": {
        "type": "Identifier",
        "start": 1617,
        "end": 1620,
        "decorators": [],
        "name": "f18",
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
          "start": 1621,
          "end": 1652,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1624,
            "end": 1652,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 1626,
              "end": 1652,
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 1635,
                "end": 1652,
                "elementTypes": [
                  {
                    "type": "TSUnionType",
                    "start": 1636,
                    "end": 1651,
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
                    ]
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1654,
        "end": 1837,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1660,
            "end": 1704,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1666,
                "end": 1703,
                "id": {
                  "type": "Identifier",
                  "start": 1666,
                  "end": 1674,
                  "decorators": [],
                  "name": "isString",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 1677,
                  "end": 1703,
                  "left": {
                    "type": "UnaryExpression",
                    "start": 1677,
                    "end": 1690,
                    "operator": "typeof",
                    "argument": {
                      "type": "MemberExpression",
                      "start": 1684,
                      "end": 1690,
                      "object": {
                        "type": "Identifier",
                        "start": 1684,
                        "end": 1687,
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Literal",
                        "start": 1688,
                        "end": 1689,
                        "value": 0,
                        "raw": "0"
                      },
                      "optional": false,
                      "computed": true
                    },
                    "prefix": true
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 1695,
                    "end": 1703,
                    "value": "string",
                    "raw": "'string'"
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1709,
            "end": 1720,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1709,
              "end": 1719,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1709,
                "end": 1712,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "ArrayExpression",
                "start": 1715,
                "end": 1719,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 1716,
                    "end": 1718,
                    "value": 42,
                    "raw": "42"
                  }
                ]
              }
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 1725,
            "end": 1835,
            "test": {
              "type": "Identifier",
              "start": 1729,
              "end": 1737,
              "decorators": [],
              "name": "isString",
              "optional": false,
              "typeAnnotation": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1739,
              "end": 1835,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1749,
                  "end": 1772,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1753,
                      "end": 1771,
                      "id": {
                        "type": "Identifier",
                        "start": 1753,
                        "end": 1762,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1754,
                          "end": 1762,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1756,
                            "end": 1762
                          }
                        }
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 1765,
                        "end": 1771,
                        "object": {
                          "type": "Identifier",
                          "start": 1765,
                          "end": 1768,
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Literal",
                          "start": 1769,
                          "end": 1770,
                          "value": 0,
                          "raw": "0"
                        },
                        "optional": false,
                        "computed": true
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1839,
      "end": 2033,
      "id": {
        "type": "Identifier",
        "start": 1848,
        "end": 1851,
        "decorators": [],
        "name": "f20",
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
          "start": 1852,
          "end": 1916,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1855,
            "end": 1916,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1857,
              "end": 1916,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 1857,
                  "end": 1885,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 1859,
                      "end": 1871,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1859,
                        "end": 1863,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1863,
                        "end": 1870,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 1865,
                          "end": 1870,
                          "literal": {
                            "type": "Literal",
                            "start": 1865,
                            "end": 1870,
                            "value": "foo",
                            "raw": "'foo'"
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 1872,
                      "end": 1883,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1872,
                        "end": 1875,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1875,
                        "end": 1883,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1877,
                          "end": 1883
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 1888,
                  "end": 1916,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 1890,
                      "end": 1902,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1890,
                        "end": 1894,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1894,
                        "end": 1901,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 1896,
                          "end": 1901,
                          "literal": {
                            "type": "Literal",
                            "start": 1896,
                            "end": 1901,
                            "value": "bar",
                            "raw": "'bar'"
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 1903,
                      "end": 1914,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1903,
                        "end": 1906,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1906,
                        "end": 1914,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1908,
                          "end": 1914
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1918,
        "end": 2033,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1924,
            "end": 1957,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1930,
                "end": 1956,
                "id": {
                  "type": "Identifier",
                  "start": 1930,
                  "end": 1935,
                  "decorators": [],
                  "name": "isFoo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 1938,
                  "end": 1956,
                  "left": {
                    "type": "MemberExpression",
                    "start": 1938,
                    "end": 1946,
                    "object": {
                      "type": "Identifier",
                      "start": 1938,
                      "end": 1941,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1942,
                      "end": 1946,
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 1951,
                    "end": 1956,
                    "value": "foo",
                    "raw": "'foo'"
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 1962,
            "end": 2031,
            "test": {
              "type": "Identifier",
              "start": 1966,
              "end": 1971,
              "decorators": [],
              "name": "isFoo",
              "optional": false,
              "typeAnnotation": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1973,
              "end": 1997,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1983,
                  "end": 1991,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 1983,
                    "end": 1990,
                    "object": {
                      "type": "Identifier",
                      "start": 1983,
                      "end": 1986,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1987,
                      "end": 1990,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 2007,
              "end": 2031,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2017,
                  "end": 2025,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 2017,
                    "end": 2024,
                    "object": {
                      "type": "Identifier",
                      "start": 2017,
                      "end": 2020,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2021,
                      "end": 2024,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2035,
      "end": 2340,
      "id": {
        "type": "Identifier",
        "start": 2044,
        "end": 2047,
        "decorators": [],
        "name": "f21",
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
          "start": 2048,
          "end": 2112,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2051,
            "end": 2112,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 2053,
              "end": 2112,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 2053,
                  "end": 2081,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 2055,
                      "end": 2067,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2055,
                        "end": 2059,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2059,
                        "end": 2066,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 2061,
                          "end": 2066,
                          "literal": {
                            "type": "Literal",
                            "start": 2061,
                            "end": 2066,
                            "value": "foo",
                            "raw": "'foo'"
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 2068,
                      "end": 2079,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2068,
                        "end": 2071,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2071,
                        "end": 2079,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 2073,
                          "end": 2079
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 2084,
                  "end": 2112,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 2086,
                      "end": 2098,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2086,
                        "end": 2090,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2090,
                        "end": 2097,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 2092,
                          "end": 2097,
                          "literal": {
                            "type": "Literal",
                            "start": 2092,
                            "end": 2097,
                            "value": "bar",
                            "raw": "'bar'"
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 2099,
                      "end": 2110,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2099,
                        "end": 2102,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2102,
                        "end": 2110,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 2104,
                          "end": 2110
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2114,
        "end": 2340,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2120,
            "end": 2162,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2126,
                "end": 2161,
                "id": {
                  "type": "Identifier",
                  "start": 2126,
                  "end": 2140,
                  "decorators": [],
                  "name": "isFoo",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2131,
                    "end": 2140,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 2133,
                      "end": 2140
                    }
                  }
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 2143,
                  "end": 2161,
                  "left": {
                    "type": "MemberExpression",
                    "start": 2143,
                    "end": 2151,
                    "object": {
                      "type": "Identifier",
                      "start": 2143,
                      "end": 2146,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2147,
                      "end": 2151,
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 2156,
                    "end": 2161,
                    "value": "foo",
                    "raw": "'foo'"
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 2167,
            "end": 2338,
            "test": {
              "type": "Identifier",
              "start": 2171,
              "end": 2176,
              "decorators": [],
              "name": "isFoo",
              "optional": false,
              "typeAnnotation": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2178,
              "end": 2253,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2188,
                  "end": 2196,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 2188,
                    "end": 2195,
                    "object": {
                      "type": "Identifier",
                      "start": 2188,
                      "end": 2191,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2192,
                      "end": 2195,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 2263,
              "end": 2338,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2273,
                  "end": 2281,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 2273,
                    "end": 2280,
                    "object": {
                      "type": "Identifier",
                      "start": 2273,
                      "end": 2276,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2277,
                      "end": 2280,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2342,
      "end": 2618,
      "id": {
        "type": "Identifier",
        "start": 2351,
        "end": 2354,
        "decorators": [],
        "name": "f22",
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
          "start": 2355,
          "end": 2419,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2358,
            "end": 2419,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 2360,
              "end": 2419,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 2360,
                  "end": 2388,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 2362,
                      "end": 2374,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2362,
                        "end": 2366,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2366,
                        "end": 2373,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 2368,
                          "end": 2373,
                          "literal": {
                            "type": "Literal",
                            "start": 2368,
                            "end": 2373,
                            "value": "foo",
                            "raw": "'foo'"
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 2375,
                      "end": 2386,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2375,
                        "end": 2378,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2378,
                        "end": 2386,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 2380,
                          "end": 2386
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 2391,
                  "end": 2419,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 2393,
                      "end": 2405,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2393,
                        "end": 2397,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2397,
                        "end": 2404,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 2399,
                          "end": 2404,
                          "literal": {
                            "type": "Literal",
                            "start": 2399,
                            "end": 2404,
                            "value": "bar",
                            "raw": "'bar'"
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 2406,
                      "end": 2417,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2406,
                        "end": 2409,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2409,
                        "end": 2417,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 2411,
                          "end": 2417
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2421,
        "end": 2618,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2427,
            "end": 2458,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2431,
                "end": 2457,
                "id": {
                  "type": "Identifier",
                  "start": 2431,
                  "end": 2436,
                  "decorators": [],
                  "name": "isFoo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 2439,
                  "end": 2457,
                  "left": {
                    "type": "MemberExpression",
                    "start": 2439,
                    "end": 2447,
                    "object": {
                      "type": "Identifier",
                      "start": 2439,
                      "end": 2442,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2443,
                      "end": 2447,
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 2452,
                    "end": 2457,
                    "value": "foo",
                    "raw": "'foo'"
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 2463,
            "end": 2616,
            "test": {
              "type": "Identifier",
              "start": 2467,
              "end": 2472,
              "decorators": [],
              "name": "isFoo",
              "optional": false,
              "typeAnnotation": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2474,
              "end": 2540,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2484,
                  "end": 2492,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 2484,
                    "end": 2491,
                    "object": {
                      "type": "Identifier",
                      "start": 2484,
                      "end": 2487,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2488,
                      "end": 2491,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 2550,
              "end": 2616,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2560,
                  "end": 2568,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 2560,
                    "end": 2567,
                    "object": {
                      "type": "Identifier",
                      "start": 2560,
                      "end": 2563,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2564,
                      "end": 2567,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2620,
      "end": 2945,
      "id": {
        "type": "Identifier",
        "start": 2629,
        "end": 2632,
        "decorators": [],
        "name": "f23",
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
          "start": 2633,
          "end": 2697,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2636,
            "end": 2697,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 2638,
              "end": 2697,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 2638,
                  "end": 2666,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 2640,
                      "end": 2652,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2640,
                        "end": 2644,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2644,
                        "end": 2651,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 2646,
                          "end": 2651,
                          "literal": {
                            "type": "Literal",
                            "start": 2646,
                            "end": 2651,
                            "value": "foo",
                            "raw": "'foo'"
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 2653,
                      "end": 2664,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2653,
                        "end": 2656,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2656,
                        "end": 2664,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 2658,
                          "end": 2664
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 2669,
                  "end": 2697,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 2671,
                      "end": 2683,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2671,
                        "end": 2675,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2675,
                        "end": 2682,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 2677,
                          "end": 2682,
                          "literal": {
                            "type": "Literal",
                            "start": 2677,
                            "end": 2682,
                            "value": "bar",
                            "raw": "'bar'"
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 2684,
                      "end": 2695,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2684,
                        "end": 2687,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2687,
                        "end": 2695,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 2689,
                          "end": 2695
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2699,
        "end": 2945,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2705,
            "end": 2738,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2711,
                "end": 2737,
                "id": {
                  "type": "Identifier",
                  "start": 2711,
                  "end": 2716,
                  "decorators": [],
                  "name": "isFoo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 2719,
                  "end": 2737,
                  "left": {
                    "type": "MemberExpression",
                    "start": 2719,
                    "end": 2727,
                    "object": {
                      "type": "Identifier",
                      "start": 2719,
                      "end": 2722,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2723,
                      "end": 2727,
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 2732,
                    "end": 2737,
                    "value": "foo",
                    "raw": "'foo'"
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 2743,
            "end": 2753,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2743,
              "end": 2752,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2743,
                "end": 2746,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 2749,
                "end": 2752,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 2758,
            "end": 2943,
            "test": {
              "type": "Identifier",
              "start": 2762,
              "end": 2767,
              "decorators": [],
              "name": "isFoo",
              "optional": false,
              "typeAnnotation": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2769,
              "end": 2851,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2779,
                  "end": 2787,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 2779,
                    "end": 2786,
                    "object": {
                      "type": "Identifier",
                      "start": 2779,
                      "end": 2782,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2783,
                      "end": 2786,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 2861,
              "end": 2943,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2871,
                  "end": 2879,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 2871,
                    "end": 2878,
                    "object": {
                      "type": "Identifier",
                      "start": 2871,
                      "end": 2874,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2875,
                      "end": 2878,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2947,
      "end": 3162,
      "id": {
        "type": "Identifier",
        "start": 2956,
        "end": 2959,
        "decorators": [],
        "name": "f24",
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
          "start": 2960,
          "end": 3024,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2963,
            "end": 3024,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 2965,
              "end": 3024,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 2965,
                  "end": 2993,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 2967,
                      "end": 2979,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2967,
                        "end": 2971,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2971,
                        "end": 2978,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 2973,
                          "end": 2978,
                          "literal": {
                            "type": "Literal",
                            "start": 2973,
                            "end": 2978,
                            "value": "foo",
                            "raw": "'foo'"
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 2980,
                      "end": 2991,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2980,
                        "end": 2983,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2983,
                        "end": 2991,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 2985,
                          "end": 2991
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 2996,
                  "end": 3024,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 2998,
                      "end": 3010,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2998,
                        "end": 3002,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3002,
                        "end": 3009,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 3004,
                          "end": 3009,
                          "literal": {
                            "type": "Literal",
                            "start": 3004,
                            "end": 3009,
                            "value": "bar",
                            "raw": "'bar'"
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 3011,
                      "end": 3022,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3011,
                        "end": 3014,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3014,
                        "end": 3022,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 3016,
                          "end": 3022
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 3026,
        "end": 3162,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 3032,
            "end": 3048,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3038,
                "end": 3047,
                "id": {
                  "type": "Identifier",
                  "start": 3038,
                  "end": 3041,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 3044,
                  "end": 3047,
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3053,
            "end": 3086,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3059,
                "end": 3085,
                "id": {
                  "type": "Identifier",
                  "start": 3059,
                  "end": 3064,
                  "decorators": [],
                  "name": "isFoo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 3067,
                  "end": 3085,
                  "left": {
                    "type": "MemberExpression",
                    "start": 3067,
                    "end": 3075,
                    "object": {
                      "type": "Identifier",
                      "start": 3067,
                      "end": 3070,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3071,
                      "end": 3075,
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 3080,
                    "end": 3085,
                    "value": "foo",
                    "raw": "'foo'"
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 3091,
            "end": 3160,
            "test": {
              "type": "Identifier",
              "start": 3095,
              "end": 3100,
              "decorators": [],
              "name": "isFoo",
              "optional": false,
              "typeAnnotation": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3102,
              "end": 3126,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3112,
                  "end": 3120,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3112,
                    "end": 3119,
                    "object": {
                      "type": "Identifier",
                      "start": 3112,
                      "end": 3115,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3116,
                      "end": 3119,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 3136,
              "end": 3160,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3146,
                  "end": 3154,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3146,
                    "end": 3153,
                    "object": {
                      "type": "Identifier",
                      "start": 3146,
                      "end": 3149,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3150,
                      "end": 3153,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3164,
      "end": 3377,
      "id": {
        "type": "Identifier",
        "start": 3173,
        "end": 3176,
        "decorators": [],
        "name": "f25",
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
          "start": 3177,
          "end": 3241,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3180,
            "end": 3241,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 3182,
              "end": 3241,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 3182,
                  "end": 3210,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 3184,
                      "end": 3196,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3184,
                        "end": 3188,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3188,
                        "end": 3195,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 3190,
                          "end": 3195,
                          "literal": {
                            "type": "Literal",
                            "start": 3190,
                            "end": 3195,
                            "value": "foo",
                            "raw": "'foo'"
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 3197,
                      "end": 3208,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3197,
                        "end": 3200,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3200,
                        "end": 3208,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3202,
                          "end": 3208
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 3213,
                  "end": 3241,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 3215,
                      "end": 3227,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3215,
                        "end": 3219,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3219,
                        "end": 3226,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 3221,
                          "end": 3226,
                          "literal": {
                            "type": "Literal",
                            "start": 3221,
                            "end": 3226,
                            "value": "bar",
                            "raw": "'bar'"
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 3228,
                      "end": 3239,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3228,
                        "end": 3231,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3231,
                        "end": 3239,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 3233,
                          "end": 3239
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 3243,
        "end": 3377,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 3249,
            "end": 3263,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3253,
                "end": 3262,
                "id": {
                  "type": "Identifier",
                  "start": 3253,
                  "end": 3256,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 3259,
                  "end": 3262,
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3268,
            "end": 3301,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3274,
                "end": 3300,
                "id": {
                  "type": "Identifier",
                  "start": 3274,
                  "end": 3279,
                  "decorators": [],
                  "name": "isFoo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 3282,
                  "end": 3300,
                  "left": {
                    "type": "MemberExpression",
                    "start": 3282,
                    "end": 3290,
                    "object": {
                      "type": "Identifier",
                      "start": 3282,
                      "end": 3285,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3286,
                      "end": 3290,
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 3295,
                    "end": 3300,
                    "value": "foo",
                    "raw": "'foo'"
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 3306,
            "end": 3375,
            "test": {
              "type": "Identifier",
              "start": 3310,
              "end": 3315,
              "decorators": [],
              "name": "isFoo",
              "optional": false,
              "typeAnnotation": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3317,
              "end": 3341,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3327,
                  "end": 3335,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3327,
                    "end": 3334,
                    "object": {
                      "type": "Identifier",
                      "start": 3327,
                      "end": 3330,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3331,
                      "end": 3334,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 3351,
              "end": 3375,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3361,
                  "end": 3369,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3361,
                    "end": 3368,
                    "object": {
                      "type": "Identifier",
                      "start": 3361,
                      "end": 3364,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3365,
                      "end": 3368,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3379,
      "end": 3611,
      "id": {
        "type": "Identifier",
        "start": 3388,
        "end": 3391,
        "decorators": [],
        "name": "f26",
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
          "start": 3392,
          "end": 3476,
          "decorators": [],
          "name": "outer",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3397,
            "end": 3476,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 3399,
              "end": 3476,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 3401,
                  "end": 3474,
                  "computed": false,
                  "optional": false,
                  "readonly": true,
                  "key": {
                    "type": "Identifier",
                    "start": 3410,
                    "end": 3413,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3413,
                    "end": 3474,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 3415,
                      "end": 3474,
                      "types": [
                        {
                          "type": "TSTypeLiteral",
                          "start": 3415,
                          "end": 3443,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 3417,
                              "end": 3429,
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 3417,
                                "end": 3421,
                                "decorators": [],
                                "name": "kind",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 3421,
                                "end": 3428,
                                "typeAnnotation": {
                                  "type": "TSLiteralType",
                                  "start": 3423,
                                  "end": 3428,
                                  "literal": {
                                    "type": "Literal",
                                    "start": 3423,
                                    "end": 3428,
                                    "value": "foo",
                                    "raw": "'foo'"
                                  }
                                }
                              },
                              "accessibility": null,
                              "static": false
                            },
                            {
                              "type": "TSPropertySignature",
                              "start": 3430,
                              "end": 3441,
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 3430,
                                "end": 3433,
                                "decorators": [],
                                "name": "foo",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 3433,
                                "end": 3441,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 3435,
                                  "end": 3441
                                }
                              },
                              "accessibility": null,
                              "static": false
                            }
                          ]
                        },
                        {
                          "type": "TSTypeLiteral",
                          "start": 3446,
                          "end": 3474,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 3448,
                              "end": 3460,
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 3448,
                                "end": 3452,
                                "decorators": [],
                                "name": "kind",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 3452,
                                "end": 3459,
                                "typeAnnotation": {
                                  "type": "TSLiteralType",
                                  "start": 3454,
                                  "end": 3459,
                                  "literal": {
                                    "type": "Literal",
                                    "start": 3454,
                                    "end": 3459,
                                    "value": "bar",
                                    "raw": "'bar'"
                                  }
                                }
                              },
                              "accessibility": null,
                              "static": false
                            },
                            {
                              "type": "TSPropertySignature",
                              "start": 3461,
                              "end": 3472,
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 3461,
                                "end": 3464,
                                "decorators": [],
                                "name": "bar",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 3464,
                                "end": 3472,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 3466,
                                  "end": 3472
                                }
                              },
                              "accessibility": null,
                              "static": false
                            }
                          ]
                        }
                      ]
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 3478,
        "end": 3611,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 3484,
            "end": 3523,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3490,
                "end": 3522,
                "id": {
                  "type": "Identifier",
                  "start": 3490,
                  "end": 3495,
                  "decorators": [],
                  "name": "isFoo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 3498,
                  "end": 3522,
                  "left": {
                    "type": "MemberExpression",
                    "start": 3498,
                    "end": 3512,
                    "object": {
                      "type": "MemberExpression",
                      "start": 3498,
                      "end": 3507,
                      "object": {
                        "type": "Identifier",
                        "start": 3498,
                        "end": 3503,
                        "decorators": [],
                        "name": "outer",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 3504,
                        "end": 3507,
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3508,
                      "end": 3512,
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 3517,
                    "end": 3522,
                    "value": "foo",
                    "raw": "'foo'"
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 3528,
            "end": 3609,
            "test": {
              "type": "Identifier",
              "start": 3532,
              "end": 3537,
              "decorators": [],
              "name": "isFoo",
              "optional": false,
              "typeAnnotation": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3539,
              "end": 3569,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3549,
                  "end": 3563,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3549,
                    "end": 3562,
                    "object": {
                      "type": "MemberExpression",
                      "start": 3549,
                      "end": 3558,
                      "object": {
                        "type": "Identifier",
                        "start": 3549,
                        "end": 3554,
                        "decorators": [],
                        "name": "outer",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 3555,
                        "end": 3558,
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3559,
                      "end": 3562,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 3579,
              "end": 3609,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3589,
                  "end": 3603,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3589,
                    "end": 3602,
                    "object": {
                      "type": "MemberExpression",
                      "start": 3589,
                      "end": 3598,
                      "object": {
                        "type": "Identifier",
                        "start": 3589,
                        "end": 3594,
                        "decorators": [],
                        "name": "outer",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 3595,
                        "end": 3598,
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3599,
                      "end": 3602,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3613,
      "end": 3916,
      "id": {
        "type": "Identifier",
        "start": 3622,
        "end": 3625,
        "decorators": [],
        "name": "f27",
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
          "start": 3626,
          "end": 3701,
          "decorators": [],
          "name": "outer",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3631,
            "end": 3701,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 3633,
              "end": 3701,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 3635,
                  "end": 3699,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3635,
                    "end": 3638,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3638,
                    "end": 3699,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 3640,
                      "end": 3699,
                      "types": [
                        {
                          "type": "TSTypeLiteral",
                          "start": 3640,
                          "end": 3668,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 3642,
                              "end": 3654,
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 3642,
                                "end": 3646,
                                "decorators": [],
                                "name": "kind",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 3646,
                                "end": 3653,
                                "typeAnnotation": {
                                  "type": "TSLiteralType",
                                  "start": 3648,
                                  "end": 3653,
                                  "literal": {
                                    "type": "Literal",
                                    "start": 3648,
                                    "end": 3653,
                                    "value": "foo",
                                    "raw": "'foo'"
                                  }
                                }
                              },
                              "accessibility": null,
                              "static": false
                            },
                            {
                              "type": "TSPropertySignature",
                              "start": 3655,
                              "end": 3666,
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 3655,
                                "end": 3658,
                                "decorators": [],
                                "name": "foo",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 3658,
                                "end": 3666,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 3660,
                                  "end": 3666
                                }
                              },
                              "accessibility": null,
                              "static": false
                            }
                          ]
                        },
                        {
                          "type": "TSTypeLiteral",
                          "start": 3671,
                          "end": 3699,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 3673,
                              "end": 3685,
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 3673,
                                "end": 3677,
                                "decorators": [],
                                "name": "kind",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 3677,
                                "end": 3684,
                                "typeAnnotation": {
                                  "type": "TSLiteralType",
                                  "start": 3679,
                                  "end": 3684,
                                  "literal": {
                                    "type": "Literal",
                                    "start": 3679,
                                    "end": 3684,
                                    "value": "bar",
                                    "raw": "'bar'"
                                  }
                                }
                              },
                              "accessibility": null,
                              "static": false
                            },
                            {
                              "type": "TSPropertySignature",
                              "start": 3686,
                              "end": 3697,
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 3686,
                                "end": 3689,
                                "decorators": [],
                                "name": "bar",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 3689,
                                "end": 3697,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 3691,
                                  "end": 3697
                                }
                              },
                              "accessibility": null,
                              "static": false
                            }
                          ]
                        }
                      ]
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 3703,
        "end": 3916,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 3709,
            "end": 3748,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3715,
                "end": 3747,
                "id": {
                  "type": "Identifier",
                  "start": 3715,
                  "end": 3720,
                  "decorators": [],
                  "name": "isFoo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 3723,
                  "end": 3747,
                  "left": {
                    "type": "MemberExpression",
                    "start": 3723,
                    "end": 3737,
                    "object": {
                      "type": "MemberExpression",
                      "start": 3723,
                      "end": 3732,
                      "object": {
                        "type": "Identifier",
                        "start": 3723,
                        "end": 3728,
                        "decorators": [],
                        "name": "outer",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 3729,
                        "end": 3732,
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3733,
                      "end": 3737,
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 3742,
                    "end": 3747,
                    "value": "foo",
                    "raw": "'foo'"
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 3753,
            "end": 3914,
            "test": {
              "type": "Identifier",
              "start": 3757,
              "end": 3762,
              "decorators": [],
              "name": "isFoo",
              "optional": false,
              "typeAnnotation": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3764,
              "end": 3834,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3774,
                  "end": 3788,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3774,
                    "end": 3787,
                    "object": {
                      "type": "MemberExpression",
                      "start": 3774,
                      "end": 3783,
                      "object": {
                        "type": "Identifier",
                        "start": 3774,
                        "end": 3779,
                        "decorators": [],
                        "name": "outer",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 3780,
                        "end": 3783,
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3784,
                      "end": 3787,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 3844,
              "end": 3914,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3854,
                  "end": 3868,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3854,
                    "end": 3867,
                    "object": {
                      "type": "MemberExpression",
                      "start": 3854,
                      "end": 3863,
                      "object": {
                        "type": "Identifier",
                        "start": 3854,
                        "end": 3859,
                        "decorators": [],
                        "name": "outer",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 3860,
                        "end": 3863,
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3864,
                      "end": 3867,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3918,
      "end": 4171,
      "id": {
        "type": "Identifier",
        "start": 3927,
        "end": 3930,
        "decorators": [],
        "name": "f28",
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
          "start": 3931,
          "end": 3996,
          "decorators": [],
          "name": "obj",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3935,
            "end": 3996,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 3937,
              "end": 3996,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 3937,
                  "end": 3965,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 3939,
                      "end": 3951,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3939,
                        "end": 3943,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3943,
                        "end": 3950,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 3945,
                          "end": 3950,
                          "literal": {
                            "type": "Literal",
                            "start": 3945,
                            "end": 3950,
                            "value": "foo",
                            "raw": "'foo'"
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 3952,
                      "end": 3963,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3952,
                        "end": 3955,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3955,
                        "end": 3963,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3957,
                          "end": 3963
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 3968,
                  "end": 3996,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 3970,
                      "end": 3982,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3970,
                        "end": 3974,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3974,
                        "end": 3981,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 3976,
                          "end": 3981,
                          "literal": {
                            "type": "Literal",
                            "start": 3976,
                            "end": 3981,
                            "value": "bar",
                            "raw": "'bar'"
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 3983,
                      "end": 3994,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3983,
                        "end": 3986,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3986,
                        "end": 3994,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 3988,
                          "end": 3994
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 3998,
        "end": 4171,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 4004,
            "end": 4044,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4010,
                "end": 4043,
                "id": {
                  "type": "Identifier",
                  "start": 4010,
                  "end": 4015,
                  "decorators": [],
                  "name": "isFoo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 4018,
                  "end": 4043,
                  "left": {
                    "type": "Identifier",
                    "start": 4018,
                    "end": 4021,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "&&",
                  "right": {
                    "type": "BinaryExpression",
                    "start": 4025,
                    "end": 4043,
                    "left": {
                      "type": "MemberExpression",
                      "start": 4025,
                      "end": 4033,
                      "object": {
                        "type": "Identifier",
                        "start": 4025,
                        "end": 4028,
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 4029,
                        "end": 4033,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 4038,
                      "end": 4043,
                      "value": "foo",
                      "raw": "'foo'"
                    }
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 4049,
            "end": 4089,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4055,
                "end": 4088,
                "id": {
                  "type": "Identifier",
                  "start": 4055,
                  "end": 4060,
                  "decorators": [],
                  "name": "isBar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 4063,
                  "end": 4088,
                  "left": {
                    "type": "Identifier",
                    "start": 4063,
                    "end": 4066,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "&&",
                  "right": {
                    "type": "BinaryExpression",
                    "start": 4070,
                    "end": 4088,
                    "left": {
                      "type": "MemberExpression",
                      "start": 4070,
                      "end": 4078,
                      "object": {
                        "type": "Identifier",
                        "start": 4070,
                        "end": 4073,
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 4074,
                        "end": 4078,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 4083,
                      "end": 4088,
                      "value": "bar",
                      "raw": "'bar'"
                    }
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 4094,
            "end": 4129,
            "test": {
              "type": "Identifier",
              "start": 4098,
              "end": 4103,
              "decorators": [],
              "name": "isFoo",
              "optional": false,
              "typeAnnotation": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 4105,
              "end": 4129,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4115,
                  "end": 4123,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4115,
                    "end": 4122,
                    "object": {
                      "type": "Identifier",
                      "start": 4115,
                      "end": 4118,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4119,
                      "end": 4122,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 4134,
            "end": 4169,
            "test": {
              "type": "Identifier",
              "start": 4138,
              "end": 4143,
              "decorators": [],
              "name": "isBar",
              "optional": false,
              "typeAnnotation": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 4145,
              "end": 4169,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4155,
                  "end": 4163,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4155,
                    "end": 4162,
                    "object": {
                      "type": "Identifier",
                      "start": 4155,
                      "end": 4158,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4159,
                      "end": 4162,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 4227,
      "end": 4419,
      "id": {
        "type": "Identifier",
        "start": 4236,
        "end": 4239,
        "decorators": [],
        "name": "f30",
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
          "start": 4240,
          "end": 4304,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4243,
            "end": 4304,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 4245,
              "end": 4304,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 4245,
                  "end": 4273,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 4247,
                      "end": 4259,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4247,
                        "end": 4251,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4251,
                        "end": 4258,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 4253,
                          "end": 4258,
                          "literal": {
                            "type": "Literal",
                            "start": 4253,
                            "end": 4258,
                            "value": "foo",
                            "raw": "'foo'"
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 4260,
                      "end": 4271,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4260,
                        "end": 4263,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4263,
                        "end": 4271,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 4265,
                          "end": 4271
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 4276,
                  "end": 4304,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 4278,
                      "end": 4290,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4278,
                        "end": 4282,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4282,
                        "end": 4289,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 4284,
                          "end": 4289,
                          "literal": {
                            "type": "Literal",
                            "start": 4284,
                            "end": 4289,
                            "value": "bar",
                            "raw": "'bar'"
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 4291,
                      "end": 4302,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4291,
                        "end": 4294,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4294,
                        "end": 4302,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 4296,
                          "end": 4302
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 4306,
        "end": 4419,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 4312,
            "end": 4334,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4318,
                "end": 4333,
                "id": {
                  "type": "Identifier",
                  "start": 4318,
                  "end": 4322,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 4325,
                  "end": 4333,
                  "object": {
                    "type": "Identifier",
                    "start": 4325,
                    "end": 4328,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 4329,
                    "end": 4333,
                    "decorators": [],
                    "name": "kind",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 4339,
            "end": 4417,
            "test": {
              "type": "BinaryExpression",
              "start": 4343,
              "end": 4357,
              "left": {
                "type": "Identifier",
                "start": 4343,
                "end": 4347,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 4352,
                "end": 4357,
                "value": "foo",
                "raw": "'foo'"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 4359,
              "end": 4383,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4369,
                  "end": 4377,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4369,
                    "end": 4376,
                    "object": {
                      "type": "Identifier",
                      "start": 4369,
                      "end": 4372,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4373,
                      "end": 4376,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 4393,
              "end": 4417,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4403,
                  "end": 4411,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4403,
                    "end": 4410,
                    "object": {
                      "type": "Identifier",
                      "start": 4403,
                      "end": 4406,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4407,
                      "end": 4410,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 4421,
      "end": 4612,
      "id": {
        "type": "Identifier",
        "start": 4430,
        "end": 4433,
        "decorators": [],
        "name": "f31",
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
          "start": 4434,
          "end": 4498,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4437,
            "end": 4498,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 4439,
              "end": 4498,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 4439,
                  "end": 4467,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 4441,
                      "end": 4453,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4441,
                        "end": 4445,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4445,
                        "end": 4452,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 4447,
                          "end": 4452,
                          "literal": {
                            "type": "Literal",
                            "start": 4447,
                            "end": 4452,
                            "value": "foo",
                            "raw": "'foo'"
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 4454,
                      "end": 4465,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4454,
                        "end": 4457,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4457,
                        "end": 4465,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 4459,
                          "end": 4465
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 4470,
                  "end": 4498,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 4472,
                      "end": 4484,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4472,
                        "end": 4476,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4476,
                        "end": 4483,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 4478,
                          "end": 4483,
                          "literal": {
                            "type": "Literal",
                            "start": 4478,
                            "end": 4483,
                            "value": "bar",
                            "raw": "'bar'"
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 4485,
                      "end": 4496,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4485,
                        "end": 4488,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4488,
                        "end": 4496,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 4490,
                          "end": 4496
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 4500,
        "end": 4612,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 4506,
            "end": 4527,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4512,
                "end": 4526,
                "id": {
                  "type": "ObjectPattern",
                  "start": 4512,
                  "end": 4520,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 4514,
                      "end": 4518,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 4514,
                        "end": 4518,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 4514,
                        "end": 4518,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 4523,
                  "end": 4526,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 4532,
            "end": 4610,
            "test": {
              "type": "BinaryExpression",
              "start": 4536,
              "end": 4550,
              "left": {
                "type": "Identifier",
                "start": 4536,
                "end": 4540,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 4545,
                "end": 4550,
                "value": "foo",
                "raw": "'foo'"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 4552,
              "end": 4576,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4562,
                  "end": 4570,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4562,
                    "end": 4569,
                    "object": {
                      "type": "Identifier",
                      "start": 4562,
                      "end": 4565,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4566,
                      "end": 4569,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 4586,
              "end": 4610,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4596,
                  "end": 4604,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4596,
                    "end": 4603,
                    "object": {
                      "type": "Identifier",
                      "start": 4596,
                      "end": 4599,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4600,
                      "end": 4603,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 4614,
      "end": 4805,
      "id": {
        "type": "Identifier",
        "start": 4623,
        "end": 4626,
        "decorators": [],
        "name": "f32",
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
          "start": 4627,
          "end": 4691,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4630,
            "end": 4691,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 4632,
              "end": 4691,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 4632,
                  "end": 4660,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 4634,
                      "end": 4646,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4634,
                        "end": 4638,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4638,
                        "end": 4645,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 4640,
                          "end": 4645,
                          "literal": {
                            "type": "Literal",
                            "start": 4640,
                            "end": 4645,
                            "value": "foo",
                            "raw": "'foo'"
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 4647,
                      "end": 4658,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4647,
                        "end": 4650,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4650,
                        "end": 4658,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 4652,
                          "end": 4658
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 4663,
                  "end": 4691,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 4665,
                      "end": 4677,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4665,
                        "end": 4669,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4669,
                        "end": 4676,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 4671,
                          "end": 4676,
                          "literal": {
                            "type": "Literal",
                            "start": 4671,
                            "end": 4676,
                            "value": "bar",
                            "raw": "'bar'"
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 4678,
                      "end": 4689,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4678,
                        "end": 4681,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4681,
                        "end": 4689,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 4683,
                          "end": 4689
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 4693,
        "end": 4805,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 4699,
            "end": 4723,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4705,
                "end": 4722,
                "id": {
                  "type": "ObjectPattern",
                  "start": 4705,
                  "end": 4716,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 4707,
                      "end": 4714,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 4707,
                        "end": 4711,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 4713,
                        "end": 4714,
                        "decorators": [],
                        "name": "k",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 4719,
                  "end": 4722,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 4728,
            "end": 4803,
            "test": {
              "type": "BinaryExpression",
              "start": 4732,
              "end": 4743,
              "left": {
                "type": "Identifier",
                "start": 4732,
                "end": 4733,
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 4738,
                "end": 4743,
                "value": "foo",
                "raw": "'foo'"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 4745,
              "end": 4769,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4755,
                  "end": 4763,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4755,
                    "end": 4762,
                    "object": {
                      "type": "Identifier",
                      "start": 4755,
                      "end": 4758,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4759,
                      "end": 4762,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 4779,
              "end": 4803,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4789,
                  "end": 4797,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4789,
                    "end": 4796,
                    "object": {
                      "type": "Identifier",
                      "start": 4789,
                      "end": 4792,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4793,
                      "end": 4796,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 4807,
      "end": 5013,
      "id": {
        "type": "Identifier",
        "start": 4816,
        "end": 4819,
        "decorators": [],
        "name": "f33",
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
          "start": 4820,
          "end": 4884,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4823,
            "end": 4884,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 4825,
              "end": 4884,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 4825,
                  "end": 4853,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 4827,
                      "end": 4839,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4827,
                        "end": 4831,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4831,
                        "end": 4838,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 4833,
                          "end": 4838,
                          "literal": {
                            "type": "Literal",
                            "start": 4833,
                            "end": 4838,
                            "value": "foo",
                            "raw": "'foo'"
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 4840,
                      "end": 4851,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4840,
                        "end": 4843,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4843,
                        "end": 4851,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 4845,
                          "end": 4851
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 4856,
                  "end": 4884,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 4858,
                      "end": 4870,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4858,
                        "end": 4862,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4862,
                        "end": 4869,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 4864,
                          "end": 4869,
                          "literal": {
                            "type": "Literal",
                            "start": 4864,
                            "end": 4869,
                            "value": "bar",
                            "raw": "'bar'"
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 4871,
                      "end": 4882,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4871,
                        "end": 4874,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4874,
                        "end": 4882,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 4876,
                          "end": 4882
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 4886,
        "end": 5013,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 4892,
            "end": 4913,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4898,
                "end": 4912,
                "id": {
                  "type": "ObjectPattern",
                  "start": 4898,
                  "end": 4906,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 4900,
                      "end": 4904,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 4900,
                        "end": 4904,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 4900,
                        "end": 4904,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 4909,
                  "end": 4912,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "SwitchStatement",
            "start": 4918,
            "end": 5011,
            "discriminant": {
              "type": "Identifier",
              "start": 4926,
              "end": 4930,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 4942,
                "end": 4969,
                "test": {
                  "type": "Literal",
                  "start": 4947,
                  "end": 4952,
                  "value": "foo",
                  "raw": "'foo'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 4954,
                    "end": 4962,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 4954,
                      "end": 4961,
                      "object": {
                        "type": "Identifier",
                        "start": 4954,
                        "end": 4957,
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 4958,
                        "end": 4961,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 4963,
                    "end": 4969,
                    "label": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 4978,
                "end": 5005,
                "test": {
                  "type": "Literal",
                  "start": 4983,
                  "end": 4988,
                  "value": "bar",
                  "raw": "'bar'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 4990,
                    "end": 4998,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 4990,
                      "end": 4997,
                      "object": {
                        "type": "Identifier",
                        "start": 4990,
                        "end": 4993,
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 4994,
                        "end": 4997,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 4999,
                    "end": 5005,
                    "label": null
                  }
                ]
              }
            ]
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 5016,
      "end": 5313,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 5022,
        "end": 5025,
        "decorators": [],
        "name": "C10",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 5026,
        "end": 5313,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 5032,
            "end": 5311,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 5032,
              "end": 5043,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 5043,
              "end": 5311,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 5044,
                  "end": 5071,
                  "accessibility": null,
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 5053,
                    "end": 5071,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 5054,
                      "end": 5071,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 5056,
                        "end": 5071,
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
                        ]
                      }
                    }
                  },
                  "readonly": true,
                  "static": false
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 5073,
                "end": 5311,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 5083,
                    "end": 5133,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 5089,
                        "end": 5132,
                        "id": {
                          "type": "Identifier",
                          "start": 5089,
                          "end": 5103,
                          "decorators": [],
                          "name": "thisX_isString",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "start": 5106,
                          "end": 5132,
                          "left": {
                            "type": "UnaryExpression",
                            "start": 5106,
                            "end": 5119,
                            "operator": "typeof",
                            "argument": {
                              "type": "MemberExpression",
                              "start": 5113,
                              "end": 5119,
                              "object": {
                                "type": "ThisExpression",
                                "start": 5113,
                                "end": 5117
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 5118,
                                "end": 5119,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "prefix": true
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "start": 5124,
                            "end": 5132,
                            "value": "string",
                            "raw": "'string'"
                          }
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 5142,
                    "end": 5182,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 5148,
                        "end": 5181,
                        "id": {
                          "type": "Identifier",
                          "start": 5148,
                          "end": 5157,
                          "decorators": [],
                          "name": "xIsString",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "start": 5160,
                          "end": 5181,
                          "left": {
                            "type": "UnaryExpression",
                            "start": 5160,
                            "end": 5168,
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "start": 5167,
                              "end": 5168,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "prefix": true
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "start": 5173,
                            "end": 5181,
                            "value": "string",
                            "raw": "'string'"
                          }
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "IfStatement",
                    "start": 5191,
                    "end": 5305,
                    "test": {
                      "type": "LogicalExpression",
                      "start": 5195,
                      "end": 5222,
                      "left": {
                        "type": "Identifier",
                        "start": 5195,
                        "end": 5209,
                        "decorators": [],
                        "name": "thisX_isString",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "&&",
                      "right": {
                        "type": "Identifier",
                        "start": 5213,
                        "end": 5222,
                        "decorators": [],
                        "name": "xIsString",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 5224,
                      "end": 5305,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 5238,
                          "end": 5252,
                          "kind": "let",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 5242,
                              "end": 5251,
                              "id": {
                                "type": "Identifier",
                                "start": 5242,
                                "end": 5251,
                                "decorators": [],
                                "name": "s",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 5243,
                                  "end": 5251,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 5245,
                                    "end": 5251
                                  }
                                }
                              },
                              "init": null,
                              "definite": false
                            }
                          ],
                          "declare": false
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 5265,
                          "end": 5276,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 5265,
                            "end": 5275,
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "start": 5265,
                              "end": 5266,
                              "decorators": [],
                              "name": "s",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "MemberExpression",
                              "start": 5269,
                              "end": 5275,
                              "object": {
                                "type": "ThisExpression",
                                "start": 5269,
                                "end": 5273
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 5274,
                                "end": 5275,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 5289,
                          "end": 5295,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 5289,
                            "end": 5294,
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "start": 5289,
                              "end": 5290,
                              "decorators": [],
                              "name": "s",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 5293,
                              "end": 5294,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "directive": null
                        }
                      ]
                    },
                    "alternate": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 5315,
      "end": 5758,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 5321,
        "end": 5324,
        "decorators": [],
        "name": "C11",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 5325,
        "end": 5758,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 5331,
            "end": 5756,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 5331,
              "end": 5342,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 5342,
              "end": 5756,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 5343,
                  "end": 5370,
                  "accessibility": null,
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 5352,
                    "end": 5370,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 5353,
                      "end": 5370,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 5355,
                        "end": 5370,
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
                        ]
                      }
                    }
                  },
                  "readonly": true,
                  "static": false
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 5372,
                "end": 5756,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 5382,
                    "end": 5432,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 5388,
                        "end": 5431,
                        "id": {
                          "type": "Identifier",
                          "start": 5388,
                          "end": 5402,
                          "decorators": [],
                          "name": "thisX_isString",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "start": 5405,
                          "end": 5431,
                          "left": {
                            "type": "UnaryExpression",
                            "start": 5405,
                            "end": 5418,
                            "operator": "typeof",
                            "argument": {
                              "type": "MemberExpression",
                              "start": 5412,
                              "end": 5418,
                              "object": {
                                "type": "ThisExpression",
                                "start": 5412,
                                "end": 5416
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 5417,
                                "end": 5418,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "prefix": true
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "start": 5423,
                            "end": 5431,
                            "value": "string",
                            "raw": "'string'"
                          }
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 5441,
                    "end": 5481,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 5447,
                        "end": 5480,
                        "id": {
                          "type": "Identifier",
                          "start": 5447,
                          "end": 5456,
                          "decorators": [],
                          "name": "xIsString",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "start": 5459,
                          "end": 5480,
                          "left": {
                            "type": "UnaryExpression",
                            "start": 5459,
                            "end": 5467,
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "start": 5466,
                              "end": 5467,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "prefix": true
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "start": 5472,
                            "end": 5480,
                            "value": "string",
                            "raw": "'string'"
                          }
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "IfStatement",
                    "start": 5490,
                    "end": 5750,
                    "test": {
                      "type": "LogicalExpression",
                      "start": 5494,
                      "end": 5521,
                      "left": {
                        "type": "Identifier",
                        "start": 5494,
                        "end": 5508,
                        "decorators": [],
                        "name": "thisX_isString",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "&&",
                      "right": {
                        "type": "Identifier",
                        "start": 5512,
                        "end": 5521,
                        "decorators": [],
                        "name": "xIsString",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 5523,
                      "end": 5680,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 5613,
                          "end": 5627,
                          "kind": "let",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 5617,
                              "end": 5626,
                              "id": {
                                "type": "Identifier",
                                "start": 5617,
                                "end": 5626,
                                "decorators": [],
                                "name": "s",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 5618,
                                  "end": 5626,
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 5620,
                                    "end": 5626
                                  }
                                }
                              },
                              "init": null,
                              "definite": false
                            }
                          ],
                          "declare": false
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 5640,
                          "end": 5651,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 5640,
                            "end": 5650,
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "start": 5640,
                              "end": 5641,
                              "decorators": [],
                              "name": "s",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "MemberExpression",
                              "start": 5644,
                              "end": 5650,
                              "object": {
                                "type": "ThisExpression",
                                "start": 5644,
                                "end": 5648
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 5649,
                                "end": 5650,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 5664,
                          "end": 5670,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 5664,
                            "end": 5669,
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "start": 5664,
                              "end": 5665,
                              "decorators": [],
                              "name": "s",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 5668,
                              "end": 5669,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "directive": null
                        }
                      ]
                    },
                    "alternate": {
                      "type": "BlockStatement",
                      "start": 5694,
                      "end": 5750,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 5708,
                          "end": 5720,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 5708,
                            "end": 5719,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 5708,
                              "end": 5714,
                              "object": {
                                "type": "ThisExpression",
                                "start": 5708,
                                "end": 5712
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 5713,
                                "end": 5714,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "right": {
                              "type": "Literal",
                              "start": 5717,
                              "end": 5719,
                              "value": 10,
                              "raw": "10"
                            }
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 5733,
                          "end": 5740,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 5733,
                            "end": 5739,
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "start": 5733,
                              "end": 5734,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Literal",
                              "start": 5737,
                              "end": 5739,
                              "value": 10,
                              "raw": "10"
                            }
                          },
                          "directive": null
                        }
                      ]
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 5813,
      "end": 6023,
      "id": {
        "type": "Identifier",
        "start": 5822,
        "end": 5825,
        "decorators": [],
        "name": "f40",
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
          "start": 5826,
          "end": 5892,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5829,
            "end": 5892,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 5831,
              "end": 5892,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 5831,
                  "end": 5860,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 5833,
                      "end": 5845,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 5833,
                        "end": 5837,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 5837,
                        "end": 5844,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 5839,
                          "end": 5844,
                          "literal": {
                            "type": "Literal",
                            "start": 5839,
                            "end": 5844,
                            "value": "foo",
                            "raw": "'foo'"
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 5846,
                      "end": 5858,
                      "computed": false,
                      "optional": true,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 5846,
                        "end": 5849,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 5850,
                        "end": 5858,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 5852,
                          "end": 5858
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 5863,
                  "end": 5892,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 5865,
                      "end": 5877,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 5865,
                        "end": 5869,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 5869,
                        "end": 5876,
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "start": 5871,
                          "end": 5876,
                          "literal": {
                            "type": "Literal",
                            "start": 5871,
                            "end": 5876,
                            "value": "bar",
                            "raw": "'bar'"
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 5878,
                      "end": 5890,
                      "computed": false,
                      "optional": true,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 5878,
                        "end": 5881,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 5882,
                        "end": 5890,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 5884,
                          "end": 5890
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 5894,
        "end": 6023,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 5900,
            "end": 5921,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 5906,
                "end": 5920,
                "id": {
                  "type": "ObjectPattern",
                  "start": 5906,
                  "end": 5914,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 5908,
                      "end": 5912,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 5908,
                        "end": 5912,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 5908,
                        "end": 5912,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 5917,
                  "end": 5920,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 5926,
            "end": 5954,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 5932,
                "end": 5953,
                "id": {
                  "type": "Identifier",
                  "start": 5932,
                  "end": 5937,
                  "decorators": [],
                  "name": "isFoo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 5940,
                  "end": 5953,
                  "left": {
                    "type": "Identifier",
                    "start": 5940,
                    "end": 5944,
                    "decorators": [],
                    "name": "kind",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "==",
                  "right": {
                    "type": "Literal",
                    "start": 5948,
                    "end": 5953,
                    "value": "foo",
                    "raw": "'foo'"
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 5959,
            "end": 6021,
            "test": {
              "type": "LogicalExpression",
              "start": 5963,
              "end": 5979,
              "left": {
                "type": "Identifier",
                "start": 5963,
                "end": 5968,
                "decorators": [],
                "name": "isFoo",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "&&",
              "right": {
                "type": "MemberExpression",
                "start": 5972,
                "end": 5979,
                "object": {
                  "type": "Identifier",
                  "start": 5972,
                  "end": 5975,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 5976,
                  "end": 5979,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 5981,
              "end": 6021,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 5991,
                  "end": 6015,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 5995,
                      "end": 6014,
                      "id": {
                        "type": "Identifier",
                        "start": 5995,
                        "end": 6004,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 5996,
                          "end": 6004,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 5998,
                            "end": 6004
                          }
                        }
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 6007,
                        "end": 6014,
                        "object": {
                          "type": "Identifier",
                          "start": 6007,
                          "end": 6010,
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 6011,
                          "end": 6014,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 6104,
      "end": 6184,
      "id": {
        "type": "Identifier",
        "start": 6109,
        "end": 6113,
        "decorators": [],
        "name": "Data",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 6116,
        "end": 6183,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 6116,
            "end": 6148,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 6118,
                "end": 6130,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 6118,
                  "end": 6122,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 6122,
                  "end": 6129,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 6124,
                    "end": 6129,
                    "literal": {
                      "type": "Literal",
                      "start": 6124,
                      "end": 6129,
                      "value": "str",
                      "raw": "'str'"
                    }
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 6131,
                "end": 6146,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 6131,
                  "end": 6138,
                  "decorators": [],
                  "name": "payload",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 6138,
                  "end": 6146,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 6140,
                    "end": 6146
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 6151,
            "end": 6183,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 6153,
                "end": 6165,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 6153,
                  "end": 6157,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 6157,
                  "end": 6164,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 6159,
                    "end": 6164,
                    "literal": {
                      "type": "Literal",
                      "start": 6159,
                      "end": 6164,
                      "value": "num",
                      "raw": "'num'"
                    }
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 6166,
                "end": 6181,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 6166,
                  "end": 6173,
                  "decorators": [],
                  "name": "payload",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 6173,
                  "end": 6181,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 6175,
                    "end": 6181
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 6186,
      "end": 6340,
      "id": {
        "type": "Identifier",
        "start": 6195,
        "end": 6198,
        "decorators": [],
        "name": "gg2",
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
          "start": 6199,
          "end": 6208,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 6202,
            "end": 6208,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 6204,
              "end": 6208,
              "typeName": {
                "type": "Identifier",
                "start": 6204,
                "end": 6208,
                "decorators": [],
                "name": "Data",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 6210,
        "end": 6340,
        "body": [
          {
            "type": "IfStatement",
            "start": 6216,
            "end": 6338,
            "test": {
              "type": "BinaryExpression",
              "start": 6220,
              "end": 6238,
              "left": {
                "type": "MemberExpression",
                "start": 6220,
                "end": 6228,
                "object": {
                  "type": "Identifier",
                  "start": 6220,
                  "end": 6223,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 6224,
                  "end": 6228,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 6233,
                "end": 6238,
                "value": "str",
                "raw": "'str'"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 6240,
              "end": 6284,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 6250,
                  "end": 6278,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 6254,
                      "end": 6277,
                      "id": {
                        "type": "Identifier",
                        "start": 6254,
                        "end": 6263,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 6255,
                          "end": 6263,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 6257,
                            "end": 6263
                          }
                        }
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 6266,
                        "end": 6277,
                        "object": {
                          "type": "Identifier",
                          "start": 6266,
                          "end": 6269,
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 6270,
                          "end": 6277,
                          "decorators": [],
                          "name": "payload",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 6294,
              "end": 6338,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 6304,
                  "end": 6332,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 6308,
                      "end": 6331,
                      "id": {
                        "type": "Identifier",
                        "start": 6308,
                        "end": 6317,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 6309,
                          "end": 6317,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 6311,
                            "end": 6317
                          }
                        }
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 6320,
                        "end": 6331,
                        "object": {
                          "type": "Identifier",
                          "start": 6320,
                          "end": 6323,
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 6324,
                          "end": 6331,
                          "decorators": [],
                          "name": "payload",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 6342,
      "end": 6498,
      "id": {
        "type": "Identifier",
        "start": 6351,
        "end": 6354,
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
          "type": "ObjectPattern",
          "start": 6355,
          "end": 6378,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 6357,
              "end": 6361,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 6357,
                "end": 6361,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 6357,
                "end": 6361,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 6363,
              "end": 6370,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 6363,
                "end": 6370,
                "decorators": [],
                "name": "payload",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 6363,
                "end": 6370,
                "decorators": [],
                "name": "payload",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 6372,
            "end": 6378,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 6374,
              "end": 6378,
              "typeName": {
                "type": "Identifier",
                "start": 6374,
                "end": 6378,
                "decorators": [],
                "name": "Data",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 6380,
        "end": 6498,
        "body": [
          {
            "type": "IfStatement",
            "start": 6386,
            "end": 6496,
            "test": {
              "type": "BinaryExpression",
              "start": 6390,
              "end": 6404,
              "left": {
                "type": "Identifier",
                "start": 6390,
                "end": 6394,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 6399,
                "end": 6404,
                "value": "str",
                "raw": "'str'"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 6406,
              "end": 6446,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 6416,
                  "end": 6440,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 6420,
                      "end": 6439,
                      "id": {
                        "type": "Identifier",
                        "start": 6420,
                        "end": 6429,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 6421,
                          "end": 6429,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 6423,
                            "end": 6429
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 6432,
                        "end": 6439,
                        "decorators": [],
                        "name": "payload",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 6456,
              "end": 6496,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 6466,
                  "end": 6490,
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 6470,
                      "end": 6489,
                      "id": {
                        "type": "Identifier",
                        "start": 6470,
                        "end": 6479,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 6471,
                          "end": 6479,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 6473,
                            "end": 6479
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 6482,
                        "end": 6489,
                        "decorators": [],
                        "name": "payload",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 6522,
      "end": 6557,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6528,
          "end": 6556,
          "id": {
            "type": "Identifier",
            "start": 6528,
            "end": 6531,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 6534,
            "end": 6556,
            "properties": [
              {
                "type": "Property",
                "start": 6540,
                "end": 6554,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 6540,
                  "end": 6542,
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 6544,
                  "end": 6554,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "start": 6550,
                    "end": 6554,
                    "value": true,
                    "raw": "true"
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 6559,
      "end": 6569,
      "test": {
        "type": "Identifier",
        "start": 6563,
        "end": 6564,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 6566,
        "end": 6569,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "VariableDeclaration",
      "start": 6571,
      "end": 6590,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6577,
          "end": 6589,
          "id": {
            "type": "Identifier",
            "start": 6577,
            "end": 6578,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 6581,
            "end": 6589,
            "callee": {
              "type": "MemberExpression",
              "start": 6581,
              "end": 6587,
              "object": {
                "type": "Identifier",
                "start": 6581,
                "end": 6584,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 6585,
                "end": 6587,
                "decorators": [],
                "name": "fn",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 6659,
      "end": 6763,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6665,
        "end": 6670,
        "decorators": [],
        "name": "Utils",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 6671,
        "end": 6763,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 6675,
            "end": 6761,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 6682,
              "end": 6691,
              "decorators": [],
              "name": "isDefined",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 6691,
              "end": 6761,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 6691,
                "end": 6694,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 6692,
                    "end": 6693,
                    "name": {
                      "type": "Identifier",
                      "start": 6692,
                      "end": 6693,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 6695,
                  "end": 6703,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 6700,
                    "end": 6703,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 6702,
                      "end": 6703,
                      "typeName": {
                        "type": "Identifier",
                        "start": 6702,
                        "end": 6703,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 6704,
                "end": 6729,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 6706,
                  "end": 6729,
                  "parameterName": {
                    "type": "Identifier",
                    "start": 6706,
                    "end": 6711,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 6715,
                    "end": 6729,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 6715,
                      "end": 6729,
                      "typeName": {
                        "type": "Identifier",
                        "start": 6715,
                        "end": 6726,
                        "decorators": [],
                        "name": "NonNullable",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 6726,
                        "end": 6729,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 6727,
                            "end": 6728,
                            "typeName": {
                              "type": "Identifier",
                              "start": 6727,
                              "end": 6728,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  }
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 6730,
                "end": 6761,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 6736,
                    "end": 6757,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 6743,
                      "end": 6756,
                      "left": {
                        "type": "Identifier",
                        "start": 6743,
                        "end": 6748,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "!=",
                      "right": {
                        "type": "Literal",
                        "start": 6752,
                        "end": 6756,
                        "value": null,
                        "raw": "null"
                      }
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 6765,
      "end": 6969,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6771,
        "end": 6777,
        "decorators": [],
        "name": "A53267",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 6778,
        "end": 6969,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 6782,
            "end": 6829,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 6798,
              "end": 6808,
              "decorators": [],
              "name": "testNumber",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6808,
              "end": 6828,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 6810,
                "end": 6828,
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
                ]
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 6833,
            "end": 6967,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 6833,
              "end": 6836,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 6836,
              "end": 6967,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 6839,
                "end": 6967,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 6845,
                    "end": 6895,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 6851,
                        "end": 6894,
                        "id": {
                          "type": "Identifier",
                          "start": 6851,
                          "end": 6859,
                          "decorators": [],
                          "name": "isNumber",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 6862,
                          "end": 6894,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 6862,
                            "end": 6877,
                            "object": {
                              "type": "Identifier",
                              "start": 6862,
                              "end": 6867,
                              "decorators": [],
                              "name": "Utils",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 6868,
                              "end": 6877,
                              "decorators": [],
                              "name": "isDefined",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "start": 6878,
                              "end": 6893,
                              "object": {
                                "type": "ThisExpression",
                                "start": 6878,
                                "end": 6882
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 6883,
                                "end": 6893,
                                "decorators": [],
                                "name": "testNumber",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            }
                          ],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "IfStatement",
                    "start": 6901,
                    "end": 6963,
                    "test": {
                      "type": "Identifier",
                      "start": 6905,
                      "end": 6913,
                      "decorators": [],
                      "name": "isNumber",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 6915,
                      "end": 6963,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 6923,
                          "end": 6957,
                          "kind": "const",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 6929,
                              "end": 6956,
                              "id": {
                                "type": "Identifier",
                                "start": 6929,
                                "end": 6938,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 6930,
                                  "end": 6938,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 6932,
                                    "end": 6938
                                  }
                                }
                              },
                              "init": {
                                "type": "MemberExpression",
                                "start": 6941,
                                "end": 6956,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 6941,
                                  "end": 6945
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 6946,
                                  "end": 6956,
                                  "decorators": [],
                                  "name": "testNumber",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "definite": false
                            }
                          ],
                          "declare": false
                        }
                      ]
                    },
                    "alternate": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
