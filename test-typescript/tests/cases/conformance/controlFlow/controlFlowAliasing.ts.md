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
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 82,
        "end": 226,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 88,
            "end": 127,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 94,
                "end": 126,
                "definite": false,
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
                  "operator": "===",
                  "left": {
                    "type": "UnaryExpression",
                    "start": 105,
                    "end": 113,
                    "argument": {
                      "type": "Identifier",
                      "start": 112,
                      "end": 113,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "typeof",
                    "prefix": true
                  },
                  "right": {
                    "type": "Literal",
                    "start": 118,
                    "end": 126,
                    "raw": "\"string\"",
                    "value": "string",
                    "regex": null,
                    "bigint": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "IfStatement",
            "start": 132,
            "end": 224,
            "alternate": {
              "type": "BlockStatement",
              "start": 190,
              "end": 224,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 200,
                  "end": 218,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 204,
                      "end": 217,
                      "definite": false,
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
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                }
              ]
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
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 160,
                      "end": 173,
                      "definite": false,
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
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 136,
              "end": 144,
              "decorators": [],
              "name": "isString",
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
        "start": 58,
        "end": 61,
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 228,
      "end": 353,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 253,
        "end": 353,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 259,
            "end": 298,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 265,
                "end": 297,
                "definite": false,
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
                  "operator": "===",
                  "left": {
                    "type": "UnaryExpression",
                    "start": 276,
                    "end": 284,
                    "argument": {
                      "type": "Identifier",
                      "start": 283,
                      "end": 284,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "typeof",
                    "prefix": true
                  },
                  "right": {
                    "type": "Literal",
                    "start": 289,
                    "end": 297,
                    "raw": "\"string\"",
                    "value": "string",
                    "regex": null,
                    "bigint": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "IfStatement",
            "start": 303,
            "end": 351,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 317,
              "end": 351,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 327,
                  "end": 345,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 331,
                      "end": 344,
                      "definite": false,
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
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 307,
              "end": 315,
              "decorators": [],
              "name": "isString",
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
        "start": 237,
        "end": 240,
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 355,
      "end": 608,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 398,
        "end": 608,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 404,
            "end": 443,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 410,
                "end": 442,
                "definite": false,
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
                  "operator": "===",
                  "left": {
                    "type": "UnaryExpression",
                    "start": 421,
                    "end": 429,
                    "argument": {
                      "type": "Identifier",
                      "start": 428,
                      "end": 429,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "typeof",
                    "prefix": true
                  },
                  "right": {
                    "type": "Literal",
                    "start": 434,
                    "end": 442,
                    "raw": "\"string\"",
                    "value": "string",
                    "regex": null,
                    "bigint": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 448,
            "end": 487,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 454,
                "end": 486,
                "definite": false,
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
                  "operator": "===",
                  "left": {
                    "type": "UnaryExpression",
                    "start": 465,
                    "end": 473,
                    "argument": {
                      "type": "Identifier",
                      "start": 472,
                      "end": 473,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "typeof",
                    "prefix": true
                  },
                  "right": {
                    "type": "Literal",
                    "start": 478,
                    "end": 486,
                    "raw": "\"number\"",
                    "value": "number",
                    "regex": null,
                    "bigint": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "IfStatement",
            "start": 492,
            "end": 606,
            "alternate": {
              "type": "BlockStatement",
              "start": 571,
              "end": 606,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 581,
                  "end": 600,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 585,
                      "end": 599,
                      "definite": false,
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
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                }
              ]
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
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 532,
                      "end": 554,
                      "definite": false,
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
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                }
              ]
            },
            "test": {
              "type": "LogicalExpression",
              "start": 496,
              "end": 516,
              "operator": "||",
              "left": {
                "type": "Identifier",
                "start": 496,
                "end": 504,
                "decorators": [],
                "name": "isString",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 508,
                "end": 516,
                "decorators": [],
                "name": "isNumber",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 364,
        "end": 367,
        "decorators": [],
        "name": "f12",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 610,
      "end": 910,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 653,
        "end": 910,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 659,
            "end": 698,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 665,
                "end": 697,
                "definite": false,
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
                  "operator": "===",
                  "left": {
                    "type": "UnaryExpression",
                    "start": 676,
                    "end": 684,
                    "argument": {
                      "type": "Identifier",
                      "start": 683,
                      "end": 684,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "typeof",
                    "prefix": true
                  },
                  "right": {
                    "type": "Literal",
                    "start": 689,
                    "end": 697,
                    "raw": "\"string\"",
                    "value": "string",
                    "regex": null,
                    "bigint": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 703,
            "end": 742,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 709,
                "end": 741,
                "definite": false,
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
                  "operator": "===",
                  "left": {
                    "type": "UnaryExpression",
                    "start": 720,
                    "end": 728,
                    "argument": {
                      "type": "Identifier",
                      "start": 727,
                      "end": 728,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "typeof",
                    "prefix": true
                  },
                  "right": {
                    "type": "Literal",
                    "start": 733,
                    "end": 741,
                    "raw": "\"number\"",
                    "value": "number",
                    "regex": null,
                    "bigint": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 747,
            "end": 793,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 753,
                "end": 792,
                "definite": false,
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
                  "operator": "||",
                  "left": {
                    "type": "Identifier",
                    "start": 772,
                    "end": 780,
                    "decorators": [],
                    "name": "isString",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 784,
                    "end": 792,
                    "decorators": [],
                    "name": "isNumber",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "IfStatement",
            "start": 798,
            "end": 908,
            "alternate": {
              "type": "BlockStatement",
              "start": 873,
              "end": 908,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 883,
                  "end": 902,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 887,
                      "end": 901,
                      "definite": false,
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
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                }
              ]
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
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 834,
                      "end": 856,
                      "definite": false,
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
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 802,
              "end": 818,
              "decorators": [],
              "name": "isStringOrNumber",
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
        "start": 619,
        "end": 622,
        "decorators": [],
        "name": "f13",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 912,
      "end": 1048,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 970,
        "end": 1048,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 976,
            "end": 1013,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 982,
                "end": 1012,
                "definite": false,
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
                  "operator": "!==",
                  "left": {
                    "type": "Identifier",
                    "start": 997,
                    "end": 998,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 1003,
                    "end": 1012,
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ReturnStatement",
            "start": 1018,
            "end": 1046,
            "argument": {
              "type": "ConditionalExpression",
              "start": 1025,
              "end": 1045,
              "alternate": {
                "type": "Literal",
                "start": 1044,
                "end": 1045,
                "raw": "0",
                "value": 0,
                "regex": null,
                "bigint": null
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
              "test": {
                "type": "Identifier",
                "start": 1025,
                "end": 1037,
                "decorators": [],
                "name": "notUndefined",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 921,
        "end": 924,
        "decorators": [],
        "name": "f14",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1050,
      "end": 1209,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1101,
        "end": 1209,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1107,
            "end": 1150,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1113,
                "end": 1149,
                "definite": false,
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
                  "operator": "===",
                  "left": {
                    "type": "UnaryExpression",
                    "start": 1124,
                    "end": 1136,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 1131,
                      "end": 1136,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 1131,
                        "end": 1134,
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 1135,
                        "end": 1136,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "operator": "typeof",
                    "prefix": true
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1141,
                    "end": 1149,
                    "raw": "'string'",
                    "value": "string",
                    "regex": null,
                    "bigint": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "IfStatement",
            "start": 1155,
            "end": 1207,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 1169,
              "end": 1207,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1179,
                  "end": 1201,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1183,
                      "end": 1200,
                      "definite": false,
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
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 1195,
                          "end": 1198,
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1199,
                          "end": 1200,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 1159,
              "end": 1167,
              "decorators": [],
              "name": "isString",
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
        "start": 1059,
        "end": 1062,
        "decorators": [],
        "name": "f15",
        "optional": false,
        "typeAnnotation": null
      },
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
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1079,
                    "end": 1080,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": true,
                  "static": false,
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
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1211,
      "end": 1448,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1262,
        "end": 1448,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1268,
            "end": 1311,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1274,
                "end": 1310,
                "definite": false,
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
                  "operator": "===",
                  "left": {
                    "type": "UnaryExpression",
                    "start": 1285,
                    "end": 1297,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 1292,
                      "end": 1297,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 1292,
                        "end": 1295,
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 1296,
                        "end": 1297,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "operator": "typeof",
                    "prefix": true
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1302,
                    "end": 1310,
                    "raw": "'string'",
                    "value": "string",
                    "regex": null,
                    "bigint": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ExpressionStatement",
            "start": 1316,
            "end": 1332,
            "directive": null,
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1324,
                      "end": 1325,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 1327,
                      "end": 1329,
                      "raw": "42",
                      "value": 42,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 1337,
            "end": 1446,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 1351,
              "end": 1446,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1361,
                  "end": 1383,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1365,
                      "end": 1382,
                      "definite": false,
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
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 1377,
                          "end": 1380,
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1381,
                          "end": 1382,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 1341,
              "end": 1349,
              "decorators": [],
              "name": "isString",
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
        "start": 1220,
        "end": 1223,
        "decorators": [],
        "name": "f16",
        "optional": false,
        "typeAnnotation": null
      },
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
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1240,
                    "end": 1241,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": true,
                  "static": false,
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
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1450,
      "end": 1606,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1496,
        "end": 1606,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1502,
            "end": 1546,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1508,
                "end": 1545,
                "definite": false,
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
                  "operator": "===",
                  "left": {
                    "type": "UnaryExpression",
                    "start": 1519,
                    "end": 1532,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 1526,
                      "end": 1532,
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "start": 1526,
                        "end": 1529,
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Literal",
                        "start": 1530,
                        "end": 1531,
                        "raw": "0",
                        "value": 0,
                        "regex": null,
                        "bigint": null
                      }
                    },
                    "operator": "typeof",
                    "prefix": true
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1537,
                    "end": 1545,
                    "raw": "'string'",
                    "value": "string",
                    "regex": null,
                    "bigint": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "IfStatement",
            "start": 1551,
            "end": 1604,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 1565,
              "end": 1604,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1575,
                  "end": 1598,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1579,
                      "end": 1597,
                      "definite": false,
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
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "start": 1591,
                          "end": 1594,
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Literal",
                          "start": 1595,
                          "end": 1596,
                          "raw": "0",
                          "value": 0,
                          "regex": null,
                          "bigint": null
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 1555,
              "end": 1563,
              "decorators": [],
              "name": "isString",
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
        "start": 1459,
        "end": 1462,
        "decorators": [],
        "name": "f17",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1608,
      "end": 1837,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1654,
        "end": 1837,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1660,
            "end": 1704,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1666,
                "end": 1703,
                "definite": false,
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
                  "operator": "===",
                  "left": {
                    "type": "UnaryExpression",
                    "start": 1677,
                    "end": 1690,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 1684,
                      "end": 1690,
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "start": 1684,
                        "end": 1687,
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Literal",
                        "start": 1688,
                        "end": 1689,
                        "raw": "0",
                        "value": 0,
                        "regex": null,
                        "bigint": null
                      }
                    },
                    "operator": "typeof",
                    "prefix": true
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1695,
                    "end": 1703,
                    "raw": "'string'",
                    "value": "string",
                    "regex": null,
                    "bigint": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ExpressionStatement",
            "start": 1709,
            "end": 1720,
            "directive": null,
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
                    "raw": "42",
                    "value": 42,
                    "regex": null,
                    "bigint": null
                  }
                ]
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 1725,
            "end": 1835,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 1739,
              "end": 1835,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1749,
                  "end": 1772,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1753,
                      "end": 1771,
                      "definite": false,
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
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "start": 1765,
                          "end": 1768,
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Literal",
                          "start": 1769,
                          "end": 1770,
                          "raw": "0",
                          "value": 0,
                          "regex": null,
                          "bigint": null
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 1729,
              "end": 1737,
              "decorators": [],
              "name": "isString",
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
        "start": 1617,
        "end": 1620,
        "decorators": [],
        "name": "f18",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1839,
      "end": 2033,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1918,
        "end": 2033,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1924,
            "end": 1957,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1930,
                "end": 1956,
                "definite": false,
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
                  "operator": "===",
                  "left": {
                    "type": "MemberExpression",
                    "start": 1938,
                    "end": 1946,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 1938,
                      "end": 1941,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 1942,
                      "end": 1946,
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1951,
                    "end": 1956,
                    "raw": "'foo'",
                    "value": "foo",
                    "regex": null,
                    "bigint": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "IfStatement",
            "start": 1962,
            "end": 2031,
            "alternate": {
              "type": "BlockStatement",
              "start": 2007,
              "end": 2031,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2017,
                  "end": 2025,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 2017,
                    "end": 2024,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 2017,
                      "end": 2020,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 2021,
                      "end": 2024,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
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
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 1983,
                    "end": 1990,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 1983,
                      "end": 1986,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 1987,
                      "end": 1990,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 1966,
              "end": 1971,
              "decorators": [],
              "name": "isFoo",
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
        "start": 1848,
        "end": 1851,
        "decorators": [],
        "name": "f20",
        "optional": false,
        "typeAnnotation": null
      },
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
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1859,
                        "end": 1863,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
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
                            "raw": "'foo'",
                            "value": "foo",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 1872,
                      "end": 1883,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1872,
                        "end": 1875,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1875,
                        "end": 1883,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1877,
                          "end": 1883
                        }
                      }
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
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1890,
                        "end": 1894,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
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
                            "raw": "'bar'",
                            "value": "bar",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 1903,
                      "end": 1914,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1903,
                        "end": 1906,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1906,
                        "end": 1914,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1908,
                          "end": 1914
                        }
                      }
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2035,
      "end": 2340,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2114,
        "end": 2340,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2120,
            "end": 2162,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2126,
                "end": 2161,
                "definite": false,
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
                  "operator": "===",
                  "left": {
                    "type": "MemberExpression",
                    "start": 2143,
                    "end": 2151,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 2143,
                      "end": 2146,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 2147,
                      "end": 2151,
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "start": 2156,
                    "end": 2161,
                    "raw": "'foo'",
                    "value": "foo",
                    "regex": null,
                    "bigint": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "IfStatement",
            "start": 2167,
            "end": 2338,
            "alternate": {
              "type": "BlockStatement",
              "start": 2263,
              "end": 2338,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2273,
                  "end": 2281,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 2273,
                    "end": 2280,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 2273,
                      "end": 2276,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 2277,
                      "end": 2280,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
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
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 2188,
                    "end": 2195,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 2188,
                      "end": 2191,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 2192,
                      "end": 2195,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 2171,
              "end": 2176,
              "decorators": [],
              "name": "isFoo",
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
        "start": 2044,
        "end": 2047,
        "decorators": [],
        "name": "f21",
        "optional": false,
        "typeAnnotation": null
      },
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
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2055,
                        "end": 2059,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
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
                            "raw": "'foo'",
                            "value": "foo",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 2068,
                      "end": 2079,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2068,
                        "end": 2071,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2071,
                        "end": 2079,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 2073,
                          "end": 2079
                        }
                      }
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
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2086,
                        "end": 2090,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
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
                            "raw": "'bar'",
                            "value": "bar",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 2099,
                      "end": 2110,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2099,
                        "end": 2102,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2102,
                        "end": 2110,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 2104,
                          "end": 2110
                        }
                      }
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2342,
      "end": 2618,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2421,
        "end": 2618,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2427,
            "end": 2458,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2431,
                "end": 2457,
                "definite": false,
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
                  "operator": "===",
                  "left": {
                    "type": "MemberExpression",
                    "start": 2439,
                    "end": 2447,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 2439,
                      "end": 2442,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 2443,
                      "end": 2447,
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "start": 2452,
                    "end": 2457,
                    "raw": "'foo'",
                    "value": "foo",
                    "regex": null,
                    "bigint": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "IfStatement",
            "start": 2463,
            "end": 2616,
            "alternate": {
              "type": "BlockStatement",
              "start": 2550,
              "end": 2616,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2560,
                  "end": 2568,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 2560,
                    "end": 2567,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 2560,
                      "end": 2563,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 2564,
                      "end": 2567,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
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
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 2484,
                    "end": 2491,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 2484,
                      "end": 2487,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 2488,
                      "end": 2491,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 2467,
              "end": 2472,
              "decorators": [],
              "name": "isFoo",
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
        "start": 2351,
        "end": 2354,
        "decorators": [],
        "name": "f22",
        "optional": false,
        "typeAnnotation": null
      },
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
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2362,
                        "end": 2366,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
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
                            "raw": "'foo'",
                            "value": "foo",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 2375,
                      "end": 2386,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2375,
                        "end": 2378,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2378,
                        "end": 2386,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 2380,
                          "end": 2386
                        }
                      }
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
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2393,
                        "end": 2397,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
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
                            "raw": "'bar'",
                            "value": "bar",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 2406,
                      "end": 2417,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2406,
                        "end": 2409,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2409,
                        "end": 2417,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 2411,
                          "end": 2417
                        }
                      }
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2620,
      "end": 2945,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2699,
        "end": 2945,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2705,
            "end": 2738,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2711,
                "end": 2737,
                "definite": false,
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
                  "operator": "===",
                  "left": {
                    "type": "MemberExpression",
                    "start": 2719,
                    "end": 2727,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 2719,
                      "end": 2722,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 2723,
                      "end": 2727,
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "start": 2732,
                    "end": 2737,
                    "raw": "'foo'",
                    "value": "foo",
                    "regex": null,
                    "bigint": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ExpressionStatement",
            "start": 2743,
            "end": 2753,
            "directive": null,
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
            }
          },
          {
            "type": "IfStatement",
            "start": 2758,
            "end": 2943,
            "alternate": {
              "type": "BlockStatement",
              "start": 2861,
              "end": 2943,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2871,
                  "end": 2879,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 2871,
                    "end": 2878,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 2871,
                      "end": 2874,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 2875,
                      "end": 2878,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
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
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 2779,
                    "end": 2786,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 2779,
                      "end": 2782,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 2783,
                      "end": 2786,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 2762,
              "end": 2767,
              "decorators": [],
              "name": "isFoo",
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
        "start": 2629,
        "end": 2632,
        "decorators": [],
        "name": "f23",
        "optional": false,
        "typeAnnotation": null
      },
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
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2640,
                        "end": 2644,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
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
                            "raw": "'foo'",
                            "value": "foo",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 2653,
                      "end": 2664,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2653,
                        "end": 2656,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2656,
                        "end": 2664,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 2658,
                          "end": 2664
                        }
                      }
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
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2671,
                        "end": 2675,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
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
                            "raw": "'bar'",
                            "value": "bar",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 2684,
                      "end": 2695,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2684,
                        "end": 2687,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2687,
                        "end": 2695,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 2689,
                          "end": 2695
                        }
                      }
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2947,
      "end": 3162,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 3026,
        "end": 3162,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 3032,
            "end": 3048,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3038,
                "end": 3047,
                "definite": false,
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
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 3053,
            "end": 3086,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3059,
                "end": 3085,
                "definite": false,
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
                  "operator": "===",
                  "left": {
                    "type": "MemberExpression",
                    "start": 3067,
                    "end": 3075,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 3067,
                      "end": 3070,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 3071,
                      "end": 3075,
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "start": 3080,
                    "end": 3085,
                    "raw": "'foo'",
                    "value": "foo",
                    "regex": null,
                    "bigint": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "IfStatement",
            "start": 3091,
            "end": 3160,
            "alternate": {
              "type": "BlockStatement",
              "start": 3136,
              "end": 3160,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3146,
                  "end": 3154,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3146,
                    "end": 3153,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 3146,
                      "end": 3149,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 3150,
                      "end": 3153,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
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
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3112,
                    "end": 3119,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 3112,
                      "end": 3115,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 3116,
                      "end": 3119,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 3095,
              "end": 3100,
              "decorators": [],
              "name": "isFoo",
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
        "start": 2956,
        "end": 2959,
        "decorators": [],
        "name": "f24",
        "optional": false,
        "typeAnnotation": null
      },
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
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2967,
                        "end": 2971,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
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
                            "raw": "'foo'",
                            "value": "foo",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 2980,
                      "end": 2991,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2980,
                        "end": 2983,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2983,
                        "end": 2991,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 2985,
                          "end": 2991
                        }
                      }
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
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2998,
                        "end": 3002,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
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
                            "raw": "'bar'",
                            "value": "bar",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 3011,
                      "end": 3022,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3011,
                        "end": 3014,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3014,
                        "end": 3022,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 3016,
                          "end": 3022
                        }
                      }
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3164,
      "end": 3377,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 3243,
        "end": 3377,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 3249,
            "end": 3263,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3253,
                "end": 3262,
                "definite": false,
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
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 3268,
            "end": 3301,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3274,
                "end": 3300,
                "definite": false,
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
                  "operator": "===",
                  "left": {
                    "type": "MemberExpression",
                    "start": 3282,
                    "end": 3290,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 3282,
                      "end": 3285,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 3286,
                      "end": 3290,
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "start": 3295,
                    "end": 3300,
                    "raw": "'foo'",
                    "value": "foo",
                    "regex": null,
                    "bigint": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "IfStatement",
            "start": 3306,
            "end": 3375,
            "alternate": {
              "type": "BlockStatement",
              "start": 3351,
              "end": 3375,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3361,
                  "end": 3369,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3361,
                    "end": 3368,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 3361,
                      "end": 3364,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 3365,
                      "end": 3368,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
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
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3327,
                    "end": 3334,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 3327,
                      "end": 3330,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 3331,
                      "end": 3334,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 3310,
              "end": 3315,
              "decorators": [],
              "name": "isFoo",
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
        "start": 3173,
        "end": 3176,
        "decorators": [],
        "name": "f25",
        "optional": false,
        "typeAnnotation": null
      },
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
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3184,
                        "end": 3188,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
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
                            "raw": "'foo'",
                            "value": "foo",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 3197,
                      "end": 3208,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3197,
                        "end": 3200,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3200,
                        "end": 3208,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3202,
                          "end": 3208
                        }
                      }
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
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3215,
                        "end": 3219,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
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
                            "raw": "'bar'",
                            "value": "bar",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 3228,
                      "end": 3239,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3228,
                        "end": 3231,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3231,
                        "end": 3239,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 3233,
                          "end": 3239
                        }
                      }
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3379,
      "end": 3611,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 3478,
        "end": 3611,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 3484,
            "end": 3523,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3490,
                "end": 3522,
                "definite": false,
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
                  "operator": "===",
                  "left": {
                    "type": "MemberExpression",
                    "start": 3498,
                    "end": 3512,
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "start": 3498,
                      "end": 3507,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 3498,
                        "end": 3503,
                        "decorators": [],
                        "name": "outer",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 3504,
                        "end": 3507,
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 3508,
                      "end": 3512,
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "start": 3517,
                    "end": 3522,
                    "raw": "'foo'",
                    "value": "foo",
                    "regex": null,
                    "bigint": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "IfStatement",
            "start": 3528,
            "end": 3609,
            "alternate": {
              "type": "BlockStatement",
              "start": 3579,
              "end": 3609,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3589,
                  "end": 3603,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3589,
                    "end": 3602,
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "start": 3589,
                      "end": 3598,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 3589,
                        "end": 3594,
                        "decorators": [],
                        "name": "outer",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 3595,
                        "end": 3598,
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 3599,
                      "end": 3602,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
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
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3549,
                    "end": 3562,
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "start": 3549,
                      "end": 3558,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 3549,
                        "end": 3554,
                        "decorators": [],
                        "name": "outer",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 3555,
                        "end": 3558,
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 3559,
                      "end": 3562,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 3532,
              "end": 3537,
              "decorators": [],
              "name": "isFoo",
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
        "start": 3388,
        "end": 3391,
        "decorators": [],
        "name": "f26",
        "optional": false,
        "typeAnnotation": null
      },
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
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3410,
                    "end": 3413,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": true,
                  "static": false,
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
                              "accessibility": null,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 3417,
                                "end": 3421,
                                "decorators": [],
                                "name": "kind",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "readonly": false,
                              "static": false,
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
                                    "raw": "'foo'",
                                    "value": "foo",
                                    "regex": null,
                                    "bigint": null
                                  }
                                }
                              }
                            },
                            {
                              "type": "TSPropertySignature",
                              "start": 3430,
                              "end": 3441,
                              "accessibility": null,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 3430,
                                "end": 3433,
                                "decorators": [],
                                "name": "foo",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "readonly": false,
                              "static": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 3433,
                                "end": 3441,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 3435,
                                  "end": 3441
                                }
                              }
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
                              "accessibility": null,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 3448,
                                "end": 3452,
                                "decorators": [],
                                "name": "kind",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "readonly": false,
                              "static": false,
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
                                    "raw": "'bar'",
                                    "value": "bar",
                                    "regex": null,
                                    "bigint": null
                                  }
                                }
                              }
                            },
                            {
                              "type": "TSPropertySignature",
                              "start": 3461,
                              "end": 3472,
                              "accessibility": null,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 3461,
                                "end": 3464,
                                "decorators": [],
                                "name": "bar",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "readonly": false,
                              "static": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 3464,
                                "end": 3472,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 3466,
                                  "end": 3472
                                }
                              }
                            }
                          ]
                        }
                      ]
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3613,
      "end": 3916,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 3703,
        "end": 3916,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 3709,
            "end": 3748,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3715,
                "end": 3747,
                "definite": false,
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
                  "operator": "===",
                  "left": {
                    "type": "MemberExpression",
                    "start": 3723,
                    "end": 3737,
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "start": 3723,
                      "end": 3732,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 3723,
                        "end": 3728,
                        "decorators": [],
                        "name": "outer",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 3729,
                        "end": 3732,
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 3733,
                      "end": 3737,
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "start": 3742,
                    "end": 3747,
                    "raw": "'foo'",
                    "value": "foo",
                    "regex": null,
                    "bigint": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "IfStatement",
            "start": 3753,
            "end": 3914,
            "alternate": {
              "type": "BlockStatement",
              "start": 3844,
              "end": 3914,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3854,
                  "end": 3868,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3854,
                    "end": 3867,
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "start": 3854,
                      "end": 3863,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 3854,
                        "end": 3859,
                        "decorators": [],
                        "name": "outer",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 3860,
                        "end": 3863,
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 3864,
                      "end": 3867,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
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
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 3774,
                    "end": 3787,
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "start": 3774,
                      "end": 3783,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 3774,
                        "end": 3779,
                        "decorators": [],
                        "name": "outer",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 3780,
                        "end": 3783,
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 3784,
                      "end": 3787,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 3757,
              "end": 3762,
              "decorators": [],
              "name": "isFoo",
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
        "start": 3622,
        "end": 3625,
        "decorators": [],
        "name": "f27",
        "optional": false,
        "typeAnnotation": null
      },
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
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 3635,
                    "end": 3638,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
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
                              "accessibility": null,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 3642,
                                "end": 3646,
                                "decorators": [],
                                "name": "kind",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "readonly": false,
                              "static": false,
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
                                    "raw": "'foo'",
                                    "value": "foo",
                                    "regex": null,
                                    "bigint": null
                                  }
                                }
                              }
                            },
                            {
                              "type": "TSPropertySignature",
                              "start": 3655,
                              "end": 3666,
                              "accessibility": null,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 3655,
                                "end": 3658,
                                "decorators": [],
                                "name": "foo",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "readonly": false,
                              "static": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 3658,
                                "end": 3666,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 3660,
                                  "end": 3666
                                }
                              }
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
                              "accessibility": null,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 3673,
                                "end": 3677,
                                "decorators": [],
                                "name": "kind",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "readonly": false,
                              "static": false,
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
                                    "raw": "'bar'",
                                    "value": "bar",
                                    "regex": null,
                                    "bigint": null
                                  }
                                }
                              }
                            },
                            {
                              "type": "TSPropertySignature",
                              "start": 3686,
                              "end": 3697,
                              "accessibility": null,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 3686,
                                "end": 3689,
                                "decorators": [],
                                "name": "bar",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "readonly": false,
                              "static": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 3689,
                                "end": 3697,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 3691,
                                  "end": 3697
                                }
                              }
                            }
                          ]
                        }
                      ]
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3918,
      "end": 4171,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 3998,
        "end": 4171,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 4004,
            "end": 4044,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4010,
                "end": 4043,
                "definite": false,
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
                  "operator": "&&",
                  "left": {
                    "type": "Identifier",
                    "start": 4018,
                    "end": 4021,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "start": 4025,
                    "end": 4043,
                    "operator": "===",
                    "left": {
                      "type": "MemberExpression",
                      "start": 4025,
                      "end": 4033,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 4025,
                        "end": 4028,
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 4029,
                        "end": 4033,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "start": 4038,
                      "end": 4043,
                      "raw": "'foo'",
                      "value": "foo",
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 4049,
            "end": 4089,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4055,
                "end": 4088,
                "definite": false,
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
                  "operator": "&&",
                  "left": {
                    "type": "Identifier",
                    "start": 4063,
                    "end": 4066,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "start": 4070,
                    "end": 4088,
                    "operator": "===",
                    "left": {
                      "type": "MemberExpression",
                      "start": 4070,
                      "end": 4078,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 4070,
                        "end": 4073,
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 4074,
                        "end": 4078,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "start": 4083,
                      "end": 4088,
                      "raw": "'bar'",
                      "value": "bar",
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "IfStatement",
            "start": 4094,
            "end": 4129,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 4105,
              "end": 4129,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4115,
                  "end": 4123,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4115,
                    "end": 4122,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 4115,
                      "end": 4118,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 4119,
                      "end": 4122,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 4098,
              "end": 4103,
              "decorators": [],
              "name": "isFoo",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "IfStatement",
            "start": 4134,
            "end": 4169,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 4145,
              "end": 4169,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4155,
                  "end": 4163,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4155,
                    "end": 4162,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 4155,
                      "end": 4158,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 4159,
                      "end": 4162,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 4138,
              "end": 4143,
              "decorators": [],
              "name": "isBar",
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
        "start": 3927,
        "end": 3930,
        "decorators": [],
        "name": "f28",
        "optional": false,
        "typeAnnotation": null
      },
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
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3939,
                        "end": 3943,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
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
                            "raw": "'foo'",
                            "value": "foo",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 3952,
                      "end": 3963,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3952,
                        "end": 3955,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3955,
                        "end": 3963,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3957,
                          "end": 3963
                        }
                      }
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
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3970,
                        "end": 3974,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
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
                            "raw": "'bar'",
                            "value": "bar",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 3983,
                      "end": 3994,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3983,
                        "end": 3986,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3986,
                        "end": 3994,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 3988,
                          "end": 3994
                        }
                      }
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 4227,
      "end": 4419,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 4306,
        "end": 4419,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 4312,
            "end": 4334,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4318,
                "end": 4333,
                "definite": false,
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
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 4325,
                    "end": 4328,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 4329,
                    "end": 4333,
                    "decorators": [],
                    "name": "kind",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "IfStatement",
            "start": 4339,
            "end": 4417,
            "alternate": {
              "type": "BlockStatement",
              "start": 4393,
              "end": 4417,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4403,
                  "end": 4411,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4403,
                    "end": 4410,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 4403,
                      "end": 4406,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 4407,
                      "end": 4410,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
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
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4369,
                    "end": 4376,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 4369,
                      "end": 4372,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 4373,
                      "end": 4376,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 4343,
              "end": 4357,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 4343,
                "end": 4347,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 4352,
                "end": 4357,
                "raw": "'foo'",
                "value": "foo",
                "regex": null,
                "bigint": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 4236,
        "end": 4239,
        "decorators": [],
        "name": "f30",
        "optional": false,
        "typeAnnotation": null
      },
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
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4247,
                        "end": 4251,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
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
                            "raw": "'foo'",
                            "value": "foo",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 4260,
                      "end": 4271,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4260,
                        "end": 4263,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4263,
                        "end": 4271,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 4265,
                          "end": 4271
                        }
                      }
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
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4278,
                        "end": 4282,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
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
                            "raw": "'bar'",
                            "value": "bar",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 4291,
                      "end": 4302,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4291,
                        "end": 4294,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4294,
                        "end": 4302,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 4296,
                          "end": 4302
                        }
                      }
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 4421,
      "end": 4612,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 4500,
        "end": 4612,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 4506,
            "end": 4527,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4512,
                "end": 4526,
                "definite": false,
                "id": {
                  "type": "ObjectPattern",
                  "start": 4512,
                  "end": 4520,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 4514,
                      "end": 4518,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4514,
                        "end": 4518,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 4514,
                        "end": 4518,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
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
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "IfStatement",
            "start": 4532,
            "end": 4610,
            "alternate": {
              "type": "BlockStatement",
              "start": 4586,
              "end": 4610,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4596,
                  "end": 4604,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4596,
                    "end": 4603,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 4596,
                      "end": 4599,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 4600,
                      "end": 4603,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
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
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4562,
                    "end": 4569,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 4562,
                      "end": 4565,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 4566,
                      "end": 4569,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 4536,
              "end": 4550,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 4536,
                "end": 4540,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 4545,
                "end": 4550,
                "raw": "'foo'",
                "value": "foo",
                "regex": null,
                "bigint": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 4430,
        "end": 4433,
        "decorators": [],
        "name": "f31",
        "optional": false,
        "typeAnnotation": null
      },
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
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4441,
                        "end": 4445,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
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
                            "raw": "'foo'",
                            "value": "foo",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 4454,
                      "end": 4465,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4454,
                        "end": 4457,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4457,
                        "end": 4465,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 4459,
                          "end": 4465
                        }
                      }
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
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4472,
                        "end": 4476,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
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
                            "raw": "'bar'",
                            "value": "bar",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 4485,
                      "end": 4496,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4485,
                        "end": 4488,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4488,
                        "end": 4496,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 4490,
                          "end": 4496
                        }
                      }
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 4614,
      "end": 4805,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 4693,
        "end": 4805,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 4699,
            "end": 4723,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4705,
                "end": 4722,
                "definite": false,
                "id": {
                  "type": "ObjectPattern",
                  "start": 4705,
                  "end": 4716,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 4707,
                      "end": 4714,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4707,
                        "end": 4711,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Identifier",
                        "start": 4713,
                        "end": 4714,
                        "decorators": [],
                        "name": "k",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
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
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "IfStatement",
            "start": 4728,
            "end": 4803,
            "alternate": {
              "type": "BlockStatement",
              "start": 4779,
              "end": 4803,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4789,
                  "end": 4797,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4789,
                    "end": 4796,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 4789,
                      "end": 4792,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 4793,
                      "end": 4796,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
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
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4755,
                    "end": 4762,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 4755,
                      "end": 4758,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 4759,
                      "end": 4762,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 4732,
              "end": 4743,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 4732,
                "end": 4733,
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 4738,
                "end": 4743,
                "raw": "'foo'",
                "value": "foo",
                "regex": null,
                "bigint": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 4623,
        "end": 4626,
        "decorators": [],
        "name": "f32",
        "optional": false,
        "typeAnnotation": null
      },
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
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4634,
                        "end": 4638,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
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
                            "raw": "'foo'",
                            "value": "foo",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 4647,
                      "end": 4658,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4647,
                        "end": 4650,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4650,
                        "end": 4658,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 4652,
                          "end": 4658
                        }
                      }
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
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4665,
                        "end": 4669,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
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
                            "raw": "'bar'",
                            "value": "bar",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 4678,
                      "end": 4689,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4678,
                        "end": 4681,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4681,
                        "end": 4689,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 4683,
                          "end": 4689
                        }
                      }
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 4807,
      "end": 5013,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 4886,
        "end": 5013,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 4892,
            "end": 4913,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4898,
                "end": 4912,
                "definite": false,
                "id": {
                  "type": "ObjectPattern",
                  "start": 4898,
                  "end": 4906,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 4900,
                      "end": 4904,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4900,
                        "end": 4904,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 4900,
                        "end": 4904,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
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
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "SwitchStatement",
            "start": 4918,
            "end": 5011,
            "cases": [
              {
                "type": "SwitchCase",
                "start": 4942,
                "end": 4969,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 4954,
                    "end": 4962,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 4954,
                      "end": 4961,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 4954,
                        "end": 4957,
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 4958,
                        "end": 4961,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "start": 4963,
                    "end": 4969,
                    "label": null
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 4947,
                  "end": 4952,
                  "raw": "'foo'",
                  "value": "foo",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "SwitchCase",
                "start": 4978,
                "end": 5005,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 4990,
                    "end": 4998,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 4990,
                      "end": 4997,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 4990,
                        "end": 4993,
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 4994,
                        "end": 4997,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "start": 4999,
                    "end": 5005,
                    "label": null
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 4983,
                  "end": 4988,
                  "raw": "'bar'",
                  "value": "bar",
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "start": 4926,
              "end": 4930,
              "decorators": [],
              "name": "kind",
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
        "start": 4816,
        "end": 4819,
        "decorators": [],
        "name": "f33",
        "optional": false,
        "typeAnnotation": null
      },
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
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4827,
                        "end": 4831,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
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
                            "raw": "'foo'",
                            "value": "foo",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 4840,
                      "end": 4851,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4840,
                        "end": 4843,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4843,
                        "end": 4851,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 4845,
                          "end": 4851
                        }
                      }
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
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4858,
                        "end": 4862,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
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
                            "raw": "'bar'",
                            "value": "bar",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 4871,
                      "end": 4882,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 4871,
                        "end": 4874,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 4874,
                        "end": 4882,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 4876,
                          "end": 4882
                        }
                      }
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 5016,
      "end": 5313,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 5026,
        "end": 5313,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 5032,
            "end": 5311,
            "accessibility": null,
            "computed": false,
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
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 5043,
              "end": 5311,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 5073,
                "end": 5311,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 5083,
                    "end": 5133,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 5089,
                        "end": 5132,
                        "definite": false,
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
                          "operator": "===",
                          "left": {
                            "type": "UnaryExpression",
                            "start": 5106,
                            "end": 5119,
                            "argument": {
                              "type": "MemberExpression",
                              "start": 5113,
                              "end": 5119,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 5113,
                                "end": 5117
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 5118,
                                "end": 5119,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "operator": "typeof",
                            "prefix": true
                          },
                          "right": {
                            "type": "Literal",
                            "start": 5124,
                            "end": 5132,
                            "raw": "'string'",
                            "value": "string",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 5142,
                    "end": 5182,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 5148,
                        "end": 5181,
                        "definite": false,
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
                          "operator": "===",
                          "left": {
                            "type": "UnaryExpression",
                            "start": 5160,
                            "end": 5168,
                            "argument": {
                              "type": "Identifier",
                              "start": 5167,
                              "end": 5168,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "operator": "typeof",
                            "prefix": true
                          },
                          "right": {
                            "type": "Literal",
                            "start": 5173,
                            "end": 5181,
                            "raw": "'string'",
                            "value": "string",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "IfStatement",
                    "start": 5191,
                    "end": 5305,
                    "alternate": null,
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 5224,
                      "end": 5305,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 5238,
                          "end": 5252,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 5242,
                              "end": 5251,
                              "definite": false,
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
                              "init": null
                            }
                          ],
                          "declare": false,
                          "kind": "let"
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 5265,
                          "end": 5276,
                          "directive": null,
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
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 5269,
                                "end": 5273
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 5274,
                                "end": 5275,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 5289,
                          "end": 5295,
                          "directive": null,
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
                          }
                        }
                      ]
                    },
                    "test": {
                      "type": "LogicalExpression",
                      "start": 5195,
                      "end": 5222,
                      "operator": "&&",
                      "left": {
                        "type": "Identifier",
                        "start": 5195,
                        "end": 5209,
                        "decorators": [],
                        "name": "thisX_isString",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 5213,
                        "end": 5222,
                        "decorators": [],
                        "name": "xIsString",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
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
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 5315,
      "end": 5758,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 5325,
        "end": 5758,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 5331,
            "end": 5756,
            "accessibility": null,
            "computed": false,
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
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 5342,
              "end": 5756,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 5372,
                "end": 5756,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 5382,
                    "end": 5432,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 5388,
                        "end": 5431,
                        "definite": false,
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
                          "operator": "===",
                          "left": {
                            "type": "UnaryExpression",
                            "start": 5405,
                            "end": 5418,
                            "argument": {
                              "type": "MemberExpression",
                              "start": 5412,
                              "end": 5418,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 5412,
                                "end": 5416
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 5417,
                                "end": 5418,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "operator": "typeof",
                            "prefix": true
                          },
                          "right": {
                            "type": "Literal",
                            "start": 5423,
                            "end": 5431,
                            "raw": "'string'",
                            "value": "string",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 5441,
                    "end": 5481,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 5447,
                        "end": 5480,
                        "definite": false,
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
                          "operator": "===",
                          "left": {
                            "type": "UnaryExpression",
                            "start": 5459,
                            "end": 5467,
                            "argument": {
                              "type": "Identifier",
                              "start": 5466,
                              "end": 5467,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "operator": "typeof",
                            "prefix": true
                          },
                          "right": {
                            "type": "Literal",
                            "start": 5472,
                            "end": 5480,
                            "raw": "'string'",
                            "value": "string",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "IfStatement",
                    "start": 5490,
                    "end": 5750,
                    "alternate": {
                      "type": "BlockStatement",
                      "start": 5694,
                      "end": 5750,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 5708,
                          "end": 5720,
                          "directive": null,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 5708,
                            "end": 5719,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 5708,
                              "end": 5714,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 5708,
                                "end": 5712
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 5713,
                                "end": 5714,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "start": 5717,
                              "end": 5719,
                              "raw": "10",
                              "value": 10,
                              "regex": null,
                              "bigint": null
                            }
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 5733,
                          "end": 5740,
                          "directive": null,
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
                              "raw": "10",
                              "value": 10,
                              "regex": null,
                              "bigint": null
                            }
                          }
                        }
                      ]
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
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 5617,
                              "end": 5626,
                              "definite": false,
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
                              "init": null
                            }
                          ],
                          "declare": false,
                          "kind": "let"
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 5640,
                          "end": 5651,
                          "directive": null,
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
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 5644,
                                "end": 5648
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 5649,
                                "end": 5650,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 5664,
                          "end": 5670,
                          "directive": null,
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
                          }
                        }
                      ]
                    },
                    "test": {
                      "type": "LogicalExpression",
                      "start": 5494,
                      "end": 5521,
                      "operator": "&&",
                      "left": {
                        "type": "Identifier",
                        "start": 5494,
                        "end": 5508,
                        "decorators": [],
                        "name": "thisX_isString",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 5512,
                        "end": 5521,
                        "decorators": [],
                        "name": "xIsString",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
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
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 5813,
      "end": 6023,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 5894,
        "end": 6023,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 5900,
            "end": 5921,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 5906,
                "end": 5920,
                "definite": false,
                "id": {
                  "type": "ObjectPattern",
                  "start": 5906,
                  "end": 5914,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 5908,
                      "end": 5912,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 5908,
                        "end": 5912,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 5908,
                        "end": 5912,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
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
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 5926,
            "end": 5954,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 5932,
                "end": 5953,
                "definite": false,
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
                  "operator": "==",
                  "left": {
                    "type": "Identifier",
                    "start": 5940,
                    "end": 5944,
                    "decorators": [],
                    "name": "kind",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 5948,
                    "end": 5953,
                    "raw": "'foo'",
                    "value": "foo",
                    "regex": null,
                    "bigint": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "IfStatement",
            "start": 5959,
            "end": 6021,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 5981,
              "end": 6021,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 5991,
                  "end": 6015,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 5995,
                      "end": 6014,
                      "definite": false,
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
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 6007,
                          "end": 6010,
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 6011,
                          "end": 6014,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                }
              ]
            },
            "test": {
              "type": "LogicalExpression",
              "start": 5963,
              "end": 5979,
              "operator": "&&",
              "left": {
                "type": "Identifier",
                "start": 5963,
                "end": 5968,
                "decorators": [],
                "name": "isFoo",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "MemberExpression",
                "start": 5972,
                "end": 5979,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 5972,
                  "end": 5975,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 5976,
                  "end": 5979,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 5822,
        "end": 5825,
        "decorators": [],
        "name": "f40",
        "optional": false,
        "typeAnnotation": null
      },
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
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 5833,
                        "end": 5837,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
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
                            "raw": "'foo'",
                            "value": "foo",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 5846,
                      "end": 5858,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 5846,
                        "end": 5849,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": true,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 5850,
                        "end": 5858,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 5852,
                          "end": 5858
                        }
                      }
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
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 5865,
                        "end": 5869,
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
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
                            "raw": "'bar'",
                            "value": "bar",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 5878,
                      "end": 5890,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 5878,
                        "end": 5881,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": true,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 5882,
                        "end": 5890,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 5884,
                          "end": 5890
                        }
                      }
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 6104,
      "end": 6184,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 6109,
        "end": 6113,
        "decorators": [],
        "name": "Data",
        "optional": false,
        "typeAnnotation": null
      },
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
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 6118,
                  "end": 6122,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
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
                      "raw": "'str'",
                      "value": "str",
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "start": 6131,
                "end": 6146,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 6131,
                  "end": 6138,
                  "decorators": [],
                  "name": "payload",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 6138,
                  "end": 6146,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 6140,
                    "end": 6146
                  }
                }
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
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 6153,
                  "end": 6157,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
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
                      "raw": "'num'",
                      "value": "num",
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "start": 6166,
                "end": 6181,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 6166,
                  "end": 6173,
                  "decorators": [],
                  "name": "payload",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 6173,
                  "end": 6181,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 6175,
                    "end": 6181
                  }
                }
              }
            ]
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 6186,
      "end": 6340,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 6210,
        "end": 6340,
        "body": [
          {
            "type": "IfStatement",
            "start": 6216,
            "end": 6338,
            "alternate": {
              "type": "BlockStatement",
              "start": 6294,
              "end": 6338,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 6304,
                  "end": 6332,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 6308,
                      "end": 6331,
                      "definite": false,
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
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 6320,
                          "end": 6323,
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 6324,
                          "end": 6331,
                          "decorators": [],
                          "name": "payload",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                }
              ]
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
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 6254,
                      "end": 6277,
                      "definite": false,
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
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 6266,
                          "end": 6269,
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 6270,
                          "end": 6277,
                          "decorators": [],
                          "name": "payload",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 6220,
              "end": 6238,
              "operator": "===",
              "left": {
                "type": "MemberExpression",
                "start": 6220,
                "end": 6228,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 6220,
                  "end": 6223,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 6224,
                  "end": 6228,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 6233,
                "end": 6238,
                "raw": "'str'",
                "value": "str",
                "regex": null,
                "bigint": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 6195,
        "end": 6198,
        "decorators": [],
        "name": "gg2",
        "optional": false,
        "typeAnnotation": null
      },
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
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 6204,
                "end": 6208,
                "decorators": [],
                "name": "Data",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 6342,
      "end": 6498,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 6380,
        "end": 6498,
        "body": [
          {
            "type": "IfStatement",
            "start": 6386,
            "end": 6496,
            "alternate": {
              "type": "BlockStatement",
              "start": 6456,
              "end": 6496,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 6466,
                  "end": 6490,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 6470,
                      "end": 6489,
                      "definite": false,
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
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                }
              ]
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
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 6420,
                      "end": 6439,
                      "definite": false,
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
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 6390,
              "end": 6404,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 6390,
                "end": 6394,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 6399,
                "end": 6404,
                "raw": "'str'",
                "value": "str",
                "regex": null,
                "bigint": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 6351,
        "end": 6354,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 6355,
          "end": 6378,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 6357,
              "end": 6361,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 6357,
                "end": 6361,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 6357,
                "end": 6361,
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "Property",
              "start": 6363,
              "end": 6370,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 6363,
                "end": 6370,
                "decorators": [],
                "name": "payload",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 6363,
                "end": 6370,
                "decorators": [],
                "name": "payload",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 6372,
            "end": 6378,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 6374,
              "end": 6378,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 6374,
                "end": 6378,
                "decorators": [],
                "name": "Data",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 6522,
      "end": 6557,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6528,
          "end": 6556,
          "definite": false,
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 6540,
                  "end": 6542,
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 6544,
                  "end": 6554,
                  "async": false,
                  "body": {
                    "type": "Literal",
                    "start": 6550,
                    "end": 6554,
                    "raw": "true",
                    "value": true,
                    "regex": null,
                    "bigint": null
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "IfStatement",
      "start": 6559,
      "end": 6569,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 6566,
        "end": 6569,
        "body": []
      },
      "test": {
        "type": "Identifier",
        "start": 6563,
        "end": 6564,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 6571,
      "end": 6590,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6577,
          "end": 6589,
          "definite": false,
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
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 6581,
              "end": 6587,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 6581,
                "end": 6584,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 6585,
                "end": 6587,
                "decorators": [],
                "name": "fn",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ClassDeclaration",
      "start": 6659,
      "end": 6763,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 6671,
        "end": 6763,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 6675,
            "end": 6761,
            "accessibility": null,
            "computed": false,
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
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 6691,
              "end": 6761,
              "async": false,
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
                      "operator": "!=",
                      "left": {
                        "type": "Identifier",
                        "start": 6743,
                        "end": 6748,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 6752,
                        "end": 6756,
                        "raw": "null",
                        "value": null,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 6702,
                        "end": 6703,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
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
                  "asserts": false,
                  "parameterName": {
                    "type": "Identifier",
                    "start": 6706,
                    "end": 6711,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 6715,
                    "end": 6729,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 6715,
                      "end": 6729,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 6726,
                        "end": 6729,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 6727,
                            "end": 6728,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 6727,
                              "end": 6728,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 6715,
                        "end": 6726,
                        "decorators": [],
                        "name": "NonNullable",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 6691,
                "end": 6694,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 6692,
                    "end": 6693,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 6692,
                      "end": 6693,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
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
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 6765,
      "end": 6969,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 6778,
        "end": 6969,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 6782,
            "end": 6829,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 6798,
              "end": 6808,
              "decorators": [],
              "name": "testNumber",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
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
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 6833,
            "end": 6967,
            "accessibility": null,
            "computed": false,
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
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 6836,
              "end": 6967,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 6839,
                "end": 6967,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 6845,
                    "end": 6895,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 6851,
                        "end": 6894,
                        "definite": false,
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
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "start": 6878,
                              "end": 6893,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 6878,
                                "end": 6882
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 6883,
                                "end": 6893,
                                "decorators": [],
                                "name": "testNumber",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 6862,
                            "end": 6877,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 6862,
                              "end": 6867,
                              "decorators": [],
                              "name": "Utils",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 6868,
                              "end": 6877,
                              "decorators": [],
                              "name": "isDefined",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "IfStatement",
                    "start": 6901,
                    "end": 6963,
                    "alternate": null,
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 6915,
                      "end": 6963,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 6923,
                          "end": 6957,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 6929,
                              "end": 6956,
                              "definite": false,
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
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 6941,
                                  "end": 6945
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 6946,
                                  "end": 6956,
                                  "decorators": [],
                                  "name": "testNumber",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "const"
                        }
                      ]
                    },
                    "test": {
                      "type": "Identifier",
                      "start": 6905,
                      "end": 6913,
                      "decorators": [],
                      "name": "isNumber",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
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
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
