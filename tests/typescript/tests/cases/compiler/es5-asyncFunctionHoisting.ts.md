__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 13
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 13
        }
      ],
      "declare": true,
      "start": 0,
      "end": 14
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "hoisting",
        "optional": false,
        "typeAnnotation": null,
        "start": 31,
        "end": 39
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
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a0",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 52,
                  "end": 54
                },
                "init": null,
                "definite": false,
                "start": 52,
                "end": 54
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 56,
                  "end": 58
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 61,
                  "end": 62
                },
                "definite": false,
                "start": 56,
                "end": 62
              }
            ],
            "declare": false,
            "start": 48,
            "end": 63
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
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
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b0",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 95,
                        "end": 97
                      },
                      "init": null,
                      "definite": false,
                      "start": 95,
                      "end": 97
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 99,
                        "end": 101
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 104,
                        "end": 105
                      },
                      "definite": false,
                      "start": 99,
                      "end": 105
                    }
                  ],
                  "declare": false,
                  "start": 91,
                  "end": 106
                }
              ],
              "start": 81,
              "end": 112
            },
            "expression": false,
            "start": 68,
            "end": 112
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 122,
              "end": 126
            },
            "consequent": {
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
                        "name": "c0",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 142,
                        "end": 144
                      },
                      "init": null,
                      "definite": false,
                      "start": 142,
                      "end": 144
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 146,
                        "end": 148
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 151,
                        "end": 152
                      },
                      "definite": false,
                      "start": 146,
                      "end": 152
                    }
                  ],
                  "declare": false,
                  "start": 138,
                  "end": 153
                }
              ],
              "start": 128,
              "end": 159
            },
            "alternate": null,
            "start": 118,
            "end": 159
          },
          {
            "type": "ForStatement",
            "init": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 174,
                    "end": 175
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 178,
                    "end": 179
                  },
                  "definite": false,
                  "start": 174,
                  "end": 179
                }
              ],
              "declare": false,
              "start": 170,
              "end": 179
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 181,
              "end": 182
            },
            "update": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 185,
              "end": 193
            },
            "start": 165,
            "end": 193
          },
          {
            "type": "ForInStatement",
            "left": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 208,
                    "end": 209
                  },
                  "init": null,
                  "definite": false,
                  "start": 208,
                  "end": 209
                }
              ],
              "declare": false,
              "start": 204,
              "end": 209
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 213,
              "end": 214
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 216,
              "end": 224
            },
            "start": 199,
            "end": 224
          },
          {
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 239,
                    "end": 240
                  },
                  "init": null,
                  "definite": false,
                  "start": 239,
                  "end": 240
                }
              ],
              "declare": false,
              "start": 235,
              "end": 240
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 244,
              "end": 245
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 247,
              "end": 255
            },
            "start": 230,
            "end": 255
          }
        ],
        "start": 42,
        "end": 257
      },
      "expression": false,
      "start": 16,
      "end": 257
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "hoistingWithAwait",
        "optional": false,
        "typeAnnotation": null,
        "start": 274,
        "end": 291
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
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a0",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 304,
                  "end": 306
                },
                "init": null,
                "definite": false,
                "start": 304,
                "end": 306
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 308,
                  "end": 310
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 313,
                  "end": 314
                },
                "definite": false,
                "start": 308,
                "end": 314
              }
            ],
            "declare": false,
            "start": 300,
            "end": 315
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 330,
              "end": 331
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
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b0",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 348,
                        "end": 350
                      },
                      "init": null,
                      "definite": false,
                      "start": 348,
                      "end": 350
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 352,
                        "end": 354
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 357,
                        "end": 358
                      },
                      "definite": false,
                      "start": 352,
                      "end": 358
                    }
                  ],
                  "declare": false,
                  "start": 344,
                  "end": 359
                }
              ],
              "start": 334,
              "end": 365
            },
            "expression": false,
            "start": 321,
            "end": 365
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AwaitExpression",
              "argument": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 377,
                "end": 378
              },
              "start": 371,
              "end": 378
            },
            "directive": null,
            "start": 371,
            "end": 379
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 389,
              "end": 393
            },
            "consequent": {
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
                        "name": "c0",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 409,
                        "end": 411
                      },
                      "init": null,
                      "definite": false,
                      "start": 409,
                      "end": 411
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 413,
                        "end": 415
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 418,
                        "end": 419
                      },
                      "definite": false,
                      "start": 413,
                      "end": 419
                    }
                  ],
                  "declare": false,
                  "start": 405,
                  "end": 420
                }
              ],
              "start": 395,
              "end": 426
            },
            "alternate": null,
            "start": 385,
            "end": 426
          },
          {
            "type": "ForStatement",
            "init": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 441,
                    "end": 442
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 445,
                    "end": 446
                  },
                  "definite": false,
                  "start": 441,
                  "end": 446
                }
              ],
              "declare": false,
              "start": 437,
              "end": 446
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 448,
              "end": 449
            },
            "update": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 452,
              "end": 460
            },
            "start": 432,
            "end": 460
          },
          {
            "type": "ForInStatement",
            "left": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 475,
                    "end": 476
                  },
                  "init": null,
                  "definite": false,
                  "start": 475,
                  "end": 476
                }
              ],
              "declare": false,
              "start": 471,
              "end": 476
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 480,
              "end": 481
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 483,
              "end": 491
            },
            "start": 466,
            "end": 491
          },
          {
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 506,
                    "end": 507
                  },
                  "init": null,
                  "definite": false,
                  "start": 506,
                  "end": 507
                }
              ],
              "declare": false,
              "start": 502,
              "end": 507
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 511,
              "end": 512
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 514,
              "end": 522
            },
            "start": 497,
            "end": 522
          }
        ],
        "start": 294,
        "end": 524
      },
      "expression": false,
      "start": 259,
      "end": 524
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 525
}
```
