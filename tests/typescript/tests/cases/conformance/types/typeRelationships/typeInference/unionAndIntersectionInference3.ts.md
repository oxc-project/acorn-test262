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
        "name": "Maybe",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 32
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
              "start": 33,
              "end": 34
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 33,
            "end": 34
          }
        ],
        "start": 32,
        "end": 35
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 38,
              "end": 39
            },
            "typeArguments": null,
            "start": 38,
            "end": 39
          },
          {
            "type": "TSUndefinedKeyword",
            "start": 42,
            "end": 51
          }
        ],
        "start": 38,
        "end": 51
      },
      "declare": false,
      "start": 22,
      "end": 52
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "concatMaybe",
        "optional": false,
        "typeAnnotation": null,
        "start": 70,
        "end": 81
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
              "start": 82,
              "end": 83
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 82,
            "end": 83
          }
        ],
        "start": 81,
        "end": 84
      },
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 88,
            "end": 92
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Maybe",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 95,
                      "end": 100
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
                            "start": 101,
                            "end": 102
                          },
                          "typeArguments": null,
                          "start": 101,
                          "end": 102
                        }
                      ],
                      "start": 100,
                      "end": 103
                    },
                    "start": 95,
                    "end": 103
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Maybe",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 106,
                        "end": 111
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
                              "start": 112,
                              "end": 113
                            },
                            "typeArguments": null,
                            "start": 112,
                            "end": 113
                          }
                        ],
                        "start": 111,
                        "end": 114
                      },
                      "start": 106,
                      "end": 114
                    },
                    "start": 106,
                    "end": 116
                  }
                ],
                "start": 95,
                "end": 116
              },
              "start": 94,
              "end": 119
            },
            "start": 92,
            "end": 119
          },
          "value": null,
          "start": 85,
          "end": 119
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
              "start": 122,
              "end": 123
            },
            "typeArguments": null,
            "start": 122,
            "end": 123
          },
          "start": 122,
          "end": 125
        },
        "start": 120,
        "end": 125
      },
      "body": null,
      "expression": false,
      "start": 53,
      "end": 126
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "concatMaybe",
          "optional": false,
          "typeAnnotation": null,
          "start": 127,
          "end": 138
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 140,
                "end": 141
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 143,
                "end": 144
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 146,
                "end": 147
              }
            ],
            "start": 139,
            "end": 148
          },
          {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 150,
            "end": 151
          }
        ],
        "optional": false,
        "start": 127,
        "end": 152
      },
      "directive": null,
      "start": 127,
      "end": 153
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
            "name": "g",
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
                        "start": 188,
                        "end": 189
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 188,
                      "end": 189
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 191,
                        "end": 192
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 191,
                      "end": 192
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 194,
                        "end": 195
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 194,
                      "end": 195
                    }
                  ],
                  "start": 187,
                  "end": 196
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "com",
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
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Iterator",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 208,
                                  "end": 216
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "S",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 217,
                                        "end": 218
                                      },
                                      "typeArguments": null,
                                      "start": 217,
                                      "end": 218
                                    },
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "U",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 220,
                                        "end": 221
                                      },
                                      "typeArguments": null,
                                      "start": 220,
                                      "end": 221
                                    },
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "R",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 223,
                                        "end": 224
                                      },
                                      "typeArguments": null,
                                      "start": 223,
                                      "end": 224
                                    }
                                  ],
                                  "start": 216,
                                  "end": 225
                                },
                                "start": 208,
                                "end": 225
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "AsyncIterator",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 228,
                                  "end": 241
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "S",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 242,
                                        "end": 243
                                      },
                                      "typeArguments": null,
                                      "start": 242,
                                      "end": 243
                                    },
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "U",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 245,
                                        "end": 246
                                      },
                                      "typeArguments": null,
                                      "start": 245,
                                      "end": 246
                                    },
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "R",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 248,
                                        "end": 249
                                      },
                                      "typeArguments": null,
                                      "start": 248,
                                      "end": 249
                                    }
                                  ],
                                  "start": 241,
                                  "end": 250
                                },
                                "start": 228,
                                "end": 250
                              }
                            ],
                            "start": 208,
                            "end": 250
                          },
                          "start": 205,
                          "end": 250
                        },
                        "start": 202,
                        "end": 250
                      },
                      "start": 200,
                      "end": 250
                    },
                    "start": 197,
                    "end": 250
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
                      "start": 255,
                      "end": 262
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
                            "start": 263,
                            "end": 264
                          },
                          "typeArguments": null,
                          "start": 263,
                          "end": 264
                        }
                      ],
                      "start": 262,
                      "end": 265
                    },
                    "start": 255,
                    "end": 265
                  },
                  "start": 252,
                  "end": 265
                },
                "start": 187,
                "end": 265
              },
              "start": 185,
              "end": 265
            },
            "start": 184,
            "end": 265
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": true,
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
                    "start": 275,
                    "end": 276
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 275,
                  "end": 276
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 278,
                    "end": 279
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 278,
                  "end": 279
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 281,
                    "end": 282
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 281,
                  "end": 282
                }
              ],
              "start": 274,
              "end": 283
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "com",
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
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Iterator",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 295,
                              "end": 303
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "S",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 304,
                                    "end": 305
                                  },
                                  "typeArguments": null,
                                  "start": 304,
                                  "end": 305
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 307,
                                    "end": 308
                                  },
                                  "typeArguments": null,
                                  "start": 307,
                                  "end": 308
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "R",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 310,
                                    "end": 311
                                  },
                                  "typeArguments": null,
                                  "start": 310,
                                  "end": 311
                                }
                              ],
                              "start": 303,
                              "end": 312
                            },
                            "start": 295,
                            "end": 312
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AsyncIterator",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 315,
                              "end": 328
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "S",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 329,
                                    "end": 330
                                  },
                                  "typeArguments": null,
                                  "start": 329,
                                  "end": 330
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 332,
                                    "end": 333
                                  },
                                  "typeArguments": null,
                                  "start": 332,
                                  "end": 333
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "R",
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
                              "start": 328,
                              "end": 337
                            },
                            "start": 315,
                            "end": 337
                          }
                        ],
                        "start": 295,
                        "end": 337
                      },
                      "start": 292,
                      "end": 337
                    },
                    "start": 289,
                    "end": 337
                  },
                  "start": 287,
                  "end": 337
                },
                "start": 284,
                "end": 337
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
                  "start": 340,
                  "end": 347
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
                        "start": 348,
                        "end": 349
                      },
                      "typeArguments": null,
                      "start": 348,
                      "end": 349
                    }
                  ],
                  "start": 347,
                  "end": 350
                },
                "start": 340,
                "end": 350
              },
              "start": 338,
              "end": 350
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ThrowStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "com",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 364,
                    "end": 367
                  },
                  "start": 358,
                  "end": 368
                }
              ],
              "start": 354,
              "end": 370
            },
            "id": null,
            "generator": false,
            "start": 268,
            "end": 370
          },
          "definite": false,
          "start": 184,
          "end": 370
        }
      ],
      "declare": false,
      "start": 178,
      "end": 371
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 383,
        "end": 387
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
              "start": 388,
              "end": 389
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 388,
            "end": 389
          }
        ],
        "start": 387,
        "end": 390
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
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 397,
              "end": 401
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                      "start": 409,
                      "end": 410
                    },
                    "typeArguments": null,
                    "start": 409,
                    "end": 410
                  },
                  "start": 407,
                  "end": 410
                },
                "start": 402,
                "end": 410
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 413,
                "end": 417
              },
              "start": 411,
              "end": 417
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 397,
            "end": 418
          }
        ],
        "start": 391,
        "end": 420
      },
      "declare": false,
      "start": 373,
      "end": 420
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar1",
        "optional": false,
        "typeAnnotation": null,
        "start": 432,
        "end": 436
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
              "start": 437,
              "end": 438
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 437,
            "end": 438
          }
        ],
        "start": 436,
        "end": 439
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
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 446,
              "end": 450
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 458,
                          "end": 459
                        },
                        "typeArguments": null,
                        "start": 458,
                        "end": 459
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "PromiseLike",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 462,
                          "end": 473
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
                                "start": 474,
                                "end": 475
                              },
                              "typeArguments": null,
                              "start": 474,
                              "end": 475
                            }
                          ],
                          "start": 473,
                          "end": 476
                        },
                        "start": 462,
                        "end": 476
                      }
                    ],
                    "start": 458,
                    "end": 476
                  },
                  "start": 456,
                  "end": 476
                },
                "start": 451,
                "end": 476
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 479,
                "end": 483
              },
              "start": 477,
              "end": 483
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 446,
            "end": 484
          }
        ],
        "start": 440,
        "end": 486
      },
      "declare": false,
      "start": 422,
      "end": 486
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
            "name": "f1",
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
                        "start": 505,
                        "end": 506
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 505,
                      "end": 506
                    }
                  ],
                  "start": 504,
                  "end": 507
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
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Foo1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 511,
                              "end": 515
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
                                    "start": 516,
                                    "end": 517
                                  },
                                  "typeArguments": null,
                                  "start": 516,
                                  "end": 517
                                }
                              ],
                              "start": 515,
                              "end": 518
                            },
                            "start": 511,
                            "end": 518
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Bar1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 521,
                              "end": 525
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
                                    "start": 526,
                                    "end": 527
                                  },
                                  "typeArguments": null,
                                  "start": 526,
                                  "end": 527
                                }
                              ],
                              "start": 525,
                              "end": 528
                            },
                            "start": 521,
                            "end": 528
                          }
                        ],
                        "start": 511,
                        "end": 528
                      },
                      "start": 509,
                      "end": 528
                    },
                    "start": 508,
                    "end": 528
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
                      "start": 533,
                      "end": 540
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
                            "start": 541,
                            "end": 542
                          },
                          "typeArguments": null,
                          "start": 541,
                          "end": 542
                        }
                      ],
                      "start": 540,
                      "end": 543
                    },
                    "start": 533,
                    "end": 543
                  },
                  "start": 530,
                  "end": 543
                },
                "start": 504,
                "end": 543
              },
              "start": 502,
              "end": 543
            },
            "start": 500,
            "end": 543
          },
          "init": null,
          "definite": false,
          "start": 500,
          "end": 543
        }
      ],
      "declare": true,
      "start": 488,
      "end": 544
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
            "name": "f2",
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
                        "start": 562,
                        "end": 563
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 562,
                      "end": 563
                    }
                  ],
                  "start": 561,
                  "end": 564
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
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Foo1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 568,
                              "end": 572
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
                                    "start": 573,
                                    "end": 574
                                  },
                                  "typeArguments": null,
                                  "start": 573,
                                  "end": 574
                                }
                              ],
                              "start": 572,
                              "end": 575
                            },
                            "start": 568,
                            "end": 575
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Bar1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 578,
                              "end": 582
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
                                    "start": 583,
                                    "end": 584
                                  },
                                  "typeArguments": null,
                                  "start": 583,
                                  "end": 584
                                }
                              ],
                              "start": 582,
                              "end": 585
                            },
                            "start": 578,
                            "end": 585
                          }
                        ],
                        "start": 568,
                        "end": 585
                      },
                      "start": 566,
                      "end": 585
                    },
                    "start": 565,
                    "end": 585
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
                      "start": 590,
                      "end": 597
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
                            "start": 598,
                            "end": 599
                          },
                          "typeArguments": null,
                          "start": 598,
                          "end": 599
                        }
                      ],
                      "start": 597,
                      "end": 600
                    },
                    "start": 590,
                    "end": 600
                  },
                  "start": 587,
                  "end": 600
                },
                "start": 561,
                "end": 600
              },
              "start": 559,
              "end": 600
            },
            "start": 557,
            "end": 600
          },
          "init": null,
          "definite": false,
          "start": 557,
          "end": 600
        }
      ],
      "declare": true,
      "start": 545,
      "end": 601
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 603,
          "end": 605
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 608,
          "end": 610
        },
        "start": 603,
        "end": 610
      },
      "directive": null,
      "start": 603,
      "end": 611
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 612,
          "end": 614
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 617,
          "end": 619
        },
        "start": 612,
        "end": 619
      },
      "directive": null,
      "start": 612,
      "end": 620
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 627,
        "end": 631
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
              "start": 632,
              "end": 633
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 632,
            "end": 633
          }
        ],
        "start": 631,
        "end": 634
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 643,
              "end": 647
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                      "start": 655,
                      "end": 656
                    },
                    "typeArguments": null,
                    "start": 655,
                    "end": 656
                  },
                  "start": 653,
                  "end": 656
                },
                "start": 648,
                "end": 656
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 659,
                "end": 663
              },
              "start": 657,
              "end": 663
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 643,
            "end": 664
          }
        ],
        "start": 637,
        "end": 666
      },
      "declare": false,
      "start": 622,
      "end": 666
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar2",
        "optional": false,
        "typeAnnotation": null,
        "start": 673,
        "end": 677
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
              "start": 678,
              "end": 679
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 678,
            "end": 679
          }
        ],
        "start": 677,
        "end": 680
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 689,
              "end": 693
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 701,
                          "end": 702
                        },
                        "typeArguments": null,
                        "start": 701,
                        "end": 702
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "PromiseLike",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 705,
                          "end": 716
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
                                "start": 717,
                                "end": 718
                              },
                              "typeArguments": null,
                              "start": 717,
                              "end": 718
                            }
                          ],
                          "start": 716,
                          "end": 719
                        },
                        "start": 705,
                        "end": 719
                      }
                    ],
                    "start": 701,
                    "end": 719
                  },
                  "start": 699,
                  "end": 719
                },
                "start": 694,
                "end": 719
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 722,
                "end": 726
              },
              "start": 720,
              "end": 726
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 689,
            "end": 727
          }
        ],
        "start": 683,
        "end": 729
      },
      "declare": false,
      "start": 668,
      "end": 729
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
            "name": "g1",
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
                        "start": 748,
                        "end": 749
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 748,
                      "end": 749
                    }
                  ],
                  "start": 747,
                  "end": 750
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
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Foo2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 754,
                              "end": 758
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
                                    "start": 759,
                                    "end": 760
                                  },
                                  "typeArguments": null,
                                  "start": 759,
                                  "end": 760
                                }
                              ],
                              "start": 758,
                              "end": 761
                            },
                            "start": 754,
                            "end": 761
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Bar2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 764,
                              "end": 768
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
                                    "start": 769,
                                    "end": 770
                                  },
                                  "typeArguments": null,
                                  "start": 769,
                                  "end": 770
                                }
                              ],
                              "start": 768,
                              "end": 771
                            },
                            "start": 764,
                            "end": 771
                          }
                        ],
                        "start": 754,
                        "end": 771
                      },
                      "start": 752,
                      "end": 771
                    },
                    "start": 751,
                    "end": 771
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
                      "start": 776,
                      "end": 783
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
                            "start": 784,
                            "end": 785
                          },
                          "typeArguments": null,
                          "start": 784,
                          "end": 785
                        }
                      ],
                      "start": 783,
                      "end": 786
                    },
                    "start": 776,
                    "end": 786
                  },
                  "start": 773,
                  "end": 786
                },
                "start": 747,
                "end": 786
              },
              "start": 745,
              "end": 786
            },
            "start": 743,
            "end": 786
          },
          "init": null,
          "definite": false,
          "start": 743,
          "end": 786
        }
      ],
      "declare": true,
      "start": 731,
      "end": 787
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
            "name": "g2",
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
                        "start": 805,
                        "end": 806
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 805,
                      "end": 806
                    }
                  ],
                  "start": 804,
                  "end": 807
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
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Foo2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 811,
                              "end": 815
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
                                    "start": 816,
                                    "end": 817
                                  },
                                  "typeArguments": null,
                                  "start": 816,
                                  "end": 817
                                }
                              ],
                              "start": 815,
                              "end": 818
                            },
                            "start": 811,
                            "end": 818
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Bar2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 821,
                              "end": 825
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
                                    "start": 826,
                                    "end": 827
                                  },
                                  "typeArguments": null,
                                  "start": 826,
                                  "end": 827
                                }
                              ],
                              "start": 825,
                              "end": 828
                            },
                            "start": 821,
                            "end": 828
                          }
                        ],
                        "start": 811,
                        "end": 828
                      },
                      "start": 809,
                      "end": 828
                    },
                    "start": 808,
                    "end": 828
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
                      "start": 833,
                      "end": 840
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
                            "start": 841,
                            "end": 842
                          },
                          "typeArguments": null,
                          "start": 841,
                          "end": 842
                        }
                      ],
                      "start": 840,
                      "end": 843
                    },
                    "start": 833,
                    "end": 843
                  },
                  "start": 830,
                  "end": 843
                },
                "start": 804,
                "end": 843
              },
              "start": 802,
              "end": 843
            },
            "start": 800,
            "end": 843
          },
          "init": null,
          "definite": false,
          "start": 800,
          "end": 843
        }
      ],
      "declare": true,
      "start": 788,
      "end": 844
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "g1",
          "optional": false,
          "typeAnnotation": null,
          "start": 846,
          "end": 848
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "g2",
          "optional": false,
          "typeAnnotation": null,
          "start": 851,
          "end": 853
        },
        "start": 846,
        "end": 853
      },
      "directive": null,
      "start": 846,
      "end": 854
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "g2",
          "optional": false,
          "typeAnnotation": null,
          "start": 855,
          "end": 857
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "g1",
          "optional": false,
          "typeAnnotation": null,
          "start": 860,
          "end": 862
        },
        "start": 855,
        "end": 862
      },
      "directive": null,
      "start": 855,
      "end": 863
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 904,
        "end": 908
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
              "start": 909,
              "end": 910
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 909,
            "end": 910
          }
        ],
        "start": 908,
        "end": 911
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
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 917,
                    "end": 923
                  },
                  "start": 917,
                  "end": 925
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Iterable",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 928,
                    "end": 936
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
                          "start": 937,
                          "end": 938
                        },
                        "typeArguments": null,
                        "start": 937,
                        "end": 938
                      }
                    ],
                    "start": 936,
                    "end": 939
                  },
                  "start": 928,
                  "end": 939
                }
              ],
              "start": 917,
              "end": 939
            },
            "start": 915,
            "end": 939
          },
          "start": 912,
          "end": 939
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
            "start": 942,
            "end": 943
          },
          "typeArguments": null,
          "start": 942,
          "end": 943
        },
        "start": 940,
        "end": 943
      },
      "body": null,
      "expression": false,
      "start": 887,
      "end": 944
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 962,
        "end": 966
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
              "start": 967,
              "end": 968
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 967,
            "end": 968
          }
        ],
        "start": 966,
        "end": 969
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
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 975,
                    "end": 981
                  },
                  "start": 975,
                  "end": 983
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 986,
                    "end": 987
                  },
                  "typeArguments": null,
                  "start": 986,
                  "end": 987
                }
              ],
              "start": 975,
              "end": 987
            },
            "start": 973,
            "end": 987
          },
          "start": 970,
          "end": 987
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
            "start": 990,
            "end": 991
          },
          "typeArguments": null,
          "start": 990,
          "end": 991
        },
        "start": 988,
        "end": 991
      },
      "body": null,
      "expression": false,
      "start": 945,
      "end": 992
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
            "name": "sa",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 1010,
                  "end": 1016
                },
                "start": 1010,
                "end": 1018
              },
              "start": 1008,
              "end": 1018
            },
            "start": 1006,
            "end": 1018
          },
          "init": null,
          "definite": false,
          "start": 1006,
          "end": 1018
        }
      ],
      "declare": true,
      "start": 994,
      "end": 1019
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
            "name": "sx",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 1036,
                      "end": 1042
                    },
                    "start": 1036,
                    "end": 1044
                  },
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
                          "name": "extra",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1049,
                          "end": 1054
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1056,
                            "end": 1062
                          },
                          "start": 1054,
                          "end": 1062
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 1049,
                        "end": 1062
                      }
                    ],
                    "start": 1047,
                    "end": 1064
                  }
                ],
                "start": 1036,
                "end": 1064
              },
              "start": 1034,
              "end": 1064
            },
            "start": 1032,
            "end": 1064
          },
          "init": null,
          "definite": false,
          "start": 1032,
          "end": 1064
        }
      ],
      "declare": true,
      "start": 1020,
      "end": 1065
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
            "name": "x1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1071,
            "end": 1073
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1076,
              "end": 1080
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sa",
                "optional": false,
                "typeAnnotation": null,
                "start": 1081,
                "end": 1083
              }
            ],
            "optional": false,
            "start": 1076,
            "end": 1084
          },
          "definite": false,
          "start": 1071,
          "end": 1084
        }
      ],
      "declare": false,
      "start": 1067,
      "end": 1085
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
            "name": "y1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1101,
            "end": 1103
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1106,
              "end": 1110
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sx",
                "optional": false,
                "typeAnnotation": null,
                "start": 1111,
                "end": 1113
              }
            ],
            "optional": false,
            "start": 1106,
            "end": 1114
          },
          "definite": false,
          "start": 1101,
          "end": 1114
        }
      ],
      "declare": false,
      "start": 1097,
      "end": 1115
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
            "name": "x2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1132,
            "end": 1134
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1137,
              "end": 1141
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sa",
                "optional": false,
                "typeAnnotation": null,
                "start": 1142,
                "end": 1144
              }
            ],
            "optional": false,
            "start": 1137,
            "end": 1145
          },
          "definite": false,
          "start": 1132,
          "end": 1145
        }
      ],
      "declare": false,
      "start": 1128,
      "end": 1146
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
            "name": "y2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1163,
            "end": 1165
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1168,
              "end": 1172
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sx",
                "optional": false,
                "typeAnnotation": null,
                "start": 1173,
                "end": 1175
              }
            ],
            "optional": false,
            "start": 1168,
            "end": 1176
          },
          "definite": false,
          "start": 1163,
          "end": 1176
        }
      ],
      "declare": false,
      "start": 1159,
      "end": 1177
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Component",
        "optional": false,
        "typeAnnotation": null,
        "start": 1237,
        "end": 1246
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 1247,
              "end": 1248
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1247,
            "end": 1248
          }
        ],
        "start": 1246,
        "end": 1249
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "props",
              "optional": false,
              "typeAnnotation": null,
              "start": 1252,
              "end": 1257
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1259,
                  "end": 1260
                },
                "typeArguments": null,
                "start": 1259,
                "end": 1260
              },
              "start": 1257,
              "end": 1260
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1252,
            "end": 1260
          }
        ],
        "start": 1250,
        "end": 1262
      },
      "abstract": false,
      "declare": true,
      "start": 1223,
      "end": 1262
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ComponentClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 1276,
          "end": 1290
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 1291,
                "end": 1292
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1291,
              "end": 1292
            }
          ],
          "start": 1290,
          "end": 1293
        },
        "typeAnnotation": {
          "type": "TSConstructorType",
          "abstract": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "props",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1308,
                    "end": 1309
                  },
                  "typeArguments": null,
                  "start": 1308,
                  "end": 1309
                },
                "start": 1306,
                "end": 1309
              },
              "start": 1301,
              "end": 1309
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Component",
                "optional": false,
                "typeAnnotation": null,
                "start": 1314,
                "end": 1323
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1324,
                      "end": 1325
                    },
                    "typeArguments": null,
                    "start": 1324,
                    "end": 1325
                  }
                ],
                "start": 1323,
                "end": 1326
              },
              "start": 1314,
              "end": 1326
            },
            "start": 1311,
            "end": 1326
          },
          "start": 1296,
          "end": 1326
        },
        "declare": false,
        "start": 1271,
        "end": 1327
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1264,
      "end": 1327
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "FunctionComponent",
          "optional": false,
          "typeAnnotation": null,
          "start": 1340,
          "end": 1357
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 1358,
                "end": 1359
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1358,
              "end": 1359
            }
          ],
          "start": 1357,
          "end": 1360
        },
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "props",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1371,
                    "end": 1372
                  },
                  "typeArguments": null,
                  "start": 1371,
                  "end": 1372
                },
                "start": 1369,
                "end": 1372
              },
              "start": 1364,
              "end": 1372
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNullKeyword",
              "start": 1377,
              "end": 1381
            },
            "start": 1374,
            "end": 1381
          },
          "start": 1363,
          "end": 1381
        },
        "declare": false,
        "start": 1335,
        "end": 1382
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1328,
      "end": 1382
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ComponentType",
          "optional": false,
          "typeAnnotation": null,
          "start": 1396,
          "end": 1409
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 1410,
                "end": 1411
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1410,
              "end": 1411
            }
          ],
          "start": 1409,
          "end": 1412
        },
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "FunctionComponent",
                "optional": false,
                "typeAnnotation": null,
                "start": 1415,
                "end": 1432
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1433,
                      "end": 1434
                    },
                    "typeArguments": null,
                    "start": 1433,
                    "end": 1434
                  }
                ],
                "start": 1432,
                "end": 1435
              },
              "start": 1415,
              "end": 1435
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ComponentClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 1438,
                "end": 1452
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1453,
                      "end": 1454
                    },
                    "typeArguments": null,
                    "start": 1453,
                    "end": 1454
                  }
                ],
                "start": 1452,
                "end": 1455
              },
              "start": 1438,
              "end": 1455
            }
          ],
          "start": 1415,
          "end": 1455
        },
        "declare": false,
        "start": 1391,
        "end": 1456
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1384,
      "end": 1456
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "RouteComponentProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 1475,
          "end": 1494
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
                "name": "route",
                "optional": false,
                "typeAnnotation": null,
                "start": 1497,
                "end": 1502
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1504,
                  "end": 1510
                },
                "start": 1502,
                "end": 1510
              },
              "accessibility": null,
              "static": false,
              "start": 1497,
              "end": 1510
            }
          ],
          "start": 1495,
          "end": 1512
        },
        "declare": false,
        "start": 1465,
        "end": 1512
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1458,
      "end": 1512
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "withRouter",
        "optional": false,
        "typeAnnotation": null,
        "start": 1531,
        "end": 1541
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
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 1545,
              "end": 1546
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "RouteComponentProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 1555,
                "end": 1574
              },
              "typeArguments": null,
              "start": 1555,
              "end": 1574
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1545,
            "end": 1574
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 1578,
              "end": 1579
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ComponentType",
                "optional": false,
                "typeAnnotation": null,
                "start": 1588,
                "end": 1601
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1602,
                      "end": 1603
                    },
                    "typeArguments": null,
                    "start": 1602,
                    "end": 1603
                  }
                ],
                "start": 1601,
                "end": 1604
              },
              "start": 1588,
              "end": 1604
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1578,
            "end": 1604
          }
        ],
        "start": 1541,
        "end": 1606
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "component",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1621,
                    "end": 1622
                  },
                  "typeArguments": null,
                  "start": 1621,
                  "end": 1622
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ComponentType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1625,
                    "end": 1638
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1639,
                          "end": 1640
                        },
                        "typeArguments": null,
                        "start": 1639,
                        "end": 1640
                      }
                    ],
                    "start": 1638,
                    "end": 1641
                  },
                  "start": 1625,
                  "end": 1641
                }
              ],
              "start": 1621,
              "end": 1641
            },
            "start": 1619,
            "end": 1641
          },
          "start": 1610,
          "end": 1641
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ComponentClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 1645,
            "end": 1659
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Omit",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1660,
                  "end": 1664
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1665,
                        "end": 1666
                      },
                      "typeArguments": null,
                      "start": 1665,
                      "end": 1666
                    },
                    {
                      "type": "TSTypeOperator",
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "RouteComponentProps",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1674,
                          "end": 1693
                        },
                        "typeArguments": null,
                        "start": 1674,
                        "end": 1693
                      },
                      "start": 1668,
                      "end": 1693
                    }
                  ],
                  "start": 1664,
                  "end": 1694
                },
                "start": 1660,
                "end": 1694
              }
            ],
            "start": 1659,
            "end": 1695
          },
          "start": 1645,
          "end": 1695
        },
        "start": 1643,
        "end": 1695
      },
      "body": null,
      "expression": false,
      "start": 1514,
      "end": 1696
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null,
        "start": 1708,
        "end": 1713
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "RouteComponentProps",
            "optional": false,
            "typeAnnotation": null,
            "start": 1722,
            "end": 1741
          },
          "typeArguments": null,
          "start": 1722,
          "end": 1741
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
              "name": "username",
              "optional": false,
              "typeAnnotation": null,
              "start": 1744,
              "end": 1752
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1754,
                "end": 1760
              },
              "start": 1752,
              "end": 1760
            },
            "accessibility": null,
            "static": false,
            "start": 1744,
            "end": 1760
          }
        ],
        "start": 1742,
        "end": 1762
      },
      "declare": false,
      "start": 1698,
      "end": 1762
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
            "name": "MyComponent",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ComponentType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1791,
                  "end": 1804
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Props",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1805,
                        "end": 1810
                      },
                      "typeArguments": null,
                      "start": 1805,
                      "end": 1810
                    }
                  ],
                  "start": 1804,
                  "end": 1811
                },
                "start": 1791,
                "end": 1811
              },
              "start": 1789,
              "end": 1811
            },
            "start": 1778,
            "end": 1811
          },
          "init": null,
          "definite": false,
          "start": 1778,
          "end": 1811
        }
      ],
      "declare": true,
      "start": 1764,
      "end": 1812
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "withRouter",
          "optional": false,
          "typeAnnotation": null,
          "start": 1814,
          "end": 1824
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "MyComponent",
            "optional": false,
            "typeAnnotation": null,
            "start": 1825,
            "end": 1836
          }
        ],
        "optional": false,
        "start": 1814,
        "end": 1837
      },
      "directive": null,
      "start": 1814,
      "end": 1838
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AB",
        "optional": false,
        "typeAnnotation": null,
        "start": 1867,
        "end": 1869
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
              "start": 1870,
              "end": 1871
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1870,
            "end": 1871
          }
        ],
        "start": 1869,
        "end": 1872
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1877,
                  "end": 1878
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
                      "start": 1880,
                      "end": 1881
                    },
                    "typeArguments": null,
                    "start": 1880,
                    "end": 1881
                  },
                  "start": 1878,
                  "end": 1881
                },
                "accessibility": null,
                "static": false,
                "start": 1877,
                "end": 1881
              }
            ],
            "start": 1875,
            "end": 1883
          },
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1888,
                  "end": 1889
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
                      "start": 1891,
                      "end": 1892
                    },
                    "typeArguments": null,
                    "start": 1891,
                    "end": 1892
                  },
                  "start": 1889,
                  "end": 1892
                },
                "accessibility": null,
                "static": false,
                "start": 1888,
                "end": 1892
              }
            ],
            "start": 1886,
            "end": 1894
          }
        ],
        "start": 1875,
        "end": 1894
      },
      "declare": false,
      "start": 1862,
      "end": 1895
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1975,
        "end": 1978
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
              "start": 1979,
              "end": 1980
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1979,
            "end": 1980
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1982,
              "end": 1983
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1982,
            "end": 1983
          }
        ],
        "start": 1978,
        "end": 1984
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
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1990,
                    "end": 1991
                  },
                  "typeArguments": null,
                  "start": 1990,
                  "end": 1991
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1994,
                    "end": 1996
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
                          "start": 1997,
                          "end": 1998
                        },
                        "typeArguments": null,
                        "start": 1997,
                        "end": 1998
                      }
                    ],
                    "start": 1996,
                    "end": 1999
                  },
                  "start": 1994,
                  "end": 1999
                }
              ],
              "start": 1990,
              "end": 1999
            },
            "start": 1988,
            "end": 1999
          },
          "start": 1985,
          "end": 1999
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2003,
                "end": 2004
              },
              "typeArguments": null,
              "start": 2003,
              "end": 2004
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 2006,
                "end": 2007
              },
              "typeArguments": null,
              "start": 2006,
              "end": 2007
            }
          ],
          "start": 2002,
          "end": 2008
        },
        "start": 2000,
        "end": 2008
      },
      "body": null,
      "expression": false,
      "start": 1958,
      "end": 2009
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
            "name": "ab",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2026,
                  "end": 2028
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 2029,
                      "end": 2035
                    }
                  ],
                  "start": 2028,
                  "end": 2036
                },
                "start": 2026,
                "end": 2036
              },
              "start": 2024,
              "end": 2036
            },
            "start": 2022,
            "end": 2036
          },
          "init": null,
          "definite": false,
          "start": 2022,
          "end": 2036
        }
      ],
      "declare": true,
      "start": 2010,
      "end": 2037
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
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 2043,
            "end": 2044
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 2047,
              "end": 2050
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "ab",
                "optional": false,
                "typeAnnotation": null,
                "start": 2051,
                "end": 2053
              }
            ],
            "optional": false,
            "start": 2047,
            "end": 2054
          },
          "definite": false,
          "start": 2043,
          "end": 2054
        }
      ],
      "declare": false,
      "start": 2039,
      "end": 2055
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
                        "start": 2120,
                        "end": 2121
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2120,
                      "end": 2121
                    }
                  ],
                  "start": 2119,
                  "end": 2122
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSConditionalType",
                        "checkType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2129,
                            "end": 2130
                          },
                          "typeArguments": null,
                          "start": 2129,
                          "end": 2130
                        },
                        "extendsType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 2139,
                            "end": 2143
                          },
                          "start": 2139,
                          "end": 2143
                        },
                        "trueType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 2146,
                            "end": 2150
                          },
                          "start": 2146,
                          "end": 2150
                        },
                        "falseType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false",
                            "start": 2153,
                            "end": 2158
                          },
                          "start": 2153,
                          "end": 2158
                        },
                        "start": 2129,
                        "end": 2158
                      },
                      {
                        "type": "TSBooleanKeyword",
                        "start": 2162,
                        "end": 2169
                      }
                    ],
                    "start": 2128,
                    "end": 2169
                  },
                  "start": 2125,
                  "end": 2169
                },
                "start": 2119,
                "end": 2169
              },
              "start": 2117,
              "end": 2169
            },
            "start": 2116,
            "end": 2169
          },
          "init": null,
          "definite": false,
          "start": 2116,
          "end": 2169
        }
      ],
      "declare": true,
      "start": 2104,
      "end": 2170
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
                        "start": 2187,
                        "end": 2188
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2187,
                      "end": 2188
                    }
                  ],
                  "start": 2186,
                  "end": 2189
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSConditionalType",
                        "checkType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2196,
                            "end": 2197
                          },
                          "typeArguments": null,
                          "start": 2196,
                          "end": 2197
                        },
                        "extendsType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 2206,
                            "end": 2210
                          },
                          "start": 2206,
                          "end": 2210
                        },
                        "trueType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 2213,
                            "end": 2217
                          },
                          "start": 2213,
                          "end": 2217
                        },
                        "falseType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false",
                            "start": 2220,
                            "end": 2225
                          },
                          "start": 2220,
                          "end": 2225
                        },
                        "start": 2196,
                        "end": 2225
                      },
                      {
                        "type": "TSBooleanKeyword",
                        "start": 2229,
                        "end": 2236
                      }
                    ],
                    "start": 2195,
                    "end": 2236
                  },
                  "start": 2192,
                  "end": 2236
                },
                "start": 2186,
                "end": 2236
              },
              "start": 2184,
              "end": 2236
            },
            "start": 2183,
            "end": 2236
          },
          "init": null,
          "definite": false,
          "start": 2183,
          "end": 2236
        }
      ],
      "declare": true,
      "start": 2171,
      "end": 2237
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 2238,
          "end": 2239
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 2242,
          "end": 2243
        },
        "start": 2238,
        "end": 2243
      },
      "directive": null,
      "start": 2238,
      "end": 2244
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 22,
  "end": 2244
}
```
