__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "IPromise",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 25
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
                "start": 26,
                "end": 27
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 26,
              "end": 27
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 29,
                "end": 30
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 29,
              "end": 30
            }
          ],
          "start": 25,
          "end": 31
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
                "start": 38,
                "end": 42
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
                      "start": 43,
                      "end": 44
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 43,
                    "end": 44
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "W",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 46,
                      "end": 47
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 46,
                    "end": 47
                  }
                ],
                "start": 42,
                "end": 48
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "callback",
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
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 63,
                                "end": 64
                              },
                              "typeArguments": null,
                              "start": 63,
                              "end": 64
                            },
                            "start": 61,
                            "end": 64
                          },
                          "start": 60,
                          "end": 64
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
                            "start": 69,
                            "end": 77
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
                                  "start": 78,
                                  "end": 79
                                },
                                "typeArguments": null,
                                "start": 78,
                                "end": 79
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "W",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 81,
                                  "end": 82
                                },
                                "typeArguments": null,
                                "start": 81,
                                "end": 82
                              }
                            ],
                            "start": 77,
                            "end": 83
                          },
                          "start": 69,
                          "end": 83
                        },
                        "start": 66,
                        "end": 83
                      },
                      "start": 59,
                      "end": 83
                    },
                    "start": 57,
                    "end": 83
                  },
                  "start": 49,
                  "end": 83
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
                    "start": 86,
                    "end": 94
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
                          "start": 95,
                          "end": 96
                        },
                        "typeArguments": null,
                        "start": 95,
                        "end": 96
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "W",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 98,
                          "end": 99
                        },
                        "typeArguments": null,
                        "start": 98,
                        "end": 99
                      }
                    ],
                    "start": 94,
                    "end": 100
                  },
                  "start": 86,
                  "end": 100
                },
                "start": 84,
                "end": 100
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 38,
              "end": 101
            }
          ],
          "start": 32,
          "end": 103
        },
        "declare": false,
        "start": 7,
        "end": 103
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 103
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Promise",
        "optional": false,
        "typeAnnotation": null,
        "start": 114,
        "end": 121
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
              "start": 122,
              "end": 123
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 122,
            "end": 123
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 125,
              "end": 126
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 125,
            "end": 126
          }
        ],
        "start": 121,
        "end": 127
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
              "start": 134,
              "end": 138
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "callback",
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
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 153,
                              "end": 154
                            },
                            "typeArguments": null,
                            "start": 153,
                            "end": 154
                          },
                          "start": 151,
                          "end": 154
                        },
                        "start": 150,
                        "end": 154
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
                          "start": 159,
                          "end": 166
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSAnyKeyword",
                              "start": 167,
                              "end": 170
                            },
                            {
                              "type": "TSAnyKeyword",
                              "start": 172,
                              "end": 175
                            }
                          ],
                          "start": 166,
                          "end": 176
                        },
                        "start": 159,
                        "end": 176
                      },
                      "start": 156,
                      "end": 176
                    },
                    "start": 149,
                    "end": 176
                  },
                  "start": 147,
                  "end": 176
                },
                "start": 139,
                "end": 176
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
                  "start": 179,
                  "end": 186
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 187,
                      "end": 190
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 192,
                      "end": 195
                    }
                  ],
                  "start": 186,
                  "end": 196
                },
                "start": 179,
                "end": 196
              },
              "start": 177,
              "end": 196
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 134,
            "end": 197
          }
        ],
        "start": 128,
        "end": 199
      },
      "declare": false,
      "start": 104,
      "end": 199
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
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
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 260,
                  "end": 268
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 269,
                      "end": 275
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 277,
                      "end": 283
                    }
                  ],
                  "start": 268,
                  "end": 284
                },
                "start": 260,
                "end": 284
              },
              "start": 258,
              "end": 284
            },
            "start": 257,
            "end": 284
          },
          "init": null,
          "definite": false,
          "start": 257,
          "end": 284
        }
      ],
      "declare": false,
      "start": 253,
      "end": 285
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
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
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 293,
                  "end": 300
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 301,
                      "end": 307
                    },
                    {
                      "type": "TSBooleanKeyword",
                      "start": 309,
                      "end": 316
                    }
                  ],
                  "start": 300,
                  "end": 317
                },
                "start": 293,
                "end": 317
              },
              "start": 291,
              "end": 317
            },
            "start": 290,
            "end": 317
          },
          "init": null,
          "definite": false,
          "start": 290,
          "end": 317
        }
      ],
      "declare": false,
      "start": 286,
      "end": 318
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IPromise2",
        "optional": false,
        "typeAnnotation": null,
        "start": 331,
        "end": 340
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
              "start": 341,
              "end": 342
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 341,
            "end": 342
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 344,
              "end": 345
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 344,
            "end": 345
          }
        ],
        "start": 340,
        "end": 346
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
              "start": 353,
              "end": 357
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
                    "start": 358,
                    "end": 359
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 358,
                  "end": 359
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "W",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 361,
                    "end": 362
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 361,
                  "end": 362
                }
              ],
              "start": 357,
              "end": 363
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "callback",
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
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 378,
                              "end": 379
                            },
                            "typeArguments": null,
                            "start": 378,
                            "end": 379
                          },
                          "start": 376,
                          "end": 379
                        },
                        "start": 375,
                        "end": 379
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IPromise2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 384,
                          "end": 393
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
                                "start": 394,
                                "end": 395
                              },
                              "typeArguments": null,
                              "start": 394,
                              "end": 395
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "W",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 397,
                                "end": 398
                              },
                              "typeArguments": null,
                              "start": 397,
                              "end": 398
                            }
                          ],
                          "start": 393,
                          "end": 399
                        },
                        "start": 384,
                        "end": 399
                      },
                      "start": 381,
                      "end": 399
                    },
                    "start": 374,
                    "end": 399
                  },
                  "start": 372,
                  "end": 399
                },
                "start": 364,
                "end": 399
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 402,
                  "end": 411
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
                        "start": 412,
                        "end": 413
                      },
                      "typeArguments": null,
                      "start": 412,
                      "end": 413
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "W",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 415,
                        "end": 416
                      },
                      "typeArguments": null,
                      "start": 415,
                      "end": 416
                    }
                  ],
                  "start": 411,
                  "end": 417
                },
                "start": 402,
                "end": 417
              },
              "start": 400,
              "end": 417
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 353,
            "end": 418
          }
        ],
        "start": 347,
        "end": 420
      },
      "declare": false,
      "start": 321,
      "end": 420
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Promise2",
        "optional": false,
        "typeAnnotation": null,
        "start": 431,
        "end": 439
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
              "start": 440,
              "end": 441
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 440,
            "end": 441
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 443,
              "end": 444
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 443,
            "end": 444
          }
        ],
        "start": 439,
        "end": 445
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
              "start": 452,
              "end": 456
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
                    "start": 457,
                    "end": 458
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 457,
                  "end": 458
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "W",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 460,
                    "end": 461
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 460,
                  "end": 461
                }
              ],
              "start": 456,
              "end": 462
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "callback",
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
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 477,
                              "end": 478
                            },
                            "typeArguments": null,
                            "start": 477,
                            "end": 478
                          },
                          "start": 475,
                          "end": 478
                        },
                        "start": 474,
                        "end": 478
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 483,
                          "end": 491
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSStringKeyword",
                              "start": 492,
                              "end": 498
                            },
                            {
                              "type": "TSAnyKeyword",
                              "start": 500,
                              "end": 503
                            }
                          ],
                          "start": 491,
                          "end": 504
                        },
                        "start": 483,
                        "end": 504
                      },
                      "start": 480,
                      "end": 504
                    },
                    "start": 473,
                    "end": 504
                  },
                  "start": 471,
                  "end": 504
                },
                "start": 463,
                "end": 504
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 507,
                  "end": 515
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 516,
                      "end": 519
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 521,
                      "end": 524
                    }
                  ],
                  "start": 515,
                  "end": 525
                },
                "start": 507,
                "end": 525
              },
              "start": 505,
              "end": 525
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 452,
            "end": 526
          }
        ],
        "start": 446,
        "end": 559
      },
      "declare": false,
      "start": 421,
      "end": 559
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
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
                  "name": "IPromise2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 612,
                  "end": 621
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 622,
                      "end": 628
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 630,
                      "end": 636
                    }
                  ],
                  "start": 621,
                  "end": 637
                },
                "start": 612,
                "end": 637
              },
              "start": 610,
              "end": 637
            },
            "start": 609,
            "end": 637
          },
          "init": null,
          "definite": false,
          "start": 609,
          "end": 637
        }
      ],
      "declare": false,
      "start": 605,
      "end": 638
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
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
                  "name": "Promise2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 646,
                  "end": 654
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 655,
                      "end": 661
                    },
                    {
                      "type": "TSBooleanKeyword",
                      "start": 663,
                      "end": 670
                    }
                  ],
                  "start": 654,
                  "end": 671
                },
                "start": 646,
                "end": 671
              },
              "start": 644,
              "end": 671
            },
            "start": 643,
            "end": 671
          },
          "init": null,
          "definite": false,
          "start": 643,
          "end": 671
        }
      ],
      "declare": false,
      "start": 639,
      "end": 672
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 672
}
```
