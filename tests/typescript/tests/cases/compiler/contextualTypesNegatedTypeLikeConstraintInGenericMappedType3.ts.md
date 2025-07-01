__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MappedOmit",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 15
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
              "start": 16,
              "end": 17
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 16,
            "end": 17
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 20
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 35,
                "end": 38
              },
              "start": 29,
              "end": 38
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 19,
            "end": 38
          }
        ],
        "start": 15,
        "end": 39
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 45,
          "end": 46
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
              "start": 56,
              "end": 57
            },
            "typeArguments": null,
            "start": 56,
            "end": 57
          },
          "start": 50,
          "end": 57
        },
        "nameType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Exclude",
            "optional": false,
            "typeAnnotation": null,
            "start": 61,
            "end": 68
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 69,
                  "end": 70
                },
                "typeArguments": null,
                "start": 69,
                "end": 70
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 72,
                  "end": 73
                },
                "typeArguments": null,
                "start": 72,
                "end": 73
              }
            ],
            "start": 68,
            "end": 74
          },
          "start": 61,
          "end": 74
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
              "start": 77,
              "end": 78
            },
            "typeArguments": null,
            "start": 77,
            "end": 78
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 80
            },
            "typeArguments": null,
            "start": 79,
            "end": 80
          },
          "start": 77,
          "end": 81
        },
        "optional": false,
        "readonly": null,
        "start": 42,
        "end": 84
      },
      "declare": false,
      "start": 0,
      "end": 84
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IntrinsicElements",
        "optional": false,
        "typeAnnotation": null,
        "start": 91,
        "end": 108
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
              "name": "div",
              "optional": false,
              "typeAnnotation": null,
              "start": 115,
              "end": 118
            },
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
                      "name": "onChange",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 126,
                      "end": 134
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ev",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Event",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 141,
                                  "end": 146
                                },
                                "typeArguments": null,
                                "start": 141,
                                "end": 146
                              },
                              "start": 139,
                              "end": 146
                            },
                            "start": 137,
                            "end": 146
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 151,
                            "end": 155
                          },
                          "start": 148,
                          "end": 155
                        },
                        "start": 136,
                        "end": 155
                      },
                      "start": 134,
                      "end": 155
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 126,
                    "end": 156
                  }
                ],
                "start": 120,
                "end": 160
              },
              "start": 118,
              "end": 160
            },
            "accessibility": null,
            "static": false,
            "start": 115,
            "end": 161
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
              "start": 164,
              "end": 168
            },
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
                      "name": "onChange",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 176,
                      "end": 184
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ev",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Event",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 191,
                                  "end": 196
                                },
                                "typeArguments": null,
                                "start": 191,
                                "end": 196
                              },
                              "start": 189,
                              "end": 196
                            },
                            "start": 187,
                            "end": 196
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 201,
                            "end": 205
                          },
                          "start": 198,
                          "end": 205
                        },
                        "start": 186,
                        "end": 205
                      },
                      "start": 184,
                      "end": 205
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 176,
                    "end": 206
                  }
                ],
                "start": 170,
                "end": 210
              },
              "start": 168,
              "end": 210
            },
            "accessibility": null,
            "static": false,
            "start": 164,
            "end": 211
          }
        ],
        "start": 111,
        "end": 213
      },
      "declare": false,
      "start": 86,
      "end": 214
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ElementType",
        "optional": false,
        "typeAnnotation": null,
        "start": 221,
        "end": 232
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IntrinsicElements",
            "optional": false,
            "typeAnnotation": null,
            "start": 241,
            "end": 258
          },
          "typeArguments": null,
          "start": 241,
          "end": 258
        },
        "start": 235,
        "end": 258
      },
      "declare": false,
      "start": 216,
      "end": 259
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "DEFAULT_TABS_TAG",
            "optional": false,
            "typeAnnotation": null,
            "start": 265,
            "end": 281
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": "div",
              "raw": "\"div\"",
              "start": 284,
              "end": 289
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 293,
                "end": 298
              },
              "typeArguments": null,
              "start": 293,
              "end": 298
            },
            "start": 284,
            "end": 298
          },
          "definite": false,
          "start": 265,
          "end": 298
        }
      ],
      "declare": false,
      "start": 261,
      "end": 299
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null,
        "start": 306,
        "end": 311
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TTag",
              "optional": false,
              "typeAnnotation": null,
              "start": 312,
              "end": 316
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ElementType",
                "optional": false,
                "typeAnnotation": null,
                "start": 325,
                "end": 336
              },
              "typeArguments": null,
              "start": 325,
              "end": 336
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 312,
            "end": 336
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Overrides",
              "optional": false,
              "typeAnnotation": null,
              "start": 338,
              "end": 347
            },
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 350,
              "end": 352
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 338,
            "end": 352
          }
        ],
        "start": 311,
        "end": 353
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "MappedOmit",
              "optional": false,
              "typeAnnotation": null,
              "start": 356,
              "end": 366
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
                      "name": "IntrinsicElements",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 370,
                      "end": 387
                    },
                    "typeArguments": null,
                    "start": 370,
                    "end": 387
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TTag",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 388,
                      "end": 392
                    },
                    "typeArguments": null,
                    "start": 388,
                    "end": 392
                  },
                  "start": 370,
                  "end": 393
                },
                {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Overrides",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 403,
                      "end": 412
                    },
                    "typeArguments": null,
                    "start": 403,
                    "end": 412
                  },
                  "start": 397,
                  "end": 412
                }
              ],
              "start": 366,
              "end": 414
            },
            "start": 356,
            "end": 414
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Overrides",
              "optional": false,
              "typeAnnotation": null,
              "start": 419,
              "end": 428
            },
            "typeArguments": null,
            "start": 419,
            "end": 428
          }
        ],
        "start": 356,
        "end": 428
      },
      "declare": false,
      "start": 301,
      "end": 429
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TabGroupProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 436,
        "end": 449
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TTag",
              "optional": false,
              "typeAnnotation": null,
              "start": 450,
              "end": 454
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ElementType",
                "optional": false,
                "typeAnnotation": null,
                "start": 463,
                "end": 474
              },
              "typeArguments": null,
              "start": 463,
              "end": 474
            },
            "default": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DEFAULT_TABS_TAG",
                "optional": false,
                "typeAnnotation": null,
                "start": 484,
                "end": 500
              },
              "typeArguments": null,
              "start": 477,
              "end": 500
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 450,
            "end": 500
          }
        ],
        "start": 449,
        "end": 501
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Props",
          "optional": false,
          "typeAnnotation": null,
          "start": 504,
          "end": 509
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TTag",
                "optional": false,
                "typeAnnotation": null,
                "start": 513,
                "end": 517
              },
              "typeArguments": null,
              "start": 513,
              "end": 517
            },
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "defaultIndex",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 527,
                    "end": 539
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 542,
                      "end": 548
                    },
                    "start": 540,
                    "end": 548
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 527,
                  "end": 549
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "onChange",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 554,
                    "end": 562
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "index",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 573,
                              "end": 579
                            },
                            "start": 571,
                            "end": 579
                          },
                          "start": 566,
                          "end": 579
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 584,
                          "end": 588
                        },
                        "start": 581,
                        "end": 588
                      },
                      "start": 565,
                      "end": 588
                    },
                    "start": 563,
                    "end": 588
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 554,
                  "end": 589
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "selectedIndex",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 594,
                    "end": 607
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 610,
                      "end": 616
                    },
                    "start": 608,
                    "end": 616
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 594,
                  "end": 617
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "vertical",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 622,
                    "end": 630
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 633,
                      "end": 640
                    },
                    "start": 631,
                    "end": 640
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 622,
                  "end": 641
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "manual",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 646,
                    "end": 652
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 655,
                      "end": 662
                    },
                    "start": 653,
                    "end": 662
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 646,
                  "end": 663
                }
              ],
              "start": 521,
              "end": 667
            }
          ],
          "start": 509,
          "end": 669
        },
        "start": 504,
        "end": 669
      },
      "declare": false,
      "start": 431,
      "end": 670
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_internal_ComponentTabGroup",
        "optional": false,
        "typeAnnotation": null,
        "start": 682,
        "end": 709
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
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
                    "name": "TTag",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 715,
                    "end": 719
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ElementType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 728,
                      "end": 739
                    },
                    "typeArguments": null,
                    "start": 728,
                    "end": 739
                  },
                  "default": {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DEFAULT_TABS_TAG",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 749,
                      "end": 765
                    },
                    "typeArguments": null,
                    "start": 742,
                    "end": 765
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 715,
                  "end": 765
                }
              ],
              "start": 714,
              "end": 766
            },
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
                      "name": "TabGroupProps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 779,
                      "end": 792
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TTag",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 793,
                            "end": 797
                          },
                          "typeArguments": null,
                          "start": 793,
                          "end": 797
                        }
                      ],
                      "start": 792,
                      "end": 798
                    },
                    "start": 779,
                    "end": 798
                  },
                  "start": 777,
                  "end": 798
                },
                "start": 772,
                "end": 798
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNullKeyword",
                "start": 805,
                "end": 809
              },
              "start": 803,
              "end": 809
            },
            "start": 714,
            "end": 810
          }
        ],
        "start": 710,
        "end": 812
      },
      "declare": false,
      "start": 672,
      "end": 812
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "TabGroup",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_internal_ComponentTabGroup",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 836,
                  "end": 863
                },
                "typeArguments": null,
                "start": 836,
                "end": 863
              },
              "start": 834,
              "end": 863
            },
            "start": 826,
            "end": 863
          },
          "init": null,
          "definite": false,
          "start": 826,
          "end": 863
        }
      ],
      "declare": true,
      "start": 814,
      "end": 864
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "TabGroup",
          "optional": false,
          "typeAnnotation": null,
          "start": 866,
          "end": 874
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "defaultIndex",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 879,
                  "end": 891
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 893,
                  "end": 894
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 879,
                "end": 894
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "onChange",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 898,
                  "end": 906
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "index",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 909,
                      "end": 914
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "kind": "const",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 934,
                                  "end": 940
                                },
                                "start": 932,
                                "end": 940
                              },
                              "start": 931,
                              "end": 940
                            },
                            "init": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "index",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 943,
                              "end": 948
                            },
                            "definite": false,
                            "start": 931,
                            "end": 948
                          }
                        ],
                        "declare": false,
                        "start": 925,
                        "end": 949
                      }
                    ],
                    "start": 919,
                    "end": 953
                  },
                  "id": null,
                  "generator": false,
                  "start": 908,
                  "end": 953
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 898,
                "end": 953
              }
            ],
            "start": 875,
            "end": 956
          }
        ],
        "optional": false,
        "start": 866,
        "end": 957
      },
      "directive": null,
      "start": 866,
      "end": 958
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 958
}
```
