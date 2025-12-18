__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IntrinsicElements",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 22
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
              "start": 29,
              "end": 32
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
                      "start": 40,
                      "end": 48
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
                                  "start": 55,
                                  "end": 60
                                },
                                "typeArguments": null,
                                "start": 55,
                                "end": 60
                              },
                              "start": 53,
                              "end": 60
                            },
                            "start": 51,
                            "end": 60
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 65,
                            "end": 69
                          },
                          "start": 62,
                          "end": 69
                        },
                        "start": 50,
                        "end": 69
                      },
                      "start": 48,
                      "end": 69
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 40,
                    "end": 70
                  }
                ],
                "start": 34,
                "end": 74
              },
              "start": 32,
              "end": 74
            },
            "accessibility": null,
            "static": false,
            "start": 29,
            "end": 75
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
              "start": 78,
              "end": 82
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
                      "start": 90,
                      "end": 98
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
                                  "start": 105,
                                  "end": 110
                                },
                                "typeArguments": null,
                                "start": 105,
                                "end": 110
                              },
                              "start": 103,
                              "end": 110
                            },
                            "start": 101,
                            "end": 110
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 115,
                            "end": 119
                          },
                          "start": 112,
                          "end": 119
                        },
                        "start": 100,
                        "end": 119
                      },
                      "start": 98,
                      "end": 119
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 90,
                    "end": 120
                  }
                ],
                "start": 84,
                "end": 124
              },
              "start": 82,
              "end": 124
            },
            "accessibility": null,
            "static": false,
            "start": 78,
            "end": 125
          }
        ],
        "start": 25,
        "end": 127
      },
      "declare": false,
      "start": 0,
      "end": 128
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ElementType",
        "optional": false,
        "typeAnnotation": null,
        "start": 135,
        "end": 146
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
            "start": 155,
            "end": 172
          },
          "typeArguments": null,
          "start": 155,
          "end": 172
        },
        "start": 149,
        "end": 172
      },
      "declare": false,
      "start": 130,
      "end": 173
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
            "start": 179,
            "end": 195
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "value": "div",
              "raw": "\"div\"",
              "start": 198,
              "end": 203
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 207,
                "end": 212
              },
              "typeArguments": null,
              "start": 207,
              "end": 212
            },
            "start": 198,
            "end": 212
          },
          "definite": false,
          "start": 179,
          "end": 212
        }
      ],
      "declare": false,
      "start": 175,
      "end": 213
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null,
        "start": 220,
        "end": 225
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
              "start": 226,
              "end": 230
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ElementType",
                "optional": false,
                "typeAnnotation": null,
                "start": 239,
                "end": 250
              },
              "typeArguments": null,
              "start": 239,
              "end": 250
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 226,
            "end": 250
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Overrides",
              "optional": false,
              "typeAnnotation": null,
              "start": 252,
              "end": 261
            },
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 264,
              "end": 266
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 252,
            "end": 266
          }
        ],
        "start": 225,
        "end": 267
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Omit",
              "optional": false,
              "typeAnnotation": null,
              "start": 270,
              "end": 274
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
                      "start": 278,
                      "end": 295
                    },
                    "typeArguments": null,
                    "start": 278,
                    "end": 295
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TTag",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 296,
                      "end": 300
                    },
                    "typeArguments": null,
                    "start": 296,
                    "end": 300
                  },
                  "start": 278,
                  "end": 301
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
                      "start": 311,
                      "end": 320
                    },
                    "typeArguments": null,
                    "start": 311,
                    "end": 320
                  },
                  "start": 305,
                  "end": 320
                }
              ],
              "start": 274,
              "end": 322
            },
            "start": 270,
            "end": 322
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Overrides",
              "optional": false,
              "typeAnnotation": null,
              "start": 327,
              "end": 336
            },
            "typeArguments": null,
            "start": 327,
            "end": 336
          }
        ],
        "start": 270,
        "end": 336
      },
      "declare": false,
      "start": 215,
      "end": 337
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TabGroupProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 344,
        "end": 357
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
              "start": 358,
              "end": 362
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ElementType",
                "optional": false,
                "typeAnnotation": null,
                "start": 371,
                "end": 382
              },
              "typeArguments": null,
              "start": 371,
              "end": 382
            },
            "default": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DEFAULT_TABS_TAG",
                "optional": false,
                "typeAnnotation": null,
                "start": 392,
                "end": 408
              },
              "typeArguments": null,
              "start": 385,
              "end": 408
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 358,
            "end": 408
          }
        ],
        "start": 357,
        "end": 409
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Props",
          "optional": false,
          "typeAnnotation": null,
          "start": 412,
          "end": 417
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
                "start": 421,
                "end": 425
              },
              "typeArguments": null,
              "start": 421,
              "end": 425
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
                    "start": 435,
                    "end": 447
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 450,
                      "end": 456
                    },
                    "start": 448,
                    "end": 456
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 435,
                  "end": 457
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
                    "start": 462,
                    "end": 470
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
                              "start": 481,
                              "end": 487
                            },
                            "start": 479,
                            "end": 487
                          },
                          "start": 474,
                          "end": 487
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 492,
                          "end": 496
                        },
                        "start": 489,
                        "end": 496
                      },
                      "start": 473,
                      "end": 496
                    },
                    "start": 471,
                    "end": 496
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 462,
                  "end": 497
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
                    "start": 502,
                    "end": 515
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 518,
                      "end": 524
                    },
                    "start": 516,
                    "end": 524
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 502,
                  "end": 525
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
                    "start": 530,
                    "end": 538
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 541,
                      "end": 548
                    },
                    "start": 539,
                    "end": 548
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 530,
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
                    "name": "manual",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 554,
                    "end": 560
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 563,
                      "end": 570
                    },
                    "start": 561,
                    "end": 570
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 554,
                  "end": 571
                }
              ],
              "start": 429,
              "end": 575
            }
          ],
          "start": 417,
          "end": 577
        },
        "start": 412,
        "end": 577
      },
      "declare": false,
      "start": 339,
      "end": 578
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_internal_ComponentTabGroup",
        "optional": false,
        "typeAnnotation": null,
        "start": 590,
        "end": 617
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
                    "start": 623,
                    "end": 627
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ElementType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 636,
                      "end": 647
                    },
                    "typeArguments": null,
                    "start": 636,
                    "end": 647
                  },
                  "default": {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DEFAULT_TABS_TAG",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 657,
                      "end": 673
                    },
                    "typeArguments": null,
                    "start": 650,
                    "end": 673
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 623,
                  "end": 673
                }
              ],
              "start": 622,
              "end": 674
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
                      "start": 687,
                      "end": 700
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
                            "start": 701,
                            "end": 705
                          },
                          "typeArguments": null,
                          "start": 701,
                          "end": 705
                        }
                      ],
                      "start": 700,
                      "end": 706
                    },
                    "start": 687,
                    "end": 706
                  },
                  "start": 685,
                  "end": 706
                },
                "start": 680,
                "end": 706
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNullKeyword",
                "start": 713,
                "end": 717
              },
              "start": 711,
              "end": 717
            },
            "start": 622,
            "end": 718
          }
        ],
        "start": 618,
        "end": 720
      },
      "declare": false,
      "start": 580,
      "end": 720
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
                  "start": 744,
                  "end": 771
                },
                "typeArguments": null,
                "start": 744,
                "end": 771
              },
              "start": 742,
              "end": 771
            },
            "start": 734,
            "end": 771
          },
          "init": null,
          "definite": false,
          "start": 734,
          "end": 771
        }
      ],
      "declare": true,
      "start": 722,
      "end": 772
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
          "start": 774,
          "end": 782
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
                  "start": 787,
                  "end": 799
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 801,
                  "end": 802
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 787,
                "end": 802
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
                  "start": 806,
                  "end": 814
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
                      "start": 817,
                      "end": 822
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
                                  "start": 842,
                                  "end": 848
                                },
                                "start": 840,
                                "end": 848
                              },
                              "start": 839,
                              "end": 848
                            },
                            "init": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "index",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 851,
                              "end": 856
                            },
                            "definite": false,
                            "start": 839,
                            "end": 856
                          }
                        ],
                        "declare": false,
                        "start": 833,
                        "end": 857
                      }
                    ],
                    "start": 827,
                    "end": 861
                  },
                  "id": null,
                  "generator": false,
                  "start": 816,
                  "end": 861
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 806,
                "end": 861
              }
            ],
            "start": 783,
            "end": 864
          }
        ],
        "optional": false,
        "start": 774,
        "end": 865
      },
      "directive": null,
      "start": 774,
      "end": 866
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 866
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4,
    "range": [
      0,
      4
    ]
  },
  {
    "type": "Identifier",
    "value": "IntrinsicElements",
    "start": 5,
    "end": 22,
    "range": [
      5,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 23,
    "end": 24,
    "range": [
      23,
      24
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "Identifier",
    "value": "div",
    "start": 29,
    "end": 32,
    "range": [
      29,
      32
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 32,
    "end": 33,
    "range": [
      32,
      33
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 34,
    "end": 35,
    "range": [
      34,
      35
    ]
  },
  {
    "type": "Identifier",
    "value": "onChange",
    "start": 40,
    "end": 48,
    "range": [
      40,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 48,
    "end": 49,
    "range": [
      48,
      49
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 50,
    "end": 51,
    "range": [
      50,
      51
    ]
  },
  {
    "type": "Identifier",
    "value": "ev",
    "start": 51,
    "end": 53,
    "range": [
      51,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Identifier",
    "value": "Event",
    "start": 55,
    "end": 60,
    "range": [
      55,
      60
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 62,
    "end": 64,
    "range": [
      62,
      64
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 65,
    "end": 69,
    "range": [
      65,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 73,
    "end": 74,
    "range": [
      73,
      74
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Identifier",
    "value": "span",
    "start": 78,
    "end": 82,
    "range": [
      78,
      82
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Identifier",
    "value": "onChange",
    "start": 90,
    "end": 98,
    "range": [
      90,
      98
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Identifier",
    "value": "ev",
    "start": 101,
    "end": 103,
    "range": [
      101,
      103
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Identifier",
    "value": "Event",
    "start": 105,
    "end": 110,
    "range": [
      105,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 112,
    "end": 114,
    "range": [
      112,
      114
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 115,
    "end": 119,
    "range": [
      115,
      119
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 124,
    "end": 125,
    "range": [
      124,
      125
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
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
    "value": "ElementType",
    "start": 135,
    "end": 146,
    "range": [
      135,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 149,
    "end": 154,
    "range": [
      149,
      154
    ]
  },
  {
    "type": "Identifier",
    "value": "IntrinsicElements",
    "start": 155,
    "end": 172,
    "range": [
      155,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 175,
    "end": 178,
    "range": [
      175,
      178
    ]
  },
  {
    "type": "Identifier",
    "value": "DEFAULT_TABS_TAG",
    "start": 179,
    "end": 195,
    "range": [
      179,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "String",
    "value": "\"div\"",
    "start": 198,
    "end": 203,
    "range": [
      198,
      203
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 204,
    "end": 206,
    "range": [
      204,
      206
    ]
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 207,
    "end": 212,
    "range": [
      207,
      212
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 212,
    "end": 213,
    "range": [
      212,
      213
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 215,
    "end": 219,
    "range": [
      215,
      219
    ]
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 220,
    "end": 225,
    "range": [
      220,
      225
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Identifier",
    "value": "TTag",
    "start": 226,
    "end": 230,
    "range": [
      226,
      230
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 231,
    "end": 238,
    "range": [
      231,
      238
    ]
  },
  {
    "type": "Identifier",
    "value": "ElementType",
    "start": 239,
    "end": 250,
    "range": [
      239,
      250
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 250,
    "end": 251,
    "range": [
      250,
      251
    ]
  },
  {
    "type": "Identifier",
    "value": "Overrides",
    "start": 252,
    "end": 261,
    "range": [
      252,
      261
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 262,
    "end": 263,
    "range": [
      262,
      263
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 264,
    "end": 265,
    "range": [
      264,
      265
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 265,
    "end": 266,
    "range": [
      265,
      266
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 266,
    "end": 267,
    "range": [
      266,
      267
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Identifier",
    "value": "Omit",
    "start": 270,
    "end": 274,
    "range": [
      270,
      274
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 274,
    "end": 275,
    "range": [
      274,
      275
    ]
  },
  {
    "type": "Identifier",
    "value": "IntrinsicElements",
    "start": 278,
    "end": 295,
    "range": [
      278,
      295
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 295,
    "end": 296,
    "range": [
      295,
      296
    ]
  },
  {
    "type": "Identifier",
    "value": "TTag",
    "start": 296,
    "end": 300,
    "range": [
      296,
      300
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 300,
    "end": 301,
    "range": [
      300,
      301
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 301,
    "end": 302,
    "range": [
      301,
      302
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 305,
    "end": 310,
    "range": [
      305,
      310
    ]
  },
  {
    "type": "Identifier",
    "value": "Overrides",
    "start": 311,
    "end": 320,
    "range": [
      311,
      320
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 321,
    "end": 322,
    "range": [
      321,
      322
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 323,
    "end": 324,
    "range": [
      323,
      324
    ]
  },
  {
    "type": "Identifier",
    "value": "Overrides",
    "start": 327,
    "end": 336,
    "range": [
      327,
      336
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 339,
    "end": 343,
    "range": [
      339,
      343
    ]
  },
  {
    "type": "Identifier",
    "value": "TabGroupProps",
    "start": 344,
    "end": 357,
    "range": [
      344,
      357
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 357,
    "end": 358,
    "range": [
      357,
      358
    ]
  },
  {
    "type": "Identifier",
    "value": "TTag",
    "start": 358,
    "end": 362,
    "range": [
      358,
      362
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 363,
    "end": 370,
    "range": [
      363,
      370
    ]
  },
  {
    "type": "Identifier",
    "value": "ElementType",
    "start": 371,
    "end": 382,
    "range": [
      371,
      382
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 383,
    "end": 384,
    "range": [
      383,
      384
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 385,
    "end": 391,
    "range": [
      385,
      391
    ]
  },
  {
    "type": "Identifier",
    "value": "DEFAULT_TABS_TAG",
    "start": 392,
    "end": 408,
    "range": [
      392,
      408
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 408,
    "end": 409,
    "range": [
      408,
      409
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 410,
    "end": 411,
    "range": [
      410,
      411
    ]
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 412,
    "end": 417,
    "range": [
      412,
      417
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 417,
    "end": 418,
    "range": [
      417,
      418
    ]
  },
  {
    "type": "Identifier",
    "value": "TTag",
    "start": 421,
    "end": 425,
    "range": [
      421,
      425
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 425,
    "end": 426,
    "range": [
      425,
      426
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 429,
    "end": 430,
    "range": [
      429,
      430
    ]
  },
  {
    "type": "Identifier",
    "value": "defaultIndex",
    "start": 435,
    "end": 447,
    "range": [
      435,
      447
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 447,
    "end": 448,
    "range": [
      447,
      448
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 448,
    "end": 449,
    "range": [
      448,
      449
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 450,
    "end": 456,
    "range": [
      450,
      456
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 456,
    "end": 457,
    "range": [
      456,
      457
    ]
  },
  {
    "type": "Identifier",
    "value": "onChange",
    "start": 462,
    "end": 470,
    "range": [
      462,
      470
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 470,
    "end": 471,
    "range": [
      470,
      471
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 471,
    "end": 472,
    "range": [
      471,
      472
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 473,
    "end": 474,
    "range": [
      473,
      474
    ]
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 474,
    "end": 479,
    "range": [
      474,
      479
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 479,
    "end": 480,
    "range": [
      479,
      480
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 481,
    "end": 487,
    "range": [
      481,
      487
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 487,
    "end": 488,
    "range": [
      487,
      488
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 489,
    "end": 491,
    "range": [
      489,
      491
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 492,
    "end": 496,
    "range": [
      492,
      496
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 496,
    "end": 497,
    "range": [
      496,
      497
    ]
  },
  {
    "type": "Identifier",
    "value": "selectedIndex",
    "start": 502,
    "end": 515,
    "range": [
      502,
      515
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 515,
    "end": 516,
    "range": [
      515,
      516
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 516,
    "end": 517,
    "range": [
      516,
      517
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 518,
    "end": 524,
    "range": [
      518,
      524
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 524,
    "end": 525,
    "range": [
      524,
      525
    ]
  },
  {
    "type": "Identifier",
    "value": "vertical",
    "start": 530,
    "end": 538,
    "range": [
      530,
      538
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 538,
    "end": 539,
    "range": [
      538,
      539
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 539,
    "end": 540,
    "range": [
      539,
      540
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 541,
    "end": 548,
    "range": [
      541,
      548
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 548,
    "end": 549,
    "range": [
      548,
      549
    ]
  },
  {
    "type": "Identifier",
    "value": "manual",
    "start": 554,
    "end": 560,
    "range": [
      554,
      560
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 560,
    "end": 561,
    "range": [
      560,
      561
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 561,
    "end": 562,
    "range": [
      561,
      562
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 563,
    "end": 570,
    "range": [
      563,
      570
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 570,
    "end": 571,
    "range": [
      570,
      571
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 574,
    "end": 575,
    "range": [
      574,
      575
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 576,
    "end": 577,
    "range": [
      576,
      577
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 577,
    "end": 578,
    "range": [
      577,
      578
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 580,
    "end": 589,
    "range": [
      580,
      589
    ]
  },
  {
    "type": "Identifier",
    "value": "_internal_ComponentTabGroup",
    "start": 590,
    "end": 617,
    "range": [
      590,
      617
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 618,
    "end": 619,
    "range": [
      618,
      619
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 622,
    "end": 623,
    "range": [
      622,
      623
    ]
  },
  {
    "type": "Identifier",
    "value": "TTag",
    "start": 623,
    "end": 627,
    "range": [
      623,
      627
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 628,
    "end": 635,
    "range": [
      628,
      635
    ]
  },
  {
    "type": "Identifier",
    "value": "ElementType",
    "start": 636,
    "end": 647,
    "range": [
      636,
      647
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 648,
    "end": 649,
    "range": [
      648,
      649
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 650,
    "end": 656,
    "range": [
      650,
      656
    ]
  },
  {
    "type": "Identifier",
    "value": "DEFAULT_TABS_TAG",
    "start": 657,
    "end": 673,
    "range": [
      657,
      673
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 673,
    "end": 674,
    "range": [
      673,
      674
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 674,
    "end": 675,
    "range": [
      674,
      675
    ]
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 680,
    "end": 685,
    "range": [
      680,
      685
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 685,
    "end": 686,
    "range": [
      685,
      686
    ]
  },
  {
    "type": "Identifier",
    "value": "TabGroupProps",
    "start": 687,
    "end": 700,
    "range": [
      687,
      700
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 700,
    "end": 701,
    "range": [
      700,
      701
    ]
  },
  {
    "type": "Identifier",
    "value": "TTag",
    "start": 701,
    "end": 705,
    "range": [
      701,
      705
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 705,
    "end": 706,
    "range": [
      705,
      706
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 706,
    "end": 707,
    "range": [
      706,
      707
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 710,
    "end": 711,
    "range": [
      710,
      711
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 711,
    "end": 712,
    "range": [
      711,
      712
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 713,
    "end": 717,
    "range": [
      713,
      717
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 717,
    "end": 718,
    "range": [
      717,
      718
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 719,
    "end": 720,
    "range": [
      719,
      720
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 722,
    "end": 729,
    "range": [
      722,
      729
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 730,
    "end": 733,
    "range": [
      730,
      733
    ]
  },
  {
    "type": "Identifier",
    "value": "TabGroup",
    "start": 734,
    "end": 742,
    "range": [
      734,
      742
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 742,
    "end": 743,
    "range": [
      742,
      743
    ]
  },
  {
    "type": "Identifier",
    "value": "_internal_ComponentTabGroup",
    "start": 744,
    "end": 771,
    "range": [
      744,
      771
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 771,
    "end": 772,
    "range": [
      771,
      772
    ]
  },
  {
    "type": "Identifier",
    "value": "TabGroup",
    "start": 774,
    "end": 782,
    "range": [
      774,
      782
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 782,
    "end": 783,
    "range": [
      782,
      783
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 783,
    "end": 784,
    "range": [
      783,
      784
    ]
  },
  {
    "type": "Identifier",
    "value": "defaultIndex",
    "start": 787,
    "end": 799,
    "range": [
      787,
      799
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 799,
    "end": 800,
    "range": [
      799,
      800
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 801,
    "end": 802,
    "range": [
      801,
      802
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 802,
    "end": 803,
    "range": [
      802,
      803
    ]
  },
  {
    "type": "Identifier",
    "value": "onChange",
    "start": 806,
    "end": 814,
    "range": [
      806,
      814
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 814,
    "end": 815,
    "range": [
      814,
      815
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 816,
    "end": 817,
    "range": [
      816,
      817
    ]
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 817,
    "end": 822,
    "range": [
      817,
      822
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 822,
    "end": 823,
    "range": [
      822,
      823
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 824,
    "end": 826,
    "range": [
      824,
      826
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 827,
    "end": 828,
    "range": [
      827,
      828
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 833,
    "end": 838,
    "range": [
      833,
      838
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 839,
    "end": 840,
    "range": [
      839,
      840
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 840,
    "end": 841,
    "range": [
      840,
      841
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 842,
    "end": 848,
    "range": [
      842,
      848
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 849,
    "end": 850,
    "range": [
      849,
      850
    ]
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 851,
    "end": 856,
    "range": [
      851,
      856
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 856,
    "end": 857,
    "range": [
      856,
      857
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 860,
    "end": 861,
    "range": [
      860,
      861
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 861,
    "end": 862,
    "range": [
      861,
      862
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 863,
    "end": 864,
    "range": [
      863,
      864
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 864,
    "end": 865,
    "range": [
      864,
      865
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 865,
    "end": 866,
    "range": [
      865,
      866
    ]
  }
]
```
