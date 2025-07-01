__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "Windows",
          "optional": false,
          "typeAnnotation": null,
          "start": 18,
          "end": 25
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foundation",
          "optional": false,
          "typeAnnotation": null,
          "start": 26,
          "end": 36
        },
        "start": 18,
        "end": 36
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IPromise",
              "optional": false,
              "typeAnnotation": null,
              "start": 53,
              "end": 61
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TResult",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 62,
                    "end": 69
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 62,
                  "end": 69
                }
              ],
              "start": 61,
              "end": 70
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
                    "start": 81,
                    "end": 85
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
                          "start": 86,
                          "end": 87
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 86,
                        "end": 87
                      }
                    ],
                    "start": 85,
                    "end": 88
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
                                    "name": "TResult",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 107,
                                    "end": 114
                                  },
                                  "typeArguments": null,
                                  "start": 107,
                                  "end": 114
                                },
                                "start": 105,
                                "end": 114
                              },
                              "start": 100,
                              "end": 114
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
                                "start": 119,
                                "end": 127
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
                                      "start": 128,
                                      "end": 129
                                    },
                                    "typeArguments": null,
                                    "start": 128,
                                    "end": 129
                                  }
                                ],
                                "start": 127,
                                "end": 130
                              },
                              "start": 119,
                              "end": 130
                            },
                            "start": 116,
                            "end": 130
                          },
                          "start": 99,
                          "end": 130
                        },
                        "start": 97,
                        "end": 130
                      },
                      "start": 89,
                      "end": 130
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
                                  "start": 148,
                                  "end": 151
                                },
                                "start": 146,
                                "end": 151
                              },
                              "start": 141,
                              "end": 151
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
                                "start": 156,
                                "end": 164
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
                                      "start": 165,
                                      "end": 166
                                    },
                                    "typeArguments": null,
                                    "start": 165,
                                    "end": 166
                                  }
                                ],
                                "start": 164,
                                "end": 167
                              },
                              "start": 156,
                              "end": 167
                            },
                            "start": 153,
                            "end": 167
                          },
                          "start": 140,
                          "end": 167
                        },
                        "start": 138,
                        "end": 167
                      },
                      "start": 132,
                      "end": 167
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
                                  "start": 191,
                                  "end": 194
                                },
                                "start": 189,
                                "end": 194
                              },
                              "start": 181,
                              "end": 194
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 199,
                              "end": 203
                            },
                            "start": 196,
                            "end": 203
                          },
                          "start": 180,
                          "end": 203
                        },
                        "start": 178,
                        "end": 203
                      },
                      "start": 169,
                      "end": 203
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
                        "start": 206,
                        "end": 214
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
                              "start": 215,
                              "end": 216
                            },
                            "typeArguments": null,
                            "start": 215,
                            "end": 216
                          }
                        ],
                        "start": 214,
                        "end": 217
                      },
                      "start": 206,
                      "end": 217
                    },
                    "start": 204,
                    "end": 217
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 81,
                  "end": 218
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 227,
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
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 232,
                          "end": 233
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 232,
                        "end": 233
                      }
                    ],
                    "start": 231,
                    "end": 234
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
                                    "name": "TResult",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 253,
                                    "end": 260
                                  },
                                  "typeArguments": null,
                                  "start": 253,
                                  "end": 260
                                },
                                "start": 251,
                                "end": 260
                              },
                              "start": 246,
                              "end": 260
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
                                "start": 265,
                                "end": 273
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
                                      "start": 274,
                                      "end": 275
                                    },
                                    "typeArguments": null,
                                    "start": 274,
                                    "end": 275
                                  }
                                ],
                                "start": 273,
                                "end": 276
                              },
                              "start": 265,
                              "end": 276
                            },
                            "start": 262,
                            "end": 276
                          },
                          "start": 245,
                          "end": 276
                        },
                        "start": 243,
                        "end": 276
                      },
                      "start": 235,
                      "end": 276
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
                                  "start": 294,
                                  "end": 297
                                },
                                "start": 292,
                                "end": 297
                              },
                              "start": 287,
                              "end": 297
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
                                "start": 302,
                                "end": 303
                              },
                              "typeArguments": null,
                              "start": 302,
                              "end": 303
                            },
                            "start": 299,
                            "end": 303
                          },
                          "start": 286,
                          "end": 303
                        },
                        "start": 284,
                        "end": 303
                      },
                      "start": 278,
                      "end": 303
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
                                  "start": 327,
                                  "end": 330
                                },
                                "start": 325,
                                "end": 330
                              },
                              "start": 317,
                              "end": 330
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 335,
                              "end": 339
                            },
                            "start": 332,
                            "end": 339
                          },
                          "start": 316,
                          "end": 339
                        },
                        "start": 314,
                        "end": 339
                      },
                      "start": 305,
                      "end": 339
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
                        "start": 342,
                        "end": 350
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
                              "start": 351,
                              "end": 352
                            },
                            "typeArguments": null,
                            "start": 351,
                            "end": 352
                          }
                        ],
                        "start": 350,
                        "end": 353
                      },
                      "start": 342,
                      "end": 353
                    },
                    "start": 340,
                    "end": 353
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 227,
                  "end": 354
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 363,
                    "end": 367
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
                          "start": 368,
                          "end": 369
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 368,
                        "end": 369
                      }
                    ],
                    "start": 367,
                    "end": 370
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
                                    "name": "TResult",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 389,
                                    "end": 396
                                  },
                                  "typeArguments": null,
                                  "start": 389,
                                  "end": 396
                                },
                                "start": 387,
                                "end": 396
                              },
                              "start": 382,
                              "end": 396
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
                                "start": 401,
                                "end": 402
                              },
                              "typeArguments": null,
                              "start": 401,
                              "end": 402
                            },
                            "start": 398,
                            "end": 402
                          },
                          "start": 381,
                          "end": 402
                        },
                        "start": 379,
                        "end": 402
                      },
                      "start": 371,
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
                  "start": 363,
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
                    "start": 499,
                    "end": 503
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
                          "start": 504,
                          "end": 505
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 504,
                        "end": 505
                      }
                    ],
                    "start": 503,
                    "end": 506
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
                                    "name": "TResult",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 525,
                                    "end": 532
                                  },
                                  "typeArguments": null,
                                  "start": 525,
                                  "end": 532
                                },
                                "start": 523,
                                "end": 532
                              },
                              "start": 518,
                              "end": 532
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
                                "start": 537,
                                "end": 538
                              },
                              "typeArguments": null,
                              "start": 537,
                              "end": 538
                            },
                            "start": 534,
                            "end": 538
                          },
                          "start": 517,
                          "end": 538
                        },
                        "start": 515,
                        "end": 538
                      },
                      "start": 507,
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
                  "start": 499,
                  "end": 616
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "done",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 625,
                    "end": 629
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
                          "start": 630,
                          "end": 631
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 630,
                        "end": 631
                      }
                    ],
                    "start": 629,
                    "end": 632
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
                                    "name": "TResult",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 651,
                                    "end": 658
                                  },
                                  "typeArguments": null,
                                  "start": 651,
                                  "end": 658
                                },
                                "start": 649,
                                "end": 658
                              },
                              "start": 644,
                              "end": 658
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 663,
                              "end": 666
                            },
                            "start": 660,
                            "end": 666
                          },
                          "start": 643,
                          "end": 666
                        },
                        "start": 641,
                        "end": 666
                      },
                      "start": 633,
                      "end": 666
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
                                  "start": 684,
                                  "end": 687
                                },
                                "start": 682,
                                "end": 687
                              },
                              "start": 677,
                              "end": 687
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 692,
                              "end": 695
                            },
                            "start": 689,
                            "end": 695
                          },
                          "start": 676,
                          "end": 695
                        },
                        "start": 674,
                        "end": 695
                      },
                      "start": 668,
                      "end": 695
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
                                  "start": 719,
                                  "end": 722
                                },
                                "start": 717,
                                "end": 722
                              },
                              "start": 709,
                              "end": 722
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 727,
                              "end": 731
                            },
                            "start": 724,
                            "end": 731
                          },
                          "start": 708,
                          "end": 731
                        },
                        "start": 706,
                        "end": 731
                      },
                      "start": 697,
                      "end": 731
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 734,
                      "end": 738
                    },
                    "start": 732,
                    "end": 738
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 625,
                  "end": 739
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cancel",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 749,
                    "end": 755
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
                      "start": 759,
                      "end": 763
                    },
                    "start": 757,
                    "end": 763
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 749,
                  "end": 764
                }
              ],
              "start": 71,
              "end": 770
            },
            "declare": false,
            "start": 43,
            "end": 770
          }
        ],
        "start": 37,
        "end": 772
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 772
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "sample",
        "optional": false,
        "typeAnnotation": null,
        "start": 789,
        "end": 795
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "promise",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Windows",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 805,
                    "end": 812
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Foundation",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 813,
                    "end": 823
                  },
                  "start": 805,
                  "end": 823
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 824,
                  "end": 832
                },
                "start": 805,
                "end": 832
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 833,
                    "end": 839
                  }
                ],
                "start": 832,
                "end": 840
              },
              "start": 805,
              "end": 840
            },
            "start": 803,
            "end": 840
          },
          "start": 796,
          "end": 840
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "number",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 852,
                  "end": 858
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 867,
                    "end": 874
                  },
                  "start": 861,
                  "end": 874
                },
                "definite": false,
                "start": 852,
                "end": 874
              }
            ],
            "declare": false,
            "start": 848,
            "end": 875
          }
        ],
        "start": 842,
        "end": 877
      },
      "expression": false,
      "start": 774,
      "end": 877
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "resolve1",
        "optional": false,
        "typeAnnotation": null,
        "start": 897,
        "end": 905
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
              "start": 906,
              "end": 907
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 906,
            "end": 907
          }
        ],
        "start": 905,
        "end": 908
      },
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
                "start": 916,
                "end": 917
              },
              "typeArguments": null,
              "start": 916,
              "end": 917
            },
            "start": 914,
            "end": 917
          },
          "start": 909,
          "end": 917
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
            "start": 920,
            "end": 927
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
                  "start": 928,
                  "end": 929
                },
                "typeArguments": null,
                "start": 928,
                "end": 929
              }
            ],
            "start": 927,
            "end": 930
          },
          "start": 920,
          "end": 930
        },
        "start": 918,
        "end": 930
      },
      "body": null,
      "expression": false,
      "start": 880,
      "end": 931
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "resolve2",
        "optional": false,
        "typeAnnotation": null,
        "start": 949,
        "end": 957
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
              "start": 958,
              "end": 959
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 958,
            "end": 959
          }
        ],
        "start": 957,
        "end": 960
      },
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
                "start": 968,
                "end": 969
              },
              "typeArguments": null,
              "start": 968,
              "end": 969
            },
            "start": 966,
            "end": 969
          },
          "start": 961,
          "end": 969
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "Windows",
                "optional": false,
                "typeAnnotation": null,
                "start": 972,
                "end": 979
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foundation",
                "optional": false,
                "typeAnnotation": null,
                "start": 980,
                "end": 990
              },
              "start": 972,
              "end": 990
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "IPromise",
              "optional": false,
              "typeAnnotation": null,
              "start": 991,
              "end": 999
            },
            "start": 972,
            "end": 999
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
                  "start": 1000,
                  "end": 1001
                },
                "typeArguments": null,
                "start": 1000,
                "end": 1001
              }
            ],
            "start": 999,
            "end": 1002
          },
          "start": 972,
          "end": 1002
        },
        "start": 970,
        "end": 1002
      },
      "body": null,
      "expression": false,
      "start": 932,
      "end": 1003
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "sample2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1020,
        "end": 1027
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1032,
              "end": 1038
            },
            "start": 1030,
            "end": 1038
          },
          "start": 1028,
          "end": 1038
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1050,
                  "end": 1052
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1061,
                      "end": 1069
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1070,
                        "end": 1071
                      }
                    ],
                    "optional": false,
                    "start": 1061,
                    "end": 1072
                  },
                  "start": 1055,
                  "end": 1072
                },
                "definite": false,
                "start": 1050,
                "end": 1072
              }
            ],
            "declare": false,
            "start": 1046,
            "end": 1073
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1082,
                  "end": 1084
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1093,
                      "end": 1101
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1102,
                        "end": 1103
                      }
                    ],
                    "optional": false,
                    "start": 1093,
                    "end": 1104
                  },
                  "start": 1087,
                  "end": 1104
                },
                "definite": false,
                "start": 1082,
                "end": 1104
              }
            ],
            "declare": false,
            "start": 1078,
            "end": 1105
          }
        ],
        "start": 1040,
        "end": 1107
      },
      "expression": false,
      "start": 1005,
      "end": 1107
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1107
}
```
