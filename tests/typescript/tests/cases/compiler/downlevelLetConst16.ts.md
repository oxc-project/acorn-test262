__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "use strict",
        "raw": "'use strict'",
        "start": 0,
        "end": 12
      },
      "directive": "use strict",
      "start": 0,
      "end": 12
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "use",
        "optional": false,
        "typeAnnotation": null,
        "start": 31,
        "end": 34
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 38,
              "end": 41
            },
            "start": 36,
            "end": 41
          },
          "start": 35,
          "end": 41
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 14,
      "end": 43
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 49,
            "end": 50
          },
          "init": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 53,
            "end": 55
          },
          "definite": false,
          "start": 49,
          "end": 55
        }
      ],
      "declare": false,
      "start": 45,
      "end": 56
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 61,
            "end": 62
          },
          "init": null,
          "definite": false,
          "start": 61,
          "end": 62
        }
      ],
      "declare": false,
      "start": 57,
      "end": 63
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
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 68,
            "end": 69
          },
          "init": null,
          "definite": false,
          "start": 68,
          "end": 69
        }
      ],
      "declare": false,
      "start": 64,
      "end": 70
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "use",
          "optional": false,
          "typeAnnotation": null,
          "start": 71,
          "end": 74
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 75,
            "end": 76
          }
        ],
        "optional": false,
        "start": 71,
        "end": 77
      },
      "directive": null,
      "start": 71,
      "end": 78
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "use",
          "optional": false,
          "typeAnnotation": null,
          "start": 79,
          "end": 82
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 83,
            "end": 84
          }
        ],
        "optional": false,
        "start": 79,
        "end": 85
      },
      "directive": null,
      "start": 79,
      "end": 86
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "use",
          "optional": false,
          "typeAnnotation": null,
          "start": 87,
          "end": 90
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 91,
            "end": 92
          }
        ],
        "optional": false,
        "start": 87,
        "end": 93
      },
      "directive": null,
      "start": 87,
      "end": 94
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 104,
        "end": 108
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
                  "typeAnnotation": null,
                  "start": 121,
                  "end": 122
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 125,
                  "end": 126
                },
                "definite": false,
                "start": 121,
                "end": 126
              }
            ],
            "declare": false,
            "start": 117,
            "end": 127
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 132,
                "end": 135
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 136,
                  "end": 137
                }
              ],
              "optional": false,
              "start": 132,
              "end": 138
            },
            "directive": null,
            "start": 132,
            "end": 139
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 149,
                      "end": 150
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 148,
                  "end": 151
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 155,
                      "end": 156
                    }
                  ],
                  "start": 154,
                  "end": 157
                },
                "definite": false,
                "start": 148,
                "end": 157
              }
            ],
            "declare": false,
            "start": 144,
            "end": 158
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 163,
                "end": 166
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 167,
                  "end": 168
                }
              ],
              "optional": false,
              "start": 163,
              "end": 169
            },
            "directive": null,
            "start": 163,
            "end": 170
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
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
                        "start": 180,
                        "end": 181
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 183,
                        "end": 184
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 180,
                      "end": 184
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 179,
                  "end": 185
                },
                "init": {
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
                        "start": 189,
                        "end": 190
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 192,
                        "end": 193
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 189,
                      "end": 193
                    }
                  ],
                  "start": 188,
                  "end": 194
                },
                "definite": false,
                "start": 179,
                "end": 194
              }
            ],
            "declare": false,
            "start": 175,
            "end": 195
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 200,
                "end": 203
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 204,
                  "end": 205
                }
              ],
              "optional": false,
              "start": 200,
              "end": 206
            },
            "directive": null,
            "start": 200,
            "end": 207
          }
        ],
        "start": 111,
        "end": 209
      },
      "expression": false,
      "start": 95,
      "end": 209
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 220,
        "end": 224
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
                      "typeAnnotation": null,
                      "start": 247,
                      "end": 248
                    },
                    "init": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 251,
                      "end": 252
                    },
                    "definite": false,
                    "start": 247,
                    "end": 252
                  }
                ],
                "declare": false,
                "start": 243,
                "end": 253
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "use",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 262,
                    "end": 265
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 266,
                      "end": 267
                    }
                  ],
                  "optional": false,
                  "start": 262,
                  "end": 268
                },
                "directive": null,
                "start": 262,
                "end": 269
              },
              {
                "type": "VariableDeclaration",
                "kind": "let",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "ArrayPattern",
                      "decorators": [],
                      "elements": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 283,
                          "end": 284
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 282,
                      "end": 285
                    },
                    "init": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 289,
                          "end": 290
                        }
                      ],
                      "start": 288,
                      "end": 291
                    },
                    "definite": false,
                    "start": 282,
                    "end": 291
                  }
                ],
                "declare": false,
                "start": 278,
                "end": 292
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "use",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 301,
                    "end": 304
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 305,
                      "end": 306
                    }
                  ],
                  "optional": false,
                  "start": 301,
                  "end": 307
                },
                "directive": null,
                "start": 301,
                "end": 308
              },
              {
                "type": "VariableDeclaration",
                "kind": "let",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "ObjectPattern",
                      "decorators": [],
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
                            "start": 322,
                            "end": 323
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "z",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 325,
                            "end": 326
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 322,
                          "end": 326
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 321,
                      "end": 327
                    },
                    "init": {
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
                            "start": 332,
                            "end": 333
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 335,
                            "end": 336
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 332,
                          "end": 336
                        }
                      ],
                      "start": 330,
                      "end": 338
                    },
                    "definite": false,
                    "start": 321,
                    "end": 338
                  }
                ],
                "declare": false,
                "start": 317,
                "end": 339
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "use",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 348,
                    "end": 351
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 352,
                      "end": 353
                    }
                  ],
                  "optional": false,
                  "start": 348,
                  "end": 354
                },
                "directive": null,
                "start": 348,
                "end": 355
              }
            ],
            "start": 233,
            "end": 361
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 366,
                "end": 369
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 370,
                  "end": 371
                }
              ],
              "optional": false,
              "start": 366,
              "end": 372
            },
            "directive": null,
            "start": 366,
            "end": 373
          }
        ],
        "start": 227,
        "end": 375
      },
      "expression": false,
      "start": 211,
      "end": 375
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 383,
        "end": 384
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
              "name": "m1",
              "optional": false,
              "typeAnnotation": null,
              "start": 391,
              "end": 393
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                          "typeAnnotation": null,
                          "start": 410,
                          "end": 411
                        },
                        "init": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 414,
                          "end": 415
                        },
                        "definite": false,
                        "start": 410,
                        "end": 415
                      }
                    ],
                    "declare": false,
                    "start": 406,
                    "end": 416
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "use",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 425,
                        "end": 428
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 429,
                          "end": 430
                        }
                      ],
                      "optional": false,
                      "start": 425,
                      "end": 431
                    },
                    "directive": null,
                    "start": 425,
                    "end": 432
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "ArrayPattern",
                          "decorators": [],
                          "elements": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 446,
                              "end": 447
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 445,
                          "end": 448
                        },
                        "init": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 452,
                              "end": 453
                            }
                          ],
                          "start": 451,
                          "end": 454
                        },
                        "definite": false,
                        "start": 445,
                        "end": 454
                      }
                    ],
                    "declare": false,
                    "start": 441,
                    "end": 455
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "use",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 464,
                        "end": 467
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 468,
                          "end": 469
                        }
                      ],
                      "optional": false,
                      "start": 464,
                      "end": 470
                    },
                    "directive": null,
                    "start": 464,
                    "end": 471
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "ObjectPattern",
                          "decorators": [],
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
                                "start": 485,
                                "end": 486
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "z",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 488,
                                "end": 489
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 485,
                              "end": 489
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 484,
                          "end": 490
                        },
                        "init": {
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
                                "start": 495,
                                "end": 496
                              },
                              "value": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 498,
                                "end": 499
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 495,
                              "end": 499
                            }
                          ],
                          "start": 493,
                          "end": 501
                        },
                        "definite": false,
                        "start": 484,
                        "end": 501
                      }
                    ],
                    "declare": false,
                    "start": 480,
                    "end": 502
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "use",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 511,
                        "end": 514
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 515,
                          "end": 516
                        }
                      ],
                      "optional": false,
                      "start": 511,
                      "end": 517
                    },
                    "directive": null,
                    "start": 511,
                    "end": 518
                  }
                ],
                "start": 396,
                "end": 524
              },
              "expression": false,
              "start": 393,
              "end": 524
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 391,
            "end": 524
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null,
              "start": 529,
              "end": 531
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                              "typeAnnotation": null,
                              "start": 562,
                              "end": 563
                            },
                            "init": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 566,
                              "end": 567
                            },
                            "definite": false,
                            "start": 562,
                            "end": 567
                          }
                        ],
                        "declare": false,
                        "start": 558,
                        "end": 568
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "use",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 581,
                            "end": 584
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 585,
                              "end": 586
                            }
                          ],
                          "optional": false,
                          "start": 581,
                          "end": 587
                        },
                        "directive": null,
                        "start": 581,
                        "end": 588
                      },
                      {
                        "type": "VariableDeclaration",
                        "kind": "let",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "ArrayPattern",
                              "decorators": [],
                              "elements": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "y",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 606,
                                  "end": 607
                                }
                              ],
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 605,
                              "end": 608
                            },
                            "init": {
                              "type": "ArrayExpression",
                              "elements": [
                                {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1",
                                  "start": 612,
                                  "end": 613
                                }
                              ],
                              "start": 611,
                              "end": 614
                            },
                            "definite": false,
                            "start": 605,
                            "end": 614
                          }
                        ],
                        "declare": false,
                        "start": 601,
                        "end": 615
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "use",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 628,
                            "end": 631
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 632,
                              "end": 633
                            }
                          ],
                          "optional": false,
                          "start": 628,
                          "end": 634
                        },
                        "directive": null,
                        "start": 628,
                        "end": 635
                      },
                      {
                        "type": "VariableDeclaration",
                        "kind": "let",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "ObjectPattern",
                              "decorators": [],
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
                                    "start": 653,
                                    "end": 654
                                  },
                                  "value": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "z",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 656,
                                    "end": 657
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 653,
                                  "end": 657
                                }
                              ],
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 652,
                              "end": 658
                            },
                            "init": {
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
                                    "start": 663,
                                    "end": 664
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1",
                                    "start": 666,
                                    "end": 667
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 663,
                                  "end": 667
                                }
                              ],
                              "start": 661,
                              "end": 669
                            },
                            "definite": false,
                            "start": 652,
                            "end": 669
                          }
                        ],
                        "declare": false,
                        "start": 648,
                        "end": 670
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "use",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 683,
                            "end": 686
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "z",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 687,
                              "end": 688
                            }
                          ],
                          "optional": false,
                          "start": 683,
                          "end": 689
                        },
                        "directive": null,
                        "start": 683,
                        "end": 690
                      }
                    ],
                    "start": 544,
                    "end": 700
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "use",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 709,
                        "end": 712
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 713,
                          "end": 714
                        }
                      ],
                      "optional": false,
                      "start": 709,
                      "end": 715
                    },
                    "directive": null,
                    "start": 709,
                    "end": 716
                  }
                ],
                "start": 534,
                "end": 722
              },
              "expression": false,
              "start": 531,
              "end": 722
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 529,
            "end": 722
          }
        ],
        "start": 385,
        "end": 725
      },
      "abstract": false,
      "declare": false,
      "start": 377,
      "end": 725
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 733,
        "end": 734
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
              "name": "m1",
              "optional": false,
              "typeAnnotation": null,
              "start": 741,
              "end": 743
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                          "start": 762,
                          "end": 763
                        },
                        "init": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 766,
                          "end": 767
                        },
                        "definite": false,
                        "start": 762,
                        "end": 767
                      }
                    ],
                    "declare": false,
                    "start": 756,
                    "end": 768
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "use",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 777,
                        "end": 780
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 781,
                          "end": 782
                        }
                      ],
                      "optional": false,
                      "start": 777,
                      "end": 783
                    },
                    "directive": null,
                    "start": 777,
                    "end": 784
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "ArrayPattern",
                          "decorators": [],
                          "elements": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 800,
                              "end": 801
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 799,
                          "end": 802
                        },
                        "init": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 806,
                              "end": 807
                            }
                          ],
                          "start": 805,
                          "end": 808
                        },
                        "definite": false,
                        "start": 799,
                        "end": 808
                      }
                    ],
                    "declare": false,
                    "start": 793,
                    "end": 809
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "use",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 818,
                        "end": 821
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 822,
                          "end": 823
                        }
                      ],
                      "optional": false,
                      "start": 818,
                      "end": 824
                    },
                    "directive": null,
                    "start": 818,
                    "end": 825
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "ObjectPattern",
                          "decorators": [],
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
                                "start": 841,
                                "end": 842
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "z",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 844,
                                "end": 845
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 841,
                              "end": 845
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 840,
                          "end": 846
                        },
                        "init": {
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
                                "start": 851,
                                "end": 852
                              },
                              "value": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 854,
                                "end": 855
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 851,
                              "end": 855
                            }
                          ],
                          "start": 849,
                          "end": 857
                        },
                        "definite": false,
                        "start": 840,
                        "end": 857
                      }
                    ],
                    "declare": false,
                    "start": 834,
                    "end": 858
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "use",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 867,
                        "end": 870
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 871,
                          "end": 872
                        }
                      ],
                      "optional": false,
                      "start": 867,
                      "end": 873
                    },
                    "directive": null,
                    "start": 867,
                    "end": 874
                  }
                ],
                "start": 746,
                "end": 881
              },
              "expression": false,
              "start": 743,
              "end": 881
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 741,
            "end": 881
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null,
              "start": 886,
              "end": 888
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 921,
                              "end": 922
                            },
                            "init": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 925,
                              "end": 926
                            },
                            "definite": false,
                            "start": 921,
                            "end": 926
                          }
                        ],
                        "declare": false,
                        "start": 915,
                        "end": 927
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "use",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 940,
                            "end": 943
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 944,
                              "end": 945
                            }
                          ],
                          "optional": false,
                          "start": 940,
                          "end": 946
                        },
                        "directive": null,
                        "start": 940,
                        "end": 947
                      },
                      {
                        "type": "VariableDeclaration",
                        "kind": "const",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "ArrayPattern",
                              "decorators": [],
                              "elements": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "y",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 967,
                                  "end": 968
                                }
                              ],
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 966,
                              "end": 969
                            },
                            "init": {
                              "type": "ArrayExpression",
                              "elements": [
                                {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1",
                                  "start": 973,
                                  "end": 974
                                }
                              ],
                              "start": 972,
                              "end": 975
                            },
                            "definite": false,
                            "start": 966,
                            "end": 975
                          }
                        ],
                        "declare": false,
                        "start": 960,
                        "end": 976
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "use",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 989,
                            "end": 992
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 993,
                              "end": 994
                            }
                          ],
                          "optional": false,
                          "start": 989,
                          "end": 995
                        },
                        "directive": null,
                        "start": 989,
                        "end": 996
                      },
                      {
                        "type": "VariableDeclaration",
                        "kind": "const",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "ObjectPattern",
                              "decorators": [],
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
                                    "start": 1016,
                                    "end": 1017
                                  },
                                  "value": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "z",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1019,
                                    "end": 1020
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 1016,
                                  "end": 1020
                                }
                              ],
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1015,
                              "end": 1021
                            },
                            "init": {
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
                                    "start": 1026,
                                    "end": 1027
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1",
                                    "start": 1029,
                                    "end": 1030
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 1026,
                                  "end": 1030
                                }
                              ],
                              "start": 1024,
                              "end": 1032
                            },
                            "definite": false,
                            "start": 1015,
                            "end": 1032
                          }
                        ],
                        "declare": false,
                        "start": 1009,
                        "end": 1033
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "use",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1046,
                            "end": 1049
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "z",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1050,
                              "end": 1051
                            }
                          ],
                          "optional": false,
                          "start": 1046,
                          "end": 1052
                        },
                        "directive": null,
                        "start": 1046,
                        "end": 1053
                      }
                    ],
                    "start": 901,
                    "end": 1064
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "use",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1073,
                        "end": 1076
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1077,
                          "end": 1078
                        }
                      ],
                      "optional": false,
                      "start": 1073,
                      "end": 1079
                    },
                    "directive": null,
                    "start": 1073,
                    "end": 1080
                  }
                ],
                "start": 891,
                "end": 1086
              },
              "expression": false,
              "start": 888,
              "end": 1086
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 886,
            "end": 1086
          }
        ],
        "start": 735,
        "end": 1088
      },
      "abstract": false,
      "declare": false,
      "start": 727,
      "end": 1088
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1099,
        "end": 1103
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
                  "start": 1118,
                  "end": 1119
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1122,
                  "end": 1123
                },
                "definite": false,
                "start": 1118,
                "end": 1123
              }
            ],
            "declare": false,
            "start": 1112,
            "end": 1124
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 1129,
                "end": 1132
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1133,
                  "end": 1134
                }
              ],
              "optional": false,
              "start": 1129,
              "end": 1135
            },
            "directive": null,
            "start": 1129,
            "end": 1136
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1148,
                      "end": 1149
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1147,
                  "end": 1150
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1154,
                      "end": 1155
                    }
                  ],
                  "start": 1153,
                  "end": 1156
                },
                "definite": false,
                "start": 1147,
                "end": 1156
              }
            ],
            "declare": false,
            "start": 1141,
            "end": 1157
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 1162,
                "end": 1165
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1166,
                  "end": 1167
                }
              ],
              "optional": false,
              "start": 1162,
              "end": 1168
            },
            "directive": null,
            "start": 1162,
            "end": 1169
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
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
                        "start": 1181,
                        "end": 1182
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1184,
                        "end": 1185
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1181,
                      "end": 1185
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1180,
                  "end": 1186
                },
                "init": {
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
                        "start": 1191,
                        "end": 1192
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1194,
                        "end": 1195
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1191,
                      "end": 1195
                    }
                  ],
                  "start": 1189,
                  "end": 1197
                },
                "definite": false,
                "start": 1180,
                "end": 1197
              }
            ],
            "declare": false,
            "start": 1174,
            "end": 1198
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 1203,
                "end": 1206
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1207,
                  "end": 1208
                }
              ],
              "optional": false,
              "start": 1203,
              "end": 1209
            },
            "directive": null,
            "start": 1203,
            "end": 1210
          }
        ],
        "start": 1106,
        "end": 1212
      },
      "expression": false,
      "start": 1090,
      "end": 1212
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1223,
        "end": 1227
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1252,
                      "end": 1253
                    },
                    "init": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1256,
                      "end": 1257
                    },
                    "definite": false,
                    "start": 1252,
                    "end": 1257
                  }
                ],
                "declare": false,
                "start": 1246,
                "end": 1258
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "use",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1267,
                    "end": 1270
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1271,
                      "end": 1272
                    }
                  ],
                  "optional": false,
                  "start": 1267,
                  "end": 1273
                },
                "directive": null,
                "start": 1267,
                "end": 1274
              },
              {
                "type": "VariableDeclaration",
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "ArrayPattern",
                      "decorators": [],
                      "elements": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1290,
                          "end": 1291
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1289,
                      "end": 1292
                    },
                    "init": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1296,
                          "end": 1297
                        }
                      ],
                      "start": 1295,
                      "end": 1298
                    },
                    "definite": false,
                    "start": 1289,
                    "end": 1298
                  }
                ],
                "declare": false,
                "start": 1283,
                "end": 1299
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "use",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1308,
                    "end": 1311
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1312,
                      "end": 1313
                    }
                  ],
                  "optional": false,
                  "start": 1308,
                  "end": 1314
                },
                "directive": null,
                "start": 1308,
                "end": 1315
              },
              {
                "type": "VariableDeclaration",
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "ObjectPattern",
                      "decorators": [],
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
                            "start": 1331,
                            "end": 1332
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "z",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1334,
                            "end": 1335
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1331,
                          "end": 1335
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1330,
                      "end": 1336
                    },
                    "init": {
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
                            "start": 1341,
                            "end": 1342
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1344,
                            "end": 1345
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1341,
                          "end": 1345
                        }
                      ],
                      "start": 1339,
                      "end": 1347
                    },
                    "definite": false,
                    "start": 1330,
                    "end": 1347
                  }
                ],
                "declare": false,
                "start": 1324,
                "end": 1348
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "use",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1357,
                    "end": 1360
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1361,
                      "end": 1362
                    }
                  ],
                  "optional": false,
                  "start": 1357,
                  "end": 1363
                },
                "directive": null,
                "start": 1357,
                "end": 1364
              }
            ],
            "start": 1236,
            "end": 1371
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 1376,
                "end": 1379
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1380,
                  "end": 1381
                }
              ],
              "optional": false,
              "start": 1376,
              "end": 1382
            },
            "directive": null,
            "start": 1376,
            "end": 1383
          }
        ],
        "start": 1230,
        "end": 1385
      },
      "expression": false,
      "start": 1214,
      "end": 1385
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1394,
        "end": 1396
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "typeAnnotation": null,
                  "start": 1407,
                  "end": 1408
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1411,
                  "end": 1412
                },
                "definite": false,
                "start": 1407,
                "end": 1412
              }
            ],
            "declare": false,
            "start": 1403,
            "end": 1413
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 1418,
                "end": 1421
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1422,
                  "end": 1423
                }
              ],
              "optional": false,
              "start": 1418,
              "end": 1424
            },
            "directive": null,
            "start": 1418,
            "end": 1425
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1435,
                      "end": 1436
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1434,
                  "end": 1437
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1441,
                      "end": 1442
                    }
                  ],
                  "start": 1440,
                  "end": 1443
                },
                "definite": false,
                "start": 1434,
                "end": 1443
              }
            ],
            "declare": false,
            "start": 1430,
            "end": 1444
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 1449,
                "end": 1452
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1453,
                  "end": 1454
                }
              ],
              "optional": false,
              "start": 1449,
              "end": 1455
            },
            "directive": null,
            "start": 1449,
            "end": 1456
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
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
                        "start": 1466,
                        "end": 1467
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1469,
                        "end": 1470
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1466,
                      "end": 1470
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1465,
                  "end": 1471
                },
                "init": {
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
                        "start": 1476,
                        "end": 1477
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1479,
                        "end": 1480
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1476,
                      "end": 1480
                    }
                  ],
                  "start": 1474,
                  "end": 1482
                },
                "definite": false,
                "start": 1465,
                "end": 1482
              }
            ],
            "declare": false,
            "start": 1461,
            "end": 1483
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 1488,
                "end": 1491
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1492,
                  "end": 1493
                }
              ],
              "optional": false,
              "start": 1488,
              "end": 1494
            },
            "directive": null,
            "start": 1488,
            "end": 1495
          }
        ],
        "start": 1397,
        "end": 1497
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 1387,
      "end": 1497
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1506,
        "end": 1508
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
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
                      "typeAnnotation": null,
                      "start": 1529,
                      "end": 1530
                    },
                    "init": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1533,
                      "end": 1534
                    },
                    "definite": false,
                    "start": 1529,
                    "end": 1534
                  }
                ],
                "declare": false,
                "start": 1525,
                "end": 1535
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "use",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1544,
                    "end": 1547
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1548,
                      "end": 1549
                    }
                  ],
                  "optional": false,
                  "start": 1544,
                  "end": 1550
                },
                "directive": null,
                "start": 1544,
                "end": 1551
              },
              {
                "type": "VariableDeclaration",
                "kind": "let",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "ArrayPattern",
                      "decorators": [],
                      "elements": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1565,
                          "end": 1566
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1564,
                      "end": 1567
                    },
                    "init": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1571,
                          "end": 1572
                        }
                      ],
                      "start": 1570,
                      "end": 1573
                    },
                    "definite": false,
                    "start": 1564,
                    "end": 1573
                  }
                ],
                "declare": false,
                "start": 1560,
                "end": 1574
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "use",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1583,
                    "end": 1586
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1587,
                      "end": 1588
                    }
                  ],
                  "optional": false,
                  "start": 1583,
                  "end": 1589
                },
                "directive": null,
                "start": 1583,
                "end": 1590
              },
              {
                "type": "VariableDeclaration",
                "kind": "let",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "ObjectPattern",
                      "decorators": [],
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
                            "start": 1604,
                            "end": 1605
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "z",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1607,
                            "end": 1608
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1604,
                          "end": 1608
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1603,
                      "end": 1609
                    },
                    "init": {
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
                            "start": 1614,
                            "end": 1615
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1617,
                            "end": 1618
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1614,
                          "end": 1618
                        }
                      ],
                      "start": 1612,
                      "end": 1620
                    },
                    "definite": false,
                    "start": 1603,
                    "end": 1620
                  }
                ],
                "declare": false,
                "start": 1599,
                "end": 1621
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "use",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1630,
                    "end": 1633
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1634,
                      "end": 1635
                    }
                  ],
                  "optional": false,
                  "start": 1630,
                  "end": 1636
                },
                "directive": null,
                "start": 1630,
                "end": 1637
              }
            ],
            "start": 1515,
            "end": 1643
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 1648,
                "end": 1651
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1652,
                  "end": 1653
                }
              ],
              "optional": false,
              "start": 1648,
              "end": 1654
            },
            "directive": null,
            "start": 1648,
            "end": 1655
          }
        ],
        "start": 1509,
        "end": 1657
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 1499,
      "end": 1657
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1666,
        "end": 1668
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1681,
                  "end": 1682
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1685,
                  "end": 1686
                },
                "definite": false,
                "start": 1681,
                "end": 1686
              }
            ],
            "declare": false,
            "start": 1675,
            "end": 1687
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 1692,
                "end": 1695
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1696,
                  "end": 1697
                }
              ],
              "optional": false,
              "start": 1692,
              "end": 1698
            },
            "directive": null,
            "start": 1692,
            "end": 1699
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1711,
                      "end": 1712
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1710,
                  "end": 1713
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1717,
                      "end": 1718
                    }
                  ],
                  "start": 1716,
                  "end": 1719
                },
                "definite": false,
                "start": 1710,
                "end": 1719
              }
            ],
            "declare": false,
            "start": 1704,
            "end": 1720
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 1725,
                "end": 1728
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1729,
                  "end": 1730
                }
              ],
              "optional": false,
              "start": 1725,
              "end": 1731
            },
            "directive": null,
            "start": 1725,
            "end": 1732
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
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
                        "start": 1744,
                        "end": 1745
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1747,
                        "end": 1748
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1744,
                      "end": 1748
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1743,
                  "end": 1749
                },
                "init": {
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
                        "start": 1754,
                        "end": 1755
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1757,
                        "end": 1758
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1754,
                      "end": 1758
                    }
                  ],
                  "start": 1752,
                  "end": 1760
                },
                "definite": false,
                "start": 1743,
                "end": 1760
              }
            ],
            "declare": false,
            "start": 1737,
            "end": 1761
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 1766,
                "end": 1769
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1770,
                  "end": 1771
                }
              ],
              "optional": false,
              "start": 1766,
              "end": 1772
            },
            "directive": null,
            "start": 1766,
            "end": 1773
          }
        ],
        "start": 1669,
        "end": 1776
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 1659,
      "end": 1776
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1785,
        "end": 1787
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1810,
                      "end": 1811
                    },
                    "init": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1814,
                      "end": 1815
                    },
                    "definite": false,
                    "start": 1810,
                    "end": 1815
                  }
                ],
                "declare": false,
                "start": 1804,
                "end": 1816
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "use",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1825,
                    "end": 1828
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1829,
                      "end": 1830
                    }
                  ],
                  "optional": false,
                  "start": 1825,
                  "end": 1831
                },
                "directive": null,
                "start": 1825,
                "end": 1832
              },
              {
                "type": "VariableDeclaration",
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "ArrayPattern",
                      "decorators": [],
                      "elements": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1848,
                          "end": 1849
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1847,
                      "end": 1850
                    },
                    "init": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1854,
                          "end": 1855
                        }
                      ],
                      "start": 1853,
                      "end": 1856
                    },
                    "definite": false,
                    "start": 1847,
                    "end": 1856
                  }
                ],
                "declare": false,
                "start": 1841,
                "end": 1857
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "use",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1866,
                    "end": 1869
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1870,
                      "end": 1871
                    }
                  ],
                  "optional": false,
                  "start": 1866,
                  "end": 1872
                },
                "directive": null,
                "start": 1866,
                "end": 1873
              },
              {
                "type": "VariableDeclaration",
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "ObjectPattern",
                      "decorators": [],
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
                            "start": 1889,
                            "end": 1890
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "z",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1892,
                            "end": 1893
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1889,
                          "end": 1893
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1888,
                      "end": 1894
                    },
                    "init": {
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
                            "start": 1899,
                            "end": 1900
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1902,
                            "end": 1903
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1899,
                          "end": 1903
                        }
                      ],
                      "start": 1897,
                      "end": 1905
                    },
                    "definite": false,
                    "start": 1888,
                    "end": 1905
                  }
                ],
                "declare": false,
                "start": 1882,
                "end": 1906
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "use",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1915,
                    "end": 1918
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1919,
                      "end": 1920
                    }
                  ],
                  "optional": false,
                  "start": 1915,
                  "end": 1921
                },
                "directive": null,
                "start": 1915,
                "end": 1922
              }
            ],
            "start": 1794,
            "end": 1929
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 1934,
                "end": 1937
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1938,
                  "end": 1939
                }
              ],
              "optional": false,
              "start": 1934,
              "end": 1940
            },
            "directive": null,
            "start": 1934,
            "end": 1941
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 1946,
                "end": 1949
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1950,
                  "end": 1951
                }
              ],
              "optional": false,
              "start": 1946,
              "end": 1952
            },
            "directive": null,
            "start": 1946,
            "end": 1953
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 1958,
                "end": 1961
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1962,
                  "end": 1963
                }
              ],
              "optional": false,
              "start": 1958,
              "end": 1964
            },
            "directive": null,
            "start": 1958,
            "end": 1965
          }
        ],
        "start": 1788,
        "end": 1967
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 1778,
      "end": 1967
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1978,
        "end": 1982
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
            "type": "ForStatement",
            "init": {
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
                    "typeAnnotation": null,
                    "start": 2000,
                    "end": 2001
                  },
                  "init": null,
                  "definite": false,
                  "start": 2000,
                  "end": 2001
                }
              ],
              "declare": false,
              "start": 1996,
              "end": 2001
            },
            "test": null,
            "update": null,
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
                      "name": "use",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2016,
                      "end": 2019
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2020,
                        "end": 2021
                      }
                    ],
                    "optional": false,
                    "start": 2016,
                    "end": 2022
                  },
                  "directive": null,
                  "start": 2016,
                  "end": 2023
                }
              ],
              "start": 2006,
              "end": 2029
            },
            "start": 1991,
            "end": 2029
          },
          {
            "type": "ForStatement",
            "init": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2044,
                        "end": 2045
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2043,
                    "end": 2046
                  },
                  "init": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "start": 2049,
                    "end": 2051
                  },
                  "definite": false,
                  "start": 2043,
                  "end": 2051
                }
              ],
              "declare": false,
              "start": 2039,
              "end": 2051
            },
            "test": null,
            "update": null,
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
                      "name": "use",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2066,
                      "end": 2069
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2070,
                        "end": 2071
                      }
                    ],
                    "optional": false,
                    "start": 2066,
                    "end": 2072
                  },
                  "directive": null,
                  "start": 2066,
                  "end": 2073
                }
              ],
              "start": 2056,
              "end": 2079
            },
            "start": 2034,
            "end": 2079
          },
          {
            "type": "ForStatement",
            "init": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "ObjectPattern",
                    "decorators": [],
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
                          "start": 2094,
                          "end": 2095
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2097,
                          "end": 2098
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 2094,
                        "end": 2098
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2093,
                    "end": 2099
                  },
                  "init": {
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
                          "start": 2103,
                          "end": 2104
                        },
                        "value": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 2106,
                          "end": 2107
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 2103,
                        "end": 2107
                      }
                    ],
                    "start": 2102,
                    "end": 2108
                  },
                  "definite": false,
                  "start": 2093,
                  "end": 2108
                }
              ],
              "declare": false,
              "start": 2089,
              "end": 2108
            },
            "test": null,
            "update": null,
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
                      "name": "use",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2123,
                      "end": 2126
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2127,
                        "end": 2128
                      }
                    ],
                    "optional": false,
                    "start": 2123,
                    "end": 2129
                  },
                  "directive": null,
                  "start": 2123,
                  "end": 2130
                }
              ],
              "start": 2113,
              "end": 2136
            },
            "start": 2084,
            "end": 2136
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 2141,
                "end": 2144
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2145,
                  "end": 2146
                }
              ],
              "optional": false,
              "start": 2141,
              "end": 2147
            },
            "directive": null,
            "start": 2141,
            "end": 2148
          }
        ],
        "start": 1985,
        "end": 2150
      },
      "expression": false,
      "start": 1969,
      "end": 2150
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 2161,
        "end": 2165
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
            "type": "ForStatement",
            "init": {
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
                    "start": 2185,
                    "end": 2186
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2189,
                    "end": 2190
                  },
                  "definite": false,
                  "start": 2185,
                  "end": 2190
                }
              ],
              "declare": false,
              "start": 2179,
              "end": 2190
            },
            "test": null,
            "update": null,
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
                      "name": "use",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2205,
                      "end": 2208
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2209,
                        "end": 2210
                      }
                    ],
                    "optional": false,
                    "start": 2205,
                    "end": 2211
                  },
                  "directive": null,
                  "start": 2205,
                  "end": 2212
                }
              ],
              "start": 2195,
              "end": 2218
            },
            "start": 2174,
            "end": 2218
          },
          {
            "type": "ForStatement",
            "init": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2235,
                        "end": 2236
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2234,
                    "end": 2237
                  },
                  "init": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "start": 2240,
                    "end": 2242
                  },
                  "definite": false,
                  "start": 2234,
                  "end": 2242
                }
              ],
              "declare": false,
              "start": 2228,
              "end": 2242
            },
            "test": null,
            "update": null,
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
                      "name": "use",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2257,
                      "end": 2260
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2261,
                        "end": 2262
                      }
                    ],
                    "optional": false,
                    "start": 2257,
                    "end": 2263
                  },
                  "directive": null,
                  "start": 2257,
                  "end": 2264
                }
              ],
              "start": 2247,
              "end": 2270
            },
            "start": 2223,
            "end": 2270
          },
          {
            "type": "ForStatement",
            "init": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "ObjectPattern",
                    "decorators": [],
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
                          "start": 2287,
                          "end": 2288
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2290,
                          "end": 2291
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 2287,
                        "end": 2291
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2286,
                    "end": 2292
                  },
                  "init": {
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
                          "start": 2297,
                          "end": 2298
                        },
                        "value": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 2300,
                          "end": 2301
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 2297,
                        "end": 2301
                      }
                    ],
                    "start": 2295,
                    "end": 2303
                  },
                  "definite": false,
                  "start": 2286,
                  "end": 2303
                }
              ],
              "declare": false,
              "start": 2280,
              "end": 2303
            },
            "test": null,
            "update": null,
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
                      "name": "use",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2318,
                      "end": 2321
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2322,
                        "end": 2323
                      }
                    ],
                    "optional": false,
                    "start": 2318,
                    "end": 2324
                  },
                  "directive": null,
                  "start": 2318,
                  "end": 2325
                }
              ],
              "start": 2308,
              "end": 2331
            },
            "start": 2275,
            "end": 2331
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 2336,
                "end": 2339
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2340,
                  "end": 2341
                }
              ],
              "optional": false,
              "start": 2336,
              "end": 2342
            },
            "directive": null,
            "start": 2336,
            "end": 2343
          }
        ],
        "start": 2168,
        "end": 2345
      },
      "expression": false,
      "start": 2152,
      "end": 2345
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 2356,
        "end": 2360
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
            "type": "ForInStatement",
            "left": {
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
                    "typeAnnotation": null,
                    "start": 2378,
                    "end": 2379
                  },
                  "init": null,
                  "definite": false,
                  "start": 2378,
                  "end": 2379
                }
              ],
              "declare": false,
              "start": 2374,
              "end": 2379
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 2383,
              "end": 2385
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
                      "name": "use",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2397,
                      "end": 2400
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2401,
                        "end": 2402
                      }
                    ],
                    "optional": false,
                    "start": 2397,
                    "end": 2403
                  },
                  "directive": null,
                  "start": 2397,
                  "end": 2404
                }
              ],
              "start": 2387,
              "end": 2410
            },
            "start": 2369,
            "end": 2410
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 2415,
                "end": 2418
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2419,
                  "end": 2420
                }
              ],
              "optional": false,
              "start": 2415,
              "end": 2421
            },
            "directive": null,
            "start": 2415,
            "end": 2422
          }
        ],
        "start": 2363,
        "end": 2424
      },
      "expression": false,
      "start": 2347,
      "end": 2424
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 2435,
        "end": 2439
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
            "type": "ForInStatement",
            "left": {
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
                    "start": 2459,
                    "end": 2460
                  },
                  "init": null,
                  "definite": false,
                  "start": 2459,
                  "end": 2460
                }
              ],
              "declare": false,
              "start": 2453,
              "end": 2460
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 2464,
              "end": 2466
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
                      "name": "use",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2478,
                      "end": 2481
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2482,
                        "end": 2483
                      }
                    ],
                    "optional": false,
                    "start": 2478,
                    "end": 2484
                  },
                  "directive": null,
                  "start": 2478,
                  "end": 2485
                }
              ],
              "start": 2468,
              "end": 2491
            },
            "start": 2448,
            "end": 2491
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 2496,
                "end": 2499
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2500,
                  "end": 2501
                }
              ],
              "optional": false,
              "start": 2496,
              "end": 2502
            },
            "directive": null,
            "start": 2496,
            "end": 2503
          }
        ],
        "start": 2442,
        "end": 2505
      },
      "expression": false,
      "start": 2426,
      "end": 2505
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 2516,
        "end": 2520
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
            "type": "ForOfStatement",
            "await": false,
            "left": {
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
                    "typeAnnotation": null,
                    "start": 2538,
                    "end": 2539
                  },
                  "init": null,
                  "definite": false,
                  "start": 2538,
                  "end": 2539
                }
              ],
              "declare": false,
              "start": 2534,
              "end": 2539
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 2543,
              "end": 2545
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
                      "name": "use",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2557,
                      "end": 2560
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2561,
                        "end": 2562
                      }
                    ],
                    "optional": false,
                    "start": 2557,
                    "end": 2563
                  },
                  "directive": null,
                  "start": 2557,
                  "end": 2564
                }
              ],
              "start": 2547,
              "end": 2570
            },
            "start": 2529,
            "end": 2570
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 2575,
                "end": 2578
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2579,
                  "end": 2580
                }
              ],
              "optional": false,
              "start": 2575,
              "end": 2581
            },
            "directive": null,
            "start": 2575,
            "end": 2582
          }
        ],
        "start": 2523,
        "end": 2584
      },
      "expression": false,
      "start": 2507,
      "end": 2584
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 2595,
        "end": 2599
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
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2618,
                        "end": 2619
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2617,
                    "end": 2620
                  },
                  "init": null,
                  "definite": false,
                  "start": 2617,
                  "end": 2620
                }
              ],
              "declare": false,
              "start": 2613,
              "end": 2620
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 2624,
              "end": 2626
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
                      "name": "use",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2638,
                      "end": 2641
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2642,
                        "end": 2643
                      }
                    ],
                    "optional": false,
                    "start": 2638,
                    "end": 2644
                  },
                  "directive": null,
                  "start": 2638,
                  "end": 2645
                }
              ],
              "start": 2628,
              "end": 2651
            },
            "start": 2608,
            "end": 2651
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 2656,
                "end": 2659
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2660,
                  "end": 2661
                }
              ],
              "optional": false,
              "start": 2656,
              "end": 2662
            },
            "directive": null,
            "start": 2656,
            "end": 2663
          }
        ],
        "start": 2602,
        "end": 2665
      },
      "expression": false,
      "start": 2586,
      "end": 2665
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 2676,
        "end": 2680
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
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "ObjectPattern",
                    "decorators": [],
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
                          "start": 2699,
                          "end": 2700
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2702,
                          "end": 2703
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 2699,
                        "end": 2703
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2698,
                    "end": 2704
                  },
                  "init": null,
                  "definite": false,
                  "start": 2698,
                  "end": 2704
                }
              ],
              "declare": false,
              "start": 2694,
              "end": 2704
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 2708,
              "end": 2710
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
                      "name": "use",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2722,
                      "end": 2725
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2726,
                        "end": 2727
                      }
                    ],
                    "optional": false,
                    "start": 2722,
                    "end": 2728
                  },
                  "directive": null,
                  "start": 2722,
                  "end": 2729
                }
              ],
              "start": 2712,
              "end": 2735
            },
            "start": 2689,
            "end": 2735
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 2740,
                "end": 2743
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2744,
                  "end": 2745
                }
              ],
              "optional": false,
              "start": 2740,
              "end": 2746
            },
            "directive": null,
            "start": 2740,
            "end": 2747
          }
        ],
        "start": 2683,
        "end": 2749
      },
      "expression": false,
      "start": 2667,
      "end": 2749
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 2760,
        "end": 2765
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
            "type": "ForOfStatement",
            "await": false,
            "left": {
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
                    "start": 2785,
                    "end": 2786
                  },
                  "init": null,
                  "definite": false,
                  "start": 2785,
                  "end": 2786
                }
              ],
              "declare": false,
              "start": 2779,
              "end": 2786
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 2790,
              "end": 2792
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
                      "name": "use",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2804,
                      "end": 2807
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2808,
                        "end": 2809
                      }
                    ],
                    "optional": false,
                    "start": 2804,
                    "end": 2810
                  },
                  "directive": null,
                  "start": 2804,
                  "end": 2811
                }
              ],
              "start": 2794,
              "end": 2817
            },
            "start": 2774,
            "end": 2817
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 2822,
                "end": 2825
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2826,
                  "end": 2827
                }
              ],
              "optional": false,
              "start": 2822,
              "end": 2828
            },
            "directive": null,
            "start": 2822,
            "end": 2829
          }
        ],
        "start": 2768,
        "end": 2831
      },
      "expression": false,
      "start": 2751,
      "end": 2831
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 2842,
        "end": 2847
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
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2868,
                        "end": 2869
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2867,
                    "end": 2870
                  },
                  "init": null,
                  "definite": false,
                  "start": 2867,
                  "end": 2870
                }
              ],
              "declare": false,
              "start": 2861,
              "end": 2870
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 2874,
              "end": 2876
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
                      "name": "use",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2888,
                      "end": 2891
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2892,
                        "end": 2893
                      }
                    ],
                    "optional": false,
                    "start": 2888,
                    "end": 2894
                  },
                  "directive": null,
                  "start": 2888,
                  "end": 2895
                }
              ],
              "start": 2878,
              "end": 2901
            },
            "start": 2856,
            "end": 2901
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 2906,
                "end": 2909
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2910,
                  "end": 2911
                }
              ],
              "optional": false,
              "start": 2906,
              "end": 2912
            },
            "directive": null,
            "start": 2906,
            "end": 2913
          }
        ],
        "start": 2850,
        "end": 2915
      },
      "expression": false,
      "start": 2833,
      "end": 2915
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 2926,
        "end": 2931
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
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "ObjectPattern",
                    "decorators": [],
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
                          "start": 2952,
                          "end": 2953
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2955,
                          "end": 2956
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 2952,
                        "end": 2956
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2951,
                    "end": 2957
                  },
                  "init": null,
                  "definite": false,
                  "start": 2951,
                  "end": 2957
                }
              ],
              "declare": false,
              "start": 2945,
              "end": 2957
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 2961,
              "end": 2963
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
                      "name": "use",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2975,
                      "end": 2978
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2979,
                        "end": 2980
                      }
                    ],
                    "optional": false,
                    "start": 2975,
                    "end": 2981
                  },
                  "directive": null,
                  "start": 2975,
                  "end": 2982
                }
              ],
              "start": 2965,
              "end": 2988
            },
            "start": 2940,
            "end": 2988
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 2993,
                "end": 2996
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2997,
                  "end": 2998
                }
              ],
              "optional": false,
              "start": 2993,
              "end": 2999
            },
            "directive": null,
            "start": 2993,
            "end": 3000
          }
        ],
        "start": 2934,
        "end": 3002
      },
      "expression": false,
      "start": 2917,
      "end": 3002
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3002
}
```
