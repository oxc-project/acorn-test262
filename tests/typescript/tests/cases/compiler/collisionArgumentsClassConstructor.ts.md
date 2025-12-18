__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c1",
        "optional": false,
        "typeAnnotation": null,
        "start": 22,
        "end": 24
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
              "start": 31,
              "end": 42
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 46,
                      "end": 52
                    },
                    "start": 44,
                    "end": 52
                  },
                  "start": 43,
                  "end": 52
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arguments",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 57,
                    "end": 66
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 54,
                  "end": 66
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSAnyKeyword",
                                "start": 102,
                                "end": 105
                              },
                              "start": 102,
                              "end": 107
                            },
                            "start": 100,
                            "end": 107
                          },
                          "start": 91,
                          "end": 107
                        },
                        "init": null,
                        "definite": false,
                        "start": 91,
                        "end": 107
                      }
                    ],
                    "declare": false,
                    "start": 87,
                    "end": 108
                  }
                ],
                "start": 68,
                "end": 126
              },
              "expression": false,
              "start": 42,
              "end": 126
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 31,
            "end": 126
          }
        ],
        "start": 25,
        "end": 128
      },
      "abstract": false,
      "declare": false,
      "start": 16,
      "end": 128
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c12",
        "optional": false,
        "typeAnnotation": null,
        "start": 135,
        "end": 138
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
              "start": 145,
              "end": 156
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 168,
                      "end": 174
                    },
                    "start": 166,
                    "end": 174
                  },
                  "start": 157,
                  "end": 174
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "rest",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 179,
                    "end": 183
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 176,
                  "end": 183
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 208,
                          "end": 217
                        },
                        "init": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 220,
                          "end": 222
                        },
                        "definite": false,
                        "start": 208,
                        "end": 222
                      }
                    ],
                    "declare": false,
                    "start": 204,
                    "end": 223
                  }
                ],
                "start": 185,
                "end": 241
              },
              "expression": false,
              "start": 156,
              "end": 241
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 145,
            "end": 241
          }
        ],
        "start": 139,
        "end": 243
      },
      "abstract": false,
      "declare": false,
      "start": 129,
      "end": 243
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c1NoError",
        "optional": false,
        "typeAnnotation": null,
        "start": 250,
        "end": 259
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
              "start": 266,
              "end": 277
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 289,
                      "end": 295
                    },
                    "start": 287,
                    "end": 295
                  },
                  "start": 278,
                  "end": 295
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 323,
                          "end": 332
                        },
                        "init": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 335,
                          "end": 337
                        },
                        "definite": false,
                        "start": 323,
                        "end": 337
                      }
                    ],
                    "declare": false,
                    "start": 319,
                    "end": 338
                  }
                ],
                "start": 297,
                "end": 356
              },
              "expression": false,
              "start": 277,
              "end": 356
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 266,
            "end": 356
          }
        ],
        "start": 260,
        "end": 358
      },
      "abstract": false,
      "declare": false,
      "start": 244,
      "end": 358
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c2",
        "optional": false,
        "typeAnnotation": null,
        "start": 366,
        "end": 368
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
              "start": 375,
              "end": 386
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
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "restParameters",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 390,
                    "end": 404
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 387,
                  "end": 404
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 420,
                          "end": 429
                        },
                        "init": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 432,
                          "end": 434
                        },
                        "definite": false,
                        "start": 420,
                        "end": 434
                      }
                    ],
                    "declare": false,
                    "start": 416,
                    "end": 435
                  }
                ],
                "start": 406,
                "end": 453
              },
              "expression": false,
              "start": 386,
              "end": 453
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 375,
            "end": 453
          }
        ],
        "start": 369,
        "end": 455
      },
      "abstract": false,
      "declare": false,
      "start": 360,
      "end": 455
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c2NoError",
        "optional": false,
        "typeAnnotation": null,
        "start": 462,
        "end": 471
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
              "start": 478,
              "end": 489
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
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 506,
                          "end": 515
                        },
                        "init": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 518,
                          "end": 520
                        },
                        "definite": false,
                        "start": 506,
                        "end": 520
                      }
                    ],
                    "declare": false,
                    "start": 502,
                    "end": 521
                  }
                ],
                "start": 492,
                "end": 539
              },
              "expression": false,
              "start": 489,
              "end": 539
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 478,
            "end": 539
          }
        ],
        "start": 472,
        "end": 541
      },
      "abstract": false,
      "declare": false,
      "start": 456,
      "end": 541
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c3",
        "optional": false,
        "typeAnnotation": null,
        "start": 549,
        "end": 551
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
              "start": 558,
              "end": 569
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
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arguments",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 588,
                        "end": 594
                      },
                      "start": 586,
                      "end": 594
                    },
                    "start": 577,
                    "end": 594
                  },
                  "readonly": false,
                  "static": false,
                  "start": 570,
                  "end": 594
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "restParameters",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 599,
                    "end": 613
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 596,
                  "end": 613
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 650,
                          "end": 659
                        },
                        "init": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 662,
                          "end": 664
                        },
                        "definite": false,
                        "start": 650,
                        "end": 664
                      }
                    ],
                    "declare": false,
                    "start": 646,
                    "end": 665
                  }
                ],
                "start": 615,
                "end": 683
              },
              "expression": false,
              "start": 569,
              "end": 683
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 558,
            "end": 683
          }
        ],
        "start": 552,
        "end": 685
      },
      "abstract": false,
      "declare": false,
      "start": 543,
      "end": 685
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c3NoError",
        "optional": false,
        "typeAnnotation": null,
        "start": 692,
        "end": 701
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
              "start": 708,
              "end": 719
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
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arguments",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 738,
                        "end": 744
                      },
                      "start": 736,
                      "end": 744
                    },
                    "start": 727,
                    "end": 744
                  },
                  "readonly": false,
                  "static": false,
                  "start": 720,
                  "end": 744
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 772,
                          "end": 781
                        },
                        "init": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 784,
                          "end": 786
                        },
                        "definite": false,
                        "start": 772,
                        "end": 786
                      }
                    ],
                    "declare": false,
                    "start": 768,
                    "end": 787
                  }
                ],
                "start": 746,
                "end": 805
              },
              "expression": false,
              "start": 719,
              "end": 805
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 708,
            "end": 805
          }
        ],
        "start": 702,
        "end": 807
      },
      "abstract": false,
      "declare": false,
      "start": 686,
      "end": 807
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c4",
        "optional": false,
        "typeAnnotation": null,
        "start": 823,
        "end": 825
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
              "start": 832,
              "end": 843
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 847,
                      "end": 853
                    },
                    "start": 845,
                    "end": 853
                  },
                  "start": 844,
                  "end": 853
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arguments",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 858,
                    "end": 867
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 855,
                  "end": 867
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 843,
              "end": 869
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 832,
            "end": 869
          }
        ],
        "start": 826,
        "end": 897
      },
      "abstract": false,
      "declare": true,
      "start": 809,
      "end": 897
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c42",
        "optional": false,
        "typeAnnotation": null,
        "start": 912,
        "end": 915
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
              "start": 922,
              "end": 933
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 945,
                      "end": 951
                    },
                    "start": 943,
                    "end": 951
                  },
                  "start": 934,
                  "end": 951
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "rest",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 956,
                    "end": 960
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 953,
                  "end": 960
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 933,
              "end": 962
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 922,
            "end": 962
          }
        ],
        "start": 916,
        "end": 990
      },
      "abstract": false,
      "declare": true,
      "start": 898,
      "end": 990
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c4NoError",
        "optional": false,
        "typeAnnotation": null,
        "start": 1005,
        "end": 1014
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
              "start": 1021,
              "end": 1032
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1044,
                      "end": 1050
                    },
                    "start": 1042,
                    "end": 1050
                  },
                  "start": 1033,
                  "end": 1050
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 1032,
              "end": 1052
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1021,
            "end": 1052
          }
        ],
        "start": 1015,
        "end": 1067
      },
      "abstract": false,
      "declare": true,
      "start": 991,
      "end": 1067
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1075,
        "end": 1077
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
              "start": 1084,
              "end": 1095
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1099,
                      "end": 1105
                    },
                    "start": 1097,
                    "end": 1105
                  },
                  "start": 1096,
                  "end": 1105
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arguments",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1110,
                    "end": 1119
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 1107,
                  "end": 1119
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 1095,
              "end": 1121
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1084,
            "end": 1121
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 1149,
              "end": 1160
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1164,
                      "end": 1170
                    },
                    "start": 1162,
                    "end": 1170
                  },
                  "start": 1161,
                  "end": 1170
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arguments",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1175,
                    "end": 1184
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 1172,
                  "end": 1184
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 1160,
              "end": 1186
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1149,
            "end": 1186
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 1214,
              "end": 1225
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1229,
                      "end": 1232
                    },
                    "start": 1227,
                    "end": 1232
                  },
                  "start": 1226,
                  "end": 1232
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arguments",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1237,
                    "end": 1246
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 1234,
                  "end": 1246
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSAnyKeyword",
                                "start": 1282,
                                "end": 1285
                              },
                              "start": 1282,
                              "end": 1287
                            },
                            "start": 1280,
                            "end": 1287
                          },
                          "start": 1271,
                          "end": 1287
                        },
                        "init": null,
                        "definite": false,
                        "start": 1271,
                        "end": 1287
                      }
                    ],
                    "declare": false,
                    "start": 1267,
                    "end": 1288
                  }
                ],
                "start": 1248,
                "end": 1306
              },
              "expression": false,
              "start": 1225,
              "end": 1306
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1214,
            "end": 1306
          }
        ],
        "start": 1078,
        "end": 1308
      },
      "abstract": false,
      "declare": false,
      "start": 1069,
      "end": 1308
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c52",
        "optional": false,
        "typeAnnotation": null,
        "start": 1316,
        "end": 1319
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
              "start": 1326,
              "end": 1337
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1349,
                      "end": 1355
                    },
                    "start": 1347,
                    "end": 1355
                  },
                  "start": 1338,
                  "end": 1355
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "rest",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1360,
                    "end": 1364
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 1357,
                  "end": 1364
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 1337,
              "end": 1366
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1326,
            "end": 1366
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 1394,
              "end": 1405
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1417,
                      "end": 1423
                    },
                    "start": 1415,
                    "end": 1423
                  },
                  "start": 1406,
                  "end": 1423
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "rest",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1428,
                    "end": 1432
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 1425,
                  "end": 1432
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 1405,
              "end": 1434
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1394,
            "end": 1434
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 1462,
              "end": 1473
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1485,
                      "end": 1488
                    },
                    "start": 1483,
                    "end": 1488
                  },
                  "start": 1474,
                  "end": 1488
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "rest",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1493,
                    "end": 1497
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 1490,
                  "end": 1497
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 1533,
                              "end": 1536
                            },
                            "start": 1531,
                            "end": 1536
                          },
                          "start": 1522,
                          "end": 1536
                        },
                        "init": null,
                        "definite": false,
                        "start": 1522,
                        "end": 1536
                      }
                    ],
                    "declare": false,
                    "start": 1518,
                    "end": 1537
                  }
                ],
                "start": 1499,
                "end": 1555
              },
              "expression": false,
              "start": 1473,
              "end": 1555
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1462,
            "end": 1555
          }
        ],
        "start": 1320,
        "end": 1557
      },
      "abstract": false,
      "declare": false,
      "start": 1310,
      "end": 1557
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c5NoError",
        "optional": false,
        "typeAnnotation": null,
        "start": 1565,
        "end": 1574
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
              "start": 1581,
              "end": 1592
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1604,
                      "end": 1610
                    },
                    "start": 1602,
                    "end": 1610
                  },
                  "start": 1593,
                  "end": 1610
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 1592,
              "end": 1612
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1581,
            "end": 1612
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 1629,
              "end": 1640
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1652,
                      "end": 1658
                    },
                    "start": 1650,
                    "end": 1658
                  },
                  "start": 1641,
                  "end": 1658
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 1640,
              "end": 1660
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1629,
            "end": 1660
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 1677,
              "end": 1688
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1700,
                      "end": 1703
                    },
                    "start": 1698,
                    "end": 1703
                  },
                  "start": 1689,
                  "end": 1703
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 1742,
                              "end": 1745
                            },
                            "start": 1740,
                            "end": 1745
                          },
                          "start": 1731,
                          "end": 1745
                        },
                        "init": null,
                        "definite": false,
                        "start": 1731,
                        "end": 1745
                      }
                    ],
                    "declare": false,
                    "start": 1727,
                    "end": 1746
                  }
                ],
                "start": 1705,
                "end": 1764
              },
              "expression": false,
              "start": 1688,
              "end": 1764
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1677,
            "end": 1764
          }
        ],
        "start": 1575,
        "end": 1766
      },
      "abstract": false,
      "declare": false,
      "start": 1559,
      "end": 1766
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1782,
        "end": 1784
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
              "start": 1791,
              "end": 1802
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1806,
                      "end": 1812
                    },
                    "start": 1804,
                    "end": 1812
                  },
                  "start": 1803,
                  "end": 1812
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arguments",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1817,
                    "end": 1826
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 1814,
                  "end": 1826
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 1802,
              "end": 1828
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1791,
            "end": 1828
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 1856,
              "end": 1867
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1871,
                      "end": 1877
                    },
                    "start": 1869,
                    "end": 1877
                  },
                  "start": 1868,
                  "end": 1877
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arguments",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1882,
                    "end": 1891
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 1879,
                  "end": 1891
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 1867,
              "end": 1893
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1856,
            "end": 1893
          }
        ],
        "start": 1785,
        "end": 1918
      },
      "abstract": false,
      "declare": true,
      "start": 1768,
      "end": 1918
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c62",
        "optional": false,
        "typeAnnotation": null,
        "start": 1933,
        "end": 1936
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
              "start": 1943,
              "end": 1954
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1966,
                      "end": 1972
                    },
                    "start": 1964,
                    "end": 1972
                  },
                  "start": 1955,
                  "end": 1972
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "rest",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1977,
                    "end": 1981
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 1974,
                  "end": 1981
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 1954,
              "end": 1983
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1943,
            "end": 1983
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 2011,
              "end": 2022
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2034,
                      "end": 2040
                    },
                    "start": 2032,
                    "end": 2040
                  },
                  "start": 2023,
                  "end": 2040
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "rest",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2045,
                    "end": 2049
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 2042,
                  "end": 2049
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 2022,
              "end": 2051
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2011,
            "end": 2051
          }
        ],
        "start": 1937,
        "end": 2076
      },
      "abstract": false,
      "declare": true,
      "start": 1919,
      "end": 2076
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c6NoError",
        "optional": false,
        "typeAnnotation": null,
        "start": 2092,
        "end": 2101
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
              "start": 2108,
              "end": 2119
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2131,
                      "end": 2137
                    },
                    "start": 2129,
                    "end": 2137
                  },
                  "start": 2120,
                  "end": 2137
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 2119,
              "end": 2139
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2108,
            "end": 2139
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 2156,
              "end": 2167
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2179,
                      "end": 2185
                    },
                    "start": 2177,
                    "end": 2185
                  },
                  "start": 2168,
                  "end": 2185
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 2167,
              "end": 2187
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2156,
            "end": 2187
          }
        ],
        "start": 2102,
        "end": 2201
      },
      "abstract": false,
      "declare": true,
      "start": 2078,
      "end": 2201
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 16,
  "end": 2201
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 16,
    "end": 21,
    "range": [
      16,
      21
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 22,
    "end": 24,
    "range": [
      22,
      24
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 31,
    "end": 42,
    "range": [
      31,
      42
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 46,
    "end": 52,
    "range": [
      46,
      52
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 52,
    "end": 53,
    "range": [
      52,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 54,
    "end": 57,
    "range": [
      54,
      57
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 57,
    "end": 66,
    "range": [
      57,
      66
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 87,
    "end": 90,
    "range": [
      87,
      90
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 91,
    "end": 100,
    "range": [
      91,
      100
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 102,
    "end": 105,
    "range": [
      102,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 129,
    "end": 134,
    "range": [
      129,
      134
    ]
  },
  {
    "type": "Identifier",
    "value": "c12",
    "start": 135,
    "end": 138,
    "range": [
      135,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 145,
    "end": 156,
    "range": [
      145,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 157,
    "end": 166,
    "range": [
      157,
      166
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 166,
    "end": 167,
    "range": [
      166,
      167
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 168,
    "end": 174,
    "range": [
      168,
      174
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 176,
    "end": 179,
    "range": [
      176,
      179
    ]
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 179,
    "end": 183,
    "range": [
      179,
      183
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 183,
    "end": 184,
    "range": [
      183,
      184
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 185,
    "end": 186,
    "range": [
      185,
      186
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 204,
    "end": 207,
    "range": [
      204,
      207
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 208,
    "end": 217,
    "range": [
      208,
      217
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 218,
    "end": 219,
    "range": [
      218,
      219
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 220,
    "end": 222,
    "range": [
      220,
      222
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 222,
    "end": 223,
    "range": [
      222,
      223
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 242,
    "end": 243,
    "range": [
      242,
      243
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 244,
    "end": 249,
    "range": [
      244,
      249
    ]
  },
  {
    "type": "Identifier",
    "value": "c1NoError",
    "start": 250,
    "end": 259,
    "range": [
      250,
      259
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 260,
    "end": 261,
    "range": [
      260,
      261
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 266,
    "end": 277,
    "range": [
      266,
      277
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 277,
    "end": 278,
    "range": [
      277,
      278
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 278,
    "end": 287,
    "range": [
      278,
      287
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 289,
    "end": 295,
    "range": [
      289,
      295
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 295,
    "end": 296,
    "range": [
      295,
      296
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 297,
    "end": 298,
    "range": [
      297,
      298
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 319,
    "end": 322,
    "range": [
      319,
      322
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 323,
    "end": 332,
    "range": [
      323,
      332
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 333,
    "end": 334,
    "range": [
      333,
      334
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 335,
    "end": 337,
    "range": [
      335,
      337
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 337,
    "end": 338,
    "range": [
      337,
      338
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 355,
    "end": 356,
    "range": [
      355,
      356
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 357,
    "end": 358,
    "range": [
      357,
      358
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 360,
    "end": 365,
    "range": [
      360,
      365
    ]
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 366,
    "end": 368,
    "range": [
      366,
      368
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 369,
    "end": 370,
    "range": [
      369,
      370
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 375,
    "end": 386,
    "range": [
      375,
      386
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 386,
    "end": 387,
    "range": [
      386,
      387
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 387,
    "end": 390,
    "range": [
      387,
      390
    ]
  },
  {
    "type": "Identifier",
    "value": "restParameters",
    "start": 390,
    "end": 404,
    "range": [
      390,
      404
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 404,
    "end": 405,
    "range": [
      404,
      405
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 406,
    "end": 407,
    "range": [
      406,
      407
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 416,
    "end": 419,
    "range": [
      416,
      419
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 420,
    "end": 429,
    "range": [
      420,
      429
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 430,
    "end": 431,
    "range": [
      430,
      431
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 432,
    "end": 434,
    "range": [
      432,
      434
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 434,
    "end": 435,
    "range": [
      434,
      435
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 452,
    "end": 453,
    "range": [
      452,
      453
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 454,
    "end": 455,
    "range": [
      454,
      455
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 456,
    "end": 461,
    "range": [
      456,
      461
    ]
  },
  {
    "type": "Identifier",
    "value": "c2NoError",
    "start": 462,
    "end": 471,
    "range": [
      462,
      471
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 472,
    "end": 473,
    "range": [
      472,
      473
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 478,
    "end": 489,
    "range": [
      478,
      489
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 489,
    "end": 490,
    "range": [
      489,
      490
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 490,
    "end": 491,
    "range": [
      490,
      491
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 492,
    "end": 493,
    "range": [
      492,
      493
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 502,
    "end": 505,
    "range": [
      502,
      505
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 506,
    "end": 515,
    "range": [
      506,
      515
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 516,
    "end": 517,
    "range": [
      516,
      517
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 518,
    "end": 520,
    "range": [
      518,
      520
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 520,
    "end": 521,
    "range": [
      520,
      521
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 538,
    "end": 539,
    "range": [
      538,
      539
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 540,
    "end": 541,
    "range": [
      540,
      541
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 543,
    "end": 548,
    "range": [
      543,
      548
    ]
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 549,
    "end": 551,
    "range": [
      549,
      551
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 552,
    "end": 553,
    "range": [
      552,
      553
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 558,
    "end": 569,
    "range": [
      558,
      569
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 569,
    "end": 570,
    "range": [
      569,
      570
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 570,
    "end": 576,
    "range": [
      570,
      576
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 577,
    "end": 586,
    "range": [
      577,
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
    "value": "number",
    "start": 588,
    "end": 594,
    "range": [
      588,
      594
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 594,
    "end": 595,
    "range": [
      594,
      595
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 596,
    "end": 599,
    "range": [
      596,
      599
    ]
  },
  {
    "type": "Identifier",
    "value": "restParameters",
    "start": 599,
    "end": 613,
    "range": [
      599,
      613
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 613,
    "end": 614,
    "range": [
      613,
      614
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 615,
    "end": 616,
    "range": [
      615,
      616
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 646,
    "end": 649,
    "range": [
      646,
      649
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 650,
    "end": 659,
    "range": [
      650,
      659
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 660,
    "end": 661,
    "range": [
      660,
      661
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 662,
    "end": 664,
    "range": [
      662,
      664
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 664,
    "end": 665,
    "range": [
      664,
      665
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 682,
    "end": 683,
    "range": [
      682,
      683
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 684,
    "end": 685,
    "range": [
      684,
      685
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 686,
    "end": 691,
    "range": [
      686,
      691
    ]
  },
  {
    "type": "Identifier",
    "value": "c3NoError",
    "start": 692,
    "end": 701,
    "range": [
      692,
      701
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 702,
    "end": 703,
    "range": [
      702,
      703
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 708,
    "end": 719,
    "range": [
      708,
      719
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 719,
    "end": 720,
    "range": [
      719,
      720
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 720,
    "end": 726,
    "range": [
      720,
      726
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 727,
    "end": 736,
    "range": [
      727,
      736
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 736,
    "end": 737,
    "range": [
      736,
      737
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 738,
    "end": 744,
    "range": [
      738,
      744
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 744,
    "end": 745,
    "range": [
      744,
      745
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 746,
    "end": 747,
    "range": [
      746,
      747
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 768,
    "end": 771,
    "range": [
      768,
      771
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 772,
    "end": 781,
    "range": [
      772,
      781
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 782,
    "end": 783,
    "range": [
      782,
      783
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 784,
    "end": 786,
    "range": [
      784,
      786
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 786,
    "end": 787,
    "range": [
      786,
      787
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 804,
    "end": 805,
    "range": [
      804,
      805
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 806,
    "end": 807,
    "range": [
      806,
      807
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 809,
    "end": 816,
    "range": [
      809,
      816
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 817,
    "end": 822,
    "range": [
      817,
      822
    ]
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 823,
    "end": 825,
    "range": [
      823,
      825
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 826,
    "end": 827,
    "range": [
      826,
      827
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 832,
    "end": 843,
    "range": [
      832,
      843
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 843,
    "end": 844,
    "range": [
      843,
      844
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 844,
    "end": 845,
    "range": [
      844,
      845
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 845,
    "end": 846,
    "range": [
      845,
      846
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 847,
    "end": 853,
    "range": [
      847,
      853
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 853,
    "end": 854,
    "range": [
      853,
      854
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 855,
    "end": 858,
    "range": [
      855,
      858
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 858,
    "end": 867,
    "range": [
      858,
      867
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 867,
    "end": 868,
    "range": [
      867,
      868
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 868,
    "end": 869,
    "range": [
      868,
      869
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 896,
    "end": 897,
    "range": [
      896,
      897
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 898,
    "end": 905,
    "range": [
      898,
      905
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 906,
    "end": 911,
    "range": [
      906,
      911
    ]
  },
  {
    "type": "Identifier",
    "value": "c42",
    "start": 912,
    "end": 915,
    "range": [
      912,
      915
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 916,
    "end": 917,
    "range": [
      916,
      917
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 922,
    "end": 933,
    "range": [
      922,
      933
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 933,
    "end": 934,
    "range": [
      933,
      934
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 934,
    "end": 943,
    "range": [
      934,
      943
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 943,
    "end": 944,
    "range": [
      943,
      944
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 945,
    "end": 951,
    "range": [
      945,
      951
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 951,
    "end": 952,
    "range": [
      951,
      952
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 953,
    "end": 956,
    "range": [
      953,
      956
    ]
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 956,
    "end": 960,
    "range": [
      956,
      960
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 960,
    "end": 961,
    "range": [
      960,
      961
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 961,
    "end": 962,
    "range": [
      961,
      962
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 989,
    "end": 990,
    "range": [
      989,
      990
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 991,
    "end": 998,
    "range": [
      991,
      998
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 999,
    "end": 1004,
    "range": [
      999,
      1004
    ]
  },
  {
    "type": "Identifier",
    "value": "c4NoError",
    "start": 1005,
    "end": 1014,
    "range": [
      1005,
      1014
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1015,
    "end": 1016,
    "range": [
      1015,
      1016
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1021,
    "end": 1032,
    "range": [
      1021,
      1032
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1032,
    "end": 1033,
    "range": [
      1032,
      1033
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1033,
    "end": 1042,
    "range": [
      1033,
      1042
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
    "type": "Identifier",
    "value": "number",
    "start": 1044,
    "end": 1050,
    "range": [
      1044,
      1050
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1050,
    "end": 1051,
    "range": [
      1050,
      1051
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1051,
    "end": 1052,
    "range": [
      1051,
      1052
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1066,
    "end": 1067,
    "range": [
      1066,
      1067
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1069,
    "end": 1074,
    "range": [
      1069,
      1074
    ]
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 1075,
    "end": 1077,
    "range": [
      1075,
      1077
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1078,
    "end": 1079,
    "range": [
      1078,
      1079
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1084,
    "end": 1095,
    "range": [
      1084,
      1095
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1095,
    "end": 1096,
    "range": [
      1095,
      1096
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1096,
    "end": 1097,
    "range": [
      1096,
      1097
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1097,
    "end": 1098,
    "range": [
      1097,
      1098
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1099,
    "end": 1105,
    "range": [
      1099,
      1105
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1105,
    "end": 1106,
    "range": [
      1105,
      1106
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1107,
    "end": 1110,
    "range": [
      1107,
      1110
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1110,
    "end": 1119,
    "range": [
      1110,
      1119
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1119,
    "end": 1120,
    "range": [
      1119,
      1120
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1120,
    "end": 1121,
    "range": [
      1120,
      1121
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1149,
    "end": 1160,
    "range": [
      1149,
      1160
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1160,
    "end": 1161,
    "range": [
      1160,
      1161
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1161,
    "end": 1162,
    "range": [
      1161,
      1162
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1162,
    "end": 1163,
    "range": [
      1162,
      1163
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1164,
    "end": 1170,
    "range": [
      1164,
      1170
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1170,
    "end": 1171,
    "range": [
      1170,
      1171
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1172,
    "end": 1175,
    "range": [
      1172,
      1175
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1175,
    "end": 1184,
    "range": [
      1175,
      1184
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1184,
    "end": 1185,
    "range": [
      1184,
      1185
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1185,
    "end": 1186,
    "range": [
      1185,
      1186
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1214,
    "end": 1225,
    "range": [
      1214,
      1225
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1225,
    "end": 1226,
    "range": [
      1225,
      1226
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1226,
    "end": 1227,
    "range": [
      1226,
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
    "type": "Identifier",
    "value": "any",
    "start": 1229,
    "end": 1232,
    "range": [
      1229,
      1232
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1232,
    "end": 1233,
    "range": [
      1232,
      1233
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1234,
    "end": 1237,
    "range": [
      1234,
      1237
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1237,
    "end": 1246,
    "range": [
      1237,
      1246
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1246,
    "end": 1247,
    "range": [
      1246,
      1247
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1248,
    "end": 1249,
    "range": [
      1248,
      1249
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1267,
    "end": 1270,
    "range": [
      1267,
      1270
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1271,
    "end": 1280,
    "range": [
      1271,
      1280
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1280,
    "end": 1281,
    "range": [
      1280,
      1281
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1282,
    "end": 1285,
    "range": [
      1282,
      1285
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1285,
    "end": 1286,
    "range": [
      1285,
      1286
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1286,
    "end": 1287,
    "range": [
      1286,
      1287
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1287,
    "end": 1288,
    "range": [
      1287,
      1288
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1305,
    "end": 1306,
    "range": [
      1305,
      1306
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1307,
    "end": 1308,
    "range": [
      1307,
      1308
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1310,
    "end": 1315,
    "range": [
      1310,
      1315
    ]
  },
  {
    "type": "Identifier",
    "value": "c52",
    "start": 1316,
    "end": 1319,
    "range": [
      1316,
      1319
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1320,
    "end": 1321,
    "range": [
      1320,
      1321
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1326,
    "end": 1337,
    "range": [
      1326,
      1337
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1337,
    "end": 1338,
    "range": [
      1337,
      1338
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1338,
    "end": 1347,
    "range": [
      1338,
      1347
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1347,
    "end": 1348,
    "range": [
      1347,
      1348
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1349,
    "end": 1355,
    "range": [
      1349,
      1355
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1355,
    "end": 1356,
    "range": [
      1355,
      1356
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1357,
    "end": 1360,
    "range": [
      1357,
      1360
    ]
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 1360,
    "end": 1364,
    "range": [
      1360,
      1364
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1364,
    "end": 1365,
    "range": [
      1364,
      1365
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1365,
    "end": 1366,
    "range": [
      1365,
      1366
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1394,
    "end": 1405,
    "range": [
      1394,
      1405
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1405,
    "end": 1406,
    "range": [
      1405,
      1406
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1406,
    "end": 1415,
    "range": [
      1406,
      1415
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1415,
    "end": 1416,
    "range": [
      1415,
      1416
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1417,
    "end": 1423,
    "range": [
      1417,
      1423
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1423,
    "end": 1424,
    "range": [
      1423,
      1424
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1425,
    "end": 1428,
    "range": [
      1425,
      1428
    ]
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 1428,
    "end": 1432,
    "range": [
      1428,
      1432
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1432,
    "end": 1433,
    "range": [
      1432,
      1433
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1433,
    "end": 1434,
    "range": [
      1433,
      1434
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1462,
    "end": 1473,
    "range": [
      1462,
      1473
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1473,
    "end": 1474,
    "range": [
      1473,
      1474
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1474,
    "end": 1483,
    "range": [
      1474,
      1483
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1483,
    "end": 1484,
    "range": [
      1483,
      1484
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1485,
    "end": 1488,
    "range": [
      1485,
      1488
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1488,
    "end": 1489,
    "range": [
      1488,
      1489
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1490,
    "end": 1493,
    "range": [
      1490,
      1493
    ]
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 1493,
    "end": 1497,
    "range": [
      1493,
      1497
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1497,
    "end": 1498,
    "range": [
      1497,
      1498
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1499,
    "end": 1500,
    "range": [
      1499,
      1500
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1518,
    "end": 1521,
    "range": [
      1518,
      1521
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1522,
    "end": 1531,
    "range": [
      1522,
      1531
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1531,
    "end": 1532,
    "range": [
      1531,
      1532
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1533,
    "end": 1536,
    "range": [
      1533,
      1536
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1536,
    "end": 1537,
    "range": [
      1536,
      1537
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1554,
    "end": 1555,
    "range": [
      1554,
      1555
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1556,
    "end": 1557,
    "range": [
      1556,
      1557
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1559,
    "end": 1564,
    "range": [
      1559,
      1564
    ]
  },
  {
    "type": "Identifier",
    "value": "c5NoError",
    "start": 1565,
    "end": 1574,
    "range": [
      1565,
      1574
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1575,
    "end": 1576,
    "range": [
      1575,
      1576
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1581,
    "end": 1592,
    "range": [
      1581,
      1592
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1592,
    "end": 1593,
    "range": [
      1592,
      1593
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1593,
    "end": 1602,
    "range": [
      1593,
      1602
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1602,
    "end": 1603,
    "range": [
      1602,
      1603
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1604,
    "end": 1610,
    "range": [
      1604,
      1610
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1610,
    "end": 1611,
    "range": [
      1610,
      1611
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1611,
    "end": 1612,
    "range": [
      1611,
      1612
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1629,
    "end": 1640,
    "range": [
      1629,
      1640
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1640,
    "end": 1641,
    "range": [
      1640,
      1641
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1641,
    "end": 1650,
    "range": [
      1641,
      1650
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1650,
    "end": 1651,
    "range": [
      1650,
      1651
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1652,
    "end": 1658,
    "range": [
      1652,
      1658
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1658,
    "end": 1659,
    "range": [
      1658,
      1659
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1659,
    "end": 1660,
    "range": [
      1659,
      1660
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1677,
    "end": 1688,
    "range": [
      1677,
      1688
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1688,
    "end": 1689,
    "range": [
      1688,
      1689
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1689,
    "end": 1698,
    "range": [
      1689,
      1698
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1698,
    "end": 1699,
    "range": [
      1698,
      1699
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1700,
    "end": 1703,
    "range": [
      1700,
      1703
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1703,
    "end": 1704,
    "range": [
      1703,
      1704
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1705,
    "end": 1706,
    "range": [
      1705,
      1706
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1727,
    "end": 1730,
    "range": [
      1727,
      1730
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1731,
    "end": 1740,
    "range": [
      1731,
      1740
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1740,
    "end": 1741,
    "range": [
      1740,
      1741
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1742,
    "end": 1745,
    "range": [
      1742,
      1745
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1745,
    "end": 1746,
    "range": [
      1745,
      1746
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1763,
    "end": 1764,
    "range": [
      1763,
      1764
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1765,
    "end": 1766,
    "range": [
      1765,
      1766
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1768,
    "end": 1775,
    "range": [
      1768,
      1775
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1776,
    "end": 1781,
    "range": [
      1776,
      1781
    ]
  },
  {
    "type": "Identifier",
    "value": "c6",
    "start": 1782,
    "end": 1784,
    "range": [
      1782,
      1784
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1785,
    "end": 1786,
    "range": [
      1785,
      1786
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1791,
    "end": 1802,
    "range": [
      1791,
      1802
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1802,
    "end": 1803,
    "range": [
      1802,
      1803
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1803,
    "end": 1804,
    "range": [
      1803,
      1804
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1804,
    "end": 1805,
    "range": [
      1804,
      1805
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1806,
    "end": 1812,
    "range": [
      1806,
      1812
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1812,
    "end": 1813,
    "range": [
      1812,
      1813
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1814,
    "end": 1817,
    "range": [
      1814,
      1817
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1817,
    "end": 1826,
    "range": [
      1817,
      1826
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1826,
    "end": 1827,
    "range": [
      1826,
      1827
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1827,
    "end": 1828,
    "range": [
      1827,
      1828
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1856,
    "end": 1867,
    "range": [
      1856,
      1867
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1867,
    "end": 1868,
    "range": [
      1867,
      1868
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1868,
    "end": 1869,
    "range": [
      1868,
      1869
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1869,
    "end": 1870,
    "range": [
      1869,
      1870
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1871,
    "end": 1877,
    "range": [
      1871,
      1877
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1877,
    "end": 1878,
    "range": [
      1877,
      1878
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1879,
    "end": 1882,
    "range": [
      1879,
      1882
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1882,
    "end": 1891,
    "range": [
      1882,
      1891
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1891,
    "end": 1892,
    "range": [
      1891,
      1892
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1892,
    "end": 1893,
    "range": [
      1892,
      1893
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1917,
    "end": 1918,
    "range": [
      1917,
      1918
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1919,
    "end": 1926,
    "range": [
      1919,
      1926
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1927,
    "end": 1932,
    "range": [
      1927,
      1932
    ]
  },
  {
    "type": "Identifier",
    "value": "c62",
    "start": 1933,
    "end": 1936,
    "range": [
      1933,
      1936
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1937,
    "end": 1938,
    "range": [
      1937,
      1938
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1943,
    "end": 1954,
    "range": [
      1943,
      1954
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1954,
    "end": 1955,
    "range": [
      1954,
      1955
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1955,
    "end": 1964,
    "range": [
      1955,
      1964
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1964,
    "end": 1965,
    "range": [
      1964,
      1965
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1966,
    "end": 1972,
    "range": [
      1966,
      1972
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1972,
    "end": 1973,
    "range": [
      1972,
      1973
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1974,
    "end": 1977,
    "range": [
      1974,
      1977
    ]
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 1977,
    "end": 1981,
    "range": [
      1977,
      1981
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1981,
    "end": 1982,
    "range": [
      1981,
      1982
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1982,
    "end": 1983,
    "range": [
      1982,
      1983
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2011,
    "end": 2022,
    "range": [
      2011,
      2022
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2022,
    "end": 2023,
    "range": [
      2022,
      2023
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 2023,
    "end": 2032,
    "range": [
      2023,
      2032
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2032,
    "end": 2033,
    "range": [
      2032,
      2033
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2034,
    "end": 2040,
    "range": [
      2034,
      2040
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2040,
    "end": 2041,
    "range": [
      2040,
      2041
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2042,
    "end": 2045,
    "range": [
      2042,
      2045
    ]
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 2045,
    "end": 2049,
    "range": [
      2045,
      2049
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2049,
    "end": 2050,
    "range": [
      2049,
      2050
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2050,
    "end": 2051,
    "range": [
      2050,
      2051
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2075,
    "end": 2076,
    "range": [
      2075,
      2076
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2078,
    "end": 2085,
    "range": [
      2078,
      2085
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2086,
    "end": 2091,
    "range": [
      2086,
      2091
    ]
  },
  {
    "type": "Identifier",
    "value": "c6NoError",
    "start": 2092,
    "end": 2101,
    "range": [
      2092,
      2101
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2102,
    "end": 2103,
    "range": [
      2102,
      2103
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2108,
    "end": 2119,
    "range": [
      2108,
      2119
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2119,
    "end": 2120,
    "range": [
      2119,
      2120
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 2120,
    "end": 2129,
    "range": [
      2120,
      2129
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2129,
    "end": 2130,
    "range": [
      2129,
      2130
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2131,
    "end": 2137,
    "range": [
      2131,
      2137
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2137,
    "end": 2138,
    "range": [
      2137,
      2138
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2138,
    "end": 2139,
    "range": [
      2138,
      2139
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2156,
    "end": 2167,
    "range": [
      2156,
      2167
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2167,
    "end": 2168,
    "range": [
      2167,
      2168
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 2168,
    "end": 2177,
    "range": [
      2168,
      2177
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2177,
    "end": 2178,
    "range": [
      2177,
      2178
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2179,
    "end": 2185,
    "range": [
      2179,
      2185
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2185,
    "end": 2186,
    "range": [
      2185,
      2186
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2186,
    "end": 2187,
    "range": [
      2186,
      2187
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2200,
    "end": 2201,
    "range": [
      2200,
      2201
    ]
  }
]
```
