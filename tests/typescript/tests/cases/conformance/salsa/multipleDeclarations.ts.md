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
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 10
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
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 19,
                  "end": 23
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 24,
                  "end": 25
                },
                "optional": false,
                "computed": false,
                "start": 19,
                "end": 25
              },
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 28,
                "end": 32
              },
              "start": 19,
              "end": 32
            },
            "directive": null,
            "start": 19,
            "end": 33
          }
        ],
        "start": 13,
        "end": 35
      },
      "expression": false,
      "start": 0,
      "end": 35
    },
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
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 38,
              "end": 47
            },
            "optional": false,
            "computed": false,
            "start": 36,
            "end": 47
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 49
          },
          "optional": false,
          "computed": false,
          "start": 36,
          "end": 49
        },
        "right": {
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
                      "type": "ThisExpression",
                      "start": 69,
                      "end": 73
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nothing",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 74,
                      "end": 81
                    },
                    "optional": false,
                    "computed": false,
                    "start": 69,
                    "end": 81
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 69,
                  "end": 83
                },
                "directive": null,
                "start": 69,
                "end": 84
              }
            ],
            "start": 63,
            "end": 86
          },
          "expression": false,
          "start": 52,
          "end": 86
        },
        "start": 36,
        "end": 86
      },
      "directive": null,
      "start": 36,
      "end": 86
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 93,
        "end": 94
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 101,
              "end": 112
            },
            "value": {
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
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 125,
                          "end": 129
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 130,
                          "end": 131
                        },
                        "optional": false,
                        "computed": false,
                        "start": 125,
                        "end": 131
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 134,
                              "end": 138
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "m",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 139,
                              "end": 140
                            },
                            "optional": false,
                            "computed": false,
                            "start": 134,
                            "end": 140
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bind",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 141,
                            "end": 145
                          },
                          "optional": false,
                          "computed": false,
                          "start": 134,
                          "end": 145
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "ThisExpression",
                            "start": 146,
                            "end": 150
                          }
                        ],
                        "optional": false,
                        "start": 134,
                        "end": 151
                      },
                      "start": 125,
                      "end": 151
                    },
                    "directive": null,
                    "start": 125,
                    "end": 152
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 161,
                          "end": 165
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "mistake",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 166,
                          "end": 173
                        },
                        "optional": false,
                        "computed": false,
                        "start": 161,
                        "end": 173
                      },
                      "right": {
                        "type": "Literal",
                        "value": "frankly, complete nonsense",
                        "raw": "'frankly, complete nonsense'",
                        "start": 176,
                        "end": 204
                      },
                      "start": 161,
                      "end": 204
                    },
                    "directive": null,
                    "start": 161,
                    "end": 205
                  }
                ],
                "start": 115,
                "end": 211
              },
              "expression": false,
              "start": 112,
              "end": 211
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 101,
            "end": 211
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 216,
              "end": 217
            },
            "value": {
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
                "body": [],
                "start": 220,
                "end": 227
              },
              "expression": false,
              "start": 217,
              "end": 227
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 216,
            "end": 227
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "mistake",
              "optional": false,
              "typeAnnotation": null,
              "start": 232,
              "end": 239
            },
            "value": {
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
                "body": [],
                "start": 242,
                "end": 249
              },
              "expression": false,
              "start": 239,
              "end": 249
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 232,
            "end": 249
          }
        ],
        "start": 95,
        "end": 251
      },
      "abstract": false,
      "declare": false,
      "start": 87,
      "end": 251
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
            "start": 256,
            "end": 257
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 264,
              "end": 265
            },
            "typeArguments": null,
            "arguments": [],
            "start": 260,
            "end": 267
          },
          "definite": false,
          "start": 256,
          "end": 267
        }
      ],
      "declare": false,
      "start": 252,
      "end": 268
    },
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
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 269,
              "end": 270
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 271,
              "end": 280
            },
            "optional": false,
            "computed": false,
            "start": 269,
            "end": 280
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "mistake",
            "optional": false,
            "typeAnnotation": null,
            "start": 281,
            "end": 288
          },
          "optional": false,
          "computed": false,
          "start": 269,
          "end": 288
        },
        "right": {
          "type": "Literal",
          "value": false,
          "raw": "false",
          "start": 291,
          "end": 296
        },
        "start": 269,
        "end": 296
      },
      "directive": null,
      "start": 269,
      "end": 297
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 298,
            "end": 299
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 300,
            "end": 301
          },
          "optional": false,
          "computed": false,
          "start": 298,
          "end": 301
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 298,
        "end": 303
      },
      "directive": null,
      "start": 298,
      "end": 304
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 305,
          "end": 306
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "mistake",
          "optional": false,
          "typeAnnotation": null,
          "start": 307,
          "end": 314
        },
        "optional": false,
        "computed": false,
        "start": 305,
        "end": 314
      },
      "directive": null,
      "start": 305,
      "end": 315
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Y",
        "optional": false,
        "typeAnnotation": null,
        "start": 322,
        "end": 323
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "mistake",
              "optional": false,
              "typeAnnotation": null,
              "start": 330,
              "end": 337
            },
            "value": {
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
                "body": [],
                "start": 340,
                "end": 347
              },
              "expression": false,
              "start": 337,
              "end": 347
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 330,
            "end": 347
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 352,
              "end": 353
            },
            "value": {
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
                "body": [],
                "start": 356,
                "end": 363
              },
              "expression": false,
              "start": 353,
              "end": 363
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 352,
            "end": 363
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 368,
              "end": 379
            },
            "value": {
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
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 392,
                          "end": 396
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 397,
                          "end": 398
                        },
                        "optional": false,
                        "computed": false,
                        "start": 392,
                        "end": 398
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 401,
                              "end": 405
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "m",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 406,
                              "end": 407
                            },
                            "optional": false,
                            "computed": false,
                            "start": 401,
                            "end": 407
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bind",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 408,
                            "end": 412
                          },
                          "optional": false,
                          "computed": false,
                          "start": 401,
                          "end": 412
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "ThisExpression",
                            "start": 413,
                            "end": 417
                          }
                        ],
                        "optional": false,
                        "start": 401,
                        "end": 418
                      },
                      "start": 392,
                      "end": 418
                    },
                    "directive": null,
                    "start": 392,
                    "end": 419
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 428,
                          "end": 432
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "mistake",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 433,
                          "end": 440
                        },
                        "optional": false,
                        "computed": false,
                        "start": 428,
                        "end": 440
                      },
                      "right": {
                        "type": "Literal",
                        "value": "even more nonsense",
                        "raw": "'even more nonsense'",
                        "start": 443,
                        "end": 463
                      },
                      "start": 428,
                      "end": 463
                    },
                    "directive": null,
                    "start": 428,
                    "end": 464
                  }
                ],
                "start": 382,
                "end": 470
              },
              "expression": false,
              "start": 379,
              "end": 470
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 368,
            "end": 470
          }
        ],
        "start": 324,
        "end": 472
      },
      "abstract": false,
      "declare": false,
      "start": 316,
      "end": 472
    },
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
              "name": "Y",
              "optional": false,
              "typeAnnotation": null,
              "start": 473,
              "end": 474
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 475,
              "end": 484
            },
            "optional": false,
            "computed": false,
            "start": 473,
            "end": 484
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "mistake",
            "optional": false,
            "typeAnnotation": null,
            "start": 485,
            "end": 492
          },
          "optional": false,
          "computed": false,
          "start": 473,
          "end": 492
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 495,
          "end": 499
        },
        "start": 473,
        "end": 499
      },
      "directive": null,
      "start": 473,
      "end": 500
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 505,
            "end": 506
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null,
              "start": 513,
              "end": 514
            },
            "typeArguments": null,
            "arguments": [],
            "start": 509,
            "end": 516
          },
          "definite": false,
          "start": 505,
          "end": 516
        }
      ],
      "declare": false,
      "start": 501,
      "end": 517
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 518,
            "end": 519
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 520,
            "end": 521
          },
          "optional": false,
          "computed": false,
          "start": 518,
          "end": 521
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 518,
        "end": 523
      },
      "directive": null,
      "start": 518,
      "end": 524
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 525,
            "end": 526
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "mistake",
            "optional": false,
            "typeAnnotation": null,
            "start": 527,
            "end": 534
          },
          "optional": false,
          "computed": false,
          "start": 525,
          "end": 534
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 525,
        "end": 536
      },
      "directive": null,
      "start": 525,
      "end": 537
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 537
}
```
