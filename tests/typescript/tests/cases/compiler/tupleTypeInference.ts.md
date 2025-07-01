__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "$q",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IQService",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 16,
                  "end": 25
                },
                "typeArguments": null,
                "start": 16,
                "end": 25
              },
              "start": 14,
              "end": 25
            },
            "start": 12,
            "end": 25
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 25
        }
      ],
      "declare": true,
      "start": 0,
      "end": 26
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IQService",
        "optional": false,
        "typeAnnotation": null,
        "start": 38,
        "end": 47
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "all",
              "optional": false,
              "typeAnnotation": null,
              "start": 54,
              "end": 57
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
                    "name": "T1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 58,
                    "end": 60
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 58,
                  "end": 60
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 62,
                    "end": 64
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 62,
                  "end": 64
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 66,
                    "end": 68
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 66,
                  "end": 68
                }
              ],
              "start": 57,
              "end": 69
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
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IPromise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 74,
                          "end": 82
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 83,
                                "end": 85
                              },
                              "typeArguments": null,
                              "start": 83,
                              "end": 85
                            }
                          ],
                          "start": 82,
                          "end": 86
                        },
                        "start": 74,
                        "end": 86
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IPromise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 88,
                          "end": 96
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 97,
                                "end": 99
                              },
                              "typeArguments": null,
                              "start": 97,
                              "end": 99
                            }
                          ],
                          "start": 96,
                          "end": 100
                        },
                        "start": 88,
                        "end": 100
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IPromise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 102,
                          "end": 110
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T3",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 111,
                                "end": 113
                              },
                              "typeArguments": null,
                              "start": 111,
                              "end": 113
                            }
                          ],
                          "start": 110,
                          "end": 114
                        },
                        "start": 102,
                        "end": 114
                      }
                    ],
                    "start": 73,
                    "end": 115
                  },
                  "start": 71,
                  "end": 115
                },
                "start": 70,
                "end": 115
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
                  "start": 118,
                  "end": 126
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 128,
                            "end": 130
                          },
                          "typeArguments": null,
                          "start": 128,
                          "end": 130
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 132,
                            "end": 134
                          },
                          "typeArguments": null,
                          "start": 132,
                          "end": 134
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T3",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 136,
                            "end": 138
                          },
                          "typeArguments": null,
                          "start": 136,
                          "end": 138
                        }
                      ],
                      "start": 127,
                      "end": 139
                    }
                  ],
                  "start": 126,
                  "end": 140
                },
                "start": 118,
                "end": 140
              },
              "start": 116,
              "end": 140
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 54,
            "end": 141
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "all",
              "optional": false,
              "typeAnnotation": null,
              "start": 146,
              "end": 149
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
                    "name": "T1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 150,
                    "end": 152
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 150,
                  "end": 152
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 154,
                    "end": 156
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 154,
                  "end": 156
                }
              ],
              "start": 149,
              "end": 157
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
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IPromise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 162,
                          "end": 170
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 171,
                                "end": 173
                              },
                              "typeArguments": null,
                              "start": 171,
                              "end": 173
                            }
                          ],
                          "start": 170,
                          "end": 174
                        },
                        "start": 162,
                        "end": 174
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IPromise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 176,
                          "end": 184
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 185,
                                "end": 187
                              },
                              "typeArguments": null,
                              "start": 185,
                              "end": 187
                            }
                          ],
                          "start": 184,
                          "end": 188
                        },
                        "start": 176,
                        "end": 188
                      }
                    ],
                    "start": 161,
                    "end": 189
                  },
                  "start": 159,
                  "end": 189
                },
                "start": 158,
                "end": 189
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
                  "start": 192,
                  "end": 200
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 202,
                            "end": 204
                          },
                          "typeArguments": null,
                          "start": 202,
                          "end": 204
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 206,
                            "end": 208
                          },
                          "typeArguments": null,
                          "start": 206,
                          "end": 208
                        }
                      ],
                      "start": 201,
                      "end": 209
                    }
                  ],
                  "start": 200,
                  "end": 210
                },
                "start": 192,
                "end": 210
              },
              "start": 190,
              "end": 210
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 146,
            "end": 211
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "all",
              "optional": false,
              "typeAnnotation": null,
              "start": 216,
              "end": 219
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
                    "name": "T1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 220,
                    "end": 222
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 220,
                  "end": 222
                }
              ],
              "start": 219,
              "end": 223
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
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IPromise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 228,
                          "end": 236
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 237,
                                "end": 239
                              },
                              "typeArguments": null,
                              "start": 237,
                              "end": 239
                            }
                          ],
                          "start": 236,
                          "end": 240
                        },
                        "start": 228,
                        "end": 240
                      }
                    ],
                    "start": 227,
                    "end": 241
                  },
                  "start": 225,
                  "end": 241
                },
                "start": 224,
                "end": 241
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
                  "start": 244,
                  "end": 252
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 254,
                            "end": 256
                          },
                          "typeArguments": null,
                          "start": 254,
                          "end": 256
                        }
                      ],
                      "start": 253,
                      "end": 257
                    }
                  ],
                  "start": 252,
                  "end": 258
                },
                "start": 244,
                "end": 258
              },
              "start": 242,
              "end": 258
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 216,
            "end": 259
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "when",
              "optional": false,
              "typeAnnotation": null,
              "start": 264,
              "end": 268
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 269,
                    "end": 270
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 269,
                  "end": 270
                }
              ],
              "start": 268,
              "end": 271
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": true,
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
                      "start": 276,
                      "end": 277
                    },
                    "typeArguments": null,
                    "start": 276,
                    "end": 277
                  },
                  "start": 274,
                  "end": 277
                },
                "start": 272,
                "end": 277
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
                  "start": 280,
                  "end": 288
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
                        "start": 289,
                        "end": 290
                      },
                      "typeArguments": null,
                      "start": 289,
                      "end": 290
                    }
                  ],
                  "start": 288,
                  "end": 291
                },
                "start": 280,
                "end": 291
              },
              "start": 278,
              "end": 291
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 264,
            "end": 292
          }
        ],
        "start": 48,
        "end": 294
      },
      "declare": false,
      "start": 28,
      "end": 294
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IPromise",
        "optional": false,
        "typeAnnotation": null,
        "start": 306,
        "end": 314
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
              "start": 315,
              "end": 316
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 315,
            "end": 316
          }
        ],
        "start": 314,
        "end": 317
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
              "start": 324,
              "end": 328
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
                    "name": "TResult",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 329,
                    "end": 336
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 329,
                  "end": 336
                }
              ],
              "start": 328,
              "end": 337
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
                        "name": "t",
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
                              "start": 352,
                              "end": 353
                            },
                            "typeArguments": null,
                            "start": 352,
                            "end": 353
                          },
                          "start": 350,
                          "end": 353
                        },
                        "start": 349,
                        "end": 353
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TResult",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 358,
                          "end": 365
                        },
                        "typeArguments": null,
                        "start": 358,
                        "end": 365
                      },
                      "start": 355,
                      "end": 365
                    },
                    "start": 348,
                    "end": 365
                  },
                  "start": 346,
                  "end": 365
                },
                "start": 338,
                "end": 365
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
                  "start": 368,
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
                        "name": "TResult",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 377,
                        "end": 384
                      },
                      "typeArguments": null,
                      "start": 377,
                      "end": 384
                    }
                  ],
                  "start": 376,
                  "end": 385
                },
                "start": 368,
                "end": 385
              },
              "start": 366,
              "end": 385
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 324,
            "end": 386
          }
        ],
        "start": 318,
        "end": 388
      },
      "declare": false,
      "start": 296,
      "end": 388
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 422,
            "end": 423
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "$q",
                "optional": false,
                "typeAnnotation": null,
                "start": 426,
                "end": 428
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "all",
                "optional": false,
                "typeAnnotation": null,
                "start": 429,
                "end": 432
              },
              "optional": false,
              "computed": false,
              "start": 426,
              "end": 432
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "$q",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 434,
                        "end": 436
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "when",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 437,
                        "end": 441
                      },
                      "optional": false,
                      "computed": false,
                      "start": 434,
                      "end": 441
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 442,
                          "end": 448
                        }
                      ],
                      "start": 441,
                      "end": 449
                    },
                    "arguments": [],
                    "optional": false,
                    "start": 434,
                    "end": 451
                  },
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "$q",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 453,
                        "end": 455
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "when",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 456,
                        "end": 460
                      },
                      "optional": false,
                      "computed": false,
                      "start": 453,
                      "end": 460
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 461,
                          "end": 467
                        }
                      ],
                      "start": 460,
                      "end": 468
                    },
                    "arguments": [],
                    "optional": false,
                    "start": 453,
                    "end": 470
                  }
                ],
                "start": 433,
                "end": 471
              }
            ],
            "optional": false,
            "start": 426,
            "end": 472
          },
          "definite": false,
          "start": 422,
          "end": 472
        }
      ],
      "declare": false,
      "start": 418,
      "end": 473
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 507,
            "end": 508
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "$q",
                "optional": false,
                "typeAnnotation": null,
                "start": 511,
                "end": 513
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "all",
                "optional": false,
                "typeAnnotation": null,
                "start": 514,
                "end": 517
              },
              "optional": false,
              "computed": false,
              "start": 511,
              "end": 517
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 518,
                  "end": 524
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 526,
                  "end": 532
                }
              ],
              "start": 517,
              "end": 533
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "$q",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 535,
                        "end": 537
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "when",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 538,
                        "end": 542
                      },
                      "optional": false,
                      "computed": false,
                      "start": 535,
                      "end": 542
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 543,
                          "end": 549
                        }
                      ],
                      "start": 542,
                      "end": 550
                    },
                    "arguments": [],
                    "optional": false,
                    "start": 535,
                    "end": 552
                  },
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "$q",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 554,
                        "end": 556
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "when",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 557,
                        "end": 561
                      },
                      "optional": false,
                      "computed": false,
                      "start": 554,
                      "end": 561
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 562,
                          "end": 568
                        }
                      ],
                      "start": 561,
                      "end": 569
                    },
                    "arguments": [],
                    "optional": false,
                    "start": 554,
                    "end": 571
                  }
                ],
                "start": 534,
                "end": 572
              }
            ],
            "optional": false,
            "start": 511,
            "end": 573
          },
          "definite": false,
          "start": 507,
          "end": 573
        }
      ],
      "declare": false,
      "start": 503,
      "end": 574
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 608,
            "end": 609
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "$q",
                "optional": false,
                "typeAnnotation": null,
                "start": 612,
                "end": 614
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "all",
                "optional": false,
                "typeAnnotation": null,
                "start": 615,
                "end": 618
              },
              "optional": false,
              "computed": false,
              "start": 612,
              "end": 618
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "$q",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 620,
                        "end": 622
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "when",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 623,
                        "end": 627
                      },
                      "optional": false,
                      "computed": false,
                      "start": 620,
                      "end": 627
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 628,
                          "end": 634
                        }
                      ],
                      "start": 627,
                      "end": 635
                    },
                    "arguments": [],
                    "optional": false,
                    "start": 620,
                    "end": 637
                  },
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "$q",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 639,
                        "end": 641
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "when",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 642,
                        "end": 646
                      },
                      "optional": false,
                      "computed": false,
                      "start": 639,
                      "end": 646
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 647,
                          "end": 653
                        }
                      ],
                      "start": 646,
                      "end": 654
                    },
                    "arguments": [],
                    "optional": false,
                    "start": 639,
                    "end": 656
                  }
                ],
                "start": 619,
                "end": 657
              }
            ],
            "optional": false,
            "start": 612,
            "end": 658
          },
          "definite": false,
          "start": 608,
          "end": 658
        }
      ],
      "declare": false,
      "start": 604,
      "end": 659
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 659
}
```
