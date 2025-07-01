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
        "name": "Tools",
        "optional": false,
        "typeAnnotation": null,
        "start": 223,
        "end": 228
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Head",
              "optional": false,
              "typeAnnotation": null,
              "start": 240,
              "end": 244
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
                    "start": 245,
                    "end": 246
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 255,
                      "end": 258
                    },
                    "start": 255,
                    "end": 260
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 245,
                  "end": 260
                }
              ],
              "start": 244,
              "end": 261
            },
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 272,
                  "end": 273
                },
                "typeArguments": null,
                "start": 272,
                "end": 273
              },
              "extendsType": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 283,
                    "end": 286
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 291,
                        "end": 294
                      },
                      "start": 291,
                      "end": 296
                    },
                    "start": 288,
                    "end": 296
                  }
                ],
                "start": 282,
                "end": 297
              },
              "trueType": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 308,
                    "end": 309
                  },
                  "typeArguments": null,
                  "start": 308,
                  "end": 309
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 310,
                    "end": 311
                  },
                  "start": 310,
                  "end": 311
                },
                "start": 308,
                "end": 312
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 323,
                "end": 328
              },
              "start": 272,
              "end": 328
            },
            "declare": false,
            "start": 235,
            "end": 329
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Tail",
              "optional": false,
              "typeAnnotation": null,
              "start": 340,
              "end": 344
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
                    "start": 345,
                    "end": 346
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 355,
                      "end": 358
                    },
                    "start": 355,
                    "end": 360
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 345,
                  "end": 360
                }
              ],
              "start": 344,
              "end": 361
            },
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 377,
                      "end": 378
                    },
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
                          "start": 380,
                          "end": 381
                        },
                        "typeArguments": null,
                        "start": 380,
                        "end": 381
                      },
                      "start": 378,
                      "end": 381
                    },
                    "value": null,
                    "start": 374,
                    "end": 381
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 386,
                    "end": 389
                  },
                  "start": 383,
                  "end": 389
                },
                "start": 373,
                "end": 389
              },
              "extendsType": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 404,
                        "end": 407
                      },
                      "start": 402,
                      "end": 407
                    },
                    "start": 401,
                    "end": 407
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "tail",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 412,
                      "end": 416
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSInferType",
                        "typeParameter": {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TT",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 424,
                            "end": 426
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 424,
                          "end": 426
                        },
                        "start": 418,
                        "end": 426
                      },
                      "start": 416,
                      "end": 426
                    },
                    "value": null,
                    "start": 409,
                    "end": 426
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 431,
                    "end": 434
                  },
                  "start": 428,
                  "end": 434
                },
                "start": 400,
                "end": 434
              },
              "trueType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TT",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 446,
                  "end": 448
                },
                "typeArguments": null,
                "start": 446,
                "end": 448
              },
              "falseType": {
                "type": "TSTupleType",
                "elementTypes": [],
                "start": 459,
                "end": 461
              },
              "start": 372,
              "end": 461
            },
            "declare": false,
            "start": 335,
            "end": 462
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "HasTail",
              "optional": false,
              "typeAnnotation": null,
              "start": 473,
              "end": 480
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
                    "start": 481,
                    "end": 482
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 491,
                      "end": 494
                    },
                    "start": 491,
                    "end": 496
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 481,
                  "end": 496
                }
              ],
              "start": 480,
              "end": 497
            },
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
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
              "extendsType": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTupleType",
                    "elementTypes": [],
                    "start": 519,
                    "end": 521
                  },
                  {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 525,
                        "end": 528
                      }
                    ],
                    "start": 524,
                    "end": 529
                  }
                ],
                "start": 519,
                "end": 529
              },
              "trueType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 541,
                  "end": 546
                },
                "start": 541,
                "end": 546
              },
              "falseType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 557,
                  "end": 561
                },
                "start": 557,
                "end": 561
              },
              "start": 508,
              "end": 561
            },
            "declare": false,
            "start": 468,
            "end": 562
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Last",
              "optional": false,
              "typeAnnotation": null,
              "start": 573,
              "end": 577
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
                    "start": 578,
                    "end": 579
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 588,
                      "end": 591
                    },
                    "start": 588,
                    "end": 593
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 578,
                  "end": 593
                }
              ],
              "start": 577,
              "end": 594
            },
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 607,
                      "end": 608
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Last",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 610,
                          "end": 614
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Tail",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 615,
                                "end": 619
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
                                      "start": 620,
                                      "end": 621
                                    },
                                    "typeArguments": null,
                                    "start": 620,
                                    "end": 621
                                  }
                                ],
                                "start": 619,
                                "end": 622
                              },
                              "start": 615,
                              "end": 622
                            }
                          ],
                          "start": 614,
                          "end": 623
                        },
                        "start": 610,
                        "end": 623
                      },
                      "start": 608,
                      "end": 623
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 607,
                    "end": 624
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 633,
                      "end": 634
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Head",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 636,
                          "end": 640
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
                                "start": 641,
                                "end": 642
                              },
                              "typeArguments": null,
                              "start": 641,
                              "end": 642
                            }
                          ],
                          "start": 640,
                          "end": 643
                        },
                        "start": 636,
                        "end": 643
                      },
                      "start": 634,
                      "end": 643
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 633,
                    "end": 644
                  }
                ],
                "start": 597,
                "end": 650
              },
              "indexType": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "HasTail",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 660,
                    "end": 667
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
                          "start": 668,
                          "end": 669
                        },
                        "typeArguments": null,
                        "start": 668,
                        "end": 669
                      }
                    ],
                    "start": 667,
                    "end": 670
                  },
                  "start": 660,
                  "end": 670
                },
                "extendsType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 679,
                    "end": 683
                  },
                  "start": 679,
                  "end": 683
                },
                "trueType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 694,
                    "end": 695
                  },
                  "start": 694,
                  "end": 695
                },
                "falseType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 706,
                    "end": 707
                  },
                  "start": 706,
                  "end": 707
                },
                "start": 660,
                "end": 707
              },
              "start": 597,
              "end": 713
            },
            "declare": false,
            "start": 568,
            "end": 714
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Length",
              "optional": false,
              "typeAnnotation": null,
              "start": 725,
              "end": 731
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
                    "start": 732,
                    "end": 733
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 742,
                      "end": 745
                    },
                    "start": 742,
                    "end": 747
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 732,
                  "end": 747
                }
              ],
              "start": 731,
              "end": 748
            },
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 759,
                  "end": 760
                },
                "typeArguments": null,
                "start": 759,
                "end": 760
              },
              "indexType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "length",
                  "raw": "'length'",
                  "start": 761,
                  "end": 769
                },
                "start": 761,
                "end": 769
              },
              "start": 759,
              "end": 770
            },
            "declare": false,
            "start": 720,
            "end": 771
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Prepend",
              "optional": false,
              "typeAnnotation": null,
              "start": 782,
              "end": 789
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 790,
                    "end": 791
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 790,
                  "end": 791
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 793,
                    "end": 794
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 803,
                      "end": 806
                    },
                    "start": 803,
                    "end": 808
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 793,
                  "end": 808
                }
              ],
              "start": 789,
              "end": 809
            },
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "head",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 828,
                          "end": 829
                        },
                        "typeArguments": null,
                        "start": 828,
                        "end": 829
                      },
                      "start": 826,
                      "end": 829
                    },
                    "start": 822,
                    "end": 829
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 834,
                      "end": 838
                    },
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
                          "start": 840,
                          "end": 841
                        },
                        "typeArguments": null,
                        "start": 840,
                        "end": 841
                      },
                      "start": 838,
                      "end": 841
                    },
                    "value": null,
                    "start": 831,
                    "end": 841
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 846,
                    "end": 849
                  },
                  "start": 843,
                  "end": 849
                },
                "start": 821,
                "end": 849
              },
              "extendsType": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 864,
                      "end": 868
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSInferType",
                        "typeParameter": {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 876,
                            "end": 877
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 876,
                          "end": 877
                        },
                        "start": 870,
                        "end": 877
                      },
                      "start": 868,
                      "end": 877
                    },
                    "value": null,
                    "start": 861,
                    "end": 877
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 882,
                    "end": 885
                  },
                  "start": 879,
                  "end": 885
                },
                "start": 860,
                "end": 885
              },
              "trueType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 897,
                  "end": 898
                },
                "typeArguments": null,
                "start": 897,
                "end": 898
              },
              "falseType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 909,
                  "end": 910
                },
                "typeArguments": null,
                "start": 909,
                "end": 910
              },
              "start": 820,
              "end": 910
            },
            "declare": false,
            "start": 777,
            "end": 911
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Drop",
              "optional": false,
              "typeAnnotation": null,
              "start": 922,
              "end": 926
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "N",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 927,
                    "end": 928
                  },
                  "constraint": {
                    "type": "TSNumberKeyword",
                    "start": 937,
                    "end": 943
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 927,
                  "end": 943
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 945,
                    "end": 946
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 955,
                      "end": 958
                    },
                    "start": 955,
                    "end": 960
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 945,
                  "end": 960
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 962,
                    "end": 963
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 972,
                      "end": 975
                    },
                    "start": 972,
                    "end": 977
                  },
                  "default": {
                    "type": "TSTupleType",
                    "elementTypes": [],
                    "start": 980,
                    "end": 982
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 962,
                  "end": 982
                }
              ],
              "start": 926,
              "end": 983
            },
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 996,
                      "end": 997
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Drop",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 999,
                          "end": 1003
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "N",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1004,
                                "end": 1005
                              },
                              "typeArguments": null,
                              "start": 1004,
                              "end": 1005
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Tail",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1007,
                                "end": 1011
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
                                      "start": 1012,
                                      "end": 1013
                                    },
                                    "typeArguments": null,
                                    "start": 1012,
                                    "end": 1013
                                  }
                                ],
                                "start": 1011,
                                "end": 1014
                              },
                              "start": 1007,
                              "end": 1014
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Prepend",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1016,
                                "end": 1023
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSAnyKeyword",
                                    "start": 1024,
                                    "end": 1027
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "I",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1029,
                                      "end": 1030
                                    },
                                    "typeArguments": null,
                                    "start": 1029,
                                    "end": 1030
                                  }
                                ],
                                "start": 1023,
                                "end": 1031
                              },
                              "start": 1016,
                              "end": 1031
                            }
                          ],
                          "start": 1003,
                          "end": 1032
                        },
                        "start": 999,
                        "end": 1032
                      },
                      "start": 997,
                      "end": 1032
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 996,
                    "end": 1033
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1042,
                      "end": 1043
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
                          "start": 1045,
                          "end": 1046
                        },
                        "typeArguments": null,
                        "start": 1045,
                        "end": 1046
                      },
                      "start": 1043,
                      "end": 1046
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1042,
                    "end": 1047
                  }
                ],
                "start": 986,
                "end": 1053
              },
              "indexType": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1063,
                    "end": 1069
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "I",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1070,
                          "end": 1071
                        },
                        "typeArguments": null,
                        "start": 1070,
                        "end": 1071
                      }
                    ],
                    "start": 1069,
                    "end": 1072
                  },
                  "start": 1063,
                  "end": 1072
                },
                "extendsType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "N",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1081,
                    "end": 1082
                  },
                  "typeArguments": null,
                  "start": 1081,
                  "end": 1082
                },
                "trueType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1093,
                    "end": 1094
                  },
                  "start": 1093,
                  "end": 1094
                },
                "falseType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1105,
                    "end": 1106
                  },
                  "start": 1105,
                  "end": 1106
                },
                "start": 1063,
                "end": 1106
              },
              "start": 986,
              "end": 1112
            },
            "declare": false,
            "start": 917,
            "end": 1113
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Cast",
              "optional": false,
              "typeAnnotation": null,
              "start": 1124,
              "end": 1128
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1129,
                    "end": 1130
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1129,
                  "end": 1130
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1132,
                    "end": 1133
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1132,
                  "end": 1133
                }
              ],
              "start": 1128,
              "end": 1134
            },
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1137,
                  "end": 1138
                },
                "typeArguments": null,
                "start": 1137,
                "end": 1138
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1147,
                  "end": 1148
                },
                "typeArguments": null,
                "start": 1147,
                "end": 1148
              },
              "trueType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1151,
                  "end": 1152
                },
                "typeArguments": null,
                "start": 1151,
                "end": 1152
              },
              "falseType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1155,
                  "end": 1156
                },
                "typeArguments": null,
                "start": 1155,
                "end": 1156
              },
              "start": 1137,
              "end": 1156
            },
            "declare": false,
            "start": 1119,
            "end": 1157
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Pos",
              "optional": false,
              "typeAnnotation": null,
              "start": 1168,
              "end": 1171
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1172,
                    "end": 1173
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 1182,
                      "end": 1185
                    },
                    "start": 1182,
                    "end": 1187
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1172,
                  "end": 1187
                }
              ],
              "start": 1171,
              "end": 1188
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Length",
                "optional": false,
                "typeAnnotation": null,
                "start": 1199,
                "end": 1205
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1206,
                      "end": 1207
                    },
                    "typeArguments": null,
                    "start": 1206,
                    "end": 1207
                  }
                ],
                "start": 1205,
                "end": 1208
              },
              "start": 1199,
              "end": 1208
            },
            "declare": false,
            "start": 1163,
            "end": 1209
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Next",
              "optional": false,
              "typeAnnotation": null,
              "start": 1220,
              "end": 1224
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1225,
                    "end": 1226
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 1235,
                      "end": 1238
                    },
                    "start": 1235,
                    "end": 1240
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1225,
                  "end": 1240
                }
              ],
              "start": 1224,
              "end": 1241
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Prepend",
                "optional": false,
                "typeAnnotation": null,
                "start": 1252,
                "end": 1259
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 1260,
                    "end": 1263
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1265,
                      "end": 1266
                    },
                    "typeArguments": null,
                    "start": 1265,
                    "end": 1266
                  }
                ],
                "start": 1259,
                "end": 1267
              },
              "start": 1252,
              "end": 1267
            },
            "declare": false,
            "start": 1215,
            "end": 1268
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Prev",
              "optional": false,
              "typeAnnotation": null,
              "start": 1279,
              "end": 1283
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1284,
                    "end": 1285
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 1294,
                      "end": 1297
                    },
                    "start": 1294,
                    "end": 1299
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1284,
                  "end": 1299
                }
              ],
              "start": 1283,
              "end": 1300
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Tail",
                "optional": false,
                "typeAnnotation": null,
                "start": 1311,
                "end": 1315
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1316,
                      "end": 1317
                    },
                    "typeArguments": null,
                    "start": 1316,
                    "end": 1317
                  }
                ],
                "start": 1315,
                "end": 1318
              },
              "start": 1311,
              "end": 1318
            },
            "declare": false,
            "start": 1274,
            "end": 1319
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Iterator",
              "optional": false,
              "typeAnnotation": null,
              "start": 1330,
              "end": 1338
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Index",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1339,
                    "end": 1344
                  },
                  "constraint": {
                    "type": "TSNumberKeyword",
                    "start": 1353,
                    "end": 1359
                  },
                  "default": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 1362,
                      "end": 1363
                    },
                    "start": 1362,
                    "end": 1363
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1339,
                  "end": 1363
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "From",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1365,
                    "end": 1369
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 1378,
                      "end": 1381
                    },
                    "start": 1378,
                    "end": 1383
                  },
                  "default": {
                    "type": "TSTupleType",
                    "elementTypes": [],
                    "start": 1386,
                    "end": 1388
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1365,
                  "end": 1388
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1390,
                    "end": 1391
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 1400,
                      "end": 1403
                    },
                    "start": 1400,
                    "end": 1405
                  },
                  "default": {
                    "type": "TSTupleType",
                    "elementTypes": [],
                    "start": 1408,
                    "end": 1410
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1390,
                  "end": 1410
                }
              ],
              "start": 1338,
              "end": 1411
            },
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 1424,
                      "end": 1425
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Iterator",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1427,
                          "end": 1435
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Index",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1436,
                                "end": 1441
                              },
                              "typeArguments": null,
                              "start": 1436,
                              "end": 1441
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Next",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1443,
                                "end": 1447
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "From",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1448,
                                      "end": 1452
                                    },
                                    "typeArguments": null,
                                    "start": 1448,
                                    "end": 1452
                                  }
                                ],
                                "start": 1447,
                                "end": 1453
                              },
                              "start": 1443,
                              "end": 1453
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Next",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1455,
                                "end": 1459
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "I",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1460,
                                      "end": 1461
                                    },
                                    "typeArguments": null,
                                    "start": 1460,
                                    "end": 1461
                                  }
                                ],
                                "start": 1459,
                                "end": 1462
                              },
                              "start": 1455,
                              "end": 1462
                            }
                          ],
                          "start": 1435,
                          "end": 1463
                        },
                        "start": 1427,
                        "end": 1463
                      },
                      "start": 1425,
                      "end": 1463
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1424,
                    "end": 1464
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1473,
                      "end": 1474
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "From",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1476,
                          "end": 1480
                        },
                        "typeArguments": null,
                        "start": 1476,
                        "end": 1480
                      },
                      "start": 1474,
                      "end": 1480
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1473,
                    "end": 1481
                  }
                ],
                "start": 1414,
                "end": 1487
              },
              "indexType": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Pos",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1497,
                    "end": 1500
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "I",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1501,
                          "end": 1502
                        },
                        "typeArguments": null,
                        "start": 1501,
                        "end": 1502
                      }
                    ],
                    "start": 1500,
                    "end": 1503
                  },
                  "start": 1497,
                  "end": 1503
                },
                "extendsType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Index",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1512,
                    "end": 1517
                  },
                  "typeArguments": null,
                  "start": 1512,
                  "end": 1517
                },
                "trueType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1528,
                    "end": 1529
                  },
                  "start": 1528,
                  "end": 1529
                },
                "falseType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1540,
                    "end": 1541
                  },
                  "start": 1540,
                  "end": 1541
                },
                "start": 1497,
                "end": 1541
              },
              "start": 1414,
              "end": 1547
            },
            "declare": false,
            "start": 1325,
            "end": 1548
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Reverse",
              "optional": false,
              "typeAnnotation": null,
              "start": 1559,
              "end": 1566
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
                    "start": 1567,
                    "end": 1568
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 1577,
                      "end": 1580
                    },
                    "start": 1577,
                    "end": 1582
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1567,
                  "end": 1582
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1584,
                    "end": 1585
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 1594,
                      "end": 1597
                    },
                    "start": 1594,
                    "end": 1599
                  },
                  "default": {
                    "type": "TSTupleType",
                    "elementTypes": [],
                    "start": 1602,
                    "end": 1604
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1584,
                  "end": 1604
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1606,
                    "end": 1607
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 1616,
                      "end": 1619
                    },
                    "start": 1616,
                    "end": 1621
                  },
                  "default": {
                    "type": "TSTupleType",
                    "elementTypes": [],
                    "start": 1624,
                    "end": 1626
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1606,
                  "end": 1626
                }
              ],
              "start": 1566,
              "end": 1627
            },
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 1640,
                      "end": 1641
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Reverse",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1643,
                          "end": 1650
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
                                "start": 1651,
                                "end": 1652
                              },
                              "typeArguments": null,
                              "start": 1651,
                              "end": 1652
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Prepend",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1654,
                                "end": 1661
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSIndexedAccessType",
                                    "objectType": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "T",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1662,
                                        "end": 1663
                                      },
                                      "typeArguments": null,
                                      "start": 1662,
                                      "end": 1663
                                    },
                                    "indexType": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Pos",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1664,
                                        "end": 1667
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "params": [
                                          {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "I",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1668,
                                              "end": 1669
                                            },
                                            "typeArguments": null,
                                            "start": 1668,
                                            "end": 1669
                                          }
                                        ],
                                        "start": 1667,
                                        "end": 1670
                                      },
                                      "start": 1664,
                                      "end": 1670
                                    },
                                    "start": 1662,
                                    "end": 1671
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "R",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1673,
                                      "end": 1674
                                    },
                                    "typeArguments": null,
                                    "start": 1673,
                                    "end": 1674
                                  }
                                ],
                                "start": 1661,
                                "end": 1675
                              },
                              "start": 1654,
                              "end": 1675
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Next",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1677,
                                "end": 1681
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "I",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1682,
                                      "end": 1683
                                    },
                                    "typeArguments": null,
                                    "start": 1682,
                                    "end": 1683
                                  }
                                ],
                                "start": 1681,
                                "end": 1684
                              },
                              "start": 1677,
                              "end": 1684
                            }
                          ],
                          "start": 1650,
                          "end": 1685
                        },
                        "start": 1643,
                        "end": 1685
                      },
                      "start": 1641,
                      "end": 1685
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1640,
                    "end": 1686
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1695,
                      "end": 1696
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1698,
                          "end": 1699
                        },
                        "typeArguments": null,
                        "start": 1698,
                        "end": 1699
                      },
                      "start": 1696,
                      "end": 1699
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1695,
                    "end": 1700
                  }
                ],
                "start": 1630,
                "end": 1706
              },
              "indexType": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Pos",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1716,
                    "end": 1719
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "I",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1720,
                          "end": 1721
                        },
                        "typeArguments": null,
                        "start": 1720,
                        "end": 1721
                      }
                    ],
                    "start": 1719,
                    "end": 1722
                  },
                  "start": 1716,
                  "end": 1722
                },
                "extendsType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1731,
                    "end": 1737
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
                          "start": 1738,
                          "end": 1739
                        },
                        "typeArguments": null,
                        "start": 1738,
                        "end": 1739
                      }
                    ],
                    "start": 1737,
                    "end": 1740
                  },
                  "start": 1731,
                  "end": 1740
                },
                "trueType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1751,
                    "end": 1752
                  },
                  "start": 1751,
                  "end": 1752
                },
                "falseType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1763,
                    "end": 1764
                  },
                  "start": 1763,
                  "end": 1764
                },
                "start": 1716,
                "end": 1764
              },
              "start": 1630,
              "end": 1770
            },
            "declare": false,
            "start": 1554,
            "end": 1771
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Concat",
              "optional": false,
              "typeAnnotation": null,
              "start": 1782,
              "end": 1788
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1789,
                    "end": 1791
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 1800,
                      "end": 1803
                    },
                    "start": 1800,
                    "end": 1805
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1789,
                  "end": 1805
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1807,
                    "end": 1809
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 1818,
                      "end": 1821
                    },
                    "start": 1818,
                    "end": 1823
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1807,
                  "end": 1823
                }
              ],
              "start": 1788,
              "end": 1824
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Reverse",
                "optional": false,
                "typeAnnotation": null,
                "start": 1835,
                "end": 1842
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSConditionalType",
                    "checkType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Reverse",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1843,
                        "end": 1850
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1851,
                              "end": 1853
                            },
                            "typeArguments": null,
                            "start": 1851,
                            "end": 1853
                          }
                        ],
                        "start": 1850,
                        "end": 1854
                      },
                      "start": 1843,
                      "end": 1854
                    },
                    "extendsType": {
                      "type": "TSInferType",
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1869,
                          "end": 1870
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1869,
                        "end": 1870
                      },
                      "start": 1863,
                      "end": 1870
                    },
                    "trueType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Cast",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1873,
                        "end": 1877
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1878,
                              "end": 1879
                            },
                            "typeArguments": null,
                            "start": 1878,
                            "end": 1879
                          },
                          {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 1881,
                              "end": 1884
                            },
                            "start": 1881,
                            "end": 1886
                          }
                        ],
                        "start": 1877,
                        "end": 1887
                      },
                      "start": 1873,
                      "end": 1887
                    },
                    "falseType": {
                      "type": "TSNeverKeyword",
                      "start": 1890,
                      "end": 1895
                    },
                    "start": 1843,
                    "end": 1895
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1897,
                      "end": 1899
                    },
                    "typeArguments": null,
                    "start": 1897,
                    "end": 1899
                  }
                ],
                "start": 1842,
                "end": 1900
              },
              "start": 1835,
              "end": 1900
            },
            "declare": false,
            "start": 1777,
            "end": 1901
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Append",
              "optional": false,
              "typeAnnotation": null,
              "start": 1912,
              "end": 1918
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1919,
                    "end": 1920
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1919,
                  "end": 1920
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1922,
                    "end": 1923
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 1932,
                      "end": 1935
                    },
                    "start": 1932,
                    "end": 1937
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1922,
                  "end": 1937
                }
              ],
              "start": 1918,
              "end": 1938
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Concat",
                "optional": false,
                "typeAnnotation": null,
                "start": 1949,
                "end": 1955
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
                      "start": 1956,
                      "end": 1957
                    },
                    "typeArguments": null,
                    "start": 1956,
                    "end": 1957
                  },
                  {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1960,
                          "end": 1961
                        },
                        "typeArguments": null,
                        "start": 1960,
                        "end": 1961
                      }
                    ],
                    "start": 1959,
                    "end": 1962
                  }
                ],
                "start": 1955,
                "end": 1963
              },
              "start": 1949,
              "end": 1963
            },
            "declare": false,
            "start": 1907,
            "end": 1964
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ValueOfRecord",
              "optional": false,
              "typeAnnotation": null,
              "start": 1975,
              "end": 1988
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1989,
                    "end": 1990
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1989,
                  "end": 1990
                }
              ],
              "start": 1988,
              "end": 1991
            },
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1994,
                  "end": 1995
                },
                "typeArguments": null,
                "start": 1994,
                "end": 1995
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2004,
                  "end": 2010
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 2011,
                      "end": 2014
                    },
                    {
                      "type": "TSInferType",
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2022,
                          "end": 2023
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 2022,
                        "end": 2023
                      },
                      "start": 2016,
                      "end": 2023
                    }
                  ],
                  "start": 2010,
                  "end": 2024
                },
                "start": 2004,
                "end": 2024
              },
              "trueType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2027,
                  "end": 2028
                },
                "typeArguments": null,
                "start": 2027,
                "end": 2028
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 2031,
                "end": 2036
              },
              "start": 1994,
              "end": 2036
            },
            "declare": false,
            "start": 1970,
            "end": 2037
          }
        ],
        "start": 229,
        "end": 2039
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 205,
      "end": 2039
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "R",
        "optional": false,
        "typeAnnotation": null,
        "start": 2059,
        "end": 2060
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Placeholder",
                "optional": false,
                "typeAnnotation": null,
                "start": 2079,
                "end": 2090
              },
              "typeParameters": null,
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
                      "name": "__placeholder",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2095,
                      "end": 2108
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 2110,
                        "end": 2114
                      },
                      "start": 2108,
                      "end": 2114
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2095,
                    "end": 2114
                  }
                ],
                "start": 2093,
                "end": 2116
              },
              "declare": false,
              "start": 2074,
              "end": 2117
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 2067,
            "end": 2117
          }
        ],
        "start": 2061,
        "end": 2119
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 2041,
      "end": 2119
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Curry",
        "optional": false,
        "typeAnnotation": null,
        "start": 2139,
        "end": 2144
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "GapOf",
              "optional": false,
              "typeAnnotation": null,
              "start": 2156,
              "end": 2161
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2162,
                    "end": 2164
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 2173,
                      "end": 2176
                    },
                    "start": 2173,
                    "end": 2178
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2162,
                  "end": 2178
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2180,
                    "end": 2182
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 2191,
                      "end": 2194
                    },
                    "start": 2191,
                    "end": 2196
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2180,
                  "end": 2196
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TN",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2198,
                    "end": 2200
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 2209,
                      "end": 2212
                    },
                    "start": 2209,
                    "end": 2214
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2198,
                  "end": 2214
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2216,
                    "end": 2217
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 2226,
                      "end": 2229
                    },
                    "start": 2226,
                    "end": 2231
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2216,
                  "end": 2231
                }
              ],
              "start": 2161,
              "end": 2232
            },
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2243,
                    "end": 2245
                  },
                  "typeArguments": null,
                  "start": 2243,
                  "end": 2245
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Tools",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2246,
                      "end": 2251
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Pos",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2252,
                      "end": 2255
                    },
                    "start": 2246,
                    "end": 2255
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "I",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2256,
                          "end": 2257
                        },
                        "typeArguments": null,
                        "start": 2256,
                        "end": 2257
                      }
                    ],
                    "start": 2255,
                    "end": 2258
                  },
                  "start": 2246,
                  "end": 2258
                },
                "start": 2243,
                "end": 2259
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2268,
                    "end": 2269
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Placeholder",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2270,
                    "end": 2281
                  },
                  "start": 2268,
                  "end": 2281
                },
                "typeArguments": null,
                "start": 2268,
                "end": 2281
              },
              "trueType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Tools",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2292,
                    "end": 2297
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Append",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2298,
                    "end": 2304
                  },
                  "start": 2292,
                  "end": 2304
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2305,
                          "end": 2307
                        },
                        "typeArguments": null,
                        "start": 2305,
                        "end": 2307
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Tools",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2308,
                            "end": 2313
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Pos",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2314,
                            "end": 2317
                          },
                          "start": 2308,
                          "end": 2317
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "I",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2318,
                                "end": 2319
                              },
                              "typeArguments": null,
                              "start": 2318,
                              "end": 2319
                            }
                          ],
                          "start": 2317,
                          "end": 2320
                        },
                        "start": 2308,
                        "end": 2320
                      },
                      "start": 2305,
                      "end": 2321
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TN",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2323,
                        "end": 2325
                      },
                      "typeArguments": null,
                      "start": 2323,
                      "end": 2325
                    }
                  ],
                  "start": 2304,
                  "end": 2326
                },
                "start": 2292,
                "end": 2326
              },
              "falseType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TN",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2337,
                  "end": 2339
                },
                "typeArguments": null,
                "start": 2337,
                "end": 2339
              },
              "start": 2243,
              "end": 2339
            },
            "declare": false,
            "start": 2151,
            "end": 2340
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "GapsOfWorker",
              "optional": false,
              "typeAnnotation": null,
              "start": 2356,
              "end": 2368
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2369,
                    "end": 2371
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 2380,
                      "end": 2383
                    },
                    "start": 2380,
                    "end": 2385
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2369,
                  "end": 2385
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2387,
                    "end": 2389
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 2398,
                      "end": 2401
                    },
                    "start": 2398,
                    "end": 2403
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2387,
                  "end": 2403
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TN",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2405,
                    "end": 2407
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 2416,
                      "end": 2419
                    },
                    "start": 2416,
                    "end": 2421
                  },
                  "default": {
                    "type": "TSTupleType",
                    "elementTypes": [],
                    "start": 2424,
                    "end": 2426
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2405,
                  "end": 2426
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2428,
                    "end": 2429
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 2438,
                      "end": 2441
                    },
                    "start": 2438,
                    "end": 2443
                  },
                  "default": {
                    "type": "TSTupleType",
                    "elementTypes": [],
                    "start": 2446,
                    "end": 2448
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2428,
                  "end": 2448
                }
              ],
              "start": 2368,
              "end": 2449
            },
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
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 2460,
                    "end": 2461
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "GapsOf",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2463,
                        "end": 2469
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2470,
                              "end": 2472
                            },
                            "typeArguments": null,
                            "start": 2470,
                            "end": 2472
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2474,
                              "end": 2476
                            },
                            "typeArguments": null,
                            "start": 2474,
                            "end": 2476
                          },
                          {
                            "type": "TSConditionalType",
                            "checkType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "GapOf",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2478,
                                "end": 2483
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T1",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2484,
                                      "end": 2486
                                    },
                                    "typeArguments": null,
                                    "start": 2484,
                                    "end": 2486
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2488,
                                      "end": 2490
                                    },
                                    "typeArguments": null,
                                    "start": 2488,
                                    "end": 2490
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "TN",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2492,
                                      "end": 2494
                                    },
                                    "typeArguments": null,
                                    "start": 2492,
                                    "end": 2494
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "I",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2496,
                                      "end": 2497
                                    },
                                    "typeArguments": null,
                                    "start": 2496,
                                    "end": 2497
                                  }
                                ],
                                "start": 2483,
                                "end": 2498
                              },
                              "start": 2478,
                              "end": 2498
                            },
                            "extendsType": {
                              "type": "TSInferType",
                              "typeParameter": {
                                "type": "TSTypeParameter",
                                "name": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "G",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2513,
                                  "end": 2514
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 2513,
                                "end": 2514
                              },
                              "start": 2507,
                              "end": 2514
                            },
                            "trueType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Tools",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2517,
                                  "end": 2522
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Cast",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2523,
                                  "end": 2527
                                },
                                "start": 2517,
                                "end": 2527
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "G",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2528,
                                      "end": 2529
                                    },
                                    "typeArguments": null,
                                    "start": 2528,
                                    "end": 2529
                                  },
                                  {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSAnyKeyword",
                                      "start": 2531,
                                      "end": 2534
                                    },
                                    "start": 2531,
                                    "end": 2536
                                  }
                                ],
                                "start": 2527,
                                "end": 2537
                              },
                              "start": 2517,
                              "end": 2537
                            },
                            "falseType": {
                              "type": "TSNeverKeyword",
                              "start": 2540,
                              "end": 2545
                            },
                            "start": 2478,
                            "end": 2545
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Tools",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2547,
                                "end": 2552
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Next",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2553,
                                "end": 2557
                              },
                              "start": 2547,
                              "end": 2557
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "I",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2558,
                                    "end": 2559
                                  },
                                  "typeArguments": null,
                                  "start": 2558,
                                  "end": 2559
                                }
                              ],
                              "start": 2557,
                              "end": 2560
                            },
                            "start": 2547,
                            "end": 2560
                          }
                        ],
                        "start": 2469,
                        "end": 2561
                      },
                      "start": 2463,
                      "end": 2561
                    },
                    "start": 2461,
                    "end": 2561
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2460,
                  "end": 2562
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2571,
                    "end": 2572
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Tools",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2574,
                          "end": 2579
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Concat",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2580,
                          "end": 2586
                        },
                        "start": 2574,
                        "end": 2586
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TN",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2587,
                              "end": 2589
                            },
                            "typeArguments": null,
                            "start": 2587,
                            "end": 2589
                          },
                          {
                            "type": "TSConditionalType",
                            "checkType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Tools",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2591,
                                  "end": 2596
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Drop",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2597,
                                  "end": 2601
                                },
                                "start": 2591,
                                "end": 2601
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "TSQualifiedName",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Tools",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2602,
                                        "end": 2607
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Pos",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2608,
                                        "end": 2611
                                      },
                                      "start": 2602,
                                      "end": 2611
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "I",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 2612,
                                            "end": 2613
                                          },
                                          "typeArguments": null,
                                          "start": 2612,
                                          "end": 2613
                                        }
                                      ],
                                      "start": 2611,
                                      "end": 2614
                                    },
                                    "start": 2602,
                                    "end": 2614
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2616,
                                      "end": 2618
                                    },
                                    "typeArguments": null,
                                    "start": 2616,
                                    "end": 2618
                                  }
                                ],
                                "start": 2601,
                                "end": 2619
                              },
                              "start": 2591,
                              "end": 2619
                            },
                            "extendsType": {
                              "type": "TSInferType",
                              "typeParameter": {
                                "type": "TSTypeParameter",
                                "name": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "D",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2634,
                                  "end": 2635
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 2634,
                                "end": 2635
                              },
                              "start": 2628,
                              "end": 2635
                            },
                            "trueType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Tools",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2638,
                                  "end": 2643
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Cast",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2644,
                                  "end": 2648
                                },
                                "start": 2638,
                                "end": 2648
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "D",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2649,
                                      "end": 2650
                                    },
                                    "typeArguments": null,
                                    "start": 2649,
                                    "end": 2650
                                  },
                                  {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSAnyKeyword",
                                      "start": 2652,
                                      "end": 2655
                                    },
                                    "start": 2652,
                                    "end": 2657
                                  }
                                ],
                                "start": 2648,
                                "end": 2658
                              },
                              "start": 2638,
                              "end": 2658
                            },
                            "falseType": {
                              "type": "TSNeverKeyword",
                              "start": 2661,
                              "end": 2666
                            },
                            "start": 2591,
                            "end": 2666
                          }
                        ],
                        "start": 2586,
                        "end": 2667
                      },
                      "start": 2574,
                      "end": 2667
                    },
                    "start": 2572,
                    "end": 2667
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2571,
                  "end": 2668
                }
              ],
              "start": 2450,
              "end": 2674
            },
            "declare": false,
            "start": 2346,
            "end": 2674
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "GapsOf",
              "optional": false,
              "typeAnnotation": null,
              "start": 2684,
              "end": 2690
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2691,
                    "end": 2693
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 2702,
                      "end": 2705
                    },
                    "start": 2702,
                    "end": 2707
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2691,
                  "end": 2707
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2709,
                    "end": 2711
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 2720,
                      "end": 2723
                    },
                    "start": 2720,
                    "end": 2725
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2709,
                  "end": 2725
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TN",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2727,
                    "end": 2729
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 2738,
                      "end": 2741
                    },
                    "start": 2738,
                    "end": 2743
                  },
                  "default": {
                    "type": "TSTupleType",
                    "elementTypes": [],
                    "start": 2746,
                    "end": 2748
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2727,
                  "end": 2748
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2750,
                    "end": 2751
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 2760,
                      "end": 2763
                    },
                    "start": 2760,
                    "end": 2765
                  },
                  "default": {
                    "type": "TSTupleType",
                    "elementTypes": [],
                    "start": 2768,
                    "end": 2770
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2750,
                  "end": 2770
                }
              ],
              "start": 2690,
              "end": 2771
            },
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "GapsOfWorker",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2774,
                  "end": 2786
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2787,
                        "end": 2789
                      },
                      "typeArguments": null,
                      "start": 2787,
                      "end": 2789
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2791,
                        "end": 2793
                      },
                      "typeArguments": null,
                      "start": 2791,
                      "end": 2793
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TN",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2795,
                        "end": 2797
                      },
                      "typeArguments": null,
                      "start": 2795,
                      "end": 2797
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "I",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2799,
                        "end": 2800
                      },
                      "typeArguments": null,
                      "start": 2799,
                      "end": 2800
                    }
                  ],
                  "start": 2786,
                  "end": 2801
                },
                "start": 2774,
                "end": 2801
              },
              "indexType": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Tools",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2811,
                      "end": 2816
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Pos",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2817,
                      "end": 2820
                    },
                    "start": 2811,
                    "end": 2820
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "I",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2821,
                          "end": 2822
                        },
                        "typeArguments": null,
                        "start": 2821,
                        "end": 2822
                      }
                    ],
                    "start": 2820,
                    "end": 2823
                  },
                  "start": 2811,
                  "end": 2823
                },
                "extendsType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Tools",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2832,
                      "end": 2837
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2838,
                      "end": 2844
                    },
                    "start": 2832,
                    "end": 2844
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2845,
                          "end": 2847
                        },
                        "typeArguments": null,
                        "start": 2845,
                        "end": 2847
                      }
                    ],
                    "start": 2844,
                    "end": 2848
                  },
                  "start": 2832,
                  "end": 2848
                },
                "trueType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2859,
                    "end": 2860
                  },
                  "start": 2859,
                  "end": 2860
                },
                "falseType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 2871,
                    "end": 2872
                  },
                  "start": 2871,
                  "end": 2872
                },
                "start": 2811,
                "end": 2872
              },
              "start": 2774,
              "end": 2878
            },
            "declare": false,
            "start": 2679,
            "end": 2879
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "PartialGaps",
              "optional": false,
              "typeAnnotation": null,
              "start": 2890,
              "end": 2901
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
                    "start": 2902,
                    "end": 2903
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 2912,
                      "end": 2915
                    },
                    "start": 2912,
                    "end": 2917
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2902,
                  "end": 2917
                }
              ],
              "start": 2901,
              "end": 2918
            },
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 2932,
                "end": 2933
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2943,
                    "end": 2944
                  },
                  "typeArguments": null,
                  "start": 2943,
                  "end": 2944
                },
                "start": 2937,
                "end": 2944
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2948,
                        "end": 2949
                      },
                      "typeArguments": null,
                      "start": 2948,
                      "end": 2949
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2950,
                        "end": 2951
                      },
                      "typeArguments": null,
                      "start": 2950,
                      "end": 2951
                    },
                    "start": 2948,
                    "end": 2952
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2955,
                        "end": 2956
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Placeholder",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2957,
                        "end": 2968
                      },
                      "start": 2955,
                      "end": 2968
                    },
                    "typeArguments": null,
                    "start": 2955,
                    "end": 2968
                  }
                ],
                "start": 2948,
                "end": 2968
              },
              "optional": true,
              "readonly": null,
              "start": 2921,
              "end": 2974
            },
            "declare": false,
            "start": 2885,
            "end": 2975
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "CleanedGaps",
              "optional": false,
              "typeAnnotation": null,
              "start": 2986,
              "end": 2997
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
                    "start": 2998,
                    "end": 2999
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 3008,
                      "end": 3011
                    },
                    "start": 3008,
                    "end": 3013
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2998,
                  "end": 3013
                }
              ],
              "start": 2997,
              "end": 3014
            },
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 3028,
                "end": 3029
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3039,
                    "end": 3040
                  },
                  "typeArguments": null,
                  "start": 3039,
                  "end": 3040
                },
                "start": 3033,
                "end": 3040
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NonNullable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3043,
                  "end": 3054
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3055,
                          "end": 3056
                        },
                        "typeArguments": null,
                        "start": 3055,
                        "end": 3056
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
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
                      "end": 3059
                    }
                  ],
                  "start": 3054,
                  "end": 3060
                },
                "start": 3043,
                "end": 3060
              },
              "optional": false,
              "readonly": null,
              "start": 3017,
              "end": 3066
            },
            "declare": false,
            "start": 2981,
            "end": 3067
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Gaps",
              "optional": false,
              "typeAnnotation": null,
              "start": 3078,
              "end": 3082
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
                    "start": 3083,
                    "end": 3084
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 3093,
                      "end": 3096
                    },
                    "start": 3093,
                    "end": 3098
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3083,
                  "end": 3098
                }
              ],
              "start": 3082,
              "end": 3099
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "CleanedGaps",
                "optional": false,
                "typeAnnotation": null,
                "start": 3102,
                "end": 3113
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PartialGaps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3114,
                      "end": 3125
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
                            "start": 3126,
                            "end": 3127
                          },
                          "typeArguments": null,
                          "start": 3126,
                          "end": 3127
                        }
                      ],
                      "start": 3125,
                      "end": 3128
                    },
                    "start": 3114,
                    "end": 3128
                  }
                ],
                "start": 3113,
                "end": 3129
              },
              "start": 3102,
              "end": 3129
            },
            "declare": false,
            "start": 3073,
            "end": 3130
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Curry",
              "optional": false,
              "typeAnnotation": null,
              "start": 3141,
              "end": 3146
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "F",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3147,
                    "end": 3148
                  },
                  "constraint": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "args",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3162,
                          "end": 3166
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 3168,
                            "end": 3171
                          },
                          "start": 3166,
                          "end": 3171
                        },
                        "value": null,
                        "start": 3159,
                        "end": 3171
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 3176,
                        "end": 3179
                      },
                      "start": 3173,
                      "end": 3179
                    },
                    "start": 3158,
                    "end": 3179
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3147,
                  "end": 3180
                }
              ],
              "start": 3146,
              "end": 3181
            },
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
                      "start": 3193,
                      "end": 3194
                    },
                    "constraint": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 3203,
                        "end": 3206
                      },
                      "start": 3203,
                      "end": 3208
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 3193,
                    "end": 3208
                  }
                ],
                "start": 3192,
                "end": 3209
              },
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3213,
                    "end": 3217
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Tools",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3219,
                          "end": 3224
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Cast",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3225,
                          "end": 3229
                        },
                        "start": 3219,
                        "end": 3229
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Tools",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3230,
                                "end": 3235
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Cast",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3236,
                                "end": 3240
                              },
                              "start": 3230,
                              "end": 3240
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
                                    "start": 3241,
                                    "end": 3242
                                  },
                                  "typeArguments": null,
                                  "start": 3241,
                                  "end": 3242
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Gaps",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3244,
                                    "end": 3248
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Parameters",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3249,
                                          "end": 3259
                                        },
                                        "typeArguments": {
                                          "type": "TSTypeParameterInstantiation",
                                          "params": [
                                            {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "F",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 3260,
                                                "end": 3261
                                              },
                                              "typeArguments": null,
                                              "start": 3260,
                                              "end": 3261
                                            }
                                          ],
                                          "start": 3259,
                                          "end": 3262
                                        },
                                        "start": 3249,
                                        "end": 3262
                                      }
                                    ],
                                    "start": 3248,
                                    "end": 3263
                                  },
                                  "start": 3244,
                                  "end": 3263
                                }
                              ],
                              "start": 3240,
                              "end": 3264
                            },
                            "start": 3230,
                            "end": 3264
                          },
                          {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 3266,
                              "end": 3269
                            },
                            "start": 3266,
                            "end": 3271
                          }
                        ],
                        "start": 3229,
                        "end": 3272
                      },
                      "start": 3219,
                      "end": 3272
                    },
                    "start": 3217,
                    "end": 3272
                  },
                  "value": null,
                  "start": 3210,
                  "end": 3272
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSConditionalType",
                  "checkType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "GapsOf",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3289,
                      "end": 3295
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
                            "start": 3296,
                            "end": 3297
                          },
                          "typeArguments": null,
                          "start": 3296,
                          "end": 3297
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Parameters",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3299,
                            "end": 3309
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "F",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3310,
                                  "end": 3311
                                },
                                "typeArguments": null,
                                "start": 3310,
                                "end": 3311
                              }
                            ],
                            "start": 3309,
                            "end": 3312
                          },
                          "start": 3299,
                          "end": 3312
                        }
                      ],
                      "start": 3295,
                      "end": 3313
                    },
                    "start": 3289,
                    "end": 3313
                  },
                  "extendsType": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 3323,
                        "end": 3326
                      },
                      {
                        "type": "TSRestType",
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSAnyKeyword",
                            "start": 3331,
                            "end": 3334
                          },
                          "start": 3331,
                          "end": 3336
                        },
                        "start": 3328,
                        "end": 3336
                      }
                    ],
                    "start": 3322,
                    "end": 3337
                  },
                  "trueType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Curry",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3352,
                      "end": 3357
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSFunctionType",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "RestElement",
                              "decorators": [],
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "args",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3362,
                                "end": 3366
                              },
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSConditionalType",
                                  "checkType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "GapsOf",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3368,
                                      "end": 3374
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
                                            "start": 3375,
                                            "end": 3376
                                          },
                                          "typeArguments": null,
                                          "start": 3375,
                                          "end": 3376
                                        },
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Parameters",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3378,
                                            "end": 3388
                                          },
                                          "typeArguments": {
                                            "type": "TSTypeParameterInstantiation",
                                            "params": [
                                              {
                                                "type": "TSTypeReference",
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "F",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 3389,
                                                  "end": 3390
                                                },
                                                "typeArguments": null,
                                                "start": 3389,
                                                "end": 3390
                                              }
                                            ],
                                            "start": 3388,
                                            "end": 3391
                                          },
                                          "start": 3378,
                                          "end": 3391
                                        }
                                      ],
                                      "start": 3374,
                                      "end": 3392
                                    },
                                    "start": 3368,
                                    "end": 3392
                                  },
                                  "extendsType": {
                                    "type": "TSInferType",
                                    "typeParameter": {
                                      "type": "TSTypeParameter",
                                      "name": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "G",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3407,
                                        "end": 3408
                                      },
                                      "constraint": null,
                                      "default": null,
                                      "in": false,
                                      "out": false,
                                      "const": false,
                                      "start": 3407,
                                      "end": 3408
                                    },
                                    "start": 3401,
                                    "end": 3408
                                  },
                                  "trueType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "TSQualifiedName",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Tools",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3411,
                                        "end": 3416
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Cast",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3417,
                                        "end": 3421
                                      },
                                      "start": 3411,
                                      "end": 3421
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "G",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 3422,
                                            "end": 3423
                                          },
                                          "typeArguments": null,
                                          "start": 3422,
                                          "end": 3423
                                        },
                                        {
                                          "type": "TSArrayType",
                                          "elementType": {
                                            "type": "TSAnyKeyword",
                                            "start": 3425,
                                            "end": 3428
                                          },
                                          "start": 3425,
                                          "end": 3430
                                        }
                                      ],
                                      "start": 3421,
                                      "end": 3431
                                    },
                                    "start": 3411,
                                    "end": 3431
                                  },
                                  "falseType": {
                                    "type": "TSNeverKeyword",
                                    "start": 3434,
                                    "end": 3439
                                  },
                                  "start": 3368,
                                  "end": 3439
                                },
                                "start": 3366,
                                "end": 3439
                              },
                              "value": null,
                              "start": 3359,
                              "end": 3439
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ReturnType",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3444,
                                "end": 3454
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "F",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3455,
                                      "end": 3456
                                    },
                                    "typeArguments": null,
                                    "start": 3455,
                                    "end": 3456
                                  }
                                ],
                                "start": 3454,
                                "end": 3457
                              },
                              "start": 3444,
                              "end": 3457
                            },
                            "start": 3441,
                            "end": 3457
                          },
                          "start": 3358,
                          "end": 3457
                        }
                      ],
                      "start": 3357,
                      "end": 3458
                    },
                    "start": 3352,
                    "end": 3458
                  },
                  "falseType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ReturnType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3473,
                      "end": 3483
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "F",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3484,
                            "end": 3485
                          },
                          "typeArguments": null,
                          "start": 3484,
                          "end": 3485
                        }
                      ],
                      "start": 3483,
                      "end": 3486
                    },
                    "start": 3473,
                    "end": 3486
                  },
                  "start": 3289,
                  "end": 3486
                },
                "start": 3274,
                "end": 3486
              },
              "start": 3192,
              "end": 3486
            },
            "declare": false,
            "start": 3136,
            "end": 3487
          }
        ],
        "start": 2145,
        "end": 3489
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 2121,
      "end": 3489
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 205,
  "end": 3489
}
```
