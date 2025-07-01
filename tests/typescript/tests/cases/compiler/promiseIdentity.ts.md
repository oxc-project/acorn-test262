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
            }
          ],
          "start": 25,
          "end": 28
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
                "start": 35,
                "end": 39
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
                      "start": 40,
                      "end": 41
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 40,
                    "end": 41
                  }
                ],
                "start": 39,
                "end": 42
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
                                "start": 57,
                                "end": 58
                              },
                              "typeArguments": null,
                              "start": 57,
                              "end": 58
                            },
                            "start": 55,
                            "end": 58
                          },
                          "start": 54,
                          "end": 58
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
                            "start": 63,
                            "end": 71
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
                                  "start": 72,
                                  "end": 73
                                },
                                "typeArguments": null,
                                "start": 72,
                                "end": 73
                              }
                            ],
                            "start": 71,
                            "end": 74
                          },
                          "start": 63,
                          "end": 74
                        },
                        "start": 60,
                        "end": 74
                      },
                      "start": 53,
                      "end": 74
                    },
                    "start": 51,
                    "end": 74
                  },
                  "start": 43,
                  "end": 74
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
                    "start": 77,
                    "end": 85
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
                          "start": 86,
                          "end": 87
                        },
                        "typeArguments": null,
                        "start": 86,
                        "end": 87
                      }
                    ],
                    "start": 85,
                    "end": 88
                  },
                  "start": 77,
                  "end": 88
                },
                "start": 75,
                "end": 88
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 35,
              "end": 89
            }
          ],
          "start": 29,
          "end": 91
        },
        "declare": false,
        "start": 7,
        "end": 91
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 91
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Promise",
        "optional": false,
        "typeAnnotation": null,
        "start": 102,
        "end": 109
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
              "start": 119,
              "end": 123
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
                    "start": 124,
                    "end": 125
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 124,
                  "end": 125
                }
              ],
              "start": 123,
              "end": 126
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
                              "start": 141,
                              "end": 142
                            },
                            "typeArguments": null,
                            "start": 141,
                            "end": 142
                          },
                          "start": 139,
                          "end": 142
                        },
                        "start": 138,
                        "end": 142
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
                          "start": 147,
                          "end": 154
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
                                "start": 155,
                                "end": 156
                              },
                              "typeArguments": null,
                              "start": 155,
                              "end": 156
                            }
                          ],
                          "start": 154,
                          "end": 157
                        },
                        "start": 147,
                        "end": 157
                      },
                      "start": 144,
                      "end": 157
                    },
                    "start": 137,
                    "end": 157
                  },
                  "start": 135,
                  "end": 157
                },
                "start": 127,
                "end": 157
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
                  "start": 160,
                  "end": 167
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
                        "start": 168,
                        "end": 169
                      },
                      "typeArguments": null,
                      "start": 168,
                      "end": 169
                    }
                  ],
                  "start": 167,
                  "end": 170
                },
                "start": 160,
                "end": 170
              },
              "start": 158,
              "end": 170
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 119,
            "end": 171
          }
        ],
        "start": 113,
        "end": 173
      },
      "declare": false,
      "start": 92,
      "end": 173
    },
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
                  "start": 181,
                  "end": 189
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 190,
                      "end": 196
                    }
                  ],
                  "start": 189,
                  "end": 197
                },
                "start": 181,
                "end": 197
              },
              "start": 179,
              "end": 197
            },
            "start": 178,
            "end": 197
          },
          "init": null,
          "definite": false,
          "start": 178,
          "end": 197
        }
      ],
      "declare": false,
      "start": 174,
      "end": 198
    },
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
                  "start": 206,
                  "end": 213
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 214,
                      "end": 220
                    }
                  ],
                  "start": 213,
                  "end": 221
                },
                "start": 206,
                "end": 221
              },
              "start": 204,
              "end": 221
            },
            "start": 203,
            "end": 221
          },
          "init": null,
          "definite": false,
          "start": 203,
          "end": 221
        }
      ],
      "declare": false,
      "start": 199,
      "end": 222
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IPromise2",
        "optional": false,
        "typeAnnotation": null,
        "start": 235,
        "end": 244
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
              "start": 245,
              "end": 246
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 245,
            "end": 246
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 248,
              "end": 249
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 248,
            "end": 249
          }
        ],
        "start": 244,
        "end": 250
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
              "start": 257,
              "end": 261
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
                    "start": 262,
                    "end": 263
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 262,
                  "end": 263
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "W",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 265,
                    "end": 266
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 265,
                  "end": 266
                }
              ],
              "start": 261,
              "end": 267
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
                              "start": 282,
                              "end": 283
                            },
                            "typeArguments": null,
                            "start": 282,
                            "end": 283
                          },
                          "start": 280,
                          "end": 283
                        },
                        "start": 279,
                        "end": 283
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
                          "start": 288,
                          "end": 297
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
                                "start": 298,
                                "end": 299
                              },
                              "typeArguments": null,
                              "start": 298,
                              "end": 299
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "W",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 301,
                                "end": 302
                              },
                              "typeArguments": null,
                              "start": 301,
                              "end": 302
                            }
                          ],
                          "start": 297,
                          "end": 303
                        },
                        "start": 288,
                        "end": 303
                      },
                      "start": 285,
                      "end": 303
                    },
                    "start": 278,
                    "end": 303
                  },
                  "start": 276,
                  "end": 303
                },
                "start": 268,
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
                  "name": "IPromise2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 306,
                  "end": 315
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "W",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 316,
                        "end": 317
                      },
                      "typeArguments": null,
                      "start": 316,
                      "end": 317
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 319,
                        "end": 320
                      },
                      "typeArguments": null,
                      "start": 319,
                      "end": 320
                    }
                  ],
                  "start": 315,
                  "end": 321
                },
                "start": 306,
                "end": 321
              },
              "start": 304,
              "end": 321
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 257,
            "end": 322
          }
        ],
        "start": 251,
        "end": 324
      },
      "declare": false,
      "start": 225,
      "end": 324
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Promise2",
        "optional": false,
        "typeAnnotation": null,
        "start": 335,
        "end": 343
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
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 347,
              "end": 348
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 347,
            "end": 348
          }
        ],
        "start": 343,
        "end": 349
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
              "start": 356,
              "end": 360
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
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "W",
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
              "start": 360,
              "end": 366
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
                              "name": "V",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 381,
                              "end": 382
                            },
                            "typeArguments": null,
                            "start": 381,
                            "end": 382
                          },
                          "start": 379,
                          "end": 382
                        },
                        "start": 378,
                        "end": 382
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
                          "start": 387,
                          "end": 395
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
                                "start": 396,
                                "end": 397
                              },
                              "typeArguments": null,
                              "start": 396,
                              "end": 397
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 399,
                                "end": 400
                              },
                              "typeArguments": null,
                              "start": 399,
                              "end": 400
                            }
                          ],
                          "start": 395,
                          "end": 401
                        },
                        "start": 387,
                        "end": 401
                      },
                      "start": 384,
                      "end": 401
                    },
                    "start": 377,
                    "end": 401
                  },
                  "start": 375,
                  "end": 401
                },
                "start": 367,
                "end": 401
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
                  "start": 404,
                  "end": 412
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
                        "start": 413,
                        "end": 414
                      },
                      "typeArguments": null,
                      "start": 413,
                      "end": 414
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "W",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 416,
                        "end": 417
                      },
                      "typeArguments": null,
                      "start": 416,
                      "end": 417
                    }
                  ],
                  "start": 412,
                  "end": 418
                },
                "start": 404,
                "end": 418
              },
              "start": 402,
              "end": 418
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 356,
            "end": 419
          }
        ],
        "start": 350,
        "end": 468
      },
      "declare": false,
      "start": 325,
      "end": 468
    },
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
                  "start": 659,
                  "end": 668
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 669,
                      "end": 675
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 677,
                      "end": 683
                    }
                  ],
                  "start": 668,
                  "end": 684
                },
                "start": 659,
                "end": 684
              },
              "start": 657,
              "end": 684
            },
            "start": 656,
            "end": 684
          },
          "init": null,
          "definite": false,
          "start": 656,
          "end": 684
        }
      ],
      "declare": false,
      "start": 652,
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
                  "start": 693,
                  "end": 701
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 702,
                      "end": 705
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 707,
                      "end": 713
                    }
                  ],
                  "start": 701,
                  "end": 714
                },
                "start": 693,
                "end": 714
              },
              "start": 691,
              "end": 714
            },
            "start": 690,
            "end": 714
          },
          "init": null,
          "definite": false,
          "start": 690,
          "end": 714
        }
      ],
      "declare": false,
      "start": 686,
      "end": 715
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 715
}
```
