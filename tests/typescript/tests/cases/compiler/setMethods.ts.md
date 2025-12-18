__ESTREE_TEST__:AST:
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 13
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Set",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 23
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 25,
                    "end": 26
                  },
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 28,
                    "end": 29
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 31,
                    "end": 32
                  }
                ],
                "start": 24,
                "end": 33
              }
            ],
            "start": 16,
            "end": 34
          },
          "definite": false,
          "start": 4,
          "end": 34
        }
      ],
      "declare": false,
      "start": 0,
      "end": 35
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
            "name": "stringSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 41,
            "end": 50
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Set",
              "optional": false,
              "typeAnnotation": null,
              "start": 57,
              "end": 60
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 62,
                    "end": 65
                  },
                  {
                    "type": "Literal",
                    "value": "b",
                    "raw": "\"b\"",
                    "start": 67,
                    "end": 70
                  }
                ],
                "start": 61,
                "end": 71
              }
            ],
            "start": 53,
            "end": 72
          },
          "definite": false,
          "start": 41,
          "end": 72
        }
      ],
      "declare": false,
      "start": 37,
      "end": 73
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
            "name": "numberMap",
            "optional": false,
            "typeAnnotation": null,
            "start": 79,
            "end": 88
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Map",
              "optional": false,
              "typeAnnotation": null,
              "start": 95,
              "end": 98
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 101,
                        "end": 102
                      },
                      {
                        "type": "ObjectExpression",
                        "properties": [],
                        "start": 104,
                        "end": 106
                      }
                    ],
                    "start": 100,
                    "end": 107
                  },
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 110,
                        "end": 111
                      },
                      {
                        "type": "ObjectExpression",
                        "properties": [],
                        "start": 113,
                        "end": 115
                      }
                    ],
                    "start": 109,
                    "end": 116
                  }
                ],
                "start": 99,
                "end": 117
              }
            ],
            "start": 91,
            "end": 118
          },
          "definite": false,
          "start": 79,
          "end": 118
        }
      ],
      "declare": false,
      "start": 75,
      "end": 119
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
            "name": "numberSetLike",
            "optional": false,
            "typeAnnotation": null,
            "start": 125,
            "end": 138
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
                  "name": "size",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 145,
                  "end": 149
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 151,
                  "end": 152
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 145,
                "end": 152
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "keys",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 157,
                  "end": 161
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": true,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "YieldExpression",
                          "delegate": false,
                          "argument": {
                            "type": "Literal",
                            "value": 3,
                            "raw": "3",
                            "start": 172,
                            "end": 173
                          },
                          "start": 166,
                          "end": 173
                        },
                        "directive": null,
                        "start": 166,
                        "end": 173
                      }
                    ],
                    "start": 164,
                    "end": 175
                  },
                  "expression": false,
                  "start": 161,
                  "end": 175
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 156,
                "end": 175
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "has",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 179,
                  "end": 182
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
                      "typeAnnotation": null,
                      "start": 183,
                      "end": 184
                    }
                  ],
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
                            "start": 195,
                            "end": 196
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": 3,
                            "raw": "3",
                            "start": 201,
                            "end": 202
                          },
                          "start": 195,
                          "end": 202
                        },
                        "start": 188,
                        "end": 202
                      }
                    ],
                    "start": 186,
                    "end": 204
                  },
                  "expression": false,
                  "start": 182,
                  "end": 204
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 179,
                "end": 204
              }
            ],
            "start": 141,
            "end": 207
          },
          "definite": false,
          "start": 125,
          "end": 207
        }
      ],
      "declare": false,
      "start": 121,
      "end": 208
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 210,
            "end": 219
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "union",
            "optional": false,
            "typeAnnotation": null,
            "start": 220,
            "end": 225
          },
          "optional": false,
          "computed": false,
          "start": 210,
          "end": 225
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [],
            "start": 226,
            "end": 228
          }
        ],
        "optional": false,
        "start": 210,
        "end": 229
      },
      "directive": null,
      "start": 210,
      "end": 230
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 231,
            "end": 240
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "union",
            "optional": false,
            "typeAnnotation": null,
            "start": 241,
            "end": 246
          },
          "optional": false,
          "computed": false,
          "start": 231,
          "end": 246
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Set",
              "optional": false,
              "typeAnnotation": null,
              "start": 251,
              "end": 254
            },
            "typeArguments": null,
            "arguments": [],
            "start": 247,
            "end": 254
          }
        ],
        "optional": false,
        "start": 231,
        "end": 255
      },
      "directive": null,
      "start": 231,
      "end": 256
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 257,
            "end": 266
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "union",
            "optional": false,
            "typeAnnotation": null,
            "start": 267,
            "end": 272
          },
          "optional": false,
          "computed": false,
          "start": 257,
          "end": 272
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "stringSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 273,
            "end": 282
          }
        ],
        "optional": false,
        "start": 257,
        "end": 283
      },
      "directive": null,
      "start": 257,
      "end": 284
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 285,
            "end": 294
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "union",
            "optional": false,
            "typeAnnotation": null,
            "start": 295,
            "end": 300
          },
          "optional": false,
          "computed": false,
          "start": 285,
          "end": 300
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "numberMap",
            "optional": false,
            "typeAnnotation": null,
            "start": 301,
            "end": 310
          }
        ],
        "optional": false,
        "start": 285,
        "end": 311
      },
      "directive": null,
      "start": 285,
      "end": 312
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 313,
            "end": 322
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "union",
            "optional": false,
            "typeAnnotation": null,
            "start": 323,
            "end": 328
          },
          "optional": false,
          "computed": false,
          "start": 313,
          "end": 328
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "numberSetLike",
            "optional": false,
            "typeAnnotation": null,
            "start": 329,
            "end": 342
          }
        ],
        "optional": false,
        "start": 313,
        "end": 343
      },
      "directive": null,
      "start": 313,
      "end": 344
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 346,
            "end": 355
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "intersection",
            "optional": false,
            "typeAnnotation": null,
            "start": 356,
            "end": 368
          },
          "optional": false,
          "computed": false,
          "start": 346,
          "end": 368
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [],
            "start": 369,
            "end": 371
          }
        ],
        "optional": false,
        "start": 346,
        "end": 372
      },
      "directive": null,
      "start": 346,
      "end": 373
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 374,
            "end": 383
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "intersection",
            "optional": false,
            "typeAnnotation": null,
            "start": 384,
            "end": 396
          },
          "optional": false,
          "computed": false,
          "start": 374,
          "end": 396
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Set",
              "optional": false,
              "typeAnnotation": null,
              "start": 401,
              "end": 404
            },
            "typeArguments": null,
            "arguments": [],
            "start": 397,
            "end": 404
          }
        ],
        "optional": false,
        "start": 374,
        "end": 405
      },
      "directive": null,
      "start": 374,
      "end": 406
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 407,
            "end": 416
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "intersection",
            "optional": false,
            "typeAnnotation": null,
            "start": 417,
            "end": 429
          },
          "optional": false,
          "computed": false,
          "start": 407,
          "end": 429
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "stringSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 430,
            "end": 439
          }
        ],
        "optional": false,
        "start": 407,
        "end": 440
      },
      "directive": null,
      "start": 407,
      "end": 441
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 442,
            "end": 451
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "intersection",
            "optional": false,
            "typeAnnotation": null,
            "start": 452,
            "end": 464
          },
          "optional": false,
          "computed": false,
          "start": 442,
          "end": 464
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "numberMap",
            "optional": false,
            "typeAnnotation": null,
            "start": 465,
            "end": 474
          }
        ],
        "optional": false,
        "start": 442,
        "end": 475
      },
      "directive": null,
      "start": 442,
      "end": 476
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 477,
            "end": 486
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "intersection",
            "optional": false,
            "typeAnnotation": null,
            "start": 487,
            "end": 499
          },
          "optional": false,
          "computed": false,
          "start": 477,
          "end": 499
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "numberSetLike",
            "optional": false,
            "typeAnnotation": null,
            "start": 500,
            "end": 513
          }
        ],
        "optional": false,
        "start": 477,
        "end": 514
      },
      "directive": null,
      "start": 477,
      "end": 515
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 517,
            "end": 526
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "difference",
            "optional": false,
            "typeAnnotation": null,
            "start": 527,
            "end": 537
          },
          "optional": false,
          "computed": false,
          "start": 517,
          "end": 537
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [],
            "start": 538,
            "end": 540
          }
        ],
        "optional": false,
        "start": 517,
        "end": 541
      },
      "directive": null,
      "start": 517,
      "end": 542
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 543,
            "end": 552
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "difference",
            "optional": false,
            "typeAnnotation": null,
            "start": 553,
            "end": 563
          },
          "optional": false,
          "computed": false,
          "start": 543,
          "end": 563
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Set",
              "optional": false,
              "typeAnnotation": null,
              "start": 568,
              "end": 571
            },
            "typeArguments": null,
            "arguments": [],
            "start": 564,
            "end": 571
          }
        ],
        "optional": false,
        "start": 543,
        "end": 572
      },
      "directive": null,
      "start": 543,
      "end": 573
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 574,
            "end": 583
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "difference",
            "optional": false,
            "typeAnnotation": null,
            "start": 584,
            "end": 594
          },
          "optional": false,
          "computed": false,
          "start": 574,
          "end": 594
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "stringSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 595,
            "end": 604
          }
        ],
        "optional": false,
        "start": 574,
        "end": 605
      },
      "directive": null,
      "start": 574,
      "end": 606
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 607,
            "end": 616
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "difference",
            "optional": false,
            "typeAnnotation": null,
            "start": 617,
            "end": 627
          },
          "optional": false,
          "computed": false,
          "start": 607,
          "end": 627
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "numberMap",
            "optional": false,
            "typeAnnotation": null,
            "start": 628,
            "end": 637
          }
        ],
        "optional": false,
        "start": 607,
        "end": 638
      },
      "directive": null,
      "start": 607,
      "end": 639
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 640,
            "end": 649
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "difference",
            "optional": false,
            "typeAnnotation": null,
            "start": 650,
            "end": 660
          },
          "optional": false,
          "computed": false,
          "start": 640,
          "end": 660
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "numberSetLike",
            "optional": false,
            "typeAnnotation": null,
            "start": 661,
            "end": 674
          }
        ],
        "optional": false,
        "start": 640,
        "end": 675
      },
      "directive": null,
      "start": 640,
      "end": 676
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 678,
            "end": 687
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "symmetricDifference",
            "optional": false,
            "typeAnnotation": null,
            "start": 688,
            "end": 707
          },
          "optional": false,
          "computed": false,
          "start": 678,
          "end": 707
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [],
            "start": 708,
            "end": 710
          }
        ],
        "optional": false,
        "start": 678,
        "end": 711
      },
      "directive": null,
      "start": 678,
      "end": 712
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 713,
            "end": 722
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "symmetricDifference",
            "optional": false,
            "typeAnnotation": null,
            "start": 723,
            "end": 742
          },
          "optional": false,
          "computed": false,
          "start": 713,
          "end": 742
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Set",
              "optional": false,
              "typeAnnotation": null,
              "start": 747,
              "end": 750
            },
            "typeArguments": null,
            "arguments": [],
            "start": 743,
            "end": 750
          }
        ],
        "optional": false,
        "start": 713,
        "end": 751
      },
      "directive": null,
      "start": 713,
      "end": 752
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 753,
            "end": 762
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "symmetricDifference",
            "optional": false,
            "typeAnnotation": null,
            "start": 763,
            "end": 782
          },
          "optional": false,
          "computed": false,
          "start": 753,
          "end": 782
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "stringSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 783,
            "end": 792
          }
        ],
        "optional": false,
        "start": 753,
        "end": 793
      },
      "directive": null,
      "start": 753,
      "end": 794
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 795,
            "end": 804
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "symmetricDifference",
            "optional": false,
            "typeAnnotation": null,
            "start": 805,
            "end": 824
          },
          "optional": false,
          "computed": false,
          "start": 795,
          "end": 824
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "numberMap",
            "optional": false,
            "typeAnnotation": null,
            "start": 825,
            "end": 834
          }
        ],
        "optional": false,
        "start": 795,
        "end": 835
      },
      "directive": null,
      "start": 795,
      "end": 836
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 837,
            "end": 846
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "symmetricDifference",
            "optional": false,
            "typeAnnotation": null,
            "start": 847,
            "end": 866
          },
          "optional": false,
          "computed": false,
          "start": 837,
          "end": 866
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "numberSetLike",
            "optional": false,
            "typeAnnotation": null,
            "start": 867,
            "end": 880
          }
        ],
        "optional": false,
        "start": 837,
        "end": 881
      },
      "directive": null,
      "start": 837,
      "end": 882
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 884,
            "end": 893
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isSubsetOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 894,
            "end": 904
          },
          "optional": false,
          "computed": false,
          "start": 884,
          "end": 904
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [],
            "start": 905,
            "end": 907
          }
        ],
        "optional": false,
        "start": 884,
        "end": 908
      },
      "directive": null,
      "start": 884,
      "end": 909
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 910,
            "end": 919
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isSubsetOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 920,
            "end": 930
          },
          "optional": false,
          "computed": false,
          "start": 910,
          "end": 930
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Set",
              "optional": false,
              "typeAnnotation": null,
              "start": 935,
              "end": 938
            },
            "typeArguments": null,
            "arguments": [],
            "start": 931,
            "end": 938
          }
        ],
        "optional": false,
        "start": 910,
        "end": 939
      },
      "directive": null,
      "start": 910,
      "end": 940
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 941,
            "end": 950
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isSubsetOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 951,
            "end": 961
          },
          "optional": false,
          "computed": false,
          "start": 941,
          "end": 961
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "stringSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 962,
            "end": 971
          }
        ],
        "optional": false,
        "start": 941,
        "end": 972
      },
      "directive": null,
      "start": 941,
      "end": 973
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 974,
            "end": 983
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isSubsetOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 984,
            "end": 994
          },
          "optional": false,
          "computed": false,
          "start": 974,
          "end": 994
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "numberMap",
            "optional": false,
            "typeAnnotation": null,
            "start": 995,
            "end": 1004
          }
        ],
        "optional": false,
        "start": 974,
        "end": 1005
      },
      "directive": null,
      "start": 974,
      "end": 1006
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 1007,
            "end": 1016
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isSubsetOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 1017,
            "end": 1027
          },
          "optional": false,
          "computed": false,
          "start": 1007,
          "end": 1027
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "numberSetLike",
            "optional": false,
            "typeAnnotation": null,
            "start": 1028,
            "end": 1041
          }
        ],
        "optional": false,
        "start": 1007,
        "end": 1042
      },
      "directive": null,
      "start": 1007,
      "end": 1043
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 1045,
            "end": 1054
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isSupersetOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 1055,
            "end": 1067
          },
          "optional": false,
          "computed": false,
          "start": 1045,
          "end": 1067
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [],
            "start": 1068,
            "end": 1070
          }
        ],
        "optional": false,
        "start": 1045,
        "end": 1071
      },
      "directive": null,
      "start": 1045,
      "end": 1072
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 1073,
            "end": 1082
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isSupersetOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 1083,
            "end": 1095
          },
          "optional": false,
          "computed": false,
          "start": 1073,
          "end": 1095
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Set",
              "optional": false,
              "typeAnnotation": null,
              "start": 1100,
              "end": 1103
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1096,
            "end": 1103
          }
        ],
        "optional": false,
        "start": 1073,
        "end": 1104
      },
      "directive": null,
      "start": 1073,
      "end": 1105
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 1106,
            "end": 1115
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isSupersetOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 1116,
            "end": 1128
          },
          "optional": false,
          "computed": false,
          "start": 1106,
          "end": 1128
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "stringSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 1129,
            "end": 1138
          }
        ],
        "optional": false,
        "start": 1106,
        "end": 1139
      },
      "directive": null,
      "start": 1106,
      "end": 1140
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 1141,
            "end": 1150
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isSupersetOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 1151,
            "end": 1163
          },
          "optional": false,
          "computed": false,
          "start": 1141,
          "end": 1163
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "numberMap",
            "optional": false,
            "typeAnnotation": null,
            "start": 1164,
            "end": 1173
          }
        ],
        "optional": false,
        "start": 1141,
        "end": 1174
      },
      "directive": null,
      "start": 1141,
      "end": 1175
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 1176,
            "end": 1185
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isSupersetOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 1186,
            "end": 1198
          },
          "optional": false,
          "computed": false,
          "start": 1176,
          "end": 1198
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "numberSetLike",
            "optional": false,
            "typeAnnotation": null,
            "start": 1199,
            "end": 1212
          }
        ],
        "optional": false,
        "start": 1176,
        "end": 1213
      },
      "directive": null,
      "start": 1176,
      "end": 1214
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 1216,
            "end": 1225
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isDisjointFrom",
            "optional": false,
            "typeAnnotation": null,
            "start": 1226,
            "end": 1240
          },
          "optional": false,
          "computed": false,
          "start": 1216,
          "end": 1240
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [],
            "start": 1241,
            "end": 1243
          }
        ],
        "optional": false,
        "start": 1216,
        "end": 1244
      },
      "directive": null,
      "start": 1216,
      "end": 1245
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 1246,
            "end": 1255
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isDisjointFrom",
            "optional": false,
            "typeAnnotation": null,
            "start": 1256,
            "end": 1270
          },
          "optional": false,
          "computed": false,
          "start": 1246,
          "end": 1270
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Set",
              "optional": false,
              "typeAnnotation": null,
              "start": 1275,
              "end": 1278
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1271,
            "end": 1278
          }
        ],
        "optional": false,
        "start": 1246,
        "end": 1279
      },
      "directive": null,
      "start": 1246,
      "end": 1280
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 1281,
            "end": 1290
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isDisjointFrom",
            "optional": false,
            "typeAnnotation": null,
            "start": 1291,
            "end": 1305
          },
          "optional": false,
          "computed": false,
          "start": 1281,
          "end": 1305
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "stringSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 1306,
            "end": 1315
          }
        ],
        "optional": false,
        "start": 1281,
        "end": 1316
      },
      "directive": null,
      "start": 1281,
      "end": 1317
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 1318,
            "end": 1327
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isDisjointFrom",
            "optional": false,
            "typeAnnotation": null,
            "start": 1328,
            "end": 1342
          },
          "optional": false,
          "computed": false,
          "start": 1318,
          "end": 1342
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "numberMap",
            "optional": false,
            "typeAnnotation": null,
            "start": 1343,
            "end": 1352
          }
        ],
        "optional": false,
        "start": 1318,
        "end": 1353
      },
      "directive": null,
      "start": 1318,
      "end": 1354
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
            "name": "numberSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 1355,
            "end": 1364
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isDisjointFrom",
            "optional": false,
            "typeAnnotation": null,
            "start": 1365,
            "end": 1379
          },
          "optional": false,
          "computed": false,
          "start": 1355,
          "end": 1379
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "numberSetLike",
            "optional": false,
            "typeAnnotation": null,
            "start": 1380,
            "end": 1393
          }
        ],
        "optional": false,
        "start": 1355,
        "end": 1394
      },
      "directive": null,
      "start": 1355,
      "end": 1395
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1395
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "let",
    "start": 0,
    "end": 3,
    "range": [
      0,
      3
    ]
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 4,
    "end": 13,
    "range": [
      4,
      13
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 14,
    "end": 15,
    "range": [
      14,
      15
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 16,
    "end": 19,
    "range": [
      16,
      19
    ]
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 20,
    "end": 23,
    "range": [
      20,
      23
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 23,
    "end": 24,
    "range": [
      23,
      24
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 24,
    "end": 25,
    "range": [
      24,
      25
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 26,
    "end": 27,
    "range": [
      26,
      27
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 28,
    "end": 29,
    "range": [
      28,
      29
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 32,
    "end": 33,
    "range": [
      32,
      33
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 34,
    "end": 35,
    "range": [
      34,
      35
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 37,
    "end": 40,
    "range": [
      37,
      40
    ]
  },
  {
    "type": "Identifier",
    "value": "stringSet",
    "start": 41,
    "end": 50,
    "range": [
      41,
      50
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 53,
    "end": 56,
    "range": [
      53,
      56
    ]
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 57,
    "end": 60,
    "range": [
      57,
      60
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 61,
    "end": 62,
    "range": [
      61,
      62
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 62,
    "end": 65,
    "range": [
      62,
      65
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 67,
    "end": 70,
    "range": [
      67,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 75,
    "end": 78,
    "range": [
      75,
      78
    ]
  },
  {
    "type": "Identifier",
    "value": "numberMap",
    "start": 79,
    "end": 88,
    "range": [
      79,
      88
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 91,
    "end": 94,
    "range": [
      91,
      94
    ]
  },
  {
    "type": "Identifier",
    "value": "Map",
    "start": 95,
    "end": 98,
    "range": [
      95,
      98
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
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
    "type": "Punctuator",
    "value": "]",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 121,
    "end": 124,
    "range": [
      121,
      124
    ]
  },
  {
    "type": "Identifier",
    "value": "numberSetLike",
    "start": 125,
    "end": 138,
    "range": [
      125,
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
    "type": "Punctuator",
    "value": "{",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "Identifier",
    "value": "size",
    "start": 145,
    "end": 149,
    "range": [
      145,
      149
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 149,
    "end": 150,
    "range": [
      149,
      150
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 151,
    "end": 152,
    "range": [
      151,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
    ]
  },
  {
    "type": "Identifier",
    "value": "keys",
    "start": 157,
    "end": 161,
    "range": [
      157,
      161
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 166,
    "end": 171,
    "range": [
      166,
      171
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Identifier",
    "value": "has",
    "start": 179,
    "end": 182,
    "range": [
      179,
      182
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 182,
    "end": 183,
    "range": [
      182,
      183
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 183,
    "end": 184,
    "range": [
      183,
      184
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 188,
    "end": 194,
    "range": [
      188,
      194
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 197,
    "end": 200,
    "range": [
      197,
      200
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 201,
    "end": 202,
    "range": [
      201,
      202
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 203,
    "end": 204,
    "range": [
      203,
      204
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 210,
    "end": 219,
    "range": [
      210,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "Identifier",
    "value": "union",
    "start": 220,
    "end": 225,
    "range": [
      220,
      225
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 226,
    "end": 227,
    "range": [
      226,
      227
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 228,
    "end": 229,
    "range": [
      228,
      229
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 229,
    "end": 230,
    "range": [
      229,
      230
    ]
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 231,
    "end": 240,
    "range": [
      231,
      240
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Identifier",
    "value": "union",
    "start": 241,
    "end": 246,
    "range": [
      241,
      246
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 246,
    "end": 247,
    "range": [
      246,
      247
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 247,
    "end": 250,
    "range": [
      247,
      250
    ]
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 251,
    "end": 254,
    "range": [
      251,
      254
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 255,
    "end": 256,
    "range": [
      255,
      256
    ]
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 257,
    "end": 266,
    "range": [
      257,
      266
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 266,
    "end": 267,
    "range": [
      266,
      267
    ]
  },
  {
    "type": "Identifier",
    "value": "union",
    "start": 267,
    "end": 272,
    "range": [
      267,
      272
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 272,
    "end": 273,
    "range": [
      272,
      273
    ]
  },
  {
    "type": "Identifier",
    "value": "stringSet",
    "start": 273,
    "end": 282,
    "range": [
      273,
      282
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 282,
    "end": 283,
    "range": [
      282,
      283
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 283,
    "end": 284,
    "range": [
      283,
      284
    ]
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 285,
    "end": 294,
    "range": [
      285,
      294
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 294,
    "end": 295,
    "range": [
      294,
      295
    ]
  },
  {
    "type": "Identifier",
    "value": "union",
    "start": 295,
    "end": 300,
    "range": [
      295,
      300
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
    "type": "Identifier",
    "value": "numberMap",
    "start": 301,
    "end": 310,
    "range": [
      301,
      310
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 310,
    "end": 311,
    "range": [
      310,
      311
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 311,
    "end": 312,
    "range": [
      311,
      312
    ]
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 313,
    "end": 322,
    "range": [
      313,
      322
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 322,
    "end": 323,
    "range": [
      322,
      323
    ]
  },
  {
    "type": "Identifier",
    "value": "union",
    "start": 323,
    "end": 328,
    "range": [
      323,
      328
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 328,
    "end": 329,
    "range": [
      328,
      329
    ]
  },
  {
    "type": "Identifier",
    "value": "numberSetLike",
    "start": 329,
    "end": 342,
    "range": [
      329,
      342
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 342,
    "end": 343,
    "range": [
      342,
      343
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 343,
    "end": 344,
    "range": [
      343,
      344
    ]
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 346,
    "end": 355,
    "range": [
      346,
      355
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 355,
    "end": 356,
    "range": [
      355,
      356
    ]
  },
  {
    "type": "Identifier",
    "value": "intersection",
    "start": 356,
    "end": 368,
    "range": [
      356,
      368
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 368,
    "end": 369,
    "range": [
      368,
      369
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 369,
    "end": 370,
    "range": [
      369,
      370
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 370,
    "end": 371,
    "range": [
      370,
      371
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 371,
    "end": 372,
    "range": [
      371,
      372
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 372,
    "end": 373,
    "range": [
      372,
      373
    ]
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 374,
    "end": 383,
    "range": [
      374,
      383
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 383,
    "end": 384,
    "range": [
      383,
      384
    ]
  },
  {
    "type": "Identifier",
    "value": "intersection",
    "start": 384,
    "end": 396,
    "range": [
      384,
      396
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 396,
    "end": 397,
    "range": [
      396,
      397
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 397,
    "end": 400,
    "range": [
      397,
      400
    ]
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 401,
    "end": 404,
    "range": [
      401,
      404
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 404,
    "end": 405,
    "range": [
      404,
      405
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 405,
    "end": 406,
    "range": [
      405,
      406
    ]
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 407,
    "end": 416,
    "range": [
      407,
      416
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 416,
    "end": 417,
    "range": [
      416,
      417
    ]
  },
  {
    "type": "Identifier",
    "value": "intersection",
    "start": 417,
    "end": 429,
    "range": [
      417,
      429
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 429,
    "end": 430,
    "range": [
      429,
      430
    ]
  },
  {
    "type": "Identifier",
    "value": "stringSet",
    "start": 430,
    "end": 439,
    "range": [
      430,
      439
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 439,
    "end": 440,
    "range": [
      439,
      440
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 440,
    "end": 441,
    "range": [
      440,
      441
    ]
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 442,
    "end": 451,
    "range": [
      442,
      451
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 451,
    "end": 452,
    "range": [
      451,
      452
    ]
  },
  {
    "type": "Identifier",
    "value": "intersection",
    "start": 452,
    "end": 464,
    "range": [
      452,
      464
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 464,
    "end": 465,
    "range": [
      464,
      465
    ]
  },
  {
    "type": "Identifier",
    "value": "numberMap",
    "start": 465,
    "end": 474,
    "range": [
      465,
      474
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 474,
    "end": 475,
    "range": [
      474,
      475
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 475,
    "end": 476,
    "range": [
      475,
      476
    ]
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 477,
    "end": 486,
    "range": [
      477,
      486
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 486,
    "end": 487,
    "range": [
      486,
      487
    ]
  },
  {
    "type": "Identifier",
    "value": "intersection",
    "start": 487,
    "end": 499,
    "range": [
      487,
      499
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 499,
    "end": 500,
    "range": [
      499,
      500
    ]
  },
  {
    "type": "Identifier",
    "value": "numberSetLike",
    "start": 500,
    "end": 513,
    "range": [
      500,
      513
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 513,
    "end": 514,
    "range": [
      513,
      514
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 514,
    "end": 515,
    "range": [
      514,
      515
    ]
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 517,
    "end": 526,
    "range": [
      517,
      526
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 526,
    "end": 527,
    "range": [
      526,
      527
    ]
  },
  {
    "type": "Identifier",
    "value": "difference",
    "start": 527,
    "end": 537,
    "range": [
      527,
      537
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 537,
    "end": 538,
    "range": [
      537,
      538
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 538,
    "end": 539,
    "range": [
      538,
      539
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 539,
    "end": 540,
    "range": [
      539,
      540
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 540,
    "end": 541,
    "range": [
      540,
      541
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 541,
    "end": 542,
    "range": [
      541,
      542
    ]
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 543,
    "end": 552,
    "range": [
      543,
      552
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 552,
    "end": 553,
    "range": [
      552,
      553
    ]
  },
  {
    "type": "Identifier",
    "value": "difference",
    "start": 553,
    "end": 563,
    "range": [
      553,
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
    "type": "Keyword",
    "value": "new",
    "start": 564,
    "end": 567,
    "range": [
      564,
      567
    ]
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 568,
    "end": 571,
    "range": [
      568,
      571
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 571,
    "end": 572,
    "range": [
      571,
      572
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 572,
    "end": 573,
    "range": [
      572,
      573
    ]
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 574,
    "end": 583,
    "range": [
      574,
      583
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 583,
    "end": 584,
    "range": [
      583,
      584
    ]
  },
  {
    "type": "Identifier",
    "value": "difference",
    "start": 584,
    "end": 594,
    "range": [
      584,
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
    "type": "Identifier",
    "value": "stringSet",
    "start": 595,
    "end": 604,
    "range": [
      595,
      604
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 604,
    "end": 605,
    "range": [
      604,
      605
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 605,
    "end": 606,
    "range": [
      605,
      606
    ]
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 607,
    "end": 616,
    "range": [
      607,
      616
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 616,
    "end": 617,
    "range": [
      616,
      617
    ]
  },
  {
    "type": "Identifier",
    "value": "difference",
    "start": 617,
    "end": 627,
    "range": [
      617,
      627
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 627,
    "end": 628,
    "range": [
      627,
      628
    ]
  },
  {
    "type": "Identifier",
    "value": "numberMap",
    "start": 628,
    "end": 637,
    "range": [
      628,
      637
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 637,
    "end": 638,
    "range": [
      637,
      638
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 638,
    "end": 639,
    "range": [
      638,
      639
    ]
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 640,
    "end": 649,
    "range": [
      640,
      649
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 649,
    "end": 650,
    "range": [
      649,
      650
    ]
  },
  {
    "type": "Identifier",
    "value": "difference",
    "start": 650,
    "end": 660,
    "range": [
      650,
      660
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 660,
    "end": 661,
    "range": [
      660,
      661
    ]
  },
  {
    "type": "Identifier",
    "value": "numberSetLike",
    "start": 661,
    "end": 674,
    "range": [
      661,
      674
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 674,
    "end": 675,
    "range": [
      674,
      675
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 675,
    "end": 676,
    "range": [
      675,
      676
    ]
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 678,
    "end": 687,
    "range": [
      678,
      687
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 687,
    "end": 688,
    "range": [
      687,
      688
    ]
  },
  {
    "type": "Identifier",
    "value": "symmetricDifference",
    "start": 688,
    "end": 707,
    "range": [
      688,
      707
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 707,
    "end": 708,
    "range": [
      707,
      708
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 708,
    "end": 709,
    "range": [
      708,
      709
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 709,
    "end": 710,
    "range": [
      709,
      710
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 710,
    "end": 711,
    "range": [
      710,
      711
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 711,
    "end": 712,
    "range": [
      711,
      712
    ]
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 713,
    "end": 722,
    "range": [
      713,
      722
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 722,
    "end": 723,
    "range": [
      722,
      723
    ]
  },
  {
    "type": "Identifier",
    "value": "symmetricDifference",
    "start": 723,
    "end": 742,
    "range": [
      723,
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
    "type": "Keyword",
    "value": "new",
    "start": 743,
    "end": 746,
    "range": [
      743,
      746
    ]
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 747,
    "end": 750,
    "range": [
      747,
      750
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 750,
    "end": 751,
    "range": [
      750,
      751
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 751,
    "end": 752,
    "range": [
      751,
      752
    ]
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 753,
    "end": 762,
    "range": [
      753,
      762
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 762,
    "end": 763,
    "range": [
      762,
      763
    ]
  },
  {
    "type": "Identifier",
    "value": "symmetricDifference",
    "start": 763,
    "end": 782,
    "range": [
      763,
      782
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 782,
    "end": 783,
    "range": [
      782,
      783
    ]
  },
  {
    "type": "Identifier",
    "value": "stringSet",
    "start": 783,
    "end": 792,
    "range": [
      783,
      792
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 792,
    "end": 793,
    "range": [
      792,
      793
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 793,
    "end": 794,
    "range": [
      793,
      794
    ]
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 795,
    "end": 804,
    "range": [
      795,
      804
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 804,
    "end": 805,
    "range": [
      804,
      805
    ]
  },
  {
    "type": "Identifier",
    "value": "symmetricDifference",
    "start": 805,
    "end": 824,
    "range": [
      805,
      824
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 824,
    "end": 825,
    "range": [
      824,
      825
    ]
  },
  {
    "type": "Identifier",
    "value": "numberMap",
    "start": 825,
    "end": 834,
    "range": [
      825,
      834
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 834,
    "end": 835,
    "range": [
      834,
      835
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 835,
    "end": 836,
    "range": [
      835,
      836
    ]
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 837,
    "end": 846,
    "range": [
      837,
      846
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 846,
    "end": 847,
    "range": [
      846,
      847
    ]
  },
  {
    "type": "Identifier",
    "value": "symmetricDifference",
    "start": 847,
    "end": 866,
    "range": [
      847,
      866
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 866,
    "end": 867,
    "range": [
      866,
      867
    ]
  },
  {
    "type": "Identifier",
    "value": "numberSetLike",
    "start": 867,
    "end": 880,
    "range": [
      867,
      880
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 880,
    "end": 881,
    "range": [
      880,
      881
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 881,
    "end": 882,
    "range": [
      881,
      882
    ]
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 884,
    "end": 893,
    "range": [
      884,
      893
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 893,
    "end": 894,
    "range": [
      893,
      894
    ]
  },
  {
    "type": "Identifier",
    "value": "isSubsetOf",
    "start": 894,
    "end": 904,
    "range": [
      894,
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
    "value": "[",
    "start": 905,
    "end": 906,
    "range": [
      905,
      906
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 906,
    "end": 907,
    "range": [
      906,
      907
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 907,
    "end": 908,
    "range": [
      907,
      908
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 908,
    "end": 909,
    "range": [
      908,
      909
    ]
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 910,
    "end": 919,
    "range": [
      910,
      919
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 919,
    "end": 920,
    "range": [
      919,
      920
    ]
  },
  {
    "type": "Identifier",
    "value": "isSubsetOf",
    "start": 920,
    "end": 930,
    "range": [
      920,
      930
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 930,
    "end": 931,
    "range": [
      930,
      931
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 931,
    "end": 934,
    "range": [
      931,
      934
    ]
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 935,
    "end": 938,
    "range": [
      935,
      938
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 938,
    "end": 939,
    "range": [
      938,
      939
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 939,
    "end": 940,
    "range": [
      939,
      940
    ]
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 941,
    "end": 950,
    "range": [
      941,
      950
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 950,
    "end": 951,
    "range": [
      950,
      951
    ]
  },
  {
    "type": "Identifier",
    "value": "isSubsetOf",
    "start": 951,
    "end": 961,
    "range": [
      951,
      961
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 961,
    "end": 962,
    "range": [
      961,
      962
    ]
  },
  {
    "type": "Identifier",
    "value": "stringSet",
    "start": 962,
    "end": 971,
    "range": [
      962,
      971
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 971,
    "end": 972,
    "range": [
      971,
      972
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 972,
    "end": 973,
    "range": [
      972,
      973
    ]
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 974,
    "end": 983,
    "range": [
      974,
      983
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 983,
    "end": 984,
    "range": [
      983,
      984
    ]
  },
  {
    "type": "Identifier",
    "value": "isSubsetOf",
    "start": 984,
    "end": 994,
    "range": [
      984,
      994
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 994,
    "end": 995,
    "range": [
      994,
      995
    ]
  },
  {
    "type": "Identifier",
    "value": "numberMap",
    "start": 995,
    "end": 1004,
    "range": [
      995,
      1004
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1004,
    "end": 1005,
    "range": [
      1004,
      1005
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1005,
    "end": 1006,
    "range": [
      1005,
      1006
    ]
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 1007,
    "end": 1016,
    "range": [
      1007,
      1016
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1016,
    "end": 1017,
    "range": [
      1016,
      1017
    ]
  },
  {
    "type": "Identifier",
    "value": "isSubsetOf",
    "start": 1017,
    "end": 1027,
    "range": [
      1017,
      1027
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1027,
    "end": 1028,
    "range": [
      1027,
      1028
    ]
  },
  {
    "type": "Identifier",
    "value": "numberSetLike",
    "start": 1028,
    "end": 1041,
    "range": [
      1028,
      1041
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1041,
    "end": 1042,
    "range": [
      1041,
      1042
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1042,
    "end": 1043,
    "range": [
      1042,
      1043
    ]
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 1045,
    "end": 1054,
    "range": [
      1045,
      1054
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1054,
    "end": 1055,
    "range": [
      1054,
      1055
    ]
  },
  {
    "type": "Identifier",
    "value": "isSupersetOf",
    "start": 1055,
    "end": 1067,
    "range": [
      1055,
      1067
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1067,
    "end": 1068,
    "range": [
      1067,
      1068
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1068,
    "end": 1069,
    "range": [
      1068,
      1069
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": ";",
    "start": 1071,
    "end": 1072,
    "range": [
      1071,
      1072
    ]
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 1073,
    "end": 1082,
    "range": [
      1073,
      1082
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1082,
    "end": 1083,
    "range": [
      1082,
      1083
    ]
  },
  {
    "type": "Identifier",
    "value": "isSupersetOf",
    "start": 1083,
    "end": 1095,
    "range": [
      1083,
      1095
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1095,
    "end": 1096,
    "range": [
      1095,
      1096
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1096,
    "end": 1099,
    "range": [
      1096,
      1099
    ]
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 1100,
    "end": 1103,
    "range": [
      1100,
      1103
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1103,
    "end": 1104,
    "range": [
      1103,
      1104
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1104,
    "end": 1105,
    "range": [
      1104,
      1105
    ]
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 1106,
    "end": 1115,
    "range": [
      1106,
      1115
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1115,
    "end": 1116,
    "range": [
      1115,
      1116
    ]
  },
  {
    "type": "Identifier",
    "value": "isSupersetOf",
    "start": 1116,
    "end": 1128,
    "range": [
      1116,
      1128
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1128,
    "end": 1129,
    "range": [
      1128,
      1129
    ]
  },
  {
    "type": "Identifier",
    "value": "stringSet",
    "start": 1129,
    "end": 1138,
    "range": [
      1129,
      1138
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1138,
    "end": 1139,
    "range": [
      1138,
      1139
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1139,
    "end": 1140,
    "range": [
      1139,
      1140
    ]
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 1141,
    "end": 1150,
    "range": [
      1141,
      1150
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1150,
    "end": 1151,
    "range": [
      1150,
      1151
    ]
  },
  {
    "type": "Identifier",
    "value": "isSupersetOf",
    "start": 1151,
    "end": 1163,
    "range": [
      1151,
      1163
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1163,
    "end": 1164,
    "range": [
      1163,
      1164
    ]
  },
  {
    "type": "Identifier",
    "value": "numberMap",
    "start": 1164,
    "end": 1173,
    "range": [
      1164,
      1173
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1173,
    "end": 1174,
    "range": [
      1173,
      1174
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1174,
    "end": 1175,
    "range": [
      1174,
      1175
    ]
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 1176,
    "end": 1185,
    "range": [
      1176,
      1185
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1185,
    "end": 1186,
    "range": [
      1185,
      1186
    ]
  },
  {
    "type": "Identifier",
    "value": "isSupersetOf",
    "start": 1186,
    "end": 1198,
    "range": [
      1186,
      1198
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1198,
    "end": 1199,
    "range": [
      1198,
      1199
    ]
  },
  {
    "type": "Identifier",
    "value": "numberSetLike",
    "start": 1199,
    "end": 1212,
    "range": [
      1199,
      1212
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1212,
    "end": 1213,
    "range": [
      1212,
      1213
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1213,
    "end": 1214,
    "range": [
      1213,
      1214
    ]
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 1216,
    "end": 1225,
    "range": [
      1216,
      1225
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1225,
    "end": 1226,
    "range": [
      1225,
      1226
    ]
  },
  {
    "type": "Identifier",
    "value": "isDisjointFrom",
    "start": 1226,
    "end": 1240,
    "range": [
      1226,
      1240
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1240,
    "end": 1241,
    "range": [
      1240,
      1241
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1241,
    "end": 1242,
    "range": [
      1241,
      1242
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": ";",
    "start": 1244,
    "end": 1245,
    "range": [
      1244,
      1245
    ]
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 1246,
    "end": 1255,
    "range": [
      1246,
      1255
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1255,
    "end": 1256,
    "range": [
      1255,
      1256
    ]
  },
  {
    "type": "Identifier",
    "value": "isDisjointFrom",
    "start": 1256,
    "end": 1270,
    "range": [
      1256,
      1270
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1270,
    "end": 1271,
    "range": [
      1270,
      1271
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1271,
    "end": 1274,
    "range": [
      1271,
      1274
    ]
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 1275,
    "end": 1278,
    "range": [
      1275,
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
    "value": ";",
    "start": 1279,
    "end": 1280,
    "range": [
      1279,
      1280
    ]
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 1281,
    "end": 1290,
    "range": [
      1281,
      1290
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1290,
    "end": 1291,
    "range": [
      1290,
      1291
    ]
  },
  {
    "type": "Identifier",
    "value": "isDisjointFrom",
    "start": 1291,
    "end": 1305,
    "range": [
      1291,
      1305
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1305,
    "end": 1306,
    "range": [
      1305,
      1306
    ]
  },
  {
    "type": "Identifier",
    "value": "stringSet",
    "start": 1306,
    "end": 1315,
    "range": [
      1306,
      1315
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1315,
    "end": 1316,
    "range": [
      1315,
      1316
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1316,
    "end": 1317,
    "range": [
      1316,
      1317
    ]
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 1318,
    "end": 1327,
    "range": [
      1318,
      1327
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1327,
    "end": 1328,
    "range": [
      1327,
      1328
    ]
  },
  {
    "type": "Identifier",
    "value": "isDisjointFrom",
    "start": 1328,
    "end": 1342,
    "range": [
      1328,
      1342
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1342,
    "end": 1343,
    "range": [
      1342,
      1343
    ]
  },
  {
    "type": "Identifier",
    "value": "numberMap",
    "start": 1343,
    "end": 1352,
    "range": [
      1343,
      1352
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1352,
    "end": 1353,
    "range": [
      1352,
      1353
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1353,
    "end": 1354,
    "range": [
      1353,
      1354
    ]
  },
  {
    "type": "Identifier",
    "value": "numberSet",
    "start": 1355,
    "end": 1364,
    "range": [
      1355,
      1364
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1364,
    "end": 1365,
    "range": [
      1364,
      1365
    ]
  },
  {
    "type": "Identifier",
    "value": "isDisjointFrom",
    "start": 1365,
    "end": 1379,
    "range": [
      1365,
      1379
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1379,
    "end": 1380,
    "range": [
      1379,
      1380
    ]
  },
  {
    "type": "Identifier",
    "value": "numberSetLike",
    "start": 1380,
    "end": 1393,
    "range": [
      1380,
      1393
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1393,
    "end": 1394,
    "range": [
      1393,
      1394
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1394,
    "end": 1395,
    "range": [
      1394,
      1395
    ]
  }
]
```
