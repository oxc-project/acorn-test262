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
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 12
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
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 16,
              "end": 23
            },
            "start": 14,
            "end": 23
          },
          "start": 13,
          "end": 23
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 28,
              "end": 35
            },
            "start": 26,
            "end": 35
          },
          "start": 25,
          "end": 35
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 54,
                  "end": 55
                },
                "prefix": true,
                "start": 47,
                "end": 55
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "object",
                "raw": "'object'",
                "start": 60,
                "end": 68
              },
              "start": 47,
              "end": 68
            },
            "consequent": {
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 80,
                        "end": 81
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 82,
                        "end": 90
                      },
                      "optional": false,
                      "computed": false,
                      "start": 80,
                      "end": 90
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 80,
                    "end": 92
                  },
                  "directive": null,
                  "start": 80,
                  "end": 93
                }
              ],
              "start": 70,
              "end": 99
            },
            "alternate": null,
            "start": 43,
            "end": 99
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 115,
                    "end": 116
                  },
                  "prefix": true,
                  "start": 108,
                  "end": 116
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "object",
                  "raw": "'object'",
                  "start": 121,
                  "end": 129
                },
                "start": 108,
                "end": 129
              },
              "operator": "&&",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 133,
                "end": 134
              },
              "start": 108,
              "end": 134
            },
            "consequent": {
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 146,
                        "end": 147
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 148,
                        "end": 156
                      },
                      "optional": false,
                      "computed": false,
                      "start": 146,
                      "end": 156
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 146,
                    "end": 158
                  },
                  "directive": null,
                  "start": 146,
                  "end": 159
                }
              ],
              "start": 136,
              "end": 165
            },
            "alternate": null,
            "start": 104,
            "end": 165
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 174,
                "end": 175
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 186,
                    "end": 187
                  },
                  "prefix": true,
                  "start": 179,
                  "end": 187
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "object",
                  "raw": "'object'",
                  "start": 192,
                  "end": 200
                },
                "start": 179,
                "end": 200
              },
              "start": 174,
              "end": 200
            },
            "consequent": {
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 212,
                        "end": 213
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 214,
                        "end": 222
                      },
                      "optional": false,
                      "computed": false,
                      "start": 212,
                      "end": 222
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 212,
                    "end": 224
                  },
                  "directive": null,
                  "start": 212,
                  "end": 225
                }
              ],
              "start": 202,
              "end": 231
            },
            "alternate": null,
            "start": 170,
            "end": 231
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 240,
                  "end": 241
                },
                "operator": "&&",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 245,
                  "end": 246
                },
                "start": 240,
                "end": 246
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 257,
                    "end": 258
                  },
                  "prefix": true,
                  "start": 250,
                  "end": 258
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "object",
                  "raw": "'object'",
                  "start": 263,
                  "end": 271
                },
                "start": 250,
                "end": 271
              },
              "start": 240,
              "end": 271
            },
            "consequent": {
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 283,
                        "end": 284
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 285,
                        "end": 293
                      },
                      "optional": false,
                      "computed": false,
                      "start": 283,
                      "end": 293
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 283,
                    "end": 295
                  },
                  "directive": null,
                  "start": 283,
                  "end": 296
                }
              ],
              "start": 273,
              "end": 302
            },
            "alternate": null,
            "start": 236,
            "end": 302
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 311,
                  "end": 312
                },
                "operator": "&&",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 316,
                  "end": 317
                },
                "start": 311,
                "end": 317
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 328,
                    "end": 329
                  },
                  "prefix": true,
                  "start": 321,
                  "end": 329
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "object",
                  "raw": "'object'",
                  "start": 334,
                  "end": 342
                },
                "start": 321,
                "end": 342
              },
              "start": 311,
              "end": 342
            },
            "consequent": {
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 354,
                        "end": 355
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 356,
                        "end": 364
                      },
                      "optional": false,
                      "computed": false,
                      "start": 354,
                      "end": 364
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 354,
                    "end": 366
                  },
                  "directive": null,
                  "start": 354,
                  "end": 367
                }
              ],
              "start": 344,
              "end": 373
            },
            "alternate": null,
            "start": 307,
            "end": 373
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 382,
                    "end": 383
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 387,
                    "end": 388
                  },
                  "start": 382,
                  "end": 388
                },
                "operator": "&&",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 392,
                  "end": 393
                },
                "start": 382,
                "end": 393
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 404,
                    "end": 405
                  },
                  "prefix": true,
                  "start": 397,
                  "end": 405
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "object",
                  "raw": "'object'",
                  "start": 410,
                  "end": 418
                },
                "start": 397,
                "end": 418
              },
              "start": 382,
              "end": 418
            },
            "consequent": {
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 430,
                        "end": 431
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 432,
                        "end": 440
                      },
                      "optional": false,
                      "computed": false,
                      "start": 430,
                      "end": 440
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 430,
                    "end": 442
                  },
                  "directive": null,
                  "start": 430,
                  "end": 443
                }
              ],
              "start": 420,
              "end": 449
            },
            "alternate": null,
            "start": 378,
            "end": 449
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 458,
                        "end": 459
                      },
                      "operator": "&&",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 463,
                        "end": 464
                      },
                      "start": 458,
                      "end": 464
                    },
                    "operator": "&&",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 468,
                      "end": 469
                    },
                    "start": 458,
                    "end": 469
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 473,
                    "end": 474
                  },
                  "start": 458,
                  "end": 474
                },
                "operator": "&&",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 478,
                  "end": 479
                },
                "start": 458,
                "end": 479
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 490,
                    "end": 491
                  },
                  "prefix": true,
                  "start": 483,
                  "end": 491
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "object",
                  "raw": "'object'",
                  "start": 496,
                  "end": 504
                },
                "start": 483,
                "end": 504
              },
              "start": 458,
              "end": 504
            },
            "consequent": {
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 516,
                        "end": 517
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 518,
                        "end": 526
                      },
                      "optional": false,
                      "computed": false,
                      "start": 516,
                      "end": 526
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 516,
                    "end": 528
                  },
                  "directive": null,
                  "start": 516,
                  "end": 529
                }
              ],
              "start": 506,
              "end": 535
            },
            "alternate": null,
            "start": 454,
            "end": 535
          }
        ],
        "start": 37,
        "end": 537
      },
      "expression": false,
      "start": 0,
      "end": 537
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 570,
        "end": 572
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
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 576,
              "end": 583
            },
            "start": 574,
            "end": 583
          },
          "start": 573,
          "end": 583
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 586,
          "end": 589
        },
        "start": 584,
        "end": 589
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 603,
                  "end": 604
                },
                "operator": "&&",
                "right": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 615,
                      "end": 616
                    },
                    "prefix": true,
                    "start": 608,
                    "end": 616
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "object",
                    "raw": "'object'",
                    "start": 621,
                    "end": 629
                  },
                  "start": 608,
                  "end": 629
                },
                "start": 603,
                "end": 629
              },
              "operator": "&&",
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 633,
                    "end": 634
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "hasOwnProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 635,
                    "end": 649
                  },
                  "optional": false,
                  "computed": false,
                  "start": 633,
                  "end": 649
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "x",
                    "raw": "'x'",
                    "start": 650,
                    "end": 653
                  }
                ],
                "optional": false,
                "start": 633,
                "end": 654
              },
              "start": 603,
              "end": 654
            },
            "start": 596,
            "end": 655
          }
        ],
        "start": 590,
        "end": 657
      },
      "expression": false,
      "start": 561,
      "end": 657
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 657
}
```
