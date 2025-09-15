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
        "name": "NonGenericParameter",
        "optional": false,
        "typeAnnotation": null,
        "start": 196,
        "end": 215
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSCallSignatureDeclaration",
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
                                  "type": "TSBooleanKeyword",
                                  "start": 243,
                                  "end": 250
                                },
                                "start": 241,
                                "end": 250
                              },
                              "start": 240,
                              "end": 250
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 253,
                              "end": 260
                            },
                            "start": 251,
                            "end": 260
                          },
                          "start": 239,
                          "end": 261
                        },
                        {
                          "type": "TSCallSignatureDeclaration",
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
                                  "start": 274,
                                  "end": 280
                                },
                                "start": 272,
                                "end": 280
                              },
                              "start": 271,
                              "end": 280
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 283,
                              "end": 289
                            },
                            "start": 281,
                            "end": 289
                          },
                          "start": 270,
                          "end": 290
                        }
                      ],
                      "start": 229,
                      "end": 296
                    },
                    "start": 227,
                    "end": 296
                  },
                  "start": 226,
                  "end": 296
                },
                "init": null,
                "definite": false,
                "start": 226,
                "end": 296
              }
            ],
            "declare": false,
            "start": 222,
            "end": 296
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo4",
              "optional": false,
              "typeAnnotation": null,
              "start": 311,
              "end": 315
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
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 327,
                      "end": 328
                    },
                    "typeArguments": null,
                    "start": 320,
                    "end": 328
                  },
                  "start": 318,
                  "end": 328
                },
                "start": 316,
                "end": 328
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
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 347,
                    "end": 349
                  },
                  "start": 340,
                  "end": 350
                }
              ],
              "start": 330,
              "end": 356
            },
            "expression": false,
            "start": 302,
            "end": 356
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
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 366,
                  "end": 367
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 370,
                    "end": 374
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 375,
                      "end": 376
                    }
                  ],
                  "optional": false,
                  "start": 370,
                  "end": 377
                },
                "definite": false,
                "start": 366,
                "end": 377
              }
            ],
            "declare": false,
            "start": 362,
            "end": 378
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
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 387,
                  "end": 389
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 392,
                    "end": 396
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
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 398,
                              "end": 399
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 398,
                            "end": 399
                          }
                        ],
                        "start": 397,
                        "end": 400
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
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 404,
                                "end": 405
                              },
                              "typeArguments": null,
                              "start": 404,
                              "end": 405
                            },
                            "start": 402,
                            "end": 405
                          },
                          "start": 401,
                          "end": 405
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 410,
                        "end": 411
                      },
                      "id": null,
                      "generator": false,
                      "start": 397,
                      "end": 411
                    }
                  ],
                  "optional": false,
                  "start": 392,
                  "end": 412
                },
                "definite": false,
                "start": 387,
                "end": 412
              }
            ],
            "declare": false,
            "start": 383,
            "end": 413
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
                  "name": "r4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 422,
                  "end": 424
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 427,
                    "end": 431
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 432,
                          "end": 433
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 437,
                        "end": 438
                      },
                      "id": null,
                      "generator": false,
                      "start": 432,
                      "end": 438
                    }
                  ],
                  "optional": false,
                  "start": 427,
                  "end": 439
                },
                "definite": false,
                "start": 422,
                "end": 439
              }
            ],
            "declare": false,
            "start": 418,
            "end": 440
          }
        ],
        "start": 216,
        "end": 446
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 186,
      "end": 446
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GenericParameter",
        "optional": false,
        "typeAnnotation": null,
        "start": 458,
        "end": 474
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo5",
              "optional": false,
              "typeAnnotation": null,
              "start": 490,
              "end": 494
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
                    "start": 495,
                    "end": 496
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 495,
                  "end": 496
                }
              ],
              "start": 494,
              "end": 497
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
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
                                  "start": 508,
                                  "end": 509
                                },
                                "typeArguments": null,
                                "start": 508,
                                "end": 509
                              },
                              "start": 506,
                              "end": 509
                            },
                            "start": 505,
                            "end": 509
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 512,
                            "end": 518
                          },
                          "start": 510,
                          "end": 518
                        },
                        "start": 504,
                        "end": 519
                      },
                      {
                        "type": "TSCallSignatureDeclaration",
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
                                "type": "TSNumberKeyword",
                                "start": 524,
                                "end": 530
                              },
                              "start": 522,
                              "end": 530
                            },
                            "start": 521,
                            "end": 530
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
                              "start": 533,
                              "end": 534
                            },
                            "typeArguments": null,
                            "start": 533,
                            "end": 534
                          },
                          "start": 531,
                          "end": 534
                        },
                        "start": 520,
                        "end": 534
                      }
                    ],
                    "start": 502,
                    "end": 536
                  },
                  "start": 500,
                  "end": 536
                },
                "start": 498,
                "end": 536
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
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 555,
                    "end": 557
                  },
                  "start": 548,
                  "end": 558
                }
              ],
              "start": 538,
              "end": 564
            },
            "expression": false,
            "start": 481,
            "end": 564
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
                  "name": "r5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 574,
                  "end": 576
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 579,
                    "end": 583
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 584,
                          "end": 585
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 589,
                        "end": 590
                      },
                      "id": null,
                      "generator": false,
                      "start": 584,
                      "end": 590
                    }
                  ],
                  "optional": false,
                  "start": 579,
                  "end": 591
                },
                "definite": false,
                "start": 574,
                "end": 591
              }
            ],
            "declare": false,
            "start": 570,
            "end": 592
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
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSCallSignatureDeclaration",
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
                                  "start": 711,
                                  "end": 712
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 711,
                                "end": 712
                              }
                            ],
                            "start": 710,
                            "end": 713
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
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 717,
                                    "end": 718
                                  },
                                  "typeArguments": null,
                                  "start": 717,
                                  "end": 718
                                },
                                "start": 715,
                                "end": 718
                              },
                              "start": 714,
                              "end": 718
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 721,
                              "end": 727
                            },
                            "start": 719,
                            "end": 727
                          },
                          "start": 710,
                          "end": 728
                        },
                        {
                          "type": "TSCallSignatureDeclaration",
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
                                  "start": 730,
                                  "end": 731
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 730,
                                "end": 731
                              }
                            ],
                            "start": 729,
                            "end": 732
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
                                  "type": "TSNumberKeyword",
                                  "start": 736,
                                  "end": 742
                                },
                                "start": 734,
                                "end": 742
                              },
                              "start": 733,
                              "end": 742
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
                                "start": 745,
                                "end": 746
                              },
                              "typeArguments": null,
                              "start": 745,
                              "end": 746
                            },
                            "start": 743,
                            "end": 746
                          },
                          "start": 729,
                          "end": 747
                        }
                      ],
                      "start": 708,
                      "end": 749
                    },
                    "start": 706,
                    "end": 749
                  },
                  "start": 705,
                  "end": 749
                },
                "init": null,
                "definite": false,
                "start": 705,
                "end": 749
              }
            ],
            "declare": false,
            "start": 701,
            "end": 749
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
                  "name": "r7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 758,
                  "end": 760
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 763,
                    "end": 767
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 768,
                      "end": 769
                    }
                  ],
                  "optional": false,
                  "start": 763,
                  "end": 770
                },
                "definite": false,
                "start": 758,
                "end": 770
              }
            ],
            "declare": false,
            "start": 754,
            "end": 771
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo6",
              "optional": false,
              "typeAnnotation": null,
              "start": 817,
              "end": 821
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
                    "start": 822,
                    "end": 823
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 822,
                  "end": 823
                }
              ],
              "start": 821,
              "end": 824
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
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
                                  "start": 835,
                                  "end": 836
                                },
                                "typeArguments": null,
                                "start": 835,
                                "end": 836
                              },
                              "start": 833,
                              "end": 836
                            },
                            "start": 832,
                            "end": 836
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 839,
                            "end": 845
                          },
                          "start": 837,
                          "end": 845
                        },
                        "start": 831,
                        "end": 846
                      },
                      {
                        "type": "TSCallSignatureDeclaration",
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
                                  "start": 851,
                                  "end": 852
                                },
                                "typeArguments": null,
                                "start": 851,
                                "end": 852
                              },
                              "start": 849,
                              "end": 852
                            },
                            "start": 848,
                            "end": 852
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": true,
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
                                  "start": 858,
                                  "end": 859
                                },
                                "typeArguments": null,
                                "start": 858,
                                "end": 859
                              },
                              "start": 856,
                              "end": 859
                            },
                            "start": 854,
                            "end": 859
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 862,
                            "end": 868
                          },
                          "start": 860,
                          "end": 868
                        },
                        "start": 847,
                        "end": 868
                      }
                    ],
                    "start": 829,
                    "end": 870
                  },
                  "start": 827,
                  "end": 870
                },
                "start": 825,
                "end": 870
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
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 889,
                    "end": 891
                  },
                  "start": 882,
                  "end": 892
                }
              ],
              "start": 872,
              "end": 898
            },
            "expression": false,
            "start": 808,
            "end": 898
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
                  "name": "r8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 908,
                  "end": 910
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo6",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 913,
                    "end": 917
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 918,
                          "end": 919
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 923,
                        "end": 924
                      },
                      "id": null,
                      "generator": false,
                      "start": 918,
                      "end": 924
                    }
                  ],
                  "optional": false,
                  "start": 913,
                  "end": 925
                },
                "definite": false,
                "start": 908,
                "end": 925
              }
            ],
            "declare": false,
            "start": 904,
            "end": 926
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
                  "name": "r9",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1039,
                  "end": 1041
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo6",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1044,
                    "end": 1048
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
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1050,
                              "end": 1051
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1050,
                            "end": 1051
                          }
                        ],
                        "start": 1049,
                        "end": 1052
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
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1056,
                                "end": 1057
                              },
                              "typeArguments": null,
                              "start": 1056,
                              "end": 1057
                            },
                            "start": 1054,
                            "end": 1057
                          },
                          "start": 1053,
                          "end": 1057
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": "",
                        "raw": "''",
                        "start": 1062,
                        "end": 1064
                      },
                      "id": null,
                      "generator": false,
                      "start": 1049,
                      "end": 1064
                    }
                  ],
                  "optional": false,
                  "start": 1044,
                  "end": 1065
                },
                "definite": false,
                "start": 1039,
                "end": 1065
              }
            ],
            "declare": false,
            "start": 1035,
            "end": 1066
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
                  "name": "r11",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1106,
                  "end": 1109
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo6",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1112,
                    "end": 1116
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
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1118,
                              "end": 1119
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1118,
                            "end": 1119
                          }
                        ],
                        "start": 1117,
                        "end": 1120
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
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1124,
                                "end": 1125
                              },
                              "typeArguments": null,
                              "start": 1124,
                              "end": 1125
                            },
                            "start": 1122,
                            "end": 1125
                          },
                          "start": 1121,
                          "end": 1125
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": true,
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
                                "start": 1131,
                                "end": 1132
                              },
                              "typeArguments": null,
                              "start": 1131,
                              "end": 1132
                            },
                            "start": 1129,
                            "end": 1132
                          },
                          "start": 1127,
                          "end": 1132
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": "",
                        "raw": "''",
                        "start": 1137,
                        "end": 1139
                      },
                      "id": null,
                      "generator": false,
                      "start": 1117,
                      "end": 1139
                    }
                  ],
                  "optional": false,
                  "start": 1112,
                  "end": 1140
                },
                "definite": false,
                "start": 1106,
                "end": 1140
              }
            ],
            "declare": false,
            "start": 1102,
            "end": 1141
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo7",
              "optional": false,
              "typeAnnotation": null,
              "start": 1187,
              "end": 1191
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
                    "start": 1192,
                    "end": 1193
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1192,
                  "end": 1193
                }
              ],
              "start": 1191,
              "end": 1194
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
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1197,
                      "end": 1198
                    },
                    "typeArguments": null,
                    "start": 1197,
                    "end": 1198
                  },
                  "start": 1196,
                  "end": 1198
                },
                "start": 1195,
                "end": 1198
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
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
                                  "start": 1210,
                                  "end": 1211
                                },
                                "typeArguments": null,
                                "start": 1210,
                                "end": 1211
                              },
                              "start": 1208,
                              "end": 1211
                            },
                            "start": 1207,
                            "end": 1211
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1214,
                            "end": 1220
                          },
                          "start": 1212,
                          "end": 1220
                        },
                        "start": 1206,
                        "end": 1221
                      },
                      {
                        "type": "TSCallSignatureDeclaration",
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
                                  "start": 1226,
                                  "end": 1227
                                },
                                "typeArguments": null,
                                "start": 1226,
                                "end": 1227
                              },
                              "start": 1224,
                              "end": 1227
                            },
                            "start": 1223,
                            "end": 1227
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": true,
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
                                  "start": 1233,
                                  "end": 1234
                                },
                                "typeArguments": null,
                                "start": 1233,
                                "end": 1234
                              },
                              "start": 1231,
                              "end": 1234
                            },
                            "start": 1229,
                            "end": 1234
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1237,
                            "end": 1243
                          },
                          "start": 1235,
                          "end": 1243
                        },
                        "start": 1222,
                        "end": 1243
                      }
                    ],
                    "start": 1204,
                    "end": 1245
                  },
                  "start": 1202,
                  "end": 1245
                },
                "start": 1200,
                "end": 1245
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
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1264,
                    "end": 1266
                  },
                  "start": 1257,
                  "end": 1267
                }
              ],
              "start": 1247,
              "end": 1273
            },
            "expression": false,
            "start": 1178,
            "end": 1273
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
                  "name": "r12",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1283,
                  "end": 1286
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo7",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1289,
                    "end": 1293
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1294,
                      "end": 1295
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
                          "typeAnnotation": null,
                          "start": 1298,
                          "end": 1299
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1304,
                        "end": 1305
                      },
                      "id": null,
                      "generator": false,
                      "start": 1297,
                      "end": 1305
                    }
                  ],
                  "optional": false,
                  "start": 1289,
                  "end": 1306
                },
                "definite": false,
                "start": 1283,
                "end": 1306
              }
            ],
            "declare": false,
            "start": 1279,
            "end": 1307
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
                  "name": "r13",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1410,
                  "end": 1413
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo7",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1416,
                    "end": 1420
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1421,
                      "end": 1422
                    },
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
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1425,
                              "end": 1426
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1425,
                            "end": 1426
                          }
                        ],
                        "start": 1424,
                        "end": 1427
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
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1431,
                                "end": 1432
                              },
                              "typeArguments": null,
                              "start": 1431,
                              "end": 1432
                            },
                            "start": 1429,
                            "end": 1432
                          },
                          "start": 1428,
                          "end": 1432
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": "",
                        "raw": "''",
                        "start": 1437,
                        "end": 1439
                      },
                      "id": null,
                      "generator": false,
                      "start": 1424,
                      "end": 1439
                    }
                  ],
                  "optional": false,
                  "start": 1416,
                  "end": 1440
                },
                "definite": false,
                "start": 1410,
                "end": 1440
              }
            ],
            "declare": false,
            "start": 1406,
            "end": 1441
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
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSCallSignatureDeclaration",
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
                                  "start": 1550,
                                  "end": 1551
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 1550,
                                "end": 1551
                              }
                            ],
                            "start": 1549,
                            "end": 1552
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
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1556,
                                    "end": 1557
                                  },
                                  "typeArguments": null,
                                  "start": 1556,
                                  "end": 1557
                                },
                                "start": 1554,
                                "end": 1557
                              },
                              "start": 1553,
                              "end": 1557
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1560,
                              "end": 1566
                            },
                            "start": 1558,
                            "end": 1566
                          },
                          "start": 1549,
                          "end": 1567
                        },
                        {
                          "type": "TSCallSignatureDeclaration",
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
                                  "start": 1569,
                                  "end": 1570
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 1569,
                                "end": 1570
                              }
                            ],
                            "start": 1568,
                            "end": 1571
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
                                  "type": "TSNumberKeyword",
                                  "start": 1575,
                                  "end": 1581
                                },
                                "start": 1573,
                                "end": 1581
                              },
                              "start": 1572,
                              "end": 1581
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
                                "start": 1584,
                                "end": 1585
                              },
                              "typeArguments": null,
                              "start": 1584,
                              "end": 1585
                            },
                            "start": 1582,
                            "end": 1585
                          },
                          "start": 1568,
                          "end": 1586
                        }
                      ],
                      "start": 1547,
                      "end": 1588
                    },
                    "start": 1545,
                    "end": 1588
                  },
                  "start": 1544,
                  "end": 1588
                },
                "init": null,
                "definite": false,
                "start": 1544,
                "end": 1588
              }
            ],
            "declare": false,
            "start": 1540,
            "end": 1588
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
                  "name": "r14",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1597,
                  "end": 1600
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo7",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1603,
                    "end": 1607
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1608,
                      "end": 1609
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1611,
                      "end": 1612
                    }
                  ],
                  "optional": false,
                  "start": 1603,
                  "end": 1613
                },
                "definite": false,
                "start": 1597,
                "end": 1613
              }
            ],
            "declare": false,
            "start": 1593,
            "end": 1614
          }
        ],
        "start": 475,
        "end": 1710
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 448,
      "end": 1710
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 186,
  "end": 1710
}
```
