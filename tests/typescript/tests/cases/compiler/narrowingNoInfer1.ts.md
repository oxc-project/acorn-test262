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
        "name": "TaggedA",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 69
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
              "name": "_tag",
              "optional": false,
              "typeAnnotation": null,
              "start": 74,
              "end": 78
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 80,
                  "end": 83
                },
                "start": 80,
                "end": 83
              },
              "start": 78,
              "end": 83
            },
            "accessibility": null,
            "static": false,
            "start": 74,
            "end": 83
          }
        ],
        "start": 72,
        "end": 85
      },
      "declare": false,
      "start": 57,
      "end": 86
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TaggedB",
        "optional": false,
        "typeAnnotation": null,
        "start": 92,
        "end": 99
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
              "name": "_tag",
              "optional": false,
              "typeAnnotation": null,
              "start": 104,
              "end": 108
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "\"b\"",
                  "start": 110,
                  "end": 113
                },
                "start": 110,
                "end": 113
              },
              "start": 108,
              "end": 113
            },
            "accessibility": null,
            "static": false,
            "start": 104,
            "end": 113
          }
        ],
        "start": 102,
        "end": 115
      },
      "declare": false,
      "start": 87,
      "end": 116
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TaggedUnion",
        "optional": false,
        "typeAnnotation": null,
        "start": 123,
        "end": 134
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TaggedA",
              "optional": false,
              "typeAnnotation": null,
              "start": 137,
              "end": 144
            },
            "typeArguments": null,
            "start": 137,
            "end": 144
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TaggedB",
              "optional": false,
              "typeAnnotation": null,
              "start": 147,
              "end": 154
            },
            "typeArguments": null,
            "start": 147,
            "end": 154
          }
        ],
        "start": 137,
        "end": 154
      },
      "declare": false,
      "start": 118,
      "end": 155
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
            "name": "m",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
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
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 168,
                        "end": 174
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "NoInfer",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 176,
                            "end": 183
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TaggedUnion",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 184,
                                  "end": 195
                                },
                                "typeArguments": null,
                                "start": 184,
                                "end": 195
                              }
                            ],
                            "start": 183,
                            "end": 196
                          },
                          "start": 176,
                          "end": 196
                        },
                        "start": 174,
                        "end": 196
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 168,
                      "end": 196
                    }
                  ],
                  "start": 166,
                  "end": 198
                },
                "start": 166,
                "end": 200
              },
              "start": 164,
              "end": 200
            },
            "start": 163,
            "end": 200
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 203,
            "end": 205
          },
          "definite": false,
          "start": 163,
          "end": 205
        }
      ],
      "declare": false,
      "start": 157,
      "end": 206
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "map",
        "optional": false,
        "typeAnnotation": null,
        "start": 217,
        "end": 220
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 221,
              "end": 222
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 221,
            "end": 222
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 224,
              "end": 225
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 224,
            "end": 225
          }
        ],
        "start": 220,
        "end": 226
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "items",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "readonly",
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
                    "start": 243,
                    "end": 244
                  },
                  "typeArguments": null,
                  "start": 243,
                  "end": 244
                },
                "start": 243,
                "end": 246
              },
              "start": 234,
              "end": 246
            },
            "start": 232,
            "end": 246
          },
          "start": 227,
          "end": 246
        },
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NoInfer",
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
                              "name": "A",
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
                    "start": 253,
                    "end": 265
                  },
                  "start": 252,
                  "end": 265
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 270,
                    "end": 271
                  },
                  "typeArguments": null,
                  "start": 270,
                  "end": 271
                },
                "start": 267,
                "end": 271
              },
              "start": 251,
              "end": 271
            },
            "start": 249,
            "end": 271
          },
          "start": 248,
          "end": 271
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "items",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 284,
                  "end": 289
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 290,
                  "end": 293
                },
                "optional": false,
                "computed": false,
                "start": 284,
                "end": 293
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 294,
                  "end": 295
                }
              ],
              "optional": false,
              "start": 284,
              "end": 296
            },
            "start": 277,
            "end": 297
          }
        ],
        "start": 273,
        "end": 299
      },
      "expression": false,
      "start": 208,
      "end": 299
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
            "name": "something",
            "optional": false,
            "typeAnnotation": null,
            "start": 307,
            "end": 316
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "map",
              "optional": false,
              "typeAnnotation": null,
              "start": 319,
              "end": 322
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null,
                "start": 323,
                "end": 324
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 327,
                    "end": 328
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 335,
                          "end": 336
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "result",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 337,
                          "end": 343
                        },
                        "optional": false,
                        "computed": false,
                        "start": 335,
                        "end": 343
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_tag",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 344,
                        "end": 348
                      },
                      "optional": false,
                      "computed": false,
                      "start": 335,
                      "end": 348
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 353,
                      "end": 356
                    },
                    "start": 335,
                    "end": 356
                  },
                  "consequent": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "SpreadElement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 364,
                          "end": 365
                        },
                        "start": 361,
                        "end": 365
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "result",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 367,
                          "end": 373
                        },
                        "value": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 375,
                            "end": 376
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "result",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 377,
                            "end": 383
                          },
                          "optional": false,
                          "computed": false,
                          "start": 375,
                          "end": 383
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 367,
                        "end": 383
                      }
                    ],
                    "start": 359,
                    "end": 385
                  },
                  "alternate": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 388,
                    "end": 392
                  },
                  "start": 335,
                  "end": 392
                },
                "id": null,
                "generator": false,
                "start": 326,
                "end": 392
              }
            ],
            "optional": false,
            "start": 319,
            "end": 395
          },
          "definite": false,
          "start": 307,
          "end": 395
        }
      ],
      "declare": false,
      "start": 301,
      "end": 396
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test2",
        "optional": false,
        "typeAnnotation": null,
        "start": 415,
        "end": 420
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
              "name": "T1",
              "optional": false,
              "typeAnnotation": null,
              "start": 421,
              "end": 423
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 421,
            "end": 423
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T2",
              "optional": false,
              "typeAnnotation": null,
              "start": 425,
              "end": 427
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 425,
            "end": 427
          }
        ],
        "start": 420,
        "end": 428
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
                "name": "T1",
                "optional": false,
                "typeAnnotation": null,
                "start": 432,
                "end": 434
              },
              "typeArguments": null,
              "start": 432,
              "end": 434
            },
            "start": 430,
            "end": 434
          },
          "start": 429,
          "end": 434
        },
        {
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
                "name": "T2",
                "optional": false,
                "typeAnnotation": null,
                "start": 439,
                "end": 441
              },
              "typeArguments": null,
              "start": 439,
              "end": 441
            },
            "start": 437,
            "end": 441
          },
          "start": 436,
          "end": 441
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
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
                  "name": "thing",
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
                            "name": "NoInfer",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 455,
                            "end": 462
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
                                  "start": 463,
                                  "end": 465
                                },
                                "typeArguments": null,
                                "start": 463,
                                "end": 465
                              }
                            ],
                            "start": 462,
                            "end": 466
                          },
                          "start": 455,
                          "end": 466
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "NoInfer",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 469,
                            "end": 476
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
                                  "start": 477,
                                  "end": 479
                                },
                                "typeArguments": null,
                                "start": 477,
                                "end": 479
                              }
                            ],
                            "start": 476,
                            "end": 480
                          },
                          "start": 469,
                          "end": 480
                        }
                      ],
                      "start": 455,
                      "end": 480
                    },
                    "start": 453,
                    "end": 480
                  },
                  "start": 448,
                  "end": 480
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 485,
                  "end": 489
                },
                "start": 482,
                "end": 489
              },
              "start": 447,
              "end": 489
            },
            "start": 445,
            "end": 489
          },
          "start": 443,
          "end": 489
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 492,
          "end": 496
        },
        "start": 490,
        "end": 496
      },
      "body": null,
      "expression": false,
      "start": 398,
      "end": 497
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test2",
          "optional": false,
          "typeAnnotation": null,
          "start": 499,
          "end": 504
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 507,
                  "end": 511
                },
                "value": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "'a'",
                    "start": 513,
                    "end": 516
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 520,
                      "end": 525
                    },
                    "typeArguments": null,
                    "start": 520,
                    "end": 525
                  },
                  "start": 513,
                  "end": 525
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 507,
                "end": 525
              }
            ],
            "start": 505,
            "end": 527
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 531,
                  "end": 535
                },
                "value": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "'b'",
                    "start": 537,
                    "end": 540
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 544,
                      "end": 549
                    },
                    "typeArguments": null,
                    "start": 544,
                    "end": 549
                  },
                  "start": 537,
                  "end": 549
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 531,
                "end": 549
              }
            ],
            "start": 529,
            "end": 551
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "thing",
                "optional": false,
                "typeAnnotation": null,
                "start": 554,
                "end": 559
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "thing",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 572,
                        "end": 577
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 578,
                        "end": 582
                      },
                      "optional": false,
                      "computed": false,
                      "start": 572,
                      "end": 582
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 587,
                      "end": 590
                    },
                    "start": 572,
                    "end": 590
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "thing",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 598,
                          "end": 603
                        },
                        "directive": null,
                        "start": 598,
                        "end": 604
                      }
                    ],
                    "start": 592,
                    "end": 608
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "thing",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 620,
                          "end": 625
                        },
                        "directive": null,
                        "start": 620,
                        "end": 626
                      }
                    ],
                    "start": 614,
                    "end": 630
                  },
                  "start": 568,
                  "end": 630
                }
              ],
              "start": 564,
              "end": 632
            },
            "id": null,
            "generator": false,
            "start": 553,
            "end": 632
          }
        ],
        "optional": false,
        "start": 499,
        "end": 633
      },
      "directive": null,
      "start": 499,
      "end": 634
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 634
}
```
