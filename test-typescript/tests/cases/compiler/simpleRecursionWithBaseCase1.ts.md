__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 505,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 110,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 24,
        "end": 110,
        "body": [
          {
            "type": "IfStatement",
            "start": 30,
            "end": 108,
            "alternate": {
              "type": "BlockStatement",
              "start": 74,
              "end": 108,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 84,
                  "end": 102,
                  "argument": {
                    "type": "CallExpression",
                    "start": 91,
                    "end": 101,
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "start": 95,
                        "end": 100,
                        "operator": "-",
                        "left": {
                          "type": "Identifier",
                          "start": 95,
                          "end": 96,
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Literal",
                          "start": 99,
                          "end": 100,
                          "raw": "1",
                          "value": 1,
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 91,
                      "end": 94,
                      "decorators": [],
                      "name": "fn1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 43,
              "end": 68,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 53,
                  "end": 62,
                  "argument": {
                    "type": "Literal",
                    "start": 60,
                    "end": 61,
                    "raw": "3",
                    "value": 3,
                    "regex": null,
                    "bigint": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 34,
              "end": 41,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 34,
                "end": 35,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 40,
                "end": 41,
                "raw": "0",
                "value": 0,
                "regex": null,
                "bigint": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 22,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 14,
            "end": 22,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 16,
              "end": 22
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 111,
      "end": 137,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 117,
          "end": 136,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 117,
            "end": 128,
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 120,
              "end": 128,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 122,
                "end": 128
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 131,
            "end": 136,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 131,
              "end": 134,
              "decorators": [],
              "name": "fn1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 139,
      "end": 185,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 163,
        "end": 185,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 169,
            "end": 183,
            "argument": {
              "type": "CallExpression",
              "start": 176,
              "end": 182,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 180,
                  "end": 181,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 176,
                "end": 179,
                "decorators": [],
                "name": "fn2",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 148,
        "end": 151,
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 152,
          "end": 161,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 153,
            "end": 161,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 155,
              "end": 161
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 186,
      "end": 211,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 192,
          "end": 210,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 192,
            "end": 202,
            "decorators": [],
            "name": "nev",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 195,
              "end": 202,
              "typeAnnotation": {
                "type": "TSNeverKeyword",
                "start": 197,
                "end": 202
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 205,
            "end": 210,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 205,
              "end": 208,
              "decorators": [],
              "name": "fn2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 213,
      "end": 331,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 237,
        "end": 331,
        "body": [
          {
            "type": "IfStatement",
            "start": 243,
            "end": 329,
            "alternate": {
              "type": "BlockStatement",
              "start": 287,
              "end": 329,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 297,
                  "end": 323,
                  "argument": {
                    "type": "CallExpression",
                    "start": 304,
                    "end": 322,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 308,
                        "end": 321,
                        "raw": "\"hello world\"",
                        "value": "hello world",
                        "regex": null,
                        "bigint": null
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 304,
                      "end": 307,
                      "decorators": [],
                      "name": "fn1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 256,
              "end": 281,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 266,
                  "end": 275,
                  "argument": {
                    "type": "Literal",
                    "start": 273,
                    "end": 274,
                    "raw": "3",
                    "value": 3,
                    "regex": null,
                    "bigint": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 247,
              "end": 254,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 247,
                "end": 248,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 253,
                "end": 254,
                "raw": "0",
                "value": 0,
                "regex": null,
                "bigint": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 222,
        "end": 225,
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 226,
          "end": 235,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 227,
            "end": 235,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 229,
              "end": 235
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 333,
      "end": 462,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 357,
        "end": 462,
        "body": [
          {
            "type": "IfStatement",
            "start": 363,
            "end": 460,
            "alternate": {
              "type": "BlockStatement",
              "start": 407,
              "end": 460,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 417,
                  "end": 454,
                  "argument": {
                    "type": "CallExpression",
                    "start": 424,
                    "end": 453,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 439,
                        "end": 452,
                        "raw": "\"hello world\"",
                        "value": "hello world",
                        "regex": null,
                        "bigint": null
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 424,
                      "end": 438,
                      "decorators": [],
                      "name": "notfoundsymbol",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 376,
              "end": 401,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 386,
                  "end": 395,
                  "argument": {
                    "type": "Literal",
                    "start": 393,
                    "end": 394,
                    "raw": "3",
                    "value": 3,
                    "regex": null,
                    "bigint": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 367,
              "end": 374,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 367,
                "end": 368,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 373,
                "end": 374,
                "raw": "0",
                "value": 0,
                "regex": null,
                "bigint": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 342,
        "end": 345,
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 346,
          "end": 355,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 347,
            "end": 355,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 349,
              "end": 355
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 464,
      "end": 505,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 479,
        "end": 505,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 485,
            "end": 503,
            "argument": {
              "type": "CallExpression",
              "start": 492,
              "end": 502,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 492,
                "end": 500,
                "computed": true,
                "object": {
                  "type": "ArrayExpression",
                  "start": 492,
                  "end": 497,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 493,
                      "end": 496,
                      "decorators": [],
                      "name": "fn5",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ]
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 498,
                  "end": 499,
                  "raw": "0",
                  "value": 0,
                  "regex": null,
                  "bigint": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 473,
        "end": 476,
        "decorators": [],
        "name": "fn5",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
