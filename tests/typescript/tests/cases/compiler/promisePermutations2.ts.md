__ESTREE_TEST__:PASS:
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
