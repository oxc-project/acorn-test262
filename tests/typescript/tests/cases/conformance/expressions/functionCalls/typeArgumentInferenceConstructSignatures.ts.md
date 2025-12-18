__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NoParams",
        "optional": false,
        "typeAnnotation": null,
        "start": 45,
        "end": 53
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 65,
                    "end": 66
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 65,
                  "end": 66
                }
              ],
              "start": 64,
              "end": 67
            },
            "params": [],
            "returnType": null,
            "start": 60,
            "end": 70
          }
        ],
        "start": 54,
        "end": 72
      },
      "declare": false,
      "start": 35,
      "end": 72
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "noParams",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NoParams",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 87,
                  "end": 95
                },
                "typeArguments": null,
                "start": 87,
                "end": 95
              },
              "start": 85,
              "end": 95
            },
            "start": 77,
            "end": 95
          },
          "init": null,
          "definite": false,
          "start": 77,
          "end": 95
        }
      ],
      "declare": false,
      "start": 73,
      "end": 96
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "noParams",
          "optional": false,
          "typeAnnotation": null,
          "start": 101,
          "end": 109
        },
        "typeArguments": null,
        "arguments": [],
        "start": 97,
        "end": 111
      },
      "directive": null,
      "start": 97,
      "end": 112
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "noParams",
          "optional": false,
          "typeAnnotation": null,
          "start": 117,
          "end": 125
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 126,
              "end": 132
            }
          ],
          "start": 125,
          "end": 133
        },
        "arguments": [],
        "start": 113,
        "end": 135
      },
      "directive": null,
      "start": 113,
      "end": 136
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "noParams",
          "optional": false,
          "typeAnnotation": null,
          "start": 141,
          "end": 149
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 150,
              "end": 152
            }
          ],
          "start": 149,
          "end": 153
        },
        "arguments": [],
        "start": 137,
        "end": 155
      },
      "directive": null,
      "start": 137,
      "end": 156
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "noGenericParams",
        "optional": false,
        "typeAnnotation": null,
        "start": 233,
        "end": 248
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 260,
                    "end": 261
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 260,
                  "end": 261
                }
              ],
              "start": 259,
              "end": 262
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 266,
                    "end": 272
                  },
                  "start": 264,
                  "end": 272
                },
                "start": 263,
                "end": 272
              }
            ],
            "returnType": null,
            "start": 255,
            "end": 274
          }
        ],
        "start": 249,
        "end": 276
      },
      "declare": false,
      "start": 223,
      "end": 276
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "noGenericParams",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "noGenericParams",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 298,
                  "end": 313
                },
                "typeArguments": null,
                "start": 298,
                "end": 313
              },
              "start": 296,
              "end": 313
            },
            "start": 281,
            "end": 313
          },
          "init": null,
          "definite": false,
          "start": 281,
          "end": 313
        }
      ],
      "declare": false,
      "start": 277,
      "end": 314
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "noGenericParams",
          "optional": false,
          "typeAnnotation": null,
          "start": 319,
          "end": 334
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 335,
            "end": 337
          }
        ],
        "start": 315,
        "end": 338
      },
      "directive": null,
      "start": 315,
      "end": 339
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "noGenericParams",
          "optional": false,
          "typeAnnotation": null,
          "start": 344,
          "end": 359
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 360,
              "end": 366
            }
          ],
          "start": 359,
          "end": 367
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 368,
            "end": 370
          }
        ],
        "start": 340,
        "end": 371
      },
      "directive": null,
      "start": 340,
      "end": 372
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "noGenericParams",
          "optional": false,
          "typeAnnotation": null,
          "start": 377,
          "end": 392
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 393,
              "end": 395
            }
          ],
          "start": 392,
          "end": 396
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 397,
            "end": 399
          }
        ],
        "start": 373,
        "end": 400
      },
      "directive": null,
      "start": 373,
      "end": 401
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "someGenerics1",
        "optional": false,
        "typeAnnotation": null,
        "start": 506,
        "end": 519
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 531,
                    "end": 532
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 531,
                  "end": 532
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 534,
                    "end": 535
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 534,
                  "end": 535
                }
              ],
              "start": 530,
              "end": 536
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
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
                      "start": 540,
                      "end": 541
                    },
                    "typeArguments": null,
                    "start": 540,
                    "end": 541
                  },
                  "start": 538,
                  "end": 541
                },
                "start": 537,
                "end": 541
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 546,
                    "end": 552
                  },
                  "start": 544,
                  "end": 552
                },
                "start": 543,
                "end": 552
              }
            ],
            "returnType": null,
            "start": 526,
            "end": 554
          }
        ],
        "start": 520,
        "end": 556
      },
      "declare": false,
      "start": 496,
      "end": 556
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "someGenerics1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "someGenerics1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 576,
                  "end": 589
                },
                "typeArguments": null,
                "start": 576,
                "end": 589
              },
              "start": 574,
              "end": 589
            },
            "start": 561,
            "end": 589
          },
          "init": null,
          "definite": false,
          "start": 561,
          "end": 589
        }
      ],
      "declare": false,
      "start": 557,
      "end": 590
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics1",
          "optional": false,
          "typeAnnotation": null,
          "start": 595,
          "end": 608
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 609,
            "end": 610
          },
          {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 612,
            "end": 613
          }
        ],
        "start": 591,
        "end": 614
      },
      "directive": null,
      "start": 591,
      "end": 615
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics1",
          "optional": false,
          "typeAnnotation": null,
          "start": 620,
          "end": 633
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 634,
              "end": 640
            },
            {
              "type": "TSNumberKeyword",
              "start": 642,
              "end": 648
            }
          ],
          "start": 633,
          "end": 649
        },
        "arguments": [
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 650,
            "end": 651
          },
          {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 653,
            "end": 654
          }
        ],
        "start": 616,
        "end": 655
      },
      "directive": null,
      "start": 616,
      "end": 656
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics1",
          "optional": false,
          "typeAnnotation": null,
          "start": 670,
          "end": 683
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 684,
              "end": 690
            },
            {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 692,
              "end": 694
            }
          ],
          "start": 683,
          "end": 695
        },
        "arguments": [
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 696,
            "end": 697
          },
          {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 699,
            "end": 700
          }
        ],
        "start": 666,
        "end": 701
      },
      "directive": null,
      "start": 666,
      "end": 702
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "someGenerics2a",
        "optional": false,
        "typeAnnotation": null,
        "start": 803,
        "end": 817
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 829,
                    "end": 830
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 829,
                  "end": 830
                }
              ],
              "start": 828,
              "end": 831
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
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
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 839,
                              "end": 840
                            },
                            "typeArguments": null,
                            "start": 839,
                            "end": 840
                          },
                          "start": 837,
                          "end": 840
                        },
                        "start": 836,
                        "end": 840
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 845,
                        "end": 849
                      },
                      "start": 842,
                      "end": 849
                    },
                    "start": 835,
                    "end": 849
                  },
                  "start": 833,
                  "end": 849
                },
                "start": 832,
                "end": 849
              }
            ],
            "returnType": null,
            "start": 824,
            "end": 851
          }
        ],
        "start": 818,
        "end": 853
      },
      "declare": false,
      "start": 793,
      "end": 853
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "someGenerics2a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "someGenerics2a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 874,
                  "end": 888
                },
                "typeArguments": null,
                "start": 874,
                "end": 888
              },
              "start": 872,
              "end": 888
            },
            "start": 858,
            "end": 888
          },
          "init": null,
          "definite": false,
          "start": 858,
          "end": 888
        }
      ],
      "declare": false,
      "start": 854,
      "end": 889
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics2a",
          "optional": false,
          "typeAnnotation": null,
          "start": 894,
          "end": 908
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 913,
                    "end": 919
                  },
                  "start": 911,
                  "end": 919
                },
                "start": 910,
                "end": 919
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 924,
              "end": 925
            },
            "id": null,
            "generator": false,
            "start": 909,
            "end": 925
          }
        ],
        "start": 890,
        "end": 926
      },
      "directive": null,
      "start": 890,
      "end": 927
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics2a",
          "optional": false,
          "typeAnnotation": null,
          "start": 932,
          "end": 946
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 947,
              "end": 953
            }
          ],
          "start": 946,
          "end": 954
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 959,
                    "end": 965
                  },
                  "start": 957,
                  "end": 965
                },
                "start": 956,
                "end": 965
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 970,
              "end": 971
            },
            "id": null,
            "generator": false,
            "start": 955,
            "end": 971
          }
        ],
        "start": 928,
        "end": 972
      },
      "directive": null,
      "start": 928,
      "end": 973
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics2a",
          "optional": false,
          "typeAnnotation": null,
          "start": 978,
          "end": 992
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 993,
              "end": 999
            }
          ],
          "start": 992,
          "end": 1000
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 1002,
                "end": 1003
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1008,
                  "end": 1009
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "substr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1010,
                  "end": 1016
                },
                "optional": false,
                "computed": false,
                "start": 1008,
                "end": 1016
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1017,
                  "end": 1018
                }
              ],
              "optional": false,
              "start": 1008,
              "end": 1019
            },
            "id": null,
            "generator": false,
            "start": 1001,
            "end": 1019
          }
        ],
        "start": 974,
        "end": 1020
      },
      "directive": null,
      "start": 974,
      "end": 1021
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "someGenerics2b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1033,
        "end": 1047
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 1059,
                    "end": 1060
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1059,
                  "end": 1060
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1062,
                    "end": 1063
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1062,
                  "end": 1063
                }
              ],
              "start": 1058,
              "end": 1064
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
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
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1072,
                              "end": 1073
                            },
                            "typeArguments": null,
                            "start": 1072,
                            "end": 1073
                          },
                          "start": 1070,
                          "end": 1073
                        },
                        "start": 1069,
                        "end": 1073
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1078,
                              "end": 1079
                            },
                            "typeArguments": null,
                            "start": 1078,
                            "end": 1079
                          },
                          "start": 1076,
                          "end": 1079
                        },
                        "start": 1075,
                        "end": 1079
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 1084,
                        "end": 1088
                      },
                      "start": 1081,
                      "end": 1088
                    },
                    "start": 1068,
                    "end": 1088
                  },
                  "start": 1066,
                  "end": 1088
                },
                "start": 1065,
                "end": 1088
              }
            ],
            "returnType": null,
            "start": 1054,
            "end": 1090
          }
        ],
        "start": 1048,
        "end": 1092
      },
      "declare": false,
      "start": 1023,
      "end": 1092
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "someGenerics2b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "someGenerics2b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1113,
                  "end": 1127
                },
                "typeArguments": null,
                "start": 1113,
                "end": 1127
              },
              "start": 1111,
              "end": 1127
            },
            "start": 1097,
            "end": 1127
          },
          "init": null,
          "definite": false,
          "start": 1097,
          "end": 1127
        }
      ],
      "declare": false,
      "start": 1093,
      "end": 1128
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics2b",
          "optional": false,
          "typeAnnotation": null,
          "start": 1133,
          "end": 1147
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1152,
                    "end": 1158
                  },
                  "start": 1150,
                  "end": 1158
                },
                "start": 1149,
                "end": 1158
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1163,
                    "end": 1169
                  },
                  "start": 1161,
                  "end": 1169
                },
                "start": 1160,
                "end": 1169
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 1174,
              "end": 1175
            },
            "id": null,
            "generator": false,
            "start": 1148,
            "end": 1175
          }
        ],
        "start": 1129,
        "end": 1176
      },
      "directive": null,
      "start": 1129,
      "end": 1177
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics2b",
          "optional": false,
          "typeAnnotation": null,
          "start": 1182,
          "end": 1196
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 1197,
              "end": 1203
            },
            {
              "type": "TSNumberKeyword",
              "start": 1205,
              "end": 1211
            }
          ],
          "start": 1196,
          "end": 1212
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1217,
                    "end": 1223
                  },
                  "start": 1215,
                  "end": 1223
                },
                "start": 1214,
                "end": 1223
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1228,
                    "end": 1234
                  },
                  "start": 1226,
                  "end": 1234
                },
                "start": 1225,
                "end": 1234
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 1239,
              "end": 1240
            },
            "id": null,
            "generator": false,
            "start": 1213,
            "end": 1240
          }
        ],
        "start": 1178,
        "end": 1241
      },
      "directive": null,
      "start": 1178,
      "end": 1242
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics2b",
          "optional": false,
          "typeAnnotation": null,
          "start": 1247,
          "end": 1261
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 1262,
              "end": 1268
            },
            {
              "type": "TSNumberKeyword",
              "start": 1270,
              "end": 1276
            }
          ],
          "start": 1261,
          "end": 1277
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 1279,
                "end": 1280
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 1282,
                "end": 1283
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1288,
                  "end": 1289
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "substr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1290,
                  "end": 1296
                },
                "optional": false,
                "computed": false,
                "start": 1288,
                "end": 1296
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1297,
                    "end": 1298
                  },
                  "operator": "*",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1301,
                    "end": 1302
                  },
                  "start": 1297,
                  "end": 1302
                }
              ],
              "optional": false,
              "start": 1288,
              "end": 1303
            },
            "id": null,
            "generator": false,
            "start": 1278,
            "end": 1303
          }
        ],
        "start": 1243,
        "end": 1304
      },
      "directive": null,
      "start": 1243,
      "end": 1305
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "someGenerics3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1451,
        "end": 1464
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 1476,
                    "end": 1477
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1476,
                  "end": 1477
                }
              ],
              "start": 1475,
              "end": 1478
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "producer",
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
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1495,
                          "end": 1496
                        },
                        "typeArguments": null,
                        "start": 1495,
                        "end": 1496
                      },
                      "start": 1492,
                      "end": 1496
                    },
                    "start": 1489,
                    "end": 1496
                  },
                  "start": 1487,
                  "end": 1496
                },
                "start": 1479,
                "end": 1496
              }
            ],
            "returnType": null,
            "start": 1471,
            "end": 1498
          }
        ],
        "start": 1465,
        "end": 1500
      },
      "declare": false,
      "start": 1441,
      "end": 1500
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "someGenerics3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "someGenerics3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1520,
                  "end": 1533
                },
                "typeArguments": null,
                "start": 1520,
                "end": 1533
              },
              "start": 1518,
              "end": 1533
            },
            "start": 1505,
            "end": 1533
          },
          "init": null,
          "definite": false,
          "start": 1505,
          "end": 1533
        }
      ],
      "declare": false,
      "start": 1501,
      "end": 1534
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1539,
          "end": 1552
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
              "value": "",
              "raw": "''",
              "start": 1559,
              "end": 1561
            },
            "id": null,
            "generator": false,
            "start": 1553,
            "end": 1561
          }
        ],
        "start": 1535,
        "end": 1562
      },
      "directive": null,
      "start": 1535,
      "end": 1563
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1568,
          "end": 1581
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Window",
                "optional": false,
                "typeAnnotation": null,
                "start": 1582,
                "end": 1588
              },
              "typeArguments": null,
              "start": 1582,
              "end": 1588
            }
          ],
          "start": 1581,
          "end": 1589
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 1596,
              "end": 1605
            },
            "id": null,
            "generator": false,
            "start": 1590,
            "end": 1605
          }
        ],
        "start": 1564,
        "end": 1606
      },
      "directive": null,
      "start": 1564,
      "end": 1607
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1612,
          "end": 1625
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 1626,
              "end": 1632
            }
          ],
          "start": 1625,
          "end": 1633
        },
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
              "value": 3,
              "raw": "3",
              "start": 1640,
              "end": 1641
            },
            "id": null,
            "generator": false,
            "start": 1634,
            "end": 1641
          }
        ],
        "start": 1608,
        "end": 1642
      },
      "directive": null,
      "start": 1608,
      "end": 1643
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "someGenerics4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1796,
        "end": 1809
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 1821,
                    "end": 1822
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1821,
                  "end": 1822
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1824,
                    "end": 1825
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1824,
                  "end": 1825
                }
              ],
              "start": 1820,
              "end": 1826
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
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
                      "start": 1830,
                      "end": 1831
                    },
                    "typeArguments": null,
                    "start": 1830,
                    "end": 1831
                  },
                  "start": 1828,
                  "end": 1831
                },
                "start": 1827,
                "end": 1831
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
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
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1840,
                              "end": 1841
                            },
                            "typeArguments": null,
                            "start": 1840,
                            "end": 1841
                          },
                          "start": 1838,
                          "end": 1841
                        },
                        "start": 1837,
                        "end": 1841
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 1846,
                        "end": 1850
                      },
                      "start": 1843,
                      "end": 1850
                    },
                    "start": 1836,
                    "end": 1850
                  },
                  "start": 1834,
                  "end": 1850
                },
                "start": 1833,
                "end": 1850
              }
            ],
            "returnType": null,
            "start": 1816,
            "end": 1852
          }
        ],
        "start": 1810,
        "end": 1854
      },
      "declare": false,
      "start": 1786,
      "end": 1854
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "someGenerics4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "someGenerics4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1874,
                  "end": 1887
                },
                "typeArguments": null,
                "start": 1874,
                "end": 1887
              },
              "start": 1872,
              "end": 1887
            },
            "start": 1859,
            "end": 1887
          },
          "init": null,
          "definite": false,
          "start": 1859,
          "end": 1887
        }
      ],
      "declare": false,
      "start": 1855,
      "end": 1888
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics4",
          "optional": false,
          "typeAnnotation": null,
          "start": 1893,
          "end": 1906
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 1907,
            "end": 1908
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 1916,
              "end": 1920
            },
            "id": null,
            "generator": false,
            "start": 1910,
            "end": 1920
          }
        ],
        "start": 1889,
        "end": 1921
      },
      "directive": null,
      "start": 1889,
      "end": 1922
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics4",
          "optional": false,
          "typeAnnotation": null,
          "start": 1927,
          "end": 1940
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 1941,
              "end": 1947
            },
            {
              "type": "TSNumberKeyword",
              "start": 1949,
              "end": 1955
            }
          ],
          "start": 1940,
          "end": 1956
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 1957,
            "end": 1959
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 1967,
              "end": 1968
            },
            "id": null,
            "generator": false,
            "start": 1961,
            "end": 1968
          }
        ],
        "start": 1923,
        "end": 1969
      },
      "directive": null,
      "start": 1923,
      "end": 1970
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics4",
          "optional": false,
          "typeAnnotation": null,
          "start": 1975,
          "end": 1988
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 1989,
              "end": 1995
            },
            {
              "type": "TSNumberKeyword",
              "start": 1997,
              "end": 2003
            }
          ],
          "start": 1988,
          "end": 2004
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 2005,
            "end": 2007
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "type": "TSStringKeyword",
                    "start": 2013,
                    "end": 2019
                  },
                  "start": 2011,
                  "end": 2019
                },
                "start": 2010,
                "end": 2019
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 2024,
              "end": 2026
            },
            "id": null,
            "generator": false,
            "start": 2009,
            "end": 2026
          }
        ],
        "start": 1971,
        "end": 2027
      },
      "directive": null,
      "start": 1971,
      "end": 2028
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics4",
          "optional": false,
          "typeAnnotation": null,
          "start": 2042,
          "end": 2055
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 2056,
              "end": 2062
            },
            {
              "type": "TSNumberKeyword",
              "start": 2064,
              "end": 2070
            }
          ],
          "start": 2055,
          "end": 2071
        },
        "arguments": [
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 2072,
            "end": 2076
          },
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 2078,
            "end": 2082
          }
        ],
        "start": 2038,
        "end": 2083
      },
      "directive": null,
      "start": 2038,
      "end": 2084
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "someGenerics5",
        "optional": false,
        "typeAnnotation": null,
        "start": 2237,
        "end": 2250
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2262,
                    "end": 2263
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2262,
                  "end": 2263
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2265,
                    "end": 2266
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2265,
                  "end": 2266
                }
              ],
              "start": 2261,
              "end": 2267
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
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
                      "start": 2271,
                      "end": 2272
                    },
                    "typeArguments": null,
                    "start": 2271,
                    "end": 2272
                  },
                  "start": 2269,
                  "end": 2272
                },
                "start": 2268,
                "end": 2272
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
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
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2281,
                              "end": 2282
                            },
                            "typeArguments": null,
                            "start": 2281,
                            "end": 2282
                          },
                          "start": 2279,
                          "end": 2282
                        },
                        "start": 2278,
                        "end": 2282
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 2287,
                        "end": 2291
                      },
                      "start": 2284,
                      "end": 2291
                    },
                    "start": 2277,
                    "end": 2291
                  },
                  "start": 2275,
                  "end": 2291
                },
                "start": 2274,
                "end": 2291
              }
            ],
            "returnType": null,
            "start": 2257,
            "end": 2293
          }
        ],
        "start": 2251,
        "end": 2295
      },
      "declare": false,
      "start": 2227,
      "end": 2295
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "someGenerics5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "someGenerics5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2315,
                  "end": 2328
                },
                "typeArguments": null,
                "start": 2315,
                "end": 2328
              },
              "start": 2313,
              "end": 2328
            },
            "start": 2300,
            "end": 2328
          },
          "init": null,
          "definite": false,
          "start": 2300,
          "end": 2328
        }
      ],
      "declare": false,
      "start": 2296,
      "end": 2329
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics5",
          "optional": false,
          "typeAnnotation": null,
          "start": 2334,
          "end": 2347
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 2348,
            "end": 2349
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 2357,
              "end": 2361
            },
            "id": null,
            "generator": false,
            "start": 2351,
            "end": 2361
          }
        ],
        "start": 2330,
        "end": 2362
      },
      "directive": null,
      "start": 2330,
      "end": 2363
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics5",
          "optional": false,
          "typeAnnotation": null,
          "start": 2368,
          "end": 2381
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 2382,
              "end": 2388
            },
            {
              "type": "TSStringKeyword",
              "start": 2390,
              "end": 2396
            }
          ],
          "start": 2381,
          "end": 2397
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 2398,
            "end": 2400
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 2408,
              "end": 2409
            },
            "id": null,
            "generator": false,
            "start": 2402,
            "end": 2409
          }
        ],
        "start": 2364,
        "end": 2410
      },
      "directive": null,
      "start": 2364,
      "end": 2411
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics5",
          "optional": false,
          "typeAnnotation": null,
          "start": 2416,
          "end": 2429
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 2430,
              "end": 2436
            },
            {
              "type": "TSStringKeyword",
              "start": 2438,
              "end": 2444
            }
          ],
          "start": 2429,
          "end": 2445
        },
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 2446,
            "end": 2448
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "type": "TSStringKeyword",
                    "start": 2454,
                    "end": 2460
                  },
                  "start": 2452,
                  "end": 2460
                },
                "start": 2451,
                "end": 2460
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 2465,
              "end": 2467
            },
            "id": null,
            "generator": false,
            "start": 2450,
            "end": 2467
          }
        ],
        "start": 2412,
        "end": 2468
      },
      "directive": null,
      "start": 2412,
      "end": 2469
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics5",
          "optional": false,
          "typeAnnotation": null,
          "start": 2483,
          "end": 2496
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 2497,
              "end": 2503
            },
            {
              "type": "TSNumberKeyword",
              "start": 2505,
              "end": 2511
            }
          ],
          "start": 2496,
          "end": 2512
        },
        "arguments": [
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 2513,
            "end": 2517
          },
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 2519,
            "end": 2523
          }
        ],
        "start": 2479,
        "end": 2524
      },
      "directive": null,
      "start": 2479,
      "end": 2525
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "someGenerics6",
        "optional": false,
        "typeAnnotation": null,
        "start": 2646,
        "end": 2659
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2671,
                    "end": 2672
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2671,
                  "end": 2672
                }
              ],
              "start": 2670,
              "end": 2673
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2681,
                              "end": 2682
                            },
                            "typeArguments": null,
                            "start": 2681,
                            "end": 2682
                          },
                          "start": 2679,
                          "end": 2682
                        },
                        "start": 2678,
                        "end": 2682
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2687,
                          "end": 2688
                        },
                        "typeArguments": null,
                        "start": 2687,
                        "end": 2688
                      },
                      "start": 2684,
                      "end": 2688
                    },
                    "start": 2677,
                    "end": 2688
                  },
                  "start": 2675,
                  "end": 2688
                },
                "start": 2674,
                "end": 2688
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2697,
                              "end": 2698
                            },
                            "typeArguments": null,
                            "start": 2697,
                            "end": 2698
                          },
                          "start": 2695,
                          "end": 2698
                        },
                        "start": 2694,
                        "end": 2698
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2703,
                          "end": 2704
                        },
                        "typeArguments": null,
                        "start": 2703,
                        "end": 2704
                      },
                      "start": 2700,
                      "end": 2704
                    },
                    "start": 2693,
                    "end": 2704
                  },
                  "start": 2691,
                  "end": 2704
                },
                "start": 2690,
                "end": 2704
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2713,
                              "end": 2714
                            },
                            "typeArguments": null,
                            "start": 2713,
                            "end": 2714
                          },
                          "start": 2711,
                          "end": 2714
                        },
                        "start": 2710,
                        "end": 2714
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2719,
                          "end": 2720
                        },
                        "typeArguments": null,
                        "start": 2719,
                        "end": 2720
                      },
                      "start": 2716,
                      "end": 2720
                    },
                    "start": 2709,
                    "end": 2720
                  },
                  "start": 2707,
                  "end": 2720
                },
                "start": 2706,
                "end": 2720
              }
            ],
            "returnType": null,
            "start": 2666,
            "end": 2722
          }
        ],
        "start": 2660,
        "end": 2724
      },
      "declare": false,
      "start": 2636,
      "end": 2724
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "someGenerics6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "someGenerics6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2744,
                  "end": 2757
                },
                "typeArguments": null,
                "start": 2744,
                "end": 2757
              },
              "start": 2742,
              "end": 2757
            },
            "start": 2729,
            "end": 2757
          },
          "init": null,
          "definite": false,
          "start": 2729,
          "end": 2757
        }
      ],
      "declare": false,
      "start": 2725,
      "end": 2758
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics6",
          "optional": false,
          "typeAnnotation": null,
          "start": 2763,
          "end": 2776
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 2777,
                "end": 2778
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 2782,
              "end": 2783
            },
            "id": null,
            "generator": false,
            "start": 2777,
            "end": 2783
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 2785,
                "end": 2786
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 2790,
              "end": 2791
            },
            "id": null,
            "generator": false,
            "start": 2785,
            "end": 2791
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 2793,
                "end": 2794
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 2798,
              "end": 2799
            },
            "id": null,
            "generator": false,
            "start": 2793,
            "end": 2799
          }
        ],
        "start": 2759,
        "end": 2800
      },
      "directive": null,
      "start": 2759,
      "end": 2801
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics6",
          "optional": false,
          "typeAnnotation": null,
          "start": 2806,
          "end": 2819
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 2820,
              "end": 2826
            }
          ],
          "start": 2819,
          "end": 2827
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 2828,
                "end": 2829
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 2833,
              "end": 2834
            },
            "id": null,
            "generator": false,
            "start": 2828,
            "end": 2834
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 2836,
                "end": 2837
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 2841,
              "end": 2842
            },
            "id": null,
            "generator": false,
            "start": 2836,
            "end": 2842
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 2844,
                "end": 2845
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 2849,
              "end": 2850
            },
            "id": null,
            "generator": false,
            "start": 2844,
            "end": 2850
          }
        ],
        "start": 2802,
        "end": 2851
      },
      "directive": null,
      "start": 2802,
      "end": 2852
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics6",
          "optional": false,
          "typeAnnotation": null,
          "start": 2857,
          "end": 2870
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 2871,
              "end": 2877
            }
          ],
          "start": 2870,
          "end": 2878
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2883,
                    "end": 2889
                  },
                  "start": 2881,
                  "end": 2889
                },
                "start": 2880,
                "end": 2889
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 2894,
              "end": 2895
            },
            "id": null,
            "generator": false,
            "start": 2879,
            "end": 2895
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2901,
                    "end": 2907
                  },
                  "start": 2899,
                  "end": 2907
                },
                "start": 2898,
                "end": 2907
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 2912,
              "end": 2913
            },
            "id": null,
            "generator": false,
            "start": 2897,
            "end": 2913
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2919,
                    "end": 2925
                  },
                  "start": 2917,
                  "end": 2925
                },
                "start": 2916,
                "end": 2925
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 2930,
              "end": 2931
            },
            "id": null,
            "generator": false,
            "start": 2915,
            "end": 2931
          }
        ],
        "start": 2853,
        "end": 2932
      },
      "directive": null,
      "start": 2853,
      "end": 2933
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics6",
          "optional": false,
          "typeAnnotation": null,
          "start": 2947,
          "end": 2960
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 2961,
              "end": 2967
            }
          ],
          "start": 2960,
          "end": 2968
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2973,
                    "end": 2979
                  },
                  "start": 2971,
                  "end": 2979
                },
                "start": 2970,
                "end": 2979
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 2984,
              "end": 2985
            },
            "id": null,
            "generator": false,
            "start": 2969,
            "end": 2985
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2991,
                    "end": 2997
                  },
                  "start": 2989,
                  "end": 2997
                },
                "start": 2988,
                "end": 2997
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 3002,
              "end": 3003
            },
            "id": null,
            "generator": false,
            "start": 2987,
            "end": 3003
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 3009,
                    "end": 3015
                  },
                  "start": 3007,
                  "end": 3015
                },
                "start": 3006,
                "end": 3015
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 3020,
              "end": 3021
            },
            "id": null,
            "generator": false,
            "start": 3005,
            "end": 3021
          }
        ],
        "start": 2943,
        "end": 3022
      },
      "directive": null,
      "start": 2943,
      "end": 3023
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "someGenerics7",
        "optional": false,
        "typeAnnotation": null,
        "start": 3145,
        "end": 3158
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3170,
                    "end": 3171
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3170,
                  "end": 3171
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3173,
                    "end": 3174
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3173,
                  "end": 3174
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3176,
                    "end": 3177
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3176,
                  "end": 3177
                }
              ],
              "start": 3169,
              "end": 3178
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3186,
                              "end": 3187
                            },
                            "typeArguments": null,
                            "start": 3186,
                            "end": 3187
                          },
                          "start": 3184,
                          "end": 3187
                        },
                        "start": 3183,
                        "end": 3187
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3192,
                          "end": 3193
                        },
                        "typeArguments": null,
                        "start": 3192,
                        "end": 3193
                      },
                      "start": 3189,
                      "end": 3193
                    },
                    "start": 3182,
                    "end": 3193
                  },
                  "start": 3180,
                  "end": 3193
                },
                "start": 3179,
                "end": 3193
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3202,
                              "end": 3203
                            },
                            "typeArguments": null,
                            "start": 3202,
                            "end": 3203
                          },
                          "start": 3200,
                          "end": 3203
                        },
                        "start": 3199,
                        "end": 3203
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3208,
                          "end": 3209
                        },
                        "typeArguments": null,
                        "start": 3208,
                        "end": 3209
                      },
                      "start": 3205,
                      "end": 3209
                    },
                    "start": 3198,
                    "end": 3209
                  },
                  "start": 3196,
                  "end": 3209
                },
                "start": 3195,
                "end": 3209
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3218,
                              "end": 3219
                            },
                            "typeArguments": null,
                            "start": 3218,
                            "end": 3219
                          },
                          "start": 3216,
                          "end": 3219
                        },
                        "start": 3215,
                        "end": 3219
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3224,
                          "end": 3225
                        },
                        "typeArguments": null,
                        "start": 3224,
                        "end": 3225
                      },
                      "start": 3221,
                      "end": 3225
                    },
                    "start": 3214,
                    "end": 3225
                  },
                  "start": 3212,
                  "end": 3225
                },
                "start": 3211,
                "end": 3225
              }
            ],
            "returnType": null,
            "start": 3165,
            "end": 3227
          }
        ],
        "start": 3159,
        "end": 3229
      },
      "declare": false,
      "start": 3135,
      "end": 3229
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "someGenerics7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "someGenerics7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3249,
                  "end": 3262
                },
                "typeArguments": null,
                "start": 3249,
                "end": 3262
              },
              "start": 3247,
              "end": 3262
            },
            "start": 3234,
            "end": 3262
          },
          "init": null,
          "definite": false,
          "start": 3234,
          "end": 3262
        }
      ],
      "declare": false,
      "start": 3230,
      "end": 3263
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics7",
          "optional": false,
          "typeAnnotation": null,
          "start": 3268,
          "end": 3281
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 3282,
                "end": 3283
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 3287,
              "end": 3288
            },
            "id": null,
            "generator": false,
            "start": 3282,
            "end": 3288
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 3290,
                "end": 3291
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 3295,
              "end": 3296
            },
            "id": null,
            "generator": false,
            "start": 3290,
            "end": 3296
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 3298,
                "end": 3299
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 3303,
              "end": 3304
            },
            "id": null,
            "generator": false,
            "start": 3298,
            "end": 3304
          }
        ],
        "start": 3264,
        "end": 3305
      },
      "directive": null,
      "start": 3264,
      "end": 3306
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics7",
          "optional": false,
          "typeAnnotation": null,
          "start": 3311,
          "end": 3324
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 3325,
              "end": 3331
            },
            {
              "type": "TSStringKeyword",
              "start": 3333,
              "end": 3339
            },
            {
              "type": "TSNumberKeyword",
              "start": 3341,
              "end": 3347
            }
          ],
          "start": 3324,
          "end": 3348
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 3349,
                "end": 3350
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 3354,
              "end": 3355
            },
            "id": null,
            "generator": false,
            "start": 3349,
            "end": 3355
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 3357,
                "end": 3358
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 3362,
              "end": 3363
            },
            "id": null,
            "generator": false,
            "start": 3357,
            "end": 3363
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 3365,
                "end": 3366
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 3370,
              "end": 3371
            },
            "id": null,
            "generator": false,
            "start": 3365,
            "end": 3371
          }
        ],
        "start": 3307,
        "end": 3372
      },
      "directive": null,
      "start": 3307,
      "end": 3373
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "someGenerics7",
          "optional": false,
          "typeAnnotation": null,
          "start": 3378,
          "end": 3391
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 3392,
              "end": 3398
            },
            {
              "type": "TSStringKeyword",
              "start": 3400,
              "end": 3406
            },
            {
              "type": "TSNumberKeyword",
              "start": 3408,
              "end": 3414
            }
          ],
          "start": 3391,
          "end": 3415
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 3420,
                    "end": 3426
                  },
                  "start": 3418,
                  "end": 3426
                },
                "start": 3417,
                "end": 3426
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 3431,
              "end": 3432
            },
            "id": null,
            "generator": false,
            "start": 3416,
            "end": 3432
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 3438,
                    "end": 3444
                  },
                  "start": 3436,
                  "end": 3444
                },
                "start": 3435,
                "end": 3444
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 3449,
              "end": 3450
            },
            "id": null,
            "generator": false,
            "start": 3434,
            "end": 3450
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 3456,
                    "end": 3462
                  },
                  "start": 3454,
                  "end": 3462
                },
                "start": 3453,
                "end": 3462
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 3467,
              "end": 3468
            },
            "id": null,
            "generator": false,
            "start": 3452,
            "end": 3468
          }
        ],
        "start": 3374,
        "end": 3469
      },
      "directive": null,
      "start": 3374,
      "end": 3470
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "someGenerics8",
        "optional": false,
        "typeAnnotation": null,
        "start": 3537,
        "end": 3550
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 3562,
                    "end": 3563
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3562,
                  "end": 3563
                }
              ],
              "start": 3561,
              "end": 3564
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
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
                      "start": 3568,
                      "end": 3569
                    },
                    "typeArguments": null,
                    "start": 3568,
                    "end": 3569
                  },
                  "start": 3566,
                  "end": 3569
                },
                "start": 3565,
                "end": 3569
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3572,
                  "end": 3573
                },
                "typeArguments": null,
                "start": 3572,
                "end": 3573
              },
              "start": 3570,
              "end": 3573
            },
            "start": 3557,
            "end": 3574
          }
        ],
        "start": 3551,
        "end": 3576
      },
      "declare": false,
      "start": 3527,
      "end": 3576
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "someGenerics8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "someGenerics8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3596,
                  "end": 3609
                },
                "typeArguments": null,
                "start": 3596,
                "end": 3609
              },
              "start": 3594,
              "end": 3609
            },
            "start": 3581,
            "end": 3609
          },
          "init": null,
          "definite": false,
          "start": 3581,
          "end": 3609
        }
      ],
      "declare": false,
      "start": 3577,
      "end": 3610
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 3615,
            "end": 3616
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "someGenerics8",
              "optional": false,
              "typeAnnotation": null,
              "start": 3623,
              "end": 3636
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "someGenerics7",
                "optional": false,
                "typeAnnotation": null,
                "start": 3637,
                "end": 3650
              }
            ],
            "start": 3619,
            "end": 3651
          },
          "definite": false,
          "start": 3615,
          "end": 3651
        }
      ],
      "declare": false,
      "start": 3611,
      "end": 3652
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 3657,
          "end": 3658
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 3659,
              "end": 3665
            },
            {
              "type": "TSStringKeyword",
              "start": 3667,
              "end": 3673
            },
            {
              "type": "TSStringKeyword",
              "start": 3675,
              "end": 3681
            }
          ],
          "start": 3658,
          "end": 3682
        },
        "arguments": [
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 3683,
            "end": 3687
          },
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 3689,
            "end": 3693
          },
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 3695,
            "end": 3699
          }
        ],
        "start": 3653,
        "end": 3700
      },
      "directive": null,
      "start": 3653,
      "end": 3701
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "someGenerics9",
        "optional": false,
        "typeAnnotation": null,
        "start": 3812,
        "end": 3825
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 3837,
                    "end": 3838
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3837,
                  "end": 3838
                }
              ],
              "start": 3836,
              "end": 3839
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
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
                      "start": 3843,
                      "end": 3844
                    },
                    "typeArguments": null,
                    "start": 3843,
                    "end": 3844
                  },
                  "start": 3841,
                  "end": 3844
                },
                "start": 3840,
                "end": 3844
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
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
                      "start": 3849,
                      "end": 3850
                    },
                    "typeArguments": null,
                    "start": 3849,
                    "end": 3850
                  },
                  "start": 3847,
                  "end": 3850
                },
                "start": 3846,
                "end": 3850
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
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
                      "start": 3855,
                      "end": 3856
                    },
                    "typeArguments": null,
                    "start": 3855,
                    "end": 3856
                  },
                  "start": 3853,
                  "end": 3856
                },
                "start": 3852,
                "end": 3856
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3859,
                  "end": 3860
                },
                "typeArguments": null,
                "start": 3859,
                "end": 3860
              },
              "start": 3857,
              "end": 3860
            },
            "start": 3832,
            "end": 3861
          }
        ],
        "start": 3826,
        "end": 3863
      },
      "declare": false,
      "start": 3802,
      "end": 3863
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "someGenerics9",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "someGenerics9",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3883,
                  "end": 3896
                },
                "typeArguments": null,
                "start": 3883,
                "end": 3896
              },
              "start": 3881,
              "end": 3896
            },
            "start": 3868,
            "end": 3896
          },
          "init": null,
          "definite": false,
          "start": 3868,
          "end": 3896
        }
      ],
      "declare": false,
      "start": 3864,
      "end": 3897
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a9a",
            "optional": false,
            "typeAnnotation": null,
            "start": 3902,
            "end": 3905
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "someGenerics9",
              "optional": false,
              "typeAnnotation": null,
              "start": 3912,
              "end": 3925
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 3926,
                "end": 3928
              },
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 3930,
                "end": 3931
              },
              {
                "type": "ArrayExpression",
                "elements": [],
                "start": 3933,
                "end": 3935
              }
            ],
            "start": 3908,
            "end": 3936
          },
          "definite": false,
          "start": 3902,
          "end": 3936
        }
      ],
      "declare": false,
      "start": 3898,
      "end": 3937
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a9a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 3947,
                "end": 3949
              },
              "start": 3945,
              "end": 3949
            },
            "start": 3942,
            "end": 3949
          },
          "init": null,
          "definite": false,
          "start": 3942,
          "end": 3949
        }
      ],
      "declare": false,
      "start": 3938,
      "end": 3950
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a9b",
            "optional": false,
            "typeAnnotation": null,
            "start": 3955,
            "end": 3958
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "someGenerics9",
              "optional": false,
              "typeAnnotation": null,
              "start": 3965,
              "end": 3978
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": true,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3981,
                        "end": 3982
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 3985,
                          "end": 3991
                        },
                        "start": 3983,
                        "end": 3991
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 3981,
                      "end": 3992
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": true,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3993,
                        "end": 3994
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3997,
                          "end": 4003
                        },
                        "start": 3995,
                        "end": 4003
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 3993,
                      "end": 4004
                    }
                  ],
                  "start": 3979,
                  "end": 4006
                }
              ],
              "start": 3978,
              "end": 4007
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4010,
                      "end": 4011
                    },
                    "value": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 4013,
                      "end": 4014
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4010,
                    "end": 4014
                  }
                ],
                "start": 4008,
                "end": 4016
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4020,
                      "end": 4021
                    },
                    "value": {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 4023,
                      "end": 4025
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4020,
                    "end": 4025
                  }
                ],
                "start": 4018,
                "end": 4027
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 4029,
                "end": 4033
              }
            ],
            "start": 3961,
            "end": 4034
          },
          "definite": false,
          "start": 3955,
          "end": 4034
        }
      ],
      "declare": false,
      "start": 3951,
      "end": 4035
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a9b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4047,
                      "end": 4048
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 4051,
                        "end": 4057
                      },
                      "start": 4049,
                      "end": 4057
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 4047,
                    "end": 4058
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4059,
                      "end": 4060
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 4063,
                        "end": 4069
                      },
                      "start": 4061,
                      "end": 4069
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 4059,
                    "end": 4070
                  }
                ],
                "start": 4045,
                "end": 4072
              },
              "start": 4043,
              "end": 4072
            },
            "start": 4040,
            "end": 4072
          },
          "init": null,
          "definite": false,
          "start": 4040,
          "end": 4072
        }
      ],
      "declare": false,
      "start": 4036,
      "end": 4073
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A91",
        "optional": false,
        "typeAnnotation": null,
        "start": 4191,
        "end": 4194
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 4201,
              "end": 4202
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 4204,
                "end": 4210
              },
              "start": 4202,
              "end": 4210
            },
            "accessibility": null,
            "static": false,
            "start": 4201,
            "end": 4211
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 4216,
              "end": 4217
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 4220,
                "end": 4226
              },
              "start": 4218,
              "end": 4226
            },
            "accessibility": null,
            "static": false,
            "start": 4216,
            "end": 4227
          }
        ],
        "start": 4195,
        "end": 4229
      },
      "declare": false,
      "start": 4181,
      "end": 4229
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A92",
        "optional": false,
        "typeAnnotation": null,
        "start": 4240,
        "end": 4243
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 4250,
              "end": 4251
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 4253,
                "end": 4259
              },
              "start": 4251,
              "end": 4259
            },
            "accessibility": null,
            "static": false,
            "start": 4250,
            "end": 4260
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 4265,
              "end": 4266
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Window",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4269,
                  "end": 4275
                },
                "typeArguments": null,
                "start": 4269,
                "end": 4275
              },
              "start": 4267,
              "end": 4275
            },
            "accessibility": null,
            "static": false,
            "start": 4265,
            "end": 4276
          }
        ],
        "start": 4244,
        "end": 4278
      },
      "declare": false,
      "start": 4230,
      "end": 4278
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a9e",
            "optional": false,
            "typeAnnotation": null,
            "start": 4283,
            "end": 4286
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "someGenerics9",
              "optional": false,
              "typeAnnotation": null,
              "start": 4293,
              "end": 4306
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 4307,
                "end": 4316
              },
              {
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
                      "start": 4320,
                      "end": 4321
                    },
                    "value": {
                      "type": "Literal",
                      "value": 6,
                      "raw": "6",
                      "start": 4323,
                      "end": 4324
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4320,
                    "end": 4324
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4326,
                      "end": 4327
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "window",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4329,
                      "end": 4335
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4326,
                    "end": 4335
                  }
                ],
                "start": 4318,
                "end": 4337
              },
              {
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
                      "start": 4341,
                      "end": 4342
                    },
                    "value": {
                      "type": "Literal",
                      "value": 6,
                      "raw": "6",
                      "start": 4344,
                      "end": 4345
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4341,
                    "end": 4345
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4347,
                      "end": 4348
                    },
                    "value": {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 4350,
                      "end": 4352
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4347,
                    "end": 4352
                  }
                ],
                "start": 4339,
                "end": 4354
              }
            ],
            "start": 4289,
            "end": 4355
          },
          "definite": false,
          "start": 4283,
          "end": 4355
        }
      ],
      "declare": false,
      "start": 4279,
      "end": 4356
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a9e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 4366,
                "end": 4368
              },
              "start": 4364,
              "end": 4368
            },
            "start": 4361,
            "end": 4368
          },
          "init": null,
          "definite": false,
          "start": 4361,
          "end": 4368
        }
      ],
      "declare": false,
      "start": 4357,
      "end": 4369
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a9f",
            "optional": false,
            "typeAnnotation": null,
            "start": 4374,
            "end": 4377
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "someGenerics9",
              "optional": false,
              "typeAnnotation": null,
              "start": 4384,
              "end": 4397
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A92",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4398,
                    "end": 4401
                  },
                  "typeArguments": null,
                  "start": 4398,
                  "end": 4401
                }
              ],
              "start": 4397,
              "end": 4402
            },
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 4403,
                "end": 4412
              },
              {
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
                      "start": 4416,
                      "end": 4417
                    },
                    "value": {
                      "type": "Literal",
                      "value": 6,
                      "raw": "6",
                      "start": 4419,
                      "end": 4420
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4416,
                    "end": 4420
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4422,
                      "end": 4423
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "window",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4425,
                      "end": 4431
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4422,
                    "end": 4431
                  }
                ],
                "start": 4414,
                "end": 4433
              },
              {
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
                      "start": 4437,
                      "end": 4438
                    },
                    "value": {
                      "type": "Literal",
                      "value": 6,
                      "raw": "6",
                      "start": 4440,
                      "end": 4441
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4437,
                    "end": 4441
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4443,
                      "end": 4444
                    },
                    "value": {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 4446,
                      "end": 4448
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4443,
                    "end": 4448
                  }
                ],
                "start": 4435,
                "end": 4450
              }
            ],
            "start": 4380,
            "end": 4451
          },
          "definite": false,
          "start": 4374,
          "end": 4451
        }
      ],
      "declare": false,
      "start": 4370,
      "end": 4452
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a9f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A92",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4462,
                  "end": 4465
                },
                "typeArguments": null,
                "start": 4462,
                "end": 4465
              },
              "start": 4460,
              "end": 4465
            },
            "start": 4457,
            "end": 4465
          },
          "init": null,
          "definite": false,
          "start": 4457,
          "end": 4465
        }
      ],
      "declare": false,
      "start": 4453,
      "end": 4466
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a9d",
            "optional": false,
            "typeAnnotation": null,
            "start": 4577,
            "end": 4580
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "someGenerics9",
              "optional": false,
              "typeAnnotation": null,
              "start": 4587,
              "end": 4600
            },
            "typeArguments": null,
            "arguments": [
              {
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
                      "start": 4603,
                      "end": 4604
                    },
                    "value": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 4606,
                      "end": 4607
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4603,
                    "end": 4607
                  }
                ],
                "start": 4601,
                "end": 4609
              },
              {
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
                      "start": 4613,
                      "end": 4614
                    },
                    "value": {
                      "type": "Literal",
                      "value": 6,
                      "raw": "6",
                      "start": 4616,
                      "end": 4617
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4613,
                    "end": 4617
                  }
                ],
                "start": 4611,
                "end": 4619
              },
              {
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
                      "start": 4623,
                      "end": 4624
                    },
                    "value": {
                      "type": "Literal",
                      "value": 6,
                      "raw": "6",
                      "start": 4626,
                      "end": 4627
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4623,
                    "end": 4627
                  }
                ],
                "start": 4621,
                "end": 4629
              }
            ],
            "start": 4583,
            "end": 4630
          },
          "definite": false,
          "start": 4577,
          "end": 4630
        }
      ],
      "declare": false,
      "start": 4573,
      "end": 4631
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a9d",
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4643,
                      "end": 4644
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 4646,
                        "end": 4652
                      },
                      "start": 4644,
                      "end": 4652
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 4643,
                    "end": 4653
                  }
                ],
                "start": 4641,
                "end": 4655
              },
              "start": 4639,
              "end": 4655
            },
            "start": 4636,
            "end": 4655
          },
          "init": null,
          "definite": false,
          "start": 4636,
          "end": 4655
        }
      ],
      "declare": false,
      "start": 4632,
      "end": 4656
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "anyVar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 4763,
                "end": 4766
              },
              "start": 4761,
              "end": 4766
            },
            "start": 4755,
            "end": 4766
          },
          "init": null,
          "definite": false,
          "start": 4755,
          "end": 4766
        }
      ],
      "declare": false,
      "start": 4751,
      "end": 4767
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 4772,
            "end": 4773
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "someGenerics9",
              "optional": false,
              "typeAnnotation": null,
              "start": 4780,
              "end": 4793
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 7,
                "raw": "7",
                "start": 4794,
                "end": 4795
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "anyVar",
                "optional": false,
                "typeAnnotation": null,
                "start": 4797,
                "end": 4803
              },
              {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 4805,
                "end": 4806
              }
            ],
            "start": 4776,
            "end": 4807
          },
          "definite": false,
          "start": 4772,
          "end": 4807
        }
      ],
      "declare": false,
      "start": 4768,
      "end": 4808
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 4816,
                "end": 4819
              },
              "start": 4814,
              "end": 4819
            },
            "start": 4813,
            "end": 4819
          },
          "init": null,
          "definite": false,
          "start": 4813,
          "end": 4819
        }
      ],
      "declare": false,
      "start": 4809,
      "end": 4820
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null,
            "start": 4935,
            "end": 4938
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "someGenerics9",
              "optional": false,
              "typeAnnotation": null,
              "start": 4945,
              "end": 4958
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [],
                "start": 4959,
                "end": 4961
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 4963,
                "end": 4967
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 4969,
                "end": 4978
              }
            ],
            "start": 4941,
            "end": 4979
          },
          "definite": false,
          "start": 4935,
          "end": 4979
        }
      ],
      "declare": false,
      "start": 4931,
      "end": 4980
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 4990,
                  "end": 4993
                },
                "start": 4990,
                "end": 4995
              },
              "start": 4988,
              "end": 4995
            },
            "start": 4985,
            "end": 4995
          },
          "init": null,
          "definite": false,
          "start": 4985,
          "end": 4995
        }
      ],
      "declare": false,
      "start": 4981,
      "end": 4996
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 35,
  "end": 4997
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 35,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "NoParams",
    "start": 45,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 54,
    "end": 55
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 60,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 71,
    "end": 72
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 73,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "noParams",
    "start": 77,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "NoParams",
    "start": 87,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 97,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "noParams",
    "start": 101,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 111,
    "end": 112
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 113,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "noParams",
    "start": 117,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 126,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 135,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 137,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "noParams",
    "start": 141,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 155,
    "end": 156
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 223,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "noGenericParams",
    "start": 233,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 249,
    "end": 250
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 255,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 266,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 275,
    "end": 276
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 277,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "noGenericParams",
    "start": 281,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "noGenericParams",
    "start": 298,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 313,
    "end": 314
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 315,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "noGenericParams",
    "start": 319,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 334,
    "end": 335
  },
  {
    "type": "String",
    "value": "''",
    "start": 335,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 338,
    "end": 339
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 340,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "noGenericParams",
    "start": 344,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 360,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 367,
    "end": 368
  },
  {
    "type": "String",
    "value": "''",
    "start": 368,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 371,
    "end": 372
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 373,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "noGenericParams",
    "start": 377,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 396,
    "end": 397
  },
  {
    "type": "String",
    "value": "''",
    "start": 397,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 400,
    "end": 401
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 496,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "someGenerics1",
    "start": 506,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 520,
    "end": 521
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 526,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 530,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 536,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 538,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 541,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 544,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 546,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 555,
    "end": 556
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 557,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "someGenerics1",
    "start": 561,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "someGenerics1",
    "start": 576,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 589,
    "end": 590
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 591,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "someGenerics1",
    "start": 595,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 608,
    "end": 609
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 610,
    "end": 611
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 614,
    "end": 615
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 616,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "someGenerics1",
    "start": 620,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 633,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 634,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 640,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 642,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 649,
    "end": 650
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 651,
    "end": 652
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 655,
    "end": 656
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 666,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "someGenerics1",
    "start": 670,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 683,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 684,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 695,
    "end": 696
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 697,
    "end": 698
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 701,
    "end": 702
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 793,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "someGenerics2a",
    "start": 803,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 818,
    "end": 819
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 824,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 828,
    "end": 829
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 831,
    "end": 832
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 833,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 835,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 836,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 837,
    "end": 838
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 839,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 840,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 842,
    "end": 844
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 845,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 849,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 850,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 852,
    "end": 853
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 854,
    "end": 857
  },
  {
    "type": "Identifier",
    "value": "someGenerics2a",
    "start": 858,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 872,
    "end": 873
  },
  {
    "type": "Identifier",
    "value": "someGenerics2a",
    "start": 874,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 888,
    "end": 889
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 890,
    "end": 893
  },
  {
    "type": "Identifier",
    "value": "someGenerics2a",
    "start": 894,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 908,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 909,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 910,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 911,
    "end": 912
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 913,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 919,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 921,
    "end": 923
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 924,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 925,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 926,
    "end": 927
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 928,
    "end": 931
  },
  {
    "type": "Identifier",
    "value": "someGenerics2a",
    "start": 932,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 946,
    "end": 947
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 947,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 953,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 954,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 955,
    "end": 956
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 956,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 957,
    "end": 958
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 959,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 965,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 967,
    "end": 969
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 970,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 971,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 972,
    "end": 973
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 974,
    "end": 977
  },
  {
    "type": "Identifier",
    "value": "someGenerics2a",
    "start": 978,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 992,
    "end": 993
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 993,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1005,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Identifier",
    "value": "substr",
    "start": 1010,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1023,
    "end": 1032
  },
  {
    "type": "Identifier",
    "value": "someGenerics2b",
    "start": 1033,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1054,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1081,
    "end": 1083
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1084,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1093,
    "end": 1096
  },
  {
    "type": "Identifier",
    "value": "someGenerics2b",
    "start": 1097,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Identifier",
    "value": "someGenerics2b",
    "start": 1113,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1129,
    "end": 1132
  },
  {
    "type": "Identifier",
    "value": "someGenerics2b",
    "start": 1133,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1152,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1163,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1171,
    "end": 1173
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1178,
    "end": 1181
  },
  {
    "type": "Identifier",
    "value": "someGenerics2b",
    "start": 1182,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1197,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1205,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1217,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1228,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1236,
    "end": 1238
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1243,
    "end": 1246
  },
  {
    "type": "Identifier",
    "value": "someGenerics2b",
    "start": 1247,
    "end": 1261
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1262,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1270,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1285,
    "end": 1287
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Identifier",
    "value": "substr",
    "start": 1290,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1441,
    "end": 1450
  },
  {
    "type": "Identifier",
    "value": "someGenerics3",
    "start": 1451,
    "end": 1464
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1471,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1477,
    "end": 1478
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Identifier",
    "value": "producer",
    "start": 1479,
    "end": 1487
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1489,
    "end": 1490
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1490,
    "end": 1491
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1492,
    "end": 1494
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1501,
    "end": 1504
  },
  {
    "type": "Identifier",
    "value": "someGenerics3",
    "start": 1505,
    "end": 1518
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1518,
    "end": 1519
  },
  {
    "type": "Identifier",
    "value": "someGenerics3",
    "start": 1520,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1535,
    "end": 1538
  },
  {
    "type": "Identifier",
    "value": "someGenerics3",
    "start": 1539,
    "end": 1552
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1552,
    "end": 1553
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1554,
    "end": 1555
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1556,
    "end": 1558
  },
  {
    "type": "String",
    "value": "''",
    "start": 1559,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1562,
    "end": 1563
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1564,
    "end": 1567
  },
  {
    "type": "Identifier",
    "value": "someGenerics3",
    "start": 1568,
    "end": 1581
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Identifier",
    "value": "Window",
    "start": 1582,
    "end": 1588
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1589,
    "end": 1590
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1590,
    "end": 1591
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1591,
    "end": 1592
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1593,
    "end": 1595
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1596,
    "end": 1605
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1608,
    "end": 1611
  },
  {
    "type": "Identifier",
    "value": "someGenerics3",
    "start": 1612,
    "end": 1625
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1626,
    "end": 1632
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1633,
    "end": 1634
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1634,
    "end": 1635
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1637,
    "end": 1639
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1640,
    "end": 1641
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1641,
    "end": 1642
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1786,
    "end": 1795
  },
  {
    "type": "Identifier",
    "value": "someGenerics4",
    "start": 1796,
    "end": 1809
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1810,
    "end": 1811
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1816,
    "end": 1819
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1820,
    "end": 1821
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1824,
    "end": 1825
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1825,
    "end": 1826
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 1827,
    "end": 1828
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1830,
    "end": 1831
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1831,
    "end": 1832
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1834,
    "end": 1835
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1836,
    "end": 1837
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1837,
    "end": 1838
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1838,
    "end": 1839
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1840,
    "end": 1841
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1841,
    "end": 1842
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1843,
    "end": 1845
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1846,
    "end": 1850
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1850,
    "end": 1851
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1851,
    "end": 1852
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1853,
    "end": 1854
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1855,
    "end": 1858
  },
  {
    "type": "Identifier",
    "value": "someGenerics4",
    "start": 1859,
    "end": 1872
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1872,
    "end": 1873
  },
  {
    "type": "Identifier",
    "value": "someGenerics4",
    "start": 1874,
    "end": 1887
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1887,
    "end": 1888
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1889,
    "end": 1892
  },
  {
    "type": "Identifier",
    "value": "someGenerics4",
    "start": 1893,
    "end": 1906
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1908,
    "end": 1909
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1910,
    "end": 1911
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1911,
    "end": 1912
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1913,
    "end": 1915
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1916,
    "end": 1920
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1920,
    "end": 1921
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1921,
    "end": 1922
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1923,
    "end": 1926
  },
  {
    "type": "Identifier",
    "value": "someGenerics4",
    "start": 1927,
    "end": 1940
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1940,
    "end": 1941
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1941,
    "end": 1947
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1947,
    "end": 1948
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1949,
    "end": 1955
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1955,
    "end": 1956
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1956,
    "end": 1957
  },
  {
    "type": "String",
    "value": "''",
    "start": 1957,
    "end": 1959
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1959,
    "end": 1960
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1961,
    "end": 1962
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1962,
    "end": 1963
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1964,
    "end": 1966
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1967,
    "end": 1968
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1968,
    "end": 1969
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1969,
    "end": 1970
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1971,
    "end": 1974
  },
  {
    "type": "Identifier",
    "value": "someGenerics4",
    "start": 1975,
    "end": 1988
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1988,
    "end": 1989
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1989,
    "end": 1995
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1995,
    "end": 1996
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1997,
    "end": 2003
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2004,
    "end": 2005
  },
  {
    "type": "String",
    "value": "''",
    "start": 2005,
    "end": 2007
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2007,
    "end": 2008
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2009,
    "end": 2010
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2010,
    "end": 2011
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2011,
    "end": 2012
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2013,
    "end": 2019
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2019,
    "end": 2020
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2021,
    "end": 2023
  },
  {
    "type": "String",
    "value": "''",
    "start": 2024,
    "end": 2026
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2026,
    "end": 2027
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2027,
    "end": 2028
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2038,
    "end": 2041
  },
  {
    "type": "Identifier",
    "value": "someGenerics4",
    "start": 2042,
    "end": 2055
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2055,
    "end": 2056
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2056,
    "end": 2062
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2062,
    "end": 2063
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2064,
    "end": 2070
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2070,
    "end": 2071
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2071,
    "end": 2072
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2072,
    "end": 2076
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2076,
    "end": 2077
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2078,
    "end": 2082
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2082,
    "end": 2083
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2083,
    "end": 2084
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2227,
    "end": 2236
  },
  {
    "type": "Identifier",
    "value": "someGenerics5",
    "start": 2237,
    "end": 2250
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2251,
    "end": 2252
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2257,
    "end": 2260
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2261,
    "end": 2262
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2262,
    "end": 2263
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2263,
    "end": 2264
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2265,
    "end": 2266
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2266,
    "end": 2267
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2267,
    "end": 2268
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2268,
    "end": 2269
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2269,
    "end": 2270
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2271,
    "end": 2272
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2272,
    "end": 2273
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 2274,
    "end": 2275
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2275,
    "end": 2276
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2277,
    "end": 2278
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2278,
    "end": 2279
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2279,
    "end": 2280
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2281,
    "end": 2282
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2282,
    "end": 2283
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2284,
    "end": 2286
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2287,
    "end": 2291
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2291,
    "end": 2292
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2292,
    "end": 2293
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2294,
    "end": 2295
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2296,
    "end": 2299
  },
  {
    "type": "Identifier",
    "value": "someGenerics5",
    "start": 2300,
    "end": 2313
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2313,
    "end": 2314
  },
  {
    "type": "Identifier",
    "value": "someGenerics5",
    "start": 2315,
    "end": 2328
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2328,
    "end": 2329
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2330,
    "end": 2333
  },
  {
    "type": "Identifier",
    "value": "someGenerics5",
    "start": 2334,
    "end": 2347
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2347,
    "end": 2348
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 2348,
    "end": 2349
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2349,
    "end": 2350
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2351,
    "end": 2352
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2352,
    "end": 2353
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2354,
    "end": 2356
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2357,
    "end": 2361
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2361,
    "end": 2362
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2362,
    "end": 2363
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2364,
    "end": 2367
  },
  {
    "type": "Identifier",
    "value": "someGenerics5",
    "start": 2368,
    "end": 2381
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2381,
    "end": 2382
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2382,
    "end": 2388
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2388,
    "end": 2389
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2390,
    "end": 2396
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2396,
    "end": 2397
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2397,
    "end": 2398
  },
  {
    "type": "String",
    "value": "''",
    "start": 2398,
    "end": 2400
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2400,
    "end": 2401
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2402,
    "end": 2403
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2403,
    "end": 2404
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2405,
    "end": 2407
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2408,
    "end": 2409
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2409,
    "end": 2410
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2410,
    "end": 2411
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2412,
    "end": 2415
  },
  {
    "type": "Identifier",
    "value": "someGenerics5",
    "start": 2416,
    "end": 2429
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2429,
    "end": 2430
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2430,
    "end": 2436
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2436,
    "end": 2437
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2438,
    "end": 2444
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2444,
    "end": 2445
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2445,
    "end": 2446
  },
  {
    "type": "String",
    "value": "''",
    "start": 2446,
    "end": 2448
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2448,
    "end": 2449
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2450,
    "end": 2451
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2451,
    "end": 2452
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2452,
    "end": 2453
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2454,
    "end": 2460
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2460,
    "end": 2461
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2462,
    "end": 2464
  },
  {
    "type": "String",
    "value": "''",
    "start": 2465,
    "end": 2467
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2467,
    "end": 2468
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2468,
    "end": 2469
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2479,
    "end": 2482
  },
  {
    "type": "Identifier",
    "value": "someGenerics5",
    "start": 2483,
    "end": 2496
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2496,
    "end": 2497
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2497,
    "end": 2503
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2503,
    "end": 2504
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2505,
    "end": 2511
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2511,
    "end": 2512
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2512,
    "end": 2513
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2513,
    "end": 2517
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2517,
    "end": 2518
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2519,
    "end": 2523
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2523,
    "end": 2524
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2524,
    "end": 2525
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2636,
    "end": 2645
  },
  {
    "type": "Identifier",
    "value": "someGenerics6",
    "start": 2646,
    "end": 2659
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2660,
    "end": 2661
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2666,
    "end": 2669
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2670,
    "end": 2671
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2671,
    "end": 2672
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2672,
    "end": 2673
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2673,
    "end": 2674
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2674,
    "end": 2675
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2675,
    "end": 2676
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2677,
    "end": 2678
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2678,
    "end": 2679
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2679,
    "end": 2680
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2681,
    "end": 2682
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2682,
    "end": 2683
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2684,
    "end": 2686
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2687,
    "end": 2688
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2688,
    "end": 2689
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2690,
    "end": 2691
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2691,
    "end": 2692
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2693,
    "end": 2694
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2694,
    "end": 2695
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2695,
    "end": 2696
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2697,
    "end": 2698
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2698,
    "end": 2699
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2700,
    "end": 2702
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2703,
    "end": 2704
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2704,
    "end": 2705
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2706,
    "end": 2707
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2707,
    "end": 2708
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2709,
    "end": 2710
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2710,
    "end": 2711
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2711,
    "end": 2712
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2713,
    "end": 2714
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2714,
    "end": 2715
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2716,
    "end": 2718
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2719,
    "end": 2720
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2720,
    "end": 2721
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2721,
    "end": 2722
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2723,
    "end": 2724
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2725,
    "end": 2728
  },
  {
    "type": "Identifier",
    "value": "someGenerics6",
    "start": 2729,
    "end": 2742
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2742,
    "end": 2743
  },
  {
    "type": "Identifier",
    "value": "someGenerics6",
    "start": 2744,
    "end": 2757
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2757,
    "end": 2758
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2759,
    "end": 2762
  },
  {
    "type": "Identifier",
    "value": "someGenerics6",
    "start": 2763,
    "end": 2776
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2776,
    "end": 2777
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2777,
    "end": 2778
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2779,
    "end": 2781
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2782,
    "end": 2783
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2783,
    "end": 2784
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2785,
    "end": 2786
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2787,
    "end": 2789
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2790,
    "end": 2791
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2791,
    "end": 2792
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2793,
    "end": 2794
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2795,
    "end": 2797
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2798,
    "end": 2799
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2799,
    "end": 2800
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2800,
    "end": 2801
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2802,
    "end": 2805
  },
  {
    "type": "Identifier",
    "value": "someGenerics6",
    "start": 2806,
    "end": 2819
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2819,
    "end": 2820
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2820,
    "end": 2826
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2826,
    "end": 2827
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2827,
    "end": 2828
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2828,
    "end": 2829
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2830,
    "end": 2832
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2833,
    "end": 2834
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2834,
    "end": 2835
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2836,
    "end": 2837
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2838,
    "end": 2840
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2841,
    "end": 2842
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2842,
    "end": 2843
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2844,
    "end": 2845
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2846,
    "end": 2848
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2849,
    "end": 2850
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2850,
    "end": 2851
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2851,
    "end": 2852
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2853,
    "end": 2856
  },
  {
    "type": "Identifier",
    "value": "someGenerics6",
    "start": 2857,
    "end": 2870
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2870,
    "end": 2871
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2871,
    "end": 2877
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2877,
    "end": 2878
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2878,
    "end": 2879
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2879,
    "end": 2880
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2880,
    "end": 2881
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2881,
    "end": 2882
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2883,
    "end": 2889
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2889,
    "end": 2890
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2891,
    "end": 2893
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2894,
    "end": 2895
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2895,
    "end": 2896
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2897,
    "end": 2898
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2898,
    "end": 2899
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2899,
    "end": 2900
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2901,
    "end": 2907
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2907,
    "end": 2908
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2909,
    "end": 2911
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2912,
    "end": 2913
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2913,
    "end": 2914
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2915,
    "end": 2916
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2916,
    "end": 2917
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2917,
    "end": 2918
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2919,
    "end": 2925
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2925,
    "end": 2926
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2927,
    "end": 2929
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2930,
    "end": 2931
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2931,
    "end": 2932
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2932,
    "end": 2933
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2943,
    "end": 2946
  },
  {
    "type": "Identifier",
    "value": "someGenerics6",
    "start": 2947,
    "end": 2960
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2960,
    "end": 2961
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2961,
    "end": 2967
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2967,
    "end": 2968
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2968,
    "end": 2969
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2969,
    "end": 2970
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2970,
    "end": 2971
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2971,
    "end": 2972
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2973,
    "end": 2979
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2979,
    "end": 2980
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2981,
    "end": 2983
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2984,
    "end": 2985
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2985,
    "end": 2986
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2987,
    "end": 2988
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2988,
    "end": 2989
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2989,
    "end": 2990
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2991,
    "end": 2997
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2997,
    "end": 2998
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2999,
    "end": 3001
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3002,
    "end": 3003
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3003,
    "end": 3004
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3005,
    "end": 3006
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3006,
    "end": 3007
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3007,
    "end": 3008
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3009,
    "end": 3015
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3015,
    "end": 3016
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3017,
    "end": 3019
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3020,
    "end": 3021
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3021,
    "end": 3022
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3022,
    "end": 3023
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3135,
    "end": 3144
  },
  {
    "type": "Identifier",
    "value": "someGenerics7",
    "start": 3145,
    "end": 3158
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3159,
    "end": 3160
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3165,
    "end": 3168
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3169,
    "end": 3170
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 3170,
    "end": 3171
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3171,
    "end": 3172
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 3173,
    "end": 3174
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3174,
    "end": 3175
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 3176,
    "end": 3177
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3177,
    "end": 3178
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3178,
    "end": 3179
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3179,
    "end": 3180
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3180,
    "end": 3181
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3182,
    "end": 3183
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3183,
    "end": 3184
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3184,
    "end": 3185
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 3186,
    "end": 3187
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3187,
    "end": 3188
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3189,
    "end": 3191
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 3192,
    "end": 3193
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3193,
    "end": 3194
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3195,
    "end": 3196
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3196,
    "end": 3197
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3198,
    "end": 3199
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3199,
    "end": 3200
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3200,
    "end": 3201
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 3202,
    "end": 3203
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3203,
    "end": 3204
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3205,
    "end": 3207
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 3208,
    "end": 3209
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3209,
    "end": 3210
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3211,
    "end": 3212
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3212,
    "end": 3213
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3214,
    "end": 3215
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3215,
    "end": 3216
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3216,
    "end": 3217
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 3218,
    "end": 3219
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3219,
    "end": 3220
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3221,
    "end": 3223
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 3224,
    "end": 3225
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3225,
    "end": 3226
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3226,
    "end": 3227
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3228,
    "end": 3229
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3230,
    "end": 3233
  },
  {
    "type": "Identifier",
    "value": "someGenerics7",
    "start": 3234,
    "end": 3247
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3247,
    "end": 3248
  },
  {
    "type": "Identifier",
    "value": "someGenerics7",
    "start": 3249,
    "end": 3262
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3262,
    "end": 3263
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3264,
    "end": 3267
  },
  {
    "type": "Identifier",
    "value": "someGenerics7",
    "start": 3268,
    "end": 3281
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3281,
    "end": 3282
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3282,
    "end": 3283
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3284,
    "end": 3286
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3287,
    "end": 3288
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3288,
    "end": 3289
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3290,
    "end": 3291
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3292,
    "end": 3294
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3295,
    "end": 3296
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3296,
    "end": 3297
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3298,
    "end": 3299
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3300,
    "end": 3302
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3303,
    "end": 3304
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3304,
    "end": 3305
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3305,
    "end": 3306
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3307,
    "end": 3310
  },
  {
    "type": "Identifier",
    "value": "someGenerics7",
    "start": 3311,
    "end": 3324
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3324,
    "end": 3325
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3325,
    "end": 3331
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3331,
    "end": 3332
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3333,
    "end": 3339
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3339,
    "end": 3340
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3341,
    "end": 3347
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3347,
    "end": 3348
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3348,
    "end": 3349
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3349,
    "end": 3350
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3351,
    "end": 3353
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3354,
    "end": 3355
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3355,
    "end": 3356
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3357,
    "end": 3358
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3359,
    "end": 3361
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3362,
    "end": 3363
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3363,
    "end": 3364
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3365,
    "end": 3366
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3367,
    "end": 3369
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3370,
    "end": 3371
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3371,
    "end": 3372
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3372,
    "end": 3373
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3374,
    "end": 3377
  },
  {
    "type": "Identifier",
    "value": "someGenerics7",
    "start": 3378,
    "end": 3391
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3391,
    "end": 3392
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3392,
    "end": 3398
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3398,
    "end": 3399
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3400,
    "end": 3406
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3406,
    "end": 3407
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3408,
    "end": 3414
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3414,
    "end": 3415
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3415,
    "end": 3416
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3416,
    "end": 3417
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3417,
    "end": 3418
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3418,
    "end": 3419
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3420,
    "end": 3426
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3426,
    "end": 3427
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3428,
    "end": 3430
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3431,
    "end": 3432
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3432,
    "end": 3433
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3434,
    "end": 3435
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3435,
    "end": 3436
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3436,
    "end": 3437
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3438,
    "end": 3444
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3444,
    "end": 3445
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3446,
    "end": 3448
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3449,
    "end": 3450
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3450,
    "end": 3451
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3452,
    "end": 3453
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3453,
    "end": 3454
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3454,
    "end": 3455
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3456,
    "end": 3462
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3462,
    "end": 3463
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3464,
    "end": 3466
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3467,
    "end": 3468
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3468,
    "end": 3469
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3469,
    "end": 3470
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3527,
    "end": 3536
  },
  {
    "type": "Identifier",
    "value": "someGenerics8",
    "start": 3537,
    "end": 3550
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3551,
    "end": 3552
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3557,
    "end": 3560
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3561,
    "end": 3562
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3562,
    "end": 3563
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3563,
    "end": 3564
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3564,
    "end": 3565
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3565,
    "end": 3566
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3566,
    "end": 3567
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3568,
    "end": 3569
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3569,
    "end": 3570
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3570,
    "end": 3571
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3572,
    "end": 3573
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3573,
    "end": 3574
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3575,
    "end": 3576
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3577,
    "end": 3580
  },
  {
    "type": "Identifier",
    "value": "someGenerics8",
    "start": 3581,
    "end": 3594
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3594,
    "end": 3595
  },
  {
    "type": "Identifier",
    "value": "someGenerics8",
    "start": 3596,
    "end": 3609
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3609,
    "end": 3610
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3611,
    "end": 3614
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3615,
    "end": 3616
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3617,
    "end": 3618
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3619,
    "end": 3622
  },
  {
    "type": "Identifier",
    "value": "someGenerics8",
    "start": 3623,
    "end": 3636
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3636,
    "end": 3637
  },
  {
    "type": "Identifier",
    "value": "someGenerics7",
    "start": 3637,
    "end": 3650
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3650,
    "end": 3651
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3651,
    "end": 3652
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3653,
    "end": 3656
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3657,
    "end": 3658
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3658,
    "end": 3659
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3659,
    "end": 3665
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3665,
    "end": 3666
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3667,
    "end": 3673
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3673,
    "end": 3674
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3675,
    "end": 3681
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3681,
    "end": 3682
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3682,
    "end": 3683
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3683,
    "end": 3687
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3687,
    "end": 3688
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3689,
    "end": 3693
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3693,
    "end": 3694
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3695,
    "end": 3699
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3699,
    "end": 3700
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3700,
    "end": 3701
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3802,
    "end": 3811
  },
  {
    "type": "Identifier",
    "value": "someGenerics9",
    "start": 3812,
    "end": 3825
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3826,
    "end": 3827
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3832,
    "end": 3835
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3836,
    "end": 3837
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3837,
    "end": 3838
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3838,
    "end": 3839
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3839,
    "end": 3840
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3840,
    "end": 3841
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3841,
    "end": 3842
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3843,
    "end": 3844
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3844,
    "end": 3845
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3846,
    "end": 3847
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3847,
    "end": 3848
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3849,
    "end": 3850
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3850,
    "end": 3851
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3852,
    "end": 3853
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3853,
    "end": 3854
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3855,
    "end": 3856
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3856,
    "end": 3857
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3857,
    "end": 3858
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3859,
    "end": 3860
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3860,
    "end": 3861
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3862,
    "end": 3863
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3864,
    "end": 3867
  },
  {
    "type": "Identifier",
    "value": "someGenerics9",
    "start": 3868,
    "end": 3881
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3881,
    "end": 3882
  },
  {
    "type": "Identifier",
    "value": "someGenerics9",
    "start": 3883,
    "end": 3896
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3896,
    "end": 3897
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3898,
    "end": 3901
  },
  {
    "type": "Identifier",
    "value": "a9a",
    "start": 3902,
    "end": 3905
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3906,
    "end": 3907
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3908,
    "end": 3911
  },
  {
    "type": "Identifier",
    "value": "someGenerics9",
    "start": 3912,
    "end": 3925
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3925,
    "end": 3926
  },
  {
    "type": "String",
    "value": "''",
    "start": 3926,
    "end": 3928
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3928,
    "end": 3929
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3930,
    "end": 3931
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3931,
    "end": 3932
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3933,
    "end": 3934
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3934,
    "end": 3935
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3935,
    "end": 3936
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3936,
    "end": 3937
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3938,
    "end": 3941
  },
  {
    "type": "Identifier",
    "value": "a9a",
    "start": 3942,
    "end": 3945
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3945,
    "end": 3946
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3947,
    "end": 3948
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3948,
    "end": 3949
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3949,
    "end": 3950
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3951,
    "end": 3954
  },
  {
    "type": "Identifier",
    "value": "a9b",
    "start": 3955,
    "end": 3958
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3959,
    "end": 3960
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3961,
    "end": 3964
  },
  {
    "type": "Identifier",
    "value": "someGenerics9",
    "start": 3965,
    "end": 3978
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3978,
    "end": 3979
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3979,
    "end": 3980
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3981,
    "end": 3982
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3982,
    "end": 3983
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3983,
    "end": 3984
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3985,
    "end": 3991
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3991,
    "end": 3992
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3993,
    "end": 3994
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3994,
    "end": 3995
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3995,
    "end": 3996
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3997,
    "end": 4003
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4003,
    "end": 4004
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4005,
    "end": 4006
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4006,
    "end": 4007
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4007,
    "end": 4008
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4008,
    "end": 4009
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4010,
    "end": 4011
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4011,
    "end": 4012
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4013,
    "end": 4014
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4015,
    "end": 4016
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4016,
    "end": 4017
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4018,
    "end": 4019
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4020,
    "end": 4021
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4021,
    "end": 4022
  },
  {
    "type": "String",
    "value": "''",
    "start": 4023,
    "end": 4025
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4026,
    "end": 4027
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4027,
    "end": 4028
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4029,
    "end": 4033
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4033,
    "end": 4034
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4034,
    "end": 4035
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4036,
    "end": 4039
  },
  {
    "type": "Identifier",
    "value": "a9b",
    "start": 4040,
    "end": 4043
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4043,
    "end": 4044
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4045,
    "end": 4046
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4047,
    "end": 4048
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4048,
    "end": 4049
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4049,
    "end": 4050
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4051,
    "end": 4057
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4057,
    "end": 4058
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4059,
    "end": 4060
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4060,
    "end": 4061
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4061,
    "end": 4062
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4063,
    "end": 4069
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4069,
    "end": 4070
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4071,
    "end": 4072
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4072,
    "end": 4073
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4181,
    "end": 4190
  },
  {
    "type": "Identifier",
    "value": "A91",
    "start": 4191,
    "end": 4194
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4195,
    "end": 4196
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4201,
    "end": 4202
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4202,
    "end": 4203
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4204,
    "end": 4210
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4210,
    "end": 4211
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4216,
    "end": 4217
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4217,
    "end": 4218
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4218,
    "end": 4219
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4220,
    "end": 4226
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4226,
    "end": 4227
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4228,
    "end": 4229
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4230,
    "end": 4239
  },
  {
    "type": "Identifier",
    "value": "A92",
    "start": 4240,
    "end": 4243
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4244,
    "end": 4245
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4250,
    "end": 4251
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4251,
    "end": 4252
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4253,
    "end": 4259
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4259,
    "end": 4260
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 4265,
    "end": 4266
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4266,
    "end": 4267
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4267,
    "end": 4268
  },
  {
    "type": "Identifier",
    "value": "Window",
    "start": 4269,
    "end": 4275
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4275,
    "end": 4276
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4277,
    "end": 4278
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4279,
    "end": 4282
  },
  {
    "type": "Identifier",
    "value": "a9e",
    "start": 4283,
    "end": 4286
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4287,
    "end": 4288
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4289,
    "end": 4292
  },
  {
    "type": "Identifier",
    "value": "someGenerics9",
    "start": 4293,
    "end": 4306
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4306,
    "end": 4307
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4307,
    "end": 4316
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4316,
    "end": 4317
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4318,
    "end": 4319
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4320,
    "end": 4321
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4321,
    "end": 4322
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 4323,
    "end": 4324
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4324,
    "end": 4325
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 4326,
    "end": 4327
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4327,
    "end": 4328
  },
  {
    "type": "Identifier",
    "value": "window",
    "start": 4329,
    "end": 4335
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4336,
    "end": 4337
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4337,
    "end": 4338
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4339,
    "end": 4340
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4341,
    "end": 4342
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4342,
    "end": 4343
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 4344,
    "end": 4345
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4345,
    "end": 4346
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4347,
    "end": 4348
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4348,
    "end": 4349
  },
  {
    "type": "String",
    "value": "''",
    "start": 4350,
    "end": 4352
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4353,
    "end": 4354
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4354,
    "end": 4355
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4355,
    "end": 4356
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4357,
    "end": 4360
  },
  {
    "type": "Identifier",
    "value": "a9e",
    "start": 4361,
    "end": 4364
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4364,
    "end": 4365
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4366,
    "end": 4367
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4367,
    "end": 4368
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4368,
    "end": 4369
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4370,
    "end": 4373
  },
  {
    "type": "Identifier",
    "value": "a9f",
    "start": 4374,
    "end": 4377
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4378,
    "end": 4379
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4380,
    "end": 4383
  },
  {
    "type": "Identifier",
    "value": "someGenerics9",
    "start": 4384,
    "end": 4397
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4397,
    "end": 4398
  },
  {
    "type": "Identifier",
    "value": "A92",
    "start": 4398,
    "end": 4401
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4401,
    "end": 4402
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4402,
    "end": 4403
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4403,
    "end": 4412
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4412,
    "end": 4413
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4414,
    "end": 4415
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4416,
    "end": 4417
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4417,
    "end": 4418
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 4419,
    "end": 4420
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4420,
    "end": 4421
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 4422,
    "end": 4423
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4423,
    "end": 4424
  },
  {
    "type": "Identifier",
    "value": "window",
    "start": 4425,
    "end": 4431
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4432,
    "end": 4433
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4433,
    "end": 4434
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4435,
    "end": 4436
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4437,
    "end": 4438
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4438,
    "end": 4439
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 4440,
    "end": 4441
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4441,
    "end": 4442
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4443,
    "end": 4444
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4444,
    "end": 4445
  },
  {
    "type": "String",
    "value": "''",
    "start": 4446,
    "end": 4448
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4449,
    "end": 4450
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4450,
    "end": 4451
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4451,
    "end": 4452
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4453,
    "end": 4456
  },
  {
    "type": "Identifier",
    "value": "a9f",
    "start": 4457,
    "end": 4460
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4460,
    "end": 4461
  },
  {
    "type": "Identifier",
    "value": "A92",
    "start": 4462,
    "end": 4465
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4465,
    "end": 4466
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4573,
    "end": 4576
  },
  {
    "type": "Identifier",
    "value": "a9d",
    "start": 4577,
    "end": 4580
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4581,
    "end": 4582
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4583,
    "end": 4586
  },
  {
    "type": "Identifier",
    "value": "someGenerics9",
    "start": 4587,
    "end": 4600
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4600,
    "end": 4601
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4601,
    "end": 4602
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4603,
    "end": 4604
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4604,
    "end": 4605
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 4606,
    "end": 4607
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4608,
    "end": 4609
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4609,
    "end": 4610
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4611,
    "end": 4612
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4613,
    "end": 4614
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4614,
    "end": 4615
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 4616,
    "end": 4617
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4618,
    "end": 4619
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4619,
    "end": 4620
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4621,
    "end": 4622
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4623,
    "end": 4624
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4624,
    "end": 4625
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 4626,
    "end": 4627
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4628,
    "end": 4629
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4629,
    "end": 4630
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4630,
    "end": 4631
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4632,
    "end": 4635
  },
  {
    "type": "Identifier",
    "value": "a9d",
    "start": 4636,
    "end": 4639
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4639,
    "end": 4640
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4641,
    "end": 4642
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4643,
    "end": 4644
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4644,
    "end": 4645
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4646,
    "end": 4652
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4652,
    "end": 4653
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4654,
    "end": 4655
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4655,
    "end": 4656
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4751,
    "end": 4754
  },
  {
    "type": "Identifier",
    "value": "anyVar",
    "start": 4755,
    "end": 4761
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4761,
    "end": 4762
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4763,
    "end": 4766
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4766,
    "end": 4767
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4768,
    "end": 4771
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4772,
    "end": 4773
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4774,
    "end": 4775
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4776,
    "end": 4779
  },
  {
    "type": "Identifier",
    "value": "someGenerics9",
    "start": 4780,
    "end": 4793
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4793,
    "end": 4794
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 4794,
    "end": 4795
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4795,
    "end": 4796
  },
  {
    "type": "Identifier",
    "value": "anyVar",
    "start": 4797,
    "end": 4803
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4803,
    "end": 4804
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 4805,
    "end": 4806
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4806,
    "end": 4807
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4807,
    "end": 4808
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4809,
    "end": 4812
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4813,
    "end": 4814
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4814,
    "end": 4815
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4816,
    "end": 4819
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4819,
    "end": 4820
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4931,
    "end": 4934
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 4935,
    "end": 4938
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4939,
    "end": 4940
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4941,
    "end": 4944
  },
  {
    "type": "Identifier",
    "value": "someGenerics9",
    "start": 4945,
    "end": 4958
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4958,
    "end": 4959
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4959,
    "end": 4960
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4960,
    "end": 4961
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4961,
    "end": 4962
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4963,
    "end": 4967
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4967,
    "end": 4968
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4969,
    "end": 4978
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4978,
    "end": 4979
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4979,
    "end": 4980
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4981,
    "end": 4984
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 4985,
    "end": 4988
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4988,
    "end": 4989
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4990,
    "end": 4993
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4993,
    "end": 4994
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4994,
    "end": 4995
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4995,
    "end": 4996
  }
]
```
