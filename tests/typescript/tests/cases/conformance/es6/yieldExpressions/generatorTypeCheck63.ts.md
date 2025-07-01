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
              "name": "Nothing",
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
                    "start": 627,
                    "end": 635
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
                          "start": 636,
                          "end": 641
                        },
                        "typeArguments": null,
                        "start": 636,
                        "end": 641
                      }
                    ],
                    "start": 635,
                    "end": 642
                  },
                  "start": 627,
                  "end": 642
                },
                "start": 625,
                "end": 642
              },
              "start": 618,
              "end": 642
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "strategy",
                "optional": false,
                "typeAnnotation": null,
                "start": 645,
                "end": 653
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "Nothing",
                  "raw": "\"Nothing\"",
                  "start": 654,
                  "end": 663
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
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "YieldExpression",
                          "delegate": false,
                          "argument": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 702,
                            "end": 703
                          },
                          "start": 696,
                          "end": 703
                        },
                        "directive": null,
                        "start": 696,
                        "end": 704
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "state",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 765,
                          "end": 770
                        },
                        "start": 758,
                        "end": 771
                      }
                    ],
                    "start": 690,
                    "end": 848
                  },
                  "expression": false,
                  "start": 665,
                  "end": 848
                }
              ],
              "optional": false,
              "start": 645,
              "end": 849
            },
            "definite": false,
            "start": 618,
            "end": 849
          }
        ],
        "declare": false,
        "start": 612,
        "end": 850
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 605,
      "end": 850
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
                    "start": 875,
                    "end": 883
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
                          "start": 884,
                          "end": 889
                        },
                        "typeArguments": null,
                        "start": 884,
                        "end": 889
                      }
                    ],
                    "start": 883,
                    "end": 890
                  },
                  "start": 875,
                  "end": 890
                },
                "start": 873,
                "end": 890
              },
              "start": 865,
              "end": 890
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "strategy",
                "optional": false,
                "typeAnnotation": null,
                "start": 893,
                "end": 901
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "Nothing",
                  "raw": "\"Nothing\"",
                  "start": 902,
                  "end": 911
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
                            "start": 931,
                            "end": 936
                          },
                          "typeArguments": null,
                          "start": 931,
                          "end": 936
                        },
                        "start": 929,
                        "end": 936
                      },
                      "start": 924,
                      "end": 936
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 938,
                    "end": 941
                  },
                  "expression": false,
                  "start": 913,
                  "end": 941
                }
              ],
              "optional": false,
              "start": 893,
              "end": 942
            },
            "definite": false,
            "start": 865,
            "end": 942
          }
        ],
        "declare": false,
        "start": 859,
        "end": 943
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 852,
      "end": 943
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
                    "start": 968,
                    "end": 976
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
                          "start": 977,
                          "end": 982
                        },
                        "typeArguments": null,
                        "start": 977,
                        "end": 982
                      }
                    ],
                    "start": 976,
                    "end": 983
                  },
                  "start": 968,
                  "end": 983
                },
                "start": 966,
                "end": 983
              },
              "start": 958,
              "end": 983
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "strategy",
                "optional": false,
                "typeAnnotation": null,
                "start": 986,
                "end": 994
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "Nothing",
                  "raw": "\"Nothing\"",
                  "start": 995,
                  "end": 1004
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
                            "start": 1024,
                            "end": 1029
                          },
                          "typeArguments": null,
                          "start": 1024,
                          "end": 1029
                        },
                        "start": 1022,
                        "end": 1029
                      },
                      "start": 1017,
                      "end": 1029
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1044,
                          "end": 1045
                        },
                        "start": 1037,
                        "end": 1046
                      }
                    ],
                    "start": 1031,
                    "end": 1123
                  },
                  "expression": false,
                  "start": 1006,
                  "end": 1123
                }
              ],
              "optional": false,
              "start": 986,
              "end": 1124
            },
            "definite": false,
            "start": 958,
            "end": 1124
          }
        ],
        "declare": false,
        "start": 952,
        "end": 1125
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 945,
      "end": 1125
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
                    "start": 1150,
                    "end": 1158
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
                          "start": 1159,
                          "end": 1164
                        },
                        "typeArguments": null,
                        "start": 1159,
                        "end": 1164
                      }
                    ],
                    "start": 1158,
                    "end": 1165
                  },
                  "start": 1150,
                  "end": 1165
                },
                "start": 1148,
                "end": 1165
              },
              "start": 1140,
              "end": 1165
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "strategy",
                "optional": false,
                "typeAnnotation": null,
                "start": 1168,
                "end": 1176
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "Nothing",
                  "raw": "\"Nothing\"",
                  "start": 1177,
                  "end": 1186
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
                            "start": 1206,
                            "end": 1211
                          },
                          "typeArguments": null,
                          "start": 1206,
                          "end": 1211
                        },
                        "start": 1204,
                        "end": 1211
                      },
                      "start": 1199,
                      "end": 1211
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
                            "start": 1225,
                            "end": 1230
                          },
                          "start": 1219,
                          "end": 1230
                        },
                        "directive": null,
                        "start": 1219,
                        "end": 1231
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1243,
                          "end": 1244
                        },
                        "start": 1236,
                        "end": 1245
                      }
                    ],
                    "start": 1213,
                    "end": 1322
                  },
                  "expression": false,
                  "start": 1188,
                  "end": 1322
                }
              ],
              "optional": false,
              "start": 1168,
              "end": 1323
            },
            "definite": false,
            "start": 1140,
            "end": 1323
          }
        ],
        "declare": false,
        "start": 1134,
        "end": 1324
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1127,
      "end": 1324
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1324
}
```
