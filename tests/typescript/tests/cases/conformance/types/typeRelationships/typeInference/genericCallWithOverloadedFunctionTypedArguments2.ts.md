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
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 366,
                  "end": 368
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 371,
                    "end": 375
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
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
                              "start": 377,
                              "end": 378
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 377,
                            "end": 378
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 380,
                              "end": 381
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 380,
                            "end": 381
                          }
                        ],
                        "start": 376,
                        "end": 382
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
                                "start": 386,
                                "end": 387
                              },
                              "typeArguments": null,
                              "start": 386,
                              "end": 387
                            },
                            "start": 384,
                            "end": 387
                          },
                          "start": 383,
                          "end": 387
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
                                  "name": "r",
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
                                        "start": 401,
                                        "end": 402
                                      },
                                      "typeArguments": null,
                                      "start": 401,
                                      "end": 402
                                    },
                                    "start": 399,
                                    "end": 402
                                  },
                                  "start": 398,
                                  "end": 402
                                },
                                "init": null,
                                "definite": false,
                                "start": 398,
                                "end": 402
                              }
                            ],
                            "declare": false,
                            "start": 394,
                            "end": 403
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "r",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 411,
                              "end": 412
                            },
                            "start": 404,
                            "end": 412
                          }
                        ],
                        "start": 392,
                        "end": 414
                      },
                      "id": null,
                      "generator": false,
                      "start": 376,
                      "end": 414
                    }
                  ],
                  "optional": false,
                  "start": 371,
                  "end": 415
                },
                "definite": false,
                "start": 366,
                "end": 415
              }
            ],
            "declare": false,
            "start": 362,
            "end": 416
          }
        ],
        "start": 216,
        "end": 424
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 186,
      "end": 424
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GenericParameter",
        "optional": false,
        "typeAnnotation": null,
        "start": 436,
        "end": 452
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
              "start": 468,
              "end": 472
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
                    "start": 473,
                    "end": 474
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 473,
                  "end": 474
                }
              ],
              "start": 472,
              "end": 475
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
                                  "start": 486,
                                  "end": 487
                                },
                                "typeArguments": null,
                                "start": 486,
                                "end": 487
                              },
                              "start": 484,
                              "end": 487
                            },
                            "start": 483,
                            "end": 487
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 490,
                            "end": 496
                          },
                          "start": 488,
                          "end": 496
                        },
                        "start": 482,
                        "end": 497
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
                                "start": 502,
                                "end": 508
                              },
                              "start": 500,
                              "end": 508
                            },
                            "start": 499,
                            "end": 508
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
                              "start": 511,
                              "end": 512
                            },
                            "typeArguments": null,
                            "start": 511,
                            "end": 512
                          },
                          "start": 509,
                          "end": 512
                        },
                        "start": 498,
                        "end": 512
                      }
                    ],
                    "start": 480,
                    "end": 514
                  },
                  "start": 478,
                  "end": 514
                },
                "start": 476,
                "end": 514
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
                    "start": 533,
                    "end": 535
                  },
                  "start": 526,
                  "end": 536
                }
              ],
              "start": 516,
              "end": 542
            },
            "expression": false,
            "start": 459,
            "end": 542
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
                  "name": "r6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 552,
                  "end": 554
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 557,
                    "end": 561
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
                              "start": 563,
                              "end": 564
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 563,
                            "end": 564
                          }
                        ],
                        "start": 562,
                        "end": 565
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
                                "start": 569,
                                "end": 570
                              },
                              "typeArguments": null,
                              "start": 569,
                              "end": 570
                            },
                            "start": 567,
                            "end": 570
                          },
                          "start": 566,
                          "end": 570
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 575,
                        "end": 576
                      },
                      "id": null,
                      "generator": false,
                      "start": 562,
                      "end": 576
                    }
                  ],
                  "optional": false,
                  "start": 557,
                  "end": 577
                },
                "definite": false,
                "start": 552,
                "end": 577
              }
            ],
            "declare": false,
            "start": 548,
            "end": 578
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo6",
              "optional": false,
              "typeAnnotation": null,
              "start": 599,
              "end": 603
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
                    "start": 604,
                    "end": 605
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 604,
                  "end": 605
                }
              ],
              "start": 603,
              "end": 606
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
                                  "start": 617,
                                  "end": 618
                                },
                                "typeArguments": null,
                                "start": 617,
                                "end": 618
                              },
                              "start": 615,
                              "end": 618
                            },
                            "start": 614,
                            "end": 618
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 621,
                            "end": 627
                          },
                          "start": 619,
                          "end": 627
                        },
                        "start": 613,
                        "end": 628
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
                                  "start": 633,
                                  "end": 634
                                },
                                "typeArguments": null,
                                "start": 633,
                                "end": 634
                              },
                              "start": 631,
                              "end": 634
                            },
                            "start": 630,
                            "end": 634
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
                                  "start": 640,
                                  "end": 641
                                },
                                "typeArguments": null,
                                "start": 640,
                                "end": 641
                              },
                              "start": 638,
                              "end": 641
                            },
                            "start": 636,
                            "end": 641
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 644,
                            "end": 650
                          },
                          "start": 642,
                          "end": 650
                        },
                        "start": 629,
                        "end": 650
                      }
                    ],
                    "start": 611,
                    "end": 652
                  },
                  "start": 609,
                  "end": 652
                },
                "start": 607,
                "end": 652
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
                    "start": 671,
                    "end": 673
                  },
                  "start": 664,
                  "end": 674
                }
              ],
              "start": 654,
              "end": 680
            },
            "expression": false,
            "start": 590,
            "end": 680
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
                  "name": "r10",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 690,
                  "end": 693
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo6",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 696,
                    "end": 700
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
                              "start": 702,
                              "end": 703
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 702,
                            "end": 703
                          }
                        ],
                        "start": 701,
                        "end": 704
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
                                "start": 708,
                                "end": 709
                              },
                              "typeArguments": null,
                              "start": 708,
                              "end": 709
                            },
                            "start": 706,
                            "end": 709
                          },
                          "start": 705,
                          "end": 709
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
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 714,
                                "end": 715
                              },
                              "typeArguments": null,
                              "start": 714,
                              "end": 715
                            },
                            "start": 712,
                            "end": 715
                          },
                          "start": 711,
                          "end": 715
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": "",
                        "raw": "''",
                        "start": 720,
                        "end": 722
                      },
                      "id": null,
                      "generator": false,
                      "start": 701,
                      "end": 722
                    }
                  ],
                  "optional": false,
                  "start": 696,
                  "end": 723
                },
                "definite": false,
                "start": 690,
                "end": 723
              }
            ],
            "declare": false,
            "start": 686,
            "end": 724
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo7",
              "optional": false,
              "typeAnnotation": null,
              "start": 748,
              "end": 752
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
                    "start": 753,
                    "end": 754
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 753,
                  "end": 754
                }
              ],
              "start": 752,
              "end": 755
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
                      "start": 758,
                      "end": 759
                    },
                    "typeArguments": null,
                    "start": 758,
                    "end": 759
                  },
                  "start": 757,
                  "end": 759
                },
                "start": 756,
                "end": 759
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
                                  "start": 771,
                                  "end": 772
                                },
                                "typeArguments": null,
                                "start": 771,
                                "end": 772
                              },
                              "start": 769,
                              "end": 772
                            },
                            "start": 768,
                            "end": 772
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 775,
                            "end": 781
                          },
                          "start": 773,
                          "end": 781
                        },
                        "start": 767,
                        "end": 782
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
                                  "start": 787,
                                  "end": 788
                                },
                                "typeArguments": null,
                                "start": 787,
                                "end": 788
                              },
                              "start": 785,
                              "end": 788
                            },
                            "start": 784,
                            "end": 788
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
                                  "start": 794,
                                  "end": 795
                                },
                                "typeArguments": null,
                                "start": 794,
                                "end": 795
                              },
                              "start": 792,
                              "end": 795
                            },
                            "start": 790,
                            "end": 795
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 798,
                            "end": 804
                          },
                          "start": 796,
                          "end": 804
                        },
                        "start": 783,
                        "end": 804
                      }
                    ],
                    "start": 765,
                    "end": 806
                  },
                  "start": 763,
                  "end": 806
                },
                "start": 761,
                "end": 806
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
                    "start": 825,
                    "end": 827
                  },
                  "start": 818,
                  "end": 828
                }
              ],
              "start": 808,
              "end": 834
            },
            "expression": false,
            "start": 739,
            "end": 834
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
                  "start": 844,
                  "end": 847
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo7",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 850,
                    "end": 854
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 855,
                      "end": 856
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
                              "start": 859,
                              "end": 860
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 859,
                            "end": 860
                          }
                        ],
                        "start": 858,
                        "end": 861
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
                                "start": 865,
                                "end": 866
                              },
                              "typeArguments": null,
                              "start": 865,
                              "end": 866
                            },
                            "start": 863,
                            "end": 866
                          },
                          "start": 862,
                          "end": 866
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 871,
                        "end": 872
                      },
                      "id": null,
                      "generator": false,
                      "start": 858,
                      "end": 872
                    }
                  ],
                  "optional": false,
                  "start": 850,
                  "end": 873
                },
                "definite": false,
                "start": 844,
                "end": 873
              }
            ],
            "declare": false,
            "start": 840,
            "end": 874
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
                                  "start": 895,
                                  "end": 896
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 895,
                                "end": 896
                              }
                            ],
                            "start": 894,
                            "end": 897
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
                                    "start": 901,
                                    "end": 902
                                  },
                                  "typeArguments": null,
                                  "start": 901,
                                  "end": 902
                                },
                                "start": 899,
                                "end": 902
                              },
                              "start": 898,
                              "end": 902
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 905,
                              "end": 911
                            },
                            "start": 903,
                            "end": 911
                          },
                          "start": 894,
                          "end": 912
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
                                  "start": 914,
                                  "end": 915
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 914,
                                "end": 915
                              }
                            ],
                            "start": 913,
                            "end": 916
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
                                  "start": 920,
                                  "end": 926
                                },
                                "start": 918,
                                "end": 926
                              },
                              "start": 917,
                              "end": 926
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
                          "start": 913,
                          "end": 931
                        }
                      ],
                      "start": 892,
                      "end": 933
                    },
                    "start": 890,
                    "end": 933
                  },
                  "start": 889,
                  "end": 933
                },
                "init": null,
                "definite": false,
                "start": 889,
                "end": 933
              }
            ],
            "declare": false,
            "start": 885,
            "end": 933
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
                  "start": 942,
                  "end": 945
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo7",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 948,
                    "end": 952
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 953,
                      "end": 954
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 956,
                      "end": 957
                    }
                  ],
                  "optional": false,
                  "start": 948,
                  "end": 958
                },
                "definite": false,
                "start": 942,
                "end": 958
              }
            ],
            "declare": false,
            "start": 938,
            "end": 959
          }
        ],
        "start": 453,
        "end": 967
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 426,
      "end": 967
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 186,
  "end": 967
}
```
