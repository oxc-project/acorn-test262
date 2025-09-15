__ESTREE_TEST__:PASS:
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
