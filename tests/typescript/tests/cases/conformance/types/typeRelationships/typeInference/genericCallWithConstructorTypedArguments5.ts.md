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
        "start": 165,
        "end": 168
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
              "start": 169,
              "end": 170
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 169,
            "end": 170
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 172,
              "end": 173
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 172,
            "end": 173
          }
        ],
        "start": 168,
        "end": 174
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
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
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 182,
                    "end": 184
                  },
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
                                "start": 193,
                                "end": 194
                              },
                              "typeArguments": null,
                              "start": 193,
                              "end": 194
                            },
                            "start": 191,
                            "end": 194
                          },
                          "start": 190,
                          "end": 194
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
                            "start": 199,
                            "end": 200
                          },
                          "typeArguments": null,
                          "start": 199,
                          "end": 200
                        },
                        "start": 196,
                        "end": 200
                      },
                      "start": 186,
                      "end": 200
                    },
                    "start": 184,
                    "end": 200
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 182,
                  "end": 200
                }
              ],
              "start": 180,
              "end": 202
            },
            "start": 178,
            "end": 202
          },
          "start": 175,
          "end": 202
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 221,
                  "end": 224
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cb",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 225,
                  "end": 227
                },
                "optional": false,
                "computed": false,
                "start": 221,
                "end": 227
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 228,
                  "end": 232
                }
              ],
              "start": 217,
              "end": 233
            },
            "start": 210,
            "end": 234
          }
        ],
        "start": 204,
        "end": 236
      },
      "expression": false,
      "start": 156,
      "end": 236
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
            "name": "arg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
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
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 249,
                      "end": 251
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "abstract": false,
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
                                "start": 257,
                                "end": 258
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 257,
                              "end": 258
                            }
                          ],
                          "start": 256,
                          "end": 259
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
                            "start": 260,
                            "end": 264
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 269,
                            "end": 275
                          },
                          "start": 266,
                          "end": 275
                        },
                        "start": 253,
                        "end": 275
                      },
                      "start": 251,
                      "end": 275
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 249,
                    "end": 275
                  }
                ],
                "start": 247,
                "end": 277
              },
              "start": 245,
              "end": 277
            },
            "start": 242,
            "end": 277
          },
          "init": null,
          "definite": false,
          "start": 242,
          "end": 277
        }
      ],
      "declare": false,
      "start": 238,
      "end": 278
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
            "start": 283,
            "end": 284
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 287,
              "end": 290
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 291,
                "end": 294
              }
            ],
            "optional": false,
            "start": 287,
            "end": 295
          },
          "definite": false,
          "start": 283,
          "end": 295
        }
      ],
      "declare": false,
      "start": 279,
      "end": 296
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
            "name": "arg2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
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
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 340,
                      "end": 342
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "abstract": false,
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
                                "start": 349,
                                "end": 350
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 349,
                              "end": 350
                            }
                          ],
                          "start": 348,
                          "end": 351
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
                                  "start": 355,
                                  "end": 356
                                },
                                "typeArguments": null,
                                "start": 355,
                                "end": 356
                              },
                              "start": 353,
                              "end": 356
                            },
                            "start": 352,
                            "end": 356
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
                            "type": "TSStringKeyword",
                            "start": 367,
                            "end": 373
                          },
                          "start": 364,
                          "end": 373
                        },
                        "start": 344,
                        "end": 373
                      },
                      "start": 342,
                      "end": 373
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 340,
                    "end": 373
                  }
                ],
                "start": 338,
                "end": 375
              },
              "start": 336,
              "end": 375
            },
            "start": 332,
            "end": 375
          },
          "init": null,
          "definite": false,
          "start": 332,
          "end": 375
        }
      ],
      "declare": false,
      "start": 328,
      "end": 376
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
            "start": 381,
            "end": 383
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 386,
              "end": 389
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 390,
                "end": 394
              }
            ],
            "optional": false,
            "start": 386,
            "end": 395
          },
          "definite": false,
          "start": 381,
          "end": 395
        }
      ],
      "declare": false,
      "start": 377,
      "end": 396
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
            "name": "arg3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
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
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 418,
                      "end": 420
                    },
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 430,
                                "end": 436
                              },
                              "start": 428,
                              "end": 436
                            },
                            "start": 427,
                            "end": 436
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 441,
                                "end": 447
                              },
                              "start": 439,
                              "end": 447
                            },
                            "start": 438,
                            "end": 447
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 452,
                            "end": 458
                          },
                          "start": 449,
                          "end": 458
                        },
                        "start": 422,
                        "end": 458
                      },
                      "start": 420,
                      "end": 458
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 418,
                    "end": 458
                  }
                ],
                "start": 416,
                "end": 460
              },
              "start": 414,
              "end": 460
            },
            "start": 410,
            "end": 460
          },
          "init": null,
          "definite": false,
          "start": 410,
          "end": 460
        }
      ],
      "declare": false,
      "start": 406,
      "end": 461
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
            "start": 466,
            "end": 468
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 471,
              "end": 474
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arg3",
                "optional": false,
                "typeAnnotation": null,
                "start": 475,
                "end": 479
              }
            ],
            "optional": false,
            "start": 471,
            "end": 480
          },
          "definite": false,
          "start": 466,
          "end": 480
        }
      ],
      "declare": false,
      "start": 462,
      "end": 481
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 501,
        "end": 505
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
              "start": 506,
              "end": 507
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 506,
            "end": 507
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 509,
              "end": 510
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 509,
            "end": 510
          }
        ],
        "start": 505,
        "end": 511
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
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
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 519,
                    "end": 521
                  },
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
                                "start": 530,
                                "end": 531
                              },
                              "typeArguments": null,
                              "start": 530,
                              "end": 531
                            },
                            "start": 528,
                            "end": 531
                          },
                          "start": 527,
                          "end": 531
                        },
                        {
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
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 537,
                                "end": 538
                              },
                              "typeArguments": null,
                              "start": 537,
                              "end": 538
                            },
                            "start": 535,
                            "end": 538
                          },
                          "start": 533,
                          "end": 538
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
                            "start": 543,
                            "end": 544
                          },
                          "typeArguments": null,
                          "start": 543,
                          "end": 544
                        },
                        "start": 540,
                        "end": 544
                      },
                      "start": 523,
                      "end": 544
                    },
                    "start": 521,
                    "end": 544
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 519,
                  "end": 544
                }
              ],
              "start": 517,
              "end": 546
            },
            "start": 515,
            "end": 546
          },
          "start": 512,
          "end": 546
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 565,
                  "end": 568
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cb",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 569,
                  "end": 571
                },
                "optional": false,
                "computed": false,
                "start": 565,
                "end": 571
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 572,
                  "end": 576
                },
                {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 578,
                  "end": 582
                }
              ],
              "start": 561,
              "end": 583
            },
            "start": 554,
            "end": 584
          }
        ],
        "start": 548,
        "end": 586
      },
      "expression": false,
      "start": 492,
      "end": 586
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
            "start": 609,
            "end": 611
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 614,
              "end": 617
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 618,
                "end": 621
              }
            ],
            "optional": false,
            "start": 614,
            "end": 622
          },
          "definite": false,
          "start": 609,
          "end": 622
        }
      ],
      "declare": false,
      "start": 605,
      "end": 623
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
            "name": "arg4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
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
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 642,
                      "end": 644
                    },
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 654,
                                "end": 660
                              },
                              "start": 652,
                              "end": 660
                            },
                            "start": 651,
                            "end": 660
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 665,
                            "end": 671
                          },
                          "start": 662,
                          "end": 671
                        },
                        "start": 646,
                        "end": 671
                      },
                      "start": 644,
                      "end": 671
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 642,
                    "end": 671
                  }
                ],
                "start": 640,
                "end": 673
              },
              "start": 638,
              "end": 673
            },
            "start": 634,
            "end": 673
          },
          "init": null,
          "definite": false,
          "start": 634,
          "end": 673
        }
      ],
      "declare": false,
      "start": 630,
      "end": 674
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
            "start": 679,
            "end": 681
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 684,
              "end": 687
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arg4",
                "optional": false,
                "typeAnnotation": null,
                "start": 688,
                "end": 692
              }
            ],
            "optional": false,
            "start": 684,
            "end": 693
          },
          "definite": false,
          "start": 679,
          "end": 693
        }
      ],
      "declare": false,
      "start": 675,
      "end": 694
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
            "name": "arg5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
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
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 717,
                      "end": 719
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "abstract": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 731,
                            "end": 737
                          },
                          "start": 728,
                          "end": 737
                        },
                        "start": 721,
                        "end": 737
                      },
                      "start": 719,
                      "end": 737
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 717,
                    "end": 737
                  }
                ],
                "start": 715,
                "end": 739
              },
              "start": 713,
              "end": 739
            },
            "start": 709,
            "end": 739
          },
          "init": null,
          "definite": false,
          "start": 709,
          "end": 739
        }
      ],
      "declare": false,
      "start": 705,
      "end": 740
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
            "start": 745,
            "end": 747
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 750,
              "end": 753
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arg5",
                "optional": false,
                "typeAnnotation": null,
                "start": 754,
                "end": 758
              }
            ],
            "optional": false,
            "start": 750,
            "end": 759
          },
          "definite": false,
          "start": 745,
          "end": 759
        }
      ],
      "declare": false,
      "start": 741,
      "end": 760
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 156,
  "end": 770
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 156,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 165,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 175,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 182,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 184,
    "end": 185
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 186,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 196,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 204,
    "end": 205
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 210,
    "end": 216
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 217,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 221,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 225,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 227,
    "end": 228
  },
  {
    "type": "Null",
    "value": "null",
    "start": 228,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 235,
    "end": 236
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 238,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 242,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 249,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 251,
    "end": 252
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 253,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 266,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 269,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 277,
    "end": 278
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 279,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 287,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 291,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 295,
    "end": 296
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 328,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 332,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 338,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 340,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 342,
    "end": 343
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 344,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 351,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 364,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 367,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 375,
    "end": 376
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 377,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 381,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 386,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 390,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 395,
    "end": 396
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 406,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "arg3",
    "start": 410,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 418,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 420,
    "end": 421
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 422,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 430,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 441,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 449,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 452,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 460,
    "end": 461
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 462,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 466,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 469,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 471,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "arg3",
    "start": 475,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 480,
    "end": 481
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 492,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 501,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 505,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 507,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 512,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 519,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 521,
    "end": 522
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 523,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 526,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 533,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 540,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 548,
    "end": 549
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 554,
    "end": 560
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 561,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 565,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 569,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 571,
    "end": 572
  },
  {
    "type": "Null",
    "value": "null",
    "start": 572,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 576,
    "end": 577
  },
  {
    "type": "Null",
    "value": "null",
    "start": 578,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 585,
    "end": 586
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 605,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 609,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 612,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 614,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 617,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 618,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 622,
    "end": 623
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 630,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "arg4",
    "start": 634,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 640,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 642,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 644,
    "end": 645
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 646,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 650,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 651,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 652,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 654,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 662,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 665,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 673,
    "end": 674
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 675,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 679,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 682,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 684,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 687,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "arg4",
    "start": 688,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 693,
    "end": 694
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 705,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "arg5",
    "start": 709,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 715,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 717,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 719,
    "end": 720
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 721,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 728,
    "end": 730
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 731,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 739,
    "end": 740
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 741,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 745,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 748,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 750,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 753,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "arg5",
    "start": 754,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 759,
    "end": 760
  }
]
```
