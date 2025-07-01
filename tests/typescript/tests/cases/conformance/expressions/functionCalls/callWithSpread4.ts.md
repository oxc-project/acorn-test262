__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "R",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 6
      },
      "typeParameters": null,
      "typeAnnotation": {
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 12
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 14,
                "end": 20
              },
              "start": 12,
              "end": 20
            },
            "accessibility": null,
            "static": false,
            "start": 11,
            "end": 20
          }
        ],
        "start": 9,
        "end": 22
      },
      "declare": false,
      "start": 0,
      "end": 22
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "W",
        "optional": false,
        "typeAnnotation": null,
        "start": 28,
        "end": 29
      },
      "typeParameters": null,
      "typeAnnotation": {
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
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 34,
              "end": 35
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 37,
                "end": 43
              },
              "start": 35,
              "end": 43
            },
            "accessibility": null,
            "static": false,
            "start": 34,
            "end": 43
          }
        ],
        "start": 32,
        "end": 45
      },
      "declare": false,
      "start": 23,
      "end": 45
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RW",
        "optional": false,
        "typeAnnotation": null,
        "start": 51,
        "end": 53
      },
      "typeParameters": null,
      "typeAnnotation": {
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 59
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 61,
                "end": 67
              },
              "start": 59,
              "end": 67
            },
            "accessibility": null,
            "static": false,
            "start": 58,
            "end": 68
          },
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
              "start": 69,
              "end": 70
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 72,
                "end": 78
              },
              "start": 70,
              "end": 78
            },
            "accessibility": null,
            "static": false,
            "start": 69,
            "end": 78
          }
        ],
        "start": 56,
        "end": 80
      },
      "declare": false,
      "start": 46,
      "end": 80
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
            "name": "pli",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
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
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 111,
                              "end": 112
                            },
                            "typeArguments": null,
                            "start": 111,
                            "end": 112
                          },
                          "start": 109,
                          "end": 112
                        },
                        "start": 107,
                        "end": 112
                      },
                      {
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
                              "name": "RW",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 118,
                              "end": 120
                            },
                            "typeArguments": null,
                            "start": 118,
                            "end": 120
                          },
                          "start": 116,
                          "end": 120
                        },
                        "start": 114,
                        "end": 120
                      },
                      {
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
                              "name": "RW",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 126,
                              "end": 128
                            },
                            "typeArguments": null,
                            "start": 126,
                            "end": 128
                          },
                          "start": 124,
                          "end": 128
                        },
                        "start": 122,
                        "end": 128
                      },
                      {
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
                              "name": "RW",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 134,
                              "end": 136
                            },
                            "typeArguments": null,
                            "start": 134,
                            "end": 136
                          },
                          "start": 132,
                          "end": 136
                        },
                        "start": 130,
                        "end": 136
                      },
                      {
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
                              "name": "W",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 142,
                              "end": 143
                            },
                            "typeArguments": null,
                            "start": 142,
                            "end": 143
                          },
                          "start": 140,
                          "end": 143
                        },
                        "start": 138,
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
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 146,
                          "end": 153
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSVoidKeyword",
                              "start": 154,
                              "end": 158
                            }
                          ],
                          "start": 153,
                          "end": 159
                        },
                        "start": 146,
                        "end": 159
                      },
                      "start": 144,
                      "end": 159
                    },
                    "start": 106,
                    "end": 160
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "streams",
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
                              "start": 175,
                              "end": 188
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSUnionType",
                                  "types": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "R",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 189,
                                        "end": 190
                                      },
                                      "typeArguments": null,
                                      "start": 189,
                                      "end": 190
                                    },
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "W",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 193,
                                        "end": 194
                                      },
                                      "typeArguments": null,
                                      "start": 193,
                                      "end": 194
                                    },
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "RW",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 197,
                                        "end": 199
                                      },
                                      "typeArguments": null,
                                      "start": 197,
                                      "end": 199
                                    }
                                  ],
                                  "start": 189,
                                  "end": 199
                                }
                              ],
                              "start": 188,
                              "end": 200
                            },
                            "start": 175,
                            "end": 200
                          },
                          "start": 173,
                          "end": 200
                        },
                        "start": 166,
                        "end": 200
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
                          "start": 203,
                          "end": 210
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSVoidKeyword",
                              "start": 211,
                              "end": 215
                            }
                          ],
                          "start": 210,
                          "end": 216
                        },
                        "start": 203,
                        "end": 216
                      },
                      "start": 201,
                      "end": 216
                    },
                    "start": 165,
                    "end": 217
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
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
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 227,
                              "end": 228
                            },
                            "typeArguments": null,
                            "start": 227,
                            "end": 228
                          },
                          "start": 225,
                          "end": 228
                        },
                        "start": 223,
                        "end": 228
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s2",
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
                                  "name": "RW",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 234,
                                  "end": 236
                                },
                                "typeArguments": null,
                                "start": 234,
                                "end": 236
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "W",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 239,
                                  "end": 240
                                },
                                "typeArguments": null,
                                "start": 239,
                                "end": 240
                              }
                            ],
                            "start": 234,
                            "end": 240
                          },
                          "start": 232,
                          "end": 240
                        },
                        "start": 230,
                        "end": 240
                      },
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "streams",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 245,
                          "end": 252
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Array",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 254,
                              "end": 259
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSUnionType",
                                  "types": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "RW",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 260,
                                        "end": 262
                                      },
                                      "typeArguments": null,
                                      "start": 260,
                                      "end": 262
                                    },
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "W",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 265,
                                        "end": 266
                                      },
                                      "typeArguments": null,
                                      "start": 265,
                                      "end": 266
                                    }
                                  ],
                                  "start": 260,
                                  "end": 266
                                }
                              ],
                              "start": 259,
                              "end": 267
                            },
                            "start": 254,
                            "end": 267
                          },
                          "start": 252,
                          "end": 267
                        },
                        "value": null,
                        "start": 242,
                        "end": 267
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
                              "type": "TSVoidKeyword",
                              "start": 278,
                              "end": 282
                            }
                          ],
                          "start": 277,
                          "end": 283
                        },
                        "start": 270,
                        "end": 283
                      },
                      "start": 268,
                      "end": 283
                    },
                    "start": 222,
                    "end": 284
                  }
                ],
                "start": 100,
                "end": 286
              },
              "start": 98,
              "end": 286
            },
            "start": 95,
            "end": 286
          },
          "init": null,
          "definite": false,
          "start": 95,
          "end": 286
        }
      ],
      "declare": true,
      "start": 81,
      "end": 286
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
            "name": "writes",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "W",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 308,
                  "end": 309
                },
                "typeArguments": null,
                "start": 308,
                "end": 309
              },
              "start": 306,
              "end": 309
            },
            "start": 300,
            "end": 309
          },
          "init": null,
          "definite": false,
          "start": 300,
          "end": 309
        }
      ],
      "declare": true,
      "start": 288,
      "end": 309
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
            "name": "reads",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 329,
                  "end": 330
                },
                "typeArguments": null,
                "start": 329,
                "end": 330
              },
              "start": 327,
              "end": 330
            },
            "start": 322,
            "end": 330
          },
          "init": null,
          "definite": false,
          "start": 322,
          "end": 330
        }
      ],
      "declare": true,
      "start": 310,
      "end": 330
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
            "name": "tr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "W",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 347,
                  "end": 348
                },
                "typeArguments": null,
                "start": 347,
                "end": 348
              },
              "start": 345,
              "end": 348
            },
            "start": 343,
            "end": 348
          },
          "init": null,
          "definite": false,
          "start": 343,
          "end": 348
        }
      ],
      "declare": true,
      "start": 331,
      "end": 348
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
            "name": "gun",
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
                    "name": "RW",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 366,
                    "end": 368
                  },
                  "typeArguments": null,
                  "start": 366,
                  "end": 368
                },
                "start": 366,
                "end": 370
              },
              "start": 364,
              "end": 370
            },
            "start": 361,
            "end": 370
          },
          "init": null,
          "definite": false,
          "start": 361,
          "end": 370
        }
      ],
      "declare": true,
      "start": 349,
      "end": 370
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
            "name": "gz",
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
                    "name": "RW",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 387,
                    "end": 389
                  },
                  "typeArguments": null,
                  "start": 387,
                  "end": 389
                },
                "start": 387,
                "end": 391
              },
              "start": 385,
              "end": 391
            },
            "start": 383,
            "end": 391
          },
          "init": null,
          "definite": false,
          "start": 383,
          "end": 391
        }
      ],
      "declare": true,
      "start": 371,
      "end": 391
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
            "name": "fun",
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
                    "name": "inp",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 415,
                        "end": 418
                      },
                      "start": 413,
                      "end": 418
                    },
                    "start": 410,
                    "end": 418
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsyncGenerator",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 423,
                      "end": 437
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 438,
                          "end": 444
                        },
                        {
                          "type": "TSVoidKeyword",
                          "start": 446,
                          "end": 450
                        },
                        {
                          "type": "TSUnknownKeyword",
                          "start": 452,
                          "end": 459
                        }
                      ],
                      "start": 437,
                      "end": 460
                    },
                    "start": 423,
                    "end": 460
                  },
                  "start": 420,
                  "end": 460
                },
                "start": 409,
                "end": 460
              },
              "start": 407,
              "end": 460
            },
            "start": 404,
            "end": 460
          },
          "init": null,
          "definite": false,
          "start": 404,
          "end": 460
        }
      ],
      "declare": true,
      "start": 392,
      "end": 460
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "pli",
          "optional": false,
          "typeAnnotation": null,
          "start": 461,
          "end": 464
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "reads",
            "optional": false,
            "typeAnnotation": null,
            "start": 470,
            "end": 475
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "gun",
              "optional": false,
              "typeAnnotation": null,
              "start": 484,
              "end": 487
            },
            "start": 481,
            "end": 487
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "tr",
            "optional": false,
            "typeAnnotation": null,
            "start": 493,
            "end": 495
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "fun",
            "optional": false,
            "typeAnnotation": null,
            "start": 501,
            "end": 504
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "gz",
              "optional": false,
              "typeAnnotation": null,
              "start": 513,
              "end": 515
            },
            "start": 510,
            "end": 515
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "writes",
            "optional": false,
            "typeAnnotation": null,
            "start": 521,
            "end": 527
          }
        ],
        "optional": false,
        "start": 461,
        "end": 529
      },
      "directive": null,
      "start": 461,
      "end": 530
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 549,
        "end": 553
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
              "type": "TSAnyKeyword",
              "start": 557,
              "end": 560
            },
            "start": 555,
            "end": 560
          },
          "start": 554,
          "end": 560
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 571,
                  "end": 577
                },
                "start": 568,
                "end": 577
              },
              "start": 565,
              "end": 577
            },
            "start": 563,
            "end": 577
          },
          "start": 562,
          "end": 577
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 580,
              "end": 586
            },
            {
              "type": "TSUndefinedKeyword",
              "start": 589,
              "end": 598
            }
          ],
          "start": 580,
          "end": 598
        },
        "start": 578,
        "end": 598
      },
      "body": null,
      "expression": false,
      "start": 532,
      "end": 599
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
            "name": "anys",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 618,
                  "end": 621
                },
                "start": 618,
                "end": 623
              },
              "start": 616,
              "end": 623
            },
            "start": 612,
            "end": 623
          },
          "init": null,
          "definite": false,
          "start": 612,
          "end": 623
        }
      ],
      "declare": true,
      "start": 600,
      "end": 623
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null,
          "start": 624,
          "end": 628
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "anys",
              "optional": false,
              "typeAnnotation": null,
              "start": 632,
              "end": 636
            },
            "start": 629,
            "end": 636
          }
        ],
        "optional": false,
        "start": 624,
        "end": 637
      },
      "directive": null,
      "start": 624,
      "end": 637
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "pli",
          "optional": false,
          "typeAnnotation": null,
          "start": 639,
          "end": 642
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "TSAsExpression",
              "expression": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "reads",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 647,
                    "end": 652
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "writes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 654,
                    "end": 660
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "writes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 662,
                    "end": 668
                  }
                ],
                "start": 646,
                "end": 669
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 673,
                  "end": 678
                },
                "typeArguments": null,
                "start": 673,
                "end": 678
              },
              "start": 646,
              "end": 678
            },
            "start": 643,
            "end": 678
          }
        ],
        "optional": false,
        "start": 639,
        "end": 679
      },
      "directive": null,
      "start": 639,
      "end": 679
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 679
}
```
