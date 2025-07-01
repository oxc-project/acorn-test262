__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "StrategicState",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 31
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "lastStrategyApplied",
                "optional": false,
                "typeAnnotation": null,
                "start": 38,
                "end": 57
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 60,
                  "end": 66
                },
                "start": 58,
                "end": 66
              },
              "accessibility": null,
              "static": false,
              "start": 38,
              "end": 67
            }
          ],
          "start": 32,
          "end": 69
        },
        "declare": false,
        "start": 7,
        "end": 69
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 69
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "strategy",
          "optional": false,
          "typeAnnotation": null,
          "start": 87,
          "end": 95
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
                "start": 96,
                "end": 97
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StrategicState",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 106,
                  "end": 120
                },
                "typeArguments": null,
                "start": 106,
                "end": 120
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 96,
              "end": 120
            }
          ],
          "start": 95,
          "end": 121
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "stratName",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 133,
                "end": 139
              },
              "start": 131,
              "end": 139
            },
            "start": 122,
            "end": 139
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "gen",
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
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 150,
                          "end": 151
                        },
                        "typeArguments": null,
                        "start": 150,
                        "end": 151
                      },
                      "start": 148,
                      "end": 151
                    },
                    "start": 147,
                    "end": 151
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IterableIterator",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 156,
                      "end": 172
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
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
                                "start": 173,
                                "end": 174
                              },
                              "typeArguments": null,
                              "start": 173,
                              "end": 174
                            },
                            {
                              "type": "TSUndefinedKeyword",
                              "start": 177,
                              "end": 186
                            }
                          ],
                          "start": 173,
                          "end": 186
                        },
                        {
                          "type": "TSVoidKeyword",
                          "start": 188,
                          "end": 192
                        }
                      ],
                      "start": 172,
                      "end": 193
                    },
                    "start": 156,
                    "end": 193
                  },
                  "start": 153,
                  "end": 193
                },
                "start": 146,
                "end": 193
              },
              "start": 144,
              "end": 193
            },
            "start": 141,
            "end": 193
          }
        ],
        "returnType": {
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
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 200,
                      "end": 201
                    },
                    "typeArguments": null,
                    "start": 200,
                    "end": 201
                  },
                  "start": 198,
                  "end": 201
                },
                "start": 197,
                "end": 201
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IterableIterator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 206,
                  "end": 222
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
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
                            "start": 223,
                            "end": 224
                          },
                          "typeArguments": null,
                          "start": 223,
                          "end": 224
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 227,
                          "end": 236
                        }
                      ],
                      "start": 223,
                      "end": 236
                    },
                    {
                      "type": "TSVoidKeyword",
                      "start": 238,
                      "end": 242
                    }
                  ],
                  "start": 222,
                  "end": 243
                },
                "start": 206,
                "end": 243
              },
              "start": 203,
              "end": 243
            },
            "start": 196,
            "end": 243
          },
          "start": 194,
          "end": 243
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "FunctionExpression",
                "id": null,
                "generator": true,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 267,
                    "end": 272
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ForOfStatement",
                      "await": false,
                      "left": {
                        "type": "VariableDeclaration",
                        "kind": "const",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "next",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 295,
                              "end": 299
                            },
                            "init": null,
                            "definite": false,
                            "start": 295,
                            "end": 299
                          }
                        ],
                        "declare": false,
                        "start": 289,
                        "end": 299
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "gen",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 303,
                          "end": 306
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "state",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 307,
                            "end": 312
                          }
                        ],
                        "optional": false,
                        "start": 303,
                        "end": 313
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "next",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 333,
                              "end": 337
                            },
                            "consequent": {
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
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "next",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 357,
                                        "end": 361
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "lastStrategyApplied",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 362,
                                        "end": 381
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 357,
                                      "end": 381
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "stratName",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 384,
                                      "end": 393
                                    },
                                    "start": 357,
                                    "end": 393
                                  },
                                  "directive": null,
                                  "start": 357,
                                  "end": 394
                                }
                              ],
                              "start": 339,
                              "end": 408
                            },
                            "alternate": null,
                            "start": 329,
                            "end": 408
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "YieldExpression",
                              "delegate": false,
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "next",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 427,
                                "end": 431
                              },
                              "start": 421,
                              "end": 431
                            },
                            "directive": null,
                            "start": 421,
                            "end": 432
                          }
                        ],
                        "start": 315,
                        "end": 442
                      },
                      "start": 284,
                      "end": 442
                    }
                  ],
                  "start": 274,
                  "end": 448
                },
                "expression": false,
                "start": 257,
                "end": 448
              },
              "start": 250,
              "end": 448
            }
          ],
          "start": 244,
          "end": 450
        },
        "expression": false,
        "start": 78,
        "end": 450
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 71,
      "end": 450
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Strategy",
          "optional": false,
          "typeAnnotation": null,
          "start": 469,
          "end": 477
        },
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
                "start": 478,
                "end": 479
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 478,
              "end": 479
            }
          ],
          "start": 477,
          "end": 480
        },
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSCallSignatureDeclaration",
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 491,
                        "end": 492
                      },
                      "typeArguments": null,
                      "start": 491,
                      "end": 492
                    },
                    "start": 489,
                    "end": 492
                  },
                  "start": 488,
                  "end": 492
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IterableIterator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 495,
                    "end": 511
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
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
                              "start": 512,
                              "end": 513
                            },
                            "typeArguments": null,
                            "start": 512,
                            "end": 513
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 516,
                            "end": 525
                          }
                        ],
                        "start": 512,
                        "end": 525
                      },
                      {
                        "type": "TSVoidKeyword",
                        "start": 527,
                        "end": 531
                      }
                    ],
                    "start": 511,
                    "end": 532
                  },
                  "start": 495,
                  "end": 532
                },
                "start": 493,
                "end": 532
              },
              "start": 487,
              "end": 533
            }
          ],
          "start": 481,
          "end": 535
        },
        "declare": false,
        "start": 459,
        "end": 535
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 452,
      "end": 535
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "State",
          "optional": false,
          "typeAnnotation": null,
          "start": 554,
          "end": 559
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "StrategicState",
              "optional": false,
              "typeAnnotation": null,
              "start": 568,
              "end": 582
            },
            "typeArguments": null,
            "start": 568,
            "end": 582
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
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 589,
                "end": 592
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 594,
                  "end": 600
                },
                "start": 592,
                "end": 600
              },
              "accessibility": null,
              "static": false,
              "start": 589,
              "end": 601
            }
          ],
          "start": 583,
          "end": 603
        },
        "declare": false,
        "start": 544,
        "end": 603
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 537,
      "end": 603
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Nothing1",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Strategy",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 628,
                    "end": 636
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "State",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 637,
                          "end": 642
                        },
                        "typeArguments": null,
                        "start": 637,
                        "end": 642
                      }
                    ],
                    "start": 636,
                    "end": 643
                  },
                  "start": 628,
                  "end": 643
                },
                "start": 626,
                "end": 643
              },
              "start": 618,
              "end": 643
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "strategy",
                "optional": false,
                "typeAnnotation": null,
                "start": 646,
                "end": 654
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "Nothing",
                  "raw": "\"Nothing\"",
                  "start": 655,
                  "end": 664
                },
                {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": true,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
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
                            "name": "State",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 683,
                            "end": 688
                          },
                          "typeArguments": null,
                          "start": 683,
                          "end": 688
                        },
                        "start": 681,
                        "end": 688
                      },
                      "start": 676,
                      "end": 688
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "state",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 703,
                          "end": 708
                        },
                        "start": 696,
                        "end": 709
                      }
                    ],
                    "start": 690,
                    "end": 786
                  },
                  "expression": false,
                  "start": 666,
                  "end": 786
                }
              ],
              "optional": false,
              "start": 646,
              "end": 787
            },
            "definite": false,
            "start": 618,
            "end": 787
          }
        ],
        "declare": false,
        "start": 612,
        "end": 788
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 605,
      "end": 788
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Nothing2",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Strategy",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 813,
                    "end": 821
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "State",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 822,
                          "end": 827
                        },
                        "typeArguments": null,
                        "start": 822,
                        "end": 827
                      }
                    ],
                    "start": 821,
                    "end": 828
                  },
                  "start": 813,
                  "end": 828
                },
                "start": 811,
                "end": 828
              },
              "start": 803,
              "end": 828
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "strategy",
                "optional": false,
                "typeAnnotation": null,
                "start": 831,
                "end": 839
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "Nothing",
                  "raw": "\"Nothing\"",
                  "start": 840,
                  "end": 849
                },
                {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": true,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
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
                            "name": "State",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 868,
                            "end": 873
                          },
                          "typeArguments": null,
                          "start": 868,
                          "end": 873
                        },
                        "start": 866,
                        "end": 873
                      },
                      "start": 861,
                      "end": 873
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "YieldExpression",
                          "delegate": false,
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "state",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 887,
                            "end": 892
                          },
                          "start": 881,
                          "end": 892
                        },
                        "directive": null,
                        "start": 881,
                        "end": 893
                      }
                    ],
                    "start": 875,
                    "end": 895
                  },
                  "expression": false,
                  "start": 851,
                  "end": 895
                }
              ],
              "optional": false,
              "start": 831,
              "end": 896
            },
            "definite": false,
            "start": 803,
            "end": 896
          }
        ],
        "declare": false,
        "start": 797,
        "end": 897
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 790,
      "end": 897
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Nothing3",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Strategy",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 922,
                    "end": 930
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "State",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 931,
                          "end": 936
                        },
                        "typeArguments": null,
                        "start": 931,
                        "end": 936
                      }
                    ],
                    "start": 930,
                    "end": 937
                  },
                  "start": 922,
                  "end": 937
                },
                "start": 920,
                "end": 937
              },
              "start": 912,
              "end": 937
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "strategy",
                "optional": false,
                "typeAnnotation": null,
                "start": 940,
                "end": 948
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "Nothing",
                  "raw": "\"Nothing\"",
                  "start": 949,
                  "end": 958
                },
                {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": true,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
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
                            "name": "State",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 978,
                            "end": 983
                          },
                          "typeArguments": null,
                          "start": 978,
                          "end": 983
                        },
                        "start": 976,
                        "end": 983
                      },
                      "start": 971,
                      "end": 983
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "YieldExpression",
                          "delegate": false,
                          "argument": null,
                          "start": 991,
                          "end": 996
                        },
                        "directive": null,
                        "start": 991,
                        "end": 998
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "state",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1010,
                          "end": 1015
                        },
                        "start": 1003,
                        "end": 1016
                      }
                    ],
                    "start": 985,
                    "end": 1093
                  },
                  "expression": false,
                  "start": 960,
                  "end": 1093
                }
              ],
              "optional": false,
              "start": 940,
              "end": 1094
            },
            "definite": false,
            "start": 912,
            "end": 1094
          }
        ],
        "declare": false,
        "start": 906,
        "end": 1095
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 899,
      "end": 1095
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1097
}
```
