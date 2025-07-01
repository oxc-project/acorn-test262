__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bugs",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 23
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 24,
              "end": 29
            },
            "abstract": false,
            "declare": false,
            "start": 16,
            "end": 29
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bug2",
              "optional": false,
              "typeAnnotation": null,
              "start": 148,
              "end": 152
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "message",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 161,
                    "end": 167
                  },
                  "start": 160,
                  "end": 167
                },
                "start": 153,
                "end": 167
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
                  "start": 172,
                  "end": 176
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 177,
                      "end": 180
                    },
                    "start": 177,
                    "end": 182
                  },
                  "start": 176,
                  "end": 182
                },
                "value": null,
                "start": 169,
                "end": 182
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 184,
                "end": 190
              },
              "start": 183,
              "end": 190
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
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 201,
                        "end": 207
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "message",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 209,
                            "end": 216
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "replace",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 217,
                            "end": 224
                          },
                          "optional": false,
                          "computed": false,
                          "start": 209,
                          "end": 224
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": null,
                            "raw": "/\\{(\\d+)\\}/g",
                            "regex": {
                              "pattern": "\\{(\\d+)\\}",
                              "flags": "g"
                            },
                            "start": 225,
                            "end": 237
                          },
                          {
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
                                "name": "match",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 248,
                                "end": 253
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
                                  "start": 258,
                                  "end": 262
                                },
                                "optional": false,
                                "typeAnnotation": null,
                                "value": null,
                                "start": 255,
                                "end": 262
                              }
                            ],
                            "returnType": null,
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
                                        "name": "index",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 276,
                                        "end": 281
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "rest",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 283,
                                          "end": 287
                                        },
                                        "property": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0",
                                          "start": 288,
                                          "end": 289
                                        },
                                        "optional": false,
                                        "computed": true,
                                        "start": 283,
                                        "end": 290
                                      },
                                      "definite": false,
                                      "start": 276,
                                      "end": 290
                                    }
                                  ],
                                  "declare": false,
                                  "start": 272,
                                  "end": 291
                                },
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "ConditionalExpression",
                                    "test": {
                                      "type": "BinaryExpression",
                                      "left": {
                                        "type": "UnaryExpression",
                                        "operator": "typeof",
                                        "argument": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "args",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 312,
                                            "end": 316
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "index",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 317,
                                            "end": 322
                                          },
                                          "optional": false,
                                          "computed": true,
                                          "start": 312,
                                          "end": 323
                                        },
                                        "prefix": true,
                                        "start": 305,
                                        "end": 323
                                      },
                                      "operator": "!==",
                                      "right": {
                                        "type": "Literal",
                                        "value": "undefined",
                                        "raw": "'undefined'",
                                        "start": 328,
                                        "end": 339
                                      },
                                      "start": 305,
                                      "end": 339
                                    },
                                    "consequent": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "args",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 350,
                                        "end": 354
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "index",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 355,
                                        "end": 360
                                      },
                                      "optional": false,
                                      "computed": true,
                                      "start": 350,
                                      "end": 361
                                    },
                                    "alternate": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "match",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 372,
                                      "end": 377
                                    },
                                    "start": 305,
                                    "end": 377
                                  },
                                  "start": 298,
                                  "end": 378
                                }
                              ],
                              "start": 264,
                              "end": 384
                            },
                            "expression": false,
                            "start": 239,
                            "end": 384
                          }
                        ],
                        "optional": false,
                        "start": 209,
                        "end": 385
                      },
                      "definite": false,
                      "start": 201,
                      "end": 385
                    }
                  ],
                  "declare": false,
                  "start": 197,
                  "end": 386
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "result",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 398,
                    "end": 404
                  },
                  "start": 391,
                  "end": 405
                }
              ],
              "start": 191,
              "end": 409
            },
            "expression": false,
            "start": 139,
            "end": 409
          }
        ],
        "start": 12,
        "end": 411
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 411
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bug3",
        "optional": false,
        "typeAnnotation": null,
        "start": 422,
        "end": 426
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                      "type": "TSStringKeyword",
                      "start": 432,
                      "end": 438
                    },
                    "start": 431,
                    "end": 438
                  },
                  "start": 430,
                  "end": 438
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 441,
                  "end": 447
                },
                "start": 439,
                "end": 447
              },
              "start": 429,
              "end": 447
            },
            "start": 428,
            "end": 447
          },
          "start": 427,
          "end": 447
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
                "start": 458,
                "end": 459
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "s",
                  "raw": "\"s\"",
                  "start": 460,
                  "end": 463
                }
              ],
              "optional": false,
              "start": 458,
              "end": 464
            },
            "start": 451,
            "end": 464
          }
        ],
        "start": 449,
        "end": 466
      },
      "expression": false,
      "start": 413,
      "end": 466
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fprime",
        "optional": false,
        "typeAnnotation": null,
        "start": 477,
        "end": 483
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
              "type": "TSStringKeyword",
              "start": 486,
              "end": 492
            },
            "start": 485,
            "end": 492
          },
          "start": 484,
          "end": 492
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 494,
          "end": 500
        },
        "start": 493,
        "end": 500
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 510,
              "end": 511
            },
            "start": 503,
            "end": 512
          }
        ],
        "start": 501,
        "end": 514
      },
      "expression": false,
      "start": 468,
      "end": 514
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bug3",
          "optional": false,
          "typeAnnotation": null,
          "start": 516,
          "end": 520
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "fprime",
            "optional": false,
            "typeAnnotation": null,
            "start": 521,
            "end": 527
          }
        ],
        "optional": false,
        "start": 516,
        "end": 528
      },
      "directive": null,
      "start": 516,
      "end": 529
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bug3",
          "optional": false,
          "typeAnnotation": null,
          "start": 531,
          "end": 535
        },
        "typeArguments": null,
        "arguments": [
          {
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
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 547,
                    "end": 553
                  },
                  "start": 546,
                  "end": 553
                },
                "start": 545,
                "end": 553
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 555,
                "end": 561
              },
              "start": 554,
              "end": 561
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 571,
                    "end": 572
                  },
                  "start": 564,
                  "end": 573
                }
              ],
              "start": 562,
              "end": 575
            },
            "expression": false,
            "start": 536,
            "end": 575
          }
        ],
        "optional": false,
        "start": 531,
        "end": 576
      },
      "directive": null,
      "start": 531,
      "end": 577
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 577
}
```
