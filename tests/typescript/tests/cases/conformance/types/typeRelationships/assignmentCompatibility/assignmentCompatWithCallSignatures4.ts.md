__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Errors",
        "optional": false,
        "typeAnnotation": null,
        "start": 102,
        "end": 108
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 121,
              "end": 125
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 128,
                    "end": 131
                  },
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
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 128,
                  "end": 140
                }
              ],
              "start": 126,
              "end": 142
            },
            "abstract": false,
            "declare": false,
            "start": 115,
            "end": 142
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Derived",
              "optional": false,
              "typeAnnotation": null,
              "start": 153,
              "end": 160
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 169,
              "end": 173
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 176,
                    "end": 179
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 181,
                      "end": 187
                    },
                    "start": 179,
                    "end": 187
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 176,
                  "end": 188
                }
              ],
              "start": 174,
              "end": 190
            },
            "abstract": false,
            "declare": false,
            "start": 147,
            "end": 190
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Derived2",
              "optional": false,
              "typeAnnotation": null,
              "start": 201,
              "end": 209
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Derived",
              "optional": false,
              "typeAnnotation": null,
              "start": 218,
              "end": 225
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "baz",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 228,
                    "end": 231
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 233,
                      "end": 239
                    },
                    "start": 231,
                    "end": 239
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 228,
                  "end": 240
                }
              ],
              "start": 226,
              "end": 242
            },
            "abstract": false,
            "declare": false,
            "start": 195,
            "end": 242
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "OtherDerived",
              "optional": false,
              "typeAnnotation": null,
              "start": 253,
              "end": 265
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 274,
              "end": 278
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bing",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 281,
                    "end": 285
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 287,
                      "end": 293
                    },
                    "start": 285,
                    "end": 293
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 281,
                  "end": 294
                }
              ],
              "start": 279,
              "end": 296
            },
            "abstract": false,
            "declare": false,
            "start": 247,
            "end": 296
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "WithNonGenericSignaturesInBaseType",
              "optional": false,
              "typeAnnotation": null,
              "start": 312,
              "end": 346
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
                        "name": "a2",
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
                                    "type": "TSNumberKeyword",
                                    "start": 425,
                                    "end": 431
                                  },
                                  "start": 423,
                                  "end": 431
                                },
                                "start": 422,
                                "end": 431
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "start": 436,
                                  "end": 442
                                },
                                "start": 436,
                                "end": 444
                              },
                              "start": 433,
                              "end": 444
                            },
                            "start": 421,
                            "end": 444
                          },
                          "start": 419,
                          "end": 444
                        },
                        "start": 417,
                        "end": 444
                      },
                      "init": null,
                      "definite": false,
                      "start": 417,
                      "end": 444
                    }
                  ],
                  "declare": false,
                  "start": 413,
                  "end": 445
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
                        "name": "a7",
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
                                    "type": "TSFunctionType",
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "arg",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Base",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 472,
                                              "end": 476
                                            },
                                            "typeArguments": null,
                                            "start": 472,
                                            "end": 476
                                          },
                                          "start": 470,
                                          "end": 476
                                        },
                                        "start": 467,
                                        "end": 476
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Derived",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 481,
                                          "end": 488
                                        },
                                        "typeArguments": null,
                                        "start": 481,
                                        "end": 488
                                      },
                                      "start": 478,
                                      "end": 488
                                    },
                                    "start": 466,
                                    "end": 488
                                  },
                                  "start": 464,
                                  "end": 488
                                },
                                "start": 463,
                                "end": 488
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
                                    "name": "r",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Base",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 497,
                                          "end": 501
                                        },
                                        "typeArguments": null,
                                        "start": 497,
                                        "end": 501
                                      },
                                      "start": 495,
                                      "end": 501
                                    },
                                    "start": 494,
                                    "end": 501
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 506,
                                      "end": 514
                                    },
                                    "typeArguments": null,
                                    "start": 506,
                                    "end": 514
                                  },
                                  "start": 503,
                                  "end": 514
                                },
                                "start": 493,
                                "end": 514
                              },
                              "start": 490,
                              "end": 514
                            },
                            "start": 462,
                            "end": 514
                          },
                          "start": 460,
                          "end": 514
                        },
                        "start": 458,
                        "end": 514
                      },
                      "init": null,
                      "definite": false,
                      "start": 458,
                      "end": 514
                    }
                  ],
                  "declare": false,
                  "start": 454,
                  "end": 515
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
                        "name": "a8",
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
                                    "type": "TSFunctionType",
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "arg",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Base",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 542,
                                              "end": 546
                                            },
                                            "typeArguments": null,
                                            "start": 542,
                                            "end": 546
                                          },
                                          "start": 540,
                                          "end": 546
                                        },
                                        "start": 537,
                                        "end": 546
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Derived",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 551,
                                          "end": 558
                                        },
                                        "typeArguments": null,
                                        "start": 551,
                                        "end": 558
                                      },
                                      "start": 548,
                                      "end": 558
                                    },
                                    "start": 536,
                                    "end": 558
                                  },
                                  "start": 534,
                                  "end": 558
                                },
                                "start": 533,
                                "end": 558
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
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
                                        "name": "arg2",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Base",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 570,
                                              "end": 574
                                            },
                                            "typeArguments": null,
                                            "start": 570,
                                            "end": 574
                                          },
                                          "start": 568,
                                          "end": 574
                                        },
                                        "start": 564,
                                        "end": 574
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Derived",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 579,
                                          "end": 586
                                        },
                                        "typeArguments": null,
                                        "start": 579,
                                        "end": 586
                                      },
                                      "start": 576,
                                      "end": 586
                                    },
                                    "start": 563,
                                    "end": 586
                                  },
                                  "start": 561,
                                  "end": 586
                                },
                                "start": 560,
                                "end": 586
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
                                    "name": "r",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Base",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 595,
                                          "end": 599
                                        },
                                        "typeArguments": null,
                                        "start": 595,
                                        "end": 599
                                      },
                                      "start": 593,
                                      "end": 599
                                    },
                                    "start": 592,
                                    "end": 599
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 604,
                                      "end": 611
                                    },
                                    "typeArguments": null,
                                    "start": 604,
                                    "end": 611
                                  },
                                  "start": 601,
                                  "end": 611
                                },
                                "start": 591,
                                "end": 611
                              },
                              "start": 588,
                              "end": 611
                            },
                            "start": 532,
                            "end": 611
                          },
                          "start": 530,
                          "end": 611
                        },
                        "start": 528,
                        "end": 611
                      },
                      "init": null,
                      "definite": false,
                      "start": 528,
                      "end": 611
                    }
                  ],
                  "declare": false,
                  "start": 524,
                  "end": 612
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
                        "name": "a10",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "RestElement",
                                "decorators": [],
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 634,
                                  "end": 635
                                },
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
                                        "name": "Base",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 637,
                                        "end": 641
                                      },
                                      "typeArguments": null,
                                      "start": 637,
                                      "end": 641
                                    },
                                    "start": 637,
                                    "end": 643
                                  },
                                  "start": 635,
                                  "end": 643
                                },
                                "value": null,
                                "start": 631,
                                "end": 643
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Base",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 648,
                                  "end": 652
                                },
                                "typeArguments": null,
                                "start": 648,
                                "end": 652
                              },
                              "start": 645,
                              "end": 652
                            },
                            "start": 630,
                            "end": 652
                          },
                          "start": 628,
                          "end": 652
                        },
                        "start": 625,
                        "end": 652
                      },
                      "init": null,
                      "definite": false,
                      "start": 625,
                      "end": 652
                    }
                  ],
                  "declare": false,
                  "start": 621,
                  "end": 653
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
                        "name": "a11",
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
                                          "name": "foo",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 677,
                                          "end": 680
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 682,
                                            "end": 688
                                          },
                                          "start": 680,
                                          "end": 688
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 677,
                                        "end": 688
                                      }
                                    ],
                                    "start": 675,
                                    "end": 690
                                  },
                                  "start": 673,
                                  "end": 690
                                },
                                "start": 672,
                                "end": 690
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
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
                                          "name": "foo",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 697,
                                          "end": 700
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 702,
                                            "end": 708
                                          },
                                          "start": 700,
                                          "end": 708
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 697,
                                        "end": 709
                                      },
                                      {
                                        "type": "TSPropertySignature",
                                        "computed": false,
                                        "optional": false,
                                        "readonly": false,
                                        "key": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "bar",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 710,
                                          "end": 713
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 715,
                                            "end": 721
                                          },
                                          "start": 713,
                                          "end": 721
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 710,
                                        "end": 721
                                      }
                                    ],
                                    "start": 695,
                                    "end": 723
                                  },
                                  "start": 693,
                                  "end": 723
                                },
                                "start": 692,
                                "end": 723
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Base",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 728,
                                  "end": 732
                                },
                                "typeArguments": null,
                                "start": 728,
                                "end": 732
                              },
                              "start": 725,
                              "end": 732
                            },
                            "start": 671,
                            "end": 732
                          },
                          "start": 669,
                          "end": 732
                        },
                        "start": 666,
                        "end": 732
                      },
                      "init": null,
                      "definite": false,
                      "start": 666,
                      "end": 732
                    }
                  ],
                  "declare": false,
                  "start": 662,
                  "end": 733
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
                        "name": "a12",
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
                                      "name": "Array",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 755,
                                      "end": 760
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Base",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 761,
                                            "end": 765
                                          },
                                          "typeArguments": null,
                                          "start": 761,
                                          "end": 765
                                        }
                                      ],
                                      "start": 760,
                                      "end": 766
                                    },
                                    "start": 755,
                                    "end": 766
                                  },
                                  "start": 753,
                                  "end": 766
                                },
                                "start": 752,
                                "end": 766
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
                                      "name": "Array",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 771,
                                      "end": 776
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Derived2",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 777,
                                            "end": 785
                                          },
                                          "typeArguments": null,
                                          "start": 777,
                                          "end": 785
                                        }
                                      ],
                                      "start": 776,
                                      "end": 786
                                    },
                                    "start": 771,
                                    "end": 786
                                  },
                                  "start": 769,
                                  "end": 786
                                },
                                "start": 768,
                                "end": 786
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Array",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 791,
                                  "end": 796
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Derived",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 797,
                                        "end": 804
                                      },
                                      "typeArguments": null,
                                      "start": 797,
                                      "end": 804
                                    }
                                  ],
                                  "start": 796,
                                  "end": 805
                                },
                                "start": 791,
                                "end": 805
                              },
                              "start": 788,
                              "end": 805
                            },
                            "start": 751,
                            "end": 805
                          },
                          "start": 749,
                          "end": 805
                        },
                        "start": 746,
                        "end": 805
                      },
                      "init": null,
                      "definite": false,
                      "start": 746,
                      "end": 805
                    }
                  ],
                  "declare": false,
                  "start": 742,
                  "end": 806
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
                        "name": "a14",
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
                                        "type": "TSNumberKeyword",
                                        "start": 846,
                                        "end": 852
                                      },
                                      "start": 844,
                                      "end": 852
                                    },
                                    "start": 843,
                                    "end": 852
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSNumberKeyword",
                                      "start": 855,
                                      "end": 861
                                    },
                                    "start": 855,
                                    "end": 863
                                  },
                                  "start": 853,
                                  "end": 863
                                },
                                "start": 842,
                                "end": 864
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
                                        "start": 885,
                                        "end": 891
                                      },
                                      "start": 883,
                                      "end": 891
                                    },
                                    "start": 882,
                                    "end": 891
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSStringKeyword",
                                      "start": 894,
                                      "end": 900
                                    },
                                    "start": 894,
                                    "end": 902
                                  },
                                  "start": 892,
                                  "end": 902
                                },
                                "start": 881,
                                "end": 903
                              }
                            ],
                            "start": 824,
                            "end": 917
                          },
                          "start": 822,
                          "end": 917
                        },
                        "start": 819,
                        "end": 917
                      },
                      "init": null,
                      "definite": false,
                      "start": 819,
                      "end": 917
                    }
                  ],
                  "declare": false,
                  "start": 815,
                  "end": 918
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
                        "name": "a15",
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
                                          "name": "a",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 942,
                                          "end": 943
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 945,
                                            "end": 951
                                          },
                                          "start": 943,
                                          "end": 951
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 942,
                                        "end": 952
                                      },
                                      {
                                        "type": "TSPropertySignature",
                                        "computed": false,
                                        "optional": false,
                                        "readonly": false,
                                        "key": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "b",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 953,
                                          "end": 954
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSNumberKeyword",
                                            "start": 956,
                                            "end": 962
                                          },
                                          "start": 954,
                                          "end": 962
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 953,
                                        "end": 962
                                      }
                                    ],
                                    "start": 940,
                                    "end": 964
                                  },
                                  "start": 938,
                                  "end": 964
                                },
                                "start": 937,
                                "end": 964
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 969,
                                "end": 975
                              },
                              "start": 966,
                              "end": 975
                            },
                            "start": 936,
                            "end": 975
                          },
                          "start": 934,
                          "end": 975
                        },
                        "start": 931,
                        "end": 975
                      },
                      "init": null,
                      "definite": false,
                      "start": 931,
                      "end": 975
                    }
                  ],
                  "declare": false,
                  "start": 927,
                  "end": 976
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
                        "name": "a16",
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
                                        "type": "TSTypeLiteral",
                                        "members": [
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
                                                    "type": "TSNumberKeyword",
                                                    "start": 1042,
                                                    "end": 1048
                                                  },
                                                  "start": 1040,
                                                  "end": 1048
                                                },
                                                "start": 1039,
                                                "end": 1048
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSNumberKeyword",
                                                "start": 1051,
                                                "end": 1057
                                              },
                                              "start": 1049,
                                              "end": 1057
                                            },
                                            "start": 1038,
                                            "end": 1058
                                          },
                                          {
                                            "type": "TSCallSignatureDeclaration",
                                            "typeParameters": null,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "a",
                                                "optional": true,
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "typeAnnotation": {
                                                    "type": "TSNumberKeyword",
                                                    "start": 1084,
                                                    "end": 1090
                                                  },
                                                  "start": 1082,
                                                  "end": 1090
                                                },
                                                "start": 1080,
                                                "end": 1090
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSNumberKeyword",
                                                "start": 1093,
                                                "end": 1099
                                              },
                                              "start": 1091,
                                              "end": 1099
                                            },
                                            "start": 1079,
                                            "end": 1100
                                          }
                                        ],
                                        "start": 1016,
                                        "end": 1118
                                      },
                                      "start": 1014,
                                      "end": 1118
                                    },
                                    "start": 1013,
                                    "end": 1118
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSNumberKeyword",
                                      "start": 1121,
                                      "end": 1127
                                    },
                                    "start": 1121,
                                    "end": 1129
                                  },
                                  "start": 1119,
                                  "end": 1129
                                },
                                "start": 1012,
                                "end": 1130
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
                                        "type": "TSTypeLiteral",
                                        "members": [
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
                                                    "type": "TSBooleanKeyword",
                                                    "start": 1177,
                                                    "end": 1184
                                                  },
                                                  "start": 1175,
                                                  "end": 1184
                                                },
                                                "start": 1174,
                                                "end": 1184
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSBooleanKeyword",
                                                "start": 1187,
                                                "end": 1194
                                              },
                                              "start": 1185,
                                              "end": 1194
                                            },
                                            "start": 1173,
                                            "end": 1195
                                          },
                                          {
                                            "type": "TSCallSignatureDeclaration",
                                            "typeParameters": null,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "a",
                                                "optional": true,
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "typeAnnotation": {
                                                    "type": "TSBooleanKeyword",
                                                    "start": 1221,
                                                    "end": 1228
                                                  },
                                                  "start": 1219,
                                                  "end": 1228
                                                },
                                                "start": 1217,
                                                "end": 1228
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSBooleanKeyword",
                                                "start": 1231,
                                                "end": 1238
                                              },
                                              "start": 1229,
                                              "end": 1238
                                            },
                                            "start": 1216,
                                            "end": 1239
                                          }
                                        ],
                                        "start": 1151,
                                        "end": 1257
                                      },
                                      "start": 1149,
                                      "end": 1257
                                    },
                                    "start": 1148,
                                    "end": 1257
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSBooleanKeyword",
                                      "start": 1260,
                                      "end": 1267
                                    },
                                    "start": 1260,
                                    "end": 1269
                                  },
                                  "start": 1258,
                                  "end": 1269
                                },
                                "start": 1147,
                                "end": 1270
                              }
                            ],
                            "start": 994,
                            "end": 1284
                          },
                          "start": 992,
                          "end": 1284
                        },
                        "start": 989,
                        "end": 1284
                      },
                      "init": null,
                      "definite": false,
                      "start": 989,
                      "end": 1284
                    }
                  ],
                  "declare": false,
                  "start": 985,
                  "end": 1285
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
                        "name": "a17",
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
                                                    "start": 1348,
                                                    "end": 1349
                                                  },
                                                  "constraint": {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "Derived",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 1358,
                                                      "end": 1365
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1358,
                                                    "end": 1365
                                                  },
                                                  "default": null,
                                                  "in": false,
                                                  "out": false,
                                                  "const": false,
                                                  "start": 1348,
                                                  "end": 1365
                                                }
                                              ],
                                              "start": 1347,
                                              "end": 1366
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
                                                      "start": 1370,
                                                      "end": 1371
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1370,
                                                    "end": 1371
                                                  },
                                                  "start": 1368,
                                                  "end": 1371
                                                },
                                                "start": 1367,
                                                "end": 1371
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
                                                  "start": 1374,
                                                  "end": 1375
                                                },
                                                "typeArguments": null,
                                                "start": 1374,
                                                "end": 1375
                                              },
                                              "start": 1372,
                                              "end": 1375
                                            },
                                            "start": 1347,
                                            "end": 1376
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
                                                    "start": 1398,
                                                    "end": 1399
                                                  },
                                                  "constraint": {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "Base",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 1408,
                                                      "end": 1412
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1408,
                                                    "end": 1412
                                                  },
                                                  "default": null,
                                                  "in": false,
                                                  "out": false,
                                                  "const": false,
                                                  "start": 1398,
                                                  "end": 1412
                                                }
                                              ],
                                              "start": 1397,
                                              "end": 1413
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
                                                      "start": 1417,
                                                      "end": 1418
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1417,
                                                    "end": 1418
                                                  },
                                                  "start": 1415,
                                                  "end": 1418
                                                },
                                                "start": 1414,
                                                "end": 1418
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
                                                  "start": 1421,
                                                  "end": 1422
                                                },
                                                "typeArguments": null,
                                                "start": 1421,
                                                "end": 1422
                                              },
                                              "start": 1419,
                                              "end": 1422
                                            },
                                            "start": 1397,
                                            "end": 1423
                                          }
                                        ],
                                        "start": 1325,
                                        "end": 1441
                                      },
                                      "start": 1323,
                                      "end": 1441
                                    },
                                    "start": 1322,
                                    "end": 1441
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSAnyKeyword",
                                      "start": 1444,
                                      "end": 1447
                                    },
                                    "start": 1444,
                                    "end": 1449
                                  },
                                  "start": 1442,
                                  "end": 1449
                                },
                                "start": 1321,
                                "end": 1450
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
                                                    "start": 1494,
                                                    "end": 1495
                                                  },
                                                  "constraint": {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "Derived2",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 1504,
                                                      "end": 1512
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1504,
                                                    "end": 1512
                                                  },
                                                  "default": null,
                                                  "in": false,
                                                  "out": false,
                                                  "const": false,
                                                  "start": 1494,
                                                  "end": 1512
                                                }
                                              ],
                                              "start": 1493,
                                              "end": 1513
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
                                                      "start": 1517,
                                                      "end": 1518
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1517,
                                                    "end": 1518
                                                  },
                                                  "start": 1515,
                                                  "end": 1518
                                                },
                                                "start": 1514,
                                                "end": 1518
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
                                                  "start": 1521,
                                                  "end": 1522
                                                },
                                                "typeArguments": null,
                                                "start": 1521,
                                                "end": 1522
                                              },
                                              "start": 1519,
                                              "end": 1522
                                            },
                                            "start": 1493,
                                            "end": 1523
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
                                                    "start": 1545,
                                                    "end": 1546
                                                  },
                                                  "constraint": {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "Base",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 1555,
                                                      "end": 1559
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1555,
                                                    "end": 1559
                                                  },
                                                  "default": null,
                                                  "in": false,
                                                  "out": false,
                                                  "const": false,
                                                  "start": 1545,
                                                  "end": 1559
                                                }
                                              ],
                                              "start": 1544,
                                              "end": 1560
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
                                                      "start": 1564,
                                                      "end": 1565
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1564,
                                                    "end": 1565
                                                  },
                                                  "start": 1562,
                                                  "end": 1565
                                                },
                                                "start": 1561,
                                                "end": 1565
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
                                                  "start": 1568,
                                                  "end": 1569
                                                },
                                                "typeArguments": null,
                                                "start": 1568,
                                                "end": 1569
                                              },
                                              "start": 1566,
                                              "end": 1569
                                            },
                                            "start": 1544,
                                            "end": 1570
                                          }
                                        ],
                                        "start": 1471,
                                        "end": 1588
                                      },
                                      "start": 1469,
                                      "end": 1588
                                    },
                                    "start": 1468,
                                    "end": 1588
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSAnyKeyword",
                                      "start": 1591,
                                      "end": 1594
                                    },
                                    "start": 1591,
                                    "end": 1596
                                  },
                                  "start": 1589,
                                  "end": 1596
                                },
                                "start": 1467,
                                "end": 1597
                              }
                            ],
                            "start": 1303,
                            "end": 1611
                          },
                          "start": 1301,
                          "end": 1611
                        },
                        "start": 1298,
                        "end": 1611
                      },
                      "init": null,
                      "definite": false,
                      "start": 1298,
                      "end": 1611
                    }
                  ],
                  "declare": false,
                  "start": 1294,
                  "end": 1612
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
                        "name": "b2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSFunctionType",
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
                                    "start": 1631,
                                    "end": 1632
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1631,
                                  "end": 1632
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1634,
                                    "end": 1635
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1634,
                                  "end": 1635
                                }
                              ],
                              "start": 1630,
                              "end": 1636
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
                                      "start": 1640,
                                      "end": 1641
                                    },
                                    "typeArguments": null,
                                    "start": 1640,
                                    "end": 1641
                                  },
                                  "start": 1638,
                                  "end": 1641
                                },
                                "start": 1637,
                                "end": 1641
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1646,
                                    "end": 1647
                                  },
                                  "typeArguments": null,
                                  "start": 1646,
                                  "end": 1647
                                },
                                "start": 1646,
                                "end": 1649
                              },
                              "start": 1643,
                              "end": 1649
                            },
                            "start": 1630,
                            "end": 1649
                          },
                          "start": 1628,
                          "end": 1649
                        },
                        "start": 1626,
                        "end": 1649
                      },
                      "init": null,
                      "definite": false,
                      "start": 1626,
                      "end": 1649
                    }
                  ],
                  "declare": false,
                  "start": 1622,
                  "end": 1650
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1660,
                      "end": 1662
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1665,
                      "end": 1667
                    },
                    "start": 1660,
                    "end": 1667
                  },
                  "directive": null,
                  "start": 1660,
                  "end": 1668
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1677,
                      "end": 1679
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1682,
                      "end": 1684
                    },
                    "start": 1677,
                    "end": 1684
                  },
                  "directive": null,
                  "start": 1677,
                  "end": 1685
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
                        "name": "b7",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSFunctionType",
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
                                    "start": 1704,
                                    "end": 1705
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Base",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1714,
                                      "end": 1718
                                    },
                                    "typeArguments": null,
                                    "start": 1714,
                                    "end": 1718
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1704,
                                  "end": 1718
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1720,
                                    "end": 1721
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1730,
                                      "end": 1737
                                    },
                                    "typeArguments": null,
                                    "start": 1730,
                                    "end": 1737
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1720,
                                  "end": 1737
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "V",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1739,
                                    "end": 1740
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1749,
                                      "end": 1757
                                    },
                                    "typeArguments": null,
                                    "start": 1749,
                                    "end": 1757
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1739,
                                  "end": 1757
                                }
                              ],
                              "start": 1703,
                              "end": 1758
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
                                    "type": "TSFunctionType",
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "arg",
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
                                              "start": 1768,
                                              "end": 1769
                                            },
                                            "typeArguments": null,
                                            "start": 1768,
                                            "end": 1769
                                          },
                                          "start": 1766,
                                          "end": 1769
                                        },
                                        "start": 1763,
                                        "end": 1769
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
                                          "start": 1774,
                                          "end": 1775
                                        },
                                        "typeArguments": null,
                                        "start": 1774,
                                        "end": 1775
                                      },
                                      "start": 1771,
                                      "end": 1775
                                    },
                                    "start": 1762,
                                    "end": 1775
                                  },
                                  "start": 1760,
                                  "end": 1775
                                },
                                "start": 1759,
                                "end": 1775
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
                                    "name": "r",
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
                                          "start": 1784,
                                          "end": 1785
                                        },
                                        "typeArguments": null,
                                        "start": 1784,
                                        "end": 1785
                                      },
                                      "start": 1782,
                                      "end": 1785
                                    },
                                    "start": 1781,
                                    "end": 1785
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "V",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1790,
                                      "end": 1791
                                    },
                                    "typeArguments": null,
                                    "start": 1790,
                                    "end": 1791
                                  },
                                  "start": 1787,
                                  "end": 1791
                                },
                                "start": 1780,
                                "end": 1791
                              },
                              "start": 1777,
                              "end": 1791
                            },
                            "start": 1703,
                            "end": 1791
                          },
                          "start": 1701,
                          "end": 1791
                        },
                        "start": 1699,
                        "end": 1791
                      },
                      "init": null,
                      "definite": false,
                      "start": 1699,
                      "end": 1791
                    }
                  ],
                  "declare": false,
                  "start": 1695,
                  "end": 1792
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a7",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1801,
                      "end": 1803
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b7",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1806,
                      "end": 1808
                    },
                    "start": 1801,
                    "end": 1808
                  },
                  "directive": null,
                  "start": 1801,
                  "end": 1809
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b7",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1818,
                      "end": 1820
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a7",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1823,
                      "end": 1825
                    },
                    "start": 1818,
                    "end": 1825
                  },
                  "directive": null,
                  "start": 1818,
                  "end": 1826
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
                        "name": "b8",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSFunctionType",
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
                                    "start": 1845,
                                    "end": 1846
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Base",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1855,
                                      "end": 1859
                                    },
                                    "typeArguments": null,
                                    "start": 1855,
                                    "end": 1859
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1845,
                                  "end": 1859
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1861,
                                    "end": 1862
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1871,
                                      "end": 1878
                                    },
                                    "typeArguments": null,
                                    "start": 1871,
                                    "end": 1878
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1861,
                                  "end": 1878
                                }
                              ],
                              "start": 1844,
                              "end": 1879
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
                                    "type": "TSFunctionType",
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "arg",
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
                                              "start": 1889,
                                              "end": 1890
                                            },
                                            "typeArguments": null,
                                            "start": 1889,
                                            "end": 1890
                                          },
                                          "start": 1887,
                                          "end": 1890
                                        },
                                        "start": 1884,
                                        "end": 1890
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
                                          "start": 1895,
                                          "end": 1896
                                        },
                                        "typeArguments": null,
                                        "start": 1895,
                                        "end": 1896
                                      },
                                      "start": 1892,
                                      "end": 1896
                                    },
                                    "start": 1883,
                                    "end": 1896
                                  },
                                  "start": 1881,
                                  "end": 1896
                                },
                                "start": 1880,
                                "end": 1896
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
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
                                        "name": "arg2",
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
                                                  "name": "foo",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 1910,
                                                  "end": 1913
                                                },
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "typeAnnotation": {
                                                    "type": "TSNumberKeyword",
                                                    "start": 1915,
                                                    "end": 1921
                                                  },
                                                  "start": 1913,
                                                  "end": 1921
                                                },
                                                "accessibility": null,
                                                "static": false,
                                                "start": 1910,
                                                "end": 1922
                                              }
                                            ],
                                            "start": 1908,
                                            "end": 1924
                                          },
                                          "start": 1906,
                                          "end": 1924
                                        },
                                        "start": 1902,
                                        "end": 1924
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
                                          "start": 1929,
                                          "end": 1930
                                        },
                                        "typeArguments": null,
                                        "start": 1929,
                                        "end": 1930
                                      },
                                      "start": 1926,
                                      "end": 1930
                                    },
                                    "start": 1901,
                                    "end": 1930
                                  },
                                  "start": 1899,
                                  "end": 1930
                                },
                                "start": 1898,
                                "end": 1930
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
                                    "name": "r",
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
                                          "start": 1939,
                                          "end": 1940
                                        },
                                        "typeArguments": null,
                                        "start": 1939,
                                        "end": 1940
                                      },
                                      "start": 1937,
                                      "end": 1940
                                    },
                                    "start": 1936,
                                    "end": 1940
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
                                      "start": 1945,
                                      "end": 1946
                                    },
                                    "typeArguments": null,
                                    "start": 1945,
                                    "end": 1946
                                  },
                                  "start": 1942,
                                  "end": 1946
                                },
                                "start": 1935,
                                "end": 1946
                              },
                              "start": 1932,
                              "end": 1946
                            },
                            "start": 1844,
                            "end": 1946
                          },
                          "start": 1842,
                          "end": 1946
                        },
                        "start": 1840,
                        "end": 1946
                      },
                      "init": null,
                      "definite": false,
                      "start": 1840,
                      "end": 1946
                    }
                  ],
                  "declare": false,
                  "start": 1836,
                  "end": 1947
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a8",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1957,
                      "end": 1959
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b8",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1962,
                      "end": 1964
                    },
                    "start": 1957,
                    "end": 1964
                  },
                  "directive": null,
                  "start": 1957,
                  "end": 1965
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b8",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2026,
                      "end": 2028
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a8",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2031,
                      "end": 2033
                    },
                    "start": 2026,
                    "end": 2033
                  },
                  "directive": null,
                  "start": 2026,
                  "end": 2034
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
                        "name": "b10",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSFunctionType",
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
                                    "start": 2115,
                                    "end": 2116
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2125,
                                      "end": 2132
                                    },
                                    "typeArguments": null,
                                    "start": 2125,
                                    "end": 2132
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2115,
                                  "end": 2132
                                }
                              ],
                              "start": 2114,
                              "end": 2133
                            },
                            "params": [
                              {
                                "type": "RestElement",
                                "decorators": [],
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2137,
                                  "end": 2138
                                },
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
                                        "name": "T",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2140,
                                        "end": 2141
                                      },
                                      "typeArguments": null,
                                      "start": 2140,
                                      "end": 2141
                                    },
                                    "start": 2140,
                                    "end": 2143
                                  },
                                  "start": 2138,
                                  "end": 2143
                                },
                                "value": null,
                                "start": 2134,
                                "end": 2143
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
                                  "start": 2148,
                                  "end": 2149
                                },
                                "typeArguments": null,
                                "start": 2148,
                                "end": 2149
                              },
                              "start": 2145,
                              "end": 2149
                            },
                            "start": 2114,
                            "end": 2149
                          },
                          "start": 2112,
                          "end": 2149
                        },
                        "start": 2109,
                        "end": 2149
                      },
                      "init": null,
                      "definite": false,
                      "start": 2109,
                      "end": 2149
                    }
                  ],
                  "declare": false,
                  "start": 2105,
                  "end": 2150
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a10",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2160,
                      "end": 2163
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b10",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2166,
                      "end": 2169
                    },
                    "start": 2160,
                    "end": 2169
                  },
                  "directive": null,
                  "start": 2160,
                  "end": 2170
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b10",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2179,
                      "end": 2182
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a10",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2185,
                      "end": 2188
                    },
                    "start": 2179,
                    "end": 2188
                  },
                  "directive": null,
                  "start": 2179,
                  "end": 2189
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
                        "name": "b11",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSFunctionType",
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
                                    "start": 2209,
                                    "end": 2210
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2219,
                                      "end": 2226
                                    },
                                    "typeArguments": null,
                                    "start": 2219,
                                    "end": 2226
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2209,
                                  "end": 2226
                                }
                              ],
                              "start": 2208,
                              "end": 2227
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
                                      "start": 2231,
                                      "end": 2232
                                    },
                                    "typeArguments": null,
                                    "start": 2231,
                                    "end": 2232
                                  },
                                  "start": 2229,
                                  "end": 2232
                                },
                                "start": 2228,
                                "end": 2232
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
                                      "start": 2237,
                                      "end": 2238
                                    },
                                    "typeArguments": null,
                                    "start": 2237,
                                    "end": 2238
                                  },
                                  "start": 2235,
                                  "end": 2238
                                },
                                "start": 2234,
                                "end": 2238
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
                                  "start": 2243,
                                  "end": 2244
                                },
                                "typeArguments": null,
                                "start": 2243,
                                "end": 2244
                              },
                              "start": 2240,
                              "end": 2244
                            },
                            "start": 2208,
                            "end": 2244
                          },
                          "start": 2206,
                          "end": 2244
                        },
                        "start": 2203,
                        "end": 2244
                      },
                      "init": null,
                      "definite": false,
                      "start": 2203,
                      "end": 2244
                    }
                  ],
                  "declare": false,
                  "start": 2199,
                  "end": 2245
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a11",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2255,
                      "end": 2258
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b11",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2261,
                      "end": 2264
                    },
                    "start": 2255,
                    "end": 2264
                  },
                  "directive": null,
                  "start": 2255,
                  "end": 2265
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b11",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2274,
                      "end": 2277
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a11",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2280,
                      "end": 2283
                    },
                    "start": 2274,
                    "end": 2283
                  },
                  "directive": null,
                  "start": 2274,
                  "end": 2284
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
                        "name": "b12",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSFunctionType",
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
                                    "start": 2304,
                                    "end": 2305
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Array",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2314,
                                      "end": 2319
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Derived2",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 2320,
                                            "end": 2328
                                          },
                                          "typeArguments": null,
                                          "start": 2320,
                                          "end": 2328
                                        }
                                      ],
                                      "start": 2319,
                                      "end": 2329
                                    },
                                    "start": 2314,
                                    "end": 2329
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2304,
                                  "end": 2329
                                }
                              ],
                              "start": 2303,
                              "end": 2330
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
                                      "name": "Array",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2334,
                                      "end": 2339
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Base",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 2340,
                                            "end": 2344
                                          },
                                          "typeArguments": null,
                                          "start": 2340,
                                          "end": 2344
                                        }
                                      ],
                                      "start": 2339,
                                      "end": 2345
                                    },
                                    "start": 2334,
                                    "end": 2345
                                  },
                                  "start": 2332,
                                  "end": 2345
                                },
                                "start": 2331,
                                "end": 2345
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
                                      "name": "Array",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2350,
                                      "end": 2355
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Base",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 2356,
                                            "end": 2360
                                          },
                                          "typeArguments": null,
                                          "start": 2356,
                                          "end": 2360
                                        }
                                      ],
                                      "start": 2355,
                                      "end": 2361
                                    },
                                    "start": 2350,
                                    "end": 2361
                                  },
                                  "start": 2348,
                                  "end": 2361
                                },
                                "start": 2347,
                                "end": 2361
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
                                  "start": 2366,
                                  "end": 2367
                                },
                                "typeArguments": null,
                                "start": 2366,
                                "end": 2367
                              },
                              "start": 2363,
                              "end": 2367
                            },
                            "start": 2303,
                            "end": 2367
                          },
                          "start": 2301,
                          "end": 2367
                        },
                        "start": 2298,
                        "end": 2367
                      },
                      "init": null,
                      "definite": false,
                      "start": 2298,
                      "end": 2367
                    }
                  ],
                  "declare": false,
                  "start": 2294,
                  "end": 2368
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a12",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2378,
                      "end": 2381
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b12",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2384,
                      "end": 2387
                    },
                    "start": 2378,
                    "end": 2387
                  },
                  "directive": null,
                  "start": 2378,
                  "end": 2388
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b12",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2397,
                      "end": 2400
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a12",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2403,
                      "end": 2406
                    },
                    "start": 2397,
                    "end": 2406
                  },
                  "directive": null,
                  "start": 2397,
                  "end": 2407
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
                        "name": "b15",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSFunctionType",
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
                                    "start": 2427,
                                    "end": 2428
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2427,
                                  "end": 2428
                                }
                              ],
                              "start": 2426,
                              "end": 2429
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
                                          "name": "a",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 2435,
                                          "end": 2436
                                        },
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
                                              "start": 2438,
                                              "end": 2439
                                            },
                                            "typeArguments": null,
                                            "start": 2438,
                                            "end": 2439
                                          },
                                          "start": 2436,
                                          "end": 2439
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 2435,
                                        "end": 2440
                                      },
                                      {
                                        "type": "TSPropertySignature",
                                        "computed": false,
                                        "optional": false,
                                        "readonly": false,
                                        "key": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "b",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 2441,
                                          "end": 2442
                                        },
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
                                              "start": 2444,
                                              "end": 2445
                                            },
                                            "typeArguments": null,
                                            "start": 2444,
                                            "end": 2445
                                          },
                                          "start": 2442,
                                          "end": 2445
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 2441,
                                        "end": 2445
                                      }
                                    ],
                                    "start": 2433,
                                    "end": 2447
                                  },
                                  "start": 2431,
                                  "end": 2447
                                },
                                "start": 2430,
                                "end": 2447
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
                                  "start": 2452,
                                  "end": 2453
                                },
                                "typeArguments": null,
                                "start": 2452,
                                "end": 2453
                              },
                              "start": 2449,
                              "end": 2453
                            },
                            "start": 2426,
                            "end": 2453
                          },
                          "start": 2424,
                          "end": 2453
                        },
                        "start": 2421,
                        "end": 2453
                      },
                      "init": null,
                      "definite": false,
                      "start": 2421,
                      "end": 2453
                    }
                  ],
                  "declare": false,
                  "start": 2417,
                  "end": 2454
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a15",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2464,
                      "end": 2467
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b15",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2470,
                      "end": 2473
                    },
                    "start": 2464,
                    "end": 2473
                  },
                  "directive": null,
                  "start": 2464,
                  "end": 2474
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b15",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2483,
                      "end": 2486
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a15",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2489,
                      "end": 2492
                    },
                    "start": 2483,
                    "end": 2492
                  },
                  "directive": null,
                  "start": 2483,
                  "end": 2493
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
                        "name": "b15a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSFunctionType",
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
                                    "start": 2514,
                                    "end": 2515
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Base",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2524,
                                      "end": 2528
                                    },
                                    "typeArguments": null,
                                    "start": 2524,
                                    "end": 2528
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2514,
                                  "end": 2528
                                }
                              ],
                              "start": 2513,
                              "end": 2529
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
                                          "name": "a",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 2535,
                                          "end": 2536
                                        },
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
                                              "start": 2538,
                                              "end": 2539
                                            },
                                            "typeArguments": null,
                                            "start": 2538,
                                            "end": 2539
                                          },
                                          "start": 2536,
                                          "end": 2539
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 2535,
                                        "end": 2540
                                      },
                                      {
                                        "type": "TSPropertySignature",
                                        "computed": false,
                                        "optional": false,
                                        "readonly": false,
                                        "key": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "b",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 2541,
                                          "end": 2542
                                        },
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
                                              "start": 2544,
                                              "end": 2545
                                            },
                                            "typeArguments": null,
                                            "start": 2544,
                                            "end": 2545
                                          },
                                          "start": 2542,
                                          "end": 2545
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 2541,
                                        "end": 2545
                                      }
                                    ],
                                    "start": 2533,
                                    "end": 2547
                                  },
                                  "start": 2531,
                                  "end": 2547
                                },
                                "start": 2530,
                                "end": 2547
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2552,
                                "end": 2558
                              },
                              "start": 2549,
                              "end": 2558
                            },
                            "start": 2513,
                            "end": 2558
                          },
                          "start": 2511,
                          "end": 2558
                        },
                        "start": 2507,
                        "end": 2558
                      },
                      "init": null,
                      "definite": false,
                      "start": 2507,
                      "end": 2558
                    }
                  ],
                  "declare": false,
                  "start": 2503,
                  "end": 2559
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a15",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2569,
                      "end": 2572
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b15a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2575,
                      "end": 2579
                    },
                    "start": 2569,
                    "end": 2579
                  },
                  "directive": null,
                  "start": 2569,
                  "end": 2580
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b15a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2589,
                      "end": 2593
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a15",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2596,
                      "end": 2599
                    },
                    "start": 2589,
                    "end": 2599
                  },
                  "directive": null,
                  "start": 2589,
                  "end": 2600
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
                        "name": "b16",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSFunctionType",
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
                                    "start": 2620,
                                    "end": 2621
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2620,
                                  "end": 2621
                                }
                              ],
                              "start": 2619,
                              "end": 2622
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
                                              "start": 2630,
                                              "end": 2631
                                            },
                                            "typeArguments": null,
                                            "start": 2630,
                                            "end": 2631
                                          },
                                          "start": 2628,
                                          "end": 2631
                                        },
                                        "start": 2627,
                                        "end": 2631
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
                                          "start": 2636,
                                          "end": 2637
                                        },
                                        "typeArguments": null,
                                        "start": 2636,
                                        "end": 2637
                                      },
                                      "start": 2633,
                                      "end": 2637
                                    },
                                    "start": 2626,
                                    "end": 2637
                                  },
                                  "start": 2624,
                                  "end": 2637
                                },
                                "start": 2623,
                                "end": 2637
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2642,
                                    "end": 2643
                                  },
                                  "typeArguments": null,
                                  "start": 2642,
                                  "end": 2643
                                },
                                "start": 2642,
                                "end": 2645
                              },
                              "start": 2639,
                              "end": 2645
                            },
                            "start": 2619,
                            "end": 2645
                          },
                          "start": 2617,
                          "end": 2645
                        },
                        "start": 2614,
                        "end": 2645
                      },
                      "init": null,
                      "definite": false,
                      "start": 2614,
                      "end": 2645
                    }
                  ],
                  "declare": false,
                  "start": 2610,
                  "end": 2646
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a16",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2655,
                      "end": 2658
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b16",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2661,
                      "end": 2664
                    },
                    "start": 2655,
                    "end": 2664
                  },
                  "directive": null,
                  "start": 2655,
                  "end": 2665
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b16",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2674,
                      "end": 2677
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a16",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2680,
                      "end": 2683
                    },
                    "start": 2674,
                    "end": 2683
                  },
                  "directive": null,
                  "start": 2674,
                  "end": 2684
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
                        "name": "b17",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSFunctionType",
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
                                    "start": 2704,
                                    "end": 2705
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2704,
                                  "end": 2705
                                }
                              ],
                              "start": 2703,
                              "end": 2706
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
                                              "start": 2714,
                                              "end": 2715
                                            },
                                            "typeArguments": null,
                                            "start": 2714,
                                            "end": 2715
                                          },
                                          "start": 2712,
                                          "end": 2715
                                        },
                                        "start": 2711,
                                        "end": 2715
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
                                          "start": 2720,
                                          "end": 2721
                                        },
                                        "typeArguments": null,
                                        "start": 2720,
                                        "end": 2721
                                      },
                                      "start": 2717,
                                      "end": 2721
                                    },
                                    "start": 2710,
                                    "end": 2721
                                  },
                                  "start": 2708,
                                  "end": 2721
                                },
                                "start": 2707,
                                "end": 2721
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSAnyKeyword",
                                  "start": 2726,
                                  "end": 2729
                                },
                                "start": 2726,
                                "end": 2731
                              },
                              "start": 2723,
                              "end": 2731
                            },
                            "start": 2703,
                            "end": 2731
                          },
                          "start": 2701,
                          "end": 2731
                        },
                        "start": 2698,
                        "end": 2731
                      },
                      "init": null,
                      "definite": false,
                      "start": 2698,
                      "end": 2731
                    }
                  ],
                  "declare": false,
                  "start": 2694,
                  "end": 2732
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a17",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2741,
                      "end": 2744
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b17",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2747,
                      "end": 2750
                    },
                    "start": 2741,
                    "end": 2750
                  },
                  "directive": null,
                  "start": 2741,
                  "end": 2751
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b17",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2760,
                      "end": 2763
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a17",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2766,
                      "end": 2769
                    },
                    "start": 2760,
                    "end": 2769
                  },
                  "directive": null,
                  "start": 2760,
                  "end": 2770
                }
              ],
              "start": 347,
              "end": 2776
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 302,
            "end": 2776
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "WithGenericSignaturesInBaseType",
              "optional": false,
              "typeAnnotation": null,
              "start": 2792,
              "end": 2823
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
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSFunctionType",
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
                                    "start": 2893,
                                    "end": 2894
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2893,
                                  "end": 2894
                                }
                              ],
                              "start": 2892,
                              "end": 2895
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
                                      "start": 2899,
                                      "end": 2900
                                    },
                                    "typeArguments": null,
                                    "start": 2899,
                                    "end": 2900
                                  },
                                  "start": 2897,
                                  "end": 2900
                                },
                                "start": 2896,
                                "end": 2900
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2905,
                                    "end": 2906
                                  },
                                  "typeArguments": null,
                                  "start": 2905,
                                  "end": 2906
                                },
                                "start": 2905,
                                "end": 2908
                              },
                              "start": 2902,
                              "end": 2908
                            },
                            "start": 2892,
                            "end": 2908
                          },
                          "start": 2890,
                          "end": 2908
                        },
                        "start": 2888,
                        "end": 2908
                      },
                      "init": null,
                      "definite": false,
                      "start": 2888,
                      "end": 2908
                    }
                  ],
                  "declare": false,
                  "start": 2884,
                  "end": 2909
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
                        "name": "b2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSFunctionType",
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
                                    "start": 2927,
                                    "end": 2928
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2927,
                                  "end": 2928
                                }
                              ],
                              "start": 2926,
                              "end": 2929
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
                                      "start": 2933,
                                      "end": 2934
                                    },
                                    "typeArguments": null,
                                    "start": 2933,
                                    "end": 2934
                                  },
                                  "start": 2931,
                                  "end": 2934
                                },
                                "start": 2930,
                                "end": 2934
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "start": 2939,
                                  "end": 2945
                                },
                                "start": 2939,
                                "end": 2947
                              },
                              "start": 2936,
                              "end": 2947
                            },
                            "start": 2926,
                            "end": 2947
                          },
                          "start": 2924,
                          "end": 2947
                        },
                        "start": 2922,
                        "end": 2947
                      },
                      "init": null,
                      "definite": false,
                      "start": 2922,
                      "end": 2947
                    }
                  ],
                  "declare": false,
                  "start": 2918,
                  "end": 2948
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2957,
                      "end": 2959
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2962,
                      "end": 2964
                    },
                    "start": 2957,
                    "end": 2964
                  },
                  "directive": null,
                  "start": 2957,
                  "end": 2965
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2974,
                      "end": 2976
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2979,
                      "end": 2981
                    },
                    "start": 2974,
                    "end": 2981
                  },
                  "directive": null,
                  "start": 2974,
                  "end": 2982
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
                        "name": "a3",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSFunctionType",
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
                                    "start": 3051,
                                    "end": 3052
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 3051,
                                  "end": 3052
                                }
                              ],
                              "start": 3050,
                              "end": 3053
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
                                      "start": 3057,
                                      "end": 3058
                                    },
                                    "typeArguments": null,
                                    "start": 3057,
                                    "end": 3058
                                  },
                                  "start": 3055,
                                  "end": 3058
                                },
                                "start": 3054,
                                "end": 3058
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "start": 3063,
                                  "end": 3069
                                },
                                "start": 3063,
                                "end": 3071
                              },
                              "start": 3060,
                              "end": 3071
                            },
                            "start": 3050,
                            "end": 3071
                          },
                          "start": 3048,
                          "end": 3071
                        },
                        "start": 3046,
                        "end": 3071
                      },
                      "init": null,
                      "definite": false,
                      "start": 3046,
                      "end": 3071
                    }
                  ],
                  "declare": false,
                  "start": 3042,
                  "end": 3072
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
                        "name": "b3",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSFunctionType",
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
                                    "start": 3090,
                                    "end": 3091
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 3090,
                                  "end": 3091
                                }
                              ],
                              "start": 3089,
                              "end": 3092
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
                                      "start": 3096,
                                      "end": 3097
                                    },
                                    "typeArguments": null,
                                    "start": 3096,
                                    "end": 3097
                                  },
                                  "start": 3094,
                                  "end": 3097
                                },
                                "start": 3093,
                                "end": 3097
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3102,
                                    "end": 3103
                                  },
                                  "typeArguments": null,
                                  "start": 3102,
                                  "end": 3103
                                },
                                "start": 3102,
                                "end": 3105
                              },
                              "start": 3099,
                              "end": 3105
                            },
                            "start": 3089,
                            "end": 3105
                          },
                          "start": 3087,
                          "end": 3105
                        },
                        "start": 3085,
                        "end": 3105
                      },
                      "init": null,
                      "definite": false,
                      "start": 3085,
                      "end": 3105
                    }
                  ],
                  "declare": false,
                  "start": 3081,
                  "end": 3106
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3116,
                      "end": 3118
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3121,
                      "end": 3123
                    },
                    "start": 3116,
                    "end": 3123
                  },
                  "directive": null,
                  "start": 3116,
                  "end": 3124
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3133,
                      "end": 3135
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3138,
                      "end": 3140
                    },
                    "start": 3133,
                    "end": 3140
                  },
                  "directive": null,
                  "start": 3133,
                  "end": 3141
                }
              ],
              "start": 2824,
              "end": 3147
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 2782,
            "end": 3147
          }
        ],
        "start": 109,
        "end": 3149
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 92,
      "end": 3149
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 92,
  "end": 3149
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 92,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "Errors",
    "start": 102,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 109,
    "end": 110
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 115,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 121,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 128,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 133,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 141,
    "end": 142
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 147,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 153,
    "end": 160
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 161,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 169,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 176,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 181,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 189,
    "end": 190
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 195,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 201,
    "end": 209
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 210,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 218,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 228,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 233,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 241,
    "end": 242
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 247,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "OtherDerived",
    "start": 253,
    "end": 265
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 266,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 274,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "bing",
    "start": 281,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 287,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 302,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "WithNonGenericSignaturesInBaseType",
    "start": 312,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 347,
    "end": 348
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 413,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 417,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 425,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 433,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 436,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 444,
    "end": 445
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 454,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "a7",
    "start": 458,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 467,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 472,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 478,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 481,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 490,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 497,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 503,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 506,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 514,
    "end": 515
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 524,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "a8",
    "start": 528,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 536,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 537,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 540,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 542,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 548,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 551,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 563,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 564,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 570,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 576,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 579,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 588,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 591,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 593,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 595,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 601,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 604,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 611,
    "end": 612
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 621,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "a10",
    "start": 625,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 631,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 634,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 635,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 637,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 645,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 648,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 652,
    "end": 653
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 662,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "a11",
    "start": 666,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 669,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 671,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 675,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 677,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 680,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 682,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 690,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 695,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 697,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 700,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 702,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 708,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 710,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 713,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 715,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 725,
    "end": 727
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 728,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 732,
    "end": 733
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 742,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "a12",
    "start": 746,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 751,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 752,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 753,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 755,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 760,
    "end": 761
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 761,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 766,
    "end": 767
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 769,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 771,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 776,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 777,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 785,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 788,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 791,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 797,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 804,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 805,
    "end": 806
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 815,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "a14",
    "start": 819,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 842,
    "end": 843
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 843,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 844,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 846,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 853,
    "end": 854
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 855,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 861,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 862,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 881,
    "end": 882
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 882,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 883,
    "end": 884
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 885,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 891,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 892,
    "end": 893
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 894,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 900,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 901,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 902,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 916,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 917,
    "end": 918
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 927,
    "end": 930
  },
  {
    "type": "Identifier",
    "value": "a15",
    "start": 931,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 934,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 936,
    "end": 937
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 937,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 938,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 940,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 942,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 943,
    "end": 944
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 945,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 951,
    "end": 952
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 953,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 954,
    "end": 955
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 956,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 963,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 964,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 966,
    "end": 968
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 969,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 975,
    "end": 976
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 985,
    "end": 988
  },
  {
    "type": "Identifier",
    "value": "a16",
    "start": 989,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 992,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 994,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1042,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1051,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1084,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1093,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1121,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1177,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1187,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1221,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1231,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1260,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1294,
    "end": 1297
  },
  {
    "type": "Identifier",
    "value": "a17",
    "start": 1298,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1350,
    "end": 1357
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1358,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1400,
    "end": 1407
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1408,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1444,
    "end": 1447
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1447,
    "end": 1448
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1469,
    "end": 1470
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1493,
    "end": 1494
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1496,
    "end": 1503
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 1504,
    "end": 1512
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1512,
    "end": 1513
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1513,
    "end": 1514
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1518,
    "end": 1519
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1519,
    "end": 1520
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1522,
    "end": 1523
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1544,
    "end": 1545
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1547,
    "end": 1554
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1555,
    "end": 1559
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1560,
    "end": 1561
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1562,
    "end": 1563
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1565,
    "end": 1566
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1566,
    "end": 1567
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1569,
    "end": 1570
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1589,
    "end": 1590
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1591,
    "end": 1594
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1596,
    "end": 1597
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1622,
    "end": 1625
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1626,
    "end": 1628
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1628,
    "end": 1629
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1630,
    "end": 1631
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1631,
    "end": 1632
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1634,
    "end": 1635
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "=>",
    "start": 1643,
    "end": 1645
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1646,
    "end": 1647
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1647,
    "end": 1648
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1649,
    "end": 1650
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1660,
    "end": 1662
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1663,
    "end": 1664
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1665,
    "end": 1667
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1667,
    "end": 1668
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1677,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1682,
    "end": 1684
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1684,
    "end": 1685
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1695,
    "end": 1698
  },
  {
    "type": "Identifier",
    "value": "b7",
    "start": 1699,
    "end": 1701
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1701,
    "end": 1702
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1703,
    "end": 1704
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1704,
    "end": 1705
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1706,
    "end": 1713
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1714,
    "end": 1718
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1718,
    "end": 1719
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1720,
    "end": 1721
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1722,
    "end": 1729
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1730,
    "end": 1737
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1737,
    "end": 1738
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1741,
    "end": 1748
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 1749,
    "end": 1757
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1757,
    "end": 1758
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1759,
    "end": 1760
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1760,
    "end": 1761
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1762,
    "end": 1763
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1763,
    "end": 1766
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1768,
    "end": 1769
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1769,
    "end": 1770
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1771,
    "end": 1773
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1774,
    "end": 1775
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1775,
    "end": 1776
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1777,
    "end": 1779
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 1781,
    "end": 1782
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1782,
    "end": 1783
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1784,
    "end": 1785
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1785,
    "end": 1786
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1787,
    "end": 1789
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1790,
    "end": 1791
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1791,
    "end": 1792
  },
  {
    "type": "Identifier",
    "value": "a7",
    "start": 1801,
    "end": 1803
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1804,
    "end": 1805
  },
  {
    "type": "Identifier",
    "value": "b7",
    "start": 1806,
    "end": 1808
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1808,
    "end": 1809
  },
  {
    "type": "Identifier",
    "value": "b7",
    "start": 1818,
    "end": 1820
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Identifier",
    "value": "a7",
    "start": 1823,
    "end": 1825
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1825,
    "end": 1826
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1836,
    "end": 1839
  },
  {
    "type": "Identifier",
    "value": "b8",
    "start": 1840,
    "end": 1842
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1844,
    "end": 1845
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1845,
    "end": 1846
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1847,
    "end": 1854
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1855,
    "end": 1859
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1859,
    "end": 1860
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1861,
    "end": 1862
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1863,
    "end": 1870
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1871,
    "end": 1878
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1878,
    "end": 1879
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1879,
    "end": 1880
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1880,
    "end": 1881
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1881,
    "end": 1882
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1883,
    "end": 1884
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1884,
    "end": 1887
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1887,
    "end": 1888
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1889,
    "end": 1890
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1890,
    "end": 1891
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1892,
    "end": 1894
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1895,
    "end": 1896
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1896,
    "end": 1897
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1898,
    "end": 1899
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1899,
    "end": 1900
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1901,
    "end": 1902
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 1902,
    "end": 1906
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1908,
    "end": 1909
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1910,
    "end": 1913
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1913,
    "end": 1914
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1915,
    "end": 1921
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1921,
    "end": 1922
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1924,
    "end": 1925
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1926,
    "end": 1928
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1929,
    "end": 1930
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1930,
    "end": 1931
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1932,
    "end": 1934
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1935,
    "end": 1936
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 1936,
    "end": 1937
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1939,
    "end": 1940
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1940,
    "end": 1941
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1942,
    "end": 1944
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1945,
    "end": 1946
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1946,
    "end": 1947
  },
  {
    "type": "Identifier",
    "value": "a8",
    "start": 1957,
    "end": 1959
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1960,
    "end": 1961
  },
  {
    "type": "Identifier",
    "value": "b8",
    "start": 1962,
    "end": 1964
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1964,
    "end": 1965
  },
  {
    "type": "Identifier",
    "value": "b8",
    "start": 2026,
    "end": 2028
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2029,
    "end": 2030
  },
  {
    "type": "Identifier",
    "value": "a8",
    "start": 2031,
    "end": 2033
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2033,
    "end": 2034
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2105,
    "end": 2108
  },
  {
    "type": "Identifier",
    "value": "b10",
    "start": 2109,
    "end": 2112
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2112,
    "end": 2113
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2114,
    "end": 2115
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2115,
    "end": 2116
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2117,
    "end": 2124
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2125,
    "end": 2132
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2132,
    "end": 2133
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2133,
    "end": 2134
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2134,
    "end": 2137
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2137,
    "end": 2138
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2138,
    "end": 2139
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2140,
    "end": 2141
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2141,
    "end": 2142
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2142,
    "end": 2143
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2143,
    "end": 2144
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2145,
    "end": 2147
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2148,
    "end": 2149
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2149,
    "end": 2150
  },
  {
    "type": "Identifier",
    "value": "a10",
    "start": 2160,
    "end": 2163
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2164,
    "end": 2165
  },
  {
    "type": "Identifier",
    "value": "b10",
    "start": 2166,
    "end": 2169
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2169,
    "end": 2170
  },
  {
    "type": "Identifier",
    "value": "b10",
    "start": 2179,
    "end": 2182
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2183,
    "end": 2184
  },
  {
    "type": "Identifier",
    "value": "a10",
    "start": 2185,
    "end": 2188
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2188,
    "end": 2189
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2199,
    "end": 2202
  },
  {
    "type": "Identifier",
    "value": "b11",
    "start": 2203,
    "end": 2206
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2206,
    "end": 2207
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2208,
    "end": 2209
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2209,
    "end": 2210
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2211,
    "end": 2218
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2219,
    "end": 2226
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2226,
    "end": 2227
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2227,
    "end": 2228
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2228,
    "end": 2229
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2229,
    "end": 2230
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2231,
    "end": 2232
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2232,
    "end": 2233
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2234,
    "end": 2235
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2235,
    "end": 2236
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2237,
    "end": 2238
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2238,
    "end": 2239
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2240,
    "end": 2242
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2243,
    "end": 2244
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2244,
    "end": 2245
  },
  {
    "type": "Identifier",
    "value": "a11",
    "start": 2255,
    "end": 2258
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2259,
    "end": 2260
  },
  {
    "type": "Identifier",
    "value": "b11",
    "start": 2261,
    "end": 2264
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2264,
    "end": 2265
  },
  {
    "type": "Identifier",
    "value": "b11",
    "start": 2274,
    "end": 2277
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2278,
    "end": 2279
  },
  {
    "type": "Identifier",
    "value": "a11",
    "start": 2280,
    "end": 2283
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2283,
    "end": 2284
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2294,
    "end": 2297
  },
  {
    "type": "Identifier",
    "value": "b12",
    "start": 2298,
    "end": 2301
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2301,
    "end": 2302
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2303,
    "end": 2304
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2304,
    "end": 2305
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2306,
    "end": 2313
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2314,
    "end": 2319
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2319,
    "end": 2320
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 2320,
    "end": 2328
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2328,
    "end": 2329
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2329,
    "end": 2330
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2330,
    "end": 2331
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2331,
    "end": 2332
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2332,
    "end": 2333
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2334,
    "end": 2339
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2339,
    "end": 2340
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2340,
    "end": 2344
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2344,
    "end": 2345
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2345,
    "end": 2346
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2347,
    "end": 2348
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2348,
    "end": 2349
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2350,
    "end": 2355
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2355,
    "end": 2356
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2356,
    "end": 2360
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2360,
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
    "value": "=>",
    "start": 2363,
    "end": 2365
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2366,
    "end": 2367
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2367,
    "end": 2368
  },
  {
    "type": "Identifier",
    "value": "a12",
    "start": 2378,
    "end": 2381
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2382,
    "end": 2383
  },
  {
    "type": "Identifier",
    "value": "b12",
    "start": 2384,
    "end": 2387
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2387,
    "end": 2388
  },
  {
    "type": "Identifier",
    "value": "b12",
    "start": 2397,
    "end": 2400
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2401,
    "end": 2402
  },
  {
    "type": "Identifier",
    "value": "a12",
    "start": 2403,
    "end": 2406
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2406,
    "end": 2407
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2417,
    "end": 2420
  },
  {
    "type": "Identifier",
    "value": "b15",
    "start": 2421,
    "end": 2424
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2424,
    "end": 2425
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2426,
    "end": 2427
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2427,
    "end": 2428
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2428,
    "end": 2429
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2429,
    "end": 2430
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2430,
    "end": 2431
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2431,
    "end": 2432
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2433,
    "end": 2434
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2435,
    "end": 2436
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2436,
    "end": 2437
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2438,
    "end": 2439
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2439,
    "end": 2440
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2441,
    "end": 2442
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2442,
    "end": 2443
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2444,
    "end": 2445
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2446,
    "end": 2447
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2447,
    "end": 2448
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2449,
    "end": 2451
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2452,
    "end": 2453
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2453,
    "end": 2454
  },
  {
    "type": "Identifier",
    "value": "a15",
    "start": 2464,
    "end": 2467
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2468,
    "end": 2469
  },
  {
    "type": "Identifier",
    "value": "b15",
    "start": 2470,
    "end": 2473
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2473,
    "end": 2474
  },
  {
    "type": "Identifier",
    "value": "b15",
    "start": 2483,
    "end": 2486
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2487,
    "end": 2488
  },
  {
    "type": "Identifier",
    "value": "a15",
    "start": 2489,
    "end": 2492
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2492,
    "end": 2493
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2503,
    "end": 2506
  },
  {
    "type": "Identifier",
    "value": "b15a",
    "start": 2507,
    "end": 2511
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2511,
    "end": 2512
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2513,
    "end": 2514
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2514,
    "end": 2515
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2516,
    "end": 2523
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2524,
    "end": 2528
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2528,
    "end": 2529
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2529,
    "end": 2530
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2530,
    "end": 2531
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2531,
    "end": 2532
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2533,
    "end": 2534
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2535,
    "end": 2536
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2536,
    "end": 2537
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2538,
    "end": 2539
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2539,
    "end": 2540
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2541,
    "end": 2542
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2542,
    "end": 2543
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2544,
    "end": 2545
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2546,
    "end": 2547
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2547,
    "end": 2548
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2549,
    "end": 2551
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2552,
    "end": 2558
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2558,
    "end": 2559
  },
  {
    "type": "Identifier",
    "value": "a15",
    "start": 2569,
    "end": 2572
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2573,
    "end": 2574
  },
  {
    "type": "Identifier",
    "value": "b15a",
    "start": 2575,
    "end": 2579
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2579,
    "end": 2580
  },
  {
    "type": "Identifier",
    "value": "b15a",
    "start": 2589,
    "end": 2593
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2594,
    "end": 2595
  },
  {
    "type": "Identifier",
    "value": "a15",
    "start": 2596,
    "end": 2599
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2599,
    "end": 2600
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2610,
    "end": 2613
  },
  {
    "type": "Identifier",
    "value": "b16",
    "start": 2614,
    "end": 2617
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2617,
    "end": 2618
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2619,
    "end": 2620
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2620,
    "end": 2621
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2621,
    "end": 2622
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2622,
    "end": 2623
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2623,
    "end": 2624
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2624,
    "end": 2625
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2626,
    "end": 2627
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2627,
    "end": 2628
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2628,
    "end": 2629
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2630,
    "end": 2631
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2631,
    "end": 2632
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2633,
    "end": 2635
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2636,
    "end": 2637
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2637,
    "end": 2638
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2639,
    "end": 2641
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2642,
    "end": 2643
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2643,
    "end": 2644
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2644,
    "end": 2645
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2645,
    "end": 2646
  },
  {
    "type": "Identifier",
    "value": "a16",
    "start": 2655,
    "end": 2658
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2659,
    "end": 2660
  },
  {
    "type": "Identifier",
    "value": "b16",
    "start": 2661,
    "end": 2664
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2664,
    "end": 2665
  },
  {
    "type": "Identifier",
    "value": "b16",
    "start": 2674,
    "end": 2677
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2678,
    "end": 2679
  },
  {
    "type": "Identifier",
    "value": "a16",
    "start": 2680,
    "end": 2683
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2683,
    "end": 2684
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2694,
    "end": 2697
  },
  {
    "type": "Identifier",
    "value": "b17",
    "start": 2698,
    "end": 2701
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2701,
    "end": 2702
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2703,
    "end": 2704
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2704,
    "end": 2705
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2705,
    "end": 2706
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2706,
    "end": 2707
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2707,
    "end": 2708
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2708,
    "end": 2709
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2710,
    "end": 2711
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2711,
    "end": 2712
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2712,
    "end": 2713
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2714,
    "end": 2715
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2715,
    "end": 2716
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2717,
    "end": 2719
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2720,
    "end": 2721
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2721,
    "end": 2722
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2723,
    "end": 2725
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2726,
    "end": 2729
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2729,
    "end": 2730
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2730,
    "end": 2731
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2731,
    "end": 2732
  },
  {
    "type": "Identifier",
    "value": "a17",
    "start": 2741,
    "end": 2744
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2745,
    "end": 2746
  },
  {
    "type": "Identifier",
    "value": "b17",
    "start": 2747,
    "end": 2750
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2750,
    "end": 2751
  },
  {
    "type": "Identifier",
    "value": "b17",
    "start": 2760,
    "end": 2763
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2764,
    "end": 2765
  },
  {
    "type": "Identifier",
    "value": "a17",
    "start": 2766,
    "end": 2769
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2769,
    "end": 2770
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2775,
    "end": 2776
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 2782,
    "end": 2791
  },
  {
    "type": "Identifier",
    "value": "WithGenericSignaturesInBaseType",
    "start": 2792,
    "end": 2823
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2824,
    "end": 2825
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2884,
    "end": 2887
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 2888,
    "end": 2890
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2890,
    "end": 2891
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2892,
    "end": 2893
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2893,
    "end": 2894
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2894,
    "end": 2895
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2895,
    "end": 2896
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2896,
    "end": 2897
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2897,
    "end": 2898
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2899,
    "end": 2900
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2900,
    "end": 2901
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2902,
    "end": 2904
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2905,
    "end": 2906
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2906,
    "end": 2907
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2907,
    "end": 2908
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2908,
    "end": 2909
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2918,
    "end": 2921
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 2922,
    "end": 2924
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2924,
    "end": 2925
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2926,
    "end": 2927
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2927,
    "end": 2928
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2928,
    "end": 2929
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2929,
    "end": 2930
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2930,
    "end": 2931
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2931,
    "end": 2932
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2933,
    "end": 2934
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2934,
    "end": 2935
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2936,
    "end": 2938
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2939,
    "end": 2945
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2945,
    "end": 2946
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2946,
    "end": 2947
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2947,
    "end": 2948
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 2957,
    "end": 2959
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2960,
    "end": 2961
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 2962,
    "end": 2964
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2964,
    "end": 2965
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 2974,
    "end": 2976
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2977,
    "end": 2978
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 2979,
    "end": 2981
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2981,
    "end": 2982
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3042,
    "end": 3045
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 3046,
    "end": 3048
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3048,
    "end": 3049
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3050,
    "end": 3051
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3051,
    "end": 3052
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3052,
    "end": 3053
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3053,
    "end": 3054
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3054,
    "end": 3055
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3055,
    "end": 3056
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3057,
    "end": 3058
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3058,
    "end": 3059
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3060,
    "end": 3062
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3063,
    "end": 3069
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3069,
    "end": 3070
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3070,
    "end": 3071
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3071,
    "end": 3072
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3081,
    "end": 3084
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 3085,
    "end": 3087
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3087,
    "end": 3088
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3089,
    "end": 3090
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3090,
    "end": 3091
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3091,
    "end": 3092
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3092,
    "end": 3093
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3093,
    "end": 3094
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3094,
    "end": 3095
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3096,
    "end": 3097
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3097,
    "end": 3098
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3099,
    "end": 3101
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3102,
    "end": 3103
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3103,
    "end": 3104
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3104,
    "end": 3105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3105,
    "end": 3106
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 3116,
    "end": 3118
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3119,
    "end": 3120
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 3121,
    "end": 3123
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3123,
    "end": 3124
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 3133,
    "end": 3135
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3136,
    "end": 3137
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 3138,
    "end": 3140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3140,
    "end": 3141
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3146,
    "end": 3147
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3148,
    "end": 3149
  }
]
```
