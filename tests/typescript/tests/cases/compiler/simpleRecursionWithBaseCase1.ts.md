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
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 16,
              "end": 22
            },
            "start": 14,
            "end": 22
          },
          "start": 13,
          "end": 22
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
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 34,
                "end": 35
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 40,
                "end": 41
              },
              "start": 34,
              "end": 41
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 60,
                    "end": 61
                  },
                  "start": 53,
                  "end": 62
                }
              ],
              "start": 43,
              "end": 68
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fn1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 91,
                      "end": 94
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 95,
                          "end": 96
                        },
                        "operator": "-",
                        "right": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 99,
                          "end": 100
                        },
                        "start": 95,
                        "end": 100
                      }
                    ],
                    "optional": false,
                    "start": 91,
                    "end": 101
                  },
                  "start": 84,
                  "end": 102
                }
              ],
              "start": 74,
              "end": 108
            },
            "start": 30,
            "end": 108
          }
        ],
        "start": 24,
        "end": 110
      },
      "expression": false,
      "start": 0,
      "end": 110
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 122,
                "end": 128
              },
              "start": 120,
              "end": 128
            },
            "start": 117,
            "end": 128
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn1",
              "optional": false,
              "typeAnnotation": null,
              "start": 131,
              "end": 134
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 131,
            "end": 136
          },
          "definite": false,
          "start": 117,
          "end": 136
        }
      ],
      "declare": false,
      "start": 111,
      "end": 137
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null,
        "start": 148,
        "end": 151
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSNumberKeyword",
              "start": 155,
              "end": 161
            },
            "start": 153,
            "end": 161
          },
          "start": 152,
          "end": 161
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
                "name": "fn2",
                "optional": false,
                "typeAnnotation": null,
                "start": 176,
                "end": 179
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 180,
                  "end": 181
                }
              ],
              "optional": false,
              "start": 176,
              "end": 182
            },
            "start": 169,
            "end": 183
          }
        ],
        "start": 163,
        "end": 185
      },
      "expression": false,
      "start": 139,
      "end": 185
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "nev",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNeverKeyword",
                "start": 197,
                "end": 202
              },
              "start": 195,
              "end": 202
            },
            "start": 192,
            "end": 202
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn2",
              "optional": false,
              "typeAnnotation": null,
              "start": 205,
              "end": 208
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 205,
            "end": 210
          },
          "definite": false,
          "start": 192,
          "end": 210
        }
      ],
      "declare": false,
      "start": 186,
      "end": 211
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null,
        "start": 222,
        "end": 225
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSNumberKeyword",
              "start": 229,
              "end": 235
            },
            "start": 227,
            "end": 235
          },
          "start": 226,
          "end": 235
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
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 247,
                "end": 248
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 253,
                "end": 254
              },
              "start": 247,
              "end": 254
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 273,
                    "end": 274
                  },
                  "start": 266,
                  "end": 275
                }
              ],
              "start": 256,
              "end": 281
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fn1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 304,
                      "end": 307
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "hello world",
                        "raw": "\"hello world\"",
                        "start": 308,
                        "end": 321
                      }
                    ],
                    "optional": false,
                    "start": 304,
                    "end": 322
                  },
                  "start": 297,
                  "end": 323
                }
              ],
              "start": 287,
              "end": 329
            },
            "start": 243,
            "end": 329
          }
        ],
        "start": 237,
        "end": 331
      },
      "expression": false,
      "start": 213,
      "end": 331
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "typeAnnotation": null,
        "start": 342,
        "end": 345
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSNumberKeyword",
              "start": 349,
              "end": 355
            },
            "start": 347,
            "end": 355
          },
          "start": 346,
          "end": 355
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
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 367,
                "end": 368
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 373,
                "end": 374
              },
              "start": 367,
              "end": 374
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 393,
                    "end": 394
                  },
                  "start": 386,
                  "end": 395
                }
              ],
              "start": 376,
              "end": 401
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "notfoundsymbol",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 424,
                      "end": 438
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "hello world",
                        "raw": "\"hello world\"",
                        "start": 439,
                        "end": 452
                      }
                    ],
                    "optional": false,
                    "start": 424,
                    "end": 453
                  },
                  "start": 417,
                  "end": 454
                }
              ],
              "start": 407,
              "end": 460
            },
            "start": 363,
            "end": 460
          }
        ],
        "start": 357,
        "end": 462
      },
      "expression": false,
      "start": 333,
      "end": 462
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn5",
        "optional": false,
        "typeAnnotation": null,
        "start": 473,
        "end": 476
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
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fn5",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 493,
                      "end": 496
                    }
                  ],
                  "start": 492,
                  "end": 497
                },
                "property": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 498,
                  "end": 499
                },
                "optional": false,
                "computed": true,
                "start": 492,
                "end": 500
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 492,
              "end": 502
            },
            "start": 485,
            "end": 503
          }
        ],
        "start": 479,
        "end": 505
      },
      "expression": false,
      "start": 464,
      "end": 505
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 505
}
```
