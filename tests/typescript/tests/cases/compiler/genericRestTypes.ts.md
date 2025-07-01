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
        "name": "Tail",
        "optional": false,
        "typeAnnotation": null,
        "start": 122,
        "end": 126
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
              "start": 127,
              "end": 128
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 137,
                "end": 140
              },
              "start": 137,
              "end": 142
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 127,
            "end": 142
          }
        ],
        "start": 126,
        "end": 143
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
                "name": "args",
                "optional": false,
                "typeAnnotation": null,
                "start": 151,
                "end": 155
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
                    "start": 157,
                    "end": 158
                  },
                  "typeArguments": null,
                  "start": 157,
                  "end": 158
                },
                "start": 155,
                "end": 158
              },
              "value": null,
              "start": 148,
              "end": 158
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 163,
              "end": 166
            },
            "start": 160,
            "end": 166
          },
          "start": 147,
          "end": 166
        },
        "extendsType": {
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
                  "type": "TSAnyKeyword",
                  "start": 184,
                  "end": 187
                },
                "start": 182,
                "end": 187
              },
              "start": 178,
              "end": 187
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
                "start": 192,
                "end": 196
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
                      "start": 204,
                      "end": 205
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 204,
                    "end": 205
                  },
                  "start": 198,
                  "end": 205
                },
                "start": 196,
                "end": 205
              },
              "value": null,
              "start": 189,
              "end": 205
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 210,
              "end": 213
            },
            "start": 207,
            "end": 213
          },
          "start": 177,
          "end": 213
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 217,
            "end": 218
          },
          "typeArguments": null,
          "start": 217,
          "end": 218
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 221,
          "end": 226
        },
        "start": 146,
        "end": 226
      },
      "declare": false,
      "start": 117,
      "end": 227
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyFunctionType",
        "optional": false,
        "typeAnnotation": null,
        "start": 234,
        "end": 248
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 257,
                "end": 263
              },
              "start": 255,
              "end": 263
            },
            "start": 252,
            "end": 263
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 270,
                "end": 276
              },
              "start": 268,
              "end": 276
            },
            "start": 265,
            "end": 276
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSBooleanKeyword",
            "start": 281,
            "end": 288
          },
          "start": 278,
          "end": 288
        },
        "start": 251,
        "end": 288
      },
      "declare": false,
      "start": 229,
      "end": 289
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Explicit",
        "optional": false,
        "typeAnnotation": null,
        "start": 296,
        "end": 304
      },
      "typeParameters": null,
      "typeAnnotation": {
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
              "start": 311,
              "end": 315
            },
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Tail",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 317,
                  "end": 321
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
                        "start": 322,
                        "end": 332
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "MyFunctionType",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 333,
                              "end": 347
                            },
                            "typeArguments": null,
                            "start": 333,
                            "end": 347
                          }
                        ],
                        "start": 332,
                        "end": 348
                      },
                      "start": 322,
                      "end": 348
                    }
                  ],
                  "start": 321,
                  "end": 349
                },
                "start": 317,
                "end": 349
              },
              "start": 315,
              "end": 349
            },
            "value": null,
            "start": 308,
            "end": 349
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
              "start": 354,
              "end": 364
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MyFunctionType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 365,
                    "end": 379
                  },
                  "typeArguments": null,
                  "start": 365,
                  "end": 379
                }
              ],
              "start": 364,
              "end": 380
            },
            "start": 354,
            "end": 380
          },
          "start": 351,
          "end": 380
        },
        "start": 307,
        "end": 380
      },
      "declare": false,
      "start": 291,
      "end": 381
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bind1",
        "optional": false,
        "typeAnnotation": null,
        "start": 416,
        "end": 421
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
              "start": 422,
              "end": 423
            },
            "constraint": {
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
                      "type": "TSAnyKeyword",
                      "start": 439,
                      "end": 442
                    },
                    "start": 437,
                    "end": 442
                  },
                  "start": 433,
                  "end": 442
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
                    "start": 447,
                    "end": 451
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 453,
                        "end": 456
                      },
                      "start": 453,
                      "end": 458
                    },
                    "start": 451,
                    "end": 458
                  },
                  "value": null,
                  "start": 444,
                  "end": 458
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 463,
                  "end": 466
                },
                "start": 460,
                "end": 466
              },
              "start": 432,
              "end": 466
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 422,
            "end": 466
          }
        ],
        "start": 421,
        "end": 467
      },
      "typeAnnotation": {
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
              "start": 474,
              "end": 478
            },
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Tail",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 480,
                  "end": 484
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
                        "start": 485,
                        "end": 495
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
                              "start": 496,
                              "end": 497
                            },
                            "typeArguments": null,
                            "start": 496,
                            "end": 497
                          }
                        ],
                        "start": 495,
                        "end": 498
                      },
                      "start": 485,
                      "end": 498
                    }
                  ],
                  "start": 484,
                  "end": 499
                },
                "start": 480,
                "end": 499
              },
              "start": 478,
              "end": 499
            },
            "value": null,
            "start": 471,
            "end": 499
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
              "start": 504,
              "end": 514
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
                    "start": 515,
                    "end": 516
                  },
                  "typeArguments": null,
                  "start": 515,
                  "end": 516
                }
              ],
              "start": 514,
              "end": 517
            },
            "start": 504,
            "end": 517
          },
          "start": 501,
          "end": 517
        },
        "start": 470,
        "end": 517
      },
      "declare": false,
      "start": 411,
      "end": 518
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Generic",
        "optional": false,
        "typeAnnotation": null,
        "start": 524,
        "end": 531
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bind1",
          "optional": false,
          "typeAnnotation": null,
          "start": 534,
          "end": 539
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyFunctionType",
                "optional": false,
                "typeAnnotation": null,
                "start": 540,
                "end": 554
              },
              "typeArguments": null,
              "start": 540,
              "end": 554
            }
          ],
          "start": 539,
          "end": 555
        },
        "start": 534,
        "end": 555
      },
      "declare": false,
      "start": 519,
      "end": 556
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assignmentWithComplexRest",
        "optional": false,
        "typeAnnotation": null,
        "start": 595,
        "end": 620
      },
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 621,
              "end": 622
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 631,
                "end": 634
              },
              "start": 631,
              "end": 636
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 621,
            "end": 636
          }
        ],
        "start": 620,
        "end": 637
      },
      "params": [],
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
                  "name": "fn1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 661,
                              "end": 667
                            },
                            "start": 659,
                            "end": 667
                          },
                          "start": 658,
                          "end": 667
                        },
                        {
                          "type": "RestElement",
                          "decorators": [],
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "rest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 672,
                            "end": 676
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
                                "start": 678,
                                "end": 679
                              },
                              "typeArguments": null,
                              "start": 678,
                              "end": 679
                            },
                            "start": 676,
                            "end": 679
                          },
                          "value": null,
                          "start": 669,
                          "end": 679
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 684,
                          "end": 688
                        },
                        "start": 681,
                        "end": 688
                      },
                      "start": 657,
                      "end": 688
                    },
                    "start": 655,
                    "end": 688
                  },
                  "start": 652,
                  "end": 688
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 692,
                      "end": 693
                    },
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 698,
                        "end": 699
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 695,
                      "end": 699
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 704,
                    "end": 705
                  },
                  "id": null,
                  "generator": false,
                  "start": 691,
                  "end": 705
                },
                "definite": false,
                "start": 652,
                "end": 705
              }
            ],
            "declare": false,
            "start": 646,
            "end": 706
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
                  "name": "fn2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
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
                            "start": 726,
                            "end": 730
                          },
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNeverKeyword",
                              "start": 732,
                              "end": 737
                            },
                            "start": 730,
                            "end": 737
                          },
                          "value": null,
                          "start": 723,
                          "end": 737
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 742,
                          "end": 746
                        },
                        "start": 739,
                        "end": 746
                      },
                      "start": 722,
                      "end": 746
                    },
                    "start": 720,
                    "end": 746
                  },
                  "start": 717,
                  "end": 746
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 749,
                  "end": 752
                },
                "definite": false,
                "start": 717,
                "end": 752
              }
            ],
            "declare": false,
            "start": 711,
            "end": 753
          }
        ],
        "start": 640,
        "end": 755
      },
      "expression": false,
      "start": 586,
      "end": 755
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assignmentWithComplexRest2",
        "optional": false,
        "typeAnnotation": null,
        "start": 766,
        "end": 792
      },
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
        "start": 792,
        "end": 809
      },
      "params": [],
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
                  "name": "fn1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "cb",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 838,
                                      "end": 844
                                    },
                                    "start": 836,
                                    "end": 844
                                  },
                                  "start": 835,
                                  "end": 844
                                },
                                {
                                  "type": "RestElement",
                                  "decorators": [],
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "rest",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 849,
                                    "end": 853
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
                                        "start": 855,
                                        "end": 856
                                      },
                                      "typeArguments": null,
                                      "start": 855,
                                      "end": 856
                                    },
                                    "start": 853,
                                    "end": 856
                                  },
                                  "value": null,
                                  "start": 846,
                                  "end": 856
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSVoidKeyword",
                                  "start": 861,
                                  "end": 865
                                },
                                "start": 858,
                                "end": 865
                              },
                              "start": 834,
                              "end": 865
                            },
                            "start": 832,
                            "end": 865
                          },
                          "start": 830,
                          "end": 865
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 870,
                          "end": 874
                        },
                        "start": 867,
                        "end": 874
                      },
                      "start": 829,
                      "end": 874
                    },
                    "start": 827,
                    "end": 874
                  },
                  "start": 824,
                  "end": 874
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 878,
                      "end": 880
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 885,
                    "end": 887
                  },
                  "id": null,
                  "generator": false,
                  "start": 877,
                  "end": 887
                },
                "definite": false,
                "start": 824,
                "end": 887
              }
            ],
            "declare": false,
            "start": 818,
            "end": 888
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
                  "name": "fn2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "cb",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
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
                                    "start": 913,
                                    "end": 917
                                  },
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSNeverKeyword",
                                      "start": 919,
                                      "end": 924
                                    },
                                    "start": 917,
                                    "end": 924
                                  },
                                  "value": null,
                                  "start": 910,
                                  "end": 924
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSVoidKeyword",
                                  "start": 929,
                                  "end": 933
                                },
                                "start": 926,
                                "end": 933
                              },
                              "start": 909,
                              "end": 933
                            },
                            "start": 907,
                            "end": 933
                          },
                          "start": 905,
                          "end": 933
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 938,
                          "end": 942
                        },
                        "start": 935,
                        "end": 942
                      },
                      "start": 904,
                      "end": 942
                    },
                    "start": 902,
                    "end": 942
                  },
                  "start": 899,
                  "end": 942
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 945,
                  "end": 948
                },
                "definite": false,
                "start": 899,
                "end": 948
              }
            ],
            "declare": false,
            "start": 893,
            "end": 949
          }
        ],
        "start": 812,
        "end": 951
      },
      "expression": false,
      "start": 757,
      "end": 951
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assignmentWithComplexRest3",
        "optional": false,
        "typeAnnotation": null,
        "start": 962,
        "end": 988
      },
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 989,
              "end": 990
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 999,
                "end": 1002
              },
              "start": 999,
              "end": 1004
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 989,
            "end": 1004
          }
        ],
        "start": 988,
        "end": 1005
      },
      "params": [],
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
                  "name": "fn1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1029,
                              "end": 1035
                            },
                            "start": 1027,
                            "end": 1035
                          },
                          "start": 1026,
                          "end": 1035
                        },
                        {
                          "type": "RestElement",
                          "decorators": [],
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "rest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1040,
                            "end": 1044
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
                                "start": 1046,
                                "end": 1047
                              },
                              "typeArguments": null,
                              "start": 1046,
                              "end": 1047
                            },
                            "start": 1044,
                            "end": 1047
                          },
                          "value": null,
                          "start": 1037,
                          "end": 1047
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1052,
                          "end": 1056
                        },
                        "start": 1049,
                        "end": 1056
                      },
                      "start": 1025,
                      "end": 1056
                    },
                    "start": 1023,
                    "end": 1056
                  },
                  "start": 1020,
                  "end": 1056
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1060,
                      "end": 1061
                    },
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1066,
                        "end": 1067
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 1063,
                      "end": 1067
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1072,
                    "end": 1073
                  },
                  "id": null,
                  "generator": false,
                  "start": 1059,
                  "end": 1073
                },
                "definite": false,
                "start": 1020,
                "end": 1073
              }
            ],
            "declare": false,
            "start": 1014,
            "end": 1074
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
                  "name": "fn2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
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
                            "start": 1094,
                            "end": 1098
                          },
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSIntersectionType",
                              "types": [
                                {
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
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1101,
                                        "end": 1102
                                      },
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "typeAnnotation": {
                                          "type": "TSLiteralType",
                                          "literal": {
                                            "type": "Literal",
                                            "value": "a",
                                            "raw": "\"a\"",
                                            "start": 1104,
                                            "end": 1107
                                          },
                                          "start": 1104,
                                          "end": 1107
                                        },
                                        "start": 1102,
                                        "end": 1107
                                      },
                                      "accessibility": null,
                                      "static": false,
                                      "start": 1101,
                                      "end": 1107
                                    }
                                  ],
                                  "start": 1100,
                                  "end": 1108
                                },
                                {
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
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1112,
                                        "end": 1113
                                      },
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "typeAnnotation": {
                                          "type": "TSLiteralType",
                                          "literal": {
                                            "type": "Literal",
                                            "value": "b",
                                            "raw": "\"b\"",
                                            "start": 1115,
                                            "end": 1118
                                          },
                                          "start": 1115,
                                          "end": 1118
                                        },
                                        "start": 1113,
                                        "end": 1118
                                      },
                                      "accessibility": null,
                                      "static": false,
                                      "start": 1112,
                                      "end": 1118
                                    }
                                  ],
                                  "start": 1111,
                                  "end": 1119
                                }
                              ],
                              "start": 1100,
                              "end": 1119
                            },
                            "start": 1098,
                            "end": 1119
                          },
                          "value": null,
                          "start": 1091,
                          "end": 1119
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1124,
                          "end": 1128
                        },
                        "start": 1121,
                        "end": 1128
                      },
                      "start": 1090,
                      "end": 1128
                    },
                    "start": 1088,
                    "end": 1128
                  },
                  "start": 1085,
                  "end": 1128
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1131,
                  "end": 1134
                },
                "definite": false,
                "start": 1085,
                "end": 1134
              }
            ],
            "declare": false,
            "start": 1079,
            "end": 1135
          }
        ],
        "start": 1008,
        "end": 1137
      },
      "expression": false,
      "start": 953,
      "end": 1137
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 117,
  "end": 1137
}
```
