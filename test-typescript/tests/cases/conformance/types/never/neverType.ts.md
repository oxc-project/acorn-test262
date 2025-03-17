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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 14,
        "name": "error",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 15,
          "end": 30,
          "name": "message",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 22,
            "end": 30,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 24,
              "end": 30
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "callee": {
                "type": "Identifier",
                "start": 55,
                "end": 60,
                "name": "Error",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 61,
                  "end": 68,
                  "name": "message",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
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
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 92,
        "name": "errorVoid",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 93,
          "end": 108,
          "name": "message",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 100,
            "end": 108,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 102,
              "end": 108
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "callee": {
                "type": "Identifier",
                "start": 126,
                "end": 131,
                "name": "Error",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 132,
                  "end": 139,
                  "name": "message",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 145,
      "end": 202,
      "id": {
        "type": "Identifier",
        "start": 154,
        "end": 158,
        "name": "fail",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
              "callee": {
                "type": "Identifier",
                "start": 174,
                "end": 179,
                "name": "error",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 180,
                  "end": 198,
                  "value": "Something failed",
                  "raw": "\"Something failed\""
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 204,
      "end": 323,
      "id": {
        "type": "Identifier",
        "start": 213,
        "end": 224,
        "name": "failOrThrow",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 225,
          "end": 244,
          "name": "shouldFail",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 235,
            "end": 244,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 237,
              "end": 244
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 246,
        "end": 323,
        "body": [
          {
            "type": "IfStatement",
            "start": 252,
            "end": 298,
            "test": {
              "type": "Identifier",
              "start": 256,
              "end": 266,
              "name": "shouldFail",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "callee": {
                      "type": "Identifier",
                      "start": 285,
                      "end": 289,
                      "name": "fail",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ThrowStatement",
            "start": 303,
            "end": 321,
            "argument": {
              "type": "NewExpression",
              "start": 309,
              "end": 320,
              "callee": {
                "type": "Identifier",
                "start": 313,
                "end": 318,
                "name": "Error",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 325,
      "end": 378,
      "id": {
        "type": "Identifier",
        "start": 334,
        "end": 347,
        "name": "infiniteLoop1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 350,
        "end": 378,
        "body": [
          {
            "type": "WhileStatement",
            "start": 356,
            "end": 376,
            "test": {
              "type": "Literal",
              "start": 363,
              "end": 367,
              "value": true,
              "raw": "true"
            },
            "body": {
              "type": "BlockStatement",
              "start": 369,
              "end": 376,
              "body": []
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 380,
      "end": 440,
      "id": {
        "type": "Identifier",
        "start": 389,
        "end": 402,
        "name": "infiniteLoop2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 412,
        "end": 440,
        "body": [
          {
            "type": "WhileStatement",
            "start": 418,
            "end": 438,
            "test": {
              "type": "Literal",
              "start": 425,
              "end": 429,
              "value": true,
              "raw": "true"
            },
            "body": {
              "type": "BlockStatement",
              "start": 431,
              "end": 438,
              "body": []
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
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
      "id": {
        "type": "Identifier",
        "start": 451,
        "end": 456,
        "name": "move1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 457,
          "end": 481,
          "name": "direction",
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
                    "value": "up",
                    "raw": "\"up\""
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
                    "value": "down",
                    "raw": "\"down\""
                  }
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 483,
        "end": 646,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 489,
            "end": 601,
            "discriminant": {
              "type": "Identifier",
              "start": 497,
              "end": 506,
              "name": "direction",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 523,
                  "end": 527,
                  "value": "up",
                  "raw": "\"up\""
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
                      "operator": "-",
                      "prefix": true,
                      "argument": {
                        "type": "Literal",
                        "start": 592,
                        "end": 593,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 564,
                  "end": 570,
                  "value": "down",
                  "raw": "\"down\""
                }
              }
            ]
          },
          {
            "type": "ReturnStatement",
            "start": 606,
            "end": 644,
            "argument": {
              "type": "CallExpression",
              "start": 613,
              "end": 643,
              "callee": {
                "type": "Identifier",
                "start": 613,
                "end": 618,
                "name": "error",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 619,
                  "end": 642,
                  "value": "Should never get here",
                  "raw": "\"Should never get here\""
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 648,
      "end": 804,
      "id": {
        "type": "Identifier",
        "start": 657,
        "end": 662,
        "name": "move2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 663,
          "end": 687,
          "name": "direction",
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
                    "value": "up",
                    "raw": "\"up\""
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
                    "value": "down",
                    "raw": "\"down\""
                  }
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "test": {
                "type": "BinaryExpression",
                "start": 702,
                "end": 720,
                "left": {
                  "type": "Identifier",
                  "start": 702,
                  "end": 711,
                  "name": "direction",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 716,
                  "end": 720,
                  "value": "up",
                  "raw": "\"up\""
                }
              },
              "consequent": {
                "type": "Literal",
                "start": 723,
                "end": 724,
                "value": 1,
                "raw": "1"
              },
              "alternate": {
                "type": "ConditionalExpression",
                "start": 735,
                "end": 801,
                "test": {
                  "type": "BinaryExpression",
                  "start": 735,
                  "end": 755,
                  "left": {
                    "type": "Identifier",
                    "start": 735,
                    "end": 744,
                    "name": "direction",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 749,
                    "end": 755,
                    "value": "down",
                    "raw": "\"down\""
                  }
                },
                "consequent": {
                  "type": "UnaryExpression",
                  "start": 758,
                  "end": 760,
                  "operator": "-",
                  "prefix": true,
                  "argument": {
                    "type": "Literal",
                    "start": 759,
                    "end": 760,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "alternate": {
                  "type": "CallExpression",
                  "start": 771,
                  "end": 801,
                  "callee": {
                    "type": "Identifier",
                    "start": 771,
                    "end": 776,
                    "name": "error",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 777,
                      "end": 800,
                      "value": "Should never get here",
                      "raw": "\"Should never get here\""
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 806,
      "end": 887,
      "id": {
        "type": "Identifier",
        "start": 815,
        "end": 820,
        "name": "check",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 824,
          "end": 840,
          "name": "x",
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
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 831,
                  "end": 840
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "left": {
                "type": "Identifier",
                "start": 855,
                "end": 856,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "||",
              "right": {
                "type": "CallExpression",
                "start": 860,
                "end": 884,
                "callee": {
                  "type": "Identifier",
                  "start": 860,
                  "end": 865,
                  "name": "error",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 866,
                    "end": 883,
                    "value": "Undefined value",
                    "raw": "\"Undefined value\""
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 820,
        "end": 823,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 821,
            "end": 822,
            "name": {
              "type": "Identifier",
              "start": 821,
              "end": 822,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 889,
      "end": 1098,
      "id": {
        "type": "Identifier",
        "start": 895,
        "end": 896,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 897,
        "end": 1098,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 903,
            "end": 945,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 903,
              "end": 908,
              "name": "void1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 908,
              "end": 945,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "callee": {
                        "type": "Identifier",
                        "start": 931,
                        "end": 936,
                        "name": "Error",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 950,
            "end": 989,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 950,
              "end": 955,
              "name": "void2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 955,
              "end": 989,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 958,
                "end": 989,
                "body": [
                  {
                    "type": "WhileStatement",
                    "start": 968,
                    "end": 983,
                    "test": {
                      "type": "Literal",
                      "start": 975,
                      "end": 979,
                      "value": true,
                      "raw": "true"
                    },
                    "body": {
                      "type": "BlockStatement",
                      "start": 981,
                      "end": 983,
                      "body": []
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 994,
            "end": 1044,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 994,
              "end": 1000,
              "name": "never1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1000,
              "end": 1044,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "callee": {
                        "type": "Identifier",
                        "start": 1030,
                        "end": 1035,
                        "name": "Error",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
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
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1049,
            "end": 1096,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1049,
              "end": 1055,
              "name": "never2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1055,
              "end": 1096,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1065,
                "end": 1096,
                "body": [
                  {
                    "type": "WhileStatement",
                    "start": 1075,
                    "end": 1090,
                    "test": {
                      "type": "Literal",
                      "start": 1082,
                      "end": 1086,
                      "value": true,
                      "raw": "true"
                    },
                    "body": {
                      "type": "BlockStatement",
                      "start": 1088,
                      "end": 1090,
                      "body": []
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
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
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1100,
      "end": 1196,
      "id": {
        "type": "Identifier",
        "start": 1109,
        "end": 1111,
        "name": "f1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1112,
          "end": 1130,
          "name": "x",
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1132,
        "end": 1196,
        "body": [
          {
            "type": "IfStatement",
            "start": 1138,
            "end": 1194,
            "test": {
              "type": "BinaryExpression",
              "start": 1142,
              "end": 1164,
              "left": {
                "type": "UnaryExpression",
                "start": 1142,
                "end": 1150,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 1149,
                  "end": 1150,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 1155,
                "end": 1164,
                "value": "boolean",
                "raw": "\"boolean\""
              }
            },
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
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1198,
      "end": 1338,
      "id": {
        "type": "Identifier",
        "start": 1207,
        "end": 1209,
        "name": "f2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1210,
          "end": 1228,
          "name": "x",
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1230,
        "end": 1338,
        "body": [
          {
            "type": "WhileStatement",
            "start": 1236,
            "end": 1336,
            "test": {
              "type": "Literal",
              "start": 1243,
              "end": 1247,
              "value": true,
              "raw": "true"
            },
            "body": {
              "type": "BlockStatement",
              "start": 1249,
              "end": 1336,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 1259,
                  "end": 1330,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 1263,
                    "end": 1285,
                    "left": {
                      "type": "UnaryExpression",
                      "start": 1263,
                      "end": 1271,
                      "operator": "typeof",
                      "prefix": true,
                      "argument": {
                        "type": "Identifier",
                        "start": 1270,
                        "end": 1271,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 1276,
                      "end": 1285,
                      "value": "boolean",
                      "raw": "\"boolean\""
                    }
                  },
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
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
                    ]
                  },
                  "alternate": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1340,
      "end": 1407,
      "id": {
        "type": "Identifier",
        "start": 1349,
        "end": 1353,
        "name": "test",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1354,
          "end": 1370,
          "name": "cb",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1356,
            "end": 1370,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1358,
              "end": 1370,
              "typeParameters": null,
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
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "id": {
                  "type": "Identifier",
                  "start": 1382,
                  "end": 1383,
                  "name": "s",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1386,
                  "end": 1390,
                  "callee": {
                    "type": "Identifier",
                    "start": 1386,
                    "end": 1388,
                    "name": "cb",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 1396,
            "end": 1405,
            "argument": {
              "type": "Identifier",
              "start": 1403,
              "end": 1404,
              "name": "s",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 1413,
            "end": 1426,
            "name": "errorCallback",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 1429,
            "end": 1458,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "CallExpression",
              "start": 1435,
              "end": 1458,
              "callee": {
                "type": "Identifier",
                "start": 1435,
                "end": 1440,
                "name": "error",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1441,
                  "end": 1457,
                  "value": "Error callback",
                  "raw": "\"Error callback\""
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1461,
      "end": 1481,
      "expression": {
        "type": "CallExpression",
        "start": 1461,
        "end": 1480,
        "callee": {
          "type": "Identifier",
          "start": 1461,
          "end": 1465,
          "name": "test",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 1466,
            "end": 1479,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "Literal",
              "start": 1472,
              "end": 1479,
              "value": "hello",
              "raw": "\"hello\""
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1482,
      "end": 1501,
      "expression": {
        "type": "CallExpression",
        "start": 1482,
        "end": 1500,
        "callee": {
          "type": "Identifier",
          "start": 1482,
          "end": 1486,
          "name": "test",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 1487,
            "end": 1499,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "CallExpression",
              "start": 1493,
              "end": 1499,
              "callee": {
                "type": "Identifier",
                "start": 1493,
                "end": 1497,
                "name": "fail",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1502,
      "end": 1536,
      "expression": {
        "type": "CallExpression",
        "start": 1502,
        "end": 1536,
        "callee": {
          "type": "Identifier",
          "start": 1502,
          "end": 1506,
          "name": "test",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 1507,
            "end": 1535,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
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
                    "callee": {
                      "type": "Identifier",
                      "start": 1525,
                      "end": 1530,
                      "name": "Error",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  }
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1537,
      "end": 1557,
      "expression": {
        "type": "CallExpression",
        "start": 1537,
        "end": 1556,
        "callee": {
          "type": "Identifier",
          "start": 1537,
          "end": 1541,
          "name": "test",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 1542,
            "end": 1555,
            "name": "errorCallback",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
