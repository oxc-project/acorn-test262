__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 58,
  "end": 2062,
  "body": [
    {
      "type": "TSExportAssignment",
      "start": 58,
      "end": 73,
      "expression": {
        "type": "Identifier",
        "start": 67,
        "end": 72,
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSNamespaceExportDeclaration",
      "start": 74,
      "end": 100,
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 99,
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 102,
      "end": 1259,
      "id": {
        "type": "Identifier",
        "start": 120,
        "end": 125,
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 126,
        "end": 1259,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 130,
            "end": 259,
            "id": {
              "type": "Identifier",
              "start": 135,
              "end": 144,
              "decorators": [],
              "name": "ReactNode",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 151,
              "end": 258,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 153,
                  "end": 165,
                  "typeName": {
                    "type": "Identifier",
                    "start": 153,
                    "end": 165,
                    "decorators": [],
                    "name": "ReactElement",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
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
                  "start": 198,
                  "end": 217,
                  "typeName": {
                    "type": "Identifier",
                    "start": 198,
                    "end": 206,
                    "decorators": [],
                    "name": "Iterable",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 206,
                    "end": 217,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 207,
                        "end": 216,
                        "typeName": {
                          "type": "Identifier",
                          "start": 207,
                          "end": 216,
                          "decorators": [],
                          "name": "ReactNode",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
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
              ]
            },
            "declare": false
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 262,
            "end": 318,
            "id": {
              "type": "Identifier",
              "start": 267,
              "end": 288,
              "decorators": [],
              "name": "JSXElementConstructor",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 288,
              "end": 291,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 289,
                  "end": 290,
                  "name": {
                    "type": "Identifier",
                    "start": 289,
                    "end": 290,
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 294,
              "end": 317,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 295,
                  "end": 303,
                  "decorators": [],
                  "name": "props",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 300,
                    "end": 303,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 302,
                      "end": 303,
                      "typeName": {
                        "type": "Identifier",
                        "start": 302,
                        "end": 303,
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 305,
                "end": 317,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 308,
                  "end": 317,
                  "typeName": {
                    "type": "Identifier",
                    "start": 308,
                    "end": 317,
                    "decorators": [],
                    "name": "ReactNode",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 321,
            "end": 521,
            "id": {
              "type": "Identifier",
              "start": 331,
              "end": 343,
              "decorators": [],
              "name": "ReactElement",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 343,
              "end": 464,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 349,
                  "end": 356,
                  "name": {
                    "type": "Identifier",
                    "start": 349,
                    "end": 350,
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSAnyKeyword",
                    "start": 353,
                    "end": 356
                  },
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 362,
                  "end": 459,
                  "name": {
                    "type": "Identifier",
                    "start": 362,
                    "end": 363,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSUnionType",
                    "start": 372,
                    "end": 407,
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 372,
                        "end": 378
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 381,
                        "end": 407,
                        "typeName": {
                          "type": "Identifier",
                          "start": 381,
                          "end": 402,
                          "decorators": [],
                          "name": "JSXElementConstructor",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 402,
                          "end": 407,
                          "params": [
                            {
                              "type": "TSAnyKeyword",
                              "start": 403,
                              "end": 406
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "default": {
                    "type": "TSUnionType",
                    "start": 416,
                    "end": 459,
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 418,
                        "end": 424
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 433,
                        "end": 459,
                        "typeName": {
                          "type": "Identifier",
                          "start": 433,
                          "end": 454,
                          "decorators": [],
                          "name": "JSXElementConstructor",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 454,
                          "end": 459,
                          "params": [
                            {
                              "type": "TSAnyKeyword",
                              "start": 455,
                              "end": 458
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 465,
              "end": 521,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 471,
                  "end": 479,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 471,
                    "end": 475,
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 475,
                    "end": 478,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 477,
                      "end": 478,
                      "typeName": {
                        "type": "Identifier",
                        "start": 477,
                        "end": 478,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 484,
                  "end": 493,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 484,
                    "end": 489,
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 489,
                    "end": 492,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 491,
                      "end": 492,
                      "typeName": {
                        "type": "Identifier",
                        "start": 491,
                        "end": 492,
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 498,
                  "end": 517,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 498,
                    "end": 501,
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 501,
                    "end": 516,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 503,
                      "end": 516,
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
                      ]
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 525,
            "end": 642,
            "id": {
              "type": "Identifier",
              "start": 530,
              "end": 544,
              "decorators": [],
              "name": "ComponentProps",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 544,
              "end": 582,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 545,
                  "end": 581,
                  "name": {
                    "type": "Identifier",
                    "start": 545,
                    "end": 546,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 555,
                    "end": 581,
                    "typeName": {
                      "type": "Identifier",
                      "start": 555,
                      "end": 576,
                      "decorators": [],
                      "name": "JSXElementConstructor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 576,
                      "end": 581,
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 577,
                          "end": 580
                        }
                      ]
                    }
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSConditionalType",
              "start": 589,
              "end": 641,
              "checkType": {
                "type": "TSTypeReference",
                "start": 589,
                "end": 590,
                "typeName": {
                  "type": "Identifier",
                  "start": 589,
                  "end": 590,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "extendsType": {
                "type": "TSTypeReference",
                "start": 599,
                "end": 629,
                "typeName": {
                  "type": "Identifier",
                  "start": 599,
                  "end": 620,
                  "decorators": [],
                  "name": "JSXElementConstructor",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 620,
                  "end": 629,
                  "params": [
                    {
                      "type": "TSInferType",
                      "start": 621,
                      "end": 628,
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "start": 627,
                        "end": 628,
                        "name": {
                          "type": "Identifier",
                          "start": 627,
                          "end": 628,
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      }
                    }
                  ]
                }
              },
              "trueType": {
                "type": "TSTypeReference",
                "start": 632,
                "end": 633,
                "typeName": {
                  "type": "Identifier",
                  "start": 632,
                  "end": 633,
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 636,
                "end": 641
              }
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 646,
            "end": 743,
            "id": {
              "type": "Identifier",
              "start": 656,
              "end": 671,
              "decorators": [],
              "name": "ExoticComponent",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 671,
              "end": 679,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 672,
                  "end": 678,
                  "name": {
                    "type": "Identifier",
                    "start": 672,
                    "end": 673,
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSTypeLiteral",
                    "start": 676,
                    "end": 678,
                    "members": []
                  },
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 680,
              "end": 743,
              "body": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 686,
                  "end": 708,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 687,
                      "end": 695,
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 692,
                        "end": 695,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 694,
                          "end": 695,
                          "typeName": {
                            "type": "Identifier",
                            "start": 694,
                            "end": 695,
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 696,
                    "end": 707,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 698,
                      "end": 707,
                      "typeName": {
                        "type": "Identifier",
                        "start": 698,
                        "end": 707,
                        "decorators": [],
                        "name": "ReactNode",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 713,
                  "end": 739,
                  "computed": false,
                  "optional": false,
                  "readonly": true,
                  "key": {
                    "type": "Identifier",
                    "start": 722,
                    "end": 730,
                    "decorators": [],
                    "name": "$$typeof",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 730,
                    "end": 738,
                    "typeAnnotation": {
                      "type": "TSSymbolKeyword",
                      "start": 732,
                      "end": 738
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 747,
            "end": 888,
            "id": {
              "type": "Identifier",
              "start": 752,
              "end": 771,
              "decorators": [],
              "name": "LazyExoticComponent",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 771,
              "end": 809,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 772,
                  "end": 808,
                  "name": {
                    "type": "Identifier",
                    "start": 772,
                    "end": 773,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 782,
                    "end": 808,
                    "typeName": {
                      "type": "Identifier",
                      "start": 782,
                      "end": 803,
                      "decorators": [],
                      "name": "JSXElementConstructor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 803,
                      "end": 808,
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 804,
                          "end": 807
                        }
                      ]
                    }
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 816,
              "end": 887,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 816,
                  "end": 850,
                  "typeName": {
                    "type": "Identifier",
                    "start": 816,
                    "end": 831,
                    "decorators": [],
                    "name": "ExoticComponent",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 831,
                    "end": 850,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 832,
                        "end": 849,
                        "typeName": {
                          "type": "Identifier",
                          "start": 832,
                          "end": 846,
                          "decorators": [],
                          "name": "ComponentProps",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 846,
                          "end": 849,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 847,
                              "end": 848,
                              "typeName": {
                                "type": "Identifier",
                                "start": 847,
                                "end": 848,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    ]
                  }
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 853,
                  "end": 887,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 861,
                      "end": 881,
                      "computed": false,
                      "optional": false,
                      "readonly": true,
                      "key": {
                        "type": "Identifier",
                        "start": 870,
                        "end": 877,
                        "decorators": [],
                        "name": "_result",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 877,
                        "end": 880,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 879,
                          "end": 880,
                          "typeName": {
                            "type": "Identifier",
                            "start": 879,
                            "end": 880,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSDeclareFunction",
            "start": 892,
            "end": 923,
            "id": {
              "type": "Identifier",
              "start": 901,
              "end": 914,
              "decorators": [],
              "name": "createElement",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 916,
              "end": 922,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 918,
                "end": 922
              }
            },
            "body": null,
            "expression": false
          },
          {
            "type": "TSModuleDeclaration",
            "start": 927,
            "end": 1257,
            "id": {
              "type": "Identifier",
              "start": 937,
              "end": 940,
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 941,
              "end": 1257,
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 947,
                  "end": 992,
                  "id": {
                    "type": "Identifier",
                    "start": 957,
                    "end": 964,
                    "decorators": [],
                    "name": "Element",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null,
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "start": 973,
                      "end": 989,
                      "expression": {
                        "type": "Identifier",
                        "start": 973,
                        "end": 989,
                        "decorators": [],
                        "name": "GlobalJSXElement",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ],
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 990,
                    "end": 992,
                    "body": []
                  },
                  "declare": false
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 997,
                  "end": 1082,
                  "id": {
                    "type": "Identifier",
                    "start": 1007,
                    "end": 1031,
                    "decorators": [],
                    "name": "ElementChildrenAttribute",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null,
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "start": 1046,
                      "end": 1079,
                      "expression": {
                        "type": "Identifier",
                        "start": 1046,
                        "end": 1079,
                        "decorators": [],
                        "name": "GlobalJSXElementChildrenAttribute",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ],
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 1080,
                    "end": 1082,
                    "body": []
                  },
                  "declare": false
                },
                {
                  "type": "TSTypeAliasDeclaration",
                  "start": 1087,
                  "end": 1183,
                  "id": {
                    "type": "Identifier",
                    "start": 1092,
                    "end": 1116,
                    "decorators": [],
                    "name": "LibraryManagedAttributes",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 1116,
                    "end": 1122,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 1117,
                        "end": 1118,
                        "name": {
                          "type": "Identifier",
                          "start": 1117,
                          "end": 1118,
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      },
                      {
                        "type": "TSTypeParameter",
                        "start": 1120,
                        "end": 1121,
                        "name": {
                          "type": "Identifier",
                          "start": 1120,
                          "end": 1121,
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      }
                    ]
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1125,
                    "end": 1182,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1125,
                      "end": 1158,
                      "decorators": [],
                      "name": "GlobalJSXLibraryManagedAttributes",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1158,
                      "end": 1182,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 1166,
                          "end": 1167,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1166,
                            "end": 1167,
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1175,
                          "end": 1176,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1175,
                            "end": 1176,
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  },
                  "declare": false
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 1188,
                  "end": 1253,
                  "id": {
                    "type": "Identifier",
                    "start": 1198,
                    "end": 1215,
                    "decorators": [],
                    "name": "IntrinsicElements",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null,
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "start": 1224,
                      "end": 1250,
                      "expression": {
                        "type": "Identifier",
                        "start": 1224,
                        "end": 1250,
                        "decorators": [],
                        "name": "GlobalJSXIntrinsicElements",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ],
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 1251,
                    "end": 1253,
                    "body": []
                  },
                  "declare": false
                }
              ]
            },
            "kind": "namespace",
            "declare": false,
            "global": false
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1261,
      "end": 1349,
      "id": {
        "type": "Identifier",
        "start": 1266,
        "end": 1288,
        "decorators": [],
        "name": "ReactManagedAttributes",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1288,
        "end": 1294,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1289,
            "end": 1290,
            "name": {
              "type": "Identifier",
              "start": 1289,
              "end": 1290,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1292,
            "end": 1293,
            "name": {
              "type": "Identifier",
              "start": 1292,
              "end": 1293,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 1297,
        "end": 1348,
        "checkType": {
          "type": "TSTypeReference",
          "start": 1297,
          "end": 1298,
          "typeName": {
            "type": "Identifier",
            "start": 1297,
            "end": 1298,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeLiteral",
          "start": 1307,
          "end": 1332,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 1309,
              "end": 1330,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 1309,
                "end": 1321,
                "decorators": [],
                "name": "defaultProps",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1321,
                "end": 1330,
                "typeAnnotation": {
                  "type": "TSInferType",
                  "start": 1323,
                  "end": 1330,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 1329,
                    "end": 1330,
                    "name": {
                      "type": "Identifier",
                      "start": 1329,
                      "end": 1330,
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "trueType": {
          "type": "TSIntersectionType",
          "start": 1337,
          "end": 1342,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 1337,
              "end": 1338,
              "typeName": {
                "type": "Identifier",
                "start": 1337,
                "end": 1338,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 1341,
              "end": 1342,
              "typeName": {
                "type": "Identifier",
                "start": 1341,
                "end": 1342,
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 1347,
          "end": 1348,
          "typeName": {
            "type": "Identifier",
            "start": 1347,
            "end": 1348,
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1351,
      "end": 1765,
      "id": {
        "type": "Identifier",
        "start": 1359,
        "end": 1365,
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1366,
        "end": 1765,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 1370,
            "end": 1763,
            "id": {
              "type": "Identifier",
              "start": 1380,
              "end": 1383,
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 1384,
              "end": 1763,
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 1390,
                  "end": 1447,
                  "id": {
                    "type": "Identifier",
                    "start": 1400,
                    "end": 1407,
                    "decorators": [],
                    "name": "Element",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null,
                  "extends": [
                    {
                      "type": "TSInterfaceHeritage",
                      "start": 1416,
                      "end": 1444,
                      "expression": {
                        "type": "MemberExpression",
                        "start": 1416,
                        "end": 1434,
                        "object": {
                          "type": "Identifier",
                          "start": 1416,
                          "end": 1421,
                          "decorators": [],
                          "name": "React",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1422,
                          "end": 1434,
                          "decorators": [],
                          "name": "ReactElement",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1434,
                        "end": 1444,
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
                        ]
                      }
                    }
                  ],
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 1445,
                    "end": 1447,
                    "body": []
                  },
                  "declare": false
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 1452,
                  "end": 1514,
                  "id": {
                    "type": "Identifier",
                    "start": 1462,
                    "end": 1486,
                    "decorators": [],
                    "name": "ElementChildrenAttribute",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 1487,
                    "end": 1514,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 1495,
                        "end": 1508,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1495,
                          "end": 1503,
                          "decorators": [],
                          "name": "children",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1503,
                          "end": 1507,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 1505,
                            "end": 1507,
                            "members": []
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  "declare": false
                },
                {
                  "type": "TSTypeAliasDeclaration",
                  "start": 1519,
                  "end": 1688,
                  "id": {
                    "type": "Identifier",
                    "start": 1524,
                    "end": 1548,
                    "decorators": [],
                    "name": "LibraryManagedAttributes",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 1548,
                    "end": 1554,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 1549,
                        "end": 1550,
                        "name": {
                          "type": "Identifier",
                          "start": 1549,
                          "end": 1550,
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      },
                      {
                        "type": "TSTypeParameter",
                        "start": 1552,
                        "end": 1553,
                        "name": {
                          "type": "Identifier",
                          "start": 1552,
                          "end": 1553,
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false
                      }
                    ]
                  },
                  "typeAnnotation": {
                    "type": "TSConditionalType",
                    "start": 1557,
                    "end": 1687,
                    "checkType": {
                      "type": "TSTypeReference",
                      "start": 1557,
                      "end": 1558,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1557,
                        "end": 1558,
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "extendsType": {
                      "type": "TSTypeReference",
                      "start": 1567,
                      "end": 1613,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 1567,
                        "end": 1592,
                        "left": {
                          "type": "Identifier",
                          "start": 1567,
                          "end": 1572,
                          "decorators": [],
                          "name": "React",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 1573,
                          "end": 1592,
                          "decorators": [],
                          "name": "LazyExoticComponent",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1592,
                        "end": 1613,
                        "params": [
                          {
                            "type": "TSInferType",
                            "start": 1600,
                            "end": 1607,
                            "typeParameter": {
                              "type": "TSTypeParameter",
                              "start": 1606,
                              "end": 1607,
                              "name": {
                                "type": "Identifier",
                                "start": 1606,
                                "end": 1607,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false
                            }
                          }
                        ]
                      }
                    },
                    "trueType": {
                      "type": "TSTypeReference",
                      "start": 1622,
                      "end": 1650,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1622,
                        "end": 1644,
                        "decorators": [],
                        "name": "ReactManagedAttributes",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1644,
                        "end": 1650,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1645,
                            "end": 1646,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1645,
                              "end": 1646,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 1648,
                            "end": 1649,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1648,
                              "end": 1649,
                              "decorators": [],
                              "name": "P",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    },
                    "falseType": {
                      "type": "TSTypeReference",
                      "start": 1659,
                      "end": 1687,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1659,
                        "end": 1681,
                        "decorators": [],
                        "name": "ReactManagedAttributes",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1681,
                        "end": 1687,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 1682,
                            "end": 1683,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1682,
                              "end": 1683,
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 1685,
                            "end": 1686,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1685,
                              "end": 1686,
                              "decorators": [],
                              "name": "P",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  },
                  "declare": false
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 1693,
                  "end": 1759,
                  "id": {
                    "type": "Identifier",
                    "start": 1703,
                    "end": 1720,
                    "decorators": [],
                    "name": "IntrinsicElements",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 1721,
                    "end": 1759,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 1729,
                        "end": 1737,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1729,
                          "end": 1732,
                          "decorators": [],
                          "name": "div",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1732,
                          "end": 1736,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 1734,
                            "end": 1736,
                            "members": []
                          }
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 1744,
                        "end": 1753,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1744,
                          "end": 1748,
                          "decorators": [],
                          "name": "span",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1748,
                          "end": 1752,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 1750,
                            "end": 1752,
                            "members": []
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  "declare": false
                }
              ]
            },
            "kind": "namespace",
            "declare": false,
            "global": false
          }
        ]
      },
      "kind": "global",
      "declare": true,
      "global": true
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1767,
      "end": 1816,
      "id": {
        "type": "Identifier",
        "start": 1777,
        "end": 1793,
        "decorators": [],
        "name": "GlobalJSXElement",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1802,
          "end": 1813,
          "expression": {
            "type": "MemberExpression",
            "start": 1802,
            "end": 1813,
            "object": {
              "type": "Identifier",
              "start": 1802,
              "end": 1805,
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 1806,
              "end": 1813,
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 1814,
        "end": 1816,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1817,
      "end": 1902,
      "id": {
        "type": "Identifier",
        "start": 1827,
        "end": 1860,
        "decorators": [],
        "name": "GlobalJSXElementChildrenAttribute",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1871,
          "end": 1899,
          "expression": {
            "type": "MemberExpression",
            "start": 1871,
            "end": 1899,
            "object": {
              "type": "Identifier",
              "start": 1871,
              "end": 1874,
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 1875,
              "end": 1899,
              "decorators": [],
              "name": "ElementChildrenAttribute",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 1900,
        "end": 1902,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1903,
      "end": 1991,
      "id": {
        "type": "Identifier",
        "start": 1908,
        "end": 1941,
        "decorators": [],
        "name": "GlobalJSXLibraryManagedAttributes",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1941,
        "end": 1947,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1942,
            "end": 1943,
            "name": {
              "type": "Identifier",
              "start": 1942,
              "end": 1943,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1945,
            "end": 1946,
            "name": {
              "type": "Identifier",
              "start": 1945,
              "end": 1946,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1950,
        "end": 1990,
        "typeName": {
          "type": "TSQualifiedName",
          "start": 1950,
          "end": 1978,
          "left": {
            "type": "Identifier",
            "start": 1950,
            "end": 1953,
            "decorators": [],
            "name": "JSX",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 1954,
            "end": 1978,
            "decorators": [],
            "name": "LibraryManagedAttributes",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1978,
          "end": 1990,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 1982,
              "end": 1983,
              "typeName": {
                "type": "Identifier",
                "start": 1982,
                "end": 1983,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 1987,
              "end": 1988,
              "typeName": {
                "type": "Identifier",
                "start": 1987,
                "end": 1988,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1992,
      "end": 2061,
      "id": {
        "type": "Identifier",
        "start": 2002,
        "end": 2028,
        "decorators": [],
        "name": "GlobalJSXIntrinsicElements",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 2037,
          "end": 2058,
          "expression": {
            "type": "MemberExpression",
            "start": 2037,
            "end": 2058,
            "object": {
              "type": "Identifier",
              "start": 2037,
              "end": 2040,
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 2041,
              "end": 2058,
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 2059,
        "end": 2061,
        "body": []
      },
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 259,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 25,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 12,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 12,
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 25,
        "value": "react",
        "raw": "'react'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSDeclareFunction",
      "start": 27,
      "end": 95,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 54,
        "decorators": [],
        "name": "upperFirst",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 54,
        "end": 72,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 55,
            "end": 71,
            "name": {
              "type": "Identifier",
              "start": 55,
              "end": 56,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 65,
              "end": 71
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 73,
          "end": 79,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 76,
            "end": 79,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 78,
              "end": 79,
              "typeName": {
                "type": "Identifier",
                "start": 78,
                "end": 79,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 80,
        "end": 95,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 82,
          "end": 95,
          "typeName": {
            "type": "Identifier",
            "start": 82,
            "end": 92,
            "decorators": [],
            "name": "Capitalize",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 92,
            "end": 95,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 93,
                "end": 94,
                "typeName": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 94,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 97,
      "end": 167,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 103,
          "end": 167,
          "id": {
            "type": "Identifier",
            "start": 103,
            "end": 114,
            "decorators": [],
            "name": "displayEnum",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 117,
            "end": 167,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 118,
                "end": 131,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 123,
                  "end": 131,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 125,
                    "end": 131
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "start": 136,
              "end": 167,
              "callee": {
                "type": "Identifier",
                "start": 136,
                "end": 146,
                "decorators": [],
                "name": "upperFirst",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "CallExpression",
                  "start": 147,
                  "end": 166,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 147,
                    "end": 164,
                    "object": {
                      "type": "Identifier",
                      "start": 147,
                      "end": 152,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 153,
                      "end": 164,
                      "decorators": [],
                      "name": "toLowerCase",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                }
              ],
              "optional": false
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 169,
      "end": 259,
      "id": {
        "type": "Identifier",
        "start": 178,
        "end": 182,
        "decorators": [],
        "name": "Comp",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 185,
        "end": 259,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 189,
            "end": 257,
            "argument": {
              "type": "JSXElement",
              "start": 196,
              "end": 257,
              "openingElement": {
                "type": "JSXOpeningElement",
                "start": 196,
                "end": 201,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 197,
                  "end": 200,
                  "name": "div"
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false
              },
              "children": [
                {
                  "type": "JSXText",
                  "start": 201,
                  "end": 206,
                  "value": "\n    ",
                  "raw": "\n    "
                },
                {
                  "type": "JSXElement",
                  "start": 206,
                  "end": 225,
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "start": 206,
                    "end": 212,
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 207,
                      "end": 211,
                      "name": "span"
                    },
                    "typeArguments": null,
                    "attributes": [],
                    "selfClosing": false
                  },
                  "children": [
                    {
                      "type": "JSXText",
                      "start": 212,
                      "end": 218,
                      "value": "Scope:",
                      "raw": "Scope:"
                    }
                  ],
                  "closingElement": {
                    "type": "JSXClosingElement",
                    "start": 218,
                    "end": 225,
                    "name": {
                      "type": "JSXIdentifier",
                      "start": 220,
                      "end": 224,
                      "name": "span"
                    }
                  }
                },
                {
                  "type": "JSXText",
                  "start": 225,
                  "end": 226,
                  "value": " ",
                  "raw": " "
                },
                {
                  "type": "JSXExpressionContainer",
                  "start": 226,
                  "end": 248,
                  "expression": {
                    "type": "CallExpression",
                    "start": 227,
                    "end": 247,
                    "callee": {
                      "type": "Identifier",
                      "start": 227,
                      "end": 238,
                      "decorators": [],
                      "name": "displayEnum",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 239,
                        "end": 246,
                        "value": "VALUE",
                        "raw": "\"VALUE\""
                      }
                    ],
                    "optional": false
                  }
                },
                {
                  "type": "JSXText",
                  "start": 248,
                  "end": 251,
                  "value": "\n  ",
                  "raw": "\n  "
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "start": 251,
                "end": 257,
                "name": {
                  "type": "JSXIdentifier",
                  "start": 253,
                  "end": 256,
                  "name": "div"
                }
              }
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
