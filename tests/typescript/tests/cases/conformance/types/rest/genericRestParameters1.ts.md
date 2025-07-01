__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "f1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 20,
                      "end": 21
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 24,
                            "end": 30
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 32,
                            "end": 38
                          },
                          {
                            "type": "TSBooleanKeyword",
                            "start": 40,
                            "end": 47
                          }
                        ],
                        "start": 23,
                        "end": 48
                      },
                      "start": 21,
                      "end": 48
                    },
                    "value": null,
                    "start": 17,
                    "end": 48
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 53,
                    "end": 57
                  },
                  "start": 50,
                  "end": 57
                },
                "start": 16,
                "end": 57
              },
              "start": 14,
              "end": 57
            },
            "start": 12,
            "end": 57
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 57
        }
      ],
      "declare": true,
      "start": 0,
      "end": 58
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
            "name": "f2",
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
                    "name": "x0",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 80,
                        "end": 86
                      },
                      "start": 78,
                      "end": 86
                    },
                    "start": 76,
                    "end": 86
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x1",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 92,
                        "end": 98
                      },
                      "start": 90,
                      "end": 98
                    },
                    "start": 88,
                    "end": 98
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x2",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 104,
                        "end": 111
                      },
                      "start": 102,
                      "end": 111
                    },
                    "start": 100,
                    "end": 111
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 116,
                    "end": 120
                  },
                  "start": 113,
                  "end": 120
                },
                "start": 75,
                "end": 120
              },
              "start": 73,
              "end": 120
            },
            "start": 71,
            "end": 120
          },
          "init": null,
          "definite": false,
          "start": 71,
          "end": 120
        }
      ],
      "declare": true,
      "start": 59,
      "end": 121
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 123,
          "end": 125
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 128,
          "end": 130
        },
        "start": 123,
        "end": 130
      },
      "directive": null,
      "start": 123,
      "end": 131
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 132,
          "end": 134
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 137,
          "end": 139
        },
        "start": 132,
        "end": 139
      },
      "directive": null,
      "start": 132,
      "end": 140
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
            "name": "t3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 161,
                    "end": 167
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 169,
                    "end": 175
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 177,
                    "end": 184
                  }
                ],
                "start": 160,
                "end": 185
              },
              "start": 158,
              "end": 185
            },
            "start": 156,
            "end": 185
          },
          "init": null,
          "definite": false,
          "start": 156,
          "end": 185
        }
      ],
      "declare": true,
      "start": 142,
      "end": 186
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
            "name": "t2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 206,
                    "end": 212
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 214,
                    "end": 221
                  }
                ],
                "start": 205,
                "end": 222
              },
              "start": 203,
              "end": 222
            },
            "start": 201,
            "end": 222
          },
          "init": null,
          "definite": false,
          "start": 201,
          "end": 222
        }
      ],
      "declare": true,
      "start": 187,
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
            "name": "t1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSBooleanKeyword",
                    "start": 243,
                    "end": 250
                  }
                ],
                "start": 242,
                "end": 251
              },
              "start": 240,
              "end": 251
            },
            "start": 238,
            "end": 251
          },
          "init": null,
          "definite": false,
          "start": 238,
          "end": 251
        }
      ],
      "declare": true,
      "start": 224,
      "end": 252
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
            "name": "t0",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [],
                "start": 271,
                "end": 273
              },
              "start": 269,
              "end": 273
            },
            "start": 267,
            "end": 273
          },
          "init": null,
          "definite": false,
          "start": 267,
          "end": 273
        }
      ],
      "declare": true,
      "start": 253,
      "end": 274
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
            "name": "ns",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 295,
                    "end": 301
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 303,
                    "end": 309
                  }
                ],
                "start": 294,
                "end": 310
              },
              "start": 292,
              "end": 310
            },
            "start": 290,
            "end": 310
          },
          "init": null,
          "definite": false,
          "start": 290,
          "end": 310
        }
      ],
      "declare": true,
      "start": 276,
      "end": 311
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
            "name": "sn",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 331,
                    "end": 337
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 339,
                    "end": 345
                  }
                ],
                "start": 330,
                "end": 346
              },
              "start": 328,
              "end": 346
            },
            "start": 326,
            "end": 346
          },
          "init": null,
          "definite": false,
          "start": 326,
          "end": 346
        }
      ],
      "declare": true,
      "start": 312,
      "end": 347
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 349,
          "end": 351
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 352,
            "end": 354
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 356,
            "end": 363
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 365,
            "end": 369
          }
        ],
        "optional": false,
        "start": 349,
        "end": 370
      },
      "directive": null,
      "start": 349,
      "end": 371
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 372,
          "end": 374
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null,
              "start": 375,
              "end": 377
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 378,
              "end": 379
            },
            "optional": false,
            "computed": true,
            "start": 375,
            "end": 380
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null,
              "start": 382,
              "end": 384
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 385,
              "end": 386
            },
            "optional": false,
            "computed": true,
            "start": 382,
            "end": 387
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null,
              "start": 389,
              "end": 391
            },
            "property": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 392,
              "end": 393
            },
            "optional": false,
            "computed": true,
            "start": 389,
            "end": 394
          }
        ],
        "optional": false,
        "start": 372,
        "end": 395
      },
      "directive": null,
      "start": 372,
      "end": 396
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 397,
          "end": 399
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null,
              "start": 403,
              "end": 405
            },
            "start": 400,
            "end": 405
          }
        ],
        "optional": false,
        "start": 397,
        "end": 406
      },
      "directive": null,
      "start": 397,
      "end": 407
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 408,
          "end": 410
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 411,
            "end": 413
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 418,
              "end": 420
            },
            "start": 415,
            "end": 420
          }
        ],
        "optional": false,
        "start": 408,
        "end": 421
      },
      "directive": null,
      "start": 408,
      "end": 422
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 423,
          "end": 425
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 426,
            "end": 428
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 430,
            "end": 437
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 442,
              "end": 444
            },
            "start": 439,
            "end": 444
          }
        ],
        "optional": false,
        "start": 423,
        "end": 445
      },
      "directive": null,
      "start": 423,
      "end": 446
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 447,
          "end": 449
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 450,
            "end": 452
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 454,
            "end": 461
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 463,
            "end": 467
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t0",
              "optional": false,
              "typeAnnotation": null,
              "start": 472,
              "end": 474
            },
            "start": 469,
            "end": 474
          }
        ],
        "optional": false,
        "start": 447,
        "end": 475
      },
      "directive": null,
      "start": 447,
      "end": 476
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 477,
          "end": 479
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ns",
              "optional": false,
              "typeAnnotation": null,
              "start": 480,
              "end": 482
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 483,
              "end": 484
            },
            "optional": false,
            "computed": true,
            "start": 480,
            "end": 485
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ns",
              "optional": false,
              "typeAnnotation": null,
              "start": 487,
              "end": 489
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 490,
              "end": 491
            },
            "optional": false,
            "computed": true,
            "start": 487,
            "end": 492
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 494,
            "end": 498
          }
        ],
        "optional": false,
        "start": 477,
        "end": 499
      },
      "directive": null,
      "start": 477,
      "end": 500
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 501,
          "end": 503
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ns",
              "optional": false,
              "typeAnnotation": null,
              "start": 507,
              "end": 509
            },
            "start": 504,
            "end": 509
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 511,
            "end": 515
          }
        ],
        "optional": false,
        "start": 501,
        "end": 516
      },
      "directive": null,
      "start": 501,
      "end": 517
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 585,
          "end": 587
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 588,
            "end": 590
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 592,
            "end": 599
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 601,
            "end": 605
          }
        ],
        "optional": false,
        "start": 585,
        "end": 606
      },
      "directive": null,
      "start": 585,
      "end": 607
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 608,
          "end": 610
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null,
              "start": 611,
              "end": 613
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 614,
              "end": 615
            },
            "optional": false,
            "computed": true,
            "start": 611,
            "end": 616
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null,
              "start": 618,
              "end": 620
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 621,
              "end": 622
            },
            "optional": false,
            "computed": true,
            "start": 618,
            "end": 623
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null,
              "start": 625,
              "end": 627
            },
            "property": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 628,
              "end": 629
            },
            "optional": false,
            "computed": true,
            "start": 625,
            "end": 630
          }
        ],
        "optional": false,
        "start": 608,
        "end": 631
      },
      "directive": null,
      "start": 608,
      "end": 632
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 633,
          "end": 635
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null,
              "start": 639,
              "end": 641
            },
            "start": 636,
            "end": 641
          }
        ],
        "optional": false,
        "start": 633,
        "end": 642
      },
      "directive": null,
      "start": 633,
      "end": 643
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 644,
          "end": 646
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 647,
            "end": 649
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 654,
              "end": 656
            },
            "start": 651,
            "end": 656
          }
        ],
        "optional": false,
        "start": 644,
        "end": 657
      },
      "directive": null,
      "start": 644,
      "end": 658
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 659,
          "end": 661
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 662,
            "end": 664
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 666,
            "end": 673
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 678,
              "end": 680
            },
            "start": 675,
            "end": 680
          }
        ],
        "optional": false,
        "start": 659,
        "end": 681
      },
      "directive": null,
      "start": 659,
      "end": 682
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 683,
          "end": 685
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 686,
            "end": 688
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 690,
            "end": 697
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 699,
            "end": 703
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t0",
              "optional": false,
              "typeAnnotation": null,
              "start": 708,
              "end": 710
            },
            "start": 705,
            "end": 710
          }
        ],
        "optional": false,
        "start": 683,
        "end": 711
      },
      "directive": null,
      "start": 683,
      "end": 712
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 713,
          "end": 715
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ns",
              "optional": false,
              "typeAnnotation": null,
              "start": 716,
              "end": 718
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 719,
              "end": 720
            },
            "optional": false,
            "computed": true,
            "start": 716,
            "end": 721
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ns",
              "optional": false,
              "typeAnnotation": null,
              "start": 723,
              "end": 725
            },
            "property": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 726,
              "end": 727
            },
            "optional": false,
            "computed": true,
            "start": 723,
            "end": 728
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 730,
            "end": 734
          }
        ],
        "optional": false,
        "start": 713,
        "end": 735
      },
      "directive": null,
      "start": 713,
      "end": 736
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 737,
          "end": 739
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ns",
              "optional": false,
              "typeAnnotation": null,
              "start": 743,
              "end": 745
            },
            "start": 740,
            "end": 745
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 747,
            "end": 751
          }
        ],
        "optional": false,
        "start": 737,
        "end": 752
      },
      "directive": null,
      "start": 737,
      "end": 753
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null,
        "start": 838,
        "end": 841
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 842,
              "end": 843
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 852,
                "end": 859
              },
              "start": 852,
              "end": 861
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 842,
            "end": 861
          }
        ],
        "start": 841,
        "end": 862
      },
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 866,
            "end": 870
          },
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
                "start": 872,
                "end": 873
              },
              "typeArguments": null,
              "start": 872,
              "end": 873
            },
            "start": 870,
            "end": 873
          },
          "value": null,
          "start": 863,
          "end": 873
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
            "start": 876,
            "end": 877
          },
          "typeArguments": null,
          "start": 876,
          "end": 877
        },
        "start": 874,
        "end": 877
      },
      "body": null,
      "expression": false,
      "start": 821,
      "end": 878
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
            "name": "x10",
            "optional": false,
            "typeAnnotation": null,
            "start": 886,
            "end": 889
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f10",
              "optional": false,
              "typeAnnotation": null,
              "start": 892,
              "end": 895
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 896,
                "end": 898
              },
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 900,
                "end": 907
              },
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 909,
                "end": 913
              }
            ],
            "optional": false,
            "start": 892,
            "end": 914
          },
          "definite": false,
          "start": 886,
          "end": 914
        }
      ],
      "declare": false,
      "start": 880,
      "end": 915
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
            "name": "x11",
            "optional": false,
            "typeAnnotation": null,
            "start": 952,
            "end": 955
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f10",
              "optional": false,
              "typeAnnotation": null,
              "start": 958,
              "end": 961
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 962,
                "end": 964
              },
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 966,
                "end": 973
              }
            ],
            "optional": false,
            "start": 958,
            "end": 974
          },
          "definite": false,
          "start": 952,
          "end": 974
        }
      ],
      "declare": false,
      "start": 946,
      "end": 975
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
            "name": "x12",
            "optional": false,
            "typeAnnotation": null,
            "start": 1003,
            "end": 1006
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f10",
              "optional": false,
              "typeAnnotation": null,
              "start": 1009,
              "end": 1012
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 1013,
                "end": 1015
              }
            ],
            "optional": false,
            "start": 1009,
            "end": 1016
          },
          "definite": false,
          "start": 1003,
          "end": 1016
        }
      ],
      "declare": false,
      "start": 997,
      "end": 1017
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
            "name": "x13",
            "optional": false,
            "typeAnnotation": null,
            "start": 1037,
            "end": 1040
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f10",
              "optional": false,
              "typeAnnotation": null,
              "start": 1043,
              "end": 1046
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1043,
            "end": 1048
          },
          "definite": false,
          "start": 1037,
          "end": 1048
        }
      ],
      "declare": false,
      "start": 1031,
      "end": 1049
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
            "name": "x14",
            "optional": false,
            "typeAnnotation": null,
            "start": 1063,
            "end": 1066
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f10",
              "optional": false,
              "typeAnnotation": null,
              "start": 1069,
              "end": 1072
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1076,
                  "end": 1078
                },
                "start": 1073,
                "end": 1078
              }
            ],
            "optional": false,
            "start": 1069,
            "end": 1079
          },
          "definite": false,
          "start": 1063,
          "end": 1079
        }
      ],
      "declare": false,
      "start": 1057,
      "end": 1080
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
            "name": "x15",
            "optional": false,
            "typeAnnotation": null,
            "start": 1117,
            "end": 1120
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f10",
              "optional": false,
              "typeAnnotation": null,
              "start": 1123,
              "end": 1126
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 1127,
                "end": 1129
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1134,
                  "end": 1136
                },
                "start": 1131,
                "end": 1136
              }
            ],
            "optional": false,
            "start": 1123,
            "end": 1137
          },
          "definite": false,
          "start": 1117,
          "end": 1137
        }
      ],
      "declare": false,
      "start": 1111,
      "end": 1138
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
            "name": "x16",
            "optional": false,
            "typeAnnotation": null,
            "start": 1175,
            "end": 1178
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f10",
              "optional": false,
              "typeAnnotation": null,
              "start": 1181,
              "end": 1184
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 1185,
                "end": 1187
              },
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 1189,
                "end": 1196
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1201,
                  "end": 1203
                },
                "start": 1198,
                "end": 1203
              }
            ],
            "optional": false,
            "start": 1181,
            "end": 1204
          },
          "definite": false,
          "start": 1175,
          "end": 1204
        }
      ],
      "declare": false,
      "start": 1169,
      "end": 1205
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
            "name": "x17",
            "optional": false,
            "typeAnnotation": null,
            "start": 1242,
            "end": 1245
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f10",
              "optional": false,
              "typeAnnotation": null,
              "start": 1248,
              "end": 1251
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 1252,
                "end": 1254
              },
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 1256,
                "end": 1263
              },
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 1265,
                "end": 1269
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t0",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1274,
                  "end": 1276
                },
                "start": 1271,
                "end": 1276
              }
            ],
            "optional": false,
            "start": 1248,
            "end": 1277
          },
          "definite": false,
          "start": 1242,
          "end": 1277
        }
      ],
      "declare": false,
      "start": 1236,
      "end": 1278
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
            "name": "x18",
            "optional": false,
            "typeAnnotation": null,
            "start": 1315,
            "end": 1318
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f10",
              "optional": false,
              "typeAnnotation": null,
              "start": 1321,
              "end": 1324
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ns",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1328,
                  "end": 1330
                },
                "start": 1325,
                "end": 1330
              },
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 1332,
                "end": 1336
              }
            ],
            "optional": false,
            "start": 1321,
            "end": 1337
          },
          "definite": false,
          "start": 1315,
          "end": 1337
        }
      ],
      "declare": false,
      "start": 1309,
      "end": 1338
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1383,
        "end": 1386
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
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1387,
              "end": 1388
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 1397,
                "end": 1403
              },
              "start": 1397,
              "end": 1405
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1387,
            "end": 1405
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 1407,
              "end": 1408
            },
            "constraint": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1418,
                  "end": 1424
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 1426,
                  "end": 1432
                }
              ],
              "start": 1417,
              "end": 1433
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1407,
            "end": 1433
          }
        ],
        "start": 1386,
        "end": 1434
      },
      "params": [
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
                "start": 1438,
                "end": 1439
              },
              "typeArguments": null,
              "start": 1438,
              "end": 1439
            },
            "start": 1436,
            "end": 1439
          },
          "start": 1435,
          "end": 1439
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 1444,
                "end": 1445
              },
              "typeArguments": null,
              "start": 1444,
              "end": 1445
            },
            "start": 1442,
            "end": 1445
          },
          "start": 1441,
          "end": 1445
        }
      ],
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
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1457,
                  "end": 1459
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f10",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1462,
                    "end": 1465
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1469,
                        "end": 1470
                      },
                      "start": 1466,
                      "end": 1470
                    }
                  ],
                  "optional": false,
                  "start": 1462,
                  "end": 1471
                },
                "definite": false,
                "start": 1457,
                "end": 1471
              }
            ],
            "declare": false,
            "start": 1453,
            "end": 1472
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
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1487,
                  "end": 1489
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f10",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1492,
                    "end": 1495
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1499,
                        "end": 1500
                      },
                      "start": 1496,
                      "end": 1500
                    }
                  ],
                  "optional": false,
                  "start": 1492,
                  "end": 1501
                },
                "definite": false,
                "start": 1487,
                "end": 1501
              }
            ],
            "declare": false,
            "start": 1483,
            "end": 1502
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
                  "name": "x3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1517,
                  "end": 1519
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f10",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1522,
                    "end": 1525
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1526,
                      "end": 1527
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1532,
                        "end": 1533
                      },
                      "start": 1529,
                      "end": 1533
                    }
                  ],
                  "optional": false,
                  "start": 1522,
                  "end": 1534
                },
                "definite": false,
                "start": 1517,
                "end": 1534
              }
            ],
            "declare": false,
            "start": 1513,
            "end": 1535
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
                  "name": "x4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1570,
                  "end": 1572
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f10",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1575,
                    "end": 1578
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1582,
                        "end": 1583
                      },
                      "start": 1579,
                      "end": 1583
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1588,
                        "end": 1589
                      },
                      "start": 1585,
                      "end": 1589
                    }
                  ],
                  "optional": false,
                  "start": 1575,
                  "end": 1590
                },
                "definite": false,
                "start": 1570,
                "end": 1590
              }
            ],
            "declare": false,
            "start": 1566,
            "end": 1591
          }
        ],
        "start": 1447,
        "end": 1617
      },
      "expression": false,
      "start": 1374,
      "end": 1617
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1636,
        "end": 1639
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 1640,
              "end": 1641
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1651,
                    "end": 1657
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1660,
                    "end": 1666
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 1669,
                    "end": 1676
                  }
                ],
                "start": 1651,
                "end": 1676
              },
              "start": 1650,
              "end": 1679
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1640,
            "end": 1679
          }
        ],
        "start": 1639,
        "end": 1680
      },
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 1684,
            "end": 1688
          },
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
                "start": 1690,
                "end": 1691
              },
              "typeArguments": null,
              "start": 1690,
              "end": 1691
            },
            "start": 1688,
            "end": 1691
          },
          "value": null,
          "start": 1681,
          "end": 1691
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
            "start": 1694,
            "end": 1695
          },
          "typeArguments": null,
          "start": 1694,
          "end": 1695
        },
        "start": 1692,
        "end": 1695
      },
      "body": null,
      "expression": false,
      "start": 1619,
      "end": 1696
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
            "name": "z10",
            "optional": false,
            "typeAnnotation": null,
            "start": 1704,
            "end": 1707
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f11",
              "optional": false,
              "typeAnnotation": null,
              "start": 1710,
              "end": 1713
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 1714,
                "end": 1716
              },
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 1718,
                "end": 1725
              },
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 1727,
                "end": 1731
              }
            ],
            "optional": false,
            "start": 1710,
            "end": 1732
          },
          "definite": false,
          "start": 1704,
          "end": 1732
        }
      ],
      "declare": false,
      "start": 1698,
      "end": 1733
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
            "name": "z11",
            "optional": false,
            "typeAnnotation": null,
            "start": 1764,
            "end": 1767
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f11",
              "optional": false,
              "typeAnnotation": null,
              "start": 1770,
              "end": 1773
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 1774,
                "end": 1776
              },
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 1778,
                "end": 1785
              }
            ],
            "optional": false,
            "start": 1770,
            "end": 1786
          },
          "definite": false,
          "start": 1764,
          "end": 1786
        }
      ],
      "declare": false,
      "start": 1758,
      "end": 1787
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
            "name": "z12",
            "optional": false,
            "typeAnnotation": null,
            "start": 1812,
            "end": 1815
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f11",
              "optional": false,
              "typeAnnotation": null,
              "start": 1818,
              "end": 1821
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 1822,
                "end": 1824
              }
            ],
            "optional": false,
            "start": 1818,
            "end": 1825
          },
          "definite": false,
          "start": 1812,
          "end": 1825
        }
      ],
      "declare": false,
      "start": 1806,
      "end": 1826
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
            "name": "z13",
            "optional": false,
            "typeAnnotation": null,
            "start": 1842,
            "end": 1845
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f11",
              "optional": false,
              "typeAnnotation": null,
              "start": 1848,
              "end": 1851
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1848,
            "end": 1853
          },
          "definite": false,
          "start": 1842,
          "end": 1853
        }
      ],
      "declare": false,
      "start": 1836,
      "end": 1854
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
            "name": "z14",
            "optional": false,
            "typeAnnotation": null,
            "start": 1868,
            "end": 1871
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f11",
              "optional": false,
              "typeAnnotation": null,
              "start": 1874,
              "end": 1877
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1881,
                  "end": 1883
                },
                "start": 1878,
                "end": 1883
              }
            ],
            "optional": false,
            "start": 1874,
            "end": 1884
          },
          "definite": false,
          "start": 1868,
          "end": 1884
        }
      ],
      "declare": false,
      "start": 1862,
      "end": 1885
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
            "name": "z15",
            "optional": false,
            "typeAnnotation": null,
            "start": 1922,
            "end": 1925
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f11",
              "optional": false,
              "typeAnnotation": null,
              "start": 1928,
              "end": 1931
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 1932,
                "end": 1934
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1939,
                  "end": 1941
                },
                "start": 1936,
                "end": 1941
              }
            ],
            "optional": false,
            "start": 1928,
            "end": 1942
          },
          "definite": false,
          "start": 1922,
          "end": 1942
        }
      ],
      "declare": false,
      "start": 1916,
      "end": 1943
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
            "name": "z16",
            "optional": false,
            "typeAnnotation": null,
            "start": 1976,
            "end": 1979
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f11",
              "optional": false,
              "typeAnnotation": null,
              "start": 1982,
              "end": 1985
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 1986,
                "end": 1988
              },
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 1990,
                "end": 1997
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2002,
                  "end": 2004
                },
                "start": 1999,
                "end": 2004
              }
            ],
            "optional": false,
            "start": 1982,
            "end": 2005
          },
          "definite": false,
          "start": 1976,
          "end": 2005
        }
      ],
      "declare": false,
      "start": 1970,
      "end": 2006
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
            "name": "z17",
            "optional": false,
            "typeAnnotation": null,
            "start": 2040,
            "end": 2043
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f11",
              "optional": false,
              "typeAnnotation": null,
              "start": 2046,
              "end": 2049
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 2050,
                "end": 2052
              },
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 2054,
                "end": 2061
              },
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 2063,
                "end": 2067
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t0",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2072,
                  "end": 2074
                },
                "start": 2069,
                "end": 2074
              }
            ],
            "optional": false,
            "start": 2046,
            "end": 2075
          },
          "definite": false,
          "start": 2040,
          "end": 2075
        }
      ],
      "declare": false,
      "start": 2034,
      "end": 2076
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
            "name": "z18",
            "optional": false,
            "typeAnnotation": null,
            "start": 2107,
            "end": 2110
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f11",
              "optional": false,
              "typeAnnotation": null,
              "start": 2113,
              "end": 2116
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ns",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2120,
                  "end": 2122
                },
                "start": 2117,
                "end": 2122
              },
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 2124,
                "end": 2128
              }
            ],
            "optional": false,
            "start": 2113,
            "end": 2129
          },
          "definite": false,
          "start": 2107,
          "end": 2129
        }
      ],
      "declare": false,
      "start": 2101,
      "end": 2130
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g11",
        "optional": false,
        "typeAnnotation": null,
        "start": 2172,
        "end": 2175
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
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 2176,
              "end": 2177
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 2186,
                "end": 2192
              },
              "start": 2186,
              "end": 2194
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2176,
            "end": 2194
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 2196,
              "end": 2197
            },
            "constraint": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 2207,
                  "end": 2213
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 2215,
                  "end": 2221
                }
              ],
              "start": 2206,
              "end": 2222
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2196,
            "end": 2222
          }
        ],
        "start": 2175,
        "end": 2223
      },
      "params": [
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
                "start": 2227,
                "end": 2228
              },
              "typeArguments": null,
              "start": 2227,
              "end": 2228
            },
            "start": 2225,
            "end": 2228
          },
          "start": 2224,
          "end": 2228
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 2233,
                "end": 2234
              },
              "typeArguments": null,
              "start": 2233,
              "end": 2234
            },
            "start": 2231,
            "end": 2234
          },
          "start": 2230,
          "end": 2234
        }
      ],
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
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2246,
                  "end": 2248
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f11",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2251,
                    "end": 2254
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2258,
                        "end": 2259
                      },
                      "start": 2255,
                      "end": 2259
                    }
                  ],
                  "optional": false,
                  "start": 2251,
                  "end": 2260
                },
                "definite": false,
                "start": 2246,
                "end": 2260
              }
            ],
            "declare": false,
            "start": 2242,
            "end": 2261
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
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2276,
                  "end": 2278
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f11",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2281,
                    "end": 2284
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2288,
                        "end": 2289
                      },
                      "start": 2285,
                      "end": 2289
                    }
                  ],
                  "optional": false,
                  "start": 2281,
                  "end": 2290
                },
                "definite": false,
                "start": 2276,
                "end": 2290
              }
            ],
            "declare": false,
            "start": 2272,
            "end": 2291
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
                  "name": "x3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2306,
                  "end": 2308
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f11",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2311,
                    "end": 2314
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2315,
                      "end": 2316
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2321,
                        "end": 2322
                      },
                      "start": 2318,
                      "end": 2322
                    }
                  ],
                  "optional": false,
                  "start": 2311,
                  "end": 2323
                },
                "definite": false,
                "start": 2306,
                "end": 2323
              }
            ],
            "declare": false,
            "start": 2302,
            "end": 2324
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
                  "name": "x4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2354,
                  "end": 2356
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f11",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2359,
                    "end": 2362
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2366,
                        "end": 2367
                      },
                      "start": 2363,
                      "end": 2367
                    },
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2372,
                        "end": 2373
                      },
                      "start": 2369,
                      "end": 2373
                    }
                  ],
                  "optional": false,
                  "start": 2359,
                  "end": 2374
                },
                "definite": false,
                "start": 2354,
                "end": 2374
              }
            ],
            "declare": false,
            "start": 2350,
            "end": 2375
          }
        ],
        "start": 2236,
        "end": 2401
      },
      "expression": false,
      "start": 2163,
      "end": 2401
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "call",
        "optional": false,
        "typeAnnotation": null,
        "start": 2412,
        "end": 2416
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
              "start": 2417,
              "end": 2418
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 2427,
                "end": 2434
              },
              "start": 2427,
              "end": 2436
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2417,
            "end": 2436
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 2438,
              "end": 2439
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2438,
            "end": 2439
          }
        ],
        "start": 2416,
        "end": 2440
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
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2448,
                    "end": 2452
                  },
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
                        "start": 2454,
                        "end": 2455
                      },
                      "typeArguments": null,
                      "start": 2454,
                      "end": 2455
                    },
                    "start": 2452,
                    "end": 2455
                  },
                  "value": null,
                  "start": 2445,
                  "end": 2455
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
                    "start": 2460,
                    "end": 2461
                  },
                  "typeArguments": null,
                  "start": 2460,
                  "end": 2461
                },
                "start": 2457,
                "end": 2461
              },
              "start": 2444,
              "end": 2461
            },
            "start": 2442,
            "end": 2461
          },
          "start": 2441,
          "end": 2461
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 2466,
            "end": 2470
          },
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
                "start": 2472,
                "end": 2473
              },
              "typeArguments": null,
              "start": 2472,
              "end": 2473
            },
            "start": 2470,
            "end": 2473
          },
          "value": null,
          "start": 2463,
          "end": 2473
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
                "start": 2488,
                "end": 2489
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2493,
                    "end": 2497
                  },
                  "start": 2490,
                  "end": 2497
                }
              ],
              "optional": false,
              "start": 2488,
              "end": 2498
            },
            "start": 2481,
            "end": 2499
          }
        ],
        "start": 2475,
        "end": 2501
      },
      "expression": false,
      "start": 2403,
      "end": 2501
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "callr",
        "optional": false,
        "typeAnnotation": null,
        "start": 2512,
        "end": 2517
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
              "start": 2518,
              "end": 2519
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 2528,
                "end": 2535
              },
              "start": 2528,
              "end": 2537
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2518,
            "end": 2537
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 2539,
              "end": 2540
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2539,
            "end": 2540
          }
        ],
        "start": 2517,
        "end": 2541
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "args",
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
                "start": 2548,
                "end": 2549
              },
              "typeArguments": null,
              "start": 2548,
              "end": 2549
            },
            "start": 2546,
            "end": 2549
          },
          "start": 2542,
          "end": 2549
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
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2558,
                    "end": 2562
                  },
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
                        "start": 2564,
                        "end": 2565
                      },
                      "typeArguments": null,
                      "start": 2564,
                      "end": 2565
                    },
                    "start": 2562,
                    "end": 2565
                  },
                  "value": null,
                  "start": 2555,
                  "end": 2565
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
                    "start": 2570,
                    "end": 2571
                  },
                  "typeArguments": null,
                  "start": 2570,
                  "end": 2571
                },
                "start": 2567,
                "end": 2571
              },
              "start": 2554,
              "end": 2571
            },
            "start": 2552,
            "end": 2571
          },
          "start": 2551,
          "end": 2571
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
                "start": 2586,
                "end": 2587
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2591,
                    "end": 2595
                  },
                  "start": 2588,
                  "end": 2595
                }
              ],
              "optional": false,
              "start": 2586,
              "end": 2596
            },
            "start": 2579,
            "end": 2597
          }
        ],
        "start": 2573,
        "end": 2599
      },
      "expression": false,
      "start": 2503,
      "end": 2599
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2618,
        "end": 2621
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
              "type": "TSStringKeyword",
              "start": 2625,
              "end": 2631
            },
            "start": 2623,
            "end": 2631
          },
          "start": 2622,
          "end": 2631
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 2636,
              "end": 2642
            },
            "start": 2634,
            "end": 2642
          },
          "start": 2633,
          "end": 2642
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 2645,
              "end": 2651
            },
            {
              "type": "TSNumberKeyword",
              "start": 2654,
              "end": 2660
            }
          ],
          "start": 2645,
          "end": 2660
        },
        "start": 2643,
        "end": 2660
      },
      "body": null,
      "expression": false,
      "start": 2601,
      "end": 2661
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f16",
        "optional": false,
        "typeAnnotation": null,
        "start": 2679,
        "end": 2682
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 2683,
              "end": 2684
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2683,
            "end": 2684
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 2686,
              "end": 2687
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2686,
            "end": 2687
          }
        ],
        "start": 2682,
        "end": 2688
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
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 2692,
                "end": 2693
              },
              "typeArguments": null,
              "start": 2692,
              "end": 2693
            },
            "start": 2690,
            "end": 2693
          },
          "start": 2689,
          "end": 2693
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
                "start": 2698,
                "end": 2699
              },
              "typeArguments": null,
              "start": 2698,
              "end": 2699
            },
            "start": 2696,
            "end": 2699
          },
          "start": 2695,
          "end": 2699
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 2702,
                "end": 2703
              },
              "typeArguments": null,
              "start": 2702,
              "end": 2703
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 2706,
                "end": 2707
              },
              "typeArguments": null,
              "start": 2706,
              "end": 2707
            }
          ],
          "start": 2702,
          "end": 2707
        },
        "start": 2700,
        "end": 2707
      },
      "body": null,
      "expression": false,
      "start": 2662,
      "end": 2708
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
            "name": "x20",
            "optional": false,
            "typeAnnotation": null,
            "start": 2714,
            "end": 2717
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "call",
              "optional": false,
              "typeAnnotation": null,
              "start": 2720,
              "end": 2724
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
                    "start": 2726,
                    "end": 2727
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2729,
                    "end": 2730
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2735,
                    "end": 2736
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2739,
                    "end": 2740
                  },
                  "start": 2735,
                  "end": 2740
                },
                "id": null,
                "generator": false,
                "start": 2725,
                "end": 2740
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 2742,
                "end": 2744
              },
              {
                "type": "Literal",
                "value": 20,
                "raw": "20",
                "start": 2746,
                "end": 2748
              }
            ],
            "optional": false,
            "start": 2720,
            "end": 2749
          },
          "definite": false,
          "start": 2714,
          "end": 2749
        }
      ],
      "declare": false,
      "start": 2710,
      "end": 2750
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
            "name": "x21",
            "optional": false,
            "typeAnnotation": null,
            "start": 2766,
            "end": 2769
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "call",
              "optional": false,
              "typeAnnotation": null,
              "start": 2772,
              "end": 2776
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
                    "start": 2778,
                    "end": 2779
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2781,
                    "end": 2782
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2787,
                    "end": 2788
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2791,
                    "end": 2792
                  },
                  "start": 2787,
                  "end": 2792
                },
                "id": null,
                "generator": false,
                "start": 2777,
                "end": 2792
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 2794,
                "end": 2796
              },
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 2798,
                "end": 2805
              }
            ],
            "optional": false,
            "start": 2772,
            "end": 2806
          },
          "definite": false,
          "start": 2766,
          "end": 2806
        }
      ],
      "declare": false,
      "start": 2762,
      "end": 2807
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
            "name": "x22",
            "optional": false,
            "typeAnnotation": null,
            "start": 2823,
            "end": 2826
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "call",
              "optional": false,
              "typeAnnotation": null,
              "start": 2829,
              "end": 2833
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "f15",
                "optional": false,
                "typeAnnotation": null,
                "start": 2834,
                "end": 2837
              },
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 2839,
                "end": 2846
              },
              {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 2848,
                "end": 2850
              }
            ],
            "optional": false,
            "start": 2829,
            "end": 2851
          },
          "definite": false,
          "start": 2823,
          "end": 2851
        }
      ],
      "declare": false,
      "start": 2819,
      "end": 2852
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
            "name": "x23",
            "optional": false,
            "typeAnnotation": null,
            "start": 2877,
            "end": 2880
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "call",
              "optional": false,
              "typeAnnotation": null,
              "start": 2883,
              "end": 2887
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "f16",
                "optional": false,
                "typeAnnotation": null,
                "start": 2888,
                "end": 2891
              },
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 2893,
                "end": 2900
              },
              {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 2902,
                "end": 2904
              }
            ],
            "optional": false,
            "start": 2883,
            "end": 2905
          },
          "definite": false,
          "start": 2877,
          "end": 2905
        }
      ],
      "declare": false,
      "start": 2873,
      "end": 2906
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
            "name": "x24",
            "optional": false,
            "typeAnnotation": null,
            "start": 2923,
            "end": 2926
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "call",
              "optional": false,
              "typeAnnotation": null,
              "start": 2929,
              "end": 2933
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSStringKeyword",
                      "start": 2935,
                      "end": 2941
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 2943,
                      "end": 2949
                    }
                  ],
                  "start": 2934,
                  "end": 2950
                },
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 2952,
                      "end": 2958
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 2961,
                      "end": 2967
                    }
                  ],
                  "start": 2952,
                  "end": 2967
                }
              ],
              "start": 2933,
              "end": 2968
            },
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "f16",
                "optional": false,
                "typeAnnotation": null,
                "start": 2969,
                "end": 2972
              },
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 2974,
                "end": 2981
              },
              {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 2983,
                "end": 2985
              }
            ],
            "optional": false,
            "start": 2929,
            "end": 2986
          },
          "definite": false,
          "start": 2923,
          "end": 2986
        }
      ],
      "declare": false,
      "start": 2919,
      "end": 2987
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
            "name": "x30",
            "optional": false,
            "typeAnnotation": null,
            "start": 3013,
            "end": 3016
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "callr",
              "optional": false,
              "typeAnnotation": null,
              "start": 3019,
              "end": 3024
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sn",
                "optional": false,
                "typeAnnotation": null,
                "start": 3025,
                "end": 3027
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
                    "start": 3030,
                    "end": 3031
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3033,
                    "end": 3034
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3039,
                    "end": 3040
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3043,
                    "end": 3044
                  },
                  "start": 3039,
                  "end": 3044
                },
                "id": null,
                "generator": false,
                "start": 3029,
                "end": 3044
              }
            ],
            "optional": false,
            "start": 3019,
            "end": 3045
          },
          "definite": false,
          "start": 3013,
          "end": 3045
        }
      ],
      "declare": false,
      "start": 3009,
      "end": 3046
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
            "name": "x31",
            "optional": false,
            "typeAnnotation": null,
            "start": 3062,
            "end": 3065
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "callr",
              "optional": false,
              "typeAnnotation": null,
              "start": 3068,
              "end": 3073
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sn",
                "optional": false,
                "typeAnnotation": null,
                "start": 3074,
                "end": 3076
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "f15",
                "optional": false,
                "typeAnnotation": null,
                "start": 3078,
                "end": 3081
              }
            ],
            "optional": false,
            "start": 3068,
            "end": 3082
          },
          "definite": false,
          "start": 3062,
          "end": 3082
        }
      ],
      "declare": false,
      "start": 3058,
      "end": 3083
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
            "name": "x32",
            "optional": false,
            "typeAnnotation": null,
            "start": 3108,
            "end": 3111
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "callr",
              "optional": false,
              "typeAnnotation": null,
              "start": 3114,
              "end": 3119
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sn",
                "optional": false,
                "typeAnnotation": null,
                "start": 3120,
                "end": 3122
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "f16",
                "optional": false,
                "typeAnnotation": null,
                "start": 3124,
                "end": 3127
              }
            ],
            "optional": false,
            "start": 3114,
            "end": 3128
          },
          "definite": false,
          "start": 3108,
          "end": 3128
        }
      ],
      "declare": false,
      "start": 3104,
      "end": 3129
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bind",
        "optional": false,
        "typeAnnotation": null,
        "start": 3160,
        "end": 3164
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
              "start": 3165,
              "end": 3166
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3165,
            "end": 3166
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 3168,
              "end": 3169
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 3178,
                "end": 3185
              },
              "start": 3178,
              "end": 3187
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3168,
            "end": 3187
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 3189,
              "end": 3190
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3189,
            "end": 3190
          }
        ],
        "start": 3164,
        "end": 3191
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
                        "start": 3199,
                        "end": 3200
                      },
                      "typeArguments": null,
                      "start": 3199,
                      "end": 3200
                    },
                    "start": 3197,
                    "end": 3200
                  },
                  "start": 3196,
                  "end": 3200
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "rest",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3205,
                    "end": 3209
                  },
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
                        "start": 3211,
                        "end": 3212
                      },
                      "typeArguments": null,
                      "start": 3211,
                      "end": 3212
                    },
                    "start": 3209,
                    "end": 3212
                  },
                  "value": null,
                  "start": 3202,
                  "end": 3212
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3217,
                    "end": 3218
                  },
                  "typeArguments": null,
                  "start": 3217,
                  "end": 3218
                },
                "start": 3214,
                "end": 3218
              },
              "start": 3195,
              "end": 3218
            },
            "start": 3193,
            "end": 3218
          },
          "start": 3192,
          "end": 3218
        },
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
                "start": 3223,
                "end": 3224
              },
              "typeArguments": null,
              "start": 3223,
              "end": 3224
            },
            "start": 3221,
            "end": 3224
          },
          "start": 3220,
          "end": 3224
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "rest",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3243,
                    "end": 3247
                  },
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
                        "start": 3249,
                        "end": 3250
                      },
                      "typeArguments": null,
                      "start": 3249,
                      "end": 3250
                    },
                    "start": 3247,
                    "end": 3250
                  },
                  "value": null,
                  "start": 3240,
                  "end": 3250
                }
              ],
              "returnType": null,
              "body": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3255,
                  "end": 3256
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3257,
                    "end": 3258
                  },
                  {
                    "type": "SpreadElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "rest",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3263,
                      "end": 3267
                    },
                    "start": 3260,
                    "end": 3267
                  }
                ],
                "optional": false,
                "start": 3255,
                "end": 3268
              },
              "id": null,
              "generator": false,
              "start": 3239,
              "end": 3268
            },
            "start": 3232,
            "end": 3269
          }
        ],
        "start": 3226,
        "end": 3271
      },
      "expression": false,
      "start": 3151,
      "end": 3271
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
            "name": "f20",
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3296,
                        "end": 3302
                      },
                      "start": 3294,
                      "end": 3302
                    },
                    "start": 3293,
                    "end": 3302
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3307,
                        "end": 3313
                      },
                      "start": 3305,
                      "end": 3313
                    },
                    "start": 3304,
                    "end": 3313
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3318,
                        "end": 3325
                      },
                      "start": 3316,
                      "end": 3325
                    },
                    "start": 3315,
                    "end": 3325
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 3330,
                      "end": 3336
                    },
                    "start": 3330,
                    "end": 3338
                  },
                  "start": 3327,
                  "end": 3338
                },
                "start": 3292,
                "end": 3338
              },
              "start": 3290,
              "end": 3338
            },
            "start": 3287,
            "end": 3338
          },
          "init": null,
          "definite": false,
          "start": 3287,
          "end": 3338
        }
      ],
      "declare": true,
      "start": 3273,
      "end": 3339
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
            "name": "f21",
            "optional": false,
            "typeAnnotation": null,
            "start": 3347,
            "end": 3350
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "bind",
              "optional": false,
              "typeAnnotation": null,
              "start": 3353,
              "end": 3357
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "f20",
                "optional": false,
                "typeAnnotation": null,
                "start": 3358,
                "end": 3361
              },
              {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 3363,
                "end": 3365
              }
            ],
            "optional": false,
            "start": 3353,
            "end": 3366
          },
          "definite": false,
          "start": 3347,
          "end": 3366
        }
      ],
      "declare": false,
      "start": 3341,
      "end": 3367
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
            "name": "f22",
            "optional": false,
            "typeAnnotation": null,
            "start": 3414,
            "end": 3417
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "bind",
              "optional": false,
              "typeAnnotation": null,
              "start": 3420,
              "end": 3424
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "f21",
                "optional": false,
                "typeAnnotation": null,
                "start": 3425,
                "end": 3428
              },
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 3430,
                "end": 3437
              }
            ],
            "optional": false,
            "start": 3420,
            "end": 3438
          },
          "definite": false,
          "start": 3414,
          "end": 3438
        }
      ],
      "declare": false,
      "start": 3408,
      "end": 3439
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
            "name": "f23",
            "optional": false,
            "typeAnnotation": null,
            "start": 3475,
            "end": 3478
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "bind",
              "optional": false,
              "typeAnnotation": null,
              "start": 3481,
              "end": 3485
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "f22",
                "optional": false,
                "typeAnnotation": null,
                "start": 3486,
                "end": 3489
              },
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 3491,
                "end": 3495
              }
            ],
            "optional": false,
            "start": 3481,
            "end": 3496
          },
          "definite": false,
          "start": 3475,
          "end": 3496
        }
      ],
      "declare": false,
      "start": 3469,
      "end": 3497
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f20",
          "optional": false,
          "typeAnnotation": null,
          "start": 3518,
          "end": 3521
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 3522,
            "end": 3524
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 3526,
            "end": 3533
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 3535,
            "end": 3539
          }
        ],
        "optional": false,
        "start": 3518,
        "end": 3540
      },
      "directive": null,
      "start": 3518,
      "end": 3541
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f21",
          "optional": false,
          "typeAnnotation": null,
          "start": 3542,
          "end": 3545
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 3546,
            "end": 3553
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 3555,
            "end": 3559
          }
        ],
        "optional": false,
        "start": 3542,
        "end": 3560
      },
      "directive": null,
      "start": 3542,
      "end": 3561
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f22",
          "optional": false,
          "typeAnnotation": null,
          "start": 3562,
          "end": 3565
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 3566,
            "end": 3570
          }
        ],
        "optional": false,
        "start": 3562,
        "end": 3571
      },
      "directive": null,
      "start": 3562,
      "end": 3572
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f23",
          "optional": false,
          "typeAnnotation": null,
          "start": 3573,
          "end": 3576
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 3573,
        "end": 3578
      },
      "directive": null,
      "start": 3573,
      "end": 3579
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
            "name": "g20",
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3604,
                        "end": 3610
                      },
                      "start": 3602,
                      "end": 3610
                    },
                    "start": 3601,
                    "end": 3610
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3616,
                        "end": 3622
                      },
                      "start": 3614,
                      "end": 3622
                    },
                    "start": 3612,
                    "end": 3622
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3628,
                        "end": 3635
                      },
                      "start": 3626,
                      "end": 3635
                    },
                    "start": 3624,
                    "end": 3635
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 3640,
                      "end": 3646
                    },
                    "start": 3640,
                    "end": 3648
                  },
                  "start": 3637,
                  "end": 3648
                },
                "start": 3600,
                "end": 3648
              },
              "start": 3598,
              "end": 3648
            },
            "start": 3595,
            "end": 3648
          },
          "init": null,
          "definite": false,
          "start": 3595,
          "end": 3648
        }
      ],
      "declare": true,
      "start": 3581,
      "end": 3649
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
            "name": "g21",
            "optional": false,
            "typeAnnotation": null,
            "start": 3657,
            "end": 3660
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "bind",
              "optional": false,
              "typeAnnotation": null,
              "start": 3663,
              "end": 3667
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "g20",
                "optional": false,
                "typeAnnotation": null,
                "start": 3668,
                "end": 3671
              },
              {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 3673,
                "end": 3675
              }
            ],
            "optional": false,
            "start": 3663,
            "end": 3676
          },
          "definite": false,
          "start": 3657,
          "end": 3676
        }
      ],
      "declare": false,
      "start": 3651,
      "end": 3677
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
            "name": "g22",
            "optional": false,
            "typeAnnotation": null,
            "start": 3724,
            "end": 3727
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "bind",
              "optional": false,
              "typeAnnotation": null,
              "start": 3730,
              "end": 3734
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "g21",
                "optional": false,
                "typeAnnotation": null,
                "start": 3735,
                "end": 3738
              },
              {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 3740,
                "end": 3747
              }
            ],
            "optional": false,
            "start": 3730,
            "end": 3748
          },
          "definite": false,
          "start": 3724,
          "end": 3748
        }
      ],
      "declare": false,
      "start": 3718,
      "end": 3749
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
            "name": "g23",
            "optional": false,
            "typeAnnotation": null,
            "start": 3785,
            "end": 3788
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "bind",
              "optional": false,
              "typeAnnotation": null,
              "start": 3791,
              "end": 3795
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "g22",
                "optional": false,
                "typeAnnotation": null,
                "start": 3796,
                "end": 3799
              },
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 3801,
                "end": 3805
              }
            ],
            "optional": false,
            "start": 3791,
            "end": 3806
          },
          "definite": false,
          "start": 3785,
          "end": 3806
        }
      ],
      "declare": false,
      "start": 3779,
      "end": 3807
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g20",
          "optional": false,
          "typeAnnotation": null,
          "start": 3828,
          "end": 3831
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 3832,
            "end": 3834
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 3836,
            "end": 3843
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 3845,
            "end": 3849
          }
        ],
        "optional": false,
        "start": 3828,
        "end": 3850
      },
      "directive": null,
      "start": 3828,
      "end": 3851
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g20",
          "optional": false,
          "typeAnnotation": null,
          "start": 3852,
          "end": 3855
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 3856,
            "end": 3858
          },
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 3860,
            "end": 3867
          }
        ],
        "optional": false,
        "start": 3852,
        "end": 3868
      },
      "directive": null,
      "start": 3852,
      "end": 3869
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g20",
          "optional": false,
          "typeAnnotation": null,
          "start": 3870,
          "end": 3873
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 3874,
            "end": 3876
          }
        ],
        "optional": false,
        "start": 3870,
        "end": 3877
      },
      "directive": null,
      "start": 3870,
      "end": 3878
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g21",
          "optional": false,
          "typeAnnotation": null,
          "start": 3879,
          "end": 3882
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 3883,
            "end": 3890
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 3892,
            "end": 3896
          }
        ],
        "optional": false,
        "start": 3879,
        "end": 3897
      },
      "directive": null,
      "start": 3879,
      "end": 3898
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g21",
          "optional": false,
          "typeAnnotation": null,
          "start": 3899,
          "end": 3902
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 3903,
            "end": 3910
          }
        ],
        "optional": false,
        "start": 3899,
        "end": 3911
      },
      "directive": null,
      "start": 3899,
      "end": 3912
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g21",
          "optional": false,
          "typeAnnotation": null,
          "start": 3913,
          "end": 3916
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 3913,
        "end": 3918
      },
      "directive": null,
      "start": 3913,
      "end": 3919
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g22",
          "optional": false,
          "typeAnnotation": null,
          "start": 3920,
          "end": 3923
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 3924,
            "end": 3928
          }
        ],
        "optional": false,
        "start": 3920,
        "end": 3929
      },
      "directive": null,
      "start": 3920,
      "end": 3930
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g22",
          "optional": false,
          "typeAnnotation": null,
          "start": 3931,
          "end": 3934
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 3931,
        "end": 3936
      },
      "directive": null,
      "start": 3931,
      "end": 3937
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g23",
          "optional": false,
          "typeAnnotation": null,
          "start": 3938,
          "end": 3941
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 3938,
        "end": 3943
      },
      "directive": null,
      "start": 3938,
      "end": 3944
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f30",
        "optional": false,
        "typeAnnotation": null,
        "start": 3963,
        "end": 3966
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 3967,
              "end": 3968
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3967,
            "end": 3968
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 3970,
              "end": 3971
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSFunctionType",
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
                          "start": 3985,
                          "end": 3986
                        },
                        "typeArguments": null,
                        "start": 3985,
                        "end": 3986
                      },
                      "start": 3983,
                      "end": 3986
                    },
                    "start": 3982,
                    "end": 3986
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 3991,
                    "end": 3994
                  },
                  "start": 3988,
                  "end": 3994
                },
                "start": 3981,
                "end": 3994
              },
              "start": 3980,
              "end": 3997
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3970,
            "end": 3997
          }
        ],
        "start": 3966,
        "end": 3998
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
                "start": 4002,
                "end": 4003
              },
              "typeArguments": null,
              "start": 4002,
              "end": 4003
            },
            "start": 4000,
            "end": 4003
          },
          "start": 3999,
          "end": 4003
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 4008,
            "end": 4012
          },
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
                "start": 4014,
                "end": 4015
              },
              "typeArguments": null,
              "start": 4014,
              "end": 4015
            },
            "start": 4012,
            "end": 4015
          },
          "value": null,
          "start": 4005,
          "end": 4015
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
            "start": 4018,
            "end": 4019
          },
          "typeArguments": null,
          "start": 4018,
          "end": 4019
        },
        "start": 4016,
        "end": 4019
      },
      "body": null,
      "expression": false,
      "start": 3946,
      "end": 4020
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
            "name": "c30",
            "optional": false,
            "typeAnnotation": null,
            "start": 4028,
            "end": 4031
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f30",
              "optional": false,
              "typeAnnotation": null,
              "start": 4034,
              "end": 4037
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 4038,
                "end": 4040
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
                    "start": 4042,
                    "end": 4043
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 4047,
                    "end": 4049
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4052,
                    "end": 4053
                  },
                  "start": 4047,
                  "end": 4053
                },
                "id": null,
                "generator": false,
                "start": 4042,
                "end": 4053
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
                    "start": 4055,
                    "end": 4056
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4060,
                    "end": 4061
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 4064,
                    "end": 4065
                  },
                  "start": 4060,
                  "end": 4065
                },
                "id": null,
                "generator": false,
                "start": 4055,
                "end": 4065
              }
            ],
            "optional": false,
            "start": 4034,
            "end": 4066
          },
          "definite": false,
          "start": 4028,
          "end": 4066
        }
      ],
      "declare": false,
      "start": 4022,
      "end": 4067
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T01",
        "optional": false,
        "typeAnnotation": null,
        "start": 4125,
        "end": 4128
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Parameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 4131,
          "end": 4141
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSFunctionType",
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
                      "type": "TSNumberKeyword",
                      "start": 4146,
                      "end": 4152
                    },
                    "start": 4144,
                    "end": 4152
                  },
                  "start": 4143,
                  "end": 4152
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 4157,
                      "end": 4163
                    },
                    "start": 4155,
                    "end": 4163
                  },
                  "start": 4154,
                  "end": 4163
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 4168,
                      "end": 4175
                    },
                    "start": 4166,
                    "end": 4175
                  },
                  "start": 4165,
                  "end": 4175
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 4180,
                  "end": 4184
                },
                "start": 4177,
                "end": 4184
              },
              "start": 4142,
              "end": 4184
            }
          ],
          "start": 4141,
          "end": 4185
        },
        "start": 4131,
        "end": 4185
      },
      "declare": false,
      "start": 4120,
      "end": 4186
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T02",
        "optional": false,
        "typeAnnotation": null,
        "start": 4192,
        "end": 4195
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Parameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 4198,
          "end": 4208
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4213,
                    "end": 4217
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 4220,
                          "end": 4226
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 4228,
                          "end": 4234
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 4236,
                          "end": 4243
                        }
                      ],
                      "start": 4219,
                      "end": 4244
                    },
                    "start": 4217,
                    "end": 4244
                  },
                  "value": null,
                  "start": 4210,
                  "end": 4244
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 4249,
                  "end": 4253
                },
                "start": 4246,
                "end": 4253
              },
              "start": 4209,
              "end": 4253
            }
          ],
          "start": 4208,
          "end": 4254
        },
        "start": 4198,
        "end": 4254
      },
      "declare": false,
      "start": 4187,
      "end": 4255
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T03",
        "optional": false,
        "typeAnnotation": null,
        "start": 4261,
        "end": 4264
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ConstructorParameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 4267,
          "end": 4288
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
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
                      "type": "TSNumberKeyword",
                      "start": 4297,
                      "end": 4303
                    },
                    "start": 4295,
                    "end": 4303
                  },
                  "start": 4294,
                  "end": 4303
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 4308,
                      "end": 4314
                    },
                    "start": 4306,
                    "end": 4314
                  },
                  "start": 4305,
                  "end": 4314
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 4319,
                      "end": 4326
                    },
                    "start": 4317,
                    "end": 4326
                  },
                  "start": 4316,
                  "end": 4326
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 4331,
                  "end": 4335
                },
                "start": 4328,
                "end": 4335
              },
              "start": 4289,
              "end": 4335
            }
          ],
          "start": 4288,
          "end": 4336
        },
        "start": 4267,
        "end": 4336
      },
      "declare": false,
      "start": 4256,
      "end": 4337
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T04",
        "optional": false,
        "typeAnnotation": null,
        "start": 4343,
        "end": 4346
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ConstructorParameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 4349,
          "end": 4370
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSConstructorType",
              "abstract": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4379,
                    "end": 4383
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 4386,
                          "end": 4392
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 4394,
                          "end": 4400
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 4402,
                          "end": 4409
                        }
                      ],
                      "start": 4385,
                      "end": 4410
                    },
                    "start": 4383,
                    "end": 4410
                  },
                  "value": null,
                  "start": 4376,
                  "end": 4410
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 4415,
                  "end": 4419
                },
                "start": 4412,
                "end": 4419
              },
              "start": 4371,
              "end": 4419
            }
          ],
          "start": 4370,
          "end": 4420
        },
        "start": 4349,
        "end": 4420
      },
      "declare": false,
      "start": 4338,
      "end": 4421
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T05",
        "optional": false,
        "typeAnnotation": null,
        "start": 4427,
        "end": 4430
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
              "start": 4431,
              "end": 4432
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4431,
            "end": 4432
          }
        ],
        "start": 4430,
        "end": 4433
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Parameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 4436,
          "end": 4446
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4451,
                    "end": 4455
                  },
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
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4457,
                          "end": 4458
                        },
                        "typeArguments": null,
                        "start": 4457,
                        "end": 4458
                      },
                      "start": 4457,
                      "end": 4460
                    },
                    "start": 4455,
                    "end": 4460
                  },
                  "value": null,
                  "start": 4448,
                  "end": 4460
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 4465,
                  "end": 4469
                },
                "start": 4462,
                "end": 4469
              },
              "start": 4447,
              "end": 4469
            }
          ],
          "start": 4446,
          "end": 4470
        },
        "start": 4436,
        "end": 4470
      },
      "declare": false,
      "start": 4422,
      "end": 4471
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T06",
        "optional": false,
        "typeAnnotation": null,
        "start": 4477,
        "end": 4480
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
              "start": 4481,
              "end": 4482
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4481,
            "end": 4482
          }
        ],
        "start": 4480,
        "end": 4483
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ConstructorParameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 4486,
          "end": 4507
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSConstructorType",
              "abstract": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4516,
                    "end": 4520
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "elementTypes": [],
                      "start": 4522,
                      "end": 4524
                    },
                    "start": 4520,
                    "end": 4524
                  },
                  "value": null,
                  "start": 4513,
                  "end": 4524
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 4529,
                  "end": 4533
                },
                "start": 4526,
                "end": 4533
              },
              "start": 4508,
              "end": 4533
            }
          ],
          "start": 4507,
          "end": 4534
        },
        "start": 4486,
        "end": 4534
      },
      "declare": false,
      "start": 4472,
      "end": 4535
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T07",
        "optional": false,
        "typeAnnotation": null,
        "start": 4541,
        "end": 4544
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
              "start": 4545,
              "end": 4546
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 4555,
                "end": 4558
              },
              "start": 4555,
              "end": 4560
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4545,
            "end": 4560
          }
        ],
        "start": 4544,
        "end": 4561
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Parameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 4564,
          "end": 4574
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4579,
                    "end": 4583
                  },
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
                        "start": 4585,
                        "end": 4586
                      },
                      "typeArguments": null,
                      "start": 4585,
                      "end": 4586
                    },
                    "start": 4583,
                    "end": 4586
                  },
                  "value": null,
                  "start": 4576,
                  "end": 4586
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 4591,
                  "end": 4595
                },
                "start": 4588,
                "end": 4595
              },
              "start": 4575,
              "end": 4595
            }
          ],
          "start": 4574,
          "end": 4596
        },
        "start": 4564,
        "end": 4596
      },
      "declare": false,
      "start": 4536,
      "end": 4597
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T08",
        "optional": false,
        "typeAnnotation": null,
        "start": 4603,
        "end": 4606
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
              "start": 4607,
              "end": 4608
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 4617,
                "end": 4620
              },
              "start": 4617,
              "end": 4622
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4607,
            "end": 4622
          }
        ],
        "start": 4606,
        "end": 4623
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ConstructorParameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 4626,
          "end": 4647
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSConstructorType",
              "abstract": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4656,
                    "end": 4660
                  },
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
                        "start": 4662,
                        "end": 4663
                      },
                      "typeArguments": null,
                      "start": 4662,
                      "end": 4663
                    },
                    "start": 4660,
                    "end": 4663
                  },
                  "value": null,
                  "start": 4653,
                  "end": 4663
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 4668,
                  "end": 4672
                },
                "start": 4665,
                "end": 4672
              },
              "start": 4648,
              "end": 4672
            }
          ],
          "start": 4647,
          "end": 4673
        },
        "start": 4626,
        "end": 4673
      },
      "declare": false,
      "start": 4598,
      "end": 4674
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T09",
        "optional": false,
        "typeAnnotation": null,
        "start": 4680,
        "end": 4683
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Parameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 4686,
          "end": 4696
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null,
                "start": 4697,
                "end": 4705
              },
              "typeArguments": null,
              "start": 4697,
              "end": 4705
            }
          ],
          "start": 4696,
          "end": 4706
        },
        "start": 4686,
        "end": 4706
      },
      "declare": false,
      "start": 4675,
      "end": 4707
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Record1",
        "optional": false,
        "typeAnnotation": null,
        "start": 4714,
        "end": 4721
      },
      "typeParameters": null,
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
              "name": "move",
              "optional": false,
              "typeAnnotation": null,
              "start": 4728,
              "end": 4732
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 4735,
                    "end": 4741
                  },
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "left",
                          "raw": "'left'",
                          "start": 4743,
                          "end": 4749
                        },
                        "start": 4743,
                        "end": 4749
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "right",
                          "raw": "'right'",
                          "start": 4752,
                          "end": 4759
                        },
                        "start": 4752,
                        "end": 4759
                      }
                    ],
                    "start": 4743,
                    "end": 4759
                  }
                ],
                "start": 4734,
                "end": 4760
              },
              "start": 4732,
              "end": 4760
            },
            "accessibility": null,
            "static": false,
            "start": 4728,
            "end": 4761
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "jump",
              "optional": false,
              "typeAnnotation": null,
              "start": 4764,
              "end": 4768
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 4771,
                    "end": 4777
                  },
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "up",
                          "raw": "'up'",
                          "start": 4779,
                          "end": 4783
                        },
                        "start": 4779,
                        "end": 4783
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "down",
                          "raw": "'down'",
                          "start": 4786,
                          "end": 4792
                        },
                        "start": 4786,
                        "end": 4792
                      }
                    ],
                    "start": 4779,
                    "end": 4792
                  }
                ],
                "start": 4770,
                "end": 4793
              },
              "start": 4768,
              "end": 4793
            },
            "accessibility": null,
            "static": false,
            "start": 4764,
            "end": 4794
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "stop",
              "optional": false,
              "typeAnnotation": null,
              "start": 4797,
              "end": 4801
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 4803,
                "end": 4809
              },
              "start": 4801,
              "end": 4809
            },
            "accessibility": null,
            "static": false,
            "start": 4797,
            "end": 4810
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "done",
              "optional": false,
              "typeAnnotation": null,
              "start": 4813,
              "end": 4817
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [],
                "start": 4819,
                "end": 4821
              },
              "start": 4817,
              "end": 4821
            },
            "accessibility": null,
            "static": false,
            "start": 4813,
            "end": 4822
          }
        ],
        "start": 4724,
        "end": 4824
      },
      "declare": false,
      "start": 4709,
      "end": 4824
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EventType",
        "optional": false,
        "typeAnnotation": null,
        "start": 4831,
        "end": 4840
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
              "start": 4841,
              "end": 4842
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4841,
            "end": 4842
          }
        ],
        "start": 4840,
        "end": 4843
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "emit",
              "optional": false,
              "typeAnnotation": null,
              "start": 4850,
              "end": 4854
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4855,
                    "end": 4856
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4871,
                        "end": 4872
                      },
                      "typeArguments": null,
                      "start": 4871,
                      "end": 4872
                    },
                    "start": 4865,
                    "end": 4872
                  },
                  "default": {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4881,
                        "end": 4882
                      },
                      "typeArguments": null,
                      "start": 4881,
                      "end": 4882
                    },
                    "start": 4875,
                    "end": 4882
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4855,
                  "end": 4882
                }
              ],
              "start": 4854,
              "end": 4883
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4887,
                      "end": 4888
                    },
                    "typeArguments": null,
                    "start": 4887,
                    "end": 4888
                  },
                  "start": 4885,
                  "end": 4888
                },
                "start": 4884,
                "end": 4888
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "payload",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4893,
                  "end": 4900
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSConditionalType",
                    "checkType": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4902,
                          "end": 4903
                        },
                        "typeArguments": null,
                        "start": 4902,
                        "end": 4903
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4904,
                          "end": 4905
                        },
                        "typeArguments": null,
                        "start": 4904,
                        "end": 4905
                      },
                      "start": 4902,
                      "end": 4906
                    },
                    "extendsType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 4915,
                        "end": 4918
                      },
                      "start": 4915,
                      "end": 4920
                    },
                    "trueType": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4923,
                          "end": 4924
                        },
                        "typeArguments": null,
                        "start": 4923,
                        "end": 4924
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4925,
                          "end": 4926
                        },
                        "typeArguments": null,
                        "start": 4925,
                        "end": 4926
                      },
                      "start": 4923,
                      "end": 4927
                    },
                    "falseType": {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSIndexedAccessType",
                          "objectType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4931,
                              "end": 4932
                            },
                            "typeArguments": null,
                            "start": 4931,
                            "end": 4932
                          },
                          "indexType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "K",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4933,
                              "end": 4934
                            },
                            "typeArguments": null,
                            "start": 4933,
                            "end": 4934
                          },
                          "start": 4931,
                          "end": 4935
                        }
                      ],
                      "start": 4930,
                      "end": 4936
                    },
                    "start": 4902,
                    "end": 4936
                  },
                  "start": 4900,
                  "end": 4936
                },
                "value": null,
                "start": 4890,
                "end": 4936
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 4939,
                "end": 4943
              },
              "start": 4937,
              "end": 4943
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 4850,
            "end": 4944
          }
        ],
        "start": 4846,
        "end": 4947
      },
      "declare": false,
      "start": 4826,
      "end": 4947
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
            "name": "events",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "EventType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4969,
                  "end": 4978
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Record1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4979,
                        "end": 4986
                      },
                      "typeArguments": null,
                      "start": 4979,
                      "end": 4986
                    }
                  ],
                  "start": 4978,
                  "end": 4987
                },
                "start": 4969,
                "end": 4987
              },
              "start": 4967,
              "end": 4987
            },
            "start": 4961,
            "end": 4987
          },
          "init": null,
          "definite": false,
          "start": 4961,
          "end": 4987
        }
      ],
      "declare": true,
      "start": 4949,
      "end": 4988
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "events",
            "optional": false,
            "typeAnnotation": null,
            "start": 4989,
            "end": 4995
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "emit",
            "optional": false,
            "typeAnnotation": null,
            "start": 4996,
            "end": 5000
          },
          "optional": false,
          "computed": false,
          "start": 4989,
          "end": 5000
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "move",
            "raw": "'move'",
            "start": 5001,
            "end": 5007
          },
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 5009,
            "end": 5011
          },
          {
            "type": "Literal",
            "value": "left",
            "raw": "'left'",
            "start": 5013,
            "end": 5019
          }
        ],
        "optional": false,
        "start": 4989,
        "end": 5020
      },
      "directive": null,
      "start": 4989,
      "end": 5021
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "events",
            "optional": false,
            "typeAnnotation": null,
            "start": 5022,
            "end": 5028
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "emit",
            "optional": false,
            "typeAnnotation": null,
            "start": 5029,
            "end": 5033
          },
          "optional": false,
          "computed": false,
          "start": 5022,
          "end": 5033
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "jump",
            "raw": "'jump'",
            "start": 5034,
            "end": 5040
          },
          {
            "type": "Literal",
            "value": 20,
            "raw": "20",
            "start": 5042,
            "end": 5044
          },
          {
            "type": "Literal",
            "value": "up",
            "raw": "'up'",
            "start": 5046,
            "end": 5050
          }
        ],
        "optional": false,
        "start": 5022,
        "end": 5051
      },
      "directive": null,
      "start": 5022,
      "end": 5052
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "events",
            "optional": false,
            "typeAnnotation": null,
            "start": 5053,
            "end": 5059
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "emit",
            "optional": false,
            "typeAnnotation": null,
            "start": 5060,
            "end": 5064
          },
          "optional": false,
          "computed": false,
          "start": 5053,
          "end": 5064
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "stop",
            "raw": "'stop'",
            "start": 5065,
            "end": 5071
          },
          {
            "type": "Literal",
            "value": "Bye!",
            "raw": "'Bye!'",
            "start": 5073,
            "end": 5079
          }
        ],
        "optional": false,
        "start": 5053,
        "end": 5080
      },
      "directive": null,
      "start": 5053,
      "end": 5081
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "events",
            "optional": false,
            "typeAnnotation": null,
            "start": 5082,
            "end": 5088
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "emit",
            "optional": false,
            "typeAnnotation": null,
            "start": 5089,
            "end": 5093
          },
          "optional": false,
          "computed": false,
          "start": 5082,
          "end": 5093
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "done",
            "raw": "'done'",
            "start": 5094,
            "end": 5100
          }
        ],
        "optional": false,
        "start": 5082,
        "end": 5101
      },
      "directive": null,
      "start": 5082,
      "end": 5102
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
            "name": "ff1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5148,
                      "end": 5152
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 5154,
                          "end": 5157
                        },
                        "start": 5154,
                        "end": 5159
                      },
                      "start": 5152,
                      "end": 5159
                    },
                    "value": null,
                    "start": 5144,
                    "end": 5159
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 5164,
                    "end": 5168
                  },
                  "start": 5161,
                  "end": 5168
                },
                "start": 5143,
                "end": 5168
              },
              "start": 5141,
              "end": 5168
            },
            "start": 5138,
            "end": 5168
          },
          "init": null,
          "definite": false,
          "start": 5138,
          "end": 5168
        }
      ],
      "declare": true,
      "start": 5126,
      "end": 5169
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
            "name": "ff2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 5194,
                    "end": 5198
                  },
                  "start": 5191,
                  "end": 5198
                },
                "start": 5188,
                "end": 5198
              },
              "start": 5186,
              "end": 5198
            },
            "start": 5183,
            "end": 5198
          },
          "init": null,
          "definite": false,
          "start": 5183,
          "end": 5198
        }
      ],
      "declare": true,
      "start": 5171,
      "end": 5199
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
            "name": "ff3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5221,
                      "end": 5225
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTupleType",
                        "elementTypes": [],
                        "start": 5227,
                        "end": 5229
                      },
                      "start": 5225,
                      "end": 5229
                    },
                    "value": null,
                    "start": 5218,
                    "end": 5229
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 5234,
                    "end": 5238
                  },
                  "start": 5231,
                  "end": 5238
                },
                "start": 5217,
                "end": 5238
              },
              "start": 5215,
              "end": 5238
            },
            "start": 5212,
            "end": 5238
          },
          "init": null,
          "definite": false,
          "start": 5212,
          "end": 5238
        }
      ],
      "declare": true,
      "start": 5200,
      "end": 5239
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
            "name": "ff4",
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
                        "type": "TSNeverKeyword",
                        "start": 5261,
                        "end": 5266
                      },
                      "start": 5259,
                      "end": 5266
                    },
                    "start": 5258,
                    "end": 5266
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 5271,
                    "end": 5275
                  },
                  "start": 5268,
                  "end": 5275
                },
                "start": 5257,
                "end": 5275
              },
              "start": 5255,
              "end": 5275
            },
            "start": 5252,
            "end": 5275
          },
          "init": null,
          "definite": false,
          "start": 5252,
          "end": 5275
        }
      ],
      "declare": true,
      "start": 5240,
      "end": 5276
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "ff1",
          "optional": false,
          "typeAnnotation": null,
          "start": 5278,
          "end": 5281
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "ff2",
          "optional": false,
          "typeAnnotation": null,
          "start": 5284,
          "end": 5287
        },
        "start": 5278,
        "end": 5287
      },
      "directive": null,
      "start": 5278,
      "end": 5288
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "ff1",
          "optional": false,
          "typeAnnotation": null,
          "start": 5289,
          "end": 5292
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "ff3",
          "optional": false,
          "typeAnnotation": null,
          "start": 5295,
          "end": 5298
        },
        "start": 5289,
        "end": 5298
      },
      "directive": null,
      "start": 5289,
      "end": 5299
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "ff1",
          "optional": false,
          "typeAnnotation": null,
          "start": 5300,
          "end": 5303
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "ff4",
          "optional": false,
          "typeAnnotation": null,
          "start": 5306,
          "end": 5309
        },
        "start": 5300,
        "end": 5309
      },
      "directive": null,
      "start": 5300,
      "end": 5310
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 5320
}
```
