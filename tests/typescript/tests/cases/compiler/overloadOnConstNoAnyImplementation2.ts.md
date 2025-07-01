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
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
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
              "name": "x1",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 20
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "type": "TSNumberKeyword",
                    "start": 24,
                    "end": 30
                  },
                  "start": 22,
                  "end": 30
                },
                "start": 21,
                "end": 30
              },
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
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "hi",
                              "raw": "'hi'",
                              "start": 46,
                              "end": 50
                            },
                            "start": 46,
                            "end": 50
                          },
                          "start": 44,
                          "end": 50
                        },
                        "start": 43,
                        "end": 50
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 55,
                        "end": 61
                      },
                      "start": 52,
                      "end": 61
                    },
                    "start": 42,
                    "end": 61
                  },
                  "start": 40,
                  "end": 61
                },
                "start": 32,
                "end": 61
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 18,
            "end": 63
          }
        ],
        "start": 12,
        "end": 65
      },
      "declare": false,
      "start": 0,
      "end": 65
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 73,
        "end": 74
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x1",
              "optional": false,
              "typeAnnotation": null,
              "start": 81,
              "end": 83
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
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
                      "type": "TSNumberKeyword",
                      "start": 87,
                      "end": 93
                    },
                    "start": 85,
                    "end": 93
                  },
                  "start": 84,
                  "end": 93
                },
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
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "hi",
                                "raw": "'hi'",
                                "start": 109,
                                "end": 113
                              },
                              "start": 109,
                              "end": 113
                            },
                            "start": 107,
                            "end": 113
                          },
                          "start": 106,
                          "end": 113
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 118,
                          "end": 124
                        },
                        "start": 115,
                        "end": 124
                      },
                      "start": 105,
                      "end": 124
                    },
                    "start": 103,
                    "end": 124
                  },
                  "start": 95,
                  "end": 124
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 83,
              "end": 126
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 81,
            "end": 126
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x1",
              "optional": false,
              "typeAnnotation": null,
              "start": 131,
              "end": 133
            },
            "value": {
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 137,
                      "end": 143
                    },
                    "start": 135,
                    "end": 143
                  },
                  "start": 134,
                  "end": 143
                },
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
                              "type": "TSStringKeyword",
                              "start": 159,
                              "end": 165
                            },
                            "start": 157,
                            "end": 165
                          },
                          "start": 156,
                          "end": 165
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 170,
                          "end": 176
                        },
                        "start": 167,
                        "end": 176
                      },
                      "start": 155,
                      "end": 176
                    },
                    "start": 153,
                    "end": 176
                  },
                  "start": 145,
                  "end": 176
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "callback",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 188,
                        "end": 196
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "hi",
                          "raw": "'hi'",
                          "start": 197,
                          "end": 201
                        }
                      ],
                      "optional": false,
                      "start": 188,
                      "end": 202
                    },
                    "directive": null,
                    "start": 188,
                    "end": 203
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "callback",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 212,
                        "end": 220
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "bye",
                          "raw": "'bye'",
                          "start": 221,
                          "end": 226
                        }
                      ],
                      "optional": false,
                      "start": 212,
                      "end": 227
                    },
                    "directive": null,
                    "start": 212,
                    "end": 228
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
                          "name": "hm",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 241,
                          "end": 243
                        },
                        "init": {
                          "type": "Literal",
                          "value": "hm",
                          "raw": "\"hm\"",
                          "start": 246,
                          "end": 250
                        },
                        "definite": false,
                        "start": 241,
                        "end": 250
                      }
                    ],
                    "declare": false,
                    "start": 237,
                    "end": 251
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "callback",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 260,
                        "end": 268
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "hm",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 269,
                          "end": 271
                        }
                      ],
                      "optional": false,
                      "start": 260,
                      "end": 272
                    },
                    "directive": null,
                    "start": 260,
                    "end": 273
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "callback",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 282,
                        "end": 290
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 291,
                          "end": 292
                        }
                      ],
                      "optional": false,
                      "start": 282,
                      "end": 293
                    },
                    "directive": null,
                    "start": 282,
                    "end": 294
                  }
                ],
                "start": 178,
                "end": 309
              },
              "expression": false,
              "start": 133,
              "end": 309
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 131,
            "end": 309
          }
        ],
        "start": 75,
        "end": 311
      },
      "abstract": false,
      "declare": false,
      "start": 67,
      "end": 311
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 320,
                  "end": 321
                },
                "typeArguments": null,
                "start": 320,
                "end": 321
              },
              "start": 318,
              "end": 321
            },
            "start": 317,
            "end": 321
          },
          "init": null,
          "definite": false,
          "start": 317,
          "end": 321
        }
      ],
      "declare": false,
      "start": 313,
      "end": 322
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 323,
            "end": 324
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null,
            "start": 325,
            "end": 327
          },
          "optional": false,
          "computed": false,
          "start": 323,
          "end": 327
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 328,
            "end": 329
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
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "hi",
                      "raw": "'hi'",
                      "start": 335,
                      "end": 339
                    },
                    "start": 335,
                    "end": 339
                  },
                  "start": 333,
                  "end": 339
                },
                "start": 332,
                "end": 339
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
                    "value": 1,
                    "raw": "1",
                    "start": 353,
                    "end": 354
                  },
                  "start": 346,
                  "end": 355
                }
              ],
              "start": 344,
              "end": 357
            },
            "id": null,
            "generator": false,
            "start": 331,
            "end": 357
          }
        ],
        "optional": false,
        "start": 323,
        "end": 359
      },
      "directive": null,
      "start": 323,
      "end": 360
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 361,
            "end": 362
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null,
            "start": 363,
            "end": 365
          },
          "optional": false,
          "computed": false,
          "start": 361,
          "end": 365
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 366,
            "end": 367
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
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "bye",
                      "raw": "'bye'",
                      "start": 373,
                      "end": 378
                    },
                    "start": 373,
                    "end": 378
                  },
                  "start": 371,
                  "end": 378
                },
                "start": 370,
                "end": 378
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
                    "value": 1,
                    "raw": "1",
                    "start": 392,
                    "end": 393
                  },
                  "start": 385,
                  "end": 394
                }
              ],
              "start": 383,
              "end": 396
            },
            "id": null,
            "generator": false,
            "start": 369,
            "end": 396
          }
        ],
        "optional": false,
        "start": 361,
        "end": 398
      },
      "directive": null,
      "start": 361,
      "end": 399
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 400,
            "end": 401
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null,
            "start": 402,
            "end": 404
          },
          "optional": false,
          "computed": false,
          "start": 400,
          "end": 404
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 405,
            "end": 406
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 409,
                "end": 410
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
                    "value": 1,
                    "raw": "1",
                    "start": 424,
                    "end": 425
                  },
                  "start": 417,
                  "end": 426
                }
              ],
              "start": 415,
              "end": 428
            },
            "id": null,
            "generator": false,
            "start": 408,
            "end": 428
          }
        ],
        "optional": false,
        "start": 400,
        "end": 430
      },
      "directive": null,
      "start": 400,
      "end": 431
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 433,
            "end": 434
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null,
            "start": 435,
            "end": 437
          },
          "optional": false,
          "computed": false,
          "start": 433,
          "end": 437
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 438,
            "end": 439
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
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 445,
                    "end": 451
                  },
                  "start": 443,
                  "end": 451
                },
                "start": 442,
                "end": 451
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
                    "value": 1,
                    "raw": "1",
                    "start": 465,
                    "end": 466
                  },
                  "start": 458,
                  "end": 467
                }
              ],
              "start": 456,
              "end": 469
            },
            "id": null,
            "generator": false,
            "start": 441,
            "end": 469
          }
        ],
        "optional": false,
        "start": 433,
        "end": 471
      },
      "directive": null,
      "start": 433,
      "end": 472
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 472
}
```
