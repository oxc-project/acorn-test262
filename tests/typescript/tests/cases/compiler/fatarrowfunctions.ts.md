__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 916,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 36,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 20,
        "end": 36,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 23,
            "end": 34,
            "argument": {
              "type": "CallExpression",
              "start": 30,
              "end": 33,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 30,
                "end": 31,
                "decorators": [],
                "name": "x",
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
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 18,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 14,
            "end": 18,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 15,
              "end": 18
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 39,
      "end": 76,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 39,
        "end": 75,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 43,
            "end": 74,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 59,
              "end": 74,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 60,
                  "end": 73,
                  "argument": {
                    "type": "BinaryExpression",
                    "start": 67,
                    "end": 72,
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "start": 67,
                      "end": 70,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 67,
                        "end": 68,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 69,
                        "end": 70,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 71,
                      "end": 72,
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 44,
                "end": 52,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 45,
                  "end": 52,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 46,
                    "end": 52
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 53,
                "end": 54,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 55,
                "end": 56,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 39,
          "end": 42,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 77,
      "end": 107,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 77,
        "end": 106,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 81,
            "end": 105,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 90,
              "end": 105,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 91,
                  "end": 104,
                  "argument": {
                    "type": "BinaryExpression",
                    "start": 98,
                    "end": 103,
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "start": 98,
                      "end": 101,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 98,
                        "end": 99,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 100,
                        "end": 101,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 102,
                      "end": 103,
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 82,
                "end": 83,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 84,
                "end": 85,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 86,
                "end": 87,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 77,
          "end": 80,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 108,
      "end": 145,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 108,
        "end": 144,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 112,
            "end": 143,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 128,
              "end": 143,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 129,
                  "end": 142,
                  "argument": {
                    "type": "BinaryExpression",
                    "start": 136,
                    "end": 141,
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "start": 136,
                      "end": 139,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 136,
                        "end": 137,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 138,
                        "end": 139,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 140,
                      "end": 141,
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 113,
                "end": 114,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 115,
                "end": 123,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 116,
                  "end": 123,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 117,
                    "end": 123
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 124,
                "end": 125,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 108,
          "end": 111,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 146,
      "end": 190,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 146,
        "end": 189,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 150,
            "end": 188,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 173,
              "end": 188,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 174,
                  "end": 187,
                  "argument": {
                    "type": "BinaryExpression",
                    "start": 181,
                    "end": 186,
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "start": 181,
                      "end": 184,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 181,
                        "end": 182,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 183,
                        "end": 184,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 185,
                      "end": 186,
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 151,
                "end": 152,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 153,
                "end": 161,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 154,
                  "end": 161,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 155,
                    "end": 161
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 162,
                "end": 170,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 163,
                  "end": 170,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 164,
                    "end": 170
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
          "start": 146,
          "end": 149,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 191,
      "end": 228,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 191,
        "end": 227,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 195,
            "end": 226,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 211,
              "end": 226,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 212,
                  "end": 225,
                  "argument": {
                    "type": "BinaryExpression",
                    "start": 219,
                    "end": 224,
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "start": 219,
                      "end": 222,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 219,
                        "end": 220,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 221,
                        "end": 222,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 223,
                      "end": 224,
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 196,
                "end": 197,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 198,
                "end": 199,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 200,
                "end": 208,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 201,
                  "end": 208,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 202,
                    "end": 208
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
          "start": 191,
          "end": 194,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 229,
      "end": 250,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 229,
        "end": 249,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 233,
            "end": 248,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 237,
              "end": 248,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 238,
                  "end": 247,
                  "argument": {
                    "type": "Literal",
                    "start": 245,
                    "end": 246,
                    "raw": "0",
                    "value": 0
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 229,
          "end": 232,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 252,
      "end": 279,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 252,
        "end": 278,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 256,
            "end": 277,
            "async": false,
            "body": {
              "type": "BinaryExpression",
              "start": 272,
              "end": 277,
              "operator": "+",
              "left": {
                "type": "BinaryExpression",
                "start": 272,
                "end": 275,
                "operator": "+",
                "left": {
                  "type": "Identifier",
                  "start": 272,
                  "end": 273,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 274,
                  "end": 275,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Identifier",
                "start": 276,
                "end": 277,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 257,
                "end": 265,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 258,
                  "end": 265,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 259,
                    "end": 265
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 266,
                "end": 267,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 268,
                "end": 269,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 252,
          "end": 255,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 280,
      "end": 300,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 280,
        "end": 299,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 284,
            "end": 298,
            "async": false,
            "body": {
              "type": "BinaryExpression",
              "start": 293,
              "end": 298,
              "operator": "+",
              "left": {
                "type": "BinaryExpression",
                "start": 293,
                "end": 296,
                "operator": "+",
                "left": {
                  "type": "Identifier",
                  "start": 293,
                  "end": 294,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 295,
                  "end": 296,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Identifier",
                "start": 297,
                "end": 298,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 285,
                "end": 286,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 287,
                "end": 288,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 289,
                "end": 290,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 280,
          "end": 283,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 301,
      "end": 338,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 301,
        "end": 337,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 305,
            "end": 336,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 321,
              "end": 336,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 322,
                  "end": 335,
                  "argument": {
                    "type": "BinaryExpression",
                    "start": 329,
                    "end": 334,
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "start": 329,
                      "end": 332,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 329,
                        "end": 330,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 331,
                        "end": 332,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 333,
                      "end": 334,
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 306,
                "end": 307,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 308,
                "end": 316,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 309,
                  "end": 316,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 310,
                    "end": 316
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 317,
                "end": 318,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 301,
          "end": 304,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 339,
      "end": 383,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 339,
        "end": 382,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 343,
            "end": 381,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 366,
              "end": 381,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 367,
                  "end": 380,
                  "argument": {
                    "type": "BinaryExpression",
                    "start": 374,
                    "end": 379,
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "start": 374,
                      "end": 377,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 374,
                        "end": 375,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 376,
                        "end": 377,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 378,
                      "end": 379,
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 344,
                "end": 345,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 346,
                "end": 354,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 347,
                  "end": 354,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 348,
                    "end": 354
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 355,
                "end": 363,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 356,
                  "end": 363,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 357,
                    "end": 363
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
          "start": 339,
          "end": 342,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 384,
      "end": 421,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 384,
        "end": 420,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 388,
            "end": 419,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 404,
              "end": 419,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 405,
                  "end": 418,
                  "argument": {
                    "type": "BinaryExpression",
                    "start": 412,
                    "end": 417,
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "start": 412,
                      "end": 415,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 412,
                        "end": 413,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 414,
                        "end": 415,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 416,
                      "end": 417,
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 389,
                "end": 390,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 391,
                "end": 392,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 393,
                "end": 401,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 394,
                  "end": 401,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
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
          "start": 384,
          "end": 387,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 422,
      "end": 443,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 422,
        "end": 442,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 426,
            "end": 441,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 430,
              "end": 441,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 431,
                  "end": 440,
                  "argument": {
                    "type": "Literal",
                    "start": 438,
                    "end": 439,
                    "raw": "0",
                    "value": 0
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 422,
          "end": 425,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 446,
      "end": 462,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 446,
        "end": 461,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 451,
            "end": 459,
            "async": false,
            "body": {
              "type": "Identifier",
              "start": 458,
              "end": 459,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 452,
                "end": 453,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 446,
          "end": 449,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 464,
      "end": 478,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 464,
        "end": 477,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 468,
            "end": 476,
            "async": false,
            "body": {
              "type": "BinaryExpression",
              "start": 473,
              "end": 476,
              "operator": "*",
              "left": {
                "type": "Identifier",
                "start": 473,
                "end": 474,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 475,
                "end": 476,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 468,
                "end": 469,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 464,
          "end": 467,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 480,
      "end": 497,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 484,
          "end": 496,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 484,
            "end": 485,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 488,
            "end": 496,
            "async": false,
            "body": {
              "type": "BinaryExpression",
              "start": 493,
              "end": 496,
              "operator": "*",
              "left": {
                "type": "Identifier",
                "start": 493,
                "end": 494,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 495,
                "end": 496,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 488,
                "end": 489,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
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
      "type": "VariableDeclaration",
      "start": 498,
      "end": 524,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 502,
          "end": 523,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 502,
            "end": 503,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 506,
            "end": 523,
            "async": false,
            "body": {
              "type": "BinaryExpression",
              "start": 520,
              "end": 523,
              "operator": "*",
              "left": {
                "type": "Identifier",
                "start": 520,
                "end": 521,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 522,
                "end": 523,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 507,
                "end": 515,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 508,
                  "end": 515,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 509,
                    "end": 515
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
      "type": "VariableDeclaration",
      "start": 526,
      "end": 542,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 530,
          "end": 541,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 530,
            "end": 531,
            "decorators": [],
            "name": "w",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 534,
            "end": 541,
            "async": false,
            "body": {
              "type": "Literal",
              "start": 540,
              "end": 541,
              "raw": "3",
              "value": 3
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 544,
      "end": 688,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 582,
        "end": 688,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 601,
            "end": 685,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 605,
                "end": 684,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 605,
                  "end": 606,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 609,
                  "end": 684,
                  "alternate": {
                    "type": "FunctionExpression",
                    "start": 652,
                    "end": 684,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 665,
                      "end": 684,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 667,
                          "end": 682,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 674,
                            "end": 681,
                            "operator": "===",
                            "left": {
                              "type": "Identifier",
                              "start": 674,
                              "end": 675,
                              "decorators": [],
                              "name": "n",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Literal",
                              "start": 680,
                              "end": 681,
                              "raw": "0",
                              "value": 0
                            }
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 662,
                        "end": 663,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  },
                  "consequent": {
                    "type": "FunctionExpression",
                    "start": 619,
                    "end": 649,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 632,
                      "end": 649,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 634,
                          "end": 647,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 641,
                            "end": 646,
                            "operator": ">",
                            "left": {
                              "type": "Identifier",
                              "start": 641,
                              "end": 642,
                              "decorators": [],
                              "name": "n",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Literal",
                              "start": 645,
                              "end": 646,
                              "raw": "0",
                              "value": 0
                            }
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 629,
                        "end": 630,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  },
                  "test": {
                    "type": "Identifier",
                    "start": 609,
                    "end": 616,
                    "decorators": [],
                    "name": "isWhile",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 553,
        "end": 564,
        "decorators": [],
        "name": "ternaryTest",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 565,
          "end": 580,
          "decorators": [],
          "name": "isWhile",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 572,
            "end": 580,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 573,
              "end": 580
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 690,
      "end": 774,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 707,
        "end": 717,
        "decorators": [],
        "name": "setTimeout",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 718,
          "end": 733,
          "decorators": [],
          "name": "expression",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 728,
            "end": 733,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 730,
              "end": 733
            }
          }
        },
        {
          "type": "Identifier",
          "start": 735,
          "end": 748,
          "decorators": [],
          "name": "msec",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 740,
            "end": 748,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 742,
              "end": 748
            }
          }
        },
        {
          "type": "Identifier",
          "start": 750,
          "end": 764,
          "decorators": [],
          "name": "language",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 759,
            "end": 764,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 761,
              "end": 764
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 765,
        "end": 773,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 767,
          "end": 773
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 776,
      "end": 916,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 780,
          "end": 915,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 780,
            "end": 789,
            "decorators": [],
            "name": "messenger",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 792,
            "end": 915,
            "properties": [
              {
                "type": "Property",
                "start": 798,
                "end": 820,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 798,
                  "end": 805,
                  "decorators": [],
                  "name": "message",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 807,
                  "end": 820,
                  "raw": "\"Hello World\"",
                  "value": "Hello World"
                }
              },
              {
                "type": "Property",
                "start": 826,
                "end": 913,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 826,
                  "end": 831,
                  "decorators": [],
                  "name": "start",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 833,
                  "end": 913,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 844,
                    "end": 913,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 854,
                        "end": 907,
                        "directive": null,
                        "expression": {
                          "type": "CallExpression",
                          "start": 854,
                          "end": 906,
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "start": 865,
                              "end": 899,
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
                                "start": 871,
                                "end": 899,
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 873,
                                    "end": 897,
                                    "directive": null,
                                    "expression": {
                                      "type": "CallExpression",
                                      "start": 873,
                                      "end": 896,
                                      "arguments": [],
                                      "callee": {
                                        "type": "MemberExpression",
                                        "start": 873,
                                        "end": 894,
                                        "computed": false,
                                        "object": {
                                          "type": "MemberExpression",
                                          "start": 873,
                                          "end": 885,
                                          "computed": false,
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 873,
                                            "end": 877
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "start": 878,
                                            "end": 885,
                                            "decorators": [],
                                            "name": "message",
                                            "optional": false,
                                            "typeAnnotation": null
                                          }
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 886,
                                          "end": 894,
                                          "decorators": [],
                                          "name": "toString",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      },
                                      "optional": false,
                                      "typeArguments": null
                                    }
                                  }
                                ]
                              },
                              "expression": false,
                              "generator": false,
                              "id": null,
                              "params": [],
                              "returnType": null,
                              "typeParameters": null
                            },
                            {
                              "type": "Literal",
                              "start": 901,
                              "end": 905,
                              "raw": "3000",
                              "value": 3000
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 854,
                            "end": 864,
                            "decorators": [],
                            "name": "setTimeout",
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
                  "id": null,
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
