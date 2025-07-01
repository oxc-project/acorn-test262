__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 11
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 12,
              "end": 13
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 12,
            "end": 13
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K1",
              "optional": false,
              "typeAnnotation": null,
              "start": 15,
              "end": 17
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 32,
                  "end": 33
                },
                "typeArguments": null,
                "start": 32,
                "end": 33
              },
              "start": 26,
              "end": 33
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 15,
            "end": 33
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K2",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 37
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 52,
                    "end": 53
                  },
                  "typeArguments": null,
                  "start": 52,
                  "end": 53
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 54,
                    "end": 56
                  },
                  "typeArguments": null,
                  "start": 54,
                  "end": 56
                },
                "start": 52,
                "end": 57
              },
              "start": 46,
              "end": 57
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 35,
            "end": 57
          }
        ],
        "start": 11,
        "end": 58
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Extract",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 75,
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
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 83,
                              "end": 84
                            },
                            "typeArguments": null,
                            "start": 83,
                            "end": 84
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 86,
                            "end": 92
                          }
                        ],
                        "start": 82,
                        "end": 93
                      },
                      "start": 75,
                      "end": 93
                    },
                    "start": 73,
                    "end": 93
                  },
                  "start": 71,
                  "end": 93
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 96,
                      "end": 97
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 101,
                      "end": 104
                    },
                    "start": 96,
                    "end": 104
                  },
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
                  "start": 96,
                  "end": 109
                },
                "definite": false,
                "start": 71,
                "end": 109
              }
            ],
            "declare": false,
            "start": 67,
            "end": 110
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
                  "name": "v2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Extract",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 133,
                        "end": 140
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSIndexedAccessType",
                            "objectType": {
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
                            "indexType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "K1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 143,
                                "end": 145
                              },
                              "typeArguments": null,
                              "start": 143,
                              "end": 145
                            },
                            "start": 141,
                            "end": 146
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 148,
                            "end": 154
                          }
                        ],
                        "start": 140,
                        "end": 155
                      },
                      "start": 133,
                      "end": 155
                    },
                    "start": 131,
                    "end": 155
                  },
                  "start": 129,
                  "end": 155
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 158,
                      "end": 159
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 163,
                      "end": 166
                    },
                    "start": 158,
                    "end": 166
                  },
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 170,
                        "end": 171
                      },
                      "typeArguments": null,
                      "start": 170,
                      "end": 171
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 172,
                        "end": 174
                      },
                      "typeArguments": null,
                      "start": 172,
                      "end": 174
                    },
                    "start": 170,
                    "end": 175
                  },
                  "start": 158,
                  "end": 175
                },
                "definite": false,
                "start": 129,
                "end": 175
              }
            ],
            "declare": false,
            "start": 125,
            "end": 176
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
                  "name": "v3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Extract",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 199,
                        "end": 206
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSIndexedAccessType",
                            "objectType": {
                              "type": "TSIndexedAccessType",
                              "objectType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 207,
                                  "end": 208
                                },
                                "typeArguments": null,
                                "start": 207,
                                "end": 208
                              },
                              "indexType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "K1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 209,
                                  "end": 211
                                },
                                "typeArguments": null,
                                "start": 209,
                                "end": 211
                              },
                              "start": 207,
                              "end": 212
                            },
                            "indexType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "K2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 213,
                                "end": 215
                              },
                              "typeArguments": null,
                              "start": 213,
                              "end": 215
                            },
                            "start": 207,
                            "end": 216
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 218,
                            "end": 224
                          }
                        ],
                        "start": 206,
                        "end": 225
                      },
                      "start": 199,
                      "end": 225
                    },
                    "start": 197,
                    "end": 225
                  },
                  "start": 195,
                  "end": 225
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 228,
                      "end": 229
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 233,
                      "end": 236
                    },
                    "start": 228,
                    "end": 236
                  },
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
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
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 242,
                          "end": 244
                        },
                        "typeArguments": null,
                        "start": 242,
                        "end": 244
                      },
                      "start": 240,
                      "end": 245
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 246,
                        "end": 248
                      },
                      "typeArguments": null,
                      "start": 246,
                      "end": 248
                    },
                    "start": 240,
                    "end": 249
                  },
                  "start": 228,
                  "end": 249
                },
                "definite": false,
                "start": 195,
                "end": 249
              }
            ],
            "declare": false,
            "start": 191,
            "end": 250
          }
        ],
        "start": 61,
        "end": 265
      },
      "expression": false,
      "start": 0,
      "end": 265
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 272,
        "end": 275
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
              "start": 276,
              "end": 277
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 276,
            "end": 277
          }
        ],
        "start": 275,
        "end": 278
      },
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 283,
              "end": 284
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 286,
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
                        "name": "T",
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
                "start": 286,
                "end": 292
              },
              "start": 284,
              "end": 292
            },
            "accessibility": null,
            "static": false,
            "start": 283,
            "end": 292
          }
        ],
        "start": 281,
        "end": 294
      },
      "declare": false,
      "start": 267,
      "end": 295
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 301,
        "end": 304
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
              "start": 305,
              "end": 306
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 305,
            "end": 306
          }
        ],
        "start": 304,
        "end": 307
      },
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 312,
              "end": 313
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 315,
                  "end": 318
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 319,
                          "end": 320
                        },
                        "typeArguments": null,
                        "start": 319,
                        "end": 320
                      },
                      "start": 319,
                      "end": 322
                    }
                  ],
                  "start": 318,
                  "end": 323
                },
                "start": 315,
                "end": 323
              },
              "start": 313,
              "end": 323
            },
            "accessibility": null,
            "static": false,
            "start": 312,
            "end": 323
          }
        ],
        "start": 310,
        "end": 325
      },
      "declare": false,
      "start": 296,
      "end": 326
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 337,
        "end": 339
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 340,
              "end": 341
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 340,
            "end": 341
          }
        ],
        "start": 339,
        "end": 342
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 358,
                        "end": 361
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
                              "start": 362,
                              "end": 363
                            },
                            "typeArguments": null,
                            "start": 362,
                            "end": 363
                          }
                        ],
                        "start": 361,
                        "end": 364
                      },
                      "start": 358,
                      "end": 364
                    },
                    "start": 356,
                    "end": 364
                  },
                  "start": 355,
                  "end": 364
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 367,
                      "end": 368
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 372,
                      "end": 375
                    },
                    "start": 367,
                    "end": 375
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 379,
                      "end": 382
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
                            "start": 383,
                            "end": 384
                          },
                          "typeArguments": null,
                          "start": 383,
                          "end": 384
                        }
                      ],
                      "start": 382,
                      "end": 385
                    },
                    "start": 379,
                    "end": 385
                  },
                  "start": 367,
                  "end": 385
                },
                "definite": false,
                "start": 355,
                "end": 385
              }
            ],
            "declare": false,
            "start": 351,
            "end": 386
          }
        ],
        "start": 345,
        "end": 421
      },
      "expression": false,
      "start": 328,
      "end": 421
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 428,
        "end": 432
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
              "start": 433,
              "end": 434
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 433,
            "end": 434
          }
        ],
        "start": 432,
        "end": 435
      },
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 440,
              "end": 441
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 443,
                  "end": 447
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
                        "start": 448,
                        "end": 449
                      },
                      "typeArguments": null,
                      "start": 448,
                      "end": 449
                    }
                  ],
                  "start": 447,
                  "end": 450
                },
                "start": 443,
                "end": 450
              },
              "start": 441,
              "end": 450
            },
            "accessibility": null,
            "static": false,
            "start": 440,
            "end": 450
          }
        ],
        "start": 438,
        "end": 452
      },
      "declare": false,
      "start": 423,
      "end": 453
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 459,
        "end": 463
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
              "start": 464,
              "end": 465
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 464,
            "end": 465
          }
        ],
        "start": 463,
        "end": 466
      },
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 471,
              "end": 472
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 474,
                  "end": 478
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
                        "start": 479,
                        "end": 480
                      },
                      "typeArguments": null,
                      "start": 479,
                      "end": 480
                    }
                  ],
                  "start": 478,
                  "end": 481
                },
                "start": 474,
                "end": 481
              },
              "start": 472,
              "end": 481
            },
            "accessibility": null,
            "static": false,
            "start": 471,
            "end": 481
          }
        ],
        "start": 469,
        "end": 483
      },
      "declare": false,
      "start": 454,
      "end": 484
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 495,
        "end": 497
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 498,
              "end": 499
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 498,
            "end": 499
          }
        ],
        "start": 497,
        "end": 500
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Foo1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 516,
                        "end": 520
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
                              "start": 521,
                              "end": 522
                            },
                            "typeArguments": null,
                            "start": 521,
                            "end": 522
                          }
                        ],
                        "start": 520,
                        "end": 523
                      },
                      "start": 516,
                      "end": 523
                    },
                    "start": 514,
                    "end": 523
                  },
                  "start": 513,
                  "end": 523
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 526,
                      "end": 527
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 531,
                      "end": 534
                    },
                    "start": 526,
                    "end": 534
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 538,
                      "end": 541
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
                            "start": 542,
                            "end": 543
                          },
                          "typeArguments": null,
                          "start": 542,
                          "end": 543
                        }
                      ],
                      "start": 541,
                      "end": 544
                    },
                    "start": 538,
                    "end": 544
                  },
                  "start": 526,
                  "end": 544
                },
                "definite": false,
                "start": 513,
                "end": 544
              }
            ],
            "declare": false,
            "start": 509,
            "end": 545
          }
        ],
        "start": 503,
        "end": 561
      },
      "expression": false,
      "start": 486,
      "end": 561
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 590,
        "end": 591
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
              "start": 592,
              "end": 593
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 592,
            "end": 593
          }
        ],
        "start": 591,
        "end": 594
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 597,
            "end": 599
          },
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
                "start": 608,
                "end": 609
              },
              "typeArguments": null,
              "start": 608,
              "end": 609
            },
            "extendsType": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSAnyKeyword",
                  "start": 619,
                  "end": 622
                },
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 627,
                      "end": 630
                    },
                    "start": 627,
                    "end": 632
                  },
                  "start": 624,
                  "end": 632
                }
              ],
              "start": 618,
              "end": 633
            },
            "trueType": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 647,
                "end": 648
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 658,
                    "end": 659
                  },
                  "typeArguments": null,
                  "start": 658,
                  "end": 659
                },
                "start": 652,
                "end": 659
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "F",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 663,
                  "end": 664
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 665,
                          "end": 666
                        },
                        "typeArguments": null,
                        "start": 665,
                        "end": 666
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 667,
                          "end": 668
                        },
                        "typeArguments": null,
                        "start": 667,
                        "end": 668
                      },
                      "start": 665,
                      "end": 669
                    }
                  ],
                  "start": 664,
                  "end": 670
                },
                "start": 663,
                "end": 670
              },
              "optional": true,
              "readonly": null,
              "start": 644,
              "end": 672
            },
            "falseType": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 683,
                  "end": 684
                },
                "typeArguments": null,
                "start": 683,
                "end": 684
              },
              "extendsType": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 693,
                  "end": 696
                },
                "start": 693,
                "end": 698
              },
              "trueType": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "F",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 713,
                    "end": 714
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 715,
                            "end": 716
                          },
                          "typeArguments": null,
                          "start": 715,
                          "end": 716
                        },
                        "indexType": {
                          "type": "TSNumberKeyword",
                          "start": 717,
                          "end": 723
                        },
                        "start": 715,
                        "end": 724
                      }
                    ],
                    "start": 714,
                    "end": 725
                  },
                  "start": 713,
                  "end": 725
                },
                "start": 713,
                "end": 727
              },
              "falseType": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 742,
                    "end": 743
                  },
                  "typeArguments": null,
                  "start": 742,
                  "end": 743
                },
                "extendsType": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSIndexSignature",
                      "parameters": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 758,
                              "end": 764
                            },
                            "start": 756,
                            "end": 764
                          },
                          "start": 755,
                          "end": 764
                        }
                      ],
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
                      "readonly": false,
                      "static": false,
                      "accessibility": null,
                      "start": 754,
                      "end": 770
                    }
                  ],
                  "start": 752,
                  "end": 772
                },
                "trueType": {
                  "type": "TSMappedType",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 794,
                    "end": 795
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 805,
                        "end": 806
                      },
                      "typeArguments": null,
                      "start": 805,
                      "end": 806
                    },
                    "start": 799,
                    "end": 806
                  },
                  "nameType": null,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "F",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 810,
                      "end": 811
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSIndexedAccessType",
                          "objectType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 812,
                              "end": 813
                            },
                            "typeArguments": null,
                            "start": 812,
                            "end": 813
                          },
                          "indexType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "K",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 814,
                              "end": 815
                            },
                            "typeArguments": null,
                            "start": 814,
                            "end": 815
                          },
                          "start": 812,
                          "end": 816
                        }
                      ],
                      "start": 811,
                      "end": 817
                    },
                    "start": 810,
                    "end": 817
                  },
                  "optional": true,
                  "readonly": null,
                  "start": 791,
                  "end": 819
                },
                "falseType": {
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 840,
                        "end": 841
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 843,
                          "end": 849
                        },
                        "start": 841,
                        "end": 849
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 840,
                      "end": 849
                    }
                  ],
                  "start": 838,
                  "end": 851
                },
                "start": 742,
                "end": 851
              },
              "start": 683,
              "end": 851
            },
            "start": 608,
            "end": 851
          }
        ],
        "start": 597,
        "end": 853
      },
      "declare": false,
      "start": 585,
      "end": 854
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 873,
        "end": 874
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
              "start": 875,
              "end": 876
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 879,
              "end": 882
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 875,
            "end": 882
          }
        ],
        "start": 874,
        "end": 883
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "F",
            "optional": false,
            "typeAnnotation": null,
            "start": 887,
            "end": 888
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
                  "start": 889,
                  "end": 890
                },
                "typeArguments": null,
                "start": 889,
                "end": 890
              }
            ],
            "start": 888,
            "end": 891
          },
          "start": 887,
          "end": 891
        },
        "start": 885,
        "end": 891
      },
      "body": null,
      "expression": false,
      "start": 856,
      "end": 892
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 903,
        "end": 904
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSAsExpression",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 920,
                  "end": 921
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 920,
                "end": 923
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "F",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 927,
                  "end": 928
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 929,
                      "end": 932
                    }
                  ],
                  "start": 928,
                  "end": 933
                },
                "start": 927,
                "end": 933
              },
              "start": 920,
              "end": 933
            },
            "start": 913,
            "end": 934
          }
        ],
        "start": 907,
        "end": 936
      },
      "expression": false,
      "start": 894,
      "end": 936
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 936
}
```
