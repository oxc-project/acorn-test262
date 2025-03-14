overloadOnConstNoAnyImplementation.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 362,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 48,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "x1",
        "optional": false
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
                        "value": "hi"
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
              }
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 49,
      "end": 98,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 60,
        "decorators": [],
        "name": "x1",
        "optional": false
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
                        "value": "bye"
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
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 99,
      "end": 246,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 149,
        "end": 246,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 155,
            "end": 164,
            "expression": {
              "type": "CallExpression",
              "start": 155,
              "end": 163,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 158,
                  "end": 162,
                  "raw": "'hi'",
                  "value": "hi"
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 155,
                "end": 157,
                "decorators": [],
                "name": "cb",
                "optional": false
              },
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 169,
            "end": 179,
            "expression": {
              "type": "CallExpression",
              "start": 169,
              "end": 178,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 172,
                  "end": 177,
                  "raw": "'bye'",
                  "value": "bye"
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 169,
                "end": 171,
                "decorators": [],
                "name": "cb",
                "optional": false
              },
              "optional": false
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 184,
            "end": 198,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 188,
                "end": 197,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 188,
                  "end": 190,
                  "decorators": [],
                  "name": "hm",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 193,
                  "end": 197,
                  "raw": "'hm'",
                  "value": "hm"
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExpressionStatement",
            "start": 203,
            "end": 210,
            "expression": {
              "type": "CallExpression",
              "start": 203,
              "end": 209,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 206,
                  "end": 208,
                  "decorators": [],
                  "name": "hm",
                  "optional": false
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 203,
                "end": 205,
                "decorators": [],
                "name": "cb",
                "optional": false
              },
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 215,
            "end": 224,
            "expression": {
              "type": "CallExpression",
              "start": 215,
              "end": 223,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 218,
                  "end": 222,
                  "raw": "'uh'",
                  "value": "uh"
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 215,
                "end": 217,
                "decorators": [],
                "name": "cb",
                "optional": false
              },
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 229,
            "end": 235,
            "expression": {
              "type": "CallExpression",
              "start": 229,
              "end": 234,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 232,
                  "end": 233,
                  "raw": "1",
                  "value": 1
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 229,
                "end": 231,
                "decorators": [],
                "name": "cb",
                "optional": false
              },
              "optional": false
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
        "name": "x1",
        "optional": false
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
          "end": 147,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 124,
            "end": 147,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 126,
              "end": 147,
              "params": [
                {
                  "type": "Identifier",
                  "start": 127,
                  "end": 136,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 128,
                    "end": 136,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 130,
                      "end": 136
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 138,
                "end": 147,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 141,
                  "end": 147
                }
              }
            }
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 248,
      "end": 294,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 252,
          "end": 293,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 252,
            "end": 274,
            "decorators": [],
            "name": "cb",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 254,
              "end": 274,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 256,
                "end": 274,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 257,
                    "end": 263,
                    "decorators": [],
                    "name": "number",
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 265,
                  "end": 274,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 268,
                    "end": 274
                  }
                }
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 277,
            "end": 293,
            "async": false,
            "body": {
              "type": "Literal",
              "start": 292,
              "end": 293,
              "raw": "1",
              "value": 1
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 278,
                "end": 287,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 279,
                  "end": 287,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 281,
                    "end": 287
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 295,
      "end": 305,
      "expression": {
        "type": "CallExpression",
        "start": 295,
        "end": 304,
        "arguments": [
          {
            "type": "Literal",
            "start": 298,
            "end": 299,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Identifier",
            "start": 301,
            "end": 303,
            "decorators": [],
            "name": "cb",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 295,
          "end": 297,
          "decorators": [],
          "name": "x1",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 306,
      "end": 328,
      "expression": {
        "type": "CallExpression",
        "start": 306,
        "end": 327,
        "arguments": [
          {
            "type": "Literal",
            "start": 309,
            "end": 310,
            "raw": "1",
            "value": 1
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 312,
            "end": 326,
            "async": false,
            "body": {
              "type": "Literal",
              "start": 325,
              "end": 326,
              "raw": "1",
              "value": 1
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 313,
                "end": 320,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 314,
                  "end": 320,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 316,
                    "end": 320,
                    "literal": {
                      "type": "Literal",
                      "start": 316,
                      "end": 320,
                      "raw": "'hi'",
                      "value": "hi"
                    }
                  }
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 306,
          "end": 308,
          "decorators": [],
          "name": "x1",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 338,
      "end": 362,
      "expression": {
        "type": "CallExpression",
        "start": 338,
        "end": 361,
        "arguments": [
          {
            "type": "Literal",
            "start": 341,
            "end": 342,
            "raw": "1",
            "value": 1
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 344,
            "end": 360,
            "async": false,
            "body": {
              "type": "Literal",
              "start": 359,
              "end": 360,
              "raw": "1",
              "value": 1
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 345,
                "end": 354,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 346,
                  "end": 354,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 348,
                    "end": 354
                  }
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 338,
          "end": 340,
          "decorators": [],
          "name": "x1",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
