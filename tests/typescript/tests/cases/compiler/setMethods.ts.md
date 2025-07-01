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
