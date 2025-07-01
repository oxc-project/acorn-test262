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
          "start": 15,
          "end": 22
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foundation",
          "optional": false,
          "typeAnnotation": null,
          "start": 23,
          "end": 33
        },
        "start": 15,
        "end": 33
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
                "start": 57,
                "end": 65
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
                      "start": 66,
                      "end": 67
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 66,
                    "end": 67
                  }
                ],
                "start": 65,
                "end": 68
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
                      "start": 79,
                      "end": 83
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
                            "start": 84,
                            "end": 85
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 84,
                          "end": 85
                        }
                      ],
                      "start": 83,
                      "end": 86
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
                                      "start": 105,
                                      "end": 106
                                    },
                                    "typeArguments": null,
                                    "start": 105,
                                    "end": 106
                                  },
                                  "start": 103,
                                  "end": 106
                                },
                                "start": 98,
                                "end": 106
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
                                  "start": 111,
                                  "end": 119
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
                                        "start": 120,
                                        "end": 121
                                      },
                                      "typeArguments": null,
                                      "start": 120,
                                      "end": 121
                                    }
                                  ],
                                  "start": 119,
                                  "end": 122
                                },
                                "start": 111,
                                "end": 122
                              },
                              "start": 108,
                              "end": 122
                            },
                            "start": 97,
                            "end": 122
                          },
                          "start": 95,
                          "end": 122
                        },
                        "start": 87,
                        "end": 122
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
                                    "start": 140,
                                    "end": 143
                                  },
                                  "start": 138,
                                  "end": 143
                                },
                                "start": 133,
                                "end": 143
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
                                  "start": 148,
                                  "end": 156
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
                                        "start": 157,
                                        "end": 158
                                      },
                                      "typeArguments": null,
                                      "start": 157,
                                      "end": 158
                                    }
                                  ],
                                  "start": 156,
                                  "end": 159
                                },
                                "start": 148,
                                "end": 159
                              },
                              "start": 145,
                              "end": 159
                            },
                            "start": 132,
                            "end": 159
                          },
                          "start": 130,
                          "end": 159
                        },
                        "start": 124,
                        "end": 159
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
                                    "start": 183,
                                    "end": 186
                                  },
                                  "start": 181,
                                  "end": 186
                                },
                                "start": 173,
                                "end": 186
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 191,
                                "end": 195
                              },
                              "start": 188,
                              "end": 195
                            },
                            "start": 172,
                            "end": 195
                          },
                          "start": 170,
                          "end": 195
                        },
                        "start": 161,
                        "end": 195
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
                              "start": 199,
                              "end": 206
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Foundation",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 207,
                              "end": 217
                            },
                            "start": 199,
                            "end": 217
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "IPromise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 218,
                            "end": 226
                          },
                          "start": 199,
                          "end": 226
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
                                "start": 227,
                                "end": 228
                              },
                              "typeArguments": null,
                              "start": 227,
                              "end": 228
                            }
                          ],
                          "start": 226,
                          "end": 229
                        },
                        "start": 199,
                        "end": 229
                      },
                      "start": 197,
                      "end": 229
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 79,
                    "end": 230
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "then",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 239,
                      "end": 243
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
                            "start": 244,
                            "end": 245
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 244,
                          "end": 245
                        }
                      ],
                      "start": 243,
                      "end": 246
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
                                      "start": 265,
                                      "end": 266
                                    },
                                    "typeArguments": null,
                                    "start": 265,
                                    "end": 266
                                  },
                                  "start": 263,
                                  "end": 266
                                },
                                "start": 258,
                                "end": 266
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
                                  "start": 271,
                                  "end": 279
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
                                        "start": 280,
                                        "end": 281
                                      },
                                      "typeArguments": null,
                                      "start": 280,
                                      "end": 281
                                    }
                                  ],
                                  "start": 279,
                                  "end": 282
                                },
                                "start": 271,
                                "end": 282
                              },
                              "start": 268,
                              "end": 282
                            },
                            "start": 257,
                            "end": 282
                          },
                          "start": 255,
                          "end": 282
                        },
                        "start": 247,
                        "end": 282
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
                                    "start": 300,
                                    "end": 303
                                  },
                                  "start": 298,
                                  "end": 303
                                },
                                "start": 293,
                                "end": 303
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
                                  "start": 308,
                                  "end": 309
                                },
                                "typeArguments": null,
                                "start": 308,
                                "end": 309
                              },
                              "start": 305,
                              "end": 309
                            },
                            "start": 292,
                            "end": 309
                          },
                          "start": 290,
                          "end": 309
                        },
                        "start": 284,
                        "end": 309
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
                                    "start": 333,
                                    "end": 336
                                  },
                                  "start": 331,
                                  "end": 336
                                },
                                "start": 323,
                                "end": 336
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 341,
                                "end": 345
                              },
                              "start": 338,
                              "end": 345
                            },
                            "start": 322,
                            "end": 345
                          },
                          "start": 320,
                          "end": 345
                        },
                        "start": 311,
                        "end": 345
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
                              "start": 349,
                              "end": 356
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Foundation",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 357,
                              "end": 367
                            },
                            "start": 349,
                            "end": 367
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "IPromise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 368,
                            "end": 376
                          },
                          "start": 349,
                          "end": 376
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
                                "start": 377,
                                "end": 378
                              },
                              "typeArguments": null,
                              "start": 377,
                              "end": 378
                            }
                          ],
                          "start": 376,
                          "end": 379
                        },
                        "start": 349,
                        "end": 379
                      },
                      "start": 347,
                      "end": 379
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 239,
                    "end": 380
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "then",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 389,
                      "end": 393
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
                            "start": 394,
                            "end": 395
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 394,
                          "end": 395
                        }
                      ],
                      "start": 393,
                      "end": 396
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
                                "start": 408,
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
                              "start": 418,
                              "end": 422
                            },
                            "start": 407,
                            "end": 422
                          },
                          "start": 405,
                          "end": 422
                        },
                        "start": 397,
                        "end": 422
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
                                    "start": 440,
                                    "end": 443
                                  },
                                  "start": 438,
                                  "end": 443
                                },
                                "start": 433,
                                "end": 443
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
                                  "start": 448,
                                  "end": 456
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
                                        "start": 457,
                                        "end": 458
                                      },
                                      "typeArguments": null,
                                      "start": 457,
                                      "end": 458
                                    }
                                  ],
                                  "start": 456,
                                  "end": 459
                                },
                                "start": 448,
                                "end": 459
                              },
                              "start": 445,
                              "end": 459
                            },
                            "start": 432,
                            "end": 459
                          },
                          "start": 430,
                          "end": 459
                        },
                        "start": 424,
                        "end": 459
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
                                    "start": 483,
                                    "end": 486
                                  },
                                  "start": 481,
                                  "end": 486
                                },
                                "start": 473,
                                "end": 486
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 491,
                                "end": 495
                              },
                              "start": 488,
                              "end": 495
                            },
                            "start": 472,
                            "end": 495
                          },
                          "start": 470,
                          "end": 495
                        },
                        "start": 461,
                        "end": 495
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
                              "start": 499,
                              "end": 506
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Foundation",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 507,
                              "end": 517
                            },
                            "start": 499,
                            "end": 517
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "IPromise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 518,
                            "end": 526
                          },
                          "start": 499,
                          "end": 526
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
                                "start": 527,
                                "end": 528
                              },
                              "typeArguments": null,
                              "start": 527,
                              "end": 528
                            }
                          ],
                          "start": 526,
                          "end": 529
                        },
                        "start": 499,
                        "end": 529
                      },
                      "start": 497,
                      "end": 529
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 389,
                    "end": 530
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "then",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 539,
                      "end": 543
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
                            "start": 544,
                            "end": 545
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 544,
                          "end": 545
                        }
                      ],
                      "start": 543,
                      "end": 546
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
                                      "start": 565,
                                      "end": 566
                                    },
                                    "typeArguments": null,
                                    "start": 565,
                                    "end": 566
                                  },
                                  "start": 563,
                                  "end": 566
                                },
                                "start": 558,
                                "end": 566
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
                                  "start": 571,
                                  "end": 572
                                },
                                "typeArguments": null,
                                "start": 571,
                                "end": 572
                              },
                              "start": 568,
                              "end": 572
                            },
                            "start": 557,
                            "end": 572
                          },
                          "start": 555,
                          "end": 572
                        },
                        "start": 547,
                        "end": 572
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
                                    "start": 590,
                                    "end": 593
                                  },
                                  "start": 588,
                                  "end": 593
                                },
                                "start": 583,
                                "end": 593
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
                                  "start": 598,
                                  "end": 599
                                },
                                "typeArguments": null,
                                "start": 598,
                                "end": 599
                              },
                              "start": 595,
                              "end": 599
                            },
                            "start": 582,
                            "end": 599
                          },
                          "start": 580,
                          "end": 599
                        },
                        "start": 574,
                        "end": 599
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
                                    "start": 623,
                                    "end": 626
                                  },
                                  "start": 621,
                                  "end": 626
                                },
                                "start": 613,
                                "end": 626
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 631,
                                "end": 635
                              },
                              "start": 628,
                              "end": 635
                            },
                            "start": 612,
                            "end": 635
                          },
                          "start": 610,
                          "end": 635
                        },
                        "start": 601,
                        "end": 635
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
                              "start": 639,
                              "end": 646
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Foundation",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 647,
                              "end": 657
                            },
                            "start": 639,
                            "end": 657
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "IPromise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 658,
                            "end": 666
                          },
                          "start": 639,
                          "end": 666
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
                                "start": 667,
                                "end": 668
                              },
                              "typeArguments": null,
                              "start": 667,
                              "end": 668
                            }
                          ],
                          "start": 666,
                          "end": 669
                        },
                        "start": 639,
                        "end": 669
                      },
                      "start": 637,
                      "end": 669
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 539,
                    "end": 670
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "done",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 679,
                      "end": 683
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
                            "start": 684,
                            "end": 685
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 684,
                          "end": 685
                        }
                      ],
                      "start": 683,
                      "end": 686
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
                                      "start": 705,
                                      "end": 706
                                    },
                                    "typeArguments": null,
                                    "start": 705,
                                    "end": 706
                                  },
                                  "start": 703,
                                  "end": 706
                                },
                                "start": 698,
                                "end": 706
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 711,
                                "end": 714
                              },
                              "start": 708,
                              "end": 714
                            },
                            "start": 697,
                            "end": 714
                          },
                          "start": 695,
                          "end": 714
                        },
                        "start": 687,
                        "end": 714
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
                                    "start": 732,
                                    "end": 735
                                  },
                                  "start": 730,
                                  "end": 735
                                },
                                "start": 725,
                                "end": 735
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 740,
                                "end": 743
                              },
                              "start": 737,
                              "end": 743
                            },
                            "start": 724,
                            "end": 743
                          },
                          "start": 722,
                          "end": 743
                        },
                        "start": 716,
                        "end": 743
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
                                    "start": 767,
                                    "end": 770
                                  },
                                  "start": 765,
                                  "end": 770
                                },
                                "start": 757,
                                "end": 770
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 775,
                                "end": 779
                              },
                              "start": 772,
                              "end": 779
                            },
                            "start": 756,
                            "end": 779
                          },
                          "start": 754,
                          "end": 779
                        },
                        "start": 745,
                        "end": 779
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 783,
                        "end": 787
                      },
                      "start": 781,
                      "end": 787
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 679,
                    "end": 788
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
                      "start": 797,
                      "end": 802
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
                          "start": 804,
                          "end": 805
                        },
                        "typeArguments": null,
                        "start": 804,
                        "end": 805
                      },
                      "start": 802,
                      "end": 805
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 797,
                    "end": 806
                  }
                ],
                "start": 69,
                "end": 812
              },
              "declare": false,
              "start": 47,
              "end": 812
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 40,
            "end": 812
          }
        ],
        "start": 34,
        "end": 814
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 814
    },
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
                      "start": 823,
                      "end": 830
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foundation",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 831,
                      "end": 841
                    },
                    "start": 823,
                    "end": 841
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 842,
                    "end": 850
                  },
                  "start": 823,
                  "end": 850
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 851,
                      "end": 857
                    }
                  ],
                  "start": 850,
                  "end": 858
                },
                "start": 823,
                "end": 858
              },
              "start": 821,
              "end": 858
            },
            "start": 820,
            "end": 858
          },
          "init": null,
          "definite": false,
          "start": 820,
          "end": 858
        }
      ],
      "declare": false,
      "start": 816,
      "end": 859
    },
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
            "start": 865,
            "end": 867
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
                "start": 870,
                "end": 871
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 872,
                "end": 876
              },
              "optional": false,
              "computed": false,
              "start": 870,
              "end": 876
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
                    "start": 887,
                    "end": 888
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
                        "start": 903,
                        "end": 905
                      },
                      "start": 896,
                      "end": 906
                    }
                  ],
                  "start": 890,
                  "end": 908
                },
                "expression": false,
                "start": 877,
                "end": 908
              }
            ],
            "optional": false,
            "start": 870,
            "end": 910
          },
          "definite": false,
          "start": 865,
          "end": 910
        }
      ],
      "declare": false,
      "start": 861,
      "end": 911
    },
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
                "start": 921,
                "end": 927
              },
              "start": 919,
              "end": 927
            },
            "start": 918,
            "end": 927
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": null,
              "start": 930,
              "end": 932
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 933,
              "end": 938
            },
            "optional": false,
            "computed": false,
            "start": 930,
            "end": 938
          },
          "definite": false,
          "start": 918,
          "end": 938
        }
      ],
      "declare": false,
      "start": 914,
      "end": 939
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 940
}
```
