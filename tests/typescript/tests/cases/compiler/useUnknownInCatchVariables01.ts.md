__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TryStatement",
      "block": {
        "type": "BlockStatement",
        "body": [],
        "start": 4,
        "end": 18
      },
      "handler": {
        "type": "CatchClause",
        "param": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null,
          "start": 26,
          "end": 27
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "UnaryExpression",
                "operator": "void",
                "argument": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 54,
                      "end": 55
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toUpperCase",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 56,
                      "end": 67
                    },
                    "optional": false,
                    "computed": false,
                    "start": 54,
                    "end": 67
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 54,
                  "end": 69
                },
                "prefix": true,
                "start": 49,
                "end": 69
              },
              "directive": null,
              "start": 49,
              "end": 70
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "UnaryExpression",
                "operator": "void",
                "argument": {
                  "type": "UpdateExpression",
                  "operator": "++",
                  "prefix": false,
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 80,
                    "end": 81
                  },
                  "start": 80,
                  "end": 83
                },
                "prefix": true,
                "start": 75,
                "end": 83
              },
              "directive": null,
              "start": 75,
              "end": 84
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "UnaryExpression",
                "operator": "void",
                "argument": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 94,
                    "end": 95
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 94,
                  "end": 97
                },
                "prefix": true,
                "start": 89,
                "end": 97
              },
              "directive": null,
              "start": 89,
              "end": 98
            },
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
                    "name": "e",
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
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 121,
                  "end": 129
                },
                "start": 108,
                "end": 129
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
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 216,
                          "end": 223
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 224,
                          "end": 227
                        },
                        "optional": false,
                        "computed": false,
                        "start": 216,
                        "end": 227
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "e",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 228,
                              "end": 229
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "toUpperCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 230,
                              "end": 241
                            },
                            "optional": false,
                            "computed": false,
                            "start": 228,
                            "end": 241
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 228,
                          "end": 243
                        }
                      ],
                      "optional": false,
                      "start": 216,
                      "end": 244
                    },
                    "directive": null,
                    "start": 216,
                    "end": 245
                  }
                ],
                "start": 131,
                "end": 251
              },
              "alternate": null,
              "start": 104,
              "end": 251
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 260,
                  "end": 261
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Error",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 273,
                  "end": 278
                },
                "start": 260,
                "end": 278
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "ChainExpression",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "e",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 290,
                              "end": 291
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "stack",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 292,
                              "end": 297
                            },
                            "optional": false,
                            "computed": false,
                            "start": 290,
                            "end": 297
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "toUpperCase",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 299,
                            "end": 310
                          },
                          "optional": true,
                          "computed": false,
                          "start": 290,
                          "end": 310
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 290,
                        "end": 312
                      },
                      "start": 290,
                      "end": 312
                    },
                    "directive": null,
                    "start": 290,
                    "end": 313
                  }
                ],
                "start": 280,
                "end": 319
              },
              "alternate": null,
              "start": 256,
              "end": 319
            },
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
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 335,
                    "end": 336
                  },
                  "prefix": true,
                  "start": 328,
                  "end": 336
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "\"number\"",
                  "start": 341,
                  "end": 349
                },
                "start": 328,
                "end": 349
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
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 361,
                          "end": 362
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toExponential",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 363,
                          "end": 376
                        },
                        "optional": false,
                        "computed": false,
                        "start": 361,
                        "end": 376
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 361,
                      "end": 378
                    },
                    "directive": null,
                    "start": 361,
                    "end": 379
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "e",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 388,
                        "end": 389
                      },
                      "start": 388,
                      "end": 391
                    },
                    "directive": null,
                    "start": 388,
                    "end": 392
                  }
                ],
                "start": 351,
                "end": 398
              },
              "alternate": null,
              "start": 324,
              "end": 398
            }
          ],
          "start": 29,
          "end": 400
        },
        "start": 19,
        "end": 400
      },
      "finalizer": null,
      "start": 0,
      "end": 400
    },
    {
      "type": "TryStatement",
      "block": {
        "type": "BlockStatement",
        "body": [],
        "start": 407,
        "end": 421
      },
      "handler": {
        "type": "CatchClause",
        "param": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 432,
              "end": 435
            },
            "start": 430,
            "end": 435
          },
          "start": 429,
          "end": 435
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "UnaryExpression",
                "operator": "void",
                "argument": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 472,
                      "end": 473
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toUpperCase",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 474,
                      "end": 485
                    },
                    "optional": false,
                    "computed": false,
                    "start": 472,
                    "end": 485
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 472,
                  "end": 487
                },
                "prefix": true,
                "start": 467,
                "end": 487
              },
              "directive": null,
              "start": 467,
              "end": 488
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "UnaryExpression",
                "operator": "void",
                "argument": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 498,
                      "end": 499
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toExponential",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 500,
                      "end": 513
                    },
                    "optional": false,
                    "computed": false,
                    "start": 498,
                    "end": 513
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 498,
                  "end": 515
                },
                "prefix": true,
                "start": 493,
                "end": 515
              },
              "directive": null,
              "start": 493,
              "end": 516
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "UnaryExpression",
                "operator": "void",
                "argument": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 526,
                    "end": 527
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 526,
                  "end": 529
                },
                "prefix": true,
                "start": 521,
                "end": 529
              },
              "directive": null,
              "start": 521,
              "end": 530
            }
          ],
          "start": 437,
          "end": 532
        },
        "start": 422,
        "end": 532
      },
      "finalizer": null,
      "start": 403,
      "end": 532
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 532
}
```
