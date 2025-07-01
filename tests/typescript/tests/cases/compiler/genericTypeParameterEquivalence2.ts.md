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
        "name": "compose",
        "optional": false,
        "typeAnnotation": null,
        "start": 50,
        "end": 57
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
              "start": 58,
              "end": 59
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 58,
            "end": 59
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 61,
              "end": 62
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 61,
            "end": 62
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 64,
              "end": 65
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 64,
            "end": 65
          }
        ],
        "start": 57,
        "end": 66
      },
      "params": [
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 74,
                        "end": 75
                      },
                      "typeArguments": null,
                      "start": 74,
                      "end": 75
                    },
                    "start": 72,
                    "end": 75
                  },
                  "start": 71,
                  "end": 75
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 80,
                    "end": 81
                  },
                  "typeArguments": null,
                  "start": 80,
                  "end": 81
                },
                "start": 77,
                "end": 81
              },
              "start": 70,
              "end": 81
            },
            "start": 68,
            "end": 81
          },
          "start": 67,
          "end": 81
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
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
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 89,
                        "end": 90
                      },
                      "typeArguments": null,
                      "start": 89,
                      "end": 90
                    },
                    "start": 88,
                    "end": 90
                  },
                  "start": 87,
                  "end": 90
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
                    "start": 95,
                    "end": 96
                  },
                  "typeArguments": null,
                  "start": 95,
                  "end": 96
                },
                "start": 92,
                "end": 96
              },
              "start": 86,
              "end": 96
            },
            "start": 84,
            "end": 96
          },
          "start": 83,
          "end": 96
        }
      ],
      "returnType": {
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
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 102,
                    "end": 103
                  },
                  "typeArguments": null,
                  "start": 102,
                  "end": 103
                },
                "start": 101,
                "end": 103
              },
              "start": 100,
              "end": 103
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 108,
                "end": 109
              },
              "typeArguments": null,
              "start": 108,
              "end": 109
            },
            "start": 105,
            "end": 109
          },
          "start": 99,
          "end": 109
        },
        "start": 97,
        "end": 109
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 135,
                        "end": 136
                      },
                      "typeArguments": null,
                      "start": 135,
                      "end": 136
                    },
                    "start": 134,
                    "end": 136
                  },
                  "start": 133,
                  "end": 136
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 140,
                    "end": 141
                  },
                  "typeArguments": null,
                  "start": 140,
                  "end": 141
                },
                "start": 138,
                "end": 141
              },
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
                        "name": "f",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 159,
                        "end": 160
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "g",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 161,
                              "end": 162
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "apply",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 163,
                              "end": 168
                            },
                            "optional": false,
                            "computed": false,
                            "start": 161,
                            "end": 168
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 169,
                              "end": 173
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 175,
                              "end": 176
                            }
                          ],
                          "optional": false,
                          "start": 161,
                          "end": 177
                        }
                      ],
                      "optional": false,
                      "start": 159,
                      "end": 178
                    },
                    "start": 152,
                    "end": 179
                  }
                ],
                "start": 142,
                "end": 185
              },
              "expression": false,
              "start": 123,
              "end": 185
            },
            "start": 116,
            "end": 186
          }
        ],
        "start": 110,
        "end": 188
      },
      "expression": false,
      "start": 41,
      "end": 188
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "forEach",
        "optional": false,
        "typeAnnotation": null,
        "start": 236,
        "end": 243
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
              "start": 244,
              "end": 245
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 244,
            "end": 245
          }
        ],
        "start": 243,
        "end": 246
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "list",
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
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 253,
                  "end": 254
                },
                "typeArguments": null,
                "start": 253,
                "end": 254
              },
              "start": 253,
              "end": 256
            },
            "start": 251,
            "end": 256
          },
          "start": 247,
          "end": 256
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
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 265,
                        "end": 266
                      },
                      "typeArguments": null,
                      "start": 265,
                      "end": 266
                    },
                    "start": 263,
                    "end": 266
                  },
                  "start": 262,
                  "end": 266
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 272,
                      "end": 278
                    },
                    "start": 270,
                    "end": 278
                  },
                  "start": 268,
                  "end": 278
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 283,
                  "end": 287
                },
                "start": 280,
                "end": 287
              },
              "start": 261,
              "end": 287
            },
            "start": 259,
            "end": 287
          },
          "start": 258,
          "end": 287
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 291,
          "end": 295
        },
        "start": 289,
        "end": 295
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForStatement",
            "init": {
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
                    "typeAnnotation": null,
                    "start": 311,
                    "end": 312
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 315,
                    "end": 316
                  },
                  "definite": false,
                  "start": 311,
                  "end": 316
                }
              ],
              "declare": false,
              "start": 307,
              "end": 316
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 318,
                "end": 319
              },
              "operator": "<",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "list",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 322,
                  "end": 326
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 327,
                  "end": 333
                },
                "optional": false,
                "computed": false,
                "start": 322,
                "end": 333
              },
              "start": 318,
              "end": 333
            },
            "update": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 337,
                "end": 338
              },
              "start": 335,
              "end": 338
            },
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
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 350,
                      "end": 351
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "list",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 352,
                          "end": 356
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 357,
                          "end": 358
                        },
                        "optional": false,
                        "computed": true,
                        "start": 352,
                        "end": 359
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 361,
                        "end": 362
                      }
                    ],
                    "optional": false,
                    "start": 350,
                    "end": 363
                  },
                  "directive": null,
                  "start": 350,
                  "end": 364
                }
              ],
              "start": 340,
              "end": 370
            },
            "start": 302,
            "end": 370
          }
        ],
        "start": 296,
        "end": 372
      },
      "expression": false,
      "start": 227,
      "end": 372
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "filter",
        "optional": false,
        "typeAnnotation": null,
        "start": 420,
        "end": 426
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
              "start": 427,
              "end": 428
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 427,
            "end": 428
          }
        ],
        "start": 426,
        "end": 429
      },
      "params": [
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
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 437,
                        "end": 438
                      },
                      "typeArguments": null,
                      "start": 437,
                      "end": 438
                    },
                    "start": 435,
                    "end": 438
                  },
                  "start": 434,
                  "end": 438
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 443,
                  "end": 450
                },
                "start": 440,
                "end": 450
              },
              "start": 433,
              "end": 450
            },
            "start": 431,
            "end": 450
          },
          "start": 430,
          "end": 450
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "ar",
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
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 456,
                  "end": 457
                },
                "typeArguments": null,
                "start": 456,
                "end": 457
              },
              "start": 456,
              "end": 459
            },
            "start": 454,
            "end": 459
          },
          "start": 452,
          "end": 459
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 462,
              "end": 463
            },
            "typeArguments": null,
            "start": 462,
            "end": 463
          },
          "start": 462,
          "end": 465
        },
        "start": 460,
        "end": 465
      },
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
                  "name": "ret",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 476,
                  "end": 479
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 482,
                  "end": 484
                },
                "definite": false,
                "start": 476,
                "end": 484
              }
            ],
            "declare": false,
            "start": 472,
            "end": 485
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "forEach",
                "optional": false,
                "typeAnnotation": null,
                "start": 490,
                "end": 497
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 498,
                  "end": 500
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
                      "name": "el",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 503,
                      "end": 505
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "f",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 524,
                            "end": 525
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "el",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 526,
                              "end": 528
                            }
                          ],
                          "optional": false,
                          "start": 524,
                          "end": 529
                        },
                        "consequent": {
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
                                    "name": "ret",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 545,
                                    "end": 548
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "push",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 549,
                                    "end": 553
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 545,
                                  "end": 553
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "el",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 554,
                                    "end": 556
                                  }
                                ],
                                "optional": false,
                                "start": 545,
                                "end": 557
                              },
                              "directive": null,
                              "start": 545,
                              "end": 558
                            }
                          ],
                          "start": 531,
                          "end": 568
                        },
                        "alternate": null,
                        "start": 520,
                        "end": 568
                      }
                    ],
                    "start": 510,
                    "end": 574
                  },
                  "id": null,
                  "generator": false,
                  "start": 502,
                  "end": 574
                }
              ],
              "optional": false,
              "start": 490,
              "end": 576
            },
            "directive": null,
            "start": 490,
            "end": 577
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ret",
              "optional": false,
              "typeAnnotation": null,
              "start": 590,
              "end": 593
            },
            "start": 583,
            "end": 594
          }
        ],
        "start": 466,
        "end": 596
      },
      "expression": false,
      "start": 411,
      "end": 596
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "length2",
        "optional": false,
        "typeAnnotation": null,
        "start": 631,
        "end": 638
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
              "start": 639,
              "end": 640
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 639,
            "end": 640
          }
        ],
        "start": 638,
        "end": 641
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "ar",
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
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 646,
                  "end": 647
                },
                "typeArguments": null,
                "start": 646,
                "end": 647
              },
              "start": 646,
              "end": 649
            },
            "start": 644,
            "end": 649
          },
          "start": 642,
          "end": 649
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 652,
          "end": 658
        },
        "start": 650,
        "end": 658
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "ar",
                "optional": false,
                "typeAnnotation": null,
                "start": 672,
                "end": 674
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 675,
                "end": 681
              },
              "optional": false,
              "computed": false,
              "start": 672,
              "end": 681
            },
            "start": 665,
            "end": 682
          }
        ],
        "start": 659,
        "end": 684
      },
      "expression": false,
      "start": 622,
      "end": 684
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "curry1",
        "optional": false,
        "typeAnnotation": null,
        "start": 734,
        "end": 740
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
              "start": 741,
              "end": 742
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 741,
            "end": 742
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 744,
              "end": 745
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 744,
            "end": 745
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 747,
              "end": 748
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 747,
            "end": 748
          }
        ],
        "start": 740,
        "end": 749
      },
      "params": [
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
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 757,
                        "end": 758
                      },
                      "typeArguments": null,
                      "start": 757,
                      "end": 758
                    },
                    "start": 755,
                    "end": 758
                  },
                  "start": 754,
                  "end": 758
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
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 763,
                        "end": 764
                      },
                      "typeArguments": null,
                      "start": 763,
                      "end": 764
                    },
                    "start": 761,
                    "end": 764
                  },
                  "start": 760,
                  "end": 764
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 769,
                    "end": 770
                  },
                  "typeArguments": null,
                  "start": 769,
                  "end": 770
                },
                "start": 766,
                "end": 770
              },
              "start": 753,
              "end": 770
            },
            "start": 751,
            "end": 770
          },
          "start": 750,
          "end": 770
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "ax",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 778,
                    "end": 779
                  },
                  "typeArguments": null,
                  "start": 778,
                  "end": 779
                },
                "start": 776,
                "end": 779
              },
              "start": 774,
              "end": 779
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 789,
                        "end": 790
                      },
                      "typeArguments": null,
                      "start": 789,
                      "end": 790
                    },
                    "start": 787,
                    "end": 790
                  },
                  "start": 785,
                  "end": 790
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 795,
                    "end": 796
                  },
                  "typeArguments": null,
                  "start": 795,
                  "end": 796
                },
                "start": 792,
                "end": 796
              },
              "start": 784,
              "end": 796
            },
            "start": 781,
            "end": 796
          },
          "start": 773,
          "end": 796
        },
        "start": 771,
        "end": 796
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
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
                  "name": "ay",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 824,
                        "end": 825
                      },
                      "typeArguments": null,
                      "start": 824,
                      "end": 825
                    },
                    "start": 822,
                    "end": 825
                  },
                  "start": 820,
                  "end": 825
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
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
                          "name": "by",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "B",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 858,
                                "end": 859
                              },
                              "typeArguments": null,
                              "start": 858,
                              "end": 859
                            },
                            "start": 856,
                            "end": 859
                          },
                          "start": 854,
                          "end": 859
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
                                "name": "f",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 882,
                                "end": 883
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ay",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 884,
                                  "end": 886
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "by",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 888,
                                  "end": 890
                                }
                              ],
                              "optional": false,
                              "start": 882,
                              "end": 891
                            },
                            "start": 875,
                            "end": 892
                          }
                        ],
                        "start": 861,
                        "end": 902
                      },
                      "expression": false,
                      "start": 844,
                      "end": 902
                    },
                    "start": 837,
                    "end": 903
                  }
                ],
                "start": 827,
                "end": 909
              },
              "expression": false,
              "start": 810,
              "end": 909
            },
            "start": 803,
            "end": 910
          }
        ],
        "start": 797,
        "end": 912
      },
      "expression": false,
      "start": 725,
      "end": 912
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
            "name": "cfilter",
            "optional": false,
            "typeAnnotation": null,
            "start": 918,
            "end": 925
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "curry1",
              "optional": false,
              "typeAnnotation": null,
              "start": 928,
              "end": 934
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 935,
                "end": 941
              }
            ],
            "optional": false,
            "start": 928,
            "end": 942
          },
          "definite": false,
          "start": 918,
          "end": 942
        }
      ],
      "declare": false,
      "start": 914,
      "end": 943
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "countWhere_1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1172,
        "end": 1184
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
              "start": 1185,
              "end": 1186
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1185,
            "end": 1186
          }
        ],
        "start": 1184,
        "end": 1187
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "pred",
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
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1198,
                        "end": 1199
                      },
                      "typeArguments": null,
                      "start": 1198,
                      "end": 1199
                    },
                    "start": 1196,
                    "end": 1199
                  },
                  "start": 1195,
                  "end": 1199
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 1204,
                  "end": 1211
                },
                "start": 1201,
                "end": 1211
              },
              "start": 1194,
              "end": 1211
            },
            "start": 1192,
            "end": 1211
          },
          "start": 1188,
          "end": 1211
        }
      ],
      "returnType": {
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
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1218,
                      "end": 1219
                    },
                    "typeArguments": null,
                    "start": 1218,
                    "end": 1219
                  },
                  "start": 1218,
                  "end": 1221
                },
                "start": 1216,
                "end": 1221
              },
              "start": 1215,
              "end": 1221
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1226,
              "end": 1232
            },
            "start": 1223,
            "end": 1232
          },
          "start": 1214,
          "end": 1232
        },
        "start": 1212,
        "end": 1232
      },
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
                "name": "compose",
                "optional": false,
                "typeAnnotation": null,
                "start": 1246,
                "end": 1253
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1254,
                  "end": 1261
                },
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cfilter",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1263,
                    "end": 1270
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "pred",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1271,
                      "end": 1275
                    }
                  ],
                  "optional": false,
                  "start": 1263,
                  "end": 1276
                }
              ],
              "optional": false,
              "start": 1246,
              "end": 1277
            },
            "start": 1239,
            "end": 1278
          }
        ],
        "start": 1233,
        "end": 1280
      },
      "expression": false,
      "start": 1163,
      "end": 1280
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "countWhere_2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1291,
        "end": 1303
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
              "start": 1304,
              "end": 1305
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1304,
            "end": 1305
          }
        ],
        "start": 1303,
        "end": 1306
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "pred",
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
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1317,
                        "end": 1318
                      },
                      "typeArguments": null,
                      "start": 1317,
                      "end": 1318
                    },
                    "start": 1315,
                    "end": 1318
                  },
                  "start": 1314,
                  "end": 1318
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 1323,
                  "end": 1330
                },
                "start": 1320,
                "end": 1330
              },
              "start": 1313,
              "end": 1330
            },
            "start": 1311,
            "end": 1330
          },
          "start": 1307,
          "end": 1330
        }
      ],
      "returnType": {
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
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1337,
                      "end": 1338
                    },
                    "typeArguments": null,
                    "start": 1337,
                    "end": 1338
                  },
                  "start": 1337,
                  "end": 1340
                },
                "start": 1335,
                "end": 1340
              },
              "start": 1334,
              "end": 1340
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1345,
              "end": 1351
            },
            "start": 1342,
            "end": 1351
          },
          "start": 1333,
          "end": 1351
        },
        "start": 1331,
        "end": 1351
      },
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
                  "name": "where",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1362,
                  "end": 1367
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cfilter",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1370,
                    "end": 1377
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "pred",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1378,
                      "end": 1382
                    }
                  ],
                  "optional": false,
                  "start": 1370,
                  "end": 1383
                },
                "definite": false,
                "start": 1362,
                "end": 1383
              }
            ],
            "declare": false,
            "start": 1358,
            "end": 1384
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "compose",
                "optional": false,
                "typeAnnotation": null,
                "start": 1396,
                "end": 1403
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1404,
                  "end": 1411
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "where",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1413,
                  "end": 1418
                }
              ],
              "optional": false,
              "start": 1396,
              "end": 1419
            },
            "start": 1389,
            "end": 1420
          }
        ],
        "start": 1352,
        "end": 1422
      },
      "expression": false,
      "start": 1282,
      "end": 1422
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 41,
  "end": 1422
}
```
