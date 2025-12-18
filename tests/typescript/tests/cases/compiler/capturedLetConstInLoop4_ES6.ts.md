__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "exportedFoo",
          "optional": false,
          "typeAnnotation": null,
          "start": 28,
          "end": 39
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
              "type": "ReturnStatement",
              "argument": {
                "type": "BinaryExpression",
                "left": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "v0",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 55,
                                  "end": 57
                                },
                                "operator": "+",
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "v00",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 60,
                                  "end": 63
                                },
                                "start": 55,
                                "end": 63
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "v1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 66,
                                "end": 68
                              },
                              "start": 55,
                              "end": 68
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 71,
                              "end": 73
                            },
                            "start": 55,
                            "end": 73
                          },
                          "operator": "+",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "v3",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 76,
                            "end": 78
                          },
                          "start": 55,
                          "end": 78
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v4",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 81,
                          "end": 83
                        },
                        "start": 55,
                        "end": 83
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v5",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 86,
                        "end": 88
                      },
                      "start": 55,
                      "end": 88
                    },
                    "operator": "+",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v6",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 91,
                      "end": 93
                    },
                    "start": 55,
                    "end": 93
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v7",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 96,
                    "end": 98
                  },
                  "start": 55,
                  "end": 98
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 101,
                  "end": 103
                },
                "start": 55,
                "end": 103
              },
              "start": 48,
              "end": 104
            }
          ],
          "start": 42,
          "end": 106
        },
        "expression": false,
        "start": 19,
        "end": 106
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 12,
      "end": 106
    },
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
              "start": 117,
              "end": 118
            },
            "init": null,
            "definite": false,
            "start": 117,
            "end": 118
          }
        ],
        "declare": false,
        "start": 113,
        "end": 118
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 122,
        "end": 124
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
                  "name": "v0",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 136,
                  "end": 138
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 141,
                  "end": 142
                },
                "definite": false,
                "start": 136,
                "end": 142
              }
            ],
            "declare": false,
            "start": 132,
            "end": 143
          },
          {
            "type": "ExpressionStatement",
            "expression": {
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 169,
                        "end": 170
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v0",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 173,
                        "end": 175
                      },
                      "start": 169,
                      "end": 175
                    },
                    "start": 162,
                    "end": 175
                  }
                ],
                "start": 160,
                "end": 176
              },
              "expression": false,
              "start": 149,
              "end": 176
            },
            "directive": null,
            "start": 148,
            "end": 178
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 190,
                "end": 191
              },
              "id": null,
              "generator": false,
              "start": 184,
              "end": 191
            },
            "directive": null,
            "start": 183,
            "end": 193
          }
        ],
        "start": 126,
        "end": 199
      },
      "start": 108,
      "end": 199
    },
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
              "start": 210,
              "end": 211
            },
            "init": null,
            "definite": false,
            "start": 210,
            "end": 211
          }
        ],
        "declare": false,
        "start": 206,
        "end": 211
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 215,
        "end": 217
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
                  "name": "v00",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 229,
                  "end": 232
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 235,
                  "end": 236
                },
                "definite": false,
                "start": 229,
                "end": 236
              }
            ],
            "declare": false,
            "start": 225,
            "end": 237
          },
          {
            "type": "ExpressionStatement",
            "expression": {
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 263,
                        "end": 264
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v00",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 267,
                        "end": 270
                      },
                      "start": 263,
                      "end": 270
                    },
                    "start": 256,
                    "end": 270
                  }
                ],
                "start": 254,
                "end": 271
              },
              "expression": false,
              "start": 243,
              "end": 271
            },
            "directive": null,
            "start": 242,
            "end": 273
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 285,
                "end": 286
              },
              "id": null,
              "generator": false,
              "start": 279,
              "end": 286
            },
            "directive": null,
            "start": 278,
            "end": 288
          }
        ],
        "start": 219,
        "end": 294
      },
      "start": 201,
      "end": 294
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
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 305,
              "end": 306
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 309,
              "end": 310
            },
            "definite": false,
            "start": 305,
            "end": 310
          }
        ],
        "declare": false,
        "start": 301,
        "end": 310
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 312,
          "end": 313
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 316,
          "end": 317
        },
        "start": 312,
        "end": 317
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 321,
          "end": 322
        },
        "start": 319,
        "end": 322
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
                  "name": "v1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 334,
                  "end": 336
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 339,
                  "end": 340
                },
                "definite": false,
                "start": 334,
                "end": 340
              }
            ],
            "declare": false,
            "start": 330,
            "end": 341
          },
          {
            "type": "ExpressionStatement",
            "expression": {
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 367,
                        "end": 368
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 371,
                        "end": 373
                      },
                      "start": 367,
                      "end": 373
                    },
                    "start": 360,
                    "end": 373
                  }
                ],
                "start": 358,
                "end": 374
              },
              "expression": false,
              "start": 347,
              "end": 374
            },
            "directive": null,
            "start": 346,
            "end": 376
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 388,
                "end": 389
              },
              "id": null,
              "generator": false,
              "start": 382,
              "end": 389
            },
            "directive": null,
            "start": 381,
            "end": 391
          }
        ],
        "start": 324,
        "end": 393
      },
      "start": 296,
      "end": 393
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 402,
          "end": 403
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 408,
          "end": 409
        },
        "start": 402,
        "end": 409
      },
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
                  "start": 421,
                  "end": 422
                },
                "init": null,
                "definite": false,
                "start": 421,
                "end": 422
              }
            ],
            "declare": false,
            "start": 417,
            "end": 423
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
                  "name": "v2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 432,
                  "end": 434
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 437,
                  "end": 438
                },
                "definite": false,
                "start": 432,
                "end": 438
              }
            ],
            "declare": false,
            "start": 428,
            "end": 439
          },
          {
            "type": "ExpressionStatement",
            "expression": {
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 465,
                        "end": 466
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 469,
                        "end": 471
                      },
                      "start": 465,
                      "end": 471
                    },
                    "start": 458,
                    "end": 471
                  }
                ],
                "start": 456,
                "end": 472
              },
              "expression": false,
              "start": 445,
              "end": 472
            },
            "directive": null,
            "start": 444,
            "end": 474
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 486,
                "end": 487
              },
              "id": null,
              "generator": false,
              "start": 480,
              "end": 487
            },
            "directive": null,
            "start": 479,
            "end": 489
          }
        ],
        "start": 411,
        "end": 491
      },
      "start": 395,
      "end": 491
    },
    {
      "type": "DoWhileStatement",
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
                  "start": 506,
                  "end": 507
                },
                "init": null,
                "definite": false,
                "start": 506,
                "end": 507
              }
            ],
            "declare": false,
            "start": 502,
            "end": 508
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
                  "name": "v3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 517,
                  "end": 519
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 522,
                  "end": 523
                },
                "definite": false,
                "start": 517,
                "end": 523
              }
            ],
            "declare": false,
            "start": 513,
            "end": 524
          },
          {
            "type": "ExpressionStatement",
            "expression": {
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 550,
                        "end": 551
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 554,
                        "end": 556
                      },
                      "start": 550,
                      "end": 556
                    },
                    "start": 543,
                    "end": 556
                  }
                ],
                "start": 541,
                "end": 557
              },
              "expression": false,
              "start": 530,
              "end": 557
            },
            "directive": null,
            "start": 529,
            "end": 559
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 571,
                "end": 572
              },
              "id": null,
              "generator": false,
              "start": 565,
              "end": 572
            },
            "directive": null,
            "start": 564,
            "end": 574
          }
        ],
        "start": 496,
        "end": 576
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 584,
          "end": 585
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 590,
          "end": 591
        },
        "start": 584,
        "end": 591
      },
      "start": 493,
      "end": 592
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
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 603,
              "end": 604
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 607,
              "end": 608
            },
            "definite": false,
            "start": 603,
            "end": 608
          }
        ],
        "declare": false,
        "start": 599,
        "end": 608
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 610,
          "end": 611
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 614,
          "end": 615
        },
        "start": 610,
        "end": 615
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 619,
          "end": 620
        },
        "start": 617,
        "end": 620
      },
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
                  "start": 632,
                  "end": 633
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 636,
                  "end": 637
                },
                "definite": false,
                "start": 632,
                "end": 637
              }
            ],
            "declare": false,
            "start": 628,
            "end": 638
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
                  "name": "v4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 647,
                  "end": 649
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 652,
                  "end": 653
                },
                "definite": false,
                "start": 647,
                "end": 653
              }
            ],
            "declare": false,
            "start": 643,
            "end": 654
          },
          {
            "type": "ExpressionStatement",
            "expression": {
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 680,
                        "end": 681
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 684,
                        "end": 686
                      },
                      "start": 680,
                      "end": 686
                    },
                    "start": 673,
                    "end": 686
                  }
                ],
                "start": 671,
                "end": 687
              },
              "expression": false,
              "start": 660,
              "end": 687
            },
            "directive": null,
            "start": 659,
            "end": 689
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 701,
                "end": 702
              },
              "id": null,
              "generator": false,
              "start": 695,
              "end": 702
            },
            "directive": null,
            "start": 694,
            "end": 704
          }
        ],
        "start": 622,
        "end": 706
      },
      "start": 594,
      "end": 706
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
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 717,
              "end": 718
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 721,
              "end": 722
            },
            "definite": false,
            "start": 717,
            "end": 722
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 724,
              "end": 725
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 728,
              "end": 729
            },
            "definite": false,
            "start": 724,
            "end": 729
          }
        ],
        "declare": false,
        "start": 713,
        "end": 729
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 731,
          "end": 732
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 735,
          "end": 736
        },
        "start": 731,
        "end": 736
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 740,
          "end": 741
        },
        "start": 738,
        "end": 741
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
                  "name": "v5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 753,
                  "end": 755
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 758,
                  "end": 759
                },
                "definite": false,
                "start": 753,
                "end": 759
              }
            ],
            "declare": false,
            "start": 749,
            "end": 760
          },
          {
            "type": "ExpressionStatement",
            "expression": {
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 786,
                          "end": 787
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 790,
                          "end": 791
                        },
                        "start": 786,
                        "end": 791
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v5",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 794,
                        "end": 796
                      },
                      "start": 786,
                      "end": 796
                    },
                    "start": 779,
                    "end": 796
                  }
                ],
                "start": 777,
                "end": 797
              },
              "expression": false,
              "start": 766,
              "end": 797
            },
            "directive": null,
            "start": 765,
            "end": 799
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 811,
                  "end": 812
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 815,
                  "end": 816
                },
                "start": 811,
                "end": 816
              },
              "id": null,
              "generator": false,
              "start": 805,
              "end": 816
            },
            "directive": null,
            "start": 804,
            "end": 818
          }
        ],
        "start": 743,
        "end": 820
      },
      "start": 708,
      "end": 820
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 829,
          "end": 830
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 835,
          "end": 836
        },
        "start": 829,
        "end": 836
      },
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
                  "start": 848,
                  "end": 849
                },
                "init": null,
                "definite": false,
                "start": 848,
                "end": 849
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 851,
                  "end": 852
                },
                "init": null,
                "definite": false,
                "start": 851,
                "end": 852
              }
            ],
            "declare": false,
            "start": 844,
            "end": 853
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
                  "name": "v6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 862,
                  "end": 864
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 867,
                  "end": 868
                },
                "definite": false,
                "start": 862,
                "end": 868
              }
            ],
            "declare": false,
            "start": 858,
            "end": 869
          },
          {
            "type": "ExpressionStatement",
            "expression": {
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 895,
                          "end": 896
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 899,
                          "end": 900
                        },
                        "start": 895,
                        "end": 900
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v6",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 903,
                        "end": 905
                      },
                      "start": 895,
                      "end": 905
                    },
                    "start": 888,
                    "end": 905
                  }
                ],
                "start": 886,
                "end": 906
              },
              "expression": false,
              "start": 875,
              "end": 906
            },
            "directive": null,
            "start": 874,
            "end": 908
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 920,
                  "end": 921
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 924,
                  "end": 925
                },
                "start": 920,
                "end": 925
              },
              "id": null,
              "generator": false,
              "start": 914,
              "end": 925
            },
            "directive": null,
            "start": 913,
            "end": 927
          }
        ],
        "start": 838,
        "end": 929
      },
      "start": 822,
      "end": 929
    },
    {
      "type": "DoWhileStatement",
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
                  "start": 944,
                  "end": 945
                },
                "init": null,
                "definite": false,
                "start": 944,
                "end": 945
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 947,
                  "end": 948
                },
                "init": null,
                "definite": false,
                "start": 947,
                "end": 948
              }
            ],
            "declare": false,
            "start": 940,
            "end": 949
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
                  "name": "v7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 958,
                  "end": 960
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 963,
                  "end": 964
                },
                "definite": false,
                "start": 958,
                "end": 964
              }
            ],
            "declare": false,
            "start": 954,
            "end": 965
          },
          {
            "type": "ExpressionStatement",
            "expression": {
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 991,
                          "end": 992
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 995,
                          "end": 996
                        },
                        "start": 991,
                        "end": 996
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v7",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 999,
                        "end": 1001
                      },
                      "start": 991,
                      "end": 1001
                    },
                    "start": 984,
                    "end": 1001
                  }
                ],
                "start": 982,
                "end": 1002
              },
              "expression": false,
              "start": 971,
              "end": 1002
            },
            "directive": null,
            "start": 970,
            "end": 1004
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1016,
                  "end": 1017
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1020,
                  "end": 1021
                },
                "start": 1016,
                "end": 1021
              },
              "id": null,
              "generator": false,
              "start": 1010,
              "end": 1021
            },
            "directive": null,
            "start": 1009,
            "end": 1023
          }
        ],
        "start": 934,
        "end": 1025
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1033,
          "end": 1034
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1039,
          "end": 1040
        },
        "start": 1033,
        "end": 1040
      },
      "start": 931,
      "end": 1041
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
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1052,
              "end": 1053
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1056,
              "end": 1057
            },
            "definite": false,
            "start": 1052,
            "end": 1057
          }
        ],
        "declare": false,
        "start": 1048,
        "end": 1057
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 1059,
          "end": 1060
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1063,
          "end": 1064
        },
        "start": 1059,
        "end": 1064
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 1068,
          "end": 1069
        },
        "start": 1066,
        "end": 1069
      },
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
                  "start": 1081,
                  "end": 1082
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1085,
                  "end": 1086
                },
                "definite": false,
                "start": 1081,
                "end": 1086
              }
            ],
            "declare": false,
            "start": 1077,
            "end": 1087
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
                  "name": "v8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1096,
                  "end": 1098
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1101,
                  "end": 1102
                },
                "definite": false,
                "start": 1096,
                "end": 1102
              }
            ],
            "declare": false,
            "start": 1092,
            "end": 1103
          },
          {
            "type": "ExpressionStatement",
            "expression": {
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1129,
                          "end": 1130
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1133,
                          "end": 1134
                        },
                        "start": 1129,
                        "end": 1134
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v8",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1137,
                        "end": 1139
                      },
                      "start": 1129,
                      "end": 1139
                    },
                    "start": 1122,
                    "end": 1139
                  }
                ],
                "start": 1120,
                "end": 1140
              },
              "expression": false,
              "start": 1109,
              "end": 1140
            },
            "directive": null,
            "start": 1108,
            "end": 1142
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1154,
                  "end": 1155
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1158,
                  "end": 1159
                },
                "start": 1154,
                "end": 1159
              },
              "id": null,
              "generator": false,
              "start": 1148,
              "end": 1159
            },
            "directive": null,
            "start": 1147,
            "end": 1161
          }
        ],
        "start": 1071,
        "end": 1163
      },
      "start": 1043,
      "end": 1163
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "exportedFoo2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1195,
          "end": 1207
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
              "type": "ReturnStatement",
              "argument": {
                "type": "BinaryExpression",
                "left": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "v0_c",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1223,
                                  "end": 1227
                                },
                                "operator": "+",
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "v00_c",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1230,
                                  "end": 1235
                                },
                                "start": 1223,
                                "end": 1235
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "v1_c",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1238,
                                "end": 1242
                              },
                              "start": 1223,
                              "end": 1242
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v2_c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1245,
                              "end": 1249
                            },
                            "start": 1223,
                            "end": 1249
                          },
                          "operator": "+",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "v3_c",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1252,
                            "end": 1256
                          },
                          "start": 1223,
                          "end": 1256
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v4_c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1259,
                          "end": 1263
                        },
                        "start": 1223,
                        "end": 1263
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v5_c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1266,
                        "end": 1270
                      },
                      "start": 1223,
                      "end": 1270
                    },
                    "operator": "+",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v6_c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1273,
                      "end": 1277
                    },
                    "start": 1223,
                    "end": 1277
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v7_c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1280,
                    "end": 1284
                  },
                  "start": 1223,
                  "end": 1284
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v8_c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1287,
                  "end": 1291
                },
                "start": 1223,
                "end": 1291
              },
              "start": 1216,
              "end": 1292
            }
          ],
          "start": 1210,
          "end": 1294
        },
        "expression": false,
        "start": 1186,
        "end": 1294
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1179,
      "end": 1294
    },
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
              "start": 1307,
              "end": 1308
            },
            "init": null,
            "definite": false,
            "start": 1307,
            "end": 1308
          }
        ],
        "declare": false,
        "start": 1301,
        "end": 1308
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 1312,
        "end": 1314
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
                  "name": "v0_c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1326,
                  "end": 1330
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1333,
                  "end": 1334
                },
                "definite": false,
                "start": 1326,
                "end": 1334
              }
            ],
            "declare": false,
            "start": 1322,
            "end": 1335
          },
          {
            "type": "ExpressionStatement",
            "expression": {
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1361,
                        "end": 1362
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v0_c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1365,
                        "end": 1369
                      },
                      "start": 1361,
                      "end": 1369
                    },
                    "start": 1354,
                    "end": 1369
                  }
                ],
                "start": 1352,
                "end": 1370
              },
              "expression": false,
              "start": 1341,
              "end": 1370
            },
            "directive": null,
            "start": 1340,
            "end": 1372
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1384,
                "end": 1385
              },
              "id": null,
              "generator": false,
              "start": 1378,
              "end": 1385
            },
            "directive": null,
            "start": 1377,
            "end": 1387
          }
        ],
        "start": 1316,
        "end": 1393
      },
      "start": 1296,
      "end": 1393
    },
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
              "start": 1406,
              "end": 1407
            },
            "init": null,
            "definite": false,
            "start": 1406,
            "end": 1407
          }
        ],
        "declare": false,
        "start": 1400,
        "end": 1407
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 1411,
        "end": 1413
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
                  "name": "v00_c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1425,
                  "end": 1430
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1433,
                  "end": 1434
                },
                "definite": false,
                "start": 1425,
                "end": 1434
              }
            ],
            "declare": false,
            "start": 1421,
            "end": 1435
          },
          {
            "type": "ExpressionStatement",
            "expression": {
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1461,
                        "end": 1462
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v00",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1465,
                        "end": 1468
                      },
                      "start": 1461,
                      "end": 1468
                    },
                    "start": 1454,
                    "end": 1468
                  }
                ],
                "start": 1452,
                "end": 1469
              },
              "expression": false,
              "start": 1441,
              "end": 1469
            },
            "directive": null,
            "start": 1440,
            "end": 1471
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1483,
                "end": 1484
              },
              "id": null,
              "generator": false,
              "start": 1477,
              "end": 1484
            },
            "directive": null,
            "start": 1476,
            "end": 1486
          }
        ],
        "start": 1415,
        "end": 1492
      },
      "start": 1395,
      "end": 1492
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
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1505,
              "end": 1506
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1509,
              "end": 1510
            },
            "definite": false,
            "start": 1505,
            "end": 1510
          }
        ],
        "declare": false,
        "start": 1499,
        "end": 1510
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 1512,
          "end": 1513
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1516,
          "end": 1517
        },
        "start": 1512,
        "end": 1517
      },
      "update": null,
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
                  "name": "v1_c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1530,
                  "end": 1534
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1537,
                  "end": 1538
                },
                "definite": false,
                "start": 1530,
                "end": 1538
              }
            ],
            "declare": false,
            "start": 1526,
            "end": 1539
          },
          {
            "type": "ExpressionStatement",
            "expression": {
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1565,
                        "end": 1566
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v1_c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1569,
                        "end": 1573
                      },
                      "start": 1565,
                      "end": 1573
                    },
                    "start": 1558,
                    "end": 1573
                  }
                ],
                "start": 1556,
                "end": 1574
              },
              "expression": false,
              "start": 1545,
              "end": 1574
            },
            "directive": null,
            "start": 1544,
            "end": 1576
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1588,
                "end": 1589
              },
              "id": null,
              "generator": false,
              "start": 1582,
              "end": 1589
            },
            "directive": null,
            "start": 1581,
            "end": 1591
          }
        ],
        "start": 1520,
        "end": 1593
      },
      "start": 1494,
      "end": 1593
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1602,
          "end": 1603
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1608,
          "end": 1609
        },
        "start": 1602,
        "end": 1609
      },
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
                  "start": 1623,
                  "end": 1624
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1626,
                  "end": 1627
                },
                "definite": false,
                "start": 1623,
                "end": 1627
              }
            ],
            "declare": false,
            "start": 1617,
            "end": 1628
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
                  "name": "v2_c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1637,
                  "end": 1641
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1644,
                  "end": 1645
                },
                "definite": false,
                "start": 1637,
                "end": 1645
              }
            ],
            "declare": false,
            "start": 1633,
            "end": 1646
          },
          {
            "type": "ExpressionStatement",
            "expression": {
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1672,
                        "end": 1673
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v2_c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1676,
                        "end": 1680
                      },
                      "start": 1672,
                      "end": 1680
                    },
                    "start": 1665,
                    "end": 1680
                  }
                ],
                "start": 1663,
                "end": 1681
              },
              "expression": false,
              "start": 1652,
              "end": 1681
            },
            "directive": null,
            "start": 1651,
            "end": 1683
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1695,
                "end": 1696
              },
              "id": null,
              "generator": false,
              "start": 1689,
              "end": 1696
            },
            "directive": null,
            "start": 1688,
            "end": 1698
          }
        ],
        "start": 1611,
        "end": 1700
      },
      "start": 1595,
      "end": 1700
    },
    {
      "type": "DoWhileStatement",
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
                  "start": 1717,
                  "end": 1718
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1721,
                  "end": 1722
                },
                "definite": false,
                "start": 1717,
                "end": 1722
              }
            ],
            "declare": false,
            "start": 1711,
            "end": 1723
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
                  "name": "v3_c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1732,
                  "end": 1736
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1739,
                  "end": 1740
                },
                "definite": false,
                "start": 1732,
                "end": 1740
              }
            ],
            "declare": false,
            "start": 1728,
            "end": 1741
          },
          {
            "type": "ExpressionStatement",
            "expression": {
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1767,
                        "end": 1768
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v3_c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1771,
                        "end": 1775
                      },
                      "start": 1767,
                      "end": 1775
                    },
                    "start": 1760,
                    "end": 1775
                  }
                ],
                "start": 1758,
                "end": 1776
              },
              "expression": false,
              "start": 1747,
              "end": 1776
            },
            "directive": null,
            "start": 1746,
            "end": 1778
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1790,
                "end": 1791
              },
              "id": null,
              "generator": false,
              "start": 1784,
              "end": 1791
            },
            "directive": null,
            "start": 1783,
            "end": 1793
          }
        ],
        "start": 1705,
        "end": 1795
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1803,
          "end": 1804
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1809,
          "end": 1810
        },
        "start": 1803,
        "end": 1810
      },
      "start": 1702,
      "end": 1811
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
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1824,
              "end": 1825
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1828,
              "end": 1829
            },
            "definite": false,
            "start": 1824,
            "end": 1829
          }
        ],
        "declare": false,
        "start": 1818,
        "end": 1829
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 1831,
          "end": 1832
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1835,
          "end": 1836
        },
        "start": 1831,
        "end": 1836
      },
      "update": null,
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
                  "start": 1851,
                  "end": 1852
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1855,
                  "end": 1856
                },
                "definite": false,
                "start": 1851,
                "end": 1856
              }
            ],
            "declare": false,
            "start": 1845,
            "end": 1857
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
                  "name": "v4_c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1866,
                  "end": 1870
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1873,
                  "end": 1874
                },
                "definite": false,
                "start": 1866,
                "end": 1874
              }
            ],
            "declare": false,
            "start": 1862,
            "end": 1875
          },
          {
            "type": "ExpressionStatement",
            "expression": {
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1901,
                        "end": 1902
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v4_c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1905,
                        "end": 1909
                      },
                      "start": 1901,
                      "end": 1909
                    },
                    "start": 1894,
                    "end": 1909
                  }
                ],
                "start": 1892,
                "end": 1910
              },
              "expression": false,
              "start": 1881,
              "end": 1910
            },
            "directive": null,
            "start": 1880,
            "end": 1912
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1924,
                "end": 1925
              },
              "id": null,
              "generator": false,
              "start": 1918,
              "end": 1925
            },
            "directive": null,
            "start": 1917,
            "end": 1927
          }
        ],
        "start": 1839,
        "end": 1929
      },
      "start": 1813,
      "end": 1929
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
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1942,
              "end": 1943
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1946,
              "end": 1947
            },
            "definite": false,
            "start": 1942,
            "end": 1947
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1949,
              "end": 1950
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1953,
              "end": 1954
            },
            "definite": false,
            "start": 1949,
            "end": 1954
          }
        ],
        "declare": false,
        "start": 1936,
        "end": 1954
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 1956,
          "end": 1957
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1960,
          "end": 1961
        },
        "start": 1956,
        "end": 1961
      },
      "update": null,
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
                  "name": "v5_c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1974,
                  "end": 1978
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1981,
                  "end": 1982
                },
                "definite": false,
                "start": 1974,
                "end": 1982
              }
            ],
            "declare": false,
            "start": 1970,
            "end": 1983
          },
          {
            "type": "ExpressionStatement",
            "expression": {
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2009,
                          "end": 2010
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2013,
                          "end": 2014
                        },
                        "start": 2009,
                        "end": 2014
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v5_c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2017,
                        "end": 2021
                      },
                      "start": 2009,
                      "end": 2021
                    },
                    "start": 2002,
                    "end": 2021
                  }
                ],
                "start": 2000,
                "end": 2022
              },
              "expression": false,
              "start": 1989,
              "end": 2022
            },
            "directive": null,
            "start": 1988,
            "end": 2024
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2036,
                  "end": 2037
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2040,
                  "end": 2041
                },
                "start": 2036,
                "end": 2041
              },
              "id": null,
              "generator": false,
              "start": 2030,
              "end": 2041
            },
            "directive": null,
            "start": 2029,
            "end": 2043
          }
        ],
        "start": 1964,
        "end": 2045
      },
      "start": 1931,
      "end": 2045
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2054,
          "end": 2055
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2060,
          "end": 2061
        },
        "start": 2054,
        "end": 2061
      },
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
                  "start": 2075,
                  "end": 2076
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2079,
                  "end": 2080
                },
                "definite": false,
                "start": 2075,
                "end": 2080
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2082,
                  "end": 2083
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2086,
                  "end": 2087
                },
                "definite": false,
                "start": 2082,
                "end": 2087
              }
            ],
            "declare": false,
            "start": 2069,
            "end": 2088
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
                  "name": "v6_c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2097,
                  "end": 2101
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2104,
                  "end": 2105
                },
                "definite": false,
                "start": 2097,
                "end": 2105
              }
            ],
            "declare": false,
            "start": 2093,
            "end": 2106
          },
          {
            "type": "ExpressionStatement",
            "expression": {
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2132,
                          "end": 2133
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2136,
                          "end": 2137
                        },
                        "start": 2132,
                        "end": 2137
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v6_c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2140,
                        "end": 2144
                      },
                      "start": 2132,
                      "end": 2144
                    },
                    "start": 2125,
                    "end": 2144
                  }
                ],
                "start": 2123,
                "end": 2145
              },
              "expression": false,
              "start": 2112,
              "end": 2145
            },
            "directive": null,
            "start": 2111,
            "end": 2147
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2159,
                  "end": 2160
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2163,
                  "end": 2164
                },
                "start": 2159,
                "end": 2164
              },
              "id": null,
              "generator": false,
              "start": 2153,
              "end": 2164
            },
            "directive": null,
            "start": 2152,
            "end": 2166
          }
        ],
        "start": 2063,
        "end": 2168
      },
      "start": 2047,
      "end": 2168
    },
    {
      "type": "DoWhileStatement",
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
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2192,
                  "end": 2193
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2196,
                  "end": 2197
                },
                "definite": false,
                "start": 2192,
                "end": 2197
              }
            ],
            "declare": false,
            "start": 2179,
            "end": 2198
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
                  "name": "v7_c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2207,
                  "end": 2211
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2214,
                  "end": 2215
                },
                "definite": false,
                "start": 2207,
                "end": 2215
              }
            ],
            "declare": false,
            "start": 2203,
            "end": 2216
          },
          {
            "type": "ExpressionStatement",
            "expression": {
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2242,
                          "end": 2243
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2246,
                          "end": 2247
                        },
                        "start": 2242,
                        "end": 2247
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v7_c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2250,
                        "end": 2254
                      },
                      "start": 2242,
                      "end": 2254
                    },
                    "start": 2235,
                    "end": 2254
                  }
                ],
                "start": 2233,
                "end": 2255
              },
              "expression": false,
              "start": 2222,
              "end": 2255
            },
            "directive": null,
            "start": 2221,
            "end": 2257
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2269,
                  "end": 2270
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2273,
                  "end": 2274
                },
                "start": 2269,
                "end": 2274
              },
              "id": null,
              "generator": false,
              "start": 2263,
              "end": 2274
            },
            "directive": null,
            "start": 2262,
            "end": 2276
          }
        ],
        "start": 2173,
        "end": 2278
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2286,
          "end": 2287
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2292,
          "end": 2293
        },
        "start": 2286,
        "end": 2293
      },
      "start": 2170,
      "end": 2294
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
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 2307,
              "end": 2308
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2311,
              "end": 2312
            },
            "definite": false,
            "start": 2307,
            "end": 2312
          }
        ],
        "declare": false,
        "start": 2301,
        "end": 2312
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 2314,
          "end": 2315
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2318,
          "end": 2319
        },
        "start": 2314,
        "end": 2319
      },
      "update": null,
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
                  "start": 2334,
                  "end": 2335
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2338,
                  "end": 2339
                },
                "definite": false,
                "start": 2334,
                "end": 2339
              }
            ],
            "declare": false,
            "start": 2328,
            "end": 2340
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
                  "name": "v8_c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2349,
                  "end": 2353
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2356,
                  "end": 2357
                },
                "definite": false,
                "start": 2349,
                "end": 2357
              }
            ],
            "declare": false,
            "start": 2345,
            "end": 2358
          },
          {
            "type": "ExpressionStatement",
            "expression": {
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2384,
                          "end": 2385
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2388,
                          "end": 2389
                        },
                        "start": 2384,
                        "end": 2389
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v8_c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2392,
                        "end": 2396
                      },
                      "start": 2384,
                      "end": 2396
                    },
                    "start": 2377,
                    "end": 2396
                  }
                ],
                "start": 2375,
                "end": 2397
              },
              "expression": false,
              "start": 2364,
              "end": 2397
            },
            "directive": null,
            "start": 2363,
            "end": 2399
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2411,
                  "end": 2412
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2415,
                  "end": 2416
                },
                "start": 2411,
                "end": 2416
              },
              "id": null,
              "generator": false,
              "start": 2405,
              "end": 2416
            },
            "directive": null,
            "start": 2404,
            "end": 2418
          }
        ],
        "start": 2322,
        "end": 2420
      },
      "start": 2296,
      "end": 2420
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 12,
  "end": 2420
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 12,
    "end": 18,
    "range": [
      12,
      18
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 19,
    "end": 27,
    "range": [
      19,
      27
    ]
  },
  {
    "type": "Identifier",
    "value": "exportedFoo",
    "start": 28,
    "end": 39,
    "range": [
      28,
      39
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 40,
    "end": 41,
    "range": [
      40,
      41
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 48,
    "end": 54,
    "range": [
      48,
      54
    ]
  },
  {
    "type": "Identifier",
    "value": "v0",
    "start": 55,
    "end": 57,
    "range": [
      55,
      57
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 58,
    "end": 59,
    "range": [
      58,
      59
    ]
  },
  {
    "type": "Identifier",
    "value": "v00",
    "start": 60,
    "end": 63,
    "range": [
      60,
      63
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 64,
    "end": 65,
    "range": [
      64,
      65
    ]
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 66,
    "end": 68,
    "range": [
      66,
      68
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 71,
    "end": 73,
    "range": [
      71,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Identifier",
    "value": "v3",
    "start": 76,
    "end": 78,
    "range": [
      76,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 79,
    "end": 80,
    "range": [
      79,
      80
    ]
  },
  {
    "type": "Identifier",
    "value": "v4",
    "start": 81,
    "end": 83,
    "range": [
      81,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Identifier",
    "value": "v5",
    "start": 86,
    "end": 88,
    "range": [
      86,
      88
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "Identifier",
    "value": "v6",
    "start": 91,
    "end": 93,
    "range": [
      91,
      93
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Identifier",
    "value": "v7",
    "start": 96,
    "end": 98,
    "range": [
      96,
      98
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Identifier",
    "value": "v8",
    "start": 101,
    "end": 103,
    "range": [
      101,
      103
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 108,
    "end": 111,
    "range": [
      108,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 113,
    "end": 116,
    "range": [
      113,
      116
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 119,
    "end": 121,
    "range": [
      119,
      121
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 124,
    "end": 125,
    "range": [
      124,
      125
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 132,
    "end": 135,
    "range": [
      132,
      135
    ]
  },
  {
    "type": "Identifier",
    "value": "v0",
    "start": 136,
    "end": 138,
    "range": [
      136,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 149,
    "end": 157,
    "range": [
      149,
      157
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 158,
    "end": 159,
    "range": [
      158,
      159
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 162,
    "end": 168,
    "range": [
      162,
      168
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 169,
    "end": 170,
    "range": [
      169,
      170
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 171,
    "end": 172,
    "range": [
      171,
      172
    ]
  },
  {
    "type": "Identifier",
    "value": "v0",
    "start": 173,
    "end": 175,
    "range": [
      173,
      175
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 183,
    "end": 184,
    "range": [
      183,
      184
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 185,
    "end": 186,
    "range": [
      185,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 187,
    "end": 189,
    "range": [
      187,
      189
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 190,
    "end": 191,
    "range": [
      190,
      191
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 191,
    "end": 192,
    "range": [
      191,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 192,
    "end": 193,
    "range": [
      192,
      193
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 198,
    "end": 199,
    "range": [
      198,
      199
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 201,
    "end": 204,
    "range": [
      201,
      204
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 206,
    "end": 209,
    "range": [
      206,
      209
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 212,
    "end": 214,
    "range": [
      212,
      214
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 225,
    "end": 228,
    "range": [
      225,
      228
    ]
  },
  {
    "type": "Identifier",
    "value": "v00",
    "start": 229,
    "end": 232,
    "range": [
      229,
      232
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 236,
    "end": 237,
    "range": [
      236,
      237
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 242,
    "end": 243,
    "range": [
      242,
      243
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 243,
    "end": 251,
    "range": [
      243,
      251
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 251,
    "end": 252,
    "range": [
      251,
      252
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 256,
    "end": 262,
    "range": [
      256,
      262
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 263,
    "end": 264,
    "range": [
      263,
      264
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 265,
    "end": 266,
    "range": [
      265,
      266
    ]
  },
  {
    "type": "Identifier",
    "value": "v00",
    "start": 267,
    "end": 270,
    "range": [
      267,
      270
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 271,
    "end": 272,
    "range": [
      271,
      272
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 272,
    "end": 273,
    "range": [
      272,
      273
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 278,
    "end": 279,
    "range": [
      278,
      279
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 279,
    "end": 280,
    "range": [
      279,
      280
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 280,
    "end": 281,
    "range": [
      280,
      281
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 282,
    "end": 284,
    "range": [
      282,
      284
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 285,
    "end": 286,
    "range": [
      285,
      286
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 286,
    "end": 287,
    "range": [
      286,
      287
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 293,
    "end": 294,
    "range": [
      293,
      294
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 296,
    "end": 299,
    "range": [
      296,
      299
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 300,
    "end": 301,
    "range": [
      300,
      301
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 301,
    "end": 304,
    "range": [
      301,
      304
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 305,
    "end": 306,
    "range": [
      305,
      306
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 307,
    "end": 308,
    "range": [
      307,
      308
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 309,
    "end": 310,
    "range": [
      309,
      310
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 310,
    "end": 311,
    "range": [
      310,
      311
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 312,
    "end": 313,
    "range": [
      312,
      313
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 314,
    "end": 315,
    "range": [
      314,
      315
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 316,
    "end": 317,
    "range": [
      316,
      317
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 317,
    "end": 318,
    "range": [
      317,
      318
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 319,
    "end": 321,
    "range": [
      319,
      321
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 321,
    "end": 322,
    "range": [
      321,
      322
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 322,
    "end": 323,
    "range": [
      322,
      323
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 324,
    "end": 325,
    "range": [
      324,
      325
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 330,
    "end": 333,
    "range": [
      330,
      333
    ]
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 334,
    "end": 336,
    "range": [
      334,
      336
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 337,
    "end": 338,
    "range": [
      337,
      338
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "(",
    "start": 346,
    "end": 347,
    "range": [
      346,
      347
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 347,
    "end": 355,
    "range": [
      347,
      355
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 355,
    "end": 356,
    "range": [
      355,
      356
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 356,
    "end": 357,
    "range": [
      356,
      357
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 358,
    "end": 359,
    "range": [
      358,
      359
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 360,
    "end": 366,
    "range": [
      360,
      366
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 367,
    "end": 368,
    "range": [
      367,
      368
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 369,
    "end": 370,
    "range": [
      369,
      370
    ]
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 371,
    "end": 373,
    "range": [
      371,
      373
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 373,
    "end": 374,
    "range": [
      373,
      374
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 374,
    "end": 375,
    "range": [
      374,
      375
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 375,
    "end": 376,
    "range": [
      375,
      376
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 381,
    "end": 382,
    "range": [
      381,
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
    "type": "Identifier",
    "value": "x",
    "start": 388,
    "end": 389,
    "range": [
      388,
      389
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 389,
    "end": 390,
    "range": [
      389,
      390
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 390,
    "end": 391,
    "range": [
      390,
      391
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 392,
    "end": 393,
    "range": [
      392,
      393
    ]
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 395,
    "end": 400,
    "range": [
      395,
      400
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 401,
    "end": 402,
    "range": [
      401,
      402
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 402,
    "end": 403,
    "range": [
      402,
      403
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 404,
    "end": 407,
    "range": [
      404,
      407
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 408,
    "end": 409,
    "range": [
      408,
      409
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 409,
    "end": 410,
    "range": [
      409,
      410
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 411,
    "end": 412,
    "range": [
      411,
      412
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 417,
    "end": 420,
    "range": [
      417,
      420
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 421,
    "end": 422,
    "range": [
      421,
      422
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 422,
    "end": 423,
    "range": [
      422,
      423
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 428,
    "end": 431,
    "range": [
      428,
      431
    ]
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 432,
    "end": 434,
    "range": [
      432,
      434
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 435,
    "end": 436,
    "range": [
      435,
      436
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 437,
    "end": 438,
    "range": [
      437,
      438
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 438,
    "end": 439,
    "range": [
      438,
      439
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 444,
    "end": 445,
    "range": [
      444,
      445
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 445,
    "end": 453,
    "range": [
      445,
      453
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 453,
    "end": 454,
    "range": [
      453,
      454
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "return",
    "start": 458,
    "end": 464,
    "range": [
      458,
      464
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 465,
    "end": 466,
    "range": [
      465,
      466
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 467,
    "end": 468,
    "range": [
      467,
      468
    ]
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 469,
    "end": 471,
    "range": [
      469,
      471
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 471,
    "end": 472,
    "range": [
      471,
      472
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 472,
    "end": 473,
    "range": [
      472,
      473
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 473,
    "end": 474,
    "range": [
      473,
      474
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 479,
    "end": 480,
    "range": [
      479,
      480
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 480,
    "end": 481,
    "range": [
      480,
      481
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 481,
    "end": 482,
    "range": [
      481,
      482
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 483,
    "end": 485,
    "range": [
      483,
      485
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 486,
    "end": 487,
    "range": [
      486,
      487
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 487,
    "end": 488,
    "range": [
      487,
      488
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 488,
    "end": 489,
    "range": [
      488,
      489
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 490,
    "end": 491,
    "range": [
      490,
      491
    ]
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 493,
    "end": 495,
    "range": [
      493,
      495
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 496,
    "end": 497,
    "range": [
      496,
      497
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 502,
    "end": 505,
    "range": [
      502,
      505
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 506,
    "end": 507,
    "range": [
      506,
      507
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 507,
    "end": 508,
    "range": [
      507,
      508
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 513,
    "end": 516,
    "range": [
      513,
      516
    ]
  },
  {
    "type": "Identifier",
    "value": "v3",
    "start": 517,
    "end": 519,
    "range": [
      517,
      519
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 520,
    "end": 521,
    "range": [
      520,
      521
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 522,
    "end": 523,
    "range": [
      522,
      523
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 523,
    "end": 524,
    "range": [
      523,
      524
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 529,
    "end": 530,
    "range": [
      529,
      530
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 530,
    "end": 538,
    "range": [
      530,
      538
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 538,
    "end": 539,
    "range": [
      538,
      539
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 539,
    "end": 540,
    "range": [
      539,
      540
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 541,
    "end": 542,
    "range": [
      541,
      542
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 543,
    "end": 549,
    "range": [
      543,
      549
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
    "value": "+",
    "start": 552,
    "end": 553,
    "range": [
      552,
      553
    ]
  },
  {
    "type": "Identifier",
    "value": "v3",
    "start": 554,
    "end": 556,
    "range": [
      554,
      556
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 556,
    "end": 557,
    "range": [
      556,
      557
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 557,
    "end": 558,
    "range": [
      557,
      558
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 558,
    "end": 559,
    "range": [
      558,
      559
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 564,
    "end": 565,
    "range": [
      564,
      565
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 565,
    "end": 566,
    "range": [
      565,
      566
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 566,
    "end": 567,
    "range": [
      566,
      567
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 568,
    "end": 570,
    "range": [
      568,
      570
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 571,
    "end": 572,
    "range": [
      571,
      572
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 572,
    "end": 573,
    "range": [
      572,
      573
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 573,
    "end": 574,
    "range": [
      573,
      574
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 575,
    "end": 576,
    "range": [
      575,
      576
    ]
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 577,
    "end": 582,
    "range": [
      577,
      582
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
    "type": "Numeric",
    "value": "1",
    "start": 584,
    "end": 585,
    "range": [
      584,
      585
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 586,
    "end": 589,
    "range": [
      586,
      589
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 590,
    "end": 591,
    "range": [
      590,
      591
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 591,
    "end": 592,
    "range": [
      591,
      592
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 594,
    "end": 597,
    "range": [
      594,
      597
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 598,
    "end": 599,
    "range": [
      598,
      599
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 599,
    "end": 602,
    "range": [
      599,
      602
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 603,
    "end": 604,
    "range": [
      603,
      604
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 605,
    "end": 606,
    "range": [
      605,
      606
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "type": "Identifier",
    "value": "y",
    "start": 610,
    "end": 611,
    "range": [
      610,
      611
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 612,
    "end": 613,
    "range": [
      612,
      613
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 614,
    "end": 615,
    "range": [
      614,
      615
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 615,
    "end": 616,
    "range": [
      615,
      616
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 617,
    "end": 619,
    "range": [
      617,
      619
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 619,
    "end": 620,
    "range": [
      619,
      620
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 620,
    "end": 621,
    "range": [
      620,
      621
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 622,
    "end": 623,
    "range": [
      622,
      623
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 628,
    "end": 631,
    "range": [
      628,
      631
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
    "value": "=",
    "start": 634,
    "end": 635,
    "range": [
      634,
      635
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 636,
    "end": 637,
    "range": [
      636,
      637
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 637,
    "end": 638,
    "range": [
      637,
      638
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 643,
    "end": 646,
    "range": [
      643,
      646
    ]
  },
  {
    "type": "Identifier",
    "value": "v4",
    "start": 647,
    "end": 649,
    "range": [
      647,
      649
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 650,
    "end": 651,
    "range": [
      650,
      651
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 652,
    "end": 653,
    "range": [
      652,
      653
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 653,
    "end": 654,
    "range": [
      653,
      654
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 659,
    "end": 660,
    "range": [
      659,
      660
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 660,
    "end": 668,
    "range": [
      660,
      668
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 668,
    "end": 669,
    "range": [
      668,
      669
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 669,
    "end": 670,
    "range": [
      669,
      670
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 671,
    "end": 672,
    "range": [
      671,
      672
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 673,
    "end": 679,
    "range": [
      673,
      679
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 680,
    "end": 681,
    "range": [
      680,
      681
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 682,
    "end": 683,
    "range": [
      682,
      683
    ]
  },
  {
    "type": "Identifier",
    "value": "v4",
    "start": 684,
    "end": 686,
    "range": [
      684,
      686
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 686,
    "end": 687,
    "range": [
      686,
      687
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 687,
    "end": 688,
    "range": [
      687,
      688
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 688,
    "end": 689,
    "range": [
      688,
      689
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 694,
    "end": 695,
    "range": [
      694,
      695
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 695,
    "end": 696,
    "range": [
      695,
      696
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 696,
    "end": 697,
    "range": [
      696,
      697
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 698,
    "end": 700,
    "range": [
      698,
      700
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 701,
    "end": 702,
    "range": [
      701,
      702
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 702,
    "end": 703,
    "range": [
      702,
      703
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 703,
    "end": 704,
    "range": [
      703,
      704
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 705,
    "end": 706,
    "range": [
      705,
      706
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 708,
    "end": 711,
    "range": [
      708,
      711
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 712,
    "end": 713,
    "range": [
      712,
      713
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 713,
    "end": 716,
    "range": [
      713,
      716
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
    "value": "=",
    "start": 719,
    "end": 720,
    "range": [
      719,
      720
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 721,
    "end": 722,
    "range": [
      721,
      722
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 722,
    "end": 723,
    "range": [
      722,
      723
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 724,
    "end": 725,
    "range": [
      724,
      725
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 726,
    "end": 727,
    "range": [
      726,
      727
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 728,
    "end": 729,
    "range": [
      728,
      729
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 729,
    "end": 730,
    "range": [
      729,
      730
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 731,
    "end": 732,
    "range": [
      731,
      732
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 733,
    "end": 734,
    "range": [
      733,
      734
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 735,
    "end": 736,
    "range": [
      735,
      736
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 736,
    "end": 737,
    "range": [
      736,
      737
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 738,
    "end": 740,
    "range": [
      738,
      740
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 740,
    "end": 741,
    "range": [
      740,
      741
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 741,
    "end": 742,
    "range": [
      741,
      742
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 743,
    "end": 744,
    "range": [
      743,
      744
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 749,
    "end": 752,
    "range": [
      749,
      752
    ]
  },
  {
    "type": "Identifier",
    "value": "v5",
    "start": 753,
    "end": 755,
    "range": [
      753,
      755
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 756,
    "end": 757,
    "range": [
      756,
      757
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 758,
    "end": 759,
    "range": [
      758,
      759
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 759,
    "end": 760,
    "range": [
      759,
      760
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 765,
    "end": 766,
    "range": [
      765,
      766
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 766,
    "end": 774,
    "range": [
      766,
      774
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 774,
    "end": 775,
    "range": [
      774,
      775
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 775,
    "end": 776,
    "range": [
      775,
      776
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 777,
    "end": 778,
    "range": [
      777,
      778
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 779,
    "end": 785,
    "range": [
      779,
      785
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 786,
    "end": 787,
    "range": [
      786,
      787
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 788,
    "end": 789,
    "range": [
      788,
      789
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 790,
    "end": 791,
    "range": [
      790,
      791
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 792,
    "end": 793,
    "range": [
      792,
      793
    ]
  },
  {
    "type": "Identifier",
    "value": "v5",
    "start": 794,
    "end": 796,
    "range": [
      794,
      796
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 796,
    "end": 797,
    "range": [
      796,
      797
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 797,
    "end": 798,
    "range": [
      797,
      798
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 798,
    "end": 799,
    "range": [
      798,
      799
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 804,
    "end": 805,
    "range": [
      804,
      805
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 805,
    "end": 806,
    "range": [
      805,
      806
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 806,
    "end": 807,
    "range": [
      806,
      807
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 808,
    "end": 810,
    "range": [
      808,
      810
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 811,
    "end": 812,
    "range": [
      811,
      812
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 813,
    "end": 814,
    "range": [
      813,
      814
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 815,
    "end": 816,
    "range": [
      815,
      816
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 816,
    "end": 817,
    "range": [
      816,
      817
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 817,
    "end": 818,
    "range": [
      817,
      818
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 819,
    "end": 820,
    "range": [
      819,
      820
    ]
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 822,
    "end": 827,
    "range": [
      822,
      827
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 828,
    "end": 829,
    "range": [
      828,
      829
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 829,
    "end": 830,
    "range": [
      829,
      830
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 831,
    "end": 834,
    "range": [
      831,
      834
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 835,
    "end": 836,
    "range": [
      835,
      836
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 836,
    "end": 837,
    "range": [
      836,
      837
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 838,
    "end": 839,
    "range": [
      838,
      839
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 844,
    "end": 847,
    "range": [
      844,
      847
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 848,
    "end": 849,
    "range": [
      848,
      849
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 849,
    "end": 850,
    "range": [
      849,
      850
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 851,
    "end": 852,
    "range": [
      851,
      852
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 852,
    "end": 853,
    "range": [
      852,
      853
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 858,
    "end": 861,
    "range": [
      858,
      861
    ]
  },
  {
    "type": "Identifier",
    "value": "v6",
    "start": 862,
    "end": 864,
    "range": [
      862,
      864
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 865,
    "end": 866,
    "range": [
      865,
      866
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "(",
    "start": 874,
    "end": 875,
    "range": [
      874,
      875
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 875,
    "end": 883,
    "range": [
      875,
      883
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 883,
    "end": 884,
    "range": [
      883,
      884
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 884,
    "end": 885,
    "range": [
      884,
      885
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 886,
    "end": 887,
    "range": [
      886,
      887
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 888,
    "end": 894,
    "range": [
      888,
      894
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 895,
    "end": 896,
    "range": [
      895,
      896
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 897,
    "end": 898,
    "range": [
      897,
      898
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 899,
    "end": 900,
    "range": [
      899,
      900
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 901,
    "end": 902,
    "range": [
      901,
      902
    ]
  },
  {
    "type": "Identifier",
    "value": "v6",
    "start": 903,
    "end": 905,
    "range": [
      903,
      905
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 905,
    "end": 906,
    "range": [
      905,
      906
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 906,
    "end": 907,
    "range": [
      906,
      907
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "start": 913,
    "end": 914,
    "range": [
      913,
      914
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 914,
    "end": 915,
    "range": [
      914,
      915
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 915,
    "end": 916,
    "range": [
      915,
      916
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 917,
    "end": 919,
    "range": [
      917,
      919
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 920,
    "end": 921,
    "range": [
      920,
      921
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 922,
    "end": 923,
    "range": [
      922,
      923
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 924,
    "end": 925,
    "range": [
      924,
      925
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 925,
    "end": 926,
    "range": [
      925,
      926
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 926,
    "end": 927,
    "range": [
      926,
      927
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 928,
    "end": 929,
    "range": [
      928,
      929
    ]
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 931,
    "end": 933,
    "range": [
      931,
      933
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 934,
    "end": 935,
    "range": [
      934,
      935
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 940,
    "end": 943,
    "range": [
      940,
      943
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 944,
    "end": 945,
    "range": [
      944,
      945
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 945,
    "end": 946,
    "range": [
      945,
      946
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 947,
    "end": 948,
    "range": [
      947,
      948
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 948,
    "end": 949,
    "range": [
      948,
      949
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 954,
    "end": 957,
    "range": [
      954,
      957
    ]
  },
  {
    "type": "Identifier",
    "value": "v7",
    "start": 958,
    "end": 960,
    "range": [
      958,
      960
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 961,
    "end": 962,
    "range": [
      961,
      962
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 963,
    "end": 964,
    "range": [
      963,
      964
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "start": 970,
    "end": 971,
    "range": [
      970,
      971
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 971,
    "end": 979,
    "range": [
      971,
      979
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 979,
    "end": 980,
    "range": [
      979,
      980
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 980,
    "end": 981,
    "range": [
      980,
      981
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 982,
    "end": 983,
    "range": [
      982,
      983
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 984,
    "end": 990,
    "range": [
      984,
      990
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 991,
    "end": 992,
    "range": [
      991,
      992
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 993,
    "end": 994,
    "range": [
      993,
      994
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 995,
    "end": 996,
    "range": [
      995,
      996
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 997,
    "end": 998,
    "range": [
      997,
      998
    ]
  },
  {
    "type": "Identifier",
    "value": "v7",
    "start": 999,
    "end": 1001,
    "range": [
      999,
      1001
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1001,
    "end": 1002,
    "range": [
      1001,
      1002
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1002,
    "end": 1003,
    "range": [
      1002,
      1003
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1003,
    "end": 1004,
    "range": [
      1003,
      1004
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1009,
    "end": 1010,
    "range": [
      1009,
      1010
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1010,
    "end": 1011,
    "range": [
      1010,
      1011
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1011,
    "end": 1012,
    "range": [
      1011,
      1012
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1013,
    "end": 1015,
    "range": [
      1013,
      1015
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1016,
    "end": 1017,
    "range": [
      1016,
      1017
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1018,
    "end": 1019,
    "range": [
      1018,
      1019
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1020,
    "end": 1021,
    "range": [
      1020,
      1021
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1021,
    "end": 1022,
    "range": [
      1021,
      1022
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1022,
    "end": 1023,
    "range": [
      1022,
      1023
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1024,
    "end": 1025,
    "range": [
      1024,
      1025
    ]
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1026,
    "end": 1031,
    "range": [
      1026,
      1031
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1032,
    "end": 1033,
    "range": [
      1032,
      1033
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1033,
    "end": 1034,
    "range": [
      1033,
      1034
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1035,
    "end": 1038,
    "range": [
      1035,
      1038
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1039,
    "end": 1040,
    "range": [
      1039,
      1040
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1040,
    "end": 1041,
    "range": [
      1040,
      1041
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1043,
    "end": 1046,
    "range": [
      1043,
      1046
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1047,
    "end": 1048,
    "range": [
      1047,
      1048
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1048,
    "end": 1051,
    "range": [
      1048,
      1051
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1052,
    "end": 1053,
    "range": [
      1052,
      1053
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1054,
    "end": 1055,
    "range": [
      1054,
      1055
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1056,
    "end": 1057,
    "range": [
      1056,
      1057
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1057,
    "end": 1058,
    "range": [
      1057,
      1058
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1059,
    "end": 1060,
    "range": [
      1059,
      1060
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1061,
    "end": 1062,
    "range": [
      1061,
      1062
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1063,
    "end": 1064,
    "range": [
      1063,
      1064
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1064,
    "end": 1065,
    "range": [
      1064,
      1065
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1066,
    "end": 1068,
    "range": [
      1066,
      1068
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1068,
    "end": 1069,
    "range": [
      1068,
      1069
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1069,
    "end": 1070,
    "range": [
      1069,
      1070
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1071,
    "end": 1072,
    "range": [
      1071,
      1072
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1077,
    "end": 1080,
    "range": [
      1077,
      1080
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1081,
    "end": 1082,
    "range": [
      1081,
      1082
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1083,
    "end": 1084,
    "range": [
      1083,
      1084
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1085,
    "end": 1086,
    "range": [
      1085,
      1086
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1086,
    "end": 1087,
    "range": [
      1086,
      1087
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1092,
    "end": 1095,
    "range": [
      1092,
      1095
    ]
  },
  {
    "type": "Identifier",
    "value": "v8",
    "start": 1096,
    "end": 1098,
    "range": [
      1096,
      1098
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1099,
    "end": 1100,
    "range": [
      1099,
      1100
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1101,
    "end": 1102,
    "range": [
      1101,
      1102
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1102,
    "end": 1103,
    "range": [
      1102,
      1103
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1108,
    "end": 1109,
    "range": [
      1108,
      1109
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1109,
    "end": 1117,
    "range": [
      1109,
      1117
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1117,
    "end": 1118,
    "range": [
      1117,
      1118
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1118,
    "end": 1119,
    "range": [
      1118,
      1119
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1120,
    "end": 1121,
    "range": [
      1120,
      1121
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1122,
    "end": 1128,
    "range": [
      1122,
      1128
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1129,
    "end": 1130,
    "range": [
      1129,
      1130
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1131,
    "end": 1132,
    "range": [
      1131,
      1132
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1133,
    "end": 1134,
    "range": [
      1133,
      1134
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1135,
    "end": 1136,
    "range": [
      1135,
      1136
    ]
  },
  {
    "type": "Identifier",
    "value": "v8",
    "start": 1137,
    "end": 1139,
    "range": [
      1137,
      1139
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1139,
    "end": 1140,
    "range": [
      1139,
      1140
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1140,
    "end": 1141,
    "range": [
      1140,
      1141
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1141,
    "end": 1142,
    "range": [
      1141,
      1142
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1147,
    "end": 1148,
    "range": [
      1147,
      1148
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1148,
    "end": 1149,
    "range": [
      1148,
      1149
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1149,
    "end": 1150,
    "range": [
      1149,
      1150
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1151,
    "end": 1153,
    "range": [
      1151,
      1153
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1154,
    "end": 1155,
    "range": [
      1154,
      1155
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1156,
    "end": 1157,
    "range": [
      1156,
      1157
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1158,
    "end": 1159,
    "range": [
      1158,
      1159
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1159,
    "end": 1160,
    "range": [
      1159,
      1160
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1160,
    "end": 1161,
    "range": [
      1160,
      1161
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1162,
    "end": 1163,
    "range": [
      1162,
      1163
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1179,
    "end": 1185,
    "range": [
      1179,
      1185
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1186,
    "end": 1194,
    "range": [
      1186,
      1194
    ]
  },
  {
    "type": "Identifier",
    "value": "exportedFoo2",
    "start": 1195,
    "end": 1207,
    "range": [
      1195,
      1207
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1207,
    "end": 1208,
    "range": [
      1207,
      1208
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1208,
    "end": 1209,
    "range": [
      1208,
      1209
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1210,
    "end": 1211,
    "range": [
      1210,
      1211
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1216,
    "end": 1222,
    "range": [
      1216,
      1222
    ]
  },
  {
    "type": "Identifier",
    "value": "v0_c",
    "start": 1223,
    "end": 1227,
    "range": [
      1223,
      1227
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1228,
    "end": 1229,
    "range": [
      1228,
      1229
    ]
  },
  {
    "type": "Identifier",
    "value": "v00_c",
    "start": 1230,
    "end": 1235,
    "range": [
      1230,
      1235
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1236,
    "end": 1237,
    "range": [
      1236,
      1237
    ]
  },
  {
    "type": "Identifier",
    "value": "v1_c",
    "start": 1238,
    "end": 1242,
    "range": [
      1238,
      1242
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1243,
    "end": 1244,
    "range": [
      1243,
      1244
    ]
  },
  {
    "type": "Identifier",
    "value": "v2_c",
    "start": 1245,
    "end": 1249,
    "range": [
      1245,
      1249
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1250,
    "end": 1251,
    "range": [
      1250,
      1251
    ]
  },
  {
    "type": "Identifier",
    "value": "v3_c",
    "start": 1252,
    "end": 1256,
    "range": [
      1252,
      1256
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1257,
    "end": 1258,
    "range": [
      1257,
      1258
    ]
  },
  {
    "type": "Identifier",
    "value": "v4_c",
    "start": 1259,
    "end": 1263,
    "range": [
      1259,
      1263
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1264,
    "end": 1265,
    "range": [
      1264,
      1265
    ]
  },
  {
    "type": "Identifier",
    "value": "v5_c",
    "start": 1266,
    "end": 1270,
    "range": [
      1266,
      1270
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1271,
    "end": 1272,
    "range": [
      1271,
      1272
    ]
  },
  {
    "type": "Identifier",
    "value": "v6_c",
    "start": 1273,
    "end": 1277,
    "range": [
      1273,
      1277
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1278,
    "end": 1279,
    "range": [
      1278,
      1279
    ]
  },
  {
    "type": "Identifier",
    "value": "v7_c",
    "start": 1280,
    "end": 1284,
    "range": [
      1280,
      1284
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1285,
    "end": 1286,
    "range": [
      1285,
      1286
    ]
  },
  {
    "type": "Identifier",
    "value": "v8_c",
    "start": 1287,
    "end": 1291,
    "range": [
      1287,
      1291
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1291,
    "end": 1292,
    "range": [
      1291,
      1292
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1293,
    "end": 1294,
    "range": [
      1293,
      1294
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1296,
    "end": 1299,
    "range": [
      1296,
      1299
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1300,
    "end": 1301,
    "range": [
      1300,
      1301
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1301,
    "end": 1306,
    "range": [
      1301,
      1306
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1307,
    "end": 1308,
    "range": [
      1307,
      1308
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1309,
    "end": 1311,
    "range": [
      1309,
      1311
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1312,
    "end": 1313,
    "range": [
      1312,
      1313
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1313,
    "end": 1314,
    "range": [
      1313,
      1314
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1314,
    "end": 1315,
    "range": [
      1314,
      1315
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1316,
    "end": 1317,
    "range": [
      1316,
      1317
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1322,
    "end": 1325,
    "range": [
      1322,
      1325
    ]
  },
  {
    "type": "Identifier",
    "value": "v0_c",
    "start": 1326,
    "end": 1330,
    "range": [
      1326,
      1330
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1331,
    "end": 1332,
    "range": [
      1331,
      1332
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1333,
    "end": 1334,
    "range": [
      1333,
      1334
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1334,
    "end": 1335,
    "range": [
      1334,
      1335
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1340,
    "end": 1341,
    "range": [
      1340,
      1341
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1341,
    "end": 1349,
    "range": [
      1341,
      1349
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1349,
    "end": 1350,
    "range": [
      1349,
      1350
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1350,
    "end": 1351,
    "range": [
      1350,
      1351
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1352,
    "end": 1353,
    "range": [
      1352,
      1353
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1354,
    "end": 1360,
    "range": [
      1354,
      1360
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1361,
    "end": 1362,
    "range": [
      1361,
      1362
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1363,
    "end": 1364,
    "range": [
      1363,
      1364
    ]
  },
  {
    "type": "Identifier",
    "value": "v0_c",
    "start": 1365,
    "end": 1369,
    "range": [
      1365,
      1369
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1369,
    "end": 1370,
    "range": [
      1369,
      1370
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1370,
    "end": 1371,
    "range": [
      1370,
      1371
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1371,
    "end": 1372,
    "range": [
      1371,
      1372
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1377,
    "end": 1378,
    "range": [
      1377,
      1378
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1378,
    "end": 1379,
    "range": [
      1378,
      1379
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1379,
    "end": 1380,
    "range": [
      1379,
      1380
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1381,
    "end": 1383,
    "range": [
      1381,
      1383
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1384,
    "end": 1385,
    "range": [
      1384,
      1385
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1385,
    "end": 1386,
    "range": [
      1385,
      1386
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1386,
    "end": 1387,
    "range": [
      1386,
      1387
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1392,
    "end": 1393,
    "range": [
      1392,
      1393
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1395,
    "end": 1398,
    "range": [
      1395,
      1398
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1399,
    "end": 1400,
    "range": [
      1399,
      1400
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1400,
    "end": 1405,
    "range": [
      1400,
      1405
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1406,
    "end": 1407,
    "range": [
      1406,
      1407
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1408,
    "end": 1410,
    "range": [
      1408,
      1410
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1411,
    "end": 1412,
    "range": [
      1411,
      1412
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "{",
    "start": 1415,
    "end": 1416,
    "range": [
      1415,
      1416
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1421,
    "end": 1424,
    "range": [
      1421,
      1424
    ]
  },
  {
    "type": "Identifier",
    "value": "v00_c",
    "start": 1425,
    "end": 1430,
    "range": [
      1425,
      1430
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1431,
    "end": 1432,
    "range": [
      1431,
      1432
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1433,
    "end": 1434,
    "range": [
      1433,
      1434
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1434,
    "end": 1435,
    "range": [
      1434,
      1435
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1440,
    "end": 1441,
    "range": [
      1440,
      1441
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1441,
    "end": 1449,
    "range": [
      1441,
      1449
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1449,
    "end": 1450,
    "range": [
      1449,
      1450
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1450,
    "end": 1451,
    "range": [
      1450,
      1451
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1452,
    "end": 1453,
    "range": [
      1452,
      1453
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1454,
    "end": 1460,
    "range": [
      1454,
      1460
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1461,
    "end": 1462,
    "range": [
      1461,
      1462
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1463,
    "end": 1464,
    "range": [
      1463,
      1464
    ]
  },
  {
    "type": "Identifier",
    "value": "v00",
    "start": 1465,
    "end": 1468,
    "range": [
      1465,
      1468
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1468,
    "end": 1469,
    "range": [
      1468,
      1469
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1469,
    "end": 1470,
    "range": [
      1469,
      1470
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1470,
    "end": 1471,
    "range": [
      1470,
      1471
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1476,
    "end": 1477,
    "range": [
      1476,
      1477
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1477,
    "end": 1478,
    "range": [
      1477,
      1478
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1478,
    "end": 1479,
    "range": [
      1478,
      1479
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1480,
    "end": 1482,
    "range": [
      1480,
      1482
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1483,
    "end": 1484,
    "range": [
      1483,
      1484
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1484,
    "end": 1485,
    "range": [
      1484,
      1485
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1485,
    "end": 1486,
    "range": [
      1485,
      1486
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1491,
    "end": 1492,
    "range": [
      1491,
      1492
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1494,
    "end": 1497,
    "range": [
      1494,
      1497
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1498,
    "end": 1499,
    "range": [
      1498,
      1499
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1499,
    "end": 1504,
    "range": [
      1499,
      1504
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1505,
    "end": 1506,
    "range": [
      1505,
      1506
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1507,
    "end": 1508,
    "range": [
      1507,
      1508
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1509,
    "end": 1510,
    "range": [
      1509,
      1510
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1510,
    "end": 1511,
    "range": [
      1510,
      1511
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1512,
    "end": 1513,
    "range": [
      1512,
      1513
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1514,
    "end": 1515,
    "range": [
      1514,
      1515
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1516,
    "end": 1517,
    "range": [
      1516,
      1517
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1517,
    "end": 1518,
    "range": [
      1517,
      1518
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1518,
    "end": 1519,
    "range": [
      1518,
      1519
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1520,
    "end": 1521,
    "range": [
      1520,
      1521
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1526,
    "end": 1529,
    "range": [
      1526,
      1529
    ]
  },
  {
    "type": "Identifier",
    "value": "v1_c",
    "start": 1530,
    "end": 1534,
    "range": [
      1530,
      1534
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1535,
    "end": 1536,
    "range": [
      1535,
      1536
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1537,
    "end": 1538,
    "range": [
      1537,
      1538
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1538,
    "end": 1539,
    "range": [
      1538,
      1539
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1544,
    "end": 1545,
    "range": [
      1544,
      1545
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1545,
    "end": 1553,
    "range": [
      1545,
      1553
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1553,
    "end": 1554,
    "range": [
      1553,
      1554
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1554,
    "end": 1555,
    "range": [
      1554,
      1555
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1556,
    "end": 1557,
    "range": [
      1556,
      1557
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1558,
    "end": 1564,
    "range": [
      1558,
      1564
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1565,
    "end": 1566,
    "range": [
      1565,
      1566
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1567,
    "end": 1568,
    "range": [
      1567,
      1568
    ]
  },
  {
    "type": "Identifier",
    "value": "v1_c",
    "start": 1569,
    "end": 1573,
    "range": [
      1569,
      1573
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1573,
    "end": 1574,
    "range": [
      1573,
      1574
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1574,
    "end": 1575,
    "range": [
      1574,
      1575
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1575,
    "end": 1576,
    "range": [
      1575,
      1576
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1581,
    "end": 1582,
    "range": [
      1581,
      1582
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1582,
    "end": 1583,
    "range": [
      1582,
      1583
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1583,
    "end": 1584,
    "range": [
      1583,
      1584
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1585,
    "end": 1587,
    "range": [
      1585,
      1587
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1588,
    "end": 1589,
    "range": [
      1588,
      1589
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1589,
    "end": 1590,
    "range": [
      1589,
      1590
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1590,
    "end": 1591,
    "range": [
      1590,
      1591
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1592,
    "end": 1593,
    "range": [
      1592,
      1593
    ]
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1595,
    "end": 1600,
    "range": [
      1595,
      1600
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1601,
    "end": 1602,
    "range": [
      1601,
      1602
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1602,
    "end": 1603,
    "range": [
      1602,
      1603
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1604,
    "end": 1607,
    "range": [
      1604,
      1607
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1608,
    "end": 1609,
    "range": [
      1608,
      1609
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1609,
    "end": 1610,
    "range": [
      1609,
      1610
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1611,
    "end": 1612,
    "range": [
      1611,
      1612
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1617,
    "end": 1622,
    "range": [
      1617,
      1622
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1623,
    "end": 1624,
    "range": [
      1623,
      1624
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1625,
    "end": 1626,
    "range": [
      1625,
      1626
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1626,
    "end": 1627,
    "range": [
      1626,
      1627
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1627,
    "end": 1628,
    "range": [
      1627,
      1628
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1633,
    "end": 1636,
    "range": [
      1633,
      1636
    ]
  },
  {
    "type": "Identifier",
    "value": "v2_c",
    "start": 1637,
    "end": 1641,
    "range": [
      1637,
      1641
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1642,
    "end": 1643,
    "range": [
      1642,
      1643
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1644,
    "end": 1645,
    "range": [
      1644,
      1645
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1645,
    "end": 1646,
    "range": [
      1645,
      1646
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1651,
    "end": 1652,
    "range": [
      1651,
      1652
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1652,
    "end": 1660,
    "range": [
      1652,
      1660
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1660,
    "end": 1661,
    "range": [
      1660,
      1661
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1661,
    "end": 1662,
    "range": [
      1661,
      1662
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1663,
    "end": 1664,
    "range": [
      1663,
      1664
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1665,
    "end": 1671,
    "range": [
      1665,
      1671
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1672,
    "end": 1673,
    "range": [
      1672,
      1673
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1674,
    "end": 1675,
    "range": [
      1674,
      1675
    ]
  },
  {
    "type": "Identifier",
    "value": "v2_c",
    "start": 1676,
    "end": 1680,
    "range": [
      1676,
      1680
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1680,
    "end": 1681,
    "range": [
      1680,
      1681
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1681,
    "end": 1682,
    "range": [
      1681,
      1682
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1682,
    "end": 1683,
    "range": [
      1682,
      1683
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1688,
    "end": 1689,
    "range": [
      1688,
      1689
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1689,
    "end": 1690,
    "range": [
      1689,
      1690
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1690,
    "end": 1691,
    "range": [
      1690,
      1691
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1692,
    "end": 1694,
    "range": [
      1692,
      1694
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
    "value": ")",
    "start": 1696,
    "end": 1697,
    "range": [
      1696,
      1697
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1697,
    "end": 1698,
    "range": [
      1697,
      1698
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1699,
    "end": 1700,
    "range": [
      1699,
      1700
    ]
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 1702,
    "end": 1704,
    "range": [
      1702,
      1704
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1705,
    "end": 1706,
    "range": [
      1705,
      1706
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1711,
    "end": 1716,
    "range": [
      1711,
      1716
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1717,
    "end": 1718,
    "range": [
      1717,
      1718
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1719,
    "end": 1720,
    "range": [
      1719,
      1720
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1721,
    "end": 1722,
    "range": [
      1721,
      1722
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1722,
    "end": 1723,
    "range": [
      1722,
      1723
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1728,
    "end": 1731,
    "range": [
      1728,
      1731
    ]
  },
  {
    "type": "Identifier",
    "value": "v3_c",
    "start": 1732,
    "end": 1736,
    "range": [
      1732,
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
    "value": "x",
    "start": 1739,
    "end": 1740,
    "range": [
      1739,
      1740
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1740,
    "end": 1741,
    "range": [
      1740,
      1741
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
    "type": "Keyword",
    "value": "function",
    "start": 1747,
    "end": 1755,
    "range": [
      1747,
      1755
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1755,
    "end": 1756,
    "range": [
      1755,
      1756
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1756,
    "end": 1757,
    "range": [
      1756,
      1757
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1758,
    "end": 1759,
    "range": [
      1758,
      1759
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1760,
    "end": 1766,
    "range": [
      1760,
      1766
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1767,
    "end": 1768,
    "range": [
      1767,
      1768
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1769,
    "end": 1770,
    "range": [
      1769,
      1770
    ]
  },
  {
    "type": "Identifier",
    "value": "v3_c",
    "start": 1771,
    "end": 1775,
    "range": [
      1771,
      1775
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
    "value": ")",
    "start": 1776,
    "end": 1777,
    "range": [
      1776,
      1777
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1777,
    "end": 1778,
    "range": [
      1777,
      1778
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1783,
    "end": 1784,
    "range": [
      1783,
      1784
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1784,
    "end": 1785,
    "range": [
      1784,
      1785
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1785,
    "end": 1786,
    "range": [
      1785,
      1786
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1787,
    "end": 1789,
    "range": [
      1787,
      1789
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1790,
    "end": 1791,
    "range": [
      1790,
      1791
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1791,
    "end": 1792,
    "range": [
      1791,
      1792
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1792,
    "end": 1793,
    "range": [
      1792,
      1793
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1794,
    "end": 1795,
    "range": [
      1794,
      1795
    ]
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1796,
    "end": 1801,
    "range": [
      1796,
      1801
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1802,
    "end": 1803,
    "range": [
      1802,
      1803
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1803,
    "end": 1804,
    "range": [
      1803,
      1804
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1805,
    "end": 1808,
    "range": [
      1805,
      1808
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1809,
    "end": 1810,
    "range": [
      1809,
      1810
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1810,
    "end": 1811,
    "range": [
      1810,
      1811
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1813,
    "end": 1816,
    "range": [
      1813,
      1816
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1817,
    "end": 1818,
    "range": [
      1817,
      1818
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1818,
    "end": 1823,
    "range": [
      1818,
      1823
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1824,
    "end": 1825,
    "range": [
      1824,
      1825
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1826,
    "end": 1827,
    "range": [
      1826,
      1827
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1828,
    "end": 1829,
    "range": [
      1828,
      1829
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1829,
    "end": 1830,
    "range": [
      1829,
      1830
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1831,
    "end": 1832,
    "range": [
      1831,
      1832
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1833,
    "end": 1834,
    "range": [
      1833,
      1834
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1835,
    "end": 1836,
    "range": [
      1835,
      1836
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1836,
    "end": 1837,
    "range": [
      1836,
      1837
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1837,
    "end": 1838,
    "range": [
      1837,
      1838
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1839,
    "end": 1840,
    "range": [
      1839,
      1840
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1845,
    "end": 1850,
    "range": [
      1845,
      1850
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1851,
    "end": 1852,
    "range": [
      1851,
      1852
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1853,
    "end": 1854,
    "range": [
      1853,
      1854
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1855,
    "end": 1856,
    "range": [
      1855,
      1856
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1856,
    "end": 1857,
    "range": [
      1856,
      1857
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1862,
    "end": 1865,
    "range": [
      1862,
      1865
    ]
  },
  {
    "type": "Identifier",
    "value": "v4_c",
    "start": 1866,
    "end": 1870,
    "range": [
      1866,
      1870
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1871,
    "end": 1872,
    "range": [
      1871,
      1872
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1873,
    "end": 1874,
    "range": [
      1873,
      1874
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1874,
    "end": 1875,
    "range": [
      1874,
      1875
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1880,
    "end": 1881,
    "range": [
      1880,
      1881
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1881,
    "end": 1889,
    "range": [
      1881,
      1889
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1889,
    "end": 1890,
    "range": [
      1889,
      1890
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1890,
    "end": 1891,
    "range": [
      1890,
      1891
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1892,
    "end": 1893,
    "range": [
      1892,
      1893
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1894,
    "end": 1900,
    "range": [
      1894,
      1900
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1901,
    "end": 1902,
    "range": [
      1901,
      1902
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1903,
    "end": 1904,
    "range": [
      1903,
      1904
    ]
  },
  {
    "type": "Identifier",
    "value": "v4_c",
    "start": 1905,
    "end": 1909,
    "range": [
      1905,
      1909
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1909,
    "end": 1910,
    "range": [
      1909,
      1910
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1910,
    "end": 1911,
    "range": [
      1910,
      1911
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1911,
    "end": 1912,
    "range": [
      1911,
      1912
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1917,
    "end": 1918,
    "range": [
      1917,
      1918
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1918,
    "end": 1919,
    "range": [
      1918,
      1919
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1919,
    "end": 1920,
    "range": [
      1919,
      1920
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1921,
    "end": 1923,
    "range": [
      1921,
      1923
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1924,
    "end": 1925,
    "range": [
      1924,
      1925
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1925,
    "end": 1926,
    "range": [
      1925,
      1926
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1926,
    "end": 1927,
    "range": [
      1926,
      1927
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1928,
    "end": 1929,
    "range": [
      1928,
      1929
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1931,
    "end": 1934,
    "range": [
      1931,
      1934
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1935,
    "end": 1936,
    "range": [
      1935,
      1936
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1936,
    "end": 1941,
    "range": [
      1936,
      1941
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1942,
    "end": 1943,
    "range": [
      1942,
      1943
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1944,
    "end": 1945,
    "range": [
      1944,
      1945
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1946,
    "end": 1947,
    "range": [
      1946,
      1947
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1947,
    "end": 1948,
    "range": [
      1947,
      1948
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1949,
    "end": 1950,
    "range": [
      1949,
      1950
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1951,
    "end": 1952,
    "range": [
      1951,
      1952
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1953,
    "end": 1954,
    "range": [
      1953,
      1954
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1954,
    "end": 1955,
    "range": [
      1954,
      1955
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1956,
    "end": 1957,
    "range": [
      1956,
      1957
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1958,
    "end": 1959,
    "range": [
      1958,
      1959
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1960,
    "end": 1961,
    "range": [
      1960,
      1961
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1961,
    "end": 1962,
    "range": [
      1961,
      1962
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1962,
    "end": 1963,
    "range": [
      1962,
      1963
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1964,
    "end": 1965,
    "range": [
      1964,
      1965
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1970,
    "end": 1973,
    "range": [
      1970,
      1973
    ]
  },
  {
    "type": "Identifier",
    "value": "v5_c",
    "start": 1974,
    "end": 1978,
    "range": [
      1974,
      1978
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1979,
    "end": 1980,
    "range": [
      1979,
      1980
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1981,
    "end": 1982,
    "range": [
      1981,
      1982
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1982,
    "end": 1983,
    "range": [
      1982,
      1983
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1988,
    "end": 1989,
    "range": [
      1988,
      1989
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1989,
    "end": 1997,
    "range": [
      1989,
      1997
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1997,
    "end": 1998,
    "range": [
      1997,
      1998
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1998,
    "end": 1999,
    "range": [
      1998,
      1999
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2000,
    "end": 2001,
    "range": [
      2000,
      2001
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2002,
    "end": 2008,
    "range": [
      2002,
      2008
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2009,
    "end": 2010,
    "range": [
      2009,
      2010
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2011,
    "end": 2012,
    "range": [
      2011,
      2012
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2013,
    "end": 2014,
    "range": [
      2013,
      2014
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2015,
    "end": 2016,
    "range": [
      2015,
      2016
    ]
  },
  {
    "type": "Identifier",
    "value": "v5_c",
    "start": 2017,
    "end": 2021,
    "range": [
      2017,
      2021
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2021,
    "end": 2022,
    "range": [
      2021,
      2022
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2022,
    "end": 2023,
    "range": [
      2022,
      2023
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2023,
    "end": 2024,
    "range": [
      2023,
      2024
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2029,
    "end": 2030,
    "range": [
      2029,
      2030
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2030,
    "end": 2031,
    "range": [
      2030,
      2031
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2031,
    "end": 2032,
    "range": [
      2031,
      2032
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2033,
    "end": 2035,
    "range": [
      2033,
      2035
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2036,
    "end": 2037,
    "range": [
      2036,
      2037
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2038,
    "end": 2039,
    "range": [
      2038,
      2039
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2040,
    "end": 2041,
    "range": [
      2040,
      2041
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2041,
    "end": 2042,
    "range": [
      2041,
      2042
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2042,
    "end": 2043,
    "range": [
      2042,
      2043
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2044,
    "end": 2045,
    "range": [
      2044,
      2045
    ]
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 2047,
    "end": 2052,
    "range": [
      2047,
      2052
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2053,
    "end": 2054,
    "range": [
      2053,
      2054
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2054,
    "end": 2055,
    "range": [
      2054,
      2055
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2056,
    "end": 2059,
    "range": [
      2056,
      2059
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2060,
    "end": 2061,
    "range": [
      2060,
      2061
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2061,
    "end": 2062,
    "range": [
      2061,
      2062
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2063,
    "end": 2064,
    "range": [
      2063,
      2064
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2069,
    "end": 2074,
    "range": [
      2069,
      2074
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2075,
    "end": 2076,
    "range": [
      2075,
      2076
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2077,
    "end": 2078,
    "range": [
      2077,
      2078
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2079,
    "end": 2080,
    "range": [
      2079,
      2080
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2080,
    "end": 2081,
    "range": [
      2080,
      2081
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2082,
    "end": 2083,
    "range": [
      2082,
      2083
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2084,
    "end": 2085,
    "range": [
      2084,
      2085
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2086,
    "end": 2087,
    "range": [
      2086,
      2087
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2087,
    "end": 2088,
    "range": [
      2087,
      2088
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2093,
    "end": 2096,
    "range": [
      2093,
      2096
    ]
  },
  {
    "type": "Identifier",
    "value": "v6_c",
    "start": 2097,
    "end": 2101,
    "range": [
      2097,
      2101
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2102,
    "end": 2103,
    "range": [
      2102,
      2103
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2104,
    "end": 2105,
    "range": [
      2104,
      2105
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2105,
    "end": 2106,
    "range": [
      2105,
      2106
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2111,
    "end": 2112,
    "range": [
      2111,
      2112
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2112,
    "end": 2120,
    "range": [
      2112,
      2120
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2120,
    "end": 2121,
    "range": [
      2120,
      2121
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2121,
    "end": 2122,
    "range": [
      2121,
      2122
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2123,
    "end": 2124,
    "range": [
      2123,
      2124
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2125,
    "end": 2131,
    "range": [
      2125,
      2131
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2132,
    "end": 2133,
    "range": [
      2132,
      2133
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2134,
    "end": 2135,
    "range": [
      2134,
      2135
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2136,
    "end": 2137,
    "range": [
      2136,
      2137
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2138,
    "end": 2139,
    "range": [
      2138,
      2139
    ]
  },
  {
    "type": "Identifier",
    "value": "v6_c",
    "start": 2140,
    "end": 2144,
    "range": [
      2140,
      2144
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2144,
    "end": 2145,
    "range": [
      2144,
      2145
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2145,
    "end": 2146,
    "range": [
      2145,
      2146
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2146,
    "end": 2147,
    "range": [
      2146,
      2147
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2152,
    "end": 2153,
    "range": [
      2152,
      2153
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2153,
    "end": 2154,
    "range": [
      2153,
      2154
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2154,
    "end": 2155,
    "range": [
      2154,
      2155
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2156,
    "end": 2158,
    "range": [
      2156,
      2158
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2159,
    "end": 2160,
    "range": [
      2159,
      2160
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2161,
    "end": 2162,
    "range": [
      2161,
      2162
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2163,
    "end": 2164,
    "range": [
      2163,
      2164
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2164,
    "end": 2165,
    "range": [
      2164,
      2165
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2165,
    "end": 2166,
    "range": [
      2165,
      2166
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2167,
    "end": 2168,
    "range": [
      2167,
      2168
    ]
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 2170,
    "end": 2172,
    "range": [
      2170,
      2172
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2173,
    "end": 2174,
    "range": [
      2173,
      2174
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2179,
    "end": 2184,
    "range": [
      2179,
      2184
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2185,
    "end": 2186,
    "range": [
      2185,
      2186
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2187,
    "end": 2188,
    "range": [
      2187,
      2188
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2189,
    "end": 2190,
    "range": [
      2189,
      2190
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2190,
    "end": 2191,
    "range": [
      2190,
      2191
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2192,
    "end": 2193,
    "range": [
      2192,
      2193
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2194,
    "end": 2195,
    "range": [
      2194,
      2195
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2196,
    "end": 2197,
    "range": [
      2196,
      2197
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2197,
    "end": 2198,
    "range": [
      2197,
      2198
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2203,
    "end": 2206,
    "range": [
      2203,
      2206
    ]
  },
  {
    "type": "Identifier",
    "value": "v7_c",
    "start": 2207,
    "end": 2211,
    "range": [
      2207,
      2211
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2212,
    "end": 2213,
    "range": [
      2212,
      2213
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2214,
    "end": 2215,
    "range": [
      2214,
      2215
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2215,
    "end": 2216,
    "range": [
      2215,
      2216
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2221,
    "end": 2222,
    "range": [
      2221,
      2222
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2222,
    "end": 2230,
    "range": [
      2222,
      2230
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2230,
    "end": 2231,
    "range": [
      2230,
      2231
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2231,
    "end": 2232,
    "range": [
      2231,
      2232
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2233,
    "end": 2234,
    "range": [
      2233,
      2234
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2235,
    "end": 2241,
    "range": [
      2235,
      2241
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2242,
    "end": 2243,
    "range": [
      2242,
      2243
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2244,
    "end": 2245,
    "range": [
      2244,
      2245
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2246,
    "end": 2247,
    "range": [
      2246,
      2247
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2248,
    "end": 2249,
    "range": [
      2248,
      2249
    ]
  },
  {
    "type": "Identifier",
    "value": "v7_c",
    "start": 2250,
    "end": 2254,
    "range": [
      2250,
      2254
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2254,
    "end": 2255,
    "range": [
      2254,
      2255
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2255,
    "end": 2256,
    "range": [
      2255,
      2256
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2256,
    "end": 2257,
    "range": [
      2256,
      2257
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2262,
    "end": 2263,
    "range": [
      2262,
      2263
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2263,
    "end": 2264,
    "range": [
      2263,
      2264
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2264,
    "end": 2265,
    "range": [
      2264,
      2265
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2266,
    "end": 2268,
    "range": [
      2266,
      2268
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2269,
    "end": 2270,
    "range": [
      2269,
      2270
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2271,
    "end": 2272,
    "range": [
      2271,
      2272
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2273,
    "end": 2274,
    "range": [
      2273,
      2274
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2274,
    "end": 2275,
    "range": [
      2274,
      2275
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2275,
    "end": 2276,
    "range": [
      2275,
      2276
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2277,
    "end": 2278,
    "range": [
      2277,
      2278
    ]
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 2279,
    "end": 2284,
    "range": [
      2279,
      2284
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2285,
    "end": 2286,
    "range": [
      2285,
      2286
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2286,
    "end": 2287,
    "range": [
      2286,
      2287
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2288,
    "end": 2291,
    "range": [
      2288,
      2291
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2292,
    "end": 2293,
    "range": [
      2292,
      2293
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2293,
    "end": 2294,
    "range": [
      2293,
      2294
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2296,
    "end": 2299,
    "range": [
      2296,
      2299
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2300,
    "end": 2301,
    "range": [
      2300,
      2301
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2301,
    "end": 2306,
    "range": [
      2301,
      2306
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2307,
    "end": 2308,
    "range": [
      2307,
      2308
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2309,
    "end": 2310,
    "range": [
      2309,
      2310
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2311,
    "end": 2312,
    "range": [
      2311,
      2312
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2312,
    "end": 2313,
    "range": [
      2312,
      2313
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2314,
    "end": 2315,
    "range": [
      2314,
      2315
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2316,
    "end": 2317,
    "range": [
      2316,
      2317
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2318,
    "end": 2319,
    "range": [
      2318,
      2319
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2319,
    "end": 2320,
    "range": [
      2319,
      2320
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2320,
    "end": 2321,
    "range": [
      2320,
      2321
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2322,
    "end": 2323,
    "range": [
      2322,
      2323
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2328,
    "end": 2333,
    "range": [
      2328,
      2333
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2334,
    "end": 2335,
    "range": [
      2334,
      2335
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2336,
    "end": 2337,
    "range": [
      2336,
      2337
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2338,
    "end": 2339,
    "range": [
      2338,
      2339
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2339,
    "end": 2340,
    "range": [
      2339,
      2340
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2345,
    "end": 2348,
    "range": [
      2345,
      2348
    ]
  },
  {
    "type": "Identifier",
    "value": "v8_c",
    "start": 2349,
    "end": 2353,
    "range": [
      2349,
      2353
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2354,
    "end": 2355,
    "range": [
      2354,
      2355
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2356,
    "end": 2357,
    "range": [
      2356,
      2357
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2357,
    "end": 2358,
    "range": [
      2357,
      2358
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2363,
    "end": 2364,
    "range": [
      2363,
      2364
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2364,
    "end": 2372,
    "range": [
      2364,
      2372
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2372,
    "end": 2373,
    "range": [
      2372,
      2373
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2373,
    "end": 2374,
    "range": [
      2373,
      2374
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2375,
    "end": 2376,
    "range": [
      2375,
      2376
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2377,
    "end": 2383,
    "range": [
      2377,
      2383
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2384,
    "end": 2385,
    "range": [
      2384,
      2385
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2386,
    "end": 2387,
    "range": [
      2386,
      2387
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2388,
    "end": 2389,
    "range": [
      2388,
      2389
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2390,
    "end": 2391,
    "range": [
      2390,
      2391
    ]
  },
  {
    "type": "Identifier",
    "value": "v8_c",
    "start": 2392,
    "end": 2396,
    "range": [
      2392,
      2396
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2396,
    "end": 2397,
    "range": [
      2396,
      2397
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2397,
    "end": 2398,
    "range": [
      2397,
      2398
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2398,
    "end": 2399,
    "range": [
      2398,
      2399
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2404,
    "end": 2405,
    "range": [
      2404,
      2405
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2405,
    "end": 2406,
    "range": [
      2405,
      2406
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2406,
    "end": 2407,
    "range": [
      2406,
      2407
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2408,
    "end": 2410,
    "range": [
      2408,
      2410
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2411,
    "end": 2412,
    "range": [
      2411,
      2412
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2413,
    "end": 2414,
    "range": [
      2413,
      2414
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2415,
    "end": 2416,
    "range": [
      2415,
      2416
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2416,
    "end": 2417,
    "range": [
      2416,
      2417
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2417,
    "end": 2418,
    "range": [
      2417,
      2418
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2419,
    "end": 2420,
    "range": [
      2419,
      2420
    ]
  }
]
```
