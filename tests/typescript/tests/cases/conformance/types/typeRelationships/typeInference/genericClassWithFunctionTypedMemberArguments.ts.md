__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ImmediatelyFix",
        "optional": false,
        "typeAnnotation": null,
        "start": 165,
        "end": 179
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 192,
              "end": 193
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
              "start": 193,
              "end": 196
            },
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 207,
                    "end": 210
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
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
                            "start": 211,
                            "end": 212
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 211,
                          "end": 212
                        }
                      ],
                      "start": 210,
                      "end": 213
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
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 221,
                                      "end": 222
                                    },
                                    "typeArguments": null,
                                    "start": 221,
                                    "end": 222
                                  },
                                  "start": 219,
                                  "end": 222
                                },
                                "start": 218,
                                "end": 222
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
                                  "start": 227,
                                  "end": 228
                                },
                                "typeArguments": null,
                                "start": 227,
                                "end": 228
                              },
                              "start": 224,
                              "end": 228
                            },
                            "start": 217,
                            "end": 228
                          },
                          "start": 215,
                          "end": 228
                        },
                        "start": 214,
                        "end": 228
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
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 251,
                              "end": 252
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 253,
                                "end": 257
                              }
                            ],
                            "optional": false,
                            "start": 251,
                            "end": 258
                          },
                          "start": 244,
                          "end": 259
                        }
                      ],
                      "start": 230,
                      "end": 269
                    },
                    "expression": false,
                    "start": 210,
                    "end": 269
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 207,
                  "end": 269
                }
              ],
              "start": 197,
              "end": 275
            },
            "abstract": false,
            "declare": false,
            "start": 186,
            "end": 275
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
                  "start": 285,
                  "end": 286
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 293,
                    "end": 294
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 295,
                        "end": 301
                      }
                    ],
                    "start": 294,
                    "end": 302
                  },
                  "arguments": [],
                  "start": 289,
                  "end": 304
                },
                "definite": false,
                "start": 285,
                "end": 304
              }
            ],
            "declare": false,
            "start": 281,
            "end": 305
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
                  "start": 314,
                  "end": 315
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 318,
                      "end": 319
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 320,
                      "end": 323
                    },
                    "optional": false,
                    "computed": false,
                    "start": 318,
                    "end": 323
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
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
                              "start": 325,
                              "end": 326
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 325,
                            "end": 326
                          }
                        ],
                        "start": 324,
                        "end": 327
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
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 331,
                                "end": 332
                              },
                              "typeArguments": null,
                              "start": 331,
                              "end": 332
                            },
                            "start": 329,
                            "end": 332
                          },
                          "start": 328,
                          "end": 332
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": "",
                        "raw": "''",
                        "start": 337,
                        "end": 339
                      },
                      "id": null,
                      "generator": false,
                      "start": 324,
                      "end": 339
                    }
                  ],
                  "optional": false,
                  "start": 318,
                  "end": 340
                },
                "definite": false,
                "start": 314,
                "end": 340
              }
            ],
            "declare": false,
            "start": 310,
            "end": 341
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
                  "start": 356,
                  "end": 358
                },
                "init": {
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
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 363,
                      "end": 366
                    },
                    "optional": false,
                    "computed": false,
                    "start": 361,
                    "end": 366
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 367,
                        "end": 373
                      }
                    ],
                    "start": 366,
                    "end": 374
                  },
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
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
                              "start": 376,
                              "end": 377
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 376,
                            "end": 377
                          }
                        ],
                        "start": 375,
                        "end": 378
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
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 382,
                                "end": 383
                              },
                              "typeArguments": null,
                              "start": 382,
                              "end": 383
                            },
                            "start": 380,
                            "end": 383
                          },
                          "start": 379,
                          "end": 383
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": "",
                        "raw": "''",
                        "start": 388,
                        "end": 390
                      },
                      "id": null,
                      "generator": false,
                      "start": 375,
                      "end": 390
                    }
                  ],
                  "optional": false,
                  "start": 361,
                  "end": 391
                },
                "definite": false,
                "start": 356,
                "end": 391
              }
            ],
            "declare": false,
            "start": 352,
            "end": 392
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
                  "start": 412,
                  "end": 414
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 417,
                      "end": 418
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 419,
                      "end": 422
                    },
                    "optional": false,
                    "computed": false,
                    "start": 417,
                    "end": 422
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 423,
                          "end": 424
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": "",
                        "raw": "''",
                        "start": 428,
                        "end": 430
                      },
                      "id": null,
                      "generator": false,
                      "start": 423,
                      "end": 430
                    }
                  ],
                  "optional": false,
                  "start": 417,
                  "end": 431
                },
                "definite": false,
                "start": 412,
                "end": 431
              }
            ],
            "declare": false,
            "start": 408,
            "end": 432
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C2",
              "optional": false,
              "typeAnnotation": null,
              "start": 450,
              "end": 452
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
                    "start": 453,
                    "end": 454
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 453,
                  "end": 454
                }
              ],
              "start": 452,
              "end": 455
            },
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 466,
                    "end": 469
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
                        "name": "x",
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
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 477,
                                      "end": 478
                                    },
                                    "typeArguments": null,
                                    "start": 477,
                                    "end": 478
                                  },
                                  "start": 475,
                                  "end": 478
                                },
                                "start": 474,
                                "end": 478
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
                                  "start": 483,
                                  "end": 484
                                },
                                "typeArguments": null,
                                "start": 483,
                                "end": 484
                              },
                              "start": 480,
                              "end": 484
                            },
                            "start": 473,
                            "end": 484
                          },
                          "start": 471,
                          "end": 484
                        },
                        "start": 470,
                        "end": 484
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
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 507,
                              "end": 508
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 509,
                                "end": 513
                              }
                            ],
                            "optional": false,
                            "start": 507,
                            "end": 514
                          },
                          "start": 500,
                          "end": 515
                        }
                      ],
                      "start": 486,
                      "end": 525
                    },
                    "expression": false,
                    "start": 469,
                    "end": 525
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 466,
                  "end": 525
                }
              ],
              "start": 456,
              "end": 531
            },
            "abstract": false,
            "declare": false,
            "start": 444,
            "end": 531
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
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 541,
                  "end": 543
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 550,
                    "end": 552
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 553,
                        "end": 559
                      }
                    ],
                    "start": 552,
                    "end": 560
                  },
                  "arguments": [],
                  "start": 546,
                  "end": 562
                },
                "definite": false,
                "start": 541,
                "end": 562
              }
            ],
            "declare": false,
            "start": 537,
            "end": 563
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
                  "name": "ra",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 572,
                  "end": 574
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 577,
                      "end": 579
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 580,
                      "end": 583
                    },
                    "optional": false,
                    "computed": false,
                    "start": 577,
                    "end": 583
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
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
                              "start": 585,
                              "end": 586
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 585,
                            "end": 586
                          }
                        ],
                        "start": 584,
                        "end": 587
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
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 591,
                                "end": 592
                              },
                              "typeArguments": null,
                              "start": 591,
                              "end": 592
                            },
                            "start": 589,
                            "end": 592
                          },
                          "start": 588,
                          "end": 592
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 597,
                        "end": 598
                      },
                      "id": null,
                      "generator": false,
                      "start": 584,
                      "end": 598
                    }
                  ],
                  "optional": false,
                  "start": 577,
                  "end": 599
                },
                "definite": false,
                "start": 572,
                "end": 599
              }
            ],
            "declare": false,
            "start": 568,
            "end": 600
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
                  "name": "r3a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 619,
                  "end": 622
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 625,
                      "end": 627
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 628,
                      "end": 631
                    },
                    "optional": false,
                    "computed": false,
                    "start": 625,
                    "end": 631
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 632,
                          "end": 633
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 637,
                        "end": 638
                      },
                      "id": null,
                      "generator": false,
                      "start": 632,
                      "end": 638
                    }
                  ],
                  "optional": false,
                  "start": 625,
                  "end": 639
                },
                "definite": false,
                "start": 619,
                "end": 639
              }
            ],
            "declare": false,
            "start": 615,
            "end": 640
          }
        ],
        "start": 180,
        "end": 652
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 155,
      "end": 652
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WithCandidates",
        "optional": false,
        "typeAnnotation": null,
        "start": 664,
        "end": 678
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 691,
              "end": 692
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
                    "start": 693,
                    "end": 694
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 693,
                  "end": 694
                }
              ],
              "start": 692,
              "end": 695
            },
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
                    "name": "foo2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 706,
                    "end": 710
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
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
                            "start": 711,
                            "end": 712
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 711,
                          "end": 712
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 714,
                            "end": 715
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 714,
                          "end": 715
                        }
                      ],
                      "start": 710,
                      "end": 716
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
                              "start": 720,
                              "end": 721
                            },
                            "typeArguments": null,
                            "start": 720,
                            "end": 721
                          },
                          "start": 718,
                          "end": 721
                        },
                        "start": 717,
                        "end": 721
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
                                      "start": 731,
                                      "end": 732
                                    },
                                    "typeArguments": null,
                                    "start": 731,
                                    "end": 732
                                  },
                                  "start": 729,
                                  "end": 732
                                },
                                "start": 728,
                                "end": 732
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
                                  "start": 737,
                                  "end": 738
                                },
                                "typeArguments": null,
                                "start": 737,
                                "end": 738
                              },
                              "start": 734,
                              "end": 738
                            },
                            "start": 727,
                            "end": 738
                          },
                          "start": 725,
                          "end": 738
                        },
                        "start": 723,
                        "end": 738
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
                              "type": "Identifier",
                              "decorators": [],
                              "name": "cb",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 761,
                              "end": 763
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 764,
                                "end": 765
                              }
                            ],
                            "optional": false,
                            "start": 761,
                            "end": 766
                          },
                          "start": 754,
                          "end": 767
                        }
                      ],
                      "start": 740,
                      "end": 777
                    },
                    "expression": false,
                    "start": 710,
                    "end": 777
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 706,
                  "end": 777
                }
              ],
              "start": 696,
              "end": 783
            },
            "abstract": false,
            "declare": false,
            "start": 685,
            "end": 783
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
                        "start": 796,
                        "end": 797
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 798,
                            "end": 804
                          }
                        ],
                        "start": 797,
                        "end": 805
                      },
                      "start": 796,
                      "end": 805
                    },
                    "start": 794,
                    "end": 805
                  },
                  "start": 793,
                  "end": 805
                },
                "init": null,
                "definite": false,
                "start": 793,
                "end": 805
              }
            ],
            "declare": false,
            "start": 789,
            "end": 806
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
                  "start": 815,
                  "end": 817
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 820,
                      "end": 821
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 822,
                      "end": 826
                    },
                    "optional": false,
                    "computed": false,
                    "start": 820,
                    "end": 826
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 827,
                      "end": 828
                    },
                    {
                      "type": "FunctionExpression",
                      "id": null,
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
                              "name": "Z",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 840,
                              "end": 841
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 840,
                            "end": 841
                          }
                        ],
                        "start": 839,
                        "end": 842
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
                                "name": "Z",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 846,
                                "end": 847
                              },
                              "typeArguments": null,
                              "start": 846,
                              "end": 847
                            },
                            "start": 844,
                            "end": 847
                          },
                          "start": 843,
                          "end": 847
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
                              "value": "",
                              "raw": "''",
                              "start": 858,
                              "end": 860
                            },
                            "start": 851,
                            "end": 860
                          }
                        ],
                        "start": 849,
                        "end": 862
                      },
                      "expression": false,
                      "start": 830,
                      "end": 862
                    }
                  ],
                  "optional": false,
                  "start": 820,
                  "end": 863
                },
                "definite": false,
                "start": 815,
                "end": 863
              }
            ],
            "declare": false,
            "start": 811,
            "end": 864
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
                  "start": 951,
                  "end": 953
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 956,
                      "end": 957
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 958,
                      "end": 962
                    },
                    "optional": false,
                    "computed": false,
                    "start": 956,
                    "end": 962
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 963,
                      "end": 964
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 967,
                          "end": 968
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": "",
                        "raw": "''",
                        "start": 973,
                        "end": 975
                      },
                      "id": null,
                      "generator": false,
                      "start": 966,
                      "end": 975
                    }
                  ],
                  "optional": false,
                  "start": 956,
                  "end": 976
                },
                "definite": false,
                "start": 951,
                "end": 976
              }
            ],
            "declare": false,
            "start": 947,
            "end": 977
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
                  "start": 996,
                  "end": 998
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1001,
                      "end": 1002
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1003,
                      "end": 1007
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1001,
                    "end": 1007
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 1008,
                        "end": 1014
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 1016,
                        "end": 1022
                      }
                    ],
                    "start": 1007,
                    "end": 1023
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 1024,
                      "end": 1026
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Z",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1029,
                              "end": 1030
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1029,
                            "end": 1030
                          }
                        ],
                        "start": 1028,
                        "end": 1031
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
                                "name": "Z",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1035,
                                "end": 1036
                              },
                              "typeArguments": null,
                              "start": 1035,
                              "end": 1036
                            },
                            "start": 1033,
                            "end": 1036
                          },
                          "start": 1032,
                          "end": 1036
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1041,
                        "end": 1042
                      },
                      "id": null,
                      "generator": false,
                      "start": 1028,
                      "end": 1042
                    }
                  ],
                  "optional": false,
                  "start": 1001,
                  "end": 1043
                },
                "definite": false,
                "start": 996,
                "end": 1043
              }
            ],
            "declare": false,
            "start": 992,
            "end": 1044
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1066,
              "end": 1068
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
                    "start": 1069,
                    "end": 1070
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1069,
                  "end": 1070
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1072,
                    "end": 1073
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1072,
                  "end": 1073
                }
              ],
              "start": 1068,
              "end": 1074
            },
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
                    "name": "foo3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1085,
                    "end": 1089
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
                              "start": 1093,
                              "end": 1094
                            },
                            "typeArguments": null,
                            "start": 1093,
                            "end": 1094
                          },
                          "start": 1091,
                          "end": 1094
                        },
                        "start": 1090,
                        "end": 1094
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
                                      "start": 1104,
                                      "end": 1105
                                    },
                                    "typeArguments": null,
                                    "start": 1104,
                                    "end": 1105
                                  },
                                  "start": 1102,
                                  "end": 1105
                                },
                                "start": 1101,
                                "end": 1105
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
                                  "start": 1110,
                                  "end": 1111
                                },
                                "typeArguments": null,
                                "start": 1110,
                                "end": 1111
                              },
                              "start": 1107,
                              "end": 1111
                            },
                            "start": 1100,
                            "end": 1111
                          },
                          "start": 1098,
                          "end": 1111
                        },
                        "start": 1096,
                        "end": 1111
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
                        "start": 1113,
                        "end": 1117
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
                              "type": "Identifier",
                              "decorators": [],
                              "name": "cb",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1140,
                              "end": 1142
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1143,
                                "end": 1144
                              }
                            ],
                            "optional": false,
                            "start": 1140,
                            "end": 1145
                          },
                          "start": 1133,
                          "end": 1146
                        }
                      ],
                      "start": 1119,
                      "end": 1156
                    },
                    "expression": false,
                    "start": 1089,
                    "end": 1156
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1085,
                  "end": 1156
                }
              ],
              "start": 1075,
              "end": 1162
            },
            "abstract": false,
            "declare": false,
            "start": 1060,
            "end": 1162
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
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1176,
                        "end": 1178
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 1179,
                            "end": 1185
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 1187,
                            "end": 1193
                          }
                        ],
                        "start": 1178,
                        "end": 1194
                      },
                      "start": 1176,
                      "end": 1194
                    },
                    "start": 1174,
                    "end": 1194
                  },
                  "start": 1172,
                  "end": 1194
                },
                "init": null,
                "definite": false,
                "start": 1172,
                "end": 1194
              }
            ],
            "declare": false,
            "start": 1168,
            "end": 1195
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
                  "start": 1204,
                  "end": 1206
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1209,
                      "end": 1211
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1212,
                      "end": 1216
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1209,
                    "end": 1216
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1217,
                      "end": 1218
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Z",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1221,
                              "end": 1222
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1221,
                            "end": 1222
                          }
                        ],
                        "start": 1220,
                        "end": 1223
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
                                "name": "Z",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1227,
                                "end": 1228
                              },
                              "typeArguments": null,
                              "start": 1227,
                              "end": 1228
                            },
                            "start": 1225,
                            "end": 1228
                          },
                          "start": 1224,
                          "end": 1228
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": "",
                        "raw": "''",
                        "start": 1233,
                        "end": 1235
                      },
                      "id": null,
                      "generator": false,
                      "start": 1220,
                      "end": 1235
                    },
                    {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 1237,
                      "end": 1239
                    }
                  ],
                  "optional": false,
                  "start": 1209,
                  "end": 1240
                },
                "definite": false,
                "start": 1204,
                "end": 1240
              }
            ],
            "declare": false,
            "start": 1200,
            "end": 1241
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
                  "start": 1260,
                  "end": 1262
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1265,
                      "end": 1267
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1268,
                      "end": 1272
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1265,
                    "end": 1272
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1273,
                      "end": 1274
                    },
                    {
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
                          "typeAnnotation": null,
                          "start": 1286,
                          "end": 1287
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
                              "value": "",
                              "raw": "''",
                              "start": 1298,
                              "end": 1300
                            },
                            "start": 1291,
                            "end": 1300
                          }
                        ],
                        "start": 1289,
                        "end": 1302
                      },
                      "expression": false,
                      "start": 1276,
                      "end": 1302
                    },
                    {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 1304,
                      "end": 1306
                    }
                  ],
                  "optional": false,
                  "start": 1265,
                  "end": 1307
                },
                "definite": false,
                "start": 1260,
                "end": 1307
              }
            ],
            "declare": false,
            "start": 1256,
            "end": 1308
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1330,
              "end": 1332
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
                    "start": 1333,
                    "end": 1334
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1333,
                  "end": 1334
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1336,
                    "end": 1337
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1336,
                  "end": 1337
                }
              ],
              "start": 1332,
              "end": 1338
            },
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
                    "name": "foo3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1349,
                    "end": 1353
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
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
                            "start": 1354,
                            "end": 1355
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 1354,
                          "end": 1355
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1356,
                            "end": 1357
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 1356,
                          "end": 1357
                        }
                      ],
                      "start": 1353,
                      "end": 1358
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
                              "start": 1362,
                              "end": 1363
                            },
                            "typeArguments": null,
                            "start": 1362,
                            "end": 1363
                          },
                          "start": 1360,
                          "end": 1363
                        },
                        "start": 1359,
                        "end": 1363
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
                                      "start": 1373,
                                      "end": 1374
                                    },
                                    "typeArguments": null,
                                    "start": 1373,
                                    "end": 1374
                                  },
                                  "start": 1371,
                                  "end": 1374
                                },
                                "start": 1370,
                                "end": 1374
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
                                  "start": 1379,
                                  "end": 1380
                                },
                                "typeArguments": null,
                                "start": 1379,
                                "end": 1380
                              },
                              "start": 1376,
                              "end": 1380
                            },
                            "start": 1369,
                            "end": 1380
                          },
                          "start": 1367,
                          "end": 1380
                        },
                        "start": 1365,
                        "end": 1380
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
                              "start": 1385,
                              "end": 1386
                            },
                            "typeArguments": null,
                            "start": 1385,
                            "end": 1386
                          },
                          "start": 1383,
                          "end": 1386
                        },
                        "start": 1382,
                        "end": 1386
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
                              "type": "Identifier",
                              "decorators": [],
                              "name": "cb",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1409,
                              "end": 1411
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1412,
                                "end": 1413
                              }
                            ],
                            "optional": false,
                            "start": 1409,
                            "end": 1414
                          },
                          "start": 1402,
                          "end": 1415
                        }
                      ],
                      "start": 1388,
                      "end": 1425
                    },
                    "expression": false,
                    "start": 1353,
                    "end": 1425
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1349,
                  "end": 1425
                }
              ],
              "start": 1339,
              "end": 1431
            },
            "abstract": false,
            "declare": false,
            "start": 1324,
            "end": 1431
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
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1444,
                        "end": 1446
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 1447,
                            "end": 1453
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 1455,
                            "end": 1461
                          }
                        ],
                        "start": 1446,
                        "end": 1462
                      },
                      "start": 1444,
                      "end": 1462
                    },
                    "start": 1442,
                    "end": 1462
                  },
                  "start": 1440,
                  "end": 1462
                },
                "init": null,
                "definite": false,
                "start": 1440,
                "end": 1462
              }
            ],
            "declare": false,
            "start": 1436,
            "end": 1463
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "other",
              "optional": false,
              "typeAnnotation": null,
              "start": 1478,
              "end": 1483
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
                    "start": 1484,
                    "end": 1485
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1484,
                  "end": 1485
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1487,
                    "end": 1488
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1487,
                  "end": 1488
                }
              ],
              "start": 1483,
              "end": 1489
            },
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
                      "start": 1493,
                      "end": 1494
                    },
                    "typeArguments": null,
                    "start": 1493,
                    "end": 1494
                  },
                  "start": 1491,
                  "end": 1494
                },
                "start": 1490,
                "end": 1494
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "u",
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
                      "start": 1499,
                      "end": 1500
                    },
                    "typeArguments": null,
                    "start": 1499,
                    "end": 1500
                  },
                  "start": 1497,
                  "end": 1500
                },
                "start": 1496,
                "end": 1500
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
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
                        "name": "r10",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1516,
                        "end": 1519
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1522,
                            "end": 1523
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1524,
                            "end": 1528
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1522,
                          "end": 1528
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1529,
                            "end": 1530
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
                                      "start": 1536,
                                      "end": 1537
                                    },
                                    "typeArguments": null,
                                    "start": 1536,
                                    "end": 1537
                                  },
                                  "start": 1534,
                                  "end": 1537
                                },
                                "start": 1533,
                                "end": 1537
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Literal",
                              "value": "",
                              "raw": "''",
                              "start": 1542,
                              "end": 1544
                            },
                            "id": null,
                            "generator": false,
                            "start": 1532,
                            "end": 1544
                          }
                        ],
                        "optional": false,
                        "start": 1522,
                        "end": 1545
                      },
                      "definite": false,
                      "start": 1516,
                      "end": 1545
                    }
                  ],
                  "declare": false,
                  "start": 1512,
                  "end": 1546
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
                        "name": "r10",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1568,
                        "end": 1571
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1574,
                            "end": 1575
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1576,
                            "end": 1580
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1574,
                          "end": 1580
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1581,
                            "end": 1582
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
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1585,
                                "end": 1586
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Literal",
                              "value": "",
                              "raw": "''",
                              "start": 1591,
                              "end": 1593
                            },
                            "id": null,
                            "generator": false,
                            "start": 1584,
                            "end": 1593
                          }
                        ],
                        "optional": false,
                        "start": 1574,
                        "end": 1594
                      },
                      "definite": false,
                      "start": 1568,
                      "end": 1594
                    }
                  ],
                  "declare": false,
                  "start": 1564,
                  "end": 1595
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
                        "name": "r11",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1619,
                        "end": 1622
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c3",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1625,
                            "end": 1627
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo3",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1628,
                            "end": 1632
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1625,
                          "end": 1632
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1633,
                            "end": 1634
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
                                      "start": 1640,
                                      "end": 1641
                                    },
                                    "typeArguments": null,
                                    "start": 1640,
                                    "end": 1641
                                  },
                                  "start": 1638,
                                  "end": 1641
                                },
                                "start": 1637,
                                "end": 1641
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Literal",
                              "value": "",
                              "raw": "''",
                              "start": 1646,
                              "end": 1648
                            },
                            "id": null,
                            "generator": false,
                            "start": 1636,
                            "end": 1648
                          },
                          {
                            "type": "Literal",
                            "value": "",
                            "raw": "''",
                            "start": 1650,
                            "end": 1652
                          }
                        ],
                        "optional": false,
                        "start": 1625,
                        "end": 1653
                      },
                      "definite": false,
                      "start": 1619,
                      "end": 1653
                    }
                  ],
                  "declare": false,
                  "start": 1615,
                  "end": 1654
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
                        "name": "r11b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1676,
                        "end": 1680
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c3",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1683,
                            "end": 1685
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo3",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1686,
                            "end": 1690
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1683,
                          "end": 1690
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1691,
                            "end": 1692
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
                                      "start": 1698,
                                      "end": 1699
                                    },
                                    "typeArguments": null,
                                    "start": 1698,
                                    "end": 1699
                                  },
                                  "start": 1696,
                                  "end": 1699
                                },
                                "start": 1695,
                                "end": 1699
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Literal",
                              "value": "",
                              "raw": "''",
                              "start": 1704,
                              "end": 1706
                            },
                            "id": null,
                            "generator": false,
                            "start": 1694,
                            "end": 1706
                          },
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1708,
                            "end": 1709
                          }
                        ],
                        "optional": false,
                        "start": 1683,
                        "end": 1710
                      },
                      "definite": false,
                      "start": 1676,
                      "end": 1710
                    }
                  ],
                  "declare": false,
                  "start": 1672,
                  "end": 1711
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
                        "name": "r12",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1733,
                        "end": 1736
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c3",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1739,
                            "end": 1741
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo3",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1742,
                            "end": 1746
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1739,
                          "end": 1746
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1747,
                            "end": 1748
                          },
                          {
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
                                "typeAnnotation": null,
                                "start": 1760,
                                "end": 1761
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
                                    "value": "",
                                    "raw": "''",
                                    "start": 1772,
                                    "end": 1774
                                  },
                                  "start": 1765,
                                  "end": 1774
                                }
                              ],
                              "start": 1763,
                              "end": 1776
                            },
                            "expression": false,
                            "start": 1750,
                            "end": 1776
                          },
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1778,
                            "end": 1779
                          }
                        ],
                        "optional": false,
                        "start": 1739,
                        "end": 1780
                      },
                      "definite": false,
                      "start": 1733,
                      "end": 1780
                    }
                  ],
                  "declare": false,
                  "start": 1729,
                  "end": 1781
                }
              ],
              "start": 1502,
              "end": 1796
            },
            "expression": false,
            "start": 1469,
            "end": 1796
          }
        ],
        "start": 679,
        "end": 1798
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 654,
      "end": 1798
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 155,
  "end": 1798
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 155,
    "end": 164,
    "range": [
      155,
      164
    ]
  },
  {
    "type": "Identifier",
    "value": "ImmediatelyFix",
    "start": 165,
    "end": 179,
    "range": [
      165,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 186,
    "end": 191,
    "range": [
      186,
      191
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 192,
    "end": 193,
    "range": [
      192,
      193
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
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
    "value": ">",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 207,
    "end": 210,
    "range": [
      207,
      210
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 211,
    "end": 212,
    "range": [
      211,
      212
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "start": 213,
    "end": 214,
    "range": [
      213,
      214
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 218,
    "end": 219,
    "range": [
      218,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 221,
    "end": 222,
    "range": [
      221,
      222
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 222,
    "end": 223,
    "range": [
      222,
      223
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 224,
    "end": 226,
    "range": [
      224,
      226
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 227,
    "end": 228,
    "range": [
      227,
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
    "value": "{",
    "start": 230,
    "end": 231,
    "range": [
      230,
      231
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 244,
    "end": 250,
    "range": [
      244,
      250
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 251,
    "end": 252,
    "range": [
      251,
      252
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 253,
    "end": 257,
    "range": [
      253,
      257
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 257,
    "end": 258,
    "range": [
      257,
      258
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 258,
    "end": 259,
    "range": [
      258,
      259
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 274,
    "end": 275,
    "range": [
      274,
      275
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 281,
    "end": 284,
    "range": [
      281,
      284
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 285,
    "end": 286,
    "range": [
      285,
      286
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 289,
    "end": 292,
    "range": [
      289,
      292
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 293,
    "end": 294,
    "range": [
      293,
      294
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 294,
    "end": 295,
    "range": [
      294,
      295
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 295,
    "end": 301,
    "range": [
      295,
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
    "type": "Punctuator",
    "value": ")",
    "start": 303,
    "end": 304,
    "range": [
      303,
      304
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 304,
    "end": 305,
    "range": [
      304,
      305
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 310,
    "end": 313,
    "range": [
      310,
      313
    ]
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 314,
    "end": 315,
    "range": [
      314,
      315
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 316,
    "end": 317,
    "range": [
      316,
      317
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 318,
    "end": 319,
    "range": [
      318,
      319
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 319,
    "end": 320,
    "range": [
      319,
      320
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 320,
    "end": 323,
    "range": [
      320,
      323
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 323,
    "end": 324,
    "range": [
      323,
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
    "value": "U",
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
    "value": "(",
    "start": 327,
    "end": 328,
    "range": [
      327,
      328
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 328,
    "end": 329,
    "range": [
      328,
      329
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 329,
    "end": 330,
    "range": [
      329,
      330
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 331,
    "end": 332,
    "range": [
      331,
      332
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 332,
    "end": 333,
    "range": [
      332,
      333
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 334,
    "end": 336,
    "range": [
      334,
      336
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 337,
    "end": 339,
    "range": [
      337,
      339
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 339,
    "end": 340,
    "range": [
      339,
      340
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 340,
    "end": 341,
    "range": [
      340,
      341
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 352,
    "end": 355,
    "range": [
      352,
      355
    ]
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 356,
    "end": 358,
    "range": [
      356,
      358
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 359,
    "end": 360,
    "range": [
      359,
      360
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 361,
    "end": 362,
    "range": [
      361,
      362
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 362,
    "end": 363,
    "range": [
      362,
      363
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 363,
    "end": 366,
    "range": [
      363,
      366
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 366,
    "end": 367,
    "range": [
      366,
      367
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 367,
    "end": 373,
    "range": [
      367,
      373
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 373,
    "end": 374,
    "range": [
      373,
      374
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 374,
    "end": 375,
    "range": [
      374,
      375
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 375,
    "end": 376,
    "range": [
      375,
      376
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 376,
    "end": 377,
    "range": [
      376,
      377
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 377,
    "end": 378,
    "range": [
      377,
      378
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 378,
    "end": 379,
    "range": [
      378,
      379
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 379,
    "end": 380,
    "range": [
      379,
      380
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 380,
    "end": 381,
    "range": [
      380,
      381
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 382,
    "end": 383,
    "range": [
      382,
      383
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 383,
    "end": 384,
    "range": [
      383,
      384
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 385,
    "end": 387,
    "range": [
      385,
      387
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 388,
    "end": 390,
    "range": [
      388,
      390
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 390,
    "end": 391,
    "range": [
      390,
      391
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 391,
    "end": 392,
    "range": [
      391,
      392
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 408,
    "end": 411,
    "range": [
      408,
      411
    ]
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 412,
    "end": 414,
    "range": [
      412,
      414
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 415,
    "end": 416,
    "range": [
      415,
      416
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 417,
    "end": 418,
    "range": [
      417,
      418
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 418,
    "end": 419,
    "range": [
      418,
      419
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 419,
    "end": 422,
    "range": [
      419,
      422
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 422,
    "end": 423,
    "range": [
      422,
      423
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 423,
    "end": 424,
    "range": [
      423,
      424
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 425,
    "end": 427,
    "range": [
      425,
      427
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 428,
    "end": 430,
    "range": [
      428,
      430
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 430,
    "end": 431,
    "range": [
      430,
      431
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 431,
    "end": 432,
    "range": [
      431,
      432
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 444,
    "end": 449,
    "range": [
      444,
      449
    ]
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 450,
    "end": 452,
    "range": [
      450,
      452
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 452,
    "end": 453,
    "range": [
      452,
      453
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 453,
    "end": 454,
    "range": [
      453,
      454
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 454,
    "end": 455,
    "range": [
      454,
      455
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 456,
    "end": 457,
    "range": [
      456,
      457
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 466,
    "end": 469,
    "range": [
      466,
      469
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 469,
    "end": 470,
    "range": [
      469,
      470
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 470,
    "end": 471,
    "range": [
      470,
      471
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 471,
    "end": 472,
    "range": [
      471,
      472
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 473,
    "end": 474,
    "range": [
      473,
      474
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 474,
    "end": 475,
    "range": [
      474,
      475
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 475,
    "end": 476,
    "range": [
      475,
      476
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 477,
    "end": 478,
    "range": [
      477,
      478
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 478,
    "end": 479,
    "range": [
      478,
      479
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 480,
    "end": 482,
    "range": [
      480,
      482
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 483,
    "end": 484,
    "range": [
      483,
      484
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 484,
    "end": 485,
    "range": [
      484,
      485
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 486,
    "end": 487,
    "range": [
      486,
      487
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 500,
    "end": 506,
    "range": [
      500,
      506
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 507,
    "end": 508,
    "range": [
      507,
      508
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 508,
    "end": 509,
    "range": [
      508,
      509
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 509,
    "end": 513,
    "range": [
      509,
      513
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 513,
    "end": 514,
    "range": [
      513,
      514
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 514,
    "end": 515,
    "range": [
      514,
      515
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 524,
    "end": 525,
    "range": [
      524,
      525
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 530,
    "end": 531,
    "range": [
      530,
      531
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 537,
    "end": 540,
    "range": [
      537,
      540
    ]
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 541,
    "end": 543,
    "range": [
      541,
      543
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 544,
    "end": 545,
    "range": [
      544,
      545
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 546,
    "end": 549,
    "range": [
      546,
      549
    ]
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 550,
    "end": 552,
    "range": [
      550,
      552
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 552,
    "end": 553,
    "range": [
      552,
      553
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 553,
    "end": 559,
    "range": [
      553,
      559
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 559,
    "end": 560,
    "range": [
      559,
      560
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 560,
    "end": 561,
    "range": [
      560,
      561
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 561,
    "end": 562,
    "range": [
      561,
      562
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 562,
    "end": 563,
    "range": [
      562,
      563
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 568,
    "end": 571,
    "range": [
      568,
      571
    ]
  },
  {
    "type": "Identifier",
    "value": "ra",
    "start": 572,
    "end": 574,
    "range": [
      572,
      574
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 575,
    "end": 576,
    "range": [
      575,
      576
    ]
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 577,
    "end": 579,
    "range": [
      577,
      579
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 579,
    "end": 580,
    "range": [
      579,
      580
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 580,
    "end": 583,
    "range": [
      580,
      583
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 583,
    "end": 584,
    "range": [
      583,
      584
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 584,
    "end": 585,
    "range": [
      584,
      585
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 585,
    "end": 586,
    "range": [
      585,
      586
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 586,
    "end": 587,
    "range": [
      586,
      587
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 587,
    "end": 588,
    "range": [
      587,
      588
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 588,
    "end": 589,
    "range": [
      588,
      589
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 589,
    "end": 590,
    "range": [
      589,
      590
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 591,
    "end": 592,
    "range": [
      591,
      592
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 592,
    "end": 593,
    "range": [
      592,
      593
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 594,
    "end": 596,
    "range": [
      594,
      596
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 597,
    "end": 598,
    "range": [
      597,
      598
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 598,
    "end": 599,
    "range": [
      598,
      599
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 599,
    "end": 600,
    "range": [
      599,
      600
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 615,
    "end": 618,
    "range": [
      615,
      618
    ]
  },
  {
    "type": "Identifier",
    "value": "r3a",
    "start": 619,
    "end": 622,
    "range": [
      619,
      622
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 623,
    "end": 624,
    "range": [
      623,
      624
    ]
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 625,
    "end": 627,
    "range": [
      625,
      627
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 627,
    "end": 628,
    "range": [
      627,
      628
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 628,
    "end": 631,
    "range": [
      628,
      631
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 631,
    "end": 632,
    "range": [
      631,
      632
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 632,
    "end": 633,
    "range": [
      632,
      633
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 634,
    "end": 636,
    "range": [
      634,
      636
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 637,
    "end": 638,
    "range": [
      637,
      638
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 638,
    "end": 639,
    "range": [
      638,
      639
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 639,
    "end": 640,
    "range": [
      639,
      640
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 651,
    "end": 652,
    "range": [
      651,
      652
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 654,
    "end": 663,
    "range": [
      654,
      663
    ]
  },
  {
    "type": "Identifier",
    "value": "WithCandidates",
    "start": 664,
    "end": 678,
    "range": [
      664,
      678
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 679,
    "end": 680,
    "range": [
      679,
      680
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 685,
    "end": 690,
    "range": [
      685,
      690
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 691,
    "end": 692,
    "range": [
      691,
      692
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 692,
    "end": 693,
    "range": [
      692,
      693
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 693,
    "end": 694,
    "range": [
      693,
      694
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 694,
    "end": 695,
    "range": [
      694,
      695
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 696,
    "end": 697,
    "range": [
      696,
      697
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 706,
    "end": 710,
    "range": [
      706,
      710
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 710,
    "end": 711,
    "range": [
      710,
      711
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 711,
    "end": 712,
    "range": [
      711,
      712
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 712,
    "end": 713,
    "range": [
      712,
      713
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 714,
    "end": 715,
    "range": [
      714,
      715
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 715,
    "end": 716,
    "range": [
      715,
      716
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 716,
    "end": 717,
    "range": [
      716,
      717
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 717,
    "end": 718,
    "range": [
      717,
      718
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 718,
    "end": 719,
    "range": [
      718,
      719
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 720,
    "end": 721,
    "range": [
      720,
      721
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 721,
    "end": 722,
    "range": [
      721,
      722
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 723,
    "end": 725,
    "range": [
      723,
      725
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 725,
    "end": 726,
    "range": [
      725,
      726
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 727,
    "end": 728,
    "range": [
      727,
      728
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 728,
    "end": 729,
    "range": [
      728,
      729
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 729,
    "end": 730,
    "range": [
      729,
      730
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 731,
    "end": 732,
    "range": [
      731,
      732
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 732,
    "end": 733,
    "range": [
      732,
      733
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 734,
    "end": 736,
    "range": [
      734,
      736
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 737,
    "end": 738,
    "range": [
      737,
      738
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 738,
    "end": 739,
    "range": [
      738,
      739
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 740,
    "end": 741,
    "range": [
      740,
      741
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 754,
    "end": 760,
    "range": [
      754,
      760
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 761,
    "end": 763,
    "range": [
      761,
      763
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 763,
    "end": 764,
    "range": [
      763,
      764
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 764,
    "end": 765,
    "range": [
      764,
      765
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 765,
    "end": 766,
    "range": [
      765,
      766
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 766,
    "end": 767,
    "range": [
      766,
      767
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 776,
    "end": 777,
    "range": [
      776,
      777
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 782,
    "end": 783,
    "range": [
      782,
      783
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 789,
    "end": 792,
    "range": [
      789,
      792
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 793,
    "end": 794,
    "range": [
      793,
      794
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 794,
    "end": 795,
    "range": [
      794,
      795
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 796,
    "end": 797,
    "range": [
      796,
      797
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 797,
    "end": 798,
    "range": [
      797,
      798
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 798,
    "end": 804,
    "range": [
      798,
      804
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 804,
    "end": 805,
    "range": [
      804,
      805
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 805,
    "end": 806,
    "range": [
      805,
      806
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 811,
    "end": 814,
    "range": [
      811,
      814
    ]
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 815,
    "end": 817,
    "range": [
      815,
      817
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 818,
    "end": 819,
    "range": [
      818,
      819
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 820,
    "end": 821,
    "range": [
      820,
      821
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 821,
    "end": 822,
    "range": [
      821,
      822
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 822,
    "end": 826,
    "range": [
      822,
      826
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 826,
    "end": 827,
    "range": [
      826,
      827
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 827,
    "end": 828,
    "range": [
      827,
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
    "type": "Keyword",
    "value": "function",
    "start": 830,
    "end": 838,
    "range": [
      830,
      838
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 839,
    "end": 840,
    "range": [
      839,
      840
    ]
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 840,
    "end": 841,
    "range": [
      840,
      841
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 841,
    "end": 842,
    "range": [
      841,
      842
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 842,
    "end": 843,
    "range": [
      842,
      843
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 843,
    "end": 844,
    "range": [
      843,
      844
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 844,
    "end": 845,
    "range": [
      844,
      845
    ]
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 846,
    "end": 847,
    "range": [
      846,
      847
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 847,
    "end": 848,
    "range": [
      847,
      848
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 849,
    "end": 850,
    "range": [
      849,
      850
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 851,
    "end": 857,
    "range": [
      851,
      857
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 858,
    "end": 860,
    "range": [
      858,
      860
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 861,
    "end": 862,
    "range": [
      861,
      862
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 862,
    "end": 863,
    "range": [
      862,
      863
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 863,
    "end": 864,
    "range": [
      863,
      864
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 947,
    "end": 950,
    "range": [
      947,
      950
    ]
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 951,
    "end": 953,
    "range": [
      951,
      953
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 954,
    "end": 955,
    "range": [
      954,
      955
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 956,
    "end": 957,
    "range": [
      956,
      957
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 957,
    "end": 958,
    "range": [
      957,
      958
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 958,
    "end": 962,
    "range": [
      958,
      962
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 962,
    "end": 963,
    "range": [
      962,
      963
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 963,
    "end": 964,
    "range": [
      963,
      964
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 964,
    "end": 965,
    "range": [
      964,
      965
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 966,
    "end": 967,
    "range": [
      966,
      967
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 967,
    "end": 968,
    "range": [
      967,
      968
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 968,
    "end": 969,
    "range": [
      968,
      969
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 970,
    "end": 972,
    "range": [
      970,
      972
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 973,
    "end": 975,
    "range": [
      973,
      975
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 975,
    "end": 976,
    "range": [
      975,
      976
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 976,
    "end": 977,
    "range": [
      976,
      977
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 992,
    "end": 995,
    "range": [
      992,
      995
    ]
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 996,
    "end": 998,
    "range": [
      996,
      998
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 999,
    "end": 1000,
    "range": [
      999,
      1000
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1001,
    "end": 1002,
    "range": [
      1001,
      1002
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1002,
    "end": 1003,
    "range": [
      1002,
      1003
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1003,
    "end": 1007,
    "range": [
      1003,
      1007
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1007,
    "end": 1008,
    "range": [
      1007,
      1008
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1008,
    "end": 1014,
    "range": [
      1008,
      1014
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1014,
    "end": 1015,
    "range": [
      1014,
      1015
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1016,
    "end": 1022,
    "range": [
      1016,
      1022
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1022,
    "end": 1023,
    "range": [
      1022,
      1023
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1023,
    "end": 1024,
    "range": [
      1023,
      1024
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 1024,
    "end": 1026,
    "range": [
      1024,
      1026
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1026,
    "end": 1027,
    "range": [
      1026,
      1027
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1028,
    "end": 1029,
    "range": [
      1028,
      1029
    ]
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 1029,
    "end": 1030,
    "range": [
      1029,
      1030
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1030,
    "end": 1031,
    "range": [
      1030,
      1031
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1031,
    "end": 1032,
    "range": [
      1031,
      1032
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1032,
    "end": 1033,
    "range": [
      1032,
      1033
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1033,
    "end": 1034,
    "range": [
      1033,
      1034
    ]
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 1035,
    "end": 1036,
    "range": [
      1035,
      1036
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1036,
    "end": 1037,
    "range": [
      1036,
      1037
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1038,
    "end": 1040,
    "range": [
      1038,
      1040
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1041,
    "end": 1042,
    "range": [
      1041,
      1042
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1042,
    "end": 1043,
    "range": [
      1042,
      1043
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1043,
    "end": 1044,
    "range": [
      1043,
      1044
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1060,
    "end": 1065,
    "range": [
      1060,
      1065
    ]
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 1066,
    "end": 1068,
    "range": [
      1066,
      1068
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1068,
    "end": 1069,
    "range": [
      1068,
      1069
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1069,
    "end": 1070,
    "range": [
      1069,
      1070
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1070,
    "end": 1071,
    "range": [
      1070,
      1071
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1072,
    "end": 1073,
    "range": [
      1072,
      1073
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1073,
    "end": 1074,
    "range": [
      1073,
      1074
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1075,
    "end": 1076,
    "range": [
      1075,
      1076
    ]
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1085,
    "end": 1089,
    "range": [
      1085,
      1089
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1089,
    "end": 1090,
    "range": [
      1089,
      1090
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1090,
    "end": 1091,
    "range": [
      1090,
      1091
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1091,
    "end": 1092,
    "range": [
      1091,
      1092
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1093,
    "end": 1094,
    "range": [
      1093,
      1094
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1094,
    "end": 1095,
    "range": [
      1094,
      1095
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1096,
    "end": 1098,
    "range": [
      1096,
      1098
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1098,
    "end": 1099,
    "range": [
      1098,
      1099
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1100,
    "end": 1101,
    "range": [
      1100,
      1101
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1101,
    "end": 1102,
    "range": [
      1101,
      1102
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1102,
    "end": 1103,
    "range": [
      1102,
      1103
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1104,
    "end": 1105,
    "range": [
      1104,
      1105
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1105,
    "end": 1106,
    "range": [
      1105,
      1106
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1107,
    "end": 1109,
    "range": [
      1107,
      1109
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1110,
    "end": 1111,
    "range": [
      1110,
      1111
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1111,
    "end": 1112,
    "range": [
      1111,
      1112
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1113,
    "end": 1114,
    "range": [
      1113,
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
    "value": "U",
    "start": 1116,
    "end": 1117,
    "range": [
      1116,
      1117
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1117,
    "end": 1118,
    "range": [
      1117,
      1118
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1119,
    "end": 1120,
    "range": [
      1119,
      1120
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1133,
    "end": 1139,
    "range": [
      1133,
      1139
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1140,
    "end": 1142,
    "range": [
      1140,
      1142
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1142,
    "end": 1143,
    "range": [
      1142,
      1143
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1143,
    "end": 1144,
    "range": [
      1143,
      1144
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1144,
    "end": 1145,
    "range": [
      1144,
      1145
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1145,
    "end": 1146,
    "range": [
      1145,
      1146
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1155,
    "end": 1156,
    "range": [
      1155,
      1156
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1161,
    "end": 1162,
    "range": [
      1161,
      1162
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1168,
    "end": 1171,
    "range": [
      1168,
      1171
    ]
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 1172,
    "end": 1174,
    "range": [
      1172,
      1174
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1174,
    "end": 1175,
    "range": [
      1174,
      1175
    ]
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 1176,
    "end": 1178,
    "range": [
      1176,
      1178
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1178,
    "end": 1179,
    "range": [
      1178,
      1179
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1179,
    "end": 1185,
    "range": [
      1179,
      1185
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1185,
    "end": 1186,
    "range": [
      1185,
      1186
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1187,
    "end": 1193,
    "range": [
      1187,
      1193
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1193,
    "end": 1194,
    "range": [
      1193,
      1194
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1194,
    "end": 1195,
    "range": [
      1194,
      1195
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1200,
    "end": 1203,
    "range": [
      1200,
      1203
    ]
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 1204,
    "end": 1206,
    "range": [
      1204,
      1206
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1207,
    "end": 1208,
    "range": [
      1207,
      1208
    ]
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 1209,
    "end": 1211,
    "range": [
      1209,
      1211
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1211,
    "end": 1212,
    "range": [
      1211,
      1212
    ]
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1212,
    "end": 1216,
    "range": [
      1212,
      1216
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1216,
    "end": 1217,
    "range": [
      1216,
      1217
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1217,
    "end": 1218,
    "range": [
      1217,
      1218
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1218,
    "end": 1219,
    "range": [
      1218,
      1219
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1220,
    "end": 1221,
    "range": [
      1220,
      1221
    ]
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 1221,
    "end": 1222,
    "range": [
      1221,
      1222
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1222,
    "end": 1223,
    "range": [
      1222,
      1223
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1223,
    "end": 1224,
    "range": [
      1223,
      1224
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1224,
    "end": 1225,
    "range": [
      1224,
      1225
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1225,
    "end": 1226,
    "range": [
      1225,
      1226
    ]
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 1227,
    "end": 1228,
    "range": [
      1227,
      1228
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1228,
    "end": 1229,
    "range": [
      1228,
      1229
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1230,
    "end": 1232,
    "range": [
      1230,
      1232
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 1233,
    "end": 1235,
    "range": [
      1233,
      1235
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1235,
    "end": 1236,
    "range": [
      1235,
      1236
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 1237,
    "end": 1239,
    "range": [
      1237,
      1239
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1239,
    "end": 1240,
    "range": [
      1239,
      1240
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1240,
    "end": 1241,
    "range": [
      1240,
      1241
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1256,
    "end": 1259,
    "range": [
      1256,
      1259
    ]
  },
  {
    "type": "Identifier",
    "value": "r8",
    "start": 1260,
    "end": 1262,
    "range": [
      1260,
      1262
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1263,
    "end": 1264,
    "range": [
      1263,
      1264
    ]
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 1265,
    "end": 1267,
    "range": [
      1265,
      1267
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1267,
    "end": 1268,
    "range": [
      1267,
      1268
    ]
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1268,
    "end": 1272,
    "range": [
      1268,
      1272
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1272,
    "end": 1273,
    "range": [
      1272,
      1273
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1273,
    "end": 1274,
    "range": [
      1273,
      1274
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1274,
    "end": 1275,
    "range": [
      1274,
      1275
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1276,
    "end": 1284,
    "range": [
      1276,
      1284
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1285,
    "end": 1286,
    "range": [
      1285,
      1286
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1286,
    "end": 1287,
    "range": [
      1286,
      1287
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1287,
    "end": 1288,
    "range": [
      1287,
      1288
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1289,
    "end": 1290,
    "range": [
      1289,
      1290
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1291,
    "end": 1297,
    "range": [
      1291,
      1297
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 1298,
    "end": 1300,
    "range": [
      1298,
      1300
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1301,
    "end": 1302,
    "range": [
      1301,
      1302
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1302,
    "end": 1303,
    "range": [
      1302,
      1303
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 1304,
    "end": 1306,
    "range": [
      1304,
      1306
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1306,
    "end": 1307,
    "range": [
      1306,
      1307
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1307,
    "end": 1308,
    "range": [
      1307,
      1308
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1324,
    "end": 1329,
    "range": [
      1324,
      1329
    ]
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 1330,
    "end": 1332,
    "range": [
      1330,
      1332
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1332,
    "end": 1333,
    "range": [
      1332,
      1333
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1333,
    "end": 1334,
    "range": [
      1333,
      1334
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1334,
    "end": 1335,
    "range": [
      1334,
      1335
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1336,
    "end": 1337,
    "range": [
      1336,
      1337
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1337,
    "end": 1338,
    "range": [
      1337,
      1338
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1339,
    "end": 1340,
    "range": [
      1339,
      1340
    ]
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1349,
    "end": 1353,
    "range": [
      1349,
      1353
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1353,
    "end": 1354,
    "range": [
      1353,
      1354
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1354,
    "end": 1355,
    "range": [
      1354,
      1355
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1355,
    "end": 1356,
    "range": [
      1355,
      1356
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1356,
    "end": 1357,
    "range": [
      1356,
      1357
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1357,
    "end": 1358,
    "range": [
      1357,
      1358
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1358,
    "end": 1359,
    "range": [
      1358,
      1359
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1359,
    "end": 1360,
    "range": [
      1359,
      1360
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1360,
    "end": 1361,
    "range": [
      1360,
      1361
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1362,
    "end": 1363,
    "range": [
      1362,
      1363
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1363,
    "end": 1364,
    "range": [
      1363,
      1364
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1365,
    "end": 1367,
    "range": [
      1365,
      1367
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1367,
    "end": 1368,
    "range": [
      1367,
      1368
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1369,
    "end": 1370,
    "range": [
      1369,
      1370
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1370,
    "end": 1371,
    "range": [
      1370,
      1371
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1371,
    "end": 1372,
    "range": [
      1371,
      1372
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1373,
    "end": 1374,
    "range": [
      1373,
      1374
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1374,
    "end": 1375,
    "range": [
      1374,
      1375
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1376,
    "end": 1378,
    "range": [
      1376,
      1378
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1379,
    "end": 1380,
    "range": [
      1379,
      1380
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1380,
    "end": 1381,
    "range": [
      1380,
      1381
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1382,
    "end": 1383,
    "range": [
      1382,
      1383
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1383,
    "end": 1384,
    "range": [
      1383,
      1384
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1385,
    "end": 1386,
    "range": [
      1385,
      1386
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1386,
    "end": 1387,
    "range": [
      1386,
      1387
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1388,
    "end": 1389,
    "range": [
      1388,
      1389
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1402,
    "end": 1408,
    "range": [
      1402,
      1408
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1409,
    "end": 1411,
    "range": [
      1409,
      1411
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1411,
    "end": 1412,
    "range": [
      1411,
      1412
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1412,
    "end": 1413,
    "range": [
      1412,
      1413
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1413,
    "end": 1414,
    "range": [
      1413,
      1414
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1414,
    "end": 1415,
    "range": [
      1414,
      1415
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1424,
    "end": 1425,
    "range": [
      1424,
      1425
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1430,
    "end": 1431,
    "range": [
      1430,
      1431
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1436,
    "end": 1439,
    "range": [
      1436,
      1439
    ]
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 1440,
    "end": 1442,
    "range": [
      1440,
      1442
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1442,
    "end": 1443,
    "range": [
      1442,
      1443
    ]
  },
  {
    "type": "Identifier",
    "value": "C3",
    "start": 1444,
    "end": 1446,
    "range": [
      1444,
      1446
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1446,
    "end": 1447,
    "range": [
      1446,
      1447
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1447,
    "end": 1453,
    "range": [
      1447,
      1453
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1453,
    "end": 1454,
    "range": [
      1453,
      1454
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1455,
    "end": 1461,
    "range": [
      1455,
      1461
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1461,
    "end": 1462,
    "range": [
      1461,
      1462
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1462,
    "end": 1463,
    "range": [
      1462,
      1463
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1469,
    "end": 1477,
    "range": [
      1469,
      1477
    ]
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 1478,
    "end": 1483,
    "range": [
      1478,
      1483
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1483,
    "end": 1484,
    "range": [
      1483,
      1484
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "U",
    "start": 1487,
    "end": 1488,
    "range": [
      1487,
      1488
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1488,
    "end": 1489,
    "range": [
      1488,
      1489
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1489,
    "end": 1490,
    "range": [
      1489,
      1490
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1490,
    "end": 1491,
    "range": [
      1490,
      1491
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1491,
    "end": 1492,
    "range": [
      1491,
      1492
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1493,
    "end": 1494,
    "range": [
      1493,
      1494
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1494,
    "end": 1495,
    "range": [
      1494,
      1495
    ]
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 1496,
    "end": 1497,
    "range": [
      1496,
      1497
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1497,
    "end": 1498,
    "range": [
      1497,
      1498
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1499,
    "end": 1500,
    "range": [
      1499,
      1500
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1500,
    "end": 1501,
    "range": [
      1500,
      1501
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1502,
    "end": 1503,
    "range": [
      1502,
      1503
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1512,
    "end": 1515,
    "range": [
      1512,
      1515
    ]
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 1516,
    "end": 1519,
    "range": [
      1516,
      1519
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1520,
    "end": 1521,
    "range": [
      1520,
      1521
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1522,
    "end": 1523,
    "range": [
      1522,
      1523
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1523,
    "end": 1524,
    "range": [
      1523,
      1524
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1524,
    "end": 1528,
    "range": [
      1524,
      1528
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1528,
    "end": 1529,
    "range": [
      1528,
      1529
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1529,
    "end": 1530,
    "range": [
      1529,
      1530
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1530,
    "end": 1531,
    "range": [
      1530,
      1531
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1532,
    "end": 1533,
    "range": [
      1532,
      1533
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1533,
    "end": 1534,
    "range": [
      1533,
      1534
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1534,
    "end": 1535,
    "range": [
      1534,
      1535
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1536,
    "end": 1537,
    "range": [
      1536,
      1537
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1537,
    "end": 1538,
    "range": [
      1537,
      1538
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1539,
    "end": 1541,
    "range": [
      1539,
      1541
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 1542,
    "end": 1544,
    "range": [
      1542,
      1544
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1544,
    "end": 1545,
    "range": [
      1544,
      1545
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1545,
    "end": 1546,
    "range": [
      1545,
      1546
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1564,
    "end": 1567,
    "range": [
      1564,
      1567
    ]
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 1568,
    "end": 1571,
    "range": [
      1568,
      1571
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1572,
    "end": 1573,
    "range": [
      1572,
      1573
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1574,
    "end": 1575,
    "range": [
      1574,
      1575
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1575,
    "end": 1576,
    "range": [
      1575,
      1576
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1576,
    "end": 1580,
    "range": [
      1576,
      1580
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1580,
    "end": 1581,
    "range": [
      1580,
      1581
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1581,
    "end": 1582,
    "range": [
      1581,
      1582
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1582,
    "end": 1583,
    "range": [
      1582,
      1583
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1584,
    "end": 1585,
    "range": [
      1584,
      1585
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1585,
    "end": 1586,
    "range": [
      1585,
      1586
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1586,
    "end": 1587,
    "range": [
      1586,
      1587
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1588,
    "end": 1590,
    "range": [
      1588,
      1590
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 1591,
    "end": 1593,
    "range": [
      1591,
      1593
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1593,
    "end": 1594,
    "range": [
      1593,
      1594
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1594,
    "end": 1595,
    "range": [
      1594,
      1595
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1615,
    "end": 1618,
    "range": [
      1615,
      1618
    ]
  },
  {
    "type": "Identifier",
    "value": "r11",
    "start": 1619,
    "end": 1622,
    "range": [
      1619,
      1622
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1623,
    "end": 1624,
    "range": [
      1623,
      1624
    ]
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 1625,
    "end": 1627,
    "range": [
      1625,
      1627
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1627,
    "end": 1628,
    "range": [
      1627,
      1628
    ]
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1628,
    "end": 1632,
    "range": [
      1628,
      1632
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1632,
    "end": 1633,
    "range": [
      1632,
      1633
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1633,
    "end": 1634,
    "range": [
      1633,
      1634
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1634,
    "end": 1635,
    "range": [
      1634,
      1635
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1636,
    "end": 1637,
    "range": [
      1636,
      1637
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1637,
    "end": 1638,
    "range": [
      1637,
      1638
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1638,
    "end": 1639,
    "range": [
      1638,
      1639
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1640,
    "end": 1641,
    "range": [
      1640,
      1641
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1641,
    "end": 1642,
    "range": [
      1641,
      1642
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1643,
    "end": 1645,
    "range": [
      1643,
      1645
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 1646,
    "end": 1648,
    "range": [
      1646,
      1648
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1648,
    "end": 1649,
    "range": [
      1648,
      1649
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 1650,
    "end": 1652,
    "range": [
      1650,
      1652
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1652,
    "end": 1653,
    "range": [
      1652,
      1653
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1653,
    "end": 1654,
    "range": [
      1653,
      1654
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1672,
    "end": 1675,
    "range": [
      1672,
      1675
    ]
  },
  {
    "type": "Identifier",
    "value": "r11b",
    "start": 1676,
    "end": 1680,
    "range": [
      1676,
      1680
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1681,
    "end": 1682,
    "range": [
      1681,
      1682
    ]
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 1683,
    "end": 1685,
    "range": [
      1683,
      1685
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1685,
    "end": 1686,
    "range": [
      1685,
      1686
    ]
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1686,
    "end": 1690,
    "range": [
      1686,
      1690
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1690,
    "end": 1691,
    "range": [
      1690,
      1691
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1691,
    "end": 1692,
    "range": [
      1691,
      1692
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1692,
    "end": 1693,
    "range": [
      1692,
      1693
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1694,
    "end": 1695,
    "range": [
      1694,
      1695
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1695,
    "end": 1696,
    "range": [
      1695,
      1696
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1696,
    "end": 1697,
    "range": [
      1696,
      1697
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1698,
    "end": 1699,
    "range": [
      1698,
      1699
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1699,
    "end": 1700,
    "range": [
      1699,
      1700
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1701,
    "end": 1703,
    "range": [
      1701,
      1703
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 1704,
    "end": 1706,
    "range": [
      1704,
      1706
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1706,
    "end": 1707,
    "range": [
      1706,
      1707
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1708,
    "end": 1709,
    "range": [
      1708,
      1709
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1709,
    "end": 1710,
    "range": [
      1709,
      1710
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1710,
    "end": 1711,
    "range": [
      1710,
      1711
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1729,
    "end": 1732,
    "range": [
      1729,
      1732
    ]
  },
  {
    "type": "Identifier",
    "value": "r12",
    "start": 1733,
    "end": 1736,
    "range": [
      1733,
      1736
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1737,
    "end": 1738,
    "range": [
      1737,
      1738
    ]
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 1739,
    "end": 1741,
    "range": [
      1739,
      1741
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1741,
    "end": 1742,
    "range": [
      1741,
      1742
    ]
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1742,
    "end": 1746,
    "range": [
      1742,
      1746
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1746,
    "end": 1747,
    "range": [
      1746,
      1747
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1747,
    "end": 1748,
    "range": [
      1747,
      1748
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1748,
    "end": 1749,
    "range": [
      1748,
      1749
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1750,
    "end": 1758,
    "range": [
      1750,
      1758
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1759,
    "end": 1760,
    "range": [
      1759,
      1760
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1760,
    "end": 1761,
    "range": [
      1760,
      1761
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1761,
    "end": 1762,
    "range": [
      1761,
      1762
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1763,
    "end": 1764,
    "range": [
      1763,
      1764
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1765,
    "end": 1771,
    "range": [
      1765,
      1771
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 1772,
    "end": 1774,
    "range": [
      1772,
      1774
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1775,
    "end": 1776,
    "range": [
      1775,
      1776
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1776,
    "end": 1777,
    "range": [
      1776,
      1777
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1778,
    "end": 1779,
    "range": [
      1778,
      1779
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1779,
    "end": 1780,
    "range": [
      1779,
      1780
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1780,
    "end": 1781,
    "range": [
      1780,
      1781
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1795,
    "end": 1796,
    "range": [
      1795,
      1796
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1797,
    "end": 1798,
    "range": [
      1797,
      1798
    ]
  }
]
```
