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
        "start": 1397,
        "end": 1399
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
                  "start": 1410,
                  "end": 1411
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1414,
                  "end": 1415
                },
                "definite": false,
                "start": 1410,
                "end": 1415
              }
            ],
            "declare": false,
            "start": 1406,
            "end": 1416
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
                "start": 1421,
                "end": 1424
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1425,
                  "end": 1426
                }
              ],
              "optional": false,
              "start": 1421,
              "end": 1427
            },
            "directive": null,
            "start": 1421,
            "end": 1428
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
                      "start": 1438,
                      "end": 1439
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1437,
                  "end": 1440
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1444,
                      "end": 1445
                    }
                  ],
                  "start": 1443,
                  "end": 1446
                },
                "definite": false,
                "start": 1437,
                "end": 1446
              }
            ],
            "declare": false,
            "start": 1433,
            "end": 1447
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
                "start": 1452,
                "end": 1455
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1456,
                  "end": 1457
                }
              ],
              "optional": false,
              "start": 1452,
              "end": 1458
            },
            "directive": null,
            "start": 1452,
            "end": 1459
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
                        "start": 1469,
                        "end": 1470
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1472,
                        "end": 1473
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1469,
                      "end": 1473
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1468,
                  "end": 1474
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
                        "start": 1479,
                        "end": 1480
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1482,
                        "end": 1483
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1479,
                      "end": 1483
                    }
                  ],
                  "start": 1477,
                  "end": 1485
                },
                "definite": false,
                "start": 1468,
                "end": 1485
              }
            ],
            "declare": false,
            "start": 1464,
            "end": 1486
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
                "start": 1491,
                "end": 1494
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1495,
                  "end": 1496
                }
              ],
              "optional": false,
              "start": 1491,
              "end": 1497
            },
            "directive": null,
            "start": 1491,
            "end": 1498
          }
        ],
        "start": 1400,
        "end": 1500
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1387,
      "end": 1500
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1512,
        "end": 1514
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
                      "start": 1535,
                      "end": 1536
                    },
                    "init": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1539,
                      "end": 1540
                    },
                    "definite": false,
                    "start": 1535,
                    "end": 1540
                  }
                ],
                "declare": false,
                "start": 1531,
                "end": 1541
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
                    "start": 1550,
                    "end": 1553
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1554,
                      "end": 1555
                    }
                  ],
                  "optional": false,
                  "start": 1550,
                  "end": 1556
                },
                "directive": null,
                "start": 1550,
                "end": 1557
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
                          "start": 1571,
                          "end": 1572
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1570,
                      "end": 1573
                    },
                    "init": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1577,
                          "end": 1578
                        }
                      ],
                      "start": 1576,
                      "end": 1579
                    },
                    "definite": false,
                    "start": 1570,
                    "end": 1579
                  }
                ],
                "declare": false,
                "start": 1566,
                "end": 1580
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
                    "start": 1589,
                    "end": 1592
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1593,
                      "end": 1594
                    }
                  ],
                  "optional": false,
                  "start": 1589,
                  "end": 1595
                },
                "directive": null,
                "start": 1589,
                "end": 1596
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
                            "start": 1610,
                            "end": 1611
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "z",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1613,
                            "end": 1614
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1610,
                          "end": 1614
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1609,
                      "end": 1615
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
                            "start": 1620,
                            "end": 1621
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1623,
                            "end": 1624
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1620,
                          "end": 1624
                        }
                      ],
                      "start": 1618,
                      "end": 1626
                    },
                    "definite": false,
                    "start": 1609,
                    "end": 1626
                  }
                ],
                "declare": false,
                "start": 1605,
                "end": 1627
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
                    "start": 1636,
                    "end": 1639
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1640,
                      "end": 1641
                    }
                  ],
                  "optional": false,
                  "start": 1636,
                  "end": 1642
                },
                "directive": null,
                "start": 1636,
                "end": 1643
              }
            ],
            "start": 1521,
            "end": 1649
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
                "start": 1654,
                "end": 1657
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1658,
                  "end": 1659
                }
              ],
              "optional": false,
              "start": 1654,
              "end": 1660
            },
            "directive": null,
            "start": 1654,
            "end": 1661
          }
        ],
        "start": 1515,
        "end": 1663
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1502,
      "end": 1663
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1675,
        "end": 1677
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
                  "start": 1690,
                  "end": 1691
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1694,
                  "end": 1695
                },
                "definite": false,
                "start": 1690,
                "end": 1695
              }
            ],
            "declare": false,
            "start": 1684,
            "end": 1696
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
                "start": 1701,
                "end": 1704
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1705,
                  "end": 1706
                }
              ],
              "optional": false,
              "start": 1701,
              "end": 1707
            },
            "directive": null,
            "start": 1701,
            "end": 1708
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
                      "start": 1720,
                      "end": 1721
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1719,
                  "end": 1722
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1726,
                      "end": 1727
                    }
                  ],
                  "start": 1725,
                  "end": 1728
                },
                "definite": false,
                "start": 1719,
                "end": 1728
              }
            ],
            "declare": false,
            "start": 1713,
            "end": 1729
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
                "start": 1734,
                "end": 1737
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1738,
                  "end": 1739
                }
              ],
              "optional": false,
              "start": 1734,
              "end": 1740
            },
            "directive": null,
            "start": 1734,
            "end": 1741
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
                        "start": 1753,
                        "end": 1754
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1756,
                        "end": 1757
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1753,
                      "end": 1757
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1752,
                  "end": 1758
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
                        "start": 1763,
                        "end": 1764
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1766,
                        "end": 1767
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1763,
                      "end": 1767
                    }
                  ],
                  "start": 1761,
                  "end": 1769
                },
                "definite": false,
                "start": 1752,
                "end": 1769
              }
            ],
            "declare": false,
            "start": 1746,
            "end": 1770
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
                "start": 1775,
                "end": 1778
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1779,
                  "end": 1780
                }
              ],
              "optional": false,
              "start": 1775,
              "end": 1781
            },
            "directive": null,
            "start": 1775,
            "end": 1782
          }
        ],
        "start": 1678,
        "end": 1785
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1665,
      "end": 1785
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1797,
        "end": 1799
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
                      "start": 1822,
                      "end": 1823
                    },
                    "init": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1826,
                      "end": 1827
                    },
                    "definite": false,
                    "start": 1822,
                    "end": 1827
                  }
                ],
                "declare": false,
                "start": 1816,
                "end": 1828
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
                    "start": 1837,
                    "end": 1840
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1841,
                      "end": 1842
                    }
                  ],
                  "optional": false,
                  "start": 1837,
                  "end": 1843
                },
                "directive": null,
                "start": 1837,
                "end": 1844
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
                          "start": 1860,
                          "end": 1861
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1859,
                      "end": 1862
                    },
                    "init": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1866,
                          "end": 1867
                        }
                      ],
                      "start": 1865,
                      "end": 1868
                    },
                    "definite": false,
                    "start": 1859,
                    "end": 1868
                  }
                ],
                "declare": false,
                "start": 1853,
                "end": 1869
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
                    "start": 1878,
                    "end": 1881
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1882,
                      "end": 1883
                    }
                  ],
                  "optional": false,
                  "start": 1878,
                  "end": 1884
                },
                "directive": null,
                "start": 1878,
                "end": 1885
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
                            "start": 1901,
                            "end": 1902
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "z",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1904,
                            "end": 1905
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1901,
                          "end": 1905
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1900,
                      "end": 1906
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
                            "start": 1911,
                            "end": 1912
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1914,
                            "end": 1915
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1911,
                          "end": 1915
                        }
                      ],
                      "start": 1909,
                      "end": 1917
                    },
                    "definite": false,
                    "start": 1900,
                    "end": 1917
                  }
                ],
                "declare": false,
                "start": 1894,
                "end": 1918
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
                    "start": 1927,
                    "end": 1930
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1931,
                      "end": 1932
                    }
                  ],
                  "optional": false,
                  "start": 1927,
                  "end": 1933
                },
                "directive": null,
                "start": 1927,
                "end": 1934
              }
            ],
            "start": 1806,
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
                  "name": "x",
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
                  "name": "y",
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
                "start": 1970,
                "end": 1973
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1974,
                  "end": 1975
                }
              ],
              "optional": false,
              "start": 1970,
              "end": 1976
            },
            "directive": null,
            "start": 1970,
            "end": 1977
          }
        ],
        "start": 1800,
        "end": 1979
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1787,
      "end": 1979
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1990,
        "end": 1994
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
                    "start": 2012,
                    "end": 2013
                  },
                  "init": null,
                  "definite": false,
                  "start": 2012,
                  "end": 2013
                }
              ],
              "declare": false,
              "start": 2008,
              "end": 2013
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
                      "start": 2028,
                      "end": 2031
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2032,
                        "end": 2033
                      }
                    ],
                    "optional": false,
                    "start": 2028,
                    "end": 2034
                  },
                  "directive": null,
                  "start": 2028,
                  "end": 2035
                }
              ],
              "start": 2018,
              "end": 2041
            },
            "start": 2003,
            "end": 2041
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
                        "start": 2056,
                        "end": 2057
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2055,
                    "end": 2058
                  },
                  "init": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "start": 2061,
                    "end": 2063
                  },
                  "definite": false,
                  "start": 2055,
                  "end": 2063
                }
              ],
              "declare": false,
              "start": 2051,
              "end": 2063
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
                      "start": 2078,
                      "end": 2081
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2082,
                        "end": 2083
                      }
                    ],
                    "optional": false,
                    "start": 2078,
                    "end": 2084
                  },
                  "directive": null,
                  "start": 2078,
                  "end": 2085
                }
              ],
              "start": 2068,
              "end": 2091
            },
            "start": 2046,
            "end": 2091
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
                          "start": 2106,
                          "end": 2107
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2109,
                          "end": 2110
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 2106,
                        "end": 2110
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2105,
                    "end": 2111
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
                          "start": 2115,
                          "end": 2116
                        },
                        "value": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 2118,
                          "end": 2119
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 2115,
                        "end": 2119
                      }
                    ],
                    "start": 2114,
                    "end": 2120
                  },
                  "definite": false,
                  "start": 2105,
                  "end": 2120
                }
              ],
              "declare": false,
              "start": 2101,
              "end": 2120
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
                      "start": 2135,
                      "end": 2138
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2139,
                        "end": 2140
                      }
                    ],
                    "optional": false,
                    "start": 2135,
                    "end": 2141
                  },
                  "directive": null,
                  "start": 2135,
                  "end": 2142
                }
              ],
              "start": 2125,
              "end": 2148
            },
            "start": 2096,
            "end": 2148
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
                "start": 2153,
                "end": 2156
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2157,
                  "end": 2158
                }
              ],
              "optional": false,
              "start": 2153,
              "end": 2159
            },
            "directive": null,
            "start": 2153,
            "end": 2160
          }
        ],
        "start": 1997,
        "end": 2162
      },
      "expression": false,
      "start": 1981,
      "end": 2162
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 2173,
        "end": 2177
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
                    "start": 2197,
                    "end": 2198
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2201,
                    "end": 2202
                  },
                  "definite": false,
                  "start": 2197,
                  "end": 2202
                }
              ],
              "declare": false,
              "start": 2191,
              "end": 2202
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
                      "start": 2217,
                      "end": 2220
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2221,
                        "end": 2222
                      }
                    ],
                    "optional": false,
                    "start": 2217,
                    "end": 2223
                  },
                  "directive": null,
                  "start": 2217,
                  "end": 2224
                }
              ],
              "start": 2207,
              "end": 2230
            },
            "start": 2186,
            "end": 2230
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
                        "start": 2247,
                        "end": 2248
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2246,
                    "end": 2249
                  },
                  "init": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "start": 2252,
                    "end": 2254
                  },
                  "definite": false,
                  "start": 2246,
                  "end": 2254
                }
              ],
              "declare": false,
              "start": 2240,
              "end": 2254
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
                      "start": 2269,
                      "end": 2272
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2273,
                        "end": 2274
                      }
                    ],
                    "optional": false,
                    "start": 2269,
                    "end": 2275
                  },
                  "directive": null,
                  "start": 2269,
                  "end": 2276
                }
              ],
              "start": 2259,
              "end": 2282
            },
            "start": 2235,
            "end": 2282
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
                          "start": 2299,
                          "end": 2300
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2302,
                          "end": 2303
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 2299,
                        "end": 2303
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2298,
                    "end": 2304
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
                          "start": 2309,
                          "end": 2310
                        },
                        "value": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 2312,
                          "end": 2313
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 2309,
                        "end": 2313
                      }
                    ],
                    "start": 2307,
                    "end": 2315
                  },
                  "definite": false,
                  "start": 2298,
                  "end": 2315
                }
              ],
              "declare": false,
              "start": 2292,
              "end": 2315
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
                      "start": 2330,
                      "end": 2333
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2334,
                        "end": 2335
                      }
                    ],
                    "optional": false,
                    "start": 2330,
                    "end": 2336
                  },
                  "directive": null,
                  "start": 2330,
                  "end": 2337
                }
              ],
              "start": 2320,
              "end": 2343
            },
            "start": 2287,
            "end": 2343
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
                "start": 2348,
                "end": 2351
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2352,
                  "end": 2353
                }
              ],
              "optional": false,
              "start": 2348,
              "end": 2354
            },
            "directive": null,
            "start": 2348,
            "end": 2355
          }
        ],
        "start": 2180,
        "end": 2357
      },
      "expression": false,
      "start": 2164,
      "end": 2357
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 2368,
        "end": 2372
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
                    "start": 2390,
                    "end": 2391
                  },
                  "init": null,
                  "definite": false,
                  "start": 2390,
                  "end": 2391
                }
              ],
              "declare": false,
              "start": 2386,
              "end": 2391
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 2395,
              "end": 2397
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
                      "start": 2409,
                      "end": 2412
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2413,
                        "end": 2414
                      }
                    ],
                    "optional": false,
                    "start": 2409,
                    "end": 2415
                  },
                  "directive": null,
                  "start": 2409,
                  "end": 2416
                }
              ],
              "start": 2399,
              "end": 2422
            },
            "start": 2381,
            "end": 2422
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
                "start": 2427,
                "end": 2430
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2431,
                  "end": 2432
                }
              ],
              "optional": false,
              "start": 2427,
              "end": 2433
            },
            "directive": null,
            "start": 2427,
            "end": 2434
          }
        ],
        "start": 2375,
        "end": 2436
      },
      "expression": false,
      "start": 2359,
      "end": 2436
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 2447,
        "end": 2451
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
                    "start": 2471,
                    "end": 2472
                  },
                  "init": null,
                  "definite": false,
                  "start": 2471,
                  "end": 2472
                }
              ],
              "declare": false,
              "start": 2465,
              "end": 2472
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 2476,
              "end": 2478
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
                      "start": 2490,
                      "end": 2493
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2494,
                        "end": 2495
                      }
                    ],
                    "optional": false,
                    "start": 2490,
                    "end": 2496
                  },
                  "directive": null,
                  "start": 2490,
                  "end": 2497
                }
              ],
              "start": 2480,
              "end": 2503
            },
            "start": 2460,
            "end": 2503
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
                "start": 2508,
                "end": 2511
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2512,
                  "end": 2513
                }
              ],
              "optional": false,
              "start": 2508,
              "end": 2514
            },
            "directive": null,
            "start": 2508,
            "end": 2515
          }
        ],
        "start": 2454,
        "end": 2517
      },
      "expression": false,
      "start": 2438,
      "end": 2517
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 2528,
        "end": 2532
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
                    "start": 2550,
                    "end": 2551
                  },
                  "init": null,
                  "definite": false,
                  "start": 2550,
                  "end": 2551
                }
              ],
              "declare": false,
              "start": 2546,
              "end": 2551
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 2555,
              "end": 2557
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
                      "start": 2569,
                      "end": 2572
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2573,
                        "end": 2574
                      }
                    ],
                    "optional": false,
                    "start": 2569,
                    "end": 2575
                  },
                  "directive": null,
                  "start": 2569,
                  "end": 2576
                }
              ],
              "start": 2559,
              "end": 2582
            },
            "start": 2541,
            "end": 2582
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
                "start": 2587,
                "end": 2590
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2591,
                  "end": 2592
                }
              ],
              "optional": false,
              "start": 2587,
              "end": 2593
            },
            "directive": null,
            "start": 2587,
            "end": 2594
          }
        ],
        "start": 2535,
        "end": 2596
      },
      "expression": false,
      "start": 2519,
      "end": 2596
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 2607,
        "end": 2611
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
                        "start": 2630,
                        "end": 2631
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2629,
                    "end": 2632
                  },
                  "init": null,
                  "definite": false,
                  "start": 2629,
                  "end": 2632
                }
              ],
              "declare": false,
              "start": 2625,
              "end": 2632
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 2636,
              "end": 2638
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
                      "start": 2650,
                      "end": 2653
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2654,
                        "end": 2655
                      }
                    ],
                    "optional": false,
                    "start": 2650,
                    "end": 2656
                  },
                  "directive": null,
                  "start": 2650,
                  "end": 2657
                }
              ],
              "start": 2640,
              "end": 2663
            },
            "start": 2620,
            "end": 2663
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
                "start": 2668,
                "end": 2671
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2672,
                  "end": 2673
                }
              ],
              "optional": false,
              "start": 2668,
              "end": 2674
            },
            "directive": null,
            "start": 2668,
            "end": 2675
          }
        ],
        "start": 2614,
        "end": 2677
      },
      "expression": false,
      "start": 2598,
      "end": 2677
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 2688,
        "end": 2692
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
                          "start": 2711,
                          "end": 2712
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2714,
                          "end": 2715
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 2711,
                        "end": 2715
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2710,
                    "end": 2716
                  },
                  "init": null,
                  "definite": false,
                  "start": 2710,
                  "end": 2716
                }
              ],
              "declare": false,
              "start": 2706,
              "end": 2716
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 2720,
              "end": 2722
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
                      "start": 2734,
                      "end": 2737
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2738,
                        "end": 2739
                      }
                    ],
                    "optional": false,
                    "start": 2734,
                    "end": 2740
                  },
                  "directive": null,
                  "start": 2734,
                  "end": 2741
                }
              ],
              "start": 2724,
              "end": 2747
            },
            "start": 2701,
            "end": 2747
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
                "start": 2752,
                "end": 2755
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2756,
                  "end": 2757
                }
              ],
              "optional": false,
              "start": 2752,
              "end": 2758
            },
            "directive": null,
            "start": 2752,
            "end": 2759
          }
        ],
        "start": 2695,
        "end": 2761
      },
      "expression": false,
      "start": 2679,
      "end": 2761
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 2772,
        "end": 2777
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
                    "start": 2797,
                    "end": 2798
                  },
                  "init": null,
                  "definite": false,
                  "start": 2797,
                  "end": 2798
                }
              ],
              "declare": false,
              "start": 2791,
              "end": 2798
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 2802,
              "end": 2804
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
                      "start": 2816,
                      "end": 2819
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2820,
                        "end": 2821
                      }
                    ],
                    "optional": false,
                    "start": 2816,
                    "end": 2822
                  },
                  "directive": null,
                  "start": 2816,
                  "end": 2823
                }
              ],
              "start": 2806,
              "end": 2829
            },
            "start": 2786,
            "end": 2829
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
                "start": 2834,
                "end": 2837
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2838,
                  "end": 2839
                }
              ],
              "optional": false,
              "start": 2834,
              "end": 2840
            },
            "directive": null,
            "start": 2834,
            "end": 2841
          }
        ],
        "start": 2780,
        "end": 2843
      },
      "expression": false,
      "start": 2763,
      "end": 2843
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 2854,
        "end": 2859
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
                        "start": 2880,
                        "end": 2881
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2879,
                    "end": 2882
                  },
                  "init": null,
                  "definite": false,
                  "start": 2879,
                  "end": 2882
                }
              ],
              "declare": false,
              "start": 2873,
              "end": 2882
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 2886,
              "end": 2888
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
                      "start": 2900,
                      "end": 2903
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2904,
                        "end": 2905
                      }
                    ],
                    "optional": false,
                    "start": 2900,
                    "end": 2906
                  },
                  "directive": null,
                  "start": 2900,
                  "end": 2907
                }
              ],
              "start": 2890,
              "end": 2913
            },
            "start": 2868,
            "end": 2913
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
                "start": 2918,
                "end": 2921
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2922,
                  "end": 2923
                }
              ],
              "optional": false,
              "start": 2918,
              "end": 2924
            },
            "directive": null,
            "start": 2918,
            "end": 2925
          }
        ],
        "start": 2862,
        "end": 2927
      },
      "expression": false,
      "start": 2845,
      "end": 2927
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 2938,
        "end": 2943
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
                          "start": 2964,
                          "end": 2965
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2967,
                          "end": 2968
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 2964,
                        "end": 2968
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2963,
                    "end": 2969
                  },
                  "init": null,
                  "definite": false,
                  "start": 2963,
                  "end": 2969
                }
              ],
              "declare": false,
              "start": 2957,
              "end": 2969
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 2973,
              "end": 2975
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
                      "start": 2987,
                      "end": 2990
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2991,
                        "end": 2992
                      }
                    ],
                    "optional": false,
                    "start": 2987,
                    "end": 2993
                  },
                  "directive": null,
                  "start": 2987,
                  "end": 2994
                }
              ],
              "start": 2977,
              "end": 3000
            },
            "start": 2952,
            "end": 3000
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
                "start": 3005,
                "end": 3008
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3009,
                  "end": 3010
                }
              ],
              "optional": false,
              "start": 3005,
              "end": 3011
            },
            "directive": null,
            "start": 3005,
            "end": 3012
          }
        ],
        "start": 2946,
        "end": 3014
      },
      "expression": false,
      "start": 2929,
      "end": 3014
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3014
}
```
