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
        "start": 18,
        "end": 22
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
              "start": 40,
              "end": 50
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
                    "start": 51,
                    "end": 52
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 51,
                  "end": 52
                }
              ],
              "start": 50,
              "end": 53
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
                    "start": 64,
                    "end": 81
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
                          "start": 96,
                          "end": 102
                        },
                        "start": 94,
                        "end": 102
                      },
                      "start": 82,
                      "end": 102
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
                        "start": 105,
                        "end": 122
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
                              "start": 123,
                              "end": 124
                            },
                            "typeArguments": null,
                            "start": 123,
                            "end": 124
                          }
                        ],
                        "start": 122,
                        "end": 125
                      },
                      "start": 105,
                      "end": 125
                    },
                    "start": 103,
                    "end": 125
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 64,
                  "end": 126
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "GroupBy",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 135,
                    "end": 142
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
                          "start": 143,
                          "end": 147
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 143,
                        "end": 147
                      }
                    ],
                    "start": 142,
                    "end": 148
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
                                    "start": 172,
                                    "end": 173
                                  },
                                  "typeArguments": null,
                                  "start": 172,
                                  "end": 173
                                },
                                "start": 170,
                                "end": 173
                              },
                              "start": 163,
                              "end": 173
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
                                "start": 178,
                                "end": 182
                              },
                              "typeArguments": null,
                              "start": 178,
                              "end": 182
                            },
                            "start": 175,
                            "end": 182
                          },
                          "start": 162,
                          "end": 182
                        },
                        "start": 160,
                        "end": 182
                      },
                      "start": 149,
                      "end": 182
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
                        "start": 185,
                        "end": 195
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
                              "start": 196,
                              "end": 204
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
                                    "start": 205,
                                    "end": 209
                                  },
                                  "typeArguments": null,
                                  "start": 205,
                                  "end": 209
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 211,
                                    "end": 212
                                  },
                                  "typeArguments": null,
                                  "start": 211,
                                  "end": 212
                                }
                              ],
                              "start": 204,
                              "end": 213
                            },
                            "start": 196,
                            "end": 213
                          }
                        ],
                        "start": 195,
                        "end": 214
                      },
                      "start": 185,
                      "end": 214
                    },
                    "start": 183,
                    "end": 214
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 135,
                  "end": 215
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "GroupBy",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 224,
                    "end": 231
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
                          "start": 232,
                          "end": 236
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 232,
                        "end": 236
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TElement",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 238,
                          "end": 246
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 238,
                        "end": 246
                      }
                    ],
                    "start": 231,
                    "end": 247
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
                                    "start": 271,
                                    "end": 272
                                  },
                                  "typeArguments": null,
                                  "start": 271,
                                  "end": 272
                                },
                                "start": 269,
                                "end": 272
                              },
                              "start": 262,
                              "end": 272
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
                                "start": 277,
                                "end": 281
                              },
                              "typeArguments": null,
                              "start": 277,
                              "end": 281
                            },
                            "start": 274,
                            "end": 281
                          },
                          "start": 261,
                          "end": 281
                        },
                        "start": 259,
                        "end": 281
                      },
                      "start": 248,
                      "end": 281
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
                                    "start": 310,
                                    "end": 311
                                  },
                                  "typeArguments": null,
                                  "start": 310,
                                  "end": 311
                                },
                                "start": 308,
                                "end": 311
                              },
                              "start": 301,
                              "end": 311
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
                                "start": 316,
                                "end": 324
                              },
                              "typeArguments": null,
                              "start": 316,
                              "end": 324
                            },
                            "start": 313,
                            "end": 324
                          },
                          "start": 300,
                          "end": 324
                        },
                        "start": 298,
                        "end": 324
                      },
                      "start": 283,
                      "end": 324
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
                        "start": 327,
                        "end": 337
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
                              "start": 338,
                              "end": 346
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
                                    "start": 347,
                                    "end": 351
                                  },
                                  "typeArguments": null,
                                  "start": 347,
                                  "end": 351
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "TElement",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 353,
                                    "end": 361
                                  },
                                  "typeArguments": null,
                                  "start": 353,
                                  "end": 361
                                }
                              ],
                              "start": 346,
                              "end": 362
                            },
                            "start": 338,
                            "end": 362
                          }
                        ],
                        "start": 337,
                        "end": 363
                      },
                      "start": 327,
                      "end": 363
                    },
                    "start": 325,
                    "end": 363
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 224,
                  "end": 364
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ToDictionary",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 373,
                    "end": 385
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
                          "start": 386,
                          "end": 390
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 386,
                        "end": 390
                      }
                    ],
                    "start": 385,
                    "end": 391
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
                                    "start": 415,
                                    "end": 416
                                  },
                                  "typeArguments": null,
                                  "start": 415,
                                  "end": 416
                                },
                                "start": 413,
                                "end": 416
                              },
                              "start": 406,
                              "end": 416
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
                                "start": 421,
                                "end": 425
                              },
                              "typeArguments": null,
                              "start": 421,
                              "end": 425
                            },
                            "start": 418,
                            "end": 425
                          },
                          "start": 405,
                          "end": 425
                        },
                        "start": 403,
                        "end": 425
                      },
                      "start": 392,
                      "end": 425
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
                        "start": 428,
                        "end": 438
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
                              "start": 439,
                              "end": 443
                            },
                            "typeArguments": null,
                            "start": 439,
                            "end": 443
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 445,
                              "end": 446
                            },
                            "typeArguments": null,
                            "start": 445,
                            "end": 446
                          }
                        ],
                        "start": 438,
                        "end": 447
                      },
                      "start": 428,
                      "end": 447
                    },
                    "start": 426,
                    "end": 447
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 373,
                  "end": 448
                }
              ],
              "start": 54,
              "end": 454
            },
            "declare": false,
            "start": 30,
            "end": 454
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "OrderedEnumerable",
              "optional": false,
              "typeAnnotation": null,
              "start": 470,
              "end": 487
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
                    "start": 488,
                    "end": 489
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 488,
                  "end": 489
                }
              ],
              "start": 487,
              "end": 490
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
                  "start": 499,
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 510,
                        "end": 511
                      },
                      "typeArguments": null,
                      "start": 510,
                      "end": 511
                    }
                  ],
                  "start": 509,
                  "end": 512
                },
                "start": 499,
                "end": 512
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
                    "start": 523,
                    "end": 529
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
                          "start": 530,
                          "end": 538
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 530,
                        "end": 538
                      }
                    ],
                    "start": 529,
                    "end": 539
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
                                    "start": 563,
                                    "end": 564
                                  },
                                  "typeArguments": null,
                                  "start": 563,
                                  "end": 564
                                },
                                "start": 561,
                                "end": 564
                              },
                              "start": 554,
                              "end": 564
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
                                "start": 569,
                                "end": 577
                              },
                              "typeArguments": null,
                              "start": 569,
                              "end": 577
                            },
                            "start": 566,
                            "end": 577
                          },
                          "start": 553,
                          "end": 577
                        },
                        "start": 551,
                        "end": 577
                      },
                      "start": 540,
                      "end": 577
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
                        "start": 580,
                        "end": 597
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
                              "start": 598,
                              "end": 599
                            },
                            "typeArguments": null,
                            "start": 598,
                            "end": 599
                          }
                        ],
                        "start": 597,
                        "end": 600
                      },
                      "start": 580,
                      "end": 600
                    },
                    "start": 578,
                    "end": 600
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 523,
                  "end": 601
                }
              ],
              "start": 513,
              "end": 669
            },
            "declare": false,
            "start": 460,
            "end": 669
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Grouping",
              "optional": false,
              "typeAnnotation": null,
              "start": 685,
              "end": 693
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
                    "start": 694,
                    "end": 698
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 694,
                  "end": 698
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TElement",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 700,
                    "end": 708
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 700,
                  "end": 708
                }
              ],
              "start": 693,
              "end": 709
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
                  "start": 718,
                  "end": 728
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
                        "start": 729,
                        "end": 737
                      },
                      "typeArguments": null,
                      "start": 729,
                      "end": 737
                    }
                  ],
                  "start": 728,
                  "end": 738
                },
                "start": 718,
                "end": 738
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
                    "start": 749,
                    "end": 752
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
                        "start": 756,
                        "end": 760
                      },
                      "typeArguments": null,
                      "start": 756,
                      "end": 760
                    },
                    "start": 754,
                    "end": 760
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 749,
                  "end": 761
                }
              ],
              "start": 739,
              "end": 767
            },
            "declare": false,
            "start": 675,
            "end": 767
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Lookup",
              "optional": false,
              "typeAnnotation": null,
              "start": 783,
              "end": 789
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
                    "start": 790,
                    "end": 794
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 790,
                  "end": 794
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TElement",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 796,
                    "end": 804
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 796,
                  "end": 804
                }
              ],
              "start": 789,
              "end": 805
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
                    "start": 816,
                    "end": 821
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
                      "start": 825,
                      "end": 831
                    },
                    "start": 823,
                    "end": 831
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 816,
                  "end": 832
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Get",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 841,
                    "end": 844
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
                      "start": 845,
                      "end": 848
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
                        "start": 851,
                        "end": 861
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSAnyKeyword",
                            "start": 862,
                            "end": 865
                          }
                        ],
                        "start": 861,
                        "end": 866
                      },
                      "start": 851,
                      "end": 866
                    },
                    "start": 849,
                    "end": 866
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 841,
                  "end": 867
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Contains",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 876,
                    "end": 884
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
                      "start": 885,
                      "end": 888
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 891,
                      "end": 898
                    },
                    "start": 889,
                    "end": 898
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 876,
                  "end": 899
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ToEnumerable",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 908,
                    "end": 920
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
                        "start": 924,
                        "end": 934
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
                              "start": 935,
                              "end": 943
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
                                    "start": 944,
                                    "end": 948
                                  },
                                  "typeArguments": null,
                                  "start": 944,
                                  "end": 948
                                },
                                {
                                  "type": "TSAnyKeyword",
                                  "start": 950,
                                  "end": 953
                                }
                              ],
                              "start": 943,
                              "end": 954
                            },
                            "start": 935,
                            "end": 954
                          }
                        ],
                        "start": 934,
                        "end": 955
                      },
                      "start": 924,
                      "end": 955
                    },
                    "start": 922,
                    "end": 955
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 908,
                  "end": 956
                }
              ],
              "start": 806,
              "end": 962
            },
            "declare": false,
            "start": 773,
            "end": 962
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Dictionary",
              "optional": false,
              "typeAnnotation": null,
              "start": 978,
              "end": 988
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
                    "start": 989,
                    "end": 993
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 989,
                  "end": 993
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 995,
                    "end": 1001
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 995,
                  "end": 1001
                }
              ],
              "start": 988,
              "end": 1002
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
                    "start": 1013,
                    "end": 1016
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
                            "start": 1022,
                            "end": 1026
                          },
                          "typeArguments": null,
                          "start": 1022,
                          "end": 1026
                        },
                        "start": 1020,
                        "end": 1026
                      },
                      "start": 1017,
                      "end": 1026
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
                            "start": 1035,
                            "end": 1041
                          },
                          "typeArguments": null,
                          "start": 1035,
                          "end": 1041
                        },
                        "start": 1033,
                        "end": 1041
                      },
                      "start": 1028,
                      "end": 1041
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 1044,
                      "end": 1048
                    },
                    "start": 1042,
                    "end": 1048
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1013,
                  "end": 1049
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Get",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1058,
                    "end": 1061
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
                            "start": 1066,
                            "end": 1070
                          },
                          "typeArguments": null,
                          "start": 1066,
                          "end": 1070
                        },
                        "start": 1064,
                        "end": 1070
                      },
                      "start": 1062,
                      "end": 1070
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
                        "start": 1073,
                        "end": 1079
                      },
                      "typeArguments": null,
                      "start": 1073,
                      "end": 1079
                    },
                    "start": 1071,
                    "end": 1079
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1058,
                  "end": 1080
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Set",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1089,
                    "end": 1092
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
                            "start": 1098,
                            "end": 1102
                          },
                          "typeArguments": null,
                          "start": 1098,
                          "end": 1102
                        },
                        "start": 1096,
                        "end": 1102
                      },
                      "start": 1093,
                      "end": 1102
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
                            "start": 1111,
                            "end": 1117
                          },
                          "typeArguments": null,
                          "start": 1111,
                          "end": 1117
                        },
                        "start": 1109,
                        "end": 1117
                      },
                      "start": 1104,
                      "end": 1117
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 1120,
                      "end": 1127
                    },
                    "start": 1118,
                    "end": 1127
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1089,
                  "end": 1128
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Contains",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1137,
                    "end": 1145
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
                            "start": 1151,
                            "end": 1155
                          },
                          "typeArguments": null,
                          "start": 1151,
                          "end": 1155
                        },
                        "start": 1149,
                        "end": 1155
                      },
                      "start": 1146,
                      "end": 1155
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 1158,
                      "end": 1165
                    },
                    "start": 1156,
                    "end": 1165
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1137,
                  "end": 1166
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Clear",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1175,
                    "end": 1180
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
                      "start": 1184,
                      "end": 1188
                    },
                    "start": 1182,
                    "end": 1188
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1175,
                  "end": 1189
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Remove",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1198,
                    "end": 1204
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
                            "start": 1210,
                            "end": 1214
                          },
                          "typeArguments": null,
                          "start": 1210,
                          "end": 1214
                        },
                        "start": 1208,
                        "end": 1214
                      },
                      "start": 1205,
                      "end": 1214
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 1217,
                      "end": 1221
                    },
                    "start": 1215,
                    "end": 1221
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1198,
                  "end": 1222
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Count",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1231,
                    "end": 1236
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
                      "start": 1240,
                      "end": 1246
                    },
                    "start": 1238,
                    "end": 1246
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1231,
                  "end": 1247
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ToEnumerable",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1256,
                    "end": 1268
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
                        "start": 1272,
                        "end": 1282
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
                              "start": 1283,
                              "end": 1295
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
                                    "start": 1296,
                                    "end": 1300
                                  },
                                  "typeArguments": null,
                                  "start": 1296,
                                  "end": 1300
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "TValue",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1302,
                                    "end": 1308
                                  },
                                  "typeArguments": null,
                                  "start": 1302,
                                  "end": 1308
                                }
                              ],
                              "start": 1295,
                              "end": 1309
                            },
                            "start": 1283,
                            "end": 1309
                          }
                        ],
                        "start": 1282,
                        "end": 1310
                      },
                      "start": 1272,
                      "end": 1310
                    },
                    "start": 1270,
                    "end": 1310
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1256,
                  "end": 1311
                }
              ],
              "start": 1003,
              "end": 1317
            },
            "declare": false,
            "start": 968,
            "end": 1317
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "KeyValuePair",
              "optional": false,
              "typeAnnotation": null,
              "start": 1333,
              "end": 1345
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
                    "start": 1346,
                    "end": 1350
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1346,
                  "end": 1350
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1352,
                    "end": 1358
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1352,
                  "end": 1358
                }
              ],
              "start": 1345,
              "end": 1359
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
                    "start": 1370,
                    "end": 1373
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
                        "start": 1375,
                        "end": 1379
                      },
                      "typeArguments": null,
                      "start": 1375,
                      "end": 1379
                    },
                    "start": 1373,
                    "end": 1379
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1370,
                  "end": 1380
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
                    "start": 1389,
                    "end": 1394
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
                        "start": 1396,
                        "end": 1402
                      },
                      "typeArguments": null,
                      "start": 1396,
                      "end": 1402
                    },
                    "start": 1394,
                    "end": 1402
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1389,
                  "end": 1403
                }
              ],
              "start": 1360,
              "end": 1409
            },
            "declare": false,
            "start": 1323,
            "end": 1409
          }
        ],
        "start": 23,
        "end": 1411
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 1411
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1411
}
```
