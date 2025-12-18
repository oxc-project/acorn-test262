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
        "name": "testPromise1",
        "optional": false,
        "typeAnnotation": null,
        "start": 126,
        "end": 138
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 147,
                  "end": 154
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 155,
                  "end": 158
                },
                "optional": false,
                "computed": false,
                "start": 147,
                "end": 158
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "Nope",
                  "raw": "\"Nope\"",
                  "start": 159,
                  "end": 165
                }
              ],
              "optional": false,
              "start": 147,
              "end": 166
            },
            "directive": null,
            "start": 147,
            "end": 167
          }
        ],
        "start": 141,
        "end": 169
      },
      "expression": false,
      "start": 117,
      "end": 169
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testPromise2",
        "optional": false,
        "typeAnnotation": null,
        "start": 226,
        "end": 238
      },
      "generator": false,
      "async": true,
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
              "type": "Literal",
              "value": "asd",
              "raw": "\"asd\"",
              "start": 254,
              "end": 259
            },
            "start": 247,
            "end": 260
          }
        ],
        "start": 241,
        "end": 262
      },
      "expression": false,
      "start": 211,
      "end": 262
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
            "name": "testPromise3",
            "optional": false,
            "typeAnnotation": null,
            "start": 268,
            "end": 280
          },
          "init": {
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 340,
                        "end": 347
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 348,
                        "end": 351
                      },
                      "optional": false,
                      "computed": false,
                      "start": 340,
                      "end": 351
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "test",
                        "raw": "\"test\"",
                        "start": 352,
                        "end": 358
                      }
                    ],
                    "optional": false,
                    "start": 340,
                    "end": 359
                  },
                  "directive": null,
                  "start": 340,
                  "end": 359
                }
              ],
              "start": 334,
              "end": 361
            },
            "expression": false,
            "start": 323,
            "end": 361
          },
          "definite": false,
          "start": 268,
          "end": 361
        }
      ],
      "declare": false,
      "start": 264,
      "end": 361
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
            "name": "testPromise4",
            "optional": false,
            "typeAnnotation": null,
            "start": 407,
            "end": 419
          },
          "init": {
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 439,
                        "end": 446
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 447,
                        "end": 450
                      },
                      "optional": false,
                      "computed": false,
                      "start": 439,
                      "end": 450
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "test",
                        "raw": "\"test\"",
                        "start": 451,
                        "end": 457
                      }
                    ],
                    "optional": false,
                    "start": 439,
                    "end": 458
                  },
                  "directive": null,
                  "start": 439,
                  "end": 458
                }
              ],
              "start": 433,
              "end": 460
            },
            "expression": false,
            "start": 422,
            "end": 460
          },
          "definite": false,
          "start": 407,
          "end": 460
        }
      ],
      "declare": false,
      "start": 403,
      "end": 460
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testNever1",
        "optional": false,
        "typeAnnotation": null,
        "start": 574,
        "end": 584
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 587,
        "end": 591
      },
      "expression": false,
      "start": 565,
      "end": 591
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testNever2",
        "optional": false,
        "typeAnnotation": null,
        "start": 646,
        "end": 656
      },
      "generator": false,
      "async": true,
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
              "type": "Literal",
              "value": "asd",
              "raw": "\"asd\"",
              "start": 672,
              "end": 677
            },
            "start": 665,
            "end": 678
          }
        ],
        "start": 659,
        "end": 680
      },
      "expression": false,
      "start": 631,
      "end": 680
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
            "name": "testNever3",
            "optional": false,
            "typeAnnotation": null,
            "start": 686,
            "end": 696
          },
          "init": {
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 754,
                        "end": 761
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 762,
                        "end": 765
                      },
                      "optional": false,
                      "computed": false,
                      "start": 754,
                      "end": 765
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "test",
                        "raw": "\"test\"",
                        "start": 766,
                        "end": 772
                      }
                    ],
                    "optional": false,
                    "start": 754,
                    "end": 773
                  },
                  "directive": null,
                  "start": 754,
                  "end": 773
                }
              ],
              "start": 748,
              "end": 775
            },
            "expression": false,
            "start": 737,
            "end": 775
          },
          "definite": false,
          "start": 686,
          "end": 775
        }
      ],
      "declare": false,
      "start": 682,
      "end": 775
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
            "name": "testNever4",
            "optional": false,
            "typeAnnotation": null,
            "start": 819,
            "end": 829
          },
          "init": {
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 849,
                        "end": 856
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 857,
                        "end": 860
                      },
                      "optional": false,
                      "computed": false,
                      "start": 849,
                      "end": 860
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "test",
                        "raw": "\"test\"",
                        "start": 861,
                        "end": 867
                      }
                    ],
                    "optional": false,
                    "start": 849,
                    "end": 868
                  },
                  "directive": null,
                  "start": 849,
                  "end": 868
                }
              ],
              "start": 843,
              "end": 870
            },
            "expression": false,
            "start": 832,
            "end": 870
          },
          "definite": false,
          "start": 819,
          "end": 870
        }
      ],
      "declare": false,
      "start": 815,
      "end": 870
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 117,
  "end": 870
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 117,
    "end": 125,
    "range": [
      117,
      125
    ]
  },
  {
    "type": "Identifier",
    "value": "testPromise1",
    "start": 126,
    "end": 138,
    "range": [
      126,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "console",
    "start": 147,
    "end": 154,
    "range": [
      147,
      154
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 154,
    "end": 155,
    "range": [
      154,
      155
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 155,
    "end": 158,
    "range": [
      155,
      158
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 158,
    "end": 159,
    "range": [
      158,
      159
    ]
  },
  {
    "type": "String",
    "value": "\"Nope\"",
    "start": 159,
    "end": 165,
    "range": [
      159,
      165
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 166,
    "end": 167,
    "range": [
      166,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 168,
    "end": 169,
    "range": [
      168,
      169
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 211,
    "end": 216,
    "range": [
      211,
      216
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 217,
    "end": 225,
    "range": [
      217,
      225
    ]
  },
  {
    "type": "Identifier",
    "value": "testPromise2",
    "start": 226,
    "end": 238,
    "range": [
      226,
      238
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 238,
    "end": 239,
    "range": [
      238,
      239
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 241,
    "end": 242,
    "range": [
      241,
      242
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 247,
    "end": 253,
    "range": [
      247,
      253
    ]
  },
  {
    "type": "String",
    "value": "\"asd\"",
    "start": 254,
    "end": 259,
    "range": [
      254,
      259
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 259,
    "end": 260,
    "range": [
      259,
      260
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 261,
    "end": 262,
    "range": [
      261,
      262
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 264,
    "end": 267,
    "range": [
      264,
      267
    ]
  },
  {
    "type": "Identifier",
    "value": "testPromise3",
    "start": 268,
    "end": 280,
    "range": [
      268,
      280
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 281,
    "end": 282,
    "range": [
      281,
      282
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 323,
    "end": 331,
    "range": [
      323,
      331
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 331,
    "end": 332,
    "range": [
      331,
      332
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 332,
    "end": 333,
    "range": [
      332,
      333
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 334,
    "end": 335,
    "range": [
      334,
      335
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 340,
    "end": 347,
    "range": [
      340,
      347
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 347,
    "end": 348,
    "range": [
      347,
      348
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 348,
    "end": 351,
    "range": [
      348,
      351
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 351,
    "end": 352,
    "range": [
      351,
      352
    ]
  },
  {
    "type": "String",
    "value": "\"test\"",
    "start": 352,
    "end": 358,
    "range": [
      352,
      358
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 358,
    "end": 359,
    "range": [
      358,
      359
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 360,
    "end": 361,
    "range": [
      360,
      361
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 403,
    "end": 406,
    "range": [
      403,
      406
    ]
  },
  {
    "type": "Identifier",
    "value": "testPromise4",
    "start": 407,
    "end": 419,
    "range": [
      407,
      419
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 422,
    "end": 430,
    "range": [
      422,
      430
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 430,
    "end": 431,
    "range": [
      430,
      431
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 431,
    "end": 432,
    "range": [
      431,
      432
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 433,
    "end": 434,
    "range": [
      433,
      434
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 439,
    "end": 446,
    "range": [
      439,
      446
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 446,
    "end": 447,
    "range": [
      446,
      447
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 447,
    "end": 450,
    "range": [
      447,
      450
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 450,
    "end": 451,
    "range": [
      450,
      451
    ]
  },
  {
    "type": "String",
    "value": "\"test\"",
    "start": 451,
    "end": 457,
    "range": [
      451,
      457
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 457,
    "end": 458,
    "range": [
      457,
      458
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 459,
    "end": 460,
    "range": [
      459,
      460
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 565,
    "end": 573,
    "range": [
      565,
      573
    ]
  },
  {
    "type": "Identifier",
    "value": "testNever1",
    "start": 574,
    "end": 584,
    "range": [
      574,
      584
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 584,
    "end": 585,
    "range": [
      584,
      585
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 585,
    "end": 586,
    "range": [
      585,
      586
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 587,
    "end": 588,
    "range": [
      587,
      588
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 590,
    "end": 591,
    "range": [
      590,
      591
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 631,
    "end": 636,
    "range": [
      631,
      636
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 637,
    "end": 645,
    "range": [
      637,
      645
    ]
  },
  {
    "type": "Identifier",
    "value": "testNever2",
    "start": 646,
    "end": 656,
    "range": [
      646,
      656
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 656,
    "end": 657,
    "range": [
      656,
      657
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 657,
    "end": 658,
    "range": [
      657,
      658
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 659,
    "end": 660,
    "range": [
      659,
      660
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 665,
    "end": 671,
    "range": [
      665,
      671
    ]
  },
  {
    "type": "String",
    "value": "\"asd\"",
    "start": 672,
    "end": 677,
    "range": [
      672,
      677
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 677,
    "end": 678,
    "range": [
      677,
      678
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 679,
    "end": 680,
    "range": [
      679,
      680
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 682,
    "end": 685,
    "range": [
      682,
      685
    ]
  },
  {
    "type": "Identifier",
    "value": "testNever3",
    "start": 686,
    "end": 696,
    "range": [
      686,
      696
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 697,
    "end": 698,
    "range": [
      697,
      698
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 737,
    "end": 745,
    "range": [
      737,
      745
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 745,
    "end": 746,
    "range": [
      745,
      746
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 746,
    "end": 747,
    "range": [
      746,
      747
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 748,
    "end": 749,
    "range": [
      748,
      749
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 754,
    "end": 761,
    "range": [
      754,
      761
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 761,
    "end": 762,
    "range": [
      761,
      762
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 762,
    "end": 765,
    "range": [
      762,
      765
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
    "type": "String",
    "value": "\"test\"",
    "start": 766,
    "end": 772,
    "range": [
      766,
      772
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 772,
    "end": 773,
    "range": [
      772,
      773
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 774,
    "end": 775,
    "range": [
      774,
      775
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 815,
    "end": 818,
    "range": [
      815,
      818
    ]
  },
  {
    "type": "Identifier",
    "value": "testNever4",
    "start": 819,
    "end": 829,
    "range": [
      819,
      829
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 830,
    "end": 831,
    "range": [
      830,
      831
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 832,
    "end": 840,
    "range": [
      832,
      840
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 840,
    "end": 841,
    "range": [
      840,
      841
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 841,
    "end": 842,
    "range": [
      841,
      842
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 843,
    "end": 844,
    "range": [
      843,
      844
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 849,
    "end": 856,
    "range": [
      849,
      856
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 856,
    "end": 857,
    "range": [
      856,
      857
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 857,
    "end": 860,
    "range": [
      857,
      860
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 860,
    "end": 861,
    "range": [
      860,
      861
    ]
  },
  {
    "type": "String",
    "value": "\"test\"",
    "start": 861,
    "end": 867,
    "range": [
      861,
      867
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 867,
    "end": 868,
    "range": [
      867,
      868
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 869,
    "end": 870,
    "range": [
      869,
      870
    ]
  }
]
```
