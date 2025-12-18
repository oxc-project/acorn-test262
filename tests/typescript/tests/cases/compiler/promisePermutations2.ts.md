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
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 87,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 104,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 112,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 123,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 133,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 139,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 148,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 155,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 160,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 166,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 178,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 188,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 193,
    "end": 195
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 196,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 203,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "done",
    "start": 219,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 227,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 238,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 248,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 251,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 256,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 265,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 272,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 277,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 280,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 285,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 297,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 307,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 312,
    "end": 314
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 315,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 320,
    "end": 321
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 322,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 328,
    "end": 329
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 331,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 341,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 349,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 359,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 367,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 378,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 388,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 391,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 404,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 412,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 413,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 420,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 425,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 428,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 441,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 453,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 463,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 468,
    "end": 470
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 471,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 476,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 478,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 489,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 495,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 503,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 514,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 519,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 524,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 527,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 538,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 540,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 548,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 549,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 556,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 561,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 565,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 567,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 578,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 579,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 587,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 589,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 594,
    "end": 596
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 597,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 602,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 604,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 612,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 615,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 621,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 625,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 627,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 628,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 629,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 639,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 640,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 645,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 650,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 656,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 664,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 665,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 670,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 672,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 677,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 680,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 688,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 693,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 704,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 705,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 713,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 715,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 718,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 720,
    "end": 722
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 723,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 727,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 728,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 730,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 738,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 739,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 741,
    "end": 742
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 747,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 751,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 752,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 753,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 754,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 755,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 763,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 765,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 766,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 771,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 776,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 780,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 782,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 787,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 788,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 790,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 791,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 798,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 803,
    "end": 805
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 807,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 809,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 817,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 818,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 820,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 821,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 829,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 831,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 836,
    "end": 838
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 839,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 843,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 844,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 846,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 854,
    "end": 855
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 856,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 857,
    "end": 858
  },
  {
    "type": "Identifier",
    "value": "done",
    "start": 863,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 867,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 869,
    "end": 870
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 870,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 871,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 872,
    "end": 873
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 873,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 883,
    "end": 884
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 884,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 889,
    "end": 890
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 891,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 892,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 894,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 897,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 900,
    "end": 901
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 902,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 907,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 908,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 910,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 911,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 916,
    "end": 917
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 918,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 921,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 923,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 926,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 929,
    "end": 930
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 931,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 939,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 940,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 942,
    "end": 943
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 943,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 951,
    "end": 952
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 953,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 956,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 958,
    "end": 960
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 961,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 965,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 966,
    "end": 967
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 968,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 972,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 974,
    "end": 975
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 977,
    "end": 984
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 985,
    "end": 993
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 994,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 1010,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1019,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1028,
    "end": 1035
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1036,
    "end": 1044
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 1045,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1062,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1070,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1079,
    "end": 1086
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1087,
    "end": 1095
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 1096,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 1113,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1127,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1138,
    "end": 1145
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1146,
    "end": 1154
  },
  {
    "type": "Identifier",
    "value": "testFunction2P",
    "start": 1155,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1173,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1186,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1197,
    "end": 1204
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1205,
    "end": 1213
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 1214,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1231,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 1240,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1249,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1258,
    "end": 1265
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1266,
    "end": 1274
  },
  {
    "type": "Identifier",
    "value": "testFunction3P",
    "start": 1275,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1293,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1302,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1310,
    "end": 1316
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1319,
    "end": 1326
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1327,
    "end": 1335
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 1336,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1353,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1365,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 1374,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1383,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1392,
    "end": 1399
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1400,
    "end": 1408
  },
  {
    "type": "Identifier",
    "value": "testFunction4P",
    "start": 1409,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1427,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1439,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1448,
    "end": 1455
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1456,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1465,
    "end": 1472
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1473,
    "end": 1481
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 1482,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1499,
    "end": 1505
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1507,
    "end": 1509
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1512,
    "end": 1513
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1513,
    "end": 1514
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1515,
    "end": 1521
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1523,
    "end": 1525
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1526,
    "end": 1532
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 1535,
    "end": 1543
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1544,
    "end": 1550
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1550,
    "end": 1551
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1553,
    "end": 1560
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1561,
    "end": 1569
  },
  {
    "type": "Identifier",
    "value": "testFunction5P",
    "start": 1570,
    "end": 1584
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1584,
    "end": 1585
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1586,
    "end": 1587
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1588,
    "end": 1594
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1596,
    "end": 1598
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1598,
    "end": 1599
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1601,
    "end": 1602
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1602,
    "end": 1603
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1604,
    "end": 1610
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1612,
    "end": 1614
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1615,
    "end": 1621
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1622,
    "end": 1623
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1624,
    "end": 1631
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1631,
    "end": 1632
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1632,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1639,
    "end": 1640
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1641,
    "end": 1648
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1649,
    "end": 1657
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 1658,
    "end": 1671
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1671,
    "end": 1672
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1672,
    "end": 1673
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1673,
    "end": 1674
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1675,
    "end": 1681
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1681,
    "end": 1682
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1683,
    "end": 1685
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1685,
    "end": 1686
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1687,
    "end": 1688
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1688,
    "end": 1689
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1689,
    "end": 1690
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1690,
    "end": 1691
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1691,
    "end": 1692
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1697,
    "end": 1699
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1700,
    "end": 1701
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1701,
    "end": 1702
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1702,
    "end": 1703
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 1704,
    "end": 1712
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1712,
    "end": 1713
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1713,
    "end": 1719
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1720,
    "end": 1721
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1722,
    "end": 1729
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1730,
    "end": 1738
  },
  {
    "type": "Identifier",
    "value": "testFunction6P",
    "start": 1739,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1753,
    "end": 1754
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1755,
    "end": 1756
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1757,
    "end": 1763
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1763,
    "end": 1764
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1765,
    "end": 1767
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1767,
    "end": 1768
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1769,
    "end": 1770
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1770,
    "end": 1771
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1771,
    "end": 1772
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1772,
    "end": 1773
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1773,
    "end": 1774
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1774,
    "end": 1775
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1776,
    "end": 1777
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1777,
    "end": 1778
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1779,
    "end": 1781
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1782,
    "end": 1783
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1783,
    "end": 1784
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1784,
    "end": 1785
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1786,
    "end": 1793
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1793,
    "end": 1794
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1794,
    "end": 1800
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1800,
    "end": 1801
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1801,
    "end": 1802
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1803,
    "end": 1810
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1811,
    "end": 1819
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 1820,
    "end": 1833
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1834,
    "end": 1836
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1836,
    "end": 1837
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1838,
    "end": 1839
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1839,
    "end": 1840
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1840,
    "end": 1841
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1841,
    "end": 1842
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1843,
    "end": 1844
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1845,
    "end": 1846
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1846,
    "end": 1847
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1848,
    "end": 1850
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1851,
    "end": 1852
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1852,
    "end": 1853
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1853,
    "end": 1854
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 1855,
    "end": 1863
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1863,
    "end": 1864
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1864,
    "end": 1870
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1870,
    "end": 1871
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1871,
    "end": 1872
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1873,
    "end": 1880
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1881,
    "end": 1889
  },
  {
    "type": "Identifier",
    "value": "testFunction7P",
    "start": 1890,
    "end": 1904
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1904,
    "end": 1905
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1905,
    "end": 1907
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1909,
    "end": 1910
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1910,
    "end": 1911
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1911,
    "end": 1912
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1912,
    "end": 1913
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1913,
    "end": 1914
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1914,
    "end": 1915
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1916,
    "end": 1917
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1917,
    "end": 1918
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1919,
    "end": 1921
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1922,
    "end": 1923
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1924,
    "end": 1925
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1926,
    "end": 1933
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1933,
    "end": 1934
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1934,
    "end": 1940
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1940,
    "end": 1941
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1941,
    "end": 1942
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1943,
    "end": 1950
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1951,
    "end": 1959
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 1960,
    "end": 1973
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1973,
    "end": 1974
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1974,
    "end": 1975
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1975,
    "end": 1976
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1976,
    "end": 1977
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1977,
    "end": 1978
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1978,
    "end": 1979
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1980,
    "end": 1981
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1981,
    "end": 1982
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1983,
    "end": 1985
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1985,
    "end": 1986
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1987,
    "end": 1988
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1988,
    "end": 1989
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1989,
    "end": 1990
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1991,
    "end": 1992
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1992,
    "end": 1993
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1994,
    "end": 1996
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1997,
    "end": 1998
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1998,
    "end": 1999
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1999,
    "end": 2000
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 2001,
    "end": 2009
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2009,
    "end": 2010
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2010,
    "end": 2011
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2011,
    "end": 2012
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2012,
    "end": 2013
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2014,
    "end": 2021
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2022,
    "end": 2030
  },
  {
    "type": "Identifier",
    "value": "testFunction8P",
    "start": 2031,
    "end": 2045
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2045,
    "end": 2046
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2046,
    "end": 2047
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2047,
    "end": 2048
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2048,
    "end": 2049
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2049,
    "end": 2050
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2050,
    "end": 2051
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2052,
    "end": 2053
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2053,
    "end": 2054
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2055,
    "end": 2057
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2057,
    "end": 2058
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2059,
    "end": 2060
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2060,
    "end": 2061
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2061,
    "end": 2062
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2063,
    "end": 2064
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2064,
    "end": 2065
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2066,
    "end": 2068
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2069,
    "end": 2070
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2070,
    "end": 2071
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2071,
    "end": 2072
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2073,
    "end": 2080
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2080,
    "end": 2081
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2081,
    "end": 2082
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2082,
    "end": 2083
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2083,
    "end": 2084
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2085,
    "end": 2092
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2093,
    "end": 2101
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 2102,
    "end": 2115
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2115,
    "end": 2116
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2116,
    "end": 2117
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2117,
    "end": 2118
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2118,
    "end": 2119
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2119,
    "end": 2120
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2120,
    "end": 2121
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2122,
    "end": 2123
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2123,
    "end": 2124
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2125,
    "end": 2127
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2127,
    "end": 2128
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2129,
    "end": 2130
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2130,
    "end": 2131
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2131,
    "end": 2132
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2132,
    "end": 2133
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2133,
    "end": 2134
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2134,
    "end": 2135
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2136,
    "end": 2137
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2137,
    "end": 2138
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2139,
    "end": 2141
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2142,
    "end": 2143
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2143,
    "end": 2144
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2144,
    "end": 2145
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 2146,
    "end": 2154
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2154,
    "end": 2155
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2155,
    "end": 2156
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2156,
    "end": 2157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2157,
    "end": 2158
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2159,
    "end": 2166
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2167,
    "end": 2175
  },
  {
    "type": "Identifier",
    "value": "testFunction9P",
    "start": 2176,
    "end": 2190
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2190,
    "end": 2191
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2191,
    "end": 2192
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2192,
    "end": 2193
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2193,
    "end": 2194
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2194,
    "end": 2195
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2195,
    "end": 2196
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2197,
    "end": 2198
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2198,
    "end": 2199
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2200,
    "end": 2202
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2202,
    "end": 2203
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2204,
    "end": 2205
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2205,
    "end": 2206
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2206,
    "end": 2207
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2207,
    "end": 2208
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2208,
    "end": 2209
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2209,
    "end": 2210
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2211,
    "end": 2212
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2212,
    "end": 2213
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2214,
    "end": 2216
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2217,
    "end": 2218
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2218,
    "end": 2219
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2219,
    "end": 2220
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2221,
    "end": 2228
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2228,
    "end": 2229
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2229,
    "end": 2230
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2230,
    "end": 2231
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2231,
    "end": 2232
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2233,
    "end": 2240
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2241,
    "end": 2249
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 2250,
    "end": 2264
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2264,
    "end": 2265
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2265,
    "end": 2266
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2266,
    "end": 2267
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2267,
    "end": 2268
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2268,
    "end": 2270
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2270,
    "end": 2271
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2272,
    "end": 2273
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2273,
    "end": 2274
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2274,
    "end": 2275
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2275,
    "end": 2276
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2276,
    "end": 2277
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2277,
    "end": 2278
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2279,
    "end": 2280
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2280,
    "end": 2281
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2282,
    "end": 2284
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2285,
    "end": 2286
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2286,
    "end": 2287
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2287,
    "end": 2288
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 2289,
    "end": 2297
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2297,
    "end": 2298
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2298,
    "end": 2299
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2299,
    "end": 2300
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2300,
    "end": 2301
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2302,
    "end": 2309
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2310,
    "end": 2318
  },
  {
    "type": "Identifier",
    "value": "testFunction10P",
    "start": 2319,
    "end": 2334
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2334,
    "end": 2335
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2335,
    "end": 2336
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2336,
    "end": 2337
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2337,
    "end": 2338
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2338,
    "end": 2340
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2340,
    "end": 2341
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2342,
    "end": 2343
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2343,
    "end": 2344
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2344,
    "end": 2345
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2345,
    "end": 2346
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2346,
    "end": 2347
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2347,
    "end": 2348
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2349,
    "end": 2350
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2350,
    "end": 2351
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2352,
    "end": 2354
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2355,
    "end": 2356
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2356,
    "end": 2357
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2357,
    "end": 2358
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2359,
    "end": 2366
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2366,
    "end": 2367
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2367,
    "end": 2368
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2368,
    "end": 2369
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2369,
    "end": 2370
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2372,
    "end": 2379
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2380,
    "end": 2388
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 2389,
    "end": 2403
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2403,
    "end": 2404
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2404,
    "end": 2405
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2405,
    "end": 2406
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2407,
    "end": 2413
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2413,
    "end": 2414
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2414,
    "end": 2415
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 2416,
    "end": 2424
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2424,
    "end": 2425
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2425,
    "end": 2431
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2431,
    "end": 2432
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2432,
    "end": 2433
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2434,
    "end": 2441
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2442,
    "end": 2450
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 2451,
    "end": 2465
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2465,
    "end": 2466
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2466,
    "end": 2467
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2467,
    "end": 2468
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2469,
    "end": 2475
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2475,
    "end": 2476
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2476,
    "end": 2477
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 2478,
    "end": 2486
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2486,
    "end": 2487
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2487,
    "end": 2493
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2493,
    "end": 2494
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2494,
    "end": 2495
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2496,
    "end": 2503
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2504,
    "end": 2512
  },
  {
    "type": "Identifier",
    "value": "testFunction11P",
    "start": 2513,
    "end": 2528
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2528,
    "end": 2529
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2529,
    "end": 2530
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2530,
    "end": 2531
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2532,
    "end": 2538
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2538,
    "end": 2539
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2539,
    "end": 2540
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2541,
    "end": 2548
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2548,
    "end": 2549
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2549,
    "end": 2555
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2555,
    "end": 2556
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2556,
    "end": 2557
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2558,
    "end": 2565
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2566,
    "end": 2574
  },
  {
    "type": "Identifier",
    "value": "testFunction11P",
    "start": 2575,
    "end": 2590
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2590,
    "end": 2591
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2591,
    "end": 2592
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2592,
    "end": 2593
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2594,
    "end": 2600
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2600,
    "end": 2601
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2601,
    "end": 2602
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2603,
    "end": 2610
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2610,
    "end": 2611
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2611,
    "end": 2617
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2617,
    "end": 2618
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2618,
    "end": 2619
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2621,
    "end": 2628
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2629,
    "end": 2637
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 2638,
    "end": 2652
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2652,
    "end": 2653
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2653,
    "end": 2654
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2654,
    "end": 2655
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2655,
    "end": 2656
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2656,
    "end": 2657
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2657,
    "end": 2658
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2659,
    "end": 2660
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2660,
    "end": 2661
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2661,
    "end": 2662
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 2663,
    "end": 2671
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2671,
    "end": 2672
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2672,
    "end": 2673
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2673,
    "end": 2674
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2674,
    "end": 2675
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2676,
    "end": 2683
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2684,
    "end": 2692
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 2693,
    "end": 2707
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2707,
    "end": 2708
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2708,
    "end": 2709
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2709,
    "end": 2710
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2710,
    "end": 2711
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2711,
    "end": 2712
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2712,
    "end": 2713
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2714,
    "end": 2715
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2715,
    "end": 2716
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2717,
    "end": 2718
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2718,
    "end": 2719
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2720,
    "end": 2721
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2721,
    "end": 2722
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2722,
    "end": 2723
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 2724,
    "end": 2732
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2732,
    "end": 2733
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2733,
    "end": 2734
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2734,
    "end": 2735
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2735,
    "end": 2736
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2737,
    "end": 2744
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2745,
    "end": 2753
  },
  {
    "type": "Identifier",
    "value": "testFunction12P",
    "start": 2754,
    "end": 2769
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2769,
    "end": 2770
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2770,
    "end": 2771
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2771,
    "end": 2772
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2772,
    "end": 2773
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2773,
    "end": 2774
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2774,
    "end": 2775
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2776,
    "end": 2777
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2777,
    "end": 2778
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2778,
    "end": 2779
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 2780,
    "end": 2788
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2788,
    "end": 2789
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2789,
    "end": 2790
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2790,
    "end": 2791
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2791,
    "end": 2792
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2793,
    "end": 2800
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2801,
    "end": 2809
  },
  {
    "type": "Identifier",
    "value": "testFunction12P",
    "start": 2810,
    "end": 2825
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2825,
    "end": 2826
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2826,
    "end": 2827
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2827,
    "end": 2828
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2828,
    "end": 2829
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2829,
    "end": 2830
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2830,
    "end": 2831
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2832,
    "end": 2833
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2833,
    "end": 2834
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2835,
    "end": 2836
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2836,
    "end": 2837
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2838,
    "end": 2839
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2839,
    "end": 2840
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2840,
    "end": 2841
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2842,
    "end": 2849
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2849,
    "end": 2850
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2850,
    "end": 2851
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2851,
    "end": 2852
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2852,
    "end": 2853
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2855,
    "end": 2858
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 2859,
    "end": 2861
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2861,
    "end": 2862
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 2863,
    "end": 2871
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2871,
    "end": 2872
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2872,
    "end": 2878
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2878,
    "end": 2879
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2879,
    "end": 2880
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2881,
    "end": 2884
  },
  {
    "type": "Identifier",
    "value": "r1a",
    "start": 2885,
    "end": 2888
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2889,
    "end": 2890
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 2891,
    "end": 2893
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2893,
    "end": 2894
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 2894,
    "end": 2898
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2898,
    "end": 2899
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 2899,
    "end": 2911
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2911,
    "end": 2912
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 2913,
    "end": 2925
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2925,
    "end": 2926
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 2927,
    "end": 2939
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2939,
    "end": 2940
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2940,
    "end": 2941
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2942,
    "end": 2945
  },
  {
    "type": "Identifier",
    "value": "r1b",
    "start": 2946,
    "end": 2949
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2950,
    "end": 2951
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 2952,
    "end": 2954
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2954,
    "end": 2955
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 2955,
    "end": 2959
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2959,
    "end": 2960
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 2960,
    "end": 2972
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2972,
    "end": 2973
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 2974,
    "end": 2986
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2986,
    "end": 2987
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 2988,
    "end": 3000
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3000,
    "end": 3001
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3001,
    "end": 3002
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3002,
    "end": 3006
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3006,
    "end": 3007
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3007,
    "end": 3019
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3019,
    "end": 3020
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3021,
    "end": 3033
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3033,
    "end": 3034
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3035,
    "end": 3047
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3047,
    "end": 3048
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3048,
    "end": 3049
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3050,
    "end": 3053
  },
  {
    "type": "Identifier",
    "value": "r1c",
    "start": 3054,
    "end": 3057
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3058,
    "end": 3059
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 3060,
    "end": 3062
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3062,
    "end": 3063
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3063,
    "end": 3067
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3067,
    "end": 3068
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 3068,
    "end": 3081
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3081,
    "end": 3082
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 3083,
    "end": 3096
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3096,
    "end": 3097
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 3098,
    "end": 3111
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3111,
    "end": 3112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3112,
    "end": 3113
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3114,
    "end": 3117
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 3118,
    "end": 3120
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3120,
    "end": 3121
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3122,
    "end": 3129
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3129,
    "end": 3130
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3130,
    "end": 3136
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3136,
    "end": 3137
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3137,
    "end": 3138
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3139,
    "end": 3142
  },
  {
    "type": "Identifier",
    "value": "s1a",
    "start": 3143,
    "end": 3146
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3147,
    "end": 3148
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 3149,
    "end": 3151
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3151,
    "end": 3152
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3152,
    "end": 3156
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3156,
    "end": 3157
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3157,
    "end": 3169
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3169,
    "end": 3170
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3171,
    "end": 3183
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3183,
    "end": 3184
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3185,
    "end": 3197
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3197,
    "end": 3198
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3198,
    "end": 3199
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3200,
    "end": 3203
  },
  {
    "type": "Identifier",
    "value": "s1b",
    "start": 3204,
    "end": 3207
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3208,
    "end": 3209
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 3210,
    "end": 3212
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3212,
    "end": 3213
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3213,
    "end": 3217
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3217,
    "end": 3218
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 3218,
    "end": 3231
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3231,
    "end": 3232
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 3233,
    "end": 3246
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3246,
    "end": 3247
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 3248,
    "end": 3261
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3261,
    "end": 3262
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3262,
    "end": 3263
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3264,
    "end": 3267
  },
  {
    "type": "Identifier",
    "value": "s1c",
    "start": 3268,
    "end": 3271
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3272,
    "end": 3273
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 3274,
    "end": 3276
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3276,
    "end": 3277
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3277,
    "end": 3281
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3281,
    "end": 3282
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 3282,
    "end": 3295
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3295,
    "end": 3296
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3297,
    "end": 3309
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3309,
    "end": 3310
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3311,
    "end": 3323
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3323,
    "end": 3324
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3324,
    "end": 3325
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3326,
    "end": 3329
  },
  {
    "type": "Identifier",
    "value": "s1d",
    "start": 3330,
    "end": 3333
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3334,
    "end": 3335
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 3336,
    "end": 3338
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3338,
    "end": 3339
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3339,
    "end": 3343
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3343,
    "end": 3344
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 3344,
    "end": 3357
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3357,
    "end": 3358
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3359,
    "end": 3371
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3371,
    "end": 3372
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3373,
    "end": 3385
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3385,
    "end": 3386
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3386,
    "end": 3387
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3387,
    "end": 3391
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3391,
    "end": 3392
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3392,
    "end": 3404
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3404,
    "end": 3405
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3406,
    "end": 3418
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3418,
    "end": 3419
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3420,
    "end": 3432
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3432,
    "end": 3433
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3433,
    "end": 3434
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3436,
    "end": 3439
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 3440,
    "end": 3442
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3442,
    "end": 3443
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 3444,
    "end": 3452
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3452,
    "end": 3453
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3453,
    "end": 3454
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3455,
    "end": 3456
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3456,
    "end": 3457
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3458,
    "end": 3464
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3464,
    "end": 3465
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3466,
    "end": 3467
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3467,
    "end": 3468
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3468,
    "end": 3469
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3470,
    "end": 3473
  },
  {
    "type": "Identifier",
    "value": "r2a",
    "start": 3474,
    "end": 3477
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3478,
    "end": 3479
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 3480,
    "end": 3482
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3482,
    "end": 3483
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3483,
    "end": 3487
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3487,
    "end": 3488
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3488,
    "end": 3501
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3501,
    "end": 3502
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3503,
    "end": 3516
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3516,
    "end": 3517
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3518,
    "end": 3531
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3531,
    "end": 3532
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3532,
    "end": 3533
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3534,
    "end": 3537
  },
  {
    "type": "Identifier",
    "value": "r2b",
    "start": 3538,
    "end": 3541
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3542,
    "end": 3543
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 3544,
    "end": 3546
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3546,
    "end": 3547
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3547,
    "end": 3551
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3551,
    "end": 3552
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3552,
    "end": 3565
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3565,
    "end": 3566
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3567,
    "end": 3580
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3580,
    "end": 3581
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3582,
    "end": 3595
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3595,
    "end": 3596
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3596,
    "end": 3597
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3597,
    "end": 3601
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3601,
    "end": 3602
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3602,
    "end": 3615
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3615,
    "end": 3616
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3617,
    "end": 3630
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3630,
    "end": 3631
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3632,
    "end": 3645
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3645,
    "end": 3646
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3646,
    "end": 3647
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3648,
    "end": 3651
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 3652,
    "end": 3654
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3654,
    "end": 3655
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3656,
    "end": 3663
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3663,
    "end": 3664
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3664,
    "end": 3665
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3666,
    "end": 3667
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3667,
    "end": 3668
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3669,
    "end": 3675
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3675,
    "end": 3676
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3677,
    "end": 3678
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3678,
    "end": 3679
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3679,
    "end": 3680
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3681,
    "end": 3684
  },
  {
    "type": "Identifier",
    "value": "s2a",
    "start": 3685,
    "end": 3688
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3689,
    "end": 3690
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 3691,
    "end": 3693
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3693,
    "end": 3694
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3694,
    "end": 3698
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3698,
    "end": 3699
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3699,
    "end": 3712
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3712,
    "end": 3713
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3714,
    "end": 3727
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3727,
    "end": 3728
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3729,
    "end": 3742
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3742,
    "end": 3743
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3743,
    "end": 3744
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3745,
    "end": 3748
  },
  {
    "type": "Identifier",
    "value": "s2b",
    "start": 3749,
    "end": 3752
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3753,
    "end": 3754
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 3755,
    "end": 3757
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3757,
    "end": 3758
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3758,
    "end": 3762
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3762,
    "end": 3763
  },
  {
    "type": "Identifier",
    "value": "testFunction2P",
    "start": 3763,
    "end": 3777
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3777,
    "end": 3778
  },
  {
    "type": "Identifier",
    "value": "testFunction2P",
    "start": 3779,
    "end": 3793
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3793,
    "end": 3794
  },
  {
    "type": "Identifier",
    "value": "testFunction2P",
    "start": 3795,
    "end": 3809
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3809,
    "end": 3810
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3810,
    "end": 3811
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3812,
    "end": 3815
  },
  {
    "type": "Identifier",
    "value": "s2c",
    "start": 3816,
    "end": 3819
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3820,
    "end": 3821
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 3822,
    "end": 3824
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3824,
    "end": 3825
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3825,
    "end": 3829
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3829,
    "end": 3830
  },
  {
    "type": "Identifier",
    "value": "testFunction2P",
    "start": 3830,
    "end": 3844
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3844,
    "end": 3845
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3846,
    "end": 3859
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3859,
    "end": 3860
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3861,
    "end": 3874
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3874,
    "end": 3875
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3875,
    "end": 3876
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3877,
    "end": 3880
  },
  {
    "type": "Identifier",
    "value": "s2d",
    "start": 3881,
    "end": 3884
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3885,
    "end": 3886
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 3887,
    "end": 3889
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3889,
    "end": 3890
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3890,
    "end": 3894
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3894,
    "end": 3895
  },
  {
    "type": "Identifier",
    "value": "testFunction2P",
    "start": 3895,
    "end": 3909
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3909,
    "end": 3910
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3911,
    "end": 3924
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3924,
    "end": 3925
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3926,
    "end": 3939
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3939,
    "end": 3940
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3940,
    "end": 3941
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3941,
    "end": 3945
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3945,
    "end": 3946
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3946,
    "end": 3959
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3959,
    "end": 3960
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3961,
    "end": 3974
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3974,
    "end": 3975
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3976,
    "end": 3989
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3989,
    "end": 3990
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3990,
    "end": 3991
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3993,
    "end": 3996
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 3997,
    "end": 3999
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3999,
    "end": 4000
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 4001,
    "end": 4009
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4009,
    "end": 4010
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4010,
    "end": 4016
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4016,
    "end": 4017
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4017,
    "end": 4018
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4019,
    "end": 4022
  },
  {
    "type": "Identifier",
    "value": "r3a",
    "start": 4023,
    "end": 4026
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4027,
    "end": 4028
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 4029,
    "end": 4031
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4031,
    "end": 4032
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4032,
    "end": 4036
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4036,
    "end": 4037
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4037,
    "end": 4050
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4050,
    "end": 4051
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4052,
    "end": 4065
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4065,
    "end": 4066
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4067,
    "end": 4080
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4080,
    "end": 4081
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4081,
    "end": 4082
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4083,
    "end": 4086
  },
  {
    "type": "Identifier",
    "value": "r3b",
    "start": 4087,
    "end": 4090
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4091,
    "end": 4092
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 4093,
    "end": 4095
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4095,
    "end": 4096
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4096,
    "end": 4100
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4100,
    "end": 4101
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4101,
    "end": 4114
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4114,
    "end": 4115
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4116,
    "end": 4129
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4129,
    "end": 4130
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4131,
    "end": 4144
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4144,
    "end": 4145
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4145,
    "end": 4146
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4146,
    "end": 4150
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4150,
    "end": 4151
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4151,
    "end": 4164
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4164,
    "end": 4165
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4166,
    "end": 4179
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4179,
    "end": 4180
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4181,
    "end": 4194
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4194,
    "end": 4195
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4195,
    "end": 4196
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4197,
    "end": 4200
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 4201,
    "end": 4203
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4203,
    "end": 4204
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 4205,
    "end": 4212
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4212,
    "end": 4213
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4213,
    "end": 4219
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4219,
    "end": 4220
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4220,
    "end": 4221
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4222,
    "end": 4225
  },
  {
    "type": "Identifier",
    "value": "s3a",
    "start": 4226,
    "end": 4229
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4230,
    "end": 4231
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 4232,
    "end": 4234
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4234,
    "end": 4235
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4235,
    "end": 4239
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4239,
    "end": 4240
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4240,
    "end": 4253
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4253,
    "end": 4254
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4255,
    "end": 4268
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4268,
    "end": 4269
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4270,
    "end": 4283
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4283,
    "end": 4284
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4284,
    "end": 4285
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4286,
    "end": 4289
  },
  {
    "type": "Identifier",
    "value": "s3b",
    "start": 4290,
    "end": 4293
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4294,
    "end": 4295
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 4296,
    "end": 4298
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4298,
    "end": 4299
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4299,
    "end": 4303
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4303,
    "end": 4304
  },
  {
    "type": "Identifier",
    "value": "testFunction3P",
    "start": 4304,
    "end": 4318
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4318,
    "end": 4319
  },
  {
    "type": "Identifier",
    "value": "testFunction3P",
    "start": 4320,
    "end": 4334
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4334,
    "end": 4335
  },
  {
    "type": "Identifier",
    "value": "testFunction3P",
    "start": 4336,
    "end": 4350
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4350,
    "end": 4351
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4351,
    "end": 4352
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4353,
    "end": 4356
  },
  {
    "type": "Identifier",
    "value": "s3c",
    "start": 4357,
    "end": 4360
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4361,
    "end": 4362
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 4363,
    "end": 4365
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4365,
    "end": 4366
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4366,
    "end": 4370
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4370,
    "end": 4371
  },
  {
    "type": "Identifier",
    "value": "testFunction3P",
    "start": 4371,
    "end": 4385
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4385,
    "end": 4386
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4387,
    "end": 4400
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4400,
    "end": 4401
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4402,
    "end": 4415
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4415,
    "end": 4416
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4416,
    "end": 4417
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4418,
    "end": 4421
  },
  {
    "type": "Identifier",
    "value": "s3d",
    "start": 4422,
    "end": 4425
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4426,
    "end": 4427
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 4428,
    "end": 4430
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4430,
    "end": 4431
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4431,
    "end": 4435
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4435,
    "end": 4436
  },
  {
    "type": "Identifier",
    "value": "testFunction3P",
    "start": 4436,
    "end": 4450
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4450,
    "end": 4451
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4452,
    "end": 4465
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4465,
    "end": 4466
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4467,
    "end": 4480
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4480,
    "end": 4481
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4481,
    "end": 4482
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4482,
    "end": 4486
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4486,
    "end": 4487
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4487,
    "end": 4500
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4500,
    "end": 4501
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4502,
    "end": 4515
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4515,
    "end": 4516
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4517,
    "end": 4530
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4530,
    "end": 4531
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4531,
    "end": 4532
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4550,
    "end": 4553
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 4554,
    "end": 4556
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4556,
    "end": 4557
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 4558,
    "end": 4566
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4566,
    "end": 4567
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4567,
    "end": 4573
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4573,
    "end": 4574
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4574,
    "end": 4575
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4576,
    "end": 4579
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 4580,
    "end": 4589
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4589,
    "end": 4590
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4591,
    "end": 4592
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4592,
    "end": 4593
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4593,
    "end": 4594
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4595,
    "end": 4598
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4598,
    "end": 4599
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4600,
    "end": 4602
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 4603,
    "end": 4611
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4611,
    "end": 4612
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4612,
    "end": 4618
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4618,
    "end": 4619
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4619,
    "end": 4620
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4621,
    "end": 4624
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 4625,
    "end": 4633
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4633,
    "end": 4634
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4635,
    "end": 4636
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4636,
    "end": 4637
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4637,
    "end": 4638
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4639,
    "end": 4642
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4642,
    "end": 4643
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4644,
    "end": 4646
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 4647,
    "end": 4654
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4654,
    "end": 4655
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4655,
    "end": 4661
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4661,
    "end": 4662
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4662,
    "end": 4663
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4664,
    "end": 4667
  },
  {
    "type": "Identifier",
    "value": "r4a",
    "start": 4668,
    "end": 4671
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4672,
    "end": 4673
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 4674,
    "end": 4676
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4676,
    "end": 4677
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4677,
    "end": 4681
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4681,
    "end": 4682
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 4682,
    "end": 4695
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4695,
    "end": 4696
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 4697,
    "end": 4710
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4710,
    "end": 4711
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 4712,
    "end": 4725
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4725,
    "end": 4726
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4726,
    "end": 4727
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4737,
    "end": 4740
  },
  {
    "type": "Identifier",
    "value": "r4b",
    "start": 4741,
    "end": 4744
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4745,
    "end": 4746
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 4747,
    "end": 4749
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4749,
    "end": 4750
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4750,
    "end": 4754
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4754,
    "end": 4755
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 4755,
    "end": 4764
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4764,
    "end": 4765
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 4766,
    "end": 4779
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4779,
    "end": 4780
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 4781,
    "end": 4794
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4794,
    "end": 4795
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4795,
    "end": 4796
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4796,
    "end": 4800
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4800,
    "end": 4801
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 4801,
    "end": 4810
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4810,
    "end": 4811
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 4812,
    "end": 4825
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4825,
    "end": 4826
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 4827,
    "end": 4840
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4840,
    "end": 4841
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4841,
    "end": 4842
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4849,
    "end": 4852
  },
  {
    "type": "Identifier",
    "value": "s4",
    "start": 4853,
    "end": 4855
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4855,
    "end": 4856
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 4857,
    "end": 4864
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4864,
    "end": 4865
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4865,
    "end": 4871
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4871,
    "end": 4872
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4872,
    "end": 4873
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4874,
    "end": 4877
  },
  {
    "type": "Identifier",
    "value": "s4a",
    "start": 4878,
    "end": 4881
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4882,
    "end": 4883
  },
  {
    "type": "Identifier",
    "value": "s4",
    "start": 4884,
    "end": 4886
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4886,
    "end": 4887
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4887,
    "end": 4891
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4891,
    "end": 4892
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 4892,
    "end": 4905
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4905,
    "end": 4906
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 4907,
    "end": 4920
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4920,
    "end": 4921
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 4922,
    "end": 4935
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4935,
    "end": 4936
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4936,
    "end": 4937
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4947,
    "end": 4950
  },
  {
    "type": "Identifier",
    "value": "s4b",
    "start": 4951,
    "end": 4954
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4955,
    "end": 4956
  },
  {
    "type": "Identifier",
    "value": "s4",
    "start": 4957,
    "end": 4959
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4959,
    "end": 4960
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4960,
    "end": 4964
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4964,
    "end": 4965
  },
  {
    "type": "Identifier",
    "value": "testFunction4P",
    "start": 4965,
    "end": 4979
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4979,
    "end": 4980
  },
  {
    "type": "Identifier",
    "value": "testFunction4P",
    "start": 4981,
    "end": 4995
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4995,
    "end": 4996
  },
  {
    "type": "Identifier",
    "value": "testFunction4P",
    "start": 4997,
    "end": 5011
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5011,
    "end": 5012
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5012,
    "end": 5013
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5024,
    "end": 5027
  },
  {
    "type": "Identifier",
    "value": "s4c",
    "start": 5028,
    "end": 5031
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5032,
    "end": 5033
  },
  {
    "type": "Identifier",
    "value": "s4",
    "start": 5034,
    "end": 5036
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5036,
    "end": 5037
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5037,
    "end": 5041
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5041,
    "end": 5042
  },
  {
    "type": "Identifier",
    "value": "testFunction4P",
    "start": 5042,
    "end": 5056
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5056,
    "end": 5057
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 5058,
    "end": 5071
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5071,
    "end": 5072
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 5073,
    "end": 5086
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5086,
    "end": 5087
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5087,
    "end": 5088
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5098,
    "end": 5101
  },
  {
    "type": "Identifier",
    "value": "s4d",
    "start": 5102,
    "end": 5105
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5106,
    "end": 5107
  },
  {
    "type": "Identifier",
    "value": "s4",
    "start": 5108,
    "end": 5110
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5110,
    "end": 5111
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5111,
    "end": 5115
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5115,
    "end": 5116
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5116,
    "end": 5125
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5125,
    "end": 5126
  },
  {
    "type": "Identifier",
    "value": "testFunction4P",
    "start": 5127,
    "end": 5141
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5141,
    "end": 5142
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 5143,
    "end": 5156
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5156,
    "end": 5157
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5157,
    "end": 5158
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5158,
    "end": 5162
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5162,
    "end": 5163
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5163,
    "end": 5172
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5172,
    "end": 5173
  },
  {
    "type": "Identifier",
    "value": "testFunction4P",
    "start": 5174,
    "end": 5188
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5188,
    "end": 5189
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 5190,
    "end": 5203
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5203,
    "end": 5204
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5204,
    "end": 5205
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5207,
    "end": 5210
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 5211,
    "end": 5213
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5213,
    "end": 5214
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 5215,
    "end": 5223
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5223,
    "end": 5224
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5224,
    "end": 5230
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5230,
    "end": 5231
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5231,
    "end": 5232
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5233,
    "end": 5236
  },
  {
    "type": "Identifier",
    "value": "r5a",
    "start": 5237,
    "end": 5240
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5241,
    "end": 5242
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 5243,
    "end": 5245
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5245,
    "end": 5246
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5246,
    "end": 5250
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5250,
    "end": 5251
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 5251,
    "end": 5264
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5264,
    "end": 5265
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 5266,
    "end": 5279
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5279,
    "end": 5280
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 5281,
    "end": 5294
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5294,
    "end": 5295
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5295,
    "end": 5296
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5306,
    "end": 5309
  },
  {
    "type": "Identifier",
    "value": "r5b",
    "start": 5310,
    "end": 5313
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5314,
    "end": 5315
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 5316,
    "end": 5318
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5318,
    "end": 5319
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5319,
    "end": 5323
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5323,
    "end": 5324
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5324,
    "end": 5333
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5333,
    "end": 5334
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5335,
    "end": 5344
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5344,
    "end": 5345
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5346,
    "end": 5355
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5355,
    "end": 5356
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5356,
    "end": 5357
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5357,
    "end": 5361
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5361,
    "end": 5362
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5362,
    "end": 5371
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5371,
    "end": 5372
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5373,
    "end": 5382
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5382,
    "end": 5383
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5384,
    "end": 5393
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5393,
    "end": 5394
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5394,
    "end": 5395
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5402,
    "end": 5405
  },
  {
    "type": "Identifier",
    "value": "s5",
    "start": 5406,
    "end": 5408
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5408,
    "end": 5409
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 5410,
    "end": 5417
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5417,
    "end": 5418
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5418,
    "end": 5424
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5424,
    "end": 5425
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5425,
    "end": 5426
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5427,
    "end": 5430
  },
  {
    "type": "Identifier",
    "value": "s5a",
    "start": 5431,
    "end": 5434
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5435,
    "end": 5436
  },
  {
    "type": "Identifier",
    "value": "s5",
    "start": 5437,
    "end": 5439
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5439,
    "end": 5440
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5440,
    "end": 5444
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5444,
    "end": 5445
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 5445,
    "end": 5458
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5458,
    "end": 5459
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 5460,
    "end": 5473
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5473,
    "end": 5474
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 5475,
    "end": 5488
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5488,
    "end": 5489
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5489,
    "end": 5490
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5500,
    "end": 5503
  },
  {
    "type": "Identifier",
    "value": "s5b",
    "start": 5504,
    "end": 5507
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5508,
    "end": 5509
  },
  {
    "type": "Identifier",
    "value": "s5",
    "start": 5510,
    "end": 5512
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5512,
    "end": 5513
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5513,
    "end": 5517
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5517,
    "end": 5518
  },
  {
    "type": "Identifier",
    "value": "testFunction5P",
    "start": 5518,
    "end": 5532
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5532,
    "end": 5533
  },
  {
    "type": "Identifier",
    "value": "testFunction5P",
    "start": 5534,
    "end": 5548
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5548,
    "end": 5549
  },
  {
    "type": "Identifier",
    "value": "testFunction5P",
    "start": 5550,
    "end": 5564
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5564,
    "end": 5565
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5565,
    "end": 5566
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5576,
    "end": 5579
  },
  {
    "type": "Identifier",
    "value": "s5c",
    "start": 5580,
    "end": 5583
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5584,
    "end": 5585
  },
  {
    "type": "Identifier",
    "value": "s5",
    "start": 5586,
    "end": 5588
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5588,
    "end": 5589
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5589,
    "end": 5593
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5593,
    "end": 5594
  },
  {
    "type": "Identifier",
    "value": "testFunction5P",
    "start": 5594,
    "end": 5608
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5608,
    "end": 5609
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 5610,
    "end": 5623
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5623,
    "end": 5624
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 5625,
    "end": 5638
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5638,
    "end": 5639
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5639,
    "end": 5640
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5650,
    "end": 5653
  },
  {
    "type": "Identifier",
    "value": "s5d",
    "start": 5654,
    "end": 5657
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5658,
    "end": 5659
  },
  {
    "type": "Identifier",
    "value": "s5",
    "start": 5660,
    "end": 5662
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5662,
    "end": 5663
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5663,
    "end": 5667
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5667,
    "end": 5668
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 5668,
    "end": 5676
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5676,
    "end": 5677
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 5678,
    "end": 5686
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5686,
    "end": 5687
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 5688,
    "end": 5696
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5696,
    "end": 5697
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5697,
    "end": 5698
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5698,
    "end": 5702
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5702,
    "end": 5703
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5703,
    "end": 5712
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5712,
    "end": 5713
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5714,
    "end": 5723
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5723,
    "end": 5724
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5725,
    "end": 5734
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5734,
    "end": 5735
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5735,
    "end": 5736
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5744,
    "end": 5747
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 5748,
    "end": 5750
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5750,
    "end": 5751
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 5752,
    "end": 5760
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5760,
    "end": 5761
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5761,
    "end": 5767
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5767,
    "end": 5768
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5768,
    "end": 5769
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5770,
    "end": 5773
  },
  {
    "type": "Identifier",
    "value": "r6a",
    "start": 5774,
    "end": 5777
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5778,
    "end": 5779
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 5780,
    "end": 5782
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5782,
    "end": 5783
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5783,
    "end": 5787
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5787,
    "end": 5788
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 5788,
    "end": 5801
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5801,
    "end": 5802
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 5803,
    "end": 5816
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5816,
    "end": 5817
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 5818,
    "end": 5831
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5831,
    "end": 5832
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5832,
    "end": 5833
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5843,
    "end": 5846
  },
  {
    "type": "Identifier",
    "value": "r6b",
    "start": 5847,
    "end": 5850
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5851,
    "end": 5852
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 5853,
    "end": 5855
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5855,
    "end": 5856
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5856,
    "end": 5860
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5860,
    "end": 5861
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5861,
    "end": 5870
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5870,
    "end": 5871
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5872,
    "end": 5881
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5881,
    "end": 5882
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5883,
    "end": 5892
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5892,
    "end": 5893
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5893,
    "end": 5894
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5894,
    "end": 5898
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5898,
    "end": 5899
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5899,
    "end": 5908
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5908,
    "end": 5909
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5910,
    "end": 5919
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5919,
    "end": 5920
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5921,
    "end": 5930
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5930,
    "end": 5931
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5931,
    "end": 5932
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5939,
    "end": 5942
  },
  {
    "type": "Identifier",
    "value": "s6",
    "start": 5943,
    "end": 5945
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5945,
    "end": 5946
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 5947,
    "end": 5954
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5954,
    "end": 5955
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5955,
    "end": 5961
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5961,
    "end": 5962
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5962,
    "end": 5963
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5964,
    "end": 5967
  },
  {
    "type": "Identifier",
    "value": "s6a",
    "start": 5968,
    "end": 5971
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5972,
    "end": 5973
  },
  {
    "type": "Identifier",
    "value": "s6",
    "start": 5974,
    "end": 5976
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5976,
    "end": 5977
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5977,
    "end": 5981
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5981,
    "end": 5982
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 5982,
    "end": 5995
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5995,
    "end": 5996
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 5997,
    "end": 6010
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6010,
    "end": 6011
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 6012,
    "end": 6025
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6025,
    "end": 6026
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6026,
    "end": 6027
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6037,
    "end": 6040
  },
  {
    "type": "Identifier",
    "value": "s6b",
    "start": 6041,
    "end": 6044
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6045,
    "end": 6046
  },
  {
    "type": "Identifier",
    "value": "s6",
    "start": 6047,
    "end": 6049
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6049,
    "end": 6050
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6050,
    "end": 6054
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6054,
    "end": 6055
  },
  {
    "type": "Identifier",
    "value": "testFunction6P",
    "start": 6055,
    "end": 6069
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6069,
    "end": 6070
  },
  {
    "type": "Identifier",
    "value": "testFunction6P",
    "start": 6071,
    "end": 6085
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6085,
    "end": 6086
  },
  {
    "type": "Identifier",
    "value": "testFunction6P",
    "start": 6087,
    "end": 6101
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6101,
    "end": 6102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6102,
    "end": 6103
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6113,
    "end": 6116
  },
  {
    "type": "Identifier",
    "value": "s6c",
    "start": 6117,
    "end": 6120
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6121,
    "end": 6122
  },
  {
    "type": "Identifier",
    "value": "s6",
    "start": 6123,
    "end": 6125
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6125,
    "end": 6126
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6126,
    "end": 6130
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6130,
    "end": 6131
  },
  {
    "type": "Identifier",
    "value": "testFunction6P",
    "start": 6131,
    "end": 6145
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6145,
    "end": 6146
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 6147,
    "end": 6160
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6160,
    "end": 6161
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 6162,
    "end": 6175
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6175,
    "end": 6176
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6176,
    "end": 6177
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6187,
    "end": 6190
  },
  {
    "type": "Identifier",
    "value": "s6d",
    "start": 6191,
    "end": 6194
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6195,
    "end": 6196
  },
  {
    "type": "Identifier",
    "value": "s6",
    "start": 6197,
    "end": 6199
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6199,
    "end": 6200
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6200,
    "end": 6204
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6204,
    "end": 6205
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 6205,
    "end": 6213
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6213,
    "end": 6214
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 6215,
    "end": 6223
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6223,
    "end": 6224
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 6225,
    "end": 6233
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6233,
    "end": 6234
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6234,
    "end": 6235
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6235,
    "end": 6239
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6239,
    "end": 6240
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6240,
    "end": 6249
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6249,
    "end": 6250
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6251,
    "end": 6260
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6260,
    "end": 6261
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6262,
    "end": 6271
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6271,
    "end": 6272
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6272,
    "end": 6273
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6281,
    "end": 6284
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 6285,
    "end": 6287
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6287,
    "end": 6288
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 6289,
    "end": 6297
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6297,
    "end": 6298
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6298,
    "end": 6304
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6304,
    "end": 6305
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6305,
    "end": 6306
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6307,
    "end": 6310
  },
  {
    "type": "Identifier",
    "value": "r7a",
    "start": 6311,
    "end": 6314
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6315,
    "end": 6316
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 6317,
    "end": 6319
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6319,
    "end": 6320
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6320,
    "end": 6324
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6324,
    "end": 6325
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 6325,
    "end": 6338
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6338,
    "end": 6339
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 6340,
    "end": 6353
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6353,
    "end": 6354
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 6355,
    "end": 6368
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6368,
    "end": 6369
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6369,
    "end": 6370
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6380,
    "end": 6383
  },
  {
    "type": "Identifier",
    "value": "r7b",
    "start": 6384,
    "end": 6387
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6388,
    "end": 6389
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 6390,
    "end": 6392
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6392,
    "end": 6393
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6393,
    "end": 6397
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6397,
    "end": 6398
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6398,
    "end": 6407
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6407,
    "end": 6408
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6409,
    "end": 6418
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6418,
    "end": 6419
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6420,
    "end": 6429
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6429,
    "end": 6430
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6430,
    "end": 6431
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6431,
    "end": 6435
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6435,
    "end": 6436
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6436,
    "end": 6445
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6445,
    "end": 6446
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6447,
    "end": 6456
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6456,
    "end": 6457
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6458,
    "end": 6467
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6467,
    "end": 6468
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6468,
    "end": 6469
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6476,
    "end": 6479
  },
  {
    "type": "Identifier",
    "value": "s7",
    "start": 6480,
    "end": 6482
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6482,
    "end": 6483
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 6484,
    "end": 6491
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6491,
    "end": 6492
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6492,
    "end": 6498
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6498,
    "end": 6499
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6499,
    "end": 6500
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6501,
    "end": 6504
  },
  {
    "type": "Identifier",
    "value": "s7a",
    "start": 6505,
    "end": 6508
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6509,
    "end": 6510
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 6511,
    "end": 6513
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6513,
    "end": 6514
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6514,
    "end": 6518
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6518,
    "end": 6519
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 6519,
    "end": 6532
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6532,
    "end": 6533
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 6534,
    "end": 6547
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6547,
    "end": 6548
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 6549,
    "end": 6562
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6562,
    "end": 6563
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6563,
    "end": 6564
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6574,
    "end": 6577
  },
  {
    "type": "Identifier",
    "value": "s7b",
    "start": 6578,
    "end": 6581
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6582,
    "end": 6583
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 6584,
    "end": 6586
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6586,
    "end": 6587
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6587,
    "end": 6591
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6591,
    "end": 6592
  },
  {
    "type": "Identifier",
    "value": "testFunction7P",
    "start": 6592,
    "end": 6606
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6606,
    "end": 6607
  },
  {
    "type": "Identifier",
    "value": "testFunction7P",
    "start": 6608,
    "end": 6622
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6622,
    "end": 6623
  },
  {
    "type": "Identifier",
    "value": "testFunction7P",
    "start": 6624,
    "end": 6638
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6638,
    "end": 6639
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6639,
    "end": 6640
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6650,
    "end": 6653
  },
  {
    "type": "Identifier",
    "value": "s7c",
    "start": 6654,
    "end": 6657
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6658,
    "end": 6659
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 6660,
    "end": 6662
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6662,
    "end": 6663
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6663,
    "end": 6667
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6667,
    "end": 6668
  },
  {
    "type": "Identifier",
    "value": "testFunction7P",
    "start": 6668,
    "end": 6682
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6682,
    "end": 6683
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 6684,
    "end": 6697
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6697,
    "end": 6698
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 6699,
    "end": 6712
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6712,
    "end": 6713
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6713,
    "end": 6714
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6724,
    "end": 6727
  },
  {
    "type": "Identifier",
    "value": "s7d",
    "start": 6728,
    "end": 6731
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6732,
    "end": 6733
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 6734,
    "end": 6736
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6736,
    "end": 6737
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6737,
    "end": 6741
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6741,
    "end": 6742
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 6742,
    "end": 6750
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6750,
    "end": 6751
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 6752,
    "end": 6760
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6760,
    "end": 6761
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 6762,
    "end": 6770
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6770,
    "end": 6771
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6771,
    "end": 6772
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6772,
    "end": 6776
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6776,
    "end": 6777
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 6777,
    "end": 6785
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6785,
    "end": 6786
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 6787,
    "end": 6795
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6795,
    "end": 6796
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 6797,
    "end": 6805
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6805,
    "end": 6806
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6806,
    "end": 6807
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6816,
    "end": 6819
  },
  {
    "type": "Identifier",
    "value": "r8",
    "start": 6820,
    "end": 6822
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6822,
    "end": 6823
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 6824,
    "end": 6832
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6832,
    "end": 6833
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 6833,
    "end": 6839
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6839,
    "end": 6840
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6840,
    "end": 6841
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6842,
    "end": 6845
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 6846,
    "end": 6855
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6855,
    "end": 6856
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6857,
    "end": 6858
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 6858,
    "end": 6859
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6859,
    "end": 6860
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 6861,
    "end": 6864
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6864,
    "end": 6865
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6866,
    "end": 6868
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 6869,
    "end": 6877
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6877,
    "end": 6878
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 6878,
    "end": 6884
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6884,
    "end": 6885
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6885,
    "end": 6886
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6887,
    "end": 6890
  },
  {
    "type": "Identifier",
    "value": "nPromise",
    "start": 6891,
    "end": 6899
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6899,
    "end": 6900
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6901,
    "end": 6902
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 6902,
    "end": 6903
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6903,
    "end": 6904
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 6905,
    "end": 6908
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6908,
    "end": 6909
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6910,
    "end": 6912
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 6913,
    "end": 6920
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6920,
    "end": 6921
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 6921,
    "end": 6927
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6927,
    "end": 6928
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6928,
    "end": 6929
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6930,
    "end": 6933
  },
  {
    "type": "Identifier",
    "value": "r8a",
    "start": 6934,
    "end": 6937
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6938,
    "end": 6939
  },
  {
    "type": "Identifier",
    "value": "r8",
    "start": 6940,
    "end": 6942
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6942,
    "end": 6943
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6943,
    "end": 6947
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6947,
    "end": 6948
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 6948,
    "end": 6961
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6961,
    "end": 6962
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 6963,
    "end": 6976
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6976,
    "end": 6977
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 6978,
    "end": 6991
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6991,
    "end": 6992
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6992,
    "end": 6993
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7003,
    "end": 7006
  },
  {
    "type": "Identifier",
    "value": "r8b",
    "start": 7007,
    "end": 7010
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7011,
    "end": 7012
  },
  {
    "type": "Identifier",
    "value": "r8",
    "start": 7013,
    "end": 7015
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7015,
    "end": 7016
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7016,
    "end": 7020
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7020,
    "end": 7021
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7021,
    "end": 7030
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7030,
    "end": 7031
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7032,
    "end": 7041
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7041,
    "end": 7042
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7043,
    "end": 7052
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7052,
    "end": 7053
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7053,
    "end": 7054
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7054,
    "end": 7058
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7058,
    "end": 7059
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7059,
    "end": 7068
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7068,
    "end": 7069
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7070,
    "end": 7079
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7079,
    "end": 7080
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7081,
    "end": 7090
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7090,
    "end": 7091
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7091,
    "end": 7092
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7099,
    "end": 7102
  },
  {
    "type": "Identifier",
    "value": "s8",
    "start": 7103,
    "end": 7105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7105,
    "end": 7106
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 7107,
    "end": 7114
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7114,
    "end": 7115
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 7115,
    "end": 7121
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7121,
    "end": 7122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7122,
    "end": 7123
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7124,
    "end": 7127
  },
  {
    "type": "Identifier",
    "value": "s8a",
    "start": 7128,
    "end": 7131
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7132,
    "end": 7133
  },
  {
    "type": "Identifier",
    "value": "s8",
    "start": 7134,
    "end": 7136
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7136,
    "end": 7137
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7137,
    "end": 7141
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7141,
    "end": 7142
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 7142,
    "end": 7155
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7155,
    "end": 7156
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 7157,
    "end": 7170
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7170,
    "end": 7171
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 7172,
    "end": 7185
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7185,
    "end": 7186
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7186,
    "end": 7187
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7197,
    "end": 7200
  },
  {
    "type": "Identifier",
    "value": "s8b",
    "start": 7201,
    "end": 7204
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7205,
    "end": 7206
  },
  {
    "type": "Identifier",
    "value": "s8",
    "start": 7207,
    "end": 7209
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7209,
    "end": 7210
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7210,
    "end": 7214
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7214,
    "end": 7215
  },
  {
    "type": "Identifier",
    "value": "testFunction8P",
    "start": 7215,
    "end": 7229
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7229,
    "end": 7230
  },
  {
    "type": "Identifier",
    "value": "testFunction8P",
    "start": 7231,
    "end": 7245
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7245,
    "end": 7246
  },
  {
    "type": "Identifier",
    "value": "testFunction8P",
    "start": 7247,
    "end": 7261
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7261,
    "end": 7262
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7262,
    "end": 7263
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7273,
    "end": 7276
  },
  {
    "type": "Identifier",
    "value": "s8c",
    "start": 7277,
    "end": 7280
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7281,
    "end": 7282
  },
  {
    "type": "Identifier",
    "value": "s8",
    "start": 7283,
    "end": 7285
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7285,
    "end": 7286
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7286,
    "end": 7290
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7290,
    "end": 7291
  },
  {
    "type": "Identifier",
    "value": "testFunction8P",
    "start": 7291,
    "end": 7305
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7305,
    "end": 7306
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 7307,
    "end": 7320
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7320,
    "end": 7321
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 7322,
    "end": 7335
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7335,
    "end": 7336
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7336,
    "end": 7337
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7347,
    "end": 7350
  },
  {
    "type": "Identifier",
    "value": "s8d",
    "start": 7351,
    "end": 7354
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7355,
    "end": 7356
  },
  {
    "type": "Identifier",
    "value": "s8",
    "start": 7357,
    "end": 7359
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7359,
    "end": 7360
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7360,
    "end": 7364
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7364,
    "end": 7365
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7365,
    "end": 7374
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7374,
    "end": 7375
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7376,
    "end": 7385
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7385,
    "end": 7386
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7387,
    "end": 7396
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7396,
    "end": 7397
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7397,
    "end": 7398
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7398,
    "end": 7402
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7402,
    "end": 7403
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7403,
    "end": 7412
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7412,
    "end": 7413
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7414,
    "end": 7423
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7423,
    "end": 7424
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7425,
    "end": 7434
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7434,
    "end": 7435
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7435,
    "end": 7436
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7444,
    "end": 7447
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 7448,
    "end": 7450
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7450,
    "end": 7451
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 7452,
    "end": 7460
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7460,
    "end": 7461
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 7461,
    "end": 7467
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7467,
    "end": 7468
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7468,
    "end": 7469
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7470,
    "end": 7473
  },
  {
    "type": "Identifier",
    "value": "r9a",
    "start": 7474,
    "end": 7477
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7478,
    "end": 7479
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 7480,
    "end": 7482
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7482,
    "end": 7483
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7483,
    "end": 7487
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7487,
    "end": 7488
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 7488,
    "end": 7501
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7501,
    "end": 7502
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 7503,
    "end": 7516
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7516,
    "end": 7517
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 7518,
    "end": 7531
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7531,
    "end": 7532
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7532,
    "end": 7533
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7543,
    "end": 7546
  },
  {
    "type": "Identifier",
    "value": "r9b",
    "start": 7547,
    "end": 7550
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7551,
    "end": 7552
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 7553,
    "end": 7555
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7555,
    "end": 7556
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7556,
    "end": 7560
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7560,
    "end": 7561
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 7561,
    "end": 7570
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7570,
    "end": 7571
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 7572,
    "end": 7581
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7581,
    "end": 7582
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 7583,
    "end": 7592
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7592,
    "end": 7593
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7593,
    "end": 7594
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7601,
    "end": 7604
  },
  {
    "type": "Identifier",
    "value": "r9c",
    "start": 7605,
    "end": 7608
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7609,
    "end": 7610
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 7611,
    "end": 7613
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7613,
    "end": 7614
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7614,
    "end": 7618
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7618,
    "end": 7619
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7619,
    "end": 7628
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7628,
    "end": 7629
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7630,
    "end": 7639
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7639,
    "end": 7640
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7641,
    "end": 7650
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7650,
    "end": 7651
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7651,
    "end": 7652
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7659,
    "end": 7662
  },
  {
    "type": "Identifier",
    "value": "r9d",
    "start": 7663,
    "end": 7666
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7667,
    "end": 7668
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 7669,
    "end": 7671
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7671,
    "end": 7672
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7672,
    "end": 7676
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7676,
    "end": 7677
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 7677,
    "end": 7689
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7689,
    "end": 7690
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 7691,
    "end": 7700
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7700,
    "end": 7701
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7702,
    "end": 7711
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7711,
    "end": 7712
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7712,
    "end": 7713
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7723,
    "end": 7726
  },
  {
    "type": "Identifier",
    "value": "r9e",
    "start": 7727,
    "end": 7730
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7731,
    "end": 7732
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 7733,
    "end": 7735
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7735,
    "end": 7736
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7736,
    "end": 7740
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7740,
    "end": 7741
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 7741,
    "end": 7753
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7753,
    "end": 7754
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7755,
    "end": 7764
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7764,
    "end": 7765
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 7766,
    "end": 7775
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7775,
    "end": 7776
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7776,
    "end": 7777
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7777,
    "end": 7781
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7781,
    "end": 7782
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 7782,
    "end": 7791
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7791,
    "end": 7792
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 7793,
    "end": 7802
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7802,
    "end": 7803
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 7804,
    "end": 7813
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7813,
    "end": 7814
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7814,
    "end": 7815
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7822,
    "end": 7825
  },
  {
    "type": "Identifier",
    "value": "s9",
    "start": 7826,
    "end": 7828
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7828,
    "end": 7829
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 7830,
    "end": 7837
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7837,
    "end": 7838
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 7838,
    "end": 7844
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7844,
    "end": 7845
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7845,
    "end": 7846
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7847,
    "end": 7850
  },
  {
    "type": "Identifier",
    "value": "s9a",
    "start": 7851,
    "end": 7854
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7855,
    "end": 7856
  },
  {
    "type": "Identifier",
    "value": "s9",
    "start": 7857,
    "end": 7859
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7859,
    "end": 7860
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7860,
    "end": 7864
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7864,
    "end": 7865
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 7865,
    "end": 7878
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7878,
    "end": 7879
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 7880,
    "end": 7893
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7893,
    "end": 7894
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 7895,
    "end": 7908
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7908,
    "end": 7909
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7909,
    "end": 7910
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7920,
    "end": 7923
  },
  {
    "type": "Identifier",
    "value": "s9b",
    "start": 7924,
    "end": 7927
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7928,
    "end": 7929
  },
  {
    "type": "Identifier",
    "value": "s9",
    "start": 7930,
    "end": 7932
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7932,
    "end": 7933
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7933,
    "end": 7937
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7937,
    "end": 7938
  },
  {
    "type": "Identifier",
    "value": "testFunction9P",
    "start": 7938,
    "end": 7952
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7952,
    "end": 7953
  },
  {
    "type": "Identifier",
    "value": "testFunction9P",
    "start": 7954,
    "end": 7968
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7968,
    "end": 7969
  },
  {
    "type": "Identifier",
    "value": "testFunction9P",
    "start": 7970,
    "end": 7984
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7984,
    "end": 7985
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7985,
    "end": 7986
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7996,
    "end": 7999
  },
  {
    "type": "Identifier",
    "value": "s9c",
    "start": 8000,
    "end": 8003
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8004,
    "end": 8005
  },
  {
    "type": "Identifier",
    "value": "s9",
    "start": 8006,
    "end": 8008
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8008,
    "end": 8009
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8009,
    "end": 8013
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8013,
    "end": 8014
  },
  {
    "type": "Identifier",
    "value": "testFunction9P",
    "start": 8014,
    "end": 8028
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8028,
    "end": 8029
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 8030,
    "end": 8043
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8043,
    "end": 8044
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 8045,
    "end": 8058
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8058,
    "end": 8059
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8059,
    "end": 8060
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8070,
    "end": 8073
  },
  {
    "type": "Identifier",
    "value": "s9d",
    "start": 8074,
    "end": 8077
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8078,
    "end": 8079
  },
  {
    "type": "Identifier",
    "value": "s9",
    "start": 8080,
    "end": 8082
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8082,
    "end": 8083
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8083,
    "end": 8087
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8087,
    "end": 8088
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 8088,
    "end": 8096
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8096,
    "end": 8097
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 8098,
    "end": 8106
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8106,
    "end": 8107
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 8108,
    "end": 8116
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8116,
    "end": 8117
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8117,
    "end": 8118
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8125,
    "end": 8128
  },
  {
    "type": "Identifier",
    "value": "s9e",
    "start": 8129,
    "end": 8132
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8133,
    "end": 8134
  },
  {
    "type": "Identifier",
    "value": "s9",
    "start": 8135,
    "end": 8137
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8137,
    "end": 8138
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8138,
    "end": 8142
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8142,
    "end": 8143
  },
  {
    "type": "Identifier",
    "value": "nPromise",
    "start": 8143,
    "end": 8151
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8151,
    "end": 8152
  },
  {
    "type": "Identifier",
    "value": "nPromise",
    "start": 8153,
    "end": 8161
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8161,
    "end": 8162
  },
  {
    "type": "Identifier",
    "value": "nPromise",
    "start": 8163,
    "end": 8171
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8171,
    "end": 8172
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8172,
    "end": 8173
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8180,
    "end": 8183
  },
  {
    "type": "Identifier",
    "value": "s9f",
    "start": 8184,
    "end": 8187
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8188,
    "end": 8189
  },
  {
    "type": "Identifier",
    "value": "s9",
    "start": 8190,
    "end": 8192
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8192,
    "end": 8193
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8193,
    "end": 8197
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8197,
    "end": 8198
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 8198,
    "end": 8210
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8210,
    "end": 8211
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8212,
    "end": 8221
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8221,
    "end": 8222
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 8223,
    "end": 8232
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8232,
    "end": 8233
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8233,
    "end": 8234
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8244,
    "end": 8247
  },
  {
    "type": "Identifier",
    "value": "s9g",
    "start": 8248,
    "end": 8251
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8252,
    "end": 8253
  },
  {
    "type": "Identifier",
    "value": "s9",
    "start": 8254,
    "end": 8256
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8256,
    "end": 8257
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8257,
    "end": 8261
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8261,
    "end": 8262
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 8262,
    "end": 8274
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8274,
    "end": 8275
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 8276,
    "end": 8285
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8285,
    "end": 8286
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8287,
    "end": 8296
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8296,
    "end": 8297
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8297,
    "end": 8298
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8298,
    "end": 8302
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8302,
    "end": 8303
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8303,
    "end": 8312
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8312,
    "end": 8313
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8314,
    "end": 8323
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8323,
    "end": 8324
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8325,
    "end": 8334
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8334,
    "end": 8335
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8335,
    "end": 8336
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8344,
    "end": 8347
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 8348,
    "end": 8351
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8352,
    "end": 8353
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 8354,
    "end": 8368
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8368,
    "end": 8369
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 8369,
    "end": 8370
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 8371,
    "end": 8373
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 8374,
    "end": 8375
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8375,
    "end": 8376
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8376,
    "end": 8377
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8378,
    "end": 8381
  },
  {
    "type": "Identifier",
    "value": "r10a",
    "start": 8382,
    "end": 8386
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8387,
    "end": 8388
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 8389,
    "end": 8392
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8392,
    "end": 8393
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8393,
    "end": 8397
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8397,
    "end": 8398
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 8398,
    "end": 8412
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8412,
    "end": 8413
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 8414,
    "end": 8428
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8428,
    "end": 8429
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 8430,
    "end": 8444
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8444,
    "end": 8445
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8445,
    "end": 8446
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8453,
    "end": 8456
  },
  {
    "type": "Identifier",
    "value": "r10b",
    "start": 8457,
    "end": 8461
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8462,
    "end": 8463
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 8464,
    "end": 8467
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8467,
    "end": 8468
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8468,
    "end": 8472
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8472,
    "end": 8473
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8473,
    "end": 8482
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8482,
    "end": 8483
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8484,
    "end": 8493
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8493,
    "end": 8494
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8495,
    "end": 8504
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8504,
    "end": 8505
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8505,
    "end": 8506
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8513,
    "end": 8516
  },
  {
    "type": "Identifier",
    "value": "r10c",
    "start": 8517,
    "end": 8521
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8522,
    "end": 8523
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 8524,
    "end": 8527
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8527,
    "end": 8528
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8528,
    "end": 8532
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8532,
    "end": 8533
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 8533,
    "end": 8542
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8542,
    "end": 8543
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 8544,
    "end": 8553
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8553,
    "end": 8554
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 8555,
    "end": 8564
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8564,
    "end": 8565
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8565,
    "end": 8566
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8573,
    "end": 8576
  },
  {
    "type": "Identifier",
    "value": "r10d",
    "start": 8577,
    "end": 8581
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8582,
    "end": 8583
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 8584,
    "end": 8587
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8587,
    "end": 8588
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8588,
    "end": 8592
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8592,
    "end": 8593
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 8593,
    "end": 8605
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8605,
    "end": 8606
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8607,
    "end": 8616
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8616,
    "end": 8617
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 8618,
    "end": 8627
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8627,
    "end": 8628
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8628,
    "end": 8629
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8639,
    "end": 8642
  },
  {
    "type": "Identifier",
    "value": "r10e",
    "start": 8643,
    "end": 8647
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8648,
    "end": 8649
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 8650,
    "end": 8653
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8653,
    "end": 8654
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8654,
    "end": 8658
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8658,
    "end": 8659
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 8659,
    "end": 8671
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8671,
    "end": 8672
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 8673,
    "end": 8682
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8682,
    "end": 8683
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8684,
    "end": 8693
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8693,
    "end": 8694
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8694,
    "end": 8695
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8695,
    "end": 8699
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8699,
    "end": 8700
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8700,
    "end": 8709
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8709,
    "end": 8710
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8711,
    "end": 8720
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8720,
    "end": 8721
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8722,
    "end": 8731
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8731,
    "end": 8732
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8732,
    "end": 8733
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8740,
    "end": 8743
  },
  {
    "type": "Identifier",
    "value": "s10",
    "start": 8744,
    "end": 8747
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8748,
    "end": 8749
  },
  {
    "type": "Identifier",
    "value": "testFunction10P",
    "start": 8750,
    "end": 8765
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8765,
    "end": 8766
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 8766,
    "end": 8767
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 8768,
    "end": 8770
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 8771,
    "end": 8772
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8772,
    "end": 8773
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8773,
    "end": 8774
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8775,
    "end": 8778
  },
  {
    "type": "Identifier",
    "value": "s10a",
    "start": 8779,
    "end": 8783
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8784,
    "end": 8785
  },
  {
    "type": "Identifier",
    "value": "s10",
    "start": 8786,
    "end": 8789
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8789,
    "end": 8790
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8790,
    "end": 8794
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8794,
    "end": 8795
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 8795,
    "end": 8809
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8809,
    "end": 8810
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 8811,
    "end": 8825
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8825,
    "end": 8826
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 8827,
    "end": 8841
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8841,
    "end": 8842
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8842,
    "end": 8843
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8850,
    "end": 8853
  },
  {
    "type": "Identifier",
    "value": "s10b",
    "start": 8854,
    "end": 8858
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8859,
    "end": 8860
  },
  {
    "type": "Identifier",
    "value": "s10",
    "start": 8861,
    "end": 8864
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8864,
    "end": 8865
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8865,
    "end": 8869
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8869,
    "end": 8870
  },
  {
    "type": "Identifier",
    "value": "testFunction10P",
    "start": 8870,
    "end": 8885
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8885,
    "end": 8886
  },
  {
    "type": "Identifier",
    "value": "testFunction10P",
    "start": 8887,
    "end": 8902
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8902,
    "end": 8903
  },
  {
    "type": "Identifier",
    "value": "testFunction10P",
    "start": 8904,
    "end": 8919
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8919,
    "end": 8920
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8920,
    "end": 8921
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8928,
    "end": 8931
  },
  {
    "type": "Identifier",
    "value": "s10c",
    "start": 8932,
    "end": 8936
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8937,
    "end": 8938
  },
  {
    "type": "Identifier",
    "value": "s10",
    "start": 8939,
    "end": 8942
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8942,
    "end": 8943
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8943,
    "end": 8947
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8947,
    "end": 8948
  },
  {
    "type": "Identifier",
    "value": "testFunction10P",
    "start": 8948,
    "end": 8963
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8963,
    "end": 8964
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 8965,
    "end": 8979
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8979,
    "end": 8980
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 8981,
    "end": 8995
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8995,
    "end": 8996
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8996,
    "end": 8997
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9004,
    "end": 9007
  },
  {
    "type": "Identifier",
    "value": "s10d",
    "start": 9008,
    "end": 9012
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9013,
    "end": 9014
  },
  {
    "type": "Identifier",
    "value": "s10",
    "start": 9015,
    "end": 9018
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9018,
    "end": 9019
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9019,
    "end": 9023
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9023,
    "end": 9024
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 9024,
    "end": 9032
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9032,
    "end": 9033
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 9034,
    "end": 9042
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9042,
    "end": 9043
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 9044,
    "end": 9052
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9052,
    "end": 9053
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9053,
    "end": 9054
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9061,
    "end": 9064
  },
  {
    "type": "Identifier",
    "value": "s10e",
    "start": 9065,
    "end": 9069
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9070,
    "end": 9071
  },
  {
    "type": "Identifier",
    "value": "s10",
    "start": 9072,
    "end": 9075
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9075,
    "end": 9076
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9076,
    "end": 9080
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9080,
    "end": 9081
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 9081,
    "end": 9090
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9090,
    "end": 9091
  },
  {
    "type": "Identifier",
    "value": "nPromise",
    "start": 9092,
    "end": 9100
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9100,
    "end": 9101
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 9102,
    "end": 9111
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9111,
    "end": 9112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9112,
    "end": 9113
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9120,
    "end": 9123
  },
  {
    "type": "Identifier",
    "value": "s10f",
    "start": 9124,
    "end": 9128
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9129,
    "end": 9130
  },
  {
    "type": "Identifier",
    "value": "s10",
    "start": 9131,
    "end": 9134
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9134,
    "end": 9135
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9135,
    "end": 9139
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9139,
    "end": 9140
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 9140,
    "end": 9153
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9153,
    "end": 9154
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 9155,
    "end": 9164
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9164,
    "end": 9165
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 9166,
    "end": 9175
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9175,
    "end": 9176
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9176,
    "end": 9177
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9187,
    "end": 9190
  },
  {
    "type": "Identifier",
    "value": "s10g",
    "start": 9191,
    "end": 9195
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9196,
    "end": 9197
  },
  {
    "type": "Identifier",
    "value": "s10",
    "start": 9198,
    "end": 9201
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9201,
    "end": 9202
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9202,
    "end": 9206
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9206,
    "end": 9207
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 9207,
    "end": 9220
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9220,
    "end": 9221
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 9222,
    "end": 9231
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9231,
    "end": 9232
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 9233,
    "end": 9242
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9242,
    "end": 9243
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9243,
    "end": 9244
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9244,
    "end": 9248
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9248,
    "end": 9249
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 9249,
    "end": 9257
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9257,
    "end": 9258
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 9259,
    "end": 9268
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9268,
    "end": 9269
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 9270,
    "end": 9279
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9279,
    "end": 9280
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9280,
    "end": 9281
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9289,
    "end": 9292
  },
  {
    "type": "Identifier",
    "value": "r11",
    "start": 9293,
    "end": 9296
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9296,
    "end": 9297
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 9298,
    "end": 9306
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 9306,
    "end": 9307
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 9307,
    "end": 9313
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 9313,
    "end": 9314
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9314,
    "end": 9315
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9316,
    "end": 9319
  },
  {
    "type": "Identifier",
    "value": "r11a",
    "start": 9320,
    "end": 9324
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9325,
    "end": 9326
  },
  {
    "type": "Identifier",
    "value": "r11",
    "start": 9327,
    "end": 9330
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9330,
    "end": 9331
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9331,
    "end": 9335
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9335,
    "end": 9336
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 9336,
    "end": 9350
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9350,
    "end": 9351
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 9352,
    "end": 9366
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9366,
    "end": 9367
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 9368,
    "end": 9382
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9382,
    "end": 9383
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9383,
    "end": 9384
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9394,
    "end": 9397
  },
  {
    "type": "Identifier",
    "value": "s11",
    "start": 9398,
    "end": 9401
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9401,
    "end": 9402
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 9403,
    "end": 9410
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 9410,
    "end": 9411
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 9411,
    "end": 9417
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 9417,
    "end": 9418
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9418,
    "end": 9419
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9420,
    "end": 9423
  },
  {
    "type": "Identifier",
    "value": "s11a",
    "start": 9424,
    "end": 9428
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9429,
    "end": 9430
  },
  {
    "type": "Identifier",
    "value": "s11",
    "start": 9431,
    "end": 9434
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9434,
    "end": 9435
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9435,
    "end": 9439
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9439,
    "end": 9440
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 9440,
    "end": 9454
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9454,
    "end": 9455
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 9456,
    "end": 9470
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9470,
    "end": 9471
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 9472,
    "end": 9486
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9486,
    "end": 9487
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9487,
    "end": 9488
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9495,
    "end": 9498
  },
  {
    "type": "Identifier",
    "value": "s11b",
    "start": 9499,
    "end": 9503
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9504,
    "end": 9505
  },
  {
    "type": "Identifier",
    "value": "s11",
    "start": 9506,
    "end": 9509
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9509,
    "end": 9510
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9510,
    "end": 9514
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9514,
    "end": 9515
  },
  {
    "type": "Identifier",
    "value": "testFunction11P",
    "start": 9515,
    "end": 9530
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9530,
    "end": 9531
  },
  {
    "type": "Identifier",
    "value": "testFunction11P",
    "start": 9532,
    "end": 9547
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9547,
    "end": 9548
  },
  {
    "type": "Identifier",
    "value": "testFunction11P",
    "start": 9549,
    "end": 9564
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9564,
    "end": 9565
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9565,
    "end": 9566
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9573,
    "end": 9576
  },
  {
    "type": "Identifier",
    "value": "s11c",
    "start": 9577,
    "end": 9581
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9582,
    "end": 9583
  },
  {
    "type": "Identifier",
    "value": "s11",
    "start": 9584,
    "end": 9587
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9587,
    "end": 9588
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9588,
    "end": 9592
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9592,
    "end": 9593
  },
  {
    "type": "Identifier",
    "value": "testFunction11P",
    "start": 9593,
    "end": 9608
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9608,
    "end": 9609
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 9610,
    "end": 9624
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9624,
    "end": 9625
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 9626,
    "end": 9640
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9640,
    "end": 9641
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9641,
    "end": 9642
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9650,
    "end": 9653
  },
  {
    "type": "Identifier",
    "value": "r12",
    "start": 9654,
    "end": 9657
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9658,
    "end": 9659
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 9660,
    "end": 9674
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9674,
    "end": 9675
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 9675,
    "end": 9676
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 9677,
    "end": 9679
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 9680,
    "end": 9681
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9681,
    "end": 9682
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9682,
    "end": 9683
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9684,
    "end": 9687
  },
  {
    "type": "Identifier",
    "value": "r12a",
    "start": 9688,
    "end": 9692
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9693,
    "end": 9694
  },
  {
    "type": "Identifier",
    "value": "r12",
    "start": 9695,
    "end": 9698
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9698,
    "end": 9699
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9699,
    "end": 9703
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9703,
    "end": 9704
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 9704,
    "end": 9718
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9718,
    "end": 9719
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 9720,
    "end": 9734
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9734,
    "end": 9735
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 9736,
    "end": 9750
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9750,
    "end": 9751
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9751,
    "end": 9752
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9759,
    "end": 9762
  },
  {
    "type": "Identifier",
    "value": "s12",
    "start": 9763,
    "end": 9766
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9767,
    "end": 9768
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 9769,
    "end": 9783
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9783,
    "end": 9784
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 9784,
    "end": 9785
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 9786,
    "end": 9788
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 9789,
    "end": 9790
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9790,
    "end": 9791
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9791,
    "end": 9792
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9793,
    "end": 9796
  },
  {
    "type": "Identifier",
    "value": "s12a",
    "start": 9797,
    "end": 9801
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9802,
    "end": 9803
  },
  {
    "type": "Identifier",
    "value": "s12",
    "start": 9804,
    "end": 9807
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9807,
    "end": 9808
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9808,
    "end": 9812
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9812,
    "end": 9813
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 9813,
    "end": 9827
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9827,
    "end": 9828
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 9829,
    "end": 9843
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9843,
    "end": 9844
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 9845,
    "end": 9859
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9859,
    "end": 9860
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9860,
    "end": 9861
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9868,
    "end": 9871
  },
  {
    "type": "Identifier",
    "value": "s12b",
    "start": 9872,
    "end": 9876
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9877,
    "end": 9878
  },
  {
    "type": "Identifier",
    "value": "s12",
    "start": 9879,
    "end": 9882
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9882,
    "end": 9883
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9883,
    "end": 9887
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9887,
    "end": 9888
  },
  {
    "type": "Identifier",
    "value": "testFunction12P",
    "start": 9888,
    "end": 9903
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9903,
    "end": 9904
  },
  {
    "type": "Identifier",
    "value": "testFunction12P",
    "start": 9905,
    "end": 9920
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9920,
    "end": 9921
  },
  {
    "type": "Identifier",
    "value": "testFunction12P",
    "start": 9922,
    "end": 9937
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9937,
    "end": 9938
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9938,
    "end": 9939
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9946,
    "end": 9949
  },
  {
    "type": "Identifier",
    "value": "s12c",
    "start": 9950,
    "end": 9954
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9955,
    "end": 9956
  },
  {
    "type": "Identifier",
    "value": "s12",
    "start": 9957,
    "end": 9960
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9960,
    "end": 9961
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9961,
    "end": 9965
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9965,
    "end": 9966
  },
  {
    "type": "Identifier",
    "value": "testFunction12P",
    "start": 9966,
    "end": 9981
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9981,
    "end": 9982
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 9983,
    "end": 9997
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9997,
    "end": 9998
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 9999,
    "end": 10013
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10013,
    "end": 10014
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10014,
    "end": 10015
  }
]
```
