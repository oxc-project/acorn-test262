__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 19
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
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
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
                        "start": 31,
                        "end": 32
                      },
                      "typeArguments": null,
                      "start": 31,
                      "end": 32
                    },
                    "start": 29,
                    "end": 32
                  },
                  "start": 28,
                  "end": 32
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 37,
                  "end": 41
                },
                "start": 34,
                "end": 41
              },
              "start": 27,
              "end": 41
            },
            "start": 25,
            "end": 41
          },
          "start": 23,
          "end": 41
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
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
                        "start": 51,
                        "end": 52
                      },
                      "typeArguments": null,
                      "start": 51,
                      "end": 52
                    },
                    "start": 49,
                    "end": 52
                  },
                  "start": 48,
                  "end": 52
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 57,
                  "end": 61
                },
                "start": 54,
                "end": 61
              },
              "start": 47,
              "end": 61
            },
            "start": 45,
            "end": 61
          },
          "start": 43,
          "end": 61
        }
      ],
      "returnType": {
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
                    "start": 68,
                    "end": 69
                  },
                  "typeArguments": null,
                  "start": 68,
                  "end": 69
                },
                "start": 66,
                "end": 69
              },
              "start": 65,
              "end": 69
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 74,
              "end": 78
            },
            "start": 71,
            "end": 78
          },
          "start": 64,
          "end": 78
        },
        "start": 62,
        "end": 78
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 79
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 97,
        "end": 99
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
              "start": 100,
              "end": 101
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 100,
            "end": 101
          }
        ],
        "start": 99,
        "end": 102
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
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
          "start": 103,
          "end": 109
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
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
                        "start": 119,
                        "end": 120
                      },
                      "typeArguments": null,
                      "start": 119,
                      "end": 120
                    },
                    "start": 117,
                    "end": 120
                  },
                  "start": 116,
                  "end": 120
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 125,
                  "end": 129
                },
                "start": 122,
                "end": 129
              },
              "start": 115,
              "end": 129
            },
            "start": 113,
            "end": 129
          },
          "start": 111,
          "end": 129
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
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
                        "start": 139,
                        "end": 140
                      },
                      "typeArguments": null,
                      "start": 139,
                      "end": 140
                    },
                    "start": 137,
                    "end": 140
                  },
                  "start": 136,
                  "end": 140
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 145,
                  "end": 149
                },
                "start": 142,
                "end": 149
              },
              "start": 135,
              "end": 149
            },
            "start": 133,
            "end": 149
          },
          "start": 131,
          "end": 149
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
            "start": 152,
            "end": 153
          },
          "typeArguments": null,
          "start": 152,
          "end": 153
        },
        "start": 150,
        "end": 153
      },
      "body": null,
      "expression": false,
      "start": 80,
      "end": 154
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 172,
        "end": 174
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
              "start": 175,
              "end": 176
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 175,
            "end": 176
          }
        ],
        "start": 174,
        "end": 177
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
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
                "start": 183,
                "end": 184
              },
              "typeArguments": null,
              "start": 183,
              "end": 184
            },
            "start": 181,
            "end": 184
          },
          "start": 178,
          "end": 184
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
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
                        "start": 194,
                        "end": 195
                      },
                      "typeArguments": null,
                      "start": 194,
                      "end": 195
                    },
                    "start": 192,
                    "end": 195
                  },
                  "start": 191,
                  "end": 195
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 200,
                  "end": 204
                },
                "start": 197,
                "end": 204
              },
              "start": 190,
              "end": 204
            },
            "start": 188,
            "end": 204
          },
          "start": 186,
          "end": 204
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
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
                  "name": "f",
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
                                "start": 218,
                                "end": 219
                              },
                              "typeArguments": null,
                              "start": 218,
                              "end": 219
                            },
                            "start": 216,
                            "end": 219
                          },
                          "start": 215,
                          "end": 219
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 224,
                          "end": 228
                        },
                        "start": 221,
                        "end": 228
                      },
                      "start": 214,
                      "end": 228
                    },
                    "start": 212,
                    "end": 228
                  },
                  "start": 211,
                  "end": 228
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 233,
                  "end": 237
                },
                "start": 230,
                "end": 237
              },
              "start": 210,
              "end": 237
            },
            "start": 208,
            "end": 237
          },
          "start": 206,
          "end": 237
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
            "start": 240,
            "end": 241
          },
          "typeArguments": null,
          "start": 240,
          "end": 241
        },
        "start": 238,
        "end": 241
      },
      "body": null,
      "expression": false,
      "start": 155,
      "end": 242
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Func",
        "optional": false,
        "typeAnnotation": null,
        "start": 254,
        "end": 258
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
              "start": 259,
              "end": 260
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 259,
            "end": 260
          }
        ],
        "start": 258,
        "end": 261
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
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
                "start": 265,
                "end": 269
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 272,
                "end": 276
              },
              "start": 270,
              "end": 276
            },
            "start": 264,
            "end": 276
          }
        ],
        "start": 262,
        "end": 278
      },
      "declare": false,
      "start": 244,
      "end": 278
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 297,
        "end": 299
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
              "start": 300,
              "end": 301
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 300,
            "end": 301
          }
        ],
        "start": 299,
        "end": 302
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Func",
                "optional": false,
                "typeAnnotation": null,
                "start": 307,
                "end": 311
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
                      "start": 312,
                      "end": 313
                    },
                    "typeArguments": null,
                    "start": 312,
                    "end": 313
                  }
                ],
                "start": 311,
                "end": 314
              },
              "start": 307,
              "end": 314
            },
            "start": 305,
            "end": 314
          },
          "start": 303,
          "end": 314
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Func",
                "optional": false,
                "typeAnnotation": null,
                "start": 320,
                "end": 324
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
                      "start": 325,
                      "end": 326
                    },
                    "typeArguments": null,
                    "start": 325,
                    "end": 326
                  }
                ],
                "start": 324,
                "end": 327
              },
              "start": 320,
              "end": 327
            },
            "start": 318,
            "end": 327
          },
          "start": 316,
          "end": 327
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Func",
            "optional": false,
            "typeAnnotation": null,
            "start": 330,
            "end": 334
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
                  "start": 335,
                  "end": 336
                },
                "typeArguments": null,
                "start": 335,
                "end": 336
              }
            ],
            "start": 334,
            "end": 337
          },
          "start": 330,
          "end": 337
        },
        "start": 328,
        "end": 337
      },
      "body": null,
      "expression": false,
      "start": 280,
      "end": 338
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fo",
        "optional": false,
        "typeAnnotation": null,
        "start": 357,
        "end": 359
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 363,
                "end": 369
              },
              "typeArguments": null,
              "start": 363,
              "end": 369
            },
            "start": 361,
            "end": 369
          },
          "start": 360,
          "end": 369
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 372,
          "end": 376
        },
        "start": 370,
        "end": 376
      },
      "body": null,
      "expression": false,
      "start": 340,
      "end": 377
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fs",
        "optional": false,
        "typeAnnotation": null,
        "start": 395,
        "end": 397
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
              "start": 401,
              "end": 407
            },
            "start": 399,
            "end": 407
          },
          "start": 398,
          "end": 407
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 410,
          "end": 414
        },
        "start": 408,
        "end": 414
      },
      "body": null,
      "expression": false,
      "start": 378,
      "end": 415
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fx",
        "optional": false,
        "typeAnnotation": null,
        "start": 433,
        "end": 435
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
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
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "def",
                        "raw": "\"def\"",
                        "start": 443,
                        "end": 448
                      },
                      "start": 443,
                      "end": 448
                    },
                    "start": 441,
                    "end": 448
                  },
                  "start": 440,
                  "end": 448
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 453,
                  "end": 457
                },
                "start": 450,
                "end": 457
              },
              "start": 439,
              "end": 457
            },
            "start": 437,
            "end": 457
          },
          "start": 436,
          "end": 457
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 460,
          "end": 464
        },
        "start": 458,
        "end": 464
      },
      "body": null,
      "expression": false,
      "start": 416,
      "end": 465
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null,
            "start": 473,
            "end": 475
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 478,
              "end": 480
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "fo",
                "optional": false,
                "typeAnnotation": null,
                "start": 481,
                "end": 483
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "fs",
                "optional": false,
                "typeAnnotation": null,
                "start": 485,
                "end": 487
              }
            ],
            "optional": false,
            "start": 478,
            "end": 488
          },
          "definite": false,
          "start": 473,
          "end": 488
        }
      ],
      "declare": false,
      "start": 467,
      "end": 489
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": null,
            "start": 520,
            "end": 522
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null,
              "start": 525,
              "end": 527
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "abc",
                "raw": "\"abc\"",
                "start": 528,
                "end": 533
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "fo",
                "optional": false,
                "typeAnnotation": null,
                "start": 535,
                "end": 537
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "fs",
                "optional": false,
                "typeAnnotation": null,
                "start": 539,
                "end": 541
              }
            ],
            "optional": false,
            "start": 525,
            "end": 542
          },
          "definite": false,
          "start": 520,
          "end": 542
        }
      ],
      "declare": false,
      "start": 514,
      "end": 543
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null,
            "start": 560,
            "end": 562
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null,
              "start": 565,
              "end": 567
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "abc",
                "raw": "\"abc\"",
                "start": 568,
                "end": 573
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "fo",
                "optional": false,
                "typeAnnotation": null,
                "start": 575,
                "end": 577
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "fx",
                "optional": false,
                "typeAnnotation": null,
                "start": 579,
                "end": 581
              }
            ],
            "optional": false,
            "start": 565,
            "end": 582
          },
          "definite": false,
          "start": 560,
          "end": 582
        }
      ],
      "declare": false,
      "start": 554,
      "end": 583
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x4",
            "optional": false,
            "typeAnnotation": null,
            "start": 608,
            "end": 610
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4",
              "optional": false,
              "typeAnnotation": null,
              "start": 613,
              "end": 615
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "fo",
                "optional": false,
                "typeAnnotation": null,
                "start": 616,
                "end": 618
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "fs",
                "optional": false,
                "typeAnnotation": null,
                "start": 620,
                "end": 622
              }
            ],
            "optional": false,
            "start": 613,
            "end": 623
          },
          "definite": false,
          "start": 608,
          "end": 623
        }
      ],
      "declare": false,
      "start": 602,
      "end": 624
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "never",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNeverKeyword",
                "start": 664,
                "end": 669
              },
              "start": 662,
              "end": 669
            },
            "start": 657,
            "end": 669
          },
          "init": null,
          "definite": false,
          "start": 657,
          "end": 669
        }
      ],
      "declare": true,
      "start": 643,
      "end": 670
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x10",
            "optional": false,
            "typeAnnotation": null,
            "start": 678,
            "end": 681
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null,
              "start": 684,
              "end": 686
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "never",
                "optional": false,
                "typeAnnotation": null,
                "start": 687,
                "end": 692
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "fo",
                "optional": false,
                "typeAnnotation": null,
                "start": 694,
                "end": 696
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "fs",
                "optional": false,
                "typeAnnotation": null,
                "start": 698,
                "end": 700
              }
            ],
            "optional": false,
            "start": 684,
            "end": 701
          },
          "definite": false,
          "start": 678,
          "end": 701
        }
      ],
      "declare": false,
      "start": 672,
      "end": 702
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x11",
            "optional": false,
            "typeAnnotation": null,
            "start": 720,
            "end": 723
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null,
              "start": 726,
              "end": 728
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "never",
                "optional": false,
                "typeAnnotation": null,
                "start": 729,
                "end": 734
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "fo",
                "optional": false,
                "typeAnnotation": null,
                "start": 736,
                "end": 738
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "fx",
                "optional": false,
                "typeAnnotation": null,
                "start": 740,
                "end": 742
              }
            ],
            "optional": false,
            "start": 726,
            "end": 743
          },
          "definite": false,
          "start": 720,
          "end": 743
        }
      ],
      "declare": false,
      "start": 714,
      "end": 744
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 795,
        "end": 798
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
              "start": 799,
              "end": 800
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 799,
            "end": 800
          }
        ],
        "start": 798,
        "end": 801
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
                "name": "ReadonlyArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 805,
                "end": 818
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
                      "start": 819,
                      "end": 820
                    },
                    "typeArguments": null,
                    "start": 819,
                    "end": 820
                  }
                ],
                "start": 818,
                "end": 821
              },
              "start": 805,
              "end": 821
            },
            "start": 803,
            "end": 821
          },
          "start": 802,
          "end": 821
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
            "start": 824,
            "end": 825
          },
          "typeArguments": null,
          "start": 824,
          "end": 825
        },
        "start": 822,
        "end": 825
      },
      "body": null,
      "expression": false,
      "start": 778,
      "end": 826
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 831,
            "end": 832
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 835,
              "end": 838
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [],
                "start": 839,
                "end": 841
              }
            ],
            "optional": false,
            "start": 835,
            "end": 842
          },
          "definite": false,
          "start": 831,
          "end": 842
        }
      ],
      "declare": false,
      "start": 827,
      "end": 843
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 897,
        "end": 898
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 901,
              "end": 902
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 904,
                "end": 910
              },
              "start": 902,
              "end": 910
            },
            "accessibility": null,
            "static": false,
            "start": 901,
            "end": 910
          }
        ],
        "start": 899,
        "end": 912
      },
      "declare": false,
      "start": 887,
      "end": 912
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 923,
        "end": 924
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 933,
            "end": 934
          },
          "typeArguments": null,
          "start": 933,
          "end": 934
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 937,
              "end": 938
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 940,
                "end": 946
              },
              "start": 938,
              "end": 946
            },
            "accessibility": null,
            "static": false,
            "start": 937,
            "end": 946
          }
        ],
        "start": 935,
        "end": 948
      },
      "declare": false,
      "start": 913,
      "end": 948
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "acceptUnion",
        "optional": false,
        "typeAnnotation": null,
        "start": 967,
        "end": 978
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 982,
                    "end": 983
                  },
                  "typeArguments": null,
                  "start": 982,
                  "end": 983
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 986,
                  "end": 992
                }
              ],
              "start": 982,
              "end": 992
            },
            "start": 980,
            "end": 992
          },
          "start": 979,
          "end": 992
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 995,
          "end": 999
        },
        "start": 993,
        "end": 999
      },
      "body": null,
      "expression": false,
      "start": 950,
      "end": 1000
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "acceptA",
        "optional": false,
        "typeAnnotation": null,
        "start": 1018,
        "end": 1025
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 1029,
                "end": 1030
              },
              "typeArguments": null,
              "start": 1029,
              "end": 1030
            },
            "start": 1027,
            "end": 1030
          },
          "start": 1026,
          "end": 1030
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1033,
          "end": 1037
        },
        "start": 1031,
        "end": 1037
      },
      "body": null,
      "expression": false,
      "start": 1001,
      "end": 1038
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1055,
                  "end": 1056
                },
                "typeArguments": null,
                "start": 1055,
                "end": 1056
              },
              "start": 1053,
              "end": 1056
            },
            "start": 1052,
            "end": 1056
          },
          "init": null,
          "definite": false,
          "start": 1052,
          "end": 1056
        }
      ],
      "declare": true,
      "start": 1040,
      "end": 1057
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1073,
                  "end": 1074
                },
                "typeArguments": null,
                "start": 1073,
                "end": 1074
              },
              "start": 1071,
              "end": 1074
            },
            "start": 1070,
            "end": 1074
          },
          "init": null,
          "definite": false,
          "start": 1070,
          "end": 1074
        }
      ],
      "declare": true,
      "start": 1058,
      "end": 1075
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "coAndContra",
        "optional": false,
        "typeAnnotation": null,
        "start": 1094,
        "end": 1105
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
              "start": 1106,
              "end": 1107
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1106,
            "end": 1107
          }
        ],
        "start": 1105,
        "end": 1108
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
                "start": 1116,
                "end": 1117
              },
              "typeArguments": null,
              "start": 1116,
              "end": 1117
            },
            "start": 1114,
            "end": 1117
          },
          "start": 1109,
          "end": 1117
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "func",
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
                        "start": 1129,
                        "end": 1130
                      },
                      "typeArguments": null,
                      "start": 1129,
                      "end": 1130
                    },
                    "start": 1127,
                    "end": 1130
                  },
                  "start": 1126,
                  "end": 1130
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1135,
                  "end": 1139
                },
                "start": 1132,
                "end": 1139
              },
              "start": 1125,
              "end": 1139
            },
            "start": 1123,
            "end": 1139
          },
          "start": 1119,
          "end": 1139
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
            "start": 1142,
            "end": 1143
          },
          "typeArguments": null,
          "start": 1142,
          "end": 1143
        },
        "start": 1140,
        "end": 1143
      },
      "body": null,
      "expression": false,
      "start": 1077,
      "end": 1144
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1156,
                  "end": 1157
                },
                "typeArguments": null,
                "start": 1156,
                "end": 1157
              },
              "start": 1154,
              "end": 1157
            },
            "start": 1152,
            "end": 1157
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "coAndContra",
              "optional": false,
              "typeAnnotation": null,
              "start": 1160,
              "end": 1171
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1172,
                "end": 1173
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "acceptUnion",
                "optional": false,
                "typeAnnotation": null,
                "start": 1175,
                "end": 1186
              }
            ],
            "optional": false,
            "start": 1160,
            "end": 1187
          },
          "definite": false,
          "start": 1152,
          "end": 1187
        }
      ],
      "declare": false,
      "start": 1146,
      "end": 1188
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1199,
                  "end": 1200
                },
                "typeArguments": null,
                "start": 1199,
                "end": 1200
              },
              "start": 1197,
              "end": 1200
            },
            "start": 1195,
            "end": 1200
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "coAndContra",
              "optional": false,
              "typeAnnotation": null,
              "start": 1203,
              "end": 1214
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1215,
                "end": 1216
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "acceptA",
                "optional": false,
                "typeAnnotation": null,
                "start": 1218,
                "end": 1225
              }
            ],
            "optional": false,
            "start": 1203,
            "end": 1226
          },
          "definite": false,
          "start": 1195,
          "end": 1226
        }
      ],
      "declare": false,
      "start": 1189,
      "end": 1227
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1238,
                  "end": 1239
                },
                "typeArguments": null,
                "start": 1238,
                "end": 1239
              },
              "start": 1236,
              "end": 1239
            },
            "start": 1234,
            "end": 1239
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "coAndContra",
              "optional": false,
              "typeAnnotation": null,
              "start": 1242,
              "end": 1253
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "never",
                "optional": false,
                "typeAnnotation": null,
                "start": 1254,
                "end": 1259
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "acceptA",
                "optional": false,
                "typeAnnotation": null,
                "start": 1261,
                "end": 1268
              }
            ],
            "optional": false,
            "start": 1242,
            "end": 1269
          },
          "definite": false,
          "start": 1234,
          "end": 1269
        }
      ],
      "declare": false,
      "start": 1228,
      "end": 1270
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "coAndContraArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 1289,
        "end": 1305
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
              "start": 1306,
              "end": 1307
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1306,
            "end": 1307
          }
        ],
        "start": 1305,
        "end": 1308
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
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1316,
                  "end": 1317
                },
                "typeArguments": null,
                "start": 1316,
                "end": 1317
              },
              "start": 1316,
              "end": 1319
            },
            "start": 1314,
            "end": 1319
          },
          "start": 1309,
          "end": 1319
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "func",
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
                        "start": 1331,
                        "end": 1332
                      },
                      "typeArguments": null,
                      "start": 1331,
                      "end": 1332
                    },
                    "start": 1329,
                    "end": 1332
                  },
                  "start": 1328,
                  "end": 1332
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 1337,
                  "end": 1341
                },
                "start": 1334,
                "end": 1341
              },
              "start": 1327,
              "end": 1341
            },
            "start": 1325,
            "end": 1341
          },
          "start": 1321,
          "end": 1341
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1344,
              "end": 1345
            },
            "typeArguments": null,
            "start": 1344,
            "end": 1345
          },
          "start": 1344,
          "end": 1347
        },
        "start": 1342,
        "end": 1347
      },
      "body": null,
      "expression": false,
      "start": 1272,
      "end": 1348
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1360,
                    "end": 1361
                  },
                  "typeArguments": null,
                  "start": 1360,
                  "end": 1361
                },
                "start": 1360,
                "end": 1363
              },
              "start": 1358,
              "end": 1363
            },
            "start": 1356,
            "end": 1363
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "coAndContraArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 1366,
              "end": 1382
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1384,
                    "end": 1385
                  }
                ],
                "start": 1383,
                "end": 1386
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "acceptUnion",
                "optional": false,
                "typeAnnotation": null,
                "start": 1388,
                "end": 1399
              }
            ],
            "optional": false,
            "start": 1366,
            "end": 1400
          },
          "definite": false,
          "start": 1356,
          "end": 1400
        }
      ],
      "declare": false,
      "start": 1350,
      "end": 1401
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1412,
                    "end": 1413
                  },
                  "typeArguments": null,
                  "start": 1412,
                  "end": 1413
                },
                "start": 1412,
                "end": 1415
              },
              "start": 1410,
              "end": 1415
            },
            "start": 1408,
            "end": 1415
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "coAndContraArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 1418,
              "end": 1434
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1436,
                    "end": 1437
                  }
                ],
                "start": 1435,
                "end": 1438
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "acceptA",
                "optional": false,
                "typeAnnotation": null,
                "start": 1440,
                "end": 1447
              }
            ],
            "optional": false,
            "start": 1418,
            "end": 1448
          },
          "definite": false,
          "start": 1408,
          "end": 1448
        }
      ],
      "declare": false,
      "start": 1402,
      "end": 1449
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1460,
                    "end": 1461
                  },
                  "typeArguments": null,
                  "start": 1460,
                  "end": 1461
                },
                "start": 1460,
                "end": 1463
              },
              "start": 1458,
              "end": 1463
            },
            "start": 1456,
            "end": 1463
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "coAndContraArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 1466,
              "end": 1482
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [],
                "start": 1483,
                "end": 1485
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "acceptA",
                "optional": false,
                "typeAnnotation": null,
                "start": 1487,
                "end": 1494
              }
            ],
            "optional": false,
            "start": 1466,
            "end": 1495
          },
          "definite": false,
          "start": 1456,
          "end": 1495
        }
      ],
      "declare": false,
      "start": 1450,
      "end": 1496
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1496
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7,
    "range": [
      0,
      7
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8,
    "end": 16,
    "range": [
      8,
      16
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 17,
    "end": 19,
    "range": [
      17,
      19
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 19,
    "end": 20,
    "range": [
      19,
      20
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 23,
    "end": 25,
    "range": [
      23,
      25
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 27,
    "end": 28,
    "range": [
      27,
      28
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 28,
    "end": 29,
    "range": [
      28,
      29
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 32,
    "end": 33,
    "range": [
      32,
      33
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 34,
    "end": 36,
    "range": [
      34,
      36
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 37,
    "end": 41,
    "range": [
      37,
      41
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 43,
    "end": 45,
    "range": [
      43,
      45
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 48,
    "end": 49,
    "range": [
      48,
      49
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 52,
    "end": 53,
    "range": [
      52,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 54,
    "end": 56,
    "range": [
      54,
      56
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 57,
    "end": 61,
    "range": [
      57,
      61
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 61,
    "end": 62,
    "range": [
      61,
      62
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 64,
    "end": 65,
    "range": [
      64,
      65
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 71,
    "end": 73,
    "range": [
      71,
      73
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 74,
    "end": 78,
    "range": [
      74,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 80,
    "end": 87,
    "range": [
      80,
      87
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 88,
    "end": 96,
    "range": [
      88,
      96
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 97,
    "end": 99,
    "range": [
      97,
      99
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 103,
    "end": 106,
    "range": [
      103,
      106
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 111,
    "end": 113,
    "range": [
      111,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 122,
    "end": 124,
    "range": [
      122,
      124
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 125,
    "end": 129,
    "range": [
      125,
      129
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 131,
    "end": 133,
    "range": [
      131,
      133
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 135,
    "end": 136,
    "range": [
      135,
      136
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 136,
    "end": 137,
    "range": [
      136,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 140,
    "end": 141,
    "range": [
      140,
      141
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 142,
    "end": 144,
    "range": [
      142,
      144
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 145,
    "end": 149,
    "range": [
      145,
      149
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 149,
    "end": 150,
    "range": [
      149,
      150
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 150,
    "end": 151,
    "range": [
      150,
      151
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 155,
    "end": 162,
    "range": [
      155,
      162
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 163,
    "end": 171,
    "range": [
      163,
      171
    ]
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 172,
    "end": 174,
    "range": [
      172,
      174
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 178,
    "end": 181,
    "range": [
      178,
      181
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 183,
    "end": 184,
    "range": [
      183,
      184
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 186,
    "end": 188,
    "range": [
      186,
      188
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 188,
    "end": 189,
    "range": [
      188,
      189
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 190,
    "end": 191,
    "range": [
      190,
      191
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 191,
    "end": 192,
    "range": [
      191,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 192,
    "end": 193,
    "range": [
      192,
      193
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 197,
    "end": 199,
    "range": [
      197,
      199
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 200,
    "end": 204,
    "range": [
      200,
      204
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 206,
    "end": 208,
    "range": [
      206,
      208
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 211,
    "end": 212,
    "range": [
      211,
      212
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 212,
    "end": 213,
    "range": [
      212,
      213
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 218,
    "end": 219,
    "range": [
      218,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 221,
    "end": 223,
    "range": [
      221,
      223
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 224,
    "end": 228,
    "range": [
      224,
      228
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 228,
    "end": 229,
    "range": [
      228,
      229
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 230,
    "end": 232,
    "range": [
      230,
      232
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 233,
    "end": 237,
    "range": [
      233,
      237
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 238,
    "end": 239,
    "range": [
      238,
      239
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 241,
    "end": 242,
    "range": [
      241,
      242
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 244,
    "end": 253,
    "range": [
      244,
      253
    ]
  },
  {
    "type": "Identifier",
    "value": "Func",
    "start": 254,
    "end": 258,
    "range": [
      254,
      258
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 258,
    "end": 259,
    "range": [
      258,
      259
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 259,
    "end": 260,
    "range": [
      259,
      260
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 260,
    "end": 261,
    "range": [
      260,
      261
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 262,
    "end": 263,
    "range": [
      262,
      263
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 264,
    "end": 265,
    "range": [
      264,
      265
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 265,
    "end": 266,
    "range": [
      265,
      266
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 266,
    "end": 267,
    "range": [
      266,
      267
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 269,
    "end": 270,
    "range": [
      269,
      270
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 272,
    "end": 276,
    "range": [
      272,
      276
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 277,
    "end": 278,
    "range": [
      277,
      278
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 280,
    "end": 287,
    "range": [
      280,
      287
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 288,
    "end": 296,
    "range": [
      288,
      296
    ]
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 297,
    "end": 299,
    "range": [
      297,
      299
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 299,
    "end": 300,
    "range": [
      299,
      300
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 300,
    "end": 301,
    "range": [
      300,
      301
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 301,
    "end": 302,
    "range": [
      301,
      302
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 302,
    "end": 303,
    "range": [
      302,
      303
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 303,
    "end": 305,
    "range": [
      303,
      305
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 305,
    "end": 306,
    "range": [
      305,
      306
    ]
  },
  {
    "type": "Identifier",
    "value": "Func",
    "start": 307,
    "end": 311,
    "range": [
      307,
      311
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 311,
    "end": 312,
    "range": [
      311,
      312
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 312,
    "end": 313,
    "range": [
      312,
      313
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 313,
    "end": 314,
    "range": [
      313,
      314
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 314,
    "end": 315,
    "range": [
      314,
      315
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 316,
    "end": 318,
    "range": [
      316,
      318
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 318,
    "end": 319,
    "range": [
      318,
      319
    ]
  },
  {
    "type": "Identifier",
    "value": "Func",
    "start": 320,
    "end": 324,
    "range": [
      320,
      324
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 324,
    "end": 325,
    "range": [
      324,
      325
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 325,
    "end": 326,
    "range": [
      325,
      326
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 326,
    "end": 327,
    "range": [
      326,
      327
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 327,
    "end": 328,
    "range": [
      327,
      328
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 328,
    "end": 329,
    "range": [
      328,
      329
    ]
  },
  {
    "type": "Identifier",
    "value": "Func",
    "start": 330,
    "end": 334,
    "range": [
      330,
      334
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 334,
    "end": 335,
    "range": [
      334,
      335
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 335,
    "end": 336,
    "range": [
      335,
      336
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 337,
    "end": 338,
    "range": [
      337,
      338
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 340,
    "end": 347,
    "range": [
      340,
      347
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 348,
    "end": 356,
    "range": [
      348,
      356
    ]
  },
  {
    "type": "Identifier",
    "value": "fo",
    "start": 357,
    "end": 359,
    "range": [
      357,
      359
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 359,
    "end": 360,
    "range": [
      359,
      360
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 360,
    "end": 361,
    "range": [
      360,
      361
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 361,
    "end": 362,
    "range": [
      361,
      362
    ]
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 363,
    "end": 369,
    "range": [
      363,
      369
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 369,
    "end": 370,
    "range": [
      369,
      370
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 370,
    "end": 371,
    "range": [
      370,
      371
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 372,
    "end": 376,
    "range": [
      372,
      376
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 376,
    "end": 377,
    "range": [
      376,
      377
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 378,
    "end": 385,
    "range": [
      378,
      385
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 386,
    "end": 394,
    "range": [
      386,
      394
    ]
  },
  {
    "type": "Identifier",
    "value": "fs",
    "start": 395,
    "end": 397,
    "range": [
      395,
      397
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 397,
    "end": 398,
    "range": [
      397,
      398
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 398,
    "end": 399,
    "range": [
      398,
      399
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 399,
    "end": 400,
    "range": [
      399,
      400
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 401,
    "end": 407,
    "range": [
      401,
      407
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 407,
    "end": 408,
    "range": [
      407,
      408
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 408,
    "end": 409,
    "range": [
      408,
      409
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 410,
    "end": 414,
    "range": [
      410,
      414
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 414,
    "end": 415,
    "range": [
      414,
      415
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 416,
    "end": 423,
    "range": [
      416,
      423
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 424,
    "end": 432,
    "range": [
      424,
      432
    ]
  },
  {
    "type": "Identifier",
    "value": "fx",
    "start": 433,
    "end": 435,
    "range": [
      433,
      435
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 435,
    "end": 436,
    "range": [
      435,
      436
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 436,
    "end": 437,
    "range": [
      436,
      437
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 437,
    "end": 438,
    "range": [
      437,
      438
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 439,
    "end": 440,
    "range": [
      439,
      440
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 440,
    "end": 441,
    "range": [
      440,
      441
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 441,
    "end": 442,
    "range": [
      441,
      442
    ]
  },
  {
    "type": "String",
    "value": "\"def\"",
    "start": 443,
    "end": 448,
    "range": [
      443,
      448
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 448,
    "end": 449,
    "range": [
      448,
      449
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 450,
    "end": 452,
    "range": [
      450,
      452
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 453,
    "end": 457,
    "range": [
      453,
      457
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 457,
    "end": 458,
    "range": [
      457,
      458
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 458,
    "end": 459,
    "range": [
      458,
      459
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 460,
    "end": 464,
    "range": [
      460,
      464
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 464,
    "end": 465,
    "range": [
      464,
      465
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 467,
    "end": 472,
    "range": [
      467,
      472
    ]
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 473,
    "end": 475,
    "range": [
      473,
      475
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 476,
    "end": 477,
    "range": [
      476,
      477
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 478,
    "end": 480,
    "range": [
      478,
      480
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 480,
    "end": 481,
    "range": [
      480,
      481
    ]
  },
  {
    "type": "Identifier",
    "value": "fo",
    "start": 481,
    "end": 483,
    "range": [
      481,
      483
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 483,
    "end": 484,
    "range": [
      483,
      484
    ]
  },
  {
    "type": "Identifier",
    "value": "fs",
    "start": 485,
    "end": 487,
    "range": [
      485,
      487
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 487,
    "end": 488,
    "range": [
      487,
      488
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 488,
    "end": 489,
    "range": [
      488,
      489
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 514,
    "end": 519,
    "range": [
      514,
      519
    ]
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 520,
    "end": 522,
    "range": [
      520,
      522
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 523,
    "end": 524,
    "range": [
      523,
      524
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 525,
    "end": 527,
    "range": [
      525,
      527
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 527,
    "end": 528,
    "range": [
      527,
      528
    ]
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 528,
    "end": 533,
    "range": [
      528,
      533
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 533,
    "end": 534,
    "range": [
      533,
      534
    ]
  },
  {
    "type": "Identifier",
    "value": "fo",
    "start": 535,
    "end": 537,
    "range": [
      535,
      537
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 537,
    "end": 538,
    "range": [
      537,
      538
    ]
  },
  {
    "type": "Identifier",
    "value": "fs",
    "start": 539,
    "end": 541,
    "range": [
      539,
      541
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 541,
    "end": 542,
    "range": [
      541,
      542
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 542,
    "end": 543,
    "range": [
      542,
      543
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 554,
    "end": 559,
    "range": [
      554,
      559
    ]
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 560,
    "end": 562,
    "range": [
      560,
      562
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 563,
    "end": 564,
    "range": [
      563,
      564
    ]
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 565,
    "end": 567,
    "range": [
      565,
      567
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 567,
    "end": 568,
    "range": [
      567,
      568
    ]
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 568,
    "end": 573,
    "range": [
      568,
      573
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 573,
    "end": 574,
    "range": [
      573,
      574
    ]
  },
  {
    "type": "Identifier",
    "value": "fo",
    "start": 575,
    "end": 577,
    "range": [
      575,
      577
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 577,
    "end": 578,
    "range": [
      577,
      578
    ]
  },
  {
    "type": "Identifier",
    "value": "fx",
    "start": 579,
    "end": 581,
    "range": [
      579,
      581
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 581,
    "end": 582,
    "range": [
      581,
      582
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 582,
    "end": 583,
    "range": [
      582,
      583
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 602,
    "end": 607,
    "range": [
      602,
      607
    ]
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 608,
    "end": 610,
    "range": [
      608,
      610
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 611,
    "end": 612,
    "range": [
      611,
      612
    ]
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 613,
    "end": 615,
    "range": [
      613,
      615
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 615,
    "end": 616,
    "range": [
      615,
      616
    ]
  },
  {
    "type": "Identifier",
    "value": "fo",
    "start": 616,
    "end": 618,
    "range": [
      616,
      618
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 618,
    "end": 619,
    "range": [
      618,
      619
    ]
  },
  {
    "type": "Identifier",
    "value": "fs",
    "start": 620,
    "end": 622,
    "range": [
      620,
      622
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 622,
    "end": 623,
    "range": [
      622,
      623
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 623,
    "end": 624,
    "range": [
      623,
      624
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 643,
    "end": 650,
    "range": [
      643,
      650
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 651,
    "end": 656,
    "range": [
      651,
      656
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 657,
    "end": 662,
    "range": [
      657,
      662
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 662,
    "end": 663,
    "range": [
      662,
      663
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 664,
    "end": 669,
    "range": [
      664,
      669
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 669,
    "end": 670,
    "range": [
      669,
      670
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 672,
    "end": 677,
    "range": [
      672,
      677
    ]
  },
  {
    "type": "Identifier",
    "value": "x10",
    "start": 678,
    "end": 681,
    "range": [
      678,
      681
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 682,
    "end": 683,
    "range": [
      682,
      683
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 684,
    "end": 686,
    "range": [
      684,
      686
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 686,
    "end": 687,
    "range": [
      686,
      687
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 687,
    "end": 692,
    "range": [
      687,
      692
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 692,
    "end": 693,
    "range": [
      692,
      693
    ]
  },
  {
    "type": "Identifier",
    "value": "fo",
    "start": 694,
    "end": 696,
    "range": [
      694,
      696
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 696,
    "end": 697,
    "range": [
      696,
      697
    ]
  },
  {
    "type": "Identifier",
    "value": "fs",
    "start": 698,
    "end": 700,
    "range": [
      698,
      700
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 700,
    "end": 701,
    "range": [
      700,
      701
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 701,
    "end": 702,
    "range": [
      701,
      702
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 714,
    "end": 719,
    "range": [
      714,
      719
    ]
  },
  {
    "type": "Identifier",
    "value": "x11",
    "start": 720,
    "end": 723,
    "range": [
      720,
      723
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 724,
    "end": 725,
    "range": [
      724,
      725
    ]
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 726,
    "end": 728,
    "range": [
      726,
      728
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 728,
    "end": 729,
    "range": [
      728,
      729
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 729,
    "end": 734,
    "range": [
      729,
      734
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 734,
    "end": 735,
    "range": [
      734,
      735
    ]
  },
  {
    "type": "Identifier",
    "value": "fo",
    "start": 736,
    "end": 738,
    "range": [
      736,
      738
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 738,
    "end": 739,
    "range": [
      738,
      739
    ]
  },
  {
    "type": "Identifier",
    "value": "fx",
    "start": 740,
    "end": 742,
    "range": [
      740,
      742
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 742,
    "end": 743,
    "range": [
      742,
      743
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 743,
    "end": 744,
    "range": [
      743,
      744
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 778,
    "end": 785,
    "range": [
      778,
      785
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 786,
    "end": 794,
    "range": [
      786,
      794
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 795,
    "end": 798,
    "range": [
      795,
      798
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 798,
    "end": 799,
    "range": [
      798,
      799
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 799,
    "end": 800,
    "range": [
      799,
      800
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 800,
    "end": 801,
    "range": [
      800,
      801
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 801,
    "end": 802,
    "range": [
      801,
      802
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 802,
    "end": 803,
    "range": [
      802,
      803
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 803,
    "end": 804,
    "range": [
      803,
      804
    ]
  },
  {
    "type": "Identifier",
    "value": "ReadonlyArray",
    "start": 805,
    "end": 818,
    "range": [
      805,
      818
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 818,
    "end": 819,
    "range": [
      818,
      819
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 819,
    "end": 820,
    "range": [
      819,
      820
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 820,
    "end": 821,
    "range": [
      820,
      821
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 821,
    "end": 822,
    "range": [
      821,
      822
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 822,
    "end": 823,
    "range": [
      822,
      823
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 824,
    "end": 825,
    "range": [
      824,
      825
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 825,
    "end": 826,
    "range": [
      825,
      826
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 827,
    "end": 830,
    "range": [
      827,
      830
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 831,
    "end": 832,
    "range": [
      831,
      832
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 833,
    "end": 834,
    "range": [
      833,
      834
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 835,
    "end": 838,
    "range": [
      835,
      838
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 838,
    "end": 839,
    "range": [
      838,
      839
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 839,
    "end": 840,
    "range": [
      839,
      840
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 840,
    "end": 841,
    "range": [
      840,
      841
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 841,
    "end": 842,
    "range": [
      841,
      842
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 842,
    "end": 843,
    "range": [
      842,
      843
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 887,
    "end": 896,
    "range": [
      887,
      896
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 897,
    "end": 898,
    "range": [
      897,
      898
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 899,
    "end": 900,
    "range": [
      899,
      900
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 901,
    "end": 902,
    "range": [
      901,
      902
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 902,
    "end": 903,
    "range": [
      902,
      903
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 904,
    "end": 910,
    "range": [
      904,
      910
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 911,
    "end": 912,
    "range": [
      911,
      912
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 913,
    "end": 922,
    "range": [
      913,
      922
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 923,
    "end": 924,
    "range": [
      923,
      924
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 925,
    "end": 932,
    "range": [
      925,
      932
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 933,
    "end": 934,
    "range": [
      933,
      934
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 935,
    "end": 936,
    "range": [
      935,
      936
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 937,
    "end": 938,
    "range": [
      937,
      938
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 938,
    "end": 939,
    "range": [
      938,
      939
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 940,
    "end": 946,
    "range": [
      940,
      946
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 947,
    "end": 948,
    "range": [
      947,
      948
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 950,
    "end": 957,
    "range": [
      950,
      957
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 958,
    "end": 966,
    "range": [
      958,
      966
    ]
  },
  {
    "type": "Identifier",
    "value": "acceptUnion",
    "start": 967,
    "end": 978,
    "range": [
      967,
      978
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 978,
    "end": 979,
    "range": [
      978,
      979
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 979,
    "end": 980,
    "range": [
      979,
      980
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 980,
    "end": 981,
    "range": [
      980,
      981
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 982,
    "end": 983,
    "range": [
      982,
      983
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 984,
    "end": 985,
    "range": [
      984,
      985
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 986,
    "end": 992,
    "range": [
      986,
      992
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 992,
    "end": 993,
    "range": [
      992,
      993
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 993,
    "end": 994,
    "range": [
      993,
      994
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 995,
    "end": 999,
    "range": [
      995,
      999
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 999,
    "end": 1000,
    "range": [
      999,
      1000
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1001,
    "end": 1008,
    "range": [
      1001,
      1008
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1009,
    "end": 1017,
    "range": [
      1009,
      1017
    ]
  },
  {
    "type": "Identifier",
    "value": "acceptA",
    "start": 1018,
    "end": 1025,
    "range": [
      1018,
      1025
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1025,
    "end": 1026,
    "range": [
      1025,
      1026
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1026,
    "end": 1027,
    "range": [
      1026,
      1027
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1027,
    "end": 1028,
    "range": [
      1027,
      1028
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1029,
    "end": 1030,
    "range": [
      1029,
      1030
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1030,
    "end": 1031,
    "range": [
      1030,
      1031
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1031,
    "end": 1032,
    "range": [
      1031,
      1032
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1033,
    "end": 1037,
    "range": [
      1033,
      1037
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1037,
    "end": 1038,
    "range": [
      1037,
      1038
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1040,
    "end": 1047,
    "range": [
      1040,
      1047
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1048,
    "end": 1051,
    "range": [
      1048,
      1051
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1052,
    "end": 1053,
    "range": [
      1052,
      1053
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1053,
    "end": 1054,
    "range": [
      1053,
      1054
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1055,
    "end": 1056,
    "range": [
      1055,
      1056
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1056,
    "end": 1057,
    "range": [
      1056,
      1057
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1058,
    "end": 1065,
    "range": [
      1058,
      1065
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1066,
    "end": 1069,
    "range": [
      1066,
      1069
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1070,
    "end": 1071,
    "range": [
      1070,
      1071
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1071,
    "end": 1072,
    "range": [
      1071,
      1072
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1073,
    "end": 1074,
    "range": [
      1073,
      1074
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1074,
    "end": 1075,
    "range": [
      1074,
      1075
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1077,
    "end": 1084,
    "range": [
      1077,
      1084
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1085,
    "end": 1093,
    "range": [
      1085,
      1093
    ]
  },
  {
    "type": "Identifier",
    "value": "coAndContra",
    "start": 1094,
    "end": 1105,
    "range": [
      1094,
      1105
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1105,
    "end": 1106,
    "range": [
      1105,
      1106
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1106,
    "end": 1107,
    "range": [
      1106,
      1107
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1107,
    "end": 1108,
    "range": [
      1107,
      1108
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1108,
    "end": 1109,
    "range": [
      1108,
      1109
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1109,
    "end": 1114,
    "range": [
      1109,
      1114
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1114,
    "end": 1115,
    "range": [
      1114,
      1115
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1116,
    "end": 1117,
    "range": [
      1116,
      1117
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1117,
    "end": 1118,
    "range": [
      1117,
      1118
    ]
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 1119,
    "end": 1123,
    "range": [
      1119,
      1123
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1123,
    "end": 1124,
    "range": [
      1123,
      1124
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1125,
    "end": 1126,
    "range": [
      1125,
      1126
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1126,
    "end": 1127,
    "range": [
      1126,
      1127
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1127,
    "end": 1128,
    "range": [
      1127,
      1128
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1129,
    "end": 1130,
    "range": [
      1129,
      1130
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1130,
    "end": 1131,
    "range": [
      1130,
      1131
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1132,
    "end": 1134,
    "range": [
      1132,
      1134
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1135,
    "end": 1139,
    "range": [
      1135,
      1139
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1139,
    "end": 1140,
    "range": [
      1139,
      1140
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1140,
    "end": 1141,
    "range": [
      1140,
      1141
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1142,
    "end": 1143,
    "range": [
      1142,
      1143
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1143,
    "end": 1144,
    "range": [
      1143,
      1144
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1146,
    "end": 1151,
    "range": [
      1146,
      1151
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 1152,
    "end": 1154,
    "range": [
      1152,
      1154
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1154,
    "end": 1155,
    "range": [
      1154,
      1155
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1156,
    "end": 1157,
    "range": [
      1156,
      1157
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1158,
    "end": 1159,
    "range": [
      1158,
      1159
    ]
  },
  {
    "type": "Identifier",
    "value": "coAndContra",
    "start": 1160,
    "end": 1171,
    "range": [
      1160,
      1171
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1171,
    "end": 1172,
    "range": [
      1171,
      1172
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1172,
    "end": 1173,
    "range": [
      1172,
      1173
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1173,
    "end": 1174,
    "range": [
      1173,
      1174
    ]
  },
  {
    "type": "Identifier",
    "value": "acceptUnion",
    "start": 1175,
    "end": 1186,
    "range": [
      1175,
      1186
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1186,
    "end": 1187,
    "range": [
      1186,
      1187
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1187,
    "end": 1188,
    "range": [
      1187,
      1188
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1189,
    "end": 1194,
    "range": [
      1189,
      1194
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 1195,
    "end": 1197,
    "range": [
      1195,
      1197
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1197,
    "end": 1198,
    "range": [
      1197,
      1198
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1199,
    "end": 1200,
    "range": [
      1199,
      1200
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1201,
    "end": 1202,
    "range": [
      1201,
      1202
    ]
  },
  {
    "type": "Identifier",
    "value": "coAndContra",
    "start": 1203,
    "end": 1214,
    "range": [
      1203,
      1214
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1214,
    "end": 1215,
    "range": [
      1214,
      1215
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1215,
    "end": 1216,
    "range": [
      1215,
      1216
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1216,
    "end": 1217,
    "range": [
      1216,
      1217
    ]
  },
  {
    "type": "Identifier",
    "value": "acceptA",
    "start": 1218,
    "end": 1225,
    "range": [
      1218,
      1225
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1225,
    "end": 1226,
    "range": [
      1225,
      1226
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1226,
    "end": 1227,
    "range": [
      1226,
      1227
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1228,
    "end": 1233,
    "range": [
      1228,
      1233
    ]
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 1234,
    "end": 1236,
    "range": [
      1234,
      1236
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1236,
    "end": 1237,
    "range": [
      1236,
      1237
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1238,
    "end": 1239,
    "range": [
      1238,
      1239
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1240,
    "end": 1241,
    "range": [
      1240,
      1241
    ]
  },
  {
    "type": "Identifier",
    "value": "coAndContra",
    "start": 1242,
    "end": 1253,
    "range": [
      1242,
      1253
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1253,
    "end": 1254,
    "range": [
      1253,
      1254
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1254,
    "end": 1259,
    "range": [
      1254,
      1259
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1259,
    "end": 1260,
    "range": [
      1259,
      1260
    ]
  },
  {
    "type": "Identifier",
    "value": "acceptA",
    "start": 1261,
    "end": 1268,
    "range": [
      1261,
      1268
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1268,
    "end": 1269,
    "range": [
      1268,
      1269
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1269,
    "end": 1270,
    "range": [
      1269,
      1270
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1272,
    "end": 1279,
    "range": [
      1272,
      1279
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1280,
    "end": 1288,
    "range": [
      1280,
      1288
    ]
  },
  {
    "type": "Identifier",
    "value": "coAndContraArray",
    "start": 1289,
    "end": 1305,
    "range": [
      1289,
      1305
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1305,
    "end": 1306,
    "range": [
      1305,
      1306
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1306,
    "end": 1307,
    "range": [
      1306,
      1307
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1307,
    "end": 1308,
    "range": [
      1307,
      1308
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1308,
    "end": 1309,
    "range": [
      1308,
      1309
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1309,
    "end": 1314,
    "range": [
      1309,
      1314
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1314,
    "end": 1315,
    "range": [
      1314,
      1315
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1316,
    "end": 1317,
    "range": [
      1316,
      1317
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1317,
    "end": 1318,
    "range": [
      1317,
      1318
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1318,
    "end": 1319,
    "range": [
      1318,
      1319
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1319,
    "end": 1320,
    "range": [
      1319,
      1320
    ]
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 1321,
    "end": 1325,
    "range": [
      1321,
      1325
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1325,
    "end": 1326,
    "range": [
      1325,
      1326
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1327,
    "end": 1328,
    "range": [
      1327,
      1328
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1328,
    "end": 1329,
    "range": [
      1328,
      1329
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1329,
    "end": 1330,
    "range": [
      1329,
      1330
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1331,
    "end": 1332,
    "range": [
      1331,
      1332
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1332,
    "end": 1333,
    "range": [
      1332,
      1333
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1334,
    "end": 1336,
    "range": [
      1334,
      1336
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1337,
    "end": 1341,
    "range": [
      1337,
      1341
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1341,
    "end": 1342,
    "range": [
      1341,
      1342
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1342,
    "end": 1343,
    "range": [
      1342,
      1343
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1344,
    "end": 1345,
    "range": [
      1344,
      1345
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1345,
    "end": 1346,
    "range": [
      1345,
      1346
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1346,
    "end": 1347,
    "range": [
      1346,
      1347
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1347,
    "end": 1348,
    "range": [
      1347,
      1348
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1350,
    "end": 1355,
    "range": [
      1350,
      1355
    ]
  },
  {
    "type": "Identifier",
    "value": "t4",
    "start": 1356,
    "end": 1358,
    "range": [
      1356,
      1358
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1358,
    "end": 1359,
    "range": [
      1358,
      1359
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1360,
    "end": 1361,
    "range": [
      1360,
      1361
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1361,
    "end": 1362,
    "range": [
      1361,
      1362
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1362,
    "end": 1363,
    "range": [
      1362,
      1363
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1364,
    "end": 1365,
    "range": [
      1364,
      1365
    ]
  },
  {
    "type": "Identifier",
    "value": "coAndContraArray",
    "start": 1366,
    "end": 1382,
    "range": [
      1366,
      1382
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1382,
    "end": 1383,
    "range": [
      1382,
      1383
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1383,
    "end": 1384,
    "range": [
      1383,
      1384
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1384,
    "end": 1385,
    "range": [
      1384,
      1385
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1385,
    "end": 1386,
    "range": [
      1385,
      1386
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1386,
    "end": 1387,
    "range": [
      1386,
      1387
    ]
  },
  {
    "type": "Identifier",
    "value": "acceptUnion",
    "start": 1388,
    "end": 1399,
    "range": [
      1388,
      1399
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1399,
    "end": 1400,
    "range": [
      1399,
      1400
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1400,
    "end": 1401,
    "range": [
      1400,
      1401
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1402,
    "end": 1407,
    "range": [
      1402,
      1407
    ]
  },
  {
    "type": "Identifier",
    "value": "t5",
    "start": 1408,
    "end": 1410,
    "range": [
      1408,
      1410
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1410,
    "end": 1411,
    "range": [
      1410,
      1411
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1412,
    "end": 1413,
    "range": [
      1412,
      1413
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1413,
    "end": 1414,
    "range": [
      1413,
      1414
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1414,
    "end": 1415,
    "range": [
      1414,
      1415
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1416,
    "end": 1417,
    "range": [
      1416,
      1417
    ]
  },
  {
    "type": "Identifier",
    "value": "coAndContraArray",
    "start": 1418,
    "end": 1434,
    "range": [
      1418,
      1434
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1434,
    "end": 1435,
    "range": [
      1434,
      1435
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1435,
    "end": 1436,
    "range": [
      1435,
      1436
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1436,
    "end": 1437,
    "range": [
      1436,
      1437
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1437,
    "end": 1438,
    "range": [
      1437,
      1438
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1438,
    "end": 1439,
    "range": [
      1438,
      1439
    ]
  },
  {
    "type": "Identifier",
    "value": "acceptA",
    "start": 1440,
    "end": 1447,
    "range": [
      1440,
      1447
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1447,
    "end": 1448,
    "range": [
      1447,
      1448
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1448,
    "end": 1449,
    "range": [
      1448,
      1449
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1450,
    "end": 1455,
    "range": [
      1450,
      1455
    ]
  },
  {
    "type": "Identifier",
    "value": "t6",
    "start": 1456,
    "end": 1458,
    "range": [
      1456,
      1458
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1458,
    "end": 1459,
    "range": [
      1458,
      1459
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1460,
    "end": 1461,
    "range": [
      1460,
      1461
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1461,
    "end": 1462,
    "range": [
      1461,
      1462
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1462,
    "end": 1463,
    "range": [
      1462,
      1463
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1464,
    "end": 1465,
    "range": [
      1464,
      1465
    ]
  },
  {
    "type": "Identifier",
    "value": "coAndContraArray",
    "start": 1466,
    "end": 1482,
    "range": [
      1466,
      1482
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1482,
    "end": 1483,
    "range": [
      1482,
      1483
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1483,
    "end": 1484,
    "range": [
      1483,
      1484
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1484,
    "end": 1485,
    "range": [
      1484,
      1485
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1485,
    "end": 1486,
    "range": [
      1485,
      1486
    ]
  },
  {
    "type": "Identifier",
    "value": "acceptA",
    "start": 1487,
    "end": 1494,
    "range": [
      1487,
      1494
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1494,
    "end": 1495,
    "range": [
      1494,
      1495
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1495,
    "end": 1496,
    "range": [
      1495,
      1496
    ]
  }
]
```
