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
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null,
        "start": 15,
        "end": 18
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
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 31,
                  "end": 33
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 36,
                  "end": 38
                },
                "definite": false,
                "start": 31,
                "end": 38
              }
            ],
            "declare": false,
            "start": 27,
            "end": 39
          },
          {
            "type": "ForStatement",
            "init": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 53,
                    "end": 54
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 57,
                    "end": 58
                  },
                  "definite": false,
                  "start": 53,
                  "end": 58
                }
              ],
              "declare": false,
              "start": 49,
              "end": 58
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 60,
                "end": 61
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 64,
                "end": 65
              },
              "start": 60,
              "end": 65
            },
            "update": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 67,
                "end": 68
              },
              "start": 67,
              "end": 70
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 88,
                      "end": 89
                    },
                    "start": 82,
                    "end": 89
                  },
                  "directive": null,
                  "start": 82,
                  "end": 90
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
                        "name": "ar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 99,
                        "end": 101
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 102,
                        "end": 106
                      },
                      "optional": false,
                      "computed": false,
                      "start": 99,
                      "end": 106
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 113,
                          "end": 114
                        },
                        "id": null,
                        "generator": false,
                        "start": 107,
                        "end": 114
                      }
                    ],
                    "optional": false,
                    "start": 99,
                    "end": 115
                  },
                  "directive": null,
                  "start": 99,
                  "end": 116
                }
              ],
              "start": 72,
              "end": 122
            },
            "start": 44,
            "end": 122
          }
        ],
        "start": 21,
        "end": 124
      },
      "expression": false,
      "start": 0,
      "end": 124
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null,
        "start": 141,
        "end": 144
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
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 157,
                  "end": 159
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 162,
                  "end": 164
                },
                "definite": false,
                "start": 157,
                "end": 164
              }
            ],
            "declare": false,
            "start": 153,
            "end": 165
          },
          {
            "type": "ForStatement",
            "init": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 179,
                    "end": 180
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 183,
                    "end": 184
                  },
                  "definite": false,
                  "start": 179,
                  "end": 184
                }
              ],
              "declare": false,
              "start": 175,
              "end": 184
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 186,
                "end": 187
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 190,
                "end": 191
              },
              "start": 186,
              "end": 191
            },
            "update": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 193,
                "end": 194
              },
              "start": 193,
              "end": 196
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 214,
                      "end": 215
                    },
                    "start": 208,
                    "end": 215
                  },
                  "directive": null,
                  "start": 208,
                  "end": 216
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
                        "name": "ar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 225,
                        "end": 227
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 228,
                        "end": 232
                      },
                      "optional": false,
                      "computed": false,
                      "start": 225,
                      "end": 232
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 239,
                          "end": 240
                        },
                        "id": null,
                        "generator": false,
                        "start": 233,
                        "end": 240
                      }
                    ],
                    "optional": false,
                    "start": 225,
                    "end": 241
                  },
                  "directive": null,
                  "start": 225,
                  "end": 242
                },
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 251,
                  "end": 257
                }
              ],
              "start": 198,
              "end": 263
            },
            "start": 170,
            "end": 263
          }
        ],
        "start": 147,
        "end": 265
      },
      "expression": false,
      "start": 126,
      "end": 265
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null,
        "start": 282,
        "end": 285
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
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 298,
                  "end": 300
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 303,
                  "end": 305
                },
                "definite": false,
                "start": 298,
                "end": 305
              }
            ],
            "declare": false,
            "start": 294,
            "end": 306
          },
          {
            "type": "ForStatement",
            "init": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 320,
                    "end": 321
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 324,
                    "end": 325
                  },
                  "definite": false,
                  "start": 320,
                  "end": 325
                }
              ],
              "declare": false,
              "start": 316,
              "end": 325
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 327,
                "end": 328
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 331,
                "end": 332
              },
              "start": 327,
              "end": 332
            },
            "update": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 334,
                "end": 335
              },
              "start": 334,
              "end": 337
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 355,
                      "end": 356
                    },
                    "start": 349,
                    "end": 356
                  },
                  "directive": null,
                  "start": 349,
                  "end": 357
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
                        "name": "ar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 366,
                        "end": 368
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 369,
                        "end": 373
                      },
                      "optional": false,
                      "computed": false,
                      "start": 366,
                      "end": 373
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 380,
                          "end": 381
                        },
                        "id": null,
                        "generator": false,
                        "start": 374,
                        "end": 381
                      }
                    ],
                    "optional": false,
                    "start": 366,
                    "end": 382
                  },
                  "directive": null,
                  "start": 366,
                  "end": 383
                },
                {
                  "type": "ContinueStatement",
                  "label": null,
                  "start": 392,
                  "end": 401
                }
              ],
              "start": 339,
              "end": 407
            },
            "start": 311,
            "end": 407
          }
        ],
        "start": 288,
        "end": 409
      },
      "expression": false,
      "start": 267,
      "end": 409
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "typeAnnotation": null,
        "start": 426,
        "end": 429
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
            "start": 433,
            "end": 440
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 441,
                "end": 447
              }
            ],
            "start": 440,
            "end": 448
          },
          "start": 433,
          "end": 448
        },
        "start": 431,
        "end": 448
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
                  "name": "ar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 459,
                  "end": 461
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 464,
                  "end": 466
                },
                "definite": false,
                "start": 459,
                "end": 466
              }
            ],
            "declare": false,
            "start": 455,
            "end": 467
          },
          {
            "type": "ForStatement",
            "init": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 481,
                    "end": 482
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 485,
                    "end": 486
                  },
                  "definite": false,
                  "start": 481,
                  "end": 486
                }
              ],
              "declare": false,
              "start": 477,
              "end": 486
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 488,
                "end": 489
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 492,
                "end": 493
              },
              "start": 488,
              "end": 493
            },
            "update": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 495,
                "end": 496
              },
              "start": 495,
              "end": 498
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 516,
                      "end": 517
                    },
                    "start": 510,
                    "end": 517
                  },
                  "directive": null,
                  "start": 510,
                  "end": 518
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
                        "name": "ar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 527,
                        "end": 529
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 530,
                        "end": 534
                      },
                      "optional": false,
                      "computed": false,
                      "start": 527,
                      "end": 534
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 541,
                          "end": 542
                        },
                        "id": null,
                        "generator": false,
                        "start": 535,
                        "end": 542
                      }
                    ],
                    "optional": false,
                    "start": 527,
                    "end": 543
                  },
                  "directive": null,
                  "start": 527,
                  "end": 544
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 560,
                    "end": 561
                  },
                  "start": 553,
                  "end": 562
                }
              ],
              "start": 500,
              "end": 568
            },
            "start": 472,
            "end": 568
          }
        ],
        "start": 449,
        "end": 570
      },
      "expression": false,
      "start": 411,
      "end": 570
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 570
}
```
