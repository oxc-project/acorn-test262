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
        "name": "error",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 14
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "message",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 24,
              "end": 30
            },
            "start": 22,
            "end": 30
          },
          "start": 15,
          "end": 30
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 33,
          "end": 38
        },
        "start": 31,
        "end": 38
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Error",
                "optional": false,
                "typeAnnotation": null,
                "start": 55,
                "end": 60
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "message",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 61,
                  "end": 68
                }
              ],
              "start": 51,
              "end": 69
            },
            "start": 45,
            "end": 70
          }
        ],
        "start": 39,
        "end": 72
      },
      "expression": false,
      "start": 0,
      "end": 72
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "errorVoid",
        "optional": false,
        "typeAnnotation": null,
        "start": 83,
        "end": 92
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "message",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 102,
              "end": 108
            },
            "start": 100,
            "end": 108
          },
          "start": 93,
          "end": 108
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Error",
                "optional": false,
                "typeAnnotation": null,
                "start": 126,
                "end": 131
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "message",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 132,
                  "end": 139
                }
              ],
              "start": 122,
              "end": 140
            },
            "start": 116,
            "end": 141
          }
        ],
        "start": 110,
        "end": 143
      },
      "expression": false,
      "start": 74,
      "end": 143
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fail",
        "optional": false,
        "typeAnnotation": null,
        "start": 154,
        "end": 158
      },
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
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "error",
                "optional": false,
                "typeAnnotation": null,
                "start": 174,
                "end": 179
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "Something failed",
                  "raw": "\"Something failed\"",
                  "start": 180,
                  "end": 198
                }
              ],
              "optional": false,
              "start": 174,
              "end": 199
            },
            "start": 167,
            "end": 200
          }
        ],
        "start": 161,
        "end": 202
      },
      "expression": false,
      "start": 145,
      "end": 202
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "failOrThrow",
        "optional": false,
        "typeAnnotation": null,
        "start": 213,
        "end": 224
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "shouldFail",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 237,
              "end": 244
            },
            "start": 235,
            "end": 244
          },
          "start": 225,
          "end": 244
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "shouldFail",
              "optional": false,
              "typeAnnotation": null,
              "start": 256,
              "end": 266
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fail",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 285,
                      "end": 289
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 285,
                    "end": 291
                  },
                  "start": 278,
                  "end": 292
                }
              ],
              "start": 268,
              "end": 298
            },
            "alternate": null,
            "start": 252,
            "end": 298
          },
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Error",
                "optional": false,
                "typeAnnotation": null,
                "start": 313,
                "end": 318
              },
              "typeArguments": null,
              "arguments": [],
              "start": 309,
              "end": 320
            },
            "start": 303,
            "end": 321
          }
        ],
        "start": 246,
        "end": 323
      },
      "expression": false,
      "start": 204,
      "end": 323
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "infiniteLoop1",
        "optional": false,
        "typeAnnotation": null,
        "start": 334,
        "end": 347
      },
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
            "type": "WhileStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 363,
              "end": 367
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 369,
              "end": 376
            },
            "start": 356,
            "end": 376
          }
        ],
        "start": 350,
        "end": 378
      },
      "expression": false,
      "start": 325,
      "end": 378
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "infiniteLoop2",
        "optional": false,
        "typeAnnotation": null,
        "start": 389,
        "end": 402
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 406,
          "end": 411
        },
        "start": 404,
        "end": 411
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "WhileStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 425,
              "end": 429
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 431,
              "end": 438
            },
            "start": 418,
            "end": 438
          }
        ],
        "start": 412,
        "end": 440
      },
      "expression": false,
      "start": 380,
      "end": 440
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "move1",
        "optional": false,
        "typeAnnotation": null,
        "start": 451,
        "end": 456
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "direction",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "up",
                    "raw": "\"up\"",
                    "start": 468,
                    "end": 472
                  },
                  "start": 468,
                  "end": 472
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "down",
                    "raw": "\"down\"",
                    "start": 475,
                    "end": 481
                  },
                  "start": 475,
                  "end": 481
                }
              ],
              "start": 468,
              "end": 481
            },
            "start": 466,
            "end": 481
          },
          "start": 457,
          "end": 481
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "direction",
              "optional": false,
              "typeAnnotation": null,
              "start": 497,
              "end": 506
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "up",
                  "raw": "\"up\"",
                  "start": 523,
                  "end": 527
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 548,
                      "end": 549
                    },
                    "start": 541,
                    "end": 550
                  }
                ],
                "start": 518,
                "end": 550
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "down",
                  "raw": "\"down\"",
                  "start": 564,
                  "end": 570
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 592,
                        "end": 593
                      },
                      "prefix": true,
                      "start": 591,
                      "end": 593
                    },
                    "start": 584,
                    "end": 594
                  }
                ],
                "start": 559,
                "end": 594
              }
            ],
            "start": 489,
            "end": 601
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "error",
                "optional": false,
                "typeAnnotation": null,
                "start": 613,
                "end": 618
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "Should never get here",
                  "raw": "\"Should never get here\"",
                  "start": 619,
                  "end": 642
                }
              ],
              "optional": false,
              "start": 613,
              "end": 643
            },
            "start": 606,
            "end": 644
          }
        ],
        "start": 483,
        "end": 646
      },
      "expression": false,
      "start": 442,
      "end": 646
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "move2",
        "optional": false,
        "typeAnnotation": null,
        "start": 657,
        "end": 662
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "direction",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "up",
                    "raw": "\"up\"",
                    "start": 674,
                    "end": 678
                  },
                  "start": 674,
                  "end": 678
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "down",
                    "raw": "\"down\"",
                    "start": 681,
                    "end": 687
                  },
                  "start": 681,
                  "end": 687
                }
              ],
              "start": 674,
              "end": 687
            },
            "start": 672,
            "end": 687
          },
          "start": 663,
          "end": 687
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "direction",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 702,
                  "end": 711
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "up",
                  "raw": "\"up\"",
                  "start": 716,
                  "end": 720
                },
                "start": 702,
                "end": 720
              },
              "consequent": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 723,
                "end": 724
              },
              "alternate": {
                "type": "ConditionalExpression",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "direction",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 735,
                    "end": 744
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "down",
                    "raw": "\"down\"",
                    "start": 749,
                    "end": 755
                  },
                  "start": 735,
                  "end": 755
                },
                "consequent": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 759,
                    "end": 760
                  },
                  "prefix": true,
                  "start": 758,
                  "end": 760
                },
                "alternate": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "error",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 771,
                    "end": 776
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "Should never get here",
                      "raw": "\"Should never get here\"",
                      "start": 777,
                      "end": 800
                    }
                  ],
                  "optional": false,
                  "start": 771,
                  "end": 801
                },
                "start": 735,
                "end": 801
              },
              "start": 702,
              "end": 801
            },
            "start": 695,
            "end": 802
          }
        ],
        "start": 689,
        "end": 804
      },
      "expression": false,
      "start": 648,
      "end": 804
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "check",
        "optional": false,
        "typeAnnotation": null,
        "start": 815,
        "end": 820
      },
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
              "start": 821,
              "end": 822
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 821,
            "end": 822
          }
        ],
        "start": 820,
        "end": 823
      },
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
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 827,
                    "end": 828
                  },
                  "typeArguments": null,
                  "start": 827,
                  "end": 828
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 831,
                  "end": 840
                }
              ],
              "start": 827,
              "end": 840
            },
            "start": 825,
            "end": 840
          },
          "start": 824,
          "end": 840
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 855,
                "end": 856
              },
              "operator": "||",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "error",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 860,
                  "end": 865
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "Undefined value",
                    "raw": "\"Undefined value\"",
                    "start": 866,
                    "end": 883
                  }
                ],
                "optional": false,
                "start": 860,
                "end": 884
              },
              "start": 855,
              "end": 884
            },
            "start": 848,
            "end": 885
          }
        ],
        "start": 842,
        "end": 887
      },
      "expression": false,
      "start": 806,
      "end": 887
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
        "start": 895,
        "end": 896
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
              "name": "void1",
              "optional": false,
              "typeAnnotation": null,
              "start": 903,
              "end": 908
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
                    "type": "ThrowStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 931,
                        "end": 936
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 927,
                      "end": 938
                    },
                    "start": 921,
                    "end": 939
                  }
                ],
                "start": 911,
                "end": 945
              },
              "expression": false,
              "start": 908,
              "end": 945
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 903,
            "end": 945
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "void2",
              "optional": false,
              "typeAnnotation": null,
              "start": 950,
              "end": 955
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
                    "type": "WhileStatement",
                    "test": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 975,
                      "end": 979
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 981,
                      "end": 983
                    },
                    "start": 968,
                    "end": 983
                  }
                ],
                "start": 958,
                "end": 989
              },
              "expression": false,
              "start": 955,
              "end": 989
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 950,
            "end": 989
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "never1",
              "optional": false,
              "typeAnnotation": null,
              "start": 994,
              "end": 1000
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNeverKeyword",
                  "start": 1004,
                  "end": 1009
                },
                "start": 1002,
                "end": 1009
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ThrowStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1030,
                        "end": 1035
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 1026,
                      "end": 1037
                    },
                    "start": 1020,
                    "end": 1038
                  }
                ],
                "start": 1010,
                "end": 1044
              },
              "expression": false,
              "start": 1000,
              "end": 1044
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 994,
            "end": 1044
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "never2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1049,
              "end": 1055
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNeverKeyword",
                  "start": 1059,
                  "end": 1064
                },
                "start": 1057,
                "end": 1064
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "WhileStatement",
                    "test": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 1082,
                      "end": 1086
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1088,
                      "end": 1090
                    },
                    "start": 1075,
                    "end": 1090
                  }
                ],
                "start": 1065,
                "end": 1096
              },
              "expression": false,
              "start": 1055,
              "end": 1096
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1049,
            "end": 1096
          }
        ],
        "start": 897,
        "end": 1098
      },
      "abstract": false,
      "declare": false,
      "start": 889,
      "end": 1098
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1109,
        "end": 1111
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
                  "start": 1115,
                  "end": 1121
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 1124,
                  "end": 1130
                }
              ],
              "start": 1115,
              "end": 1130
            },
            "start": 1113,
            "end": 1130
          },
          "start": 1112,
          "end": 1130
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
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1149,
                  "end": 1150
                },
                "prefix": true,
                "start": 1142,
                "end": 1150
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "boolean",
                "raw": "\"boolean\"",
                "start": 1155,
                "end": 1164
              },
              "start": 1142,
              "end": 1164
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1176,
                    "end": 1177
                  },
                  "directive": null,
                  "start": 1176,
                  "end": 1178
                }
              ],
              "start": 1166,
              "end": 1194
            },
            "alternate": null,
            "start": 1138,
            "end": 1194
          }
        ],
        "start": 1132,
        "end": 1196
      },
      "expression": false,
      "start": 1100,
      "end": 1196
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1207,
        "end": 1209
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
                  "start": 1213,
                  "end": 1219
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 1222,
                  "end": 1228
                }
              ],
              "start": 1213,
              "end": 1228
            },
            "start": 1211,
            "end": 1228
          },
          "start": 1210,
          "end": 1228
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "WhileStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 1243,
              "end": 1247
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
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
                        "start": 1270,
                        "end": 1271
                      },
                      "prefix": true,
                      "start": 1263,
                      "end": 1271
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "boolean",
                      "raw": "\"boolean\"",
                      "start": 1276,
                      "end": 1285
                    },
                    "start": 1263,
                    "end": 1285
                  },
                  "consequent": {
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
                          "start": 1308,
                          "end": 1309
                        },
                        "start": 1301,
                        "end": 1310
                      }
                    ],
                    "start": 1287,
                    "end": 1330
                  },
                  "alternate": null,
                  "start": 1259,
                  "end": 1330
                }
              ],
              "start": 1249,
              "end": 1336
            },
            "start": 1236,
            "end": 1336
          }
        ],
        "start": 1230,
        "end": 1338
      },
      "expression": false,
      "start": 1198,
      "end": 1338
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 1349,
        "end": 1353
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1364,
                  "end": 1370
                },
                "start": 1361,
                "end": 1370
              },
              "start": 1358,
              "end": 1370
            },
            "start": 1356,
            "end": 1370
          },
          "start": 1354,
          "end": 1370
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1382,
                  "end": 1383
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1386,
                    "end": 1388
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1386,
                  "end": 1390
                },
                "definite": false,
                "start": 1382,
                "end": 1390
              }
            ],
            "declare": false,
            "start": 1378,
            "end": 1391
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 1403,
              "end": 1404
            },
            "start": 1396,
            "end": 1405
          }
        ],
        "start": 1372,
        "end": 1407
      },
      "expression": false,
      "start": 1340,
      "end": 1407
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "errorCallback",
            "optional": false,
            "typeAnnotation": null,
            "start": 1413,
            "end": 1426
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "error",
                "optional": false,
                "typeAnnotation": null,
                "start": 1435,
                "end": 1440
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "Error callback",
                  "raw": "\"Error callback\"",
                  "start": 1441,
                  "end": 1457
                }
              ],
              "optional": false,
              "start": 1435,
              "end": 1458
            },
            "id": null,
            "generator": false,
            "start": 1429,
            "end": 1458
          },
          "definite": false,
          "start": 1413,
          "end": 1458
        }
      ],
      "declare": false,
      "start": 1409,
      "end": 1459
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null,
          "start": 1461,
          "end": 1465
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 1472,
              "end": 1479
            },
            "id": null,
            "generator": false,
            "start": 1466,
            "end": 1479
          }
        ],
        "optional": false,
        "start": 1461,
        "end": 1480
      },
      "directive": null,
      "start": 1461,
      "end": 1481
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null,
          "start": 1482,
          "end": 1486
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "fail",
                "optional": false,
                "typeAnnotation": null,
                "start": 1493,
                "end": 1497
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1493,
              "end": 1499
            },
            "id": null,
            "generator": false,
            "start": 1487,
            "end": 1499
          }
        ],
        "optional": false,
        "start": 1482,
        "end": 1500
      },
      "directive": null,
      "start": 1482,
      "end": 1501
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null,
          "start": 1502,
          "end": 1506
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ThrowStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1525,
                      "end": 1530
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1521,
                    "end": 1532
                  },
                  "start": 1515,
                  "end": 1533
                }
              ],
              "start": 1513,
              "end": 1535
            },
            "id": null,
            "generator": false,
            "start": 1507,
            "end": 1535
          }
        ],
        "optional": false,
        "start": 1502,
        "end": 1536
      },
      "directive": null,
      "start": 1502,
      "end": 1536
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null,
          "start": 1537,
          "end": 1541
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "errorCallback",
            "optional": false,
            "typeAnnotation": null,
            "start": 1542,
            "end": 1555
          }
        ],
        "optional": false,
        "start": 1537,
        "end": 1556
      },
      "directive": null,
      "start": 1537,
      "end": 1557
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1557
}
```
