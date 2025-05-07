__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 409,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 48,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "x2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 12,
          "end": 21,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 13,
            "end": 21,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 15,
              "end": 21
            }
          }
        },
        {
          "type": "Identifier",
          "start": 23,
          "end": 46,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 25,
            "end": 46,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 27,
              "end": 46,
              "params": [
                {
                  "type": "Identifier",
                  "start": 28,
                  "end": 35,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 29,
                    "end": 35,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 31,
                      "end": 35,
                      "literal": {
                        "type": "Literal",
                        "start": 31,
                        "end": 35,
                        "raw": "'hi'",
                        "value": "hi",
                        "regex": null,
                        "bigint": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 37,
                "end": 46,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 40,
                  "end": 46
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 49,
      "end": 98,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 60,
        "decorators": [],
        "name": "x2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 61,
          "end": 70,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 62,
            "end": 70,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 64,
              "end": 70
            }
          }
        },
        {
          "type": "Identifier",
          "start": 72,
          "end": 96,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 74,
            "end": 96,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 76,
              "end": 96,
              "params": [
                {
                  "type": "Identifier",
                  "start": 77,
                  "end": 85,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 78,
                    "end": 85,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 80,
                      "end": 85,
                      "literal": {
                        "type": "Literal",
                        "start": 80,
                        "end": 85,
                        "raw": "'bye'",
                        "value": "bye",
                        "regex": null,
                        "bigint": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 87,
                "end": 96,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 90,
                  "end": 96
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 99,
      "end": 284,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 146,
        "end": 284,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 152,
            "end": 161,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 152,
              "end": 160,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 155,
                  "end": 159,
                  "raw": "'hi'",
                  "value": "hi",
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 152,
                "end": 154,
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 166,
            "end": 176,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 166,
              "end": 175,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 169,
                  "end": 174,
                  "raw": "'bye'",
                  "value": "bye",
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 166,
                "end": 168,
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 181,
            "end": 195,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 185,
                "end": 194,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 185,
                  "end": 187,
                  "decorators": [],
                  "name": "hm",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 190,
                  "end": 194,
                  "raw": "'hm'",
                  "value": "hm",
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExpressionStatement",
            "start": 200,
            "end": 207,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 200,
              "end": 206,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 203,
                  "end": 205,
                  "decorators": [],
                  "name": "hm",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 200,
                "end": 202,
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 261,
            "end": 270,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 261,
              "end": 269,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 264,
                  "end": 268,
                  "raw": "'uh'",
                  "value": "uh",
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 261,
                "end": 263,
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 275,
            "end": 281,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 275,
              "end": 280,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 278,
                  "end": 279,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 275,
                "end": 277,
                "decorators": [],
                "name": "cb",
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
        "start": 108,
        "end": 110,
        "decorators": [],
        "name": "x2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 111,
          "end": 120,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 112,
            "end": 120,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 114,
              "end": 120
            }
          }
        },
        {
          "type": "Identifier",
          "start": 122,
          "end": 144,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 124,
            "end": 144,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 126,
              "end": 144,
              "params": [
                {
                  "type": "Identifier",
                  "start": 127,
                  "end": 133,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 128,
                    "end": 133,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 130,
                      "end": 133
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 135,
                "end": 144,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 138,
                  "end": 144
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 286,
      "end": 332,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 290,
          "end": 331,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 290,
            "end": 312,
            "decorators": [],
            "name": "cb",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 292,
              "end": 312,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 294,
                "end": 312,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 295,
                    "end": 301,
                    "decorators": [],
                    "name": "number",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 303,
                  "end": 312,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 306,
                    "end": 312
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 315,
            "end": 331,
            "async": false,
            "body": {
              "type": "Literal",
              "start": 330,
              "end": 331,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 316,
                "end": 325,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 317,
                  "end": 325,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 319,
                    "end": 325
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 333,
      "end": 343,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 333,
        "end": 342,
        "arguments": [
          {
            "type": "Literal",
            "start": 336,
            "end": 337,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          },
          {
            "type": "Identifier",
            "start": 339,
            "end": 341,
            "decorators": [],
            "name": "cb",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 333,
          "end": 335,
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 353,
      "end": 375,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 353,
        "end": 374,
        "arguments": [
          {
            "type": "Literal",
            "start": 356,
            "end": 357,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 359,
            "end": 373,
            "async": false,
            "body": {
              "type": "Literal",
              "start": 372,
              "end": 373,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 360,
                "end": 367,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 361,
                  "end": 367,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 363,
                    "end": 367,
                    "literal": {
                      "type": "Literal",
                      "start": 363,
                      "end": 367,
                      "raw": "'hi'",
                      "value": "hi",
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 353,
          "end": 355,
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 385,
      "end": 409,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 385,
        "end": 408,
        "arguments": [
          {
            "type": "Literal",
            "start": 388,
            "end": 389,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 391,
            "end": 407,
            "async": false,
            "body": {
              "type": "Literal",
              "start": 406,
              "end": 407,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 392,
                "end": 401,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 393,
                  "end": 401,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 395,
                    "end": 401
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 385,
          "end": 387,
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
