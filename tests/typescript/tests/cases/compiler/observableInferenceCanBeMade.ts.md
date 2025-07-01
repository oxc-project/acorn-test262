__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "of",
        "optional": false,
        "typeAnnotation": null,
        "start": 39,
        "end": 41
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
              "start": 42,
              "end": 43
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 42,
            "end": 43
          }
        ],
        "start": 41,
        "end": 44
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
                "start": 48,
                "end": 49
              },
              "typeArguments": null,
              "start": 48,
              "end": 49
            },
            "start": 46,
            "end": 49
          },
          "start": 45,
          "end": 49
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Observable",
            "optional": false,
            "typeAnnotation": null,
            "start": 52,
            "end": 62
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
                  "start": 63,
                  "end": 64
                },
                "typeArguments": null,
                "start": 63,
                "end": 64
              }
            ],
            "start": 62,
            "end": 65
          },
          "start": 52,
          "end": 65
        },
        "start": 50,
        "end": 65
      },
      "body": null,
      "expression": false,
      "start": 22,
      "end": 66
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "from",
        "optional": false,
        "typeAnnotation": null,
        "start": 84,
        "end": 88
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
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 89,
              "end": 90
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ObservableInput",
                "optional": false,
                "typeAnnotation": null,
                "start": 99,
                "end": 114
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 115,
                    "end": 118
                  }
                ],
                "start": 114,
                "end": 119
              },
              "start": 99,
              "end": 119
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 89,
            "end": 119
          }
        ],
        "start": 88,
        "end": 120
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "input",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "O",
                "optional": false,
                "typeAnnotation": null,
                "start": 128,
                "end": 129
              },
              "typeArguments": null,
              "start": 128,
              "end": 129
            },
            "start": 126,
            "end": 129
          },
          "start": 121,
          "end": 129
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Observable",
            "optional": false,
            "typeAnnotation": null,
            "start": 132,
            "end": 142
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ObservedValueOf",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 143,
                  "end": 158
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "O",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 159,
                        "end": 160
                      },
                      "typeArguments": null,
                      "start": 159,
                      "end": 160
                    }
                  ],
                  "start": 158,
                  "end": 161
                },
                "start": 143,
                "end": 161
              }
            ],
            "start": 142,
            "end": 162
          },
          "start": 132,
          "end": 162
        },
        "start": 130,
        "end": 162
      },
      "body": null,
      "expression": false,
      "start": 67,
      "end": 163
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ObservedValueOf",
        "optional": false,
        "typeAnnotation": null,
        "start": 170,
        "end": 185
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 186,
              "end": 187
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 186,
            "end": 187
          }
        ],
        "start": 185,
        "end": 188
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "O",
            "optional": false,
            "typeAnnotation": null,
            "start": 191,
            "end": 192
          },
          "typeArguments": null,
          "start": 191,
          "end": 192
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ObservableInput",
            "optional": false,
            "typeAnnotation": null,
            "start": 201,
            "end": 216
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
                    "start": 223,
                    "end": 224
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 223,
                  "end": 224
                },
                "start": 217,
                "end": 224
              }
            ],
            "start": 216,
            "end": 225
          },
          "start": 201,
          "end": 225
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 228,
            "end": 229
          },
          "typeArguments": null,
          "start": 228,
          "end": 229
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 232,
          "end": 237
        },
        "start": 191,
        "end": 237
      },
      "declare": false,
      "start": 165,
      "end": 238
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Subscribable",
        "optional": false,
        "typeAnnotation": null,
        "start": 250,
        "end": 262
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
              "start": 263,
              "end": 264
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 263,
            "end": 264
          }
        ],
        "start": 262,
        "end": 265
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
              "name": "subscribe",
              "optional": false,
              "typeAnnotation": null,
              "start": 272,
              "end": 281
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "next",
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
                              "start": 297,
                              "end": 298
                            },
                            "typeArguments": null,
                            "start": 297,
                            "end": 298
                          },
                          "start": 295,
                          "end": 298
                        },
                        "start": 290,
                        "end": 298
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 303,
                        "end": 307
                      },
                      "start": 300,
                      "end": 307
                    },
                    "start": 289,
                    "end": 307
                  },
                  "start": 287,
                  "end": 307
                },
                "start": 282,
                "end": 307
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
                            "start": 325,
                            "end": 328
                          },
                          "start": 323,
                          "end": 328
                        },
                        "start": 318,
                        "end": 328
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 333,
                        "end": 337
                      },
                      "start": 330,
                      "end": 337
                    },
                    "start": 317,
                    "end": 337
                  },
                  "start": 315,
                  "end": 337
                },
                "start": 309,
                "end": 337
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "complete",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 356,
                        "end": 360
                      },
                      "start": 353,
                      "end": 360
                    },
                    "start": 350,
                    "end": 360
                  },
                  "start": 348,
                  "end": 360
                },
                "start": 339,
                "end": 360
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 363,
                "end": 367
              },
              "start": 361,
              "end": 367
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 272,
            "end": 368
          }
        ],
        "start": 266,
        "end": 370
      },
      "declare": false,
      "start": 240,
      "end": 370
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ObservableInput",
        "optional": false,
        "typeAnnotation": null,
        "start": 376,
        "end": 391
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
              "start": 392,
              "end": 393
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 392,
            "end": 393
          }
        ],
        "start": 391,
        "end": 394
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Subscribable",
              "optional": false,
              "typeAnnotation": null,
              "start": 397,
              "end": 409
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
                    "start": 410,
                    "end": 411
                  },
                  "typeArguments": null,
                  "start": 410,
                  "end": 411
                }
              ],
              "start": 409,
              "end": 412
            },
            "start": 397,
            "end": 412
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Subscribable",
              "optional": false,
              "typeAnnotation": null,
              "start": 415,
              "end": 427
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSNeverKeyword",
                  "start": 428,
                  "end": 433
                }
              ],
              "start": 427,
              "end": 434
            },
            "start": 415,
            "end": 434
          }
        ],
        "start": 397,
        "end": 434
      },
      "declare": false,
      "start": 371,
      "end": 435
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Observable",
        "optional": false,
        "typeAnnotation": null,
        "start": 452,
        "end": 462
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
              "start": 463,
              "end": 464
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 463,
            "end": 464
          }
        ],
        "start": 462,
        "end": 465
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Subscribable",
            "optional": false,
            "typeAnnotation": null,
            "start": 477,
            "end": 489
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
                  "start": 490,
                  "end": 491
                },
                "typeArguments": null,
                "start": 490,
                "end": 491
              }
            ],
            "start": 489,
            "end": 492
          },
          "start": 477,
          "end": 492
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
              "name": "subscribe",
              "optional": false,
              "typeAnnotation": null,
              "start": 499,
              "end": 508
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
                  "name": "next",
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
                                "start": 524,
                                "end": 525
                              },
                              "typeArguments": null,
                              "start": 524,
                              "end": 525
                            },
                            "start": 522,
                            "end": 525
                          },
                          "start": 517,
                          "end": 525
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 530,
                          "end": 534
                        },
                        "start": 527,
                        "end": 534
                      },
                      "start": 516,
                      "end": 534
                    },
                    "start": 514,
                    "end": 534
                  },
                  "start": 509,
                  "end": 534
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
                              "start": 552,
                              "end": 555
                            },
                            "start": 550,
                            "end": 555
                          },
                          "start": 545,
                          "end": 555
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 560,
                          "end": 564
                        },
                        "start": 557,
                        "end": 564
                      },
                      "start": 544,
                      "end": 564
                    },
                    "start": 542,
                    "end": 564
                  },
                  "start": 536,
                  "end": 564
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "complete",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 583,
                          "end": 587
                        },
                        "start": 580,
                        "end": 587
                      },
                      "start": 577,
                      "end": 587
                    },
                    "start": 575,
                    "end": 587
                  },
                  "start": 566,
                  "end": 587
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 590,
                  "end": 594
                },
                "start": 588,
                "end": 594
              },
              "body": null,
              "expression": false,
              "start": 508,
              "end": 595
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 499,
            "end": 595
          }
        ],
        "start": 493,
        "end": 597
      },
      "abstract": false,
      "declare": true,
      "start": 438,
      "end": 597
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "asObservable",
        "optional": false,
        "typeAnnotation": null,
        "start": 608,
        "end": 620
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "input",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 628,
                  "end": 634
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ObservableInput",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 637,
                    "end": 652
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 653,
                        "end": 659
                      }
                    ],
                    "start": 652,
                    "end": 660
                  },
                  "start": 637,
                  "end": 660
                }
              ],
              "start": 628,
              "end": 660
            },
            "start": 626,
            "end": 660
          },
          "start": 621,
          "end": 660
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Observable",
            "optional": false,
            "typeAnnotation": null,
            "start": 663,
            "end": 673
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 674,
                "end": 680
              }
            ],
            "start": 673,
            "end": 681
          },
          "start": 663,
          "end": 681
        },
        "start": 661,
        "end": 681
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "input",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 702,
                    "end": 707
                  },
                  "prefix": true,
                  "start": 695,
                  "end": 707
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "'string'",
                  "start": 712,
                  "end": 720
                },
                "start": 695,
                "end": 720
              },
              "consequent": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "of",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 723,
                  "end": 725
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "input",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 726,
                    "end": 731
                  }
                ],
                "optional": false,
                "start": 723,
                "end": 732
              },
              "alternate": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "from",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 735,
                  "end": 739
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "input",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 740,
                    "end": 745
                  }
                ],
                "optional": false,
                "start": 735,
                "end": 746
              },
              "start": 695,
              "end": 746
            },
            "start": 688,
            "end": 746
          }
        ],
        "start": 682,
        "end": 748
      },
      "expression": false,
      "start": 599,
      "end": 748
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 748
}
```
