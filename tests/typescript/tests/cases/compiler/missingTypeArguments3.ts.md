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
        "name": "linq",
        "optional": false,
        "typeAnnotation": null,
        "start": 15,
        "end": 19
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Enumerable",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 47
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
                    "start": 48,
                    "end": 49
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 48,
                  "end": 49
                }
              ],
              "start": 47,
              "end": 50
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
                    "name": "OrderByDescending",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 61,
                    "end": 78
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "keySelector",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 93,
                          "end": 99
                        },
                        "start": 91,
                        "end": 99
                      },
                      "start": 79,
                      "end": 99
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "OrderedEnumerable",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 102,
                        "end": 119
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
                              "start": 120,
                              "end": 121
                            },
                            "typeArguments": null,
                            "start": 120,
                            "end": 121
                          }
                        ],
                        "start": 119,
                        "end": 122
                      },
                      "start": 102,
                      "end": 122
                    },
                    "start": 100,
                    "end": 122
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 61,
                  "end": 123
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "GroupBy",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 132,
                    "end": 139
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TKey",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 140,
                          "end": 144
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 140,
                        "end": 144
                      }
                    ],
                    "start": 139,
                    "end": 145
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "keySelector",
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
                              "name": "element",
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
                                    "start": 169,
                                    "end": 170
                                  },
                                  "typeArguments": null,
                                  "start": 169,
                                  "end": 170
                                },
                                "start": 167,
                                "end": 170
                              },
                              "start": 160,
                              "end": 170
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TKey",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 175,
                                "end": 179
                              },
                              "typeArguments": null,
                              "start": 175,
                              "end": 179
                            },
                            "start": 172,
                            "end": 179
                          },
                          "start": 159,
                          "end": 179
                        },
                        "start": 157,
                        "end": 179
                      },
                      "start": 146,
                      "end": 179
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Enumerable",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 182,
                        "end": 192
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Grouping",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 193,
                              "end": 201
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "TKey",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 202,
                                    "end": 206
                                  },
                                  "typeArguments": null,
                                  "start": 202,
                                  "end": 206
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 208,
                                    "end": 209
                                  },
                                  "typeArguments": null,
                                  "start": 208,
                                  "end": 209
                                }
                              ],
                              "start": 201,
                              "end": 210
                            },
                            "start": 193,
                            "end": 210
                          }
                        ],
                        "start": 192,
                        "end": 211
                      },
                      "start": 182,
                      "end": 211
                    },
                    "start": 180,
                    "end": 211
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 132,
                  "end": 212
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "GroupBy",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 221,
                    "end": 228
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TKey",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 229,
                          "end": 233
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 229,
                        "end": 233
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TElement",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 235,
                          "end": 243
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 235,
                        "end": 243
                      }
                    ],
                    "start": 228,
                    "end": 244
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "keySelector",
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
                              "name": "element",
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
                                    "start": 268,
                                    "end": 269
                                  },
                                  "typeArguments": null,
                                  "start": 268,
                                  "end": 269
                                },
                                "start": 266,
                                "end": 269
                              },
                              "start": 259,
                              "end": 269
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TKey",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 274,
                                "end": 278
                              },
                              "typeArguments": null,
                              "start": 274,
                              "end": 278
                            },
                            "start": 271,
                            "end": 278
                          },
                          "start": 258,
                          "end": 278
                        },
                        "start": 256,
                        "end": 278
                      },
                      "start": 245,
                      "end": 278
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "elementSelector",
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
                              "name": "element",
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
                                    "start": 307,
                                    "end": 308
                                  },
                                  "typeArguments": null,
                                  "start": 307,
                                  "end": 308
                                },
                                "start": 305,
                                "end": 308
                              },
                              "start": 298,
                              "end": 308
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TElement",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 313,
                                "end": 321
                              },
                              "typeArguments": null,
                              "start": 313,
                              "end": 321
                            },
                            "start": 310,
                            "end": 321
                          },
                          "start": 297,
                          "end": 321
                        },
                        "start": 295,
                        "end": 321
                      },
                      "start": 280,
                      "end": 321
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Enumerable",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 324,
                        "end": 334
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Grouping",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 335,
                              "end": 343
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "TKey",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 344,
                                    "end": 348
                                  },
                                  "typeArguments": null,
                                  "start": 344,
                                  "end": 348
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "TElement",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 350,
                                    "end": 358
                                  },
                                  "typeArguments": null,
                                  "start": 350,
                                  "end": 358
                                }
                              ],
                              "start": 343,
                              "end": 359
                            },
                            "start": 335,
                            "end": 359
                          }
                        ],
                        "start": 334,
                        "end": 360
                      },
                      "start": 324,
                      "end": 360
                    },
                    "start": 322,
                    "end": 360
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 221,
                  "end": 361
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ToDictionary",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 370,
                    "end": 382
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TKey",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 383,
                          "end": 387
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 383,
                        "end": 387
                      }
                    ],
                    "start": 382,
                    "end": 388
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "keySelector",
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
                              "name": "element",
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
                                    "start": 412,
                                    "end": 413
                                  },
                                  "typeArguments": null,
                                  "start": 412,
                                  "end": 413
                                },
                                "start": 410,
                                "end": 413
                              },
                              "start": 403,
                              "end": 413
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TKey",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 418,
                                "end": 422
                              },
                              "typeArguments": null,
                              "start": 418,
                              "end": 422
                            },
                            "start": 415,
                            "end": 422
                          },
                          "start": 402,
                          "end": 422
                        },
                        "start": 400,
                        "end": 422
                      },
                      "start": 389,
                      "end": 422
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Dictionary",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 425,
                        "end": 435
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TKey",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 436,
                              "end": 440
                            },
                            "typeArguments": null,
                            "start": 436,
                            "end": 440
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 442,
                              "end": 443
                            },
                            "typeArguments": null,
                            "start": 442,
                            "end": 443
                          }
                        ],
                        "start": 435,
                        "end": 444
                      },
                      "start": 425,
                      "end": 444
                    },
                    "start": 423,
                    "end": 444
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 370,
                  "end": 445
                }
              ],
              "start": 51,
              "end": 451
            },
            "declare": false,
            "start": 27,
            "end": 451
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "OrderedEnumerable",
              "optional": false,
              "typeAnnotation": null,
              "start": 467,
              "end": 484
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
                    "start": 485,
                    "end": 486
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 485,
                  "end": 486
                }
              ],
              "start": 484,
              "end": 487
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Enumerable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 496,
                  "end": 506
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
                        "start": 507,
                        "end": 508
                      },
                      "typeArguments": null,
                      "start": 507,
                      "end": 508
                    }
                  ],
                  "start": 506,
                  "end": 509
                },
                "start": 496,
                "end": 509
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ThenBy",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 520,
                    "end": 526
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TCompare",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 527,
                          "end": 535
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 527,
                        "end": 535
                      }
                    ],
                    "start": 526,
                    "end": 536
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "keySelector",
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
                              "name": "element",
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
                                    "start": 560,
                                    "end": 561
                                  },
                                  "typeArguments": null,
                                  "start": 560,
                                  "end": 561
                                },
                                "start": 558,
                                "end": 561
                              },
                              "start": 551,
                              "end": 561
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TCompare",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 566,
                                "end": 574
                              },
                              "typeArguments": null,
                              "start": 566,
                              "end": 574
                            },
                            "start": 563,
                            "end": 574
                          },
                          "start": 550,
                          "end": 574
                        },
                        "start": 548,
                        "end": 574
                      },
                      "start": 537,
                      "end": 574
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "OrderedEnumerable",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 577,
                        "end": 594
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
                              "start": 595,
                              "end": 596
                            },
                            "typeArguments": null,
                            "start": 595,
                            "end": 596
                          }
                        ],
                        "start": 594,
                        "end": 597
                      },
                      "start": 577,
                      "end": 597
                    },
                    "start": 575,
                    "end": 597
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 520,
                  "end": 598
                }
              ],
              "start": 510,
              "end": 666
            },
            "declare": false,
            "start": 457,
            "end": 666
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Grouping",
              "optional": false,
              "typeAnnotation": null,
              "start": 682,
              "end": 690
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TKey",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 691,
                    "end": 695
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 691,
                  "end": 695
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TElement",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 697,
                    "end": 705
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 697,
                  "end": 705
                }
              ],
              "start": 690,
              "end": 706
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Enumerable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 715,
                  "end": 725
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TElement",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 726,
                        "end": 734
                      },
                      "typeArguments": null,
                      "start": 726,
                      "end": 734
                    }
                  ],
                  "start": 725,
                  "end": 735
                },
                "start": 715,
                "end": 735
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 746,
                    "end": 749
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TKey",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 753,
                        "end": 757
                      },
                      "typeArguments": null,
                      "start": 753,
                      "end": 757
                    },
                    "start": 751,
                    "end": 757
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 746,
                  "end": 758
                }
              ],
              "start": 736,
              "end": 764
            },
            "declare": false,
            "start": 672,
            "end": 764
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Lookup",
              "optional": false,
              "typeAnnotation": null,
              "start": 780,
              "end": 786
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TKey",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 787,
                    "end": 791
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 787,
                  "end": 791
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TElement",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 793,
                    "end": 801
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 793,
                  "end": 801
                }
              ],
              "start": 786,
              "end": 802
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
                    "name": "Count",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 813,
                    "end": 818
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 822,
                      "end": 828
                    },
                    "start": 820,
                    "end": 828
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 813,
                  "end": 829
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Get",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 838,
                    "end": 841
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 842,
                      "end": 845
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Enumerable",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 848,
                        "end": 858
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSAnyKeyword",
                            "start": 859,
                            "end": 862
                          }
                        ],
                        "start": 858,
                        "end": 863
                      },
                      "start": 848,
                      "end": 863
                    },
                    "start": 846,
                    "end": 863
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 838,
                  "end": 864
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Contains",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 873,
                    "end": 881
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 882,
                      "end": 885
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 888,
                      "end": 895
                    },
                    "start": 886,
                    "end": 895
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 873,
                  "end": 896
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ToEnumerable",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 905,
                    "end": 917
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Enumerable",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 921,
                        "end": 931
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Grouping",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 932,
                              "end": 940
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "TKey",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 941,
                                    "end": 945
                                  },
                                  "typeArguments": null,
                                  "start": 941,
                                  "end": 945
                                },
                                {
                                  "type": "TSAnyKeyword",
                                  "start": 947,
                                  "end": 950
                                }
                              ],
                              "start": 940,
                              "end": 951
                            },
                            "start": 932,
                            "end": 951
                          }
                        ],
                        "start": 931,
                        "end": 952
                      },
                      "start": 921,
                      "end": 952
                    },
                    "start": 919,
                    "end": 952
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 905,
                  "end": 953
                }
              ],
              "start": 803,
              "end": 959
            },
            "declare": false,
            "start": 770,
            "end": 959
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Dictionary",
              "optional": false,
              "typeAnnotation": null,
              "start": 975,
              "end": 985
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TKey",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 986,
                    "end": 990
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 986,
                  "end": 990
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 992,
                    "end": 998
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 992,
                  "end": 998
                }
              ],
              "start": 985,
              "end": 999
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
                    "name": "Add",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1010,
                    "end": 1013
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TKey",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1019,
                            "end": 1023
                          },
                          "typeArguments": null,
                          "start": 1019,
                          "end": 1023
                        },
                        "start": 1017,
                        "end": 1023
                      },
                      "start": 1014,
                      "end": 1023
                    },
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
                            "name": "TValue",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1032,
                            "end": 1038
                          },
                          "typeArguments": null,
                          "start": 1032,
                          "end": 1038
                        },
                        "start": 1030,
                        "end": 1038
                      },
                      "start": 1025,
                      "end": 1038
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 1041,
                      "end": 1045
                    },
                    "start": 1039,
                    "end": 1045
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1010,
                  "end": 1046
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Get",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1055,
                    "end": 1058
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ke",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TKey",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1063,
                            "end": 1067
                          },
                          "typeArguments": null,
                          "start": 1063,
                          "end": 1067
                        },
                        "start": 1061,
                        "end": 1067
                      },
                      "start": 1059,
                      "end": 1067
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TValue",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1070,
                        "end": 1076
                      },
                      "typeArguments": null,
                      "start": 1070,
                      "end": 1076
                    },
                    "start": 1068,
                    "end": 1076
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1055,
                  "end": 1077
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Set",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1086,
                    "end": 1089
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TKey",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1095,
                            "end": 1099
                          },
                          "typeArguments": null,
                          "start": 1095,
                          "end": 1099
                        },
                        "start": 1093,
                        "end": 1099
                      },
                      "start": 1090,
                      "end": 1099
                    },
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
                            "name": "TValue",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1108,
                            "end": 1114
                          },
                          "typeArguments": null,
                          "start": 1108,
                          "end": 1114
                        },
                        "start": 1106,
                        "end": 1114
                      },
                      "start": 1101,
                      "end": 1114
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 1117,
                      "end": 1124
                    },
                    "start": 1115,
                    "end": 1124
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1086,
                  "end": 1125
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Contains",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1134,
                    "end": 1142
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TKey",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1148,
                            "end": 1152
                          },
                          "typeArguments": null,
                          "start": 1148,
                          "end": 1152
                        },
                        "start": 1146,
                        "end": 1152
                      },
                      "start": 1143,
                      "end": 1152
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 1155,
                      "end": 1162
                    },
                    "start": 1153,
                    "end": 1162
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1134,
                  "end": 1163
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Clear",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1172,
                    "end": 1177
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 1181,
                      "end": 1185
                    },
                    "start": 1179,
                    "end": 1185
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1172,
                  "end": 1186
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Remove",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1195,
                    "end": 1201
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TKey",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1207,
                            "end": 1211
                          },
                          "typeArguments": null,
                          "start": 1207,
                          "end": 1211
                        },
                        "start": 1205,
                        "end": 1211
                      },
                      "start": 1202,
                      "end": 1211
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 1214,
                      "end": 1218
                    },
                    "start": 1212,
                    "end": 1218
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1195,
                  "end": 1219
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Count",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1228,
                    "end": 1233
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1237,
                      "end": 1243
                    },
                    "start": 1235,
                    "end": 1243
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1228,
                  "end": 1244
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ToEnumerable",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1253,
                    "end": 1265
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Enumerable",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1269,
                        "end": 1279
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "KeyValuePair",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1280,
                              "end": 1292
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "TKey",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1293,
                                    "end": 1297
                                  },
                                  "typeArguments": null,
                                  "start": 1293,
                                  "end": 1297
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "TValue",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1299,
                                    "end": 1305
                                  },
                                  "typeArguments": null,
                                  "start": 1299,
                                  "end": 1305
                                }
                              ],
                              "start": 1292,
                              "end": 1306
                            },
                            "start": 1280,
                            "end": 1306
                          }
                        ],
                        "start": 1279,
                        "end": 1307
                      },
                      "start": 1269,
                      "end": 1307
                    },
                    "start": 1267,
                    "end": 1307
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1253,
                  "end": 1308
                }
              ],
              "start": 1000,
              "end": 1314
            },
            "declare": false,
            "start": 965,
            "end": 1314
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "KeyValuePair",
              "optional": false,
              "typeAnnotation": null,
              "start": 1330,
              "end": 1342
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TKey",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1343,
                    "end": 1347
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1343,
                  "end": 1347
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1349,
                    "end": 1355
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1349,
                  "end": 1355
                }
              ],
              "start": 1342,
              "end": 1356
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
                    "name": "Key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1367,
                    "end": 1370
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TKey",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1372,
                        "end": 1376
                      },
                      "typeArguments": null,
                      "start": 1372,
                      "end": 1376
                    },
                    "start": 1370,
                    "end": 1376
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1367,
                  "end": 1377
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1386,
                    "end": 1391
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TValue",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1393,
                        "end": 1399
                      },
                      "typeArguments": null,
                      "start": 1393,
                      "end": 1399
                    },
                    "start": 1391,
                    "end": 1399
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1386,
                  "end": 1400
                }
              ],
              "start": 1357,
              "end": 1406
            },
            "declare": false,
            "start": 1320,
            "end": 1406
          }
        ],
        "start": 20,
        "end": 1408
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 1408
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1408
}
```
