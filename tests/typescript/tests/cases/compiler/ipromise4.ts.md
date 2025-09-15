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
                            "start": 689,
                            "end": 690
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 689,
                          "end": 690
                        }
                      ],
                      "start": 688,
                      "end": 691
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
                                      "start": 710,
                                      "end": 711
                                    },
                                    "typeArguments": null,
                                    "start": 710,
                                    "end": 711
                                  },
                                  "start": 708,
                                  "end": 711
                                },
                                "start": 703,
                                "end": 711
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 716,
                                "end": 719
                              },
                              "start": 713,
                              "end": 719
                            },
                            "start": 702,
                            "end": 719
                          },
                          "start": 700,
                          "end": 719
                        },
                        "start": 692,
                        "end": 719
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
                                    "start": 737,
                                    "end": 740
                                  },
                                  "start": 735,
                                  "end": 740
                                },
                                "start": 730,
                                "end": 740
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 745,
                                "end": 748
                              },
                              "start": 742,
                              "end": 748
                            },
                            "start": 729,
                            "end": 748
                          },
                          "start": 727,
                          "end": 748
                        },
                        "start": 721,
                        "end": 748
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
                                    "start": 772,
                                    "end": 775
                                  },
                                  "start": 770,
                                  "end": 775
                                },
                                "start": 762,
                                "end": 775
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 780,
                                "end": 784
                              },
                              "start": 777,
                              "end": 784
                            },
                            "start": 761,
                            "end": 784
                          },
                          "start": 759,
                          "end": 784
                        },
                        "start": 750,
                        "end": 784
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 788,
                        "end": 792
                      },
                      "start": 786,
                      "end": 792
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 682,
                    "end": 793
                  }
                ],
                "start": 72,
                "end": 799
              },
              "declare": false,
              "start": 50,
              "end": 799
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 43,
            "end": 799
          }
        ],
        "start": 37,
        "end": 801
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 801
    },
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
                      "start": 811,
                      "end": 818
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foundation",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 819,
                      "end": 829
                    },
                    "start": 811,
                    "end": 829
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 830,
                    "end": 838
                  },
                  "start": 811,
                  "end": 838
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 839,
                      "end": 845
                    }
                  ],
                  "start": 838,
                  "end": 846
                },
                "start": 811,
                "end": 846
              },
              "start": 809,
              "end": 846
            },
            "start": 808,
            "end": 846
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 849,
            "end": 853
          },
          "definite": false,
          "start": 808,
          "end": 853
        }
      ],
      "declare": false,
      "start": 804,
      "end": 854
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 857,
            "end": 858
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "then",
            "optional": false,
            "typeAnnotation": null,
            "start": 859,
            "end": 863
          },
          "optional": false,
          "computed": false,
          "start": 857,
          "end": 863
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 874,
                "end": 875
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 877,
              "end": 880
            },
            "expression": false,
            "start": 864,
            "end": 880
          }
        ],
        "optional": false,
        "start": 857,
        "end": 882
      },
      "directive": null,
      "start": 857,
      "end": 883
    },
    {
      "type": "ExpressionStatement",
      "expression": {
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
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 904,
                "end": 905
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 906,
                "end": 910
              },
              "optional": false,
              "computed": false,
              "start": 904,
              "end": 910
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 921,
                    "end": 922
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
                        "value": "hello",
                        "raw": "\"hello\"",
                        "start": 933,
                        "end": 940
                      },
                      "start": 926,
                      "end": 941
                    }
                  ],
                  "start": 924,
                  "end": 943
                },
                "expression": false,
                "start": 911,
                "end": 943
              }
            ],
            "optional": false,
            "start": 904,
            "end": 945
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "then",
            "optional": false,
            "typeAnnotation": null,
            "start": 946,
            "end": 950
          },
          "optional": false,
          "computed": false,
          "start": 904,
          "end": 950
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 961,
                "end": 962
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 973,
                    "end": 974
                  },
                  "start": 966,
                  "end": 974
                }
              ],
              "start": 964,
              "end": 976
            },
            "expression": false,
            "start": 951,
            "end": 976
          }
        ],
        "optional": false,
        "start": 904,
        "end": 978
      },
      "directive": null,
      "start": 904,
      "end": 979
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1001
}
```
