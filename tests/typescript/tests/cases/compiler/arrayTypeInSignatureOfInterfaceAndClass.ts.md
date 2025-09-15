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
        "name": "WinJS",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 23
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
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 43
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
                    "start": 44,
                    "end": 45
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 44,
                  "end": 45
                }
              ],
              "start": 43,
              "end": 46
            },
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 57,
                    "end": 61
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
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
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 62,
                            "end": 63
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 62,
                          "end": 63
                        }
                      ],
                      "start": 61,
                      "end": 64
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "success",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSFunctionType",
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
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 83,
                                      "end": 84
                                    },
                                    "typeArguments": null,
                                    "start": 83,
                                    "end": 84
                                  },
                                  "start": 81,
                                  "end": 84
                                },
                                "start": 76,
                                "end": 84
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Promise",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 89,
                                  "end": 96
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
                                        "start": 97,
                                        "end": 98
                                      },
                                      "typeArguments": null,
                                      "start": 97,
                                      "end": 98
                                    }
                                  ],
                                  "start": 96,
                                  "end": 99
                                },
                                "start": 89,
                                "end": 99
                              },
                              "start": 86,
                              "end": 99
                            },
                            "start": 75,
                            "end": 99
                          },
                          "start": 73,
                          "end": 99
                        },
                        "start": 65,
                        "end": 99
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "error",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "error",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 117,
                                    "end": 120
                                  },
                                  "start": 115,
                                  "end": 120
                                },
                                "start": 110,
                                "end": 120
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Promise",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 125,
                                  "end": 132
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
                                        "start": 133,
                                        "end": 134
                                      },
                                      "typeArguments": null,
                                      "start": 133,
                                      "end": 134
                                    }
                                  ],
                                  "start": 132,
                                  "end": 135
                                },
                                "start": 125,
                                "end": 135
                              },
                              "start": 122,
                              "end": 135
                            },
                            "start": 109,
                            "end": 135
                          },
                          "start": 107,
                          "end": 135
                        },
                        "start": 101,
                        "end": 135
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "progress",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "progress",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 159,
                                    "end": 162
                                  },
                                  "start": 157,
                                  "end": 162
                                },
                                "start": 149,
                                "end": 162
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 167,
                                "end": 171
                              },
                              "start": 164,
                              "end": 171
                            },
                            "start": 148,
                            "end": 171
                          },
                          "start": 146,
                          "end": 171
                        },
                        "start": 137,
                        "end": 171
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 174,
                          "end": 181
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
                                "start": 182,
                                "end": 183
                              },
                              "typeArguments": null,
                              "start": 182,
                              "end": 183
                            }
                          ],
                          "start": 181,
                          "end": 184
                        },
                        "start": 174,
                        "end": 184
                      },
                      "start": 172,
                      "end": 184
                    },
                    "body": null,
                    "expression": false,
                    "start": 61,
                    "end": 185
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 57,
                  "end": 185
                }
              ],
              "start": 47,
              "end": 191
            },
            "abstract": false,
            "declare": false,
            "start": 30,
            "end": 191
          }
        ],
        "start": 24,
        "end": 193
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 193
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Data",
        "optional": false,
        "typeAnnotation": null,
        "start": 212,
        "end": 216
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "IListItem",
                "optional": false,
                "typeAnnotation": null,
                "start": 240,
                "end": 249
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
                      "start": 250,
                      "end": 251
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 250,
                    "end": 251
                  }
                ],
                "start": 249,
                "end": 252
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
                      "name": "itemIndex",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 263,
                      "end": 272
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 274,
                        "end": 280
                      },
                      "start": 272,
                      "end": 280
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 263,
                    "end": 281
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
                      "start": 290,
                      "end": 293
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 295,
                        "end": 298
                      },
                      "start": 293,
                      "end": 298
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 290,
                    "end": 299
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 308,
                      "end": 312
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
                          "start": 314,
                          "end": 315
                        },
                        "typeArguments": null,
                        "start": 314,
                        "end": 315
                      },
                      "start": 312,
                      "end": 315
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 308,
                    "end": 316
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "group",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 325,
                      "end": 330
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 332,
                        "end": 335
                      },
                      "start": 330,
                      "end": 335
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 325,
                    "end": 336
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isHeader",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 345,
                      "end": 353
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 355,
                        "end": 362
                      },
                      "start": 353,
                      "end": 362
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 345,
                    "end": 363
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cached",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 372,
                      "end": 378
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 380,
                        "end": 387
                      },
                      "start": 378,
                      "end": 387
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 372,
                    "end": 388
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isNonSourceData",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 397,
                      "end": 412
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 414,
                        "end": 421
                      },
                      "start": 412,
                      "end": 421
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 397,
                    "end": 422
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "preventAugmentation",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 431,
                      "end": 450
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 452,
                        "end": 459
                      },
                      "start": 450,
                      "end": 459
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 431,
                    "end": 460
                  }
                ],
                "start": 253,
                "end": 466
              },
              "declare": false,
              "start": 230,
              "end": 466
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 223,
            "end": 466
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "IVirtualList",
                "optional": false,
                "typeAnnotation": null,
                "start": 488,
                "end": 500
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
                      "start": 501,
                      "end": 502
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 501,
                    "end": 502
                  }
                ],
                "start": 500,
                "end": 503
              },
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "removeIndices",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 570,
                      "end": 583
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "indices",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSNumberKeyword",
                              "start": 593,
                              "end": 599
                            },
                            "start": 593,
                            "end": 601
                          },
                          "start": 591,
                          "end": 601
                        },
                        "start": 584,
                        "end": 601
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "options",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 613,
                            "end": 616
                          },
                          "start": 611,
                          "end": 616
                        },
                        "start": 603,
                        "end": 616
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "WinJS",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 619,
                            "end": 624
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 625,
                            "end": 632
                          },
                          "start": 619,
                          "end": 632
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "IListItem",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 633,
                                  "end": 642
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
                                        "start": 643,
                                        "end": 644
                                      },
                                      "typeArguments": null,
                                      "start": 643,
                                      "end": 644
                                    }
                                  ],
                                  "start": 642,
                                  "end": 645
                                },
                                "start": 633,
                                "end": 645
                              },
                              "start": 633,
                              "end": 647
                            }
                          ],
                          "start": 632,
                          "end": 648
                        },
                        "start": 619,
                        "end": 648
                      },
                      "start": 617,
                      "end": 648
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 570,
                    "end": 649
                  }
                ],
                "start": 504,
                "end": 655
              },
              "declare": false,
              "start": 478,
              "end": 655
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 471,
            "end": 655
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "VirtualList",
                "optional": false,
                "typeAnnotation": null,
                "start": 673,
                "end": 684
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
                      "start": 685,
                      "end": 686
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 685,
                    "end": 686
                  }
                ],
                "start": 684,
                "end": 687
              },
              "superClass": null,
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IVirtualList",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 699,
                    "end": 711
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
                          "start": 712,
                          "end": 713
                        },
                        "typeArguments": null,
                        "start": 712,
                        "end": 713
                      }
                    ],
                    "start": 711,
                    "end": 714
                  },
                  "start": 699,
                  "end": 714
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "removeIndices",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 788,
                      "end": 801
                    },
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "indices",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSNumberKeyword",
                                "start": 811,
                                "end": 817
                              },
                              "start": 811,
                              "end": 819
                            },
                            "start": 809,
                            "end": 819
                          },
                          "start": 802,
                          "end": 819
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "options",
                          "optional": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 831,
                              "end": 834
                            },
                            "start": 829,
                            "end": 834
                          },
                          "start": 821,
                          "end": 834
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "WinJS",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 837,
                              "end": 842
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 843,
                              "end": 850
                            },
                            "start": 837,
                            "end": 850
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "IListItem",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 851,
                                    "end": 860
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
                                          "start": 861,
                                          "end": 862
                                        },
                                        "typeArguments": null,
                                        "start": 861,
                                        "end": 862
                                      }
                                    ],
                                    "start": 860,
                                    "end": 863
                                  },
                                  "start": 851,
                                  "end": 863
                                },
                                "start": 851,
                                "end": 865
                              }
                            ],
                            "start": 850,
                            "end": 866
                          },
                          "start": 837,
                          "end": 866
                        },
                        "start": 835,
                        "end": 866
                      },
                      "body": null,
                      "expression": false,
                      "start": 801,
                      "end": 867
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 781,
                    "end": 867
                  }
                ],
                "start": 715,
                "end": 873
              },
              "abstract": false,
              "declare": false,
              "start": 667,
              "end": 873
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 660,
            "end": 873
          }
        ],
        "start": 217,
        "end": 875
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 194,
      "end": 875
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 875
}
```
