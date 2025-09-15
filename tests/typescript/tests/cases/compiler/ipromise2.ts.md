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
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "IPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 60,
                "end": 68
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
                      "start": 69,
                      "end": 70
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 69,
                    "end": 70
                  }
                ],
                "start": 68,
                "end": 71
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
                      "start": 82,
                      "end": 86
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
                            "start": 87,
                            "end": 88
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 87,
                          "end": 88
                        }
                      ],
                      "start": 86,
                      "end": 89
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
                                      "start": 108,
                                      "end": 109
                                    },
                                    "typeArguments": null,
                                    "start": 108,
                                    "end": 109
                                  },
                                  "start": 106,
                                  "end": 109
                                },
                                "start": 101,
                                "end": 109
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
                                  "start": 114,
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
                                        "name": "U",
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
                                "start": 114,
                                "end": 125
                              },
                              "start": 111,
                              "end": 125
                            },
                            "start": 100,
                            "end": 125
                          },
                          "start": 98,
                          "end": 125
                        },
                        "start": 90,
                        "end": 125
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
                                    "start": 143,
                                    "end": 146
                                  },
                                  "start": 141,
                                  "end": 146
                                },
                                "start": 136,
                                "end": 146
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
                                  "start": 151,
                                  "end": 159
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
                                        "start": 160,
                                        "end": 161
                                      },
                                      "typeArguments": null,
                                      "start": 160,
                                      "end": 161
                                    }
                                  ],
                                  "start": 159,
                                  "end": 162
                                },
                                "start": 151,
                                "end": 162
                              },
                              "start": 148,
                              "end": 162
                            },
                            "start": 135,
                            "end": 162
                          },
                          "start": 133,
                          "end": 162
                        },
                        "start": 127,
                        "end": 162
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
                                    "start": 186,
                                    "end": 189
                                  },
                                  "start": 184,
                                  "end": 189
                                },
                                "start": 176,
                                "end": 189
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 194,
                                "end": 198
                              },
                              "start": 191,
                              "end": 198
                            },
                            "start": 175,
                            "end": 198
                          },
                          "start": 173,
                          "end": 198
                        },
                        "start": 164,
                        "end": 198
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
                              "start": 202,
                              "end": 209
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Foundation",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 210,
                              "end": 220
                            },
                            "start": 202,
                            "end": 220
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "IPromise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 221,
                            "end": 229
                          },
                          "start": 202,
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
                        "start": 202,
                        "end": 232
                      },
                      "start": 200,
                      "end": 232
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 82,
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
                      "start": 242,
                      "end": 246
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
                            "start": 247,
                            "end": 248
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 247,
                          "end": 248
                        }
                      ],
                      "start": 246,
                      "end": 249
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
                                      "start": 268,
                                      "end": 269
                                    },
                                    "typeArguments": null,
                                    "start": 268,
                                    "end": 269
                                  },
                                  "start": 266,
                                  "end": 269
                                },
                                "start": 261,
                                "end": 269
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
                                  "start": 274,
                                  "end": 282
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
                                        "start": 283,
                                        "end": 284
                                      },
                                      "typeArguments": null,
                                      "start": 283,
                                      "end": 284
                                    }
                                  ],
                                  "start": 282,
                                  "end": 285
                                },
                                "start": 274,
                                "end": 285
                              },
                              "start": 271,
                              "end": 285
                            },
                            "start": 260,
                            "end": 285
                          },
                          "start": 258,
                          "end": 285
                        },
                        "start": 250,
                        "end": 285
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
                                    "start": 303,
                                    "end": 306
                                  },
                                  "start": 301,
                                  "end": 306
                                },
                                "start": 296,
                                "end": 306
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
                                  "start": 311,
                                  "end": 312
                                },
                                "typeArguments": null,
                                "start": 311,
                                "end": 312
                              },
                              "start": 308,
                              "end": 312
                            },
                            "start": 295,
                            "end": 312
                          },
                          "start": 293,
                          "end": 312
                        },
                        "start": 287,
                        "end": 312
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
                                    "start": 336,
                                    "end": 339
                                  },
                                  "start": 334,
                                  "end": 339
                                },
                                "start": 326,
                                "end": 339
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 344,
                                "end": 348
                              },
                              "start": 341,
                              "end": 348
                            },
                            "start": 325,
                            "end": 348
                          },
                          "start": 323,
                          "end": 348
                        },
                        "start": 314,
                        "end": 348
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
                              "start": 352,
                              "end": 359
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Foundation",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 360,
                              "end": 370
                            },
                            "start": 352,
                            "end": 370
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "IPromise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 371,
                            "end": 379
                          },
                          "start": 352,
                          "end": 379
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
                                "start": 380,
                                "end": 381
                              },
                              "typeArguments": null,
                              "start": 380,
                              "end": 381
                            }
                          ],
                          "start": 379,
                          "end": 382
                        },
                        "start": 352,
                        "end": 382
                      },
                      "start": 350,
                      "end": 382
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 242,
                    "end": 383
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "then",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 392,
                      "end": 396
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
                            "start": 397,
                            "end": 398
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 397,
                          "end": 398
                        }
                      ],
                      "start": 396,
                      "end": 399
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
                                "start": 411,
                                "end": 419
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
                                  "start": 424,
                                  "end": 425
                                },
                                "typeArguments": null,
                                "start": 424,
                                "end": 425
                              },
                              "start": 421,
                              "end": 425
                            },
                            "start": 410,
                            "end": 425
                          },
                          "start": 408,
                          "end": 425
                        },
                        "start": 400,
                        "end": 425
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
                                    "start": 443,
                                    "end": 446
                                  },
                                  "start": 441,
                                  "end": 446
                                },
                                "start": 436,
                                "end": 446
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
                                  "start": 451,
                                  "end": 459
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
                                        "start": 460,
                                        "end": 461
                                      },
                                      "typeArguments": null,
                                      "start": 460,
                                      "end": 461
                                    }
                                  ],
                                  "start": 459,
                                  "end": 462
                                },
                                "start": 451,
                                "end": 462
                              },
                              "start": 448,
                              "end": 462
                            },
                            "start": 435,
                            "end": 462
                          },
                          "start": 433,
                          "end": 462
                        },
                        "start": 427,
                        "end": 462
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
                                    "start": 486,
                                    "end": 489
                                  },
                                  "start": 484,
                                  "end": 489
                                },
                                "start": 476,
                                "end": 489
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 494,
                                "end": 498
                              },
                              "start": 491,
                              "end": 498
                            },
                            "start": 475,
                            "end": 498
                          },
                          "start": 473,
                          "end": 498
                        },
                        "start": 464,
                        "end": 498
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
                              "start": 502,
                              "end": 509
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Foundation",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 510,
                              "end": 520
                            },
                            "start": 502,
                            "end": 520
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "IPromise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 521,
                            "end": 529
                          },
                          "start": 502,
                          "end": 529
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
                                "start": 530,
                                "end": 531
                              },
                              "typeArguments": null,
                              "start": 530,
                              "end": 531
                            }
                          ],
                          "start": 529,
                          "end": 532
                        },
                        "start": 502,
                        "end": 532
                      },
                      "start": 500,
                      "end": 532
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 392,
                    "end": 533
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "then",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 542,
                      "end": 546
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
                            "start": 547,
                            "end": 548
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 547,
                          "end": 548
                        }
                      ],
                      "start": 546,
                      "end": 549
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
                                      "start": 568,
                                      "end": 569
                                    },
                                    "typeArguments": null,
                                    "start": 568,
                                    "end": 569
                                  },
                                  "start": 566,
                                  "end": 569
                                },
                                "start": 561,
                                "end": 569
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
                                  "start": 574,
                                  "end": 575
                                },
                                "typeArguments": null,
                                "start": 574,
                                "end": 575
                              },
                              "start": 571,
                              "end": 575
                            },
                            "start": 560,
                            "end": 575
                          },
                          "start": 558,
                          "end": 575
                        },
                        "start": 550,
                        "end": 575
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
                                    "start": 593,
                                    "end": 596
                                  },
                                  "start": 591,
                                  "end": 596
                                },
                                "start": 586,
                                "end": 596
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
                                  "start": 601,
                                  "end": 602
                                },
                                "typeArguments": null,
                                "start": 601,
                                "end": 602
                              },
                              "start": 598,
                              "end": 602
                            },
                            "start": 585,
                            "end": 602
                          },
                          "start": 583,
                          "end": 602
                        },
                        "start": 577,
                        "end": 602
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
                                    "start": 626,
                                    "end": 629
                                  },
                                  "start": 624,
                                  "end": 629
                                },
                                "start": 616,
                                "end": 629
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 634,
                                "end": 638
                              },
                              "start": 631,
                              "end": 638
                            },
                            "start": 615,
                            "end": 638
                          },
                          "start": 613,
                          "end": 638
                        },
                        "start": 604,
                        "end": 638
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
                              "start": 642,
                              "end": 649
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Foundation",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 650,
                              "end": 660
                            },
                            "start": 642,
                            "end": 660
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "IPromise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 661,
                            "end": 669
                          },
                          "start": 642,
                          "end": 669
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
                                "start": 670,
                                "end": 671
                              },
                              "typeArguments": null,
                              "start": 670,
                              "end": 671
                            }
                          ],
                          "start": 669,
                          "end": 672
                        },
                        "start": 642,
                        "end": 672
                      },
                      "start": 640,
                      "end": 672
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 542,
                    "end": 673
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "done",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 682,
                      "end": 686
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
                            "start": 687,
                            "end": 688
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 687,
                          "end": 688
                        }
                      ],
                      "start": 686,
                      "end": 689
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
                                      "start": 708,
                                      "end": 709
                                    },
                                    "typeArguments": null,
                                    "start": 708,
                                    "end": 709
                                  },
                                  "start": 706,
                                  "end": 709
                                },
                                "start": 701,
                                "end": 709
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 714,
                                "end": 717
                              },
                              "start": 711,
                              "end": 717
                            },
                            "start": 700,
                            "end": 717
                          },
                          "start": 698,
                          "end": 717
                        },
                        "start": 690,
                        "end": 717
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
                                    "start": 735,
                                    "end": 738
                                  },
                                  "start": 733,
                                  "end": 738
                                },
                                "start": 728,
                                "end": 738
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 743,
                                "end": 746
                              },
                              "start": 740,
                              "end": 746
                            },
                            "start": 727,
                            "end": 746
                          },
                          "start": 725,
                          "end": 746
                        },
                        "start": 719,
                        "end": 746
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
                                    "start": 770,
                                    "end": 773
                                  },
                                  "start": 768,
                                  "end": 773
                                },
                                "start": 760,
                                "end": 773
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 778,
                                "end": 782
                              },
                              "start": 775,
                              "end": 782
                            },
                            "start": 759,
                            "end": 782
                          },
                          "start": 757,
                          "end": 782
                        },
                        "start": 748,
                        "end": 782
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 786,
                        "end": 790
                      },
                      "start": 784,
                      "end": 790
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 682,
                    "end": 791
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 800,
                      "end": 805
                    },
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
                    "accessibility": null,
                    "static": false,
                    "start": 800,
                    "end": 809
                  }
                ],
                "start": 72,
                "end": 815
              },
              "declare": false,
              "start": 50,
              "end": 815
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 43,
            "end": 815
          }
        ],
        "start": 37,
        "end": 817
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 817
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p",
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
                      "start": 826,
                      "end": 833
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foundation",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 834,
                      "end": 844
                    },
                    "start": 826,
                    "end": 844
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 845,
                    "end": 853
                  },
                  "start": 826,
                  "end": 853
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 854,
                      "end": 860
                    }
                  ],
                  "start": 853,
                  "end": 861
                },
                "start": 826,
                "end": 861
              },
              "start": 824,
              "end": 861
            },
            "start": 823,
            "end": 861
          },
          "init": null,
          "definite": false,
          "start": 823,
          "end": 861
        }
      ],
      "declare": false,
      "start": 819,
      "end": 862
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p2",
            "optional": false,
            "typeAnnotation": null,
            "start": 868,
            "end": 870
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 873,
                "end": 874
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 875,
                "end": 879
              },
              "optional": false,
              "computed": false,
              "start": 873,
              "end": 879
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 890,
                    "end": 891
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 34,
                        "raw": "34",
                        "start": 906,
                        "end": 908
                      },
                      "start": 899,
                      "end": 909
                    }
                  ],
                  "start": 893,
                  "end": 911
                },
                "expression": false,
                "start": 880,
                "end": 911
              }
            ],
            "optional": false,
            "start": 873,
            "end": 913
          },
          "definite": false,
          "start": 868,
          "end": 913
        }
      ],
      "declare": false,
      "start": 864,
      "end": 914
    },
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
                "type": "TSNumberKeyword",
                "start": 924,
                "end": 930
              },
              "start": 922,
              "end": 930
            },
            "start": 921,
            "end": 930
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": null,
              "start": 933,
              "end": 935
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 936,
              "end": 941
            },
            "optional": false,
            "computed": false,
            "start": 933,
            "end": 941
          },
          "definite": false,
          "start": 921,
          "end": 941
        }
      ],
      "declare": false,
      "start": 917,
      "end": 942
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 943
}
```
