__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "describe",
          "optional": false,
          "typeAnnotation": null,
          "start": 0,
          "end": 8
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "my test suite",
            "raw": "\"my test suite\"",
            "start": 9,
            "end": 24
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
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
                      "name": "it",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 38,
                      "end": 40
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "should run",
                        "raw": "\"should run\"",
                        "start": 41,
                        "end": 53
                      },
                      {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "VariableDeclaration",
                              "kind": "const",
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 77,
                                    "end": 78
                                  },
                                  "init": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "$",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 81,
                                      "end": 82
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Literal",
                                        "value": ".thing",
                                        "raw": "\".thing\"",
                                        "start": 83,
                                        "end": 91
                                      }
                                    ],
                                    "optional": false,
                                    "start": 81,
                                    "end": 92
                                  },
                                  "definite": false,
                                  "start": 77,
                                  "end": 92
                                }
                              ],
                              "declare": false,
                              "start": 71,
                              "end": 93
                            }
                          ],
                          "start": 61,
                          "end": 99
                        },
                        "id": null,
                        "generator": false,
                        "start": 55,
                        "end": 99
                      }
                    ],
                    "optional": false,
                    "start": 38,
                    "end": 100
                  },
                  "directive": null,
                  "start": 38,
                  "end": 101
                }
              ],
              "start": 32,
              "end": 103
            },
            "id": null,
            "generator": false,
            "start": 26,
            "end": 103
          }
        ],
        "optional": false,
        "start": 0,
        "end": 104
      },
      "directive": null,
      "start": 0,
      "end": 105
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "suite",
          "optional": false,
          "typeAnnotation": null,
          "start": 107,
          "end": 112
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "another suite",
            "raw": "\"another suite\"",
            "start": 113,
            "end": 128
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
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
                      "name": "test",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 142,
                      "end": 146
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "everything else",
                        "raw": "\"everything else\"",
                        "start": 147,
                        "end": 164
                      },
                      {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "console",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 182,
                                    "end": 189
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "log",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 190,
                                    "end": 193
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 182,
                                  "end": 193
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "process",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 194,
                                      "end": 201
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "env",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 202,
                                      "end": 205
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 194,
                                    "end": 205
                                  }
                                ],
                                "optional": false,
                                "start": 182,
                                "end": 206
                              },
                              "directive": null,
                              "start": 182,
                              "end": 207
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
                                    "name": "document",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 216,
                                    "end": 224
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "createElement",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 225,
                                    "end": 238
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 216,
                                  "end": 238
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "value": "div",
                                    "raw": "\"div\"",
                                    "start": 239,
                                    "end": 244
                                  }
                                ],
                                "optional": false,
                                "start": 216,
                                "end": 245
                              },
                              "directive": null,
                              "start": 216,
                              "end": 246
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
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 262,
                                    "end": 263
                                  },
                                  "init": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "require",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 266,
                                      "end": 273
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Literal",
                                        "value": "fs",
                                        "raw": "\"fs\"",
                                        "start": 274,
                                        "end": 278
                                      }
                                    ],
                                    "optional": false,
                                    "start": 266,
                                    "end": 279
                                  },
                                  "definite": false,
                                  "start": 262,
                                  "end": 279
                                }
                              ],
                              "declare": false,
                              "start": 256,
                              "end": 280
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
                                    "name": "y",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 295,
                                    "end": 296
                                  },
                                  "init": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Buffer",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 299,
                                        "end": 305
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "from",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 306,
                                        "end": 310
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 299,
                                      "end": 310
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "ArrayExpression",
                                        "elements": [],
                                        "start": 311,
                                        "end": 313
                                      }
                                    ],
                                    "optional": false,
                                    "start": 299,
                                    "end": 314
                                  },
                                  "definite": false,
                                  "start": 295,
                                  "end": 314
                                }
                              ],
                              "declare": false,
                              "start": 289,
                              "end": 315
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
                                    "name": "z",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 330,
                                    "end": 331
                                  },
                                  "init": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "module",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 334,
                                      "end": 340
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "exports",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 341,
                                      "end": 348
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 334,
                                    "end": 348
                                  },
                                  "definite": false,
                                  "start": 330,
                                  "end": 348
                                }
                              ],
                              "declare": false,
                              "start": 324,
                              "end": 349
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
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 365,
                                    "end": 366
                                  },
                                  "init": {
                                    "type": "NewExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Map",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 373,
                                      "end": 376
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "start": 369,
                                    "end": 378
                                  },
                                  "definite": false,
                                  "start": 365,
                                  "end": 378
                                }
                              ],
                              "declare": false,
                              "start": 359,
                              "end": 379
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
                                    "name": "b",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 394,
                                    "end": 395
                                  },
                                  "init": {
                                    "type": "NewExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Set",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 402,
                                      "end": 405
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "start": 398,
                                    "end": 407
                                  },
                                  "definite": false,
                                  "start": 394,
                                  "end": 407
                                }
                              ],
                              "declare": false,
                              "start": 388,
                              "end": 408
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
                                    "name": "c",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 423,
                                    "end": 424
                                  },
                                  "init": {
                                    "type": "NewExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "WeakMap",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 431,
                                      "end": 438
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "start": 427,
                                    "end": 440
                                  },
                                  "definite": false,
                                  "start": 423,
                                  "end": 440
                                }
                              ],
                              "declare": false,
                              "start": 417,
                              "end": 441
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
                                    "name": "d",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 456,
                                    "end": 457
                                  },
                                  "init": {
                                    "type": "NewExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "WeakSet",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 464,
                                      "end": 471
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "start": 460,
                                    "end": 473
                                  },
                                  "definite": false,
                                  "start": 456,
                                  "end": 473
                                }
                              ],
                              "declare": false,
                              "start": 450,
                              "end": 474
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
                                    "name": "e",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 489,
                                    "end": 490
                                  },
                                  "init": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Symbol",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 493,
                                      "end": 499
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "optional": false,
                                    "start": 493,
                                    "end": 501
                                  },
                                  "definite": false,
                                  "start": 489,
                                  "end": 501
                                }
                              ],
                              "declare": false,
                              "start": 483,
                              "end": 502
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
                                    "name": "f",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 517,
                                    "end": 518
                                  },
                                  "init": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Promise",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 521,
                                        "end": 528
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "resolve",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 529,
                                        "end": 536
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 521,
                                      "end": 536
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Literal",
                                        "value": 0,
                                        "raw": "0",
                                        "start": 537,
                                        "end": 538
                                      }
                                    ],
                                    "optional": false,
                                    "start": 521,
                                    "end": 539
                                  },
                                  "definite": false,
                                  "start": 517,
                                  "end": 539
                                }
                              ],
                              "declare": false,
                              "start": 511,
                              "end": 540
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
                                    "name": "i",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Iterator",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 559,
                                          "end": 567
                                        },
                                        "typeArguments": {
                                          "type": "TSTypeParameterInstantiation",
                                          "params": [
                                            {
                                              "type": "TSAnyKeyword",
                                              "start": 568,
                                              "end": 571
                                            }
                                          ],
                                          "start": 567,
                                          "end": 572
                                        },
                                        "start": 559,
                                        "end": 572
                                      },
                                      "start": 557,
                                      "end": 572
                                    },
                                    "start": 556,
                                    "end": 572
                                  },
                                  "init": {
                                    "type": "TSAsExpression",
                                    "expression": {
                                      "type": "Literal",
                                      "value": null,
                                      "raw": "null",
                                      "start": 575,
                                      "end": 579
                                    },
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 583,
                                      "end": 586
                                    },
                                    "start": 575,
                                    "end": 586
                                  },
                                  "definite": false,
                                  "start": 556,
                                  "end": 586
                                }
                              ],
                              "declare": false,
                              "start": 550,
                              "end": 587
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
                                    "name": "j",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "AsyncIterator",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 605,
                                          "end": 618
                                        },
                                        "typeArguments": {
                                          "type": "TSTypeParameterInstantiation",
                                          "params": [
                                            {
                                              "type": "TSAnyKeyword",
                                              "start": 619,
                                              "end": 622
                                            }
                                          ],
                                          "start": 618,
                                          "end": 623
                                        },
                                        "start": 605,
                                        "end": 623
                                      },
                                      "start": 603,
                                      "end": 623
                                    },
                                    "start": 602,
                                    "end": 623
                                  },
                                  "init": {
                                    "type": "TSAsExpression",
                                    "expression": {
                                      "type": "Literal",
                                      "value": null,
                                      "raw": "null",
                                      "start": 626,
                                      "end": 630
                                    },
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 634,
                                      "end": 637
                                    },
                                    "start": 626,
                                    "end": 637
                                  },
                                  "definite": false,
                                  "start": 602,
                                  "end": 637
                                }
                              ],
                              "declare": false,
                              "start": 596,
                              "end": 638
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
                                    "name": "k",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Symbol",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 656,
                                          "end": 662
                                        },
                                        "typeArguments": null,
                                        "start": 656,
                                        "end": 662
                                      },
                                      "start": 654,
                                      "end": 662
                                    },
                                    "start": 653,
                                    "end": 662
                                  },
                                  "init": {
                                    "type": "TSAsExpression",
                                    "expression": {
                                      "type": "Literal",
                                      "value": null,
                                      "raw": "null",
                                      "start": 665,
                                      "end": 669
                                    },
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 673,
                                      "end": 676
                                    },
                                    "start": 665,
                                    "end": 676
                                  },
                                  "definite": false,
                                  "start": 653,
                                  "end": 676
                                }
                              ],
                              "declare": false,
                              "start": 647,
                              "end": 677
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
                                    "name": "l",
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
                                          "start": 695,
                                          "end": 702
                                        },
                                        "typeArguments": {
                                          "type": "TSTypeParameterInstantiation",
                                          "params": [
                                            {
                                              "type": "TSAnyKeyword",
                                              "start": 703,
                                              "end": 706
                                            }
                                          ],
                                          "start": 702,
                                          "end": 707
                                        },
                                        "start": 695,
                                        "end": 707
                                      },
                                      "start": 693,
                                      "end": 707
                                    },
                                    "start": 692,
                                    "end": 707
                                  },
                                  "init": {
                                    "type": "TSAsExpression",
                                    "expression": {
                                      "type": "Literal",
                                      "value": null,
                                      "raw": "null",
                                      "start": 710,
                                      "end": 714
                                    },
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 718,
                                      "end": 721
                                    },
                                    "start": 710,
                                    "end": 721
                                  },
                                  "definite": false,
                                  "start": 692,
                                  "end": 721
                                }
                              ],
                              "declare": false,
                              "start": 686,
                              "end": 722
                            }
                          ],
                          "start": 172,
                          "end": 728
                        },
                        "id": null,
                        "generator": false,
                        "start": 166,
                        "end": 728
                      }
                    ],
                    "optional": false,
                    "start": 142,
                    "end": 729
                  },
                  "directive": null,
                  "start": 142,
                  "end": 730
                }
              ],
              "start": 136,
              "end": 732
            },
            "id": null,
            "generator": false,
            "start": 130,
            "end": 732
          }
        ],
        "optional": false,
        "start": 107,
        "end": 733
      },
      "directive": null,
      "start": 107,
      "end": 734
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 734
}
```
