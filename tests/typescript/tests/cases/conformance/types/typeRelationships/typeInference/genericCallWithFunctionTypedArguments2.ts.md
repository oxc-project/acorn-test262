__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 175,
        "end": 178
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
              "start": 179,
              "end": 180
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 179,
            "end": 180
          }
        ],
        "start": 178,
        "end": 181
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
              "type": "TSConstructorType",
              "abstract": false,
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 192,
                        "end": 193
                      },
                      "typeArguments": null,
                      "start": 192,
                      "end": 193
                    },
                    "start": 190,
                    "end": 193
                  },
                  "start": 189,
                  "end": 193
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
                    "start": 198,
                    "end": 199
                  },
                  "typeArguments": null,
                  "start": 198,
                  "end": 199
                },
                "start": 195,
                "end": 199
              },
              "start": 185,
              "end": 199
            },
            "start": 183,
            "end": 199
          },
          "start": 182,
          "end": 199
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 218,
                "end": 219
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 220,
                  "end": 224
                }
              ],
              "start": 214,
              "end": 225
            },
            "start": 207,
            "end": 226
          }
        ],
        "start": 201,
        "end": 228
      },
      "expression": false,
      "start": 166,
      "end": 228
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 240,
        "end": 241
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 253,
                    "end": 254
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 253,
                  "end": 254
                }
              ],
              "start": 252,
              "end": 255
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
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 259,
                      "end": 260
                    },
                    "typeArguments": null,
                    "start": 259,
                    "end": 260
                  },
                  "start": 257,
                  "end": 260
                },
                "start": 256,
                "end": 260
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
                  "start": 263,
                  "end": 264
                },
                "typeArguments": null,
                "start": 263,
                "end": 264
              },
              "start": 261,
              "end": 264
            },
            "start": 248,
            "end": 265
          }
        ],
        "start": 242,
        "end": 267
      },
      "declare": false,
      "start": 230,
      "end": 267
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 278,
        "end": 280
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
        "start": 280,
        "end": 283
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                      "start": 298,
                      "end": 299
                    },
                    "typeArguments": null,
                    "start": 298,
                    "end": 299
                  },
                  "start": 296,
                  "end": 299
                },
                "start": 295,
                "end": 299
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
                  "start": 302,
                  "end": 303
                },
                "typeArguments": null,
                "start": 302,
                "end": 303
              },
              "start": 300,
              "end": 303
            },
            "start": 290,
            "end": 304
          }
        ],
        "start": 284,
        "end": 306
      },
      "declare": false,
      "start": 268,
      "end": 306
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
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 314,
                  "end": 315
                },
                "typeArguments": null,
                "start": 314,
                "end": 315
              },
              "start": 312,
              "end": 315
            },
            "start": 311,
            "end": 315
          },
          "init": null,
          "definite": false,
          "start": 311,
          "end": 315
        }
      ],
      "declare": false,
      "start": 307,
      "end": 316
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
            "name": "i2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 325,
                  "end": 327
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 328,
                      "end": 334
                    }
                  ],
                  "start": 327,
                  "end": 335
                },
                "start": 325,
                "end": 335
              },
              "start": 323,
              "end": 335
            },
            "start": 321,
            "end": 335
          },
          "init": null,
          "definite": false,
          "start": 321,
          "end": 335
        }
      ],
      "declare": false,
      "start": 317,
      "end": 336
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
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
                            "start": 355,
                            "end": 356
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 355,
                          "end": 356
                        }
                      ],
                      "start": 354,
                      "end": 357
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
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 361,
                              "end": 362
                            },
                            "typeArguments": null,
                            "start": 361,
                            "end": 362
                          },
                          "start": 359,
                          "end": 362
                        },
                        "start": 358,
                        "end": 362
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
                          "start": 365,
                          "end": 366
                        },
                        "typeArguments": null,
                        "start": 365,
                        "end": 366
                      },
                      "start": 363,
                      "end": 366
                    },
                    "start": 350,
                    "end": 367
                  }
                ],
                "start": 344,
                "end": 369
              },
              "start": 342,
              "end": 369
            },
            "start": 341,
            "end": 369
          },
          "init": null,
          "definite": false,
          "start": 341,
          "end": 369
        }
      ],
      "declare": false,
      "start": 337,
      "end": 369
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
            "name": "r",
            "optional": false,
            "typeAnnotation": null,
            "start": 375,
            "end": 376
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 379,
              "end": 382
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 383,
                "end": 384
              }
            ],
            "optional": false,
            "start": 379,
            "end": 385
          },
          "definite": false,
          "start": 375,
          "end": 385
        }
      ],
      "declare": false,
      "start": 371,
      "end": 386
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 398,
            "end": 400
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 403,
              "end": 406
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 407,
                  "end": 413
                }
              ],
              "start": 406,
              "end": 414
            },
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 415,
                "end": 416
              }
            ],
            "optional": false,
            "start": 403,
            "end": 417
          },
          "definite": false,
          "start": 398,
          "end": 417
        }
      ],
      "declare": false,
      "start": 394,
      "end": 418
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 434,
            "end": 436
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 439,
              "end": 442
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i2",
                "optional": false,
                "typeAnnotation": null,
                "start": 443,
                "end": 445
              }
            ],
            "optional": false,
            "start": 439,
            "end": 446
          },
          "definite": false,
          "start": 434,
          "end": 446
        }
      ],
      "declare": false,
      "start": 430,
      "end": 447
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
            "name": "r3b",
            "optional": false,
            "typeAnnotation": null,
            "start": 462,
            "end": 465
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 468,
              "end": 471
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 472,
                "end": 473
              }
            ],
            "optional": false,
            "start": 468,
            "end": 474
          },
          "definite": false,
          "start": 462,
          "end": 474
        }
      ],
      "declare": false,
      "start": 458,
      "end": 475
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 493,
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
              "name": "T",
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
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 501,
              "end": 502
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 501,
            "end": 502
          }
        ],
        "start": 497,
        "end": 503
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 507,
                "end": 508
              },
              "typeArguments": null,
              "start": 507,
              "end": 508
            },
            "start": 505,
            "end": 508
          },
          "start": 504,
          "end": 508
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSConstructorType",
              "abstract": false,
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 521,
                        "end": 522
                      },
                      "typeArguments": null,
                      "start": 521,
                      "end": 522
                    },
                    "start": 519,
                    "end": 522
                  },
                  "start": 518,
                  "end": 522
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
                    "start": 527,
                    "end": 528
                  },
                  "typeArguments": null,
                  "start": 527,
                  "end": 528
                },
                "start": 524,
                "end": 528
              },
              "start": 514,
              "end": 528
            },
            "start": 512,
            "end": 528
          },
          "start": 510,
          "end": 528
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": null,
                "start": 547,
                "end": 549
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 550,
                  "end": 551
                }
              ],
              "start": 543,
              "end": 552
            },
            "start": 536,
            "end": 553
          }
        ],
        "start": 530,
        "end": 555
      },
      "expression": false,
      "start": 484,
      "end": 555
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 561,
            "end": 563
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 566,
              "end": 570
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 571,
                "end": 572
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i2",
                "optional": false,
                "typeAnnotation": null,
                "start": 574,
                "end": 576
              }
            ],
            "optional": false,
            "start": 566,
            "end": 577
          },
          "definite": false,
          "start": 561,
          "end": 577
        }
      ],
      "declare": false,
      "start": 557,
      "end": 578
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
            "name": "r4b",
            "optional": false,
            "typeAnnotation": null,
            "start": 592,
            "end": 595
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 598,
              "end": 602
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 603,
                "end": 604
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 606,
                "end": 607
              }
            ],
            "optional": false,
            "start": 598,
            "end": 608
          },
          "definite": false,
          "start": 592,
          "end": 608
        }
      ],
      "declare": false,
      "start": 588,
      "end": 609
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
            "name": "r5",
            "optional": false,
            "typeAnnotation": null,
            "start": 621,
            "end": 623
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 626,
              "end": 630
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 631,
                "end": 632
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 634,
                "end": 635
              }
            ],
            "optional": false,
            "start": 626,
            "end": 636
          },
          "definite": false,
          "start": 621,
          "end": 636
        }
      ],
      "declare": false,
      "start": 617,
      "end": 637
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
            "name": "r6",
            "optional": false,
            "typeAnnotation": null,
            "start": 649,
            "end": 651
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 654,
              "end": 658
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 659,
                  "end": 665
                },
                {
                  "type": "TSStringKeyword",
                  "start": 667,
                  "end": 673
                }
              ],
              "start": 658,
              "end": 674
            },
            "arguments": [
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 675,
                "end": 677
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i2",
                "optional": false,
                "typeAnnotation": null,
                "start": 679,
                "end": 681
              }
            ],
            "optional": false,
            "start": 654,
            "end": 682
          },
          "definite": false,
          "start": 649,
          "end": 682
        }
      ],
      "declare": false,
      "start": 645,
      "end": 683
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 704,
        "end": 708
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
              "start": 709,
              "end": 710
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 709,
            "end": 710
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 712,
              "end": 713
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 712,
            "end": 713
          }
        ],
        "start": 708,
        "end": 714
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 718,
                "end": 719
              },
              "typeArguments": null,
              "start": 718,
              "end": 719
            },
            "start": 716,
            "end": 719
          },
          "start": 715,
          "end": 719
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSConstructorType",
              "abstract": false,
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 732,
                        "end": 733
                      },
                      "typeArguments": null,
                      "start": 732,
                      "end": 733
                    },
                    "start": 730,
                    "end": 733
                  },
                  "start": 729,
                  "end": 733
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
                    "start": 738,
                    "end": 739
                  },
                  "typeArguments": null,
                  "start": 738,
                  "end": 739
                },
                "start": 735,
                "end": 739
              },
              "start": 725,
              "end": 739
            },
            "start": 723,
            "end": 739
          },
          "start": 721,
          "end": 739
        },
        {
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
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 744,
                "end": 745
              },
              "typeArguments": null,
              "start": 744,
              "end": 745
            },
            "start": 742,
            "end": 745
          },
          "start": 741,
          "end": 745
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": null,
                "start": 764,
                "end": 766
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 767,
                  "end": 768
                }
              ],
              "start": 760,
              "end": 769
            },
            "start": 753,
            "end": 770
          }
        ],
        "start": 747,
        "end": 772
      },
      "expression": false,
      "start": 695,
      "end": 772
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
            "name": "r7",
            "optional": false,
            "typeAnnotation": null,
            "start": 778,
            "end": 780
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 783,
              "end": 787
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 788,
                "end": 792
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 794,
                "end": 795
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 797,
                "end": 799
              }
            ],
            "optional": false,
            "start": 783,
            "end": 800
          },
          "definite": false,
          "start": 778,
          "end": 800
        }
      ],
      "declare": false,
      "start": 774,
      "end": 801
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
            "name": "r7b",
            "optional": false,
            "typeAnnotation": null,
            "start": 813,
            "end": 816
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 819,
              "end": 823
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 824,
                "end": 828
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 830,
                "end": 831
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 833,
                "end": 835
              }
            ],
            "optional": false,
            "start": 819,
            "end": 836
          },
          "definite": false,
          "start": 813,
          "end": 836
        }
      ],
      "declare": false,
      "start": 809,
      "end": 837
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
            "name": "r8",
            "optional": false,
            "typeAnnotation": null,
            "start": 849,
            "end": 851
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 854,
              "end": 858
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 859,
                "end": 860
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i2",
                "optional": false,
                "typeAnnotation": null,
                "start": 862,
                "end": 864
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 866,
                "end": 867
              }
            ],
            "optional": false,
            "start": 854,
            "end": 868
          },
          "definite": false,
          "start": 849,
          "end": 868
        }
      ],
      "declare": false,
      "start": 845,
      "end": 869
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
            "name": "r9",
            "optional": false,
            "typeAnnotation": null,
            "start": 883,
            "end": 885
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 888,
              "end": 892
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 893,
                  "end": 899
                },
                {
                  "type": "TSStringKeyword",
                  "start": 901,
                  "end": 907
                }
              ],
              "start": 892,
              "end": 908
            },
            "arguments": [
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 909,
                "end": 911
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i2",
                "optional": false,
                "typeAnnotation": null,
                "start": 913,
                "end": 915
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 917,
                "end": 919
              }
            ],
            "optional": false,
            "start": 888,
            "end": 920
          },
          "definite": false,
          "start": 883,
          "end": 920
        }
      ],
      "declare": false,
      "start": 879,
      "end": 921
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 166,
  "end": 931
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 166,
    "end": 174,
    "range": [
      166,
      174
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 175,
    "end": 178,
    "range": [
      175,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 179,
    "end": 180,
    "range": [
      179,
      180
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 182,
    "end": 183,
    "range": [
      182,
      183
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 183,
    "end": 184,
    "range": [
      183,
      184
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 185,
    "end": 188,
    "range": [
      185,
      188
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 188,
    "end": 189,
    "range": [
      188,
      189
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 189,
    "end": 190,
    "range": [
      189,
      190
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 190,
    "end": 191,
    "range": [
      190,
      191
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 192,
    "end": 193,
    "range": [
      192,
      193
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 195,
    "end": 197,
    "range": [
      195,
      197
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 198,
    "end": 199,
    "range": [
      198,
      199
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 199,
    "end": 200,
    "range": [
      199,
      200
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 201,
    "end": 202,
    "range": [
      201,
      202
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 207,
    "end": 213,
    "range": [
      207,
      213
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 214,
    "end": 217,
    "range": [
      214,
      217
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 218,
    "end": 219,
    "range": [
      218,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 220,
    "end": 224,
    "range": [
      220,
      224
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 230,
    "end": 239,
    "range": [
      230,
      239
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 242,
    "end": 243,
    "range": [
      242,
      243
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 248,
    "end": 251,
    "range": [
      248,
      251
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 255,
    "end": 256,
    "range": [
      255,
      256
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 257,
    "end": 258,
    "range": [
      257,
      258
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
    "value": ")",
    "start": 260,
    "end": 261,
    "range": [
      260,
      261
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 261,
    "end": 262,
    "range": [
      261,
      262
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 263,
    "end": 264,
    "range": [
      263,
      264
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 264,
    "end": 265,
    "range": [
      264,
      265
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 266,
    "end": 267,
    "range": [
      266,
      267
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 268,
    "end": 277,
    "range": [
      268,
      277
    ]
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 278,
    "end": 280,
    "range": [
      278,
      280
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 280,
    "end": 281,
    "range": [
      280,
      281
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 281,
    "end": 282,
    "range": [
      281,
      282
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 282,
    "end": 283,
    "range": [
      282,
      283
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 284,
    "end": 285,
    "range": [
      284,
      285
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 290,
    "end": 293,
    "range": [
      290,
      293
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 294,
    "end": 295,
    "range": [
      294,
      295
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 295,
    "end": 296,
    "range": [
      295,
      296
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 296,
    "end": 297,
    "range": [
      296,
      297
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 298,
    "end": 299,
    "range": [
      298,
      299
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 299,
    "end": 300,
    "range": [
      299,
      300
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 300,
    "end": 301,
    "range": [
      300,
      301
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 302,
    "end": 303,
    "range": [
      302,
      303
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 303,
    "end": 304,
    "range": [
      303,
      304
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 305,
    "end": 306,
    "range": [
      305,
      306
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 307,
    "end": 310,
    "range": [
      307,
      310
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 311,
    "end": 312,
    "range": [
      311,
      312
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 312,
    "end": 313,
    "range": [
      312,
      313
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 314,
    "end": 315,
    "range": [
      314,
      315
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 315,
    "end": 316,
    "range": [
      315,
      316
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 317,
    "end": 320,
    "range": [
      317,
      320
    ]
  },
  {
    "type": "Identifier",
    "value": "i2",
    "start": 321,
    "end": 323,
    "range": [
      321,
      323
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 323,
    "end": 324,
    "range": [
      323,
      324
    ]
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 325,
    "end": 327,
    "range": [
      325,
      327
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 327,
    "end": 328,
    "range": [
      327,
      328
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 328,
    "end": 334,
    "range": [
      328,
      334
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 334,
    "end": 335,
    "range": [
      334,
      335
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 335,
    "end": 336,
    "range": [
      335,
      336
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 337,
    "end": 340,
    "range": [
      337,
      340
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 341,
    "end": 342,
    "range": [
      341,
      342
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 342,
    "end": 343,
    "range": [
      342,
      343
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 344,
    "end": 345,
    "range": [
      344,
      345
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 350,
    "end": 353,
    "range": [
      350,
      353
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 354,
    "end": 355,
    "range": [
      354,
      355
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 355,
    "end": 356,
    "range": [
      355,
      356
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 356,
    "end": 357,
    "range": [
      356,
      357
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 357,
    "end": 358,
    "range": [
      357,
      358
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 358,
    "end": 359,
    "range": [
      358,
      359
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 359,
    "end": 360,
    "range": [
      359,
      360
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 361,
    "end": 362,
    "range": [
      361,
      362
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 362,
    "end": 363,
    "range": [
      362,
      363
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 363,
    "end": 364,
    "range": [
      363,
      364
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 365,
    "end": 366,
    "range": [
      365,
      366
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 366,
    "end": 367,
    "range": [
      366,
      367
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 368,
    "end": 369,
    "range": [
      368,
      369
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 371,
    "end": 374,
    "range": [
      371,
      374
    ]
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 375,
    "end": 376,
    "range": [
      375,
      376
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 377,
    "end": 378,
    "range": [
      377,
      378
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 379,
    "end": 382,
    "range": [
      379,
      382
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 382,
    "end": 383,
    "range": [
      382,
      383
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 383,
    "end": 384,
    "range": [
      383,
      384
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 384,
    "end": 385,
    "range": [
      384,
      385
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 385,
    "end": 386,
    "range": [
      385,
      386
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 394,
    "end": 397,
    "range": [
      394,
      397
    ]
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 398,
    "end": 400,
    "range": [
      398,
      400
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 401,
    "end": 402,
    "range": [
      401,
      402
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 403,
    "end": 406,
    "range": [
      403,
      406
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 406,
    "end": 407,
    "range": [
      406,
      407
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 407,
    "end": 413,
    "range": [
      407,
      413
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 413,
    "end": 414,
    "range": [
      413,
      414
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 414,
    "end": 415,
    "range": [
      414,
      415
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 415,
    "end": 416,
    "range": [
      415,
      416
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 416,
    "end": 417,
    "range": [
      416,
      417
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 417,
    "end": 418,
    "range": [
      417,
      418
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 430,
    "end": 433,
    "range": [
      430,
      433
    ]
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 434,
    "end": 436,
    "range": [
      434,
      436
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 437,
    "end": 438,
    "range": [
      437,
      438
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 439,
    "end": 442,
    "range": [
      439,
      442
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  },
  {
    "type": "Identifier",
    "value": "i2",
    "start": 443,
    "end": 445,
    "range": [
      443,
      445
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 445,
    "end": 446,
    "range": [
      445,
      446
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 446,
    "end": 447,
    "range": [
      446,
      447
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 458,
    "end": 461,
    "range": [
      458,
      461
    ]
  },
  {
    "type": "Identifier",
    "value": "r3b",
    "start": 462,
    "end": 465,
    "range": [
      462,
      465
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 466,
    "end": 467,
    "range": [
      466,
      467
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 468,
    "end": 471,
    "range": [
      468,
      471
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 471,
    "end": 472,
    "range": [
      471,
      472
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 472,
    "end": 473,
    "range": [
      472,
      473
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 473,
    "end": 474,
    "range": [
      473,
      474
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 474,
    "end": 475,
    "range": [
      474,
      475
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 484,
    "end": 492,
    "range": [
      484,
      492
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 493,
    "end": 497,
    "range": [
      493,
      497
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 497,
    "end": 498,
    "range": [
      497,
      498
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 498,
    "end": 499,
    "range": [
      498,
      499
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 499,
    "end": 500,
    "range": [
      499,
      500
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 501,
    "end": 502,
    "range": [
      501,
      502
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 502,
    "end": 503,
    "range": [
      502,
      503
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 503,
    "end": 504,
    "range": [
      503,
      504
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 504,
    "end": 505,
    "range": [
      504,
      505
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 505,
    "end": 506,
    "range": [
      505,
      506
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 507,
    "end": 508,
    "range": [
      507,
      508
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 508,
    "end": 509,
    "range": [
      508,
      509
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 510,
    "end": 512,
    "range": [
      510,
      512
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 512,
    "end": 513,
    "range": [
      512,
      513
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 514,
    "end": 517,
    "range": [
      514,
      517
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 517,
    "end": 518,
    "range": [
      517,
      518
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 518,
    "end": 519,
    "range": [
      518,
      519
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 519,
    "end": 520,
    "range": [
      519,
      520
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 521,
    "end": 522,
    "range": [
      521,
      522
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 522,
    "end": 523,
    "range": [
      522,
      523
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 524,
    "end": 526,
    "range": [
      524,
      526
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 527,
    "end": 528,
    "range": [
      527,
      528
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 528,
    "end": 529,
    "range": [
      528,
      529
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 530,
    "end": 531,
    "range": [
      530,
      531
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 536,
    "end": 542,
    "range": [
      536,
      542
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 543,
    "end": 546,
    "range": [
      543,
      546
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 547,
    "end": 549,
    "range": [
      547,
      549
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 549,
    "end": 550,
    "range": [
      549,
      550
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 550,
    "end": 551,
    "range": [
      550,
      551
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 551,
    "end": 552,
    "range": [
      551,
      552
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 552,
    "end": 553,
    "range": [
      552,
      553
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 554,
    "end": 555,
    "range": [
      554,
      555
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 557,
    "end": 560,
    "range": [
      557,
      560
    ]
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 561,
    "end": 563,
    "range": [
      561,
      563
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 564,
    "end": 565,
    "range": [
      564,
      565
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 566,
    "end": 570,
    "range": [
      566,
      570
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 570,
    "end": 571,
    "range": [
      570,
      571
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 571,
    "end": 572,
    "range": [
      571,
      572
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 572,
    "end": 573,
    "range": [
      572,
      573
    ]
  },
  {
    "type": "Identifier",
    "value": "i2",
    "start": 574,
    "end": 576,
    "range": [
      574,
      576
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 576,
    "end": 577,
    "range": [
      576,
      577
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 577,
    "end": 578,
    "range": [
      577,
      578
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 588,
    "end": 591,
    "range": [
      588,
      591
    ]
  },
  {
    "type": "Identifier",
    "value": "r4b",
    "start": 592,
    "end": 595,
    "range": [
      592,
      595
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 596,
    "end": 597,
    "range": [
      596,
      597
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 598,
    "end": 602,
    "range": [
      598,
      602
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 602,
    "end": 603,
    "range": [
      602,
      603
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 603,
    "end": 604,
    "range": [
      603,
      604
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 604,
    "end": 605,
    "range": [
      604,
      605
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 606,
    "end": 607,
    "range": [
      606,
      607
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 607,
    "end": 608,
    "range": [
      607,
      608
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 608,
    "end": 609,
    "range": [
      608,
      609
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 617,
    "end": 620,
    "range": [
      617,
      620
    ]
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 621,
    "end": 623,
    "range": [
      621,
      623
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 624,
    "end": 625,
    "range": [
      624,
      625
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 626,
    "end": 630,
    "range": [
      626,
      630
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 630,
    "end": 631,
    "range": [
      630,
      631
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 631,
    "end": 632,
    "range": [
      631,
      632
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 632,
    "end": 633,
    "range": [
      632,
      633
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 634,
    "end": 635,
    "range": [
      634,
      635
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 635,
    "end": 636,
    "range": [
      635,
      636
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 636,
    "end": 637,
    "range": [
      636,
      637
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 645,
    "end": 648,
    "range": [
      645,
      648
    ]
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 649,
    "end": 651,
    "range": [
      649,
      651
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 652,
    "end": 653,
    "range": [
      652,
      653
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 654,
    "end": 658,
    "range": [
      654,
      658
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 658,
    "end": 659,
    "range": [
      658,
      659
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 659,
    "end": 665,
    "range": [
      659,
      665
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 665,
    "end": 666,
    "range": [
      665,
      666
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 667,
    "end": 673,
    "range": [
      667,
      673
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 673,
    "end": 674,
    "range": [
      673,
      674
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 674,
    "end": 675,
    "range": [
      674,
      675
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 675,
    "end": 677,
    "range": [
      675,
      677
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 677,
    "end": 678,
    "range": [
      677,
      678
    ]
  },
  {
    "type": "Identifier",
    "value": "i2",
    "start": 679,
    "end": 681,
    "range": [
      679,
      681
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 681,
    "end": 682,
    "range": [
      681,
      682
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 682,
    "end": 683,
    "range": [
      682,
      683
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 695,
    "end": 703,
    "range": [
      695,
      703
    ]
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 704,
    "end": 708,
    "range": [
      704,
      708
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 708,
    "end": 709,
    "range": [
      708,
      709
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 709,
    "end": 710,
    "range": [
      709,
      710
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 710,
    "end": 711,
    "range": [
      710,
      711
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 712,
    "end": 713,
    "range": [
      712,
      713
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 713,
    "end": 714,
    "range": [
      713,
      714
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 714,
    "end": 715,
    "range": [
      714,
      715
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 715,
    "end": 716,
    "range": [
      715,
      716
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 716,
    "end": 717,
    "range": [
      716,
      717
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 718,
    "end": 719,
    "range": [
      718,
      719
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 719,
    "end": 720,
    "range": [
      719,
      720
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 721,
    "end": 723,
    "range": [
      721,
      723
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 723,
    "end": 724,
    "range": [
      723,
      724
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 725,
    "end": 728,
    "range": [
      725,
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
    "value": "a",
    "start": 729,
    "end": 730,
    "range": [
      729,
      730
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 730,
    "end": 731,
    "range": [
      730,
      731
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 732,
    "end": 733,
    "range": [
      732,
      733
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 733,
    "end": 734,
    "range": [
      733,
      734
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 735,
    "end": 737,
    "range": [
      735,
      737
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 738,
    "end": 739,
    "range": [
      738,
      739
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 739,
    "end": 740,
    "range": [
      739,
      740
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 741,
    "end": 742,
    "range": [
      741,
      742
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 742,
    "end": 743,
    "range": [
      742,
      743
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 744,
    "end": 745,
    "range": [
      744,
      745
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 745,
    "end": 746,
    "range": [
      745,
      746
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 747,
    "end": 748,
    "range": [
      747,
      748
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 753,
    "end": 759,
    "range": [
      753,
      759
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 760,
    "end": 763,
    "range": [
      760,
      763
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 764,
    "end": 766,
    "range": [
      764,
      766
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 766,
    "end": 767,
    "range": [
      766,
      767
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 767,
    "end": 768,
    "range": [
      767,
      768
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 768,
    "end": 769,
    "range": [
      768,
      769
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 769,
    "end": 770,
    "range": [
      769,
      770
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 771,
    "end": 772,
    "range": [
      771,
      772
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 774,
    "end": 777,
    "range": [
      774,
      777
    ]
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 778,
    "end": 780,
    "range": [
      778,
      780
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 781,
    "end": 782,
    "range": [
      781,
      782
    ]
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 783,
    "end": 787,
    "range": [
      783,
      787
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 787,
    "end": 788,
    "range": [
      787,
      788
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 788,
    "end": 792,
    "range": [
      788,
      792
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 792,
    "end": 793,
    "range": [
      792,
      793
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 794,
    "end": 795,
    "range": [
      794,
      795
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 795,
    "end": 796,
    "range": [
      795,
      796
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 797,
    "end": 799,
    "range": [
      797,
      799
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 799,
    "end": 800,
    "range": [
      799,
      800
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 800,
    "end": 801,
    "range": [
      800,
      801
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 809,
    "end": 812,
    "range": [
      809,
      812
    ]
  },
  {
    "type": "Identifier",
    "value": "r7b",
    "start": 813,
    "end": 816,
    "range": [
      813,
      816
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 817,
    "end": 818,
    "range": [
      817,
      818
    ]
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 819,
    "end": 823,
    "range": [
      819,
      823
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 823,
    "end": 824,
    "range": [
      823,
      824
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 824,
    "end": 828,
    "range": [
      824,
      828
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 828,
    "end": 829,
    "range": [
      828,
      829
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 830,
    "end": 831,
    "range": [
      830,
      831
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 831,
    "end": 832,
    "range": [
      831,
      832
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 833,
    "end": 835,
    "range": [
      833,
      835
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 835,
    "end": 836,
    "range": [
      835,
      836
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 836,
    "end": 837,
    "range": [
      836,
      837
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 845,
    "end": 848,
    "range": [
      845,
      848
    ]
  },
  {
    "type": "Identifier",
    "value": "r8",
    "start": 849,
    "end": 851,
    "range": [
      849,
      851
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 852,
    "end": 853,
    "range": [
      852,
      853
    ]
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 854,
    "end": 858,
    "range": [
      854,
      858
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 858,
    "end": 859,
    "range": [
      858,
      859
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 859,
    "end": 860,
    "range": [
      859,
      860
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 860,
    "end": 861,
    "range": [
      860,
      861
    ]
  },
  {
    "type": "Identifier",
    "value": "i2",
    "start": 862,
    "end": 864,
    "range": [
      862,
      864
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 864,
    "end": 865,
    "range": [
      864,
      865
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 866,
    "end": 867,
    "range": [
      866,
      867
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 867,
    "end": 868,
    "range": [
      867,
      868
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 868,
    "end": 869,
    "range": [
      868,
      869
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 879,
    "end": 882,
    "range": [
      879,
      882
    ]
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 883,
    "end": 885,
    "range": [
      883,
      885
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 886,
    "end": 887,
    "range": [
      886,
      887
    ]
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 888,
    "end": 892,
    "range": [
      888,
      892
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 892,
    "end": 893,
    "range": [
      892,
      893
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 893,
    "end": 899,
    "range": [
      893,
      899
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 899,
    "end": 900,
    "range": [
      899,
      900
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 901,
    "end": 907,
    "range": [
      901,
      907
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 907,
    "end": 908,
    "range": [
      907,
      908
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 908,
    "end": 909,
    "range": [
      908,
      909
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 909,
    "end": 911,
    "range": [
      909,
      911
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 911,
    "end": 912,
    "range": [
      911,
      912
    ]
  },
  {
    "type": "Identifier",
    "value": "i2",
    "start": 913,
    "end": 915,
    "range": [
      913,
      915
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 915,
    "end": 916,
    "range": [
      915,
      916
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 917,
    "end": 919,
    "range": [
      917,
      919
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 919,
    "end": 920,
    "range": [
      919,
      920
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 920,
    "end": 921,
    "range": [
      920,
      921
    ]
  }
]
```
