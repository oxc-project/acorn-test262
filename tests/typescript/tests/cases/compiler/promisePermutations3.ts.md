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
        "start": 88,
        "end": 95
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
              "start": 96,
              "end": 97
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 96,
            "end": 97
          }
        ],
        "start": 95,
        "end": 98
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
              "start": 105,
              "end": 109
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
                    "start": 110,
                    "end": 111
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 110,
                  "end": 111
                }
              ],
              "start": 109,
              "end": 112
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
                              "start": 131,
                              "end": 132
                            },
                            "typeArguments": null,
                            "start": 131,
                            "end": 132
                          },
                          "start": 129,
                          "end": 132
                        },
                        "start": 124,
                        "end": 132
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
                          "start": 137,
                          "end": 144
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
                                "start": 145,
                                "end": 146
                              },
                              "typeArguments": null,
                              "start": 145,
                              "end": 146
                            }
                          ],
                          "start": 144,
                          "end": 147
                        },
                        "start": 137,
                        "end": 147
                      },
                      "start": 134,
                      "end": 147
                    },
                    "start": 123,
                    "end": 147
                  },
                  "start": 121,
                  "end": 147
                },
                "start": 113,
                "end": 147
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
                            "start": 165,
                            "end": 168
                          },
                          "start": 163,
                          "end": 168
                        },
                        "start": 158,
                        "end": 168
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
                          "start": 173,
                          "end": 180
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
                                "start": 181,
                                "end": 182
                              },
                              "typeArguments": null,
                              "start": 181,
                              "end": 182
                            }
                          ],
                          "start": 180,
                          "end": 183
                        },
                        "start": 173,
                        "end": 183
                      },
                      "start": 170,
                      "end": 183
                    },
                    "start": 157,
                    "end": 183
                  },
                  "start": 155,
                  "end": 183
                },
                "start": 149,
                "end": 183
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
                            "start": 207,
                            "end": 210
                          },
                          "start": 205,
                          "end": 210
                        },
                        "start": 197,
                        "end": 210
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 215,
                        "end": 219
                      },
                      "start": 212,
                      "end": 219
                    },
                    "start": 196,
                    "end": 219
                  },
                  "start": 194,
                  "end": 219
                },
                "start": 185,
                "end": 219
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
                  "start": 222,
                  "end": 229
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
                        "start": 230,
                        "end": 231
                      },
                      "typeArguments": null,
                      "start": 230,
                      "end": 231
                    }
                  ],
                  "start": 229,
                  "end": 232
                },
                "start": 222,
                "end": 232
              },
              "start": 220,
              "end": 232
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 105,
            "end": 233
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 238,
              "end": 242
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
                    "start": 243,
                    "end": 244
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 243,
                  "end": 244
                }
              ],
              "start": 242,
              "end": 245
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
                              "start": 264,
                              "end": 265
                            },
                            "typeArguments": null,
                            "start": 264,
                            "end": 265
                          },
                          "start": 262,
                          "end": 265
                        },
                        "start": 257,
                        "end": 265
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
                          "start": 270,
                          "end": 277
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
                                "start": 278,
                                "end": 279
                              },
                              "typeArguments": null,
                              "start": 278,
                              "end": 279
                            }
                          ],
                          "start": 277,
                          "end": 280
                        },
                        "start": 270,
                        "end": 280
                      },
                      "start": 267,
                      "end": 280
                    },
                    "start": 256,
                    "end": 280
                  },
                  "start": 254,
                  "end": 280
                },
                "start": 246,
                "end": 280
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
                            "start": 298,
                            "end": 301
                          },
                          "start": 296,
                          "end": 301
                        },
                        "start": 291,
                        "end": 301
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
                          "start": 306,
                          "end": 307
                        },
                        "typeArguments": null,
                        "start": 306,
                        "end": 307
                      },
                      "start": 303,
                      "end": 307
                    },
                    "start": 290,
                    "end": 307
                  },
                  "start": 288,
                  "end": 307
                },
                "start": 282,
                "end": 307
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
                            "start": 331,
                            "end": 334
                          },
                          "start": 329,
                          "end": 334
                        },
                        "start": 321,
                        "end": 334
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 339,
                        "end": 343
                      },
                      "start": 336,
                      "end": 343
                    },
                    "start": 320,
                    "end": 343
                  },
                  "start": 318,
                  "end": 343
                },
                "start": 309,
                "end": 343
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
                  "start": 346,
                  "end": 353
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
                        "start": 354,
                        "end": 355
                      },
                      "typeArguments": null,
                      "start": 354,
                      "end": 355
                    }
                  ],
                  "start": 353,
                  "end": 356
                },
                "start": 346,
                "end": 356
              },
              "start": 344,
              "end": 356
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 238,
            "end": 357
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 362,
              "end": 366
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
                    "start": 367,
                    "end": 368
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 367,
                  "end": 368
                }
              ],
              "start": 366,
              "end": 369
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
                              "start": 388,
                              "end": 389
                            },
                            "typeArguments": null,
                            "start": 388,
                            "end": 389
                          },
                          "start": 386,
                          "end": 389
                        },
                        "start": 381,
                        "end": 389
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
                          "start": 394,
                          "end": 395
                        },
                        "typeArguments": null,
                        "start": 394,
                        "end": 395
                      },
                      "start": 391,
                      "end": 395
                    },
                    "start": 380,
                    "end": 395
                  },
                  "start": 378,
                  "end": 395
                },
                "start": 370,
                "end": 395
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
                            "start": 413,
                            "end": 416
                          },
                          "start": 411,
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
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 421,
                          "end": 428
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
                                "start": 429,
                                "end": 430
                              },
                              "typeArguments": null,
                              "start": 429,
                              "end": 430
                            }
                          ],
                          "start": 428,
                          "end": 431
                        },
                        "start": 421,
                        "end": 431
                      },
                      "start": 418,
                      "end": 431
                    },
                    "start": 405,
                    "end": 431
                  },
                  "start": 403,
                  "end": 431
                },
                "start": 397,
                "end": 431
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
                            "start": 455,
                            "end": 458
                          },
                          "start": 453,
                          "end": 458
                        },
                        "start": 445,
                        "end": 458
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 463,
                        "end": 467
                      },
                      "start": 460,
                      "end": 467
                    },
                    "start": 444,
                    "end": 467
                  },
                  "start": 442,
                  "end": 467
                },
                "start": 433,
                "end": 467
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
                  "start": 470,
                  "end": 477
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
                        "start": 478,
                        "end": 479
                      },
                      "typeArguments": null,
                      "start": 478,
                      "end": 479
                    }
                  ],
                  "start": 477,
                  "end": 480
                },
                "start": 470,
                "end": 480
              },
              "start": 468,
              "end": 480
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 362,
            "end": 481
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 486,
              "end": 490
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
                    "start": 491,
                    "end": 492
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 491,
                  "end": 492
                }
              ],
              "start": 490,
              "end": 493
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
                              "start": 512,
                              "end": 513
                            },
                            "typeArguments": null,
                            "start": 512,
                            "end": 513
                          },
                          "start": 510,
                          "end": 513
                        },
                        "start": 505,
                        "end": 513
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
                          "start": 518,
                          "end": 519
                        },
                        "typeArguments": null,
                        "start": 518,
                        "end": 519
                      },
                      "start": 515,
                      "end": 519
                    },
                    "start": 504,
                    "end": 519
                  },
                  "start": 502,
                  "end": 519
                },
                "start": 494,
                "end": 519
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
                            "start": 537,
                            "end": 540
                          },
                          "start": 535,
                          "end": 540
                        },
                        "start": 530,
                        "end": 540
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
                          "start": 545,
                          "end": 546
                        },
                        "typeArguments": null,
                        "start": 545,
                        "end": 546
                      },
                      "start": 542,
                      "end": 546
                    },
                    "start": 529,
                    "end": 546
                  },
                  "start": 527,
                  "end": 546
                },
                "start": 521,
                "end": 546
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
                            "start": 570,
                            "end": 573
                          },
                          "start": 568,
                          "end": 573
                        },
                        "start": 560,
                        "end": 573
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 578,
                        "end": 582
                      },
                      "start": 575,
                      "end": 582
                    },
                    "start": 559,
                    "end": 582
                  },
                  "start": 557,
                  "end": 582
                },
                "start": 548,
                "end": 582
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
                  "start": 585,
                  "end": 592
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
                        "start": 593,
                        "end": 594
                      },
                      "typeArguments": null,
                      "start": 593,
                      "end": 594
                    }
                  ],
                  "start": 592,
                  "end": 595
                },
                "start": 585,
                "end": 595
              },
              "start": 583,
              "end": 595
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 486,
            "end": 596
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "done",
              "optional": false,
              "typeAnnotation": null,
              "start": 601,
              "end": 605
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
                    "start": 606,
                    "end": 607
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 606,
                  "end": 607
                }
              ],
              "start": 605,
              "end": 608
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
                              "start": 627,
                              "end": 628
                            },
                            "typeArguments": null,
                            "start": 627,
                            "end": 628
                          },
                          "start": 625,
                          "end": 628
                        },
                        "start": 620,
                        "end": 628
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 633,
                        "end": 636
                      },
                      "start": 630,
                      "end": 636
                    },
                    "start": 619,
                    "end": 636
                  },
                  "start": 617,
                  "end": 636
                },
                "start": 609,
                "end": 636
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
                            "start": 654,
                            "end": 657
                          },
                          "start": 652,
                          "end": 657
                        },
                        "start": 647,
                        "end": 657
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 662,
                        "end": 665
                      },
                      "start": 659,
                      "end": 665
                    },
                    "start": 646,
                    "end": 665
                  },
                  "start": 644,
                  "end": 665
                },
                "start": 638,
                "end": 665
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
                            "start": 689,
                            "end": 692
                          },
                          "start": 687,
                          "end": 692
                        },
                        "start": 679,
                        "end": 692
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 697,
                        "end": 701
                      },
                      "start": 694,
                      "end": 701
                    },
                    "start": 678,
                    "end": 701
                  },
                  "start": 676,
                  "end": 701
                },
                "start": 667,
                "end": 701
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 704,
                "end": 708
              },
              "start": 702,
              "end": 708
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 601,
            "end": 709
          }
        ],
        "start": 99,
        "end": 711
      },
      "declare": false,
      "start": 78,
      "end": 711
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IPromise",
        "optional": false,
        "typeAnnotation": null,
        "start": 723,
        "end": 731
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
              "start": 732,
              "end": 733
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 732,
            "end": 733
          }
        ],
        "start": 731,
        "end": 734
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
              "start": 741,
              "end": 745
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
                    "start": 746,
                    "end": 747
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 746,
                  "end": 747
                }
              ],
              "start": 745,
              "end": 748
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
                              "start": 767,
                              "end": 768
                            },
                            "typeArguments": null,
                            "start": 767,
                            "end": 768
                          },
                          "start": 765,
                          "end": 768
                        },
                        "start": 760,
                        "end": 768
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
                          "start": 773,
                          "end": 774
                        },
                        "typeArguments": null,
                        "start": 773,
                        "end": 774
                      },
                      "start": 770,
                      "end": 774
                    },
                    "start": 759,
                    "end": 774
                  },
                  "start": 757,
                  "end": 774
                },
                "start": 749,
                "end": 774
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
                            "start": 792,
                            "end": 795
                          },
                          "start": 790,
                          "end": 795
                        },
                        "start": 785,
                        "end": 795
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
                          "start": 800,
                          "end": 801
                        },
                        "typeArguments": null,
                        "start": 800,
                        "end": 801
                      },
                      "start": 797,
                      "end": 801
                    },
                    "start": 784,
                    "end": 801
                  },
                  "start": 782,
                  "end": 801
                },
                "start": 776,
                "end": 801
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
                            "start": 825,
                            "end": 828
                          },
                          "start": 823,
                          "end": 828
                        },
                        "start": 815,
                        "end": 828
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 833,
                        "end": 837
                      },
                      "start": 830,
                      "end": 837
                    },
                    "start": 814,
                    "end": 837
                  },
                  "start": 812,
                  "end": 837
                },
                "start": 803,
                "end": 837
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
                  "start": 840,
                  "end": 848
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
                        "start": 849,
                        "end": 850
                      },
                      "typeArguments": null,
                      "start": 849,
                      "end": 850
                    }
                  ],
                  "start": 848,
                  "end": 851
                },
                "start": 840,
                "end": 851
              },
              "start": 838,
              "end": 851
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 741,
            "end": 852
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "done",
              "optional": false,
              "typeAnnotation": null,
              "start": 857,
              "end": 861
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
                    "start": 864,
                    "end": 865
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 864,
                  "end": 865
                }
              ],
              "start": 863,
              "end": 866
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
                              "start": 885,
                              "end": 886
                            },
                            "typeArguments": null,
                            "start": 885,
                            "end": 886
                          },
                          "start": 883,
                          "end": 886
                        },
                        "start": 878,
                        "end": 886
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 891,
                        "end": 894
                      },
                      "start": 888,
                      "end": 894
                    },
                    "start": 877,
                    "end": 894
                  },
                  "start": 875,
                  "end": 894
                },
                "start": 867,
                "end": 894
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
                            "start": 912,
                            "end": 915
                          },
                          "start": 910,
                          "end": 915
                        },
                        "start": 905,
                        "end": 915
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 920,
                        "end": 923
                      },
                      "start": 917,
                      "end": 923
                    },
                    "start": 904,
                    "end": 923
                  },
                  "start": 902,
                  "end": 923
                },
                "start": 896,
                "end": 923
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
                            "start": 947,
                            "end": 950
                          },
                          "start": 945,
                          "end": 950
                        },
                        "start": 937,
                        "end": 950
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 955,
                        "end": 959
                      },
                      "start": 952,
                      "end": 959
                    },
                    "start": 936,
                    "end": 959
                  },
                  "start": 934,
                  "end": 959
                },
                "start": 925,
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
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 857,
            "end": 967
          }
        ],
        "start": 735,
        "end": 969
      },
      "declare": false,
      "start": 713,
      "end": 969
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 988,
        "end": 1000
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
            "start": 1004,
            "end": 1012
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1013,
                "end": 1019
              }
            ],
            "start": 1012,
            "end": 1020
          },
          "start": 1004,
          "end": 1020
        },
        "start": 1002,
        "end": 1020
      },
      "body": null,
      "expression": false,
      "start": 971,
      "end": 1021
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunctionP",
        "optional": false,
        "typeAnnotation": null,
        "start": 1039,
        "end": 1052
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
            "start": 1056,
            "end": 1063
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1064,
                "end": 1070
              }
            ],
            "start": 1063,
            "end": 1071
          },
          "start": 1056,
          "end": 1071
        },
        "start": 1054,
        "end": 1071
      },
      "body": null,
      "expression": false,
      "start": 1022,
      "end": 1072
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1090,
        "end": 1103
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
            "start": 1107,
            "end": 1115
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
                      "start": 1118,
                      "end": 1119
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1121,
                        "end": 1127
                      },
                      "start": 1119,
                      "end": 1127
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1118,
                    "end": 1127
                  }
                ],
                "start": 1116,
                "end": 1129
              }
            ],
            "start": 1115,
            "end": 1130
          },
          "start": 1107,
          "end": 1130
        },
        "start": 1105,
        "end": 1130
      },
      "body": null,
      "expression": false,
      "start": 1073,
      "end": 1131
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction2P",
        "optional": false,
        "typeAnnotation": null,
        "start": 1149,
        "end": 1163
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
            "start": 1167,
            "end": 1174
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
                      "start": 1177,
                      "end": 1178
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1180,
                        "end": 1186
                      },
                      "start": 1178,
                      "end": 1186
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1177,
                    "end": 1186
                  }
                ],
                "start": 1175,
                "end": 1188
              }
            ],
            "start": 1174,
            "end": 1189
          },
          "start": 1167,
          "end": 1189
        },
        "start": 1165,
        "end": 1189
      },
      "body": null,
      "expression": false,
      "start": 1132,
      "end": 1190
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1208,
        "end": 1221
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
              "start": 1225,
              "end": 1231
            },
            "start": 1223,
            "end": 1231
          },
          "start": 1222,
          "end": 1231
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
            "start": 1234,
            "end": 1242
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1243,
                "end": 1249
              }
            ],
            "start": 1242,
            "end": 1250
          },
          "start": 1234,
          "end": 1250
        },
        "start": 1232,
        "end": 1250
      },
      "body": null,
      "expression": false,
      "start": 1191,
      "end": 1251
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction3P",
        "optional": false,
        "typeAnnotation": null,
        "start": 1269,
        "end": 1283
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
              "start": 1287,
              "end": 1293
            },
            "start": 1285,
            "end": 1293
          },
          "start": 1284,
          "end": 1293
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
            "start": 1296,
            "end": 1303
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1304,
                "end": 1310
              }
            ],
            "start": 1303,
            "end": 1311
          },
          "start": 1296,
          "end": 1311
        },
        "start": 1294,
        "end": 1311
      },
      "body": null,
      "expression": false,
      "start": 1252,
      "end": 1312
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1330,
        "end": 1343
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
              "start": 1347,
              "end": 1353
            },
            "start": 1345,
            "end": 1353
          },
          "start": 1344,
          "end": 1353
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
              "start": 1359,
              "end": 1365
            },
            "start": 1357,
            "end": 1365
          },
          "start": 1355,
          "end": 1365
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
            "start": 1368,
            "end": 1376
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1377,
                "end": 1383
              }
            ],
            "start": 1376,
            "end": 1384
          },
          "start": 1368,
          "end": 1384
        },
        "start": 1366,
        "end": 1384
      },
      "body": null,
      "expression": false,
      "start": 1313,
      "end": 1385
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction4P",
        "optional": false,
        "typeAnnotation": null,
        "start": 1403,
        "end": 1417
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
              "start": 1421,
              "end": 1427
            },
            "start": 1419,
            "end": 1427
          },
          "start": 1418,
          "end": 1427
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
              "start": 1433,
              "end": 1439
            },
            "start": 1431,
            "end": 1439
          },
          "start": 1429,
          "end": 1439
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
            "start": 1442,
            "end": 1449
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1450,
                "end": 1456
              }
            ],
            "start": 1449,
            "end": 1457
          },
          "start": 1442,
          "end": 1457
        },
        "start": 1440,
        "end": 1457
      },
      "body": null,
      "expression": false,
      "start": 1386,
      "end": 1458
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1476,
        "end": 1489
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
              "start": 1493,
              "end": 1499
            },
            "start": 1491,
            "end": 1499
          },
          "start": 1490,
          "end": 1499
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
                      "start": 1509,
                      "end": 1515
                    },
                    "start": 1507,
                    "end": 1515
                  },
                  "start": 1506,
                  "end": 1515
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1520,
                  "end": 1526
                },
                "start": 1517,
                "end": 1526
              },
              "start": 1505,
              "end": 1526
            },
            "start": 1503,
            "end": 1526
          },
          "start": 1501,
          "end": 1526
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
            "start": 1529,
            "end": 1537
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1538,
                "end": 1544
              }
            ],
            "start": 1537,
            "end": 1545
          },
          "start": 1529,
          "end": 1545
        },
        "start": 1527,
        "end": 1545
      },
      "body": null,
      "expression": false,
      "start": 1459,
      "end": 1546
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction5P",
        "optional": false,
        "typeAnnotation": null,
        "start": 1564,
        "end": 1578
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
              "start": 1582,
              "end": 1588
            },
            "start": 1580,
            "end": 1588
          },
          "start": 1579,
          "end": 1588
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
                      "start": 1598,
                      "end": 1604
                    },
                    "start": 1596,
                    "end": 1604
                  },
                  "start": 1595,
                  "end": 1604
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1609,
                  "end": 1615
                },
                "start": 1606,
                "end": 1615
              },
              "start": 1594,
              "end": 1615
            },
            "start": 1592,
            "end": 1615
          },
          "start": 1590,
          "end": 1615
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
            "start": 1618,
            "end": 1625
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1626,
                "end": 1632
              }
            ],
            "start": 1625,
            "end": 1633
          },
          "start": 1618,
          "end": 1633
        },
        "start": 1616,
        "end": 1633
      },
      "body": null,
      "expression": false,
      "start": 1547,
      "end": 1634
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1652,
        "end": 1665
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
              "start": 1669,
              "end": 1675
            },
            "start": 1667,
            "end": 1675
          },
          "start": 1666,
          "end": 1675
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
                      "start": 1682,
                      "end": 1683
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1682,
                    "end": 1683
                  }
                ],
                "start": 1681,
                "end": 1684
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
                        "start": 1688,
                        "end": 1689
                      },
                      "typeArguments": null,
                      "start": 1688,
                      "end": 1689
                    },
                    "start": 1686,
                    "end": 1689
                  },
                  "start": 1685,
                  "end": 1689
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
                    "start": 1694,
                    "end": 1695
                  },
                  "typeArguments": null,
                  "start": 1694,
                  "end": 1695
                },
                "start": 1691,
                "end": 1695
              },
              "start": 1681,
              "end": 1695
            },
            "start": 1679,
            "end": 1695
          },
          "start": 1677,
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
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1698,
            "end": 1706
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1707,
                "end": 1713
              }
            ],
            "start": 1706,
            "end": 1714
          },
          "start": 1698,
          "end": 1714
        },
        "start": 1696,
        "end": 1714
      },
      "body": null,
      "expression": false,
      "start": 1635,
      "end": 1715
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction6P",
        "optional": false,
        "typeAnnotation": null,
        "start": 1733,
        "end": 1747
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
              "start": 1751,
              "end": 1757
            },
            "start": 1749,
            "end": 1757
          },
          "start": 1748,
          "end": 1757
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
                      "start": 1764,
                      "end": 1765
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1764,
                    "end": 1765
                  }
                ],
                "start": 1763,
                "end": 1766
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
                        "start": 1770,
                        "end": 1771
                      },
                      "typeArguments": null,
                      "start": 1770,
                      "end": 1771
                    },
                    "start": 1768,
                    "end": 1771
                  },
                  "start": 1767,
                  "end": 1771
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
                    "start": 1776,
                    "end": 1777
                  },
                  "typeArguments": null,
                  "start": 1776,
                  "end": 1777
                },
                "start": 1773,
                "end": 1777
              },
              "start": 1763,
              "end": 1777
            },
            "start": 1761,
            "end": 1777
          },
          "start": 1759,
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
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1780,
            "end": 1787
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1788,
                "end": 1794
              }
            ],
            "start": 1787,
            "end": 1795
          },
          "start": 1780,
          "end": 1795
        },
        "start": 1778,
        "end": 1795
      },
      "body": null,
      "expression": false,
      "start": 1716,
      "end": 1796
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1814,
        "end": 1827
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
                      "start": 1833,
                      "end": 1834
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1833,
                    "end": 1834
                  }
                ],
                "start": 1832,
                "end": 1835
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
                        "start": 1839,
                        "end": 1840
                      },
                      "typeArguments": null,
                      "start": 1839,
                      "end": 1840
                    },
                    "start": 1837,
                    "end": 1840
                  },
                  "start": 1836,
                  "end": 1840
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
                    "start": 1845,
                    "end": 1846
                  },
                  "typeArguments": null,
                  "start": 1845,
                  "end": 1846
                },
                "start": 1842,
                "end": 1846
              },
              "start": 1832,
              "end": 1846
            },
            "start": 1830,
            "end": 1846
          },
          "start": 1828,
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
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1849,
            "end": 1857
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1858,
                "end": 1864
              }
            ],
            "start": 1857,
            "end": 1865
          },
          "start": 1849,
          "end": 1865
        },
        "start": 1847,
        "end": 1865
      },
      "body": null,
      "expression": false,
      "start": 1797,
      "end": 1866
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction7P",
        "optional": false,
        "typeAnnotation": null,
        "start": 1884,
        "end": 1898
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
                      "start": 1904,
                      "end": 1905
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1904,
                    "end": 1905
                  }
                ],
                "start": 1903,
                "end": 1906
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
                        "start": 1910,
                        "end": 1911
                      },
                      "typeArguments": null,
                      "start": 1910,
                      "end": 1911
                    },
                    "start": 1908,
                    "end": 1911
                  },
                  "start": 1907,
                  "end": 1911
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
                    "start": 1916,
                    "end": 1917
                  },
                  "typeArguments": null,
                  "start": 1916,
                  "end": 1917
                },
                "start": 1913,
                "end": 1917
              },
              "start": 1903,
              "end": 1917
            },
            "start": 1901,
            "end": 1917
          },
          "start": 1899,
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
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1920,
            "end": 1927
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1928,
                "end": 1934
              }
            ],
            "start": 1927,
            "end": 1935
          },
          "start": 1920,
          "end": 1935
        },
        "start": 1918,
        "end": 1935
      },
      "body": null,
      "expression": false,
      "start": 1867,
      "end": 1936
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1954,
        "end": 1967
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
              "start": 1968,
              "end": 1969
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1968,
            "end": 1969
          }
        ],
        "start": 1967,
        "end": 1970
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
                "start": 1974,
                "end": 1975
              },
              "typeArguments": null,
              "start": 1974,
              "end": 1975
            },
            "start": 1972,
            "end": 1975
          },
          "start": 1971,
          "end": 1975
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
                        "start": 1985,
                        "end": 1986
                      },
                      "typeArguments": null,
                      "start": 1985,
                      "end": 1986
                    },
                    "start": 1983,
                    "end": 1986
                  },
                  "start": 1982,
                  "end": 1986
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
                    "start": 1991,
                    "end": 1992
                  },
                  "typeArguments": null,
                  "start": 1991,
                  "end": 1992
                },
                "start": 1988,
                "end": 1992
              },
              "start": 1981,
              "end": 1992
            },
            "start": 1979,
            "end": 1992
          },
          "start": 1977,
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
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1995,
            "end": 2003
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
                  "start": 2004,
                  "end": 2005
                },
                "typeArguments": null,
                "start": 2004,
                "end": 2005
              }
            ],
            "start": 2003,
            "end": 2006
          },
          "start": 1995,
          "end": 2006
        },
        "start": 1993,
        "end": 2006
      },
      "body": null,
      "expression": false,
      "start": 1937,
      "end": 2007
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction8P",
        "optional": false,
        "typeAnnotation": null,
        "start": 2025,
        "end": 2039
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
              "start": 2040,
              "end": 2041
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2040,
            "end": 2041
          }
        ],
        "start": 2039,
        "end": 2042
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
                "start": 2046,
                "end": 2047
              },
              "typeArguments": null,
              "start": 2046,
              "end": 2047
            },
            "start": 2044,
            "end": 2047
          },
          "start": 2043,
          "end": 2047
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
                        "start": 2057,
                        "end": 2058
                      },
                      "typeArguments": null,
                      "start": 2057,
                      "end": 2058
                    },
                    "start": 2055,
                    "end": 2058
                  },
                  "start": 2054,
                  "end": 2058
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
                    "start": 2063,
                    "end": 2064
                  },
                  "typeArguments": null,
                  "start": 2063,
                  "end": 2064
                },
                "start": 2060,
                "end": 2064
              },
              "start": 2053,
              "end": 2064
            },
            "start": 2051,
            "end": 2064
          },
          "start": 2049,
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
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2067,
            "end": 2074
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
                  "start": 2075,
                  "end": 2076
                },
                "typeArguments": null,
                "start": 2075,
                "end": 2076
              }
            ],
            "start": 2074,
            "end": 2077
          },
          "start": 2067,
          "end": 2077
        },
        "start": 2065,
        "end": 2077
      },
      "body": null,
      "expression": false,
      "start": 2008,
      "end": 2078
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction9",
        "optional": false,
        "typeAnnotation": null,
        "start": 2096,
        "end": 2109
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
              "start": 2110,
              "end": 2111
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2110,
            "end": 2111
          }
        ],
        "start": 2109,
        "end": 2112
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
                "start": 2116,
                "end": 2117
              },
              "typeArguments": null,
              "start": 2116,
              "end": 2117
            },
            "start": 2114,
            "end": 2117
          },
          "start": 2113,
          "end": 2117
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
                      "start": 2124,
                      "end": 2125
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2124,
                    "end": 2125
                  }
                ],
                "start": 2123,
                "end": 2126
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
                        "start": 2130,
                        "end": 2131
                      },
                      "typeArguments": null,
                      "start": 2130,
                      "end": 2131
                    },
                    "start": 2128,
                    "end": 2131
                  },
                  "start": 2127,
                  "end": 2131
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
                    "start": 2136,
                    "end": 2137
                  },
                  "typeArguments": null,
                  "start": 2136,
                  "end": 2137
                },
                "start": 2133,
                "end": 2137
              },
              "start": 2123,
              "end": 2137
            },
            "start": 2121,
            "end": 2137
          },
          "start": 2119,
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
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2140,
            "end": 2148
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
                  "start": 2149,
                  "end": 2150
                },
                "typeArguments": null,
                "start": 2149,
                "end": 2150
              }
            ],
            "start": 2148,
            "end": 2151
          },
          "start": 2140,
          "end": 2151
        },
        "start": 2138,
        "end": 2151
      },
      "body": null,
      "expression": false,
      "start": 2079,
      "end": 2152
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction9P",
        "optional": false,
        "typeAnnotation": null,
        "start": 2170,
        "end": 2184
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
              "start": 2185,
              "end": 2186
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2185,
            "end": 2186
          }
        ],
        "start": 2184,
        "end": 2187
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
                "start": 2191,
                "end": 2192
              },
              "typeArguments": null,
              "start": 2191,
              "end": 2192
            },
            "start": 2189,
            "end": 2192
          },
          "start": 2188,
          "end": 2192
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
                      "start": 2199,
                      "end": 2200
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2199,
                    "end": 2200
                  }
                ],
                "start": 2198,
                "end": 2201
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
                        "start": 2205,
                        "end": 2206
                      },
                      "typeArguments": null,
                      "start": 2205,
                      "end": 2206
                    },
                    "start": 2203,
                    "end": 2206
                  },
                  "start": 2202,
                  "end": 2206
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
                    "start": 2211,
                    "end": 2212
                  },
                  "typeArguments": null,
                  "start": 2211,
                  "end": 2212
                },
                "start": 2208,
                "end": 2212
              },
              "start": 2198,
              "end": 2212
            },
            "start": 2196,
            "end": 2212
          },
          "start": 2194,
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
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2215,
            "end": 2222
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
                  "start": 2223,
                  "end": 2224
                },
                "typeArguments": null,
                "start": 2223,
                "end": 2224
              }
            ],
            "start": 2222,
            "end": 2225
          },
          "start": 2215,
          "end": 2225
        },
        "start": 2213,
        "end": 2225
      },
      "body": null,
      "expression": false,
      "start": 2153,
      "end": 2226
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction10",
        "optional": false,
        "typeAnnotation": null,
        "start": 2244,
        "end": 2258
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
              "start": 2259,
              "end": 2260
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2259,
            "end": 2260
          }
        ],
        "start": 2258,
        "end": 2261
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
                      "start": 2267,
                      "end": 2268
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2267,
                    "end": 2268
                  }
                ],
                "start": 2266,
                "end": 2269
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
                        "start": 2273,
                        "end": 2274
                      },
                      "typeArguments": null,
                      "start": 2273,
                      "end": 2274
                    },
                    "start": 2271,
                    "end": 2274
                  },
                  "start": 2270,
                  "end": 2274
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
                    "start": 2279,
                    "end": 2280
                  },
                  "typeArguments": null,
                  "start": 2279,
                  "end": 2280
                },
                "start": 2276,
                "end": 2280
              },
              "start": 2266,
              "end": 2280
            },
            "start": 2264,
            "end": 2280
          },
          "start": 2262,
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
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2283,
            "end": 2291
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
                  "start": 2292,
                  "end": 2293
                },
                "typeArguments": null,
                "start": 2292,
                "end": 2293
              }
            ],
            "start": 2291,
            "end": 2294
          },
          "start": 2283,
          "end": 2294
        },
        "start": 2281,
        "end": 2294
      },
      "body": null,
      "expression": false,
      "start": 2227,
      "end": 2295
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction10P",
        "optional": false,
        "typeAnnotation": null,
        "start": 2313,
        "end": 2328
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
              "start": 2329,
              "end": 2330
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2329,
            "end": 2330
          }
        ],
        "start": 2328,
        "end": 2331
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
                      "start": 2337,
                      "end": 2338
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2337,
                    "end": 2338
                  }
                ],
                "start": 2336,
                "end": 2339
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
                        "start": 2343,
                        "end": 2344
                      },
                      "typeArguments": null,
                      "start": 2343,
                      "end": 2344
                    },
                    "start": 2341,
                    "end": 2344
                  },
                  "start": 2340,
                  "end": 2344
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
                    "start": 2349,
                    "end": 2350
                  },
                  "typeArguments": null,
                  "start": 2349,
                  "end": 2350
                },
                "start": 2346,
                "end": 2350
              },
              "start": 2336,
              "end": 2350
            },
            "start": 2334,
            "end": 2350
          },
          "start": 2332,
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
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2353,
            "end": 2360
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
                  "start": 2361,
                  "end": 2362
                },
                "typeArguments": null,
                "start": 2361,
                "end": 2362
              }
            ],
            "start": 2360,
            "end": 2363
          },
          "start": 2353,
          "end": 2363
        },
        "start": 2351,
        "end": 2363
      },
      "body": null,
      "expression": false,
      "start": 2296,
      "end": 2364
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction11",
        "optional": false,
        "typeAnnotation": null,
        "start": 2383,
        "end": 2397
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
              "start": 2401,
              "end": 2407
            },
            "start": 2399,
            "end": 2407
          },
          "start": 2398,
          "end": 2407
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
            "start": 2410,
            "end": 2418
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 2419,
                "end": 2425
              }
            ],
            "start": 2418,
            "end": 2426
          },
          "start": 2410,
          "end": 2426
        },
        "start": 2408,
        "end": 2426
      },
      "body": null,
      "expression": false,
      "start": 2366,
      "end": 2427
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction11",
        "optional": false,
        "typeAnnotation": null,
        "start": 2445,
        "end": 2459
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
              "start": 2463,
              "end": 2469
            },
            "start": 2461,
            "end": 2469
          },
          "start": 2460,
          "end": 2469
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
            "start": 2472,
            "end": 2480
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 2481,
                "end": 2487
              }
            ],
            "start": 2480,
            "end": 2488
          },
          "start": 2472,
          "end": 2488
        },
        "start": 2470,
        "end": 2488
      },
      "body": null,
      "expression": false,
      "start": 2428,
      "end": 2489
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction11P",
        "optional": false,
        "typeAnnotation": null,
        "start": 2507,
        "end": 2522
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
              "start": 2526,
              "end": 2532
            },
            "start": 2524,
            "end": 2532
          },
          "start": 2523,
          "end": 2532
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
            "start": 2535,
            "end": 2542
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 2543,
                "end": 2549
              }
            ],
            "start": 2542,
            "end": 2550
          },
          "start": 2535,
          "end": 2550
        },
        "start": 2533,
        "end": 2550
      },
      "body": null,
      "expression": false,
      "start": 2490,
      "end": 2551
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction11P",
        "optional": false,
        "typeAnnotation": null,
        "start": 2569,
        "end": 2584
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
              "start": 2588,
              "end": 2594
            },
            "start": 2586,
            "end": 2594
          },
          "start": 2585,
          "end": 2594
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
            "start": 2597,
            "end": 2604
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 2605,
                "end": 2611
              }
            ],
            "start": 2604,
            "end": 2612
          },
          "start": 2597,
          "end": 2612
        },
        "start": 2595,
        "end": 2612
      },
      "body": null,
      "expression": false,
      "start": 2552,
      "end": 2613
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction12",
        "optional": false,
        "typeAnnotation": null,
        "start": 2632,
        "end": 2646
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
              "start": 2647,
              "end": 2648
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2647,
            "end": 2648
          }
        ],
        "start": 2646,
        "end": 2649
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
                "start": 2653,
                "end": 2654
              },
              "typeArguments": null,
              "start": 2653,
              "end": 2654
            },
            "start": 2651,
            "end": 2654
          },
          "start": 2650,
          "end": 2654
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
            "start": 2657,
            "end": 2665
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
                  "start": 2666,
                  "end": 2667
                },
                "typeArguments": null,
                "start": 2666,
                "end": 2667
              }
            ],
            "start": 2665,
            "end": 2668
          },
          "start": 2657,
          "end": 2668
        },
        "start": 2655,
        "end": 2668
      },
      "body": null,
      "expression": false,
      "start": 2615,
      "end": 2669
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction12",
        "optional": false,
        "typeAnnotation": null,
        "start": 2687,
        "end": 2701
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
              "start": 2702,
              "end": 2703
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2702,
            "end": 2703
          }
        ],
        "start": 2701,
        "end": 2704
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
                "start": 2708,
                "end": 2709
              },
              "typeArguments": null,
              "start": 2708,
              "end": 2709
            },
            "start": 2706,
            "end": 2709
          },
          "start": 2705,
          "end": 2709
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
            "start": 2718,
            "end": 2726
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
                  "start": 2727,
                  "end": 2728
                },
                "typeArguments": null,
                "start": 2727,
                "end": 2728
              }
            ],
            "start": 2726,
            "end": 2729
          },
          "start": 2718,
          "end": 2729
        },
        "start": 2716,
        "end": 2729
      },
      "body": null,
      "expression": false,
      "start": 2670,
      "end": 2730
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction12P",
        "optional": false,
        "typeAnnotation": null,
        "start": 2748,
        "end": 2763
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
              "start": 2764,
              "end": 2765
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2764,
            "end": 2765
          }
        ],
        "start": 2763,
        "end": 2766
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
                "start": 2770,
                "end": 2771
              },
              "typeArguments": null,
              "start": 2770,
              "end": 2771
            },
            "start": 2768,
            "end": 2771
          },
          "start": 2767,
          "end": 2771
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
            "start": 2774,
            "end": 2782
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
                  "start": 2783,
                  "end": 2784
                },
                "typeArguments": null,
                "start": 2783,
                "end": 2784
              }
            ],
            "start": 2782,
            "end": 2785
          },
          "start": 2774,
          "end": 2785
        },
        "start": 2772,
        "end": 2785
      },
      "body": null,
      "expression": false,
      "start": 2731,
      "end": 2786
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction12P",
        "optional": false,
        "typeAnnotation": null,
        "start": 2804,
        "end": 2819
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
              "start": 2820,
              "end": 2821
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2820,
            "end": 2821
          }
        ],
        "start": 2819,
        "end": 2822
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
                "start": 2826,
                "end": 2827
              },
              "typeArguments": null,
              "start": 2826,
              "end": 2827
            },
            "start": 2824,
            "end": 2827
          },
          "start": 2823,
          "end": 2827
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
            "start": 2836,
            "end": 2843
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
                  "start": 2844,
                  "end": 2845
                },
                "typeArguments": null,
                "start": 2844,
                "end": 2845
              }
            ],
            "start": 2843,
            "end": 2846
          },
          "start": 2836,
          "end": 2846
        },
        "start": 2834,
        "end": 2846
      },
      "body": null,
      "expression": false,
      "start": 2787,
      "end": 2847
    },
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
                  "start": 2857,
                  "end": 2865
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 2866,
                      "end": 2872
                    }
                  ],
                  "start": 2865,
                  "end": 2873
                },
                "start": 2857,
                "end": 2873
              },
              "start": 2855,
              "end": 2873
            },
            "start": 2853,
            "end": 2873
          },
          "init": null,
          "definite": false,
          "start": 2853,
          "end": 2873
        }
      ],
      "declare": false,
      "start": 2849,
      "end": 2874
    },
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
            "start": 2879,
            "end": 2882
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
                "start": 2885,
                "end": 2887
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 2888,
                "end": 2892
              },
              "optional": false,
              "computed": false,
              "start": 2885,
              "end": 2892
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 2893,
                "end": 2905
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 2907,
                "end": 2919
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 2921,
                "end": 2933
              }
            ],
            "optional": false,
            "start": 2885,
            "end": 2934
          },
          "definite": false,
          "start": 2879,
          "end": 2934
        }
      ],
      "declare": false,
      "start": 2875,
      "end": 2935
    },
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
            "start": 2940,
            "end": 2943
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
                    "start": 2946,
                    "end": 2948
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2949,
                    "end": 2953
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2946,
                  "end": 2953
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2954,
                    "end": 2966
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2968,
                    "end": 2980
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2982,
                    "end": 2994
                  }
                ],
                "optional": false,
                "start": 2946,
                "end": 2995
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 2996,
                "end": 3000
              },
              "optional": false,
              "computed": false,
              "start": 2946,
              "end": 3000
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3001,
                "end": 3013
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3015,
                "end": 3027
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3029,
                "end": 3041
              }
            ],
            "optional": false,
            "start": 2946,
            "end": 3042
          },
          "definite": false,
          "start": 2940,
          "end": 3042
        }
      ],
      "declare": false,
      "start": 2936,
      "end": 3043
    },
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
            "start": 3048,
            "end": 3051
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
                "start": 3054,
                "end": 3056
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3057,
                "end": 3061
              },
              "optional": false,
              "computed": false,
              "start": 3054,
              "end": 3061
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunctionP",
                "optional": false,
                "typeAnnotation": null,
                "start": 3062,
                "end": 3075
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunctionP",
                "optional": false,
                "typeAnnotation": null,
                "start": 3077,
                "end": 3090
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunctionP",
                "optional": false,
                "typeAnnotation": null,
                "start": 3092,
                "end": 3105
              }
            ],
            "optional": false,
            "start": 3054,
            "end": 3106
          },
          "definite": false,
          "start": 3048,
          "end": 3106
        }
      ],
      "declare": false,
      "start": 3044,
      "end": 3107
    },
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
                  "start": 3116,
                  "end": 3123
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 3124,
                      "end": 3130
                    }
                  ],
                  "start": 3123,
                  "end": 3131
                },
                "start": 3116,
                "end": 3131
              },
              "start": 3114,
              "end": 3131
            },
            "start": 3112,
            "end": 3131
          },
          "init": null,
          "definite": false,
          "start": 3112,
          "end": 3131
        }
      ],
      "declare": false,
      "start": 3108,
      "end": 3132
    },
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
            "start": 3137,
            "end": 3140
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
                "start": 3143,
                "end": 3145
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3146,
                "end": 3150
              },
              "optional": false,
              "computed": false,
              "start": 3143,
              "end": 3150
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3151,
                "end": 3163
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3165,
                "end": 3177
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3179,
                "end": 3191
              }
            ],
            "optional": false,
            "start": 3143,
            "end": 3192
          },
          "definite": false,
          "start": 3137,
          "end": 3192
        }
      ],
      "declare": false,
      "start": 3133,
      "end": 3193
    },
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
            "start": 3198,
            "end": 3201
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
                "start": 3204,
                "end": 3206
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3207,
                "end": 3211
              },
              "optional": false,
              "computed": false,
              "start": 3204,
              "end": 3211
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunctionP",
                "optional": false,
                "typeAnnotation": null,
                "start": 3212,
                "end": 3225
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunctionP",
                "optional": false,
                "typeAnnotation": null,
                "start": 3227,
                "end": 3240
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunctionP",
                "optional": false,
                "typeAnnotation": null,
                "start": 3242,
                "end": 3255
              }
            ],
            "optional": false,
            "start": 3204,
            "end": 3256
          },
          "definite": false,
          "start": 3198,
          "end": 3256
        }
      ],
      "declare": false,
      "start": 3194,
      "end": 3257
    },
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
            "start": 3262,
            "end": 3265
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
                "start": 3268,
                "end": 3270
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3271,
                "end": 3275
              },
              "optional": false,
              "computed": false,
              "start": 3268,
              "end": 3275
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunctionP",
                "optional": false,
                "typeAnnotation": null,
                "start": 3276,
                "end": 3289
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3291,
                "end": 3303
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3305,
                "end": 3317
              }
            ],
            "optional": false,
            "start": 3268,
            "end": 3318
          },
          "definite": false,
          "start": 3262,
          "end": 3318
        }
      ],
      "declare": false,
      "start": 3258,
      "end": 3319
    },
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
            "start": 3324,
            "end": 3327
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
                    "start": 3330,
                    "end": 3332
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3333,
                    "end": 3337
                  },
                  "optional": false,
                  "computed": false,
                  "start": 3330,
                  "end": 3337
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunctionP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3338,
                    "end": 3351
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3353,
                    "end": 3365
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3367,
                    "end": 3379
                  }
                ],
                "optional": false,
                "start": 3330,
                "end": 3380
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3381,
                "end": 3385
              },
              "optional": false,
              "computed": false,
              "start": 3330,
              "end": 3385
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3386,
                "end": 3398
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3400,
                "end": 3412
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3414,
                "end": 3426
              }
            ],
            "optional": false,
            "start": 3330,
            "end": 3427
          },
          "definite": false,
          "start": 3324,
          "end": 3427
        }
      ],
      "declare": false,
      "start": 3320,
      "end": 3428
    },
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
                  "start": 3438,
                  "end": 3446
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
                            "start": 3449,
                            "end": 3450
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3452,
                              "end": 3458
                            },
                            "start": 3450,
                            "end": 3458
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 3449,
                          "end": 3459
                        }
                      ],
                      "start": 3447,
                      "end": 3461
                    }
                  ],
                  "start": 3446,
                  "end": 3462
                },
                "start": 3438,
                "end": 3462
              },
              "start": 3436,
              "end": 3462
            },
            "start": 3434,
            "end": 3462
          },
          "init": null,
          "definite": false,
          "start": 3434,
          "end": 3462
        }
      ],
      "declare": false,
      "start": 3430,
      "end": 3463
    },
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
            "start": 3468,
            "end": 3471
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
                "start": 3474,
                "end": 3476
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3477,
                "end": 3481
              },
              "optional": false,
              "computed": false,
              "start": 3474,
              "end": 3481
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3482,
                "end": 3495
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3497,
                "end": 3510
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3512,
                "end": 3525
              }
            ],
            "optional": false,
            "start": 3474,
            "end": 3526
          },
          "definite": false,
          "start": 3468,
          "end": 3526
        }
      ],
      "declare": false,
      "start": 3464,
      "end": 3527
    },
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
            "start": 3532,
            "end": 3535
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
                    "start": 3538,
                    "end": 3540
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3541,
                    "end": 3545
                  },
                  "optional": false,
                  "computed": false,
                  "start": 3538,
                  "end": 3545
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3546,
                    "end": 3559
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3561,
                    "end": 3574
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3576,
                    "end": 3589
                  }
                ],
                "optional": false,
                "start": 3538,
                "end": 3590
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3591,
                "end": 3595
              },
              "optional": false,
              "computed": false,
              "start": 3538,
              "end": 3595
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3596,
                "end": 3609
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3611,
                "end": 3624
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3626,
                "end": 3639
              }
            ],
            "optional": false,
            "start": 3538,
            "end": 3640
          },
          "definite": false,
          "start": 3532,
          "end": 3640
        }
      ],
      "declare": false,
      "start": 3528,
      "end": 3641
    },
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
                  "start": 3650,
                  "end": 3657
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
                            "start": 3660,
                            "end": 3661
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3663,
                              "end": 3669
                            },
                            "start": 3661,
                            "end": 3669
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 3660,
                          "end": 3670
                        }
                      ],
                      "start": 3658,
                      "end": 3672
                    }
                  ],
                  "start": 3657,
                  "end": 3673
                },
                "start": 3650,
                "end": 3673
              },
              "start": 3648,
              "end": 3673
            },
            "start": 3646,
            "end": 3673
          },
          "init": null,
          "definite": false,
          "start": 3646,
          "end": 3673
        }
      ],
      "declare": false,
      "start": 3642,
      "end": 3674
    },
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
            "start": 3679,
            "end": 3682
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
                "start": 3685,
                "end": 3687
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3688,
                "end": 3692
              },
              "optional": false,
              "computed": false,
              "start": 3685,
              "end": 3692
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3693,
                "end": 3706
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3708,
                "end": 3721
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3723,
                "end": 3736
              }
            ],
            "optional": false,
            "start": 3685,
            "end": 3737
          },
          "definite": false,
          "start": 3679,
          "end": 3737
        }
      ],
      "declare": false,
      "start": 3675,
      "end": 3738
    },
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
            "start": 3743,
            "end": 3746
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
                "start": 3749,
                "end": 3751
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3752,
                "end": 3756
              },
              "optional": false,
              "computed": false,
              "start": 3749,
              "end": 3756
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2P",
                "optional": false,
                "typeAnnotation": null,
                "start": 3757,
                "end": 3771
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2P",
                "optional": false,
                "typeAnnotation": null,
                "start": 3773,
                "end": 3787
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2P",
                "optional": false,
                "typeAnnotation": null,
                "start": 3789,
                "end": 3803
              }
            ],
            "optional": false,
            "start": 3749,
            "end": 3804
          },
          "definite": false,
          "start": 3743,
          "end": 3804
        }
      ],
      "declare": false,
      "start": 3739,
      "end": 3805
    },
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
            "start": 3810,
            "end": 3813
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
                "start": 3816,
                "end": 3818
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3819,
                "end": 3823
              },
              "optional": false,
              "computed": false,
              "start": 3816,
              "end": 3823
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2P",
                "optional": false,
                "typeAnnotation": null,
                "start": 3824,
                "end": 3838
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3840,
                "end": 3853
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3855,
                "end": 3868
              }
            ],
            "optional": false,
            "start": 3816,
            "end": 3869
          },
          "definite": false,
          "start": 3810,
          "end": 3869
        }
      ],
      "declare": false,
      "start": 3806,
      "end": 3870
    },
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
            "start": 3875,
            "end": 3878
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
                    "start": 3881,
                    "end": 3883
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3884,
                    "end": 3888
                  },
                  "optional": false,
                  "computed": false,
                  "start": 3881,
                  "end": 3888
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction2P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3889,
                    "end": 3903
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3905,
                    "end": 3918
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3920,
                    "end": 3933
                  }
                ],
                "optional": false,
                "start": 3881,
                "end": 3934
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3935,
                "end": 3939
              },
              "optional": false,
              "computed": false,
              "start": 3881,
              "end": 3939
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3940,
                "end": 3953
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3955,
                "end": 3968
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3970,
                "end": 3983
              }
            ],
            "optional": false,
            "start": 3881,
            "end": 3984
          },
          "definite": false,
          "start": 3875,
          "end": 3984
        }
      ],
      "declare": false,
      "start": 3871,
      "end": 3985
    },
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
                  "start": 3995,
                  "end": 4003
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 4004,
                      "end": 4010
                    }
                  ],
                  "start": 4003,
                  "end": 4011
                },
                "start": 3995,
                "end": 4011
              },
              "start": 3993,
              "end": 4011
            },
            "start": 3991,
            "end": 4011
          },
          "init": null,
          "definite": false,
          "start": 3991,
          "end": 4011
        }
      ],
      "declare": false,
      "start": 3987,
      "end": 4012
    },
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
            "start": 4017,
            "end": 4020
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
                "start": 4023,
                "end": 4025
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4026,
                "end": 4030
              },
              "optional": false,
              "computed": false,
              "start": 4023,
              "end": 4030
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4031,
                "end": 4044
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4046,
                "end": 4059
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4061,
                "end": 4074
              }
            ],
            "optional": false,
            "start": 4023,
            "end": 4075
          },
          "definite": false,
          "start": 4017,
          "end": 4075
        }
      ],
      "declare": false,
      "start": 4013,
      "end": 4076
    },
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
            "start": 4081,
            "end": 4084
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
                    "start": 4087,
                    "end": 4089
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4090,
                    "end": 4094
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4087,
                  "end": 4094
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4095,
                    "end": 4108
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4110,
                    "end": 4123
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4125,
                    "end": 4138
                  }
                ],
                "optional": false,
                "start": 4087,
                "end": 4139
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4140,
                "end": 4144
              },
              "optional": false,
              "computed": false,
              "start": 4087,
              "end": 4144
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4145,
                "end": 4158
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4160,
                "end": 4173
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4175,
                "end": 4188
              }
            ],
            "optional": false,
            "start": 4087,
            "end": 4189
          },
          "definite": false,
          "start": 4081,
          "end": 4189
        }
      ],
      "declare": false,
      "start": 4077,
      "end": 4190
    },
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
                  "start": 4199,
                  "end": 4206
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 4207,
                      "end": 4213
                    }
                  ],
                  "start": 4206,
                  "end": 4214
                },
                "start": 4199,
                "end": 4214
              },
              "start": 4197,
              "end": 4214
            },
            "start": 4195,
            "end": 4214
          },
          "init": null,
          "definite": false,
          "start": 4195,
          "end": 4214
        }
      ],
      "declare": false,
      "start": 4191,
      "end": 4215
    },
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
            "start": 4220,
            "end": 4223
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
                "start": 4226,
                "end": 4228
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4229,
                "end": 4233
              },
              "optional": false,
              "computed": false,
              "start": 4226,
              "end": 4233
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4234,
                "end": 4247
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4249,
                "end": 4262
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4264,
                "end": 4277
              }
            ],
            "optional": false,
            "start": 4226,
            "end": 4278
          },
          "definite": false,
          "start": 4220,
          "end": 4278
        }
      ],
      "declare": false,
      "start": 4216,
      "end": 4279
    },
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
            "start": 4284,
            "end": 4287
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
                "start": 4290,
                "end": 4292
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4293,
                "end": 4297
              },
              "optional": false,
              "computed": false,
              "start": 4290,
              "end": 4297
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3P",
                "optional": false,
                "typeAnnotation": null,
                "start": 4298,
                "end": 4312
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3P",
                "optional": false,
                "typeAnnotation": null,
                "start": 4314,
                "end": 4328
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3P",
                "optional": false,
                "typeAnnotation": null,
                "start": 4330,
                "end": 4344
              }
            ],
            "optional": false,
            "start": 4290,
            "end": 4345
          },
          "definite": false,
          "start": 4284,
          "end": 4345
        }
      ],
      "declare": false,
      "start": 4280,
      "end": 4346
    },
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
            "start": 4351,
            "end": 4354
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
                "start": 4357,
                "end": 4359
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4360,
                "end": 4364
              },
              "optional": false,
              "computed": false,
              "start": 4357,
              "end": 4364
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3P",
                "optional": false,
                "typeAnnotation": null,
                "start": 4365,
                "end": 4379
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4381,
                "end": 4394
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4396,
                "end": 4409
              }
            ],
            "optional": false,
            "start": 4357,
            "end": 4410
          },
          "definite": false,
          "start": 4351,
          "end": 4410
        }
      ],
      "declare": false,
      "start": 4347,
      "end": 4411
    },
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
            "start": 4416,
            "end": 4419
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
                    "start": 4422,
                    "end": 4424
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4425,
                    "end": 4429
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4422,
                  "end": 4429
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction3P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4430,
                    "end": 4444
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4446,
                    "end": 4459
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4461,
                    "end": 4474
                  }
                ],
                "optional": false,
                "start": 4422,
                "end": 4475
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4476,
                "end": 4480
              },
              "optional": false,
              "computed": false,
              "start": 4422,
              "end": 4480
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4481,
                "end": 4494
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4496,
                "end": 4509
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4511,
                "end": 4524
              }
            ],
            "optional": false,
            "start": 4422,
            "end": 4525
          },
          "definite": false,
          "start": 4416,
          "end": 4525
        }
      ],
      "declare": false,
      "start": 4412,
      "end": 4526
    },
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
                  "start": 4536,
                  "end": 4544
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 4545,
                      "end": 4551
                    }
                  ],
                  "start": 4544,
                  "end": 4552
                },
                "start": 4536,
                "end": 4552
              },
              "start": 4534,
              "end": 4552
            },
            "start": 4532,
            "end": 4552
          },
          "init": null,
          "definite": false,
          "start": 4532,
          "end": 4552
        }
      ],
      "declare": false,
      "start": 4528,
      "end": 4553
    },
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
                        "start": 4573,
                        "end": 4576
                      },
                      "start": 4571,
                      "end": 4576
                    },
                    "start": 4570,
                    "end": 4576
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
                      "start": 4581,
                      "end": 4589
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 4590,
                          "end": 4596
                        }
                      ],
                      "start": 4589,
                      "end": 4597
                    },
                    "start": 4581,
                    "end": 4597
                  },
                  "start": 4578,
                  "end": 4597
                },
                "start": 4569,
                "end": 4597
              },
              "start": 4567,
              "end": 4597
            },
            "start": 4558,
            "end": 4597
          },
          "init": null,
          "definite": false,
          "start": 4558,
          "end": 4597
        }
      ],
      "declare": false,
      "start": 4554,
      "end": 4598
    },
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
                        "start": 4617,
                        "end": 4620
                      },
                      "start": 4615,
                      "end": 4620
                    },
                    "start": 4614,
                    "end": 4620
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
                      "start": 4625,
                      "end": 4632
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 4633,
                          "end": 4639
                        }
                      ],
                      "start": 4632,
                      "end": 4640
                    },
                    "start": 4625,
                    "end": 4640
                  },
                  "start": 4622,
                  "end": 4640
                },
                "start": 4613,
                "end": 4640
              },
              "start": 4611,
              "end": 4640
            },
            "start": 4603,
            "end": 4640
          },
          "init": null,
          "definite": false,
          "start": 4603,
          "end": 4640
        }
      ],
      "declare": false,
      "start": 4599,
      "end": 4641
    },
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
            "start": 4646,
            "end": 4649
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
                "start": 4652,
                "end": 4654
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4655,
                "end": 4659
              },
              "optional": false,
              "computed": false,
              "start": 4652,
              "end": 4659
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 4660,
                "end": 4673
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 4675,
                "end": 4688
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 4690,
                "end": 4703
              }
            ],
            "optional": false,
            "start": 4652,
            "end": 4704
          },
          "definite": false,
          "start": 4646,
          "end": 4704
        }
      ],
      "declare": false,
      "start": 4642,
      "end": 4705
    },
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
            "start": 4719,
            "end": 4722
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
                    "start": 4725,
                    "end": 4727
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4728,
                    "end": 4732
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4725,
                  "end": 4732
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4733,
                    "end": 4742
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4744,
                    "end": 4757
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4759,
                    "end": 4772
                  }
                ],
                "optional": false,
                "start": 4725,
                "end": 4773
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4774,
                "end": 4778
              },
              "optional": false,
              "computed": false,
              "start": 4725,
              "end": 4778
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 4779,
                "end": 4788
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 4790,
                "end": 4803
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 4805,
                "end": 4818
              }
            ],
            "optional": false,
            "start": 4725,
            "end": 4819
          },
          "definite": false,
          "start": 4719,
          "end": 4819
        }
      ],
      "declare": false,
      "start": 4715,
      "end": 4820
    },
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
                  "start": 4835,
                  "end": 4842
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 4843,
                      "end": 4849
                    }
                  ],
                  "start": 4842,
                  "end": 4850
                },
                "start": 4835,
                "end": 4850
              },
              "start": 4833,
              "end": 4850
            },
            "start": 4831,
            "end": 4850
          },
          "init": null,
          "definite": false,
          "start": 4831,
          "end": 4850
        }
      ],
      "declare": false,
      "start": 4827,
      "end": 4851
    },
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
            "start": 4856,
            "end": 4859
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
                "start": 4862,
                "end": 4864
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4865,
                "end": 4869
              },
              "optional": false,
              "computed": false,
              "start": 4862,
              "end": 4869
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 4870,
                "end": 4883
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 4885,
                "end": 4898
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 4900,
                "end": 4913
              }
            ],
            "optional": false,
            "start": 4862,
            "end": 4914
          },
          "definite": false,
          "start": 4856,
          "end": 4914
        }
      ],
      "declare": false,
      "start": 4852,
      "end": 4915
    },
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
            "start": 4929,
            "end": 4932
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
                "start": 4935,
                "end": 4937
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4938,
                "end": 4942
              },
              "optional": false,
              "computed": false,
              "start": 4935,
              "end": 4942
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4P",
                "optional": false,
                "typeAnnotation": null,
                "start": 4943,
                "end": 4957
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4P",
                "optional": false,
                "typeAnnotation": null,
                "start": 4959,
                "end": 4973
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4P",
                "optional": false,
                "typeAnnotation": null,
                "start": 4975,
                "end": 4989
              }
            ],
            "optional": false,
            "start": 4935,
            "end": 4990
          },
          "definite": false,
          "start": 4929,
          "end": 4990
        }
      ],
      "declare": false,
      "start": 4925,
      "end": 4991
    },
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
            "start": 5006,
            "end": 5009
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
                "start": 5012,
                "end": 5014
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5015,
                "end": 5019
              },
              "optional": false,
              "computed": false,
              "start": 5012,
              "end": 5019
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4P",
                "optional": false,
                "typeAnnotation": null,
                "start": 5020,
                "end": 5034
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 5036,
                "end": 5049
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 5051,
                "end": 5064
              }
            ],
            "optional": false,
            "start": 5012,
            "end": 5065
          },
          "definite": false,
          "start": 5006,
          "end": 5065
        }
      ],
      "declare": false,
      "start": 5002,
      "end": 5066
    },
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
            "start": 5080,
            "end": 5083
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
                    "start": 5086,
                    "end": 5088
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5089,
                    "end": 5093
                  },
                  "optional": false,
                  "computed": false,
                  "start": 5086,
                  "end": 5093
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5094,
                    "end": 5103
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction4P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5105,
                    "end": 5119
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5121,
                    "end": 5134
                  }
                ],
                "optional": false,
                "start": 5086,
                "end": 5135
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5136,
                "end": 5140
              },
              "optional": false,
              "computed": false,
              "start": 5086,
              "end": 5140
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 5141,
                "end": 5150
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4P",
                "optional": false,
                "typeAnnotation": null,
                "start": 5152,
                "end": 5166
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 5168,
                "end": 5181
              }
            ],
            "optional": false,
            "start": 5086,
            "end": 5182
          },
          "definite": false,
          "start": 5080,
          "end": 5182
        }
      ],
      "declare": false,
      "start": 5076,
      "end": 5183
    },
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
                  "start": 5193,
                  "end": 5201
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 5202,
                      "end": 5208
                    }
                  ],
                  "start": 5201,
                  "end": 5209
                },
                "start": 5193,
                "end": 5209
              },
              "start": 5191,
              "end": 5209
            },
            "start": 5189,
            "end": 5209
          },
          "init": null,
          "definite": false,
          "start": 5189,
          "end": 5209
        }
      ],
      "declare": false,
      "start": 5185,
      "end": 5210
    },
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
            "start": 5215,
            "end": 5218
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
                "start": 5221,
                "end": 5223
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5224,
                "end": 5228
              },
              "optional": false,
              "computed": false,
              "start": 5221,
              "end": 5228
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5229,
                "end": 5242
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5244,
                "end": 5257
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5259,
                "end": 5272
              }
            ],
            "optional": false,
            "start": 5221,
            "end": 5273
          },
          "definite": false,
          "start": 5215,
          "end": 5273
        }
      ],
      "declare": false,
      "start": 5211,
      "end": 5274
    },
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
            "start": 5288,
            "end": 5291
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
                    "start": 5294,
                    "end": 5296
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5297,
                    "end": 5301
                  },
                  "optional": false,
                  "computed": false,
                  "start": 5294,
                  "end": 5301
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5302,
                    "end": 5311
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5313,
                    "end": 5322
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5324,
                    "end": 5333
                  }
                ],
                "optional": false,
                "start": 5294,
                "end": 5334
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5335,
                "end": 5339
              },
              "optional": false,
              "computed": false,
              "start": 5294,
              "end": 5339
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 5340,
                "end": 5349
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 5351,
                "end": 5360
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 5362,
                "end": 5371
              }
            ],
            "optional": false,
            "start": 5294,
            "end": 5372
          },
          "definite": false,
          "start": 5288,
          "end": 5372
        }
      ],
      "declare": false,
      "start": 5284,
      "end": 5373
    },
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
                  "start": 5388,
                  "end": 5395
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 5396,
                      "end": 5402
                    }
                  ],
                  "start": 5395,
                  "end": 5403
                },
                "start": 5388,
                "end": 5403
              },
              "start": 5386,
              "end": 5403
            },
            "start": 5384,
            "end": 5403
          },
          "init": null,
          "definite": false,
          "start": 5384,
          "end": 5403
        }
      ],
      "declare": false,
      "start": 5380,
      "end": 5404
    },
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
            "start": 5409,
            "end": 5412
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
                "start": 5415,
                "end": 5417
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5418,
                "end": 5422
              },
              "optional": false,
              "computed": false,
              "start": 5415,
              "end": 5422
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5423,
                "end": 5436
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5438,
                "end": 5451
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5453,
                "end": 5466
              }
            ],
            "optional": false,
            "start": 5415,
            "end": 5467
          },
          "definite": false,
          "start": 5409,
          "end": 5467
        }
      ],
      "declare": false,
      "start": 5405,
      "end": 5468
    },
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
            "start": 5482,
            "end": 5485
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
                "start": 5488,
                "end": 5490
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5491,
                "end": 5495
              },
              "optional": false,
              "computed": false,
              "start": 5488,
              "end": 5495
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5P",
                "optional": false,
                "typeAnnotation": null,
                "start": 5496,
                "end": 5510
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5P",
                "optional": false,
                "typeAnnotation": null,
                "start": 5512,
                "end": 5526
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5P",
                "optional": false,
                "typeAnnotation": null,
                "start": 5528,
                "end": 5542
              }
            ],
            "optional": false,
            "start": 5488,
            "end": 5543
          },
          "definite": false,
          "start": 5482,
          "end": 5543
        }
      ],
      "declare": false,
      "start": 5478,
      "end": 5544
    },
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
            "start": 5558,
            "end": 5561
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
                "start": 5564,
                "end": 5566
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5567,
                "end": 5571
              },
              "optional": false,
              "computed": false,
              "start": 5564,
              "end": 5571
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5P",
                "optional": false,
                "typeAnnotation": null,
                "start": 5572,
                "end": 5586
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5588,
                "end": 5601
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5603,
                "end": 5616
              }
            ],
            "optional": false,
            "start": 5564,
            "end": 5617
          },
          "definite": false,
          "start": 5558,
          "end": 5617
        }
      ],
      "declare": false,
      "start": 5554,
      "end": 5618
    },
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
            "start": 5632,
            "end": 5635
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
                    "start": 5638,
                    "end": 5640
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5641,
                    "end": 5645
                  },
                  "optional": false,
                  "computed": false,
                  "start": 5638,
                  "end": 5645
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5646,
                    "end": 5654
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5656,
                    "end": 5664
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5666,
                    "end": 5674
                  }
                ],
                "optional": false,
                "start": 5638,
                "end": 5675
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5676,
                "end": 5680
              },
              "optional": false,
              "computed": false,
              "start": 5638,
              "end": 5680
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 5681,
                "end": 5690
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 5692,
                "end": 5701
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 5703,
                "end": 5712
              }
            ],
            "optional": false,
            "start": 5638,
            "end": 5713
          },
          "definite": false,
          "start": 5632,
          "end": 5713
        }
      ],
      "declare": false,
      "start": 5628,
      "end": 5714
    },
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
                  "start": 5730,
                  "end": 5738
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 5739,
                      "end": 5745
                    }
                  ],
                  "start": 5738,
                  "end": 5746
                },
                "start": 5730,
                "end": 5746
              },
              "start": 5728,
              "end": 5746
            },
            "start": 5726,
            "end": 5746
          },
          "init": null,
          "definite": false,
          "start": 5726,
          "end": 5746
        }
      ],
      "declare": false,
      "start": 5722,
      "end": 5747
    },
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
            "start": 5752,
            "end": 5755
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
                "start": 5758,
                "end": 5760
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5761,
                "end": 5765
              },
              "optional": false,
              "computed": false,
              "start": 5758,
              "end": 5765
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6",
                "optional": false,
                "typeAnnotation": null,
                "start": 5766,
                "end": 5779
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6",
                "optional": false,
                "typeAnnotation": null,
                "start": 5781,
                "end": 5794
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6",
                "optional": false,
                "typeAnnotation": null,
                "start": 5796,
                "end": 5809
              }
            ],
            "optional": false,
            "start": 5758,
            "end": 5810
          },
          "definite": false,
          "start": 5752,
          "end": 5810
        }
      ],
      "declare": false,
      "start": 5748,
      "end": 5811
    },
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
            "start": 5825,
            "end": 5828
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
                    "start": 5831,
                    "end": 5833
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5834,
                    "end": 5838
                  },
                  "optional": false,
                  "computed": false,
                  "start": 5831,
                  "end": 5838
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5839,
                    "end": 5848
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5850,
                    "end": 5859
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5861,
                    "end": 5870
                  }
                ],
                "optional": false,
                "start": 5831,
                "end": 5871
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5872,
                "end": 5876
              },
              "optional": false,
              "computed": false,
              "start": 5831,
              "end": 5876
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 5877,
                "end": 5886
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 5888,
                "end": 5897
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 5899,
                "end": 5908
              }
            ],
            "optional": false,
            "start": 5831,
            "end": 5909
          },
          "definite": false,
          "start": 5825,
          "end": 5909
        }
      ],
      "declare": false,
      "start": 5821,
      "end": 5910
    },
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
                  "start": 5925,
                  "end": 5932
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 5933,
                      "end": 5939
                    }
                  ],
                  "start": 5932,
                  "end": 5940
                },
                "start": 5925,
                "end": 5940
              },
              "start": 5923,
              "end": 5940
            },
            "start": 5921,
            "end": 5940
          },
          "init": null,
          "definite": false,
          "start": 5921,
          "end": 5940
        }
      ],
      "declare": false,
      "start": 5917,
      "end": 5941
    },
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
            "start": 5946,
            "end": 5949
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
                "start": 5952,
                "end": 5954
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5955,
                "end": 5959
              },
              "optional": false,
              "computed": false,
              "start": 5952,
              "end": 5959
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6",
                "optional": false,
                "typeAnnotation": null,
                "start": 5960,
                "end": 5973
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6",
                "optional": false,
                "typeAnnotation": null,
                "start": 5975,
                "end": 5988
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6",
                "optional": false,
                "typeAnnotation": null,
                "start": 5990,
                "end": 6003
              }
            ],
            "optional": false,
            "start": 5952,
            "end": 6004
          },
          "definite": false,
          "start": 5946,
          "end": 6004
        }
      ],
      "declare": false,
      "start": 5942,
      "end": 6005
    },
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
            "start": 6019,
            "end": 6022
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
                "start": 6025,
                "end": 6027
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6028,
                "end": 6032
              },
              "optional": false,
              "computed": false,
              "start": 6025,
              "end": 6032
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6P",
                "optional": false,
                "typeAnnotation": null,
                "start": 6033,
                "end": 6047
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6P",
                "optional": false,
                "typeAnnotation": null,
                "start": 6049,
                "end": 6063
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6P",
                "optional": false,
                "typeAnnotation": null,
                "start": 6065,
                "end": 6079
              }
            ],
            "optional": false,
            "start": 6025,
            "end": 6080
          },
          "definite": false,
          "start": 6019,
          "end": 6080
        }
      ],
      "declare": false,
      "start": 6015,
      "end": 6081
    },
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
            "start": 6095,
            "end": 6098
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
                "start": 6101,
                "end": 6103
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6104,
                "end": 6108
              },
              "optional": false,
              "computed": false,
              "start": 6101,
              "end": 6108
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6P",
                "optional": false,
                "typeAnnotation": null,
                "start": 6109,
                "end": 6123
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6",
                "optional": false,
                "typeAnnotation": null,
                "start": 6125,
                "end": 6138
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6",
                "optional": false,
                "typeAnnotation": null,
                "start": 6140,
                "end": 6153
              }
            ],
            "optional": false,
            "start": 6101,
            "end": 6154
          },
          "definite": false,
          "start": 6095,
          "end": 6154
        }
      ],
      "declare": false,
      "start": 6091,
      "end": 6155
    },
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
            "start": 6169,
            "end": 6172
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
                    "start": 6175,
                    "end": 6177
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6178,
                    "end": 6182
                  },
                  "optional": false,
                  "computed": false,
                  "start": 6175,
                  "end": 6182
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6183,
                    "end": 6191
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6193,
                    "end": 6201
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6203,
                    "end": 6211
                  }
                ],
                "optional": false,
                "start": 6175,
                "end": 6212
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6213,
                "end": 6217
              },
              "optional": false,
              "computed": false,
              "start": 6175,
              "end": 6217
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6218,
                "end": 6227
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6229,
                "end": 6238
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6240,
                "end": 6249
              }
            ],
            "optional": false,
            "start": 6175,
            "end": 6250
          },
          "definite": false,
          "start": 6169,
          "end": 6250
        }
      ],
      "declare": false,
      "start": 6165,
      "end": 6251
    },
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
                  "start": 6267,
                  "end": 6275
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 6276,
                      "end": 6282
                    }
                  ],
                  "start": 6275,
                  "end": 6283
                },
                "start": 6267,
                "end": 6283
              },
              "start": 6265,
              "end": 6283
            },
            "start": 6263,
            "end": 6283
          },
          "init": null,
          "definite": false,
          "start": 6263,
          "end": 6283
        }
      ],
      "declare": false,
      "start": 6259,
      "end": 6284
    },
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
            "start": 6289,
            "end": 6292
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
                "start": 6295,
                "end": 6297
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6298,
                "end": 6302
              },
              "optional": false,
              "computed": false,
              "start": 6295,
              "end": 6302
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7",
                "optional": false,
                "typeAnnotation": null,
                "start": 6303,
                "end": 6316
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7",
                "optional": false,
                "typeAnnotation": null,
                "start": 6318,
                "end": 6331
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7",
                "optional": false,
                "typeAnnotation": null,
                "start": 6333,
                "end": 6346
              }
            ],
            "optional": false,
            "start": 6295,
            "end": 6347
          },
          "definite": false,
          "start": 6289,
          "end": 6347
        }
      ],
      "declare": false,
      "start": 6285,
      "end": 6348
    },
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
            "start": 6362,
            "end": 6365
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
                    "start": 6368,
                    "end": 6370
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6371,
                    "end": 6375
                  },
                  "optional": false,
                  "computed": false,
                  "start": 6368,
                  "end": 6375
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6376,
                    "end": 6385
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6387,
                    "end": 6396
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6398,
                    "end": 6407
                  }
                ],
                "optional": false,
                "start": 6368,
                "end": 6408
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6409,
                "end": 6413
              },
              "optional": false,
              "computed": false,
              "start": 6368,
              "end": 6413
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6414,
                "end": 6423
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6425,
                "end": 6434
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6436,
                "end": 6445
              }
            ],
            "optional": false,
            "start": 6368,
            "end": 6446
          },
          "definite": false,
          "start": 6362,
          "end": 6446
        }
      ],
      "declare": false,
      "start": 6358,
      "end": 6447
    },
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
                  "start": 6462,
                  "end": 6469
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 6470,
                      "end": 6476
                    }
                  ],
                  "start": 6469,
                  "end": 6477
                },
                "start": 6462,
                "end": 6477
              },
              "start": 6460,
              "end": 6477
            },
            "start": 6458,
            "end": 6477
          },
          "init": null,
          "definite": false,
          "start": 6458,
          "end": 6477
        }
      ],
      "declare": false,
      "start": 6454,
      "end": 6478
    },
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
            "start": 6483,
            "end": 6486
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
                "start": 6489,
                "end": 6491
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6492,
                "end": 6496
              },
              "optional": false,
              "computed": false,
              "start": 6489,
              "end": 6496
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7",
                "optional": false,
                "typeAnnotation": null,
                "start": 6497,
                "end": 6510
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7",
                "optional": false,
                "typeAnnotation": null,
                "start": 6512,
                "end": 6525
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7",
                "optional": false,
                "typeAnnotation": null,
                "start": 6527,
                "end": 6540
              }
            ],
            "optional": false,
            "start": 6489,
            "end": 6541
          },
          "definite": false,
          "start": 6483,
          "end": 6541
        }
      ],
      "declare": false,
      "start": 6479,
      "end": 6542
    },
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
            "start": 6556,
            "end": 6559
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
                "start": 6562,
                "end": 6564
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6565,
                "end": 6569
              },
              "optional": false,
              "computed": false,
              "start": 6562,
              "end": 6569
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7P",
                "optional": false,
                "typeAnnotation": null,
                "start": 6570,
                "end": 6584
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7P",
                "optional": false,
                "typeAnnotation": null,
                "start": 6586,
                "end": 6600
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7P",
                "optional": false,
                "typeAnnotation": null,
                "start": 6602,
                "end": 6616
              }
            ],
            "optional": false,
            "start": 6562,
            "end": 6617
          },
          "definite": false,
          "start": 6556,
          "end": 6617
        }
      ],
      "declare": false,
      "start": 6552,
      "end": 6618
    },
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
            "start": 6632,
            "end": 6635
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
                "start": 6638,
                "end": 6640
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6641,
                "end": 6645
              },
              "optional": false,
              "computed": false,
              "start": 6638,
              "end": 6645
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7P",
                "optional": false,
                "typeAnnotation": null,
                "start": 6646,
                "end": 6660
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7",
                "optional": false,
                "typeAnnotation": null,
                "start": 6662,
                "end": 6675
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7",
                "optional": false,
                "typeAnnotation": null,
                "start": 6677,
                "end": 6690
              }
            ],
            "optional": false,
            "start": 6638,
            "end": 6691
          },
          "definite": false,
          "start": 6632,
          "end": 6691
        }
      ],
      "declare": false,
      "start": 6628,
      "end": 6692
    },
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
            "start": 6706,
            "end": 6709
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
                    "start": 6712,
                    "end": 6714
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6715,
                    "end": 6719
                  },
                  "optional": false,
                  "computed": false,
                  "start": 6712,
                  "end": 6719
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6720,
                    "end": 6728
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6730,
                    "end": 6738
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6740,
                    "end": 6748
                  }
                ],
                "optional": false,
                "start": 6712,
                "end": 6749
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6750,
                "end": 6754
              },
              "optional": false,
              "computed": false,
              "start": 6712,
              "end": 6754
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6755,
                "end": 6763
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6765,
                "end": 6773
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6775,
                "end": 6783
              }
            ],
            "optional": false,
            "start": 6712,
            "end": 6784
          },
          "definite": false,
          "start": 6706,
          "end": 6784
        }
      ],
      "declare": false,
      "start": 6702,
      "end": 6785
    },
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
                  "start": 6802,
                  "end": 6810
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 6811,
                      "end": 6817
                    }
                  ],
                  "start": 6810,
                  "end": 6818
                },
                "start": 6802,
                "end": 6818
              },
              "start": 6800,
              "end": 6818
            },
            "start": 6798,
            "end": 6818
          },
          "init": null,
          "definite": false,
          "start": 6798,
          "end": 6818
        }
      ],
      "declare": false,
      "start": 6794,
      "end": 6819
    },
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
                        "start": 6839,
                        "end": 6842
                      },
                      "start": 6837,
                      "end": 6842
                    },
                    "start": 6836,
                    "end": 6842
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
                      "start": 6847,
                      "end": 6855
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 6856,
                          "end": 6862
                        }
                      ],
                      "start": 6855,
                      "end": 6863
                    },
                    "start": 6847,
                    "end": 6863
                  },
                  "start": 6844,
                  "end": 6863
                },
                "start": 6835,
                "end": 6863
              },
              "start": 6833,
              "end": 6863
            },
            "start": 6824,
            "end": 6863
          },
          "init": null,
          "definite": false,
          "start": 6824,
          "end": 6863
        }
      ],
      "declare": false,
      "start": 6820,
      "end": 6864
    },
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
                        "start": 6883,
                        "end": 6886
                      },
                      "start": 6881,
                      "end": 6886
                    },
                    "start": 6880,
                    "end": 6886
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
                      "start": 6891,
                      "end": 6898
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 6899,
                          "end": 6905
                        }
                      ],
                      "start": 6898,
                      "end": 6906
                    },
                    "start": 6891,
                    "end": 6906
                  },
                  "start": 6888,
                  "end": 6906
                },
                "start": 6879,
                "end": 6906
              },
              "start": 6877,
              "end": 6906
            },
            "start": 6869,
            "end": 6906
          },
          "init": null,
          "definite": false,
          "start": 6869,
          "end": 6906
        }
      ],
      "declare": false,
      "start": 6865,
      "end": 6907
    },
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
            "start": 6912,
            "end": 6915
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
                "start": 6918,
                "end": 6920
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6921,
                "end": 6925
              },
              "optional": false,
              "computed": false,
              "start": 6918,
              "end": 6925
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8",
                "optional": false,
                "typeAnnotation": null,
                "start": 6926,
                "end": 6939
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8",
                "optional": false,
                "typeAnnotation": null,
                "start": 6941,
                "end": 6954
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8",
                "optional": false,
                "typeAnnotation": null,
                "start": 6956,
                "end": 6969
              }
            ],
            "optional": false,
            "start": 6918,
            "end": 6970
          },
          "definite": false,
          "start": 6912,
          "end": 6970
        }
      ],
      "declare": false,
      "start": 6908,
      "end": 6971
    },
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
            "start": 6985,
            "end": 6988
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
                    "start": 6991,
                    "end": 6993
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6994,
                    "end": 6998
                  },
                  "optional": false,
                  "computed": false,
                  "start": 6991,
                  "end": 6998
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6999,
                    "end": 7008
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7010,
                    "end": 7019
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7021,
                    "end": 7030
                  }
                ],
                "optional": false,
                "start": 6991,
                "end": 7031
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7032,
                "end": 7036
              },
              "optional": false,
              "computed": false,
              "start": 6991,
              "end": 7036
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7037,
                "end": 7046
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7048,
                "end": 7057
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7059,
                "end": 7068
              }
            ],
            "optional": false,
            "start": 6991,
            "end": 7069
          },
          "definite": false,
          "start": 6985,
          "end": 7069
        }
      ],
      "declare": false,
      "start": 6981,
      "end": 7070
    },
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
                  "start": 7085,
                  "end": 7092
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 7093,
                      "end": 7099
                    }
                  ],
                  "start": 7092,
                  "end": 7100
                },
                "start": 7085,
                "end": 7100
              },
              "start": 7083,
              "end": 7100
            },
            "start": 7081,
            "end": 7100
          },
          "init": null,
          "definite": false,
          "start": 7081,
          "end": 7100
        }
      ],
      "declare": false,
      "start": 7077,
      "end": 7101
    },
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
            "start": 7106,
            "end": 7109
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
                "start": 7112,
                "end": 7114
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7115,
                "end": 7119
              },
              "optional": false,
              "computed": false,
              "start": 7112,
              "end": 7119
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8",
                "optional": false,
                "typeAnnotation": null,
                "start": 7120,
                "end": 7133
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8",
                "optional": false,
                "typeAnnotation": null,
                "start": 7135,
                "end": 7148
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8",
                "optional": false,
                "typeAnnotation": null,
                "start": 7150,
                "end": 7163
              }
            ],
            "optional": false,
            "start": 7112,
            "end": 7164
          },
          "definite": false,
          "start": 7106,
          "end": 7164
        }
      ],
      "declare": false,
      "start": 7102,
      "end": 7165
    },
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
            "start": 7179,
            "end": 7182
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
                "start": 7185,
                "end": 7187
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7188,
                "end": 7192
              },
              "optional": false,
              "computed": false,
              "start": 7185,
              "end": 7192
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8P",
                "optional": false,
                "typeAnnotation": null,
                "start": 7193,
                "end": 7207
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8P",
                "optional": false,
                "typeAnnotation": null,
                "start": 7209,
                "end": 7223
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8P",
                "optional": false,
                "typeAnnotation": null,
                "start": 7225,
                "end": 7239
              }
            ],
            "optional": false,
            "start": 7185,
            "end": 7240
          },
          "definite": false,
          "start": 7179,
          "end": 7240
        }
      ],
      "declare": false,
      "start": 7175,
      "end": 7241
    },
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
            "start": 7255,
            "end": 7258
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
                "start": 7261,
                "end": 7263
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7264,
                "end": 7268
              },
              "optional": false,
              "computed": false,
              "start": 7261,
              "end": 7268
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8P",
                "optional": false,
                "typeAnnotation": null,
                "start": 7269,
                "end": 7283
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8",
                "optional": false,
                "typeAnnotation": null,
                "start": 7285,
                "end": 7298
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8",
                "optional": false,
                "typeAnnotation": null,
                "start": 7300,
                "end": 7313
              }
            ],
            "optional": false,
            "start": 7261,
            "end": 7314
          },
          "definite": false,
          "start": 7255,
          "end": 7314
        }
      ],
      "declare": false,
      "start": 7251,
      "end": 7315
    },
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
            "start": 7329,
            "end": 7332
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
                    "start": 7335,
                    "end": 7337
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7338,
                    "end": 7342
                  },
                  "optional": false,
                  "computed": false,
                  "start": 7335,
                  "end": 7342
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7343,
                    "end": 7352
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7354,
                    "end": 7363
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7365,
                    "end": 7374
                  }
                ],
                "optional": false,
                "start": 7335,
                "end": 7375
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7376,
                "end": 7380
              },
              "optional": false,
              "computed": false,
              "start": 7335,
              "end": 7380
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7381,
                "end": 7390
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7392,
                "end": 7401
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7403,
                "end": 7412
              }
            ],
            "optional": false,
            "start": 7335,
            "end": 7413
          },
          "definite": false,
          "start": 7329,
          "end": 7413
        }
      ],
      "declare": false,
      "start": 7325,
      "end": 7414
    },
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
                  "start": 7430,
                  "end": 7438
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 7439,
                      "end": 7445
                    }
                  ],
                  "start": 7438,
                  "end": 7446
                },
                "start": 7430,
                "end": 7446
              },
              "start": 7428,
              "end": 7446
            },
            "start": 7426,
            "end": 7446
          },
          "init": null,
          "definite": false,
          "start": 7426,
          "end": 7446
        }
      ],
      "declare": false,
      "start": 7422,
      "end": 7447
    },
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
            "start": 7452,
            "end": 7455
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
                "start": 7458,
                "end": 7460
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7461,
                "end": 7465
              },
              "optional": false,
              "computed": false,
              "start": 7458,
              "end": 7465
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9",
                "optional": false,
                "typeAnnotation": null,
                "start": 7466,
                "end": 7479
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9",
                "optional": false,
                "typeAnnotation": null,
                "start": 7481,
                "end": 7494
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9",
                "optional": false,
                "typeAnnotation": null,
                "start": 7496,
                "end": 7509
              }
            ],
            "optional": false,
            "start": 7458,
            "end": 7510
          },
          "definite": false,
          "start": 7452,
          "end": 7510
        }
      ],
      "declare": false,
      "start": 7448,
      "end": 7511
    },
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
            "start": 7525,
            "end": 7528
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
                "start": 7531,
                "end": 7533
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7534,
                "end": 7538
              },
              "optional": false,
              "computed": false,
              "start": 7531,
              "end": 7538
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7539,
                "end": 7548
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7550,
                "end": 7559
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7561,
                "end": 7570
              }
            ],
            "optional": false,
            "start": 7531,
            "end": 7571
          },
          "definite": false,
          "start": 7525,
          "end": 7571
        }
      ],
      "declare": false,
      "start": 7521,
      "end": 7572
    },
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
            "start": 7583,
            "end": 7586
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
                "start": 7589,
                "end": 7591
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7592,
                "end": 7596
              },
              "optional": false,
              "computed": false,
              "start": 7589,
              "end": 7596
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7597,
                "end": 7606
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7608,
                "end": 7617
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7619,
                "end": 7628
              }
            ],
            "optional": false,
            "start": 7589,
            "end": 7629
          },
          "definite": false,
          "start": 7583,
          "end": 7629
        }
      ],
      "declare": false,
      "start": 7579,
      "end": 7630
    },
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
            "start": 7641,
            "end": 7644
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
                "start": 7647,
                "end": 7649
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7650,
                "end": 7654
              },
              "optional": false,
              "computed": false,
              "start": 7647,
              "end": 7654
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 7655,
                "end": 7667
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7669,
                "end": 7678
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7680,
                "end": 7689
              }
            ],
            "optional": false,
            "start": 7647,
            "end": 7690
          },
          "definite": false,
          "start": 7641,
          "end": 7690
        }
      ],
      "declare": false,
      "start": 7637,
      "end": 7691
    },
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
            "start": 7705,
            "end": 7708
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
                    "start": 7711,
                    "end": 7713
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7714,
                    "end": 7718
                  },
                  "optional": false,
                  "computed": false,
                  "start": 7711,
                  "end": 7718
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7719,
                    "end": 7731
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7733,
                    "end": 7742
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7744,
                    "end": 7753
                  }
                ],
                "optional": false,
                "start": 7711,
                "end": 7754
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7755,
                "end": 7759
              },
              "optional": false,
              "computed": false,
              "start": 7711,
              "end": 7759
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7760,
                "end": 7769
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7771,
                "end": 7780
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7782,
                "end": 7791
              }
            ],
            "optional": false,
            "start": 7711,
            "end": 7792
          },
          "definite": false,
          "start": 7705,
          "end": 7792
        }
      ],
      "declare": false,
      "start": 7701,
      "end": 7793
    },
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
                  "start": 7808,
                  "end": 7815
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 7816,
                      "end": 7822
                    }
                  ],
                  "start": 7815,
                  "end": 7823
                },
                "start": 7808,
                "end": 7823
              },
              "start": 7806,
              "end": 7823
            },
            "start": 7804,
            "end": 7823
          },
          "init": null,
          "definite": false,
          "start": 7804,
          "end": 7823
        }
      ],
      "declare": false,
      "start": 7800,
      "end": 7824
    },
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
            "start": 7829,
            "end": 7832
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
                "start": 7835,
                "end": 7837
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7838,
                "end": 7842
              },
              "optional": false,
              "computed": false,
              "start": 7835,
              "end": 7842
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9",
                "optional": false,
                "typeAnnotation": null,
                "start": 7843,
                "end": 7856
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9",
                "optional": false,
                "typeAnnotation": null,
                "start": 7858,
                "end": 7871
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9",
                "optional": false,
                "typeAnnotation": null,
                "start": 7873,
                "end": 7886
              }
            ],
            "optional": false,
            "start": 7835,
            "end": 7887
          },
          "definite": false,
          "start": 7829,
          "end": 7887
        }
      ],
      "declare": false,
      "start": 7825,
      "end": 7888
    },
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
            "start": 7902,
            "end": 7905
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
                "start": 7908,
                "end": 7910
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7911,
                "end": 7915
              },
              "optional": false,
              "computed": false,
              "start": 7908,
              "end": 7915
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9P",
                "optional": false,
                "typeAnnotation": null,
                "start": 7916,
                "end": 7930
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9P",
                "optional": false,
                "typeAnnotation": null,
                "start": 7932,
                "end": 7946
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9P",
                "optional": false,
                "typeAnnotation": null,
                "start": 7948,
                "end": 7962
              }
            ],
            "optional": false,
            "start": 7908,
            "end": 7963
          },
          "definite": false,
          "start": 7902,
          "end": 7963
        }
      ],
      "declare": false,
      "start": 7898,
      "end": 7964
    },
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
            "start": 7978,
            "end": 7981
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
                "start": 7984,
                "end": 7986
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7987,
                "end": 7991
              },
              "optional": false,
              "computed": false,
              "start": 7984,
              "end": 7991
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9P",
                "optional": false,
                "typeAnnotation": null,
                "start": 7992,
                "end": 8006
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9",
                "optional": false,
                "typeAnnotation": null,
                "start": 8008,
                "end": 8021
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9",
                "optional": false,
                "typeAnnotation": null,
                "start": 8023,
                "end": 8036
              }
            ],
            "optional": false,
            "start": 7984,
            "end": 8037
          },
          "definite": false,
          "start": 7978,
          "end": 8037
        }
      ],
      "declare": false,
      "start": 7974,
      "end": 8038
    },
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
            "start": 8052,
            "end": 8055
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
                "start": 8058,
                "end": 8060
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8061,
                "end": 8065
              },
              "optional": false,
              "computed": false,
              "start": 8058,
              "end": 8065
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8066,
                "end": 8074
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8076,
                "end": 8084
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8086,
                "end": 8094
              }
            ],
            "optional": false,
            "start": 8058,
            "end": 8095
          },
          "definite": false,
          "start": 8052,
          "end": 8095
        }
      ],
      "declare": false,
      "start": 8048,
      "end": 8096
    },
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
            "start": 8107,
            "end": 8110
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
                "start": 8113,
                "end": 8115
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8116,
                "end": 8120
              },
              "optional": false,
              "computed": false,
              "start": 8113,
              "end": 8120
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8121,
                "end": 8129
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8131,
                "end": 8139
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8141,
                "end": 8149
              }
            ],
            "optional": false,
            "start": 8113,
            "end": 8150
          },
          "definite": false,
          "start": 8107,
          "end": 8150
        }
      ],
      "declare": false,
      "start": 8103,
      "end": 8151
    },
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
            "start": 8162,
            "end": 8165
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
                "start": 8168,
                "end": 8170
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8171,
                "end": 8175
              },
              "optional": false,
              "computed": false,
              "start": 8168,
              "end": 8175
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 8176,
                "end": 8188
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8190,
                "end": 8199
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8201,
                "end": 8210
              }
            ],
            "optional": false,
            "start": 8168,
            "end": 8211
          },
          "definite": false,
          "start": 8162,
          "end": 8211
        }
      ],
      "declare": false,
      "start": 8158,
      "end": 8212
    },
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
            "start": 8226,
            "end": 8229
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
                    "start": 8232,
                    "end": 8234
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8235,
                    "end": 8239
                  },
                  "optional": false,
                  "computed": false,
                  "start": 8232,
                  "end": 8239
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8240,
                    "end": 8252
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8254,
                    "end": 8263
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8265,
                    "end": 8274
                  }
                ],
                "optional": false,
                "start": 8232,
                "end": 8275
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8276,
                "end": 8280
              },
              "optional": false,
              "computed": false,
              "start": 8232,
              "end": 8280
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8281,
                "end": 8290
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8292,
                "end": 8301
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8303,
                "end": 8312
              }
            ],
            "optional": false,
            "start": 8232,
            "end": 8313
          },
          "definite": false,
          "start": 8226,
          "end": 8313
        }
      ],
      "declare": false,
      "start": 8222,
      "end": 8314
    },
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
            "start": 8326,
            "end": 8329
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "testFunction10",
              "optional": false,
              "typeAnnotation": null,
              "start": 8332,
              "end": 8346
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
                    "start": 8347,
                    "end": 8348
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8352,
                  "end": 8353
                },
                "id": null,
                "generator": false,
                "start": 8347,
                "end": 8353
              }
            ],
            "optional": false,
            "start": 8332,
            "end": 8354
          },
          "definite": false,
          "start": 8326,
          "end": 8354
        }
      ],
      "declare": false,
      "start": 8322,
      "end": 8355
    },
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
            "start": 8360,
            "end": 8364
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
                "start": 8367,
                "end": 8370
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8371,
                "end": 8375
              },
              "optional": false,
              "computed": false,
              "start": 8367,
              "end": 8375
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10",
                "optional": false,
                "typeAnnotation": null,
                "start": 8376,
                "end": 8390
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10",
                "optional": false,
                "typeAnnotation": null,
                "start": 8392,
                "end": 8406
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10",
                "optional": false,
                "typeAnnotation": null,
                "start": 8408,
                "end": 8422
              }
            ],
            "optional": false,
            "start": 8367,
            "end": 8423
          },
          "definite": false,
          "start": 8360,
          "end": 8423
        }
      ],
      "declare": false,
      "start": 8356,
      "end": 8424
    },
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
            "start": 8435,
            "end": 8439
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
                "start": 8442,
                "end": 8445
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8446,
                "end": 8450
              },
              "optional": false,
              "computed": false,
              "start": 8442,
              "end": 8450
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8451,
                "end": 8460
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8462,
                "end": 8471
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8473,
                "end": 8482
              }
            ],
            "optional": false,
            "start": 8442,
            "end": 8483
          },
          "definite": false,
          "start": 8435,
          "end": 8483
        }
      ],
      "declare": false,
      "start": 8431,
      "end": 8484
    },
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
            "start": 8495,
            "end": 8499
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
                "start": 8502,
                "end": 8505
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8506,
                "end": 8510
              },
              "optional": false,
              "computed": false,
              "start": 8502,
              "end": 8510
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8511,
                "end": 8520
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8522,
                "end": 8531
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8533,
                "end": 8542
              }
            ],
            "optional": false,
            "start": 8502,
            "end": 8543
          },
          "definite": false,
          "start": 8495,
          "end": 8543
        }
      ],
      "declare": false,
      "start": 8491,
      "end": 8544
    },
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
            "start": 8555,
            "end": 8559
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
                "start": 8562,
                "end": 8565
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8566,
                "end": 8570
              },
              "optional": false,
              "computed": false,
              "start": 8562,
              "end": 8570
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 8571,
                "end": 8583
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8585,
                "end": 8594
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8596,
                "end": 8605
              }
            ],
            "optional": false,
            "start": 8562,
            "end": 8606
          },
          "definite": false,
          "start": 8555,
          "end": 8606
        }
      ],
      "declare": false,
      "start": 8551,
      "end": 8607
    },
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
            "start": 8621,
            "end": 8625
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
                    "start": 8628,
                    "end": 8631
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8632,
                    "end": 8636
                  },
                  "optional": false,
                  "computed": false,
                  "start": 8628,
                  "end": 8636
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8637,
                    "end": 8649
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8651,
                    "end": 8660
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8662,
                    "end": 8671
                  }
                ],
                "optional": false,
                "start": 8628,
                "end": 8672
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8673,
                "end": 8677
              },
              "optional": false,
              "computed": false,
              "start": 8628,
              "end": 8677
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8678,
                "end": 8687
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8689,
                "end": 8698
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8700,
                "end": 8709
              }
            ],
            "optional": false,
            "start": 8628,
            "end": 8710
          },
          "definite": false,
          "start": 8621,
          "end": 8710
        }
      ],
      "declare": false,
      "start": 8617,
      "end": 8711
    },
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
            "start": 8722,
            "end": 8725
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "testFunction10P",
              "optional": false,
              "typeAnnotation": null,
              "start": 8728,
              "end": 8743
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
                    "start": 8744,
                    "end": 8745
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8749,
                  "end": 8750
                },
                "id": null,
                "generator": false,
                "start": 8744,
                "end": 8750
              }
            ],
            "optional": false,
            "start": 8728,
            "end": 8751
          },
          "definite": false,
          "start": 8722,
          "end": 8751
        }
      ],
      "declare": false,
      "start": 8718,
      "end": 8752
    },
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
            "start": 8757,
            "end": 8761
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
                "start": 8764,
                "end": 8767
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8768,
                "end": 8772
              },
              "optional": false,
              "computed": false,
              "start": 8764,
              "end": 8772
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10",
                "optional": false,
                "typeAnnotation": null,
                "start": 8773,
                "end": 8787
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10",
                "optional": false,
                "typeAnnotation": null,
                "start": 8789,
                "end": 8803
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10",
                "optional": false,
                "typeAnnotation": null,
                "start": 8805,
                "end": 8819
              }
            ],
            "optional": false,
            "start": 8764,
            "end": 8820
          },
          "definite": false,
          "start": 8757,
          "end": 8820
        }
      ],
      "declare": false,
      "start": 8753,
      "end": 8821
    },
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
            "start": 8832,
            "end": 8836
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
                "start": 8839,
                "end": 8842
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8843,
                "end": 8847
              },
              "optional": false,
              "computed": false,
              "start": 8839,
              "end": 8847
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10P",
                "optional": false,
                "typeAnnotation": null,
                "start": 8848,
                "end": 8863
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10P",
                "optional": false,
                "typeAnnotation": null,
                "start": 8865,
                "end": 8880
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10P",
                "optional": false,
                "typeAnnotation": null,
                "start": 8882,
                "end": 8897
              }
            ],
            "optional": false,
            "start": 8839,
            "end": 8898
          },
          "definite": false,
          "start": 8832,
          "end": 8898
        }
      ],
      "declare": false,
      "start": 8828,
      "end": 8899
    },
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
            "start": 8910,
            "end": 8914
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
                "start": 8917,
                "end": 8920
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8921,
                "end": 8925
              },
              "optional": false,
              "computed": false,
              "start": 8917,
              "end": 8925
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10P",
                "optional": false,
                "typeAnnotation": null,
                "start": 8926,
                "end": 8941
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10",
                "optional": false,
                "typeAnnotation": null,
                "start": 8943,
                "end": 8957
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10",
                "optional": false,
                "typeAnnotation": null,
                "start": 8959,
                "end": 8973
              }
            ],
            "optional": false,
            "start": 8917,
            "end": 8974
          },
          "definite": false,
          "start": 8910,
          "end": 8974
        }
      ],
      "declare": false,
      "start": 8906,
      "end": 8975
    },
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
            "start": 8986,
            "end": 8990
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
                "start": 8993,
                "end": 8996
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8997,
                "end": 9001
              },
              "optional": false,
              "computed": false,
              "start": 8993,
              "end": 9001
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9002,
                "end": 9010
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9012,
                "end": 9020
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9022,
                "end": 9030
              }
            ],
            "optional": false,
            "start": 8993,
            "end": 9031
          },
          "definite": false,
          "start": 8986,
          "end": 9031
        }
      ],
      "declare": false,
      "start": 8982,
      "end": 9032
    },
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
            "start": 9043,
            "end": 9047
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
                "start": 9050,
                "end": 9053
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9054,
                "end": 9058
              },
              "optional": false,
              "computed": false,
              "start": 9050,
              "end": 9058
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9059,
                "end": 9068
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9070,
                "end": 9078
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9080,
                "end": 9089
              }
            ],
            "optional": false,
            "start": 9050,
            "end": 9090
          },
          "definite": false,
          "start": 9043,
          "end": 9090
        }
      ],
      "declare": false,
      "start": 9039,
      "end": 9091
    },
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
            "start": 9102,
            "end": 9106
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
                "start": 9109,
                "end": 9112
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9113,
                "end": 9117
              },
              "optional": false,
              "computed": false,
              "start": 9109,
              "end": 9117
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunctionP",
                "optional": false,
                "typeAnnotation": null,
                "start": 9118,
                "end": 9131
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9133,
                "end": 9142
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9144,
                "end": 9153
              }
            ],
            "optional": false,
            "start": 9109,
            "end": 9154
          },
          "definite": false,
          "start": 9102,
          "end": 9154
        }
      ],
      "declare": false,
      "start": 9098,
      "end": 9155
    },
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
            "start": 9169,
            "end": 9173
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
                    "start": 9176,
                    "end": 9179
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9180,
                    "end": 9184
                  },
                  "optional": false,
                  "computed": false,
                  "start": 9176,
                  "end": 9184
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunctionP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9185,
                    "end": 9198
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9200,
                    "end": 9209
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9211,
                    "end": 9220
                  }
                ],
                "optional": false,
                "start": 9176,
                "end": 9221
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9222,
                "end": 9226
              },
              "optional": false,
              "computed": false,
              "start": 9176,
              "end": 9226
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9227,
                "end": 9235
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9237,
                "end": 9246
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9248,
                "end": 9257
              }
            ],
            "optional": false,
            "start": 9176,
            "end": 9258
          },
          "definite": false,
          "start": 9169,
          "end": 9258
        }
      ],
      "declare": false,
      "start": 9165,
      "end": 9259
    },
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
                  "start": 9276,
                  "end": 9284
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 9285,
                      "end": 9291
                    }
                  ],
                  "start": 9284,
                  "end": 9292
                },
                "start": 9276,
                "end": 9292
              },
              "start": 9274,
              "end": 9292
            },
            "start": 9271,
            "end": 9292
          },
          "init": null,
          "definite": false,
          "start": 9271,
          "end": 9292
        }
      ],
      "declare": false,
      "start": 9267,
      "end": 9293
    },
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
            "start": 9298,
            "end": 9302
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
                "start": 9305,
                "end": 9308
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9309,
                "end": 9313
              },
              "optional": false,
              "computed": false,
              "start": 9305,
              "end": 9313
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11",
                "optional": false,
                "typeAnnotation": null,
                "start": 9314,
                "end": 9328
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11",
                "optional": false,
                "typeAnnotation": null,
                "start": 9330,
                "end": 9344
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11",
                "optional": false,
                "typeAnnotation": null,
                "start": 9346,
                "end": 9360
              }
            ],
            "optional": false,
            "start": 9305,
            "end": 9361
          },
          "definite": false,
          "start": 9298,
          "end": 9361
        }
      ],
      "declare": false,
      "start": 9294,
      "end": 9362
    },
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
                  "start": 9378,
                  "end": 9385
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 9386,
                      "end": 9392
                    }
                  ],
                  "start": 9385,
                  "end": 9393
                },
                "start": 9378,
                "end": 9393
              },
              "start": 9376,
              "end": 9393
            },
            "start": 9373,
            "end": 9393
          },
          "init": null,
          "definite": false,
          "start": 9373,
          "end": 9393
        }
      ],
      "declare": false,
      "start": 9369,
      "end": 9394
    },
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
            "start": 9399,
            "end": 9403
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
                "start": 9406,
                "end": 9409
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9410,
                "end": 9414
              },
              "optional": false,
              "computed": false,
              "start": 9406,
              "end": 9414
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11",
                "optional": false,
                "typeAnnotation": null,
                "start": 9415,
                "end": 9429
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11",
                "optional": false,
                "typeAnnotation": null,
                "start": 9431,
                "end": 9445
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11",
                "optional": false,
                "typeAnnotation": null,
                "start": 9447,
                "end": 9461
              }
            ],
            "optional": false,
            "start": 9406,
            "end": 9462
          },
          "definite": false,
          "start": 9399,
          "end": 9462
        }
      ],
      "declare": false,
      "start": 9395,
      "end": 9463
    },
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
            "start": 9474,
            "end": 9478
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
                "start": 9481,
                "end": 9484
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9485,
                "end": 9489
              },
              "optional": false,
              "computed": false,
              "start": 9481,
              "end": 9489
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11P",
                "optional": false,
                "typeAnnotation": null,
                "start": 9490,
                "end": 9505
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11P",
                "optional": false,
                "typeAnnotation": null,
                "start": 9507,
                "end": 9522
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11P",
                "optional": false,
                "typeAnnotation": null,
                "start": 9524,
                "end": 9539
              }
            ],
            "optional": false,
            "start": 9481,
            "end": 9540
          },
          "definite": false,
          "start": 9474,
          "end": 9540
        }
      ],
      "declare": false,
      "start": 9470,
      "end": 9541
    },
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
            "start": 9555,
            "end": 9559
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
                "start": 9562,
                "end": 9565
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9566,
                "end": 9570
              },
              "optional": false,
              "computed": false,
              "start": 9562,
              "end": 9570
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11P",
                "optional": false,
                "typeAnnotation": null,
                "start": 9571,
                "end": 9586
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11",
                "optional": false,
                "typeAnnotation": null,
                "start": 9588,
                "end": 9602
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11",
                "optional": false,
                "typeAnnotation": null,
                "start": 9604,
                "end": 9618
              }
            ],
            "optional": false,
            "start": 9562,
            "end": 9619
          },
          "definite": false,
          "start": 9555,
          "end": 9619
        }
      ],
      "declare": false,
      "start": 9551,
      "end": 9620
    },
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
            "start": 9635,
            "end": 9638
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "testFunction12",
              "optional": false,
              "typeAnnotation": null,
              "start": 9641,
              "end": 9655
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
                    "start": 9656,
                    "end": 9657
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9661,
                  "end": 9662
                },
                "id": null,
                "generator": false,
                "start": 9656,
                "end": 9662
              }
            ],
            "optional": false,
            "start": 9641,
            "end": 9663
          },
          "definite": false,
          "start": 9635,
          "end": 9663
        }
      ],
      "declare": false,
      "start": 9631,
      "end": 9664
    },
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
            "start": 9669,
            "end": 9673
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
                "start": 9676,
                "end": 9679
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9680,
                "end": 9684
              },
              "optional": false,
              "computed": false,
              "start": 9676,
              "end": 9684
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12",
                "optional": false,
                "typeAnnotation": null,
                "start": 9685,
                "end": 9699
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12",
                "optional": false,
                "typeAnnotation": null,
                "start": 9701,
                "end": 9715
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12",
                "optional": false,
                "typeAnnotation": null,
                "start": 9717,
                "end": 9731
              }
            ],
            "optional": false,
            "start": 9676,
            "end": 9732
          },
          "definite": false,
          "start": 9669,
          "end": 9732
        }
      ],
      "declare": false,
      "start": 9665,
      "end": 9733
    },
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
            "start": 9744,
            "end": 9747
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "testFunction12",
              "optional": false,
              "typeAnnotation": null,
              "start": 9750,
              "end": 9764
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
                    "start": 9765,
                    "end": 9766
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9770,
                  "end": 9771
                },
                "id": null,
                "generator": false,
                "start": 9765,
                "end": 9771
              }
            ],
            "optional": false,
            "start": 9750,
            "end": 9772
          },
          "definite": false,
          "start": 9744,
          "end": 9772
        }
      ],
      "declare": false,
      "start": 9740,
      "end": 9773
    },
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
            "start": 9778,
            "end": 9782
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
                "start": 9785,
                "end": 9788
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9789,
                "end": 9793
              },
              "optional": false,
              "computed": false,
              "start": 9785,
              "end": 9793
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12",
                "optional": false,
                "typeAnnotation": null,
                "start": 9794,
                "end": 9808
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12",
                "optional": false,
                "typeAnnotation": null,
                "start": 9810,
                "end": 9824
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12",
                "optional": false,
                "typeAnnotation": null,
                "start": 9826,
                "end": 9840
              }
            ],
            "optional": false,
            "start": 9785,
            "end": 9841
          },
          "definite": false,
          "start": 9778,
          "end": 9841
        }
      ],
      "declare": false,
      "start": 9774,
      "end": 9842
    },
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
            "start": 9853,
            "end": 9857
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
                "start": 9860,
                "end": 9863
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9864,
                "end": 9868
              },
              "optional": false,
              "computed": false,
              "start": 9860,
              "end": 9868
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12P",
                "optional": false,
                "typeAnnotation": null,
                "start": 9869,
                "end": 9884
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12P",
                "optional": false,
                "typeAnnotation": null,
                "start": 9886,
                "end": 9901
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12P",
                "optional": false,
                "typeAnnotation": null,
                "start": 9903,
                "end": 9918
              }
            ],
            "optional": false,
            "start": 9860,
            "end": 9919
          },
          "definite": false,
          "start": 9853,
          "end": 9919
        }
      ],
      "declare": false,
      "start": 9849,
      "end": 9920
    },
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
            "start": 9931,
            "end": 9935
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
                "start": 9938,
                "end": 9941
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9942,
                "end": 9946
              },
              "optional": false,
              "computed": false,
              "start": 9938,
              "end": 9946
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12P",
                "optional": false,
                "typeAnnotation": null,
                "start": 9947,
                "end": 9962
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12",
                "optional": false,
                "typeAnnotation": null,
                "start": 9964,
                "end": 9978
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12",
                "optional": false,
                "typeAnnotation": null,
                "start": 9980,
                "end": 9994
              }
            ],
            "optional": false,
            "start": 9938,
            "end": 9995
          },
          "definite": false,
          "start": 9931,
          "end": 9995
        }
      ],
      "declare": false,
      "start": 9927,
      "end": 9996
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 78,
  "end": 10002
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 78,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 88,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 105,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 113,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 124,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 134,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 137,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 149,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 158,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 165,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 170,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 173,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 185,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 197,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 207,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 212,
    "end": 214
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 215,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 222,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 238,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 246,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 257,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 267,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 270,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 282,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 291,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 298,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 303,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 309,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 321,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 331,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 336,
    "end": 338
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 339,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 346,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 362,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 369,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 370,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 381,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 386,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 391,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 397,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 406,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 413,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 418,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 421,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 433,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 445,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 455,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 460,
    "end": 462
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 463,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 468,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 470,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 480,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 486,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 494,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 505,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 515,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 519,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 521,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 529,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 530,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 537,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 542,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 548,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 559,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 560,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 570,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 575,
    "end": 577
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 578,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 585,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 592,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 595,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "done",
    "start": 601,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 605,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 608,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 609,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 619,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 620,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 625,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 627,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 630,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 633,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 636,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 638,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 646,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 647,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 652,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 654,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 659,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 662,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 665,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 667,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 678,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 679,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 687,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 689,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 694,
    "end": 696
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 697,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "void",
    "start": 704,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 710,
    "end": 711
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 713,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 723,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 731,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 735,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 741,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 745,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 748,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 749,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 759,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 760,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 765,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 770,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 774,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 776,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 784,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 785,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 790,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 792,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 797,
    "end": 799
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 801,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 803,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 812,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 814,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 815,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 823,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 825,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 828,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 830,
    "end": 832
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 833,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 837,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 838,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 840,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 848,
    "end": 849
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 849,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 850,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 851,
    "end": 852
  },
  {
    "type": "Identifier",
    "value": "done",
    "start": 857,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 861,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 863,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 864,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 865,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 866,
    "end": 867
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 867,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 874,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 877,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 878,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 883,
    "end": 884
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 885,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 886,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 888,
    "end": 890
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 891,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 894,
    "end": 895
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 896,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 901,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 902,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 904,
    "end": 905
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 905,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 910,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 912,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 915,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 917,
    "end": 919
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 920,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 923,
    "end": 924
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 925,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 933,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 934,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 936,
    "end": 937
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 937,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 945,
    "end": 946
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 947,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 950,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 952,
    "end": 954
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 955,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 959,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 960,
    "end": 961
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 962,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 968,
    "end": 969
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 971,
    "end": 978
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 979,
    "end": 987
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 988,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 1004,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1013,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1022,
    "end": 1029
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1030,
    "end": 1038
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 1039,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1056,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1064,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1073,
    "end": 1080
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1081,
    "end": 1089
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 1090,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 1107,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1121,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1132,
    "end": 1139
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1140,
    "end": 1148
  },
  {
    "type": "Identifier",
    "value": "testFunction2P",
    "start": 1149,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1167,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1180,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1191,
    "end": 1198
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1199,
    "end": 1207
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 1208,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1225,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 1234,
    "end": 1242
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1243,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1252,
    "end": 1259
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1260,
    "end": 1268
  },
  {
    "type": "Identifier",
    "value": "testFunction3P",
    "start": 1269,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1287,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1296,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1304,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1313,
    "end": 1320
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1321,
    "end": 1329
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 1330,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1347,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1359,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 1368,
    "end": 1376
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1377,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1386,
    "end": 1393
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1394,
    "end": 1402
  },
  {
    "type": "Identifier",
    "value": "testFunction4P",
    "start": 1403,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1421,
    "end": 1427
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1433,
    "end": 1439
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1442,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1450,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1459,
    "end": 1466
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1467,
    "end": 1475
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 1476,
    "end": 1489
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1489,
    "end": 1490
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1490,
    "end": 1491
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1493,
    "end": 1499
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1501,
    "end": 1503
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1506,
    "end": 1507
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1509,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1517,
    "end": 1519
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1520,
    "end": 1526
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 1529,
    "end": 1537
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1538,
    "end": 1544
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1544,
    "end": 1545
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1547,
    "end": 1554
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1555,
    "end": 1563
  },
  {
    "type": "Identifier",
    "value": "testFunction5P",
    "start": 1564,
    "end": 1578
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1578,
    "end": 1579
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1582,
    "end": 1588
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1590,
    "end": 1592
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1592,
    "end": 1593
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1596,
    "end": 1597
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1598,
    "end": 1604
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1604,
    "end": 1605
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1606,
    "end": 1608
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1609,
    "end": 1615
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1615,
    "end": 1616
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1616,
    "end": 1617
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1618,
    "end": 1625
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1626,
    "end": 1632
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1633,
    "end": 1634
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1635,
    "end": 1642
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1643,
    "end": 1651
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 1652,
    "end": 1665
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1665,
    "end": 1666
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1667,
    "end": 1668
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1669,
    "end": 1675
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1675,
    "end": 1676
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1677,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1681,
    "end": 1682
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1684,
    "end": 1685
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1685,
    "end": 1686
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1686,
    "end": 1687
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1688,
    "end": 1689
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1689,
    "end": 1690
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1691,
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
    "value": ":",
    "start": 1696,
    "end": 1697
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 1698,
    "end": 1706
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1706,
    "end": 1707
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1707,
    "end": 1713
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1713,
    "end": 1714
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1714,
    "end": 1715
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1716,
    "end": 1723
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1724,
    "end": 1732
  },
  {
    "type": "Identifier",
    "value": "testFunction6P",
    "start": 1733,
    "end": 1747
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1747,
    "end": 1748
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1748,
    "end": 1749
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1749,
    "end": 1750
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1751,
    "end": 1757
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1757,
    "end": 1758
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1759,
    "end": 1761
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1761,
    "end": 1762
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1763,
    "end": 1764
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1764,
    "end": 1765
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1765,
    "end": 1766
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1767,
    "end": 1768
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1768,
    "end": 1769
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1770,
    "end": 1771
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1771,
    "end": 1772
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1773,
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
    "value": ":",
    "start": 1778,
    "end": 1779
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1780,
    "end": 1787
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1787,
    "end": 1788
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1788,
    "end": 1794
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1794,
    "end": 1795
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1795,
    "end": 1796
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1797,
    "end": 1804
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1805,
    "end": 1813
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 1814,
    "end": 1827
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1827,
    "end": 1828
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1828,
    "end": 1830
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1830,
    "end": 1831
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1832,
    "end": 1833
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1834,
    "end": 1835
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1835,
    "end": 1836
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1836,
    "end": 1837
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1837,
    "end": 1838
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1839,
    "end": 1840
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1840,
    "end": 1841
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1842,
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
    "value": ":",
    "start": 1847,
    "end": 1848
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 1849,
    "end": 1857
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1857,
    "end": 1858
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1858,
    "end": 1864
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1864,
    "end": 1865
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1865,
    "end": 1866
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1867,
    "end": 1874
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1875,
    "end": 1883
  },
  {
    "type": "Identifier",
    "value": "testFunction7P",
    "start": 1884,
    "end": 1898
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1898,
    "end": 1899
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1899,
    "end": 1901
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1901,
    "end": 1902
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1903,
    "end": 1904
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1904,
    "end": 1905
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1905,
    "end": 1906
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1908,
    "end": 1909
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1910,
    "end": 1911
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1911,
    "end": 1912
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1913,
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
    "value": ":",
    "start": 1918,
    "end": 1919
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1920,
    "end": 1927
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1927,
    "end": 1928
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1928,
    "end": 1934
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1934,
    "end": 1935
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1935,
    "end": 1936
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1937,
    "end": 1944
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1945,
    "end": 1953
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 1954,
    "end": 1967
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1967,
    "end": 1968
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1968,
    "end": 1969
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1969,
    "end": 1970
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1970,
    "end": 1971
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1971,
    "end": 1972
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1972,
    "end": 1973
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1974,
    "end": 1975
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1975,
    "end": 1976
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1977,
    "end": 1979
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1979,
    "end": 1980
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1981,
    "end": 1982
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1982,
    "end": 1983
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1983,
    "end": 1984
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1985,
    "end": 1986
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1986,
    "end": 1987
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1988,
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
    "value": ":",
    "start": 1993,
    "end": 1994
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 1995,
    "end": 2003
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2004,
    "end": 2005
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2005,
    "end": 2006
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2006,
    "end": 2007
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2008,
    "end": 2015
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2016,
    "end": 2024
  },
  {
    "type": "Identifier",
    "value": "testFunction8P",
    "start": 2025,
    "end": 2039
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2039,
    "end": 2040
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2040,
    "end": 2041
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2041,
    "end": 2042
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2042,
    "end": 2043
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2043,
    "end": 2044
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2044,
    "end": 2045
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2046,
    "end": 2047
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2047,
    "end": 2048
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2049,
    "end": 2051
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2051,
    "end": 2052
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2053,
    "end": 2054
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2054,
    "end": 2055
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2055,
    "end": 2056
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2057,
    "end": 2058
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2058,
    "end": 2059
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2060,
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
    "value": ":",
    "start": 2065,
    "end": 2066
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2067,
    "end": 2074
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2074,
    "end": 2075
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2075,
    "end": 2076
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2076,
    "end": 2077
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2077,
    "end": 2078
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2079,
    "end": 2086
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2087,
    "end": 2095
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 2096,
    "end": 2109
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2109,
    "end": 2110
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2110,
    "end": 2111
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2111,
    "end": 2112
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2112,
    "end": 2113
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2113,
    "end": 2114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2114,
    "end": 2115
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2116,
    "end": 2117
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2117,
    "end": 2118
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2119,
    "end": 2121
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2121,
    "end": 2122
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2123,
    "end": 2124
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2124,
    "end": 2125
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2125,
    "end": 2126
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2126,
    "end": 2127
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2127,
    "end": 2128
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2128,
    "end": 2129
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2130,
    "end": 2131
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2131,
    "end": 2132
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2133,
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
    "value": ":",
    "start": 2138,
    "end": 2139
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 2140,
    "end": 2148
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2148,
    "end": 2149
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2149,
    "end": 2150
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2150,
    "end": 2151
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2151,
    "end": 2152
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2153,
    "end": 2160
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2161,
    "end": 2169
  },
  {
    "type": "Identifier",
    "value": "testFunction9P",
    "start": 2170,
    "end": 2184
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2184,
    "end": 2185
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2185,
    "end": 2186
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2186,
    "end": 2187
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2187,
    "end": 2188
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2188,
    "end": 2189
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2189,
    "end": 2190
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2191,
    "end": 2192
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2192,
    "end": 2193
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2194,
    "end": 2196
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2196,
    "end": 2197
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2198,
    "end": 2199
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2199,
    "end": 2200
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2200,
    "end": 2201
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2201,
    "end": 2202
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2202,
    "end": 2203
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2203,
    "end": 2204
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2205,
    "end": 2206
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2206,
    "end": 2207
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2208,
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
    "value": ":",
    "start": 2213,
    "end": 2214
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2215,
    "end": 2222
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2222,
    "end": 2223
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2223,
    "end": 2224
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2224,
    "end": 2225
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2225,
    "end": 2226
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2227,
    "end": 2234
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2235,
    "end": 2243
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 2244,
    "end": 2258
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2258,
    "end": 2259
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2259,
    "end": 2260
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2260,
    "end": 2261
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2261,
    "end": 2262
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2262,
    "end": 2264
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2264,
    "end": 2265
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2266,
    "end": 2267
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2267,
    "end": 2268
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2268,
    "end": 2269
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2269,
    "end": 2270
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2270,
    "end": 2271
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2271,
    "end": 2272
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2273,
    "end": 2274
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2274,
    "end": 2275
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2276,
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
    "value": ":",
    "start": 2281,
    "end": 2282
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 2283,
    "end": 2291
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2291,
    "end": 2292
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2292,
    "end": 2293
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2293,
    "end": 2294
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2294,
    "end": 2295
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2296,
    "end": 2303
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2304,
    "end": 2312
  },
  {
    "type": "Identifier",
    "value": "testFunction10P",
    "start": 2313,
    "end": 2328
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2328,
    "end": 2329
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2329,
    "end": 2330
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2330,
    "end": 2331
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2331,
    "end": 2332
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2332,
    "end": 2334
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2334,
    "end": 2335
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2336,
    "end": 2337
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2337,
    "end": 2338
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2338,
    "end": 2339
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2339,
    "end": 2340
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2340,
    "end": 2341
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2341,
    "end": 2342
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2343,
    "end": 2344
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2344,
    "end": 2345
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2346,
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
    "value": ":",
    "start": 2351,
    "end": 2352
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2353,
    "end": 2360
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2360,
    "end": 2361
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2361,
    "end": 2362
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2362,
    "end": 2363
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2363,
    "end": 2364
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2366,
    "end": 2373
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2374,
    "end": 2382
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 2383,
    "end": 2397
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2397,
    "end": 2398
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2398,
    "end": 2399
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2399,
    "end": 2400
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2401,
    "end": 2407
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2407,
    "end": 2408
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2408,
    "end": 2409
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 2410,
    "end": 2418
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2418,
    "end": 2419
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2419,
    "end": 2425
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2425,
    "end": 2426
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2426,
    "end": 2427
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2428,
    "end": 2435
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2436,
    "end": 2444
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 2445,
    "end": 2459
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2459,
    "end": 2460
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2460,
    "end": 2461
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2461,
    "end": 2462
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2463,
    "end": 2469
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2469,
    "end": 2470
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2470,
    "end": 2471
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 2472,
    "end": 2480
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2480,
    "end": 2481
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2481,
    "end": 2487
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2487,
    "end": 2488
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2488,
    "end": 2489
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2490,
    "end": 2497
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2498,
    "end": 2506
  },
  {
    "type": "Identifier",
    "value": "testFunction11P",
    "start": 2507,
    "end": 2522
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2522,
    "end": 2523
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2523,
    "end": 2524
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2524,
    "end": 2525
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2526,
    "end": 2532
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2532,
    "end": 2533
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2533,
    "end": 2534
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2535,
    "end": 2542
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2542,
    "end": 2543
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2543,
    "end": 2549
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2549,
    "end": 2550
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2550,
    "end": 2551
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2552,
    "end": 2559
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2560,
    "end": 2568
  },
  {
    "type": "Identifier",
    "value": "testFunction11P",
    "start": 2569,
    "end": 2584
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2584,
    "end": 2585
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2585,
    "end": 2586
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2586,
    "end": 2587
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2588,
    "end": 2594
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2594,
    "end": 2595
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2595,
    "end": 2596
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2597,
    "end": 2604
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2604,
    "end": 2605
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2605,
    "end": 2611
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2611,
    "end": 2612
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2612,
    "end": 2613
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2615,
    "end": 2622
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2623,
    "end": 2631
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 2632,
    "end": 2646
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2646,
    "end": 2647
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2647,
    "end": 2648
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2648,
    "end": 2649
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2649,
    "end": 2650
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2650,
    "end": 2651
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2651,
    "end": 2652
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2653,
    "end": 2654
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2654,
    "end": 2655
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2655,
    "end": 2656
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 2657,
    "end": 2665
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2665,
    "end": 2666
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2666,
    "end": 2667
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2667,
    "end": 2668
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2668,
    "end": 2669
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2670,
    "end": 2677
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2678,
    "end": 2686
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 2687,
    "end": 2701
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2701,
    "end": 2702
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2702,
    "end": 2703
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2703,
    "end": 2704
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2704,
    "end": 2705
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2705,
    "end": 2706
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2706,
    "end": 2707
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2708,
    "end": 2709
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2709,
    "end": 2710
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "value": ")",
    "start": 2715,
    "end": 2716
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2716,
    "end": 2717
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 2718,
    "end": 2726
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2726,
    "end": 2727
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2727,
    "end": 2728
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2728,
    "end": 2729
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2729,
    "end": 2730
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2731,
    "end": 2738
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2739,
    "end": 2747
  },
  {
    "type": "Identifier",
    "value": "testFunction12P",
    "start": 2748,
    "end": 2763
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2763,
    "end": 2764
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2764,
    "end": 2765
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2765,
    "end": 2766
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2766,
    "end": 2767
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2767,
    "end": 2768
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2768,
    "end": 2769
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2770,
    "end": 2771
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2771,
    "end": 2772
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2772,
    "end": 2773
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 2774,
    "end": 2782
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2782,
    "end": 2783
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2783,
    "end": 2784
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2784,
    "end": 2785
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2785,
    "end": 2786
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2787,
    "end": 2794
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2795,
    "end": 2803
  },
  {
    "type": "Identifier",
    "value": "testFunction12P",
    "start": 2804,
    "end": 2819
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2819,
    "end": 2820
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2820,
    "end": 2821
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2821,
    "end": 2822
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2822,
    "end": 2823
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2823,
    "end": 2824
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2824,
    "end": 2825
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2826,
    "end": 2827
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2827,
    "end": 2828
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "value": ")",
    "start": 2833,
    "end": 2834
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2834,
    "end": 2835
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2836,
    "end": 2843
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2843,
    "end": 2844
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2844,
    "end": 2845
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2845,
    "end": 2846
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2846,
    "end": 2847
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2849,
    "end": 2852
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 2853,
    "end": 2855
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2855,
    "end": 2856
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 2857,
    "end": 2865
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2865,
    "end": 2866
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2866,
    "end": 2872
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2872,
    "end": 2873
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2873,
    "end": 2874
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2875,
    "end": 2878
  },
  {
    "type": "Identifier",
    "value": "r1a",
    "start": 2879,
    "end": 2882
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2883,
    "end": 2884
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 2885,
    "end": 2887
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2887,
    "end": 2888
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 2888,
    "end": 2892
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2892,
    "end": 2893
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 2893,
    "end": 2905
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2905,
    "end": 2906
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 2907,
    "end": 2919
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2919,
    "end": 2920
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 2921,
    "end": 2933
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2933,
    "end": 2934
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2934,
    "end": 2935
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2936,
    "end": 2939
  },
  {
    "type": "Identifier",
    "value": "r1b",
    "start": 2940,
    "end": 2943
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2944,
    "end": 2945
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 2946,
    "end": 2948
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2948,
    "end": 2949
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 2949,
    "end": 2953
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2953,
    "end": 2954
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 2954,
    "end": 2966
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2966,
    "end": 2967
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 2968,
    "end": 2980
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2980,
    "end": 2981
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 2982,
    "end": 2994
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2994,
    "end": 2995
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2995,
    "end": 2996
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 2996,
    "end": 3000
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3000,
    "end": 3001
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3001,
    "end": 3013
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3013,
    "end": 3014
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3015,
    "end": 3027
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3027,
    "end": 3028
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3029,
    "end": 3041
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3041,
    "end": 3042
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3042,
    "end": 3043
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3044,
    "end": 3047
  },
  {
    "type": "Identifier",
    "value": "r1c",
    "start": 3048,
    "end": 3051
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3052,
    "end": 3053
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 3054,
    "end": 3056
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3056,
    "end": 3057
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3057,
    "end": 3061
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3061,
    "end": 3062
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 3062,
    "end": 3075
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3075,
    "end": 3076
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 3077,
    "end": 3090
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3090,
    "end": 3091
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 3092,
    "end": 3105
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3105,
    "end": 3106
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3106,
    "end": 3107
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3108,
    "end": 3111
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 3112,
    "end": 3114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3114,
    "end": 3115
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3116,
    "end": 3123
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3123,
    "end": 3124
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3124,
    "end": 3130
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3130,
    "end": 3131
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3131,
    "end": 3132
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3133,
    "end": 3136
  },
  {
    "type": "Identifier",
    "value": "s1a",
    "start": 3137,
    "end": 3140
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3141,
    "end": 3142
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 3143,
    "end": 3145
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3145,
    "end": 3146
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3146,
    "end": 3150
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3150,
    "end": 3151
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3151,
    "end": 3163
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3163,
    "end": 3164
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3165,
    "end": 3177
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3177,
    "end": 3178
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3179,
    "end": 3191
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3191,
    "end": 3192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3192,
    "end": 3193
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3194,
    "end": 3197
  },
  {
    "type": "Identifier",
    "value": "s1b",
    "start": 3198,
    "end": 3201
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3202,
    "end": 3203
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 3204,
    "end": 3206
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3206,
    "end": 3207
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3207,
    "end": 3211
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3211,
    "end": 3212
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 3212,
    "end": 3225
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3225,
    "end": 3226
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 3227,
    "end": 3240
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3240,
    "end": 3241
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 3242,
    "end": 3255
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3255,
    "end": 3256
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3256,
    "end": 3257
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3258,
    "end": 3261
  },
  {
    "type": "Identifier",
    "value": "s1c",
    "start": 3262,
    "end": 3265
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3266,
    "end": 3267
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 3268,
    "end": 3270
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3270,
    "end": 3271
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3271,
    "end": 3275
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3275,
    "end": 3276
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 3276,
    "end": 3289
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3289,
    "end": 3290
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3291,
    "end": 3303
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3303,
    "end": 3304
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3305,
    "end": 3317
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3317,
    "end": 3318
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3318,
    "end": 3319
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3320,
    "end": 3323
  },
  {
    "type": "Identifier",
    "value": "s1d",
    "start": 3324,
    "end": 3327
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3328,
    "end": 3329
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 3330,
    "end": 3332
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3332,
    "end": 3333
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3333,
    "end": 3337
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3337,
    "end": 3338
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 3338,
    "end": 3351
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3351,
    "end": 3352
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3353,
    "end": 3365
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3365,
    "end": 3366
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3367,
    "end": 3379
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3379,
    "end": 3380
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3380,
    "end": 3381
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3381,
    "end": 3385
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3385,
    "end": 3386
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3386,
    "end": 3398
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3398,
    "end": 3399
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3400,
    "end": 3412
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3412,
    "end": 3413
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3414,
    "end": 3426
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3426,
    "end": 3427
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3427,
    "end": 3428
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3430,
    "end": 3433
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 3434,
    "end": 3436
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3436,
    "end": 3437
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 3438,
    "end": 3446
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3446,
    "end": 3447
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3447,
    "end": 3448
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3449,
    "end": 3450
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3450,
    "end": 3451
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3452,
    "end": 3458
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3458,
    "end": 3459
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3460,
    "end": 3461
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3461,
    "end": 3462
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3462,
    "end": 3463
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3464,
    "end": 3467
  },
  {
    "type": "Identifier",
    "value": "r2a",
    "start": 3468,
    "end": 3471
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3472,
    "end": 3473
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 3474,
    "end": 3476
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3476,
    "end": 3477
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3477,
    "end": 3481
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3481,
    "end": 3482
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3482,
    "end": 3495
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3495,
    "end": 3496
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3497,
    "end": 3510
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3510,
    "end": 3511
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3512,
    "end": 3525
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3525,
    "end": 3526
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3526,
    "end": 3527
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3528,
    "end": 3531
  },
  {
    "type": "Identifier",
    "value": "r2b",
    "start": 3532,
    "end": 3535
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3536,
    "end": 3537
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 3538,
    "end": 3540
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3540,
    "end": 3541
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3541,
    "end": 3545
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3545,
    "end": 3546
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3546,
    "end": 3559
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3559,
    "end": 3560
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3561,
    "end": 3574
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3574,
    "end": 3575
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3576,
    "end": 3589
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3589,
    "end": 3590
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3590,
    "end": 3591
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3591,
    "end": 3595
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3595,
    "end": 3596
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3596,
    "end": 3609
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3609,
    "end": 3610
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3611,
    "end": 3624
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3624,
    "end": 3625
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3626,
    "end": 3639
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3639,
    "end": 3640
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3640,
    "end": 3641
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3642,
    "end": 3645
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 3646,
    "end": 3648
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3648,
    "end": 3649
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3650,
    "end": 3657
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3657,
    "end": 3658
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3658,
    "end": 3659
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3660,
    "end": 3661
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3661,
    "end": 3662
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3663,
    "end": 3669
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3669,
    "end": 3670
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3671,
    "end": 3672
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3672,
    "end": 3673
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3673,
    "end": 3674
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3675,
    "end": 3678
  },
  {
    "type": "Identifier",
    "value": "s2a",
    "start": 3679,
    "end": 3682
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3683,
    "end": 3684
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 3685,
    "end": 3687
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3687,
    "end": 3688
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3688,
    "end": 3692
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3692,
    "end": 3693
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3693,
    "end": 3706
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3706,
    "end": 3707
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3708,
    "end": 3721
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3721,
    "end": 3722
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3723,
    "end": 3736
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3736,
    "end": 3737
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3737,
    "end": 3738
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3739,
    "end": 3742
  },
  {
    "type": "Identifier",
    "value": "s2b",
    "start": 3743,
    "end": 3746
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3747,
    "end": 3748
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 3749,
    "end": 3751
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3751,
    "end": 3752
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3752,
    "end": 3756
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3756,
    "end": 3757
  },
  {
    "type": "Identifier",
    "value": "testFunction2P",
    "start": 3757,
    "end": 3771
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3771,
    "end": 3772
  },
  {
    "type": "Identifier",
    "value": "testFunction2P",
    "start": 3773,
    "end": 3787
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3787,
    "end": 3788
  },
  {
    "type": "Identifier",
    "value": "testFunction2P",
    "start": 3789,
    "end": 3803
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3803,
    "end": 3804
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3804,
    "end": 3805
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3806,
    "end": 3809
  },
  {
    "type": "Identifier",
    "value": "s2c",
    "start": 3810,
    "end": 3813
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3814,
    "end": 3815
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 3816,
    "end": 3818
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3818,
    "end": 3819
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3819,
    "end": 3823
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3823,
    "end": 3824
  },
  {
    "type": "Identifier",
    "value": "testFunction2P",
    "start": 3824,
    "end": 3838
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3838,
    "end": 3839
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3840,
    "end": 3853
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3853,
    "end": 3854
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3855,
    "end": 3868
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3868,
    "end": 3869
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3869,
    "end": 3870
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3871,
    "end": 3874
  },
  {
    "type": "Identifier",
    "value": "s2d",
    "start": 3875,
    "end": 3878
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3879,
    "end": 3880
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 3881,
    "end": 3883
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3883,
    "end": 3884
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3884,
    "end": 3888
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3888,
    "end": 3889
  },
  {
    "type": "Identifier",
    "value": "testFunction2P",
    "start": 3889,
    "end": 3903
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3903,
    "end": 3904
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3905,
    "end": 3918
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3918,
    "end": 3919
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3920,
    "end": 3933
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3933,
    "end": 3934
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3934,
    "end": 3935
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3935,
    "end": 3939
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3939,
    "end": 3940
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3940,
    "end": 3953
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3953,
    "end": 3954
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3955,
    "end": 3968
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3968,
    "end": 3969
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3970,
    "end": 3983
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3983,
    "end": 3984
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3984,
    "end": 3985
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3987,
    "end": 3990
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 3991,
    "end": 3993
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3993,
    "end": 3994
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 3995,
    "end": 4003
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4003,
    "end": 4004
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4004,
    "end": 4010
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4010,
    "end": 4011
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4011,
    "end": 4012
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4013,
    "end": 4016
  },
  {
    "type": "Identifier",
    "value": "r3a",
    "start": 4017,
    "end": 4020
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4021,
    "end": 4022
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 4023,
    "end": 4025
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4025,
    "end": 4026
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4026,
    "end": 4030
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4030,
    "end": 4031
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4031,
    "end": 4044
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4044,
    "end": 4045
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4046,
    "end": 4059
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4059,
    "end": 4060
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4061,
    "end": 4074
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4074,
    "end": 4075
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4075,
    "end": 4076
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4077,
    "end": 4080
  },
  {
    "type": "Identifier",
    "value": "r3b",
    "start": 4081,
    "end": 4084
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4085,
    "end": 4086
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 4087,
    "end": 4089
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4089,
    "end": 4090
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4090,
    "end": 4094
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4094,
    "end": 4095
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4095,
    "end": 4108
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4108,
    "end": 4109
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4110,
    "end": 4123
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4123,
    "end": 4124
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4125,
    "end": 4138
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4138,
    "end": 4139
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4139,
    "end": 4140
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4140,
    "end": 4144
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4144,
    "end": 4145
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4145,
    "end": 4158
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4158,
    "end": 4159
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4160,
    "end": 4173
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4173,
    "end": 4174
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4175,
    "end": 4188
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4188,
    "end": 4189
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4189,
    "end": 4190
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4191,
    "end": 4194
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 4195,
    "end": 4197
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4197,
    "end": 4198
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 4199,
    "end": 4206
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4206,
    "end": 4207
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4207,
    "end": 4213
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4213,
    "end": 4214
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4214,
    "end": 4215
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4216,
    "end": 4219
  },
  {
    "type": "Identifier",
    "value": "s3a",
    "start": 4220,
    "end": 4223
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4224,
    "end": 4225
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 4226,
    "end": 4228
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4228,
    "end": 4229
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4229,
    "end": 4233
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4233,
    "end": 4234
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4234,
    "end": 4247
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4247,
    "end": 4248
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4249,
    "end": 4262
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4262,
    "end": 4263
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4264,
    "end": 4277
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4277,
    "end": 4278
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4278,
    "end": 4279
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4280,
    "end": 4283
  },
  {
    "type": "Identifier",
    "value": "s3b",
    "start": 4284,
    "end": 4287
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4288,
    "end": 4289
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 4290,
    "end": 4292
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4292,
    "end": 4293
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4293,
    "end": 4297
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4297,
    "end": 4298
  },
  {
    "type": "Identifier",
    "value": "testFunction3P",
    "start": 4298,
    "end": 4312
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4312,
    "end": 4313
  },
  {
    "type": "Identifier",
    "value": "testFunction3P",
    "start": 4314,
    "end": 4328
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4328,
    "end": 4329
  },
  {
    "type": "Identifier",
    "value": "testFunction3P",
    "start": 4330,
    "end": 4344
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4344,
    "end": 4345
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4345,
    "end": 4346
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4347,
    "end": 4350
  },
  {
    "type": "Identifier",
    "value": "s3c",
    "start": 4351,
    "end": 4354
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4355,
    "end": 4356
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 4357,
    "end": 4359
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4359,
    "end": 4360
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4360,
    "end": 4364
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4364,
    "end": 4365
  },
  {
    "type": "Identifier",
    "value": "testFunction3P",
    "start": 4365,
    "end": 4379
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4379,
    "end": 4380
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4381,
    "end": 4394
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4394,
    "end": 4395
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4396,
    "end": 4409
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4409,
    "end": 4410
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4410,
    "end": 4411
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4412,
    "end": 4415
  },
  {
    "type": "Identifier",
    "value": "s3d",
    "start": 4416,
    "end": 4419
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4420,
    "end": 4421
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 4422,
    "end": 4424
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4424,
    "end": 4425
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4425,
    "end": 4429
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4429,
    "end": 4430
  },
  {
    "type": "Identifier",
    "value": "testFunction3P",
    "start": 4430,
    "end": 4444
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4444,
    "end": 4445
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4446,
    "end": 4459
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4459,
    "end": 4460
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4461,
    "end": 4474
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4474,
    "end": 4475
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4475,
    "end": 4476
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4476,
    "end": 4480
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4480,
    "end": 4481
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4481,
    "end": 4494
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4494,
    "end": 4495
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4496,
    "end": 4509
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4509,
    "end": 4510
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4511,
    "end": 4524
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4524,
    "end": 4525
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4525,
    "end": 4526
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4528,
    "end": 4531
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 4532,
    "end": 4534
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4534,
    "end": 4535
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 4536,
    "end": 4544
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4544,
    "end": 4545
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4545,
    "end": 4551
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4551,
    "end": 4552
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4552,
    "end": 4553
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4554,
    "end": 4557
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 4558,
    "end": 4567
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4567,
    "end": 4568
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4569,
    "end": 4570
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4570,
    "end": 4571
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4571,
    "end": 4572
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4573,
    "end": 4576
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4576,
    "end": 4577
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4578,
    "end": 4580
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 4581,
    "end": 4589
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4589,
    "end": 4590
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4590,
    "end": 4596
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4596,
    "end": 4597
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4597,
    "end": 4598
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4599,
    "end": 4602
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 4603,
    "end": 4611
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4611,
    "end": 4612
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4613,
    "end": 4614
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4614,
    "end": 4615
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4615,
    "end": 4616
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4617,
    "end": 4620
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4620,
    "end": 4621
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4622,
    "end": 4624
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 4625,
    "end": 4632
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4632,
    "end": 4633
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4633,
    "end": 4639
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4639,
    "end": 4640
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4640,
    "end": 4641
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4642,
    "end": 4645
  },
  {
    "type": "Identifier",
    "value": "r4a",
    "start": 4646,
    "end": 4649
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4650,
    "end": 4651
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 4652,
    "end": 4654
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4654,
    "end": 4655
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4655,
    "end": 4659
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4659,
    "end": 4660
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 4660,
    "end": 4673
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4673,
    "end": 4674
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 4675,
    "end": 4688
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4688,
    "end": 4689
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 4690,
    "end": 4703
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4703,
    "end": 4704
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4704,
    "end": 4705
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4715,
    "end": 4718
  },
  {
    "type": "Identifier",
    "value": "r4b",
    "start": 4719,
    "end": 4722
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4723,
    "end": 4724
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 4725,
    "end": 4727
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4727,
    "end": 4728
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4728,
    "end": 4732
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4732,
    "end": 4733
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 4733,
    "end": 4742
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4742,
    "end": 4743
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 4744,
    "end": 4757
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4757,
    "end": 4758
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 4759,
    "end": 4772
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4772,
    "end": 4773
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4773,
    "end": 4774
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4774,
    "end": 4778
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4778,
    "end": 4779
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 4779,
    "end": 4788
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4788,
    "end": 4789
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 4790,
    "end": 4803
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4803,
    "end": 4804
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 4805,
    "end": 4818
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4818,
    "end": 4819
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4819,
    "end": 4820
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4827,
    "end": 4830
  },
  {
    "type": "Identifier",
    "value": "s4",
    "start": 4831,
    "end": 4833
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4833,
    "end": 4834
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 4835,
    "end": 4842
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4842,
    "end": 4843
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4843,
    "end": 4849
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4849,
    "end": 4850
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4850,
    "end": 4851
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4852,
    "end": 4855
  },
  {
    "type": "Identifier",
    "value": "s4a",
    "start": 4856,
    "end": 4859
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4860,
    "end": 4861
  },
  {
    "type": "Identifier",
    "value": "s4",
    "start": 4862,
    "end": 4864
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4864,
    "end": 4865
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4865,
    "end": 4869
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4869,
    "end": 4870
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 4870,
    "end": 4883
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4883,
    "end": 4884
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 4885,
    "end": 4898
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4898,
    "end": 4899
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 4900,
    "end": 4913
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4913,
    "end": 4914
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4914,
    "end": 4915
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4925,
    "end": 4928
  },
  {
    "type": "Identifier",
    "value": "s4b",
    "start": 4929,
    "end": 4932
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4933,
    "end": 4934
  },
  {
    "type": "Identifier",
    "value": "s4",
    "start": 4935,
    "end": 4937
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4937,
    "end": 4938
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4938,
    "end": 4942
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4942,
    "end": 4943
  },
  {
    "type": "Identifier",
    "value": "testFunction4P",
    "start": 4943,
    "end": 4957
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4957,
    "end": 4958
  },
  {
    "type": "Identifier",
    "value": "testFunction4P",
    "start": 4959,
    "end": 4973
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4973,
    "end": 4974
  },
  {
    "type": "Identifier",
    "value": "testFunction4P",
    "start": 4975,
    "end": 4989
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4989,
    "end": 4990
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4990,
    "end": 4991
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5002,
    "end": 5005
  },
  {
    "type": "Identifier",
    "value": "s4c",
    "start": 5006,
    "end": 5009
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5010,
    "end": 5011
  },
  {
    "type": "Identifier",
    "value": "s4",
    "start": 5012,
    "end": 5014
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5014,
    "end": 5015
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5015,
    "end": 5019
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5019,
    "end": 5020
  },
  {
    "type": "Identifier",
    "value": "testFunction4P",
    "start": 5020,
    "end": 5034
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5034,
    "end": 5035
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 5036,
    "end": 5049
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5049,
    "end": 5050
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 5051,
    "end": 5064
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5064,
    "end": 5065
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5065,
    "end": 5066
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5076,
    "end": 5079
  },
  {
    "type": "Identifier",
    "value": "s4d",
    "start": 5080,
    "end": 5083
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5084,
    "end": 5085
  },
  {
    "type": "Identifier",
    "value": "s4",
    "start": 5086,
    "end": 5088
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5088,
    "end": 5089
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5089,
    "end": 5093
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5093,
    "end": 5094
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5094,
    "end": 5103
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5103,
    "end": 5104
  },
  {
    "type": "Identifier",
    "value": "testFunction4P",
    "start": 5105,
    "end": 5119
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5119,
    "end": 5120
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 5121,
    "end": 5134
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5134,
    "end": 5135
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5135,
    "end": 5136
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5136,
    "end": 5140
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5140,
    "end": 5141
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5141,
    "end": 5150
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5150,
    "end": 5151
  },
  {
    "type": "Identifier",
    "value": "testFunction4P",
    "start": 5152,
    "end": 5166
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5166,
    "end": 5167
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 5168,
    "end": 5181
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5181,
    "end": 5182
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5182,
    "end": 5183
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5185,
    "end": 5188
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 5189,
    "end": 5191
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5191,
    "end": 5192
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 5193,
    "end": 5201
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5201,
    "end": 5202
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5202,
    "end": 5208
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5208,
    "end": 5209
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5209,
    "end": 5210
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5211,
    "end": 5214
  },
  {
    "type": "Identifier",
    "value": "r5a",
    "start": 5215,
    "end": 5218
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5219,
    "end": 5220
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 5221,
    "end": 5223
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5223,
    "end": 5224
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5224,
    "end": 5228
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5228,
    "end": 5229
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 5229,
    "end": 5242
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5242,
    "end": 5243
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 5244,
    "end": 5257
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5257,
    "end": 5258
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 5259,
    "end": 5272
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5272,
    "end": 5273
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5273,
    "end": 5274
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5284,
    "end": 5287
  },
  {
    "type": "Identifier",
    "value": "r5b",
    "start": 5288,
    "end": 5291
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5292,
    "end": 5293
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 5294,
    "end": 5296
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5296,
    "end": 5297
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5297,
    "end": 5301
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5301,
    "end": 5302
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5302,
    "end": 5311
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5311,
    "end": 5312
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5313,
    "end": 5322
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5322,
    "end": 5323
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5324,
    "end": 5333
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5333,
    "end": 5334
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5334,
    "end": 5335
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5335,
    "end": 5339
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5339,
    "end": 5340
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5340,
    "end": 5349
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5349,
    "end": 5350
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5351,
    "end": 5360
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5360,
    "end": 5361
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5362,
    "end": 5371
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5371,
    "end": 5372
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5372,
    "end": 5373
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5380,
    "end": 5383
  },
  {
    "type": "Identifier",
    "value": "s5",
    "start": 5384,
    "end": 5386
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5386,
    "end": 5387
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 5388,
    "end": 5395
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5395,
    "end": 5396
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5396,
    "end": 5402
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5402,
    "end": 5403
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5403,
    "end": 5404
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5405,
    "end": 5408
  },
  {
    "type": "Identifier",
    "value": "s5a",
    "start": 5409,
    "end": 5412
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5413,
    "end": 5414
  },
  {
    "type": "Identifier",
    "value": "s5",
    "start": 5415,
    "end": 5417
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5417,
    "end": 5418
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5418,
    "end": 5422
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5422,
    "end": 5423
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 5423,
    "end": 5436
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5436,
    "end": 5437
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 5438,
    "end": 5451
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5451,
    "end": 5452
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 5453,
    "end": 5466
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5466,
    "end": 5467
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5467,
    "end": 5468
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5478,
    "end": 5481
  },
  {
    "type": "Identifier",
    "value": "s5b",
    "start": 5482,
    "end": 5485
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5486,
    "end": 5487
  },
  {
    "type": "Identifier",
    "value": "s5",
    "start": 5488,
    "end": 5490
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5490,
    "end": 5491
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5491,
    "end": 5495
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5495,
    "end": 5496
  },
  {
    "type": "Identifier",
    "value": "testFunction5P",
    "start": 5496,
    "end": 5510
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5510,
    "end": 5511
  },
  {
    "type": "Identifier",
    "value": "testFunction5P",
    "start": 5512,
    "end": 5526
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5526,
    "end": 5527
  },
  {
    "type": "Identifier",
    "value": "testFunction5P",
    "start": 5528,
    "end": 5542
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5542,
    "end": 5543
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5543,
    "end": 5544
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5554,
    "end": 5557
  },
  {
    "type": "Identifier",
    "value": "s5c",
    "start": 5558,
    "end": 5561
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5562,
    "end": 5563
  },
  {
    "type": "Identifier",
    "value": "s5",
    "start": 5564,
    "end": 5566
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5566,
    "end": 5567
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5567,
    "end": 5571
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5571,
    "end": 5572
  },
  {
    "type": "Identifier",
    "value": "testFunction5P",
    "start": 5572,
    "end": 5586
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5586,
    "end": 5587
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 5588,
    "end": 5601
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5601,
    "end": 5602
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 5603,
    "end": 5616
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5616,
    "end": 5617
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5617,
    "end": 5618
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5628,
    "end": 5631
  },
  {
    "type": "Identifier",
    "value": "s5d",
    "start": 5632,
    "end": 5635
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5636,
    "end": 5637
  },
  {
    "type": "Identifier",
    "value": "s5",
    "start": 5638,
    "end": 5640
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5640,
    "end": 5641
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5641,
    "end": 5645
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5645,
    "end": 5646
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 5646,
    "end": 5654
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5654,
    "end": 5655
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 5656,
    "end": 5664
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5664,
    "end": 5665
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 5666,
    "end": 5674
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5674,
    "end": 5675
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5675,
    "end": 5676
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5676,
    "end": 5680
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5680,
    "end": 5681
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5681,
    "end": 5690
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5690,
    "end": 5691
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5692,
    "end": 5701
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5701,
    "end": 5702
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5703,
    "end": 5712
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5712,
    "end": 5713
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5713,
    "end": 5714
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5722,
    "end": 5725
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 5726,
    "end": 5728
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5728,
    "end": 5729
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 5730,
    "end": 5738
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5738,
    "end": 5739
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5739,
    "end": 5745
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5745,
    "end": 5746
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5746,
    "end": 5747
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5748,
    "end": 5751
  },
  {
    "type": "Identifier",
    "value": "r6a",
    "start": 5752,
    "end": 5755
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5756,
    "end": 5757
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 5758,
    "end": 5760
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5760,
    "end": 5761
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5761,
    "end": 5765
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5765,
    "end": 5766
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 5766,
    "end": 5779
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5779,
    "end": 5780
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 5781,
    "end": 5794
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5794,
    "end": 5795
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 5796,
    "end": 5809
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5809,
    "end": 5810
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5810,
    "end": 5811
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5821,
    "end": 5824
  },
  {
    "type": "Identifier",
    "value": "r6b",
    "start": 5825,
    "end": 5828
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5829,
    "end": 5830
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 5831,
    "end": 5833
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5833,
    "end": 5834
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5834,
    "end": 5838
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5838,
    "end": 5839
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5839,
    "end": 5848
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5848,
    "end": 5849
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5850,
    "end": 5859
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5859,
    "end": 5860
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5861,
    "end": 5870
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5870,
    "end": 5871
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5871,
    "end": 5872
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5872,
    "end": 5876
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5876,
    "end": 5877
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5877,
    "end": 5886
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5886,
    "end": 5887
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5888,
    "end": 5897
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5897,
    "end": 5898
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5899,
    "end": 5908
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5908,
    "end": 5909
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5909,
    "end": 5910
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5917,
    "end": 5920
  },
  {
    "type": "Identifier",
    "value": "s6",
    "start": 5921,
    "end": 5923
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5923,
    "end": 5924
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 5925,
    "end": 5932
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5932,
    "end": 5933
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5933,
    "end": 5939
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5939,
    "end": 5940
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5940,
    "end": 5941
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5942,
    "end": 5945
  },
  {
    "type": "Identifier",
    "value": "s6a",
    "start": 5946,
    "end": 5949
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5950,
    "end": 5951
  },
  {
    "type": "Identifier",
    "value": "s6",
    "start": 5952,
    "end": 5954
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5954,
    "end": 5955
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5955,
    "end": 5959
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5959,
    "end": 5960
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 5960,
    "end": 5973
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5973,
    "end": 5974
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 5975,
    "end": 5988
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5988,
    "end": 5989
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 5990,
    "end": 6003
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6003,
    "end": 6004
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6004,
    "end": 6005
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6015,
    "end": 6018
  },
  {
    "type": "Identifier",
    "value": "s6b",
    "start": 6019,
    "end": 6022
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6023,
    "end": 6024
  },
  {
    "type": "Identifier",
    "value": "s6",
    "start": 6025,
    "end": 6027
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6027,
    "end": 6028
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6028,
    "end": 6032
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6032,
    "end": 6033
  },
  {
    "type": "Identifier",
    "value": "testFunction6P",
    "start": 6033,
    "end": 6047
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6047,
    "end": 6048
  },
  {
    "type": "Identifier",
    "value": "testFunction6P",
    "start": 6049,
    "end": 6063
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6063,
    "end": 6064
  },
  {
    "type": "Identifier",
    "value": "testFunction6P",
    "start": 6065,
    "end": 6079
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6079,
    "end": 6080
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6080,
    "end": 6081
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6091,
    "end": 6094
  },
  {
    "type": "Identifier",
    "value": "s6c",
    "start": 6095,
    "end": 6098
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6099,
    "end": 6100
  },
  {
    "type": "Identifier",
    "value": "s6",
    "start": 6101,
    "end": 6103
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6103,
    "end": 6104
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6104,
    "end": 6108
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6108,
    "end": 6109
  },
  {
    "type": "Identifier",
    "value": "testFunction6P",
    "start": 6109,
    "end": 6123
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6123,
    "end": 6124
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 6125,
    "end": 6138
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6138,
    "end": 6139
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 6140,
    "end": 6153
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6153,
    "end": 6154
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6154,
    "end": 6155
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6165,
    "end": 6168
  },
  {
    "type": "Identifier",
    "value": "s6d",
    "start": 6169,
    "end": 6172
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6173,
    "end": 6174
  },
  {
    "type": "Identifier",
    "value": "s6",
    "start": 6175,
    "end": 6177
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6177,
    "end": 6178
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6178,
    "end": 6182
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6182,
    "end": 6183
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 6183,
    "end": 6191
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6191,
    "end": 6192
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 6193,
    "end": 6201
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6201,
    "end": 6202
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 6203,
    "end": 6211
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6211,
    "end": 6212
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6212,
    "end": 6213
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6213,
    "end": 6217
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6217,
    "end": 6218
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6218,
    "end": 6227
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6227,
    "end": 6228
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6229,
    "end": 6238
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6238,
    "end": 6239
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6240,
    "end": 6249
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6249,
    "end": 6250
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6250,
    "end": 6251
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6259,
    "end": 6262
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 6263,
    "end": 6265
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6265,
    "end": 6266
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 6267,
    "end": 6275
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6275,
    "end": 6276
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6276,
    "end": 6282
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6282,
    "end": 6283
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6283,
    "end": 6284
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6285,
    "end": 6288
  },
  {
    "type": "Identifier",
    "value": "r7a",
    "start": 6289,
    "end": 6292
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6293,
    "end": 6294
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 6295,
    "end": 6297
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6297,
    "end": 6298
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6298,
    "end": 6302
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6302,
    "end": 6303
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 6303,
    "end": 6316
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6316,
    "end": 6317
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 6318,
    "end": 6331
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6331,
    "end": 6332
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 6333,
    "end": 6346
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6346,
    "end": 6347
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6347,
    "end": 6348
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6358,
    "end": 6361
  },
  {
    "type": "Identifier",
    "value": "r7b",
    "start": 6362,
    "end": 6365
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6366,
    "end": 6367
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 6368,
    "end": 6370
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6370,
    "end": 6371
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6371,
    "end": 6375
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6375,
    "end": 6376
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6376,
    "end": 6385
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6385,
    "end": 6386
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6387,
    "end": 6396
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6396,
    "end": 6397
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6398,
    "end": 6407
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6407,
    "end": 6408
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6408,
    "end": 6409
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6409,
    "end": 6413
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6413,
    "end": 6414
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6414,
    "end": 6423
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6423,
    "end": 6424
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6425,
    "end": 6434
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6434,
    "end": 6435
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6436,
    "end": 6445
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6445,
    "end": 6446
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6446,
    "end": 6447
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6454,
    "end": 6457
  },
  {
    "type": "Identifier",
    "value": "s7",
    "start": 6458,
    "end": 6460
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6460,
    "end": 6461
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 6462,
    "end": 6469
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6469,
    "end": 6470
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6470,
    "end": 6476
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6476,
    "end": 6477
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6477,
    "end": 6478
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6479,
    "end": 6482
  },
  {
    "type": "Identifier",
    "value": "s7a",
    "start": 6483,
    "end": 6486
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6487,
    "end": 6488
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 6489,
    "end": 6491
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6491,
    "end": 6492
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6492,
    "end": 6496
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6496,
    "end": 6497
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 6497,
    "end": 6510
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6510,
    "end": 6511
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 6512,
    "end": 6525
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6525,
    "end": 6526
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 6527,
    "end": 6540
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6540,
    "end": 6541
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6541,
    "end": 6542
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6552,
    "end": 6555
  },
  {
    "type": "Identifier",
    "value": "s7b",
    "start": 6556,
    "end": 6559
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6560,
    "end": 6561
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 6562,
    "end": 6564
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6564,
    "end": 6565
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6565,
    "end": 6569
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6569,
    "end": 6570
  },
  {
    "type": "Identifier",
    "value": "testFunction7P",
    "start": 6570,
    "end": 6584
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6584,
    "end": 6585
  },
  {
    "type": "Identifier",
    "value": "testFunction7P",
    "start": 6586,
    "end": 6600
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6600,
    "end": 6601
  },
  {
    "type": "Identifier",
    "value": "testFunction7P",
    "start": 6602,
    "end": 6616
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6616,
    "end": 6617
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6617,
    "end": 6618
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6628,
    "end": 6631
  },
  {
    "type": "Identifier",
    "value": "s7c",
    "start": 6632,
    "end": 6635
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6636,
    "end": 6637
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 6638,
    "end": 6640
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6640,
    "end": 6641
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6641,
    "end": 6645
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6645,
    "end": 6646
  },
  {
    "type": "Identifier",
    "value": "testFunction7P",
    "start": 6646,
    "end": 6660
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6660,
    "end": 6661
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 6662,
    "end": 6675
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6675,
    "end": 6676
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 6677,
    "end": 6690
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6690,
    "end": 6691
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6691,
    "end": 6692
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6702,
    "end": 6705
  },
  {
    "type": "Identifier",
    "value": "s7d",
    "start": 6706,
    "end": 6709
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6710,
    "end": 6711
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 6712,
    "end": 6714
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6714,
    "end": 6715
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6715,
    "end": 6719
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6719,
    "end": 6720
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 6720,
    "end": 6728
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6728,
    "end": 6729
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 6730,
    "end": 6738
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6738,
    "end": 6739
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 6740,
    "end": 6748
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6748,
    "end": 6749
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6749,
    "end": 6750
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6750,
    "end": 6754
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6754,
    "end": 6755
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 6755,
    "end": 6763
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6763,
    "end": 6764
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 6765,
    "end": 6773
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6773,
    "end": 6774
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 6775,
    "end": 6783
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6783,
    "end": 6784
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6784,
    "end": 6785
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6794,
    "end": 6797
  },
  {
    "type": "Identifier",
    "value": "r8",
    "start": 6798,
    "end": 6800
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6800,
    "end": 6801
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 6802,
    "end": 6810
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6810,
    "end": 6811
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 6811,
    "end": 6817
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6817,
    "end": 6818
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6818,
    "end": 6819
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6820,
    "end": 6823
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 6824,
    "end": 6833
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6833,
    "end": 6834
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6835,
    "end": 6836
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 6836,
    "end": 6837
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6837,
    "end": 6838
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 6839,
    "end": 6842
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6842,
    "end": 6843
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6844,
    "end": 6846
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 6847,
    "end": 6855
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6855,
    "end": 6856
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 6856,
    "end": 6862
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6862,
    "end": 6863
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6863,
    "end": 6864
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6865,
    "end": 6868
  },
  {
    "type": "Identifier",
    "value": "nPromise",
    "start": 6869,
    "end": 6877
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6877,
    "end": 6878
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6879,
    "end": 6880
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 6880,
    "end": 6881
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6881,
    "end": 6882
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 6883,
    "end": 6886
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6886,
    "end": 6887
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6888,
    "end": 6890
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 6891,
    "end": 6898
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6898,
    "end": 6899
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 6899,
    "end": 6905
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6905,
    "end": 6906
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6906,
    "end": 6907
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6908,
    "end": 6911
  },
  {
    "type": "Identifier",
    "value": "r8a",
    "start": 6912,
    "end": 6915
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6916,
    "end": 6917
  },
  {
    "type": "Identifier",
    "value": "r8",
    "start": 6918,
    "end": 6920
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6920,
    "end": 6921
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6921,
    "end": 6925
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6925,
    "end": 6926
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 6926,
    "end": 6939
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6939,
    "end": 6940
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 6941,
    "end": 6954
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6954,
    "end": 6955
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 6956,
    "end": 6969
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6969,
    "end": 6970
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6970,
    "end": 6971
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6981,
    "end": 6984
  },
  {
    "type": "Identifier",
    "value": "r8b",
    "start": 6985,
    "end": 6988
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6989,
    "end": 6990
  },
  {
    "type": "Identifier",
    "value": "r8",
    "start": 6991,
    "end": 6993
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6993,
    "end": 6994
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6994,
    "end": 6998
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6998,
    "end": 6999
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 6999,
    "end": 7008
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7008,
    "end": 7009
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7010,
    "end": 7019
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7019,
    "end": 7020
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7021,
    "end": 7030
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7030,
    "end": 7031
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7031,
    "end": 7032
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7032,
    "end": 7036
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7036,
    "end": 7037
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7037,
    "end": 7046
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7046,
    "end": 7047
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7048,
    "end": 7057
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7057,
    "end": 7058
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7059,
    "end": 7068
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7068,
    "end": 7069
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7069,
    "end": 7070
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7077,
    "end": 7080
  },
  {
    "type": "Identifier",
    "value": "s8",
    "start": 7081,
    "end": 7083
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7083,
    "end": 7084
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 7085,
    "end": 7092
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7092,
    "end": 7093
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 7093,
    "end": 7099
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7099,
    "end": 7100
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7100,
    "end": 7101
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7102,
    "end": 7105
  },
  {
    "type": "Identifier",
    "value": "s8a",
    "start": 7106,
    "end": 7109
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7110,
    "end": 7111
  },
  {
    "type": "Identifier",
    "value": "s8",
    "start": 7112,
    "end": 7114
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7114,
    "end": 7115
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7115,
    "end": 7119
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7119,
    "end": 7120
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 7120,
    "end": 7133
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7133,
    "end": 7134
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 7135,
    "end": 7148
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7148,
    "end": 7149
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 7150,
    "end": 7163
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7163,
    "end": 7164
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7164,
    "end": 7165
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7175,
    "end": 7178
  },
  {
    "type": "Identifier",
    "value": "s8b",
    "start": 7179,
    "end": 7182
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7183,
    "end": 7184
  },
  {
    "type": "Identifier",
    "value": "s8",
    "start": 7185,
    "end": 7187
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7187,
    "end": 7188
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7188,
    "end": 7192
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7192,
    "end": 7193
  },
  {
    "type": "Identifier",
    "value": "testFunction8P",
    "start": 7193,
    "end": 7207
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7207,
    "end": 7208
  },
  {
    "type": "Identifier",
    "value": "testFunction8P",
    "start": 7209,
    "end": 7223
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7223,
    "end": 7224
  },
  {
    "type": "Identifier",
    "value": "testFunction8P",
    "start": 7225,
    "end": 7239
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7239,
    "end": 7240
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7240,
    "end": 7241
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7251,
    "end": 7254
  },
  {
    "type": "Identifier",
    "value": "s8c",
    "start": 7255,
    "end": 7258
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7259,
    "end": 7260
  },
  {
    "type": "Identifier",
    "value": "s8",
    "start": 7261,
    "end": 7263
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7263,
    "end": 7264
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7264,
    "end": 7268
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7268,
    "end": 7269
  },
  {
    "type": "Identifier",
    "value": "testFunction8P",
    "start": 7269,
    "end": 7283
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7283,
    "end": 7284
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 7285,
    "end": 7298
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7298,
    "end": 7299
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 7300,
    "end": 7313
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7313,
    "end": 7314
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7314,
    "end": 7315
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7325,
    "end": 7328
  },
  {
    "type": "Identifier",
    "value": "s8d",
    "start": 7329,
    "end": 7332
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7333,
    "end": 7334
  },
  {
    "type": "Identifier",
    "value": "s8",
    "start": 7335,
    "end": 7337
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7337,
    "end": 7338
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7338,
    "end": 7342
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7342,
    "end": 7343
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7343,
    "end": 7352
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7352,
    "end": 7353
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7354,
    "end": 7363
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7363,
    "end": 7364
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7365,
    "end": 7374
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7374,
    "end": 7375
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7375,
    "end": 7376
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7376,
    "end": 7380
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7380,
    "end": 7381
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7381,
    "end": 7390
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7390,
    "end": 7391
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7392,
    "end": 7401
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7401,
    "end": 7402
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7403,
    "end": 7412
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7412,
    "end": 7413
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7413,
    "end": 7414
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7422,
    "end": 7425
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 7426,
    "end": 7428
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7428,
    "end": 7429
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 7430,
    "end": 7438
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7438,
    "end": 7439
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 7439,
    "end": 7445
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7445,
    "end": 7446
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7446,
    "end": 7447
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7448,
    "end": 7451
  },
  {
    "type": "Identifier",
    "value": "r9a",
    "start": 7452,
    "end": 7455
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7456,
    "end": 7457
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 7458,
    "end": 7460
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7460,
    "end": 7461
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7461,
    "end": 7465
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7465,
    "end": 7466
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 7466,
    "end": 7479
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7479,
    "end": 7480
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 7481,
    "end": 7494
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7494,
    "end": 7495
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 7496,
    "end": 7509
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7509,
    "end": 7510
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7510,
    "end": 7511
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7521,
    "end": 7524
  },
  {
    "type": "Identifier",
    "value": "r9b",
    "start": 7525,
    "end": 7528
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7529,
    "end": 7530
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 7531,
    "end": 7533
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7533,
    "end": 7534
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7534,
    "end": 7538
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7538,
    "end": 7539
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 7539,
    "end": 7548
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7548,
    "end": 7549
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 7550,
    "end": 7559
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7559,
    "end": 7560
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 7561,
    "end": 7570
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7570,
    "end": 7571
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7571,
    "end": 7572
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7579,
    "end": 7582
  },
  {
    "type": "Identifier",
    "value": "r9c",
    "start": 7583,
    "end": 7586
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7587,
    "end": 7588
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 7589,
    "end": 7591
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7591,
    "end": 7592
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7592,
    "end": 7596
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7596,
    "end": 7597
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7597,
    "end": 7606
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7606,
    "end": 7607
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7608,
    "end": 7617
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7617,
    "end": 7618
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7619,
    "end": 7628
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7628,
    "end": 7629
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7629,
    "end": 7630
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7637,
    "end": 7640
  },
  {
    "type": "Identifier",
    "value": "r9d",
    "start": 7641,
    "end": 7644
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7645,
    "end": 7646
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 7647,
    "end": 7649
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7649,
    "end": 7650
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7650,
    "end": 7654
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7654,
    "end": 7655
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 7655,
    "end": 7667
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7667,
    "end": 7668
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 7669,
    "end": 7678
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7678,
    "end": 7679
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7680,
    "end": 7689
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7689,
    "end": 7690
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7690,
    "end": 7691
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7701,
    "end": 7704
  },
  {
    "type": "Identifier",
    "value": "r9e",
    "start": 7705,
    "end": 7708
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7709,
    "end": 7710
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 7711,
    "end": 7713
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7713,
    "end": 7714
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7714,
    "end": 7718
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7718,
    "end": 7719
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 7719,
    "end": 7731
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7731,
    "end": 7732
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7733,
    "end": 7742
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7742,
    "end": 7743
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 7744,
    "end": 7753
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7753,
    "end": 7754
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7754,
    "end": 7755
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7755,
    "end": 7759
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7759,
    "end": 7760
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 7760,
    "end": 7769
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7769,
    "end": 7770
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 7771,
    "end": 7780
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7780,
    "end": 7781
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 7782,
    "end": 7791
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7791,
    "end": 7792
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7792,
    "end": 7793
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7800,
    "end": 7803
  },
  {
    "type": "Identifier",
    "value": "s9",
    "start": 7804,
    "end": 7806
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7806,
    "end": 7807
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 7808,
    "end": 7815
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7815,
    "end": 7816
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 7816,
    "end": 7822
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7822,
    "end": 7823
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7823,
    "end": 7824
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7825,
    "end": 7828
  },
  {
    "type": "Identifier",
    "value": "s9a",
    "start": 7829,
    "end": 7832
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7833,
    "end": 7834
  },
  {
    "type": "Identifier",
    "value": "s9",
    "start": 7835,
    "end": 7837
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7837,
    "end": 7838
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7838,
    "end": 7842
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7842,
    "end": 7843
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 7843,
    "end": 7856
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7856,
    "end": 7857
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 7858,
    "end": 7871
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7871,
    "end": 7872
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 7873,
    "end": 7886
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7886,
    "end": 7887
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7887,
    "end": 7888
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7898,
    "end": 7901
  },
  {
    "type": "Identifier",
    "value": "s9b",
    "start": 7902,
    "end": 7905
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7906,
    "end": 7907
  },
  {
    "type": "Identifier",
    "value": "s9",
    "start": 7908,
    "end": 7910
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7910,
    "end": 7911
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7911,
    "end": 7915
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7915,
    "end": 7916
  },
  {
    "type": "Identifier",
    "value": "testFunction9P",
    "start": 7916,
    "end": 7930
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7930,
    "end": 7931
  },
  {
    "type": "Identifier",
    "value": "testFunction9P",
    "start": 7932,
    "end": 7946
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7946,
    "end": 7947
  },
  {
    "type": "Identifier",
    "value": "testFunction9P",
    "start": 7948,
    "end": 7962
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7962,
    "end": 7963
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7963,
    "end": 7964
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7974,
    "end": 7977
  },
  {
    "type": "Identifier",
    "value": "s9c",
    "start": 7978,
    "end": 7981
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7982,
    "end": 7983
  },
  {
    "type": "Identifier",
    "value": "s9",
    "start": 7984,
    "end": 7986
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7986,
    "end": 7987
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7987,
    "end": 7991
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7991,
    "end": 7992
  },
  {
    "type": "Identifier",
    "value": "testFunction9P",
    "start": 7992,
    "end": 8006
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8006,
    "end": 8007
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 8008,
    "end": 8021
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8021,
    "end": 8022
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 8023,
    "end": 8036
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8036,
    "end": 8037
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8037,
    "end": 8038
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8048,
    "end": 8051
  },
  {
    "type": "Identifier",
    "value": "s9d",
    "start": 8052,
    "end": 8055
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8056,
    "end": 8057
  },
  {
    "type": "Identifier",
    "value": "s9",
    "start": 8058,
    "end": 8060
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8060,
    "end": 8061
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8061,
    "end": 8065
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8065,
    "end": 8066
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 8066,
    "end": 8074
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8074,
    "end": 8075
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 8076,
    "end": 8084
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8084,
    "end": 8085
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 8086,
    "end": 8094
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8094,
    "end": 8095
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8095,
    "end": 8096
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8103,
    "end": 8106
  },
  {
    "type": "Identifier",
    "value": "s9e",
    "start": 8107,
    "end": 8110
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8111,
    "end": 8112
  },
  {
    "type": "Identifier",
    "value": "s9",
    "start": 8113,
    "end": 8115
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8115,
    "end": 8116
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8116,
    "end": 8120
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8120,
    "end": 8121
  },
  {
    "type": "Identifier",
    "value": "nPromise",
    "start": 8121,
    "end": 8129
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8129,
    "end": 8130
  },
  {
    "type": "Identifier",
    "value": "nPromise",
    "start": 8131,
    "end": 8139
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8139,
    "end": 8140
  },
  {
    "type": "Identifier",
    "value": "nPromise",
    "start": 8141,
    "end": 8149
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8149,
    "end": 8150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8150,
    "end": 8151
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8158,
    "end": 8161
  },
  {
    "type": "Identifier",
    "value": "s9f",
    "start": 8162,
    "end": 8165
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8166,
    "end": 8167
  },
  {
    "type": "Identifier",
    "value": "s9",
    "start": 8168,
    "end": 8170
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8170,
    "end": 8171
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8171,
    "end": 8175
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8175,
    "end": 8176
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 8176,
    "end": 8188
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8188,
    "end": 8189
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8190,
    "end": 8199
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8199,
    "end": 8200
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 8201,
    "end": 8210
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8210,
    "end": 8211
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8211,
    "end": 8212
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8222,
    "end": 8225
  },
  {
    "type": "Identifier",
    "value": "s9g",
    "start": 8226,
    "end": 8229
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8230,
    "end": 8231
  },
  {
    "type": "Identifier",
    "value": "s9",
    "start": 8232,
    "end": 8234
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8234,
    "end": 8235
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8235,
    "end": 8239
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8239,
    "end": 8240
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 8240,
    "end": 8252
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8252,
    "end": 8253
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 8254,
    "end": 8263
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8263,
    "end": 8264
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8265,
    "end": 8274
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8274,
    "end": 8275
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8275,
    "end": 8276
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8276,
    "end": 8280
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8280,
    "end": 8281
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8281,
    "end": 8290
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8290,
    "end": 8291
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8292,
    "end": 8301
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8301,
    "end": 8302
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8303,
    "end": 8312
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8312,
    "end": 8313
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8313,
    "end": 8314
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8322,
    "end": 8325
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 8326,
    "end": 8329
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8330,
    "end": 8331
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 8332,
    "end": 8346
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8346,
    "end": 8347
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 8347,
    "end": 8348
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 8349,
    "end": 8351
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 8352,
    "end": 8353
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8353,
    "end": 8354
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8354,
    "end": 8355
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8356,
    "end": 8359
  },
  {
    "type": "Identifier",
    "value": "r10a",
    "start": 8360,
    "end": 8364
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8365,
    "end": 8366
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 8367,
    "end": 8370
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8370,
    "end": 8371
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8371,
    "end": 8375
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8375,
    "end": 8376
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 8376,
    "end": 8390
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8390,
    "end": 8391
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 8392,
    "end": 8406
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8406,
    "end": 8407
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 8408,
    "end": 8422
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8422,
    "end": 8423
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8423,
    "end": 8424
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8431,
    "end": 8434
  },
  {
    "type": "Identifier",
    "value": "r10b",
    "start": 8435,
    "end": 8439
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8440,
    "end": 8441
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 8442,
    "end": 8445
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8445,
    "end": 8446
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8446,
    "end": 8450
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8450,
    "end": 8451
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8451,
    "end": 8460
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8460,
    "end": 8461
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8462,
    "end": 8471
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8471,
    "end": 8472
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8473,
    "end": 8482
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8482,
    "end": 8483
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8483,
    "end": 8484
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8491,
    "end": 8494
  },
  {
    "type": "Identifier",
    "value": "r10c",
    "start": 8495,
    "end": 8499
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8500,
    "end": 8501
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 8502,
    "end": 8505
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8505,
    "end": 8506
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8506,
    "end": 8510
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8510,
    "end": 8511
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 8511,
    "end": 8520
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8520,
    "end": 8521
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 8522,
    "end": 8531
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8531,
    "end": 8532
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 8533,
    "end": 8542
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8542,
    "end": 8543
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8543,
    "end": 8544
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8551,
    "end": 8554
  },
  {
    "type": "Identifier",
    "value": "r10d",
    "start": 8555,
    "end": 8559
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8560,
    "end": 8561
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 8562,
    "end": 8565
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8565,
    "end": 8566
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8566,
    "end": 8570
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8570,
    "end": 8571
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 8571,
    "end": 8583
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8583,
    "end": 8584
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8585,
    "end": 8594
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8594,
    "end": 8595
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 8596,
    "end": 8605
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8605,
    "end": 8606
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8606,
    "end": 8607
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8617,
    "end": 8620
  },
  {
    "type": "Identifier",
    "value": "r10e",
    "start": 8621,
    "end": 8625
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8626,
    "end": 8627
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 8628,
    "end": 8631
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8631,
    "end": 8632
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8632,
    "end": 8636
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8636,
    "end": 8637
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 8637,
    "end": 8649
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8649,
    "end": 8650
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 8651,
    "end": 8660
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8660,
    "end": 8661
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8662,
    "end": 8671
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8671,
    "end": 8672
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8672,
    "end": 8673
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8673,
    "end": 8677
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8677,
    "end": 8678
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8678,
    "end": 8687
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8687,
    "end": 8688
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8689,
    "end": 8698
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8698,
    "end": 8699
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8700,
    "end": 8709
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8709,
    "end": 8710
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8710,
    "end": 8711
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8718,
    "end": 8721
  },
  {
    "type": "Identifier",
    "value": "s10",
    "start": 8722,
    "end": 8725
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8726,
    "end": 8727
  },
  {
    "type": "Identifier",
    "value": "testFunction10P",
    "start": 8728,
    "end": 8743
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8743,
    "end": 8744
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 8744,
    "end": 8745
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 8746,
    "end": 8748
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 8749,
    "end": 8750
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8750,
    "end": 8751
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8751,
    "end": 8752
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8753,
    "end": 8756
  },
  {
    "type": "Identifier",
    "value": "s10a",
    "start": 8757,
    "end": 8761
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8762,
    "end": 8763
  },
  {
    "type": "Identifier",
    "value": "s10",
    "start": 8764,
    "end": 8767
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8767,
    "end": 8768
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8768,
    "end": 8772
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8772,
    "end": 8773
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 8773,
    "end": 8787
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8787,
    "end": 8788
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 8789,
    "end": 8803
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8803,
    "end": 8804
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 8805,
    "end": 8819
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8819,
    "end": 8820
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8820,
    "end": 8821
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8828,
    "end": 8831
  },
  {
    "type": "Identifier",
    "value": "s10b",
    "start": 8832,
    "end": 8836
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8837,
    "end": 8838
  },
  {
    "type": "Identifier",
    "value": "s10",
    "start": 8839,
    "end": 8842
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8842,
    "end": 8843
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8843,
    "end": 8847
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8847,
    "end": 8848
  },
  {
    "type": "Identifier",
    "value": "testFunction10P",
    "start": 8848,
    "end": 8863
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8863,
    "end": 8864
  },
  {
    "type": "Identifier",
    "value": "testFunction10P",
    "start": 8865,
    "end": 8880
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8880,
    "end": 8881
  },
  {
    "type": "Identifier",
    "value": "testFunction10P",
    "start": 8882,
    "end": 8897
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8897,
    "end": 8898
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8898,
    "end": 8899
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8906,
    "end": 8909
  },
  {
    "type": "Identifier",
    "value": "s10c",
    "start": 8910,
    "end": 8914
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8915,
    "end": 8916
  },
  {
    "type": "Identifier",
    "value": "s10",
    "start": 8917,
    "end": 8920
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8920,
    "end": 8921
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8921,
    "end": 8925
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8925,
    "end": 8926
  },
  {
    "type": "Identifier",
    "value": "testFunction10P",
    "start": 8926,
    "end": 8941
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8941,
    "end": 8942
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 8943,
    "end": 8957
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8957,
    "end": 8958
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 8959,
    "end": 8973
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8973,
    "end": 8974
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8974,
    "end": 8975
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8982,
    "end": 8985
  },
  {
    "type": "Identifier",
    "value": "s10d",
    "start": 8986,
    "end": 8990
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8991,
    "end": 8992
  },
  {
    "type": "Identifier",
    "value": "s10",
    "start": 8993,
    "end": 8996
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8996,
    "end": 8997
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8997,
    "end": 9001
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9001,
    "end": 9002
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 9002,
    "end": 9010
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9010,
    "end": 9011
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 9012,
    "end": 9020
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9020,
    "end": 9021
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 9022,
    "end": 9030
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9030,
    "end": 9031
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9031,
    "end": 9032
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9039,
    "end": 9042
  },
  {
    "type": "Identifier",
    "value": "s10e",
    "start": 9043,
    "end": 9047
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9048,
    "end": 9049
  },
  {
    "type": "Identifier",
    "value": "s10",
    "start": 9050,
    "end": 9053
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9053,
    "end": 9054
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9054,
    "end": 9058
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9058,
    "end": 9059
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 9059,
    "end": 9068
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9068,
    "end": 9069
  },
  {
    "type": "Identifier",
    "value": "nPromise",
    "start": 9070,
    "end": 9078
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9078,
    "end": 9079
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 9080,
    "end": 9089
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9089,
    "end": 9090
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9090,
    "end": 9091
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9098,
    "end": 9101
  },
  {
    "type": "Identifier",
    "value": "s10f",
    "start": 9102,
    "end": 9106
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9107,
    "end": 9108
  },
  {
    "type": "Identifier",
    "value": "s10",
    "start": 9109,
    "end": 9112
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9112,
    "end": 9113
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9113,
    "end": 9117
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9117,
    "end": 9118
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 9118,
    "end": 9131
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9131,
    "end": 9132
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 9133,
    "end": 9142
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9142,
    "end": 9143
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 9144,
    "end": 9153
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9153,
    "end": 9154
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9154,
    "end": 9155
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9165,
    "end": 9168
  },
  {
    "type": "Identifier",
    "value": "s10g",
    "start": 9169,
    "end": 9173
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9174,
    "end": 9175
  },
  {
    "type": "Identifier",
    "value": "s10",
    "start": 9176,
    "end": 9179
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9179,
    "end": 9180
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9180,
    "end": 9184
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9184,
    "end": 9185
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 9185,
    "end": 9198
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9198,
    "end": 9199
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 9200,
    "end": 9209
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9209,
    "end": 9210
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 9211,
    "end": 9220
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9220,
    "end": 9221
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9221,
    "end": 9222
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9222,
    "end": 9226
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9226,
    "end": 9227
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 9227,
    "end": 9235
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9235,
    "end": 9236
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 9237,
    "end": 9246
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9246,
    "end": 9247
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 9248,
    "end": 9257
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9257,
    "end": 9258
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9258,
    "end": 9259
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9267,
    "end": 9270
  },
  {
    "type": "Identifier",
    "value": "r11",
    "start": 9271,
    "end": 9274
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9274,
    "end": 9275
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 9276,
    "end": 9284
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 9284,
    "end": 9285
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 9285,
    "end": 9291
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 9291,
    "end": 9292
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9292,
    "end": 9293
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9294,
    "end": 9297
  },
  {
    "type": "Identifier",
    "value": "r11a",
    "start": 9298,
    "end": 9302
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9303,
    "end": 9304
  },
  {
    "type": "Identifier",
    "value": "r11",
    "start": 9305,
    "end": 9308
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9308,
    "end": 9309
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9309,
    "end": 9313
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9313,
    "end": 9314
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 9314,
    "end": 9328
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9328,
    "end": 9329
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 9330,
    "end": 9344
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9344,
    "end": 9345
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 9346,
    "end": 9360
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9360,
    "end": 9361
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9361,
    "end": 9362
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9369,
    "end": 9372
  },
  {
    "type": "Identifier",
    "value": "s11",
    "start": 9373,
    "end": 9376
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9376,
    "end": 9377
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 9378,
    "end": 9385
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 9385,
    "end": 9386
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 9386,
    "end": 9392
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 9392,
    "end": 9393
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9393,
    "end": 9394
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9395,
    "end": 9398
  },
  {
    "type": "Identifier",
    "value": "s11a",
    "start": 9399,
    "end": 9403
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9404,
    "end": 9405
  },
  {
    "type": "Identifier",
    "value": "s11",
    "start": 9406,
    "end": 9409
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9409,
    "end": 9410
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9410,
    "end": 9414
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9414,
    "end": 9415
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 9415,
    "end": 9429
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9429,
    "end": 9430
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 9431,
    "end": 9445
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9445,
    "end": 9446
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 9447,
    "end": 9461
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9461,
    "end": 9462
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9462,
    "end": 9463
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9470,
    "end": 9473
  },
  {
    "type": "Identifier",
    "value": "s11b",
    "start": 9474,
    "end": 9478
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9479,
    "end": 9480
  },
  {
    "type": "Identifier",
    "value": "s11",
    "start": 9481,
    "end": 9484
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9484,
    "end": 9485
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9485,
    "end": 9489
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9489,
    "end": 9490
  },
  {
    "type": "Identifier",
    "value": "testFunction11P",
    "start": 9490,
    "end": 9505
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9505,
    "end": 9506
  },
  {
    "type": "Identifier",
    "value": "testFunction11P",
    "start": 9507,
    "end": 9522
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9522,
    "end": 9523
  },
  {
    "type": "Identifier",
    "value": "testFunction11P",
    "start": 9524,
    "end": 9539
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9539,
    "end": 9540
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9540,
    "end": 9541
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9551,
    "end": 9554
  },
  {
    "type": "Identifier",
    "value": "s11c",
    "start": 9555,
    "end": 9559
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9560,
    "end": 9561
  },
  {
    "type": "Identifier",
    "value": "s11",
    "start": 9562,
    "end": 9565
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9565,
    "end": 9566
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9566,
    "end": 9570
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9570,
    "end": 9571
  },
  {
    "type": "Identifier",
    "value": "testFunction11P",
    "start": 9571,
    "end": 9586
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9586,
    "end": 9587
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 9588,
    "end": 9602
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9602,
    "end": 9603
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 9604,
    "end": 9618
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9618,
    "end": 9619
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9619,
    "end": 9620
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9631,
    "end": 9634
  },
  {
    "type": "Identifier",
    "value": "r12",
    "start": 9635,
    "end": 9638
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9639,
    "end": 9640
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 9641,
    "end": 9655
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9655,
    "end": 9656
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 9656,
    "end": 9657
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 9658,
    "end": 9660
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 9661,
    "end": 9662
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9662,
    "end": 9663
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9663,
    "end": 9664
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9665,
    "end": 9668
  },
  {
    "type": "Identifier",
    "value": "r12a",
    "start": 9669,
    "end": 9673
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9674,
    "end": 9675
  },
  {
    "type": "Identifier",
    "value": "r12",
    "start": 9676,
    "end": 9679
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9679,
    "end": 9680
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9680,
    "end": 9684
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9684,
    "end": 9685
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 9685,
    "end": 9699
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9699,
    "end": 9700
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 9701,
    "end": 9715
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9715,
    "end": 9716
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 9717,
    "end": 9731
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9731,
    "end": 9732
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9732,
    "end": 9733
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9740,
    "end": 9743
  },
  {
    "type": "Identifier",
    "value": "s12",
    "start": 9744,
    "end": 9747
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9748,
    "end": 9749
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 9750,
    "end": 9764
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9764,
    "end": 9765
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 9765,
    "end": 9766
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 9767,
    "end": 9769
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 9770,
    "end": 9771
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9771,
    "end": 9772
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9772,
    "end": 9773
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9774,
    "end": 9777
  },
  {
    "type": "Identifier",
    "value": "s12a",
    "start": 9778,
    "end": 9782
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9783,
    "end": 9784
  },
  {
    "type": "Identifier",
    "value": "s12",
    "start": 9785,
    "end": 9788
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9788,
    "end": 9789
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9789,
    "end": 9793
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9793,
    "end": 9794
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 9794,
    "end": 9808
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9808,
    "end": 9809
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 9810,
    "end": 9824
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9824,
    "end": 9825
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 9826,
    "end": 9840
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9840,
    "end": 9841
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9841,
    "end": 9842
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9849,
    "end": 9852
  },
  {
    "type": "Identifier",
    "value": "s12b",
    "start": 9853,
    "end": 9857
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9858,
    "end": 9859
  },
  {
    "type": "Identifier",
    "value": "s12",
    "start": 9860,
    "end": 9863
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9863,
    "end": 9864
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9864,
    "end": 9868
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9868,
    "end": 9869
  },
  {
    "type": "Identifier",
    "value": "testFunction12P",
    "start": 9869,
    "end": 9884
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9884,
    "end": 9885
  },
  {
    "type": "Identifier",
    "value": "testFunction12P",
    "start": 9886,
    "end": 9901
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9901,
    "end": 9902
  },
  {
    "type": "Identifier",
    "value": "testFunction12P",
    "start": 9903,
    "end": 9918
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9918,
    "end": 9919
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9919,
    "end": 9920
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9927,
    "end": 9930
  },
  {
    "type": "Identifier",
    "value": "s12c",
    "start": 9931,
    "end": 9935
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9936,
    "end": 9937
  },
  {
    "type": "Identifier",
    "value": "s12",
    "start": 9938,
    "end": 9941
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9941,
    "end": 9942
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9942,
    "end": 9946
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9946,
    "end": 9947
  },
  {
    "type": "Identifier",
    "value": "testFunction12P",
    "start": 9947,
    "end": 9962
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9962,
    "end": 9963
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 9964,
    "end": 9978
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9978,
    "end": 9979
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 9980,
    "end": 9994
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9994,
    "end": 9995
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9995,
    "end": 9996
  }
]
```
