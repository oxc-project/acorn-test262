__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1558,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 72,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 39,
        "end": 72,
        "body": [
          {
            "type": "ThrowStatement",
            "start": 45,
            "end": 70,
            "argument": {
              "type": "NewExpression",
              "start": 51,
              "end": 69,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 61,
                  "end": 68,
                  "decorators": [],
                  "name": "message",
                  "optional": false
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 55,
                "end": 60,
                "decorators": [],
                "name": "Error",
                "optional": false
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
        "start": 9,
        "end": 14,
        "decorators": [],
        "name": "error",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 15,
          "end": 30,
          "decorators": [],
          "name": "message",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 22,
            "end": 30,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 24,
              "end": 30
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 31,
        "end": 38,
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 33,
          "end": 38
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 74,
      "end": 143,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 110,
        "end": 143,
        "body": [
          {
            "type": "ThrowStatement",
            "start": 116,
            "end": 141,
            "argument": {
              "type": "NewExpression",
              "start": 122,
              "end": 140,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 132,
                  "end": 139,
                  "decorators": [],
                  "name": "message",
                  "optional": false
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 126,
                "end": 131,
                "decorators": [],
                "name": "Error",
                "optional": false
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
        "start": 83,
        "end": 92,
        "decorators": [],
        "name": "errorVoid",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 93,
          "end": 108,
          "decorators": [],
          "name": "message",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 100,
            "end": 108,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 102,
              "end": 108
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 145,
      "end": 202,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 161,
        "end": 202,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 167,
            "end": 200,
            "argument": {
              "type": "CallExpression",
              "start": 174,
              "end": 199,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 180,
                  "end": 198,
                  "raw": "\"Something failed\"",
                  "value": "Something failed"
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 174,
                "end": 179,
                "decorators": [],
                "name": "error",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 154,
        "end": 158,
        "decorators": [],
        "name": "fail",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 204,
      "end": 323,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 246,
        "end": 323,
        "body": [
          {
            "type": "IfStatement",
            "start": 252,
            "end": 298,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 268,
              "end": 298,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 278,
                  "end": 292,
                  "argument": {
                    "type": "CallExpression",
                    "start": 285,
                    "end": 291,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 285,
                      "end": 289,
                      "decorators": [],
                      "name": "fail",
                      "optional": false
                    },
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 256,
              "end": 266,
              "decorators": [],
              "name": "shouldFail",
              "optional": false
            }
          },
          {
            "type": "ThrowStatement",
            "start": 303,
            "end": 321,
            "argument": {
              "type": "NewExpression",
              "start": 309,
              "end": 320,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 313,
                "end": 318,
                "decorators": [],
                "name": "Error",
                "optional": false
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
        "start": 213,
        "end": 224,
        "decorators": [],
        "name": "failOrThrow",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 225,
          "end": 244,
          "decorators": [],
          "name": "shouldFail",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 235,
            "end": 244,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 237,
              "end": 244
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 325,
      "end": 378,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 350,
        "end": 378,
        "body": [
          {
            "type": "WhileStatement",
            "start": 356,
            "end": 376,
            "body": {
              "type": "BlockStatement",
              "start": 369,
              "end": 376,
              "body": []
            },
            "test": {
              "type": "Literal",
              "start": 363,
              "end": 367,
              "raw": "true",
              "value": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 334,
        "end": 347,
        "decorators": [],
        "name": "infiniteLoop1",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 380,
      "end": 440,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 412,
        "end": 440,
        "body": [
          {
            "type": "WhileStatement",
            "start": 418,
            "end": 438,
            "body": {
              "type": "BlockStatement",
              "start": 431,
              "end": 438,
              "body": []
            },
            "test": {
              "type": "Literal",
              "start": 425,
              "end": 429,
              "raw": "true",
              "value": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 389,
        "end": 402,
        "decorators": [],
        "name": "infiniteLoop2",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 404,
        "end": 411,
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 406,
          "end": 411
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 442,
      "end": 646,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 483,
        "end": 646,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 489,
            "end": 601,
            "cases": [
              {
                "type": "SwitchCase",
                "start": 518,
                "end": 550,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 541,
                    "end": 550,
                    "argument": {
                      "type": "Literal",
                      "start": 548,
                      "end": 549,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 523,
                  "end": 527,
                  "raw": "\"up\"",
                  "value": "up"
                }
              },
              {
                "type": "SwitchCase",
                "start": 559,
                "end": 594,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 584,
                    "end": 594,
                    "argument": {
                      "type": "UnaryExpression",
                      "start": 591,
                      "end": 593,
                      "argument": {
                        "type": "Literal",
                        "start": 592,
                        "end": 593,
                        "raw": "1",
                        "value": 1
                      },
                      "operator": "-",
                      "prefix": true
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 564,
                  "end": 570,
                  "raw": "\"down\"",
                  "value": "down"
                }
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "start": 497,
              "end": 506,
              "decorators": [],
              "name": "direction",
              "optional": false
            }
          },
          {
            "type": "ReturnStatement",
            "start": 606,
            "end": 644,
            "argument": {
              "type": "CallExpression",
              "start": 613,
              "end": 643,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 619,
                  "end": 642,
                  "raw": "\"Should never get here\"",
                  "value": "Should never get here"
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 613,
                "end": 618,
                "decorators": [],
                "name": "error",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 451,
        "end": 456,
        "decorators": [],
        "name": "move1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 457,
          "end": 481,
          "decorators": [],
          "name": "direction",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 466,
            "end": 481,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 468,
              "end": 481,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 468,
                  "end": 472,
                  "literal": {
                    "type": "Literal",
                    "start": 468,
                    "end": 472,
                    "raw": "\"up\"",
                    "value": "up"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 475,
                  "end": 481,
                  "literal": {
                    "type": "Literal",
                    "start": 475,
                    "end": 481,
                    "raw": "\"down\"",
                    "value": "down"
                  }
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 648,
      "end": 804,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 689,
        "end": 804,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 695,
            "end": 802,
            "argument": {
              "type": "ConditionalExpression",
              "start": 702,
              "end": 801,
              "alternate": {
                "type": "ConditionalExpression",
                "start": 735,
                "end": 801,
                "alternate": {
                  "type": "CallExpression",
                  "start": 771,
                  "end": 801,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 777,
                      "end": 800,
                      "raw": "\"Should never get here\"",
                      "value": "Should never get here"
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 771,
                    "end": 776,
                    "decorators": [],
                    "name": "error",
                    "optional": false
                  },
                  "optional": false
                },
                "consequent": {
                  "type": "UnaryExpression",
                  "start": 758,
                  "end": 760,
                  "argument": {
                    "type": "Literal",
                    "start": 759,
                    "end": 760,
                    "raw": "1",
                    "value": 1
                  },
                  "operator": "-",
                  "prefix": true
                },
                "test": {
                  "type": "BinaryExpression",
                  "start": 735,
                  "end": 755,
                  "operator": "===",
                  "left": {
                    "type": "Identifier",
                    "start": 735,
                    "end": 744,
                    "decorators": [],
                    "name": "direction",
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 749,
                    "end": 755,
                    "raw": "\"down\"",
                    "value": "down"
                  }
                }
              },
              "consequent": {
                "type": "Literal",
                "start": 723,
                "end": 724,
                "raw": "1",
                "value": 1
              },
              "test": {
                "type": "BinaryExpression",
                "start": 702,
                "end": 720,
                "operator": "===",
                "left": {
                  "type": "Identifier",
                  "start": 702,
                  "end": 711,
                  "decorators": [],
                  "name": "direction",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 716,
                  "end": 720,
                  "raw": "\"up\"",
                  "value": "up"
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
        "start": 657,
        "end": 662,
        "decorators": [],
        "name": "move2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 663,
          "end": 687,
          "decorators": [],
          "name": "direction",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 672,
            "end": 687,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 674,
              "end": 687,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 674,
                  "end": 678,
                  "literal": {
                    "type": "Literal",
                    "start": 674,
                    "end": 678,
                    "raw": "\"up\"",
                    "value": "up"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 681,
                  "end": 687,
                  "literal": {
                    "type": "Literal",
                    "start": 681,
                    "end": 687,
                    "raw": "\"down\"",
                    "value": "down"
                  }
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 806,
      "end": 887,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 842,
        "end": 887,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 848,
            "end": 885,
            "argument": {
              "type": "LogicalExpression",
              "start": 855,
              "end": 884,
              "operator": "||",
              "left": {
                "type": "Identifier",
                "start": 855,
                "end": 856,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 860,
                "end": 884,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 866,
                    "end": 883,
                    "raw": "\"Undefined value\"",
                    "value": "Undefined value"
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 860,
                  "end": 865,
                  "decorators": [],
                  "name": "error",
                  "optional": false
                },
                "optional": false
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
        "start": 815,
        "end": 820,
        "decorators": [],
        "name": "check",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 824,
          "end": 840,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 825,
            "end": 840,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 827,
              "end": 840,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 827,
                  "end": 828,
                  "typeName": {
                    "type": "Identifier",
                    "start": 827,
                    "end": 828,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 831,
                  "end": 840
                }
              ]
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 820,
        "end": 823,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 821,
            "end": 822,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 821,
              "end": 822,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 889,
      "end": 1098,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 897,
        "end": 1098,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 903,
            "end": 945,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 903,
              "end": 908,
              "decorators": [],
              "name": "void1",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 908,
              "end": 945,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 911,
                "end": 945,
                "body": [
                  {
                    "type": "ThrowStatement",
                    "start": 921,
                    "end": 939,
                    "argument": {
                      "type": "NewExpression",
                      "start": 927,
                      "end": 938,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 931,
                        "end": 936,
                        "decorators": [],
                        "name": "Error",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 950,
            "end": 989,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 950,
              "end": 955,
              "decorators": [],
              "name": "void2",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 955,
              "end": 989,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 958,
                "end": 989,
                "body": [
                  {
                    "type": "WhileStatement",
                    "start": 968,
                    "end": 983,
                    "body": {
                      "type": "BlockStatement",
                      "start": 981,
                      "end": 983,
                      "body": []
                    },
                    "test": {
                      "type": "Literal",
                      "start": 975,
                      "end": 979,
                      "raw": "true",
                      "value": true
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 994,
            "end": 1044,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 994,
              "end": 1000,
              "decorators": [],
              "name": "never1",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1000,
              "end": 1044,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1010,
                "end": 1044,
                "body": [
                  {
                    "type": "ThrowStatement",
                    "start": 1020,
                    "end": 1038,
                    "argument": {
                      "type": "NewExpression",
                      "start": 1026,
                      "end": 1037,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 1030,
                        "end": 1035,
                        "decorators": [],
                        "name": "Error",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1002,
                "end": 1009,
                "typeAnnotation": {
                  "type": "TSNeverKeyword",
                  "start": 1004,
                  "end": 1009
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1049,
            "end": 1096,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1049,
              "end": 1055,
              "decorators": [],
              "name": "never2",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1055,
              "end": 1096,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1065,
                "end": 1096,
                "body": [
                  {
                    "type": "WhileStatement",
                    "start": 1075,
                    "end": 1090,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1088,
                      "end": 1090,
                      "body": []
                    },
                    "test": {
                      "type": "Literal",
                      "start": 1082,
                      "end": 1086,
                      "raw": "true",
                      "value": true
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1057,
                "end": 1064,
                "typeAnnotation": {
                  "type": "TSNeverKeyword",
                  "start": 1059,
                  "end": 1064
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 895,
        "end": 896,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1100,
      "end": 1196,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1132,
        "end": 1196,
        "body": [
          {
            "type": "IfStatement",
            "start": 1138,
            "end": 1194,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 1166,
              "end": 1194,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1176,
                  "end": 1178,
                  "expression": {
                    "type": "Identifier",
                    "start": 1176,
                    "end": 1177,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 1142,
              "end": 1164,
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "start": 1142,
                "end": 1150,
                "argument": {
                  "type": "Identifier",
                  "start": 1149,
                  "end": 1150,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 1155,
                "end": 1164,
                "raw": "\"boolean\"",
                "value": "boolean"
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
        "start": 1109,
        "end": 1111,
        "decorators": [],
        "name": "f1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1112,
          "end": 1130,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1113,
            "end": 1130,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1115,
              "end": 1130,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 1115,
                  "end": 1121
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 1124,
                  "end": 1130
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 1198,
      "end": 1338,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1230,
        "end": 1338,
        "body": [
          {
            "type": "WhileStatement",
            "start": 1236,
            "end": 1336,
            "body": {
              "type": "BlockStatement",
              "start": 1249,
              "end": 1336,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 1259,
                  "end": 1330,
                  "alternate": null,
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 1287,
                    "end": 1330,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 1301,
                        "end": 1310,
                        "argument": {
                          "type": "Identifier",
                          "start": 1308,
                          "end": 1309,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "start": 1263,
                    "end": 1285,
                    "operator": "===",
                    "left": {
                      "type": "UnaryExpression",
                      "start": 1263,
                      "end": 1271,
                      "argument": {
                        "type": "Identifier",
                        "start": 1270,
                        "end": 1271,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "operator": "typeof",
                      "prefix": true
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1276,
                      "end": 1285,
                      "raw": "\"boolean\"",
                      "value": "boolean"
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Literal",
              "start": 1243,
              "end": 1247,
              "raw": "true",
              "value": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1207,
        "end": 1209,
        "decorators": [],
        "name": "f2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1210,
          "end": 1228,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1211,
            "end": 1228,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1213,
              "end": 1228,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 1213,
                  "end": 1219
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 1222,
                  "end": 1228
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 1340,
      "end": 1407,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1372,
        "end": 1407,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1378,
            "end": 1391,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1382,
                "end": 1390,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1382,
                  "end": 1383,
                  "decorators": [],
                  "name": "s",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1386,
                  "end": 1390,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 1386,
                    "end": 1388,
                    "decorators": [],
                    "name": "cb",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ReturnStatement",
            "start": 1396,
            "end": 1405,
            "argument": {
              "type": "Identifier",
              "start": 1403,
              "end": 1404,
              "decorators": [],
              "name": "s",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1349,
        "end": 1353,
        "decorators": [],
        "name": "test",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1354,
          "end": 1370,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1356,
            "end": 1370,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1358,
              "end": 1370,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1361,
                "end": 1370,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1364,
                  "end": 1370
                }
              }
            }
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 1409,
      "end": 1459,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1413,
          "end": 1458,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1413,
            "end": 1426,
            "decorators": [],
            "name": "errorCallback",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 1429,
            "end": 1458,
            "async": false,
            "body": {
              "type": "CallExpression",
              "start": 1435,
              "end": 1458,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1441,
                  "end": 1457,
                  "raw": "\"Error callback\"",
                  "value": "Error callback"
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1435,
                "end": 1440,
                "decorators": [],
                "name": "error",
                "optional": false
              },
              "optional": false
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": []
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 1461,
      "end": 1481,
      "expression": {
        "type": "CallExpression",
        "start": 1461,
        "end": 1480,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 1466,
            "end": 1479,
            "async": false,
            "body": {
              "type": "Literal",
              "start": 1472,
              "end": 1479,
              "raw": "\"hello\"",
              "value": "hello"
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": []
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1461,
          "end": 1465,
          "decorators": [],
          "name": "test",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1482,
      "end": 1501,
      "expression": {
        "type": "CallExpression",
        "start": 1482,
        "end": 1500,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 1487,
            "end": 1499,
            "async": false,
            "body": {
              "type": "CallExpression",
              "start": 1493,
              "end": 1499,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 1493,
                "end": 1497,
                "decorators": [],
                "name": "fail",
                "optional": false
              },
              "optional": false
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": []
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1482,
          "end": 1486,
          "decorators": [],
          "name": "test",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1502,
      "end": 1536,
      "expression": {
        "type": "CallExpression",
        "start": 1502,
        "end": 1536,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 1507,
            "end": 1535,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 1513,
              "end": 1535,
              "body": [
                {
                  "type": "ThrowStatement",
                  "start": 1515,
                  "end": 1533,
                  "argument": {
                    "type": "NewExpression",
                    "start": 1521,
                    "end": 1532,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 1525,
                      "end": 1530,
                      "decorators": [],
                      "name": "Error",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": []
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1502,
          "end": 1506,
          "decorators": [],
          "name": "test",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1537,
      "end": 1557,
      "expression": {
        "type": "CallExpression",
        "start": 1537,
        "end": 1556,
        "arguments": [
          {
            "type": "Identifier",
            "start": 1542,
            "end": 1555,
            "decorators": [],
            "name": "errorCallback",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1537,
          "end": 1541,
          "decorators": [],
          "name": "test",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
