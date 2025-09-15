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
