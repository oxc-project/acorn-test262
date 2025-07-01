__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 26,
        "end": 29
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 33,
            "end": 40
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSVoidKeyword",
                "start": 41,
                "end": 45
              }
            ],
            "start": 40,
            "end": 46
          },
          "start": 33,
          "end": 46
        },
        "start": 31,
        "end": 46
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 47,
        "end": 49
      },
      "expression": false,
      "start": 11,
      "end": 49
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 65,
        "end": 68
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 72,
            "end": 79
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSVoidKeyword",
                "start": 80,
                "end": 84
              }
            ],
            "start": 79,
            "end": 85
          },
          "start": 72,
          "end": 85
        },
        "start": 70,
        "end": 85
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 86,
        "end": 88
      },
      "expression": false,
      "start": 50,
      "end": 88
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 89
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "__awaiter",
          "optional": false,
          "typeAnnotation": null,
          "start": 428,
          "end": 437
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "thisArg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 447,
                "end": 450
              },
              "start": 445,
              "end": 450
            },
            "start": 438,
            "end": 450
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "_arguments",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 464,
                "end": 467
              },
              "start": 462,
              "end": 467
            },
            "start": 452,
            "end": 467
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 472,
                  "end": 480
                },
                "typeArguments": null,
                "start": 472,
                "end": 480
              },
              "start": 470,
              "end": 480
            },
            "start": 469,
            "end": 480
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "generator",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 493,
                  "end": 501
                },
                "typeArguments": null,
                "start": 493,
                "end": 501
              },
              "start": 491,
              "end": 501
            },
            "start": 482,
            "end": 501
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 504,
            "end": 507
          },
          "start": 502,
          "end": 507
        },
        "body": null,
        "expression": false,
        "start": 411,
        "end": 508
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 404,
      "end": 508
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 404,
  "end": 509
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null,
              "start": 0,
              "end": 6
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null,
              "start": 7,
              "end": 14
            },
            "optional": false,
            "computed": false,
            "start": 0,
            "end": 14
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "__awaiter",
            "optional": false,
            "typeAnnotation": null,
            "start": 15,
            "end": 24
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 24
        },
        "right": {
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
              "name": "thisArg",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 44
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "_arguments",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 56
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 59
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "generator",
              "optional": false,
              "typeAnnotation": null,
              "start": 61,
              "end": 70
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "adopt",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 87,
                  "end": 92
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 93,
                    "end": 98
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "ConditionalExpression",
                        "test": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 109,
                            "end": 114
                          },
                          "operator": "instanceof",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 126,
                            "end": 127
                          },
                          "start": 109,
                          "end": 127
                        },
                        "consequent": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 130,
                          "end": 135
                        },
                        "alternate": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 142,
                            "end": 143
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
                                  "name": "resolve",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 154,
                                  "end": 161
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "resolve",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 165,
                                        "end": 172
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "value",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 173,
                                          "end": 178
                                        }
                                      ],
                                      "optional": false,
                                      "start": 165,
                                      "end": 179
                                    },
                                    "directive": null,
                                    "start": 165,
                                    "end": 180
                                  }
                                ],
                                "start": 163,
                                "end": 182
                              },
                              "expression": false,
                              "start": 144,
                              "end": 182
                            }
                          ],
                          "start": 138,
                          "end": 183
                        },
                        "start": 109,
                        "end": 183
                      },
                      "start": 102,
                      "end": 184
                    }
                  ],
                  "start": 100,
                  "end": 186
                },
                "expression": false,
                "start": 78,
                "end": 186
              },
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 203,
                      "end": 204
                    },
                    "operator": "||",
                    "right": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 209,
                        "end": 210
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 213,
                        "end": 220
                      },
                      "start": 209,
                      "end": 220
                    },
                    "start": 203,
                    "end": 221
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
                          "name": "resolve",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 233,
                          "end": 240
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "reject",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 242,
                          "end": 248
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "FunctionDeclaration",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "fulfilled",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 269,
                              "end": 278
                            },
                            "generator": false,
                            "async": false,
                            "declare": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 279,
                                "end": 284
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "TryStatement",
                                  "block": {
                                    "type": "BlockStatement",
                                    "body": [
                                      {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "step",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 294,
                                            "end": 298
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
                                                  "name": "generator",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 299,
                                                  "end": 308
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "next",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 309,
                                                  "end": 313
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 299,
                                                "end": 313
                                              },
                                              "typeArguments": null,
                                              "arguments": [
                                                {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "value",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 314,
                                                  "end": 319
                                                }
                                              ],
                                              "optional": false,
                                              "start": 299,
                                              "end": 320
                                            }
                                          ],
                                          "optional": false,
                                          "start": 294,
                                          "end": 321
                                        },
                                        "directive": null,
                                        "start": 294,
                                        "end": 322
                                      }
                                    ],
                                    "start": 292,
                                    "end": 324
                                  },
                                  "handler": {
                                    "type": "CatchClause",
                                    "param": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "e",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 332,
                                      "end": 333
                                    },
                                    "body": {
                                      "type": "BlockStatement",
                                      "body": [
                                        {
                                          "type": "ExpressionStatement",
                                          "expression": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "reject",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 337,
                                              "end": 343
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "e",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 344,
                                                "end": 345
                                              }
                                            ],
                                            "optional": false,
                                            "start": 337,
                                            "end": 346
                                          },
                                          "directive": null,
                                          "start": 337,
                                          "end": 347
                                        }
                                      ],
                                      "start": 335,
                                      "end": 349
                                    },
                                    "start": 325,
                                    "end": 349
                                  },
                                  "finalizer": null,
                                  "start": 288,
                                  "end": 349
                                }
                              ],
                              "start": 286,
                              "end": 351
                            },
                            "expression": false,
                            "start": 260,
                            "end": 351
                          },
                          {
                            "type": "FunctionDeclaration",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "rejected",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 369,
                              "end": 377
                            },
                            "generator": false,
                            "async": false,
                            "declare": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 378,
                                "end": 383
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "TryStatement",
                                  "block": {
                                    "type": "BlockStatement",
                                    "body": [
                                      {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "step",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 393,
                                            "end": 397
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
                                                  "name": "generator",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 398,
                                                  "end": 407
                                                },
                                                "property": {
                                                  "type": "Literal",
                                                  "value": "throw",
                                                  "raw": "\"throw\"",
                                                  "start": 408,
                                                  "end": 415
                                                },
                                                "optional": false,
                                                "computed": true,
                                                "start": 398,
                                                "end": 416
                                              },
                                              "typeArguments": null,
                                              "arguments": [
                                                {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "value",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 417,
                                                  "end": 422
                                                }
                                              ],
                                              "optional": false,
                                              "start": 398,
                                              "end": 423
                                            }
                                          ],
                                          "optional": false,
                                          "start": 393,
                                          "end": 424
                                        },
                                        "directive": null,
                                        "start": 393,
                                        "end": 425
                                      }
                                    ],
                                    "start": 391,
                                    "end": 427
                                  },
                                  "handler": {
                                    "type": "CatchClause",
                                    "param": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "e",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 435,
                                      "end": 436
                                    },
                                    "body": {
                                      "type": "BlockStatement",
                                      "body": [
                                        {
                                          "type": "ExpressionStatement",
                                          "expression": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "reject",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 440,
                                              "end": 446
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "e",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 447,
                                                "end": 448
                                              }
                                            ],
                                            "optional": false,
                                            "start": 440,
                                            "end": 449
                                          },
                                          "directive": null,
                                          "start": 440,
                                          "end": 450
                                        }
                                      ],
                                      "start": 438,
                                      "end": 452
                                    },
                                    "start": 428,
                                    "end": 452
                                  },
                                  "finalizer": null,
                                  "start": 387,
                                  "end": 452
                                }
                              ],
                              "start": 385,
                              "end": 454
                            },
                            "expression": false,
                            "start": 360,
                            "end": 454
                          },
                          {
                            "type": "FunctionDeclaration",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "step",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 472,
                              "end": 476
                            },
                            "generator": false,
                            "async": false,
                            "declare": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "result",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 477,
                                "end": 483
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "ConditionalExpression",
                                    "test": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "result",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 487,
                                        "end": 493
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "done",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 494,
                                        "end": 498
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 487,
                                      "end": 498
                                    },
                                    "consequent": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "resolve",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 501,
                                        "end": 508
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "result",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 509,
                                            "end": 515
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "value",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 516,
                                            "end": 521
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 509,
                                          "end": 521
                                        }
                                      ],
                                      "optional": false,
                                      "start": 501,
                                      "end": 522
                                    },
                                    "alternate": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "adopt",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 525,
                                            "end": 530
                                          },
                                          "typeArguments": null,
                                          "arguments": [
                                            {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "result",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 531,
                                                "end": 537
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "value",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 538,
                                                "end": 543
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 531,
                                              "end": 543
                                            }
                                          ],
                                          "optional": false,
                                          "start": 525,
                                          "end": 544
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "then",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 545,
                                          "end": 549
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 525,
                                        "end": 549
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "fulfilled",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 550,
                                          "end": 559
                                        },
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "rejected",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 561,
                                          "end": 569
                                        }
                                      ],
                                      "optional": false,
                                      "start": 525,
                                      "end": 570
                                    },
                                    "start": 487,
                                    "end": 570
                                  },
                                  "directive": null,
                                  "start": 487,
                                  "end": 571
                                }
                              ],
                              "start": 485,
                              "end": 573
                            },
                            "expression": false,
                            "start": 463,
                            "end": 573
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "step",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 582,
                                "end": 586
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "AssignmentExpression",
                                      "operator": "=",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "generator",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 588,
                                        "end": 597
                                      },
                                      "right": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "generator",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 600,
                                            "end": 609
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "apply",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 610,
                                            "end": 615
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 600,
                                          "end": 615
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "thisArg",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 616,
                                            "end": 623
                                          },
                                          {
                                            "type": "LogicalExpression",
                                            "left": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "_arguments",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 625,
                                              "end": 635
                                            },
                                            "operator": "||",
                                            "right": {
                                              "type": "ArrayExpression",
                                              "elements": [],
                                              "start": 639,
                                              "end": 641
                                            },
                                            "start": 625,
                                            "end": 641
                                          }
                                        ],
                                        "optional": false,
                                        "start": 600,
                                        "end": 642
                                      },
                                      "start": 588,
                                      "end": 642
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "next",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 644,
                                      "end": 648
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 587,
                                    "end": 648
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "optional": false,
                                  "start": 587,
                                  "end": 650
                                }
                              ],
                              "optional": false,
                              "start": 582,
                              "end": 651
                            },
                            "directive": null,
                            "start": 582,
                            "end": 652
                          }
                        ],
                        "start": 250,
                        "end": 658
                      },
                      "expression": false,
                      "start": 223,
                      "end": 658
                    }
                  ],
                  "start": 198,
                  "end": 659
                },
                "start": 191,
                "end": 660
              }
            ],
            "start": 72,
            "end": 662
          },
          "expression": false,
          "start": 27,
          "end": 662
        },
        "start": 0,
        "end": 662
      },
      "directive": null,
      "start": 0,
      "end": 663
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 664
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 26,
        "end": 29
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 33,
            "end": 40
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSVoidKeyword",
                "start": 41,
                "end": 45
              }
            ],
            "start": 40,
            "end": 46
          },
          "start": 33,
          "end": 46
        },
        "start": 31,
        "end": 46
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 47,
        "end": 49
      },
      "expression": false,
      "start": 11,
      "end": 49
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 49
}
```
