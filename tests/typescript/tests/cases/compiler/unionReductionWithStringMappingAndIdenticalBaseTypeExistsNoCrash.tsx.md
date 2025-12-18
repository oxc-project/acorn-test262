__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 72
      },
      "start": 58,
      "end": 73
    },
    {
      "type": "TSNamespaceExportDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 94,
        "end": 99
      },
      "start": 74,
      "end": 100
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 120,
        "end": 125
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ReactNode",
              "optional": false,
              "typeAnnotation": null,
              "start": 135,
              "end": 144
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ReactElement",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 153,
                    "end": 165
                  },
                  "typeArguments": null,
                  "start": 153,
                  "end": 165
                },
                {
                  "type": "TSStringKeyword",
                  "start": 172,
                  "end": 178
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 185,
                  "end": 191
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Iterable",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 198,
                    "end": 206
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ReactNode",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 207,
                          "end": 216
                        },
                        "typeArguments": null,
                        "start": 207,
                        "end": 216
                      }
                    ],
                    "start": 206,
                    "end": 217
                  },
                  "start": 198,
                  "end": 217
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 224,
                  "end": 231
                },
                {
                  "type": "TSNullKeyword",
                  "start": 238,
                  "end": 242
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 249,
                  "end": 258
                }
              ],
              "start": 151,
              "end": 258
            },
            "declare": false,
            "start": 130,
            "end": 259
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSXElementConstructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 267,
              "end": 288
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 289,
                    "end": 290
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 289,
                  "end": 290
                }
              ],
              "start": 288,
              "end": 291
            },
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "props",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 302,
                        "end": 303
                      },
                      "typeArguments": null,
                      "start": 302,
                      "end": 303
                    },
                    "start": 300,
                    "end": 303
                  },
                  "start": 295,
                  "end": 303
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ReactNode",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 308,
                    "end": 317
                  },
                  "typeArguments": null,
                  "start": 308,
                  "end": 317
                },
                "start": 305,
                "end": 317
              },
              "start": 294,
              "end": 317
            },
            "declare": false,
            "start": 262,
            "end": 318
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ReactElement",
              "optional": false,
              "typeAnnotation": null,
              "start": 331,
              "end": 343
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 349,
                    "end": 350
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSAnyKeyword",
                    "start": 353,
                    "end": 356
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 349,
                  "end": 356
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 362,
                    "end": 363
                  },
                  "constraint": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 372,
                        "end": 378
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "JSXElementConstructor",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 381,
                          "end": 402
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSAnyKeyword",
                              "start": 403,
                              "end": 406
                            }
                          ],
                          "start": 402,
                          "end": 407
                        },
                        "start": 381,
                        "end": 407
                      }
                    ],
                    "start": 372,
                    "end": 407
                  },
                  "default": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 418,
                        "end": 424
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "JSXElementConstructor",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 433,
                          "end": 454
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSAnyKeyword",
                              "start": 455,
                              "end": 458
                            }
                          ],
                          "start": 454,
                          "end": 459
                        },
                        "start": 433,
                        "end": 459
                      }
                    ],
                    "start": 416,
                    "end": 459
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 362,
                  "end": 459
                }
              ],
              "start": 343,
              "end": 464
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 471,
                    "end": 475
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
                        "start": 477,
                        "end": 478
                      },
                      "typeArguments": null,
                      "start": 477,
                      "end": 478
                    },
                    "start": 475,
                    "end": 478
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 471,
                  "end": 479
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 484,
                    "end": 489
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
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
                  "accessibility": null,
                  "static": false,
                  "start": 484,
                  "end": 493
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 498,
                    "end": 501
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 503,
                          "end": 509
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 512,
                          "end": 516
                        }
                      ],
                      "start": 503,
                      "end": 516
                    },
                    "start": 501,
                    "end": 516
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 498,
                  "end": 517
                }
              ],
              "start": 465,
              "end": 521
            },
            "declare": false,
            "start": 321,
            "end": 521
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ComponentProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 530,
              "end": 544
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
                    "start": 545,
                    "end": 546
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "JSXElementConstructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 555,
                      "end": 576
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 577,
                          "end": 580
                        }
                      ],
                      "start": 576,
                      "end": 581
                    },
                    "start": 555,
                    "end": 581
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 545,
                  "end": 581
                }
              ],
              "start": 544,
              "end": 582
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
                  "start": 589,
                  "end": 590
                },
                "typeArguments": null,
                "start": 589,
                "end": 590
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "JSXElementConstructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 599,
                  "end": 620
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSInferType",
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 627,
                          "end": 628
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 627,
                        "end": 628
                      },
                      "start": 621,
                      "end": 628
                    }
                  ],
                  "start": 620,
                  "end": 629
                },
                "start": 599,
                "end": 629
              },
              "trueType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 632,
                  "end": 633
                },
                "typeArguments": null,
                "start": 632,
                "end": 633
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 636,
                "end": 641
              },
              "start": 589,
              "end": 641
            },
            "declare": false,
            "start": 525,
            "end": 642
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ExoticComponent",
              "optional": false,
              "typeAnnotation": null,
              "start": 656,
              "end": 671
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 672,
                    "end": 673
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 676,
                    "end": 678
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 672,
                  "end": 678
                }
              ],
              "start": 671,
              "end": 679
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
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 694,
                            "end": 695
                          },
                          "typeArguments": null,
                          "start": 694,
                          "end": 695
                        },
                        "start": 692,
                        "end": 695
                      },
                      "start": 687,
                      "end": 695
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ReactNode",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 698,
                        "end": 707
                      },
                      "typeArguments": null,
                      "start": 698,
                      "end": 707
                    },
                    "start": 696,
                    "end": 707
                  },
                  "start": 686,
                  "end": 708
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": true,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "$$typeof",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 722,
                    "end": 730
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSSymbolKeyword",
                      "start": 732,
                      "end": 738
                    },
                    "start": 730,
                    "end": 738
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 713,
                  "end": 739
                }
              ],
              "start": 680,
              "end": 743
            },
            "declare": false,
            "start": 646,
            "end": 743
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "LazyExoticComponent",
              "optional": false,
              "typeAnnotation": null,
              "start": 752,
              "end": 771
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
                    "start": 772,
                    "end": 773
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "JSXElementConstructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 782,
                      "end": 803
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 804,
                          "end": 807
                        }
                      ],
                      "start": 803,
                      "end": 808
                    },
                    "start": 782,
                    "end": 808
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 772,
                  "end": 808
                }
              ],
              "start": 771,
              "end": 809
            },
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ExoticComponent",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 816,
                    "end": 831
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ComponentProps",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 832,
                          "end": 846
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
                                "start": 847,
                                "end": 848
                              },
                              "typeArguments": null,
                              "start": 847,
                              "end": 848
                            }
                          ],
                          "start": 846,
                          "end": 849
                        },
                        "start": 832,
                        "end": 849
                      }
                    ],
                    "start": 831,
                    "end": 850
                  },
                  "start": 816,
                  "end": 850
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": true,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_result",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 870,
                        "end": 877
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
                            "start": 879,
                            "end": 880
                          },
                          "typeArguments": null,
                          "start": 879,
                          "end": 880
                        },
                        "start": 877,
                        "end": 880
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 861,
                      "end": 881
                    }
                  ],
                  "start": 853,
                  "end": 887
                }
              ],
              "start": 816,
              "end": 887
            },
            "declare": false,
            "start": 747,
            "end": 888
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "createElement",
              "optional": false,
              "typeAnnotation": null,
              "start": 901,
              "end": 914
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 918,
                "end": 922
              },
              "start": 916,
              "end": 922
            },
            "body": null,
            "expression": false,
            "start": 892,
            "end": 923
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null,
              "start": 937,
              "end": 940
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Element",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 957,
                    "end": 964
                  },
                  "typeParameters": null,
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "GlobalJSXElement",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 973,
                        "end": 989
                      },
                      "typeArguments": null,
                      "start": 973,
                      "end": 989
                    }
                  ],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [],
                    "start": 990,
                    "end": 992
                  },
                  "declare": false,
                  "start": 947,
                  "end": 992
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ElementChildrenAttribute",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1007,
                    "end": 1031
                  },
                  "typeParameters": null,
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "GlobalJSXElementChildrenAttribute",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1046,
                        "end": 1079
                      },
                      "typeArguments": null,
                      "start": 1046,
                      "end": 1079
                    }
                  ],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [],
                    "start": 1080,
                    "end": 1082
                  },
                  "declare": false,
                  "start": 997,
                  "end": 1082
                },
                {
                  "type": "TSTypeAliasDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "LibraryManagedAttributes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1092,
                    "end": 1116
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1117,
                          "end": 1118
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1117,
                        "end": 1118
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1120,
                          "end": 1121
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1120,
                        "end": 1121
                      }
                    ],
                    "start": 1116,
                    "end": 1122
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "GlobalJSXLibraryManagedAttributes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1125,
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
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1166,
                            "end": 1167
                          },
                          "typeArguments": null,
                          "start": 1166,
                          "end": 1167
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1175,
                            "end": 1176
                          },
                          "typeArguments": null,
                          "start": 1175,
                          "end": 1176
                        }
                      ],
                      "start": 1158,
                      "end": 1182
                    },
                    "start": 1125,
                    "end": 1182
                  },
                  "declare": false,
                  "start": 1087,
                  "end": 1183
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IntrinsicElements",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1198,
                    "end": 1215
                  },
                  "typeParameters": null,
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "GlobalJSXIntrinsicElements",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1224,
                        "end": 1250
                      },
                      "typeArguments": null,
                      "start": 1224,
                      "end": 1250
                    }
                  ],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [],
                    "start": 1251,
                    "end": 1253
                  },
                  "declare": false,
                  "start": 1188,
                  "end": 1253
                }
              ],
              "start": 941,
              "end": 1257
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 927,
            "end": 1257
          }
        ],
        "start": 126,
        "end": 1259
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 102,
      "end": 1259
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReactManagedAttributes",
        "optional": false,
        "typeAnnotation": null,
        "start": 1266,
        "end": 1288
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 1289,
              "end": 1290
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1289,
            "end": 1290
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 1292,
              "end": 1293
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1292,
            "end": 1293
          }
        ],
        "start": 1288,
        "end": 1294
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 1297,
            "end": 1298
          },
          "typeArguments": null,
          "start": 1297,
          "end": 1298
        },
        "extendsType": {
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
                "name": "defaultProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 1309,
                "end": 1321
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1329,
                      "end": 1330
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1329,
                    "end": 1330
                  },
                  "start": 1323,
                  "end": 1330
                },
                "start": 1321,
                "end": 1330
              },
              "accessibility": null,
              "static": false,
              "start": 1309,
              "end": 1330
            }
          ],
          "start": 1307,
          "end": 1332
        },
        "trueType": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 1337,
                "end": 1338
              },
              "typeArguments": null,
              "start": 1337,
              "end": 1338
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 1341,
                "end": 1342
              },
              "typeArguments": null,
              "start": 1341,
              "end": 1342
            }
          ],
          "start": 1337,
          "end": 1342
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 1347,
            "end": 1348
          },
          "typeArguments": null,
          "start": 1347,
          "end": 1348
        },
        "start": 1297,
        "end": 1348
      },
      "declare": false,
      "start": 1261,
      "end": 1349
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null,
        "start": 1359,
        "end": 1365
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null,
              "start": 1380,
              "end": 1383
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Element",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1400,
                    "end": 1407
                  },
                  "typeParameters": null,
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "expression": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "React",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1416,
                          "end": 1421
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ReactElement",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1422,
                          "end": 1434
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1416,
                        "end": 1434
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSAnyKeyword",
                            "start": 1435,
                            "end": 1438
                          },
                          {
                            "type": "TSAnyKeyword",
                            "start": 1440,
                            "end": 1443
                          }
                        ],
                        "start": 1434,
                        "end": 1444
                      },
                      "start": 1416,
                      "end": 1444
                    }
                  ],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [],
                    "start": 1445,
                    "end": 1447
                  },
                  "declare": false,
                  "start": 1390,
                  "end": 1447
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ElementChildrenAttribute",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1462,
                    "end": 1486
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
                          "name": "children",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1495,
                          "end": 1503
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "members": [],
                            "start": 1505,
                            "end": 1507
                          },
                          "start": 1503,
                          "end": 1507
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1495,
                        "end": 1508
                      }
                    ],
                    "start": 1487,
                    "end": 1514
                  },
                  "declare": false,
                  "start": 1452,
                  "end": 1514
                },
                {
                  "type": "TSTypeAliasDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "LibraryManagedAttributes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1524,
                    "end": 1548
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1549,
                          "end": 1550
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1549,
                        "end": 1550
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1552,
                          "end": 1553
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1552,
                        "end": 1553
                      }
                    ],
                    "start": 1548,
                    "end": 1554
                  },
                  "typeAnnotation": {
                    "type": "TSConditionalType",
                    "checkType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1557,
                        "end": 1558
                      },
                      "typeArguments": null,
                      "start": 1557,
                      "end": 1558
                    },
                    "extendsType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "React",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1567,
                          "end": 1572
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "LazyExoticComponent",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1573,
                          "end": 1592
                        },
                        "start": 1567,
                        "end": 1592
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
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
                                "start": 1606,
                                "end": 1607
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 1606,
                              "end": 1607
                            },
                            "start": 1600,
                            "end": 1607
                          }
                        ],
                        "start": 1592,
                        "end": 1613
                      },
                      "start": 1567,
                      "end": 1613
                    },
                    "trueType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ReactManagedAttributes",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1622,
                        "end": 1644
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
                              "start": 1645,
                              "end": 1646
                            },
                            "typeArguments": null,
                            "start": 1645,
                            "end": 1646
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "P",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1648,
                              "end": 1649
                            },
                            "typeArguments": null,
                            "start": 1648,
                            "end": 1649
                          }
                        ],
                        "start": 1644,
                        "end": 1650
                      },
                      "start": 1622,
                      "end": 1650
                    },
                    "falseType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ReactManagedAttributes",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1659,
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
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1682,
                              "end": 1683
                            },
                            "typeArguments": null,
                            "start": 1682,
                            "end": 1683
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "P",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1685,
                              "end": 1686
                            },
                            "typeArguments": null,
                            "start": 1685,
                            "end": 1686
                          }
                        ],
                        "start": 1681,
                        "end": 1687
                      },
                      "start": 1659,
                      "end": 1687
                    },
                    "start": 1557,
                    "end": 1687
                  },
                  "declare": false,
                  "start": 1519,
                  "end": 1688
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IntrinsicElements",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1703,
                    "end": 1720
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
                          "name": "div",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1729,
                          "end": 1732
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "members": [],
                            "start": 1734,
                            "end": 1736
                          },
                          "start": 1732,
                          "end": 1736
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1729,
                        "end": 1737
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "span",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1744,
                          "end": 1748
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "members": [],
                            "start": 1750,
                            "end": 1752
                          },
                          "start": 1748,
                          "end": 1752
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1744,
                        "end": 1753
                      }
                    ],
                    "start": 1721,
                    "end": 1759
                  },
                  "declare": false,
                  "start": 1693,
                  "end": 1759
                }
              ],
              "start": 1384,
              "end": 1763
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 1370,
            "end": 1763
          }
        ],
        "start": 1366,
        "end": 1765
      },
      "kind": "global",
      "declare": true,
      "global": true,
      "start": 1351,
      "end": 1765
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GlobalJSXElement",
        "optional": false,
        "typeAnnotation": null,
        "start": 1777,
        "end": 1793
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null,
              "start": 1802,
              "end": 1805
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 1806,
              "end": 1813
            },
            "optional": false,
            "computed": false,
            "start": 1802,
            "end": 1813
          },
          "typeArguments": null,
          "start": 1802,
          "end": 1813
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 1814,
        "end": 1816
      },
      "declare": false,
      "start": 1767,
      "end": 1816
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GlobalJSXElementChildrenAttribute",
        "optional": false,
        "typeAnnotation": null,
        "start": 1827,
        "end": 1860
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null,
              "start": 1871,
              "end": 1874
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "ElementChildrenAttribute",
              "optional": false,
              "typeAnnotation": null,
              "start": 1875,
              "end": 1899
            },
            "optional": false,
            "computed": false,
            "start": 1871,
            "end": 1899
          },
          "typeArguments": null,
          "start": 1871,
          "end": 1899
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 1900,
        "end": 1902
      },
      "declare": false,
      "start": 1817,
      "end": 1902
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GlobalJSXLibraryManagedAttributes",
        "optional": false,
        "typeAnnotation": null,
        "start": 1908,
        "end": 1941
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 1942,
              "end": 1943
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1942,
            "end": 1943
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 1945,
              "end": 1946
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1945,
            "end": 1946
          }
        ],
        "start": 1941,
        "end": 1947
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "JSX",
            "optional": false,
            "typeAnnotation": null,
            "start": 1950,
            "end": 1953
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "LibraryManagedAttributes",
            "optional": false,
            "typeAnnotation": null,
            "start": 1954,
            "end": 1978
          },
          "start": 1950,
          "end": 1978
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 1982,
                "end": 1983
              },
              "typeArguments": null,
              "start": 1982,
              "end": 1983
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 1987,
                "end": 1988
              },
              "typeArguments": null,
              "start": 1987,
              "end": 1988
            }
          ],
          "start": 1978,
          "end": 1990
        },
        "start": 1950,
        "end": 1990
      },
      "declare": false,
      "start": 1903,
      "end": 1991
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GlobalJSXIntrinsicElements",
        "optional": false,
        "typeAnnotation": null,
        "start": 2002,
        "end": 2028
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null,
              "start": 2037,
              "end": 2040
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null,
              "start": 2041,
              "end": 2058
            },
            "optional": false,
            "computed": false,
            "start": 2037,
            "end": 2058
          },
          "typeArguments": null,
          "start": 2037,
          "end": 2058
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 2059,
        "end": 2061
      },
      "declare": false,
      "start": 1992,
      "end": 2061
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 58,
  "end": 2062
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 58,
    "end": 64,
    "range": [
      58,
      64
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 67,
    "end": 72,
    "range": [
      67,
      72
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 74,
    "end": 80,
    "range": [
      74,
      80
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 81,
    "end": 83,
    "range": [
      81,
      83
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 84,
    "end": 93,
    "range": [
      84,
      93
    ]
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 94,
    "end": 99,
    "range": [
      94,
      99
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 102,
    "end": 109,
    "range": [
      102,
      109
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 110,
    "end": 119,
    "range": [
      110,
      119
    ]
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 120,
    "end": 125,
    "range": [
      120,
      125
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 130,
    "end": 134,
    "range": [
      130,
      134
    ]
  },
  {
    "type": "Identifier",
    "value": "ReactNode",
    "start": 135,
    "end": 144,
    "range": [
      135,
      144
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 145,
    "end": 146,
    "range": [
      145,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 151,
    "end": 152,
    "range": [
      151,
      152
    ]
  },
  {
    "type": "Identifier",
    "value": "ReactElement",
    "start": 153,
    "end": 165,
    "range": [
      153,
      165
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 172,
    "end": 178,
    "range": [
      172,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 183,
    "end": 184,
    "range": [
      183,
      184
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 185,
    "end": 191,
    "range": [
      185,
      191
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Identifier",
    "value": "Iterable",
    "start": 198,
    "end": 206,
    "range": [
      198,
      206
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "Identifier",
    "value": "ReactNode",
    "start": 207,
    "end": 216,
    "range": [
      207,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 222,
    "end": 223,
    "range": [
      222,
      223
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 224,
    "end": 231,
    "range": [
      224,
      231
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 236,
    "end": 237,
    "range": [
      236,
      237
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 238,
    "end": 242,
    "range": [
      238,
      242
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 247,
    "end": 248,
    "range": [
      247,
      248
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 249,
    "end": 258,
    "range": [
      249,
      258
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 258,
    "end": 259,
    "range": [
      258,
      259
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 262,
    "end": 266,
    "range": [
      262,
      266
    ]
  },
  {
    "type": "Identifier",
    "value": "JSXElementConstructor",
    "start": 267,
    "end": 288,
    "range": [
      267,
      288
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 288,
    "end": 289,
    "range": [
      288,
      289
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 289,
    "end": 290,
    "range": [
      289,
      290
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 290,
    "end": 291,
    "range": [
      290,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 292,
    "end": 293,
    "range": [
      292,
      293
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 294,
    "end": 295,
    "range": [
      294,
      295
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 295,
    "end": 300,
    "range": [
      295,
      300
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 300,
    "end": 301,
    "range": [
      300,
      301
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 302,
    "end": 303,
    "range": [
      302,
      303
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 303,
    "end": 304,
    "range": [
      303,
      304
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 305,
    "end": 307,
    "range": [
      305,
      307
    ]
  },
  {
    "type": "Identifier",
    "value": "ReactNode",
    "start": 308,
    "end": 317,
    "range": [
      308,
      317
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 317,
    "end": 318,
    "range": [
      317,
      318
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 321,
    "end": 330,
    "range": [
      321,
      330
    ]
  },
  {
    "type": "Identifier",
    "value": "ReactElement",
    "start": 331,
    "end": 343,
    "range": [
      331,
      343
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 343,
    "end": 344,
    "range": [
      343,
      344
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 349,
    "end": 350,
    "range": [
      349,
      350
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 351,
    "end": 352,
    "range": [
      351,
      352
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 353,
    "end": 356,
    "range": [
      353,
      356
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 356,
    "end": 357,
    "range": [
      356,
      357
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 362,
    "end": 363,
    "range": [
      362,
      363
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 364,
    "end": 371,
    "range": [
      364,
      371
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 372,
    "end": 378,
    "range": [
      372,
      378
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 379,
    "end": 380,
    "range": [
      379,
      380
    ]
  },
  {
    "type": "Identifier",
    "value": "JSXElementConstructor",
    "start": 381,
    "end": 402,
    "range": [
      381,
      402
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 402,
    "end": 403,
    "range": [
      402,
      403
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 403,
    "end": 406,
    "range": [
      403,
      406
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 406,
    "end": 407,
    "range": [
      406,
      407
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 408,
    "end": 409,
    "range": [
      408,
      409
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 416,
    "end": 417,
    "range": [
      416,
      417
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 418,
    "end": 424,
    "range": [
      418,
      424
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 431,
    "end": 432,
    "range": [
      431,
      432
    ]
  },
  {
    "type": "Identifier",
    "value": "JSXElementConstructor",
    "start": 433,
    "end": 454,
    "range": [
      433,
      454
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 454,
    "end": 455,
    "range": [
      454,
      455
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 455,
    "end": 458,
    "range": [
      455,
      458
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 458,
    "end": 459,
    "range": [
      458,
      459
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 459,
    "end": 460,
    "range": [
      459,
      460
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 463,
    "end": 464,
    "range": [
      463,
      464
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 465,
    "end": 466,
    "range": [
      465,
      466
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 471,
    "end": 475,
    "range": [
      471,
      475
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 475,
    "end": 476,
    "range": [
      475,
      476
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 477,
    "end": 478,
    "range": [
      477,
      478
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 478,
    "end": 479,
    "range": [
      478,
      479
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 484,
    "end": 489,
    "range": [
      484,
      489
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 489,
    "end": 490,
    "range": [
      489,
      490
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 491,
    "end": 492,
    "range": [
      491,
      492
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 492,
    "end": 493,
    "range": [
      492,
      493
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 498,
    "end": 501,
    "range": [
      498,
      501
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 501,
    "end": 502,
    "range": [
      501,
      502
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 503,
    "end": 509,
    "range": [
      503,
      509
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 510,
    "end": 511,
    "range": [
      510,
      511
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 512,
    "end": 516,
    "range": [
      512,
      516
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 516,
    "end": 517,
    "range": [
      516,
      517
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 520,
    "end": 521,
    "range": [
      520,
      521
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 525,
    "end": 529,
    "range": [
      525,
      529
    ]
  },
  {
    "type": "Identifier",
    "value": "ComponentProps",
    "start": 530,
    "end": 544,
    "range": [
      530,
      544
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 544,
    "end": 545,
    "range": [
      544,
      545
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 545,
    "end": 546,
    "range": [
      545,
      546
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 547,
    "end": 554,
    "range": [
      547,
      554
    ]
  },
  {
    "type": "Identifier",
    "value": "JSXElementConstructor",
    "start": 555,
    "end": 576,
    "range": [
      555,
      576
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 576,
    "end": 577,
    "range": [
      576,
      577
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 577,
    "end": 580,
    "range": [
      577,
      580
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 580,
    "end": 581,
    "range": [
      580,
      581
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 581,
    "end": 582,
    "range": [
      581,
      582
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 583,
    "end": 584,
    "range": [
      583,
      584
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 589,
    "end": 590,
    "range": [
      589,
      590
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 591,
    "end": 598,
    "range": [
      591,
      598
    ]
  },
  {
    "type": "Identifier",
    "value": "JSXElementConstructor",
    "start": 599,
    "end": 620,
    "range": [
      599,
      620
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 620,
    "end": 621,
    "range": [
      620,
      621
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 621,
    "end": 626,
    "range": [
      621,
      626
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 627,
    "end": 628,
    "range": [
      627,
      628
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 628,
    "end": 629,
    "range": [
      628,
      629
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 630,
    "end": 631,
    "range": [
      630,
      631
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 632,
    "end": 633,
    "range": [
      632,
      633
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 634,
    "end": 635,
    "range": [
      634,
      635
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 636,
    "end": 641,
    "range": [
      636,
      641
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 641,
    "end": 642,
    "range": [
      641,
      642
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 646,
    "end": 655,
    "range": [
      646,
      655
    ]
  },
  {
    "type": "Identifier",
    "value": "ExoticComponent",
    "start": 656,
    "end": 671,
    "range": [
      656,
      671
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 671,
    "end": 672,
    "range": [
      671,
      672
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 672,
    "end": 673,
    "range": [
      672,
      673
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 674,
    "end": 675,
    "range": [
      674,
      675
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 676,
    "end": 677,
    "range": [
      676,
      677
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 677,
    "end": 678,
    "range": [
      677,
      678
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 678,
    "end": 679,
    "range": [
      678,
      679
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 680,
    "end": 681,
    "range": [
      680,
      681
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 686,
    "end": 687,
    "range": [
      686,
      687
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 687,
    "end": 692,
    "range": [
      687,
      692
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 692,
    "end": 693,
    "range": [
      692,
      693
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 694,
    "end": 695,
    "range": [
      694,
      695
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 695,
    "end": 696,
    "range": [
      695,
      696
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 696,
    "end": 697,
    "range": [
      696,
      697
    ]
  },
  {
    "type": "Identifier",
    "value": "ReactNode",
    "start": 698,
    "end": 707,
    "range": [
      698,
      707
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 707,
    "end": 708,
    "range": [
      707,
      708
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 713,
    "end": 721,
    "range": [
      713,
      721
    ]
  },
  {
    "type": "Identifier",
    "value": "$$typeof",
    "start": 722,
    "end": 730,
    "range": [
      722,
      730
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 730,
    "end": 731,
    "range": [
      730,
      731
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 732,
    "end": 738,
    "range": [
      732,
      738
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 738,
    "end": 739,
    "range": [
      738,
      739
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 742,
    "end": 743,
    "range": [
      742,
      743
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 747,
    "end": 751,
    "range": [
      747,
      751
    ]
  },
  {
    "type": "Identifier",
    "value": "LazyExoticComponent",
    "start": 752,
    "end": 771,
    "range": [
      752,
      771
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 771,
    "end": 772,
    "range": [
      771,
      772
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 772,
    "end": 773,
    "range": [
      772,
      773
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 774,
    "end": 781,
    "range": [
      774,
      781
    ]
  },
  {
    "type": "Identifier",
    "value": "JSXElementConstructor",
    "start": 782,
    "end": 803,
    "range": [
      782,
      803
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 803,
    "end": 804,
    "range": [
      803,
      804
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 804,
    "end": 807,
    "range": [
      804,
      807
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 807,
    "end": 808,
    "range": [
      807,
      808
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 808,
    "end": 809,
    "range": [
      808,
      809
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 810,
    "end": 811,
    "range": [
      810,
      811
    ]
  },
  {
    "type": "Identifier",
    "value": "ExoticComponent",
    "start": 816,
    "end": 831,
    "range": [
      816,
      831
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 831,
    "end": 832,
    "range": [
      831,
      832
    ]
  },
  {
    "type": "Identifier",
    "value": "ComponentProps",
    "start": 832,
    "end": 846,
    "range": [
      832,
      846
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 846,
    "end": 847,
    "range": [
      846,
      847
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 847,
    "end": 848,
    "range": [
      847,
      848
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 848,
    "end": 849,
    "range": [
      848,
      849
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 849,
    "end": 850,
    "range": [
      849,
      850
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 851,
    "end": 852,
    "range": [
      851,
      852
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 853,
    "end": 854,
    "range": [
      853,
      854
    ]
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 861,
    "end": 869,
    "range": [
      861,
      869
    ]
  },
  {
    "type": "Identifier",
    "value": "_result",
    "start": 870,
    "end": 877,
    "range": [
      870,
      877
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 877,
    "end": 878,
    "range": [
      877,
      878
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 879,
    "end": 880,
    "range": [
      879,
      880
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 880,
    "end": 881,
    "range": [
      880,
      881
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 886,
    "end": 887,
    "range": [
      886,
      887
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 887,
    "end": 888,
    "range": [
      887,
      888
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 892,
    "end": 900,
    "range": [
      892,
      900
    ]
  },
  {
    "type": "Identifier",
    "value": "createElement",
    "start": 901,
    "end": 914,
    "range": [
      901,
      914
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 914,
    "end": 915,
    "range": [
      914,
      915
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 915,
    "end": 916,
    "range": [
      915,
      916
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 916,
    "end": 917,
    "range": [
      916,
      917
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 918,
    "end": 922,
    "range": [
      918,
      922
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 922,
    "end": 923,
    "range": [
      922,
      923
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 927,
    "end": 936,
    "range": [
      927,
      936
    ]
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 937,
    "end": 940,
    "range": [
      937,
      940
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 941,
    "end": 942,
    "range": [
      941,
      942
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 947,
    "end": 956,
    "range": [
      947,
      956
    ]
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 957,
    "end": 964,
    "range": [
      957,
      964
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 965,
    "end": 972,
    "range": [
      965,
      972
    ]
  },
  {
    "type": "Identifier",
    "value": "GlobalJSXElement",
    "start": 973,
    "end": 989,
    "range": [
      973,
      989
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 990,
    "end": 991,
    "range": [
      990,
      991
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 991,
    "end": 992,
    "range": [
      991,
      992
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 997,
    "end": 1006,
    "range": [
      997,
      1006
    ]
  },
  {
    "type": "Identifier",
    "value": "ElementChildrenAttribute",
    "start": 1007,
    "end": 1031,
    "range": [
      1007,
      1031
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1038,
    "end": 1045,
    "range": [
      1038,
      1045
    ]
  },
  {
    "type": "Identifier",
    "value": "GlobalJSXElementChildrenAttribute",
    "start": 1046,
    "end": 1079,
    "range": [
      1046,
      1079
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1080,
    "end": 1081,
    "range": [
      1080,
      1081
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1081,
    "end": 1082,
    "range": [
      1081,
      1082
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1087,
    "end": 1091,
    "range": [
      1087,
      1091
    ]
  },
  {
    "type": "Identifier",
    "value": "LibraryManagedAttributes",
    "start": 1092,
    "end": 1116,
    "range": [
      1092,
      1116
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1116,
    "end": 1117,
    "range": [
      1116,
      1117
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1117,
    "end": 1118,
    "range": [
      1117,
      1118
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1118,
    "end": 1119,
    "range": [
      1118,
      1119
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1120,
    "end": 1121,
    "range": [
      1120,
      1121
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1121,
    "end": 1122,
    "range": [
      1121,
      1122
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1123,
    "end": 1124,
    "range": [
      1123,
      1124
    ]
  },
  {
    "type": "Identifier",
    "value": "GlobalJSXLibraryManagedAttributes",
    "start": 1125,
    "end": 1158,
    "range": [
      1125,
      1158
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1158,
    "end": 1159,
    "range": [
      1158,
      1159
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1166,
    "end": 1167,
    "range": [
      1166,
      1167
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1167,
    "end": 1168,
    "range": [
      1167,
      1168
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1175,
    "end": 1176,
    "range": [
      1175,
      1176
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1181,
    "end": 1182,
    "range": [
      1181,
      1182
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1182,
    "end": 1183,
    "range": [
      1182,
      1183
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1188,
    "end": 1197,
    "range": [
      1188,
      1197
    ]
  },
  {
    "type": "Identifier",
    "value": "IntrinsicElements",
    "start": 1198,
    "end": 1215,
    "range": [
      1198,
      1215
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1216,
    "end": 1223,
    "range": [
      1216,
      1223
    ]
  },
  {
    "type": "Identifier",
    "value": "GlobalJSXIntrinsicElements",
    "start": 1224,
    "end": 1250,
    "range": [
      1224,
      1250
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1251,
    "end": 1252,
    "range": [
      1251,
      1252
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1252,
    "end": 1253,
    "range": [
      1252,
      1253
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1256,
    "end": 1257,
    "range": [
      1256,
      1257
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1258,
    "end": 1259,
    "range": [
      1258,
      1259
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1261,
    "end": 1265,
    "range": [
      1261,
      1265
    ]
  },
  {
    "type": "Identifier",
    "value": "ReactManagedAttributes",
    "start": 1266,
    "end": 1288,
    "range": [
      1266,
      1288
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1288,
    "end": 1289,
    "range": [
      1288,
      1289
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1289,
    "end": 1290,
    "range": [
      1289,
      1290
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1290,
    "end": 1291,
    "range": [
      1290,
      1291
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1292,
    "end": 1293,
    "range": [
      1292,
      1293
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1293,
    "end": 1294,
    "range": [
      1293,
      1294
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1295,
    "end": 1296,
    "range": [
      1295,
      1296
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1297,
    "end": 1298,
    "range": [
      1297,
      1298
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1299,
    "end": 1306,
    "range": [
      1299,
      1306
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1307,
    "end": 1308,
    "range": [
      1307,
      1308
    ]
  },
  {
    "type": "Identifier",
    "value": "defaultProps",
    "start": 1309,
    "end": 1321,
    "range": [
      1309,
      1321
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1321,
    "end": 1322,
    "range": [
      1321,
      1322
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1323,
    "end": 1328,
    "range": [
      1323,
      1328
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1329,
    "end": 1330,
    "range": [
      1329,
      1330
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1331,
    "end": 1332,
    "range": [
      1331,
      1332
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1335,
    "end": 1336,
    "range": [
      1335,
      1336
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1337,
    "end": 1338,
    "range": [
      1337,
      1338
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1339,
    "end": 1340,
    "range": [
      1339,
      1340
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1341,
    "end": 1342,
    "range": [
      1341,
      1342
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1345,
    "end": 1346,
    "range": [
      1345,
      1346
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1347,
    "end": 1348,
    "range": [
      1347,
      1348
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1348,
    "end": 1349,
    "range": [
      1348,
      1349
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1351,
    "end": 1358,
    "range": [
      1351,
      1358
    ]
  },
  {
    "type": "Identifier",
    "value": "global",
    "start": 1359,
    "end": 1365,
    "range": [
      1359,
      1365
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1366,
    "end": 1367,
    "range": [
      1366,
      1367
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1370,
    "end": 1379,
    "range": [
      1370,
      1379
    ]
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 1380,
    "end": 1383,
    "range": [
      1380,
      1383
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1384,
    "end": 1385,
    "range": [
      1384,
      1385
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1390,
    "end": 1399,
    "range": [
      1390,
      1399
    ]
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 1400,
    "end": 1407,
    "range": [
      1400,
      1407
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1408,
    "end": 1415,
    "range": [
      1408,
      1415
    ]
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 1416,
    "end": 1421,
    "range": [
      1416,
      1421
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1421,
    "end": 1422,
    "range": [
      1421,
      1422
    ]
  },
  {
    "type": "Identifier",
    "value": "ReactElement",
    "start": 1422,
    "end": 1434,
    "range": [
      1422,
      1434
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1434,
    "end": 1435,
    "range": [
      1434,
      1435
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1435,
    "end": 1438,
    "range": [
      1435,
      1438
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1438,
    "end": 1439,
    "range": [
      1438,
      1439
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1440,
    "end": 1443,
    "range": [
      1440,
      1443
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1443,
    "end": 1444,
    "range": [
      1443,
      1444
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1445,
    "end": 1446,
    "range": [
      1445,
      1446
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1446,
    "end": 1447,
    "range": [
      1446,
      1447
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1452,
    "end": 1461,
    "range": [
      1452,
      1461
    ]
  },
  {
    "type": "Identifier",
    "value": "ElementChildrenAttribute",
    "start": 1462,
    "end": 1486,
    "range": [
      1462,
      1486
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1487,
    "end": 1488,
    "range": [
      1487,
      1488
    ]
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 1495,
    "end": 1503,
    "range": [
      1495,
      1503
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1503,
    "end": 1504,
    "range": [
      1503,
      1504
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1505,
    "end": 1506,
    "range": [
      1505,
      1506
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1506,
    "end": 1507,
    "range": [
      1506,
      1507
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1507,
    "end": 1508,
    "range": [
      1507,
      1508
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1513,
    "end": 1514,
    "range": [
      1513,
      1514
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1519,
    "end": 1523,
    "range": [
      1519,
      1523
    ]
  },
  {
    "type": "Identifier",
    "value": "LibraryManagedAttributes",
    "start": 1524,
    "end": 1548,
    "range": [
      1524,
      1548
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1548,
    "end": 1549,
    "range": [
      1548,
      1549
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1549,
    "end": 1550,
    "range": [
      1549,
      1550
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1550,
    "end": 1551,
    "range": [
      1550,
      1551
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1552,
    "end": 1553,
    "range": [
      1552,
      1553
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1553,
    "end": 1554,
    "range": [
      1553,
      1554
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1555,
    "end": 1556,
    "range": [
      1555,
      1556
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1557,
    "end": 1558,
    "range": [
      1557,
      1558
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1559,
    "end": 1566,
    "range": [
      1559,
      1566
    ]
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 1567,
    "end": 1572,
    "range": [
      1567,
      1572
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1572,
    "end": 1573,
    "range": [
      1572,
      1573
    ]
  },
  {
    "type": "Identifier",
    "value": "LazyExoticComponent",
    "start": 1573,
    "end": 1592,
    "range": [
      1573,
      1592
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1592,
    "end": 1593,
    "range": [
      1592,
      1593
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1600,
    "end": 1605,
    "range": [
      1600,
      1605
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1606,
    "end": 1607,
    "range": [
      1606,
      1607
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1612,
    "end": 1613,
    "range": [
      1612,
      1613
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1620,
    "end": 1621,
    "range": [
      1620,
      1621
    ]
  },
  {
    "type": "Identifier",
    "value": "ReactManagedAttributes",
    "start": 1622,
    "end": 1644,
    "range": [
      1622,
      1644
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1644,
    "end": 1645,
    "range": [
      1644,
      1645
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1645,
    "end": 1646,
    "range": [
      1645,
      1646
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1646,
    "end": 1647,
    "range": [
      1646,
      1647
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1648,
    "end": 1649,
    "range": [
      1648,
      1649
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1649,
    "end": 1650,
    "range": [
      1649,
      1650
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1657,
    "end": 1658,
    "range": [
      1657,
      1658
    ]
  },
  {
    "type": "Identifier",
    "value": "ReactManagedAttributes",
    "start": 1659,
    "end": 1681,
    "range": [
      1659,
      1681
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1681,
    "end": 1682,
    "range": [
      1681,
      1682
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1682,
    "end": 1683,
    "range": [
      1682,
      1683
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1683,
    "end": 1684,
    "range": [
      1683,
      1684
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1685,
    "end": 1686,
    "range": [
      1685,
      1686
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1686,
    "end": 1687,
    "range": [
      1686,
      1687
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1687,
    "end": 1688,
    "range": [
      1687,
      1688
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1693,
    "end": 1702,
    "range": [
      1693,
      1702
    ]
  },
  {
    "type": "Identifier",
    "value": "IntrinsicElements",
    "start": 1703,
    "end": 1720,
    "range": [
      1703,
      1720
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1721,
    "end": 1722,
    "range": [
      1721,
      1722
    ]
  },
  {
    "type": "Identifier",
    "value": "div",
    "start": 1729,
    "end": 1732,
    "range": [
      1729,
      1732
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1732,
    "end": 1733,
    "range": [
      1732,
      1733
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1734,
    "end": 1735,
    "range": [
      1734,
      1735
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1735,
    "end": 1736,
    "range": [
      1735,
      1736
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1736,
    "end": 1737,
    "range": [
      1736,
      1737
    ]
  },
  {
    "type": "Identifier",
    "value": "span",
    "start": 1744,
    "end": 1748,
    "range": [
      1744,
      1748
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1748,
    "end": 1749,
    "range": [
      1748,
      1749
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1750,
    "end": 1751,
    "range": [
      1750,
      1751
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1751,
    "end": 1752,
    "range": [
      1751,
      1752
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1752,
    "end": 1753,
    "range": [
      1752,
      1753
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1758,
    "end": 1759,
    "range": [
      1758,
      1759
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1762,
    "end": 1763,
    "range": [
      1762,
      1763
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1764,
    "end": 1765,
    "range": [
      1764,
      1765
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1767,
    "end": 1776,
    "range": [
      1767,
      1776
    ]
  },
  {
    "type": "Identifier",
    "value": "GlobalJSXElement",
    "start": 1777,
    "end": 1793,
    "range": [
      1777,
      1793
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1794,
    "end": 1801,
    "range": [
      1794,
      1801
    ]
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 1802,
    "end": 1805,
    "range": [
      1802,
      1805
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1805,
    "end": 1806,
    "range": [
      1805,
      1806
    ]
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 1806,
    "end": 1813,
    "range": [
      1806,
      1813
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1814,
    "end": 1815,
    "range": [
      1814,
      1815
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1815,
    "end": 1816,
    "range": [
      1815,
      1816
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1817,
    "end": 1826,
    "range": [
      1817,
      1826
    ]
  },
  {
    "type": "Identifier",
    "value": "GlobalJSXElementChildrenAttribute",
    "start": 1827,
    "end": 1860,
    "range": [
      1827,
      1860
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1863,
    "end": 1870,
    "range": [
      1863,
      1870
    ]
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 1871,
    "end": 1874,
    "range": [
      1871,
      1874
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1874,
    "end": 1875,
    "range": [
      1874,
      1875
    ]
  },
  {
    "type": "Identifier",
    "value": "ElementChildrenAttribute",
    "start": 1875,
    "end": 1899,
    "range": [
      1875,
      1899
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1900,
    "end": 1901,
    "range": [
      1900,
      1901
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1901,
    "end": 1902,
    "range": [
      1901,
      1902
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1903,
    "end": 1907,
    "range": [
      1903,
      1907
    ]
  },
  {
    "type": "Identifier",
    "value": "GlobalJSXLibraryManagedAttributes",
    "start": 1908,
    "end": 1941,
    "range": [
      1908,
      1941
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1941,
    "end": 1942,
    "range": [
      1941,
      1942
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1942,
    "end": 1943,
    "range": [
      1942,
      1943
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1943,
    "end": 1944,
    "range": [
      1943,
      1944
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1945,
    "end": 1946,
    "range": [
      1945,
      1946
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1946,
    "end": 1947,
    "range": [
      1946,
      1947
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1948,
    "end": 1949,
    "range": [
      1948,
      1949
    ]
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 1950,
    "end": 1953,
    "range": [
      1950,
      1953
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1953,
    "end": 1954,
    "range": [
      1953,
      1954
    ]
  },
  {
    "type": "Identifier",
    "value": "LibraryManagedAttributes",
    "start": 1954,
    "end": 1978,
    "range": [
      1954,
      1978
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1978,
    "end": 1979,
    "range": [
      1978,
      1979
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1982,
    "end": 1983,
    "range": [
      1982,
      1983
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1983,
    "end": 1984,
    "range": [
      1983,
      1984
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1987,
    "end": 1988,
    "range": [
      1987,
      1988
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1989,
    "end": 1990,
    "range": [
      1989,
      1990
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1990,
    "end": 1991,
    "range": [
      1990,
      1991
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1992,
    "end": 2001,
    "range": [
      1992,
      2001
    ]
  },
  {
    "type": "Identifier",
    "value": "GlobalJSXIntrinsicElements",
    "start": 2002,
    "end": 2028,
    "range": [
      2002,
      2028
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2029,
    "end": 2036,
    "range": [
      2029,
      2036
    ]
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 2037,
    "end": 2040,
    "range": [
      2037,
      2040
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2040,
    "end": 2041,
    "range": [
      2040,
      2041
    ]
  },
  {
    "type": "Identifier",
    "value": "IntrinsicElements",
    "start": 2041,
    "end": 2058,
    "range": [
      2041,
      2058
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2059,
    "end": 2060,
    "range": [
      2059,
      2060
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2060,
    "end": 2061,
    "range": [
      2060,
      2061
    ]
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 12
          },
          "start": 7,
          "end": 12
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "'react'",
        "start": 18,
        "end": 25
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 25
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "upperFirst",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 54
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 55,
              "end": 56
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 65,
              "end": 71
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 55,
            "end": 71
          }
        ],
        "start": 54,
        "end": 72
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
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
                "start": 78,
                "end": 79
              },
              "typeArguments": null,
              "start": 78,
              "end": 79
            },
            "start": 76,
            "end": 79
          },
          "start": 73,
          "end": 79
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Capitalize",
            "optional": false,
            "typeAnnotation": null,
            "start": 82,
            "end": 92
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
                  "start": 93,
                  "end": 94
                },
                "typeArguments": null,
                "start": 93,
                "end": 94
              }
            ],
            "start": 92,
            "end": 95
          },
          "start": 82,
          "end": 95
        },
        "start": 80,
        "end": 95
      },
      "body": null,
      "expression": false,
      "start": 27,
      "end": 95
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "displayEnum",
            "optional": false,
            "typeAnnotation": null,
            "start": 103,
            "end": 114
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
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 125,
                    "end": 131
                  },
                  "start": 123,
                  "end": 131
                },
                "start": 118,
                "end": 131
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "upperFirst",
                "optional": false,
                "typeAnnotation": null,
                "start": 136,
                "end": 146
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
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 147,
                      "end": 152
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toLowerCase",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 153,
                      "end": 164
                    },
                    "optional": false,
                    "computed": false,
                    "start": 147,
                    "end": 164
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 147,
                  "end": 166
                }
              ],
              "optional": false,
              "start": 136,
              "end": 167
            },
            "id": null,
            "generator": false,
            "start": 117,
            "end": 167
          },
          "definite": false,
          "start": 103,
          "end": 167
        }
      ],
      "declare": false,
      "start": 97,
      "end": 167
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Comp",
        "optional": false,
        "typeAnnotation": null,
        "start": 178,
        "end": 182
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 197,
                  "end": 200
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 196,
                "end": 201
              },
              "children": [
                {
                  "type": "JSXText",
                  "value": "\n    ",
                  "raw": "\n    ",
                  "start": 201,
                  "end": 206
                },
                {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "span",
                      "start": 207,
                      "end": 211
                    },
                    "typeArguments": null,
                    "attributes": [],
                    "selfClosing": false,
                    "start": 206,
                    "end": 212
                  },
                  "children": [
                    {
                      "type": "JSXText",
                      "value": "Scope:",
                      "raw": "Scope:",
                      "start": 212,
                      "end": 218
                    }
                  ],
                  "closingElement": {
                    "type": "JSXClosingElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "span",
                      "start": 220,
                      "end": 224
                    },
                    "start": 218,
                    "end": 225
                  },
                  "start": 206,
                  "end": 225
                },
                {
                  "type": "JSXText",
                  "value": " ",
                  "raw": " ",
                  "start": 225,
                  "end": 226
                },
                {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "displayEnum",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 227,
                      "end": 238
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "VALUE",
                        "raw": "\"VALUE\"",
                        "start": 239,
                        "end": 246
                      }
                    ],
                    "optional": false,
                    "start": 227,
                    "end": 247
                  },
                  "start": 226,
                  "end": 248
                },
                {
                  "type": "JSXText",
                  "value": "\n  ",
                  "raw": "\n  ",
                  "start": 248,
                  "end": 251
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 253,
                  "end": 256
                },
                "start": 251,
                "end": 257
              },
              "start": 196,
              "end": 257
            },
            "start": 189,
            "end": 257
          }
        ],
        "start": 185,
        "end": 259
      },
      "expression": false,
      "start": 169,
      "end": 259
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 259
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 7,
    "end": 12,
    "range": [
      7,
      12
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 13,
    "end": 17,
    "range": [
      13,
      17
    ]
  },
  {
    "type": "String",
    "value": "'react'",
    "start": 18,
    "end": 25,
    "range": [
      18,
      25
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 27,
    "end": 34,
    "range": [
      27,
      34
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 35,
    "end": 43,
    "range": [
      35,
      43
    ]
  },
  {
    "type": "Identifier",
    "value": "upperFirst",
    "start": 44,
    "end": 54,
    "range": [
      44,
      54
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 54,
    "end": 55,
    "range": [
      54,
      55
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 57,
    "end": 64,
    "range": [
      57,
      64
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 65,
    "end": 71,
    "range": [
      65,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 73,
    "end": 76,
    "range": [
      73,
      76
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 79,
    "end": 80,
    "range": [
      79,
      80
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Identifier",
    "value": "Capitalize",
    "start": 82,
    "end": 92,
    "range": [
      82,
      92
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 92,
    "end": 93,
    "range": [
      92,
      93
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 97,
    "end": 102,
    "range": [
      97,
      102
    ]
  },
  {
    "type": "Identifier",
    "value": "displayEnum",
    "start": 103,
    "end": 114,
    "range": [
      103,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 118,
    "end": 123,
    "range": [
      118,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 125,
    "end": 131,
    "range": [
      125,
      131
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 133,
    "end": 135,
    "range": [
      133,
      135
    ]
  },
  {
    "type": "Identifier",
    "value": "upperFirst",
    "start": 136,
    "end": 146,
    "range": [
      136,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 147,
    "end": 152,
    "range": [
      147,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Identifier",
    "value": "toLowerCase",
    "start": 153,
    "end": 164,
    "range": [
      153,
      164
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 166,
    "end": 167,
    "range": [
      166,
      167
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 169,
    "end": 177,
    "range": [
      169,
      177
    ]
  },
  {
    "type": "Identifier",
    "value": "Comp",
    "start": 178,
    "end": 182,
    "range": [
      178,
      182
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 182,
    "end": 183,
    "range": [
      182,
      183
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 183,
    "end": 184,
    "range": [
      183,
      184
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 185,
    "end": 186,
    "range": [
      185,
      186
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 189,
    "end": 195,
    "range": [
      189,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 197,
    "end": 200,
    "range": [
      197,
      200
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 200,
    "end": 201,
    "range": [
      200,
      201
    ]
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 201,
    "end": 206,
    "range": [
      201,
      206
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "span",
    "start": 207,
    "end": 211,
    "range": [
      207,
      211
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 211,
    "end": 212,
    "range": [
      211,
      212
    ]
  },
  {
    "type": "JSXText",
    "value": "Scope:",
    "start": 212,
    "end": 218,
    "range": [
      212,
      218
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 218,
    "end": 219,
    "range": [
      218,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "span",
    "start": 220,
    "end": 224,
    "range": [
      220,
      224
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "JSXText",
    "value": " ",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 226,
    "end": 227,
    "range": [
      226,
      227
    ]
  },
  {
    "type": "Identifier",
    "value": "displayEnum",
    "start": 227,
    "end": 238,
    "range": [
      227,
      238
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 238,
    "end": 239,
    "range": [
      238,
      239
    ]
  },
  {
    "type": "String",
    "value": "\"VALUE\"",
    "start": 239,
    "end": 246,
    "range": [
      239,
      246
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 246,
    "end": 247,
    "range": [
      246,
      247
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 247,
    "end": 248,
    "range": [
      247,
      248
    ]
  },
  {
    "type": "JSXText",
    "value": "\n  ",
    "start": 248,
    "end": 251,
    "range": [
      248,
      251
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 251,
    "end": 252,
    "range": [
      251,
      252
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 253,
    "end": 256,
    "range": [
      253,
      256
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 258,
    "end": 259,
    "range": [
      258,
      259
    ]
  }
]
```
