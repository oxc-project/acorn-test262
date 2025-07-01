__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Key",
          "optional": false,
          "typeAnnotation": null,
          "start": 307,
          "end": 310
        },
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
                "start": 311,
                "end": 312
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 311,
              "end": 312
            }
          ],
          "start": 310,
          "end": 313
        },
        "typeAnnotation": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 322,
              "end": 323
            },
            "typeArguments": null,
            "start": 322,
            "end": 323
          },
          "start": 316,
          "end": 323
        },
        "declare": false,
        "start": 302,
        "end": 324
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 295,
      "end": 324
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Value",
          "optional": false,
          "typeAnnotation": null,
          "start": 337,
          "end": 342
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 343,
                "end": 344
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 353,
                  "end": 356
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 357,
                        "end": 358
                      },
                      "typeArguments": null,
                      "start": 357,
                      "end": 358
                    }
                  ],
                  "start": 356,
                  "end": 359
                },
                "start": 353,
                "end": 359
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 343,
              "end": 359
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 361,
                "end": 362
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 361,
              "end": 362
            }
          ],
          "start": 342,
          "end": 363
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 366,
              "end": 367
            },
            "typeArguments": null,
            "start": 366,
            "end": 367
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 368,
              "end": 369
            },
            "typeArguments": null,
            "start": 368,
            "end": 369
          },
          "start": 366,
          "end": 370
        },
        "declare": false,
        "start": 332,
        "end": 371
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 325,
      "end": 371
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
              "name": "updateIfChanged",
              "optional": false,
              "typeAnnotation": null,
              "start": 385,
              "end": 400
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
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
                      "start": 404,
                      "end": 405
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 404,
                    "end": 405
                  }
                ],
                "start": 403,
                "end": 406
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
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
                        "start": 410,
                        "end": 411
                      },
                      "typeArguments": null,
                      "start": 410,
                      "end": 411
                    },
                    "start": 408,
                    "end": 411
                  },
                  "start": 407,
                  "end": 411
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "reduce",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 428,
                          "end": 434
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
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
                                  "start": 438,
                                  "end": 439
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 438,
                                "end": 439
                              }
                            ],
                            "start": 437,
                            "end": 440
                          },
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "u",
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
                                    "start": 444,
                                    "end": 445
                                  },
                                  "typeArguments": null,
                                  "start": 444,
                                  "end": 445
                                },
                                "start": 442,
                                "end": 445
                              },
                              "start": 441,
                              "end": 445
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "update",
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
                                      "name": "u",
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
                                            "start": 459,
                                            "end": 460
                                          },
                                          "typeArguments": null,
                                          "start": 459,
                                          "end": 460
                                        },
                                        "start": 457,
                                        "end": 460
                                      },
                                      "start": 456,
                                      "end": 460
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
                                        "start": 465,
                                        "end": 466
                                      },
                                      "typeArguments": null,
                                      "start": 465,
                                      "end": 466
                                    },
                                    "start": 462,
                                    "end": 466
                                  },
                                  "start": 455,
                                  "end": 466
                                },
                                "start": 453,
                                "end": 466
                              },
                              "start": 447,
                              "end": 466
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "VariableDeclaration",
                                "kind": "const",
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "id": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "set",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 487,
                                      "end": 490
                                    },
                                    "init": {
                                      "type": "ArrowFunctionExpression",
                                      "expression": true,
                                      "async": false,
                                      "typeParameters": null,
                                      "params": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "newU",
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
                                                "start": 500,
                                                "end": 501
                                              },
                                              "typeArguments": null,
                                              "start": 500,
                                              "end": 501
                                            },
                                            "start": 498,
                                            "end": 501
                                          },
                                          "start": 494,
                                          "end": 501
                                        }
                                      ],
                                      "returnType": null,
                                      "body": {
                                        "type": "ConditionalExpression",
                                        "test": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Object",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 506,
                                              "end": 512
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "is",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 513,
                                              "end": 515
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 506,
                                            "end": 515
                                          },
                                          "typeArguments": null,
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "u",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 516,
                                              "end": 517
                                            },
                                            {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "newU",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 519,
                                              "end": 523
                                            }
                                          ],
                                          "optional": false,
                                          "start": 506,
                                          "end": 524
                                        },
                                        "consequent": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "t",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 527,
                                          "end": 528
                                        },
                                        "alternate": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "update",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 531,
                                            "end": 537
                                          },
                                          "typeArguments": null,
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "newU",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 538,
                                              "end": 542
                                            }
                                          ],
                                          "optional": false,
                                          "start": 531,
                                          "end": 543
                                        },
                                        "start": 506,
                                        "end": 543
                                      },
                                      "id": null,
                                      "generator": false,
                                      "start": 493,
                                      "end": 543
                                    },
                                    "definite": false,
                                    "start": 487,
                                    "end": 543
                                  }
                                ],
                                "declare": false,
                                "start": 481,
                                "end": 544
                              },
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Object",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 560,
                                      "end": 566
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "assign",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 567,
                                      "end": 573
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 560,
                                    "end": 573
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "ArrowFunctionExpression",
                                      "expression": true,
                                      "async": false,
                                      "typeParameters": {
                                        "type": "TSTypeParameterDeclaration",
                                        "params": [
                                          {
                                            "type": "TSTypeParameter",
                                            "name": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "K",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 588,
                                              "end": 589
                                            },
                                            "constraint": {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "Key",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 598,
                                                "end": 601
                                              },
                                              "typeArguments": {
                                                "type": "TSTypeParameterInstantiation",
                                                "params": [
                                                  {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "U",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 602,
                                                      "end": 603
                                                    },
                                                    "typeArguments": null,
                                                    "start": 602,
                                                    "end": 603
                                                  }
                                                ],
                                                "start": 601,
                                                "end": 604
                                              },
                                              "start": 598,
                                              "end": 604
                                            },
                                            "default": null,
                                            "in": false,
                                            "out": false,
                                            "const": false,
                                            "start": 588,
                                            "end": 604
                                          }
                                        ],
                                        "start": 587,
                                        "end": 605
                                      },
                                      "params": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "key",
                                          "optional": false,
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "K",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 611,
                                                "end": 612
                                              },
                                              "typeArguments": null,
                                              "start": 611,
                                              "end": 612
                                            },
                                            "start": 609,
                                            "end": 612
                                          },
                                          "start": 606,
                                          "end": 612
                                        }
                                      ],
                                      "returnType": null,
                                      "body": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "reduce",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 633,
                                          "end": 639
                                        },
                                        "typeArguments": {
                                          "type": "TSTypeParameterInstantiation",
                                          "params": [
                                            {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "Value",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 640,
                                                "end": 645
                                              },
                                              "typeArguments": {
                                                "type": "TSTypeParameterInstantiation",
                                                "params": [
                                                  {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "K",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 646,
                                                      "end": 647
                                                    },
                                                    "typeArguments": null,
                                                    "start": 646,
                                                    "end": 647
                                                  },
                                                  {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "U",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 649,
                                                      "end": 650
                                                    },
                                                    "typeArguments": null,
                                                    "start": 649,
                                                    "end": 650
                                                  }
                                                ],
                                                "start": 645,
                                                "end": 651
                                              },
                                              "start": 640,
                                              "end": 651
                                            }
                                          ],
                                          "start": 639,
                                          "end": 652
                                        },
                                        "arguments": [
                                          {
                                            "type": "TSAsExpression",
                                            "expression": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "u",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 653,
                                                "end": 654
                                              },
                                              "property": {
                                                "type": "TSAsExpression",
                                                "expression": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "key",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 655,
                                                  "end": 658
                                                },
                                                "typeAnnotation": {
                                                  "type": "TSTypeOperator",
                                                  "operator": "keyof",
                                                  "typeAnnotation": {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "U",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 668,
                                                      "end": 669
                                                    },
                                                    "typeArguments": null,
                                                    "start": 668,
                                                    "end": 669
                                                  },
                                                  "start": 662,
                                                  "end": 669
                                                },
                                                "start": 655,
                                                "end": 669
                                              },
                                              "optional": false,
                                              "computed": true,
                                              "start": 653,
                                              "end": 670
                                            },
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "Value",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 674,
                                                "end": 679
                                              },
                                              "typeArguments": {
                                                "type": "TSTypeParameterInstantiation",
                                                "params": [
                                                  {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "K",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 680,
                                                      "end": 681
                                                    },
                                                    "typeArguments": null,
                                                    "start": 680,
                                                    "end": 681
                                                  },
                                                  {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "U",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 683,
                                                      "end": 684
                                                    },
                                                    "typeArguments": null,
                                                    "start": 683,
                                                    "end": 684
                                                  }
                                                ],
                                                "start": 679,
                                                "end": 685
                                              },
                                              "start": 674,
                                              "end": 685
                                            },
                                            "start": 653,
                                            "end": 685
                                          },
                                          {
                                            "type": "ArrowFunctionExpression",
                                            "expression": false,
                                            "async": false,
                                            "typeParameters": null,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "v",
                                                "optional": false,
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "typeAnnotation": {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "Value",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 691,
                                                      "end": 696
                                                    },
                                                    "typeArguments": {
                                                      "type": "TSTypeParameterInstantiation",
                                                      "params": [
                                                        {
                                                          "type": "TSTypeReference",
                                                          "typeName": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "K",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 697,
                                                            "end": 698
                                                          },
                                                          "typeArguments": null,
                                                          "start": 697,
                                                          "end": 698
                                                        },
                                                        {
                                                          "type": "TSTypeReference",
                                                          "typeName": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "U",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 700,
                                                            "end": 701
                                                          },
                                                          "typeArguments": null,
                                                          "start": 700,
                                                          "end": 701
                                                        }
                                                      ],
                                                      "start": 696,
                                                      "end": 702
                                                    },
                                                    "start": 691,
                                                    "end": 702
                                                  },
                                                  "start": 689,
                                                  "end": 702
                                                },
                                                "start": 688,
                                                "end": 702
                                              }
                                            ],
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
                                                      "name": "update",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 736,
                                                      "end": 742
                                                    },
                                                    "typeArguments": null,
                                                    "arguments": [
                                                      {
                                                        "type": "CallExpression",
                                                        "callee": {
                                                          "type": "MemberExpression",
                                                          "object": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "Object",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 743,
                                                            "end": 749
                                                          },
                                                          "property": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "assign",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 750,
                                                            "end": 756
                                                          },
                                                          "optional": false,
                                                          "computed": false,
                                                          "start": 743,
                                                          "end": 756
                                                        },
                                                        "typeArguments": null,
                                                        "arguments": [
                                                          {
                                                            "type": "ConditionalExpression",
                                                            "test": {
                                                              "type": "CallExpression",
                                                              "callee": {
                                                                "type": "MemberExpression",
                                                                "object": {
                                                                  "type": "Identifier",
                                                                  "decorators": [],
                                                                  "name": "Array",
                                                                  "optional": false,
                                                                  "typeAnnotation": null,
                                                                  "start": 757,
                                                                  "end": 762
                                                                },
                                                                "property": {
                                                                  "type": "Identifier",
                                                                  "decorators": [],
                                                                  "name": "isArray",
                                                                  "optional": false,
                                                                  "typeAnnotation": null,
                                                                  "start": 763,
                                                                  "end": 770
                                                                },
                                                                "optional": false,
                                                                "computed": false,
                                                                "start": 757,
                                                                "end": 770
                                                              },
                                                              "typeArguments": null,
                                                              "arguments": [
                                                                {
                                                                  "type": "Identifier",
                                                                  "decorators": [],
                                                                  "name": "u",
                                                                  "optional": false,
                                                                  "typeAnnotation": null,
                                                                  "start": 771,
                                                                  "end": 772
                                                                }
                                                              ],
                                                              "optional": false,
                                                              "start": 757,
                                                              "end": 773
                                                            },
                                                            "consequent": {
                                                              "type": "ArrayExpression",
                                                              "elements": [],
                                                              "start": 776,
                                                              "end": 778
                                                            },
                                                            "alternate": {
                                                              "type": "ObjectExpression",
                                                              "properties": [],
                                                              "start": 781,
                                                              "end": 783
                                                            },
                                                            "start": 757,
                                                            "end": 783
                                                          },
                                                          {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "u",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 785,
                                                            "end": 786
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
                                                                  "name": "key",
                                                                  "optional": false,
                                                                  "typeAnnotation": null,
                                                                  "start": 791,
                                                                  "end": 794
                                                                },
                                                                "value": {
                                                                  "type": "Identifier",
                                                                  "decorators": [],
                                                                  "name": "v",
                                                                  "optional": false,
                                                                  "typeAnnotation": null,
                                                                  "start": 797,
                                                                  "end": 798
                                                                },
                                                                "method": false,
                                                                "shorthand": false,
                                                                "computed": true,
                                                                "optional": false,
                                                                "start": 790,
                                                                "end": 798
                                                              }
                                                            ],
                                                            "start": 788,
                                                            "end": 800
                                                          }
                                                        ],
                                                        "optional": false,
                                                        "start": 743,
                                                        "end": 801
                                                      }
                                                    ],
                                                    "optional": false,
                                                    "start": 736,
                                                    "end": 802
                                                  },
                                                  "start": 729,
                                                  "end": 803
                                                }
                                              ],
                                              "start": 707,
                                              "end": 821
                                            },
                                            "id": null,
                                            "generator": false,
                                            "start": 687,
                                            "end": 821
                                          }
                                        ],
                                        "optional": false,
                                        "start": 633,
                                        "end": 822
                                      },
                                      "id": null,
                                      "generator": false,
                                      "start": 587,
                                      "end": 822
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
                                            "name": "map",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 838,
                                            "end": 841
                                          },
                                          "value": {
                                            "type": "ArrowFunctionExpression",
                                            "expression": true,
                                            "async": false,
                                            "typeParameters": null,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "updater",
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
                                                        "name": "u",
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
                                                              "start": 857,
                                                              "end": 858
                                                            },
                                                            "typeArguments": null,
                                                            "start": 857,
                                                            "end": 858
                                                          },
                                                          "start": 855,
                                                          "end": 858
                                                        },
                                                        "start": 854,
                                                        "end": 858
                                                      }
                                                    ],
                                                    "returnType": {
                                                      "type": "TSTypeAnnotation",
                                                      "typeAnnotation": {
                                                        "type": "TSTypeReference",
                                                        "typeName": {
                                                          "type": "Identifier",
                                                          "decorators": [],
                                                          "name": "U",
                                                          "optional": false,
                                                          "typeAnnotation": null,
                                                          "start": 863,
                                                          "end": 864
                                                        },
                                                        "typeArguments": null,
                                                        "start": 863,
                                                        "end": 864
                                                      },
                                                      "start": 860,
                                                      "end": 864
                                                    },
                                                    "start": 853,
                                                    "end": 864
                                                  },
                                                  "start": 851,
                                                  "end": 864
                                                },
                                                "start": 844,
                                                "end": 864
                                              }
                                            ],
                                            "returnType": null,
                                            "body": {
                                              "type": "CallExpression",
                                              "callee": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "set",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 869,
                                                "end": 872
                                              },
                                              "typeArguments": null,
                                              "arguments": [
                                                {
                                                  "type": "CallExpression",
                                                  "callee": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "updater",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 873,
                                                    "end": 880
                                                  },
                                                  "typeArguments": null,
                                                  "arguments": [
                                                    {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "u",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 881,
                                                      "end": 882
                                                    }
                                                  ],
                                                  "optional": false,
                                                  "start": 873,
                                                  "end": 883
                                                }
                                              ],
                                              "optional": false,
                                              "start": 869,
                                              "end": 884
                                            },
                                            "id": null,
                                            "generator": false,
                                            "start": 843,
                                            "end": 884
                                          },
                                          "method": false,
                                          "shorthand": false,
                                          "computed": false,
                                          "optional": false,
                                          "start": 838,
                                          "end": 884
                                        },
                                        {
                                          "type": "Property",
                                          "kind": "init",
                                          "key": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "set",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 886,
                                            "end": 889
                                          },
                                          "value": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "set",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 886,
                                            "end": 889
                                          },
                                          "method": false,
                                          "shorthand": true,
                                          "computed": false,
                                          "optional": false,
                                          "start": 886,
                                          "end": 889
                                        }
                                      ],
                                      "start": 836,
                                      "end": 891
                                    }
                                  ],
                                  "optional": false,
                                  "start": 560,
                                  "end": 892
                                },
                                "start": 553,
                                "end": 893
                              }
                            ],
                            "start": 471,
                            "end": 899
                          },
                          "id": null,
                          "generator": false,
                          "start": 437,
                          "end": 899
                        },
                        "definite": false,
                        "start": 428,
                        "end": 899
                      }
                    ],
                    "declare": false,
                    "start": 422,
                    "end": 900
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "reduce",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 912,
                        "end": 918
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 919,
                              "end": 920
                            },
                            "typeArguments": null,
                            "start": 919,
                            "end": 920
                          }
                        ],
                        "start": 918,
                        "end": 921
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 922,
                          "end": 923
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
                              "name": "t",
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
                                    "start": 929,
                                    "end": 930
                                  },
                                  "typeArguments": null,
                                  "start": 929,
                                  "end": 930
                                },
                                "start": 927,
                                "end": 930
                              },
                              "start": 926,
                              "end": 930
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "t",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 935,
                            "end": 936
                          },
                          "id": null,
                          "generator": false,
                          "start": 925,
                          "end": 936
                        }
                      ],
                      "optional": false,
                      "start": 912,
                      "end": 937
                    },
                    "start": 905,
                    "end": 938
                  }
                ],
                "start": 416,
                "end": 940
              },
              "id": null,
              "generator": false,
              "start": 403,
              "end": 940
            },
            "definite": false,
            "start": 385,
            "end": 940
          }
        ],
        "declare": false,
        "start": 379,
        "end": 941
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 372,
      "end": 941
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
              "name": "testRecFun",
              "optional": false,
              "typeAnnotation": null,
              "start": 1026,
              "end": 1036
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
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
                      "start": 1040,
                      "end": 1041
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Object",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1050,
                        "end": 1056
                      },
                      "typeArguments": null,
                      "start": 1050,
                      "end": 1056
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1040,
                    "end": 1056
                  }
                ],
                "start": 1039,
                "end": 1057
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "parent",
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
                        "start": 1066,
                        "end": 1067
                      },
                      "typeArguments": null,
                      "start": 1066,
                      "end": 1067
                    },
                    "start": 1064,
                    "end": 1067
                  },
                  "start": 1058,
                  "end": 1067
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "result",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1095,
                            "end": 1101
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "parent",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1103,
                            "end": 1109
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1095,
                          "end": 1109
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "deeper",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1119,
                            "end": 1125
                          },
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": false,
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
                                    "start": 1128,
                                    "end": 1129
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Object",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1138,
                                      "end": 1144
                                    },
                                    "typeArguments": null,
                                    "start": 1138,
                                    "end": 1144
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1128,
                                  "end": 1144
                                }
                              ],
                              "start": 1127,
                              "end": 1145
                            },
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "child",
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
                                      "start": 1153,
                                      "end": 1154
                                    },
                                    "typeArguments": null,
                                    "start": 1153,
                                    "end": 1154
                                  },
                                  "start": 1151,
                                  "end": 1154
                                },
                                "start": 1146,
                                "end": 1154
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "testRecFun",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1171,
                                "end": 1181
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSIntersectionType",
                                    "types": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "T",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1182,
                                          "end": 1183
                                        },
                                        "typeArguments": null,
                                        "start": 1182,
                                        "end": 1183
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "U",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1186,
                                          "end": 1187
                                        },
                                        "typeArguments": null,
                                        "start": 1186,
                                        "end": 1187
                                      }
                                    ],
                                    "start": 1182,
                                    "end": 1187
                                  }
                                ],
                                "start": 1181,
                                "end": 1188
                              },
                              "arguments": [
                                {
                                  "type": "ObjectExpression",
                                  "properties": [
                                    {
                                      "type": "SpreadElement",
                                      "argument": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "parent",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1194,
                                        "end": 1200
                                      },
                                      "start": 1191,
                                      "end": 1200
                                    },
                                    {
                                      "type": "SpreadElement",
                                      "argument": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "child",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1205,
                                        "end": 1210
                                      },
                                      "start": 1202,
                                      "end": 1210
                                    }
                                  ],
                                  "start": 1189,
                                  "end": 1212
                                }
                              ],
                              "optional": false,
                              "start": 1171,
                              "end": 1213
                            },
                            "id": null,
                            "generator": false,
                            "start": 1127,
                            "end": 1213
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1119,
                          "end": 1213
                        }
                      ],
                      "start": 1085,
                      "end": 1219
                    },
                    "start": 1078,
                    "end": 1220
                  }
                ],
                "start": 1072,
                "end": 1222
              },
              "id": null,
              "generator": false,
              "start": 1039,
              "end": 1222
            },
            "definite": false,
            "start": 1026,
            "end": 1222
          }
        ],
        "declare": false,
        "start": 1020,
        "end": 1222
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1013,
      "end": 1222
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
            "name": "p1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1229,
            "end": 1231
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "testRecFun",
              "optional": false,
              "typeAnnotation": null,
              "start": 1234,
              "end": 1244
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
                      "name": "one",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1247,
                      "end": 1250
                    },
                    "value": {
                      "type": "Literal",
                      "value": "1",
                      "raw": "'1'",
                      "start": 1252,
                      "end": 1255
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1247,
                    "end": 1255
                  }
                ],
                "start": 1245,
                "end": 1257
              }
            ],
            "optional": false,
            "start": 1234,
            "end": 1258
          },
          "definite": false,
          "start": 1229,
          "end": 1258
        }
      ],
      "declare": false,
      "start": 1225,
      "end": 1258
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1264,
              "end": 1266
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null,
              "start": 1267,
              "end": 1273
            },
            "optional": false,
            "computed": false,
            "start": 1264,
            "end": 1273
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "one",
            "optional": false,
            "typeAnnotation": null,
            "start": 1274,
            "end": 1277
          },
          "optional": false,
          "computed": false,
          "start": 1264,
          "end": 1277
        },
        "prefix": true,
        "start": 1259,
        "end": 1277
      },
      "directive": null,
      "start": 1259,
      "end": 1278
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
            "name": "p2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1283,
            "end": 1285
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1288,
                "end": 1290
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "deeper",
                "optional": false,
                "typeAnnotation": null,
                "start": 1291,
                "end": 1297
              },
              "optional": false,
              "computed": false,
              "start": 1288,
              "end": 1297
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
                      "name": "two",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1300,
                      "end": 1303
                    },
                    "value": {
                      "type": "Literal",
                      "value": "2",
                      "raw": "'2'",
                      "start": 1305,
                      "end": 1308
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1300,
                    "end": 1308
                  }
                ],
                "start": 1298,
                "end": 1310
              }
            ],
            "optional": false,
            "start": 1288,
            "end": 1311
          },
          "definite": false,
          "start": 1283,
          "end": 1311
        }
      ],
      "declare": false,
      "start": 1279,
      "end": 1311
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1317,
              "end": 1319
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null,
              "start": 1320,
              "end": 1326
            },
            "optional": false,
            "computed": false,
            "start": 1317,
            "end": 1326
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "one",
            "optional": false,
            "typeAnnotation": null,
            "start": 1327,
            "end": 1330
          },
          "optional": false,
          "computed": false,
          "start": 1317,
          "end": 1330
        },
        "prefix": true,
        "start": 1312,
        "end": 1330
      },
      "directive": null,
      "start": 1312,
      "end": 1331
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1337,
              "end": 1339
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null,
              "start": 1340,
              "end": 1346
            },
            "optional": false,
            "computed": false,
            "start": 1337,
            "end": 1346
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "two",
            "optional": false,
            "typeAnnotation": null,
            "start": 1347,
            "end": 1350
          },
          "optional": false,
          "computed": false,
          "start": 1337,
          "end": 1350
        },
        "prefix": true,
        "start": 1332,
        "end": 1350
      },
      "directive": null,
      "start": 1332,
      "end": 1351
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
            "name": "p3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1356,
            "end": 1358
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1361,
                "end": 1363
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "deeper",
                "optional": false,
                "typeAnnotation": null,
                "start": 1364,
                "end": 1370
              },
              "optional": false,
              "computed": false,
              "start": 1361,
              "end": 1370
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
                      "name": "three",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1373,
                      "end": 1378
                    },
                    "value": {
                      "type": "Literal",
                      "value": "3",
                      "raw": "'3'",
                      "start": 1380,
                      "end": 1383
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1373,
                    "end": 1383
                  }
                ],
                "start": 1371,
                "end": 1385
              }
            ],
            "optional": false,
            "start": 1361,
            "end": 1386
          },
          "definite": false,
          "start": 1356,
          "end": 1386
        }
      ],
      "declare": false,
      "start": 1352,
      "end": 1386
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "p3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1392,
              "end": 1394
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null,
              "start": 1395,
              "end": 1401
            },
            "optional": false,
            "computed": false,
            "start": 1392,
            "end": 1401
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "one",
            "optional": false,
            "typeAnnotation": null,
            "start": 1402,
            "end": 1405
          },
          "optional": false,
          "computed": false,
          "start": 1392,
          "end": 1405
        },
        "prefix": true,
        "start": 1387,
        "end": 1405
      },
      "directive": null,
      "start": 1387,
      "end": 1406
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "p3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1412,
              "end": 1414
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null,
              "start": 1415,
              "end": 1421
            },
            "optional": false,
            "computed": false,
            "start": 1412,
            "end": 1421
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "two",
            "optional": false,
            "typeAnnotation": null,
            "start": 1422,
            "end": 1425
          },
          "optional": false,
          "computed": false,
          "start": 1412,
          "end": 1425
        },
        "prefix": true,
        "start": 1407,
        "end": 1425
      },
      "directive": null,
      "start": 1407,
      "end": 1426
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "p3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1432,
              "end": 1434
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null,
              "start": 1435,
              "end": 1441
            },
            "optional": false,
            "computed": false,
            "start": 1432,
            "end": 1441
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "three",
            "optional": false,
            "typeAnnotation": null,
            "start": 1442,
            "end": 1447
          },
          "optional": false,
          "computed": false,
          "start": 1432,
          "end": 1447
        },
        "prefix": true,
        "start": 1427,
        "end": 1447
      },
      "directive": null,
      "start": 1427,
      "end": 1448
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 295,
  "end": 1448
}
```
