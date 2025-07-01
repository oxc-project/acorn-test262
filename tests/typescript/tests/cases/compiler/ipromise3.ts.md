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
        "name": "IPromise3",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 19
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
              "start": 20,
              "end": 21
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 20,
            "end": 21
          }
        ],
        "start": 19,
        "end": 22
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
              "start": 29,
              "end": 33
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
                    "start": 34,
                    "end": 35
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 34,
                  "end": 35
                }
              ],
              "start": 33,
              "end": 36
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
                              "start": 55,
                              "end": 56
                            },
                            "typeArguments": null,
                            "start": 55,
                            "end": 56
                          },
                          "start": 53,
                          "end": 56
                        },
                        "start": 48,
                        "end": 56
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IPromise3",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 61,
                          "end": 70
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
                                "start": 71,
                                "end": 72
                              },
                              "typeArguments": null,
                              "start": 71,
                              "end": 72
                            }
                          ],
                          "start": 70,
                          "end": 73
                        },
                        "start": 61,
                        "end": 73
                      },
                      "start": 58,
                      "end": 73
                    },
                    "start": 47,
                    "end": 73
                  },
                  "start": 45,
                  "end": 73
                },
                "start": 37,
                "end": 73
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
                            "start": 91,
                            "end": 94
                          },
                          "start": 89,
                          "end": 94
                        },
                        "start": 84,
                        "end": 94
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IPromise3",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 99,
                          "end": 108
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
                                "start": 109,
                                "end": 110
                              },
                              "typeArguments": null,
                              "start": 109,
                              "end": 110
                            }
                          ],
                          "start": 108,
                          "end": 111
                        },
                        "start": 99,
                        "end": 111
                      },
                      "start": 96,
                      "end": 111
                    },
                    "start": 83,
                    "end": 111
                  },
                  "start": 81,
                  "end": 111
                },
                "start": 75,
                "end": 111
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
                            "start": 135,
                            "end": 138
                          },
                          "start": 133,
                          "end": 138
                        },
                        "start": 125,
                        "end": 138
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 143,
                        "end": 147
                      },
                      "start": 140,
                      "end": 147
                    },
                    "start": 124,
                    "end": 147
                  },
                  "start": 122,
                  "end": 147
                },
                "start": 113,
                "end": 147
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 151,
                  "end": 160
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
                        "start": 161,
                        "end": 162
                      },
                      "typeArguments": null,
                      "start": 161,
                      "end": 162
                    }
                  ],
                  "start": 160,
                  "end": 163
                },
                "start": 151,
                "end": 163
              },
              "start": 149,
              "end": 163
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 29,
            "end": 164
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 169,
              "end": 173
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
                    "start": 174,
                    "end": 175
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 174,
                  "end": 175
                }
              ],
              "start": 173,
              "end": 176
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
                              "start": 195,
                              "end": 196
                            },
                            "typeArguments": null,
                            "start": 195,
                            "end": 196
                          },
                          "start": 193,
                          "end": 196
                        },
                        "start": 188,
                        "end": 196
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IPromise3",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 201,
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
                        "start": 201,
                        "end": 213
                      },
                      "start": 198,
                      "end": 213
                    },
                    "start": 187,
                    "end": 213
                  },
                  "start": 185,
                  "end": 213
                },
                "start": 177,
                "end": 213
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
                            "start": 231,
                            "end": 234
                          },
                          "start": 229,
                          "end": 234
                        },
                        "start": 224,
                        "end": 234
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
                          "start": 239,
                          "end": 240
                        },
                        "typeArguments": null,
                        "start": 239,
                        "end": 240
                      },
                      "start": 236,
                      "end": 240
                    },
                    "start": 223,
                    "end": 240
                  },
                  "start": 221,
                  "end": 240
                },
                "start": 215,
                "end": 240
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
                            "start": 264,
                            "end": 267
                          },
                          "start": 262,
                          "end": 267
                        },
                        "start": 254,
                        "end": 267
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 272,
                        "end": 276
                      },
                      "start": 269,
                      "end": 276
                    },
                    "start": 253,
                    "end": 276
                  },
                  "start": 251,
                  "end": 276
                },
                "start": 242,
                "end": 276
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 280,
                  "end": 289
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
                        "start": 290,
                        "end": 291
                      },
                      "typeArguments": null,
                      "start": 290,
                      "end": 291
                    }
                  ],
                  "start": 289,
                  "end": 292
                },
                "start": 280,
                "end": 292
              },
              "start": 278,
              "end": 292
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 169,
            "end": 293
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 298,
              "end": 302
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
                    "start": 303,
                    "end": 304
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 303,
                  "end": 304
                }
              ],
              "start": 302,
              "end": 305
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
                              "start": 324,
                              "end": 325
                            },
                            "typeArguments": null,
                            "start": 324,
                            "end": 325
                          },
                          "start": 322,
                          "end": 325
                        },
                        "start": 317,
                        "end": 325
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
                          "start": 330,
                          "end": 331
                        },
                        "typeArguments": null,
                        "start": 330,
                        "end": 331
                      },
                      "start": 327,
                      "end": 331
                    },
                    "start": 316,
                    "end": 331
                  },
                  "start": 314,
                  "end": 331
                },
                "start": 306,
                "end": 331
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
                            "start": 349,
                            "end": 352
                          },
                          "start": 347,
                          "end": 352
                        },
                        "start": 342,
                        "end": 352
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IPromise3",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 357,
                          "end": 366
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
                                "start": 367,
                                "end": 368
                              },
                              "typeArguments": null,
                              "start": 367,
                              "end": 368
                            }
                          ],
                          "start": 366,
                          "end": 369
                        },
                        "start": 357,
                        "end": 369
                      },
                      "start": 354,
                      "end": 369
                    },
                    "start": 341,
                    "end": 369
                  },
                  "start": 339,
                  "end": 369
                },
                "start": 333,
                "end": 369
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
                            "start": 393,
                            "end": 396
                          },
                          "start": 391,
                          "end": 396
                        },
                        "start": 383,
                        "end": 396
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 401,
                        "end": 405
                      },
                      "start": 398,
                      "end": 405
                    },
                    "start": 382,
                    "end": 405
                  },
                  "start": 380,
                  "end": 405
                },
                "start": 371,
                "end": 405
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 409,
                  "end": 418
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
                        "start": 419,
                        "end": 420
                      },
                      "typeArguments": null,
                      "start": 419,
                      "end": 420
                    }
                  ],
                  "start": 418,
                  "end": 421
                },
                "start": 409,
                "end": 421
              },
              "start": 407,
              "end": 421
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 298,
            "end": 422
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 427,
              "end": 431
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
                    "start": 432,
                    "end": 433
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 432,
                  "end": 433
                }
              ],
              "start": 431,
              "end": 434
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
                              "start": 453,
                              "end": 454
                            },
                            "typeArguments": null,
                            "start": 453,
                            "end": 454
                          },
                          "start": 451,
                          "end": 454
                        },
                        "start": 446,
                        "end": 454
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
                          "start": 459,
                          "end": 460
                        },
                        "typeArguments": null,
                        "start": 459,
                        "end": 460
                      },
                      "start": 456,
                      "end": 460
                    },
                    "start": 445,
                    "end": 460
                  },
                  "start": 443,
                  "end": 460
                },
                "start": 435,
                "end": 460
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
                            "start": 478,
                            "end": 481
                          },
                          "start": 476,
                          "end": 481
                        },
                        "start": 471,
                        "end": 481
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
                          "start": 486,
                          "end": 487
                        },
                        "typeArguments": null,
                        "start": 486,
                        "end": 487
                      },
                      "start": 483,
                      "end": 487
                    },
                    "start": 470,
                    "end": 487
                  },
                  "start": 468,
                  "end": 487
                },
                "start": 462,
                "end": 487
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
                            "start": 511,
                            "end": 514
                          },
                          "start": 509,
                          "end": 514
                        },
                        "start": 501,
                        "end": 514
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 519,
                        "end": 523
                      },
                      "start": 516,
                      "end": 523
                    },
                    "start": 500,
                    "end": 523
                  },
                  "start": 498,
                  "end": 523
                },
                "start": 489,
                "end": 523
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 527,
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
                    }
                  ],
                  "start": 536,
                  "end": 539
                },
                "start": 527,
                "end": 539
              },
              "start": 525,
              "end": 539
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 427,
            "end": 540
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "done",
              "optional": false,
              "typeAnnotation": null,
              "start": 545,
              "end": 549
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
                    "start": 552,
                    "end": 553
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 552,
                  "end": 553
                }
              ],
              "start": 551,
              "end": 554
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
                              "start": 573,
                              "end": 574
                            },
                            "typeArguments": null,
                            "start": 573,
                            "end": 574
                          },
                          "start": 571,
                          "end": 574
                        },
                        "start": 566,
                        "end": 574
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 579,
                        "end": 582
                      },
                      "start": 576,
                      "end": 582
                    },
                    "start": 565,
                    "end": 582
                  },
                  "start": 563,
                  "end": 582
                },
                "start": 555,
                "end": 582
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
                            "start": 600,
                            "end": 603
                          },
                          "start": 598,
                          "end": 603
                        },
                        "start": 593,
                        "end": 603
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 608,
                        "end": 611
                      },
                      "start": 605,
                      "end": 611
                    },
                    "start": 592,
                    "end": 611
                  },
                  "start": 590,
                  "end": 611
                },
                "start": 584,
                "end": 611
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
                            "start": 635,
                            "end": 638
                          },
                          "start": 633,
                          "end": 638
                        },
                        "start": 625,
                        "end": 638
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 643,
                        "end": 647
                      },
                      "start": 640,
                      "end": 647
                    },
                    "start": 624,
                    "end": 647
                  },
                  "start": 622,
                  "end": 647
                },
                "start": 613,
                "end": 647
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 651,
                "end": 655
              },
              "start": 649,
              "end": 655
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 545,
            "end": 656
          }
        ],
        "start": 23,
        "end": 658
      },
      "declare": false,
      "start": 0,
      "end": 658
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 667,
                  "end": 676
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 677,
                      "end": 683
                    }
                  ],
                  "start": 676,
                  "end": 684
                },
                "start": 667,
                "end": 684
              },
              "start": 665,
              "end": 684
            },
            "start": 663,
            "end": 684
          },
          "init": null,
          "definite": false,
          "start": 663,
          "end": 684
        }
      ],
      "declare": false,
      "start": 659,
      "end": 685
    },
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 694,
                  "end": 703
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 704,
                      "end": 710
                    }
                  ],
                  "start": 703,
                  "end": 711
                },
                "start": 694,
                "end": 711
              },
              "start": 692,
              "end": 711
            },
            "start": 690,
            "end": 711
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p1",
                "optional": false,
                "typeAnnotation": null,
                "start": 714,
                "end": 716
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 717,
                "end": 721
              },
              "optional": false,
              "computed": false,
              "start": 714,
              "end": 721
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
                    "start": 732,
                    "end": 733
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
                        "start": 748,
                        "end": 749
                      },
                      "start": 741,
                      "end": 750
                    }
                  ],
                  "start": 735,
                  "end": 752
                },
                "expression": false,
                "start": 722,
                "end": 752
              }
            ],
            "optional": false,
            "start": 714,
            "end": 753
          },
          "definite": false,
          "start": 690,
          "end": 753
        }
      ],
      "declare": false,
      "start": 686,
      "end": 754
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 754
}
```
