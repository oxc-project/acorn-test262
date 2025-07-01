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
