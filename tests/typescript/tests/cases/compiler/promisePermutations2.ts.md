__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Promise",
        "optional": false,
        "typeAnnotation": null,
        "start": 87,
        "end": 94
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
              "start": 95,
              "end": 96
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 95,
            "end": 96
          }
        ],
        "start": 94,
        "end": 97
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
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 104,
              "end": 108
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
                    "start": 109,
                    "end": 110
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 109,
                  "end": 110
                }
              ],
              "start": 108,
              "end": 111
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "success",
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
                              "start": 130,
                              "end": 131
                            },
                            "typeArguments": null,
                            "start": 130,
                            "end": 131
                          },
                          "start": 128,
                          "end": 131
                        },
                        "start": 123,
                        "end": 131
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 136,
                          "end": 137
                        },
                        "typeArguments": null,
                        "start": 136,
                        "end": 137
                      },
                      "start": 133,
                      "end": 137
                    },
                    "start": 122,
                    "end": 137
                  },
                  "start": 120,
                  "end": 137
                },
                "start": 112,
                "end": 137
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
                            "start": 155,
                            "end": 158
                          },
                          "start": 153,
                          "end": 158
                        },
                        "start": 148,
                        "end": 158
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 163,
                          "end": 164
                        },
                        "typeArguments": null,
                        "start": 163,
                        "end": 164
                      },
                      "start": 160,
                      "end": 164
                    },
                    "start": 147,
                    "end": 164
                  },
                  "start": 145,
                  "end": 164
                },
                "start": 139,
                "end": 164
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "progress",
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
                        "name": "progress",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 188,
                            "end": 191
                          },
                          "start": 186,
                          "end": 191
                        },
                        "start": 178,
                        "end": 191
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 196,
                        "end": 200
                      },
                      "start": 193,
                      "end": 200
                    },
                    "start": 177,
                    "end": 200
                  },
                  "start": 175,
                  "end": 200
                },
                "start": 166,
                "end": 200
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 203,
                  "end": 210
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
                        "start": 211,
                        "end": 212
                      },
                      "typeArguments": null,
                      "start": 211,
                      "end": 212
                    }
                  ],
                  "start": 210,
                  "end": 213
                },
                "start": 203,
                "end": 213
              },
              "start": 201,
              "end": 213
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 104,
            "end": 214
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "done",
              "optional": false,
              "typeAnnotation": null,
              "start": 219,
              "end": 223
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
                    "start": 224,
                    "end": 225
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 224,
                  "end": 225
                }
              ],
              "start": 223,
              "end": 226
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "success",
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
                              "start": 245,
                              "end": 246
                            },
                            "typeArguments": null,
                            "start": 245,
                            "end": 246
                          },
                          "start": 243,
                          "end": 246
                        },
                        "start": 238,
                        "end": 246
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 251,
                        "end": 254
                      },
                      "start": 248,
                      "end": 254
                    },
                    "start": 237,
                    "end": 254
                  },
                  "start": 235,
                  "end": 254
                },
                "start": 227,
                "end": 254
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
                            "start": 272,
                            "end": 275
                          },
                          "start": 270,
                          "end": 275
                        },
                        "start": 265,
                        "end": 275
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 280,
                        "end": 283
                      },
                      "start": 277,
                      "end": 283
                    },
                    "start": 264,
                    "end": 283
                  },
                  "start": 262,
                  "end": 283
                },
                "start": 256,
                "end": 283
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "progress",
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
                        "name": "progress",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 307,
                            "end": 310
                          },
                          "start": 305,
                          "end": 310
                        },
                        "start": 297,
                        "end": 310
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 315,
                        "end": 319
                      },
                      "start": 312,
                      "end": 319
                    },
                    "start": 296,
                    "end": 319
                  },
                  "start": 294,
                  "end": 319
                },
                "start": 285,
                "end": 319
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 322,
                "end": 326
              },
              "start": 320,
              "end": 326
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 219,
            "end": 327
          }
        ],
        "start": 98,
        "end": 329
      },
      "declare": false,
      "start": 77,
      "end": 329
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IPromise",
        "optional": false,
        "typeAnnotation": null,
        "start": 341,
        "end": 349
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
              "start": 350,
              "end": 351
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 350,
            "end": 351
          }
        ],
        "start": 349,
        "end": 352
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
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 359,
              "end": 363
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
                    "start": 364,
                    "end": 365
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 364,
                  "end": 365
                }
              ],
              "start": 363,
              "end": 366
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "success",
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
                              "start": 385,
                              "end": 386
                            },
                            "typeArguments": null,
                            "start": 385,
                            "end": 386
                          },
                          "start": 383,
                          "end": 386
                        },
                        "start": 378,
                        "end": 386
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IPromise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 391,
                          "end": 399
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
                                "start": 400,
                                "end": 401
                              },
                              "typeArguments": null,
                              "start": 400,
                              "end": 401
                            }
                          ],
                          "start": 399,
                          "end": 402
                        },
                        "start": 391,
                        "end": 402
                      },
                      "start": 388,
                      "end": 402
                    },
                    "start": 377,
                    "end": 402
                  },
                  "start": 375,
                  "end": 402
                },
                "start": 367,
                "end": 402
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
                            "start": 420,
                            "end": 423
                          },
                          "start": 418,
                          "end": 423
                        },
                        "start": 413,
                        "end": 423
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IPromise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 428,
                          "end": 436
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
                                "start": 437,
                                "end": 438
                              },
                              "typeArguments": null,
                              "start": 437,
                              "end": 438
                            }
                          ],
                          "start": 436,
                          "end": 439
                        },
                        "start": 428,
                        "end": 439
                      },
                      "start": 425,
                      "end": 439
                    },
                    "start": 412,
                    "end": 439
                  },
                  "start": 410,
                  "end": 439
                },
                "start": 404,
                "end": 439
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "progress",
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
                        "name": "progress",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 463,
                            "end": 466
                          },
                          "start": 461,
                          "end": 466
                        },
                        "start": 453,
                        "end": 466
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 471,
                        "end": 475
                      },
                      "start": 468,
                      "end": 475
                    },
                    "start": 452,
                    "end": 475
                  },
                  "start": 450,
                  "end": 475
                },
                "start": 441,
                "end": 475
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 478,
                  "end": 486
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
                        "start": 487,
                        "end": 488
                      },
                      "typeArguments": null,
                      "start": 487,
                      "end": 488
                    }
                  ],
                  "start": 486,
                  "end": 489
                },
                "start": 478,
                "end": 489
              },
              "start": 476,
              "end": 489
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 359,
            "end": 490
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 495,
              "end": 499
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
                    "start": 500,
                    "end": 501
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 500,
                  "end": 501
                }
              ],
              "start": 499,
              "end": 502
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "success",
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
                              "start": 521,
                              "end": 522
                            },
                            "typeArguments": null,
                            "start": 521,
                            "end": 522
                          },
                          "start": 519,
                          "end": 522
                        },
                        "start": 514,
                        "end": 522
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IPromise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 527,
                          "end": 535
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
                                "start": 536,
                                "end": 537
                              },
                              "typeArguments": null,
                              "start": 536,
                              "end": 537
                            }
                          ],
                          "start": 535,
                          "end": 538
                        },
                        "start": 527,
                        "end": 538
                      },
                      "start": 524,
                      "end": 538
                    },
                    "start": 513,
                    "end": 538
                  },
                  "start": 511,
                  "end": 538
                },
                "start": 503,
                "end": 538
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
                            "start": 556,
                            "end": 559
                          },
                          "start": 554,
                          "end": 559
                        },
                        "start": 549,
                        "end": 559
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 564,
                          "end": 565
                        },
                        "typeArguments": null,
                        "start": 564,
                        "end": 565
                      },
                      "start": 561,
                      "end": 565
                    },
                    "start": 548,
                    "end": 565
                  },
                  "start": 546,
                  "end": 565
                },
                "start": 540,
                "end": 565
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "progress",
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
                        "name": "progress",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 589,
                            "end": 592
                          },
                          "start": 587,
                          "end": 592
                        },
                        "start": 579,
                        "end": 592
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 597,
                        "end": 601
                      },
                      "start": 594,
                      "end": 601
                    },
                    "start": 578,
                    "end": 601
                  },
                  "start": 576,
                  "end": 601
                },
                "start": 567,
                "end": 601
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 604,
                  "end": 612
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
                        "start": 613,
                        "end": 614
                      },
                      "typeArguments": null,
                      "start": 613,
                      "end": 614
                    }
                  ],
                  "start": 612,
                  "end": 615
                },
                "start": 604,
                "end": 615
              },
              "start": 602,
              "end": 615
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 495,
            "end": 616
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 621,
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
                "name": "success",
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
                              "start": 647,
                              "end": 648
                            },
                            "typeArguments": null,
                            "start": 647,
                            "end": 648
                          },
                          "start": 645,
                          "end": 648
                        },
                        "start": 640,
                        "end": 648
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 653,
                          "end": 654
                        },
                        "typeArguments": null,
                        "start": 653,
                        "end": 654
                      },
                      "start": 650,
                      "end": 654
                    },
                    "start": 639,
                    "end": 654
                  },
                  "start": 637,
                  "end": 654
                },
                "start": 629,
                "end": 654
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
                            "start": 672,
                            "end": 675
                          },
                          "start": 670,
                          "end": 675
                        },
                        "start": 665,
                        "end": 675
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IPromise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 680,
                          "end": 688
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
                                "start": 689,
                                "end": 690
                              },
                              "typeArguments": null,
                              "start": 689,
                              "end": 690
                            }
                          ],
                          "start": 688,
                          "end": 691
                        },
                        "start": 680,
                        "end": 691
                      },
                      "start": 677,
                      "end": 691
                    },
                    "start": 664,
                    "end": 691
                  },
                  "start": 662,
                  "end": 691
                },
                "start": 656,
                "end": 691
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "progress",
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
                        "name": "progress",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 715,
                            "end": 718
                          },
                          "start": 713,
                          "end": 718
                        },
                        "start": 705,
                        "end": 718
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 723,
                        "end": 727
                      },
                      "start": 720,
                      "end": 727
                    },
                    "start": 704,
                    "end": 727
                  },
                  "start": 702,
                  "end": 727
                },
                "start": 693,
                "end": 727
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 730,
                  "end": 738
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
                        "start": 739,
                        "end": 740
                      },
                      "typeArguments": null,
                      "start": 739,
                      "end": 740
                    }
                  ],
                  "start": 738,
                  "end": 741
                },
                "start": 730,
                "end": 741
              },
              "start": 728,
              "end": 741
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 621,
            "end": 742
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 747,
              "end": 751
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
                    "start": 752,
                    "end": 753
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 752,
                  "end": 753
                }
              ],
              "start": 751,
              "end": 754
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "success",
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
                              "start": 773,
                              "end": 774
                            },
                            "typeArguments": null,
                            "start": 773,
                            "end": 774
                          },
                          "start": 771,
                          "end": 774
                        },
                        "start": 766,
                        "end": 774
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 779,
                          "end": 780
                        },
                        "typeArguments": null,
                        "start": 779,
                        "end": 780
                      },
                      "start": 776,
                      "end": 780
                    },
                    "start": 765,
                    "end": 780
                  },
                  "start": 763,
                  "end": 780
                },
                "start": 755,
                "end": 780
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
                            "start": 798,
                            "end": 801
                          },
                          "start": 796,
                          "end": 801
                        },
                        "start": 791,
                        "end": 801
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 806,
                          "end": 807
                        },
                        "typeArguments": null,
                        "start": 806,
                        "end": 807
                      },
                      "start": 803,
                      "end": 807
                    },
                    "start": 790,
                    "end": 807
                  },
                  "start": 788,
                  "end": 807
                },
                "start": 782,
                "end": 807
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "progress",
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
                        "name": "progress",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 831,
                            "end": 834
                          },
                          "start": 829,
                          "end": 834
                        },
                        "start": 821,
                        "end": 834
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 839,
                        "end": 843
                      },
                      "start": 836,
                      "end": 843
                    },
                    "start": 820,
                    "end": 843
                  },
                  "start": 818,
                  "end": 843
                },
                "start": 809,
                "end": 843
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 846,
                  "end": 854
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
                        "start": 855,
                        "end": 856
                      },
                      "typeArguments": null,
                      "start": 855,
                      "end": 856
                    }
                  ],
                  "start": 854,
                  "end": 857
                },
                "start": 846,
                "end": 857
              },
              "start": 844,
              "end": 857
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 747,
            "end": 858
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "done",
              "optional": false,
              "typeAnnotation": null,
              "start": 863,
              "end": 867
            },
            "computed": false,
            "optional": true,
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
                    "start": 870,
                    "end": 871
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 870,
                  "end": 871
                }
              ],
              "start": 869,
              "end": 872
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "success",
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
                              "start": 891,
                              "end": 892
                            },
                            "typeArguments": null,
                            "start": 891,
                            "end": 892
                          },
                          "start": 889,
                          "end": 892
                        },
                        "start": 884,
                        "end": 892
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 897,
                        "end": 900
                      },
                      "start": 894,
                      "end": 900
                    },
                    "start": 883,
                    "end": 900
                  },
                  "start": 881,
                  "end": 900
                },
                "start": 873,
                "end": 900
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
                            "start": 918,
                            "end": 921
                          },
                          "start": 916,
                          "end": 921
                        },
                        "start": 911,
                        "end": 921
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 926,
                        "end": 929
                      },
                      "start": 923,
                      "end": 929
                    },
                    "start": 910,
                    "end": 929
                  },
                  "start": 908,
                  "end": 929
                },
                "start": 902,
                "end": 929
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "progress",
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
                        "name": "progress",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 953,
                            "end": 956
                          },
                          "start": 951,
                          "end": 956
                        },
                        "start": 943,
                        "end": 956
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 961,
                        "end": 965
                      },
                      "start": 958,
                      "end": 965
                    },
                    "start": 942,
                    "end": 965
                  },
                  "start": 940,
                  "end": 965
                },
                "start": 931,
                "end": 965
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 968,
                "end": 972
              },
              "start": 966,
              "end": 972
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 863,
            "end": 973
          }
        ],
        "start": 353,
        "end": 975
      },
      "declare": false,
      "start": 331,
      "end": 975
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 994,
        "end": 1006
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1010,
            "end": 1018
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1019,
                "end": 1025
              }
            ],
            "start": 1018,
            "end": 1026
          },
          "start": 1010,
          "end": 1026
        },
        "start": 1008,
        "end": 1026
      },
      "body": null,
      "expression": false,
      "start": 977,
      "end": 1027
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunctionP",
        "optional": false,
        "typeAnnotation": null,
        "start": 1045,
        "end": 1058
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1062,
            "end": 1069
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1070,
                "end": 1076
              }
            ],
            "start": 1069,
            "end": 1077
          },
          "start": 1062,
          "end": 1077
        },
        "start": 1060,
        "end": 1077
      },
      "body": null,
      "expression": false,
      "start": 1028,
      "end": 1078
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1096,
        "end": 1109
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1113,
            "end": 1121
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
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
                      "start": 1124,
                      "end": 1125
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1127,
                        "end": 1133
                      },
                      "start": 1125,
                      "end": 1133
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1124,
                    "end": 1133
                  }
                ],
                "start": 1122,
                "end": 1135
              }
            ],
            "start": 1121,
            "end": 1136
          },
          "start": 1113,
          "end": 1136
        },
        "start": 1111,
        "end": 1136
      },
      "body": null,
      "expression": false,
      "start": 1079,
      "end": 1137
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction2P",
        "optional": false,
        "typeAnnotation": null,
        "start": 1155,
        "end": 1169
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1173,
            "end": 1180
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
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
                      "start": 1183,
                      "end": 1184
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1186,
                        "end": 1192
                      },
                      "start": 1184,
                      "end": 1192
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1183,
                    "end": 1192
                  }
                ],
                "start": 1181,
                "end": 1194
              }
            ],
            "start": 1180,
            "end": 1195
          },
          "start": 1173,
          "end": 1195
        },
        "start": 1171,
        "end": 1195
      },
      "body": null,
      "expression": false,
      "start": 1138,
      "end": 1196
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1214,
        "end": 1227
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSNumberKeyword",
              "start": 1231,
              "end": 1237
            },
            "start": 1229,
            "end": 1237
          },
          "start": 1228,
          "end": 1237
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1240,
            "end": 1248
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1249,
                "end": 1255
              }
            ],
            "start": 1248,
            "end": 1256
          },
          "start": 1240,
          "end": 1256
        },
        "start": 1238,
        "end": 1256
      },
      "body": null,
      "expression": false,
      "start": 1197,
      "end": 1257
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction3P",
        "optional": false,
        "typeAnnotation": null,
        "start": 1275,
        "end": 1289
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSNumberKeyword",
              "start": 1293,
              "end": 1299
            },
            "start": 1291,
            "end": 1299
          },
          "start": 1290,
          "end": 1299
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1302,
            "end": 1309
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1310,
                "end": 1316
              }
            ],
            "start": 1309,
            "end": 1317
          },
          "start": 1302,
          "end": 1317
        },
        "start": 1300,
        "end": 1317
      },
      "body": null,
      "expression": false,
      "start": 1258,
      "end": 1318
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1336,
        "end": 1349
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSNumberKeyword",
              "start": 1353,
              "end": 1359
            },
            "start": 1351,
            "end": 1359
          },
          "start": 1350,
          "end": 1359
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1365,
              "end": 1371
            },
            "start": 1363,
            "end": 1371
          },
          "start": 1361,
          "end": 1371
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1374,
            "end": 1382
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1383,
                "end": 1389
              }
            ],
            "start": 1382,
            "end": 1390
          },
          "start": 1374,
          "end": 1390
        },
        "start": 1372,
        "end": 1390
      },
      "body": null,
      "expression": false,
      "start": 1319,
      "end": 1391
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction4P",
        "optional": false,
        "typeAnnotation": null,
        "start": 1409,
        "end": 1423
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSNumberKeyword",
              "start": 1427,
              "end": 1433
            },
            "start": 1425,
            "end": 1433
          },
          "start": 1424,
          "end": 1433
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1439,
              "end": 1445
            },
            "start": 1437,
            "end": 1445
          },
          "start": 1435,
          "end": 1445
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1448,
            "end": 1455
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1456,
                "end": 1462
              }
            ],
            "start": 1455,
            "end": 1463
          },
          "start": 1448,
          "end": 1463
        },
        "start": 1446,
        "end": 1463
      },
      "body": null,
      "expression": false,
      "start": 1392,
      "end": 1464
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1482,
        "end": 1495
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSNumberKeyword",
              "start": 1499,
              "end": 1505
            },
            "start": 1497,
            "end": 1505
          },
          "start": 1496,
          "end": 1505
        },
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1515,
                      "end": 1521
                    },
                    "start": 1513,
                    "end": 1521
                  },
                  "start": 1512,
                  "end": 1521
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1526,
                  "end": 1532
                },
                "start": 1523,
                "end": 1532
              },
              "start": 1511,
              "end": 1532
            },
            "start": 1509,
            "end": 1532
          },
          "start": 1507,
          "end": 1532
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1535,
            "end": 1543
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1544,
                "end": 1550
              }
            ],
            "start": 1543,
            "end": 1551
          },
          "start": 1535,
          "end": 1551
        },
        "start": 1533,
        "end": 1551
      },
      "body": null,
      "expression": false,
      "start": 1465,
      "end": 1552
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction5P",
        "optional": false,
        "typeAnnotation": null,
        "start": 1570,
        "end": 1584
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSNumberKeyword",
              "start": 1588,
              "end": 1594
            },
            "start": 1586,
            "end": 1594
          },
          "start": 1585,
          "end": 1594
        },
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1604,
                      "end": 1610
                    },
                    "start": 1602,
                    "end": 1610
                  },
                  "start": 1601,
                  "end": 1610
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1615,
                  "end": 1621
                },
                "start": 1612,
                "end": 1621
              },
              "start": 1600,
              "end": 1621
            },
            "start": 1598,
            "end": 1621
          },
          "start": 1596,
          "end": 1621
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1624,
            "end": 1631
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1632,
                "end": 1638
              }
            ],
            "start": 1631,
            "end": 1639
          },
          "start": 1624,
          "end": 1639
        },
        "start": 1622,
        "end": 1639
      },
      "body": null,
      "expression": false,
      "start": 1553,
      "end": 1640
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1658,
        "end": 1671
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSNumberKeyword",
              "start": 1675,
              "end": 1681
            },
            "start": 1673,
            "end": 1681
          },
          "start": 1672,
          "end": 1681
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                      "start": 1688,
                      "end": 1689
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1688,
                    "end": 1689
                  }
                ],
                "start": 1687,
                "end": 1690
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
                        "start": 1694,
                        "end": 1695
                      },
                      "typeArguments": null,
                      "start": 1694,
                      "end": 1695
                    },
                    "start": 1692,
                    "end": 1695
                  },
                  "start": 1691,
                  "end": 1695
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
                    "start": 1700,
                    "end": 1701
                  },
                  "typeArguments": null,
                  "start": 1700,
                  "end": 1701
                },
                "start": 1697,
                "end": 1701
              },
              "start": 1687,
              "end": 1701
            },
            "start": 1685,
            "end": 1701
          },
          "start": 1683,
          "end": 1701
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1704,
            "end": 1712
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1713,
                "end": 1719
              }
            ],
            "start": 1712,
            "end": 1720
          },
          "start": 1704,
          "end": 1720
        },
        "start": 1702,
        "end": 1720
      },
      "body": null,
      "expression": false,
      "start": 1641,
      "end": 1721
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction6P",
        "optional": false,
        "typeAnnotation": null,
        "start": 1739,
        "end": 1753
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSNumberKeyword",
              "start": 1757,
              "end": 1763
            },
            "start": 1755,
            "end": 1763
          },
          "start": 1754,
          "end": 1763
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                      "start": 1770,
                      "end": 1771
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1770,
                    "end": 1771
                  }
                ],
                "start": 1769,
                "end": 1772
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
                        "start": 1776,
                        "end": 1777
                      },
                      "typeArguments": null,
                      "start": 1776,
                      "end": 1777
                    },
                    "start": 1774,
                    "end": 1777
                  },
                  "start": 1773,
                  "end": 1777
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
                    "start": 1782,
                    "end": 1783
                  },
                  "typeArguments": null,
                  "start": 1782,
                  "end": 1783
                },
                "start": 1779,
                "end": 1783
              },
              "start": 1769,
              "end": 1783
            },
            "start": 1767,
            "end": 1783
          },
          "start": 1765,
          "end": 1783
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1786,
            "end": 1793
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1794,
                "end": 1800
              }
            ],
            "start": 1793,
            "end": 1801
          },
          "start": 1786,
          "end": 1801
        },
        "start": 1784,
        "end": 1801
      },
      "body": null,
      "expression": false,
      "start": 1722,
      "end": 1802
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1820,
        "end": 1833
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                      "start": 1839,
                      "end": 1840
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1839,
                    "end": 1840
                  }
                ],
                "start": 1838,
                "end": 1841
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
                        "start": 1845,
                        "end": 1846
                      },
                      "typeArguments": null,
                      "start": 1845,
                      "end": 1846
                    },
                    "start": 1843,
                    "end": 1846
                  },
                  "start": 1842,
                  "end": 1846
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
                    "start": 1851,
                    "end": 1852
                  },
                  "typeArguments": null,
                  "start": 1851,
                  "end": 1852
                },
                "start": 1848,
                "end": 1852
              },
              "start": 1838,
              "end": 1852
            },
            "start": 1836,
            "end": 1852
          },
          "start": 1834,
          "end": 1852
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1855,
            "end": 1863
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1864,
                "end": 1870
              }
            ],
            "start": 1863,
            "end": 1871
          },
          "start": 1855,
          "end": 1871
        },
        "start": 1853,
        "end": 1871
      },
      "body": null,
      "expression": false,
      "start": 1803,
      "end": 1872
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction7P",
        "optional": false,
        "typeAnnotation": null,
        "start": 1890,
        "end": 1904
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                      "start": 1910,
                      "end": 1911
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1910,
                    "end": 1911
                  }
                ],
                "start": 1909,
                "end": 1912
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
                        "start": 1916,
                        "end": 1917
                      },
                      "typeArguments": null,
                      "start": 1916,
                      "end": 1917
                    },
                    "start": 1914,
                    "end": 1917
                  },
                  "start": 1913,
                  "end": 1917
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
                    "start": 1922,
                    "end": 1923
                  },
                  "typeArguments": null,
                  "start": 1922,
                  "end": 1923
                },
                "start": 1919,
                "end": 1923
              },
              "start": 1909,
              "end": 1923
            },
            "start": 1907,
            "end": 1923
          },
          "start": 1905,
          "end": 1923
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1926,
            "end": 1933
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1934,
                "end": 1940
              }
            ],
            "start": 1933,
            "end": 1941
          },
          "start": 1926,
          "end": 1941
        },
        "start": 1924,
        "end": 1941
      },
      "body": null,
      "expression": false,
      "start": 1873,
      "end": 1942
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1960,
        "end": 1973
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
              "start": 1974,
              "end": 1975
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1974,
            "end": 1975
          }
        ],
        "start": 1973,
        "end": 1976
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                "start": 1980,
                "end": 1981
              },
              "typeArguments": null,
              "start": 1980,
              "end": 1981
            },
            "start": 1978,
            "end": 1981
          },
          "start": 1977,
          "end": 1981
        },
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
                        "start": 1991,
                        "end": 1992
                      },
                      "typeArguments": null,
                      "start": 1991,
                      "end": 1992
                    },
                    "start": 1989,
                    "end": 1992
                  },
                  "start": 1988,
                  "end": 1992
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
                    "start": 1997,
                    "end": 1998
                  },
                  "typeArguments": null,
                  "start": 1997,
                  "end": 1998
                },
                "start": 1994,
                "end": 1998
              },
              "start": 1987,
              "end": 1998
            },
            "start": 1985,
            "end": 1998
          },
          "start": 1983,
          "end": 1998
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2001,
            "end": 2009
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
                  "start": 2010,
                  "end": 2011
                },
                "typeArguments": null,
                "start": 2010,
                "end": 2011
              }
            ],
            "start": 2009,
            "end": 2012
          },
          "start": 2001,
          "end": 2012
        },
        "start": 1999,
        "end": 2012
      },
      "body": null,
      "expression": false,
      "start": 1943,
      "end": 2013
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction8P",
        "optional": false,
        "typeAnnotation": null,
        "start": 2031,
        "end": 2045
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
              "start": 2046,
              "end": 2047
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2046,
            "end": 2047
          }
        ],
        "start": 2045,
        "end": 2048
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                "start": 2052,
                "end": 2053
              },
              "typeArguments": null,
              "start": 2052,
              "end": 2053
            },
            "start": 2050,
            "end": 2053
          },
          "start": 2049,
          "end": 2053
        },
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
                        "start": 2063,
                        "end": 2064
                      },
                      "typeArguments": null,
                      "start": 2063,
                      "end": 2064
                    },
                    "start": 2061,
                    "end": 2064
                  },
                  "start": 2060,
                  "end": 2064
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
                    "start": 2069,
                    "end": 2070
                  },
                  "typeArguments": null,
                  "start": 2069,
                  "end": 2070
                },
                "start": 2066,
                "end": 2070
              },
              "start": 2059,
              "end": 2070
            },
            "start": 2057,
            "end": 2070
          },
          "start": 2055,
          "end": 2070
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2073,
            "end": 2080
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
                  "start": 2081,
                  "end": 2082
                },
                "typeArguments": null,
                "start": 2081,
                "end": 2082
              }
            ],
            "start": 2080,
            "end": 2083
          },
          "start": 2073,
          "end": 2083
        },
        "start": 2071,
        "end": 2083
      },
      "body": null,
      "expression": false,
      "start": 2014,
      "end": 2084
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction9",
        "optional": false,
        "typeAnnotation": null,
        "start": 2102,
        "end": 2115
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
              "start": 2116,
              "end": 2117
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2116,
            "end": 2117
          }
        ],
        "start": 2115,
        "end": 2118
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                "start": 2122,
                "end": 2123
              },
              "typeArguments": null,
              "start": 2122,
              "end": 2123
            },
            "start": 2120,
            "end": 2123
          },
          "start": 2119,
          "end": 2123
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                      "start": 2130,
                      "end": 2131
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2130,
                    "end": 2131
                  }
                ],
                "start": 2129,
                "end": 2132
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
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2136,
                        "end": 2137
                      },
                      "typeArguments": null,
                      "start": 2136,
                      "end": 2137
                    },
                    "start": 2134,
                    "end": 2137
                  },
                  "start": 2133,
                  "end": 2137
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2142,
                    "end": 2143
                  },
                  "typeArguments": null,
                  "start": 2142,
                  "end": 2143
                },
                "start": 2139,
                "end": 2143
              },
              "start": 2129,
              "end": 2143
            },
            "start": 2127,
            "end": 2143
          },
          "start": 2125,
          "end": 2143
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2146,
            "end": 2154
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
                  "start": 2155,
                  "end": 2156
                },
                "typeArguments": null,
                "start": 2155,
                "end": 2156
              }
            ],
            "start": 2154,
            "end": 2157
          },
          "start": 2146,
          "end": 2157
        },
        "start": 2144,
        "end": 2157
      },
      "body": null,
      "expression": false,
      "start": 2085,
      "end": 2158
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction9P",
        "optional": false,
        "typeAnnotation": null,
        "start": 2176,
        "end": 2190
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
              "start": 2191,
              "end": 2192
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2191,
            "end": 2192
          }
        ],
        "start": 2190,
        "end": 2193
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                "start": 2197,
                "end": 2198
              },
              "typeArguments": null,
              "start": 2197,
              "end": 2198
            },
            "start": 2195,
            "end": 2198
          },
          "start": 2194,
          "end": 2198
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                      "start": 2205,
                      "end": 2206
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2205,
                    "end": 2206
                  }
                ],
                "start": 2204,
                "end": 2207
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
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2211,
                        "end": 2212
                      },
                      "typeArguments": null,
                      "start": 2211,
                      "end": 2212
                    },
                    "start": 2209,
                    "end": 2212
                  },
                  "start": 2208,
                  "end": 2212
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2217,
                    "end": 2218
                  },
                  "typeArguments": null,
                  "start": 2217,
                  "end": 2218
                },
                "start": 2214,
                "end": 2218
              },
              "start": 2204,
              "end": 2218
            },
            "start": 2202,
            "end": 2218
          },
          "start": 2200,
          "end": 2218
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2221,
            "end": 2228
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
                  "start": 2229,
                  "end": 2230
                },
                "typeArguments": null,
                "start": 2229,
                "end": 2230
              }
            ],
            "start": 2228,
            "end": 2231
          },
          "start": 2221,
          "end": 2231
        },
        "start": 2219,
        "end": 2231
      },
      "body": null,
      "expression": false,
      "start": 2159,
      "end": 2232
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction10",
        "optional": false,
        "typeAnnotation": null,
        "start": 2250,
        "end": 2264
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
              "start": 2265,
              "end": 2266
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2265,
            "end": 2266
          }
        ],
        "start": 2264,
        "end": 2267
      },
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
                      "start": 2273,
                      "end": 2274
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2273,
                    "end": 2274
                  }
                ],
                "start": 2272,
                "end": 2275
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
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2279,
                        "end": 2280
                      },
                      "typeArguments": null,
                      "start": 2279,
                      "end": 2280
                    },
                    "start": 2277,
                    "end": 2280
                  },
                  "start": 2276,
                  "end": 2280
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2285,
                    "end": 2286
                  },
                  "typeArguments": null,
                  "start": 2285,
                  "end": 2286
                },
                "start": 2282,
                "end": 2286
              },
              "start": 2272,
              "end": 2286
            },
            "start": 2270,
            "end": 2286
          },
          "start": 2268,
          "end": 2286
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2289,
            "end": 2297
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
                  "start": 2298,
                  "end": 2299
                },
                "typeArguments": null,
                "start": 2298,
                "end": 2299
              }
            ],
            "start": 2297,
            "end": 2300
          },
          "start": 2289,
          "end": 2300
        },
        "start": 2287,
        "end": 2300
      },
      "body": null,
      "expression": false,
      "start": 2233,
      "end": 2301
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction10P",
        "optional": false,
        "typeAnnotation": null,
        "start": 2319,
        "end": 2334
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
              "start": 2335,
              "end": 2336
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2335,
            "end": 2336
          }
        ],
        "start": 2334,
        "end": 2337
      },
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
                      "start": 2343,
                      "end": 2344
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2343,
                    "end": 2344
                  }
                ],
                "start": 2342,
                "end": 2345
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
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2349,
                        "end": 2350
                      },
                      "typeArguments": null,
                      "start": 2349,
                      "end": 2350
                    },
                    "start": 2347,
                    "end": 2350
                  },
                  "start": 2346,
                  "end": 2350
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2355,
                    "end": 2356
                  },
                  "typeArguments": null,
                  "start": 2355,
                  "end": 2356
                },
                "start": 2352,
                "end": 2356
              },
              "start": 2342,
              "end": 2356
            },
            "start": 2340,
            "end": 2356
          },
          "start": 2338,
          "end": 2356
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2359,
            "end": 2366
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
                  "start": 2367,
                  "end": 2368
                },
                "typeArguments": null,
                "start": 2367,
                "end": 2368
              }
            ],
            "start": 2366,
            "end": 2369
          },
          "start": 2359,
          "end": 2369
        },
        "start": 2357,
        "end": 2369
      },
      "body": null,
      "expression": false,
      "start": 2302,
      "end": 2370
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction11",
        "optional": false,
        "typeAnnotation": null,
        "start": 2389,
        "end": 2403
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSNumberKeyword",
              "start": 2407,
              "end": 2413
            },
            "start": 2405,
            "end": 2413
          },
          "start": 2404,
          "end": 2413
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2416,
            "end": 2424
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 2425,
                "end": 2431
              }
            ],
            "start": 2424,
            "end": 2432
          },
          "start": 2416,
          "end": 2432
        },
        "start": 2414,
        "end": 2432
      },
      "body": null,
      "expression": false,
      "start": 2372,
      "end": 2433
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction11",
        "optional": false,
        "typeAnnotation": null,
        "start": 2451,
        "end": 2465
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 2469,
              "end": 2475
            },
            "start": 2467,
            "end": 2475
          },
          "start": 2466,
          "end": 2475
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2478,
            "end": 2486
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 2487,
                "end": 2493
              }
            ],
            "start": 2486,
            "end": 2494
          },
          "start": 2478,
          "end": 2494
        },
        "start": 2476,
        "end": 2494
      },
      "body": null,
      "expression": false,
      "start": 2434,
      "end": 2495
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction11P",
        "optional": false,
        "typeAnnotation": null,
        "start": 2513,
        "end": 2528
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSNumberKeyword",
              "start": 2532,
              "end": 2538
            },
            "start": 2530,
            "end": 2538
          },
          "start": 2529,
          "end": 2538
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2541,
            "end": 2548
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 2549,
                "end": 2555
              }
            ],
            "start": 2548,
            "end": 2556
          },
          "start": 2541,
          "end": 2556
        },
        "start": 2539,
        "end": 2556
      },
      "body": null,
      "expression": false,
      "start": 2496,
      "end": 2557
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction11P",
        "optional": false,
        "typeAnnotation": null,
        "start": 2575,
        "end": 2590
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 2594,
              "end": 2600
            },
            "start": 2592,
            "end": 2600
          },
          "start": 2591,
          "end": 2600
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2603,
            "end": 2610
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 2611,
                "end": 2617
              }
            ],
            "start": 2610,
            "end": 2618
          },
          "start": 2603,
          "end": 2618
        },
        "start": 2601,
        "end": 2618
      },
      "body": null,
      "expression": false,
      "start": 2558,
      "end": 2619
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction12",
        "optional": false,
        "typeAnnotation": null,
        "start": 2638,
        "end": 2652
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
              "start": 2653,
              "end": 2654
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2653,
            "end": 2654
          }
        ],
        "start": 2652,
        "end": 2655
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                "start": 2659,
                "end": 2660
              },
              "typeArguments": null,
              "start": 2659,
              "end": 2660
            },
            "start": 2657,
            "end": 2660
          },
          "start": 2656,
          "end": 2660
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2663,
            "end": 2671
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
                  "start": 2672,
                  "end": 2673
                },
                "typeArguments": null,
                "start": 2672,
                "end": 2673
              }
            ],
            "start": 2671,
            "end": 2674
          },
          "start": 2663,
          "end": 2674
        },
        "start": 2661,
        "end": 2674
      },
      "body": null,
      "expression": false,
      "start": 2621,
      "end": 2675
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction12",
        "optional": false,
        "typeAnnotation": null,
        "start": 2693,
        "end": 2707
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
              "start": 2708,
              "end": 2709
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2708,
            "end": 2709
          }
        ],
        "start": 2707,
        "end": 2710
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                "start": 2714,
                "end": 2715
              },
              "typeArguments": null,
              "start": 2714,
              "end": 2715
            },
            "start": 2712,
            "end": 2715
          },
          "start": 2711,
          "end": 2715
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
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
                "start": 2720,
                "end": 2721
              },
              "typeArguments": null,
              "start": 2720,
              "end": 2721
            },
            "start": 2718,
            "end": 2721
          },
          "start": 2717,
          "end": 2721
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2724,
            "end": 2732
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
                  "start": 2733,
                  "end": 2734
                },
                "typeArguments": null,
                "start": 2733,
                "end": 2734
              }
            ],
            "start": 2732,
            "end": 2735
          },
          "start": 2724,
          "end": 2735
        },
        "start": 2722,
        "end": 2735
      },
      "body": null,
      "expression": false,
      "start": 2676,
      "end": 2736
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction12P",
        "optional": false,
        "typeAnnotation": null,
        "start": 2754,
        "end": 2769
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
              "start": 2770,
              "end": 2771
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2770,
            "end": 2771
          }
        ],
        "start": 2769,
        "end": 2772
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                "start": 2776,
                "end": 2777
              },
              "typeArguments": null,
              "start": 2776,
              "end": 2777
            },
            "start": 2774,
            "end": 2777
          },
          "start": 2773,
          "end": 2777
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2780,
            "end": 2788
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
                  "start": 2789,
                  "end": 2790
                },
                "typeArguments": null,
                "start": 2789,
                "end": 2790
              }
            ],
            "start": 2788,
            "end": 2791
          },
          "start": 2780,
          "end": 2791
        },
        "start": 2778,
        "end": 2791
      },
      "body": null,
      "expression": false,
      "start": 2737,
      "end": 2792
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction12P",
        "optional": false,
        "typeAnnotation": null,
        "start": 2810,
        "end": 2825
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
              "start": 2826,
              "end": 2827
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2826,
            "end": 2827
          }
        ],
        "start": 2825,
        "end": 2828
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                "start": 2832,
                "end": 2833
              },
              "typeArguments": null,
              "start": 2832,
              "end": 2833
            },
            "start": 2830,
            "end": 2833
          },
          "start": 2829,
          "end": 2833
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
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
                "start": 2838,
                "end": 2839
              },
              "typeArguments": null,
              "start": 2838,
              "end": 2839
            },
            "start": 2836,
            "end": 2839
          },
          "start": 2835,
          "end": 2839
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2842,
            "end": 2849
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
                  "start": 2850,
                  "end": 2851
                },
                "typeArguments": null,
                "start": 2850,
                "end": 2851
              }
            ],
            "start": 2849,
            "end": 2852
          },
          "start": 2842,
          "end": 2852
        },
        "start": 2840,
        "end": 2852
      },
      "body": null,
      "expression": false,
      "start": 2793,
      "end": 2853
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
            "name": "r1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2863,
                  "end": 2871
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 2872,
                      "end": 2878
                    }
                  ],
                  "start": 2871,
                  "end": 2879
                },
                "start": 2863,
                "end": 2879
              },
              "start": 2861,
              "end": 2879
            },
            "start": 2859,
            "end": 2879
          },
          "init": null,
          "definite": false,
          "start": 2859,
          "end": 2879
        }
      ],
      "declare": false,
      "start": 2855,
      "end": 2880
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
            "name": "r1a",
            "optional": false,
            "typeAnnotation": null,
            "start": 2885,
            "end": 2888
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2891,
                "end": 2893
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 2894,
                "end": 2898
              },
              "optional": false,
              "computed": false,
              "start": 2891,
              "end": 2898
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 2899,
                "end": 2911
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 2913,
                "end": 2925
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 2927,
                "end": 2939
              }
            ],
            "optional": false,
            "start": 2891,
            "end": 2940
          },
          "definite": false,
          "start": 2885,
          "end": 2940
        }
      ],
      "declare": false,
      "start": 2881,
      "end": 2941
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
            "name": "r1b",
            "optional": false,
            "typeAnnotation": null,
            "start": 2946,
            "end": 2949
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2952,
                    "end": 2954
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2955,
                    "end": 2959
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2952,
                  "end": 2959
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2960,
                    "end": 2972
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2974,
                    "end": 2986
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2988,
                    "end": 3000
                  }
                ],
                "optional": false,
                "start": 2952,
                "end": 3001
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3002,
                "end": 3006
              },
              "optional": false,
              "computed": false,
              "start": 2952,
              "end": 3006
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3007,
                "end": 3019
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3021,
                "end": 3033
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3035,
                "end": 3047
              }
            ],
            "optional": false,
            "start": 2952,
            "end": 3048
          },
          "definite": false,
          "start": 2946,
          "end": 3048
        }
      ],
      "declare": false,
      "start": 2942,
      "end": 3049
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
            "name": "r1c",
            "optional": false,
            "typeAnnotation": null,
            "start": 3054,
            "end": 3057
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3060,
                "end": 3062
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3063,
                "end": 3067
              },
              "optional": false,
              "computed": false,
              "start": 3060,
              "end": 3067
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunctionP",
                "optional": false,
                "typeAnnotation": null,
                "start": 3068,
                "end": 3081
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunctionP",
                "optional": false,
                "typeAnnotation": null,
                "start": 3083,
                "end": 3096
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunctionP",
                "optional": false,
                "typeAnnotation": null,
                "start": 3098,
                "end": 3111
              }
            ],
            "optional": false,
            "start": 3060,
            "end": 3112
          },
          "definite": false,
          "start": 3054,
          "end": 3112
        }
      ],
      "declare": false,
      "start": 3050,
      "end": 3113
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
            "name": "s1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3122,
                  "end": 3129
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 3130,
                      "end": 3136
                    }
                  ],
                  "start": 3129,
                  "end": 3137
                },
                "start": 3122,
                "end": 3137
              },
              "start": 3120,
              "end": 3137
            },
            "start": 3118,
            "end": 3137
          },
          "init": null,
          "definite": false,
          "start": 3118,
          "end": 3137
        }
      ],
      "declare": false,
      "start": 3114,
      "end": 3138
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
            "name": "s1a",
            "optional": false,
            "typeAnnotation": null,
            "start": 3143,
            "end": 3146
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3149,
                "end": 3151
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3152,
                "end": 3156
              },
              "optional": false,
              "computed": false,
              "start": 3149,
              "end": 3156
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3157,
                "end": 3169
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3171,
                "end": 3183
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3185,
                "end": 3197
              }
            ],
            "optional": false,
            "start": 3149,
            "end": 3198
          },
          "definite": false,
          "start": 3143,
          "end": 3198
        }
      ],
      "declare": false,
      "start": 3139,
      "end": 3199
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
            "name": "s1b",
            "optional": false,
            "typeAnnotation": null,
            "start": 3204,
            "end": 3207
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3210,
                "end": 3212
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3213,
                "end": 3217
              },
              "optional": false,
              "computed": false,
              "start": 3210,
              "end": 3217
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunctionP",
                "optional": false,
                "typeAnnotation": null,
                "start": 3218,
                "end": 3231
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunctionP",
                "optional": false,
                "typeAnnotation": null,
                "start": 3233,
                "end": 3246
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunctionP",
                "optional": false,
                "typeAnnotation": null,
                "start": 3248,
                "end": 3261
              }
            ],
            "optional": false,
            "start": 3210,
            "end": 3262
          },
          "definite": false,
          "start": 3204,
          "end": 3262
        }
      ],
      "declare": false,
      "start": 3200,
      "end": 3263
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
            "name": "s1c",
            "optional": false,
            "typeAnnotation": null,
            "start": 3268,
            "end": 3271
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3274,
                "end": 3276
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3277,
                "end": 3281
              },
              "optional": false,
              "computed": false,
              "start": 3274,
              "end": 3281
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunctionP",
                "optional": false,
                "typeAnnotation": null,
                "start": 3282,
                "end": 3295
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3297,
                "end": 3309
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3311,
                "end": 3323
              }
            ],
            "optional": false,
            "start": 3274,
            "end": 3324
          },
          "definite": false,
          "start": 3268,
          "end": 3324
        }
      ],
      "declare": false,
      "start": 3264,
      "end": 3325
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
            "name": "s1d",
            "optional": false,
            "typeAnnotation": null,
            "start": 3330,
            "end": 3333
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3336,
                    "end": 3338
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3339,
                    "end": 3343
                  },
                  "optional": false,
                  "computed": false,
                  "start": 3336,
                  "end": 3343
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunctionP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3344,
                    "end": 3357
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3359,
                    "end": 3371
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3373,
                    "end": 3385
                  }
                ],
                "optional": false,
                "start": 3336,
                "end": 3386
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3387,
                "end": 3391
              },
              "optional": false,
              "computed": false,
              "start": 3336,
              "end": 3391
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3392,
                "end": 3404
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3406,
                "end": 3418
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3420,
                "end": 3432
              }
            ],
            "optional": false,
            "start": 3336,
            "end": 3433
          },
          "definite": false,
          "start": 3330,
          "end": 3433
        }
      ],
      "declare": false,
      "start": 3326,
      "end": 3434
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3444,
                  "end": 3452
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
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
                            "start": 3455,
                            "end": 3456
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3458,
                              "end": 3464
                            },
                            "start": 3456,
                            "end": 3464
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 3455,
                          "end": 3465
                        }
                      ],
                      "start": 3453,
                      "end": 3467
                    }
                  ],
                  "start": 3452,
                  "end": 3468
                },
                "start": 3444,
                "end": 3468
              },
              "start": 3442,
              "end": 3468
            },
            "start": 3440,
            "end": 3468
          },
          "init": null,
          "definite": false,
          "start": 3440,
          "end": 3468
        }
      ],
      "declare": false,
      "start": 3436,
      "end": 3469
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
            "name": "r2a",
            "optional": false,
            "typeAnnotation": null,
            "start": 3474,
            "end": 3477
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3480,
                "end": 3482
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3483,
                "end": 3487
              },
              "optional": false,
              "computed": false,
              "start": 3480,
              "end": 3487
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3488,
                "end": 3501
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3503,
                "end": 3516
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3518,
                "end": 3531
              }
            ],
            "optional": false,
            "start": 3480,
            "end": 3532
          },
          "definite": false,
          "start": 3474,
          "end": 3532
        }
      ],
      "declare": false,
      "start": 3470,
      "end": 3533
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
            "name": "r2b",
            "optional": false,
            "typeAnnotation": null,
            "start": 3538,
            "end": 3541
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3544,
                    "end": 3546
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3547,
                    "end": 3551
                  },
                  "optional": false,
                  "computed": false,
                  "start": 3544,
                  "end": 3551
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3552,
                    "end": 3565
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3567,
                    "end": 3580
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3582,
                    "end": 3595
                  }
                ],
                "optional": false,
                "start": 3544,
                "end": 3596
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3597,
                "end": 3601
              },
              "optional": false,
              "computed": false,
              "start": 3544,
              "end": 3601
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3602,
                "end": 3615
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3617,
                "end": 3630
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3632,
                "end": 3645
              }
            ],
            "optional": false,
            "start": 3544,
            "end": 3646
          },
          "definite": false,
          "start": 3538,
          "end": 3646
        }
      ],
      "declare": false,
      "start": 3534,
      "end": 3647
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
            "name": "s2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3656,
                  "end": 3663
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
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
                            "start": 3666,
                            "end": 3667
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3669,
                              "end": 3675
                            },
                            "start": 3667,
                            "end": 3675
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 3666,
                          "end": 3676
                        }
                      ],
                      "start": 3664,
                      "end": 3678
                    }
                  ],
                  "start": 3663,
                  "end": 3679
                },
                "start": 3656,
                "end": 3679
              },
              "start": 3654,
              "end": 3679
            },
            "start": 3652,
            "end": 3679
          },
          "init": null,
          "definite": false,
          "start": 3652,
          "end": 3679
        }
      ],
      "declare": false,
      "start": 3648,
      "end": 3680
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
            "name": "s2a",
            "optional": false,
            "typeAnnotation": null,
            "start": 3685,
            "end": 3688
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3691,
                "end": 3693
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3694,
                "end": 3698
              },
              "optional": false,
              "computed": false,
              "start": 3691,
              "end": 3698
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3699,
                "end": 3712
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3714,
                "end": 3727
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3729,
                "end": 3742
              }
            ],
            "optional": false,
            "start": 3691,
            "end": 3743
          },
          "definite": false,
          "start": 3685,
          "end": 3743
        }
      ],
      "declare": false,
      "start": 3681,
      "end": 3744
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
            "name": "s2b",
            "optional": false,
            "typeAnnotation": null,
            "start": 3749,
            "end": 3752
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3755,
                "end": 3757
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3758,
                "end": 3762
              },
              "optional": false,
              "computed": false,
              "start": 3755,
              "end": 3762
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2P",
                "optional": false,
                "typeAnnotation": null,
                "start": 3763,
                "end": 3777
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2P",
                "optional": false,
                "typeAnnotation": null,
                "start": 3779,
                "end": 3793
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2P",
                "optional": false,
                "typeAnnotation": null,
                "start": 3795,
                "end": 3809
              }
            ],
            "optional": false,
            "start": 3755,
            "end": 3810
          },
          "definite": false,
          "start": 3749,
          "end": 3810
        }
      ],
      "declare": false,
      "start": 3745,
      "end": 3811
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
            "name": "s2c",
            "optional": false,
            "typeAnnotation": null,
            "start": 3816,
            "end": 3819
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3822,
                "end": 3824
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3825,
                "end": 3829
              },
              "optional": false,
              "computed": false,
              "start": 3822,
              "end": 3829
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2P",
                "optional": false,
                "typeAnnotation": null,
                "start": 3830,
                "end": 3844
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3846,
                "end": 3859
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3861,
                "end": 3874
              }
            ],
            "optional": false,
            "start": 3822,
            "end": 3875
          },
          "definite": false,
          "start": 3816,
          "end": 3875
        }
      ],
      "declare": false,
      "start": 3812,
      "end": 3876
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
            "name": "s2d",
            "optional": false,
            "typeAnnotation": null,
            "start": 3881,
            "end": 3884
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3887,
                    "end": 3889
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3890,
                    "end": 3894
                  },
                  "optional": false,
                  "computed": false,
                  "start": 3887,
                  "end": 3894
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction2P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3895,
                    "end": 3909
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3911,
                    "end": 3924
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3926,
                    "end": 3939
                  }
                ],
                "optional": false,
                "start": 3887,
                "end": 3940
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3941,
                "end": 3945
              },
              "optional": false,
              "computed": false,
              "start": 3887,
              "end": 3945
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3946,
                "end": 3959
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3961,
                "end": 3974
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3976,
                "end": 3989
              }
            ],
            "optional": false,
            "start": 3887,
            "end": 3990
          },
          "definite": false,
          "start": 3881,
          "end": 3990
        }
      ],
      "declare": false,
      "start": 3877,
      "end": 3991
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4001,
                  "end": 4009
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 4010,
                      "end": 4016
                    }
                  ],
                  "start": 4009,
                  "end": 4017
                },
                "start": 4001,
                "end": 4017
              },
              "start": 3999,
              "end": 4017
            },
            "start": 3997,
            "end": 4017
          },
          "init": null,
          "definite": false,
          "start": 3997,
          "end": 4017
        }
      ],
      "declare": false,
      "start": 3993,
      "end": 4018
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
            "name": "r3a",
            "optional": false,
            "typeAnnotation": null,
            "start": 4023,
            "end": 4026
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4029,
                "end": 4031
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4032,
                "end": 4036
              },
              "optional": false,
              "computed": false,
              "start": 4029,
              "end": 4036
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4037,
                "end": 4050
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4052,
                "end": 4065
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4067,
                "end": 4080
              }
            ],
            "optional": false,
            "start": 4029,
            "end": 4081
          },
          "definite": false,
          "start": 4023,
          "end": 4081
        }
      ],
      "declare": false,
      "start": 4019,
      "end": 4082
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
            "name": "r3b",
            "optional": false,
            "typeAnnotation": null,
            "start": 4087,
            "end": 4090
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4093,
                    "end": 4095
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4096,
                    "end": 4100
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4093,
                  "end": 4100
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4101,
                    "end": 4114
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4116,
                    "end": 4129
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4131,
                    "end": 4144
                  }
                ],
                "optional": false,
                "start": 4093,
                "end": 4145
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4146,
                "end": 4150
              },
              "optional": false,
              "computed": false,
              "start": 4093,
              "end": 4150
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4151,
                "end": 4164
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4166,
                "end": 4179
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4181,
                "end": 4194
              }
            ],
            "optional": false,
            "start": 4093,
            "end": 4195
          },
          "definite": false,
          "start": 4087,
          "end": 4195
        }
      ],
      "declare": false,
      "start": 4083,
      "end": 4196
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
            "name": "s3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4205,
                  "end": 4212
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 4213,
                      "end": 4219
                    }
                  ],
                  "start": 4212,
                  "end": 4220
                },
                "start": 4205,
                "end": 4220
              },
              "start": 4203,
              "end": 4220
            },
            "start": 4201,
            "end": 4220
          },
          "init": null,
          "definite": false,
          "start": 4201,
          "end": 4220
        }
      ],
      "declare": false,
      "start": 4197,
      "end": 4221
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
            "name": "s3a",
            "optional": false,
            "typeAnnotation": null,
            "start": 4226,
            "end": 4229
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4232,
                "end": 4234
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4235,
                "end": 4239
              },
              "optional": false,
              "computed": false,
              "start": 4232,
              "end": 4239
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4240,
                "end": 4253
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4255,
                "end": 4268
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4270,
                "end": 4283
              }
            ],
            "optional": false,
            "start": 4232,
            "end": 4284
          },
          "definite": false,
          "start": 4226,
          "end": 4284
        }
      ],
      "declare": false,
      "start": 4222,
      "end": 4285
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
            "name": "s3b",
            "optional": false,
            "typeAnnotation": null,
            "start": 4290,
            "end": 4293
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4296,
                "end": 4298
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4299,
                "end": 4303
              },
              "optional": false,
              "computed": false,
              "start": 4296,
              "end": 4303
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3P",
                "optional": false,
                "typeAnnotation": null,
                "start": 4304,
                "end": 4318
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3P",
                "optional": false,
                "typeAnnotation": null,
                "start": 4320,
                "end": 4334
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3P",
                "optional": false,
                "typeAnnotation": null,
                "start": 4336,
                "end": 4350
              }
            ],
            "optional": false,
            "start": 4296,
            "end": 4351
          },
          "definite": false,
          "start": 4290,
          "end": 4351
        }
      ],
      "declare": false,
      "start": 4286,
      "end": 4352
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
            "name": "s3c",
            "optional": false,
            "typeAnnotation": null,
            "start": 4357,
            "end": 4360
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4363,
                "end": 4365
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4366,
                "end": 4370
              },
              "optional": false,
              "computed": false,
              "start": 4363,
              "end": 4370
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3P",
                "optional": false,
                "typeAnnotation": null,
                "start": 4371,
                "end": 4385
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4387,
                "end": 4400
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4402,
                "end": 4415
              }
            ],
            "optional": false,
            "start": 4363,
            "end": 4416
          },
          "definite": false,
          "start": 4357,
          "end": 4416
        }
      ],
      "declare": false,
      "start": 4353,
      "end": 4417
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
            "name": "s3d",
            "optional": false,
            "typeAnnotation": null,
            "start": 4422,
            "end": 4425
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4428,
                    "end": 4430
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4431,
                    "end": 4435
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4428,
                  "end": 4435
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction3P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4436,
                    "end": 4450
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4452,
                    "end": 4465
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4467,
                    "end": 4480
                  }
                ],
                "optional": false,
                "start": 4428,
                "end": 4481
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4482,
                "end": 4486
              },
              "optional": false,
              "computed": false,
              "start": 4428,
              "end": 4486
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4487,
                "end": 4500
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4502,
                "end": 4515
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4517,
                "end": 4530
              }
            ],
            "optional": false,
            "start": 4428,
            "end": 4531
          },
          "definite": false,
          "start": 4422,
          "end": 4531
        }
      ],
      "declare": false,
      "start": 4418,
      "end": 4532
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4558,
                  "end": 4566
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 4567,
                      "end": 4573
                    }
                  ],
                  "start": 4566,
                  "end": 4574
                },
                "start": 4558,
                "end": 4574
              },
              "start": 4556,
              "end": 4574
            },
            "start": 4554,
            "end": 4574
          },
          "init": null,
          "definite": false,
          "start": 4554,
          "end": 4574
        }
      ],
      "declare": false,
      "start": 4550,
      "end": 4575
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
            "name": "sIPromise",
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
                        "type": "TSAnyKeyword",
                        "start": 4595,
                        "end": 4598
                      },
                      "start": 4593,
                      "end": 4598
                    },
                    "start": 4592,
                    "end": 4598
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IPromise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4603,
                      "end": 4611
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 4612,
                          "end": 4618
                        }
                      ],
                      "start": 4611,
                      "end": 4619
                    },
                    "start": 4603,
                    "end": 4619
                  },
                  "start": 4600,
                  "end": 4619
                },
                "start": 4591,
                "end": 4619
              },
              "start": 4589,
              "end": 4619
            },
            "start": 4580,
            "end": 4619
          },
          "init": null,
          "definite": false,
          "start": 4580,
          "end": 4619
        }
      ],
      "declare": false,
      "start": 4576,
      "end": 4620
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
            "name": "sPromise",
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
                        "type": "TSAnyKeyword",
                        "start": 4639,
                        "end": 4642
                      },
                      "start": 4637,
                      "end": 4642
                    },
                    "start": 4636,
                    "end": 4642
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4647,
                      "end": 4654
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 4655,
                          "end": 4661
                        }
                      ],
                      "start": 4654,
                      "end": 4662
                    },
                    "start": 4647,
                    "end": 4662
                  },
                  "start": 4644,
                  "end": 4662
                },
                "start": 4635,
                "end": 4662
              },
              "start": 4633,
              "end": 4662
            },
            "start": 4625,
            "end": 4662
          },
          "init": null,
          "definite": false,
          "start": 4625,
          "end": 4662
        }
      ],
      "declare": false,
      "start": 4621,
      "end": 4663
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
            "name": "r4a",
            "optional": false,
            "typeAnnotation": null,
            "start": 4668,
            "end": 4671
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r4",
                "optional": false,
                "typeAnnotation": null,
                "start": 4674,
                "end": 4676
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4677,
                "end": 4681
              },
              "optional": false,
              "computed": false,
              "start": 4674,
              "end": 4681
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 4682,
                "end": 4695
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 4697,
                "end": 4710
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 4712,
                "end": 4725
              }
            ],
            "optional": false,
            "start": 4674,
            "end": 4726
          },
          "definite": false,
          "start": 4668,
          "end": 4726
        }
      ],
      "declare": false,
      "start": 4664,
      "end": 4727
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
            "name": "r4b",
            "optional": false,
            "typeAnnotation": null,
            "start": 4741,
            "end": 4744
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4747,
                    "end": 4749
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4750,
                    "end": 4754
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4747,
                  "end": 4754
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4755,
                    "end": 4764
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4766,
                    "end": 4779
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4781,
                    "end": 4794
                  }
                ],
                "optional": false,
                "start": 4747,
                "end": 4795
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4796,
                "end": 4800
              },
              "optional": false,
              "computed": false,
              "start": 4747,
              "end": 4800
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 4801,
                "end": 4810
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 4812,
                "end": 4825
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 4827,
                "end": 4840
              }
            ],
            "optional": false,
            "start": 4747,
            "end": 4841
          },
          "definite": false,
          "start": 4741,
          "end": 4841
        }
      ],
      "declare": false,
      "start": 4737,
      "end": 4842
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
            "name": "s4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4857,
                  "end": 4864
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 4865,
                      "end": 4871
                    }
                  ],
                  "start": 4864,
                  "end": 4872
                },
                "start": 4857,
                "end": 4872
              },
              "start": 4855,
              "end": 4872
            },
            "start": 4853,
            "end": 4872
          },
          "init": null,
          "definite": false,
          "start": 4853,
          "end": 4872
        }
      ],
      "declare": false,
      "start": 4849,
      "end": 4873
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
            "name": "s4a",
            "optional": false,
            "typeAnnotation": null,
            "start": 4878,
            "end": 4881
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s4",
                "optional": false,
                "typeAnnotation": null,
                "start": 4884,
                "end": 4886
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4887,
                "end": 4891
              },
              "optional": false,
              "computed": false,
              "start": 4884,
              "end": 4891
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 4892,
                "end": 4905
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 4907,
                "end": 4920
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 4922,
                "end": 4935
              }
            ],
            "optional": false,
            "start": 4884,
            "end": 4936
          },
          "definite": false,
          "start": 4878,
          "end": 4936
        }
      ],
      "declare": false,
      "start": 4874,
      "end": 4937
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
            "name": "s4b",
            "optional": false,
            "typeAnnotation": null,
            "start": 4951,
            "end": 4954
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s4",
                "optional": false,
                "typeAnnotation": null,
                "start": 4957,
                "end": 4959
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4960,
                "end": 4964
              },
              "optional": false,
              "computed": false,
              "start": 4957,
              "end": 4964
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4P",
                "optional": false,
                "typeAnnotation": null,
                "start": 4965,
                "end": 4979
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4P",
                "optional": false,
                "typeAnnotation": null,
                "start": 4981,
                "end": 4995
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4P",
                "optional": false,
                "typeAnnotation": null,
                "start": 4997,
                "end": 5011
              }
            ],
            "optional": false,
            "start": 4957,
            "end": 5012
          },
          "definite": false,
          "start": 4951,
          "end": 5012
        }
      ],
      "declare": false,
      "start": 4947,
      "end": 5013
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
            "name": "s4c",
            "optional": false,
            "typeAnnotation": null,
            "start": 5028,
            "end": 5031
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s4",
                "optional": false,
                "typeAnnotation": null,
                "start": 5034,
                "end": 5036
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5037,
                "end": 5041
              },
              "optional": false,
              "computed": false,
              "start": 5034,
              "end": 5041
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4P",
                "optional": false,
                "typeAnnotation": null,
                "start": 5042,
                "end": 5056
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 5058,
                "end": 5071
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 5073,
                "end": 5086
              }
            ],
            "optional": false,
            "start": 5034,
            "end": 5087
          },
          "definite": false,
          "start": 5028,
          "end": 5087
        }
      ],
      "declare": false,
      "start": 5024,
      "end": 5088
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
            "name": "s4d",
            "optional": false,
            "typeAnnotation": null,
            "start": 5102,
            "end": 5105
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5108,
                    "end": 5110
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5111,
                    "end": 5115
                  },
                  "optional": false,
                  "computed": false,
                  "start": 5108,
                  "end": 5115
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5116,
                    "end": 5125
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction4P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5127,
                    "end": 5141
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5143,
                    "end": 5156
                  }
                ],
                "optional": false,
                "start": 5108,
                "end": 5157
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5158,
                "end": 5162
              },
              "optional": false,
              "computed": false,
              "start": 5108,
              "end": 5162
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 5163,
                "end": 5172
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4P",
                "optional": false,
                "typeAnnotation": null,
                "start": 5174,
                "end": 5188
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 5190,
                "end": 5203
              }
            ],
            "optional": false,
            "start": 5108,
            "end": 5204
          },
          "definite": false,
          "start": 5102,
          "end": 5204
        }
      ],
      "declare": false,
      "start": 5098,
      "end": 5205
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
            "name": "r5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5215,
                  "end": 5223
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 5224,
                      "end": 5230
                    }
                  ],
                  "start": 5223,
                  "end": 5231
                },
                "start": 5215,
                "end": 5231
              },
              "start": 5213,
              "end": 5231
            },
            "start": 5211,
            "end": 5231
          },
          "init": null,
          "definite": false,
          "start": 5211,
          "end": 5231
        }
      ],
      "declare": false,
      "start": 5207,
      "end": 5232
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
            "name": "r5a",
            "optional": false,
            "typeAnnotation": null,
            "start": 5237,
            "end": 5240
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5243,
                "end": 5245
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5246,
                "end": 5250
              },
              "optional": false,
              "computed": false,
              "start": 5243,
              "end": 5250
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5251,
                "end": 5264
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5266,
                "end": 5279
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5281,
                "end": 5294
              }
            ],
            "optional": false,
            "start": 5243,
            "end": 5295
          },
          "definite": false,
          "start": 5237,
          "end": 5295
        }
      ],
      "declare": false,
      "start": 5233,
      "end": 5296
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
            "name": "r5b",
            "optional": false,
            "typeAnnotation": null,
            "start": 5310,
            "end": 5313
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5316,
                    "end": 5318
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5319,
                    "end": 5323
                  },
                  "optional": false,
                  "computed": false,
                  "start": 5316,
                  "end": 5323
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5324,
                    "end": 5333
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5335,
                    "end": 5344
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5346,
                    "end": 5355
                  }
                ],
                "optional": false,
                "start": 5316,
                "end": 5356
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5357,
                "end": 5361
              },
              "optional": false,
              "computed": false,
              "start": 5316,
              "end": 5361
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 5362,
                "end": 5371
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 5373,
                "end": 5382
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 5384,
                "end": 5393
              }
            ],
            "optional": false,
            "start": 5316,
            "end": 5394
          },
          "definite": false,
          "start": 5310,
          "end": 5394
        }
      ],
      "declare": false,
      "start": 5306,
      "end": 5395
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
            "name": "s5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5410,
                  "end": 5417
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 5418,
                      "end": 5424
                    }
                  ],
                  "start": 5417,
                  "end": 5425
                },
                "start": 5410,
                "end": 5425
              },
              "start": 5408,
              "end": 5425
            },
            "start": 5406,
            "end": 5425
          },
          "init": null,
          "definite": false,
          "start": 5406,
          "end": 5425
        }
      ],
      "declare": false,
      "start": 5402,
      "end": 5426
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
            "name": "s5a",
            "optional": false,
            "typeAnnotation": null,
            "start": 5431,
            "end": 5434
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5437,
                "end": 5439
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5440,
                "end": 5444
              },
              "optional": false,
              "computed": false,
              "start": 5437,
              "end": 5444
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5445,
                "end": 5458
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5460,
                "end": 5473
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5475,
                "end": 5488
              }
            ],
            "optional": false,
            "start": 5437,
            "end": 5489
          },
          "definite": false,
          "start": 5431,
          "end": 5489
        }
      ],
      "declare": false,
      "start": 5427,
      "end": 5490
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
            "name": "s5b",
            "optional": false,
            "typeAnnotation": null,
            "start": 5504,
            "end": 5507
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5510,
                "end": 5512
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5513,
                "end": 5517
              },
              "optional": false,
              "computed": false,
              "start": 5510,
              "end": 5517
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5P",
                "optional": false,
                "typeAnnotation": null,
                "start": 5518,
                "end": 5532
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5P",
                "optional": false,
                "typeAnnotation": null,
                "start": 5534,
                "end": 5548
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5P",
                "optional": false,
                "typeAnnotation": null,
                "start": 5550,
                "end": 5564
              }
            ],
            "optional": false,
            "start": 5510,
            "end": 5565
          },
          "definite": false,
          "start": 5504,
          "end": 5565
        }
      ],
      "declare": false,
      "start": 5500,
      "end": 5566
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
            "name": "s5c",
            "optional": false,
            "typeAnnotation": null,
            "start": 5580,
            "end": 5583
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5586,
                "end": 5588
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5589,
                "end": 5593
              },
              "optional": false,
              "computed": false,
              "start": 5586,
              "end": 5593
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5P",
                "optional": false,
                "typeAnnotation": null,
                "start": 5594,
                "end": 5608
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5610,
                "end": 5623
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5625,
                "end": 5638
              }
            ],
            "optional": false,
            "start": 5586,
            "end": 5639
          },
          "definite": false,
          "start": 5580,
          "end": 5639
        }
      ],
      "declare": false,
      "start": 5576,
      "end": 5640
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
            "name": "s5d",
            "optional": false,
            "typeAnnotation": null,
            "start": 5654,
            "end": 5657
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5660,
                    "end": 5662
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5663,
                    "end": 5667
                  },
                  "optional": false,
                  "computed": false,
                  "start": 5660,
                  "end": 5667
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5668,
                    "end": 5676
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5678,
                    "end": 5686
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5688,
                    "end": 5696
                  }
                ],
                "optional": false,
                "start": 5660,
                "end": 5697
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5698,
                "end": 5702
              },
              "optional": false,
              "computed": false,
              "start": 5660,
              "end": 5702
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 5703,
                "end": 5712
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 5714,
                "end": 5723
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 5725,
                "end": 5734
              }
            ],
            "optional": false,
            "start": 5660,
            "end": 5735
          },
          "definite": false,
          "start": 5654,
          "end": 5735
        }
      ],
      "declare": false,
      "start": 5650,
      "end": 5736
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
            "name": "r6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5752,
                  "end": 5760
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 5761,
                      "end": 5767
                    }
                  ],
                  "start": 5760,
                  "end": 5768
                },
                "start": 5752,
                "end": 5768
              },
              "start": 5750,
              "end": 5768
            },
            "start": 5748,
            "end": 5768
          },
          "init": null,
          "definite": false,
          "start": 5748,
          "end": 5768
        }
      ],
      "declare": false,
      "start": 5744,
      "end": 5769
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
            "name": "r6a",
            "optional": false,
            "typeAnnotation": null,
            "start": 5774,
            "end": 5777
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r6",
                "optional": false,
                "typeAnnotation": null,
                "start": 5780,
                "end": 5782
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5783,
                "end": 5787
              },
              "optional": false,
              "computed": false,
              "start": 5780,
              "end": 5787
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6",
                "optional": false,
                "typeAnnotation": null,
                "start": 5788,
                "end": 5801
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6",
                "optional": false,
                "typeAnnotation": null,
                "start": 5803,
                "end": 5816
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6",
                "optional": false,
                "typeAnnotation": null,
                "start": 5818,
                "end": 5831
              }
            ],
            "optional": false,
            "start": 5780,
            "end": 5832
          },
          "definite": false,
          "start": 5774,
          "end": 5832
        }
      ],
      "declare": false,
      "start": 5770,
      "end": 5833
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
            "name": "r6b",
            "optional": false,
            "typeAnnotation": null,
            "start": 5847,
            "end": 5850
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r6",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5853,
                    "end": 5855
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5856,
                    "end": 5860
                  },
                  "optional": false,
                  "computed": false,
                  "start": 5853,
                  "end": 5860
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5861,
                    "end": 5870
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5872,
                    "end": 5881
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5883,
                    "end": 5892
                  }
                ],
                "optional": false,
                "start": 5853,
                "end": 5893
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5894,
                "end": 5898
              },
              "optional": false,
              "computed": false,
              "start": 5853,
              "end": 5898
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 5899,
                "end": 5908
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 5910,
                "end": 5919
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 5921,
                "end": 5930
              }
            ],
            "optional": false,
            "start": 5853,
            "end": 5931
          },
          "definite": false,
          "start": 5847,
          "end": 5931
        }
      ],
      "declare": false,
      "start": 5843,
      "end": 5932
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
            "name": "s6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5947,
                  "end": 5954
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 5955,
                      "end": 5961
                    }
                  ],
                  "start": 5954,
                  "end": 5962
                },
                "start": 5947,
                "end": 5962
              },
              "start": 5945,
              "end": 5962
            },
            "start": 5943,
            "end": 5962
          },
          "init": null,
          "definite": false,
          "start": 5943,
          "end": 5962
        }
      ],
      "declare": false,
      "start": 5939,
      "end": 5963
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
            "name": "s6a",
            "optional": false,
            "typeAnnotation": null,
            "start": 5968,
            "end": 5971
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s6",
                "optional": false,
                "typeAnnotation": null,
                "start": 5974,
                "end": 5976
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5977,
                "end": 5981
              },
              "optional": false,
              "computed": false,
              "start": 5974,
              "end": 5981
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6",
                "optional": false,
                "typeAnnotation": null,
                "start": 5982,
                "end": 5995
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6",
                "optional": false,
                "typeAnnotation": null,
                "start": 5997,
                "end": 6010
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6",
                "optional": false,
                "typeAnnotation": null,
                "start": 6012,
                "end": 6025
              }
            ],
            "optional": false,
            "start": 5974,
            "end": 6026
          },
          "definite": false,
          "start": 5968,
          "end": 6026
        }
      ],
      "declare": false,
      "start": 5964,
      "end": 6027
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
            "name": "s6b",
            "optional": false,
            "typeAnnotation": null,
            "start": 6041,
            "end": 6044
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s6",
                "optional": false,
                "typeAnnotation": null,
                "start": 6047,
                "end": 6049
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6050,
                "end": 6054
              },
              "optional": false,
              "computed": false,
              "start": 6047,
              "end": 6054
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6P",
                "optional": false,
                "typeAnnotation": null,
                "start": 6055,
                "end": 6069
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6P",
                "optional": false,
                "typeAnnotation": null,
                "start": 6071,
                "end": 6085
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6P",
                "optional": false,
                "typeAnnotation": null,
                "start": 6087,
                "end": 6101
              }
            ],
            "optional": false,
            "start": 6047,
            "end": 6102
          },
          "definite": false,
          "start": 6041,
          "end": 6102
        }
      ],
      "declare": false,
      "start": 6037,
      "end": 6103
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
            "name": "s6c",
            "optional": false,
            "typeAnnotation": null,
            "start": 6117,
            "end": 6120
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s6",
                "optional": false,
                "typeAnnotation": null,
                "start": 6123,
                "end": 6125
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6126,
                "end": 6130
              },
              "optional": false,
              "computed": false,
              "start": 6123,
              "end": 6130
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6P",
                "optional": false,
                "typeAnnotation": null,
                "start": 6131,
                "end": 6145
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6",
                "optional": false,
                "typeAnnotation": null,
                "start": 6147,
                "end": 6160
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6",
                "optional": false,
                "typeAnnotation": null,
                "start": 6162,
                "end": 6175
              }
            ],
            "optional": false,
            "start": 6123,
            "end": 6176
          },
          "definite": false,
          "start": 6117,
          "end": 6176
        }
      ],
      "declare": false,
      "start": 6113,
      "end": 6177
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
            "name": "s6d",
            "optional": false,
            "typeAnnotation": null,
            "start": 6191,
            "end": 6194
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s6",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6197,
                    "end": 6199
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6200,
                    "end": 6204
                  },
                  "optional": false,
                  "computed": false,
                  "start": 6197,
                  "end": 6204
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6205,
                    "end": 6213
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6215,
                    "end": 6223
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6225,
                    "end": 6233
                  }
                ],
                "optional": false,
                "start": 6197,
                "end": 6234
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6235,
                "end": 6239
              },
              "optional": false,
              "computed": false,
              "start": 6197,
              "end": 6239
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6240,
                "end": 6249
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6251,
                "end": 6260
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6262,
                "end": 6271
              }
            ],
            "optional": false,
            "start": 6197,
            "end": 6272
          },
          "definite": false,
          "start": 6191,
          "end": 6272
        }
      ],
      "declare": false,
      "start": 6187,
      "end": 6273
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
            "name": "r7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6289,
                  "end": 6297
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 6298,
                      "end": 6304
                    }
                  ],
                  "start": 6297,
                  "end": 6305
                },
                "start": 6289,
                "end": 6305
              },
              "start": 6287,
              "end": 6305
            },
            "start": 6285,
            "end": 6305
          },
          "init": null,
          "definite": false,
          "start": 6285,
          "end": 6305
        }
      ],
      "declare": false,
      "start": 6281,
      "end": 6306
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
            "name": "r7a",
            "optional": false,
            "typeAnnotation": null,
            "start": 6311,
            "end": 6314
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r7",
                "optional": false,
                "typeAnnotation": null,
                "start": 6317,
                "end": 6319
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6320,
                "end": 6324
              },
              "optional": false,
              "computed": false,
              "start": 6317,
              "end": 6324
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7",
                "optional": false,
                "typeAnnotation": null,
                "start": 6325,
                "end": 6338
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7",
                "optional": false,
                "typeAnnotation": null,
                "start": 6340,
                "end": 6353
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7",
                "optional": false,
                "typeAnnotation": null,
                "start": 6355,
                "end": 6368
              }
            ],
            "optional": false,
            "start": 6317,
            "end": 6369
          },
          "definite": false,
          "start": 6311,
          "end": 6369
        }
      ],
      "declare": false,
      "start": 6307,
      "end": 6370
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
            "name": "r7b",
            "optional": false,
            "typeAnnotation": null,
            "start": 6384,
            "end": 6387
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r7",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6390,
                    "end": 6392
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6393,
                    "end": 6397
                  },
                  "optional": false,
                  "computed": false,
                  "start": 6390,
                  "end": 6397
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6398,
                    "end": 6407
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6409,
                    "end": 6418
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6420,
                    "end": 6429
                  }
                ],
                "optional": false,
                "start": 6390,
                "end": 6430
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6431,
                "end": 6435
              },
              "optional": false,
              "computed": false,
              "start": 6390,
              "end": 6435
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6436,
                "end": 6445
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6447,
                "end": 6456
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6458,
                "end": 6467
              }
            ],
            "optional": false,
            "start": 6390,
            "end": 6468
          },
          "definite": false,
          "start": 6384,
          "end": 6468
        }
      ],
      "declare": false,
      "start": 6380,
      "end": 6469
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
            "name": "s7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6484,
                  "end": 6491
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 6492,
                      "end": 6498
                    }
                  ],
                  "start": 6491,
                  "end": 6499
                },
                "start": 6484,
                "end": 6499
              },
              "start": 6482,
              "end": 6499
            },
            "start": 6480,
            "end": 6499
          },
          "init": null,
          "definite": false,
          "start": 6480,
          "end": 6499
        }
      ],
      "declare": false,
      "start": 6476,
      "end": 6500
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
            "name": "s7a",
            "optional": false,
            "typeAnnotation": null,
            "start": 6505,
            "end": 6508
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r7",
                "optional": false,
                "typeAnnotation": null,
                "start": 6511,
                "end": 6513
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6514,
                "end": 6518
              },
              "optional": false,
              "computed": false,
              "start": 6511,
              "end": 6518
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7",
                "optional": false,
                "typeAnnotation": null,
                "start": 6519,
                "end": 6532
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7",
                "optional": false,
                "typeAnnotation": null,
                "start": 6534,
                "end": 6547
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7",
                "optional": false,
                "typeAnnotation": null,
                "start": 6549,
                "end": 6562
              }
            ],
            "optional": false,
            "start": 6511,
            "end": 6563
          },
          "definite": false,
          "start": 6505,
          "end": 6563
        }
      ],
      "declare": false,
      "start": 6501,
      "end": 6564
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
            "name": "s7b",
            "optional": false,
            "typeAnnotation": null,
            "start": 6578,
            "end": 6581
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r7",
                "optional": false,
                "typeAnnotation": null,
                "start": 6584,
                "end": 6586
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6587,
                "end": 6591
              },
              "optional": false,
              "computed": false,
              "start": 6584,
              "end": 6591
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7P",
                "optional": false,
                "typeAnnotation": null,
                "start": 6592,
                "end": 6606
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7P",
                "optional": false,
                "typeAnnotation": null,
                "start": 6608,
                "end": 6622
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7P",
                "optional": false,
                "typeAnnotation": null,
                "start": 6624,
                "end": 6638
              }
            ],
            "optional": false,
            "start": 6584,
            "end": 6639
          },
          "definite": false,
          "start": 6578,
          "end": 6639
        }
      ],
      "declare": false,
      "start": 6574,
      "end": 6640
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
            "name": "s7c",
            "optional": false,
            "typeAnnotation": null,
            "start": 6654,
            "end": 6657
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r7",
                "optional": false,
                "typeAnnotation": null,
                "start": 6660,
                "end": 6662
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6663,
                "end": 6667
              },
              "optional": false,
              "computed": false,
              "start": 6660,
              "end": 6667
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7P",
                "optional": false,
                "typeAnnotation": null,
                "start": 6668,
                "end": 6682
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7",
                "optional": false,
                "typeAnnotation": null,
                "start": 6684,
                "end": 6697
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7",
                "optional": false,
                "typeAnnotation": null,
                "start": 6699,
                "end": 6712
              }
            ],
            "optional": false,
            "start": 6660,
            "end": 6713
          },
          "definite": false,
          "start": 6654,
          "end": 6713
        }
      ],
      "declare": false,
      "start": 6650,
      "end": 6714
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
            "name": "s7d",
            "optional": false,
            "typeAnnotation": null,
            "start": 6728,
            "end": 6731
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r7",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6734,
                    "end": 6736
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6737,
                    "end": 6741
                  },
                  "optional": false,
                  "computed": false,
                  "start": 6734,
                  "end": 6741
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6742,
                    "end": 6750
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6752,
                    "end": 6760
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6762,
                    "end": 6770
                  }
                ],
                "optional": false,
                "start": 6734,
                "end": 6771
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6772,
                "end": 6776
              },
              "optional": false,
              "computed": false,
              "start": 6734,
              "end": 6776
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6777,
                "end": 6785
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6787,
                "end": 6795
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6797,
                "end": 6805
              }
            ],
            "optional": false,
            "start": 6734,
            "end": 6806
          },
          "definite": false,
          "start": 6728,
          "end": 6806
        }
      ],
      "declare": false,
      "start": 6724,
      "end": 6807
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
            "name": "r8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6824,
                  "end": 6832
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 6833,
                      "end": 6839
                    }
                  ],
                  "start": 6832,
                  "end": 6840
                },
                "start": 6824,
                "end": 6840
              },
              "start": 6822,
              "end": 6840
            },
            "start": 6820,
            "end": 6840
          },
          "init": null,
          "definite": false,
          "start": 6820,
          "end": 6840
        }
      ],
      "declare": false,
      "start": 6816,
      "end": 6841
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
            "name": "nIPromise",
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
                        "type": "TSAnyKeyword",
                        "start": 6861,
                        "end": 6864
                      },
                      "start": 6859,
                      "end": 6864
                    },
                    "start": 6858,
                    "end": 6864
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IPromise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6869,
                      "end": 6877
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 6878,
                          "end": 6884
                        }
                      ],
                      "start": 6877,
                      "end": 6885
                    },
                    "start": 6869,
                    "end": 6885
                  },
                  "start": 6866,
                  "end": 6885
                },
                "start": 6857,
                "end": 6885
              },
              "start": 6855,
              "end": 6885
            },
            "start": 6846,
            "end": 6885
          },
          "init": null,
          "definite": false,
          "start": 6846,
          "end": 6885
        }
      ],
      "declare": false,
      "start": 6842,
      "end": 6886
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
            "name": "nPromise",
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
                        "type": "TSAnyKeyword",
                        "start": 6905,
                        "end": 6908
                      },
                      "start": 6903,
                      "end": 6908
                    },
                    "start": 6902,
                    "end": 6908
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6913,
                      "end": 6920
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 6921,
                          "end": 6927
                        }
                      ],
                      "start": 6920,
                      "end": 6928
                    },
                    "start": 6913,
                    "end": 6928
                  },
                  "start": 6910,
                  "end": 6928
                },
                "start": 6901,
                "end": 6928
              },
              "start": 6899,
              "end": 6928
            },
            "start": 6891,
            "end": 6928
          },
          "init": null,
          "definite": false,
          "start": 6891,
          "end": 6928
        }
      ],
      "declare": false,
      "start": 6887,
      "end": 6929
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
            "name": "r8a",
            "optional": false,
            "typeAnnotation": null,
            "start": 6934,
            "end": 6937
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r8",
                "optional": false,
                "typeAnnotation": null,
                "start": 6940,
                "end": 6942
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6943,
                "end": 6947
              },
              "optional": false,
              "computed": false,
              "start": 6940,
              "end": 6947
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8",
                "optional": false,
                "typeAnnotation": null,
                "start": 6948,
                "end": 6961
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8",
                "optional": false,
                "typeAnnotation": null,
                "start": 6963,
                "end": 6976
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8",
                "optional": false,
                "typeAnnotation": null,
                "start": 6978,
                "end": 6991
              }
            ],
            "optional": false,
            "start": 6940,
            "end": 6992
          },
          "definite": false,
          "start": 6934,
          "end": 6992
        }
      ],
      "declare": false,
      "start": 6930,
      "end": 6993
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
            "name": "r8b",
            "optional": false,
            "typeAnnotation": null,
            "start": 7007,
            "end": 7010
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r8",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7013,
                    "end": 7015
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7016,
                    "end": 7020
                  },
                  "optional": false,
                  "computed": false,
                  "start": 7013,
                  "end": 7020
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7021,
                    "end": 7030
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7032,
                    "end": 7041
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7043,
                    "end": 7052
                  }
                ],
                "optional": false,
                "start": 7013,
                "end": 7053
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7054,
                "end": 7058
              },
              "optional": false,
              "computed": false,
              "start": 7013,
              "end": 7058
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7059,
                "end": 7068
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7070,
                "end": 7079
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7081,
                "end": 7090
              }
            ],
            "optional": false,
            "start": 7013,
            "end": 7091
          },
          "definite": false,
          "start": 7007,
          "end": 7091
        }
      ],
      "declare": false,
      "start": 7003,
      "end": 7092
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
            "name": "s8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7107,
                  "end": 7114
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 7115,
                      "end": 7121
                    }
                  ],
                  "start": 7114,
                  "end": 7122
                },
                "start": 7107,
                "end": 7122
              },
              "start": 7105,
              "end": 7122
            },
            "start": 7103,
            "end": 7122
          },
          "init": null,
          "definite": false,
          "start": 7103,
          "end": 7122
        }
      ],
      "declare": false,
      "start": 7099,
      "end": 7123
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
            "name": "s8a",
            "optional": false,
            "typeAnnotation": null,
            "start": 7128,
            "end": 7131
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s8",
                "optional": false,
                "typeAnnotation": null,
                "start": 7134,
                "end": 7136
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7137,
                "end": 7141
              },
              "optional": false,
              "computed": false,
              "start": 7134,
              "end": 7141
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8",
                "optional": false,
                "typeAnnotation": null,
                "start": 7142,
                "end": 7155
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8",
                "optional": false,
                "typeAnnotation": null,
                "start": 7157,
                "end": 7170
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8",
                "optional": false,
                "typeAnnotation": null,
                "start": 7172,
                "end": 7185
              }
            ],
            "optional": false,
            "start": 7134,
            "end": 7186
          },
          "definite": false,
          "start": 7128,
          "end": 7186
        }
      ],
      "declare": false,
      "start": 7124,
      "end": 7187
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
            "name": "s8b",
            "optional": false,
            "typeAnnotation": null,
            "start": 7201,
            "end": 7204
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s8",
                "optional": false,
                "typeAnnotation": null,
                "start": 7207,
                "end": 7209
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7210,
                "end": 7214
              },
              "optional": false,
              "computed": false,
              "start": 7207,
              "end": 7214
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8P",
                "optional": false,
                "typeAnnotation": null,
                "start": 7215,
                "end": 7229
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8P",
                "optional": false,
                "typeAnnotation": null,
                "start": 7231,
                "end": 7245
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8P",
                "optional": false,
                "typeAnnotation": null,
                "start": 7247,
                "end": 7261
              }
            ],
            "optional": false,
            "start": 7207,
            "end": 7262
          },
          "definite": false,
          "start": 7201,
          "end": 7262
        }
      ],
      "declare": false,
      "start": 7197,
      "end": 7263
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
            "name": "s8c",
            "optional": false,
            "typeAnnotation": null,
            "start": 7277,
            "end": 7280
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s8",
                "optional": false,
                "typeAnnotation": null,
                "start": 7283,
                "end": 7285
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7286,
                "end": 7290
              },
              "optional": false,
              "computed": false,
              "start": 7283,
              "end": 7290
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8P",
                "optional": false,
                "typeAnnotation": null,
                "start": 7291,
                "end": 7305
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8",
                "optional": false,
                "typeAnnotation": null,
                "start": 7307,
                "end": 7320
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8",
                "optional": false,
                "typeAnnotation": null,
                "start": 7322,
                "end": 7335
              }
            ],
            "optional": false,
            "start": 7283,
            "end": 7336
          },
          "definite": false,
          "start": 7277,
          "end": 7336
        }
      ],
      "declare": false,
      "start": 7273,
      "end": 7337
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
            "name": "s8d",
            "optional": false,
            "typeAnnotation": null,
            "start": 7351,
            "end": 7354
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s8",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7357,
                    "end": 7359
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7360,
                    "end": 7364
                  },
                  "optional": false,
                  "computed": false,
                  "start": 7357,
                  "end": 7364
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7365,
                    "end": 7374
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7376,
                    "end": 7385
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7387,
                    "end": 7396
                  }
                ],
                "optional": false,
                "start": 7357,
                "end": 7397
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7398,
                "end": 7402
              },
              "optional": false,
              "computed": false,
              "start": 7357,
              "end": 7402
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7403,
                "end": 7412
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7414,
                "end": 7423
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7425,
                "end": 7434
              }
            ],
            "optional": false,
            "start": 7357,
            "end": 7435
          },
          "definite": false,
          "start": 7351,
          "end": 7435
        }
      ],
      "declare": false,
      "start": 7347,
      "end": 7436
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
            "name": "r9",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7452,
                  "end": 7460
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 7461,
                      "end": 7467
                    }
                  ],
                  "start": 7460,
                  "end": 7468
                },
                "start": 7452,
                "end": 7468
              },
              "start": 7450,
              "end": 7468
            },
            "start": 7448,
            "end": 7468
          },
          "init": null,
          "definite": false,
          "start": 7448,
          "end": 7468
        }
      ],
      "declare": false,
      "start": 7444,
      "end": 7469
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
            "name": "r9a",
            "optional": false,
            "typeAnnotation": null,
            "start": 7474,
            "end": 7477
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r9",
                "optional": false,
                "typeAnnotation": null,
                "start": 7480,
                "end": 7482
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7483,
                "end": 7487
              },
              "optional": false,
              "computed": false,
              "start": 7480,
              "end": 7487
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9",
                "optional": false,
                "typeAnnotation": null,
                "start": 7488,
                "end": 7501
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9",
                "optional": false,
                "typeAnnotation": null,
                "start": 7503,
                "end": 7516
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9",
                "optional": false,
                "typeAnnotation": null,
                "start": 7518,
                "end": 7531
              }
            ],
            "optional": false,
            "start": 7480,
            "end": 7532
          },
          "definite": false,
          "start": 7474,
          "end": 7532
        }
      ],
      "declare": false,
      "start": 7470,
      "end": 7533
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
            "name": "r9b",
            "optional": false,
            "typeAnnotation": null,
            "start": 7547,
            "end": 7550
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r9",
                "optional": false,
                "typeAnnotation": null,
                "start": 7553,
                "end": 7555
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7556,
                "end": 7560
              },
              "optional": false,
              "computed": false,
              "start": 7553,
              "end": 7560
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7561,
                "end": 7570
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7572,
                "end": 7581
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7583,
                "end": 7592
              }
            ],
            "optional": false,
            "start": 7553,
            "end": 7593
          },
          "definite": false,
          "start": 7547,
          "end": 7593
        }
      ],
      "declare": false,
      "start": 7543,
      "end": 7594
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
            "name": "r9c",
            "optional": false,
            "typeAnnotation": null,
            "start": 7605,
            "end": 7608
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r9",
                "optional": false,
                "typeAnnotation": null,
                "start": 7611,
                "end": 7613
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7614,
                "end": 7618
              },
              "optional": false,
              "computed": false,
              "start": 7611,
              "end": 7618
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7619,
                "end": 7628
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7630,
                "end": 7639
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7641,
                "end": 7650
              }
            ],
            "optional": false,
            "start": 7611,
            "end": 7651
          },
          "definite": false,
          "start": 7605,
          "end": 7651
        }
      ],
      "declare": false,
      "start": 7601,
      "end": 7652
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
            "name": "r9d",
            "optional": false,
            "typeAnnotation": null,
            "start": 7663,
            "end": 7666
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r9",
                "optional": false,
                "typeAnnotation": null,
                "start": 7669,
                "end": 7671
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7672,
                "end": 7676
              },
              "optional": false,
              "computed": false,
              "start": 7669,
              "end": 7676
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 7677,
                "end": 7689
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7691,
                "end": 7700
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7702,
                "end": 7711
              }
            ],
            "optional": false,
            "start": 7669,
            "end": 7712
          },
          "definite": false,
          "start": 7663,
          "end": 7712
        }
      ],
      "declare": false,
      "start": 7659,
      "end": 7713
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
            "name": "r9e",
            "optional": false,
            "typeAnnotation": null,
            "start": 7727,
            "end": 7730
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r9",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7733,
                    "end": 7735
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7736,
                    "end": 7740
                  },
                  "optional": false,
                  "computed": false,
                  "start": 7733,
                  "end": 7740
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7741,
                    "end": 7753
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7755,
                    "end": 7764
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7766,
                    "end": 7775
                  }
                ],
                "optional": false,
                "start": 7733,
                "end": 7776
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7777,
                "end": 7781
              },
              "optional": false,
              "computed": false,
              "start": 7733,
              "end": 7781
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7782,
                "end": 7791
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7793,
                "end": 7802
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7804,
                "end": 7813
              }
            ],
            "optional": false,
            "start": 7733,
            "end": 7814
          },
          "definite": false,
          "start": 7727,
          "end": 7814
        }
      ],
      "declare": false,
      "start": 7723,
      "end": 7815
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
            "name": "s9",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7830,
                  "end": 7837
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 7838,
                      "end": 7844
                    }
                  ],
                  "start": 7837,
                  "end": 7845
                },
                "start": 7830,
                "end": 7845
              },
              "start": 7828,
              "end": 7845
            },
            "start": 7826,
            "end": 7845
          },
          "init": null,
          "definite": false,
          "start": 7826,
          "end": 7845
        }
      ],
      "declare": false,
      "start": 7822,
      "end": 7846
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
            "name": "s9a",
            "optional": false,
            "typeAnnotation": null,
            "start": 7851,
            "end": 7854
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s9",
                "optional": false,
                "typeAnnotation": null,
                "start": 7857,
                "end": 7859
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7860,
                "end": 7864
              },
              "optional": false,
              "computed": false,
              "start": 7857,
              "end": 7864
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9",
                "optional": false,
                "typeAnnotation": null,
                "start": 7865,
                "end": 7878
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9",
                "optional": false,
                "typeAnnotation": null,
                "start": 7880,
                "end": 7893
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9",
                "optional": false,
                "typeAnnotation": null,
                "start": 7895,
                "end": 7908
              }
            ],
            "optional": false,
            "start": 7857,
            "end": 7909
          },
          "definite": false,
          "start": 7851,
          "end": 7909
        }
      ],
      "declare": false,
      "start": 7847,
      "end": 7910
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
            "name": "s9b",
            "optional": false,
            "typeAnnotation": null,
            "start": 7924,
            "end": 7927
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s9",
                "optional": false,
                "typeAnnotation": null,
                "start": 7930,
                "end": 7932
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7933,
                "end": 7937
              },
              "optional": false,
              "computed": false,
              "start": 7930,
              "end": 7937
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9P",
                "optional": false,
                "typeAnnotation": null,
                "start": 7938,
                "end": 7952
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9P",
                "optional": false,
                "typeAnnotation": null,
                "start": 7954,
                "end": 7968
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9P",
                "optional": false,
                "typeAnnotation": null,
                "start": 7970,
                "end": 7984
              }
            ],
            "optional": false,
            "start": 7930,
            "end": 7985
          },
          "definite": false,
          "start": 7924,
          "end": 7985
        }
      ],
      "declare": false,
      "start": 7920,
      "end": 7986
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
            "name": "s9c",
            "optional": false,
            "typeAnnotation": null,
            "start": 8000,
            "end": 8003
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s9",
                "optional": false,
                "typeAnnotation": null,
                "start": 8006,
                "end": 8008
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8009,
                "end": 8013
              },
              "optional": false,
              "computed": false,
              "start": 8006,
              "end": 8013
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9P",
                "optional": false,
                "typeAnnotation": null,
                "start": 8014,
                "end": 8028
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9",
                "optional": false,
                "typeAnnotation": null,
                "start": 8030,
                "end": 8043
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9",
                "optional": false,
                "typeAnnotation": null,
                "start": 8045,
                "end": 8058
              }
            ],
            "optional": false,
            "start": 8006,
            "end": 8059
          },
          "definite": false,
          "start": 8000,
          "end": 8059
        }
      ],
      "declare": false,
      "start": 7996,
      "end": 8060
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
            "name": "s9d",
            "optional": false,
            "typeAnnotation": null,
            "start": 8074,
            "end": 8077
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s9",
                "optional": false,
                "typeAnnotation": null,
                "start": 8080,
                "end": 8082
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8083,
                "end": 8087
              },
              "optional": false,
              "computed": false,
              "start": 8080,
              "end": 8087
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8088,
                "end": 8096
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8098,
                "end": 8106
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8108,
                "end": 8116
              }
            ],
            "optional": false,
            "start": 8080,
            "end": 8117
          },
          "definite": false,
          "start": 8074,
          "end": 8117
        }
      ],
      "declare": false,
      "start": 8070,
      "end": 8118
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
            "name": "s9e",
            "optional": false,
            "typeAnnotation": null,
            "start": 8129,
            "end": 8132
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s9",
                "optional": false,
                "typeAnnotation": null,
                "start": 8135,
                "end": 8137
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8138,
                "end": 8142
              },
              "optional": false,
              "computed": false,
              "start": 8135,
              "end": 8142
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8143,
                "end": 8151
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8153,
                "end": 8161
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8163,
                "end": 8171
              }
            ],
            "optional": false,
            "start": 8135,
            "end": 8172
          },
          "definite": false,
          "start": 8129,
          "end": 8172
        }
      ],
      "declare": false,
      "start": 8125,
      "end": 8173
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
            "name": "s9f",
            "optional": false,
            "typeAnnotation": null,
            "start": 8184,
            "end": 8187
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s9",
                "optional": false,
                "typeAnnotation": null,
                "start": 8190,
                "end": 8192
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8193,
                "end": 8197
              },
              "optional": false,
              "computed": false,
              "start": 8190,
              "end": 8197
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 8198,
                "end": 8210
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8212,
                "end": 8221
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8223,
                "end": 8232
              }
            ],
            "optional": false,
            "start": 8190,
            "end": 8233
          },
          "definite": false,
          "start": 8184,
          "end": 8233
        }
      ],
      "declare": false,
      "start": 8180,
      "end": 8234
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
            "name": "s9g",
            "optional": false,
            "typeAnnotation": null,
            "start": 8248,
            "end": 8251
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s9",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8254,
                    "end": 8256
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8257,
                    "end": 8261
                  },
                  "optional": false,
                  "computed": false,
                  "start": 8254,
                  "end": 8261
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8262,
                    "end": 8274
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8276,
                    "end": 8285
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8287,
                    "end": 8296
                  }
                ],
                "optional": false,
                "start": 8254,
                "end": 8297
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8298,
                "end": 8302
              },
              "optional": false,
              "computed": false,
              "start": 8254,
              "end": 8302
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8303,
                "end": 8312
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8314,
                "end": 8323
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8325,
                "end": 8334
              }
            ],
            "optional": false,
            "start": 8254,
            "end": 8335
          },
          "definite": false,
          "start": 8248,
          "end": 8335
        }
      ],
      "declare": false,
      "start": 8244,
      "end": 8336
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
            "name": "r10",
            "optional": false,
            "typeAnnotation": null,
            "start": 8348,
            "end": 8351
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "testFunction10",
              "optional": false,
              "typeAnnotation": null,
              "start": 8354,
              "end": 8368
            },
            "typeArguments": null,
            "arguments": [
              {
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
                    "start": 8369,
                    "end": 8370
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8374,
                  "end": 8375
                },
                "id": null,
                "generator": false,
                "start": 8369,
                "end": 8375
              }
            ],
            "optional": false,
            "start": 8354,
            "end": 8376
          },
          "definite": false,
          "start": 8348,
          "end": 8376
        }
      ],
      "declare": false,
      "start": 8344,
      "end": 8377
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
            "name": "r10a",
            "optional": false,
            "typeAnnotation": null,
            "start": 8382,
            "end": 8386
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r10",
                "optional": false,
                "typeAnnotation": null,
                "start": 8389,
                "end": 8392
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8393,
                "end": 8397
              },
              "optional": false,
              "computed": false,
              "start": 8389,
              "end": 8397
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10",
                "optional": false,
                "typeAnnotation": null,
                "start": 8398,
                "end": 8412
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10",
                "optional": false,
                "typeAnnotation": null,
                "start": 8414,
                "end": 8428
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10",
                "optional": false,
                "typeAnnotation": null,
                "start": 8430,
                "end": 8444
              }
            ],
            "optional": false,
            "start": 8389,
            "end": 8445
          },
          "definite": false,
          "start": 8382,
          "end": 8445
        }
      ],
      "declare": false,
      "start": 8378,
      "end": 8446
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
            "name": "r10b",
            "optional": false,
            "typeAnnotation": null,
            "start": 8457,
            "end": 8461
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r10",
                "optional": false,
                "typeAnnotation": null,
                "start": 8464,
                "end": 8467
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8468,
                "end": 8472
              },
              "optional": false,
              "computed": false,
              "start": 8464,
              "end": 8472
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8473,
                "end": 8482
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8484,
                "end": 8493
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8495,
                "end": 8504
              }
            ],
            "optional": false,
            "start": 8464,
            "end": 8505
          },
          "definite": false,
          "start": 8457,
          "end": 8505
        }
      ],
      "declare": false,
      "start": 8453,
      "end": 8506
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
            "name": "r10c",
            "optional": false,
            "typeAnnotation": null,
            "start": 8517,
            "end": 8521
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r10",
                "optional": false,
                "typeAnnotation": null,
                "start": 8524,
                "end": 8527
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8528,
                "end": 8532
              },
              "optional": false,
              "computed": false,
              "start": 8524,
              "end": 8532
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8533,
                "end": 8542
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8544,
                "end": 8553
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8555,
                "end": 8564
              }
            ],
            "optional": false,
            "start": 8524,
            "end": 8565
          },
          "definite": false,
          "start": 8517,
          "end": 8565
        }
      ],
      "declare": false,
      "start": 8513,
      "end": 8566
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
            "name": "r10d",
            "optional": false,
            "typeAnnotation": null,
            "start": 8577,
            "end": 8581
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r10",
                "optional": false,
                "typeAnnotation": null,
                "start": 8584,
                "end": 8587
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8588,
                "end": 8592
              },
              "optional": false,
              "computed": false,
              "start": 8584,
              "end": 8592
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 8593,
                "end": 8605
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8607,
                "end": 8616
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8618,
                "end": 8627
              }
            ],
            "optional": false,
            "start": 8584,
            "end": 8628
          },
          "definite": false,
          "start": 8577,
          "end": 8628
        }
      ],
      "declare": false,
      "start": 8573,
      "end": 8629
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
            "name": "r10e",
            "optional": false,
            "typeAnnotation": null,
            "start": 8643,
            "end": 8647
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r10",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8650,
                    "end": 8653
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8654,
                    "end": 8658
                  },
                  "optional": false,
                  "computed": false,
                  "start": 8650,
                  "end": 8658
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8659,
                    "end": 8671
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8673,
                    "end": 8682
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8684,
                    "end": 8693
                  }
                ],
                "optional": false,
                "start": 8650,
                "end": 8694
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8695,
                "end": 8699
              },
              "optional": false,
              "computed": false,
              "start": 8650,
              "end": 8699
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8700,
                "end": 8709
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8711,
                "end": 8720
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8722,
                "end": 8731
              }
            ],
            "optional": false,
            "start": 8650,
            "end": 8732
          },
          "definite": false,
          "start": 8643,
          "end": 8732
        }
      ],
      "declare": false,
      "start": 8639,
      "end": 8733
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
            "name": "s10",
            "optional": false,
            "typeAnnotation": null,
            "start": 8744,
            "end": 8747
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "testFunction10P",
              "optional": false,
              "typeAnnotation": null,
              "start": 8750,
              "end": 8765
            },
            "typeArguments": null,
            "arguments": [
              {
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
                    "start": 8766,
                    "end": 8767
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8771,
                  "end": 8772
                },
                "id": null,
                "generator": false,
                "start": 8766,
                "end": 8772
              }
            ],
            "optional": false,
            "start": 8750,
            "end": 8773
          },
          "definite": false,
          "start": 8744,
          "end": 8773
        }
      ],
      "declare": false,
      "start": 8740,
      "end": 8774
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
            "name": "s10a",
            "optional": false,
            "typeAnnotation": null,
            "start": 8779,
            "end": 8783
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s10",
                "optional": false,
                "typeAnnotation": null,
                "start": 8786,
                "end": 8789
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8790,
                "end": 8794
              },
              "optional": false,
              "computed": false,
              "start": 8786,
              "end": 8794
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10",
                "optional": false,
                "typeAnnotation": null,
                "start": 8795,
                "end": 8809
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10",
                "optional": false,
                "typeAnnotation": null,
                "start": 8811,
                "end": 8825
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10",
                "optional": false,
                "typeAnnotation": null,
                "start": 8827,
                "end": 8841
              }
            ],
            "optional": false,
            "start": 8786,
            "end": 8842
          },
          "definite": false,
          "start": 8779,
          "end": 8842
        }
      ],
      "declare": false,
      "start": 8775,
      "end": 8843
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
            "name": "s10b",
            "optional": false,
            "typeAnnotation": null,
            "start": 8854,
            "end": 8858
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s10",
                "optional": false,
                "typeAnnotation": null,
                "start": 8861,
                "end": 8864
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8865,
                "end": 8869
              },
              "optional": false,
              "computed": false,
              "start": 8861,
              "end": 8869
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10P",
                "optional": false,
                "typeAnnotation": null,
                "start": 8870,
                "end": 8885
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10P",
                "optional": false,
                "typeAnnotation": null,
                "start": 8887,
                "end": 8902
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10P",
                "optional": false,
                "typeAnnotation": null,
                "start": 8904,
                "end": 8919
              }
            ],
            "optional": false,
            "start": 8861,
            "end": 8920
          },
          "definite": false,
          "start": 8854,
          "end": 8920
        }
      ],
      "declare": false,
      "start": 8850,
      "end": 8921
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
            "name": "s10c",
            "optional": false,
            "typeAnnotation": null,
            "start": 8932,
            "end": 8936
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s10",
                "optional": false,
                "typeAnnotation": null,
                "start": 8939,
                "end": 8942
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8943,
                "end": 8947
              },
              "optional": false,
              "computed": false,
              "start": 8939,
              "end": 8947
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10P",
                "optional": false,
                "typeAnnotation": null,
                "start": 8948,
                "end": 8963
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10",
                "optional": false,
                "typeAnnotation": null,
                "start": 8965,
                "end": 8979
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10",
                "optional": false,
                "typeAnnotation": null,
                "start": 8981,
                "end": 8995
              }
            ],
            "optional": false,
            "start": 8939,
            "end": 8996
          },
          "definite": false,
          "start": 8932,
          "end": 8996
        }
      ],
      "declare": false,
      "start": 8928,
      "end": 8997
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
            "name": "s10d",
            "optional": false,
            "typeAnnotation": null,
            "start": 9008,
            "end": 9012
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s10",
                "optional": false,
                "typeAnnotation": null,
                "start": 9015,
                "end": 9018
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9019,
                "end": 9023
              },
              "optional": false,
              "computed": false,
              "start": 9015,
              "end": 9023
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9024,
                "end": 9032
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9034,
                "end": 9042
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9044,
                "end": 9052
              }
            ],
            "optional": false,
            "start": 9015,
            "end": 9053
          },
          "definite": false,
          "start": 9008,
          "end": 9053
        }
      ],
      "declare": false,
      "start": 9004,
      "end": 9054
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
            "name": "s10e",
            "optional": false,
            "typeAnnotation": null,
            "start": 9065,
            "end": 9069
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s10",
                "optional": false,
                "typeAnnotation": null,
                "start": 9072,
                "end": 9075
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9076,
                "end": 9080
              },
              "optional": false,
              "computed": false,
              "start": 9072,
              "end": 9080
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9081,
                "end": 9090
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9092,
                "end": 9100
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9102,
                "end": 9111
              }
            ],
            "optional": false,
            "start": 9072,
            "end": 9112
          },
          "definite": false,
          "start": 9065,
          "end": 9112
        }
      ],
      "declare": false,
      "start": 9061,
      "end": 9113
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
            "name": "s10f",
            "optional": false,
            "typeAnnotation": null,
            "start": 9124,
            "end": 9128
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s10",
                "optional": false,
                "typeAnnotation": null,
                "start": 9131,
                "end": 9134
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9135,
                "end": 9139
              },
              "optional": false,
              "computed": false,
              "start": 9131,
              "end": 9139
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunctionP",
                "optional": false,
                "typeAnnotation": null,
                "start": 9140,
                "end": 9153
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9155,
                "end": 9164
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9166,
                "end": 9175
              }
            ],
            "optional": false,
            "start": 9131,
            "end": 9176
          },
          "definite": false,
          "start": 9124,
          "end": 9176
        }
      ],
      "declare": false,
      "start": 9120,
      "end": 9177
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
            "name": "s10g",
            "optional": false,
            "typeAnnotation": null,
            "start": 9191,
            "end": 9195
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s10",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9198,
                    "end": 9201
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9202,
                    "end": 9206
                  },
                  "optional": false,
                  "computed": false,
                  "start": 9198,
                  "end": 9206
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunctionP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9207,
                    "end": 9220
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9222,
                    "end": 9231
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9233,
                    "end": 9242
                  }
                ],
                "optional": false,
                "start": 9198,
                "end": 9243
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9244,
                "end": 9248
              },
              "optional": false,
              "computed": false,
              "start": 9198,
              "end": 9248
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9249,
                "end": 9257
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9259,
                "end": 9268
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9270,
                "end": 9279
              }
            ],
            "optional": false,
            "start": 9198,
            "end": 9280
          },
          "definite": false,
          "start": 9191,
          "end": 9280
        }
      ],
      "declare": false,
      "start": 9187,
      "end": 9281
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
            "name": "r11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9298,
                  "end": 9306
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 9307,
                      "end": 9313
                    }
                  ],
                  "start": 9306,
                  "end": 9314
                },
                "start": 9298,
                "end": 9314
              },
              "start": 9296,
              "end": 9314
            },
            "start": 9293,
            "end": 9314
          },
          "init": null,
          "definite": false,
          "start": 9293,
          "end": 9314
        }
      ],
      "declare": false,
      "start": 9289,
      "end": 9315
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
            "name": "r11a",
            "optional": false,
            "typeAnnotation": null,
            "start": 9320,
            "end": 9324
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r11",
                "optional": false,
                "typeAnnotation": null,
                "start": 9327,
                "end": 9330
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9331,
                "end": 9335
              },
              "optional": false,
              "computed": false,
              "start": 9327,
              "end": 9335
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11",
                "optional": false,
                "typeAnnotation": null,
                "start": 9336,
                "end": 9350
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11",
                "optional": false,
                "typeAnnotation": null,
                "start": 9352,
                "end": 9366
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11",
                "optional": false,
                "typeAnnotation": null,
                "start": 9368,
                "end": 9382
              }
            ],
            "optional": false,
            "start": 9327,
            "end": 9383
          },
          "definite": false,
          "start": 9320,
          "end": 9383
        }
      ],
      "declare": false,
      "start": 9316,
      "end": 9384
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
            "name": "s11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9403,
                  "end": 9410
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 9411,
                      "end": 9417
                    }
                  ],
                  "start": 9410,
                  "end": 9418
                },
                "start": 9403,
                "end": 9418
              },
              "start": 9401,
              "end": 9418
            },
            "start": 9398,
            "end": 9418
          },
          "init": null,
          "definite": false,
          "start": 9398,
          "end": 9418
        }
      ],
      "declare": false,
      "start": 9394,
      "end": 9419
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
            "name": "s11a",
            "optional": false,
            "typeAnnotation": null,
            "start": 9424,
            "end": 9428
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s11",
                "optional": false,
                "typeAnnotation": null,
                "start": 9431,
                "end": 9434
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9435,
                "end": 9439
              },
              "optional": false,
              "computed": false,
              "start": 9431,
              "end": 9439
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11",
                "optional": false,
                "typeAnnotation": null,
                "start": 9440,
                "end": 9454
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11",
                "optional": false,
                "typeAnnotation": null,
                "start": 9456,
                "end": 9470
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11",
                "optional": false,
                "typeAnnotation": null,
                "start": 9472,
                "end": 9486
              }
            ],
            "optional": false,
            "start": 9431,
            "end": 9487
          },
          "definite": false,
          "start": 9424,
          "end": 9487
        }
      ],
      "declare": false,
      "start": 9420,
      "end": 9488
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
            "name": "s11b",
            "optional": false,
            "typeAnnotation": null,
            "start": 9499,
            "end": 9503
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s11",
                "optional": false,
                "typeAnnotation": null,
                "start": 9506,
                "end": 9509
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9510,
                "end": 9514
              },
              "optional": false,
              "computed": false,
              "start": 9506,
              "end": 9514
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11P",
                "optional": false,
                "typeAnnotation": null,
                "start": 9515,
                "end": 9530
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11P",
                "optional": false,
                "typeAnnotation": null,
                "start": 9532,
                "end": 9547
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11P",
                "optional": false,
                "typeAnnotation": null,
                "start": 9549,
                "end": 9564
              }
            ],
            "optional": false,
            "start": 9506,
            "end": 9565
          },
          "definite": false,
          "start": 9499,
          "end": 9565
        }
      ],
      "declare": false,
      "start": 9495,
      "end": 9566
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
            "name": "s11c",
            "optional": false,
            "typeAnnotation": null,
            "start": 9577,
            "end": 9581
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s11",
                "optional": false,
                "typeAnnotation": null,
                "start": 9584,
                "end": 9587
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9588,
                "end": 9592
              },
              "optional": false,
              "computed": false,
              "start": 9584,
              "end": 9592
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11P",
                "optional": false,
                "typeAnnotation": null,
                "start": 9593,
                "end": 9608
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11",
                "optional": false,
                "typeAnnotation": null,
                "start": 9610,
                "end": 9624
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11",
                "optional": false,
                "typeAnnotation": null,
                "start": 9626,
                "end": 9640
              }
            ],
            "optional": false,
            "start": 9584,
            "end": 9641
          },
          "definite": false,
          "start": 9577,
          "end": 9641
        }
      ],
      "declare": false,
      "start": 9573,
      "end": 9642
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
            "name": "r12",
            "optional": false,
            "typeAnnotation": null,
            "start": 9654,
            "end": 9657
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "testFunction12",
              "optional": false,
              "typeAnnotation": null,
              "start": 9660,
              "end": 9674
            },
            "typeArguments": null,
            "arguments": [
              {
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
                    "start": 9675,
                    "end": 9676
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9680,
                  "end": 9681
                },
                "id": null,
                "generator": false,
                "start": 9675,
                "end": 9681
              }
            ],
            "optional": false,
            "start": 9660,
            "end": 9682
          },
          "definite": false,
          "start": 9654,
          "end": 9682
        }
      ],
      "declare": false,
      "start": 9650,
      "end": 9683
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
            "name": "r12a",
            "optional": false,
            "typeAnnotation": null,
            "start": 9688,
            "end": 9692
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r12",
                "optional": false,
                "typeAnnotation": null,
                "start": 9695,
                "end": 9698
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9699,
                "end": 9703
              },
              "optional": false,
              "computed": false,
              "start": 9695,
              "end": 9703
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12",
                "optional": false,
                "typeAnnotation": null,
                "start": 9704,
                "end": 9718
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12",
                "optional": false,
                "typeAnnotation": null,
                "start": 9720,
                "end": 9734
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12",
                "optional": false,
                "typeAnnotation": null,
                "start": 9736,
                "end": 9750
              }
            ],
            "optional": false,
            "start": 9695,
            "end": 9751
          },
          "definite": false,
          "start": 9688,
          "end": 9751
        }
      ],
      "declare": false,
      "start": 9684,
      "end": 9752
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
            "name": "s12",
            "optional": false,
            "typeAnnotation": null,
            "start": 9763,
            "end": 9766
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "testFunction12",
              "optional": false,
              "typeAnnotation": null,
              "start": 9769,
              "end": 9783
            },
            "typeArguments": null,
            "arguments": [
              {
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
                    "start": 9784,
                    "end": 9785
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9789,
                  "end": 9790
                },
                "id": null,
                "generator": false,
                "start": 9784,
                "end": 9790
              }
            ],
            "optional": false,
            "start": 9769,
            "end": 9791
          },
          "definite": false,
          "start": 9763,
          "end": 9791
        }
      ],
      "declare": false,
      "start": 9759,
      "end": 9792
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
            "name": "s12a",
            "optional": false,
            "typeAnnotation": null,
            "start": 9797,
            "end": 9801
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s12",
                "optional": false,
                "typeAnnotation": null,
                "start": 9804,
                "end": 9807
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9808,
                "end": 9812
              },
              "optional": false,
              "computed": false,
              "start": 9804,
              "end": 9812
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12",
                "optional": false,
                "typeAnnotation": null,
                "start": 9813,
                "end": 9827
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12",
                "optional": false,
                "typeAnnotation": null,
                "start": 9829,
                "end": 9843
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12",
                "optional": false,
                "typeAnnotation": null,
                "start": 9845,
                "end": 9859
              }
            ],
            "optional": false,
            "start": 9804,
            "end": 9860
          },
          "definite": false,
          "start": 9797,
          "end": 9860
        }
      ],
      "declare": false,
      "start": 9793,
      "end": 9861
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
            "name": "s12b",
            "optional": false,
            "typeAnnotation": null,
            "start": 9872,
            "end": 9876
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s12",
                "optional": false,
                "typeAnnotation": null,
                "start": 9879,
                "end": 9882
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9883,
                "end": 9887
              },
              "optional": false,
              "computed": false,
              "start": 9879,
              "end": 9887
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12P",
                "optional": false,
                "typeAnnotation": null,
                "start": 9888,
                "end": 9903
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12P",
                "optional": false,
                "typeAnnotation": null,
                "start": 9905,
                "end": 9920
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12P",
                "optional": false,
                "typeAnnotation": null,
                "start": 9922,
                "end": 9937
              }
            ],
            "optional": false,
            "start": 9879,
            "end": 9938
          },
          "definite": false,
          "start": 9872,
          "end": 9938
        }
      ],
      "declare": false,
      "start": 9868,
      "end": 9939
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
            "name": "s12c",
            "optional": false,
            "typeAnnotation": null,
            "start": 9950,
            "end": 9954
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s12",
                "optional": false,
                "typeAnnotation": null,
                "start": 9957,
                "end": 9960
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9961,
                "end": 9965
              },
              "optional": false,
              "computed": false,
              "start": 9957,
              "end": 9965
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12P",
                "optional": false,
                "typeAnnotation": null,
                "start": 9966,
                "end": 9981
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12",
                "optional": false,
                "typeAnnotation": null,
                "start": 9983,
                "end": 9997
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12",
                "optional": false,
                "typeAnnotation": null,
                "start": 9999,
                "end": 10013
              }
            ],
            "optional": false,
            "start": 9957,
            "end": 10014
          },
          "definite": false,
          "start": 9950,
          "end": 10014
        }
      ],
      "declare": false,
      "start": 9946,
      "end": 10015
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 77,
  "end": 10021
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 77,
    "end": 86,
    "range": [
      77,
      86
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 87,
    "end": 94,
    "range": [
      87,
      94
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 104,
    "end": 108,
    "range": [
      104,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 112,
    "end": 119,
    "range": [
      112,
      119
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 123,
    "end": 128,
    "range": [
      123,
      128
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 128,
    "end": 129,
    "range": [
      128,
      129
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 130,
    "end": 131,
    "range": [
      130,
      131
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 133,
    "end": 135,
    "range": [
      133,
      135
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 136,
    "end": 137,
    "range": [
      136,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 139,
    "end": 144,
    "range": [
      139,
      144
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 144,
    "end": 145,
    "range": [
      144,
      145
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 145,
    "end": 146,
    "range": [
      145,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 148,
    "end": 153,
    "range": [
      148,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 155,
    "end": 158,
    "range": [
      155,
      158
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 158,
    "end": 159,
    "range": [
      158,
      159
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 160,
    "end": 162,
    "range": [
      160,
      162
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 166,
    "end": 174,
    "range": [
      166,
      174
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 178,
    "end": 186,
    "range": [
      178,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 188,
    "end": 191,
    "range": [
      188,
      191
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 191,
    "end": 192,
    "range": [
      191,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 193,
    "end": 195,
    "range": [
      193,
      195
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 196,
    "end": 200,
    "range": [
      196,
      200
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 200,
    "end": 201,
    "range": [
      200,
      201
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 201,
    "end": 202,
    "range": [
      201,
      202
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 203,
    "end": 210,
    "range": [
      203,
      210
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 211,
    "end": 212,
    "range": [
      211,
      212
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 212,
    "end": 213,
    "range": [
      212,
      213
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 213,
    "end": 214,
    "range": [
      213,
      214
    ]
  },
  {
    "type": "Identifier",
    "value": "done",
    "start": 219,
    "end": 223,
    "range": [
      219,
      223
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 223,
    "end": 224,
    "range": [
      223,
      224
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 226,
    "end": 227,
    "range": [
      226,
      227
    ]
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 227,
    "end": 234,
    "range": [
      227,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 238,
    "end": 243,
    "range": [
      238,
      243
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 243,
    "end": 244,
    "range": [
      243,
      244
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 245,
    "end": 246,
    "range": [
      245,
      246
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 246,
    "end": 247,
    "range": [
      246,
      247
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 248,
    "end": 250,
    "range": [
      248,
      250
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 251,
    "end": 254,
    "range": [
      251,
      254
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 256,
    "end": 261,
    "range": [
      256,
      261
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 261,
    "end": 262,
    "range": [
      261,
      262
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 262,
    "end": 263,
    "range": [
      262,
      263
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 264,
    "end": 265,
    "range": [
      264,
      265
    ]
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 265,
    "end": 270,
    "range": [
      265,
      270
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 272,
    "end": 275,
    "range": [
      272,
      275
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 275,
    "end": 276,
    "range": [
      275,
      276
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 277,
    "end": 279,
    "range": [
      277,
      279
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 280,
    "end": 283,
    "range": [
      280,
      283
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 283,
    "end": 284,
    "range": [
      283,
      284
    ]
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 285,
    "end": 293,
    "range": [
      285,
      293
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 293,
    "end": 294,
    "range": [
      293,
      294
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 294,
    "end": 295,
    "range": [
      294,
      295
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 296,
    "end": 297,
    "range": [
      296,
      297
    ]
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 297,
    "end": 305,
    "range": [
      297,
      305
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 305,
    "end": 306,
    "range": [
      305,
      306
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 307,
    "end": 310,
    "range": [
      307,
      310
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 310,
    "end": 311,
    "range": [
      310,
      311
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 312,
    "end": 314,
    "range": [
      312,
      314
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 315,
    "end": 319,
    "range": [
      315,
      319
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 319,
    "end": 320,
    "range": [
      319,
      320
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 320,
    "end": 321,
    "range": [
      320,
      321
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 322,
    "end": 326,
    "range": [
      322,
      326
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 326,
    "end": 327,
    "range": [
      326,
      327
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 328,
    "end": 329,
    "range": [
      328,
      329
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 331,
    "end": 340,
    "range": [
      331,
      340
    ]
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 341,
    "end": 349,
    "range": [
      341,
      349
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 349,
    "end": 350,
    "range": [
      349,
      350
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 350,
    "end": 351,
    "range": [
      350,
      351
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 351,
    "end": 352,
    "range": [
      351,
      352
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 353,
    "end": 354,
    "range": [
      353,
      354
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 359,
    "end": 363,
    "range": [
      359,
      363
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 363,
    "end": 364,
    "range": [
      363,
      364
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 364,
    "end": 365,
    "range": [
      364,
      365
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 365,
    "end": 366,
    "range": [
      365,
      366
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 366,
    "end": 367,
    "range": [
      366,
      367
    ]
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 367,
    "end": 374,
    "range": [
      367,
      374
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 374,
    "end": 375,
    "range": [
      374,
      375
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 375,
    "end": 376,
    "range": [
      375,
      376
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 377,
    "end": 378,
    "range": [
      377,
      378
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 378,
    "end": 383,
    "range": [
      378,
      383
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 383,
    "end": 384,
    "range": [
      383,
      384
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 385,
    "end": 386,
    "range": [
      385,
      386
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 386,
    "end": 387,
    "range": [
      386,
      387
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 388,
    "end": 390,
    "range": [
      388,
      390
    ]
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 391,
    "end": 399,
    "range": [
      391,
      399
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 399,
    "end": 400,
    "range": [
      399,
      400
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 400,
    "end": 401,
    "range": [
      400,
      401
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 401,
    "end": 402,
    "range": [
      401,
      402
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 402,
    "end": 403,
    "range": [
      402,
      403
    ]
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 404,
    "end": 409,
    "range": [
      404,
      409
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 409,
    "end": 410,
    "range": [
      409,
      410
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 410,
    "end": 411,
    "range": [
      410,
      411
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 412,
    "end": 413,
    "range": [
      412,
      413
    ]
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 413,
    "end": 418,
    "range": [
      413,
      418
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 418,
    "end": 419,
    "range": [
      418,
      419
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 420,
    "end": 423,
    "range": [
      420,
      423
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 423,
    "end": 424,
    "range": [
      423,
      424
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 425,
    "end": 427,
    "range": [
      425,
      427
    ]
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 428,
    "end": 436,
    "range": [
      428,
      436
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 436,
    "end": 437,
    "range": [
      436,
      437
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 437,
    "end": 438,
    "range": [
      437,
      438
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 438,
    "end": 439,
    "range": [
      438,
      439
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 439,
    "end": 440,
    "range": [
      439,
      440
    ]
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 441,
    "end": 449,
    "range": [
      441,
      449
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 449,
    "end": 450,
    "range": [
      449,
      450
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 450,
    "end": 451,
    "range": [
      450,
      451
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 452,
    "end": 453,
    "range": [
      452,
      453
    ]
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 453,
    "end": 461,
    "range": [
      453,
      461
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 461,
    "end": 462,
    "range": [
      461,
      462
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 463,
    "end": 466,
    "range": [
      463,
      466
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 466,
    "end": 467,
    "range": [
      466,
      467
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 468,
    "end": 470,
    "range": [
      468,
      470
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 471,
    "end": 475,
    "range": [
      471,
      475
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 475,
    "end": 476,
    "range": [
      475,
      476
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 476,
    "end": 477,
    "range": [
      476,
      477
    ]
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 478,
    "end": 486,
    "range": [
      478,
      486
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 486,
    "end": 487,
    "range": [
      486,
      487
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 487,
    "end": 488,
    "range": [
      487,
      488
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 488,
    "end": 489,
    "range": [
      488,
      489
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 489,
    "end": 490,
    "range": [
      489,
      490
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 495,
    "end": 499,
    "range": [
      495,
      499
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 499,
    "end": 500,
    "range": [
      499,
      500
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 500,
    "end": 501,
    "range": [
      500,
      501
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 501,
    "end": 502,
    "range": [
      501,
      502
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 502,
    "end": 503,
    "range": [
      502,
      503
    ]
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 503,
    "end": 510,
    "range": [
      503,
      510
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 510,
    "end": 511,
    "range": [
      510,
      511
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 511,
    "end": 512,
    "range": [
      511,
      512
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 513,
    "end": 514,
    "range": [
      513,
      514
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 514,
    "end": 519,
    "range": [
      514,
      519
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 519,
    "end": 520,
    "range": [
      519,
      520
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 521,
    "end": 522,
    "range": [
      521,
      522
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 522,
    "end": 523,
    "range": [
      522,
      523
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 524,
    "end": 526,
    "range": [
      524,
      526
    ]
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 527,
    "end": 535,
    "range": [
      527,
      535
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 535,
    "end": 536,
    "range": [
      535,
      536
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 536,
    "end": 537,
    "range": [
      536,
      537
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 537,
    "end": 538,
    "range": [
      537,
      538
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 538,
    "end": 539,
    "range": [
      538,
      539
    ]
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 540,
    "end": 545,
    "range": [
      540,
      545
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 545,
    "end": 546,
    "range": [
      545,
      546
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 546,
    "end": 547,
    "range": [
      546,
      547
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 548,
    "end": 549,
    "range": [
      548,
      549
    ]
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 549,
    "end": 554,
    "range": [
      549,
      554
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 554,
    "end": 555,
    "range": [
      554,
      555
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 556,
    "end": 559,
    "range": [
      556,
      559
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 559,
    "end": 560,
    "range": [
      559,
      560
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 561,
    "end": 563,
    "range": [
      561,
      563
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 564,
    "end": 565,
    "range": [
      564,
      565
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 565,
    "end": 566,
    "range": [
      565,
      566
    ]
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 567,
    "end": 575,
    "range": [
      567,
      575
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 575,
    "end": 576,
    "range": [
      575,
      576
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 576,
    "end": 577,
    "range": [
      576,
      577
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 578,
    "end": 579,
    "range": [
      578,
      579
    ]
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 579,
    "end": 587,
    "range": [
      579,
      587
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 587,
    "end": 588,
    "range": [
      587,
      588
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 589,
    "end": 592,
    "range": [
      589,
      592
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 592,
    "end": 593,
    "range": [
      592,
      593
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 594,
    "end": 596,
    "range": [
      594,
      596
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 597,
    "end": 601,
    "range": [
      597,
      601
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 601,
    "end": 602,
    "range": [
      601,
      602
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 602,
    "end": 603,
    "range": [
      602,
      603
    ]
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 604,
    "end": 612,
    "range": [
      604,
      612
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 612,
    "end": 613,
    "range": [
      612,
      613
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 613,
    "end": 614,
    "range": [
      613,
      614
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 614,
    "end": 615,
    "range": [
      614,
      615
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 615,
    "end": 616,
    "range": [
      615,
      616
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 621,
    "end": 625,
    "range": [
      621,
      625
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 625,
    "end": 626,
    "range": [
      625,
      626
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 626,
    "end": 627,
    "range": [
      626,
      627
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 627,
    "end": 628,
    "range": [
      627,
      628
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 628,
    "end": 629,
    "range": [
      628,
      629
    ]
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 629,
    "end": 636,
    "range": [
      629,
      636
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 636,
    "end": 637,
    "range": [
      636,
      637
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 637,
    "end": 638,
    "range": [
      637,
      638
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 639,
    "end": 640,
    "range": [
      639,
      640
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 640,
    "end": 645,
    "range": [
      640,
      645
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 645,
    "end": 646,
    "range": [
      645,
      646
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 647,
    "end": 648,
    "range": [
      647,
      648
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 648,
    "end": 649,
    "range": [
      648,
      649
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 650,
    "end": 652,
    "range": [
      650,
      652
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 653,
    "end": 654,
    "range": [
      653,
      654
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 654,
    "end": 655,
    "range": [
      654,
      655
    ]
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 656,
    "end": 661,
    "range": [
      656,
      661
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 661,
    "end": 662,
    "range": [
      661,
      662
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 662,
    "end": 663,
    "range": [
      662,
      663
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 664,
    "end": 665,
    "range": [
      664,
      665
    ]
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 665,
    "end": 670,
    "range": [
      665,
      670
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 670,
    "end": 671,
    "range": [
      670,
      671
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 672,
    "end": 675,
    "range": [
      672,
      675
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 675,
    "end": 676,
    "range": [
      675,
      676
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 677,
    "end": 679,
    "range": [
      677,
      679
    ]
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 680,
    "end": 688,
    "range": [
      680,
      688
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 688,
    "end": 689,
    "range": [
      688,
      689
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 689,
    "end": 690,
    "range": [
      689,
      690
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 690,
    "end": 691,
    "range": [
      690,
      691
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 691,
    "end": 692,
    "range": [
      691,
      692
    ]
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 693,
    "end": 701,
    "range": [
      693,
      701
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 701,
    "end": 702,
    "range": [
      701,
      702
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 702,
    "end": 703,
    "range": [
      702,
      703
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 704,
    "end": 705,
    "range": [
      704,
      705
    ]
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 705,
    "end": 713,
    "range": [
      705,
      713
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 713,
    "end": 714,
    "range": [
      713,
      714
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 715,
    "end": 718,
    "range": [
      715,
      718
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 718,
    "end": 719,
    "range": [
      718,
      719
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 720,
    "end": 722,
    "range": [
      720,
      722
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 723,
    "end": 727,
    "range": [
      723,
      727
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 727,
    "end": 728,
    "range": [
      727,
      728
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 728,
    "end": 729,
    "range": [
      728,
      729
    ]
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 730,
    "end": 738,
    "range": [
      730,
      738
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 738,
    "end": 739,
    "range": [
      738,
      739
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 739,
    "end": 740,
    "range": [
      739,
      740
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 740,
    "end": 741,
    "range": [
      740,
      741
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 741,
    "end": 742,
    "range": [
      741,
      742
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 747,
    "end": 751,
    "range": [
      747,
      751
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 751,
    "end": 752,
    "range": [
      751,
      752
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 752,
    "end": 753,
    "range": [
      752,
      753
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 753,
    "end": 754,
    "range": [
      753,
      754
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 754,
    "end": 755,
    "range": [
      754,
      755
    ]
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 755,
    "end": 762,
    "range": [
      755,
      762
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 762,
    "end": 763,
    "range": [
      762,
      763
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 763,
    "end": 764,
    "range": [
      763,
      764
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 765,
    "end": 766,
    "range": [
      765,
      766
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 766,
    "end": 771,
    "range": [
      766,
      771
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 771,
    "end": 772,
    "range": [
      771,
      772
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 773,
    "end": 774,
    "range": [
      773,
      774
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 774,
    "end": 775,
    "range": [
      774,
      775
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 776,
    "end": 778,
    "range": [
      776,
      778
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 779,
    "end": 780,
    "range": [
      779,
      780
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 780,
    "end": 781,
    "range": [
      780,
      781
    ]
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 782,
    "end": 787,
    "range": [
      782,
      787
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 787,
    "end": 788,
    "range": [
      787,
      788
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 788,
    "end": 789,
    "range": [
      788,
      789
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 790,
    "end": 791,
    "range": [
      790,
      791
    ]
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 791,
    "end": 796,
    "range": [
      791,
      796
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 796,
    "end": 797,
    "range": [
      796,
      797
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 798,
    "end": 801,
    "range": [
      798,
      801
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 801,
    "end": 802,
    "range": [
      801,
      802
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 803,
    "end": 805,
    "range": [
      803,
      805
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 806,
    "end": 807,
    "range": [
      806,
      807
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 807,
    "end": 808,
    "range": [
      807,
      808
    ]
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 809,
    "end": 817,
    "range": [
      809,
      817
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 817,
    "end": 818,
    "range": [
      817,
      818
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 818,
    "end": 819,
    "range": [
      818,
      819
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 820,
    "end": 821,
    "range": [
      820,
      821
    ]
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 821,
    "end": 829,
    "range": [
      821,
      829
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 829,
    "end": 830,
    "range": [
      829,
      830
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 831,
    "end": 834,
    "range": [
      831,
      834
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 834,
    "end": 835,
    "range": [
      834,
      835
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 836,
    "end": 838,
    "range": [
      836,
      838
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 839,
    "end": 843,
    "range": [
      839,
      843
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 843,
    "end": 844,
    "range": [
      843,
      844
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 844,
    "end": 845,
    "range": [
      844,
      845
    ]
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 846,
    "end": 854,
    "range": [
      846,
      854
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 854,
    "end": 855,
    "range": [
      854,
      855
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 855,
    "end": 856,
    "range": [
      855,
      856
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 856,
    "end": 857,
    "range": [
      856,
      857
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 857,
    "end": 858,
    "range": [
      857,
      858
    ]
  },
  {
    "type": "Identifier",
    "value": "done",
    "start": 863,
    "end": 867,
    "range": [
      863,
      867
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 867,
    "end": 868,
    "range": [
      867,
      868
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 869,
    "end": 870,
    "range": [
      869,
      870
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 870,
    "end": 871,
    "range": [
      870,
      871
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 871,
    "end": 872,
    "range": [
      871,
      872
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 872,
    "end": 873,
    "range": [
      872,
      873
    ]
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 873,
    "end": 880,
    "range": [
      873,
      880
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 880,
    "end": 881,
    "range": [
      880,
      881
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 881,
    "end": 882,
    "range": [
      881,
      882
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 883,
    "end": 884,
    "range": [
      883,
      884
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 884,
    "end": 889,
    "range": [
      884,
      889
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 889,
    "end": 890,
    "range": [
      889,
      890
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 891,
    "end": 892,
    "range": [
      891,
      892
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 892,
    "end": 893,
    "range": [
      892,
      893
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 894,
    "end": 896,
    "range": [
      894,
      896
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 897,
    "end": 900,
    "range": [
      897,
      900
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 900,
    "end": 901,
    "range": [
      900,
      901
    ]
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 902,
    "end": 907,
    "range": [
      902,
      907
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 907,
    "end": 908,
    "range": [
      907,
      908
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 908,
    "end": 909,
    "range": [
      908,
      909
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 910,
    "end": 911,
    "range": [
      910,
      911
    ]
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 911,
    "end": 916,
    "range": [
      911,
      916
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 916,
    "end": 917,
    "range": [
      916,
      917
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 918,
    "end": 921,
    "range": [
      918,
      921
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 921,
    "end": 922,
    "range": [
      921,
      922
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 923,
    "end": 925,
    "range": [
      923,
      925
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 926,
    "end": 929,
    "range": [
      926,
      929
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 929,
    "end": 930,
    "range": [
      929,
      930
    ]
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 931,
    "end": 939,
    "range": [
      931,
      939
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 939,
    "end": 940,
    "range": [
      939,
      940
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 940,
    "end": 941,
    "range": [
      940,
      941
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 942,
    "end": 943,
    "range": [
      942,
      943
    ]
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 943,
    "end": 951,
    "range": [
      943,
      951
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 951,
    "end": 952,
    "range": [
      951,
      952
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 953,
    "end": 956,
    "range": [
      953,
      956
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 956,
    "end": 957,
    "range": [
      956,
      957
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 958,
    "end": 960,
    "range": [
      958,
      960
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 961,
    "end": 965,
    "range": [
      961,
      965
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 965,
    "end": 966,
    "range": [
      965,
      966
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 966,
    "end": 967,
    "range": [
      966,
      967
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 968,
    "end": 972,
    "range": [
      968,
      972
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 972,
    "end": 973,
    "range": [
      972,
      973
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 974,
    "end": 975,
    "range": [
      974,
      975
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 977,
    "end": 984,
    "range": [
      977,
      984
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 985,
    "end": 993,
    "range": [
      985,
      993
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 994,
    "end": 1006,
    "range": [
      994,
      1006
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1006,
    "end": 1007,
    "range": [
      1006,
      1007
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1007,
    "end": 1008,
    "range": [
      1007,
      1008
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1008,
    "end": 1009,
    "range": [
      1008,
      1009
    ]
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 1010,
    "end": 1018,
    "range": [
      1010,
      1018
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1018,
    "end": 1019,
    "range": [
      1018,
      1019
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1019,
    "end": 1025,
    "range": [
      1019,
      1025
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1025,
    "end": 1026,
    "range": [
      1025,
      1026
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1026,
    "end": 1027,
    "range": [
      1026,
      1027
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1028,
    "end": 1035,
    "range": [
      1028,
      1035
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1036,
    "end": 1044,
    "range": [
      1036,
      1044
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 1045,
    "end": 1058,
    "range": [
      1045,
      1058
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1058,
    "end": 1059,
    "range": [
      1058,
      1059
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1059,
    "end": 1060,
    "range": [
      1059,
      1060
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1060,
    "end": 1061,
    "range": [
      1060,
      1061
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1062,
    "end": 1069,
    "range": [
      1062,
      1069
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1069,
    "end": 1070,
    "range": [
      1069,
      1070
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1070,
    "end": 1076,
    "range": [
      1070,
      1076
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1076,
    "end": 1077,
    "range": [
      1076,
      1077
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1077,
    "end": 1078,
    "range": [
      1077,
      1078
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1079,
    "end": 1086,
    "range": [
      1079,
      1086
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1087,
    "end": 1095,
    "range": [
      1087,
      1095
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 1096,
    "end": 1109,
    "range": [
      1096,
      1109
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1109,
    "end": 1110,
    "range": [
      1109,
      1110
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1110,
    "end": 1111,
    "range": [
      1110,
      1111
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1111,
    "end": 1112,
    "range": [
      1111,
      1112
    ]
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 1113,
    "end": 1121,
    "range": [
      1113,
      1121
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1121,
    "end": 1122,
    "range": [
      1121,
      1122
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1122,
    "end": 1123,
    "range": [
      1122,
      1123
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1124,
    "end": 1125,
    "range": [
      1124,
      1125
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1125,
    "end": 1126,
    "range": [
      1125,
      1126
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1127,
    "end": 1133,
    "range": [
      1127,
      1133
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1134,
    "end": 1135,
    "range": [
      1134,
      1135
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1135,
    "end": 1136,
    "range": [
      1135,
      1136
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1136,
    "end": 1137,
    "range": [
      1136,
      1137
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1138,
    "end": 1145,
    "range": [
      1138,
      1145
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1146,
    "end": 1154,
    "range": [
      1146,
      1154
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction2P",
    "start": 1155,
    "end": 1169,
    "range": [
      1155,
      1169
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1169,
    "end": 1170,
    "range": [
      1169,
      1170
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1170,
    "end": 1171,
    "range": [
      1170,
      1171
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1171,
    "end": 1172,
    "range": [
      1171,
      1172
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1173,
    "end": 1180,
    "range": [
      1173,
      1180
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1180,
    "end": 1181,
    "range": [
      1180,
      1181
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1181,
    "end": 1182,
    "range": [
      1181,
      1182
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1183,
    "end": 1184,
    "range": [
      1183,
      1184
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1184,
    "end": 1185,
    "range": [
      1184,
      1185
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1186,
    "end": 1192,
    "range": [
      1186,
      1192
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1193,
    "end": 1194,
    "range": [
      1193,
      1194
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1194,
    "end": 1195,
    "range": [
      1194,
      1195
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1195,
    "end": 1196,
    "range": [
      1195,
      1196
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1197,
    "end": 1204,
    "range": [
      1197,
      1204
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1205,
    "end": 1213,
    "range": [
      1205,
      1213
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 1214,
    "end": 1227,
    "range": [
      1214,
      1227
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1227,
    "end": 1228,
    "range": [
      1227,
      1228
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1228,
    "end": 1229,
    "range": [
      1228,
      1229
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1229,
    "end": 1230,
    "range": [
      1229,
      1230
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1231,
    "end": 1237,
    "range": [
      1231,
      1237
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1237,
    "end": 1238,
    "range": [
      1237,
      1238
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1238,
    "end": 1239,
    "range": [
      1238,
      1239
    ]
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 1240,
    "end": 1248,
    "range": [
      1240,
      1248
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1248,
    "end": 1249,
    "range": [
      1248,
      1249
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1249,
    "end": 1255,
    "range": [
      1249,
      1255
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1255,
    "end": 1256,
    "range": [
      1255,
      1256
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1256,
    "end": 1257,
    "range": [
      1256,
      1257
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1258,
    "end": 1265,
    "range": [
      1258,
      1265
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1266,
    "end": 1274,
    "range": [
      1266,
      1274
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction3P",
    "start": 1275,
    "end": 1289,
    "range": [
      1275,
      1289
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1289,
    "end": 1290,
    "range": [
      1289,
      1290
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1290,
    "end": 1291,
    "range": [
      1290,
      1291
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1291,
    "end": 1292,
    "range": [
      1291,
      1292
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1293,
    "end": 1299,
    "range": [
      1293,
      1299
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1299,
    "end": 1300,
    "range": [
      1299,
      1300
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1300,
    "end": 1301,
    "range": [
      1300,
      1301
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1302,
    "end": 1309,
    "range": [
      1302,
      1309
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1309,
    "end": 1310,
    "range": [
      1309,
      1310
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1310,
    "end": 1316,
    "range": [
      1310,
      1316
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1316,
    "end": 1317,
    "range": [
      1316,
      1317
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1317,
    "end": 1318,
    "range": [
      1317,
      1318
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1319,
    "end": 1326,
    "range": [
      1319,
      1326
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1327,
    "end": 1335,
    "range": [
      1327,
      1335
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 1336,
    "end": 1349,
    "range": [
      1336,
      1349
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1349,
    "end": 1350,
    "range": [
      1349,
      1350
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1350,
    "end": 1351,
    "range": [
      1350,
      1351
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1351,
    "end": 1352,
    "range": [
      1351,
      1352
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1353,
    "end": 1359,
    "range": [
      1353,
      1359
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1359,
    "end": 1360,
    "range": [
      1359,
      1360
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1361,
    "end": 1362,
    "range": [
      1361,
      1362
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1362,
    "end": 1363,
    "range": [
      1362,
      1363
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1363,
    "end": 1364,
    "range": [
      1363,
      1364
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1365,
    "end": 1371,
    "range": [
      1365,
      1371
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1371,
    "end": 1372,
    "range": [
      1371,
      1372
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1372,
    "end": 1373,
    "range": [
      1372,
      1373
    ]
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 1374,
    "end": 1382,
    "range": [
      1374,
      1382
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1382,
    "end": 1383,
    "range": [
      1382,
      1383
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1383,
    "end": 1389,
    "range": [
      1383,
      1389
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1389,
    "end": 1390,
    "range": [
      1389,
      1390
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1390,
    "end": 1391,
    "range": [
      1390,
      1391
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1392,
    "end": 1399,
    "range": [
      1392,
      1399
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1400,
    "end": 1408,
    "range": [
      1400,
      1408
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction4P",
    "start": 1409,
    "end": 1423,
    "range": [
      1409,
      1423
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1423,
    "end": 1424,
    "range": [
      1423,
      1424
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1424,
    "end": 1425,
    "range": [
      1424,
      1425
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1425,
    "end": 1426,
    "range": [
      1425,
      1426
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1427,
    "end": 1433,
    "range": [
      1427,
      1433
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1433,
    "end": 1434,
    "range": [
      1433,
      1434
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1435,
    "end": 1436,
    "range": [
      1435,
      1436
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1436,
    "end": 1437,
    "range": [
      1436,
      1437
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1437,
    "end": 1438,
    "range": [
      1437,
      1438
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1439,
    "end": 1445,
    "range": [
      1439,
      1445
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1445,
    "end": 1446,
    "range": [
      1445,
      1446
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1446,
    "end": 1447,
    "range": [
      1446,
      1447
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1448,
    "end": 1455,
    "range": [
      1448,
      1455
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1455,
    "end": 1456,
    "range": [
      1455,
      1456
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1456,
    "end": 1462,
    "range": [
      1456,
      1462
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1462,
    "end": 1463,
    "range": [
      1462,
      1463
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1463,
    "end": 1464,
    "range": [
      1463,
      1464
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1465,
    "end": 1472,
    "range": [
      1465,
      1472
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1473,
    "end": 1481,
    "range": [
      1473,
      1481
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 1482,
    "end": 1495,
    "range": [
      1482,
      1495
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1495,
    "end": 1496,
    "range": [
      1495,
      1496
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1496,
    "end": 1497,
    "range": [
      1496,
      1497
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1497,
    "end": 1498,
    "range": [
      1497,
      1498
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1499,
    "end": 1505,
    "range": [
      1499,
      1505
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1505,
    "end": 1506,
    "range": [
      1505,
      1506
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1507,
    "end": 1509,
    "range": [
      1507,
      1509
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1509,
    "end": 1510,
    "range": [
      1509,
      1510
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1511,
    "end": 1512,
    "range": [
      1511,
      1512
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1512,
    "end": 1513,
    "range": [
      1512,
      1513
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1513,
    "end": 1514,
    "range": [
      1513,
      1514
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1515,
    "end": 1521,
    "range": [
      1515,
      1521
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1521,
    "end": 1522,
    "range": [
      1521,
      1522
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1523,
    "end": 1525,
    "range": [
      1523,
      1525
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1526,
    "end": 1532,
    "range": [
      1526,
      1532
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1532,
    "end": 1533,
    "range": [
      1532,
      1533
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1533,
    "end": 1534,
    "range": [
      1533,
      1534
    ]
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 1535,
    "end": 1543,
    "range": [
      1535,
      1543
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1543,
    "end": 1544,
    "range": [
      1543,
      1544
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1544,
    "end": 1550,
    "range": [
      1544,
      1550
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1550,
    "end": 1551,
    "range": [
      1550,
      1551
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1551,
    "end": 1552,
    "range": [
      1551,
      1552
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1553,
    "end": 1560,
    "range": [
      1553,
      1560
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1561,
    "end": 1569,
    "range": [
      1561,
      1569
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction5P",
    "start": 1570,
    "end": 1584,
    "range": [
      1570,
      1584
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1584,
    "end": 1585,
    "range": [
      1584,
      1585
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1585,
    "end": 1586,
    "range": [
      1585,
      1586
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1586,
    "end": 1587,
    "range": [
      1586,
      1587
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1588,
    "end": 1594,
    "range": [
      1588,
      1594
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1594,
    "end": 1595,
    "range": [
      1594,
      1595
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1596,
    "end": 1598,
    "range": [
      1596,
      1598
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1598,
    "end": 1599,
    "range": [
      1598,
      1599
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1600,
    "end": 1601,
    "range": [
      1600,
      1601
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1601,
    "end": 1602,
    "range": [
      1601,
      1602
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1602,
    "end": 1603,
    "range": [
      1602,
      1603
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1604,
    "end": 1610,
    "range": [
      1604,
      1610
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1610,
    "end": 1611,
    "range": [
      1610,
      1611
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1612,
    "end": 1614,
    "range": [
      1612,
      1614
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1615,
    "end": 1621,
    "range": [
      1615,
      1621
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1621,
    "end": 1622,
    "range": [
      1621,
      1622
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1622,
    "end": 1623,
    "range": [
      1622,
      1623
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1624,
    "end": 1631,
    "range": [
      1624,
      1631
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1631,
    "end": 1632,
    "range": [
      1631,
      1632
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1632,
    "end": 1638,
    "range": [
      1632,
      1638
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1638,
    "end": 1639,
    "range": [
      1638,
      1639
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1639,
    "end": 1640,
    "range": [
      1639,
      1640
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1641,
    "end": 1648,
    "range": [
      1641,
      1648
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1649,
    "end": 1657,
    "range": [
      1649,
      1657
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 1658,
    "end": 1671,
    "range": [
      1658,
      1671
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1671,
    "end": 1672,
    "range": [
      1671,
      1672
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1672,
    "end": 1673,
    "range": [
      1672,
      1673
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1673,
    "end": 1674,
    "range": [
      1673,
      1674
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1675,
    "end": 1681,
    "range": [
      1675,
      1681
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1681,
    "end": 1682,
    "range": [
      1681,
      1682
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1683,
    "end": 1685,
    "range": [
      1683,
      1685
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1685,
    "end": 1686,
    "range": [
      1685,
      1686
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1687,
    "end": 1688,
    "range": [
      1687,
      1688
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1688,
    "end": 1689,
    "range": [
      1688,
      1689
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1689,
    "end": 1690,
    "range": [
      1689,
      1690
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1690,
    "end": 1691,
    "range": [
      1690,
      1691
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1691,
    "end": 1692,
    "range": [
      1691,
      1692
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1692,
    "end": 1693,
    "range": [
      1692,
      1693
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1694,
    "end": 1695,
    "range": [
      1694,
      1695
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1695,
    "end": 1696,
    "range": [
      1695,
      1696
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1697,
    "end": 1699,
    "range": [
      1697,
      1699
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1700,
    "end": 1701,
    "range": [
      1700,
      1701
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1701,
    "end": 1702,
    "range": [
      1701,
      1702
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1702,
    "end": 1703,
    "range": [
      1702,
      1703
    ]
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 1704,
    "end": 1712,
    "range": [
      1704,
      1712
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1712,
    "end": 1713,
    "range": [
      1712,
      1713
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1713,
    "end": 1719,
    "range": [
      1713,
      1719
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1719,
    "end": 1720,
    "range": [
      1719,
      1720
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1720,
    "end": 1721,
    "range": [
      1720,
      1721
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1722,
    "end": 1729,
    "range": [
      1722,
      1729
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1730,
    "end": 1738,
    "range": [
      1730,
      1738
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction6P",
    "start": 1739,
    "end": 1753,
    "range": [
      1739,
      1753
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1753,
    "end": 1754,
    "range": [
      1753,
      1754
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1754,
    "end": 1755,
    "range": [
      1754,
      1755
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1755,
    "end": 1756,
    "range": [
      1755,
      1756
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1757,
    "end": 1763,
    "range": [
      1757,
      1763
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1763,
    "end": 1764,
    "range": [
      1763,
      1764
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1765,
    "end": 1767,
    "range": [
      1765,
      1767
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1767,
    "end": 1768,
    "range": [
      1767,
      1768
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1769,
    "end": 1770,
    "range": [
      1769,
      1770
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1770,
    "end": 1771,
    "range": [
      1770,
      1771
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1771,
    "end": 1772,
    "range": [
      1771,
      1772
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1772,
    "end": 1773,
    "range": [
      1772,
      1773
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1773,
    "end": 1774,
    "range": [
      1773,
      1774
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1774,
    "end": 1775,
    "range": [
      1774,
      1775
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1776,
    "end": 1777,
    "range": [
      1776,
      1777
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1777,
    "end": 1778,
    "range": [
      1777,
      1778
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1779,
    "end": 1781,
    "range": [
      1779,
      1781
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1782,
    "end": 1783,
    "range": [
      1782,
      1783
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1783,
    "end": 1784,
    "range": [
      1783,
      1784
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1784,
    "end": 1785,
    "range": [
      1784,
      1785
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1786,
    "end": 1793,
    "range": [
      1786,
      1793
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1793,
    "end": 1794,
    "range": [
      1793,
      1794
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1794,
    "end": 1800,
    "range": [
      1794,
      1800
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1800,
    "end": 1801,
    "range": [
      1800,
      1801
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1801,
    "end": 1802,
    "range": [
      1801,
      1802
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1803,
    "end": 1810,
    "range": [
      1803,
      1810
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1811,
    "end": 1819,
    "range": [
      1811,
      1819
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 1820,
    "end": 1833,
    "range": [
      1820,
      1833
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1833,
    "end": 1834,
    "range": [
      1833,
      1834
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1834,
    "end": 1836,
    "range": [
      1834,
      1836
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1836,
    "end": 1837,
    "range": [
      1836,
      1837
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1838,
    "end": 1839,
    "range": [
      1838,
      1839
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1839,
    "end": 1840,
    "range": [
      1839,
      1840
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1840,
    "end": 1841,
    "range": [
      1840,
      1841
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1841,
    "end": 1842,
    "range": [
      1841,
      1842
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1842,
    "end": 1843,
    "range": [
      1842,
      1843
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1843,
    "end": 1844,
    "range": [
      1843,
      1844
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1845,
    "end": 1846,
    "range": [
      1845,
      1846
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1846,
    "end": 1847,
    "range": [
      1846,
      1847
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1848,
    "end": 1850,
    "range": [
      1848,
      1850
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1851,
    "end": 1852,
    "range": [
      1851,
      1852
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1852,
    "end": 1853,
    "range": [
      1852,
      1853
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1853,
    "end": 1854,
    "range": [
      1853,
      1854
    ]
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 1855,
    "end": 1863,
    "range": [
      1855,
      1863
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1863,
    "end": 1864,
    "range": [
      1863,
      1864
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1864,
    "end": 1870,
    "range": [
      1864,
      1870
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1870,
    "end": 1871,
    "range": [
      1870,
      1871
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1871,
    "end": 1872,
    "range": [
      1871,
      1872
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1873,
    "end": 1880,
    "range": [
      1873,
      1880
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1881,
    "end": 1889,
    "range": [
      1881,
      1889
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction7P",
    "start": 1890,
    "end": 1904,
    "range": [
      1890,
      1904
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1904,
    "end": 1905,
    "range": [
      1904,
      1905
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1905,
    "end": 1907,
    "range": [
      1905,
      1907
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1907,
    "end": 1908,
    "range": [
      1907,
      1908
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1909,
    "end": 1910,
    "range": [
      1909,
      1910
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1910,
    "end": 1911,
    "range": [
      1910,
      1911
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1911,
    "end": 1912,
    "range": [
      1911,
      1912
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1912,
    "end": 1913,
    "range": [
      1912,
      1913
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1913,
    "end": 1914,
    "range": [
      1913,
      1914
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1914,
    "end": 1915,
    "range": [
      1914,
      1915
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1916,
    "end": 1917,
    "range": [
      1916,
      1917
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1917,
    "end": 1918,
    "range": [
      1917,
      1918
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1919,
    "end": 1921,
    "range": [
      1919,
      1921
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1922,
    "end": 1923,
    "range": [
      1922,
      1923
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1923,
    "end": 1924,
    "range": [
      1923,
      1924
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1924,
    "end": 1925,
    "range": [
      1924,
      1925
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1926,
    "end": 1933,
    "range": [
      1926,
      1933
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1933,
    "end": 1934,
    "range": [
      1933,
      1934
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1934,
    "end": 1940,
    "range": [
      1934,
      1940
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1940,
    "end": 1941,
    "range": [
      1940,
      1941
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1941,
    "end": 1942,
    "range": [
      1941,
      1942
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1943,
    "end": 1950,
    "range": [
      1943,
      1950
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1951,
    "end": 1959,
    "range": [
      1951,
      1959
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 1960,
    "end": 1973,
    "range": [
      1960,
      1973
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1973,
    "end": 1974,
    "range": [
      1973,
      1974
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1974,
    "end": 1975,
    "range": [
      1974,
      1975
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1975,
    "end": 1976,
    "range": [
      1975,
      1976
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1976,
    "end": 1977,
    "range": [
      1976,
      1977
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1977,
    "end": 1978,
    "range": [
      1977,
      1978
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1978,
    "end": 1979,
    "range": [
      1978,
      1979
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1980,
    "end": 1981,
    "range": [
      1980,
      1981
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1981,
    "end": 1982,
    "range": [
      1981,
      1982
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1983,
    "end": 1985,
    "range": [
      1983,
      1985
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1985,
    "end": 1986,
    "range": [
      1985,
      1986
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1987,
    "end": 1988,
    "range": [
      1987,
      1988
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1988,
    "end": 1989,
    "range": [
      1988,
      1989
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1989,
    "end": 1990,
    "range": [
      1989,
      1990
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1991,
    "end": 1992,
    "range": [
      1991,
      1992
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1992,
    "end": 1993,
    "range": [
      1992,
      1993
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1994,
    "end": 1996,
    "range": [
      1994,
      1996
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1997,
    "end": 1998,
    "range": [
      1997,
      1998
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1998,
    "end": 1999,
    "range": [
      1998,
      1999
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1999,
    "end": 2000,
    "range": [
      1999,
      2000
    ]
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 2001,
    "end": 2009,
    "range": [
      2001,
      2009
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2009,
    "end": 2010,
    "range": [
      2009,
      2010
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2010,
    "end": 2011,
    "range": [
      2010,
      2011
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2011,
    "end": 2012,
    "range": [
      2011,
      2012
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2012,
    "end": 2013,
    "range": [
      2012,
      2013
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2014,
    "end": 2021,
    "range": [
      2014,
      2021
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2022,
    "end": 2030,
    "range": [
      2022,
      2030
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction8P",
    "start": 2031,
    "end": 2045,
    "range": [
      2031,
      2045
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2045,
    "end": 2046,
    "range": [
      2045,
      2046
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2046,
    "end": 2047,
    "range": [
      2046,
      2047
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2047,
    "end": 2048,
    "range": [
      2047,
      2048
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2048,
    "end": 2049,
    "range": [
      2048,
      2049
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2049,
    "end": 2050,
    "range": [
      2049,
      2050
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2050,
    "end": 2051,
    "range": [
      2050,
      2051
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2052,
    "end": 2053,
    "range": [
      2052,
      2053
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2053,
    "end": 2054,
    "range": [
      2053,
      2054
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2055,
    "end": 2057,
    "range": [
      2055,
      2057
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2057,
    "end": 2058,
    "range": [
      2057,
      2058
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2059,
    "end": 2060,
    "range": [
      2059,
      2060
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2060,
    "end": 2061,
    "range": [
      2060,
      2061
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2061,
    "end": 2062,
    "range": [
      2061,
      2062
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2063,
    "end": 2064,
    "range": [
      2063,
      2064
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2064,
    "end": 2065,
    "range": [
      2064,
      2065
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2066,
    "end": 2068,
    "range": [
      2066,
      2068
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2069,
    "end": 2070,
    "range": [
      2069,
      2070
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2070,
    "end": 2071,
    "range": [
      2070,
      2071
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2071,
    "end": 2072,
    "range": [
      2071,
      2072
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2073,
    "end": 2080,
    "range": [
      2073,
      2080
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2080,
    "end": 2081,
    "range": [
      2080,
      2081
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2081,
    "end": 2082,
    "range": [
      2081,
      2082
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2082,
    "end": 2083,
    "range": [
      2082,
      2083
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2083,
    "end": 2084,
    "range": [
      2083,
      2084
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2085,
    "end": 2092,
    "range": [
      2085,
      2092
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2093,
    "end": 2101,
    "range": [
      2093,
      2101
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 2102,
    "end": 2115,
    "range": [
      2102,
      2115
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2115,
    "end": 2116,
    "range": [
      2115,
      2116
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2116,
    "end": 2117,
    "range": [
      2116,
      2117
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2117,
    "end": 2118,
    "range": [
      2117,
      2118
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2118,
    "end": 2119,
    "range": [
      2118,
      2119
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2119,
    "end": 2120,
    "range": [
      2119,
      2120
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2120,
    "end": 2121,
    "range": [
      2120,
      2121
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2122,
    "end": 2123,
    "range": [
      2122,
      2123
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2123,
    "end": 2124,
    "range": [
      2123,
      2124
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2125,
    "end": 2127,
    "range": [
      2125,
      2127
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2127,
    "end": 2128,
    "range": [
      2127,
      2128
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2129,
    "end": 2130,
    "range": [
      2129,
      2130
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2130,
    "end": 2131,
    "range": [
      2130,
      2131
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2131,
    "end": 2132,
    "range": [
      2131,
      2132
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2132,
    "end": 2133,
    "range": [
      2132,
      2133
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2133,
    "end": 2134,
    "range": [
      2133,
      2134
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2134,
    "end": 2135,
    "range": [
      2134,
      2135
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2136,
    "end": 2137,
    "range": [
      2136,
      2137
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2137,
    "end": 2138,
    "range": [
      2137,
      2138
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2139,
    "end": 2141,
    "range": [
      2139,
      2141
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2142,
    "end": 2143,
    "range": [
      2142,
      2143
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2143,
    "end": 2144,
    "range": [
      2143,
      2144
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2144,
    "end": 2145,
    "range": [
      2144,
      2145
    ]
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 2146,
    "end": 2154,
    "range": [
      2146,
      2154
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2154,
    "end": 2155,
    "range": [
      2154,
      2155
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2155,
    "end": 2156,
    "range": [
      2155,
      2156
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2156,
    "end": 2157,
    "range": [
      2156,
      2157
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2157,
    "end": 2158,
    "range": [
      2157,
      2158
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2159,
    "end": 2166,
    "range": [
      2159,
      2166
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2167,
    "end": 2175,
    "range": [
      2167,
      2175
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction9P",
    "start": 2176,
    "end": 2190,
    "range": [
      2176,
      2190
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2190,
    "end": 2191,
    "range": [
      2190,
      2191
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2191,
    "end": 2192,
    "range": [
      2191,
      2192
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2192,
    "end": 2193,
    "range": [
      2192,
      2193
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2193,
    "end": 2194,
    "range": [
      2193,
      2194
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2194,
    "end": 2195,
    "range": [
      2194,
      2195
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2195,
    "end": 2196,
    "range": [
      2195,
      2196
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2197,
    "end": 2198,
    "range": [
      2197,
      2198
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2198,
    "end": 2199,
    "range": [
      2198,
      2199
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2200,
    "end": 2202,
    "range": [
      2200,
      2202
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2202,
    "end": 2203,
    "range": [
      2202,
      2203
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2204,
    "end": 2205,
    "range": [
      2204,
      2205
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2205,
    "end": 2206,
    "range": [
      2205,
      2206
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2206,
    "end": 2207,
    "range": [
      2206,
      2207
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2207,
    "end": 2208,
    "range": [
      2207,
      2208
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2208,
    "end": 2209,
    "range": [
      2208,
      2209
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2209,
    "end": 2210,
    "range": [
      2209,
      2210
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2211,
    "end": 2212,
    "range": [
      2211,
      2212
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2212,
    "end": 2213,
    "range": [
      2212,
      2213
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2214,
    "end": 2216,
    "range": [
      2214,
      2216
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2217,
    "end": 2218,
    "range": [
      2217,
      2218
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2218,
    "end": 2219,
    "range": [
      2218,
      2219
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2219,
    "end": 2220,
    "range": [
      2219,
      2220
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2221,
    "end": 2228,
    "range": [
      2221,
      2228
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2228,
    "end": 2229,
    "range": [
      2228,
      2229
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2229,
    "end": 2230,
    "range": [
      2229,
      2230
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2230,
    "end": 2231,
    "range": [
      2230,
      2231
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2231,
    "end": 2232,
    "range": [
      2231,
      2232
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2233,
    "end": 2240,
    "range": [
      2233,
      2240
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2241,
    "end": 2249,
    "range": [
      2241,
      2249
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 2250,
    "end": 2264,
    "range": [
      2250,
      2264
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2264,
    "end": 2265,
    "range": [
      2264,
      2265
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2265,
    "end": 2266,
    "range": [
      2265,
      2266
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2266,
    "end": 2267,
    "range": [
      2266,
      2267
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2267,
    "end": 2268,
    "range": [
      2267,
      2268
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2268,
    "end": 2270,
    "range": [
      2268,
      2270
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2270,
    "end": 2271,
    "range": [
      2270,
      2271
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2272,
    "end": 2273,
    "range": [
      2272,
      2273
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2273,
    "end": 2274,
    "range": [
      2273,
      2274
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2274,
    "end": 2275,
    "range": [
      2274,
      2275
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2275,
    "end": 2276,
    "range": [
      2275,
      2276
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2276,
    "end": 2277,
    "range": [
      2276,
      2277
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2277,
    "end": 2278,
    "range": [
      2277,
      2278
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2279,
    "end": 2280,
    "range": [
      2279,
      2280
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2280,
    "end": 2281,
    "range": [
      2280,
      2281
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2282,
    "end": 2284,
    "range": [
      2282,
      2284
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2285,
    "end": 2286,
    "range": [
      2285,
      2286
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2286,
    "end": 2287,
    "range": [
      2286,
      2287
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2287,
    "end": 2288,
    "range": [
      2287,
      2288
    ]
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 2289,
    "end": 2297,
    "range": [
      2289,
      2297
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2297,
    "end": 2298,
    "range": [
      2297,
      2298
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2298,
    "end": 2299,
    "range": [
      2298,
      2299
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2299,
    "end": 2300,
    "range": [
      2299,
      2300
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2300,
    "end": 2301,
    "range": [
      2300,
      2301
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2302,
    "end": 2309,
    "range": [
      2302,
      2309
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2310,
    "end": 2318,
    "range": [
      2310,
      2318
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction10P",
    "start": 2319,
    "end": 2334,
    "range": [
      2319,
      2334
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2334,
    "end": 2335,
    "range": [
      2334,
      2335
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2335,
    "end": 2336,
    "range": [
      2335,
      2336
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2336,
    "end": 2337,
    "range": [
      2336,
      2337
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2337,
    "end": 2338,
    "range": [
      2337,
      2338
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2338,
    "end": 2340,
    "range": [
      2338,
      2340
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2340,
    "end": 2341,
    "range": [
      2340,
      2341
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2342,
    "end": 2343,
    "range": [
      2342,
      2343
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2343,
    "end": 2344,
    "range": [
      2343,
      2344
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2344,
    "end": 2345,
    "range": [
      2344,
      2345
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2345,
    "end": 2346,
    "range": [
      2345,
      2346
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2346,
    "end": 2347,
    "range": [
      2346,
      2347
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2347,
    "end": 2348,
    "range": [
      2347,
      2348
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2349,
    "end": 2350,
    "range": [
      2349,
      2350
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2350,
    "end": 2351,
    "range": [
      2350,
      2351
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2352,
    "end": 2354,
    "range": [
      2352,
      2354
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2355,
    "end": 2356,
    "range": [
      2355,
      2356
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2356,
    "end": 2357,
    "range": [
      2356,
      2357
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2357,
    "end": 2358,
    "range": [
      2357,
      2358
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2359,
    "end": 2366,
    "range": [
      2359,
      2366
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2366,
    "end": 2367,
    "range": [
      2366,
      2367
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2367,
    "end": 2368,
    "range": [
      2367,
      2368
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2368,
    "end": 2369,
    "range": [
      2368,
      2369
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2369,
    "end": 2370,
    "range": [
      2369,
      2370
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2372,
    "end": 2379,
    "range": [
      2372,
      2379
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2380,
    "end": 2388,
    "range": [
      2380,
      2388
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 2389,
    "end": 2403,
    "range": [
      2389,
      2403
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2403,
    "end": 2404,
    "range": [
      2403,
      2404
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2404,
    "end": 2405,
    "range": [
      2404,
      2405
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2405,
    "end": 2406,
    "range": [
      2405,
      2406
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2407,
    "end": 2413,
    "range": [
      2407,
      2413
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2413,
    "end": 2414,
    "range": [
      2413,
      2414
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2414,
    "end": 2415,
    "range": [
      2414,
      2415
    ]
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 2416,
    "end": 2424,
    "range": [
      2416,
      2424
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2424,
    "end": 2425,
    "range": [
      2424,
      2425
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2425,
    "end": 2431,
    "range": [
      2425,
      2431
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2431,
    "end": 2432,
    "range": [
      2431,
      2432
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2432,
    "end": 2433,
    "range": [
      2432,
      2433
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2434,
    "end": 2441,
    "range": [
      2434,
      2441
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2442,
    "end": 2450,
    "range": [
      2442,
      2450
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 2451,
    "end": 2465,
    "range": [
      2451,
      2465
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2465,
    "end": 2466,
    "range": [
      2465,
      2466
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2466,
    "end": 2467,
    "range": [
      2466,
      2467
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2467,
    "end": 2468,
    "range": [
      2467,
      2468
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2469,
    "end": 2475,
    "range": [
      2469,
      2475
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2475,
    "end": 2476,
    "range": [
      2475,
      2476
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2476,
    "end": 2477,
    "range": [
      2476,
      2477
    ]
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 2478,
    "end": 2486,
    "range": [
      2478,
      2486
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2486,
    "end": 2487,
    "range": [
      2486,
      2487
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2487,
    "end": 2493,
    "range": [
      2487,
      2493
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2493,
    "end": 2494,
    "range": [
      2493,
      2494
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2494,
    "end": 2495,
    "range": [
      2494,
      2495
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2496,
    "end": 2503,
    "range": [
      2496,
      2503
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2504,
    "end": 2512,
    "range": [
      2504,
      2512
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction11P",
    "start": 2513,
    "end": 2528,
    "range": [
      2513,
      2528
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2528,
    "end": 2529,
    "range": [
      2528,
      2529
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2529,
    "end": 2530,
    "range": [
      2529,
      2530
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2530,
    "end": 2531,
    "range": [
      2530,
      2531
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2532,
    "end": 2538,
    "range": [
      2532,
      2538
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2538,
    "end": 2539,
    "range": [
      2538,
      2539
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2539,
    "end": 2540,
    "range": [
      2539,
      2540
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2541,
    "end": 2548,
    "range": [
      2541,
      2548
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2548,
    "end": 2549,
    "range": [
      2548,
      2549
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2549,
    "end": 2555,
    "range": [
      2549,
      2555
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2555,
    "end": 2556,
    "range": [
      2555,
      2556
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2556,
    "end": 2557,
    "range": [
      2556,
      2557
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2558,
    "end": 2565,
    "range": [
      2558,
      2565
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2566,
    "end": 2574,
    "range": [
      2566,
      2574
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction11P",
    "start": 2575,
    "end": 2590,
    "range": [
      2575,
      2590
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2590,
    "end": 2591,
    "range": [
      2590,
      2591
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2591,
    "end": 2592,
    "range": [
      2591,
      2592
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2592,
    "end": 2593,
    "range": [
      2592,
      2593
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2594,
    "end": 2600,
    "range": [
      2594,
      2600
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2600,
    "end": 2601,
    "range": [
      2600,
      2601
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2601,
    "end": 2602,
    "range": [
      2601,
      2602
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2603,
    "end": 2610,
    "range": [
      2603,
      2610
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2610,
    "end": 2611,
    "range": [
      2610,
      2611
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2611,
    "end": 2617,
    "range": [
      2611,
      2617
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2617,
    "end": 2618,
    "range": [
      2617,
      2618
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2618,
    "end": 2619,
    "range": [
      2618,
      2619
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2621,
    "end": 2628,
    "range": [
      2621,
      2628
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2629,
    "end": 2637,
    "range": [
      2629,
      2637
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 2638,
    "end": 2652,
    "range": [
      2638,
      2652
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2652,
    "end": 2653,
    "range": [
      2652,
      2653
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2653,
    "end": 2654,
    "range": [
      2653,
      2654
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2654,
    "end": 2655,
    "range": [
      2654,
      2655
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2655,
    "end": 2656,
    "range": [
      2655,
      2656
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2656,
    "end": 2657,
    "range": [
      2656,
      2657
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2657,
    "end": 2658,
    "range": [
      2657,
      2658
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2659,
    "end": 2660,
    "range": [
      2659,
      2660
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2660,
    "end": 2661,
    "range": [
      2660,
      2661
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2661,
    "end": 2662,
    "range": [
      2661,
      2662
    ]
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 2663,
    "end": 2671,
    "range": [
      2663,
      2671
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2671,
    "end": 2672,
    "range": [
      2671,
      2672
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2672,
    "end": 2673,
    "range": [
      2672,
      2673
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2673,
    "end": 2674,
    "range": [
      2673,
      2674
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2674,
    "end": 2675,
    "range": [
      2674,
      2675
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2676,
    "end": 2683,
    "range": [
      2676,
      2683
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2684,
    "end": 2692,
    "range": [
      2684,
      2692
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 2693,
    "end": 2707,
    "range": [
      2693,
      2707
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2707,
    "end": 2708,
    "range": [
      2707,
      2708
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2708,
    "end": 2709,
    "range": [
      2708,
      2709
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2709,
    "end": 2710,
    "range": [
      2709,
      2710
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2710,
    "end": 2711,
    "range": [
      2710,
      2711
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2711,
    "end": 2712,
    "range": [
      2711,
      2712
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2712,
    "end": 2713,
    "range": [
      2712,
      2713
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2714,
    "end": 2715,
    "range": [
      2714,
      2715
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2715,
    "end": 2716,
    "range": [
      2715,
      2716
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2717,
    "end": 2718,
    "range": [
      2717,
      2718
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2718,
    "end": 2719,
    "range": [
      2718,
      2719
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2720,
    "end": 2721,
    "range": [
      2720,
      2721
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2721,
    "end": 2722,
    "range": [
      2721,
      2722
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2722,
    "end": 2723,
    "range": [
      2722,
      2723
    ]
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 2724,
    "end": 2732,
    "range": [
      2724,
      2732
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2732,
    "end": 2733,
    "range": [
      2732,
      2733
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2733,
    "end": 2734,
    "range": [
      2733,
      2734
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2734,
    "end": 2735,
    "range": [
      2734,
      2735
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2735,
    "end": 2736,
    "range": [
      2735,
      2736
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2737,
    "end": 2744,
    "range": [
      2737,
      2744
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2745,
    "end": 2753,
    "range": [
      2745,
      2753
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction12P",
    "start": 2754,
    "end": 2769,
    "range": [
      2754,
      2769
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2769,
    "end": 2770,
    "range": [
      2769,
      2770
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2770,
    "end": 2771,
    "range": [
      2770,
      2771
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2771,
    "end": 2772,
    "range": [
      2771,
      2772
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2772,
    "end": 2773,
    "range": [
      2772,
      2773
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2773,
    "end": 2774,
    "range": [
      2773,
      2774
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2774,
    "end": 2775,
    "range": [
      2774,
      2775
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2776,
    "end": 2777,
    "range": [
      2776,
      2777
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2777,
    "end": 2778,
    "range": [
      2777,
      2778
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2778,
    "end": 2779,
    "range": [
      2778,
      2779
    ]
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 2780,
    "end": 2788,
    "range": [
      2780,
      2788
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2788,
    "end": 2789,
    "range": [
      2788,
      2789
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2789,
    "end": 2790,
    "range": [
      2789,
      2790
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2790,
    "end": 2791,
    "range": [
      2790,
      2791
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2791,
    "end": 2792,
    "range": [
      2791,
      2792
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2793,
    "end": 2800,
    "range": [
      2793,
      2800
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2801,
    "end": 2809,
    "range": [
      2801,
      2809
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction12P",
    "start": 2810,
    "end": 2825,
    "range": [
      2810,
      2825
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2825,
    "end": 2826,
    "range": [
      2825,
      2826
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2826,
    "end": 2827,
    "range": [
      2826,
      2827
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2827,
    "end": 2828,
    "range": [
      2827,
      2828
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2828,
    "end": 2829,
    "range": [
      2828,
      2829
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2829,
    "end": 2830,
    "range": [
      2829,
      2830
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2830,
    "end": 2831,
    "range": [
      2830,
      2831
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2832,
    "end": 2833,
    "range": [
      2832,
      2833
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2833,
    "end": 2834,
    "range": [
      2833,
      2834
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2835,
    "end": 2836,
    "range": [
      2835,
      2836
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2836,
    "end": 2837,
    "range": [
      2836,
      2837
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2838,
    "end": 2839,
    "range": [
      2838,
      2839
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2839,
    "end": 2840,
    "range": [
      2839,
      2840
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2840,
    "end": 2841,
    "range": [
      2840,
      2841
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2842,
    "end": 2849,
    "range": [
      2842,
      2849
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2849,
    "end": 2850,
    "range": [
      2849,
      2850
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2850,
    "end": 2851,
    "range": [
      2850,
      2851
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2851,
    "end": 2852,
    "range": [
      2851,
      2852
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2852,
    "end": 2853,
    "range": [
      2852,
      2853
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2855,
    "end": 2858,
    "range": [
      2855,
      2858
    ]
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 2859,
    "end": 2861,
    "range": [
      2859,
      2861
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2861,
    "end": 2862,
    "range": [
      2861,
      2862
    ]
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 2863,
    "end": 2871,
    "range": [
      2863,
      2871
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2871,
    "end": 2872,
    "range": [
      2871,
      2872
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2872,
    "end": 2878,
    "range": [
      2872,
      2878
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2878,
    "end": 2879,
    "range": [
      2878,
      2879
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2879,
    "end": 2880,
    "range": [
      2879,
      2880
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2881,
    "end": 2884,
    "range": [
      2881,
      2884
    ]
  },
  {
    "type": "Identifier",
    "value": "r1a",
    "start": 2885,
    "end": 2888,
    "range": [
      2885,
      2888
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2889,
    "end": 2890,
    "range": [
      2889,
      2890
    ]
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 2891,
    "end": 2893,
    "range": [
      2891,
      2893
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2893,
    "end": 2894,
    "range": [
      2893,
      2894
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 2894,
    "end": 2898,
    "range": [
      2894,
      2898
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2898,
    "end": 2899,
    "range": [
      2898,
      2899
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 2899,
    "end": 2911,
    "range": [
      2899,
      2911
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2911,
    "end": 2912,
    "range": [
      2911,
      2912
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 2913,
    "end": 2925,
    "range": [
      2913,
      2925
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2925,
    "end": 2926,
    "range": [
      2925,
      2926
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 2927,
    "end": 2939,
    "range": [
      2927,
      2939
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2939,
    "end": 2940,
    "range": [
      2939,
      2940
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2940,
    "end": 2941,
    "range": [
      2940,
      2941
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2942,
    "end": 2945,
    "range": [
      2942,
      2945
    ]
  },
  {
    "type": "Identifier",
    "value": "r1b",
    "start": 2946,
    "end": 2949,
    "range": [
      2946,
      2949
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2950,
    "end": 2951,
    "range": [
      2950,
      2951
    ]
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 2952,
    "end": 2954,
    "range": [
      2952,
      2954
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2954,
    "end": 2955,
    "range": [
      2954,
      2955
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 2955,
    "end": 2959,
    "range": [
      2955,
      2959
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2959,
    "end": 2960,
    "range": [
      2959,
      2960
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 2960,
    "end": 2972,
    "range": [
      2960,
      2972
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2972,
    "end": 2973,
    "range": [
      2972,
      2973
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 2974,
    "end": 2986,
    "range": [
      2974,
      2986
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2986,
    "end": 2987,
    "range": [
      2986,
      2987
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 2988,
    "end": 3000,
    "range": [
      2988,
      3000
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3000,
    "end": 3001,
    "range": [
      3000,
      3001
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3001,
    "end": 3002,
    "range": [
      3001,
      3002
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3002,
    "end": 3006,
    "range": [
      3002,
      3006
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3006,
    "end": 3007,
    "range": [
      3006,
      3007
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3007,
    "end": 3019,
    "range": [
      3007,
      3019
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3019,
    "end": 3020,
    "range": [
      3019,
      3020
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3021,
    "end": 3033,
    "range": [
      3021,
      3033
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3033,
    "end": 3034,
    "range": [
      3033,
      3034
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3035,
    "end": 3047,
    "range": [
      3035,
      3047
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3047,
    "end": 3048,
    "range": [
      3047,
      3048
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3048,
    "end": 3049,
    "range": [
      3048,
      3049
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3050,
    "end": 3053,
    "range": [
      3050,
      3053
    ]
  },
  {
    "type": "Identifier",
    "value": "r1c",
    "start": 3054,
    "end": 3057,
    "range": [
      3054,
      3057
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3058,
    "end": 3059,
    "range": [
      3058,
      3059
    ]
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 3060,
    "end": 3062,
    "range": [
      3060,
      3062
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3062,
    "end": 3063,
    "range": [
      3062,
      3063
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3063,
    "end": 3067,
    "range": [
      3063,
      3067
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3067,
    "end": 3068,
    "range": [
      3067,
      3068
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 3068,
    "end": 3081,
    "range": [
      3068,
      3081
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3081,
    "end": 3082,
    "range": [
      3081,
      3082
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 3083,
    "end": 3096,
    "range": [
      3083,
      3096
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3096,
    "end": 3097,
    "range": [
      3096,
      3097
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 3098,
    "end": 3111,
    "range": [
      3098,
      3111
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3111,
    "end": 3112,
    "range": [
      3111,
      3112
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3112,
    "end": 3113,
    "range": [
      3112,
      3113
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3114,
    "end": 3117,
    "range": [
      3114,
      3117
    ]
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 3118,
    "end": 3120,
    "range": [
      3118,
      3120
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3120,
    "end": 3121,
    "range": [
      3120,
      3121
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3122,
    "end": 3129,
    "range": [
      3122,
      3129
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3129,
    "end": 3130,
    "range": [
      3129,
      3130
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3130,
    "end": 3136,
    "range": [
      3130,
      3136
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3136,
    "end": 3137,
    "range": [
      3136,
      3137
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3137,
    "end": 3138,
    "range": [
      3137,
      3138
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3139,
    "end": 3142,
    "range": [
      3139,
      3142
    ]
  },
  {
    "type": "Identifier",
    "value": "s1a",
    "start": 3143,
    "end": 3146,
    "range": [
      3143,
      3146
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3147,
    "end": 3148,
    "range": [
      3147,
      3148
    ]
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 3149,
    "end": 3151,
    "range": [
      3149,
      3151
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3151,
    "end": 3152,
    "range": [
      3151,
      3152
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3152,
    "end": 3156,
    "range": [
      3152,
      3156
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3156,
    "end": 3157,
    "range": [
      3156,
      3157
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3157,
    "end": 3169,
    "range": [
      3157,
      3169
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3169,
    "end": 3170,
    "range": [
      3169,
      3170
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3171,
    "end": 3183,
    "range": [
      3171,
      3183
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3183,
    "end": 3184,
    "range": [
      3183,
      3184
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3185,
    "end": 3197,
    "range": [
      3185,
      3197
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3197,
    "end": 3198,
    "range": [
      3197,
      3198
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3198,
    "end": 3199,
    "range": [
      3198,
      3199
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3200,
    "end": 3203,
    "range": [
      3200,
      3203
    ]
  },
  {
    "type": "Identifier",
    "value": "s1b",
    "start": 3204,
    "end": 3207,
    "range": [
      3204,
      3207
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3208,
    "end": 3209,
    "range": [
      3208,
      3209
    ]
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 3210,
    "end": 3212,
    "range": [
      3210,
      3212
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3212,
    "end": 3213,
    "range": [
      3212,
      3213
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3213,
    "end": 3217,
    "range": [
      3213,
      3217
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3217,
    "end": 3218,
    "range": [
      3217,
      3218
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 3218,
    "end": 3231,
    "range": [
      3218,
      3231
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3231,
    "end": 3232,
    "range": [
      3231,
      3232
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 3233,
    "end": 3246,
    "range": [
      3233,
      3246
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3246,
    "end": 3247,
    "range": [
      3246,
      3247
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 3248,
    "end": 3261,
    "range": [
      3248,
      3261
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3261,
    "end": 3262,
    "range": [
      3261,
      3262
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3262,
    "end": 3263,
    "range": [
      3262,
      3263
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3264,
    "end": 3267,
    "range": [
      3264,
      3267
    ]
  },
  {
    "type": "Identifier",
    "value": "s1c",
    "start": 3268,
    "end": 3271,
    "range": [
      3268,
      3271
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3272,
    "end": 3273,
    "range": [
      3272,
      3273
    ]
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 3274,
    "end": 3276,
    "range": [
      3274,
      3276
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3276,
    "end": 3277,
    "range": [
      3276,
      3277
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3277,
    "end": 3281,
    "range": [
      3277,
      3281
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3281,
    "end": 3282,
    "range": [
      3281,
      3282
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 3282,
    "end": 3295,
    "range": [
      3282,
      3295
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3295,
    "end": 3296,
    "range": [
      3295,
      3296
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3297,
    "end": 3309,
    "range": [
      3297,
      3309
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3309,
    "end": 3310,
    "range": [
      3309,
      3310
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3311,
    "end": 3323,
    "range": [
      3311,
      3323
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3323,
    "end": 3324,
    "range": [
      3323,
      3324
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3324,
    "end": 3325,
    "range": [
      3324,
      3325
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3326,
    "end": 3329,
    "range": [
      3326,
      3329
    ]
  },
  {
    "type": "Identifier",
    "value": "s1d",
    "start": 3330,
    "end": 3333,
    "range": [
      3330,
      3333
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3334,
    "end": 3335,
    "range": [
      3334,
      3335
    ]
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 3336,
    "end": 3338,
    "range": [
      3336,
      3338
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3338,
    "end": 3339,
    "range": [
      3338,
      3339
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3339,
    "end": 3343,
    "range": [
      3339,
      3343
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3343,
    "end": 3344,
    "range": [
      3343,
      3344
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 3344,
    "end": 3357,
    "range": [
      3344,
      3357
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3357,
    "end": 3358,
    "range": [
      3357,
      3358
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3359,
    "end": 3371,
    "range": [
      3359,
      3371
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3371,
    "end": 3372,
    "range": [
      3371,
      3372
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3373,
    "end": 3385,
    "range": [
      3373,
      3385
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3385,
    "end": 3386,
    "range": [
      3385,
      3386
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3386,
    "end": 3387,
    "range": [
      3386,
      3387
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3387,
    "end": 3391,
    "range": [
      3387,
      3391
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3391,
    "end": 3392,
    "range": [
      3391,
      3392
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3392,
    "end": 3404,
    "range": [
      3392,
      3404
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3404,
    "end": 3405,
    "range": [
      3404,
      3405
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3406,
    "end": 3418,
    "range": [
      3406,
      3418
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3418,
    "end": 3419,
    "range": [
      3418,
      3419
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3420,
    "end": 3432,
    "range": [
      3420,
      3432
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3432,
    "end": 3433,
    "range": [
      3432,
      3433
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3433,
    "end": 3434,
    "range": [
      3433,
      3434
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3436,
    "end": 3439,
    "range": [
      3436,
      3439
    ]
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 3440,
    "end": 3442,
    "range": [
      3440,
      3442
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3442,
    "end": 3443,
    "range": [
      3442,
      3443
    ]
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 3444,
    "end": 3452,
    "range": [
      3444,
      3452
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3452,
    "end": 3453,
    "range": [
      3452,
      3453
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3453,
    "end": 3454,
    "range": [
      3453,
      3454
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3455,
    "end": 3456,
    "range": [
      3455,
      3456
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3456,
    "end": 3457,
    "range": [
      3456,
      3457
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3458,
    "end": 3464,
    "range": [
      3458,
      3464
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3464,
    "end": 3465,
    "range": [
      3464,
      3465
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3466,
    "end": 3467,
    "range": [
      3466,
      3467
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3467,
    "end": 3468,
    "range": [
      3467,
      3468
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3468,
    "end": 3469,
    "range": [
      3468,
      3469
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3470,
    "end": 3473,
    "range": [
      3470,
      3473
    ]
  },
  {
    "type": "Identifier",
    "value": "r2a",
    "start": 3474,
    "end": 3477,
    "range": [
      3474,
      3477
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3478,
    "end": 3479,
    "range": [
      3478,
      3479
    ]
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 3480,
    "end": 3482,
    "range": [
      3480,
      3482
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3482,
    "end": 3483,
    "range": [
      3482,
      3483
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3483,
    "end": 3487,
    "range": [
      3483,
      3487
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3487,
    "end": 3488,
    "range": [
      3487,
      3488
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3488,
    "end": 3501,
    "range": [
      3488,
      3501
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3501,
    "end": 3502,
    "range": [
      3501,
      3502
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3503,
    "end": 3516,
    "range": [
      3503,
      3516
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3516,
    "end": 3517,
    "range": [
      3516,
      3517
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3518,
    "end": 3531,
    "range": [
      3518,
      3531
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3531,
    "end": 3532,
    "range": [
      3531,
      3532
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3532,
    "end": 3533,
    "range": [
      3532,
      3533
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3534,
    "end": 3537,
    "range": [
      3534,
      3537
    ]
  },
  {
    "type": "Identifier",
    "value": "r2b",
    "start": 3538,
    "end": 3541,
    "range": [
      3538,
      3541
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3542,
    "end": 3543,
    "range": [
      3542,
      3543
    ]
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 3544,
    "end": 3546,
    "range": [
      3544,
      3546
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3546,
    "end": 3547,
    "range": [
      3546,
      3547
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3547,
    "end": 3551,
    "range": [
      3547,
      3551
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3551,
    "end": 3552,
    "range": [
      3551,
      3552
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3552,
    "end": 3565,
    "range": [
      3552,
      3565
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3565,
    "end": 3566,
    "range": [
      3565,
      3566
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3567,
    "end": 3580,
    "range": [
      3567,
      3580
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3580,
    "end": 3581,
    "range": [
      3580,
      3581
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3582,
    "end": 3595,
    "range": [
      3582,
      3595
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3595,
    "end": 3596,
    "range": [
      3595,
      3596
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3596,
    "end": 3597,
    "range": [
      3596,
      3597
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3597,
    "end": 3601,
    "range": [
      3597,
      3601
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3601,
    "end": 3602,
    "range": [
      3601,
      3602
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3602,
    "end": 3615,
    "range": [
      3602,
      3615
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3615,
    "end": 3616,
    "range": [
      3615,
      3616
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3617,
    "end": 3630,
    "range": [
      3617,
      3630
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3630,
    "end": 3631,
    "range": [
      3630,
      3631
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3632,
    "end": 3645,
    "range": [
      3632,
      3645
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3645,
    "end": 3646,
    "range": [
      3645,
      3646
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3646,
    "end": 3647,
    "range": [
      3646,
      3647
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3648,
    "end": 3651,
    "range": [
      3648,
      3651
    ]
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 3652,
    "end": 3654,
    "range": [
      3652,
      3654
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3654,
    "end": 3655,
    "range": [
      3654,
      3655
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3656,
    "end": 3663,
    "range": [
      3656,
      3663
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3663,
    "end": 3664,
    "range": [
      3663,
      3664
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3664,
    "end": 3665,
    "range": [
      3664,
      3665
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3666,
    "end": 3667,
    "range": [
      3666,
      3667
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3667,
    "end": 3668,
    "range": [
      3667,
      3668
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3669,
    "end": 3675,
    "range": [
      3669,
      3675
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3675,
    "end": 3676,
    "range": [
      3675,
      3676
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3677,
    "end": 3678,
    "range": [
      3677,
      3678
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3678,
    "end": 3679,
    "range": [
      3678,
      3679
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3679,
    "end": 3680,
    "range": [
      3679,
      3680
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3681,
    "end": 3684,
    "range": [
      3681,
      3684
    ]
  },
  {
    "type": "Identifier",
    "value": "s2a",
    "start": 3685,
    "end": 3688,
    "range": [
      3685,
      3688
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3689,
    "end": 3690,
    "range": [
      3689,
      3690
    ]
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 3691,
    "end": 3693,
    "range": [
      3691,
      3693
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3693,
    "end": 3694,
    "range": [
      3693,
      3694
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3694,
    "end": 3698,
    "range": [
      3694,
      3698
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3698,
    "end": 3699,
    "range": [
      3698,
      3699
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3699,
    "end": 3712,
    "range": [
      3699,
      3712
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3712,
    "end": 3713,
    "range": [
      3712,
      3713
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3714,
    "end": 3727,
    "range": [
      3714,
      3727
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3727,
    "end": 3728,
    "range": [
      3727,
      3728
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3729,
    "end": 3742,
    "range": [
      3729,
      3742
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3742,
    "end": 3743,
    "range": [
      3742,
      3743
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3743,
    "end": 3744,
    "range": [
      3743,
      3744
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3745,
    "end": 3748,
    "range": [
      3745,
      3748
    ]
  },
  {
    "type": "Identifier",
    "value": "s2b",
    "start": 3749,
    "end": 3752,
    "range": [
      3749,
      3752
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3753,
    "end": 3754,
    "range": [
      3753,
      3754
    ]
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 3755,
    "end": 3757,
    "range": [
      3755,
      3757
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3757,
    "end": 3758,
    "range": [
      3757,
      3758
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3758,
    "end": 3762,
    "range": [
      3758,
      3762
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3762,
    "end": 3763,
    "range": [
      3762,
      3763
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction2P",
    "start": 3763,
    "end": 3777,
    "range": [
      3763,
      3777
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3777,
    "end": 3778,
    "range": [
      3777,
      3778
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction2P",
    "start": 3779,
    "end": 3793,
    "range": [
      3779,
      3793
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3793,
    "end": 3794,
    "range": [
      3793,
      3794
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction2P",
    "start": 3795,
    "end": 3809,
    "range": [
      3795,
      3809
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3809,
    "end": 3810,
    "range": [
      3809,
      3810
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3810,
    "end": 3811,
    "range": [
      3810,
      3811
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3812,
    "end": 3815,
    "range": [
      3812,
      3815
    ]
  },
  {
    "type": "Identifier",
    "value": "s2c",
    "start": 3816,
    "end": 3819,
    "range": [
      3816,
      3819
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3820,
    "end": 3821,
    "range": [
      3820,
      3821
    ]
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 3822,
    "end": 3824,
    "range": [
      3822,
      3824
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3824,
    "end": 3825,
    "range": [
      3824,
      3825
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3825,
    "end": 3829,
    "range": [
      3825,
      3829
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3829,
    "end": 3830,
    "range": [
      3829,
      3830
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction2P",
    "start": 3830,
    "end": 3844,
    "range": [
      3830,
      3844
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3844,
    "end": 3845,
    "range": [
      3844,
      3845
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3846,
    "end": 3859,
    "range": [
      3846,
      3859
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3859,
    "end": 3860,
    "range": [
      3859,
      3860
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3861,
    "end": 3874,
    "range": [
      3861,
      3874
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3874,
    "end": 3875,
    "range": [
      3874,
      3875
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3875,
    "end": 3876,
    "range": [
      3875,
      3876
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3877,
    "end": 3880,
    "range": [
      3877,
      3880
    ]
  },
  {
    "type": "Identifier",
    "value": "s2d",
    "start": 3881,
    "end": 3884,
    "range": [
      3881,
      3884
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3885,
    "end": 3886,
    "range": [
      3885,
      3886
    ]
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 3887,
    "end": 3889,
    "range": [
      3887,
      3889
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3889,
    "end": 3890,
    "range": [
      3889,
      3890
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3890,
    "end": 3894,
    "range": [
      3890,
      3894
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3894,
    "end": 3895,
    "range": [
      3894,
      3895
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction2P",
    "start": 3895,
    "end": 3909,
    "range": [
      3895,
      3909
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3909,
    "end": 3910,
    "range": [
      3909,
      3910
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3911,
    "end": 3924,
    "range": [
      3911,
      3924
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3924,
    "end": 3925,
    "range": [
      3924,
      3925
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3926,
    "end": 3939,
    "range": [
      3926,
      3939
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3939,
    "end": 3940,
    "range": [
      3939,
      3940
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3940,
    "end": 3941,
    "range": [
      3940,
      3941
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3941,
    "end": 3945,
    "range": [
      3941,
      3945
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3945,
    "end": 3946,
    "range": [
      3945,
      3946
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3946,
    "end": 3959,
    "range": [
      3946,
      3959
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3959,
    "end": 3960,
    "range": [
      3959,
      3960
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3961,
    "end": 3974,
    "range": [
      3961,
      3974
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3974,
    "end": 3975,
    "range": [
      3974,
      3975
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3976,
    "end": 3989,
    "range": [
      3976,
      3989
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3989,
    "end": 3990,
    "range": [
      3989,
      3990
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3990,
    "end": 3991,
    "range": [
      3990,
      3991
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3993,
    "end": 3996,
    "range": [
      3993,
      3996
    ]
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 3997,
    "end": 3999,
    "range": [
      3997,
      3999
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3999,
    "end": 4000,
    "range": [
      3999,
      4000
    ]
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 4001,
    "end": 4009,
    "range": [
      4001,
      4009
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4009,
    "end": 4010,
    "range": [
      4009,
      4010
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4010,
    "end": 4016,
    "range": [
      4010,
      4016
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4016,
    "end": 4017,
    "range": [
      4016,
      4017
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4017,
    "end": 4018,
    "range": [
      4017,
      4018
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4019,
    "end": 4022,
    "range": [
      4019,
      4022
    ]
  },
  {
    "type": "Identifier",
    "value": "r3a",
    "start": 4023,
    "end": 4026,
    "range": [
      4023,
      4026
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4027,
    "end": 4028,
    "range": [
      4027,
      4028
    ]
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 4029,
    "end": 4031,
    "range": [
      4029,
      4031
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4031,
    "end": 4032,
    "range": [
      4031,
      4032
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4032,
    "end": 4036,
    "range": [
      4032,
      4036
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4036,
    "end": 4037,
    "range": [
      4036,
      4037
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4037,
    "end": 4050,
    "range": [
      4037,
      4050
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4050,
    "end": 4051,
    "range": [
      4050,
      4051
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4052,
    "end": 4065,
    "range": [
      4052,
      4065
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4065,
    "end": 4066,
    "range": [
      4065,
      4066
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4067,
    "end": 4080,
    "range": [
      4067,
      4080
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4080,
    "end": 4081,
    "range": [
      4080,
      4081
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4081,
    "end": 4082,
    "range": [
      4081,
      4082
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4083,
    "end": 4086,
    "range": [
      4083,
      4086
    ]
  },
  {
    "type": "Identifier",
    "value": "r3b",
    "start": 4087,
    "end": 4090,
    "range": [
      4087,
      4090
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4091,
    "end": 4092,
    "range": [
      4091,
      4092
    ]
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 4093,
    "end": 4095,
    "range": [
      4093,
      4095
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4095,
    "end": 4096,
    "range": [
      4095,
      4096
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4096,
    "end": 4100,
    "range": [
      4096,
      4100
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4100,
    "end": 4101,
    "range": [
      4100,
      4101
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4101,
    "end": 4114,
    "range": [
      4101,
      4114
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4114,
    "end": 4115,
    "range": [
      4114,
      4115
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4116,
    "end": 4129,
    "range": [
      4116,
      4129
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4129,
    "end": 4130,
    "range": [
      4129,
      4130
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4131,
    "end": 4144,
    "range": [
      4131,
      4144
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4144,
    "end": 4145,
    "range": [
      4144,
      4145
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4145,
    "end": 4146,
    "range": [
      4145,
      4146
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4146,
    "end": 4150,
    "range": [
      4146,
      4150
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4150,
    "end": 4151,
    "range": [
      4150,
      4151
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4151,
    "end": 4164,
    "range": [
      4151,
      4164
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4164,
    "end": 4165,
    "range": [
      4164,
      4165
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4166,
    "end": 4179,
    "range": [
      4166,
      4179
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4179,
    "end": 4180,
    "range": [
      4179,
      4180
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4181,
    "end": 4194,
    "range": [
      4181,
      4194
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4194,
    "end": 4195,
    "range": [
      4194,
      4195
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4195,
    "end": 4196,
    "range": [
      4195,
      4196
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4197,
    "end": 4200,
    "range": [
      4197,
      4200
    ]
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 4201,
    "end": 4203,
    "range": [
      4201,
      4203
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4203,
    "end": 4204,
    "range": [
      4203,
      4204
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 4205,
    "end": 4212,
    "range": [
      4205,
      4212
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4212,
    "end": 4213,
    "range": [
      4212,
      4213
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4213,
    "end": 4219,
    "range": [
      4213,
      4219
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4219,
    "end": 4220,
    "range": [
      4219,
      4220
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4220,
    "end": 4221,
    "range": [
      4220,
      4221
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4222,
    "end": 4225,
    "range": [
      4222,
      4225
    ]
  },
  {
    "type": "Identifier",
    "value": "s3a",
    "start": 4226,
    "end": 4229,
    "range": [
      4226,
      4229
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4230,
    "end": 4231,
    "range": [
      4230,
      4231
    ]
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 4232,
    "end": 4234,
    "range": [
      4232,
      4234
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4234,
    "end": 4235,
    "range": [
      4234,
      4235
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4235,
    "end": 4239,
    "range": [
      4235,
      4239
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4239,
    "end": 4240,
    "range": [
      4239,
      4240
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4240,
    "end": 4253,
    "range": [
      4240,
      4253
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4253,
    "end": 4254,
    "range": [
      4253,
      4254
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4255,
    "end": 4268,
    "range": [
      4255,
      4268
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4268,
    "end": 4269,
    "range": [
      4268,
      4269
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4270,
    "end": 4283,
    "range": [
      4270,
      4283
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4283,
    "end": 4284,
    "range": [
      4283,
      4284
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4284,
    "end": 4285,
    "range": [
      4284,
      4285
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4286,
    "end": 4289,
    "range": [
      4286,
      4289
    ]
  },
  {
    "type": "Identifier",
    "value": "s3b",
    "start": 4290,
    "end": 4293,
    "range": [
      4290,
      4293
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4294,
    "end": 4295,
    "range": [
      4294,
      4295
    ]
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 4296,
    "end": 4298,
    "range": [
      4296,
      4298
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4298,
    "end": 4299,
    "range": [
      4298,
      4299
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4299,
    "end": 4303,
    "range": [
      4299,
      4303
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4303,
    "end": 4304,
    "range": [
      4303,
      4304
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction3P",
    "start": 4304,
    "end": 4318,
    "range": [
      4304,
      4318
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4318,
    "end": 4319,
    "range": [
      4318,
      4319
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction3P",
    "start": 4320,
    "end": 4334,
    "range": [
      4320,
      4334
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4334,
    "end": 4335,
    "range": [
      4334,
      4335
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction3P",
    "start": 4336,
    "end": 4350,
    "range": [
      4336,
      4350
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4350,
    "end": 4351,
    "range": [
      4350,
      4351
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4351,
    "end": 4352,
    "range": [
      4351,
      4352
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4353,
    "end": 4356,
    "range": [
      4353,
      4356
    ]
  },
  {
    "type": "Identifier",
    "value": "s3c",
    "start": 4357,
    "end": 4360,
    "range": [
      4357,
      4360
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4361,
    "end": 4362,
    "range": [
      4361,
      4362
    ]
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 4363,
    "end": 4365,
    "range": [
      4363,
      4365
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4365,
    "end": 4366,
    "range": [
      4365,
      4366
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4366,
    "end": 4370,
    "range": [
      4366,
      4370
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4370,
    "end": 4371,
    "range": [
      4370,
      4371
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction3P",
    "start": 4371,
    "end": 4385,
    "range": [
      4371,
      4385
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4385,
    "end": 4386,
    "range": [
      4385,
      4386
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4387,
    "end": 4400,
    "range": [
      4387,
      4400
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4400,
    "end": 4401,
    "range": [
      4400,
      4401
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4402,
    "end": 4415,
    "range": [
      4402,
      4415
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4415,
    "end": 4416,
    "range": [
      4415,
      4416
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4416,
    "end": 4417,
    "range": [
      4416,
      4417
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4418,
    "end": 4421,
    "range": [
      4418,
      4421
    ]
  },
  {
    "type": "Identifier",
    "value": "s3d",
    "start": 4422,
    "end": 4425,
    "range": [
      4422,
      4425
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4426,
    "end": 4427,
    "range": [
      4426,
      4427
    ]
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 4428,
    "end": 4430,
    "range": [
      4428,
      4430
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4430,
    "end": 4431,
    "range": [
      4430,
      4431
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4431,
    "end": 4435,
    "range": [
      4431,
      4435
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4435,
    "end": 4436,
    "range": [
      4435,
      4436
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction3P",
    "start": 4436,
    "end": 4450,
    "range": [
      4436,
      4450
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4450,
    "end": 4451,
    "range": [
      4450,
      4451
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4452,
    "end": 4465,
    "range": [
      4452,
      4465
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4465,
    "end": 4466,
    "range": [
      4465,
      4466
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4467,
    "end": 4480,
    "range": [
      4467,
      4480
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4480,
    "end": 4481,
    "range": [
      4480,
      4481
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4481,
    "end": 4482,
    "range": [
      4481,
      4482
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4482,
    "end": 4486,
    "range": [
      4482,
      4486
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4486,
    "end": 4487,
    "range": [
      4486,
      4487
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4487,
    "end": 4500,
    "range": [
      4487,
      4500
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4500,
    "end": 4501,
    "range": [
      4500,
      4501
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4502,
    "end": 4515,
    "range": [
      4502,
      4515
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4515,
    "end": 4516,
    "range": [
      4515,
      4516
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4517,
    "end": 4530,
    "range": [
      4517,
      4530
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4530,
    "end": 4531,
    "range": [
      4530,
      4531
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4531,
    "end": 4532,
    "range": [
      4531,
      4532
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4550,
    "end": 4553,
    "range": [
      4550,
      4553
    ]
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 4554,
    "end": 4556,
    "range": [
      4554,
      4556
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4556,
    "end": 4557,
    "range": [
      4556,
      4557
    ]
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 4558,
    "end": 4566,
    "range": [
      4558,
      4566
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4566,
    "end": 4567,
    "range": [
      4566,
      4567
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4567,
    "end": 4573,
    "range": [
      4567,
      4573
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4573,
    "end": 4574,
    "range": [
      4573,
      4574
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4574,
    "end": 4575,
    "range": [
      4574,
      4575
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4576,
    "end": 4579,
    "range": [
      4576,
      4579
    ]
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 4580,
    "end": 4589,
    "range": [
      4580,
      4589
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4589,
    "end": 4590,
    "range": [
      4589,
      4590
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4591,
    "end": 4592,
    "range": [
      4591,
      4592
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4592,
    "end": 4593,
    "range": [
      4592,
      4593
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4593,
    "end": 4594,
    "range": [
      4593,
      4594
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4595,
    "end": 4598,
    "range": [
      4595,
      4598
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4598,
    "end": 4599,
    "range": [
      4598,
      4599
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4600,
    "end": 4602,
    "range": [
      4600,
      4602
    ]
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 4603,
    "end": 4611,
    "range": [
      4603,
      4611
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4611,
    "end": 4612,
    "range": [
      4611,
      4612
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4612,
    "end": 4618,
    "range": [
      4612,
      4618
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4618,
    "end": 4619,
    "range": [
      4618,
      4619
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4619,
    "end": 4620,
    "range": [
      4619,
      4620
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4621,
    "end": 4624,
    "range": [
      4621,
      4624
    ]
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 4625,
    "end": 4633,
    "range": [
      4625,
      4633
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4633,
    "end": 4634,
    "range": [
      4633,
      4634
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4635,
    "end": 4636,
    "range": [
      4635,
      4636
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4636,
    "end": 4637,
    "range": [
      4636,
      4637
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4637,
    "end": 4638,
    "range": [
      4637,
      4638
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4639,
    "end": 4642,
    "range": [
      4639,
      4642
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4642,
    "end": 4643,
    "range": [
      4642,
      4643
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4644,
    "end": 4646,
    "range": [
      4644,
      4646
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 4647,
    "end": 4654,
    "range": [
      4647,
      4654
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4654,
    "end": 4655,
    "range": [
      4654,
      4655
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4655,
    "end": 4661,
    "range": [
      4655,
      4661
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4661,
    "end": 4662,
    "range": [
      4661,
      4662
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4662,
    "end": 4663,
    "range": [
      4662,
      4663
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4664,
    "end": 4667,
    "range": [
      4664,
      4667
    ]
  },
  {
    "type": "Identifier",
    "value": "r4a",
    "start": 4668,
    "end": 4671,
    "range": [
      4668,
      4671
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4672,
    "end": 4673,
    "range": [
      4672,
      4673
    ]
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 4674,
    "end": 4676,
    "range": [
      4674,
      4676
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4676,
    "end": 4677,
    "range": [
      4676,
      4677
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4677,
    "end": 4681,
    "range": [
      4677,
      4681
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4681,
    "end": 4682,
    "range": [
      4681,
      4682
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 4682,
    "end": 4695,
    "range": [
      4682,
      4695
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4695,
    "end": 4696,
    "range": [
      4695,
      4696
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 4697,
    "end": 4710,
    "range": [
      4697,
      4710
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4710,
    "end": 4711,
    "range": [
      4710,
      4711
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 4712,
    "end": 4725,
    "range": [
      4712,
      4725
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4725,
    "end": 4726,
    "range": [
      4725,
      4726
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4726,
    "end": 4727,
    "range": [
      4726,
      4727
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4737,
    "end": 4740,
    "range": [
      4737,
      4740
    ]
  },
  {
    "type": "Identifier",
    "value": "r4b",
    "start": 4741,
    "end": 4744,
    "range": [
      4741,
      4744
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4745,
    "end": 4746,
    "range": [
      4745,
      4746
    ]
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 4747,
    "end": 4749,
    "range": [
      4747,
      4749
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4749,
    "end": 4750,
    "range": [
      4749,
      4750
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4750,
    "end": 4754,
    "range": [
      4750,
      4754
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4754,
    "end": 4755,
    "range": [
      4754,
      4755
    ]
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 4755,
    "end": 4764,
    "range": [
      4755,
      4764
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4764,
    "end": 4765,
    "range": [
      4764,
      4765
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 4766,
    "end": 4779,
    "range": [
      4766,
      4779
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4779,
    "end": 4780,
    "range": [
      4779,
      4780
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 4781,
    "end": 4794,
    "range": [
      4781,
      4794
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4794,
    "end": 4795,
    "range": [
      4794,
      4795
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4795,
    "end": 4796,
    "range": [
      4795,
      4796
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4796,
    "end": 4800,
    "range": [
      4796,
      4800
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4800,
    "end": 4801,
    "range": [
      4800,
      4801
    ]
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 4801,
    "end": 4810,
    "range": [
      4801,
      4810
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4810,
    "end": 4811,
    "range": [
      4810,
      4811
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 4812,
    "end": 4825,
    "range": [
      4812,
      4825
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4825,
    "end": 4826,
    "range": [
      4825,
      4826
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 4827,
    "end": 4840,
    "range": [
      4827,
      4840
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4840,
    "end": 4841,
    "range": [
      4840,
      4841
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4841,
    "end": 4842,
    "range": [
      4841,
      4842
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4849,
    "end": 4852,
    "range": [
      4849,
      4852
    ]
  },
  {
    "type": "Identifier",
    "value": "s4",
    "start": 4853,
    "end": 4855,
    "range": [
      4853,
      4855
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4855,
    "end": 4856,
    "range": [
      4855,
      4856
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 4857,
    "end": 4864,
    "range": [
      4857,
      4864
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4864,
    "end": 4865,
    "range": [
      4864,
      4865
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4865,
    "end": 4871,
    "range": [
      4865,
      4871
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4871,
    "end": 4872,
    "range": [
      4871,
      4872
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4872,
    "end": 4873,
    "range": [
      4872,
      4873
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4874,
    "end": 4877,
    "range": [
      4874,
      4877
    ]
  },
  {
    "type": "Identifier",
    "value": "s4a",
    "start": 4878,
    "end": 4881,
    "range": [
      4878,
      4881
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4882,
    "end": 4883,
    "range": [
      4882,
      4883
    ]
  },
  {
    "type": "Identifier",
    "value": "s4",
    "start": 4884,
    "end": 4886,
    "range": [
      4884,
      4886
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4886,
    "end": 4887,
    "range": [
      4886,
      4887
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4887,
    "end": 4891,
    "range": [
      4887,
      4891
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4891,
    "end": 4892,
    "range": [
      4891,
      4892
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 4892,
    "end": 4905,
    "range": [
      4892,
      4905
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4905,
    "end": 4906,
    "range": [
      4905,
      4906
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 4907,
    "end": 4920,
    "range": [
      4907,
      4920
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4920,
    "end": 4921,
    "range": [
      4920,
      4921
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 4922,
    "end": 4935,
    "range": [
      4922,
      4935
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4935,
    "end": 4936,
    "range": [
      4935,
      4936
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4936,
    "end": 4937,
    "range": [
      4936,
      4937
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4947,
    "end": 4950,
    "range": [
      4947,
      4950
    ]
  },
  {
    "type": "Identifier",
    "value": "s4b",
    "start": 4951,
    "end": 4954,
    "range": [
      4951,
      4954
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4955,
    "end": 4956,
    "range": [
      4955,
      4956
    ]
  },
  {
    "type": "Identifier",
    "value": "s4",
    "start": 4957,
    "end": 4959,
    "range": [
      4957,
      4959
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4959,
    "end": 4960,
    "range": [
      4959,
      4960
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4960,
    "end": 4964,
    "range": [
      4960,
      4964
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4964,
    "end": 4965,
    "range": [
      4964,
      4965
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction4P",
    "start": 4965,
    "end": 4979,
    "range": [
      4965,
      4979
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4979,
    "end": 4980,
    "range": [
      4979,
      4980
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction4P",
    "start": 4981,
    "end": 4995,
    "range": [
      4981,
      4995
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4995,
    "end": 4996,
    "range": [
      4995,
      4996
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction4P",
    "start": 4997,
    "end": 5011,
    "range": [
      4997,
      5011
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5011,
    "end": 5012,
    "range": [
      5011,
      5012
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5012,
    "end": 5013,
    "range": [
      5012,
      5013
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5024,
    "end": 5027,
    "range": [
      5024,
      5027
    ]
  },
  {
    "type": "Identifier",
    "value": "s4c",
    "start": 5028,
    "end": 5031,
    "range": [
      5028,
      5031
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5032,
    "end": 5033,
    "range": [
      5032,
      5033
    ]
  },
  {
    "type": "Identifier",
    "value": "s4",
    "start": 5034,
    "end": 5036,
    "range": [
      5034,
      5036
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5036,
    "end": 5037,
    "range": [
      5036,
      5037
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5037,
    "end": 5041,
    "range": [
      5037,
      5041
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5041,
    "end": 5042,
    "range": [
      5041,
      5042
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction4P",
    "start": 5042,
    "end": 5056,
    "range": [
      5042,
      5056
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5056,
    "end": 5057,
    "range": [
      5056,
      5057
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 5058,
    "end": 5071,
    "range": [
      5058,
      5071
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5071,
    "end": 5072,
    "range": [
      5071,
      5072
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 5073,
    "end": 5086,
    "range": [
      5073,
      5086
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5086,
    "end": 5087,
    "range": [
      5086,
      5087
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5087,
    "end": 5088,
    "range": [
      5087,
      5088
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5098,
    "end": 5101,
    "range": [
      5098,
      5101
    ]
  },
  {
    "type": "Identifier",
    "value": "s4d",
    "start": 5102,
    "end": 5105,
    "range": [
      5102,
      5105
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5106,
    "end": 5107,
    "range": [
      5106,
      5107
    ]
  },
  {
    "type": "Identifier",
    "value": "s4",
    "start": 5108,
    "end": 5110,
    "range": [
      5108,
      5110
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5110,
    "end": 5111,
    "range": [
      5110,
      5111
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5111,
    "end": 5115,
    "range": [
      5111,
      5115
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5115,
    "end": 5116,
    "range": [
      5115,
      5116
    ]
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5116,
    "end": 5125,
    "range": [
      5116,
      5125
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5125,
    "end": 5126,
    "range": [
      5125,
      5126
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction4P",
    "start": 5127,
    "end": 5141,
    "range": [
      5127,
      5141
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5141,
    "end": 5142,
    "range": [
      5141,
      5142
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 5143,
    "end": 5156,
    "range": [
      5143,
      5156
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5156,
    "end": 5157,
    "range": [
      5156,
      5157
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5157,
    "end": 5158,
    "range": [
      5157,
      5158
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5158,
    "end": 5162,
    "range": [
      5158,
      5162
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5162,
    "end": 5163,
    "range": [
      5162,
      5163
    ]
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5163,
    "end": 5172,
    "range": [
      5163,
      5172
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5172,
    "end": 5173,
    "range": [
      5172,
      5173
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction4P",
    "start": 5174,
    "end": 5188,
    "range": [
      5174,
      5188
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5188,
    "end": 5189,
    "range": [
      5188,
      5189
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 5190,
    "end": 5203,
    "range": [
      5190,
      5203
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5203,
    "end": 5204,
    "range": [
      5203,
      5204
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5204,
    "end": 5205,
    "range": [
      5204,
      5205
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5207,
    "end": 5210,
    "range": [
      5207,
      5210
    ]
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 5211,
    "end": 5213,
    "range": [
      5211,
      5213
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5213,
    "end": 5214,
    "range": [
      5213,
      5214
    ]
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 5215,
    "end": 5223,
    "range": [
      5215,
      5223
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5223,
    "end": 5224,
    "range": [
      5223,
      5224
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5224,
    "end": 5230,
    "range": [
      5224,
      5230
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5230,
    "end": 5231,
    "range": [
      5230,
      5231
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5231,
    "end": 5232,
    "range": [
      5231,
      5232
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5233,
    "end": 5236,
    "range": [
      5233,
      5236
    ]
  },
  {
    "type": "Identifier",
    "value": "r5a",
    "start": 5237,
    "end": 5240,
    "range": [
      5237,
      5240
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5241,
    "end": 5242,
    "range": [
      5241,
      5242
    ]
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 5243,
    "end": 5245,
    "range": [
      5243,
      5245
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5245,
    "end": 5246,
    "range": [
      5245,
      5246
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5246,
    "end": 5250,
    "range": [
      5246,
      5250
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5250,
    "end": 5251,
    "range": [
      5250,
      5251
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 5251,
    "end": 5264,
    "range": [
      5251,
      5264
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5264,
    "end": 5265,
    "range": [
      5264,
      5265
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 5266,
    "end": 5279,
    "range": [
      5266,
      5279
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5279,
    "end": 5280,
    "range": [
      5279,
      5280
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 5281,
    "end": 5294,
    "range": [
      5281,
      5294
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5294,
    "end": 5295,
    "range": [
      5294,
      5295
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5295,
    "end": 5296,
    "range": [
      5295,
      5296
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5306,
    "end": 5309,
    "range": [
      5306,
      5309
    ]
  },
  {
    "type": "Identifier",
    "value": "r5b",
    "start": 5310,
    "end": 5313,
    "range": [
      5310,
      5313
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5314,
    "end": 5315,
    "range": [
      5314,
      5315
    ]
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 5316,
    "end": 5318,
    "range": [
      5316,
      5318
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5318,
    "end": 5319,
    "range": [
      5318,
      5319
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5319,
    "end": 5323,
    "range": [
      5319,
      5323
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5323,
    "end": 5324,
    "range": [
      5323,
      5324
    ]
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5324,
    "end": 5333,
    "range": [
      5324,
      5333
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5333,
    "end": 5334,
    "range": [
      5333,
      5334
    ]
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5335,
    "end": 5344,
    "range": [
      5335,
      5344
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5344,
    "end": 5345,
    "range": [
      5344,
      5345
    ]
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5346,
    "end": 5355,
    "range": [
      5346,
      5355
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5355,
    "end": 5356,
    "range": [
      5355,
      5356
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5356,
    "end": 5357,
    "range": [
      5356,
      5357
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5357,
    "end": 5361,
    "range": [
      5357,
      5361
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5361,
    "end": 5362,
    "range": [
      5361,
      5362
    ]
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5362,
    "end": 5371,
    "range": [
      5362,
      5371
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5371,
    "end": 5372,
    "range": [
      5371,
      5372
    ]
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5373,
    "end": 5382,
    "range": [
      5373,
      5382
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5382,
    "end": 5383,
    "range": [
      5382,
      5383
    ]
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5384,
    "end": 5393,
    "range": [
      5384,
      5393
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5393,
    "end": 5394,
    "range": [
      5393,
      5394
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5394,
    "end": 5395,
    "range": [
      5394,
      5395
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5402,
    "end": 5405,
    "range": [
      5402,
      5405
    ]
  },
  {
    "type": "Identifier",
    "value": "s5",
    "start": 5406,
    "end": 5408,
    "range": [
      5406,
      5408
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5408,
    "end": 5409,
    "range": [
      5408,
      5409
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 5410,
    "end": 5417,
    "range": [
      5410,
      5417
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5417,
    "end": 5418,
    "range": [
      5417,
      5418
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5418,
    "end": 5424,
    "range": [
      5418,
      5424
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5424,
    "end": 5425,
    "range": [
      5424,
      5425
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5425,
    "end": 5426,
    "range": [
      5425,
      5426
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5427,
    "end": 5430,
    "range": [
      5427,
      5430
    ]
  },
  {
    "type": "Identifier",
    "value": "s5a",
    "start": 5431,
    "end": 5434,
    "range": [
      5431,
      5434
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5435,
    "end": 5436,
    "range": [
      5435,
      5436
    ]
  },
  {
    "type": "Identifier",
    "value": "s5",
    "start": 5437,
    "end": 5439,
    "range": [
      5437,
      5439
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5439,
    "end": 5440,
    "range": [
      5439,
      5440
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5440,
    "end": 5444,
    "range": [
      5440,
      5444
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5444,
    "end": 5445,
    "range": [
      5444,
      5445
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 5445,
    "end": 5458,
    "range": [
      5445,
      5458
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5458,
    "end": 5459,
    "range": [
      5458,
      5459
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 5460,
    "end": 5473,
    "range": [
      5460,
      5473
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5473,
    "end": 5474,
    "range": [
      5473,
      5474
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 5475,
    "end": 5488,
    "range": [
      5475,
      5488
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5488,
    "end": 5489,
    "range": [
      5488,
      5489
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5489,
    "end": 5490,
    "range": [
      5489,
      5490
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5500,
    "end": 5503,
    "range": [
      5500,
      5503
    ]
  },
  {
    "type": "Identifier",
    "value": "s5b",
    "start": 5504,
    "end": 5507,
    "range": [
      5504,
      5507
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5508,
    "end": 5509,
    "range": [
      5508,
      5509
    ]
  },
  {
    "type": "Identifier",
    "value": "s5",
    "start": 5510,
    "end": 5512,
    "range": [
      5510,
      5512
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5512,
    "end": 5513,
    "range": [
      5512,
      5513
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5513,
    "end": 5517,
    "range": [
      5513,
      5517
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5517,
    "end": 5518,
    "range": [
      5517,
      5518
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction5P",
    "start": 5518,
    "end": 5532,
    "range": [
      5518,
      5532
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5532,
    "end": 5533,
    "range": [
      5532,
      5533
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction5P",
    "start": 5534,
    "end": 5548,
    "range": [
      5534,
      5548
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5548,
    "end": 5549,
    "range": [
      5548,
      5549
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction5P",
    "start": 5550,
    "end": 5564,
    "range": [
      5550,
      5564
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5564,
    "end": 5565,
    "range": [
      5564,
      5565
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5565,
    "end": 5566,
    "range": [
      5565,
      5566
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5576,
    "end": 5579,
    "range": [
      5576,
      5579
    ]
  },
  {
    "type": "Identifier",
    "value": "s5c",
    "start": 5580,
    "end": 5583,
    "range": [
      5580,
      5583
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5584,
    "end": 5585,
    "range": [
      5584,
      5585
    ]
  },
  {
    "type": "Identifier",
    "value": "s5",
    "start": 5586,
    "end": 5588,
    "range": [
      5586,
      5588
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5588,
    "end": 5589,
    "range": [
      5588,
      5589
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5589,
    "end": 5593,
    "range": [
      5589,
      5593
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5593,
    "end": 5594,
    "range": [
      5593,
      5594
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction5P",
    "start": 5594,
    "end": 5608,
    "range": [
      5594,
      5608
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5608,
    "end": 5609,
    "range": [
      5608,
      5609
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 5610,
    "end": 5623,
    "range": [
      5610,
      5623
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5623,
    "end": 5624,
    "range": [
      5623,
      5624
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 5625,
    "end": 5638,
    "range": [
      5625,
      5638
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5638,
    "end": 5639,
    "range": [
      5638,
      5639
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5639,
    "end": 5640,
    "range": [
      5639,
      5640
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5650,
    "end": 5653,
    "range": [
      5650,
      5653
    ]
  },
  {
    "type": "Identifier",
    "value": "s5d",
    "start": 5654,
    "end": 5657,
    "range": [
      5654,
      5657
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5658,
    "end": 5659,
    "range": [
      5658,
      5659
    ]
  },
  {
    "type": "Identifier",
    "value": "s5",
    "start": 5660,
    "end": 5662,
    "range": [
      5660,
      5662
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5662,
    "end": 5663,
    "range": [
      5662,
      5663
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5663,
    "end": 5667,
    "range": [
      5663,
      5667
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5667,
    "end": 5668,
    "range": [
      5667,
      5668
    ]
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 5668,
    "end": 5676,
    "range": [
      5668,
      5676
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5676,
    "end": 5677,
    "range": [
      5676,
      5677
    ]
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 5678,
    "end": 5686,
    "range": [
      5678,
      5686
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5686,
    "end": 5687,
    "range": [
      5686,
      5687
    ]
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 5688,
    "end": 5696,
    "range": [
      5688,
      5696
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5696,
    "end": 5697,
    "range": [
      5696,
      5697
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5697,
    "end": 5698,
    "range": [
      5697,
      5698
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5698,
    "end": 5702,
    "range": [
      5698,
      5702
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5702,
    "end": 5703,
    "range": [
      5702,
      5703
    ]
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5703,
    "end": 5712,
    "range": [
      5703,
      5712
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5712,
    "end": 5713,
    "range": [
      5712,
      5713
    ]
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5714,
    "end": 5723,
    "range": [
      5714,
      5723
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5723,
    "end": 5724,
    "range": [
      5723,
      5724
    ]
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5725,
    "end": 5734,
    "range": [
      5725,
      5734
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5734,
    "end": 5735,
    "range": [
      5734,
      5735
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5735,
    "end": 5736,
    "range": [
      5735,
      5736
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5744,
    "end": 5747,
    "range": [
      5744,
      5747
    ]
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 5748,
    "end": 5750,
    "range": [
      5748,
      5750
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5750,
    "end": 5751,
    "range": [
      5750,
      5751
    ]
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 5752,
    "end": 5760,
    "range": [
      5752,
      5760
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5760,
    "end": 5761,
    "range": [
      5760,
      5761
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5761,
    "end": 5767,
    "range": [
      5761,
      5767
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5767,
    "end": 5768,
    "range": [
      5767,
      5768
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5768,
    "end": 5769,
    "range": [
      5768,
      5769
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5770,
    "end": 5773,
    "range": [
      5770,
      5773
    ]
  },
  {
    "type": "Identifier",
    "value": "r6a",
    "start": 5774,
    "end": 5777,
    "range": [
      5774,
      5777
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5778,
    "end": 5779,
    "range": [
      5778,
      5779
    ]
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 5780,
    "end": 5782,
    "range": [
      5780,
      5782
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5782,
    "end": 5783,
    "range": [
      5782,
      5783
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5783,
    "end": 5787,
    "range": [
      5783,
      5787
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5787,
    "end": 5788,
    "range": [
      5787,
      5788
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 5788,
    "end": 5801,
    "range": [
      5788,
      5801
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5801,
    "end": 5802,
    "range": [
      5801,
      5802
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 5803,
    "end": 5816,
    "range": [
      5803,
      5816
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5816,
    "end": 5817,
    "range": [
      5816,
      5817
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 5818,
    "end": 5831,
    "range": [
      5818,
      5831
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5831,
    "end": 5832,
    "range": [
      5831,
      5832
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5832,
    "end": 5833,
    "range": [
      5832,
      5833
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5843,
    "end": 5846,
    "range": [
      5843,
      5846
    ]
  },
  {
    "type": "Identifier",
    "value": "r6b",
    "start": 5847,
    "end": 5850,
    "range": [
      5847,
      5850
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5851,
    "end": 5852,
    "range": [
      5851,
      5852
    ]
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 5853,
    "end": 5855,
    "range": [
      5853,
      5855
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5855,
    "end": 5856,
    "range": [
      5855,
      5856
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5856,
    "end": 5860,
    "range": [
      5856,
      5860
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5860,
    "end": 5861,
    "range": [
      5860,
      5861
    ]
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5861,
    "end": 5870,
    "range": [
      5861,
      5870
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5870,
    "end": 5871,
    "range": [
      5870,
      5871
    ]
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5872,
    "end": 5881,
    "range": [
      5872,
      5881
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5881,
    "end": 5882,
    "range": [
      5881,
      5882
    ]
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5883,
    "end": 5892,
    "range": [
      5883,
      5892
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5892,
    "end": 5893,
    "range": [
      5892,
      5893
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5893,
    "end": 5894,
    "range": [
      5893,
      5894
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5894,
    "end": 5898,
    "range": [
      5894,
      5898
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5898,
    "end": 5899,
    "range": [
      5898,
      5899
    ]
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5899,
    "end": 5908,
    "range": [
      5899,
      5908
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5908,
    "end": 5909,
    "range": [
      5908,
      5909
    ]
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5910,
    "end": 5919,
    "range": [
      5910,
      5919
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5919,
    "end": 5920,
    "range": [
      5919,
      5920
    ]
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5921,
    "end": 5930,
    "range": [
      5921,
      5930
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5930,
    "end": 5931,
    "range": [
      5930,
      5931
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5931,
    "end": 5932,
    "range": [
      5931,
      5932
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5939,
    "end": 5942,
    "range": [
      5939,
      5942
    ]
  },
  {
    "type": "Identifier",
    "value": "s6",
    "start": 5943,
    "end": 5945,
    "range": [
      5943,
      5945
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5945,
    "end": 5946,
    "range": [
      5945,
      5946
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 5947,
    "end": 5954,
    "range": [
      5947,
      5954
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5954,
    "end": 5955,
    "range": [
      5954,
      5955
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5955,
    "end": 5961,
    "range": [
      5955,
      5961
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5961,
    "end": 5962,
    "range": [
      5961,
      5962
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5962,
    "end": 5963,
    "range": [
      5962,
      5963
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5964,
    "end": 5967,
    "range": [
      5964,
      5967
    ]
  },
  {
    "type": "Identifier",
    "value": "s6a",
    "start": 5968,
    "end": 5971,
    "range": [
      5968,
      5971
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5972,
    "end": 5973,
    "range": [
      5972,
      5973
    ]
  },
  {
    "type": "Identifier",
    "value": "s6",
    "start": 5974,
    "end": 5976,
    "range": [
      5974,
      5976
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5976,
    "end": 5977,
    "range": [
      5976,
      5977
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5977,
    "end": 5981,
    "range": [
      5977,
      5981
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5981,
    "end": 5982,
    "range": [
      5981,
      5982
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 5982,
    "end": 5995,
    "range": [
      5982,
      5995
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5995,
    "end": 5996,
    "range": [
      5995,
      5996
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 5997,
    "end": 6010,
    "range": [
      5997,
      6010
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6010,
    "end": 6011,
    "range": [
      6010,
      6011
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 6012,
    "end": 6025,
    "range": [
      6012,
      6025
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6025,
    "end": 6026,
    "range": [
      6025,
      6026
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6026,
    "end": 6027,
    "range": [
      6026,
      6027
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6037,
    "end": 6040,
    "range": [
      6037,
      6040
    ]
  },
  {
    "type": "Identifier",
    "value": "s6b",
    "start": 6041,
    "end": 6044,
    "range": [
      6041,
      6044
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6045,
    "end": 6046,
    "range": [
      6045,
      6046
    ]
  },
  {
    "type": "Identifier",
    "value": "s6",
    "start": 6047,
    "end": 6049,
    "range": [
      6047,
      6049
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6049,
    "end": 6050,
    "range": [
      6049,
      6050
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6050,
    "end": 6054,
    "range": [
      6050,
      6054
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6054,
    "end": 6055,
    "range": [
      6054,
      6055
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction6P",
    "start": 6055,
    "end": 6069,
    "range": [
      6055,
      6069
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6069,
    "end": 6070,
    "range": [
      6069,
      6070
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction6P",
    "start": 6071,
    "end": 6085,
    "range": [
      6071,
      6085
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6085,
    "end": 6086,
    "range": [
      6085,
      6086
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction6P",
    "start": 6087,
    "end": 6101,
    "range": [
      6087,
      6101
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6101,
    "end": 6102,
    "range": [
      6101,
      6102
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6102,
    "end": 6103,
    "range": [
      6102,
      6103
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6113,
    "end": 6116,
    "range": [
      6113,
      6116
    ]
  },
  {
    "type": "Identifier",
    "value": "s6c",
    "start": 6117,
    "end": 6120,
    "range": [
      6117,
      6120
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6121,
    "end": 6122,
    "range": [
      6121,
      6122
    ]
  },
  {
    "type": "Identifier",
    "value": "s6",
    "start": 6123,
    "end": 6125,
    "range": [
      6123,
      6125
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6125,
    "end": 6126,
    "range": [
      6125,
      6126
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6126,
    "end": 6130,
    "range": [
      6126,
      6130
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6130,
    "end": 6131,
    "range": [
      6130,
      6131
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction6P",
    "start": 6131,
    "end": 6145,
    "range": [
      6131,
      6145
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6145,
    "end": 6146,
    "range": [
      6145,
      6146
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 6147,
    "end": 6160,
    "range": [
      6147,
      6160
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6160,
    "end": 6161,
    "range": [
      6160,
      6161
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 6162,
    "end": 6175,
    "range": [
      6162,
      6175
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6175,
    "end": 6176,
    "range": [
      6175,
      6176
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6176,
    "end": 6177,
    "range": [
      6176,
      6177
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6187,
    "end": 6190,
    "range": [
      6187,
      6190
    ]
  },
  {
    "type": "Identifier",
    "value": "s6d",
    "start": 6191,
    "end": 6194,
    "range": [
      6191,
      6194
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6195,
    "end": 6196,
    "range": [
      6195,
      6196
    ]
  },
  {
    "type": "Identifier",
    "value": "s6",
    "start": 6197,
    "end": 6199,
    "range": [
      6197,
      6199
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6199,
    "end": 6200,
    "range": [
      6199,
      6200
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6200,
    "end": 6204,
    "range": [
      6200,
      6204
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6204,
    "end": 6205,
    "range": [
      6204,
      6205
    ]
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 6205,
    "end": 6213,
    "range": [
      6205,
      6213
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6213,
    "end": 6214,
    "range": [
      6213,
      6214
    ]
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 6215,
    "end": 6223,
    "range": [
      6215,
      6223
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6223,
    "end": 6224,
    "range": [
      6223,
      6224
    ]
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 6225,
    "end": 6233,
    "range": [
      6225,
      6233
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6233,
    "end": 6234,
    "range": [
      6233,
      6234
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6234,
    "end": 6235,
    "range": [
      6234,
      6235
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6235,
    "end": 6239,
    "range": [
      6235,
      6239
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6239,
    "end": 6240,
    "range": [
      6239,
      6240
    ]
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6240,
    "end": 6249,
    "range": [
      6240,
      6249
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6249,
    "end": 6250,
    "range": [
      6249,
      6250
    ]
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6251,
    "end": 6260,
    "range": [
      6251,
      6260
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6260,
    "end": 6261,
    "range": [
      6260,
      6261
    ]
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6262,
    "end": 6271,
    "range": [
      6262,
      6271
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6271,
    "end": 6272,
    "range": [
      6271,
      6272
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6272,
    "end": 6273,
    "range": [
      6272,
      6273
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6281,
    "end": 6284,
    "range": [
      6281,
      6284
    ]
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 6285,
    "end": 6287,
    "range": [
      6285,
      6287
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6287,
    "end": 6288,
    "range": [
      6287,
      6288
    ]
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 6289,
    "end": 6297,
    "range": [
      6289,
      6297
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6297,
    "end": 6298,
    "range": [
      6297,
      6298
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6298,
    "end": 6304,
    "range": [
      6298,
      6304
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6304,
    "end": 6305,
    "range": [
      6304,
      6305
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6305,
    "end": 6306,
    "range": [
      6305,
      6306
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6307,
    "end": 6310,
    "range": [
      6307,
      6310
    ]
  },
  {
    "type": "Identifier",
    "value": "r7a",
    "start": 6311,
    "end": 6314,
    "range": [
      6311,
      6314
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6315,
    "end": 6316,
    "range": [
      6315,
      6316
    ]
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 6317,
    "end": 6319,
    "range": [
      6317,
      6319
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6319,
    "end": 6320,
    "range": [
      6319,
      6320
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6320,
    "end": 6324,
    "range": [
      6320,
      6324
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6324,
    "end": 6325,
    "range": [
      6324,
      6325
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 6325,
    "end": 6338,
    "range": [
      6325,
      6338
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6338,
    "end": 6339,
    "range": [
      6338,
      6339
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 6340,
    "end": 6353,
    "range": [
      6340,
      6353
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6353,
    "end": 6354,
    "range": [
      6353,
      6354
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 6355,
    "end": 6368,
    "range": [
      6355,
      6368
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6368,
    "end": 6369,
    "range": [
      6368,
      6369
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6369,
    "end": 6370,
    "range": [
      6369,
      6370
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6380,
    "end": 6383,
    "range": [
      6380,
      6383
    ]
  },
  {
    "type": "Identifier",
    "value": "r7b",
    "start": 6384,
    "end": 6387,
    "range": [
      6384,
      6387
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6388,
    "end": 6389,
    "range": [
      6388,
      6389
    ]
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 6390,
    "end": 6392,
    "range": [
      6390,
      6392
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6392,
    "end": 6393,
    "range": [
      6392,
      6393
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6393,
    "end": 6397,
    "range": [
      6393,
      6397
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6397,
    "end": 6398,
    "range": [
      6397,
      6398
    ]
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6398,
    "end": 6407,
    "range": [
      6398,
      6407
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6407,
    "end": 6408,
    "range": [
      6407,
      6408
    ]
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6409,
    "end": 6418,
    "range": [
      6409,
      6418
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6418,
    "end": 6419,
    "range": [
      6418,
      6419
    ]
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6420,
    "end": 6429,
    "range": [
      6420,
      6429
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6429,
    "end": 6430,
    "range": [
      6429,
      6430
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6430,
    "end": 6431,
    "range": [
      6430,
      6431
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6431,
    "end": 6435,
    "range": [
      6431,
      6435
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6435,
    "end": 6436,
    "range": [
      6435,
      6436
    ]
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6436,
    "end": 6445,
    "range": [
      6436,
      6445
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6445,
    "end": 6446,
    "range": [
      6445,
      6446
    ]
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6447,
    "end": 6456,
    "range": [
      6447,
      6456
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6456,
    "end": 6457,
    "range": [
      6456,
      6457
    ]
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6458,
    "end": 6467,
    "range": [
      6458,
      6467
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6467,
    "end": 6468,
    "range": [
      6467,
      6468
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6468,
    "end": 6469,
    "range": [
      6468,
      6469
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6476,
    "end": 6479,
    "range": [
      6476,
      6479
    ]
  },
  {
    "type": "Identifier",
    "value": "s7",
    "start": 6480,
    "end": 6482,
    "range": [
      6480,
      6482
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6482,
    "end": 6483,
    "range": [
      6482,
      6483
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 6484,
    "end": 6491,
    "range": [
      6484,
      6491
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6491,
    "end": 6492,
    "range": [
      6491,
      6492
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6492,
    "end": 6498,
    "range": [
      6492,
      6498
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6498,
    "end": 6499,
    "range": [
      6498,
      6499
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6499,
    "end": 6500,
    "range": [
      6499,
      6500
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6501,
    "end": 6504,
    "range": [
      6501,
      6504
    ]
  },
  {
    "type": "Identifier",
    "value": "s7a",
    "start": 6505,
    "end": 6508,
    "range": [
      6505,
      6508
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6509,
    "end": 6510,
    "range": [
      6509,
      6510
    ]
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 6511,
    "end": 6513,
    "range": [
      6511,
      6513
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6513,
    "end": 6514,
    "range": [
      6513,
      6514
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6514,
    "end": 6518,
    "range": [
      6514,
      6518
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6518,
    "end": 6519,
    "range": [
      6518,
      6519
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 6519,
    "end": 6532,
    "range": [
      6519,
      6532
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6532,
    "end": 6533,
    "range": [
      6532,
      6533
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 6534,
    "end": 6547,
    "range": [
      6534,
      6547
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6547,
    "end": 6548,
    "range": [
      6547,
      6548
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 6549,
    "end": 6562,
    "range": [
      6549,
      6562
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6562,
    "end": 6563,
    "range": [
      6562,
      6563
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6563,
    "end": 6564,
    "range": [
      6563,
      6564
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6574,
    "end": 6577,
    "range": [
      6574,
      6577
    ]
  },
  {
    "type": "Identifier",
    "value": "s7b",
    "start": 6578,
    "end": 6581,
    "range": [
      6578,
      6581
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6582,
    "end": 6583,
    "range": [
      6582,
      6583
    ]
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 6584,
    "end": 6586,
    "range": [
      6584,
      6586
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6586,
    "end": 6587,
    "range": [
      6586,
      6587
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6587,
    "end": 6591,
    "range": [
      6587,
      6591
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6591,
    "end": 6592,
    "range": [
      6591,
      6592
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction7P",
    "start": 6592,
    "end": 6606,
    "range": [
      6592,
      6606
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6606,
    "end": 6607,
    "range": [
      6606,
      6607
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction7P",
    "start": 6608,
    "end": 6622,
    "range": [
      6608,
      6622
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6622,
    "end": 6623,
    "range": [
      6622,
      6623
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction7P",
    "start": 6624,
    "end": 6638,
    "range": [
      6624,
      6638
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6638,
    "end": 6639,
    "range": [
      6638,
      6639
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6639,
    "end": 6640,
    "range": [
      6639,
      6640
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6650,
    "end": 6653,
    "range": [
      6650,
      6653
    ]
  },
  {
    "type": "Identifier",
    "value": "s7c",
    "start": 6654,
    "end": 6657,
    "range": [
      6654,
      6657
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6658,
    "end": 6659,
    "range": [
      6658,
      6659
    ]
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 6660,
    "end": 6662,
    "range": [
      6660,
      6662
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6662,
    "end": 6663,
    "range": [
      6662,
      6663
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6663,
    "end": 6667,
    "range": [
      6663,
      6667
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6667,
    "end": 6668,
    "range": [
      6667,
      6668
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction7P",
    "start": 6668,
    "end": 6682,
    "range": [
      6668,
      6682
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6682,
    "end": 6683,
    "range": [
      6682,
      6683
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 6684,
    "end": 6697,
    "range": [
      6684,
      6697
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6697,
    "end": 6698,
    "range": [
      6697,
      6698
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 6699,
    "end": 6712,
    "range": [
      6699,
      6712
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6712,
    "end": 6713,
    "range": [
      6712,
      6713
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6713,
    "end": 6714,
    "range": [
      6713,
      6714
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6724,
    "end": 6727,
    "range": [
      6724,
      6727
    ]
  },
  {
    "type": "Identifier",
    "value": "s7d",
    "start": 6728,
    "end": 6731,
    "range": [
      6728,
      6731
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6732,
    "end": 6733,
    "range": [
      6732,
      6733
    ]
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 6734,
    "end": 6736,
    "range": [
      6734,
      6736
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6736,
    "end": 6737,
    "range": [
      6736,
      6737
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6737,
    "end": 6741,
    "range": [
      6737,
      6741
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6741,
    "end": 6742,
    "range": [
      6741,
      6742
    ]
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 6742,
    "end": 6750,
    "range": [
      6742,
      6750
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6750,
    "end": 6751,
    "range": [
      6750,
      6751
    ]
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 6752,
    "end": 6760,
    "range": [
      6752,
      6760
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6760,
    "end": 6761,
    "range": [
      6760,
      6761
    ]
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 6762,
    "end": 6770,
    "range": [
      6762,
      6770
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6770,
    "end": 6771,
    "range": [
      6770,
      6771
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6771,
    "end": 6772,
    "range": [
      6771,
      6772
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6772,
    "end": 6776,
    "range": [
      6772,
      6776
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6776,
    "end": 6777,
    "range": [
      6776,
      6777
    ]
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 6777,
    "end": 6785,
    "range": [
      6777,
      6785
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6785,
    "end": 6786,
    "range": [
      6785,
      6786
    ]
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 6787,
    "end": 6795,
    "range": [
      6787,
      6795
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6795,
    "end": 6796,
    "range": [
      6795,
      6796
    ]
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 6797,
    "end": 6805,
    "range": [
      6797,
      6805
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6805,
    "end": 6806,
    "range": [
      6805,
      6806
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6806,
    "end": 6807,
    "range": [
      6806,
      6807
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6816,
    "end": 6819,
    "range": [
      6816,
      6819
    ]
  },
  {
    "type": "Identifier",
    "value": "r8",
    "start": 6820,
    "end": 6822,
    "range": [
      6820,
      6822
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6822,
    "end": 6823,
    "range": [
      6822,
      6823
    ]
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 6824,
    "end": 6832,
    "range": [
      6824,
      6832
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6832,
    "end": 6833,
    "range": [
      6832,
      6833
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 6833,
    "end": 6839,
    "range": [
      6833,
      6839
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6839,
    "end": 6840,
    "range": [
      6839,
      6840
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6840,
    "end": 6841,
    "range": [
      6840,
      6841
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6842,
    "end": 6845,
    "range": [
      6842,
      6845
    ]
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 6846,
    "end": 6855,
    "range": [
      6846,
      6855
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6855,
    "end": 6856,
    "range": [
      6855,
      6856
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6857,
    "end": 6858,
    "range": [
      6857,
      6858
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 6858,
    "end": 6859,
    "range": [
      6858,
      6859
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6859,
    "end": 6860,
    "range": [
      6859,
      6860
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 6861,
    "end": 6864,
    "range": [
      6861,
      6864
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6864,
    "end": 6865,
    "range": [
      6864,
      6865
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6866,
    "end": 6868,
    "range": [
      6866,
      6868
    ]
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 6869,
    "end": 6877,
    "range": [
      6869,
      6877
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6877,
    "end": 6878,
    "range": [
      6877,
      6878
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 6878,
    "end": 6884,
    "range": [
      6878,
      6884
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6884,
    "end": 6885,
    "range": [
      6884,
      6885
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6885,
    "end": 6886,
    "range": [
      6885,
      6886
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6887,
    "end": 6890,
    "range": [
      6887,
      6890
    ]
  },
  {
    "type": "Identifier",
    "value": "nPromise",
    "start": 6891,
    "end": 6899,
    "range": [
      6891,
      6899
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6899,
    "end": 6900,
    "range": [
      6899,
      6900
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6901,
    "end": 6902,
    "range": [
      6901,
      6902
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 6902,
    "end": 6903,
    "range": [
      6902,
      6903
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6903,
    "end": 6904,
    "range": [
      6903,
      6904
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 6905,
    "end": 6908,
    "range": [
      6905,
      6908
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6908,
    "end": 6909,
    "range": [
      6908,
      6909
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6910,
    "end": 6912,
    "range": [
      6910,
      6912
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 6913,
    "end": 6920,
    "range": [
      6913,
      6920
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6920,
    "end": 6921,
    "range": [
      6920,
      6921
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 6921,
    "end": 6927,
    "range": [
      6921,
      6927
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6927,
    "end": 6928,
    "range": [
      6927,
      6928
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6928,
    "end": 6929,
    "range": [
      6928,
      6929
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6930,
    "end": 6933,
    "range": [
      6930,
      6933
    ]
  },
  {
    "type": "Identifier",
    "value": "r8a",
    "start": 6934,
    "end": 6937,
    "range": [
      6934,
      6937
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6938,
    "end": 6939,
    "range": [
      6938,
      6939
    ]
  },
  {
    "type": "Identifier",
    "value": "r8",
    "start": 6940,
    "end": 6942,
    "range": [
      6940,
      6942
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6942,
    "end": 6943,
    "range": [
      6942,
      6943
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6943,
    "end": 6947,
    "range": [
      6943,
      6947
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6947,
    "end": 6948,
    "range": [
      6947,
      6948
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 6948,
    "end": 6961,
    "range": [
      6948,
      6961
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6961,
    "end": 6962,
    "range": [
      6961,
      6962
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 6963,
    "end": 6976,
    "range": [
      6963,
      6976
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6976,
    "end": 6977,
    "range": [
      6976,
      6977
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 6978,
    "end": 6991,
    "range": [
      6978,
      6991
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6991,
    "end": 6992,
    "range": [
      6991,
      6992
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6992,
    "end": 6993,
    "range": [
      6992,
      6993
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7003,
    "end": 7006,
    "range": [
      7003,
      7006
    ]
  },
  {
    "type": "Identifier",
    "value": "r8b",
    "start": 7007,
    "end": 7010,
    "range": [
      7007,
      7010
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7011,
    "end": 7012,
    "range": [
      7011,
      7012
    ]
  },
  {
    "type": "Identifier",
    "value": "r8",
    "start": 7013,
    "end": 7015,
    "range": [
      7013,
      7015
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7015,
    "end": 7016,
    "range": [
      7015,
      7016
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7016,
    "end": 7020,
    "range": [
      7016,
      7020
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7020,
    "end": 7021,
    "range": [
      7020,
      7021
    ]
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7021,
    "end": 7030,
    "range": [
      7021,
      7030
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7030,
    "end": 7031,
    "range": [
      7030,
      7031
    ]
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7032,
    "end": 7041,
    "range": [
      7032,
      7041
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7041,
    "end": 7042,
    "range": [
      7041,
      7042
    ]
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7043,
    "end": 7052,
    "range": [
      7043,
      7052
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7052,
    "end": 7053,
    "range": [
      7052,
      7053
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7053,
    "end": 7054,
    "range": [
      7053,
      7054
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7054,
    "end": 7058,
    "range": [
      7054,
      7058
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7058,
    "end": 7059,
    "range": [
      7058,
      7059
    ]
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7059,
    "end": 7068,
    "range": [
      7059,
      7068
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7068,
    "end": 7069,
    "range": [
      7068,
      7069
    ]
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7070,
    "end": 7079,
    "range": [
      7070,
      7079
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7079,
    "end": 7080,
    "range": [
      7079,
      7080
    ]
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7081,
    "end": 7090,
    "range": [
      7081,
      7090
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7090,
    "end": 7091,
    "range": [
      7090,
      7091
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7091,
    "end": 7092,
    "range": [
      7091,
      7092
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7099,
    "end": 7102,
    "range": [
      7099,
      7102
    ]
  },
  {
    "type": "Identifier",
    "value": "s8",
    "start": 7103,
    "end": 7105,
    "range": [
      7103,
      7105
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7105,
    "end": 7106,
    "range": [
      7105,
      7106
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 7107,
    "end": 7114,
    "range": [
      7107,
      7114
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7114,
    "end": 7115,
    "range": [
      7114,
      7115
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 7115,
    "end": 7121,
    "range": [
      7115,
      7121
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7121,
    "end": 7122,
    "range": [
      7121,
      7122
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7122,
    "end": 7123,
    "range": [
      7122,
      7123
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7124,
    "end": 7127,
    "range": [
      7124,
      7127
    ]
  },
  {
    "type": "Identifier",
    "value": "s8a",
    "start": 7128,
    "end": 7131,
    "range": [
      7128,
      7131
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7132,
    "end": 7133,
    "range": [
      7132,
      7133
    ]
  },
  {
    "type": "Identifier",
    "value": "s8",
    "start": 7134,
    "end": 7136,
    "range": [
      7134,
      7136
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7136,
    "end": 7137,
    "range": [
      7136,
      7137
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7137,
    "end": 7141,
    "range": [
      7137,
      7141
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7141,
    "end": 7142,
    "range": [
      7141,
      7142
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 7142,
    "end": 7155,
    "range": [
      7142,
      7155
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7155,
    "end": 7156,
    "range": [
      7155,
      7156
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 7157,
    "end": 7170,
    "range": [
      7157,
      7170
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7170,
    "end": 7171,
    "range": [
      7170,
      7171
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 7172,
    "end": 7185,
    "range": [
      7172,
      7185
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7185,
    "end": 7186,
    "range": [
      7185,
      7186
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7186,
    "end": 7187,
    "range": [
      7186,
      7187
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7197,
    "end": 7200,
    "range": [
      7197,
      7200
    ]
  },
  {
    "type": "Identifier",
    "value": "s8b",
    "start": 7201,
    "end": 7204,
    "range": [
      7201,
      7204
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7205,
    "end": 7206,
    "range": [
      7205,
      7206
    ]
  },
  {
    "type": "Identifier",
    "value": "s8",
    "start": 7207,
    "end": 7209,
    "range": [
      7207,
      7209
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7209,
    "end": 7210,
    "range": [
      7209,
      7210
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7210,
    "end": 7214,
    "range": [
      7210,
      7214
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7214,
    "end": 7215,
    "range": [
      7214,
      7215
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction8P",
    "start": 7215,
    "end": 7229,
    "range": [
      7215,
      7229
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7229,
    "end": 7230,
    "range": [
      7229,
      7230
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction8P",
    "start": 7231,
    "end": 7245,
    "range": [
      7231,
      7245
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7245,
    "end": 7246,
    "range": [
      7245,
      7246
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction8P",
    "start": 7247,
    "end": 7261,
    "range": [
      7247,
      7261
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7261,
    "end": 7262,
    "range": [
      7261,
      7262
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7262,
    "end": 7263,
    "range": [
      7262,
      7263
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7273,
    "end": 7276,
    "range": [
      7273,
      7276
    ]
  },
  {
    "type": "Identifier",
    "value": "s8c",
    "start": 7277,
    "end": 7280,
    "range": [
      7277,
      7280
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7281,
    "end": 7282,
    "range": [
      7281,
      7282
    ]
  },
  {
    "type": "Identifier",
    "value": "s8",
    "start": 7283,
    "end": 7285,
    "range": [
      7283,
      7285
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7285,
    "end": 7286,
    "range": [
      7285,
      7286
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7286,
    "end": 7290,
    "range": [
      7286,
      7290
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7290,
    "end": 7291,
    "range": [
      7290,
      7291
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction8P",
    "start": 7291,
    "end": 7305,
    "range": [
      7291,
      7305
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7305,
    "end": 7306,
    "range": [
      7305,
      7306
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 7307,
    "end": 7320,
    "range": [
      7307,
      7320
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7320,
    "end": 7321,
    "range": [
      7320,
      7321
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 7322,
    "end": 7335,
    "range": [
      7322,
      7335
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7335,
    "end": 7336,
    "range": [
      7335,
      7336
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7336,
    "end": 7337,
    "range": [
      7336,
      7337
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7347,
    "end": 7350,
    "range": [
      7347,
      7350
    ]
  },
  {
    "type": "Identifier",
    "value": "s8d",
    "start": 7351,
    "end": 7354,
    "range": [
      7351,
      7354
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7355,
    "end": 7356,
    "range": [
      7355,
      7356
    ]
  },
  {
    "type": "Identifier",
    "value": "s8",
    "start": 7357,
    "end": 7359,
    "range": [
      7357,
      7359
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7359,
    "end": 7360,
    "range": [
      7359,
      7360
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7360,
    "end": 7364,
    "range": [
      7360,
      7364
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7364,
    "end": 7365,
    "range": [
      7364,
      7365
    ]
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7365,
    "end": 7374,
    "range": [
      7365,
      7374
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7374,
    "end": 7375,
    "range": [
      7374,
      7375
    ]
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7376,
    "end": 7385,
    "range": [
      7376,
      7385
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7385,
    "end": 7386,
    "range": [
      7385,
      7386
    ]
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7387,
    "end": 7396,
    "range": [
      7387,
      7396
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7396,
    "end": 7397,
    "range": [
      7396,
      7397
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7397,
    "end": 7398,
    "range": [
      7397,
      7398
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7398,
    "end": 7402,
    "range": [
      7398,
      7402
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7402,
    "end": 7403,
    "range": [
      7402,
      7403
    ]
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7403,
    "end": 7412,
    "range": [
      7403,
      7412
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7412,
    "end": 7413,
    "range": [
      7412,
      7413
    ]
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7414,
    "end": 7423,
    "range": [
      7414,
      7423
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7423,
    "end": 7424,
    "range": [
      7423,
      7424
    ]
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7425,
    "end": 7434,
    "range": [
      7425,
      7434
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7434,
    "end": 7435,
    "range": [
      7434,
      7435
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7435,
    "end": 7436,
    "range": [
      7435,
      7436
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7444,
    "end": 7447,
    "range": [
      7444,
      7447
    ]
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 7448,
    "end": 7450,
    "range": [
      7448,
      7450
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7450,
    "end": 7451,
    "range": [
      7450,
      7451
    ]
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 7452,
    "end": 7460,
    "range": [
      7452,
      7460
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7460,
    "end": 7461,
    "range": [
      7460,
      7461
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 7461,
    "end": 7467,
    "range": [
      7461,
      7467
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7467,
    "end": 7468,
    "range": [
      7467,
      7468
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7468,
    "end": 7469,
    "range": [
      7468,
      7469
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7470,
    "end": 7473,
    "range": [
      7470,
      7473
    ]
  },
  {
    "type": "Identifier",
    "value": "r9a",
    "start": 7474,
    "end": 7477,
    "range": [
      7474,
      7477
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7478,
    "end": 7479,
    "range": [
      7478,
      7479
    ]
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 7480,
    "end": 7482,
    "range": [
      7480,
      7482
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7482,
    "end": 7483,
    "range": [
      7482,
      7483
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7483,
    "end": 7487,
    "range": [
      7483,
      7487
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7487,
    "end": 7488,
    "range": [
      7487,
      7488
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 7488,
    "end": 7501,
    "range": [
      7488,
      7501
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7501,
    "end": 7502,
    "range": [
      7501,
      7502
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 7503,
    "end": 7516,
    "range": [
      7503,
      7516
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7516,
    "end": 7517,
    "range": [
      7516,
      7517
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 7518,
    "end": 7531,
    "range": [
      7518,
      7531
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7531,
    "end": 7532,
    "range": [
      7531,
      7532
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7532,
    "end": 7533,
    "range": [
      7532,
      7533
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7543,
    "end": 7546,
    "range": [
      7543,
      7546
    ]
  },
  {
    "type": "Identifier",
    "value": "r9b",
    "start": 7547,
    "end": 7550,
    "range": [
      7547,
      7550
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7551,
    "end": 7552,
    "range": [
      7551,
      7552
    ]
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 7553,
    "end": 7555,
    "range": [
      7553,
      7555
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7555,
    "end": 7556,
    "range": [
      7555,
      7556
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7556,
    "end": 7560,
    "range": [
      7556,
      7560
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7560,
    "end": 7561,
    "range": [
      7560,
      7561
    ]
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 7561,
    "end": 7570,
    "range": [
      7561,
      7570
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7570,
    "end": 7571,
    "range": [
      7570,
      7571
    ]
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 7572,
    "end": 7581,
    "range": [
      7572,
      7581
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7581,
    "end": 7582,
    "range": [
      7581,
      7582
    ]
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 7583,
    "end": 7592,
    "range": [
      7583,
      7592
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7592,
    "end": 7593,
    "range": [
      7592,
      7593
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7593,
    "end": 7594,
    "range": [
      7593,
      7594
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7601,
    "end": 7604,
    "range": [
      7601,
      7604
    ]
  },
  {
    "type": "Identifier",
    "value": "r9c",
    "start": 7605,
    "end": 7608,
    "range": [
      7605,
      7608
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7609,
    "end": 7610,
    "range": [
      7609,
      7610
    ]
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 7611,
    "end": 7613,
    "range": [
      7611,
      7613
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7613,
    "end": 7614,
    "range": [
      7613,
      7614
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7614,
    "end": 7618,
    "range": [
      7614,
      7618
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7618,
    "end": 7619,
    "range": [
      7618,
      7619
    ]
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7619,
    "end": 7628,
    "range": [
      7619,
      7628
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7628,
    "end": 7629,
    "range": [
      7628,
      7629
    ]
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7630,
    "end": 7639,
    "range": [
      7630,
      7639
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7639,
    "end": 7640,
    "range": [
      7639,
      7640
    ]
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7641,
    "end": 7650,
    "range": [
      7641,
      7650
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7650,
    "end": 7651,
    "range": [
      7650,
      7651
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7651,
    "end": 7652,
    "range": [
      7651,
      7652
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7659,
    "end": 7662,
    "range": [
      7659,
      7662
    ]
  },
  {
    "type": "Identifier",
    "value": "r9d",
    "start": 7663,
    "end": 7666,
    "range": [
      7663,
      7666
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7667,
    "end": 7668,
    "range": [
      7667,
      7668
    ]
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 7669,
    "end": 7671,
    "range": [
      7669,
      7671
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7671,
    "end": 7672,
    "range": [
      7671,
      7672
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7672,
    "end": 7676,
    "range": [
      7672,
      7676
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7676,
    "end": 7677,
    "range": [
      7676,
      7677
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 7677,
    "end": 7689,
    "range": [
      7677,
      7689
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7689,
    "end": 7690,
    "range": [
      7689,
      7690
    ]
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 7691,
    "end": 7700,
    "range": [
      7691,
      7700
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7700,
    "end": 7701,
    "range": [
      7700,
      7701
    ]
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7702,
    "end": 7711,
    "range": [
      7702,
      7711
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7711,
    "end": 7712,
    "range": [
      7711,
      7712
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7712,
    "end": 7713,
    "range": [
      7712,
      7713
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7723,
    "end": 7726,
    "range": [
      7723,
      7726
    ]
  },
  {
    "type": "Identifier",
    "value": "r9e",
    "start": 7727,
    "end": 7730,
    "range": [
      7727,
      7730
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7731,
    "end": 7732,
    "range": [
      7731,
      7732
    ]
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 7733,
    "end": 7735,
    "range": [
      7733,
      7735
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7735,
    "end": 7736,
    "range": [
      7735,
      7736
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7736,
    "end": 7740,
    "range": [
      7736,
      7740
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7740,
    "end": 7741,
    "range": [
      7740,
      7741
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 7741,
    "end": 7753,
    "range": [
      7741,
      7753
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7753,
    "end": 7754,
    "range": [
      7753,
      7754
    ]
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7755,
    "end": 7764,
    "range": [
      7755,
      7764
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7764,
    "end": 7765,
    "range": [
      7764,
      7765
    ]
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 7766,
    "end": 7775,
    "range": [
      7766,
      7775
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7775,
    "end": 7776,
    "range": [
      7775,
      7776
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7776,
    "end": 7777,
    "range": [
      7776,
      7777
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7777,
    "end": 7781,
    "range": [
      7777,
      7781
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7781,
    "end": 7782,
    "range": [
      7781,
      7782
    ]
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 7782,
    "end": 7791,
    "range": [
      7782,
      7791
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7791,
    "end": 7792,
    "range": [
      7791,
      7792
    ]
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 7793,
    "end": 7802,
    "range": [
      7793,
      7802
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7802,
    "end": 7803,
    "range": [
      7802,
      7803
    ]
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 7804,
    "end": 7813,
    "range": [
      7804,
      7813
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7813,
    "end": 7814,
    "range": [
      7813,
      7814
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7814,
    "end": 7815,
    "range": [
      7814,
      7815
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7822,
    "end": 7825,
    "range": [
      7822,
      7825
    ]
  },
  {
    "type": "Identifier",
    "value": "s9",
    "start": 7826,
    "end": 7828,
    "range": [
      7826,
      7828
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7828,
    "end": 7829,
    "range": [
      7828,
      7829
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 7830,
    "end": 7837,
    "range": [
      7830,
      7837
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7837,
    "end": 7838,
    "range": [
      7837,
      7838
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 7838,
    "end": 7844,
    "range": [
      7838,
      7844
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7844,
    "end": 7845,
    "range": [
      7844,
      7845
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7845,
    "end": 7846,
    "range": [
      7845,
      7846
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7847,
    "end": 7850,
    "range": [
      7847,
      7850
    ]
  },
  {
    "type": "Identifier",
    "value": "s9a",
    "start": 7851,
    "end": 7854,
    "range": [
      7851,
      7854
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7855,
    "end": 7856,
    "range": [
      7855,
      7856
    ]
  },
  {
    "type": "Identifier",
    "value": "s9",
    "start": 7857,
    "end": 7859,
    "range": [
      7857,
      7859
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7859,
    "end": 7860,
    "range": [
      7859,
      7860
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7860,
    "end": 7864,
    "range": [
      7860,
      7864
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7864,
    "end": 7865,
    "range": [
      7864,
      7865
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 7865,
    "end": 7878,
    "range": [
      7865,
      7878
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7878,
    "end": 7879,
    "range": [
      7878,
      7879
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 7880,
    "end": 7893,
    "range": [
      7880,
      7893
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7893,
    "end": 7894,
    "range": [
      7893,
      7894
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 7895,
    "end": 7908,
    "range": [
      7895,
      7908
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7908,
    "end": 7909,
    "range": [
      7908,
      7909
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7909,
    "end": 7910,
    "range": [
      7909,
      7910
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7920,
    "end": 7923,
    "range": [
      7920,
      7923
    ]
  },
  {
    "type": "Identifier",
    "value": "s9b",
    "start": 7924,
    "end": 7927,
    "range": [
      7924,
      7927
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7928,
    "end": 7929,
    "range": [
      7928,
      7929
    ]
  },
  {
    "type": "Identifier",
    "value": "s9",
    "start": 7930,
    "end": 7932,
    "range": [
      7930,
      7932
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7932,
    "end": 7933,
    "range": [
      7932,
      7933
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7933,
    "end": 7937,
    "range": [
      7933,
      7937
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7937,
    "end": 7938,
    "range": [
      7937,
      7938
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction9P",
    "start": 7938,
    "end": 7952,
    "range": [
      7938,
      7952
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7952,
    "end": 7953,
    "range": [
      7952,
      7953
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction9P",
    "start": 7954,
    "end": 7968,
    "range": [
      7954,
      7968
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7968,
    "end": 7969,
    "range": [
      7968,
      7969
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction9P",
    "start": 7970,
    "end": 7984,
    "range": [
      7970,
      7984
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7984,
    "end": 7985,
    "range": [
      7984,
      7985
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7985,
    "end": 7986,
    "range": [
      7985,
      7986
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7996,
    "end": 7999,
    "range": [
      7996,
      7999
    ]
  },
  {
    "type": "Identifier",
    "value": "s9c",
    "start": 8000,
    "end": 8003,
    "range": [
      8000,
      8003
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8004,
    "end": 8005,
    "range": [
      8004,
      8005
    ]
  },
  {
    "type": "Identifier",
    "value": "s9",
    "start": 8006,
    "end": 8008,
    "range": [
      8006,
      8008
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8008,
    "end": 8009,
    "range": [
      8008,
      8009
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8009,
    "end": 8013,
    "range": [
      8009,
      8013
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8013,
    "end": 8014,
    "range": [
      8013,
      8014
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction9P",
    "start": 8014,
    "end": 8028,
    "range": [
      8014,
      8028
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8028,
    "end": 8029,
    "range": [
      8028,
      8029
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 8030,
    "end": 8043,
    "range": [
      8030,
      8043
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8043,
    "end": 8044,
    "range": [
      8043,
      8044
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 8045,
    "end": 8058,
    "range": [
      8045,
      8058
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8058,
    "end": 8059,
    "range": [
      8058,
      8059
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8059,
    "end": 8060,
    "range": [
      8059,
      8060
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8070,
    "end": 8073,
    "range": [
      8070,
      8073
    ]
  },
  {
    "type": "Identifier",
    "value": "s9d",
    "start": 8074,
    "end": 8077,
    "range": [
      8074,
      8077
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8078,
    "end": 8079,
    "range": [
      8078,
      8079
    ]
  },
  {
    "type": "Identifier",
    "value": "s9",
    "start": 8080,
    "end": 8082,
    "range": [
      8080,
      8082
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8082,
    "end": 8083,
    "range": [
      8082,
      8083
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8083,
    "end": 8087,
    "range": [
      8083,
      8087
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8087,
    "end": 8088,
    "range": [
      8087,
      8088
    ]
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 8088,
    "end": 8096,
    "range": [
      8088,
      8096
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8096,
    "end": 8097,
    "range": [
      8096,
      8097
    ]
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 8098,
    "end": 8106,
    "range": [
      8098,
      8106
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8106,
    "end": 8107,
    "range": [
      8106,
      8107
    ]
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 8108,
    "end": 8116,
    "range": [
      8108,
      8116
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8116,
    "end": 8117,
    "range": [
      8116,
      8117
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8117,
    "end": 8118,
    "range": [
      8117,
      8118
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8125,
    "end": 8128,
    "range": [
      8125,
      8128
    ]
  },
  {
    "type": "Identifier",
    "value": "s9e",
    "start": 8129,
    "end": 8132,
    "range": [
      8129,
      8132
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8133,
    "end": 8134,
    "range": [
      8133,
      8134
    ]
  },
  {
    "type": "Identifier",
    "value": "s9",
    "start": 8135,
    "end": 8137,
    "range": [
      8135,
      8137
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8137,
    "end": 8138,
    "range": [
      8137,
      8138
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8138,
    "end": 8142,
    "range": [
      8138,
      8142
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8142,
    "end": 8143,
    "range": [
      8142,
      8143
    ]
  },
  {
    "type": "Identifier",
    "value": "nPromise",
    "start": 8143,
    "end": 8151,
    "range": [
      8143,
      8151
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8151,
    "end": 8152,
    "range": [
      8151,
      8152
    ]
  },
  {
    "type": "Identifier",
    "value": "nPromise",
    "start": 8153,
    "end": 8161,
    "range": [
      8153,
      8161
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8161,
    "end": 8162,
    "range": [
      8161,
      8162
    ]
  },
  {
    "type": "Identifier",
    "value": "nPromise",
    "start": 8163,
    "end": 8171,
    "range": [
      8163,
      8171
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8171,
    "end": 8172,
    "range": [
      8171,
      8172
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8172,
    "end": 8173,
    "range": [
      8172,
      8173
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8180,
    "end": 8183,
    "range": [
      8180,
      8183
    ]
  },
  {
    "type": "Identifier",
    "value": "s9f",
    "start": 8184,
    "end": 8187,
    "range": [
      8184,
      8187
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8188,
    "end": 8189,
    "range": [
      8188,
      8189
    ]
  },
  {
    "type": "Identifier",
    "value": "s9",
    "start": 8190,
    "end": 8192,
    "range": [
      8190,
      8192
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8192,
    "end": 8193,
    "range": [
      8192,
      8193
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8193,
    "end": 8197,
    "range": [
      8193,
      8197
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8197,
    "end": 8198,
    "range": [
      8197,
      8198
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 8198,
    "end": 8210,
    "range": [
      8198,
      8210
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8210,
    "end": 8211,
    "range": [
      8210,
      8211
    ]
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8212,
    "end": 8221,
    "range": [
      8212,
      8221
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8221,
    "end": 8222,
    "range": [
      8221,
      8222
    ]
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 8223,
    "end": 8232,
    "range": [
      8223,
      8232
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8232,
    "end": 8233,
    "range": [
      8232,
      8233
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8233,
    "end": 8234,
    "range": [
      8233,
      8234
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8244,
    "end": 8247,
    "range": [
      8244,
      8247
    ]
  },
  {
    "type": "Identifier",
    "value": "s9g",
    "start": 8248,
    "end": 8251,
    "range": [
      8248,
      8251
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8252,
    "end": 8253,
    "range": [
      8252,
      8253
    ]
  },
  {
    "type": "Identifier",
    "value": "s9",
    "start": 8254,
    "end": 8256,
    "range": [
      8254,
      8256
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8256,
    "end": 8257,
    "range": [
      8256,
      8257
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8257,
    "end": 8261,
    "range": [
      8257,
      8261
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8261,
    "end": 8262,
    "range": [
      8261,
      8262
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 8262,
    "end": 8274,
    "range": [
      8262,
      8274
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8274,
    "end": 8275,
    "range": [
      8274,
      8275
    ]
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 8276,
    "end": 8285,
    "range": [
      8276,
      8285
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8285,
    "end": 8286,
    "range": [
      8285,
      8286
    ]
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8287,
    "end": 8296,
    "range": [
      8287,
      8296
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8296,
    "end": 8297,
    "range": [
      8296,
      8297
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8297,
    "end": 8298,
    "range": [
      8297,
      8298
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8298,
    "end": 8302,
    "range": [
      8298,
      8302
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8302,
    "end": 8303,
    "range": [
      8302,
      8303
    ]
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8303,
    "end": 8312,
    "range": [
      8303,
      8312
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8312,
    "end": 8313,
    "range": [
      8312,
      8313
    ]
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8314,
    "end": 8323,
    "range": [
      8314,
      8323
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8323,
    "end": 8324,
    "range": [
      8323,
      8324
    ]
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8325,
    "end": 8334,
    "range": [
      8325,
      8334
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8334,
    "end": 8335,
    "range": [
      8334,
      8335
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8335,
    "end": 8336,
    "range": [
      8335,
      8336
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8344,
    "end": 8347,
    "range": [
      8344,
      8347
    ]
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 8348,
    "end": 8351,
    "range": [
      8348,
      8351
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8352,
    "end": 8353,
    "range": [
      8352,
      8353
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 8354,
    "end": 8368,
    "range": [
      8354,
      8368
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8368,
    "end": 8369,
    "range": [
      8368,
      8369
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 8369,
    "end": 8370,
    "range": [
      8369,
      8370
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 8371,
    "end": 8373,
    "range": [
      8371,
      8373
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 8374,
    "end": 8375,
    "range": [
      8374,
      8375
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8375,
    "end": 8376,
    "range": [
      8375,
      8376
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8376,
    "end": 8377,
    "range": [
      8376,
      8377
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8378,
    "end": 8381,
    "range": [
      8378,
      8381
    ]
  },
  {
    "type": "Identifier",
    "value": "r10a",
    "start": 8382,
    "end": 8386,
    "range": [
      8382,
      8386
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8387,
    "end": 8388,
    "range": [
      8387,
      8388
    ]
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 8389,
    "end": 8392,
    "range": [
      8389,
      8392
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8392,
    "end": 8393,
    "range": [
      8392,
      8393
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8393,
    "end": 8397,
    "range": [
      8393,
      8397
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8397,
    "end": 8398,
    "range": [
      8397,
      8398
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 8398,
    "end": 8412,
    "range": [
      8398,
      8412
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8412,
    "end": 8413,
    "range": [
      8412,
      8413
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 8414,
    "end": 8428,
    "range": [
      8414,
      8428
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8428,
    "end": 8429,
    "range": [
      8428,
      8429
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 8430,
    "end": 8444,
    "range": [
      8430,
      8444
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8444,
    "end": 8445,
    "range": [
      8444,
      8445
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8445,
    "end": 8446,
    "range": [
      8445,
      8446
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8453,
    "end": 8456,
    "range": [
      8453,
      8456
    ]
  },
  {
    "type": "Identifier",
    "value": "r10b",
    "start": 8457,
    "end": 8461,
    "range": [
      8457,
      8461
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8462,
    "end": 8463,
    "range": [
      8462,
      8463
    ]
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 8464,
    "end": 8467,
    "range": [
      8464,
      8467
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8467,
    "end": 8468,
    "range": [
      8467,
      8468
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8468,
    "end": 8472,
    "range": [
      8468,
      8472
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8472,
    "end": 8473,
    "range": [
      8472,
      8473
    ]
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8473,
    "end": 8482,
    "range": [
      8473,
      8482
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8482,
    "end": 8483,
    "range": [
      8482,
      8483
    ]
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8484,
    "end": 8493,
    "range": [
      8484,
      8493
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8493,
    "end": 8494,
    "range": [
      8493,
      8494
    ]
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8495,
    "end": 8504,
    "range": [
      8495,
      8504
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8504,
    "end": 8505,
    "range": [
      8504,
      8505
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8505,
    "end": 8506,
    "range": [
      8505,
      8506
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8513,
    "end": 8516,
    "range": [
      8513,
      8516
    ]
  },
  {
    "type": "Identifier",
    "value": "r10c",
    "start": 8517,
    "end": 8521,
    "range": [
      8517,
      8521
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8522,
    "end": 8523,
    "range": [
      8522,
      8523
    ]
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 8524,
    "end": 8527,
    "range": [
      8524,
      8527
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8527,
    "end": 8528,
    "range": [
      8527,
      8528
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8528,
    "end": 8532,
    "range": [
      8528,
      8532
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8532,
    "end": 8533,
    "range": [
      8532,
      8533
    ]
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 8533,
    "end": 8542,
    "range": [
      8533,
      8542
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8542,
    "end": 8543,
    "range": [
      8542,
      8543
    ]
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 8544,
    "end": 8553,
    "range": [
      8544,
      8553
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8553,
    "end": 8554,
    "range": [
      8553,
      8554
    ]
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 8555,
    "end": 8564,
    "range": [
      8555,
      8564
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8564,
    "end": 8565,
    "range": [
      8564,
      8565
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8565,
    "end": 8566,
    "range": [
      8565,
      8566
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8573,
    "end": 8576,
    "range": [
      8573,
      8576
    ]
  },
  {
    "type": "Identifier",
    "value": "r10d",
    "start": 8577,
    "end": 8581,
    "range": [
      8577,
      8581
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8582,
    "end": 8583,
    "range": [
      8582,
      8583
    ]
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 8584,
    "end": 8587,
    "range": [
      8584,
      8587
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8587,
    "end": 8588,
    "range": [
      8587,
      8588
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8588,
    "end": 8592,
    "range": [
      8588,
      8592
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8592,
    "end": 8593,
    "range": [
      8592,
      8593
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 8593,
    "end": 8605,
    "range": [
      8593,
      8605
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8605,
    "end": 8606,
    "range": [
      8605,
      8606
    ]
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8607,
    "end": 8616,
    "range": [
      8607,
      8616
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8616,
    "end": 8617,
    "range": [
      8616,
      8617
    ]
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 8618,
    "end": 8627,
    "range": [
      8618,
      8627
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8627,
    "end": 8628,
    "range": [
      8627,
      8628
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8628,
    "end": 8629,
    "range": [
      8628,
      8629
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8639,
    "end": 8642,
    "range": [
      8639,
      8642
    ]
  },
  {
    "type": "Identifier",
    "value": "r10e",
    "start": 8643,
    "end": 8647,
    "range": [
      8643,
      8647
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8648,
    "end": 8649,
    "range": [
      8648,
      8649
    ]
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 8650,
    "end": 8653,
    "range": [
      8650,
      8653
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8653,
    "end": 8654,
    "range": [
      8653,
      8654
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8654,
    "end": 8658,
    "range": [
      8654,
      8658
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8658,
    "end": 8659,
    "range": [
      8658,
      8659
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 8659,
    "end": 8671,
    "range": [
      8659,
      8671
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8671,
    "end": 8672,
    "range": [
      8671,
      8672
    ]
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 8673,
    "end": 8682,
    "range": [
      8673,
      8682
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8682,
    "end": 8683,
    "range": [
      8682,
      8683
    ]
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8684,
    "end": 8693,
    "range": [
      8684,
      8693
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8693,
    "end": 8694,
    "range": [
      8693,
      8694
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8694,
    "end": 8695,
    "range": [
      8694,
      8695
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8695,
    "end": 8699,
    "range": [
      8695,
      8699
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8699,
    "end": 8700,
    "range": [
      8699,
      8700
    ]
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8700,
    "end": 8709,
    "range": [
      8700,
      8709
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8709,
    "end": 8710,
    "range": [
      8709,
      8710
    ]
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8711,
    "end": 8720,
    "range": [
      8711,
      8720
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8720,
    "end": 8721,
    "range": [
      8720,
      8721
    ]
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8722,
    "end": 8731,
    "range": [
      8722,
      8731
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8731,
    "end": 8732,
    "range": [
      8731,
      8732
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8732,
    "end": 8733,
    "range": [
      8732,
      8733
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8740,
    "end": 8743,
    "range": [
      8740,
      8743
    ]
  },
  {
    "type": "Identifier",
    "value": "s10",
    "start": 8744,
    "end": 8747,
    "range": [
      8744,
      8747
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8748,
    "end": 8749,
    "range": [
      8748,
      8749
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction10P",
    "start": 8750,
    "end": 8765,
    "range": [
      8750,
      8765
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8765,
    "end": 8766,
    "range": [
      8765,
      8766
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 8766,
    "end": 8767,
    "range": [
      8766,
      8767
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 8768,
    "end": 8770,
    "range": [
      8768,
      8770
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 8771,
    "end": 8772,
    "range": [
      8771,
      8772
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8772,
    "end": 8773,
    "range": [
      8772,
      8773
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8773,
    "end": 8774,
    "range": [
      8773,
      8774
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8775,
    "end": 8778,
    "range": [
      8775,
      8778
    ]
  },
  {
    "type": "Identifier",
    "value": "s10a",
    "start": 8779,
    "end": 8783,
    "range": [
      8779,
      8783
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8784,
    "end": 8785,
    "range": [
      8784,
      8785
    ]
  },
  {
    "type": "Identifier",
    "value": "s10",
    "start": 8786,
    "end": 8789,
    "range": [
      8786,
      8789
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8789,
    "end": 8790,
    "range": [
      8789,
      8790
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8790,
    "end": 8794,
    "range": [
      8790,
      8794
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8794,
    "end": 8795,
    "range": [
      8794,
      8795
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 8795,
    "end": 8809,
    "range": [
      8795,
      8809
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8809,
    "end": 8810,
    "range": [
      8809,
      8810
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 8811,
    "end": 8825,
    "range": [
      8811,
      8825
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8825,
    "end": 8826,
    "range": [
      8825,
      8826
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 8827,
    "end": 8841,
    "range": [
      8827,
      8841
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8841,
    "end": 8842,
    "range": [
      8841,
      8842
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8842,
    "end": 8843,
    "range": [
      8842,
      8843
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8850,
    "end": 8853,
    "range": [
      8850,
      8853
    ]
  },
  {
    "type": "Identifier",
    "value": "s10b",
    "start": 8854,
    "end": 8858,
    "range": [
      8854,
      8858
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8859,
    "end": 8860,
    "range": [
      8859,
      8860
    ]
  },
  {
    "type": "Identifier",
    "value": "s10",
    "start": 8861,
    "end": 8864,
    "range": [
      8861,
      8864
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8864,
    "end": 8865,
    "range": [
      8864,
      8865
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8865,
    "end": 8869,
    "range": [
      8865,
      8869
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8869,
    "end": 8870,
    "range": [
      8869,
      8870
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction10P",
    "start": 8870,
    "end": 8885,
    "range": [
      8870,
      8885
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8885,
    "end": 8886,
    "range": [
      8885,
      8886
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction10P",
    "start": 8887,
    "end": 8902,
    "range": [
      8887,
      8902
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8902,
    "end": 8903,
    "range": [
      8902,
      8903
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction10P",
    "start": 8904,
    "end": 8919,
    "range": [
      8904,
      8919
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8919,
    "end": 8920,
    "range": [
      8919,
      8920
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8920,
    "end": 8921,
    "range": [
      8920,
      8921
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8928,
    "end": 8931,
    "range": [
      8928,
      8931
    ]
  },
  {
    "type": "Identifier",
    "value": "s10c",
    "start": 8932,
    "end": 8936,
    "range": [
      8932,
      8936
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8937,
    "end": 8938,
    "range": [
      8937,
      8938
    ]
  },
  {
    "type": "Identifier",
    "value": "s10",
    "start": 8939,
    "end": 8942,
    "range": [
      8939,
      8942
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8942,
    "end": 8943,
    "range": [
      8942,
      8943
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8943,
    "end": 8947,
    "range": [
      8943,
      8947
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8947,
    "end": 8948,
    "range": [
      8947,
      8948
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction10P",
    "start": 8948,
    "end": 8963,
    "range": [
      8948,
      8963
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8963,
    "end": 8964,
    "range": [
      8963,
      8964
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 8965,
    "end": 8979,
    "range": [
      8965,
      8979
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8979,
    "end": 8980,
    "range": [
      8979,
      8980
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 8981,
    "end": 8995,
    "range": [
      8981,
      8995
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8995,
    "end": 8996,
    "range": [
      8995,
      8996
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8996,
    "end": 8997,
    "range": [
      8996,
      8997
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9004,
    "end": 9007,
    "range": [
      9004,
      9007
    ]
  },
  {
    "type": "Identifier",
    "value": "s10d",
    "start": 9008,
    "end": 9012,
    "range": [
      9008,
      9012
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9013,
    "end": 9014,
    "range": [
      9013,
      9014
    ]
  },
  {
    "type": "Identifier",
    "value": "s10",
    "start": 9015,
    "end": 9018,
    "range": [
      9015,
      9018
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9018,
    "end": 9019,
    "range": [
      9018,
      9019
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9019,
    "end": 9023,
    "range": [
      9019,
      9023
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9023,
    "end": 9024,
    "range": [
      9023,
      9024
    ]
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 9024,
    "end": 9032,
    "range": [
      9024,
      9032
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9032,
    "end": 9033,
    "range": [
      9032,
      9033
    ]
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 9034,
    "end": 9042,
    "range": [
      9034,
      9042
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9042,
    "end": 9043,
    "range": [
      9042,
      9043
    ]
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 9044,
    "end": 9052,
    "range": [
      9044,
      9052
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9052,
    "end": 9053,
    "range": [
      9052,
      9053
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9053,
    "end": 9054,
    "range": [
      9053,
      9054
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9061,
    "end": 9064,
    "range": [
      9061,
      9064
    ]
  },
  {
    "type": "Identifier",
    "value": "s10e",
    "start": 9065,
    "end": 9069,
    "range": [
      9065,
      9069
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9070,
    "end": 9071,
    "range": [
      9070,
      9071
    ]
  },
  {
    "type": "Identifier",
    "value": "s10",
    "start": 9072,
    "end": 9075,
    "range": [
      9072,
      9075
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9075,
    "end": 9076,
    "range": [
      9075,
      9076
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9076,
    "end": 9080,
    "range": [
      9076,
      9080
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9080,
    "end": 9081,
    "range": [
      9080,
      9081
    ]
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 9081,
    "end": 9090,
    "range": [
      9081,
      9090
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9090,
    "end": 9091,
    "range": [
      9090,
      9091
    ]
  },
  {
    "type": "Identifier",
    "value": "nPromise",
    "start": 9092,
    "end": 9100,
    "range": [
      9092,
      9100
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9100,
    "end": 9101,
    "range": [
      9100,
      9101
    ]
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 9102,
    "end": 9111,
    "range": [
      9102,
      9111
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9111,
    "end": 9112,
    "range": [
      9111,
      9112
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9112,
    "end": 9113,
    "range": [
      9112,
      9113
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9120,
    "end": 9123,
    "range": [
      9120,
      9123
    ]
  },
  {
    "type": "Identifier",
    "value": "s10f",
    "start": 9124,
    "end": 9128,
    "range": [
      9124,
      9128
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9129,
    "end": 9130,
    "range": [
      9129,
      9130
    ]
  },
  {
    "type": "Identifier",
    "value": "s10",
    "start": 9131,
    "end": 9134,
    "range": [
      9131,
      9134
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9134,
    "end": 9135,
    "range": [
      9134,
      9135
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9135,
    "end": 9139,
    "range": [
      9135,
      9139
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9139,
    "end": 9140,
    "range": [
      9139,
      9140
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 9140,
    "end": 9153,
    "range": [
      9140,
      9153
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9153,
    "end": 9154,
    "range": [
      9153,
      9154
    ]
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 9155,
    "end": 9164,
    "range": [
      9155,
      9164
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9164,
    "end": 9165,
    "range": [
      9164,
      9165
    ]
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 9166,
    "end": 9175,
    "range": [
      9166,
      9175
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9175,
    "end": 9176,
    "range": [
      9175,
      9176
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9176,
    "end": 9177,
    "range": [
      9176,
      9177
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9187,
    "end": 9190,
    "range": [
      9187,
      9190
    ]
  },
  {
    "type": "Identifier",
    "value": "s10g",
    "start": 9191,
    "end": 9195,
    "range": [
      9191,
      9195
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9196,
    "end": 9197,
    "range": [
      9196,
      9197
    ]
  },
  {
    "type": "Identifier",
    "value": "s10",
    "start": 9198,
    "end": 9201,
    "range": [
      9198,
      9201
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9201,
    "end": 9202,
    "range": [
      9201,
      9202
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9202,
    "end": 9206,
    "range": [
      9202,
      9206
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9206,
    "end": 9207,
    "range": [
      9206,
      9207
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 9207,
    "end": 9220,
    "range": [
      9207,
      9220
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9220,
    "end": 9221,
    "range": [
      9220,
      9221
    ]
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 9222,
    "end": 9231,
    "range": [
      9222,
      9231
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9231,
    "end": 9232,
    "range": [
      9231,
      9232
    ]
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 9233,
    "end": 9242,
    "range": [
      9233,
      9242
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9242,
    "end": 9243,
    "range": [
      9242,
      9243
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9243,
    "end": 9244,
    "range": [
      9243,
      9244
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9244,
    "end": 9248,
    "range": [
      9244,
      9248
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9248,
    "end": 9249,
    "range": [
      9248,
      9249
    ]
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 9249,
    "end": 9257,
    "range": [
      9249,
      9257
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9257,
    "end": 9258,
    "range": [
      9257,
      9258
    ]
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 9259,
    "end": 9268,
    "range": [
      9259,
      9268
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9268,
    "end": 9269,
    "range": [
      9268,
      9269
    ]
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 9270,
    "end": 9279,
    "range": [
      9270,
      9279
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9279,
    "end": 9280,
    "range": [
      9279,
      9280
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9280,
    "end": 9281,
    "range": [
      9280,
      9281
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9289,
    "end": 9292,
    "range": [
      9289,
      9292
    ]
  },
  {
    "type": "Identifier",
    "value": "r11",
    "start": 9293,
    "end": 9296,
    "range": [
      9293,
      9296
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9296,
    "end": 9297,
    "range": [
      9296,
      9297
    ]
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 9298,
    "end": 9306,
    "range": [
      9298,
      9306
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 9306,
    "end": 9307,
    "range": [
      9306,
      9307
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 9307,
    "end": 9313,
    "range": [
      9307,
      9313
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 9313,
    "end": 9314,
    "range": [
      9313,
      9314
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9314,
    "end": 9315,
    "range": [
      9314,
      9315
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9316,
    "end": 9319,
    "range": [
      9316,
      9319
    ]
  },
  {
    "type": "Identifier",
    "value": "r11a",
    "start": 9320,
    "end": 9324,
    "range": [
      9320,
      9324
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9325,
    "end": 9326,
    "range": [
      9325,
      9326
    ]
  },
  {
    "type": "Identifier",
    "value": "r11",
    "start": 9327,
    "end": 9330,
    "range": [
      9327,
      9330
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9330,
    "end": 9331,
    "range": [
      9330,
      9331
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9331,
    "end": 9335,
    "range": [
      9331,
      9335
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9335,
    "end": 9336,
    "range": [
      9335,
      9336
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 9336,
    "end": 9350,
    "range": [
      9336,
      9350
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9350,
    "end": 9351,
    "range": [
      9350,
      9351
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 9352,
    "end": 9366,
    "range": [
      9352,
      9366
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9366,
    "end": 9367,
    "range": [
      9366,
      9367
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 9368,
    "end": 9382,
    "range": [
      9368,
      9382
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9382,
    "end": 9383,
    "range": [
      9382,
      9383
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9383,
    "end": 9384,
    "range": [
      9383,
      9384
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9394,
    "end": 9397,
    "range": [
      9394,
      9397
    ]
  },
  {
    "type": "Identifier",
    "value": "s11",
    "start": 9398,
    "end": 9401,
    "range": [
      9398,
      9401
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9401,
    "end": 9402,
    "range": [
      9401,
      9402
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 9403,
    "end": 9410,
    "range": [
      9403,
      9410
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 9410,
    "end": 9411,
    "range": [
      9410,
      9411
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 9411,
    "end": 9417,
    "range": [
      9411,
      9417
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 9417,
    "end": 9418,
    "range": [
      9417,
      9418
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9418,
    "end": 9419,
    "range": [
      9418,
      9419
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9420,
    "end": 9423,
    "range": [
      9420,
      9423
    ]
  },
  {
    "type": "Identifier",
    "value": "s11a",
    "start": 9424,
    "end": 9428,
    "range": [
      9424,
      9428
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9429,
    "end": 9430,
    "range": [
      9429,
      9430
    ]
  },
  {
    "type": "Identifier",
    "value": "s11",
    "start": 9431,
    "end": 9434,
    "range": [
      9431,
      9434
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9434,
    "end": 9435,
    "range": [
      9434,
      9435
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9435,
    "end": 9439,
    "range": [
      9435,
      9439
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9439,
    "end": 9440,
    "range": [
      9439,
      9440
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 9440,
    "end": 9454,
    "range": [
      9440,
      9454
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9454,
    "end": 9455,
    "range": [
      9454,
      9455
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 9456,
    "end": 9470,
    "range": [
      9456,
      9470
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9470,
    "end": 9471,
    "range": [
      9470,
      9471
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 9472,
    "end": 9486,
    "range": [
      9472,
      9486
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9486,
    "end": 9487,
    "range": [
      9486,
      9487
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9487,
    "end": 9488,
    "range": [
      9487,
      9488
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9495,
    "end": 9498,
    "range": [
      9495,
      9498
    ]
  },
  {
    "type": "Identifier",
    "value": "s11b",
    "start": 9499,
    "end": 9503,
    "range": [
      9499,
      9503
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9504,
    "end": 9505,
    "range": [
      9504,
      9505
    ]
  },
  {
    "type": "Identifier",
    "value": "s11",
    "start": 9506,
    "end": 9509,
    "range": [
      9506,
      9509
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9509,
    "end": 9510,
    "range": [
      9509,
      9510
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9510,
    "end": 9514,
    "range": [
      9510,
      9514
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9514,
    "end": 9515,
    "range": [
      9514,
      9515
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction11P",
    "start": 9515,
    "end": 9530,
    "range": [
      9515,
      9530
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9530,
    "end": 9531,
    "range": [
      9530,
      9531
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction11P",
    "start": 9532,
    "end": 9547,
    "range": [
      9532,
      9547
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9547,
    "end": 9548,
    "range": [
      9547,
      9548
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction11P",
    "start": 9549,
    "end": 9564,
    "range": [
      9549,
      9564
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9564,
    "end": 9565,
    "range": [
      9564,
      9565
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9565,
    "end": 9566,
    "range": [
      9565,
      9566
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9573,
    "end": 9576,
    "range": [
      9573,
      9576
    ]
  },
  {
    "type": "Identifier",
    "value": "s11c",
    "start": 9577,
    "end": 9581,
    "range": [
      9577,
      9581
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9582,
    "end": 9583,
    "range": [
      9582,
      9583
    ]
  },
  {
    "type": "Identifier",
    "value": "s11",
    "start": 9584,
    "end": 9587,
    "range": [
      9584,
      9587
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9587,
    "end": 9588,
    "range": [
      9587,
      9588
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9588,
    "end": 9592,
    "range": [
      9588,
      9592
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9592,
    "end": 9593,
    "range": [
      9592,
      9593
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction11P",
    "start": 9593,
    "end": 9608,
    "range": [
      9593,
      9608
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9608,
    "end": 9609,
    "range": [
      9608,
      9609
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 9610,
    "end": 9624,
    "range": [
      9610,
      9624
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9624,
    "end": 9625,
    "range": [
      9624,
      9625
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 9626,
    "end": 9640,
    "range": [
      9626,
      9640
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9640,
    "end": 9641,
    "range": [
      9640,
      9641
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9641,
    "end": 9642,
    "range": [
      9641,
      9642
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9650,
    "end": 9653,
    "range": [
      9650,
      9653
    ]
  },
  {
    "type": "Identifier",
    "value": "r12",
    "start": 9654,
    "end": 9657,
    "range": [
      9654,
      9657
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9658,
    "end": 9659,
    "range": [
      9658,
      9659
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 9660,
    "end": 9674,
    "range": [
      9660,
      9674
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9674,
    "end": 9675,
    "range": [
      9674,
      9675
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 9675,
    "end": 9676,
    "range": [
      9675,
      9676
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 9677,
    "end": 9679,
    "range": [
      9677,
      9679
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 9680,
    "end": 9681,
    "range": [
      9680,
      9681
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9681,
    "end": 9682,
    "range": [
      9681,
      9682
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9682,
    "end": 9683,
    "range": [
      9682,
      9683
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9684,
    "end": 9687,
    "range": [
      9684,
      9687
    ]
  },
  {
    "type": "Identifier",
    "value": "r12a",
    "start": 9688,
    "end": 9692,
    "range": [
      9688,
      9692
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9693,
    "end": 9694,
    "range": [
      9693,
      9694
    ]
  },
  {
    "type": "Identifier",
    "value": "r12",
    "start": 9695,
    "end": 9698,
    "range": [
      9695,
      9698
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9698,
    "end": 9699,
    "range": [
      9698,
      9699
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9699,
    "end": 9703,
    "range": [
      9699,
      9703
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9703,
    "end": 9704,
    "range": [
      9703,
      9704
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 9704,
    "end": 9718,
    "range": [
      9704,
      9718
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9718,
    "end": 9719,
    "range": [
      9718,
      9719
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 9720,
    "end": 9734,
    "range": [
      9720,
      9734
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9734,
    "end": 9735,
    "range": [
      9734,
      9735
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 9736,
    "end": 9750,
    "range": [
      9736,
      9750
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9750,
    "end": 9751,
    "range": [
      9750,
      9751
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9751,
    "end": 9752,
    "range": [
      9751,
      9752
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9759,
    "end": 9762,
    "range": [
      9759,
      9762
    ]
  },
  {
    "type": "Identifier",
    "value": "s12",
    "start": 9763,
    "end": 9766,
    "range": [
      9763,
      9766
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9767,
    "end": 9768,
    "range": [
      9767,
      9768
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 9769,
    "end": 9783,
    "range": [
      9769,
      9783
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9783,
    "end": 9784,
    "range": [
      9783,
      9784
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 9784,
    "end": 9785,
    "range": [
      9784,
      9785
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 9786,
    "end": 9788,
    "range": [
      9786,
      9788
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 9789,
    "end": 9790,
    "range": [
      9789,
      9790
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9790,
    "end": 9791,
    "range": [
      9790,
      9791
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9791,
    "end": 9792,
    "range": [
      9791,
      9792
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9793,
    "end": 9796,
    "range": [
      9793,
      9796
    ]
  },
  {
    "type": "Identifier",
    "value": "s12a",
    "start": 9797,
    "end": 9801,
    "range": [
      9797,
      9801
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9802,
    "end": 9803,
    "range": [
      9802,
      9803
    ]
  },
  {
    "type": "Identifier",
    "value": "s12",
    "start": 9804,
    "end": 9807,
    "range": [
      9804,
      9807
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9807,
    "end": 9808,
    "range": [
      9807,
      9808
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9808,
    "end": 9812,
    "range": [
      9808,
      9812
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9812,
    "end": 9813,
    "range": [
      9812,
      9813
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 9813,
    "end": 9827,
    "range": [
      9813,
      9827
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9827,
    "end": 9828,
    "range": [
      9827,
      9828
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 9829,
    "end": 9843,
    "range": [
      9829,
      9843
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9843,
    "end": 9844,
    "range": [
      9843,
      9844
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 9845,
    "end": 9859,
    "range": [
      9845,
      9859
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9859,
    "end": 9860,
    "range": [
      9859,
      9860
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9860,
    "end": 9861,
    "range": [
      9860,
      9861
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9868,
    "end": 9871,
    "range": [
      9868,
      9871
    ]
  },
  {
    "type": "Identifier",
    "value": "s12b",
    "start": 9872,
    "end": 9876,
    "range": [
      9872,
      9876
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9877,
    "end": 9878,
    "range": [
      9877,
      9878
    ]
  },
  {
    "type": "Identifier",
    "value": "s12",
    "start": 9879,
    "end": 9882,
    "range": [
      9879,
      9882
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9882,
    "end": 9883,
    "range": [
      9882,
      9883
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9883,
    "end": 9887,
    "range": [
      9883,
      9887
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9887,
    "end": 9888,
    "range": [
      9887,
      9888
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction12P",
    "start": 9888,
    "end": 9903,
    "range": [
      9888,
      9903
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9903,
    "end": 9904,
    "range": [
      9903,
      9904
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction12P",
    "start": 9905,
    "end": 9920,
    "range": [
      9905,
      9920
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9920,
    "end": 9921,
    "range": [
      9920,
      9921
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction12P",
    "start": 9922,
    "end": 9937,
    "range": [
      9922,
      9937
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9937,
    "end": 9938,
    "range": [
      9937,
      9938
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9938,
    "end": 9939,
    "range": [
      9938,
      9939
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9946,
    "end": 9949,
    "range": [
      9946,
      9949
    ]
  },
  {
    "type": "Identifier",
    "value": "s12c",
    "start": 9950,
    "end": 9954,
    "range": [
      9950,
      9954
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9955,
    "end": 9956,
    "range": [
      9955,
      9956
    ]
  },
  {
    "type": "Identifier",
    "value": "s12",
    "start": 9957,
    "end": 9960,
    "range": [
      9957,
      9960
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9960,
    "end": 9961,
    "range": [
      9960,
      9961
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9961,
    "end": 9965,
    "range": [
      9961,
      9965
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9965,
    "end": 9966,
    "range": [
      9965,
      9966
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction12P",
    "start": 9966,
    "end": 9981,
    "range": [
      9966,
      9981
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9981,
    "end": 9982,
    "range": [
      9981,
      9982
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 9983,
    "end": 9997,
    "range": [
      9983,
      9997
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9997,
    "end": 9998,
    "range": [
      9997,
      9998
    ]
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 9999,
    "end": 10013,
    "range": [
      9999,
      10013
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10013,
    "end": 10014,
    "range": [
      10013,
      10014
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10014,
    "end": 10015,
    "range": [
      10014,
      10015
    ]
  }
]
```
