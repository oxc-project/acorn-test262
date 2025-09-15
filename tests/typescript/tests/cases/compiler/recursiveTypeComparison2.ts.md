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
        "name": "Bacon",
        "optional": false,
        "typeAnnotation": null,
        "start": 75,
        "end": 80
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Event",
              "optional": false,
              "typeAnnotation": null,
              "start": 97,
              "end": 102
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
                    "start": 103,
                    "end": 104
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 103,
                  "end": 104
                }
              ],
              "start": 102,
              "end": 105
            },
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 106,
              "end": 113
            },
            "declare": false,
            "start": 87,
            "end": 113
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Error",
              "optional": false,
              "typeAnnotation": null,
              "start": 128,
              "end": 133
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
                    "start": 134,
                    "end": 135
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 134,
                  "end": 135
                }
              ],
              "start": 133,
              "end": 136
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Event",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 145,
                  "end": 150
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
                        "start": 151,
                        "end": 152
                      },
                      "typeArguments": null,
                      "start": 151,
                      "end": 152
                    }
                  ],
                  "start": 150,
                  "end": 153
                },
                "start": 145,
                "end": 153
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 154,
              "end": 161
            },
            "declare": false,
            "start": 118,
            "end": 161
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Observable",
              "optional": false,
              "typeAnnotation": null,
              "start": 176,
              "end": 186
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
                    "start": 187,
                    "end": 188
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 187,
                  "end": 188
                }
              ],
              "start": 186,
              "end": 189
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
                    "name": "zip",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 200,
                    "end": 203
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
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "V",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 207,
                          "end": 208
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 207,
                        "end": 208
                      }
                    ],
                    "start": 203,
                    "end": 209
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "other",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "EventStream",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 217,
                            "end": 228
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
                                  "start": 229,
                                  "end": 230
                                },
                                "typeArguments": null,
                                "start": 229,
                                "end": 230
                              }
                            ],
                            "start": 228,
                            "end": 231
                          },
                          "start": 217,
                          "end": 231
                        },
                        "start": 215,
                        "end": 231
                      },
                      "start": 210,
                      "end": 231
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
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
                                    "start": 240,
                                    "end": 241
                                  },
                                  "typeArguments": null,
                                  "start": 240,
                                  "end": 241
                                },
                                "start": 238,
                                "end": 241
                              },
                              "start": 237,
                              "end": 241
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 246,
                                    "end": 247
                                  },
                                  "typeArguments": null,
                                  "start": 246,
                                  "end": 247
                                },
                                "start": 244,
                                "end": 247
                              },
                              "start": 243,
                              "end": 247
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "V",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 252,
                                "end": 253
                              },
                              "typeArguments": null,
                              "start": 252,
                              "end": 253
                            },
                            "start": 249,
                            "end": 253
                          },
                          "start": 236,
                          "end": 253
                        },
                        "start": 234,
                        "end": 253
                      },
                      "start": 233,
                      "end": 253
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "EventStream",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 256,
                        "end": 267
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "V",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 268,
                              "end": 269
                            },
                            "typeArguments": null,
                            "start": 268,
                            "end": 269
                          }
                        ],
                        "start": 267,
                        "end": 270
                      },
                      "start": 256,
                      "end": 270
                    },
                    "start": 254,
                    "end": 270
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 200,
                  "end": 271
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "slidingWindow",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 280,
                    "end": 293
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "max",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 299,
                          "end": 305
                        },
                        "start": 297,
                        "end": 305
                      },
                      "start": 294,
                      "end": 305
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "min",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 313,
                          "end": 319
                        },
                        "start": 311,
                        "end": 319
                      },
                      "start": 307,
                      "end": 319
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Property",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 322,
                        "end": 330
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
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 331,
                                "end": 332
                              },
                              "typeArguments": null,
                              "start": 331,
                              "end": 332
                            },
                            "start": 331,
                            "end": 334
                          }
                        ],
                        "start": 330,
                        "end": 335
                      },
                      "start": 322,
                      "end": 335
                    },
                    "start": 320,
                    "end": 335
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 280,
                  "end": 336
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "log",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 345,
                    "end": 348
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
                        "name": "Observable",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 352,
                        "end": 362
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
                              "start": 363,
                              "end": 364
                            },
                            "typeArguments": null,
                            "start": 363,
                            "end": 364
                          }
                        ],
                        "start": 362,
                        "end": 365
                      },
                      "start": 352,
                      "end": 365
                    },
                    "start": 350,
                    "end": 365
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 345,
                  "end": 366
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "combine",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 375,
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
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 383,
                          "end": 384
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 383,
                        "end": 384
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "V",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 386,
                          "end": 387
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 386,
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
                      "name": "other",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Observable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 396,
                            "end": 406
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
                                  "start": 407,
                                  "end": 408
                                },
                                "typeArguments": null,
                                "start": 407,
                                "end": 408
                              }
                            ],
                            "start": 406,
                            "end": 409
                          },
                          "start": 396,
                          "end": 409
                        },
                        "start": 394,
                        "end": 409
                      },
                      "start": 389,
                      "end": 409
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
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
                                    "start": 418,
                                    "end": 419
                                  },
                                  "typeArguments": null,
                                  "start": 418,
                                  "end": 419
                                },
                                "start": 416,
                                "end": 419
                              },
                              "start": 415,
                              "end": 419
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 424,
                                    "end": 425
                                  },
                                  "typeArguments": null,
                                  "start": 424,
                                  "end": 425
                                },
                                "start": 422,
                                "end": 425
                              },
                              "start": 421,
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
                                "name": "V",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 430,
                                "end": 431
                              },
                              "typeArguments": null,
                              "start": 430,
                              "end": 431
                            },
                            "start": 427,
                            "end": 431
                          },
                          "start": 414,
                          "end": 431
                        },
                        "start": 412,
                        "end": 431
                      },
                      "start": 411,
                      "end": 431
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Property",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 434,
                        "end": 442
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "V",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 443,
                              "end": 444
                            },
                            "typeArguments": null,
                            "start": 443,
                            "end": 444
                          }
                        ],
                        "start": 442,
                        "end": 445
                      },
                      "start": 434,
                      "end": 445
                    },
                    "start": 432,
                    "end": 445
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 375,
                  "end": 446
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "withStateMachine",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 455,
                    "end": 471
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
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 472,
                          "end": 473
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 472,
                        "end": 473
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "V",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 475,
                          "end": 476
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 475,
                        "end": 476
                      }
                    ],
                    "start": 471,
                    "end": 477
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "initState",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 489,
                            "end": 490
                          },
                          "typeArguments": null,
                          "start": 489,
                          "end": 490
                        },
                        "start": 487,
                        "end": 490
                      },
                      "start": 478,
                      "end": 490
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
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
                              "name": "state",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 503,
                                    "end": 504
                                  },
                                  "typeArguments": null,
                                  "start": 503,
                                  "end": 504
                                },
                                "start": 501,
                                "end": 504
                              },
                              "start": 496,
                              "end": 504
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "event",
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
                                    "start": 513,
                                    "end": 518
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
                                          "start": 519,
                                          "end": 520
                                        },
                                        "typeArguments": null,
                                        "start": 519,
                                        "end": 520
                                      }
                                    ],
                                    "start": 518,
                                    "end": 521
                                  },
                                  "start": 513,
                                  "end": 521
                                },
                                "start": 511,
                                "end": 521
                              },
                              "start": 506,
                              "end": 521
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "StateValue",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 526,
                                "end": 536
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
                                      "start": 537,
                                      "end": 538
                                    },
                                    "typeArguments": null,
                                    "start": 537,
                                    "end": 538
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "V",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 540,
                                      "end": 541
                                    },
                                    "typeArguments": null,
                                    "start": 540,
                                    "end": 541
                                  }
                                ],
                                "start": 536,
                                "end": 542
                              },
                              "start": 526,
                              "end": 542
                            },
                            "start": 523,
                            "end": 542
                          },
                          "start": 495,
                          "end": 542
                        },
                        "start": 493,
                        "end": 542
                      },
                      "start": 492,
                      "end": 542
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "EventStream",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 545,
                        "end": 556
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "V",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 557,
                              "end": 558
                            },
                            "typeArguments": null,
                            "start": 557,
                            "end": 558
                          }
                        ],
                        "start": 556,
                        "end": 559
                      },
                      "start": 545,
                      "end": 559
                    },
                    "start": 543,
                    "end": 559
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 455,
                  "end": 560
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "decode",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 569,
                    "end": 575
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "mapping",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Object",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 585,
                            "end": 591
                          },
                          "typeArguments": null,
                          "start": 585,
                          "end": 591
                        },
                        "start": 583,
                        "end": 591
                      },
                      "start": 576,
                      "end": 591
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Property",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 594,
                        "end": 602
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSAnyKeyword",
                            "start": 603,
                            "end": 606
                          }
                        ],
                        "start": 602,
                        "end": 607
                      },
                      "start": 594,
                      "end": 607
                    },
                    "start": 592,
                    "end": 607
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 569,
                  "end": 608
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "awaiting",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 617,
                    "end": 625
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
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 626,
                          "end": 627
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 626,
                        "end": 627
                      }
                    ],
                    "start": 625,
                    "end": 628
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "other",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Observable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 636,
                            "end": 646
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
                                  "start": 647,
                                  "end": 648
                                },
                                "typeArguments": null,
                                "start": 647,
                                "end": 648
                              }
                            ],
                            "start": 646,
                            "end": 649
                          },
                          "start": 636,
                          "end": 649
                        },
                        "start": 634,
                        "end": 649
                      },
                      "start": 629,
                      "end": 649
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Property",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 652,
                        "end": 660
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSBooleanKeyword",
                            "start": 661,
                            "end": 668
                          }
                        ],
                        "start": 660,
                        "end": 669
                      },
                      "start": 652,
                      "end": 669
                    },
                    "start": 650,
                    "end": 669
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 617,
                  "end": 670
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "endOnError",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 679,
                    "end": 689
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
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
                                    "start": 702,
                                    "end": 703
                                  },
                                  "typeArguments": null,
                                  "start": 702,
                                  "end": 703
                                },
                                "start": 700,
                                "end": 703
                              },
                              "start": 695,
                              "end": 703
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 708,
                              "end": 715
                            },
                            "start": 705,
                            "end": 715
                          },
                          "start": 694,
                          "end": 715
                        },
                        "start": 692,
                        "end": 715
                      },
                      "start": 690,
                      "end": 715
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
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 729,
                              "end": 730
                            },
                            "typeArguments": null,
                            "start": 729,
                            "end": 730
                          }
                        ],
                        "start": 728,
                        "end": 731
                      },
                      "start": 718,
                      "end": 731
                    },
                    "start": 716,
                    "end": 731
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 679,
                  "end": 732
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "withHandler",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 741,
                    "end": 752
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
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
                              "name": "event",
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
                                    "start": 764,
                                    "end": 769
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
                                          "start": 770,
                                          "end": 771
                                        },
                                        "typeArguments": null,
                                        "start": 770,
                                        "end": 771
                                      }
                                    ],
                                    "start": 769,
                                    "end": 772
                                  },
                                  "start": 764,
                                  "end": 772
                                },
                                "start": 762,
                                "end": 772
                              },
                              "start": 757,
                              "end": 772
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 777,
                              "end": 780
                            },
                            "start": 774,
                            "end": 780
                          },
                          "start": 756,
                          "end": 780
                        },
                        "start": 754,
                        "end": 780
                      },
                      "start": 753,
                      "end": 780
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
                        "start": 783,
                        "end": 793
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
                              "start": 794,
                              "end": 795
                            },
                            "typeArguments": null,
                            "start": 794,
                            "end": 795
                          }
                        ],
                        "start": 793,
                        "end": 796
                      },
                      "start": 783,
                      "end": 796
                    },
                    "start": 781,
                    "end": 796
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 741,
                  "end": 797
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 806,
                    "end": 810
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 817,
                          "end": 823
                        },
                        "start": 815,
                        "end": 823
                      },
                      "start": 811,
                      "end": 823
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
                        "start": 826,
                        "end": 836
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
                              "start": 837,
                              "end": 838
                            },
                            "typeArguments": null,
                            "start": 837,
                            "end": 838
                          }
                        ],
                        "start": 836,
                        "end": 839
                      },
                      "start": 826,
                      "end": 839
                    },
                    "start": 824,
                    "end": 839
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 806,
                  "end": 840
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "withDescription",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 849,
                    "end": 864
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
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
                        "start": 868,
                        "end": 872
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSAnyKeyword",
                            "start": 874,
                            "end": 877
                          },
                          "start": 874,
                          "end": 879
                        },
                        "start": 872,
                        "end": 879
                      },
                      "value": null,
                      "start": 865,
                      "end": 879
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
                        "start": 882,
                        "end": 892
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
                              "start": 893,
                              "end": 894
                            },
                            "typeArguments": null,
                            "start": 893,
                            "end": 894
                          }
                        ],
                        "start": 892,
                        "end": 895
                      },
                      "start": 882,
                      "end": 895
                    },
                    "start": 880,
                    "end": 895
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 849,
                  "end": 896
                }
              ],
              "start": 190,
              "end": 902
            },
            "declare": false,
            "start": 166,
            "end": 902
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Property",
              "optional": false,
              "typeAnnotation": null,
              "start": 917,
              "end": 925
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
                    "start": 926,
                    "end": 927
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 926,
                  "end": 927
                }
              ],
              "start": 925,
              "end": 928
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Observable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 937,
                  "end": 947
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
                        "start": 948,
                        "end": 949
                      },
                      "typeArguments": null,
                      "start": 948,
                      "end": 949
                    }
                  ],
                  "start": 947,
                  "end": 950
                },
                "start": 937,
                "end": 950
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 951,
              "end": 958
            },
            "declare": false,
            "start": 907,
            "end": 958
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "EventStream",
              "optional": false,
              "typeAnnotation": null,
              "start": 973,
              "end": 984
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
                    "start": 985,
                    "end": 986
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 985,
                  "end": 986
                }
              ],
              "start": 984,
              "end": 987
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Observable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 996,
                  "end": 1006
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
                        "start": 1007,
                        "end": 1008
                      },
                      "typeArguments": null,
                      "start": 1007,
                      "end": 1008
                    }
                  ],
                  "start": 1006,
                  "end": 1009
                },
                "start": 996,
                "end": 1009
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 1010,
              "end": 1017
            },
            "declare": false,
            "start": 963,
            "end": 1017
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bus",
              "optional": false,
              "typeAnnotation": null,
              "start": 1032,
              "end": 1035
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
                    "start": 1036,
                    "end": 1037
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1036,
                  "end": 1037
                }
              ],
              "start": 1035,
              "end": 1038
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "EventStream",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1047,
                  "end": 1058
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
                        "start": 1059,
                        "end": 1060
                      },
                      "typeArguments": null,
                      "start": 1059,
                      "end": 1060
                    }
                  ],
                  "start": 1058,
                  "end": 1061
                },
                "start": 1047,
                "end": 1061
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 1062,
              "end": 1069
            },
            "declare": false,
            "start": 1022,
            "end": 1069
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Bus",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 1088,
                              "end": 1089
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1088,
                            "end": 1089
                          }
                        ],
                        "start": 1087,
                        "end": 1090
                      },
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Bus",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1096,
                            "end": 1099
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
                                  "start": 1100,
                                  "end": 1101
                                },
                                "typeArguments": null,
                                "start": 1100,
                                "end": 1101
                              }
                            ],
                            "start": 1099,
                            "end": 1102
                          },
                          "start": 1096,
                          "end": 1102
                        },
                        "start": 1093,
                        "end": 1102
                      },
                      "start": 1083,
                      "end": 1102
                    },
                    "start": 1081,
                    "end": 1102
                  },
                  "start": 1078,
                  "end": 1102
                },
                "init": null,
                "definite": false,
                "start": 1078,
                "end": 1102
              }
            ],
            "declare": false,
            "start": 1074,
            "end": 1103
          }
        ],
        "start": 81,
        "end": 1105
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 57,
      "end": 1105
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "stuck",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Bacon",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1118,
                    "end": 1123
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Bus",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1124,
                    "end": 1127
                  },
                  "start": 1118,
                  "end": 1127
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 1128,
                      "end": 1134
                    }
                  ],
                  "start": 1127,
                  "end": 1135
                },
                "start": 1118,
                "end": 1135
              },
              "start": 1116,
              "end": 1135
            },
            "start": 1111,
            "end": 1135
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Bacon",
                "optional": false,
                "typeAnnotation": null,
                "start": 1142,
                "end": 1147
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Bus",
                "optional": false,
                "typeAnnotation": null,
                "start": 1148,
                "end": 1151
              },
              "optional": false,
              "computed": false,
              "start": 1142,
              "end": 1151
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1138,
            "end": 1153
          },
          "definite": false,
          "start": 1111,
          "end": 1153
        }
      ],
      "declare": false,
      "start": 1107,
      "end": 1154
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 1154
}
```
