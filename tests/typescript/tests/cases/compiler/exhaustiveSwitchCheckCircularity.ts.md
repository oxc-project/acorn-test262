__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isNever",
        "optional": false,
        "typeAnnotation": null,
        "start": 39,
        "end": 46
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNeverKeyword",
              "start": 50,
              "end": 55
            },
            "start": 48,
            "end": 55
          },
          "start": 47,
          "end": 55
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 58,
          "end": 65
        },
        "start": 56,
        "end": 65
      },
      "body": null,
      "expression": false,
      "start": 22,
      "end": 66
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 77,
        "end": 78
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "aaa",
                            "raw": "\"aaa\"",
                            "start": 96,
                            "end": 101
                          },
                          "start": 96,
                          "end": 101
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "bbb",
                            "raw": "\"bbb\"",
                            "start": 104,
                            "end": 109
                          },
                          "start": 104,
                          "end": 109
                        }
                      ],
                      "start": 96,
                      "end": 109
                    },
                    "start": 94,
                    "end": 109
                  },
                  "start": 91,
                  "end": 109
                },
                "init": {
                  "type": "Literal",
                  "value": "aaa",
                  "raw": "\"aaa\"",
                  "start": 112,
                  "end": 117
                },
                "definite": false,
                "start": 91,
                "end": 117
              }
            ],
            "declare": false,
            "start": 87,
            "end": 118
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 130,
              "end": 134
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "SwitchStatement",
                  "discriminant": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 154,
                    "end": 157
                  },
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": "aaa",
                        "raw": "\"aaa\"",
                        "start": 178,
                        "end": 183
                      },
                      "consequent": [],
                      "start": 173,
                      "end": 184
                    }
                  ],
                  "start": 146,
                  "end": 194
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 207,
                      "end": 210
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "aaa",
                      "raw": "\"aaa\"",
                      "start": 215,
                      "end": 220
                    },
                    "start": 207,
                    "end": 220
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 236,
                            "end": 239
                          },
                          "right": {
                            "type": "Literal",
                            "value": "bbb",
                            "raw": "\"bbb\"",
                            "start": 242,
                            "end": 247
                          },
                          "start": 236,
                          "end": 247
                        },
                        "directive": null,
                        "start": 236,
                        "end": 248
                      }
                    ],
                    "start": 222,
                    "end": 258
                  },
                  "alternate": {
                    "type": "IfStatement",
                    "test": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "isNever",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 276,
                        "end": 283
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 284,
                          "end": 287
                        }
                      ],
                      "optional": false,
                      "start": 276,
                      "end": 288
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "BreakStatement",
                          "label": null,
                          "start": 323,
                          "end": 329
                        }
                      ],
                      "start": 290,
                      "end": 339
                    },
                    "alternate": null,
                    "start": 272,
                    "end": 339
                  },
                  "start": 203,
                  "end": 339
                }
              ],
              "start": 136,
              "end": 345
            },
            "start": 123,
            "end": 345
          }
        ],
        "start": 81,
        "end": 347
      },
      "expression": false,
      "start": 68,
      "end": 347
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "functionB",
        "optional": false,
        "typeAnnotation": null,
        "start": 388,
        "end": 397
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 403,
              "end": 409
            },
            "start": 401,
            "end": 409
          },
          "start": 398,
          "end": 409
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 412,
          "end": 418
        },
        "start": 410,
        "end": 418
      },
      "body": null,
      "expression": false,
      "start": 371,
      "end": 419
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "functionC",
        "optional": false,
        "typeAnnotation": null,
        "start": 430,
        "end": 439
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 443,
          "end": 447
        },
        "start": 441,
        "end": 447
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
                  "name": "unionVal",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "A",
                            "raw": "\"A\"",
                            "start": 468,
                            "end": 471
                          },
                          "start": 468,
                          "end": 471
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "B",
                            "raw": "\"B\"",
                            "start": 474,
                            "end": 477
                          },
                          "start": 474,
                          "end": 477
                        }
                      ],
                      "start": 468,
                      "end": 477
                    },
                    "start": 466,
                    "end": 477
                  },
                  "start": 458,
                  "end": 477
                },
                "init": {
                  "type": "Literal",
                  "value": "A",
                  "raw": "\"A\"",
                  "start": 480,
                  "end": 483
                },
                "definite": false,
                "start": 458,
                "end": 483
              }
            ],
            "declare": false,
            "start": 454,
            "end": 484
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 496,
              "end": 500
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
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 521,
                            "end": 527
                          },
                          "start": 519,
                          "end": 527
                        },
                        "start": 516,
                        "end": 527
                      },
                      "init": null,
                      "definite": false,
                      "start": 516,
                      "end": 527
                    }
                  ],
                  "declare": false,
                  "start": 512,
                  "end": 528
                },
                {
                  "type": "SwitchStatement",
                  "discriminant": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "unionVal",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 545,
                    "end": 553
                  },
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": "A",
                        "raw": "\"A\"",
                        "start": 574,
                        "end": 577
                      },
                      "consequent": [
                        {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "key",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 597,
                                  "end": 600
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": "AA",
                                  "raw": "\"AA\"",
                                  "start": 603,
                                  "end": 607
                                },
                                "start": 597,
                                "end": 607
                              },
                              "directive": null,
                              "start": 597,
                              "end": 608
                            },
                            {
                              "type": "BreakStatement",
                              "label": null,
                              "start": 625,
                              "end": 631
                            }
                          ],
                          "start": 579,
                          "end": 645
                        }
                      ],
                      "start": 569,
                      "end": 645
                    }
                  ],
                  "start": 537,
                  "end": 655
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "functionB",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 664,
                      "end": 673
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 674,
                        "end": 677
                      }
                    ],
                    "optional": false,
                    "start": 664,
                    "end": 678
                  },
                  "directive": null,
                  "start": 664,
                  "end": 679
                }
              ],
              "start": 502,
              "end": 685
            },
            "start": 489,
            "end": 685
          }
        ],
        "start": 448,
        "end": 687
      },
      "expression": false,
      "start": 421,
      "end": 687
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 687
}
```
