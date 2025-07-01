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
        "start": 15,
        "end": 20
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
              "start": 33,
              "end": 40
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
                    "start": 41,
                    "end": 42
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 41,
                  "end": 42
                }
              ],
              "start": 40,
              "end": 43
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
                    "start": 54,
                    "end": 58
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
                            "start": 59,
                            "end": 60
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 59,
                          "end": 60
                        }
                      ],
                      "start": 58,
                      "end": 61
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
                                      "start": 80,
                                      "end": 81
                                    },
                                    "typeArguments": null,
                                    "start": 80,
                                    "end": 81
                                  },
                                  "start": 78,
                                  "end": 81
                                },
                                "start": 73,
                                "end": 81
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
                                  "start": 86,
                                  "end": 93
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
                                        "start": 94,
                                        "end": 95
                                      },
                                      "typeArguments": null,
                                      "start": 94,
                                      "end": 95
                                    }
                                  ],
                                  "start": 93,
                                  "end": 96
                                },
                                "start": 86,
                                "end": 96
                              },
                              "start": 83,
                              "end": 96
                            },
                            "start": 72,
                            "end": 96
                          },
                          "start": 70,
                          "end": 96
                        },
                        "start": 62,
                        "end": 96
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
                                    "start": 114,
                                    "end": 117
                                  },
                                  "start": 112,
                                  "end": 117
                                },
                                "start": 107,
                                "end": 117
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
                                  "start": 122,
                                  "end": 129
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
                                        "start": 130,
                                        "end": 131
                                      },
                                      "typeArguments": null,
                                      "start": 130,
                                      "end": 131
                                    }
                                  ],
                                  "start": 129,
                                  "end": 132
                                },
                                "start": 122,
                                "end": 132
                              },
                              "start": 119,
                              "end": 132
                            },
                            "start": 106,
                            "end": 132
                          },
                          "start": 104,
                          "end": 132
                        },
                        "start": 98,
                        "end": 132
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
                                    "start": 156,
                                    "end": 159
                                  },
                                  "start": 154,
                                  "end": 159
                                },
                                "start": 146,
                                "end": 159
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 164,
                                "end": 168
                              },
                              "start": 161,
                              "end": 168
                            },
                            "start": 145,
                            "end": 168
                          },
                          "start": 143,
                          "end": 168
                        },
                        "start": 134,
                        "end": 168
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
                          "start": 171,
                          "end": 178
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
                                "start": 179,
                                "end": 180
                              },
                              "typeArguments": null,
                              "start": 179,
                              "end": 180
                            }
                          ],
                          "start": 178,
                          "end": 181
                        },
                        "start": 171,
                        "end": 181
                      },
                      "start": 169,
                      "end": 181
                    },
                    "body": null,
                    "expression": false,
                    "start": 58,
                    "end": 182
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 54,
                  "end": 182
                }
              ],
              "start": 44,
              "end": 188
            },
            "abstract": false,
            "declare": false,
            "start": 27,
            "end": 188
          }
        ],
        "start": 21,
        "end": 190
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 190
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Data",
        "optional": false,
        "typeAnnotation": null,
        "start": 206,
        "end": 210
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
                "start": 234,
                "end": 243
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
                      "start": 244,
                      "end": 245
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 244,
                    "end": 245
                  }
                ],
                "start": 243,
                "end": 246
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
                      "start": 257,
                      "end": 266
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 268,
                        "end": 274
                      },
                      "start": 266,
                      "end": 274
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 257,
                    "end": 275
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
                      "start": 284,
                      "end": 287
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 289,
                        "end": 292
                      },
                      "start": 287,
                      "end": 292
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 284,
                    "end": 293
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
                      "start": 302,
                      "end": 306
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
                          "start": 308,
                          "end": 309
                        },
                        "typeArguments": null,
                        "start": 308,
                        "end": 309
                      },
                      "start": 306,
                      "end": 309
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 302,
                    "end": 310
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
                      "start": 319,
                      "end": 324
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 326,
                        "end": 329
                      },
                      "start": 324,
                      "end": 329
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 319,
                    "end": 330
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
                      "start": 339,
                      "end": 347
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 349,
                        "end": 356
                      },
                      "start": 347,
                      "end": 356
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 339,
                    "end": 357
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
                      "start": 366,
                      "end": 372
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 374,
                        "end": 381
                      },
                      "start": 372,
                      "end": 381
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 366,
                    "end": 382
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
                      "start": 391,
                      "end": 406
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 408,
                        "end": 415
                      },
                      "start": 406,
                      "end": 415
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 391,
                    "end": 416
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
                      "start": 425,
                      "end": 444
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 446,
                        "end": 453
                      },
                      "start": 444,
                      "end": 453
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 425,
                    "end": 454
                  }
                ],
                "start": 247,
                "end": 460
              },
              "declare": false,
              "start": 224,
              "end": 460
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 217,
            "end": 460
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
                "start": 482,
                "end": 494
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
                      "start": 564,
                      "end": 577
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
                              "start": 587,
                              "end": 593
                            },
                            "start": 587,
                            "end": 595
                          },
                          "start": 585,
                          "end": 595
                        },
                        "start": 578,
                        "end": 595
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
                            "start": 607,
                            "end": 610
                          },
                          "start": 605,
                          "end": 610
                        },
                        "start": 597,
                        "end": 610
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
                            "start": 613,
                            "end": 618
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 619,
                            "end": 626
                          },
                          "start": 613,
                          "end": 626
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
                                  "start": 627,
                                  "end": 636
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
                                        "start": 637,
                                        "end": 638
                                      },
                                      "typeArguments": null,
                                      "start": 637,
                                      "end": 638
                                    }
                                  ],
                                  "start": 636,
                                  "end": 639
                                },
                                "start": 627,
                                "end": 639
                              },
                              "start": 627,
                              "end": 641
                            }
                          ],
                          "start": 626,
                          "end": 642
                        },
                        "start": 613,
                        "end": 642
                      },
                      "start": 611,
                      "end": 642
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 564,
                    "end": 643
                  }
                ],
                "start": 498,
                "end": 649
              },
              "declare": false,
              "start": 472,
              "end": 649
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 465,
            "end": 649
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
                "start": 667,
                "end": 678
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
                      "start": 679,
                      "end": 680
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 679,
                    "end": 680
                  }
                ],
                "start": 678,
                "end": 681
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
                    "start": 693,
                    "end": 705
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
                          "start": 706,
                          "end": 707
                        },
                        "typeArguments": null,
                        "start": 706,
                        "end": 707
                      }
                    ],
                    "start": 705,
                    "end": 708
                  },
                  "start": 693,
                  "end": 708
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
                      "start": 782,
                      "end": 795
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
                                "start": 805,
                                "end": 811
                              },
                              "start": 805,
                              "end": 813
                            },
                            "start": 803,
                            "end": 813
                          },
                          "start": 796,
                          "end": 813
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
                              "start": 825,
                              "end": 828
                            },
                            "start": 823,
                            "end": 828
                          },
                          "start": 815,
                          "end": 828
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
                              "start": 831,
                              "end": 836
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 837,
                              "end": 844
                            },
                            "start": 831,
                            "end": 844
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
                                    "start": 845,
                                    "end": 854
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
                                          "start": 855,
                                          "end": 856
                                        },
                                        "typeArguments": null,
                                        "start": 855,
                                        "end": 856
                                      }
                                    ],
                                    "start": 854,
                                    "end": 857
                                  },
                                  "start": 845,
                                  "end": 857
                                },
                                "start": 845,
                                "end": 859
                              }
                            ],
                            "start": 844,
                            "end": 860
                          },
                          "start": 831,
                          "end": 860
                        },
                        "start": 829,
                        "end": 860
                      },
                      "body": null,
                      "expression": false,
                      "start": 795,
                      "end": 861
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 775,
                    "end": 861
                  }
                ],
                "start": 709,
                "end": 867
              },
              "abstract": false,
              "declare": false,
              "start": 661,
              "end": 867
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 654,
            "end": 867
          }
        ],
        "start": 211,
        "end": 869
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 191,
      "end": 869
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 869
}
```
