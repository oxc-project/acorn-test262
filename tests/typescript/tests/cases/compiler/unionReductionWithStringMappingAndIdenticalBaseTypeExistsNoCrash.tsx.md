__ESTREE_TEST__:PASS:
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
__ESTREE_TEST__:PASS:
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
