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
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 11
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 27,
                          "end": 33
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 36,
                          "end": 42
                        }
                      ],
                      "start": 27,
                      "end": 42
                    },
                    "start": 25,
                    "end": 42
                  },
                  "start": 24,
                  "end": 42
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 45,
                  "end": 46
                },
                "definite": false,
                "start": 24,
                "end": 46
              }
            ],
            "declare": false,
            "start": 20,
            "end": 47
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 52,
              "end": 53
            },
            "directive": null,
            "start": 52,
            "end": 54
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 66,
                          "end": 72
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 75,
                          "end": 84
                        }
                      ],
                      "start": 66,
                      "end": 84
                    },
                    "start": 64,
                    "end": 84
                  },
                  "start": 63,
                  "end": 84
                },
                "init": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 87,
                  "end": 89
                },
                "definite": false,
                "start": 63,
                "end": 89
              }
            ],
            "declare": false,
            "start": 59,
            "end": 90
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 95,
              "end": 96
            },
            "directive": null,
            "start": 95,
            "end": 97
          }
        ],
        "start": 14,
        "end": 99
      },
      "expression": false,
      "start": 0,
      "end": 99
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 110,
        "end": 112
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
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 126,
                      "end": 127
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSStringKeyword",
                              "start": 131,
                              "end": 137
                            },
                            {
                              "type": "TSNumberKeyword",
                              "start": 140,
                              "end": 146
                            }
                          ],
                          "start": 131,
                          "end": 146
                        }
                      ],
                      "start": 130,
                      "end": 147
                    },
                    "start": 128,
                    "end": 147
                  },
                  "start": 125,
                  "end": 147
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 151,
                      "end": 152
                    }
                  ],
                  "start": 150,
                  "end": 153
                },
                "definite": false,
                "start": 125,
                "end": 153
              }
            ],
            "declare": false,
            "start": 121,
            "end": 154
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 159,
              "end": 160
            },
            "directive": null,
            "start": 159,
            "end": 161
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
                      "start": 171,
                      "end": 172
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSStringKeyword",
                              "start": 176,
                              "end": 182
                            },
                            {
                              "type": "TSUndefinedKeyword",
                              "start": 185,
                              "end": 194
                            }
                          ],
                          "start": 176,
                          "end": 194
                        }
                      ],
                      "start": 175,
                      "end": 195
                    },
                    "start": 173,
                    "end": 195
                  },
                  "start": 170,
                  "end": 195
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 199,
                      "end": 201
                    }
                  ],
                  "start": 198,
                  "end": 202
                },
                "definite": false,
                "start": 170,
                "end": 202
              }
            ],
            "declare": false,
            "start": 166,
            "end": 203
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 208,
              "end": 209
            },
            "directive": null,
            "start": 208,
            "end": 210
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
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 220,
                        "end": 221
                      },
                      "right": {
                        "type": "Literal",
                        "value": "",
                        "raw": "\"\"",
                        "start": 224,
                        "end": 226
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 220,
                      "end": 226
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSStringKeyword",
                              "start": 230,
                              "end": 236
                            },
                            {
                              "type": "TSUndefinedKeyword",
                              "start": 239,
                              "end": 248
                            }
                          ],
                          "start": 230,
                          "end": 248
                        }
                      ],
                      "start": 229,
                      "end": 249
                    },
                    "start": 227,
                    "end": 249
                  },
                  "start": 219,
                  "end": 249
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 253,
                      "end": 262
                    }
                  ],
                  "start": 252,
                  "end": 263
                },
                "definite": false,
                "start": 219,
                "end": 263
              }
            ],
            "declare": false,
            "start": 215,
            "end": 264
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 269,
              "end": 270
            },
            "directive": null,
            "start": 269,
            "end": 271
          }
        ],
        "start": 115,
        "end": 273
      },
      "expression": false,
      "start": 101,
      "end": 273
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 284,
        "end": 286
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
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 300,
                      "end": 301
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 305,
                            "end": 311
                          },
                          {
                            "type": "TSNumberKeyword",
                            "start": 314,
                            "end": 320
                          }
                        ],
                        "start": 305,
                        "end": 320
                      },
                      "start": 304,
                      "end": 323
                    },
                    "start": 302,
                    "end": 323
                  },
                  "start": 299,
                  "end": 323
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 327,
                      "end": 328
                    }
                  ],
                  "start": 326,
                  "end": 329
                },
                "definite": false,
                "start": 299,
                "end": 329
              }
            ],
            "declare": false,
            "start": 295,
            "end": 330
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 335,
              "end": 336
            },
            "directive": null,
            "start": 335,
            "end": 337
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
                      "start": 347,
                      "end": 348
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 352,
                            "end": 358
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 361,
                            "end": 370
                          }
                        ],
                        "start": 352,
                        "end": 370
                      },
                      "start": 351,
                      "end": 373
                    },
                    "start": 349,
                    "end": 373
                  },
                  "start": 346,
                  "end": 373
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 377,
                      "end": 379
                    }
                  ],
                  "start": 376,
                  "end": 380
                },
                "definite": false,
                "start": 346,
                "end": 380
              }
            ],
            "declare": false,
            "start": 342,
            "end": 381
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 386,
              "end": 387
            },
            "directive": null,
            "start": 386,
            "end": 388
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
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 398,
                        "end": 399
                      },
                      "right": {
                        "type": "Literal",
                        "value": "",
                        "raw": "\"\"",
                        "start": 402,
                        "end": 404
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 398,
                      "end": 404
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 408,
                            "end": 414
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 417,
                            "end": 426
                          }
                        ],
                        "start": 408,
                        "end": 426
                      },
                      "start": 407,
                      "end": 429
                    },
                    "start": 405,
                    "end": 429
                  },
                  "start": 397,
                  "end": 429
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 433,
                      "end": 442
                    }
                  ],
                  "start": 432,
                  "end": 443
                },
                "definite": false,
                "start": 397,
                "end": 443
              }
            ],
            "declare": false,
            "start": 393,
            "end": 444
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 449,
              "end": 450
            },
            "directive": null,
            "start": 449,
            "end": 451
          }
        ],
        "start": 289,
        "end": 453
      },
      "expression": false,
      "start": 275,
      "end": 453
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 464,
        "end": 466
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
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 481,
                        "end": 482
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 481,
                        "end": 482
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 481,
                      "end": 482
                    }
                  ],
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 488,
                            "end": 489
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 491,
                                  "end": 497
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 500,
                                  "end": 506
                                }
                              ],
                              "start": 491,
                              "end": 506
                            },
                            "start": 489,
                            "end": 506
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 488,
                          "end": 506
                        }
                      ],
                      "start": 486,
                      "end": 508
                    },
                    "start": 484,
                    "end": 508
                  },
                  "start": 479,
                  "end": 508
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 513,
                        "end": 514
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 516,
                        "end": 517
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 513,
                      "end": 517
                    }
                  ],
                  "start": 511,
                  "end": 519
                },
                "definite": false,
                "start": 479,
                "end": 519
              }
            ],
            "declare": false,
            "start": 475,
            "end": 520
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 525,
              "end": 526
            },
            "directive": null,
            "start": 525,
            "end": 527
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
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 538,
                        "end": 539
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 538,
                        "end": 539
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 538,
                      "end": 539
                    }
                  ],
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
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 545,
                            "end": 546
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 548,
                                  "end": 554
                                },
                                {
                                  "type": "TSUndefinedKeyword",
                                  "start": 557,
                                  "end": 566
                                }
                              ],
                              "start": 548,
                              "end": 566
                            },
                            "start": 546,
                            "end": 566
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 545,
                          "end": 566
                        }
                      ],
                      "start": 543,
                      "end": 568
                    },
                    "start": 541,
                    "end": 568
                  },
                  "start": 536,
                  "end": 568
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
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 573,
                        "end": 574
                      },
                      "value": {
                        "type": "Literal",
                        "value": "",
                        "raw": "\"\"",
                        "start": 576,
                        "end": 578
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 573,
                      "end": 578
                    }
                  ],
                  "start": 571,
                  "end": 580
                },
                "definite": false,
                "start": 536,
                "end": 580
              }
            ],
            "declare": false,
            "start": 532,
            "end": 581
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 586,
              "end": 587
            },
            "directive": null,
            "start": 586,
            "end": 588
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
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 599,
                        "end": 600
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 599,
                          "end": 600
                        },
                        "right": {
                          "type": "Literal",
                          "value": "",
                          "raw": "\"\"",
                          "start": 603,
                          "end": 605
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 599,
                        "end": 605
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 599,
                      "end": 605
                    }
                  ],
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
                            "name": "z",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 611,
                            "end": 612
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 614,
                                  "end": 620
                                },
                                {
                                  "type": "TSUndefinedKeyword",
                                  "start": 623,
                                  "end": 632
                                }
                              ],
                              "start": 614,
                              "end": 632
                            },
                            "start": 612,
                            "end": 632
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 611,
                          "end": 632
                        }
                      ],
                      "start": 609,
                      "end": 634
                    },
                    "start": 607,
                    "end": 634
                  },
                  "start": 597,
                  "end": 634
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
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 639,
                        "end": 640
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 642,
                        "end": 651
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 639,
                      "end": 651
                    }
                  ],
                  "start": 637,
                  "end": 653
                },
                "definite": false,
                "start": 597,
                "end": 653
              }
            ],
            "declare": false,
            "start": 593,
            "end": 654
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 659,
              "end": 660
            },
            "directive": null,
            "start": 659,
            "end": 661
          }
        ],
        "start": 469,
        "end": 663
      },
      "expression": false,
      "start": 455,
      "end": 663
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 674,
        "end": 676
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
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 691,
                        "end": 692
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 691,
                        "end": 692
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 691,
                      "end": 692
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 698,
                            "end": 699
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 702,
                                  "end": 708
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 711,
                                  "end": 717
                                }
                              ],
                              "start": 702,
                              "end": 717
                            },
                            "start": 700,
                            "end": 717
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 698,
                          "end": 717
                        }
                      ],
                      "start": 696,
                      "end": 719
                    },
                    "start": 694,
                    "end": 719
                  },
                  "start": 689,
                  "end": 719
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 724,
                        "end": 725
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 727,
                        "end": 728
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 724,
                      "end": 728
                    }
                  ],
                  "start": 722,
                  "end": 730
                },
                "definite": false,
                "start": 689,
                "end": 730
              }
            ],
            "declare": false,
            "start": 685,
            "end": 731
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 736,
              "end": 737
            },
            "directive": null,
            "start": 736,
            "end": 738
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
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 749,
                        "end": 750
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 749,
                        "end": 750
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 749,
                      "end": 750
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 756,
                            "end": 757
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 760,
                                  "end": 766
                                },
                                {
                                  "type": "TSUndefinedKeyword",
                                  "start": 769,
                                  "end": 778
                                }
                              ],
                              "start": 760,
                              "end": 778
                            },
                            "start": 758,
                            "end": 778
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 756,
                          "end": 778
                        }
                      ],
                      "start": 754,
                      "end": 780
                    },
                    "start": 752,
                    "end": 780
                  },
                  "start": 747,
                  "end": 780
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
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 785,
                        "end": 786
                      },
                      "value": {
                        "type": "Literal",
                        "value": "",
                        "raw": "\"\"",
                        "start": 788,
                        "end": 790
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 785,
                      "end": 790
                    }
                  ],
                  "start": 783,
                  "end": 792
                },
                "definite": false,
                "start": 747,
                "end": 792
              }
            ],
            "declare": false,
            "start": 743,
            "end": 793
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 798,
              "end": 799
            },
            "directive": null,
            "start": 798,
            "end": 800
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
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 811,
                        "end": 812
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 811,
                          "end": 812
                        },
                        "right": {
                          "type": "Literal",
                          "value": "",
                          "raw": "\"\"",
                          "start": 815,
                          "end": 817
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 811,
                        "end": 817
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 811,
                      "end": 817
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "z",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 823,
                            "end": 824
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 827,
                                  "end": 833
                                },
                                {
                                  "type": "TSUndefinedKeyword",
                                  "start": 836,
                                  "end": 845
                                }
                              ],
                              "start": 827,
                              "end": 845
                            },
                            "start": 825,
                            "end": 845
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 823,
                          "end": 845
                        }
                      ],
                      "start": 821,
                      "end": 847
                    },
                    "start": 819,
                    "end": 847
                  },
                  "start": 809,
                  "end": 847
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
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 852,
                        "end": 853
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 855,
                        "end": 864
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 852,
                      "end": 864
                    }
                  ],
                  "start": 850,
                  "end": 866
                },
                "definite": false,
                "start": 809,
                "end": 866
              }
            ],
            "declare": false,
            "start": 805,
            "end": 867
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 872,
              "end": 873
            },
            "directive": null,
            "start": 872,
            "end": 874
          }
        ],
        "start": 679,
        "end": 876
      },
      "expression": false,
      "start": 665,
      "end": 876
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 887,
        "end": 889
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
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 904,
                        "end": 905
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 904,
                        "end": 905
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 904,
                      "end": 905
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 911,
                            "end": 912
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 915,
                                  "end": 921
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 924,
                                  "end": 930
                                }
                              ],
                              "start": 915,
                              "end": 930
                            },
                            "start": 913,
                            "end": 930
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 911,
                          "end": 930
                        }
                      ],
                      "start": 909,
                      "end": 932
                    },
                    "start": 907,
                    "end": 932
                  },
                  "start": 902,
                  "end": 932
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 935,
                  "end": 937
                },
                "definite": false,
                "start": 902,
                "end": 937
              }
            ],
            "declare": false,
            "start": 898,
            "end": 938
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 943,
              "end": 944
            },
            "directive": null,
            "start": 943,
            "end": 945
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
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 956,
                        "end": 957
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 956,
                        "end": 957
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 956,
                      "end": 957
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 963,
                            "end": 964
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 967,
                                  "end": 973
                                },
                                {
                                  "type": "TSUndefinedKeyword",
                                  "start": 976,
                                  "end": 985
                                }
                              ],
                              "start": 967,
                              "end": 985
                            },
                            "start": 965,
                            "end": 985
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 963,
                          "end": 985
                        }
                      ],
                      "start": 961,
                      "end": 987
                    },
                    "start": 959,
                    "end": 987
                  },
                  "start": 954,
                  "end": 987
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 990,
                  "end": 992
                },
                "definite": false,
                "start": 954,
                "end": 992
              }
            ],
            "declare": false,
            "start": 950,
            "end": 993
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 998,
              "end": 999
            },
            "directive": null,
            "start": 998,
            "end": 1000
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
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1011,
                        "end": 1012
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1011,
                          "end": 1012
                        },
                        "right": {
                          "type": "Literal",
                          "value": "",
                          "raw": "\"\"",
                          "start": 1015,
                          "end": 1017
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1011,
                        "end": 1017
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 1011,
                      "end": 1017
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "z",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1023,
                            "end": 1024
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 1027,
                                  "end": 1033
                                },
                                {
                                  "type": "TSUndefinedKeyword",
                                  "start": 1036,
                                  "end": 1045
                                }
                              ],
                              "start": 1027,
                              "end": 1045
                            },
                            "start": 1025,
                            "end": 1045
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1023,
                          "end": 1045
                        }
                      ],
                      "start": 1021,
                      "end": 1047
                    },
                    "start": 1019,
                    "end": 1047
                  },
                  "start": 1009,
                  "end": 1047
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 1050,
                  "end": 1052
                },
                "definite": false,
                "start": 1009,
                "end": 1052
              }
            ],
            "declare": false,
            "start": 1005,
            "end": 1053
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 1058,
              "end": 1059
            },
            "directive": null,
            "start": 1058,
            "end": 1060
          }
        ],
        "start": 892,
        "end": 1062
      },
      "expression": false,
      "start": 878,
      "end": 1062
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1073,
        "end": 1075
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
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSIndexSignature",
                          "parameters": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 1097,
                                  "end": 1103
                                },
                                "start": 1095,
                                "end": 1103
                              },
                              "start": 1094,
                              "end": 1103
                            }
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1106,
                              "end": 1112
                            },
                            "start": 1104,
                            "end": 1112
                          },
                          "readonly": false,
                          "static": false,
                          "accessibility": null,
                          "start": 1093,
                          "end": 1112
                        }
                      ],
                      "start": 1091,
                      "end": 1114
                    },
                    "start": 1089,
                    "end": 1114
                  },
                  "start": 1088,
                  "end": 1114
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1119,
                        "end": 1120
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1122,
                        "end": 1123
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1119,
                      "end": 1123
                    }
                  ],
                  "start": 1117,
                  "end": 1125
                },
                "definite": false,
                "start": 1088,
                "end": 1125
              }
            ],
            "declare": false,
            "start": 1084,
            "end": 1126
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1137,
                        "end": 1138
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1137,
                        "end": 1138
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 1137,
                      "end": 1138
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSIndexSignature",
                          "parameters": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 1148,
                                  "end": 1154
                                },
                                "start": 1146,
                                "end": 1154
                              },
                              "start": 1145,
                              "end": 1154
                            }
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 1157,
                                  "end": 1163
                                },
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 1166,
                                  "end": 1172
                                }
                              ],
                              "start": 1157,
                              "end": 1172
                            },
                            "start": 1155,
                            "end": 1172
                          },
                          "readonly": false,
                          "static": false,
                          "accessibility": null,
                          "start": 1144,
                          "end": 1172
                        }
                      ],
                      "start": 1142,
                      "end": 1174
                    },
                    "start": 1140,
                    "end": 1174
                  },
                  "start": 1135,
                  "end": 1174
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1177,
                  "end": 1178
                },
                "definite": false,
                "start": 1135,
                "end": 1178
              }
            ],
            "declare": false,
            "start": 1131,
            "end": 1179
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1184,
              "end": 1185
            },
            "directive": null,
            "start": 1184,
            "end": 1186
          }
        ],
        "start": 1078,
        "end": 1188
      },
      "expression": false,
      "start": 1064,
      "end": 1188
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1188
}
```
