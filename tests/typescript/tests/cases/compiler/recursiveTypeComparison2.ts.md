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
        "start": 72,
        "end": 77
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
              "start": 94,
              "end": 99
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
                    "start": 100,
                    "end": 101
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 100,
                  "end": 101
                }
              ],
              "start": 99,
              "end": 102
            },
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 103,
              "end": 110
            },
            "declare": false,
            "start": 84,
            "end": 110
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Error",
              "optional": false,
              "typeAnnotation": null,
              "start": 125,
              "end": 130
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
                    "start": 131,
                    "end": 132
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 131,
                  "end": 132
                }
              ],
              "start": 130,
              "end": 133
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
                  "start": 142,
                  "end": 147
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
                        "start": 148,
                        "end": 149
                      },
                      "typeArguments": null,
                      "start": 148,
                      "end": 149
                    }
                  ],
                  "start": 147,
                  "end": 150
                },
                "start": 142,
                "end": 150
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 151,
              "end": 158
            },
            "declare": false,
            "start": 115,
            "end": 158
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Observable",
              "optional": false,
              "typeAnnotation": null,
              "start": 173,
              "end": 183
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
                    "start": 184,
                    "end": 185
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 184,
                  "end": 185
                }
              ],
              "start": 183,
              "end": 186
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
                    "start": 197,
                    "end": 200
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
                          "start": 201,
                          "end": 202
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 201,
                        "end": 202
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "V",
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
                      }
                    ],
                    "start": 200,
                    "end": 206
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
                            "start": 214,
                            "end": 225
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
                                  "start": 226,
                                  "end": 227
                                },
                                "typeArguments": null,
                                "start": 226,
                                "end": 227
                              }
                            ],
                            "start": 225,
                            "end": 228
                          },
                          "start": 214,
                          "end": 228
                        },
                        "start": 212,
                        "end": 228
                      },
                      "start": 207,
                      "end": 228
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
                                    "start": 237,
                                    "end": 238
                                  },
                                  "typeArguments": null,
                                  "start": 237,
                                  "end": 238
                                },
                                "start": 235,
                                "end": 238
                              },
                              "start": 234,
                              "end": 238
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
                                    "start": 243,
                                    "end": 244
                                  },
                                  "typeArguments": null,
                                  "start": 243,
                                  "end": 244
                                },
                                "start": 241,
                                "end": 244
                              },
                              "start": 240,
                              "end": 244
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
                                "start": 249,
                                "end": 250
                              },
                              "typeArguments": null,
                              "start": 249,
                              "end": 250
                            },
                            "start": 246,
                            "end": 250
                          },
                          "start": 233,
                          "end": 250
                        },
                        "start": 231,
                        "end": 250
                      },
                      "start": 230,
                      "end": 250
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
                        "start": 253,
                        "end": 264
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
                              "start": 265,
                              "end": 266
                            },
                            "typeArguments": null,
                            "start": 265,
                            "end": 266
                          }
                        ],
                        "start": 264,
                        "end": 267
                      },
                      "start": 253,
                      "end": 267
                    },
                    "start": 251,
                    "end": 267
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 197,
                  "end": 268
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "slidingWindow",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 277,
                    "end": 290
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
                          "start": 296,
                          "end": 302
                        },
                        "start": 294,
                        "end": 302
                      },
                      "start": 291,
                      "end": 302
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
                          "start": 310,
                          "end": 316
                        },
                        "start": 308,
                        "end": 316
                      },
                      "start": 304,
                      "end": 316
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
                        "start": 319,
                        "end": 327
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
                                "start": 328,
                                "end": 329
                              },
                              "typeArguments": null,
                              "start": 328,
                              "end": 329
                            },
                            "start": 328,
                            "end": 331
                          }
                        ],
                        "start": 327,
                        "end": 332
                      },
                      "start": 319,
                      "end": 332
                    },
                    "start": 317,
                    "end": 332
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 277,
                  "end": 333
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "log",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 342,
                    "end": 345
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
                        "start": 349,
                        "end": 359
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
                              "start": 360,
                              "end": 361
                            },
                            "typeArguments": null,
                            "start": 360,
                            "end": 361
                          }
                        ],
                        "start": 359,
                        "end": 362
                      },
                      "start": 349,
                      "end": 362
                    },
                    "start": 347,
                    "end": 362
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 342,
                  "end": 363
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "combine",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 372,
                    "end": 379
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
                          "start": 380,
                          "end": 381
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 380,
                        "end": 381
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "V",
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
                      }
                    ],
                    "start": 379,
                    "end": 385
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
                            "start": 393,
                            "end": 403
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
                                  "start": 404,
                                  "end": 405
                                },
                                "typeArguments": null,
                                "start": 404,
                                "end": 405
                              }
                            ],
                            "start": 403,
                            "end": 406
                          },
                          "start": 393,
                          "end": 406
                        },
                        "start": 391,
                        "end": 406
                      },
                      "start": 386,
                      "end": 406
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
                              "start": 412,
                              "end": 416
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
                                    "start": 421,
                                    "end": 422
                                  },
                                  "typeArguments": null,
                                  "start": 421,
                                  "end": 422
                                },
                                "start": 419,
                                "end": 422
                              },
                              "start": 418,
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
                                "name": "V",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 427,
                                "end": 428
                              },
                              "typeArguments": null,
                              "start": 427,
                              "end": 428
                            },
                            "start": 424,
                            "end": 428
                          },
                          "start": 411,
                          "end": 428
                        },
                        "start": 409,
                        "end": 428
                      },
                      "start": 408,
                      "end": 428
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
                        "start": 431,
                        "end": 439
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
                              "start": 440,
                              "end": 441
                            },
                            "typeArguments": null,
                            "start": 440,
                            "end": 441
                          }
                        ],
                        "start": 439,
                        "end": 442
                      },
                      "start": 431,
                      "end": 442
                    },
                    "start": 429,
                    "end": 442
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 372,
                  "end": 443
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "withStateMachine",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 452,
                    "end": 468
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
                          "start": 469,
                          "end": 470
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 469,
                        "end": 470
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "V",
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
                      }
                    ],
                    "start": 468,
                    "end": 474
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
                            "start": 486,
                            "end": 487
                          },
                          "typeArguments": null,
                          "start": 486,
                          "end": 487
                        },
                        "start": 484,
                        "end": 487
                      },
                      "start": 475,
                      "end": 487
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
                                    "start": 500,
                                    "end": 501
                                  },
                                  "typeArguments": null,
                                  "start": 500,
                                  "end": 501
                                },
                                "start": 498,
                                "end": 501
                              },
                              "start": 493,
                              "end": 501
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
                                    "start": 510,
                                    "end": 515
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
                                          "start": 516,
                                          "end": 517
                                        },
                                        "typeArguments": null,
                                        "start": 516,
                                        "end": 517
                                      }
                                    ],
                                    "start": 515,
                                    "end": 518
                                  },
                                  "start": 510,
                                  "end": 518
                                },
                                "start": 508,
                                "end": 518
                              },
                              "start": 503,
                              "end": 518
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
                                "start": 523,
                                "end": 533
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
                                      "start": 534,
                                      "end": 535
                                    },
                                    "typeArguments": null,
                                    "start": 534,
                                    "end": 535
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "V",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 537,
                                      "end": 538
                                    },
                                    "typeArguments": null,
                                    "start": 537,
                                    "end": 538
                                  }
                                ],
                                "start": 533,
                                "end": 539
                              },
                              "start": 523,
                              "end": 539
                            },
                            "start": 520,
                            "end": 539
                          },
                          "start": 492,
                          "end": 539
                        },
                        "start": 490,
                        "end": 539
                      },
                      "start": 489,
                      "end": 539
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
                        "start": 542,
                        "end": 553
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
                              "start": 554,
                              "end": 555
                            },
                            "typeArguments": null,
                            "start": 554,
                            "end": 555
                          }
                        ],
                        "start": 553,
                        "end": 556
                      },
                      "start": 542,
                      "end": 556
                    },
                    "start": 540,
                    "end": 556
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 452,
                  "end": 557
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "decode",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 566,
                    "end": 572
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
                            "start": 582,
                            "end": 588
                          },
                          "typeArguments": null,
                          "start": 582,
                          "end": 588
                        },
                        "start": 580,
                        "end": 588
                      },
                      "start": 573,
                      "end": 588
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
                        "start": 591,
                        "end": 599
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSAnyKeyword",
                            "start": 600,
                            "end": 603
                          }
                        ],
                        "start": 599,
                        "end": 604
                      },
                      "start": 591,
                      "end": 604
                    },
                    "start": 589,
                    "end": 604
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 566,
                  "end": 605
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "awaiting",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 614,
                    "end": 622
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
                          "start": 623,
                          "end": 624
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 623,
                        "end": 624
                      }
                    ],
                    "start": 622,
                    "end": 625
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
                            "start": 633,
                            "end": 643
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
                                  "start": 644,
                                  "end": 645
                                },
                                "typeArguments": null,
                                "start": 644,
                                "end": 645
                              }
                            ],
                            "start": 643,
                            "end": 646
                          },
                          "start": 633,
                          "end": 646
                        },
                        "start": 631,
                        "end": 646
                      },
                      "start": 626,
                      "end": 646
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
                        "start": 649,
                        "end": 657
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSBooleanKeyword",
                            "start": 658,
                            "end": 665
                          }
                        ],
                        "start": 657,
                        "end": 666
                      },
                      "start": 649,
                      "end": 666
                    },
                    "start": 647,
                    "end": 666
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 614,
                  "end": 667
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "endOnError",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 676,
                    "end": 686
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
                                    "start": 699,
                                    "end": 700
                                  },
                                  "typeArguments": null,
                                  "start": 699,
                                  "end": 700
                                },
                                "start": 697,
                                "end": 700
                              },
                              "start": 692,
                              "end": 700
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 705,
                              "end": 712
                            },
                            "start": 702,
                            "end": 712
                          },
                          "start": 691,
                          "end": 712
                        },
                        "start": 689,
                        "end": 712
                      },
                      "start": 687,
                      "end": 712
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
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 726,
                              "end": 727
                            },
                            "typeArguments": null,
                            "start": 726,
                            "end": 727
                          }
                        ],
                        "start": 725,
                        "end": 728
                      },
                      "start": 715,
                      "end": 728
                    },
                    "start": 713,
                    "end": 728
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 676,
                  "end": 729
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "withHandler",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 738,
                    "end": 749
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
                                    "start": 761,
                                    "end": 766
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
                                          "start": 767,
                                          "end": 768
                                        },
                                        "typeArguments": null,
                                        "start": 767,
                                        "end": 768
                                      }
                                    ],
                                    "start": 766,
                                    "end": 769
                                  },
                                  "start": 761,
                                  "end": 769
                                },
                                "start": 759,
                                "end": 769
                              },
                              "start": 754,
                              "end": 769
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 774,
                              "end": 777
                            },
                            "start": 771,
                            "end": 777
                          },
                          "start": 753,
                          "end": 777
                        },
                        "start": 751,
                        "end": 777
                      },
                      "start": 750,
                      "end": 777
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
                        "start": 780,
                        "end": 790
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
                              "start": 791,
                              "end": 792
                            },
                            "typeArguments": null,
                            "start": 791,
                            "end": 792
                          }
                        ],
                        "start": 790,
                        "end": 793
                      },
                      "start": 780,
                      "end": 793
                    },
                    "start": 778,
                    "end": 793
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 738,
                  "end": 794
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 803,
                    "end": 807
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
                          "start": 814,
                          "end": 820
                        },
                        "start": 812,
                        "end": 820
                      },
                      "start": 808,
                      "end": 820
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
                        "start": 823,
                        "end": 833
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
                              "start": 834,
                              "end": 835
                            },
                            "typeArguments": null,
                            "start": 834,
                            "end": 835
                          }
                        ],
                        "start": 833,
                        "end": 836
                      },
                      "start": 823,
                      "end": 836
                    },
                    "start": 821,
                    "end": 836
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 803,
                  "end": 837
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "withDescription",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 846,
                    "end": 861
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
                        "start": 865,
                        "end": 869
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSAnyKeyword",
                            "start": 871,
                            "end": 874
                          },
                          "start": 871,
                          "end": 876
                        },
                        "start": 869,
                        "end": 876
                      },
                      "value": null,
                      "start": 862,
                      "end": 876
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
                        "start": 879,
                        "end": 889
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
                              "start": 890,
                              "end": 891
                            },
                            "typeArguments": null,
                            "start": 890,
                            "end": 891
                          }
                        ],
                        "start": 889,
                        "end": 892
                      },
                      "start": 879,
                      "end": 892
                    },
                    "start": 877,
                    "end": 892
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 846,
                  "end": 893
                }
              ],
              "start": 187,
              "end": 899
            },
            "declare": false,
            "start": 163,
            "end": 899
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Property",
              "optional": false,
              "typeAnnotation": null,
              "start": 914,
              "end": 922
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
                    "start": 923,
                    "end": 924
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 923,
                  "end": 924
                }
              ],
              "start": 922,
              "end": 925
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
                  "start": 934,
                  "end": 944
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
                        "start": 945,
                        "end": 946
                      },
                      "typeArguments": null,
                      "start": 945,
                      "end": 946
                    }
                  ],
                  "start": 944,
                  "end": 947
                },
                "start": 934,
                "end": 947
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 948,
              "end": 955
            },
            "declare": false,
            "start": 904,
            "end": 955
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "EventStream",
              "optional": false,
              "typeAnnotation": null,
              "start": 970,
              "end": 981
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
                    "start": 982,
                    "end": 983
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 982,
                  "end": 983
                }
              ],
              "start": 981,
              "end": 984
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
                  "start": 993,
                  "end": 1003
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
                        "start": 1004,
                        "end": 1005
                      },
                      "typeArguments": null,
                      "start": 1004,
                      "end": 1005
                    }
                  ],
                  "start": 1003,
                  "end": 1006
                },
                "start": 993,
                "end": 1006
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 1007,
              "end": 1014
            },
            "declare": false,
            "start": 960,
            "end": 1014
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bus",
              "optional": false,
              "typeAnnotation": null,
              "start": 1029,
              "end": 1032
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
                    "start": 1033,
                    "end": 1034
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1033,
                  "end": 1034
                }
              ],
              "start": 1032,
              "end": 1035
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
                  "start": 1044,
                  "end": 1055
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
                        "start": 1056,
                        "end": 1057
                      },
                      "typeArguments": null,
                      "start": 1056,
                      "end": 1057
                    }
                  ],
                  "start": 1055,
                  "end": 1058
                },
                "start": 1044,
                "end": 1058
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 1059,
              "end": 1066
            },
            "declare": false,
            "start": 1019,
            "end": 1066
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
                              "start": 1085,
                              "end": 1086
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1085,
                            "end": 1086
                          }
                        ],
                        "start": 1084,
                        "end": 1087
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
                            "start": 1093,
                            "end": 1096
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
                                  "start": 1097,
                                  "end": 1098
                                },
                                "typeArguments": null,
                                "start": 1097,
                                "end": 1098
                              }
                            ],
                            "start": 1096,
                            "end": 1099
                          },
                          "start": 1093,
                          "end": 1099
                        },
                        "start": 1090,
                        "end": 1099
                      },
                      "start": 1080,
                      "end": 1099
                    },
                    "start": 1078,
                    "end": 1099
                  },
                  "start": 1075,
                  "end": 1099
                },
                "init": null,
                "definite": false,
                "start": 1075,
                "end": 1099
              }
            ],
            "declare": false,
            "start": 1071,
            "end": 1100
          }
        ],
        "start": 78,
        "end": 1102
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 57,
      "end": 1102
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
                    "start": 1115,
                    "end": 1120
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Bus",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1121,
                    "end": 1124
                  },
                  "start": 1115,
                  "end": 1124
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 1125,
                      "end": 1131
                    }
                  ],
                  "start": 1124,
                  "end": 1132
                },
                "start": 1115,
                "end": 1132
              },
              "start": 1113,
              "end": 1132
            },
            "start": 1108,
            "end": 1132
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
                "start": 1139,
                "end": 1144
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Bus",
                "optional": false,
                "typeAnnotation": null,
                "start": 1145,
                "end": 1148
              },
              "optional": false,
              "computed": false,
              "start": 1139,
              "end": 1148
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1135,
            "end": 1150
          },
          "definite": false,
          "start": 1108,
          "end": 1150
        }
      ],
      "declare": false,
      "start": 1104,
      "end": 1151
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 1151
}
```
