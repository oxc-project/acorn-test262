__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "createTransform",
            "optional": false,
            "typeAnnotation": null,
            "start": 63,
            "end": 78
          },
          "init": {
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
                    "name": "I",
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
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "O",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 85,
                    "end": 86
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 85,
                  "end": 86
                }
              ],
              "start": 81,
              "end": 87
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "tr",
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
                        "name": "from",
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
                              "start": 99,
                              "end": 100
                            },
                            "typeArguments": null,
                            "start": 99,
                            "end": 100
                          },
                          "start": 97,
                          "end": 100
                        },
                        "start": 93,
                        "end": 100
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "O",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 105,
                          "end": 106
                        },
                        "typeArguments": null,
                        "start": 105,
                        "end": 106
                      },
                      "start": 102,
                      "end": 106
                    },
                    "start": 92,
                    "end": 106
                  },
                  "start": 90,
                  "end": 106
                },
                "start": 88,
                "end": 106
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "tr",
              "optional": false,
              "typeAnnotation": null,
              "start": 111,
              "end": 113
            },
            "id": null,
            "generator": false,
            "start": 81,
            "end": 113
          },
          "definite": false,
          "start": 63,
          "end": 113
        }
      ],
      "declare": false,
      "start": 57,
      "end": 114
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "withP2",
        "optional": false,
        "typeAnnotation": null,
        "start": 125,
        "end": 131
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
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 132,
              "end": 133
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 132,
            "end": 133
          }
        ],
        "start": 131,
        "end": 134
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
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
                "start": 138,
                "end": 139
              },
              "typeArguments": null,
              "start": 138,
              "end": 139
            },
            "start": 136,
            "end": 139
          },
          "start": 135,
          "end": 139
        }
      ],
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
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 151,
                  "end": 152
                },
                "init": {
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
                          "name": "I",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 156,
                          "end": 157
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 156,
                        "end": 157
                      }
                    ],
                    "start": 155,
                    "end": 159
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "from",
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
                            "start": 166,
                            "end": 167
                          },
                          "typeArguments": null,
                          "start": 166,
                          "end": 167
                        },
                        "start": 164,
                        "end": 167
                      },
                      "start": 160,
                      "end": 167
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "SpreadElement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "from",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 178,
                          "end": 182
                        },
                        "start": 175,
                        "end": 182
                      },
                      {
                        "type": "SpreadElement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 187,
                          "end": 188
                        },
                        "start": 184,
                        "end": 188
                      }
                    ],
                    "start": 173,
                    "end": 190
                  },
                  "id": null,
                  "generator": false,
                  "start": 155,
                  "end": 191
                },
                "definite": false,
                "start": 151,
                "end": 191
              }
            ],
            "declare": false,
            "start": 145,
            "end": 192
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "createTransform",
                "optional": false,
                "typeAnnotation": null,
                "start": 202,
                "end": 217
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 218,
                  "end": 219
                }
              ],
              "optional": false,
              "start": 202,
              "end": 220
            },
            "start": 195,
            "end": 221
          }
        ],
        "start": 141,
        "end": 223
      },
      "expression": false,
      "start": 116,
      "end": 223
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
            "name": "addP2",
            "optional": false,
            "typeAnnotation": null,
            "start": 231,
            "end": 236
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "withP2",
              "optional": false,
              "typeAnnotation": null,
              "start": 239,
              "end": 245
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
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 248,
                      "end": 251
                    },
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 253,
                      "end": 254
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 248,
                    "end": 254
                  }
                ],
                "start": 246,
                "end": 256
              }
            ],
            "optional": false,
            "start": 239,
            "end": 257
          },
          "definite": false,
          "start": 231,
          "end": 257
        }
      ],
      "declare": false,
      "start": 225,
      "end": 258
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
            "name": "added2",
            "optional": false,
            "typeAnnotation": null,
            "start": 265,
            "end": 271
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "addP2",
              "optional": false,
              "typeAnnotation": null,
              "start": 274,
              "end": 279
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
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 282,
                      "end": 285
                    },
                    "value": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 287,
                      "end": 288
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 282,
                    "end": 288
                  }
                ],
                "start": 280,
                "end": 290
              }
            ],
            "optional": false,
            "start": 274,
            "end": 291
          },
          "definite": false,
          "start": 265,
          "end": 291
        }
      ],
      "declare": false,
      "start": 259,
      "end": 292
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "withP3",
        "optional": false,
        "typeAnnotation": null,
        "start": 303,
        "end": 309
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
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 310,
              "end": 311
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 310,
            "end": 311
          }
        ],
        "start": 309,
        "end": 312
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
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
                "start": 316,
                "end": 317
              },
              "typeArguments": null,
              "start": 316,
              "end": 317
            },
            "start": 314,
            "end": 317
          },
          "start": 313,
          "end": 317
        }
      ],
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
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 329,
                  "end": 330
                },
                "init": {
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
                          "name": "I",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 338,
                          "end": 339
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 338,
                        "end": 339
                      }
                    ],
                    "start": 337,
                    "end": 341
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "from",
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
                            "start": 348,
                            "end": 349
                          },
                          "typeArguments": null,
                          "start": 348,
                          "end": 349
                        },
                        "start": 346,
                        "end": 349
                      },
                      "start": 342,
                      "end": 349
                    }
                  ],
                  "returnType": null,
                  "body": {
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
                            "name": "I2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 359,
                            "end": 361
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 359,
                          "end": 361
                        }
                      ],
                      "start": 358,
                      "end": 363
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "from2",
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
                              "start": 371,
                              "end": 373
                            },
                            "typeArguments": null,
                            "start": 371,
                            "end": 373
                          },
                          "start": 369,
                          "end": 373
                        },
                        "start": 364,
                        "end": 373
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "SpreadElement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "from",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 384,
                            "end": 388
                          },
                          "start": 381,
                          "end": 388
                        },
                        {
                          "type": "SpreadElement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "from2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 393,
                            "end": 398
                          },
                          "start": 390,
                          "end": 398
                        },
                        {
                          "type": "SpreadElement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "p",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 403,
                            "end": 404
                          },
                          "start": 400,
                          "end": 404
                        }
                      ],
                      "start": 379,
                      "end": 406
                    },
                    "id": null,
                    "generator": false,
                    "start": 358,
                    "end": 407
                  },
                  "id": null,
                  "generator": false,
                  "start": 337,
                  "end": 407
                },
                "definite": false,
                "start": 329,
                "end": 407
              }
            ],
            "declare": false,
            "start": 323,
            "end": 408
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "createTransform",
                "optional": false,
                "typeAnnotation": null,
                "start": 418,
                "end": 433
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 434,
                  "end": 435
                }
              ],
              "optional": false,
              "start": 418,
              "end": 436
            },
            "start": 411,
            "end": 437
          }
        ],
        "start": 319,
        "end": 439
      },
      "expression": false,
      "start": 294,
      "end": 439
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
            "name": "addP3",
            "optional": false,
            "typeAnnotation": null,
            "start": 447,
            "end": 452
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "withP3",
              "optional": false,
              "typeAnnotation": null,
              "start": 455,
              "end": 461
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 464,
                      "end": 465
                    },
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 467,
                      "end": 468
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 464,
                    "end": 468
                  }
                ],
                "start": 462,
                "end": 470
              }
            ],
            "optional": false,
            "start": 455,
            "end": 471
          },
          "definite": false,
          "start": 447,
          "end": 471
        }
      ],
      "declare": false,
      "start": 441,
      "end": 472
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
            "name": "addedSome3",
            "optional": false,
            "typeAnnotation": null,
            "start": 479,
            "end": 489
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "addP3",
              "optional": false,
              "typeAnnotation": null,
              "start": 492,
              "end": 497
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
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 500,
                      "end": 501
                    },
                    "value": {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 503,
                      "end": 505
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 500,
                    "end": 505
                  }
                ],
                "start": 498,
                "end": 507
              }
            ],
            "optional": false,
            "start": 492,
            "end": 508
          },
          "definite": false,
          "start": 479,
          "end": 508
        }
      ],
      "declare": false,
      "start": 473,
      "end": 509
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
            "name": "added3",
            "optional": false,
            "typeAnnotation": null,
            "start": 516,
            "end": 522
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "addedSome3",
              "optional": false,
              "typeAnnotation": null,
              "start": 525,
              "end": 535
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
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 538,
                      "end": 539
                    },
                    "value": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 541,
                      "end": 545
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 538,
                    "end": 545
                  }
                ],
                "start": 536,
                "end": 547
              }
            ],
            "optional": false,
            "start": 525,
            "end": 548
          },
          "definite": false,
          "start": 516,
          "end": 548
        }
      ],
      "declare": false,
      "start": 510,
      "end": 549
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
            "name": "addP3_other",
            "optional": false,
            "typeAnnotation": null,
            "start": 557,
            "end": 568
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "withP3",
              "optional": false,
              "typeAnnotation": null,
              "start": 571,
              "end": 577
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
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 580,
                      "end": 583
                    },
                    "value": {
                      "type": "Literal",
                      "value": "bar",
                      "raw": "'bar'",
                      "start": 585,
                      "end": 590
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 580,
                    "end": 590
                  }
                ],
                "start": 578,
                "end": 592
              }
            ],
            "optional": false,
            "start": 571,
            "end": 593
          },
          "definite": false,
          "start": 557,
          "end": 593
        }
      ],
      "declare": false,
      "start": 551,
      "end": 594
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
            "name": "addedSome3_other",
            "optional": false,
            "typeAnnotation": null,
            "start": 601,
            "end": 617
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "addP3_other",
              "optional": false,
              "typeAnnotation": null,
              "start": 620,
              "end": 631
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
                      "name": "qwerty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 634,
                      "end": 640
                    },
                    "value": {
                      "type": "Literal",
                      "value": 123,
                      "raw": "123",
                      "start": 642,
                      "end": 645
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 634,
                    "end": 645
                  }
                ],
                "start": 632,
                "end": 647
              }
            ],
            "optional": false,
            "start": 620,
            "end": 648
          },
          "definite": false,
          "start": 601,
          "end": 648
        }
      ],
      "declare": false,
      "start": 595,
      "end": 649
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
            "name": "added3_other",
            "optional": false,
            "typeAnnotation": null,
            "start": 656,
            "end": 668
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "addedSome3_other",
              "optional": false,
              "typeAnnotation": null,
              "start": 671,
              "end": 687
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
                      "name": "bazinga",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 690,
                      "end": 697
                    },
                    "value": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 699,
                      "end": 703
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 690,
                    "end": 703
                  }
                ],
                "start": 688,
                "end": 705
              }
            ],
            "optional": false,
            "start": 671,
            "end": 706
          },
          "definite": false,
          "start": 656,
          "end": 706
        }
      ],
      "declare": false,
      "start": 650,
      "end": 707
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 707
}
```
