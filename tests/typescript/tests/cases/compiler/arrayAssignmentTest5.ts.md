__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1073,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 1073,
      "body": {
        "type": "TSModuleBlock",
        "start": 12,
        "end": 1073,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 18,
            "end": 42,
            "body": {
              "type": "TSInterfaceBody",
              "start": 35,
              "end": 42,
              "body": []
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 28,
              "end": 34,
              "decorators": [],
              "name": "IState",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 47,
            "end": 99,
            "body": {
              "type": "TSInterfaceBody",
              "start": 64,
              "end": 99,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 74,
                  "end": 93,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 74,
                    "end": 84,
                    "decorators": [],
                    "name": "startIndex",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 84,
                    "end": 92,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 86,
                      "end": 92
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 57,
              "end": 63,
              "decorators": [],
              "name": "IToken",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 104,
            "end": 171,
            "body": {
              "type": "TSInterfaceBody",
              "start": 141,
              "end": 171,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 151,
                  "end": 165,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 151,
                    "end": 156,
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 156,
                    "end": 164,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 158,
                      "end": 164,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 158,
                        "end": 164,
                        "decorators": [],
                        "name": "IState",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 134,
                "end": 140,
                "expression": {
                  "type": "Identifier",
                  "start": 134,
                  "end": 140,
                  "decorators": [],
                  "name": "IToken",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "id": {
              "type": "Identifier",
              "start": 114,
              "end": 125,
              "decorators": [],
              "name": "IStateToken",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 176,
            "end": 257,
            "body": {
              "type": "TSInterfaceBody",
              "start": 198,
              "end": 257,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 208,
                  "end": 225,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 208,
                    "end": 214,
                    "decorators": [],
                    "name": "tokens",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 214,
                    "end": 224,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 216,
                      "end": 224,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 216,
                        "end": 222,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 216,
                          "end": 222,
                          "decorators": [],
                          "name": "IToken",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 234,
                  "end": 251,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 234,
                    "end": 242,
                    "decorators": [],
                    "name": "endState",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 242,
                    "end": 250,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 244,
                      "end": 250,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 244,
                        "end": 250,
                        "decorators": [],
                        "name": "IState",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 186,
              "end": 197,
              "decorators": [],
              "name": "ILineTokens",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 262,
            "end": 287,
            "body": {
              "type": "TSInterfaceBody",
              "start": 280,
              "end": 287,
              "body": []
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 272,
              "end": 279,
              "decorators": [],
              "name": "IAction",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 292,
            "end": 462,
            "body": {
              "type": "TSInterfaceBody",
              "start": 308,
              "end": 462,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 318,
                  "end": 376,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 318,
                    "end": 325,
                    "decorators": [],
                    "name": "onEnter",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 326,
                      "end": 337,
                      "decorators": [],
                      "name": "line",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 330,
                        "end": 337,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 331,
                          "end": 337
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 339,
                      "end": 351,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 344,
                        "end": 351,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 345,
                          "end": 351,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 345,
                            "end": 351,
                            "decorators": [],
                            "name": "IState",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 353,
                      "end": 366,
                      "decorators": [],
                      "name": "offset",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 359,
                        "end": 366,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 360,
                          "end": 366
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 367,
                    "end": 375,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 368,
                      "end": 375,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 368,
                        "end": 375,
                        "decorators": [],
                        "name": "IAction",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "static": false,
                  "typeParameters": null
                },
                {
                  "type": "TSMethodSignature",
                  "start": 385,
                  "end": 456,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 385,
                    "end": 393,
                    "decorators": [],
                    "name": "tokenize",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 394,
                      "end": 405,
                      "decorators": [],
                      "name": "line",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 398,
                        "end": 405,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 399,
                          "end": 405
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 407,
                      "end": 419,
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 412,
                        "end": 419,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 413,
                          "end": 419,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 413,
                            "end": 419,
                            "decorators": [],
                            "name": "IState",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 421,
                      "end": 442,
                      "decorators": [],
                      "name": "includeStates",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 434,
                        "end": 442,
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 435,
                          "end": 442
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 443,
                    "end": 455,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 444,
                      "end": 455,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 444,
                        "end": 455,
                        "decorators": [],
                        "name": "ILineTokens",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "static": false,
                  "typeParameters": null
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 302,
              "end": 307,
              "decorators": [],
              "name": "IMode",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 467,
            "end": 1071,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 474,
              "end": 1071,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 501,
                "end": 1071,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 511,
                    "end": 942,
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 518,
                      "end": 525,
                      "decorators": [],
                      "name": "onEnter",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 525,
                      "end": 942,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 576,
                        "end": 942,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 590,
                            "end": 651,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 594,
                                "end": 650,
                                "definite": false,
                                "id": {
                                  "type": "Identifier",
                                  "start": 594,
                                  "end": 616,
                                  "decorators": [],
                                  "name": "lineTokens",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 604,
                                    "end": 616,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 605,
                                      "end": 616,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 605,
                                        "end": 616,
                                        "decorators": [],
                                        "name": "ILineTokens",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  }
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "start": 618,
                                  "end": 650,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "start": 632,
                                      "end": 636,
                                      "decorators": [],
                                      "name": "line",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    {
                                      "type": "Identifier",
                                      "start": 638,
                                      "end": 643,
                                      "decorators": [],
                                      "name": "state",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    {
                                      "type": "Literal",
                                      "start": 645,
                                      "end": 649,
                                      "raw": "true",
                                      "value": true
                                    }
                                  ],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 618,
                                    "end": 631,
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 618,
                                      "end": 622
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 623,
                                      "end": 631,
                                      "decorators": [],
                                      "name": "tokenize",
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
                            "kind": "var"
                          },
                          {
                            "type": "VariableDeclaration",
                            "start": 664,
                            "end": 708,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 668,
                                "end": 707,
                                "definite": false,
                                "id": {
                                  "type": "Identifier",
                                  "start": 668,
                                  "end": 688,
                                  "decorators": [],
                                  "name": "tokens",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 674,
                                    "end": 688,
                                    "typeAnnotation": {
                                      "type": "TSArrayType",
                                      "start": 675,
                                      "end": 688,
                                      "elementType": {
                                        "type": "TSTypeReference",
                                        "start": 675,
                                        "end": 686,
                                        "typeArguments": null,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 675,
                                          "end": 686,
                                          "decorators": [],
                                          "name": "IStateToken",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      }
                                    }
                                  }
                                },
                                "init": {
                                  "type": "MemberExpression",
                                  "start": 690,
                                  "end": 707,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 690,
                                    "end": 700,
                                    "decorators": [],
                                    "name": "lineTokens",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 701,
                                    "end": 707,
                                    "decorators": [],
                                    "name": "tokens",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "var"
                          },
                          {
                            "type": "IfStatement",
                            "start": 721,
                            "end": 932,
                            "alternate": null,
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 746,
                              "end": 932,
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "start": 764,
                                  "end": 806,
                                  "argument": {
                                    "type": "CallExpression",
                                    "start": 771,
                                    "end": 805,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "start": 784,
                                        "end": 788,
                                        "decorators": [],
                                        "name": "line",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      {
                                        "type": "Identifier",
                                        "start": 790,
                                        "end": 796,
                                        "decorators": [],
                                        "name": "tokens",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      {
                                        "type": "Identifier",
                                        "start": 798,
                                        "end": 804,
                                        "decorators": [],
                                        "name": "offset",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    ],
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 771,
                                      "end": 783,
                                      "computed": false,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 771,
                                        "end": 775
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 776,
                                        "end": 783,
                                        "decorators": [],
                                        "name": "onEnter",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    },
                                    "optional": false,
                                    "typeArguments": null
                                  }
                                }
                              ]
                            },
                            "test": {
                              "type": "BinaryExpression",
                              "start": 725,
                              "end": 744,
                              "operator": "===",
                              "left": {
                                "type": "MemberExpression",
                                "start": 725,
                                "end": 738,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 725,
                                  "end": 731,
                                  "decorators": [],
                                  "name": "tokens",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 732,
                                  "end": 738,
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "start": 743,
                                "end": 744,
                                "raw": "0",
                                "value": 0
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
                          "start": 526,
                          "end": 537,
                          "decorators": [],
                          "name": "line",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 530,
                            "end": 537,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 531,
                              "end": 537
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 539,
                          "end": 551,
                          "decorators": [],
                          "name": "state",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 544,
                            "end": 551,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 545,
                              "end": 551,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 545,
                                "end": 551,
                                "decorators": [],
                                "name": "IState",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 553,
                          "end": 566,
                          "decorators": [],
                          "name": "offset",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 559,
                            "end": 566,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 560,
                              "end": 566
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 567,
                        "end": 575,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 568,
                          "end": 575,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 568,
                            "end": 575,
                            "decorators": [],
                            "name": "IAction",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 951,
                    "end": 1065,
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 958,
                      "end": 966,
                      "decorators": [],
                      "name": "tokenize",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 966,
                      "end": 1065,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1029,
                        "end": 1065,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 1043,
                            "end": 1055,
                            "argument": {
                              "type": "Literal",
                              "start": 1050,
                              "end": 1054,
                              "raw": "null",
                              "value": null
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
                          "start": 967,
                          "end": 978,
                          "decorators": [],
                          "name": "line",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 971,
                            "end": 978,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 972,
                              "end": 978
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 980,
                          "end": 992,
                          "decorators": [],
                          "name": "state",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 985,
                            "end": 992,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 986,
                              "end": 992,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 986,
                                "end": 992,
                                "decorators": [],
                                "name": "IState",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 994,
                          "end": 1015,
                          "decorators": [],
                          "name": "includeStates",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1007,
                            "end": 1015,
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 1008,
                              "end": 1015
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1016,
                        "end": 1028,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1017,
                          "end": 1028,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1017,
                            "end": 1028,
                            "decorators": [],
                            "name": "ILineTokens",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "typeParameters": null
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 480,
                "end": 483,
                "decorators": [],
                "name": "Bug",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 495,
                  "end": 500,
                  "expression": {
                    "type": "Identifier",
                    "start": 495,
                    "end": 500,
                    "decorators": [],
                    "name": "IMode",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 11,
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
