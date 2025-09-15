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
        "name": "TypeScript",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 28
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IIndexable",
              "optional": false,
              "typeAnnotation": null,
              "start": 45,
              "end": 55
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
                    "start": 56,
                    "end": 57
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 56,
                  "end": 57
                }
              ],
              "start": 55,
              "end": 58
            },
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 73,
                          "end": 79
                        },
                        "start": 71,
                        "end": 79
                      },
                      "start": 70,
                      "end": 79
                    }
                  ],
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
                        "start": 82,
                        "end": 83
                      },
                      "typeArguments": null,
                      "start": 82,
                      "end": 83
                    },
                    "start": 80,
                    "end": 83
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 69,
                  "end": 84
                }
              ],
              "start": 59,
              "end": 90
            },
            "declare": false,
            "start": 35,
            "end": 90
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "createIntrinsicsObject",
              "optional": false,
              "typeAnnotation": null,
              "start": 104,
              "end": 126
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
                    "start": 127,
                    "end": 128
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 127,
                  "end": 128
                }
              ],
              "start": 126,
              "end": 129
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IIndexable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 133,
                  "end": 143
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
                        "start": 144,
                        "end": 145
                      },
                      "typeArguments": null,
                      "start": 144,
                      "end": 145
                    }
                  ],
                  "start": 143,
                  "end": 146
                },
                "start": 133,
                "end": 146
              },
              "start": 131,
              "end": 146
            },
            "body": null,
            "expression": false,
            "start": 95,
            "end": 147
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IHashTable",
              "optional": false,
              "typeAnnotation": null,
              "start": 162,
              "end": 172
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
                    "start": 173,
                    "end": 174
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 173,
                  "end": 174
                }
              ],
              "start": 172,
              "end": 175
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
                    "name": "getAllKeys",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 186,
                    "end": 196
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 200,
                        "end": 206
                      },
                      "start": 200,
                      "end": 208
                    },
                    "start": 198,
                    "end": 208
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 186,
                  "end": 209
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "add",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 218,
                    "end": 221
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
                          "type": "TSStringKeyword",
                          "start": 227,
                          "end": 233
                        },
                        "start": 225,
                        "end": 233
                      },
                      "start": 222,
                      "end": 233
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
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
                            "start": 241,
                            "end": 242
                          },
                          "typeArguments": null,
                          "start": 241,
                          "end": 242
                        },
                        "start": 239,
                        "end": 242
                      },
                      "start": 235,
                      "end": 242
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 245,
                      "end": 252
                    },
                    "start": 243,
                    "end": 252
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 218,
                  "end": 253
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "addOrUpdate",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 262,
                    "end": 273
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
                          "type": "TSStringKeyword",
                          "start": 279,
                          "end": 285
                        },
                        "start": 277,
                        "end": 285
                      },
                      "start": 274,
                      "end": 285
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
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
                            "start": 293,
                            "end": 294
                          },
                          "typeArguments": null,
                          "start": 293,
                          "end": 294
                        },
                        "start": 291,
                        "end": 294
                      },
                      "start": 287,
                      "end": 294
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 297,
                      "end": 304
                    },
                    "start": 295,
                    "end": 304
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 262,
                  "end": 305
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "map",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 314,
                    "end": 317
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fn",
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
                              "name": "k",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 326,
                                  "end": 332
                                },
                                "start": 324,
                                "end": 332
                              },
                              "start": 323,
                              "end": 332
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
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 341,
                                    "end": 342
                                  },
                                  "typeArguments": null,
                                  "start": 341,
                                  "end": 342
                                },
                                "start": 339,
                                "end": 342
                              },
                              "start": 334,
                              "end": 342
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "context",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 353,
                                  "end": 356
                                },
                                "start": 351,
                                "end": 356
                              },
                              "start": 344,
                              "end": 356
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 361,
                              "end": 365
                            },
                            "start": 358,
                            "end": 365
                          },
                          "start": 322,
                          "end": 365
                        },
                        "start": 320,
                        "end": 365
                      },
                      "start": 318,
                      "end": 365
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "context",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 376,
                          "end": 379
                        },
                        "start": 374,
                        "end": 379
                      },
                      "start": 367,
                      "end": 379
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 382,
                      "end": 386
                    },
                    "start": 380,
                    "end": 386
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 314,
                  "end": 387
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "every",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 396,
                    "end": 401
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fn",
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
                              "name": "k",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 410,
                                  "end": 416
                                },
                                "start": 408,
                                "end": 416
                              },
                              "start": 407,
                              "end": 416
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
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 425,
                                    "end": 426
                                  },
                                  "typeArguments": null,
                                  "start": 425,
                                  "end": 426
                                },
                                "start": 423,
                                "end": 426
                              },
                              "start": 418,
                              "end": 426
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "context",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 437,
                                  "end": 440
                                },
                                "start": 435,
                                "end": 440
                              },
                              "start": 428,
                              "end": 440
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 445,
                              "end": 449
                            },
                            "start": 442,
                            "end": 449
                          },
                          "start": 406,
                          "end": 449
                        },
                        "start": 404,
                        "end": 449
                      },
                      "start": 402,
                      "end": 449
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "context",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 460,
                          "end": 463
                        },
                        "start": 458,
                        "end": 463
                      },
                      "start": 451,
                      "end": 463
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 466,
                      "end": 473
                    },
                    "start": 464,
                    "end": 473
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 396,
                  "end": 474
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "some",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 483,
                    "end": 487
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fn",
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
                              "name": "k",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 496,
                                  "end": 502
                                },
                                "start": 494,
                                "end": 502
                              },
                              "start": 493,
                              "end": 502
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
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 511,
                                    "end": 512
                                  },
                                  "typeArguments": null,
                                  "start": 511,
                                  "end": 512
                                },
                                "start": 509,
                                "end": 512
                              },
                              "start": 504,
                              "end": 512
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "context",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 523,
                                  "end": 526
                                },
                                "start": 521,
                                "end": 526
                              },
                              "start": 514,
                              "end": 526
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 531,
                              "end": 535
                            },
                            "start": 528,
                            "end": 535
                          },
                          "start": 492,
                          "end": 535
                        },
                        "start": 490,
                        "end": 535
                      },
                      "start": 488,
                      "end": 535
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "context",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 546,
                          "end": 549
                        },
                        "start": 544,
                        "end": 549
                      },
                      "start": 537,
                      "end": 549
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 552,
                      "end": 559
                    },
                    "start": 550,
                    "end": 559
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 483,
                  "end": 560
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "count",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 569,
                    "end": 574
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
                      "start": 578,
                      "end": 584
                    },
                    "start": 576,
                    "end": 584
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 569,
                  "end": 585
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "lookup",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 594,
                    "end": 600
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
                          "type": "TSStringKeyword",
                          "start": 606,
                          "end": 612
                        },
                        "start": 604,
                        "end": 612
                      },
                      "start": 601,
                      "end": 612
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 615,
                        "end": 616
                      },
                      "typeArguments": null,
                      "start": 615,
                      "end": 616
                    },
                    "start": 613,
                    "end": 616
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 594,
                  "end": 617
                }
              ],
              "start": 176,
              "end": 623
            },
            "declare": false,
            "start": 152,
            "end": 623
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "StringHashTable",
              "optional": false,
              "typeAnnotation": null,
              "start": 634,
              "end": 649
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
                    "start": 650,
                    "end": 651
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 650,
                  "end": 651
                }
              ],
              "start": 649,
              "end": 652
            },
            "superClass": null,
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IHashTable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 664,
                  "end": 674
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
                        "start": 675,
                        "end": 676
                      },
                      "typeArguments": null,
                      "start": 675,
                      "end": 676
                    }
                  ],
                  "start": 674,
                  "end": 677
                },
                "start": 664,
                "end": 677
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "itemCount",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 696,
                    "end": 705
                  },
                  "typeAnnotation": null,
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 688,
                  "end": 706
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "table",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 723,
                    "end": 728
                  },
                  "typeAnnotation": null,
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 715,
                  "end": 729
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getAllKeys",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 745,
                    "end": 755
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 759,
                          "end": 765
                        },
                        "start": 759,
                        "end": 767
                      },
                      "start": 757,
                      "end": 767
                    },
                    "body": null,
                    "expression": false,
                    "start": 755,
                    "end": 768
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 738,
                  "end": 768
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "add",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 784,
                    "end": 787
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
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 793,
                            "end": 799
                          },
                          "start": 791,
                          "end": 799
                        },
                        "start": 788,
                        "end": 799
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
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
                              "start": 807,
                              "end": 808
                            },
                            "typeArguments": null,
                            "start": 807,
                            "end": 808
                          },
                          "start": 805,
                          "end": 808
                        },
                        "start": 801,
                        "end": 808
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 811,
                        "end": 818
                      },
                      "start": 809,
                      "end": 818
                    },
                    "body": null,
                    "expression": false,
                    "start": 787,
                    "end": 819
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 777,
                  "end": 819
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "addOrUpdate",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 835,
                    "end": 846
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
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 852,
                            "end": 858
                          },
                          "start": 850,
                          "end": 858
                        },
                        "start": 847,
                        "end": 858
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
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
                              "start": 866,
                              "end": 867
                            },
                            "typeArguments": null,
                            "start": 866,
                            "end": 867
                          },
                          "start": 864,
                          "end": 867
                        },
                        "start": 860,
                        "end": 867
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 870,
                        "end": 877
                      },
                      "start": 868,
                      "end": 877
                    },
                    "body": null,
                    "expression": false,
                    "start": 846,
                    "end": 878
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 828,
                  "end": 878
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "map",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 894,
                    "end": 897
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
                        "name": "fn",
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
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 906,
                                    "end": 912
                                  },
                                  "start": 904,
                                  "end": 912
                                },
                                "start": 903,
                                "end": 912
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
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 921,
                                      "end": 922
                                    },
                                    "typeArguments": null,
                                    "start": 921,
                                    "end": 922
                                  },
                                  "start": 919,
                                  "end": 922
                                },
                                "start": 914,
                                "end": 922
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 933,
                                    "end": 936
                                  },
                                  "start": 931,
                                  "end": 936
                                },
                                "start": 924,
                                "end": 936
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 941,
                                "end": 945
                              },
                              "start": 938,
                              "end": 945
                            },
                            "start": 902,
                            "end": 945
                          },
                          "start": 900,
                          "end": 945
                        },
                        "start": 898,
                        "end": 945
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "context",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 956,
                            "end": 959
                          },
                          "start": 954,
                          "end": 959
                        },
                        "start": 947,
                        "end": 959
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 962,
                        "end": 966
                      },
                      "start": 960,
                      "end": 966
                    },
                    "body": null,
                    "expression": false,
                    "start": 897,
                    "end": 967
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 887,
                  "end": 967
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "every",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 983,
                    "end": 988
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
                        "name": "fn",
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
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 997,
                                    "end": 1003
                                  },
                                  "start": 995,
                                  "end": 1003
                                },
                                "start": 994,
                                "end": 1003
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
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1012,
                                      "end": 1013
                                    },
                                    "typeArguments": null,
                                    "start": 1012,
                                    "end": 1013
                                  },
                                  "start": 1010,
                                  "end": 1013
                                },
                                "start": 1005,
                                "end": 1013
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 1024,
                                    "end": 1027
                                  },
                                  "start": 1022,
                                  "end": 1027
                                },
                                "start": 1015,
                                "end": 1027
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 1032,
                                "end": 1036
                              },
                              "start": 1029,
                              "end": 1036
                            },
                            "start": 993,
                            "end": 1036
                          },
                          "start": 991,
                          "end": 1036
                        },
                        "start": 989,
                        "end": 1036
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "context",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1047,
                            "end": 1050
                          },
                          "start": 1045,
                          "end": 1050
                        },
                        "start": 1038,
                        "end": 1050
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1053,
                        "end": 1060
                      },
                      "start": 1051,
                      "end": 1060
                    },
                    "body": null,
                    "expression": false,
                    "start": 988,
                    "end": 1061
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 976,
                  "end": 1061
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "some",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1077,
                    "end": 1081
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
                        "name": "fn",
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
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1090,
                                    "end": 1096
                                  },
                                  "start": 1088,
                                  "end": 1096
                                },
                                "start": 1087,
                                "end": 1096
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
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1105,
                                      "end": 1106
                                    },
                                    "typeArguments": null,
                                    "start": 1105,
                                    "end": 1106
                                  },
                                  "start": 1103,
                                  "end": 1106
                                },
                                "start": 1098,
                                "end": 1106
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 1117,
                                    "end": 1120
                                  },
                                  "start": 1115,
                                  "end": 1120
                                },
                                "start": 1108,
                                "end": 1120
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 1125,
                                "end": 1129
                              },
                              "start": 1122,
                              "end": 1129
                            },
                            "start": 1086,
                            "end": 1129
                          },
                          "start": 1084,
                          "end": 1129
                        },
                        "start": 1082,
                        "end": 1129
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "context",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1140,
                            "end": 1143
                          },
                          "start": 1138,
                          "end": 1143
                        },
                        "start": 1131,
                        "end": 1143
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1146,
                        "end": 1153
                      },
                      "start": 1144,
                      "end": 1153
                    },
                    "body": null,
                    "expression": false,
                    "start": 1081,
                    "end": 1154
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 1070,
                  "end": 1154
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "count",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1170,
                    "end": 1175
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1179,
                        "end": 1185
                      },
                      "start": 1177,
                      "end": 1185
                    },
                    "body": null,
                    "expression": false,
                    "start": 1175,
                    "end": 1186
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 1163,
                  "end": 1186
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "lookup",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1202,
                    "end": 1208
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
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1214,
                            "end": 1220
                          },
                          "start": 1212,
                          "end": 1220
                        },
                        "start": 1209,
                        "end": 1220
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1223,
                          "end": 1224
                        },
                        "typeArguments": null,
                        "start": 1223,
                        "end": 1224
                      },
                      "start": 1221,
                      "end": 1224
                    },
                    "body": null,
                    "expression": false,
                    "start": 1208,
                    "end": 1225
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 1195,
                  "end": 1225
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "remove",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1241,
                    "end": 1247
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
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1253,
                            "end": 1259
                          },
                          "start": 1251,
                          "end": 1259
                        },
                        "start": 1248,
                        "end": 1259
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 1262,
                        "end": 1266
                      },
                      "start": 1260,
                      "end": 1266
                    },
                    "body": null,
                    "expression": false,
                    "start": 1247,
                    "end": 1267
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 1234,
                  "end": 1267
                }
              ],
              "start": 678,
              "end": 1273
            },
            "abstract": false,
            "declare": false,
            "start": 628,
            "end": 1273
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IdentifierNameHashTable",
              "optional": false,
              "typeAnnotation": null,
              "start": 1284,
              "end": 1307
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
                    "start": 1308,
                    "end": 1309
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1308,
                  "end": 1309
                }
              ],
              "start": 1307,
              "end": 1310
            },
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "StringHashTable",
              "optional": false,
              "typeAnnotation": null,
              "start": 1319,
              "end": 1334
            },
            "superTypeArguments": {
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
                    "start": 1335,
                    "end": 1336
                  },
                  "typeArguments": null,
                  "start": 1335,
                  "end": 1336
                }
              ],
              "start": 1334,
              "end": 1337
            },
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
                    "name": "getAllKeys",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1355,
                    "end": 1365
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 1369,
                          "end": 1375
                        },
                        "start": 1369,
                        "end": 1377
                      },
                      "start": 1367,
                      "end": 1377
                    },
                    "body": null,
                    "expression": false,
                    "start": 1365,
                    "end": 1378
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 1348,
                  "end": 1378
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "add",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1394,
                    "end": 1397
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
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1403,
                            "end": 1409
                          },
                          "start": 1401,
                          "end": 1409
                        },
                        "start": 1398,
                        "end": 1409
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
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
                              "start": 1417,
                              "end": 1418
                            },
                            "typeArguments": null,
                            "start": 1417,
                            "end": 1418
                          },
                          "start": 1415,
                          "end": 1418
                        },
                        "start": 1411,
                        "end": 1418
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1421,
                        "end": 1428
                      },
                      "start": 1419,
                      "end": 1428
                    },
                    "body": null,
                    "expression": false,
                    "start": 1397,
                    "end": 1429
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 1387,
                  "end": 1429
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "addOrUpdate",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1445,
                    "end": 1456
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
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1462,
                            "end": 1468
                          },
                          "start": 1460,
                          "end": 1468
                        },
                        "start": 1457,
                        "end": 1468
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
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
                              "start": 1476,
                              "end": 1477
                            },
                            "typeArguments": null,
                            "start": 1476,
                            "end": 1477
                          },
                          "start": 1474,
                          "end": 1477
                        },
                        "start": 1470,
                        "end": 1477
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1480,
                        "end": 1487
                      },
                      "start": 1478,
                      "end": 1487
                    },
                    "body": null,
                    "expression": false,
                    "start": 1456,
                    "end": 1488
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 1438,
                  "end": 1488
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "map",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1504,
                    "end": 1507
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
                        "name": "fn",
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
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1516,
                                    "end": 1522
                                  },
                                  "start": 1514,
                                  "end": 1522
                                },
                                "start": 1513,
                                "end": 1522
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
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1531,
                                      "end": 1532
                                    },
                                    "typeArguments": null,
                                    "start": 1531,
                                    "end": 1532
                                  },
                                  "start": 1529,
                                  "end": 1532
                                },
                                "start": 1524,
                                "end": 1532
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 1543,
                                    "end": 1546
                                  },
                                  "start": 1541,
                                  "end": 1546
                                },
                                "start": 1534,
                                "end": 1546
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 1551,
                                "end": 1555
                              },
                              "start": 1548,
                              "end": 1555
                            },
                            "start": 1512,
                            "end": 1555
                          },
                          "start": 1510,
                          "end": 1555
                        },
                        "start": 1508,
                        "end": 1555
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "context",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1566,
                            "end": 1569
                          },
                          "start": 1564,
                          "end": 1569
                        },
                        "start": 1557,
                        "end": 1569
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 1572,
                        "end": 1576
                      },
                      "start": 1570,
                      "end": 1576
                    },
                    "body": null,
                    "expression": false,
                    "start": 1507,
                    "end": 1577
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 1497,
                  "end": 1577
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "every",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1593,
                    "end": 1598
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
                        "name": "fn",
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
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1607,
                                    "end": 1613
                                  },
                                  "start": 1605,
                                  "end": 1613
                                },
                                "start": 1604,
                                "end": 1613
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
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1622,
                                      "end": 1623
                                    },
                                    "typeArguments": null,
                                    "start": 1622,
                                    "end": 1623
                                  },
                                  "start": 1620,
                                  "end": 1623
                                },
                                "start": 1615,
                                "end": 1623
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 1634,
                                    "end": 1637
                                  },
                                  "start": 1632,
                                  "end": 1637
                                },
                                "start": 1625,
                                "end": 1637
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 1642,
                                "end": 1646
                              },
                              "start": 1639,
                              "end": 1646
                            },
                            "start": 1603,
                            "end": 1646
                          },
                          "start": 1601,
                          "end": 1646
                        },
                        "start": 1599,
                        "end": 1646
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "context",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1657,
                            "end": 1660
                          },
                          "start": 1655,
                          "end": 1660
                        },
                        "start": 1648,
                        "end": 1660
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1663,
                        "end": 1670
                      },
                      "start": 1661,
                      "end": 1670
                    },
                    "body": null,
                    "expression": false,
                    "start": 1598,
                    "end": 1671
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 1586,
                  "end": 1671
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "some",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1687,
                    "end": 1691
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
                        "name": "fn",
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
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1700,
                                    "end": 1706
                                  },
                                  "start": 1698,
                                  "end": 1706
                                },
                                "start": 1697,
                                "end": 1706
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 1715,
                                    "end": 1718
                                  },
                                  "start": 1713,
                                  "end": 1718
                                },
                                "start": 1708,
                                "end": 1718
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 1729,
                                    "end": 1732
                                  },
                                  "start": 1727,
                                  "end": 1732
                                },
                                "start": 1720,
                                "end": 1732
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 1737,
                                "end": 1741
                              },
                              "start": 1734,
                              "end": 1741
                            },
                            "start": 1696,
                            "end": 1741
                          },
                          "start": 1694,
                          "end": 1741
                        },
                        "start": 1692,
                        "end": 1741
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "context",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1752,
                            "end": 1755
                          },
                          "start": 1750,
                          "end": 1755
                        },
                        "start": 1743,
                        "end": 1755
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1758,
                        "end": 1765
                      },
                      "start": 1756,
                      "end": 1765
                    },
                    "body": null,
                    "expression": false,
                    "start": 1691,
                    "end": 1766
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 1680,
                  "end": 1766
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "lookup",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1782,
                    "end": 1788
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
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1794,
                            "end": 1800
                          },
                          "start": 1792,
                          "end": 1800
                        },
                        "start": 1789,
                        "end": 1800
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1803,
                          "end": 1804
                        },
                        "typeArguments": null,
                        "start": 1803,
                        "end": 1804
                      },
                      "start": 1801,
                      "end": 1804
                    },
                    "body": null,
                    "expression": false,
                    "start": 1788,
                    "end": 1805
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 1775,
                  "end": 1805
                }
              ],
              "start": 1338,
              "end": 1811
            },
            "abstract": false,
            "declare": false,
            "start": 1278,
            "end": 1811
          }
        ],
        "start": 29,
        "end": 1813
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 1813
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeScript",
        "optional": false,
        "typeAnnotation": null,
        "start": 1833,
        "end": 1843
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IIndexable",
              "optional": false,
              "typeAnnotation": null,
              "start": 1860,
              "end": 1870
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
                    "start": 1871,
                    "end": 1872
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1871,
                  "end": 1872
                }
              ],
              "start": 1870,
              "end": 1873
            },
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1888,
                          "end": 1894
                        },
                        "start": 1886,
                        "end": 1894
                      },
                      "start": 1885,
                      "end": 1894
                    }
                  ],
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
                        "start": 1897,
                        "end": 1898
                      },
                      "typeArguments": null,
                      "start": 1897,
                      "end": 1898
                    },
                    "start": 1895,
                    "end": 1898
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 1884,
                  "end": 1899
                }
              ],
              "start": 1874,
              "end": 1905
            },
            "declare": false,
            "start": 1850,
            "end": 1905
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "createIntrinsicsObject",
              "optional": false,
              "typeAnnotation": null,
              "start": 1919,
              "end": 1941
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
                    "start": 1942,
                    "end": 1943
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1942,
                  "end": 1943
                }
              ],
              "start": 1941,
              "end": 1944
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IIndexable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1948,
                  "end": 1958
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
                        "start": 1959,
                        "end": 1960
                      },
                      "typeArguments": null,
                      "start": 1959,
                      "end": 1960
                    }
                  ],
                  "start": 1958,
                  "end": 1961
                },
                "start": 1948,
                "end": 1961
              },
              "start": 1946,
              "end": 1961
            },
            "body": null,
            "expression": false,
            "start": 1910,
            "end": 1962
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IHashTable",
              "optional": false,
              "typeAnnotation": null,
              "start": 1977,
              "end": 1987
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
                    "start": 1988,
                    "end": 1989
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1988,
                  "end": 1989
                }
              ],
              "start": 1987,
              "end": 1990
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
                    "name": "getAllKeys",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2001,
                    "end": 2011
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 2015,
                        "end": 2021
                      },
                      "start": 2015,
                      "end": 2023
                    },
                    "start": 2013,
                    "end": 2023
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 2001,
                  "end": 2024
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "add",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2033,
                    "end": 2036
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
                          "type": "TSStringKeyword",
                          "start": 2042,
                          "end": 2048
                        },
                        "start": 2040,
                        "end": 2048
                      },
                      "start": 2037,
                      "end": 2048
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
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
                            "start": 2056,
                            "end": 2057
                          },
                          "typeArguments": null,
                          "start": 2056,
                          "end": 2057
                        },
                        "start": 2054,
                        "end": 2057
                      },
                      "start": 2050,
                      "end": 2057
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 2060,
                      "end": 2067
                    },
                    "start": 2058,
                    "end": 2067
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 2033,
                  "end": 2068
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "addOrUpdate",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2077,
                    "end": 2088
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
                          "type": "TSStringKeyword",
                          "start": 2094,
                          "end": 2100
                        },
                        "start": 2092,
                        "end": 2100
                      },
                      "start": 2089,
                      "end": 2100
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
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
                            "start": 2108,
                            "end": 2109
                          },
                          "typeArguments": null,
                          "start": 2108,
                          "end": 2109
                        },
                        "start": 2106,
                        "end": 2109
                      },
                      "start": 2102,
                      "end": 2109
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 2112,
                      "end": 2119
                    },
                    "start": 2110,
                    "end": 2119
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 2077,
                  "end": 2120
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "map",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2129,
                    "end": 2132
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fn",
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
                              "name": "k",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 2141,
                                  "end": 2147
                                },
                                "start": 2139,
                                "end": 2147
                              },
                              "start": 2138,
                              "end": 2147
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
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2156,
                                    "end": 2157
                                  },
                                  "typeArguments": null,
                                  "start": 2156,
                                  "end": 2157
                                },
                                "start": 2154,
                                "end": 2157
                              },
                              "start": 2149,
                              "end": 2157
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "context",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 2168,
                                  "end": 2171
                                },
                                "start": 2166,
                                "end": 2171
                              },
                              "start": 2159,
                              "end": 2171
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 2176,
                              "end": 2180
                            },
                            "start": 2173,
                            "end": 2180
                          },
                          "start": 2137,
                          "end": 2180
                        },
                        "start": 2135,
                        "end": 2180
                      },
                      "start": 2133,
                      "end": 2180
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "context",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 2191,
                          "end": 2194
                        },
                        "start": 2189,
                        "end": 2194
                      },
                      "start": 2182,
                      "end": 2194
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 2197,
                      "end": 2201
                    },
                    "start": 2195,
                    "end": 2201
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 2129,
                  "end": 2202
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "every",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2211,
                    "end": 2216
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fn",
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
                              "name": "k",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 2225,
                                  "end": 2231
                                },
                                "start": 2223,
                                "end": 2231
                              },
                              "start": 2222,
                              "end": 2231
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
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2240,
                                    "end": 2241
                                  },
                                  "typeArguments": null,
                                  "start": 2240,
                                  "end": 2241
                                },
                                "start": 2238,
                                "end": 2241
                              },
                              "start": 2233,
                              "end": 2241
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "context",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 2252,
                                  "end": 2255
                                },
                                "start": 2250,
                                "end": 2255
                              },
                              "start": 2243,
                              "end": 2255
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 2260,
                              "end": 2264
                            },
                            "start": 2257,
                            "end": 2264
                          },
                          "start": 2221,
                          "end": 2264
                        },
                        "start": 2219,
                        "end": 2264
                      },
                      "start": 2217,
                      "end": 2264
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "context",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 2275,
                          "end": 2278
                        },
                        "start": 2273,
                        "end": 2278
                      },
                      "start": 2266,
                      "end": 2278
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 2281,
                      "end": 2288
                    },
                    "start": 2279,
                    "end": 2288
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 2211,
                  "end": 2289
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "some",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2298,
                    "end": 2302
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fn",
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
                              "name": "k",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 2311,
                                  "end": 2317
                                },
                                "start": 2309,
                                "end": 2317
                              },
                              "start": 2308,
                              "end": 2317
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
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2326,
                                    "end": 2327
                                  },
                                  "typeArguments": null,
                                  "start": 2326,
                                  "end": 2327
                                },
                                "start": 2324,
                                "end": 2327
                              },
                              "start": 2319,
                              "end": 2327
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "context",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 2338,
                                  "end": 2341
                                },
                                "start": 2336,
                                "end": 2341
                              },
                              "start": 2329,
                              "end": 2341
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 2346,
                              "end": 2350
                            },
                            "start": 2343,
                            "end": 2350
                          },
                          "start": 2307,
                          "end": 2350
                        },
                        "start": 2305,
                        "end": 2350
                      },
                      "start": 2303,
                      "end": 2350
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "context",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 2361,
                          "end": 2364
                        },
                        "start": 2359,
                        "end": 2364
                      },
                      "start": 2352,
                      "end": 2364
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 2367,
                      "end": 2374
                    },
                    "start": 2365,
                    "end": 2374
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 2298,
                  "end": 2375
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "count",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2384,
                    "end": 2389
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
                      "start": 2393,
                      "end": 2399
                    },
                    "start": 2391,
                    "end": 2399
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 2384,
                  "end": 2400
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "lookup",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2409,
                    "end": 2415
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
                          "type": "TSStringKeyword",
                          "start": 2421,
                          "end": 2427
                        },
                        "start": 2419,
                        "end": 2427
                      },
                      "start": 2416,
                      "end": 2427
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2430,
                        "end": 2431
                      },
                      "typeArguments": null,
                      "start": 2430,
                      "end": 2431
                    },
                    "start": 2428,
                    "end": 2431
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 2409,
                  "end": 2432
                }
              ],
              "start": 1991,
              "end": 2438
            },
            "declare": false,
            "start": 1967,
            "end": 2438
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "StringHashTable",
              "optional": false,
              "typeAnnotation": null,
              "start": 2449,
              "end": 2464
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
                    "start": 2465,
                    "end": 2466
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2465,
                  "end": 2466
                }
              ],
              "start": 2464,
              "end": 2467
            },
            "superClass": null,
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IHashTable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2479,
                  "end": 2489
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
                        "start": 2490,
                        "end": 2491
                      },
                      "typeArguments": null,
                      "start": 2490,
                      "end": 2491
                    }
                  ],
                  "start": 2489,
                  "end": 2492
                },
                "start": 2479,
                "end": 2492
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "itemCount",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2511,
                    "end": 2520
                  },
                  "typeAnnotation": null,
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 2503,
                  "end": 2521
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "table",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2538,
                    "end": 2543
                  },
                  "typeAnnotation": null,
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 2530,
                  "end": 2544
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getAllKeys",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2560,
                    "end": 2570
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 2574,
                          "end": 2580
                        },
                        "start": 2574,
                        "end": 2582
                      },
                      "start": 2572,
                      "end": 2582
                    },
                    "body": null,
                    "expression": false,
                    "start": 2570,
                    "end": 2583
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 2553,
                  "end": 2583
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "add",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2599,
                    "end": 2602
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
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 2608,
                            "end": 2614
                          },
                          "start": 2606,
                          "end": 2614
                        },
                        "start": 2603,
                        "end": 2614
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
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
                              "start": 2622,
                              "end": 2623
                            },
                            "typeArguments": null,
                            "start": 2622,
                            "end": 2623
                          },
                          "start": 2620,
                          "end": 2623
                        },
                        "start": 2616,
                        "end": 2623
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2626,
                        "end": 2633
                      },
                      "start": 2624,
                      "end": 2633
                    },
                    "body": null,
                    "expression": false,
                    "start": 2602,
                    "end": 2634
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 2592,
                  "end": 2634
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "addOrUpdate",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2650,
                    "end": 2661
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
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 2667,
                            "end": 2673
                          },
                          "start": 2665,
                          "end": 2673
                        },
                        "start": 2662,
                        "end": 2673
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
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
                              "start": 2681,
                              "end": 2682
                            },
                            "typeArguments": null,
                            "start": 2681,
                            "end": 2682
                          },
                          "start": 2679,
                          "end": 2682
                        },
                        "start": 2675,
                        "end": 2682
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2685,
                        "end": 2692
                      },
                      "start": 2683,
                      "end": 2692
                    },
                    "body": null,
                    "expression": false,
                    "start": 2661,
                    "end": 2693
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 2643,
                  "end": 2693
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "map",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2709,
                    "end": 2712
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
                        "name": "fn",
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
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 2721,
                                    "end": 2727
                                  },
                                  "start": 2719,
                                  "end": 2727
                                },
                                "start": 2718,
                                "end": 2727
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
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2736,
                                      "end": 2737
                                    },
                                    "typeArguments": null,
                                    "start": 2736,
                                    "end": 2737
                                  },
                                  "start": 2734,
                                  "end": 2737
                                },
                                "start": 2729,
                                "end": 2737
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 2748,
                                    "end": 2751
                                  },
                                  "start": 2746,
                                  "end": 2751
                                },
                                "start": 2739,
                                "end": 2751
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 2756,
                                "end": 2760
                              },
                              "start": 2753,
                              "end": 2760
                            },
                            "start": 2717,
                            "end": 2760
                          },
                          "start": 2715,
                          "end": 2760
                        },
                        "start": 2713,
                        "end": 2760
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "context",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 2771,
                            "end": 2774
                          },
                          "start": 2769,
                          "end": 2774
                        },
                        "start": 2762,
                        "end": 2774
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 2777,
                        "end": 2781
                      },
                      "start": 2775,
                      "end": 2781
                    },
                    "body": null,
                    "expression": false,
                    "start": 2712,
                    "end": 2782
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 2702,
                  "end": 2782
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "every",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2798,
                    "end": 2803
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
                        "name": "fn",
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
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 2812,
                                    "end": 2818
                                  },
                                  "start": 2810,
                                  "end": 2818
                                },
                                "start": 2809,
                                "end": 2818
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
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2827,
                                      "end": 2828
                                    },
                                    "typeArguments": null,
                                    "start": 2827,
                                    "end": 2828
                                  },
                                  "start": 2825,
                                  "end": 2828
                                },
                                "start": 2820,
                                "end": 2828
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 2839,
                                    "end": 2842
                                  },
                                  "start": 2837,
                                  "end": 2842
                                },
                                "start": 2830,
                                "end": 2842
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 2847,
                                "end": 2851
                              },
                              "start": 2844,
                              "end": 2851
                            },
                            "start": 2808,
                            "end": 2851
                          },
                          "start": 2806,
                          "end": 2851
                        },
                        "start": 2804,
                        "end": 2851
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "context",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 2862,
                            "end": 2865
                          },
                          "start": 2860,
                          "end": 2865
                        },
                        "start": 2853,
                        "end": 2865
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2868,
                        "end": 2875
                      },
                      "start": 2866,
                      "end": 2875
                    },
                    "body": null,
                    "expression": false,
                    "start": 2803,
                    "end": 2876
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 2791,
                  "end": 2876
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "some",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2892,
                    "end": 2896
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
                        "name": "fn",
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
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 2905,
                                    "end": 2911
                                  },
                                  "start": 2903,
                                  "end": 2911
                                },
                                "start": 2902,
                                "end": 2911
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
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2920,
                                      "end": 2921
                                    },
                                    "typeArguments": null,
                                    "start": 2920,
                                    "end": 2921
                                  },
                                  "start": 2918,
                                  "end": 2921
                                },
                                "start": 2913,
                                "end": 2921
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 2932,
                                    "end": 2935
                                  },
                                  "start": 2930,
                                  "end": 2935
                                },
                                "start": 2923,
                                "end": 2935
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 2940,
                                "end": 2944
                              },
                              "start": 2937,
                              "end": 2944
                            },
                            "start": 2901,
                            "end": 2944
                          },
                          "start": 2899,
                          "end": 2944
                        },
                        "start": 2897,
                        "end": 2944
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "context",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 2955,
                            "end": 2958
                          },
                          "start": 2953,
                          "end": 2958
                        },
                        "start": 2946,
                        "end": 2958
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2961,
                        "end": 2968
                      },
                      "start": 2959,
                      "end": 2968
                    },
                    "body": null,
                    "expression": false,
                    "start": 2896,
                    "end": 2969
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 2885,
                  "end": 2969
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "count",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2985,
                    "end": 2990
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2994,
                        "end": 3000
                      },
                      "start": 2992,
                      "end": 3000
                    },
                    "body": null,
                    "expression": false,
                    "start": 2990,
                    "end": 3001
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 2978,
                  "end": 3001
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "lookup",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3017,
                    "end": 3023
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
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 3029,
                            "end": 3035
                          },
                          "start": 3027,
                          "end": 3035
                        },
                        "start": 3024,
                        "end": 3035
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3038,
                          "end": 3039
                        },
                        "typeArguments": null,
                        "start": 3038,
                        "end": 3039
                      },
                      "start": 3036,
                      "end": 3039
                    },
                    "body": null,
                    "expression": false,
                    "start": 3023,
                    "end": 3040
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 3010,
                  "end": 3040
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "remove",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3056,
                    "end": 3062
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
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 3068,
                            "end": 3074
                          },
                          "start": 3066,
                          "end": 3074
                        },
                        "start": 3063,
                        "end": 3074
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 3077,
                        "end": 3081
                      },
                      "start": 3075,
                      "end": 3081
                    },
                    "body": null,
                    "expression": false,
                    "start": 3062,
                    "end": 3082
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 3049,
                  "end": 3082
                }
              ],
              "start": 2493,
              "end": 3088
            },
            "abstract": false,
            "declare": false,
            "start": 2443,
            "end": 3088
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IdentifierNameHashTable",
              "optional": false,
              "typeAnnotation": null,
              "start": 3099,
              "end": 3122
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
                    "start": 3123,
                    "end": 3124
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3123,
                  "end": 3124
                }
              ],
              "start": 3122,
              "end": 3125
            },
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "StringHashTable",
              "optional": false,
              "typeAnnotation": null,
              "start": 3134,
              "end": 3149
            },
            "superTypeArguments": {
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
                    "start": 3150,
                    "end": 3151
                  },
                  "typeArguments": null,
                  "start": 3150,
                  "end": 3151
                }
              ],
              "start": 3149,
              "end": 3152
            },
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
                    "name": "getAllKeys",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3170,
                    "end": 3180
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 3184,
                          "end": 3190
                        },
                        "start": 3184,
                        "end": 3192
                      },
                      "start": 3182,
                      "end": 3192
                    },
                    "body": null,
                    "expression": false,
                    "start": 3180,
                    "end": 3193
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 3163,
                  "end": 3193
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "add",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3209,
                    "end": 3212
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
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 3218,
                            "end": 3224
                          },
                          "start": 3216,
                          "end": 3224
                        },
                        "start": 3213,
                        "end": 3224
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
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
                              "start": 3232,
                              "end": 3233
                            },
                            "typeArguments": null,
                            "start": 3232,
                            "end": 3233
                          },
                          "start": 3230,
                          "end": 3233
                        },
                        "start": 3226,
                        "end": 3233
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3236,
                        "end": 3243
                      },
                      "start": 3234,
                      "end": 3243
                    },
                    "body": null,
                    "expression": false,
                    "start": 3212,
                    "end": 3244
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 3202,
                  "end": 3244
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "addOrUpdate",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3260,
                    "end": 3271
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
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 3277,
                            "end": 3283
                          },
                          "start": 3275,
                          "end": 3283
                        },
                        "start": 3272,
                        "end": 3283
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
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
                              "start": 3291,
                              "end": 3292
                            },
                            "typeArguments": null,
                            "start": 3291,
                            "end": 3292
                          },
                          "start": 3289,
                          "end": 3292
                        },
                        "start": 3285,
                        "end": 3292
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3295,
                        "end": 3302
                      },
                      "start": 3293,
                      "end": 3302
                    },
                    "body": null,
                    "expression": false,
                    "start": 3271,
                    "end": 3303
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 3253,
                  "end": 3303
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "map",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3319,
                    "end": 3322
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
                        "name": "fn",
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
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 3331,
                                    "end": 3337
                                  },
                                  "start": 3329,
                                  "end": 3337
                                },
                                "start": 3328,
                                "end": 3337
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
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3346,
                                      "end": 3347
                                    },
                                    "typeArguments": null,
                                    "start": 3346,
                                    "end": 3347
                                  },
                                  "start": 3344,
                                  "end": 3347
                                },
                                "start": 3339,
                                "end": 3347
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 3358,
                                    "end": 3361
                                  },
                                  "start": 3356,
                                  "end": 3361
                                },
                                "start": 3349,
                                "end": 3361
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 3366,
                                "end": 3370
                              },
                              "start": 3363,
                              "end": 3370
                            },
                            "start": 3327,
                            "end": 3370
                          },
                          "start": 3325,
                          "end": 3370
                        },
                        "start": 3323,
                        "end": 3370
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "context",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 3381,
                            "end": 3384
                          },
                          "start": 3379,
                          "end": 3384
                        },
                        "start": 3372,
                        "end": 3384
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 3387,
                        "end": 3391
                      },
                      "start": 3385,
                      "end": 3391
                    },
                    "body": null,
                    "expression": false,
                    "start": 3322,
                    "end": 3392
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 3312,
                  "end": 3392
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "every",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3408,
                    "end": 3413
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
                        "name": "fn",
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
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 3422,
                                    "end": 3428
                                  },
                                  "start": 3420,
                                  "end": 3428
                                },
                                "start": 3419,
                                "end": 3428
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
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3437,
                                      "end": 3438
                                    },
                                    "typeArguments": null,
                                    "start": 3437,
                                    "end": 3438
                                  },
                                  "start": 3435,
                                  "end": 3438
                                },
                                "start": 3430,
                                "end": 3438
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 3449,
                                    "end": 3452
                                  },
                                  "start": 3447,
                                  "end": 3452
                                },
                                "start": 3440,
                                "end": 3452
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 3457,
                                "end": 3461
                              },
                              "start": 3454,
                              "end": 3461
                            },
                            "start": 3418,
                            "end": 3461
                          },
                          "start": 3416,
                          "end": 3461
                        },
                        "start": 3414,
                        "end": 3461
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "context",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 3472,
                            "end": 3475
                          },
                          "start": 3470,
                          "end": 3475
                        },
                        "start": 3463,
                        "end": 3475
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3478,
                        "end": 3485
                      },
                      "start": 3476,
                      "end": 3485
                    },
                    "body": null,
                    "expression": false,
                    "start": 3413,
                    "end": 3486
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 3401,
                  "end": 3486
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "some",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3502,
                    "end": 3506
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
                        "name": "fn",
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
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 3515,
                                    "end": 3521
                                  },
                                  "start": 3513,
                                  "end": 3521
                                },
                                "start": 3512,
                                "end": 3521
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 3530,
                                    "end": 3533
                                  },
                                  "start": 3528,
                                  "end": 3533
                                },
                                "start": 3523,
                                "end": 3533
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 3544,
                                    "end": 3547
                                  },
                                  "start": 3542,
                                  "end": 3547
                                },
                                "start": 3535,
                                "end": 3547
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 3552,
                                "end": 3556
                              },
                              "start": 3549,
                              "end": 3556
                            },
                            "start": 3511,
                            "end": 3556
                          },
                          "start": 3509,
                          "end": 3556
                        },
                        "start": 3507,
                        "end": 3556
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "context",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 3567,
                            "end": 3570
                          },
                          "start": 3565,
                          "end": 3570
                        },
                        "start": 3558,
                        "end": 3570
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3573,
                        "end": 3580
                      },
                      "start": 3571,
                      "end": 3580
                    },
                    "body": null,
                    "expression": false,
                    "start": 3506,
                    "end": 3581
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 3495,
                  "end": 3581
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "lookup",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3597,
                    "end": 3603
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
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 3609,
                            "end": 3615
                          },
                          "start": 3607,
                          "end": 3615
                        },
                        "start": 3604,
                        "end": 3615
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3618,
                          "end": 3619
                        },
                        "typeArguments": null,
                        "start": 3618,
                        "end": 3619
                      },
                      "start": 3616,
                      "end": 3619
                    },
                    "body": null,
                    "expression": false,
                    "start": 3603,
                    "end": 3620
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 3590,
                  "end": 3620
                }
              ],
              "start": 3153,
              "end": 3626
            },
            "abstract": false,
            "declare": false,
            "start": 3093,
            "end": 3626
          }
        ],
        "start": 1844,
        "end": 3628
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 1815,
      "end": 3628
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3628
}
```
