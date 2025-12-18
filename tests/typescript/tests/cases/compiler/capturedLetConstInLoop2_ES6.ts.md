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
        "name": "foo0",
        "optional": false,
        "typeAnnotation": null,
        "start": 24,
        "end": 28
      },
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
          "typeAnnotation": null,
          "start": 29,
          "end": 30
        }
      ],
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
                    "start": 47,
                    "end": 48
                  },
                  "init": null,
                  "definite": false,
                  "start": 47,
                  "end": 48
                }
              ],
              "declare": false,
              "start": 43,
              "end": 48
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 52,
              "end": 54
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 70,
                        "end": 71
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 74,
                          "end": 83
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 84,
                          "end": 90
                        },
                        "optional": false,
                        "computed": false,
                        "start": 74,
                        "end": 90
                      },
                      "definite": false,
                      "start": 70,
                      "end": 90
                    }
                  ],
                  "declare": false,
                  "start": 66,
                  "end": 91
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
                              "start": 121,
                              "end": 122
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 125,
                              "end": 126
                            },
                            "start": 121,
                            "end": 126
                          },
                          "start": 114,
                          "end": 126
                        }
                      ],
                      "start": 112,
                      "end": 128
                    },
                    "expression": false,
                    "start": 101,
                    "end": 128
                  },
                  "directive": null,
                  "start": 100,
                  "end": 130
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
                        "start": 146,
                        "end": 147
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 150,
                        "end": 151
                      },
                      "start": 146,
                      "end": 151
                    },
                    "id": null,
                    "generator": false,
                    "start": 140,
                    "end": 151
                  },
                  "directive": null,
                  "start": 139,
                  "end": 153
                }
              ],
              "start": 56,
              "end": 159
            },
            "start": 38,
            "end": 159
          }
        ],
        "start": 32,
        "end": 161
      },
      "expression": false,
      "start": 15,
      "end": 161
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo0_1",
        "optional": false,
        "typeAnnotation": null,
        "start": 172,
        "end": 178
      },
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
          "typeAnnotation": null,
          "start": 179,
          "end": 180
        }
      ],
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
                    "start": 197,
                    "end": 198
                  },
                  "init": null,
                  "definite": false,
                  "start": 197,
                  "end": 198
                }
              ],
              "declare": false,
              "start": 193,
              "end": 198
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 202,
              "end": 204
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 220,
                        "end": 221
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 224,
                          "end": 233
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 234,
                          "end": 240
                        },
                        "optional": false,
                        "computed": false,
                        "start": 224,
                        "end": 240
                      },
                      "definite": false,
                      "start": 220,
                      "end": 240
                    }
                  ],
                  "declare": false,
                  "start": 216,
                  "end": 241
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
                              "start": 271,
                              "end": 272
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 275,
                              "end": 276
                            },
                            "start": 271,
                            "end": 276
                          },
                          "start": 264,
                          "end": 276
                        }
                      ],
                      "start": 262,
                      "end": 278
                    },
                    "expression": false,
                    "start": 251,
                    "end": 278
                  },
                  "directive": null,
                  "start": 250,
                  "end": 280
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
                        "start": 296,
                        "end": 297
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 300,
                        "end": 301
                      },
                      "start": 296,
                      "end": 301
                    },
                    "id": null,
                    "generator": false,
                    "start": 290,
                    "end": 301
                  },
                  "directive": null,
                  "start": 289,
                  "end": 303
                }
              ],
              "start": 206,
              "end": 309
            },
            "start": 188,
            "end": 309
          }
        ],
        "start": 182,
        "end": 311
      },
      "expression": false,
      "start": 163,
      "end": 311
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 322,
        "end": 326
      },
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
          "typeAnnotation": null,
          "start": 327,
          "end": 328
        }
      ],
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
                    "start": 345,
                    "end": 346
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 349,
                    "end": 350
                  },
                  "definite": false,
                  "start": 345,
                  "end": 350
                }
              ],
              "declare": false,
              "start": 341,
              "end": 350
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 352,
                "end": 353
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 356,
                "end": 357
              },
              "start": 352,
              "end": 357
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
                "start": 361,
                "end": 362
              },
              "start": 359,
              "end": 362
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 378,
                        "end": 379
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 382,
                          "end": 391
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 392,
                          "end": 398
                        },
                        "optional": false,
                        "computed": false,
                        "start": 382,
                        "end": 398
                      },
                      "definite": false,
                      "start": 378,
                      "end": 398
                    }
                  ],
                  "declare": false,
                  "start": 374,
                  "end": 399
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
                              "start": 429,
                              "end": 430
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 433,
                              "end": 434
                            },
                            "start": 429,
                            "end": 434
                          },
                          "start": 422,
                          "end": 434
                        }
                      ],
                      "start": 420,
                      "end": 436
                    },
                    "expression": false,
                    "start": 409,
                    "end": 436
                  },
                  "directive": null,
                  "start": 408,
                  "end": 438
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
                        "start": 454,
                        "end": 455
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 458,
                        "end": 459
                      },
                      "start": 454,
                      "end": 459
                    },
                    "id": null,
                    "generator": false,
                    "start": 448,
                    "end": 459
                  },
                  "directive": null,
                  "start": 447,
                  "end": 461
                }
              ],
              "start": 364,
              "end": 467
            },
            "start": 336,
            "end": 467
          }
        ],
        "start": 330,
        "end": 469
      },
      "expression": false,
      "start": 313,
      "end": 469
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 480,
        "end": 484
      },
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
          "typeAnnotation": null,
          "start": 485,
          "end": 486
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "WhileStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 501,
                "end": 502
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 507,
                "end": 508
              },
              "start": 501,
              "end": 508
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 524,
                        "end": 525
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 528,
                          "end": 537
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 538,
                          "end": 544
                        },
                        "optional": false,
                        "computed": false,
                        "start": 528,
                        "end": 544
                      },
                      "definite": false,
                      "start": 524,
                      "end": 544
                    }
                  ],
                  "declare": false,
                  "start": 520,
                  "end": 545
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
                              "start": 575,
                              "end": 576
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 579,
                              "end": 580
                            },
                            "start": 575,
                            "end": 580
                          },
                          "start": 568,
                          "end": 580
                        }
                      ],
                      "start": 566,
                      "end": 582
                    },
                    "expression": false,
                    "start": 555,
                    "end": 582
                  },
                  "directive": null,
                  "start": 554,
                  "end": 584
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
                        "start": 600,
                        "end": 601
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 604,
                        "end": 605
                      },
                      "start": 600,
                      "end": 605
                    },
                    "id": null,
                    "generator": false,
                    "start": 594,
                    "end": 605
                  },
                  "directive": null,
                  "start": 593,
                  "end": 607
                }
              ],
              "start": 510,
              "end": 613
            },
            "start": 494,
            "end": 613
          }
        ],
        "start": 488,
        "end": 615
      },
      "expression": false,
      "start": 471,
      "end": 615
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 626,
        "end": 630
      },
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
          "typeAnnotation": null,
          "start": 631,
          "end": 632
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                        "start": 657,
                        "end": 658
                      },
                      "init": null,
                      "definite": false,
                      "start": 657,
                      "end": 658
                    }
                  ],
                  "declare": false,
                  "start": 653,
                  "end": 659
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 672,
                        "end": 673
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 676,
                          "end": 685
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 686,
                          "end": 692
                        },
                        "optional": false,
                        "computed": false,
                        "start": 676,
                        "end": 692
                      },
                      "definite": false,
                      "start": 672,
                      "end": 692
                    }
                  ],
                  "declare": false,
                  "start": 668,
                  "end": 693
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
                              "start": 723,
                              "end": 724
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 727,
                              "end": 728
                            },
                            "start": 723,
                            "end": 728
                          },
                          "start": 716,
                          "end": 728
                        }
                      ],
                      "start": 714,
                      "end": 730
                    },
                    "expression": false,
                    "start": 703,
                    "end": 730
                  },
                  "directive": null,
                  "start": 702,
                  "end": 732
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
                        "start": 748,
                        "end": 749
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 752,
                        "end": 753
                      },
                      "start": 748,
                      "end": 753
                    },
                    "id": null,
                    "generator": false,
                    "start": 742,
                    "end": 753
                  },
                  "directive": null,
                  "start": 741,
                  "end": 755
                }
              ],
              "start": 643,
              "end": 761
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 769,
                "end": 770
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 775,
                "end": 776
              },
              "start": 769,
              "end": 776
            },
            "start": 640,
            "end": 777
          }
        ],
        "start": 634,
        "end": 779
      },
      "expression": false,
      "start": 617,
      "end": 779
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 790,
        "end": 794
      },
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
          "typeAnnotation": null,
          "start": 795,
          "end": 796
        }
      ],
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
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 813,
                    "end": 814
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 817,
                    "end": 818
                  },
                  "definite": false,
                  "start": 813,
                  "end": 818
                }
              ],
              "declare": false,
              "start": 809,
              "end": 818
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 820,
                "end": 821
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 824,
                "end": 825
              },
              "start": 820,
              "end": 825
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
                "start": 829,
                "end": 830
              },
              "start": 827,
              "end": 830
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 846,
                        "end": 847
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 850,
                          "end": 859
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 860,
                          "end": 866
                        },
                        "optional": false,
                        "computed": false,
                        "start": 850,
                        "end": 866
                      },
                      "definite": false,
                      "start": 846,
                      "end": 866
                    }
                  ],
                  "declare": false,
                  "start": 842,
                  "end": 867
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 880,
                        "end": 881
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 884,
                        "end": 885
                      },
                      "definite": false,
                      "start": 880,
                      "end": 885
                    }
                  ],
                  "declare": false,
                  "start": 876,
                  "end": 886
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
                              "start": 916,
                              "end": 917
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 920,
                              "end": 921
                            },
                            "start": 916,
                            "end": 921
                          },
                          "start": 909,
                          "end": 921
                        }
                      ],
                      "start": 907,
                      "end": 923
                    },
                    "expression": false,
                    "start": 896,
                    "end": 923
                  },
                  "directive": null,
                  "start": 895,
                  "end": 925
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
                        "start": 941,
                        "end": 942
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 945,
                        "end": 946
                      },
                      "start": 941,
                      "end": 946
                    },
                    "id": null,
                    "generator": false,
                    "start": 935,
                    "end": 946
                  },
                  "directive": null,
                  "start": 934,
                  "end": 948
                }
              ],
              "start": 832,
              "end": 954
            },
            "start": 804,
            "end": 954
          }
        ],
        "start": 798,
        "end": 956
      },
      "expression": false,
      "start": 781,
      "end": 956
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 967,
        "end": 971
      },
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
          "typeAnnotation": null,
          "start": 972,
          "end": 973
        }
      ],
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
                    "start": 990,
                    "end": 991
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 994,
                    "end": 995
                  },
                  "definite": false,
                  "start": 990,
                  "end": 995
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 997,
                    "end": 998
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1001,
                    "end": 1002
                  },
                  "definite": false,
                  "start": 997,
                  "end": 1002
                }
              ],
              "declare": false,
              "start": 986,
              "end": 1002
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1004,
                "end": 1005
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1008,
                "end": 1009
              },
              "start": 1004,
              "end": 1009
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
                "start": 1013,
                "end": 1014
              },
              "start": 1011,
              "end": 1014
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1030,
                        "end": 1031
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1034,
                          "end": 1043
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1044,
                          "end": 1050
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1034,
                        "end": 1050
                      },
                      "definite": false,
                      "start": 1030,
                      "end": 1050
                    }
                  ],
                  "declare": false,
                  "start": 1026,
                  "end": 1051
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
                                "start": 1081,
                                "end": 1082
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1085,
                                "end": 1086
                              },
                              "start": 1081,
                              "end": 1086
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1089,
                              "end": 1090
                            },
                            "start": 1081,
                            "end": 1090
                          },
                          "start": 1074,
                          "end": 1090
                        }
                      ],
                      "start": 1072,
                      "end": 1092
                    },
                    "expression": false,
                    "start": 1061,
                    "end": 1092
                  },
                  "directive": null,
                  "start": 1060,
                  "end": 1094
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
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1110,
                          "end": 1111
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1114,
                          "end": 1115
                        },
                        "start": 1110,
                        "end": 1115
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1118,
                        "end": 1119
                      },
                      "start": 1110,
                      "end": 1119
                    },
                    "id": null,
                    "generator": false,
                    "start": 1104,
                    "end": 1119
                  },
                  "directive": null,
                  "start": 1103,
                  "end": 1121
                }
              ],
              "start": 1016,
              "end": 1127
            },
            "start": 981,
            "end": 1127
          }
        ],
        "start": 975,
        "end": 1129
      },
      "expression": false,
      "start": 958,
      "end": 1129
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1141,
        "end": 1145
      },
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
          "typeAnnotation": null,
          "start": 1146,
          "end": 1147
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "WhileStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1162,
                "end": 1163
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1168,
                "end": 1169
              },
              "start": 1162,
              "end": 1169
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
                        "start": 1185,
                        "end": 1186
                      },
                      "init": null,
                      "definite": false,
                      "start": 1185,
                      "end": 1186
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1188,
                        "end": 1189
                      },
                      "init": null,
                      "definite": false,
                      "start": 1188,
                      "end": 1189
                    }
                  ],
                  "declare": false,
                  "start": 1181,
                  "end": 1190
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1203,
                        "end": 1204
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1207,
                          "end": 1216
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1217,
                          "end": 1223
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1207,
                        "end": 1223
                      },
                      "definite": false,
                      "start": 1203,
                      "end": 1223
                    }
                  ],
                  "declare": false,
                  "start": 1199,
                  "end": 1224
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
                                "start": 1254,
                                "end": 1255
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1258,
                                "end": 1259
                              },
                              "start": 1254,
                              "end": 1259
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1262,
                              "end": 1263
                            },
                            "start": 1254,
                            "end": 1263
                          },
                          "start": 1247,
                          "end": 1263
                        }
                      ],
                      "start": 1245,
                      "end": 1265
                    },
                    "expression": false,
                    "start": 1234,
                    "end": 1265
                  },
                  "directive": null,
                  "start": 1233,
                  "end": 1267
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
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1283,
                          "end": 1284
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1287,
                          "end": 1288
                        },
                        "start": 1283,
                        "end": 1288
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1291,
                        "end": 1292
                      },
                      "start": 1283,
                      "end": 1292
                    },
                    "id": null,
                    "generator": false,
                    "start": 1277,
                    "end": 1292
                  },
                  "directive": null,
                  "start": 1276,
                  "end": 1294
                }
              ],
              "start": 1171,
              "end": 1300
            },
            "start": 1155,
            "end": 1300
          }
        ],
        "start": 1149,
        "end": 1302
      },
      "expression": false,
      "start": 1132,
      "end": 1302
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1313,
        "end": 1317
      },
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
          "typeAnnotation": null,
          "start": 1318,
          "end": 1319
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                        "start": 1344,
                        "end": 1345
                      },
                      "init": null,
                      "definite": false,
                      "start": 1344,
                      "end": 1345
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1347,
                        "end": 1348
                      },
                      "init": null,
                      "definite": false,
                      "start": 1347,
                      "end": 1348
                    }
                  ],
                  "declare": false,
                  "start": 1340,
                  "end": 1349
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1362,
                        "end": 1363
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1366,
                          "end": 1375
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1376,
                          "end": 1382
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1366,
                        "end": 1382
                      },
                      "definite": false,
                      "start": 1362,
                      "end": 1382
                    }
                  ],
                  "declare": false,
                  "start": 1358,
                  "end": 1383
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
                                "start": 1413,
                                "end": 1414
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1417,
                                "end": 1418
                              },
                              "start": 1413,
                              "end": 1418
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1421,
                              "end": 1422
                            },
                            "start": 1413,
                            "end": 1422
                          },
                          "start": 1406,
                          "end": 1422
                        }
                      ],
                      "start": 1404,
                      "end": 1424
                    },
                    "expression": false,
                    "start": 1393,
                    "end": 1424
                  },
                  "directive": null,
                  "start": 1392,
                  "end": 1426
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
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1442,
                          "end": 1443
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1446,
                          "end": 1447
                        },
                        "start": 1442,
                        "end": 1447
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1450,
                        "end": 1451
                      },
                      "start": 1442,
                      "end": 1451
                    },
                    "id": null,
                    "generator": false,
                    "start": 1436,
                    "end": 1451
                  },
                  "directive": null,
                  "start": 1435,
                  "end": 1453
                }
              ],
              "start": 1330,
              "end": 1459
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1467,
                "end": 1468
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1473,
                "end": 1474
              },
              "start": 1467,
              "end": 1474
            },
            "start": 1327,
            "end": 1475
          }
        ],
        "start": 1321,
        "end": 1477
      },
      "expression": false,
      "start": 1304,
      "end": 1477
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1489,
        "end": 1493
      },
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
          "typeAnnotation": null,
          "start": 1494,
          "end": 1495
        }
      ],
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
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1512,
                    "end": 1513
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1516,
                    "end": 1517
                  },
                  "definite": false,
                  "start": 1512,
                  "end": 1517
                }
              ],
              "declare": false,
              "start": 1508,
              "end": 1517
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1519,
                "end": 1520
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1523,
                "end": 1524
              },
              "start": 1519,
              "end": 1524
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
                "start": 1528,
                "end": 1529
              },
              "start": 1526,
              "end": 1529
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
                        "start": 1545,
                        "end": 1546
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1549,
                        "end": 1550
                      },
                      "definite": false,
                      "start": 1545,
                      "end": 1550
                    }
                  ],
                  "declare": false,
                  "start": 1541,
                  "end": 1551
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1564,
                        "end": 1565
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1568,
                          "end": 1577
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1578,
                          "end": 1584
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1568,
                        "end": 1584
                      },
                      "definite": false,
                      "start": 1564,
                      "end": 1584
                    }
                  ],
                  "declare": false,
                  "start": 1560,
                  "end": 1585
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
                                "start": 1615,
                                "end": 1616
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1619,
                                "end": 1620
                              },
                              "start": 1615,
                              "end": 1620
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1623,
                              "end": 1624
                            },
                            "start": 1615,
                            "end": 1624
                          },
                          "start": 1608,
                          "end": 1624
                        }
                      ],
                      "start": 1606,
                      "end": 1626
                    },
                    "expression": false,
                    "start": 1595,
                    "end": 1626
                  },
                  "directive": null,
                  "start": 1594,
                  "end": 1628
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
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1644,
                          "end": 1645
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1648,
                          "end": 1649
                        },
                        "start": 1644,
                        "end": 1649
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1652,
                        "end": 1653
                      },
                      "start": 1644,
                      "end": 1653
                    },
                    "id": null,
                    "generator": false,
                    "start": 1638,
                    "end": 1653
                  },
                  "directive": null,
                  "start": 1637,
                  "end": 1655
                }
              ],
              "start": 1531,
              "end": 1661
            },
            "start": 1503,
            "end": 1661
          }
        ],
        "start": 1497,
        "end": 1663
      },
      "expression": false,
      "start": 1480,
      "end": 1663
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo0_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1689,
        "end": 1695
      },
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
          "typeAnnotation": null,
          "start": 1696,
          "end": 1697
        }
      ],
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
                    "start": 1716,
                    "end": 1717
                  },
                  "init": null,
                  "definite": false,
                  "start": 1716,
                  "end": 1717
                }
              ],
              "declare": false,
              "start": 1710,
              "end": 1717
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 1721,
              "end": 1723
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1741,
                        "end": 1742
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1745,
                          "end": 1754
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1755,
                          "end": 1761
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1745,
                        "end": 1761
                      },
                      "definite": false,
                      "start": 1741,
                      "end": 1761
                    }
                  ],
                  "declare": false,
                  "start": 1735,
                  "end": 1762
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
                              "start": 1792,
                              "end": 1793
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1796,
                              "end": 1797
                            },
                            "start": 1792,
                            "end": 1797
                          },
                          "start": 1785,
                          "end": 1797
                        }
                      ],
                      "start": 1783,
                      "end": 1799
                    },
                    "expression": false,
                    "start": 1772,
                    "end": 1799
                  },
                  "directive": null,
                  "start": 1771,
                  "end": 1801
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
                        "start": 1817,
                        "end": 1818
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1821,
                        "end": 1822
                      },
                      "start": 1817,
                      "end": 1822
                    },
                    "id": null,
                    "generator": false,
                    "start": 1811,
                    "end": 1822
                  },
                  "directive": null,
                  "start": 1810,
                  "end": 1824
                }
              ],
              "start": 1725,
              "end": 1830
            },
            "start": 1705,
            "end": 1830
          }
        ],
        "start": 1699,
        "end": 1832
      },
      "expression": false,
      "start": 1680,
      "end": 1832
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo0_1_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1843,
        "end": 1851
      },
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
          "typeAnnotation": null,
          "start": 1852,
          "end": 1853
        }
      ],
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
                    "start": 1872,
                    "end": 1873
                  },
                  "init": null,
                  "definite": false,
                  "start": 1872,
                  "end": 1873
                }
              ],
              "declare": false,
              "start": 1866,
              "end": 1873
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 1877,
              "end": 1879
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1897,
                        "end": 1898
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1901,
                          "end": 1910
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1911,
                          "end": 1917
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1901,
                        "end": 1917
                      },
                      "definite": false,
                      "start": 1897,
                      "end": 1917
                    }
                  ],
                  "declare": false,
                  "start": 1891,
                  "end": 1918
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
                              "start": 1948,
                              "end": 1949
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1952,
                              "end": 1953
                            },
                            "start": 1948,
                            "end": 1953
                          },
                          "start": 1941,
                          "end": 1953
                        }
                      ],
                      "start": 1939,
                      "end": 1955
                    },
                    "expression": false,
                    "start": 1928,
                    "end": 1955
                  },
                  "directive": null,
                  "start": 1927,
                  "end": 1957
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
                        "start": 1973,
                        "end": 1974
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1977,
                        "end": 1978
                      },
                      "start": 1973,
                      "end": 1978
                    },
                    "id": null,
                    "generator": false,
                    "start": 1967,
                    "end": 1978
                  },
                  "directive": null,
                  "start": 1966,
                  "end": 1980
                }
              ],
              "start": 1881,
              "end": 1986
            },
            "start": 1861,
            "end": 1986
          }
        ],
        "start": 1855,
        "end": 1988
      },
      "expression": false,
      "start": 1834,
      "end": 1988
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1999,
        "end": 2005
      },
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
          "typeAnnotation": null,
          "start": 2006,
          "end": 2007
        }
      ],
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
                    "start": 2026,
                    "end": 2027
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 2030,
                    "end": 2031
                  },
                  "definite": false,
                  "start": 2026,
                  "end": 2031
                }
              ],
              "declare": false,
              "start": 2020,
              "end": 2031
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2033,
                "end": 2034
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2037,
                "end": 2038
              },
              "start": 2033,
              "end": 2038
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2057,
                        "end": 2058
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2061,
                          "end": 2070
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2071,
                          "end": 2077
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2061,
                        "end": 2077
                      },
                      "definite": false,
                      "start": 2057,
                      "end": 2077
                    }
                  ],
                  "declare": false,
                  "start": 2051,
                  "end": 2078
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
                              "start": 2108,
                              "end": 2109
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2112,
                              "end": 2113
                            },
                            "start": 2108,
                            "end": 2113
                          },
                          "start": 2101,
                          "end": 2113
                        }
                      ],
                      "start": 2099,
                      "end": 2115
                    },
                    "expression": false,
                    "start": 2088,
                    "end": 2115
                  },
                  "directive": null,
                  "start": 2087,
                  "end": 2117
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
                        "start": 2133,
                        "end": 2134
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2137,
                        "end": 2138
                      },
                      "start": 2133,
                      "end": 2138
                    },
                    "id": null,
                    "generator": false,
                    "start": 2127,
                    "end": 2138
                  },
                  "directive": null,
                  "start": 2126,
                  "end": 2140
                }
              ],
              "start": 2041,
              "end": 2146
            },
            "start": 2015,
            "end": 2146
          }
        ],
        "start": 2009,
        "end": 2148
      },
      "expression": false,
      "start": 1990,
      "end": 2148
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 2159,
        "end": 2165
      },
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
          "typeAnnotation": null,
          "start": 2166,
          "end": 2167
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "WhileStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2182,
                "end": 2183
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2188,
                "end": 2189
              },
              "start": 2182,
              "end": 2189
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2207,
                        "end": 2208
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2211,
                          "end": 2220
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2221,
                          "end": 2227
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2211,
                        "end": 2227
                      },
                      "definite": false,
                      "start": 2207,
                      "end": 2227
                    }
                  ],
                  "declare": false,
                  "start": 2201,
                  "end": 2228
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
                              "start": 2258,
                              "end": 2259
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2262,
                              "end": 2263
                            },
                            "start": 2258,
                            "end": 2263
                          },
                          "start": 2251,
                          "end": 2263
                        }
                      ],
                      "start": 2249,
                      "end": 2265
                    },
                    "expression": false,
                    "start": 2238,
                    "end": 2265
                  },
                  "directive": null,
                  "start": 2237,
                  "end": 2267
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
                        "start": 2283,
                        "end": 2284
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2287,
                        "end": 2288
                      },
                      "start": 2283,
                      "end": 2288
                    },
                    "id": null,
                    "generator": false,
                    "start": 2277,
                    "end": 2288
                  },
                  "directive": null,
                  "start": 2276,
                  "end": 2290
                }
              ],
              "start": 2191,
              "end": 2296
            },
            "start": 2175,
            "end": 2296
          }
        ],
        "start": 2169,
        "end": 2298
      },
      "expression": false,
      "start": 2150,
      "end": 2298
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 2309,
        "end": 2315
      },
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
          "typeAnnotation": null,
          "start": 2316,
          "end": 2317
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                        "start": 2344,
                        "end": 2345
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2348,
                        "end": 2349
                      },
                      "definite": false,
                      "start": 2344,
                      "end": 2349
                    }
                  ],
                  "declare": false,
                  "start": 2338,
                  "end": 2350
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
                        "start": 2365,
                        "end": 2366
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2369,
                          "end": 2378
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2379,
                          "end": 2385
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2369,
                        "end": 2385
                      },
                      "definite": false,
                      "start": 2365,
                      "end": 2385
                    }
                  ],
                  "declare": false,
                  "start": 2359,
                  "end": 2386
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
                              "start": 2416,
                              "end": 2417
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2420,
                              "end": 2421
                            },
                            "start": 2416,
                            "end": 2421
                          },
                          "start": 2409,
                          "end": 2421
                        }
                      ],
                      "start": 2407,
                      "end": 2423
                    },
                    "expression": false,
                    "start": 2396,
                    "end": 2423
                  },
                  "directive": null,
                  "start": 2395,
                  "end": 2425
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
                        "start": 2441,
                        "end": 2442
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2445,
                        "end": 2446
                      },
                      "start": 2441,
                      "end": 2446
                    },
                    "id": null,
                    "generator": false,
                    "start": 2435,
                    "end": 2446
                  },
                  "directive": null,
                  "start": 2434,
                  "end": 2448
                }
              ],
              "start": 2328,
              "end": 2454
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2462,
                "end": 2463
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2468,
                "end": 2469
              },
              "start": 2462,
              "end": 2469
            },
            "start": 2325,
            "end": 2470
          }
        ],
        "start": 2319,
        "end": 2472
      },
      "expression": false,
      "start": 2300,
      "end": 2472
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 2483,
        "end": 2489
      },
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
          "typeAnnotation": null,
          "start": 2490,
          "end": 2491
        }
      ],
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
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2510,
                    "end": 2511
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 2514,
                    "end": 2515
                  },
                  "definite": false,
                  "start": 2510,
                  "end": 2515
                }
              ],
              "declare": false,
              "start": 2504,
              "end": 2515
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 2517,
                "end": 2518
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2521,
                "end": 2522
              },
              "start": 2517,
              "end": 2522
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2541,
                        "end": 2542
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2545,
                          "end": 2554
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2555,
                          "end": 2561
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2545,
                        "end": 2561
                      },
                      "definite": false,
                      "start": 2541,
                      "end": 2561
                    }
                  ],
                  "declare": false,
                  "start": 2535,
                  "end": 2562
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
                        "start": 2577,
                        "end": 2578
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2581,
                        "end": 2582
                      },
                      "definite": false,
                      "start": 2577,
                      "end": 2582
                    }
                  ],
                  "declare": false,
                  "start": 2571,
                  "end": 2583
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
                              "start": 2613,
                              "end": 2614
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2617,
                              "end": 2618
                            },
                            "start": 2613,
                            "end": 2618
                          },
                          "start": 2606,
                          "end": 2618
                        }
                      ],
                      "start": 2604,
                      "end": 2620
                    },
                    "expression": false,
                    "start": 2593,
                    "end": 2620
                  },
                  "directive": null,
                  "start": 2592,
                  "end": 2622
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
                        "start": 2638,
                        "end": 2639
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2642,
                        "end": 2643
                      },
                      "start": 2638,
                      "end": 2643
                    },
                    "id": null,
                    "generator": false,
                    "start": 2632,
                    "end": 2643
                  },
                  "directive": null,
                  "start": 2631,
                  "end": 2645
                }
              ],
              "start": 2525,
              "end": 2651
            },
            "start": 2499,
            "end": 2651
          }
        ],
        "start": 2493,
        "end": 2653
      },
      "expression": false,
      "start": 2474,
      "end": 2653
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 2664,
        "end": 2670
      },
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
          "typeAnnotation": null,
          "start": 2671,
          "end": 2672
        }
      ],
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
                    "start": 2691,
                    "end": 2692
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 2695,
                    "end": 2696
                  },
                  "definite": false,
                  "start": 2691,
                  "end": 2696
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2698,
                    "end": 2699
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2702,
                    "end": 2703
                  },
                  "definite": false,
                  "start": 2698,
                  "end": 2703
                }
              ],
              "declare": false,
              "start": 2685,
              "end": 2703
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2705,
                "end": 2706
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2709,
                "end": 2710
              },
              "start": 2705,
              "end": 2710
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2729,
                        "end": 2730
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2733,
                          "end": 2742
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2743,
                          "end": 2749
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2733,
                        "end": 2749
                      },
                      "definite": false,
                      "start": 2729,
                      "end": 2749
                    }
                  ],
                  "declare": false,
                  "start": 2723,
                  "end": 2750
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
                                "start": 2780,
                                "end": 2781
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2784,
                                "end": 2785
                              },
                              "start": 2780,
                              "end": 2785
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2788,
                              "end": 2789
                            },
                            "start": 2780,
                            "end": 2789
                          },
                          "start": 2773,
                          "end": 2789
                        }
                      ],
                      "start": 2771,
                      "end": 2791
                    },
                    "expression": false,
                    "start": 2760,
                    "end": 2791
                  },
                  "directive": null,
                  "start": 2759,
                  "end": 2793
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
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2809,
                          "end": 2810
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2813,
                          "end": 2814
                        },
                        "start": 2809,
                        "end": 2814
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2817,
                        "end": 2818
                      },
                      "start": 2809,
                      "end": 2818
                    },
                    "id": null,
                    "generator": false,
                    "start": 2803,
                    "end": 2818
                  },
                  "directive": null,
                  "start": 2802,
                  "end": 2820
                }
              ],
              "start": 2713,
              "end": 2826
            },
            "start": 2680,
            "end": 2826
          }
        ],
        "start": 2674,
        "end": 2828
      },
      "expression": false,
      "start": 2655,
      "end": 2828
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 2840,
        "end": 2846
      },
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
          "typeAnnotation": null,
          "start": 2847,
          "end": 2848
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "WhileStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2863,
                "end": 2864
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2869,
                "end": 2870
              },
              "start": 2863,
              "end": 2870
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
                        "start": 2888,
                        "end": 2889
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2892,
                        "end": 2893
                      },
                      "definite": false,
                      "start": 2888,
                      "end": 2893
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2895,
                        "end": 2896
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2898,
                        "end": 2899
                      },
                      "definite": false,
                      "start": 2895,
                      "end": 2899
                    }
                  ],
                  "declare": false,
                  "start": 2882,
                  "end": 2901
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
                        "start": 2916,
                        "end": 2917
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2920,
                          "end": 2929
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2930,
                          "end": 2936
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2920,
                        "end": 2936
                      },
                      "definite": false,
                      "start": 2916,
                      "end": 2936
                    }
                  ],
                  "declare": false,
                  "start": 2910,
                  "end": 2937
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
                                "start": 2967,
                                "end": 2968
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2971,
                                "end": 2972
                              },
                              "start": 2967,
                              "end": 2972
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2975,
                              "end": 2976
                            },
                            "start": 2967,
                            "end": 2976
                          },
                          "start": 2960,
                          "end": 2976
                        }
                      ],
                      "start": 2958,
                      "end": 2978
                    },
                    "expression": false,
                    "start": 2947,
                    "end": 2978
                  },
                  "directive": null,
                  "start": 2946,
                  "end": 2980
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
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2996,
                          "end": 2997
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3000,
                          "end": 3001
                        },
                        "start": 2996,
                        "end": 3001
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3004,
                        "end": 3005
                      },
                      "start": 2996,
                      "end": 3005
                    },
                    "id": null,
                    "generator": false,
                    "start": 2990,
                    "end": 3005
                  },
                  "directive": null,
                  "start": 2989,
                  "end": 3007
                }
              ],
              "start": 2872,
              "end": 3013
            },
            "start": 2856,
            "end": 3013
          }
        ],
        "start": 2850,
        "end": 3015
      },
      "expression": false,
      "start": 2831,
      "end": 3015
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 3026,
        "end": 3032
      },
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
          "typeAnnotation": null,
          "start": 3033,
          "end": 3034
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                        "start": 3061,
                        "end": 3062
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3065,
                        "end": 3066
                      },
                      "definite": false,
                      "start": 3061,
                      "end": 3066
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3068,
                        "end": 3069
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3072,
                        "end": 3073
                      },
                      "definite": false,
                      "start": 3068,
                      "end": 3073
                    }
                  ],
                  "declare": false,
                  "start": 3055,
                  "end": 3074
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
                        "start": 3089,
                        "end": 3090
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3093,
                          "end": 3102
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3103,
                          "end": 3109
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3093,
                        "end": 3109
                      },
                      "definite": false,
                      "start": 3089,
                      "end": 3109
                    }
                  ],
                  "declare": false,
                  "start": 3083,
                  "end": 3110
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
                                "start": 3140,
                                "end": 3141
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3144,
                                "end": 3145
                              },
                              "start": 3140,
                              "end": 3145
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3148,
                              "end": 3149
                            },
                            "start": 3140,
                            "end": 3149
                          },
                          "start": 3133,
                          "end": 3149
                        }
                      ],
                      "start": 3131,
                      "end": 3151
                    },
                    "expression": false,
                    "start": 3120,
                    "end": 3151
                  },
                  "directive": null,
                  "start": 3119,
                  "end": 3153
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
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3169,
                          "end": 3170
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3173,
                          "end": 3174
                        },
                        "start": 3169,
                        "end": 3174
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3177,
                        "end": 3178
                      },
                      "start": 3169,
                      "end": 3178
                    },
                    "id": null,
                    "generator": false,
                    "start": 3163,
                    "end": 3178
                  },
                  "directive": null,
                  "start": 3162,
                  "end": 3180
                }
              ],
              "start": 3045,
              "end": 3186
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 3194,
                "end": 3195
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 3200,
                "end": 3201
              },
              "start": 3194,
              "end": 3201
            },
            "start": 3042,
            "end": 3202
          }
        ],
        "start": 3036,
        "end": 3204
      },
      "expression": false,
      "start": 3017,
      "end": 3204
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 3216,
        "end": 3222
      },
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
          "typeAnnotation": null,
          "start": 3223,
          "end": 3224
        }
      ],
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
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3243,
                    "end": 3244
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 3247,
                    "end": 3248
                  },
                  "definite": false,
                  "start": 3243,
                  "end": 3248
                }
              ],
              "declare": false,
              "start": 3237,
              "end": 3248
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 3250,
                "end": 3251
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 3254,
                "end": 3255
              },
              "start": 3250,
              "end": 3255
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
                        "start": 3274,
                        "end": 3275
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3278,
                        "end": 3279
                      },
                      "definite": false,
                      "start": 3274,
                      "end": 3279
                    }
                  ],
                  "declare": false,
                  "start": 3268,
                  "end": 3280
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
                        "start": 3295,
                        "end": 3296
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3299,
                          "end": 3308
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3309,
                          "end": 3315
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3299,
                        "end": 3315
                      },
                      "definite": false,
                      "start": 3295,
                      "end": 3315
                    }
                  ],
                  "declare": false,
                  "start": 3289,
                  "end": 3316
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
                                "start": 3346,
                                "end": 3347
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3350,
                                "end": 3351
                              },
                              "start": 3346,
                              "end": 3351
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3354,
                              "end": 3355
                            },
                            "start": 3346,
                            "end": 3355
                          },
                          "start": 3339,
                          "end": 3355
                        }
                      ],
                      "start": 3337,
                      "end": 3357
                    },
                    "expression": false,
                    "start": 3326,
                    "end": 3357
                  },
                  "directive": null,
                  "start": 3325,
                  "end": 3359
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
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3375,
                          "end": 3376
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3379,
                          "end": 3380
                        },
                        "start": 3375,
                        "end": 3380
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3383,
                        "end": 3384
                      },
                      "start": 3375,
                      "end": 3384
                    },
                    "id": null,
                    "generator": false,
                    "start": 3369,
                    "end": 3384
                  },
                  "directive": null,
                  "start": 3368,
                  "end": 3386
                }
              ],
              "start": 3258,
              "end": 3392
            },
            "start": 3232,
            "end": 3392
          }
        ],
        "start": 3226,
        "end": 3394
      },
      "expression": false,
      "start": 3207,
      "end": 3394
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 15,
  "end": 3394
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 15,
    "end": 23,
    "range": [
      15,
      23
    ]
  },
  {
    "type": "Identifier",
    "value": "foo0",
    "start": 24,
    "end": 28,
    "range": [
      24,
      28
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 28,
    "end": 29,
    "range": [
      28,
      29
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 32,
    "end": 33,
    "range": [
      32,
      33
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 38,
    "end": 41,
    "range": [
      38,
      41
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 43,
    "end": 46,
    "range": [
      43,
      46
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 49,
    "end": 51,
    "range": [
      49,
      51
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 52,
    "end": 53,
    "range": [
      52,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 54,
    "end": 55,
    "range": [
      54,
      55
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 56,
    "end": 57,
    "range": [
      56,
      57
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 66,
    "end": 69,
    "range": [
      66,
      69
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 74,
    "end": 83,
    "range": [
      74,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 84,
    "end": 90,
    "range": [
      84,
      90
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 90,
    "end": 91,
    "range": [
      90,
      91
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 101,
    "end": 109,
    "range": [
      101,
      109
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 114,
    "end": 120,
    "range": [
      114,
      120
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 128,
    "end": 129,
    "range": [
      128,
      129
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 140,
    "end": 141,
    "range": [
      140,
      141
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 143,
    "end": 145,
    "range": [
      143,
      145
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 150,
    "end": 151,
    "range": [
      150,
      151
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 151,
    "end": 152,
    "range": [
      151,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 158,
    "end": 159,
    "range": [
      158,
      159
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 163,
    "end": 171,
    "range": [
      163,
      171
    ]
  },
  {
    "type": "Identifier",
    "value": "foo0_1",
    "start": 172,
    "end": 178,
    "range": [
      172,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 179,
    "end": 180,
    "range": [
      179,
      180
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 182,
    "end": 183,
    "range": [
      182,
      183
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 188,
    "end": 191,
    "range": [
      188,
      191
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 192,
    "end": 193,
    "range": [
      192,
      193
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 193,
    "end": 196,
    "range": [
      193,
      196
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 199,
    "end": 201,
    "range": [
      199,
      201
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 202,
    "end": 203,
    "range": [
      202,
      203
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 203,
    "end": 204,
    "range": [
      203,
      204
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 216,
    "end": 219,
    "range": [
      216,
      219
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 222,
    "end": 223,
    "range": [
      222,
      223
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 224,
    "end": 233,
    "range": [
      224,
      233
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 234,
    "end": 240,
    "range": [
      234,
      240
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 250,
    "end": 251,
    "range": [
      250,
      251
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 251,
    "end": 259,
    "range": [
      251,
      259
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 259,
    "end": 260,
    "range": [
      259,
      260
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 260,
    "end": 261,
    "range": [
      260,
      261
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 262,
    "end": 263,
    "range": [
      262,
      263
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 264,
    "end": 270,
    "range": [
      264,
      270
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 271,
    "end": 272,
    "range": [
      271,
      272
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 275,
    "end": 276,
    "range": [
      275,
      276
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 277,
    "end": 278,
    "range": [
      277,
      278
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 278,
    "end": 279,
    "range": [
      278,
      279
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 279,
    "end": 280,
    "range": [
      279,
      280
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 289,
    "end": 290,
    "range": [
      289,
      290
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 290,
    "end": 291,
    "range": [
      290,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 293,
    "end": 295,
    "range": [
      293,
      295
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 296,
    "end": 297,
    "range": [
      296,
      297
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 298,
    "end": 299,
    "range": [
      298,
      299
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 300,
    "end": 301,
    "range": [
      300,
      301
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 301,
    "end": 302,
    "range": [
      301,
      302
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 302,
    "end": 303,
    "range": [
      302,
      303
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 308,
    "end": 309,
    "range": [
      308,
      309
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 310,
    "end": 311,
    "range": [
      310,
      311
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 313,
    "end": 321,
    "range": [
      313,
      321
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 322,
    "end": 326,
    "range": [
      322,
      326
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 326,
    "end": 327,
    "range": [
      326,
      327
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 327,
    "end": 328,
    "range": [
      327,
      328
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 328,
    "end": 329,
    "range": [
      328,
      329
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 330,
    "end": 331,
    "range": [
      330,
      331
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 336,
    "end": 339,
    "range": [
      336,
      339
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 340,
    "end": 341,
    "range": [
      340,
      341
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 341,
    "end": 344,
    "range": [
      341,
      344
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 345,
    "end": 346,
    "range": [
      345,
      346
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 347,
    "end": 348,
    "range": [
      347,
      348
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 349,
    "end": 350,
    "range": [
      349,
      350
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 350,
    "end": 351,
    "range": [
      350,
      351
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 352,
    "end": 353,
    "range": [
      352,
      353
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 354,
    "end": 355,
    "range": [
      354,
      355
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 356,
    "end": 357,
    "range": [
      356,
      357
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 357,
    "end": 358,
    "range": [
      357,
      358
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 359,
    "end": 361,
    "range": [
      359,
      361
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 361,
    "end": 362,
    "range": [
      361,
      362
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 362,
    "end": 363,
    "range": [
      362,
      363
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 364,
    "end": 365,
    "range": [
      364,
      365
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 374,
    "end": 377,
    "range": [
      374,
      377
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 378,
    "end": 379,
    "range": [
      378,
      379
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 380,
    "end": 381,
    "range": [
      380,
      381
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 382,
    "end": 391,
    "range": [
      382,
      391
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 391,
    "end": 392,
    "range": [
      391,
      392
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 392,
    "end": 398,
    "range": [
      392,
      398
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 398,
    "end": 399,
    "range": [
      398,
      399
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 408,
    "end": 409,
    "range": [
      408,
      409
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 409,
    "end": 417,
    "range": [
      409,
      417
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 417,
    "end": 418,
    "range": [
      417,
      418
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 418,
    "end": 419,
    "range": [
      418,
      419
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 422,
    "end": 428,
    "range": [
      422,
      428
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 429,
    "end": 430,
    "range": [
      429,
      430
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 431,
    "end": 432,
    "range": [
      431,
      432
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 433,
    "end": 434,
    "range": [
      433,
      434
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 435,
    "end": 436,
    "range": [
      435,
      436
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 436,
    "end": 437,
    "range": [
      436,
      437
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 437,
    "end": 438,
    "range": [
      437,
      438
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 447,
    "end": 448,
    "range": [
      447,
      448
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 448,
    "end": 449,
    "range": [
      448,
      449
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 449,
    "end": 450,
    "range": [
      449,
      450
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 451,
    "end": 453,
    "range": [
      451,
      453
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 454,
    "end": 455,
    "range": [
      454,
      455
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 456,
    "end": 457,
    "range": [
      456,
      457
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 458,
    "end": 459,
    "range": [
      458,
      459
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 459,
    "end": 460,
    "range": [
      459,
      460
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 460,
    "end": 461,
    "range": [
      460,
      461
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 466,
    "end": 467,
    "range": [
      466,
      467
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 468,
    "end": 469,
    "range": [
      468,
      469
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 471,
    "end": 479,
    "range": [
      471,
      479
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 480,
    "end": 484,
    "range": [
      480,
      484
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 484,
    "end": 485,
    "range": [
      484,
      485
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 485,
    "end": 486,
    "range": [
      485,
      486
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 486,
    "end": 487,
    "range": [
      486,
      487
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 488,
    "end": 489,
    "range": [
      488,
      489
    ]
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 494,
    "end": 499,
    "range": [
      494,
      499
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 500,
    "end": 501,
    "range": [
      500,
      501
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 501,
    "end": 502,
    "range": [
      501,
      502
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 503,
    "end": 506,
    "range": [
      503,
      506
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 507,
    "end": 508,
    "range": [
      507,
      508
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 508,
    "end": 509,
    "range": [
      508,
      509
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 510,
    "end": 511,
    "range": [
      510,
      511
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 520,
    "end": 523,
    "range": [
      520,
      523
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 524,
    "end": 525,
    "range": [
      524,
      525
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 526,
    "end": 527,
    "range": [
      526,
      527
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 528,
    "end": 537,
    "range": [
      528,
      537
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 537,
    "end": 538,
    "range": [
      537,
      538
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 538,
    "end": 544,
    "range": [
      538,
      544
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 544,
    "end": 545,
    "range": [
      544,
      545
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 554,
    "end": 555,
    "range": [
      554,
      555
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 555,
    "end": 563,
    "range": [
      555,
      563
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 563,
    "end": 564,
    "range": [
      563,
      564
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 564,
    "end": 565,
    "range": [
      564,
      565
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 566,
    "end": 567,
    "range": [
      566,
      567
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 568,
    "end": 574,
    "range": [
      568,
      574
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 575,
    "end": 576,
    "range": [
      575,
      576
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 577,
    "end": 578,
    "range": [
      577,
      578
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 579,
    "end": 580,
    "range": [
      579,
      580
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 581,
    "end": 582,
    "range": [
      581,
      582
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 582,
    "end": 583,
    "range": [
      582,
      583
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 583,
    "end": 584,
    "range": [
      583,
      584
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 593,
    "end": 594,
    "range": [
      593,
      594
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 594,
    "end": 595,
    "range": [
      594,
      595
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 595,
    "end": 596,
    "range": [
      595,
      596
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 597,
    "end": 599,
    "range": [
      597,
      599
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 600,
    "end": 601,
    "range": [
      600,
      601
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 602,
    "end": 603,
    "range": [
      602,
      603
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 604,
    "end": 605,
    "range": [
      604,
      605
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 605,
    "end": 606,
    "range": [
      605,
      606
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 606,
    "end": 607,
    "range": [
      606,
      607
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 612,
    "end": 613,
    "range": [
      612,
      613
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 614,
    "end": 615,
    "range": [
      614,
      615
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 617,
    "end": 625,
    "range": [
      617,
      625
    ]
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 626,
    "end": 630,
    "range": [
      626,
      630
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 630,
    "end": 631,
    "range": [
      630,
      631
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 631,
    "end": 632,
    "range": [
      631,
      632
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 632,
    "end": 633,
    "range": [
      632,
      633
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 634,
    "end": 635,
    "range": [
      634,
      635
    ]
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 640,
    "end": 642,
    "range": [
      640,
      642
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 643,
    "end": 644,
    "range": [
      643,
      644
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 653,
    "end": 656,
    "range": [
      653,
      656
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 657,
    "end": 658,
    "range": [
      657,
      658
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 658,
    "end": 659,
    "range": [
      658,
      659
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 668,
    "end": 671,
    "range": [
      668,
      671
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 672,
    "end": 673,
    "range": [
      672,
      673
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 674,
    "end": 675,
    "range": [
      674,
      675
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 676,
    "end": 685,
    "range": [
      676,
      685
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 685,
    "end": 686,
    "range": [
      685,
      686
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 686,
    "end": 692,
    "range": [
      686,
      692
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 692,
    "end": 693,
    "range": [
      692,
      693
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 702,
    "end": 703,
    "range": [
      702,
      703
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 703,
    "end": 711,
    "range": [
      703,
      711
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 711,
    "end": 712,
    "range": [
      711,
      712
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 712,
    "end": 713,
    "range": [
      712,
      713
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 714,
    "end": 715,
    "range": [
      714,
      715
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 716,
    "end": 722,
    "range": [
      716,
      722
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 723,
    "end": 724,
    "range": [
      723,
      724
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 725,
    "end": 726,
    "range": [
      725,
      726
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 727,
    "end": 728,
    "range": [
      727,
      728
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 729,
    "end": 730,
    "range": [
      729,
      730
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 730,
    "end": 731,
    "range": [
      730,
      731
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 731,
    "end": 732,
    "range": [
      731,
      732
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 741,
    "end": 742,
    "range": [
      741,
      742
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 742,
    "end": 743,
    "range": [
      742,
      743
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 743,
    "end": 744,
    "range": [
      743,
      744
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 745,
    "end": 747,
    "range": [
      745,
      747
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 748,
    "end": 749,
    "range": [
      748,
      749
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 750,
    "end": 751,
    "range": [
      750,
      751
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 752,
    "end": 753,
    "range": [
      752,
      753
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 753,
    "end": 754,
    "range": [
      753,
      754
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 754,
    "end": 755,
    "range": [
      754,
      755
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 760,
    "end": 761,
    "range": [
      760,
      761
    ]
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 762,
    "end": 767,
    "range": [
      762,
      767
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 768,
    "end": 769,
    "range": [
      768,
      769
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 769,
    "end": 770,
    "range": [
      769,
      770
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 771,
    "end": 774,
    "range": [
      771,
      774
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 775,
    "end": 776,
    "range": [
      775,
      776
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "start": 778,
    "end": 779,
    "range": [
      778,
      779
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 781,
    "end": 789,
    "range": [
      781,
      789
    ]
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 790,
    "end": 794,
    "range": [
      790,
      794
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 794,
    "end": 795,
    "range": [
      794,
      795
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 795,
    "end": 796,
    "range": [
      795,
      796
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 796,
    "end": 797,
    "range": [
      796,
      797
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 798,
    "end": 799,
    "range": [
      798,
      799
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 804,
    "end": 807,
    "range": [
      804,
      807
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 808,
    "end": 809,
    "range": [
      808,
      809
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 809,
    "end": 812,
    "range": [
      809,
      812
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 813,
    "end": 814,
    "range": [
      813,
      814
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 815,
    "end": 816,
    "range": [
      815,
      816
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 817,
    "end": 818,
    "range": [
      817,
      818
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 818,
    "end": 819,
    "range": [
      818,
      819
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 820,
    "end": 821,
    "range": [
      820,
      821
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 822,
    "end": 823,
    "range": [
      822,
      823
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 824,
    "end": 825,
    "range": [
      824,
      825
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 825,
    "end": 826,
    "range": [
      825,
      826
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 827,
    "end": 829,
    "range": [
      827,
      829
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 829,
    "end": 830,
    "range": [
      829,
      830
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 830,
    "end": 831,
    "range": [
      830,
      831
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 832,
    "end": 833,
    "range": [
      832,
      833
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 842,
    "end": 845,
    "range": [
      842,
      845
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 846,
    "end": 847,
    "range": [
      846,
      847
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 848,
    "end": 849,
    "range": [
      848,
      849
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 850,
    "end": 859,
    "range": [
      850,
      859
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 859,
    "end": 860,
    "range": [
      859,
      860
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 860,
    "end": 866,
    "range": [
      860,
      866
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 866,
    "end": 867,
    "range": [
      866,
      867
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 876,
    "end": 879,
    "range": [
      876,
      879
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 880,
    "end": 881,
    "range": [
      880,
      881
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 882,
    "end": 883,
    "range": [
      882,
      883
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 884,
    "end": 885,
    "range": [
      884,
      885
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 885,
    "end": 886,
    "range": [
      885,
      886
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 895,
    "end": 896,
    "range": [
      895,
      896
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 896,
    "end": 904,
    "range": [
      896,
      904
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 904,
    "end": 905,
    "range": [
      904,
      905
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 905,
    "end": 906,
    "range": [
      905,
      906
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 907,
    "end": 908,
    "range": [
      907,
      908
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 909,
    "end": 915,
    "range": [
      909,
      915
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 916,
    "end": 917,
    "range": [
      916,
      917
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 918,
    "end": 919,
    "range": [
      918,
      919
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 920,
    "end": 921,
    "range": [
      920,
      921
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 922,
    "end": 923,
    "range": [
      922,
      923
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 923,
    "end": 924,
    "range": [
      923,
      924
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 924,
    "end": 925,
    "range": [
      924,
      925
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 934,
    "end": 935,
    "range": [
      934,
      935
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 935,
    "end": 936,
    "range": [
      935,
      936
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 936,
    "end": 937,
    "range": [
      936,
      937
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 938,
    "end": 940,
    "range": [
      938,
      940
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 941,
    "end": 942,
    "range": [
      941,
      942
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 943,
    "end": 944,
    "range": [
      943,
      944
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 945,
    "end": 946,
    "range": [
      945,
      946
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 946,
    "end": 947,
    "range": [
      946,
      947
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 947,
    "end": 948,
    "range": [
      947,
      948
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 953,
    "end": 954,
    "range": [
      953,
      954
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 955,
    "end": 956,
    "range": [
      955,
      956
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 958,
    "end": 966,
    "range": [
      958,
      966
    ]
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 967,
    "end": 971,
    "range": [
      967,
      971
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 971,
    "end": 972,
    "range": [
      971,
      972
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 972,
    "end": 973,
    "range": [
      972,
      973
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 973,
    "end": 974,
    "range": [
      973,
      974
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 975,
    "end": 976,
    "range": [
      975,
      976
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 981,
    "end": 984,
    "range": [
      981,
      984
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 985,
    "end": 986,
    "range": [
      985,
      986
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 986,
    "end": 989,
    "range": [
      986,
      989
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 990,
    "end": 991,
    "range": [
      990,
      991
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 992,
    "end": 993,
    "range": [
      992,
      993
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 994,
    "end": 995,
    "range": [
      994,
      995
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 995,
    "end": 996,
    "range": [
      995,
      996
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 997,
    "end": 998,
    "range": [
      997,
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
    "type": "Numeric",
    "value": "1",
    "start": 1001,
    "end": 1002,
    "range": [
      1001,
      1002
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1002,
    "end": 1003,
    "range": [
      1002,
      1003
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1004,
    "end": 1005,
    "range": [
      1004,
      1005
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1006,
    "end": 1007,
    "range": [
      1006,
      1007
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1008,
    "end": 1009,
    "range": [
      1008,
      1009
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1009,
    "end": 1010,
    "range": [
      1009,
      1010
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1011,
    "end": 1013,
    "range": [
      1011,
      1013
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1013,
    "end": 1014,
    "range": [
      1013,
      1014
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1014,
    "end": 1015,
    "range": [
      1014,
      1015
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1016,
    "end": 1017,
    "range": [
      1016,
      1017
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1026,
    "end": 1029,
    "range": [
      1026,
      1029
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1030,
    "end": 1031,
    "range": [
      1030,
      1031
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1032,
    "end": 1033,
    "range": [
      1032,
      1033
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1034,
    "end": 1043,
    "range": [
      1034,
      1043
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1043,
    "end": 1044,
    "range": [
      1043,
      1044
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1044,
    "end": 1050,
    "range": [
      1044,
      1050
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1050,
    "end": 1051,
    "range": [
      1050,
      1051
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1060,
    "end": 1061,
    "range": [
      1060,
      1061
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1061,
    "end": 1069,
    "range": [
      1061,
      1069
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1069,
    "end": 1070,
    "range": [
      1069,
      1070
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1070,
    "end": 1071,
    "range": [
      1070,
      1071
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1072,
    "end": 1073,
    "range": [
      1072,
      1073
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1074,
    "end": 1080,
    "range": [
      1074,
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
    "value": "+",
    "start": 1083,
    "end": 1084,
    "range": [
      1083,
      1084
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1085,
    "end": 1086,
    "range": [
      1085,
      1086
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1087,
    "end": 1088,
    "range": [
      1087,
      1088
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1089,
    "end": 1090,
    "range": [
      1089,
      1090
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1091,
    "end": 1092,
    "range": [
      1091,
      1092
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1092,
    "end": 1093,
    "range": [
      1092,
      1093
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1093,
    "end": 1094,
    "range": [
      1093,
      1094
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1103,
    "end": 1104,
    "range": [
      1103,
      1104
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "x",
    "start": 1110,
    "end": 1111,
    "range": [
      1110,
      1111
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1112,
    "end": 1113,
    "range": [
      1112,
      1113
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1114,
    "end": 1115,
    "range": [
      1114,
      1115
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1116,
    "end": 1117,
    "range": [
      1116,
      1117
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1118,
    "end": 1119,
    "range": [
      1118,
      1119
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1119,
    "end": 1120,
    "range": [
      1119,
      1120
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1120,
    "end": 1121,
    "range": [
      1120,
      1121
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1126,
    "end": 1127,
    "range": [
      1126,
      1127
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1128,
    "end": 1129,
    "range": [
      1128,
      1129
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1132,
    "end": 1140,
    "range": [
      1132,
      1140
    ]
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 1141,
    "end": 1145,
    "range": [
      1141,
      1145
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1145,
    "end": 1146,
    "range": [
      1145,
      1146
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1146,
    "end": 1147,
    "range": [
      1146,
      1147
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1147,
    "end": 1148,
    "range": [
      1147,
      1148
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1149,
    "end": 1150,
    "range": [
      1149,
      1150
    ]
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1155,
    "end": 1160,
    "range": [
      1155,
      1160
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1161,
    "end": 1162,
    "range": [
      1161,
      1162
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1162,
    "end": 1163,
    "range": [
      1162,
      1163
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1164,
    "end": 1167,
    "range": [
      1164,
      1167
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1168,
    "end": 1169,
    "range": [
      1168,
      1169
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1169,
    "end": 1170,
    "range": [
      1169,
      1170
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1171,
    "end": 1172,
    "range": [
      1171,
      1172
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1181,
    "end": 1184,
    "range": [
      1181,
      1184
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1185,
    "end": 1186,
    "range": [
      1185,
      1186
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1186,
    "end": 1187,
    "range": [
      1186,
      1187
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1188,
    "end": 1189,
    "range": [
      1188,
      1189
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1189,
    "end": 1190,
    "range": [
      1189,
      1190
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1199,
    "end": 1202,
    "range": [
      1199,
      1202
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1203,
    "end": 1204,
    "range": [
      1203,
      1204
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1205,
    "end": 1206,
    "range": [
      1205,
      1206
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1207,
    "end": 1216,
    "range": [
      1207,
      1216
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1216,
    "end": 1217,
    "range": [
      1216,
      1217
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1217,
    "end": 1223,
    "range": [
      1217,
      1223
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1223,
    "end": 1224,
    "range": [
      1223,
      1224
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1233,
    "end": 1234,
    "range": [
      1233,
      1234
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1234,
    "end": 1242,
    "range": [
      1234,
      1242
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1242,
    "end": 1243,
    "range": [
      1242,
      1243
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1243,
    "end": 1244,
    "range": [
      1243,
      1244
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1245,
    "end": 1246,
    "range": [
      1245,
      1246
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1247,
    "end": 1253,
    "range": [
      1247,
      1253
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1254,
    "end": 1255,
    "range": [
      1254,
      1255
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1256,
    "end": 1257,
    "range": [
      1256,
      1257
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1258,
    "end": 1259,
    "range": [
      1258,
      1259
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1260,
    "end": 1261,
    "range": [
      1260,
      1261
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1262,
    "end": 1263,
    "range": [
      1262,
      1263
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1264,
    "end": 1265,
    "range": [
      1264,
      1265
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1265,
    "end": 1266,
    "range": [
      1265,
      1266
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1266,
    "end": 1267,
    "range": [
      1266,
      1267
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1276,
    "end": 1277,
    "range": [
      1276,
      1277
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1277,
    "end": 1278,
    "range": [
      1277,
      1278
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1278,
    "end": 1279,
    "range": [
      1278,
      1279
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1280,
    "end": 1282,
    "range": [
      1280,
      1282
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1283,
    "end": 1284,
    "range": [
      1283,
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
    "value": "y",
    "start": 1287,
    "end": 1288,
    "range": [
      1287,
      1288
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1289,
    "end": 1290,
    "range": [
      1289,
      1290
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1291,
    "end": 1292,
    "range": [
      1291,
      1292
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1292,
    "end": 1293,
    "range": [
      1292,
      1293
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1293,
    "end": 1294,
    "range": [
      1293,
      1294
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1299,
    "end": 1300,
    "range": [
      1299,
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
    "type": "Keyword",
    "value": "function",
    "start": 1304,
    "end": 1312,
    "range": [
      1304,
      1312
    ]
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1313,
    "end": 1317,
    "range": [
      1313,
      1317
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1317,
    "end": 1318,
    "range": [
      1317,
      1318
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1318,
    "end": 1319,
    "range": [
      1318,
      1319
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1319,
    "end": 1320,
    "range": [
      1319,
      1320
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1321,
    "end": 1322,
    "range": [
      1321,
      1322
    ]
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 1327,
    "end": 1329,
    "range": [
      1327,
      1329
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1330,
    "end": 1331,
    "range": [
      1330,
      1331
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1340,
    "end": 1343,
    "range": [
      1340,
      1343
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1344,
    "end": 1345,
    "range": [
      1344,
      1345
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1345,
    "end": 1346,
    "range": [
      1345,
      1346
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1347,
    "end": 1348,
    "range": [
      1347,
      1348
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1348,
    "end": 1349,
    "range": [
      1348,
      1349
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1358,
    "end": 1361,
    "range": [
      1358,
      1361
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1362,
    "end": 1363,
    "range": [
      1362,
      1363
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1364,
    "end": 1365,
    "range": [
      1364,
      1365
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1366,
    "end": 1375,
    "range": [
      1366,
      1375
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1375,
    "end": 1376,
    "range": [
      1375,
      1376
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1376,
    "end": 1382,
    "range": [
      1376,
      1382
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1382,
    "end": 1383,
    "range": [
      1382,
      1383
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1392,
    "end": 1393,
    "range": [
      1392,
      1393
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1393,
    "end": 1401,
    "range": [
      1393,
      1401
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1401,
    "end": 1402,
    "range": [
      1401,
      1402
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1402,
    "end": 1403,
    "range": [
      1402,
      1403
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1404,
    "end": 1405,
    "range": [
      1404,
      1405
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1406,
    "end": 1412,
    "range": [
      1406,
      1412
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1413,
    "end": 1414,
    "range": [
      1413,
      1414
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1415,
    "end": 1416,
    "range": [
      1415,
      1416
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1417,
    "end": 1418,
    "range": [
      1417,
      1418
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1419,
    "end": 1420,
    "range": [
      1419,
      1420
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1421,
    "end": 1422,
    "range": [
      1421,
      1422
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1423,
    "end": 1424,
    "range": [
      1423,
      1424
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1424,
    "end": 1425,
    "range": [
      1424,
      1425
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1425,
    "end": 1426,
    "range": [
      1425,
      1426
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1435,
    "end": 1436,
    "range": [
      1435,
      1436
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1436,
    "end": 1437,
    "range": [
      1436,
      1437
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1437,
    "end": 1438,
    "range": [
      1437,
      1438
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1439,
    "end": 1441,
    "range": [
      1439,
      1441
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1442,
    "end": 1443,
    "range": [
      1442,
      1443
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1444,
    "end": 1445,
    "range": [
      1444,
      1445
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1446,
    "end": 1447,
    "range": [
      1446,
      1447
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1448,
    "end": 1449,
    "range": [
      1448,
      1449
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1450,
    "end": 1451,
    "range": [
      1450,
      1451
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1451,
    "end": 1452,
    "range": [
      1451,
      1452
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1452,
    "end": 1453,
    "range": [
      1452,
      1453
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1458,
    "end": 1459,
    "range": [
      1458,
      1459
    ]
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1460,
    "end": 1465,
    "range": [
      1460,
      1465
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1466,
    "end": 1467,
    "range": [
      1466,
      1467
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1467,
    "end": 1468,
    "range": [
      1467,
      1468
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1469,
    "end": 1472,
    "range": [
      1469,
      1472
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1473,
    "end": 1474,
    "range": [
      1473,
      1474
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1474,
    "end": 1475,
    "range": [
      1474,
      1475
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1476,
    "end": 1477,
    "range": [
      1476,
      1477
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1480,
    "end": 1488,
    "range": [
      1480,
      1488
    ]
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1489,
    "end": 1493,
    "range": [
      1489,
      1493
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1493,
    "end": 1494,
    "range": [
      1493,
      1494
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1494,
    "end": 1495,
    "range": [
      1494,
      1495
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1495,
    "end": 1496,
    "range": [
      1495,
      1496
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1497,
    "end": 1498,
    "range": [
      1497,
      1498
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1503,
    "end": 1506,
    "range": [
      1503,
      1506
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1507,
    "end": 1508,
    "range": [
      1507,
      1508
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1508,
    "end": 1511,
    "range": [
      1508,
      1511
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1512,
    "end": 1513,
    "range": [
      1512,
      1513
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1514,
    "end": 1515,
    "range": [
      1514,
      1515
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "type": "Identifier",
    "value": "y",
    "start": 1519,
    "end": 1520,
    "range": [
      1519,
      1520
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1521,
    "end": 1522,
    "range": [
      1521,
      1522
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1523,
    "end": 1524,
    "range": [
      1523,
      1524
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1524,
    "end": 1525,
    "range": [
      1524,
      1525
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1526,
    "end": 1528,
    "range": [
      1526,
      1528
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1528,
    "end": 1529,
    "range": [
      1528,
      1529
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1529,
    "end": 1530,
    "range": [
      1529,
      1530
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1531,
    "end": 1532,
    "range": [
      1531,
      1532
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1541,
    "end": 1544,
    "range": [
      1541,
      1544
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1545,
    "end": 1546,
    "range": [
      1545,
      1546
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1547,
    "end": 1548,
    "range": [
      1547,
      1548
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1549,
    "end": 1550,
    "range": [
      1549,
      1550
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1550,
    "end": 1551,
    "range": [
      1550,
      1551
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1560,
    "end": 1563,
    "range": [
      1560,
      1563
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1564,
    "end": 1565,
    "range": [
      1564,
      1565
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1566,
    "end": 1567,
    "range": [
      1566,
      1567
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1568,
    "end": 1577,
    "range": [
      1568,
      1577
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1577,
    "end": 1578,
    "range": [
      1577,
      1578
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1578,
    "end": 1584,
    "range": [
      1578,
      1584
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1584,
    "end": 1585,
    "range": [
      1584,
      1585
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1594,
    "end": 1595,
    "range": [
      1594,
      1595
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1595,
    "end": 1603,
    "range": [
      1595,
      1603
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1603,
    "end": 1604,
    "range": [
      1603,
      1604
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1604,
    "end": 1605,
    "range": [
      1604,
      1605
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1606,
    "end": 1607,
    "range": [
      1606,
      1607
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1608,
    "end": 1614,
    "range": [
      1608,
      1614
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1615,
    "end": 1616,
    "range": [
      1615,
      1616
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1617,
    "end": 1618,
    "range": [
      1617,
      1618
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1619,
    "end": 1620,
    "range": [
      1619,
      1620
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1621,
    "end": 1622,
    "range": [
      1621,
      1622
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1623,
    "end": 1624,
    "range": [
      1623,
      1624
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1625,
    "end": 1626,
    "range": [
      1625,
      1626
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "(",
    "start": 1637,
    "end": 1638,
    "range": [
      1637,
      1638
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1638,
    "end": 1639,
    "range": [
      1638,
      1639
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1639,
    "end": 1640,
    "range": [
      1639,
      1640
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1641,
    "end": 1643,
    "range": [
      1641,
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
    "value": "+",
    "start": 1646,
    "end": 1647,
    "range": [
      1646,
      1647
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1648,
    "end": 1649,
    "range": [
      1648,
      1649
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1650,
    "end": 1651,
    "range": [
      1650,
      1651
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1652,
    "end": 1653,
    "range": [
      1652,
      1653
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1653,
    "end": 1654,
    "range": [
      1653,
      1654
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1654,
    "end": 1655,
    "range": [
      1654,
      1655
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1660,
    "end": 1661,
    "range": [
      1660,
      1661
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1662,
    "end": 1663,
    "range": [
      1662,
      1663
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1680,
    "end": 1688,
    "range": [
      1680,
      1688
    ]
  },
  {
    "type": "Identifier",
    "value": "foo0_c",
    "start": 1689,
    "end": 1695,
    "range": [
      1689,
      1695
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1695,
    "end": 1696,
    "range": [
      1695,
      1696
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1696,
    "end": 1697,
    "range": [
      1696,
      1697
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1697,
    "end": 1698,
    "range": [
      1697,
      1698
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1699,
    "end": 1700,
    "range": [
      1699,
      1700
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1705,
    "end": 1708,
    "range": [
      1705,
      1708
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1709,
    "end": 1710,
    "range": [
      1709,
      1710
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1710,
    "end": 1715,
    "range": [
      1710,
      1715
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1716,
    "end": 1717,
    "range": [
      1716,
      1717
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1718,
    "end": 1720,
    "range": [
      1718,
      1720
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1721,
    "end": 1722,
    "range": [
      1721,
      1722
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1722,
    "end": 1723,
    "range": [
      1722,
      1723
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1723,
    "end": 1724,
    "range": [
      1723,
      1724
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1725,
    "end": 1726,
    "range": [
      1725,
      1726
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1735,
    "end": 1740,
    "range": [
      1735,
      1740
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1741,
    "end": 1742,
    "range": [
      1741,
      1742
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1743,
    "end": 1744,
    "range": [
      1743,
      1744
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1745,
    "end": 1754,
    "range": [
      1745,
      1754
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1754,
    "end": 1755,
    "range": [
      1754,
      1755
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1755,
    "end": 1761,
    "range": [
      1755,
      1761
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1761,
    "end": 1762,
    "range": [
      1761,
      1762
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1771,
    "end": 1772,
    "range": [
      1771,
      1772
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1772,
    "end": 1780,
    "range": [
      1772,
      1780
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1780,
    "end": 1781,
    "range": [
      1780,
      1781
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1781,
    "end": 1782,
    "range": [
      1781,
      1782
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1783,
    "end": 1784,
    "range": [
      1783,
      1784
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1785,
    "end": 1791,
    "range": [
      1785,
      1791
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1792,
    "end": 1793,
    "range": [
      1792,
      1793
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1794,
    "end": 1795,
    "range": [
      1794,
      1795
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1796,
    "end": 1797,
    "range": [
      1796,
      1797
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1798,
    "end": 1799,
    "range": [
      1798,
      1799
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1799,
    "end": 1800,
    "range": [
      1799,
      1800
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1800,
    "end": 1801,
    "range": [
      1800,
      1801
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1810,
    "end": 1811,
    "range": [
      1810,
      1811
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1811,
    "end": 1812,
    "range": [
      1811,
      1812
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1812,
    "end": 1813,
    "range": [
      1812,
      1813
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1814,
    "end": 1816,
    "range": [
      1814,
      1816
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1817,
    "end": 1818,
    "range": [
      1817,
      1818
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1819,
    "end": 1820,
    "range": [
      1819,
      1820
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1821,
    "end": 1822,
    "range": [
      1821,
      1822
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1822,
    "end": 1823,
    "range": [
      1822,
      1823
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1823,
    "end": 1824,
    "range": [
      1823,
      1824
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1829,
    "end": 1830,
    "range": [
      1829,
      1830
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1831,
    "end": 1832,
    "range": [
      1831,
      1832
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1834,
    "end": 1842,
    "range": [
      1834,
      1842
    ]
  },
  {
    "type": "Identifier",
    "value": "foo0_1_c",
    "start": 1843,
    "end": 1851,
    "range": [
      1843,
      1851
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1851,
    "end": 1852,
    "range": [
      1851,
      1852
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1852,
    "end": 1853,
    "range": [
      1852,
      1853
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1853,
    "end": 1854,
    "range": [
      1853,
      1854
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1855,
    "end": 1856,
    "range": [
      1855,
      1856
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1861,
    "end": 1864,
    "range": [
      1861,
      1864
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1865,
    "end": 1866,
    "range": [
      1865,
      1866
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1866,
    "end": 1871,
    "range": [
      1866,
      1871
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1872,
    "end": 1873,
    "range": [
      1872,
      1873
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1874,
    "end": 1876,
    "range": [
      1874,
      1876
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1877,
    "end": 1878,
    "range": [
      1877,
      1878
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1878,
    "end": 1879,
    "range": [
      1878,
      1879
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1879,
    "end": 1880,
    "range": [
      1879,
      1880
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1881,
    "end": 1882,
    "range": [
      1881,
      1882
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1891,
    "end": 1896,
    "range": [
      1891,
      1896
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1897,
    "end": 1898,
    "range": [
      1897,
      1898
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1899,
    "end": 1900,
    "range": [
      1899,
      1900
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1901,
    "end": 1910,
    "range": [
      1901,
      1910
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1910,
    "end": 1911,
    "range": [
      1910,
      1911
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1911,
    "end": 1917,
    "range": [
      1911,
      1917
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "start": 1927,
    "end": 1928,
    "range": [
      1927,
      1928
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1928,
    "end": 1936,
    "range": [
      1928,
      1936
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1936,
    "end": 1937,
    "range": [
      1936,
      1937
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1937,
    "end": 1938,
    "range": [
      1937,
      1938
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1939,
    "end": 1940,
    "range": [
      1939,
      1940
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1941,
    "end": 1947,
    "range": [
      1941,
      1947
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1948,
    "end": 1949,
    "range": [
      1948,
      1949
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1950,
    "end": 1951,
    "range": [
      1950,
      1951
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1952,
    "end": 1953,
    "range": [
      1952,
      1953
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1954,
    "end": 1955,
    "range": [
      1954,
      1955
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1955,
    "end": 1956,
    "range": [
      1955,
      1956
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1956,
    "end": 1957,
    "range": [
      1956,
      1957
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1966,
    "end": 1967,
    "range": [
      1966,
      1967
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1967,
    "end": 1968,
    "range": [
      1967,
      1968
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1968,
    "end": 1969,
    "range": [
      1968,
      1969
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1970,
    "end": 1972,
    "range": [
      1970,
      1972
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1973,
    "end": 1974,
    "range": [
      1973,
      1974
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1975,
    "end": 1976,
    "range": [
      1975,
      1976
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1977,
    "end": 1978,
    "range": [
      1977,
      1978
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1978,
    "end": 1979,
    "range": [
      1978,
      1979
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1979,
    "end": 1980,
    "range": [
      1979,
      1980
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1985,
    "end": 1986,
    "range": [
      1985,
      1986
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1987,
    "end": 1988,
    "range": [
      1987,
      1988
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1990,
    "end": 1998,
    "range": [
      1990,
      1998
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1_c",
    "start": 1999,
    "end": 2005,
    "range": [
      1999,
      2005
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2005,
    "end": 2006,
    "range": [
      2005,
      2006
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2006,
    "end": 2007,
    "range": [
      2006,
      2007
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2007,
    "end": 2008,
    "range": [
      2007,
      2008
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2009,
    "end": 2010,
    "range": [
      2009,
      2010
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2015,
    "end": 2018,
    "range": [
      2015,
      2018
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2019,
    "end": 2020,
    "range": [
      2019,
      2020
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2020,
    "end": 2025,
    "range": [
      2020,
      2025
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2026,
    "end": 2027,
    "range": [
      2026,
      2027
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2028,
    "end": 2029,
    "range": [
      2028,
      2029
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2030,
    "end": 2031,
    "range": [
      2030,
      2031
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2031,
    "end": 2032,
    "range": [
      2031,
      2032
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2033,
    "end": 2034,
    "range": [
      2033,
      2034
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2035,
    "end": 2036,
    "range": [
      2035,
      2036
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2037,
    "end": 2038,
    "range": [
      2037,
      2038
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2038,
    "end": 2039,
    "range": [
      2038,
      2039
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2039,
    "end": 2040,
    "range": [
      2039,
      2040
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2041,
    "end": 2042,
    "range": [
      2041,
      2042
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2051,
    "end": 2056,
    "range": [
      2051,
      2056
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2057,
    "end": 2058,
    "range": [
      2057,
      2058
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2059,
    "end": 2060,
    "range": [
      2059,
      2060
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 2061,
    "end": 2070,
    "range": [
      2061,
      2070
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2070,
    "end": 2071,
    "range": [
      2070,
      2071
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 2071,
    "end": 2077,
    "range": [
      2071,
      2077
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2077,
    "end": 2078,
    "range": [
      2077,
      2078
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2087,
    "end": 2088,
    "range": [
      2087,
      2088
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2088,
    "end": 2096,
    "range": [
      2088,
      2096
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2096,
    "end": 2097,
    "range": [
      2096,
      2097
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2097,
    "end": 2098,
    "range": [
      2097,
      2098
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2099,
    "end": 2100,
    "range": [
      2099,
      2100
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2101,
    "end": 2107,
    "range": [
      2101,
      2107
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2108,
    "end": 2109,
    "range": [
      2108,
      2109
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2110,
    "end": 2111,
    "range": [
      2110,
      2111
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2112,
    "end": 2113,
    "range": [
      2112,
      2113
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2114,
    "end": 2115,
    "range": [
      2114,
      2115
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2115,
    "end": 2116,
    "range": [
      2115,
      2116
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2116,
    "end": 2117,
    "range": [
      2116,
      2117
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2126,
    "end": 2127,
    "range": [
      2126,
      2127
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2127,
    "end": 2128,
    "range": [
      2127,
      2128
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2128,
    "end": 2129,
    "range": [
      2128,
      2129
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2130,
    "end": 2132,
    "range": [
      2130,
      2132
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2133,
    "end": 2134,
    "range": [
      2133,
      2134
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2135,
    "end": 2136,
    "range": [
      2135,
      2136
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2137,
    "end": 2138,
    "range": [
      2137,
      2138
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2138,
    "end": 2139,
    "range": [
      2138,
      2139
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2139,
    "end": 2140,
    "range": [
      2139,
      2140
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2145,
    "end": 2146,
    "range": [
      2145,
      2146
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2147,
    "end": 2148,
    "range": [
      2147,
      2148
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2150,
    "end": 2158,
    "range": [
      2150,
      2158
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2_c",
    "start": 2159,
    "end": 2165,
    "range": [
      2159,
      2165
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2165,
    "end": 2166,
    "range": [
      2165,
      2166
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2166,
    "end": 2167,
    "range": [
      2166,
      2167
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2167,
    "end": 2168,
    "range": [
      2167,
      2168
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2169,
    "end": 2170,
    "range": [
      2169,
      2170
    ]
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 2175,
    "end": 2180,
    "range": [
      2175,
      2180
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2181,
    "end": 2182,
    "range": [
      2181,
      2182
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2182,
    "end": 2183,
    "range": [
      2182,
      2183
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2184,
    "end": 2187,
    "range": [
      2184,
      2187
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2188,
    "end": 2189,
    "range": [
      2188,
      2189
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2189,
    "end": 2190,
    "range": [
      2189,
      2190
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2191,
    "end": 2192,
    "range": [
      2191,
      2192
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2201,
    "end": 2206,
    "range": [
      2201,
      2206
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2207,
    "end": 2208,
    "range": [
      2207,
      2208
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2209,
    "end": 2210,
    "range": [
      2209,
      2210
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 2211,
    "end": 2220,
    "range": [
      2211,
      2220
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2220,
    "end": 2221,
    "range": [
      2220,
      2221
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 2221,
    "end": 2227,
    "range": [
      2221,
      2227
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2227,
    "end": 2228,
    "range": [
      2227,
      2228
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2237,
    "end": 2238,
    "range": [
      2237,
      2238
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2238,
    "end": 2246,
    "range": [
      2238,
      2246
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2246,
    "end": 2247,
    "range": [
      2246,
      2247
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2247,
    "end": 2248,
    "range": [
      2247,
      2248
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2249,
    "end": 2250,
    "range": [
      2249,
      2250
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2251,
    "end": 2257,
    "range": [
      2251,
      2257
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2258,
    "end": 2259,
    "range": [
      2258,
      2259
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2260,
    "end": 2261,
    "range": [
      2260,
      2261
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2262,
    "end": 2263,
    "range": [
      2262,
      2263
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2264,
    "end": 2265,
    "range": [
      2264,
      2265
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2265,
    "end": 2266,
    "range": [
      2265,
      2266
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2266,
    "end": 2267,
    "range": [
      2266,
      2267
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2276,
    "end": 2277,
    "range": [
      2276,
      2277
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2277,
    "end": 2278,
    "range": [
      2277,
      2278
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2278,
    "end": 2279,
    "range": [
      2278,
      2279
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2280,
    "end": 2282,
    "range": [
      2280,
      2282
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2283,
    "end": 2284,
    "range": [
      2283,
      2284
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2285,
    "end": 2286,
    "range": [
      2285,
      2286
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2287,
    "end": 2288,
    "range": [
      2287,
      2288
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2288,
    "end": 2289,
    "range": [
      2288,
      2289
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2289,
    "end": 2290,
    "range": [
      2289,
      2290
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2295,
    "end": 2296,
    "range": [
      2295,
      2296
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2297,
    "end": 2298,
    "range": [
      2297,
      2298
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2300,
    "end": 2308,
    "range": [
      2300,
      2308
    ]
  },
  {
    "type": "Identifier",
    "value": "foo3_c",
    "start": 2309,
    "end": 2315,
    "range": [
      2309,
      2315
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2315,
    "end": 2316,
    "range": [
      2315,
      2316
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2316,
    "end": 2317,
    "range": [
      2316,
      2317
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2317,
    "end": 2318,
    "range": [
      2317,
      2318
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2319,
    "end": 2320,
    "range": [
      2319,
      2320
    ]
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 2325,
    "end": 2327,
    "range": [
      2325,
      2327
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2328,
    "end": 2329,
    "range": [
      2328,
      2329
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2338,
    "end": 2343,
    "range": [
      2338,
      2343
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2344,
    "end": 2345,
    "range": [
      2344,
      2345
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2346,
    "end": 2347,
    "range": [
      2346,
      2347
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2348,
    "end": 2349,
    "range": [
      2348,
      2349
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2349,
    "end": 2350,
    "range": [
      2349,
      2350
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2359,
    "end": 2364,
    "range": [
      2359,
      2364
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2365,
    "end": 2366,
    "range": [
      2365,
      2366
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2367,
    "end": 2368,
    "range": [
      2367,
      2368
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 2369,
    "end": 2378,
    "range": [
      2369,
      2378
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2378,
    "end": 2379,
    "range": [
      2378,
      2379
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 2379,
    "end": 2385,
    "range": [
      2379,
      2385
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2385,
    "end": 2386,
    "range": [
      2385,
      2386
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2395,
    "end": 2396,
    "range": [
      2395,
      2396
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2396,
    "end": 2404,
    "range": [
      2396,
      2404
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
    "value": ")",
    "start": 2405,
    "end": 2406,
    "range": [
      2405,
      2406
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2407,
    "end": 2408,
    "range": [
      2407,
      2408
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2409,
    "end": 2415,
    "range": [
      2409,
      2415
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2416,
    "end": 2417,
    "range": [
      2416,
      2417
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2418,
    "end": 2419,
    "range": [
      2418,
      2419
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2420,
    "end": 2421,
    "range": [
      2420,
      2421
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2422,
    "end": 2423,
    "range": [
      2422,
      2423
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2423,
    "end": 2424,
    "range": [
      2423,
      2424
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2424,
    "end": 2425,
    "range": [
      2424,
      2425
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2434,
    "end": 2435,
    "range": [
      2434,
      2435
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2435,
    "end": 2436,
    "range": [
      2435,
      2436
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2436,
    "end": 2437,
    "range": [
      2436,
      2437
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2438,
    "end": 2440,
    "range": [
      2438,
      2440
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2441,
    "end": 2442,
    "range": [
      2441,
      2442
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2443,
    "end": 2444,
    "range": [
      2443,
      2444
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2445,
    "end": 2446,
    "range": [
      2445,
      2446
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2446,
    "end": 2447,
    "range": [
      2446,
      2447
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2447,
    "end": 2448,
    "range": [
      2447,
      2448
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2453,
    "end": 2454,
    "range": [
      2453,
      2454
    ]
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 2455,
    "end": 2460,
    "range": [
      2455,
      2460
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2461,
    "end": 2462,
    "range": [
      2461,
      2462
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2462,
    "end": 2463,
    "range": [
      2462,
      2463
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2464,
    "end": 2467,
    "range": [
      2464,
      2467
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2468,
    "end": 2469,
    "range": [
      2468,
      2469
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2469,
    "end": 2470,
    "range": [
      2469,
      2470
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2471,
    "end": 2472,
    "range": [
      2471,
      2472
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2474,
    "end": 2482,
    "range": [
      2474,
      2482
    ]
  },
  {
    "type": "Identifier",
    "value": "foo4_c",
    "start": 2483,
    "end": 2489,
    "range": [
      2483,
      2489
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2489,
    "end": 2490,
    "range": [
      2489,
      2490
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2490,
    "end": 2491,
    "range": [
      2490,
      2491
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2491,
    "end": 2492,
    "range": [
      2491,
      2492
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2493,
    "end": 2494,
    "range": [
      2493,
      2494
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2499,
    "end": 2502,
    "range": [
      2499,
      2502
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2503,
    "end": 2504,
    "range": [
      2503,
      2504
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2504,
    "end": 2509,
    "range": [
      2504,
      2509
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2510,
    "end": 2511,
    "range": [
      2510,
      2511
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2512,
    "end": 2513,
    "range": [
      2512,
      2513
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2514,
    "end": 2515,
    "range": [
      2514,
      2515
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2515,
    "end": 2516,
    "range": [
      2515,
      2516
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2517,
    "end": 2518,
    "range": [
      2517,
      2518
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2519,
    "end": 2520,
    "range": [
      2519,
      2520
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2521,
    "end": 2522,
    "range": [
      2521,
      2522
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2522,
    "end": 2523,
    "range": [
      2522,
      2523
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2523,
    "end": 2524,
    "range": [
      2523,
      2524
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2525,
    "end": 2526,
    "range": [
      2525,
      2526
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2535,
    "end": 2540,
    "range": [
      2535,
      2540
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2541,
    "end": 2542,
    "range": [
      2541,
      2542
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2543,
    "end": 2544,
    "range": [
      2543,
      2544
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 2545,
    "end": 2554,
    "range": [
      2545,
      2554
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2554,
    "end": 2555,
    "range": [
      2554,
      2555
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 2555,
    "end": 2561,
    "range": [
      2555,
      2561
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2561,
    "end": 2562,
    "range": [
      2561,
      2562
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2571,
    "end": 2576,
    "range": [
      2571,
      2576
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2577,
    "end": 2578,
    "range": [
      2577,
      2578
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2579,
    "end": 2580,
    "range": [
      2579,
      2580
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2581,
    "end": 2582,
    "range": [
      2581,
      2582
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2582,
    "end": 2583,
    "range": [
      2582,
      2583
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2592,
    "end": 2593,
    "range": [
      2592,
      2593
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2593,
    "end": 2601,
    "range": [
      2593,
      2601
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2601,
    "end": 2602,
    "range": [
      2601,
      2602
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2602,
    "end": 2603,
    "range": [
      2602,
      2603
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2604,
    "end": 2605,
    "range": [
      2604,
      2605
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2606,
    "end": 2612,
    "range": [
      2606,
      2612
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2613,
    "end": 2614,
    "range": [
      2613,
      2614
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2615,
    "end": 2616,
    "range": [
      2615,
      2616
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2617,
    "end": 2618,
    "range": [
      2617,
      2618
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2619,
    "end": 2620,
    "range": [
      2619,
      2620
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2620,
    "end": 2621,
    "range": [
      2620,
      2621
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2621,
    "end": 2622,
    "range": [
      2621,
      2622
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2631,
    "end": 2632,
    "range": [
      2631,
      2632
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2632,
    "end": 2633,
    "range": [
      2632,
      2633
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2633,
    "end": 2634,
    "range": [
      2633,
      2634
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2635,
    "end": 2637,
    "range": [
      2635,
      2637
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2638,
    "end": 2639,
    "range": [
      2638,
      2639
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2640,
    "end": 2641,
    "range": [
      2640,
      2641
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2642,
    "end": 2643,
    "range": [
      2642,
      2643
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2643,
    "end": 2644,
    "range": [
      2643,
      2644
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2644,
    "end": 2645,
    "range": [
      2644,
      2645
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2650,
    "end": 2651,
    "range": [
      2650,
      2651
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2652,
    "end": 2653,
    "range": [
      2652,
      2653
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2655,
    "end": 2663,
    "range": [
      2655,
      2663
    ]
  },
  {
    "type": "Identifier",
    "value": "foo5_c",
    "start": 2664,
    "end": 2670,
    "range": [
      2664,
      2670
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2670,
    "end": 2671,
    "range": [
      2670,
      2671
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2671,
    "end": 2672,
    "range": [
      2671,
      2672
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2672,
    "end": 2673,
    "range": [
      2672,
      2673
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2674,
    "end": 2675,
    "range": [
      2674,
      2675
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2680,
    "end": 2683,
    "range": [
      2680,
      2683
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2684,
    "end": 2685,
    "range": [
      2684,
      2685
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2685,
    "end": 2690,
    "range": [
      2685,
      2690
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2691,
    "end": 2692,
    "range": [
      2691,
      2692
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2693,
    "end": 2694,
    "range": [
      2693,
      2694
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2695,
    "end": 2696,
    "range": [
      2695,
      2696
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2696,
    "end": 2697,
    "range": [
      2696,
      2697
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2698,
    "end": 2699,
    "range": [
      2698,
      2699
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2700,
    "end": 2701,
    "range": [
      2700,
      2701
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2702,
    "end": 2703,
    "range": [
      2702,
      2703
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2703,
    "end": 2704,
    "range": [
      2703,
      2704
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2705,
    "end": 2706,
    "range": [
      2705,
      2706
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2707,
    "end": 2708,
    "range": [
      2707,
      2708
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2709,
    "end": 2710,
    "range": [
      2709,
      2710
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2710,
    "end": 2711,
    "range": [
      2710,
      2711
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2711,
    "end": 2712,
    "range": [
      2711,
      2712
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2713,
    "end": 2714,
    "range": [
      2713,
      2714
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2723,
    "end": 2728,
    "range": [
      2723,
      2728
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2729,
    "end": 2730,
    "range": [
      2729,
      2730
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2731,
    "end": 2732,
    "range": [
      2731,
      2732
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 2733,
    "end": 2742,
    "range": [
      2733,
      2742
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2742,
    "end": 2743,
    "range": [
      2742,
      2743
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 2743,
    "end": 2749,
    "range": [
      2743,
      2749
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2749,
    "end": 2750,
    "range": [
      2749,
      2750
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2759,
    "end": 2760,
    "range": [
      2759,
      2760
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2760,
    "end": 2768,
    "range": [
      2760,
      2768
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2768,
    "end": 2769,
    "range": [
      2768,
      2769
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2769,
    "end": 2770,
    "range": [
      2769,
      2770
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2771,
    "end": 2772,
    "range": [
      2771,
      2772
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2773,
    "end": 2779,
    "range": [
      2773,
      2779
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2780,
    "end": 2781,
    "range": [
      2780,
      2781
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2782,
    "end": 2783,
    "range": [
      2782,
      2783
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2784,
    "end": 2785,
    "range": [
      2784,
      2785
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2786,
    "end": 2787,
    "range": [
      2786,
      2787
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2788,
    "end": 2789,
    "range": [
      2788,
      2789
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2790,
    "end": 2791,
    "range": [
      2790,
      2791
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2791,
    "end": 2792,
    "range": [
      2791,
      2792
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2792,
    "end": 2793,
    "range": [
      2792,
      2793
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2802,
    "end": 2803,
    "range": [
      2802,
      2803
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2803,
    "end": 2804,
    "range": [
      2803,
      2804
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2804,
    "end": 2805,
    "range": [
      2804,
      2805
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2806,
    "end": 2808,
    "range": [
      2806,
      2808
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2809,
    "end": 2810,
    "range": [
      2809,
      2810
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2811,
    "end": 2812,
    "range": [
      2811,
      2812
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2813,
    "end": 2814,
    "range": [
      2813,
      2814
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2815,
    "end": 2816,
    "range": [
      2815,
      2816
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2817,
    "end": 2818,
    "range": [
      2817,
      2818
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2818,
    "end": 2819,
    "range": [
      2818,
      2819
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2819,
    "end": 2820,
    "range": [
      2819,
      2820
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2825,
    "end": 2826,
    "range": [
      2825,
      2826
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2827,
    "end": 2828,
    "range": [
      2827,
      2828
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2831,
    "end": 2839,
    "range": [
      2831,
      2839
    ]
  },
  {
    "type": "Identifier",
    "value": "foo6_c",
    "start": 2840,
    "end": 2846,
    "range": [
      2840,
      2846
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2846,
    "end": 2847,
    "range": [
      2846,
      2847
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2847,
    "end": 2848,
    "range": [
      2847,
      2848
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2848,
    "end": 2849,
    "range": [
      2848,
      2849
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2850,
    "end": 2851,
    "range": [
      2850,
      2851
    ]
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 2856,
    "end": 2861,
    "range": [
      2856,
      2861
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2862,
    "end": 2863,
    "range": [
      2862,
      2863
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2863,
    "end": 2864,
    "range": [
      2863,
      2864
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2865,
    "end": 2868,
    "range": [
      2865,
      2868
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2869,
    "end": 2870,
    "range": [
      2869,
      2870
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2870,
    "end": 2871,
    "range": [
      2870,
      2871
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2872,
    "end": 2873,
    "range": [
      2872,
      2873
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2882,
    "end": 2887,
    "range": [
      2882,
      2887
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2888,
    "end": 2889,
    "range": [
      2888,
      2889
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2890,
    "end": 2891,
    "range": [
      2890,
      2891
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2892,
    "end": 2893,
    "range": [
      2892,
      2893
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2893,
    "end": 2894,
    "range": [
      2893,
      2894
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2895,
    "end": 2896,
    "range": [
      2895,
      2896
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2897,
    "end": 2898,
    "range": [
      2897,
      2898
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2898,
    "end": 2899,
    "range": [
      2898,
      2899
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2900,
    "end": 2901,
    "range": [
      2900,
      2901
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2910,
    "end": 2915,
    "range": [
      2910,
      2915
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2916,
    "end": 2917,
    "range": [
      2916,
      2917
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2918,
    "end": 2919,
    "range": [
      2918,
      2919
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 2920,
    "end": 2929,
    "range": [
      2920,
      2929
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2929,
    "end": 2930,
    "range": [
      2929,
      2930
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 2930,
    "end": 2936,
    "range": [
      2930,
      2936
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2936,
    "end": 2937,
    "range": [
      2936,
      2937
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2946,
    "end": 2947,
    "range": [
      2946,
      2947
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2947,
    "end": 2955,
    "range": [
      2947,
      2955
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2955,
    "end": 2956,
    "range": [
      2955,
      2956
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2956,
    "end": 2957,
    "range": [
      2956,
      2957
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2958,
    "end": 2959,
    "range": [
      2958,
      2959
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2960,
    "end": 2966,
    "range": [
      2960,
      2966
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2967,
    "end": 2968,
    "range": [
      2967,
      2968
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2969,
    "end": 2970,
    "range": [
      2969,
      2970
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2971,
    "end": 2972,
    "range": [
      2971,
      2972
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2973,
    "end": 2974,
    "range": [
      2973,
      2974
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2975,
    "end": 2976,
    "range": [
      2975,
      2976
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2977,
    "end": 2978,
    "range": [
      2977,
      2978
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2978,
    "end": 2979,
    "range": [
      2978,
      2979
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2979,
    "end": 2980,
    "range": [
      2979,
      2980
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2989,
    "end": 2990,
    "range": [
      2989,
      2990
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2990,
    "end": 2991,
    "range": [
      2990,
      2991
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2991,
    "end": 2992,
    "range": [
      2991,
      2992
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2993,
    "end": 2995,
    "range": [
      2993,
      2995
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2996,
    "end": 2997,
    "range": [
      2996,
      2997
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2998,
    "end": 2999,
    "range": [
      2998,
      2999
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3000,
    "end": 3001,
    "range": [
      3000,
      3001
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3002,
    "end": 3003,
    "range": [
      3002,
      3003
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3004,
    "end": 3005,
    "range": [
      3004,
      3005
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3005,
    "end": 3006,
    "range": [
      3005,
      3006
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3006,
    "end": 3007,
    "range": [
      3006,
      3007
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3012,
    "end": 3013,
    "range": [
      3012,
      3013
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3014,
    "end": 3015,
    "range": [
      3014,
      3015
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3017,
    "end": 3025,
    "range": [
      3017,
      3025
    ]
  },
  {
    "type": "Identifier",
    "value": "foo7_c",
    "start": 3026,
    "end": 3032,
    "range": [
      3026,
      3032
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3032,
    "end": 3033,
    "range": [
      3032,
      3033
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3033,
    "end": 3034,
    "range": [
      3033,
      3034
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3034,
    "end": 3035,
    "range": [
      3034,
      3035
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3036,
    "end": 3037,
    "range": [
      3036,
      3037
    ]
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 3042,
    "end": 3044,
    "range": [
      3042,
      3044
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3045,
    "end": 3046,
    "range": [
      3045,
      3046
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3055,
    "end": 3060,
    "range": [
      3055,
      3060
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3061,
    "end": 3062,
    "range": [
      3061,
      3062
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3063,
    "end": 3064,
    "range": [
      3063,
      3064
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3065,
    "end": 3066,
    "range": [
      3065,
      3066
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3066,
    "end": 3067,
    "range": [
      3066,
      3067
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3068,
    "end": 3069,
    "range": [
      3068,
      3069
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3070,
    "end": 3071,
    "range": [
      3070,
      3071
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3072,
    "end": 3073,
    "range": [
      3072,
      3073
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3073,
    "end": 3074,
    "range": [
      3073,
      3074
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3083,
    "end": 3088,
    "range": [
      3083,
      3088
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3089,
    "end": 3090,
    "range": [
      3089,
      3090
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3091,
    "end": 3092,
    "range": [
      3091,
      3092
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 3093,
    "end": 3102,
    "range": [
      3093,
      3102
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3102,
    "end": 3103,
    "range": [
      3102,
      3103
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 3103,
    "end": 3109,
    "range": [
      3103,
      3109
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3109,
    "end": 3110,
    "range": [
      3109,
      3110
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3119,
    "end": 3120,
    "range": [
      3119,
      3120
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3120,
    "end": 3128,
    "range": [
      3120,
      3128
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3128,
    "end": 3129,
    "range": [
      3128,
      3129
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3129,
    "end": 3130,
    "range": [
      3129,
      3130
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3131,
    "end": 3132,
    "range": [
      3131,
      3132
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3133,
    "end": 3139,
    "range": [
      3133,
      3139
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3140,
    "end": 3141,
    "range": [
      3140,
      3141
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3142,
    "end": 3143,
    "range": [
      3142,
      3143
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3144,
    "end": 3145,
    "range": [
      3144,
      3145
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3146,
    "end": 3147,
    "range": [
      3146,
      3147
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3148,
    "end": 3149,
    "range": [
      3148,
      3149
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3150,
    "end": 3151,
    "range": [
      3150,
      3151
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3151,
    "end": 3152,
    "range": [
      3151,
      3152
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3152,
    "end": 3153,
    "range": [
      3152,
      3153
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3162,
    "end": 3163,
    "range": [
      3162,
      3163
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3163,
    "end": 3164,
    "range": [
      3163,
      3164
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3164,
    "end": 3165,
    "range": [
      3164,
      3165
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3166,
    "end": 3168,
    "range": [
      3166,
      3168
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3169,
    "end": 3170,
    "range": [
      3169,
      3170
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3171,
    "end": 3172,
    "range": [
      3171,
      3172
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3173,
    "end": 3174,
    "range": [
      3173,
      3174
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3175,
    "end": 3176,
    "range": [
      3175,
      3176
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3177,
    "end": 3178,
    "range": [
      3177,
      3178
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3178,
    "end": 3179,
    "range": [
      3178,
      3179
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3179,
    "end": 3180,
    "range": [
      3179,
      3180
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3185,
    "end": 3186,
    "range": [
      3185,
      3186
    ]
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 3187,
    "end": 3192,
    "range": [
      3187,
      3192
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3193,
    "end": 3194,
    "range": [
      3193,
      3194
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3194,
    "end": 3195,
    "range": [
      3194,
      3195
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3196,
    "end": 3199,
    "range": [
      3196,
      3199
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3200,
    "end": 3201,
    "range": [
      3200,
      3201
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3201,
    "end": 3202,
    "range": [
      3201,
      3202
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3203,
    "end": 3204,
    "range": [
      3203,
      3204
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3207,
    "end": 3215,
    "range": [
      3207,
      3215
    ]
  },
  {
    "type": "Identifier",
    "value": "foo8_c",
    "start": 3216,
    "end": 3222,
    "range": [
      3216,
      3222
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3222,
    "end": 3223,
    "range": [
      3222,
      3223
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3223,
    "end": 3224,
    "range": [
      3223,
      3224
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3224,
    "end": 3225,
    "range": [
      3224,
      3225
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3226,
    "end": 3227,
    "range": [
      3226,
      3227
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 3232,
    "end": 3235,
    "range": [
      3232,
      3235
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3236,
    "end": 3237,
    "range": [
      3236,
      3237
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3237,
    "end": 3242,
    "range": [
      3237,
      3242
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3243,
    "end": 3244,
    "range": [
      3243,
      3244
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3245,
    "end": 3246,
    "range": [
      3245,
      3246
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3247,
    "end": 3248,
    "range": [
      3247,
      3248
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3248,
    "end": 3249,
    "range": [
      3248,
      3249
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3250,
    "end": 3251,
    "range": [
      3250,
      3251
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3252,
    "end": 3253,
    "range": [
      3252,
      3253
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3254,
    "end": 3255,
    "range": [
      3254,
      3255
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3255,
    "end": 3256,
    "range": [
      3255,
      3256
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3256,
    "end": 3257,
    "range": [
      3256,
      3257
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3258,
    "end": 3259,
    "range": [
      3258,
      3259
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3268,
    "end": 3273,
    "range": [
      3268,
      3273
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3274,
    "end": 3275,
    "range": [
      3274,
      3275
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3276,
    "end": 3277,
    "range": [
      3276,
      3277
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3278,
    "end": 3279,
    "range": [
      3278,
      3279
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3279,
    "end": 3280,
    "range": [
      3279,
      3280
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3289,
    "end": 3294,
    "range": [
      3289,
      3294
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3295,
    "end": 3296,
    "range": [
      3295,
      3296
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3297,
    "end": 3298,
    "range": [
      3297,
      3298
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 3299,
    "end": 3308,
    "range": [
      3299,
      3308
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3308,
    "end": 3309,
    "range": [
      3308,
      3309
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 3309,
    "end": 3315,
    "range": [
      3309,
      3315
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3315,
    "end": 3316,
    "range": [
      3315,
      3316
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3325,
    "end": 3326,
    "range": [
      3325,
      3326
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3326,
    "end": 3334,
    "range": [
      3326,
      3334
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3334,
    "end": 3335,
    "range": [
      3334,
      3335
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3335,
    "end": 3336,
    "range": [
      3335,
      3336
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3337,
    "end": 3338,
    "range": [
      3337,
      3338
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3339,
    "end": 3345,
    "range": [
      3339,
      3345
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3346,
    "end": 3347,
    "range": [
      3346,
      3347
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3348,
    "end": 3349,
    "range": [
      3348,
      3349
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3350,
    "end": 3351,
    "range": [
      3350,
      3351
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3352,
    "end": 3353,
    "range": [
      3352,
      3353
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3354,
    "end": 3355,
    "range": [
      3354,
      3355
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3356,
    "end": 3357,
    "range": [
      3356,
      3357
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3357,
    "end": 3358,
    "range": [
      3357,
      3358
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3358,
    "end": 3359,
    "range": [
      3358,
      3359
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3368,
    "end": 3369,
    "range": [
      3368,
      3369
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3369,
    "end": 3370,
    "range": [
      3369,
      3370
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3370,
    "end": 3371,
    "range": [
      3370,
      3371
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3372,
    "end": 3374,
    "range": [
      3372,
      3374
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3375,
    "end": 3376,
    "range": [
      3375,
      3376
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3377,
    "end": 3378,
    "range": [
      3377,
      3378
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3379,
    "end": 3380,
    "range": [
      3379,
      3380
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3381,
    "end": 3382,
    "range": [
      3381,
      3382
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3383,
    "end": 3384,
    "range": [
      3383,
      3384
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3384,
    "end": 3385,
    "range": [
      3384,
      3385
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3385,
    "end": 3386,
    "range": [
      3385,
      3386
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3391,
    "end": 3392,
    "range": [
      3391,
      3392
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3393,
    "end": 3394,
    "range": [
      3393,
      3394
    ]
  }
]
```
