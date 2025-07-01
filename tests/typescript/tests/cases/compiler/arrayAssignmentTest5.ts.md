__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IState",
              "optional": false,
              "typeAnnotation": null,
              "start": 28,
              "end": 34
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 35,
              "end": 42
            },
            "declare": false,
            "start": 18,
            "end": 42
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IToken",
              "optional": false,
              "typeAnnotation": null,
              "start": 57,
              "end": 63
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
                    "name": "startIndex",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 74,
                    "end": 84
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 86,
                      "end": 92
                    },
                    "start": 84,
                    "end": 92
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 74,
                  "end": 93
                }
              ],
              "start": 64,
              "end": 99
            },
            "declare": false,
            "start": 47,
            "end": 99
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IStateToken",
              "optional": false,
              "typeAnnotation": null,
              "start": 114,
              "end": 125
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IToken",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 134,
                  "end": 140
                },
                "typeArguments": null,
                "start": 134,
                "end": 140
              }
            ],
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
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 151,
                    "end": 156
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IState",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 158,
                        "end": 164
                      },
                      "typeArguments": null,
                      "start": 158,
                      "end": 164
                    },
                    "start": 156,
                    "end": 164
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 151,
                  "end": 165
                }
              ],
              "start": 141,
              "end": 171
            },
            "declare": false,
            "start": 104,
            "end": 171
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ILineTokens",
              "optional": false,
              "typeAnnotation": null,
              "start": 186,
              "end": 197
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
                    "name": "tokens",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 208,
                    "end": 214
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IToken",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 216,
                          "end": 222
                        },
                        "typeArguments": null,
                        "start": 216,
                        "end": 222
                      },
                      "start": 216,
                      "end": 224
                    },
                    "start": 214,
                    "end": 224
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 208,
                  "end": 225
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "endState",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 234,
                    "end": 242
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IState",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 244,
                        "end": 250
                      },
                      "typeArguments": null,
                      "start": 244,
                      "end": 250
                    },
                    "start": 242,
                    "end": 250
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 234,
                  "end": 251
                }
              ],
              "start": 198,
              "end": 257
            },
            "declare": false,
            "start": 176,
            "end": 257
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IAction",
              "optional": false,
              "typeAnnotation": null,
              "start": 272,
              "end": 279
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 280,
              "end": 287
            },
            "declare": false,
            "start": 262,
            "end": 287
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IMode",
              "optional": false,
              "typeAnnotation": null,
              "start": 302,
              "end": 307
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "onEnter",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 318,
                    "end": 325
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "line",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 331,
                          "end": 337
                        },
                        "start": 330,
                        "end": 337
                      },
                      "start": 326,
                      "end": 337
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "IState",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 345,
                            "end": 351
                          },
                          "typeArguments": null,
                          "start": 345,
                          "end": 351
                        },
                        "start": 344,
                        "end": 351
                      },
                      "start": 339,
                      "end": 351
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "offset",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 360,
                          "end": 366
                        },
                        "start": 359,
                        "end": 366
                      },
                      "start": 353,
                      "end": 366
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IAction",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 368,
                        "end": 375
                      },
                      "typeArguments": null,
                      "start": 368,
                      "end": 375
                    },
                    "start": 367,
                    "end": 375
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 318,
                  "end": 376
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "tokenize",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 385,
                    "end": 393
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "line",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 399,
                          "end": 405
                        },
                        "start": 398,
                        "end": 405
                      },
                      "start": 394,
                      "end": 405
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "IState",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 413,
                            "end": 419
                          },
                          "typeArguments": null,
                          "start": 413,
                          "end": 419
                        },
                        "start": 412,
                        "end": 419
                      },
                      "start": 407,
                      "end": 419
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "includeStates",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 435,
                          "end": 442
                        },
                        "start": 434,
                        "end": 442
                      },
                      "start": 421,
                      "end": 442
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ILineTokens",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 444,
                        "end": 455
                      },
                      "typeArguments": null,
                      "start": 444,
                      "end": 455
                    },
                    "start": 443,
                    "end": 455
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 385,
                  "end": 456
                }
              ],
              "start": 308,
              "end": 462
            },
            "declare": false,
            "start": 292,
            "end": 462
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Bug",
                "optional": false,
                "typeAnnotation": null,
                "start": 480,
                "end": 483
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IMode",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 495,
                    "end": 500
                  },
                  "typeArguments": null,
                  "start": 495,
                  "end": 500
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "onEnter",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 518,
                      "end": 525
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
                          "name": "line",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 531,
                              "end": 537
                            },
                            "start": 530,
                            "end": 537
                          },
                          "start": 526,
                          "end": 537
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "state",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "IState",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 545,
                                "end": 551
                              },
                              "typeArguments": null,
                              "start": 545,
                              "end": 551
                            },
                            "start": 544,
                            "end": 551
                          },
                          "start": 539,
                          "end": 551
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "offset",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 560,
                              "end": 566
                            },
                            "start": 559,
                            "end": 566
                          },
                          "start": 553,
                          "end": 566
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "IAction",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 568,
                            "end": 575
                          },
                          "typeArguments": null,
                          "start": 568,
                          "end": 575
                        },
                        "start": 567,
                        "end": 575
                      },
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
                                  "name": "lineTokens",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "ILineTokens",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 605,
                                        "end": 616
                                      },
                                      "typeArguments": null,
                                      "start": 605,
                                      "end": 616
                                    },
                                    "start": 604,
                                    "end": 616
                                  },
                                  "start": 594,
                                  "end": 616
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 618,
                                      "end": 622
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "tokenize",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 623,
                                      "end": 631
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 618,
                                    "end": 631
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "line",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 632,
                                      "end": 636
                                    },
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "state",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 638,
                                      "end": 643
                                    },
                                    {
                                      "type": "Literal",
                                      "value": true,
                                      "raw": "true",
                                      "start": 645,
                                      "end": 649
                                    }
                                  ],
                                  "optional": false,
                                  "start": 618,
                                  "end": 650
                                },
                                "definite": false,
                                "start": 594,
                                "end": 650
                              }
                            ],
                            "declare": false,
                            "start": 590,
                            "end": 651
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
                                  "name": "tokens",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSArrayType",
                                      "elementType": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "IStateToken",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 675,
                                          "end": 686
                                        },
                                        "typeArguments": null,
                                        "start": 675,
                                        "end": 686
                                      },
                                      "start": 675,
                                      "end": 688
                                    },
                                    "start": 674,
                                    "end": 688
                                  },
                                  "start": 668,
                                  "end": 688
                                },
                                "init": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "lineTokens",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 690,
                                    "end": 700
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "tokens",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 701,
                                    "end": 707
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 690,
                                  "end": 707
                                },
                                "definite": false,
                                "start": 668,
                                "end": 707
                              }
                            ],
                            "declare": false,
                            "start": 664,
                            "end": 708
                          },
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "tokens",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 725,
                                  "end": 731
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 732,
                                  "end": 738
                                },
                                "optional": false,
                                "computed": false,
                                "start": 725,
                                "end": 738
                              },
                              "operator": "===",
                              "right": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 743,
                                "end": 744
                              },
                              "start": 725,
                              "end": 744
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 771,
                                        "end": 775
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "onEnter",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 776,
                                        "end": 783
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 771,
                                      "end": 783
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "line",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 784,
                                        "end": 788
                                      },
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "tokens",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 790,
                                        "end": 796
                                      },
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "offset",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 798,
                                        "end": 804
                                      }
                                    ],
                                    "optional": false,
                                    "start": 771,
                                    "end": 805
                                  },
                                  "start": 764,
                                  "end": 806
                                }
                              ],
                              "start": 746,
                              "end": 932
                            },
                            "alternate": null,
                            "start": 721,
                            "end": 932
                          }
                        ],
                        "start": 576,
                        "end": 942
                      },
                      "expression": false,
                      "start": 525,
                      "end": 942
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 511,
                    "end": 942
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "tokenize",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 958,
                      "end": 966
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
                          "name": "line",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 972,
                              "end": 978
                            },
                            "start": 971,
                            "end": 978
                          },
                          "start": 967,
                          "end": 978
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "state",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "IState",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 986,
                                "end": 992
                              },
                              "typeArguments": null,
                              "start": 986,
                              "end": 992
                            },
                            "start": 985,
                            "end": 992
                          },
                          "start": 980,
                          "end": 992
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "includeStates",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 1008,
                              "end": 1015
                            },
                            "start": 1007,
                            "end": 1015
                          },
                          "start": 994,
                          "end": 1015
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ILineTokens",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1017,
                            "end": 1028
                          },
                          "typeArguments": null,
                          "start": 1017,
                          "end": 1028
                        },
                        "start": 1016,
                        "end": 1028
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 1050,
                              "end": 1054
                            },
                            "start": 1043,
                            "end": 1055
                          }
                        ],
                        "start": 1029,
                        "end": 1065
                      },
                      "expression": false,
                      "start": 966,
                      "end": 1065
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 951,
                    "end": 1065
                  }
                ],
                "start": 501,
                "end": 1071
              },
              "abstract": false,
              "declare": false,
              "start": 474,
              "end": 1071
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 467,
            "end": 1071
          }
        ],
        "start": 12,
        "end": 1073
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 1073
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1073
}
```
