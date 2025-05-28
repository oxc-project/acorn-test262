__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 519,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 61,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 16,
        "decorators": [],
        "name": "return1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 17,
          "end": 27,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 18,
            "end": 27,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 20,
              "end": 27
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 28,
        "end": 31,
        "typeAnnotation": {
          "type": "TSLiteralType",
          "start": 30,
          "end": 31,
          "literal": {
            "type": "Literal",
            "start": 30,
            "end": 31,
            "value": 3,
            "raw": "3"
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 32,
        "end": 61,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 38,
            "end": 59,
            "argument": {
              "type": "ConditionalExpression",
              "start": 46,
              "end": 57,
              "test": {
                "type": "Identifier",
                "start": 46,
                "end": 47,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "consequent": {
                "type": "Literal",
                "start": 51,
                "end": 52,
                "value": 1,
                "raw": "1"
              },
              "alternate": {
                "type": "Literal",
                "start": 56,
                "end": 57,
                "value": 2,
                "raw": "2"
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 63,
      "end": 94,
      "id": {
        "type": "Identifier",
        "start": 80,
        "end": 86,
        "decorators": [],
        "name": "getAny",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 88,
        "end": 93,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 90,
          "end": 93
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 96,
      "end": 180,
      "id": {
        "type": "Identifier",
        "start": 105,
        "end": 112,
        "decorators": [],
        "name": "return2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 113,
          "end": 122,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 114,
            "end": 122,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 116,
              "end": 122
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 123,
        "end": 131,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 125,
          "end": 131
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 132,
        "end": 180,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 138,
            "end": 178,
            "argument": {
              "type": "ConditionalExpression",
              "start": 145,
              "end": 177,
              "test": {
                "type": "CallExpression",
                "start": 145,
                "end": 162,
                "callee": {
                  "type": "MemberExpression",
                  "start": 145,
                  "end": 157,
                  "object": {
                    "type": "Identifier",
                    "start": 145,
                    "end": 146,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 147,
                    "end": 157,
                    "decorators": [],
                    "name": "startsWith",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 158,
                    "end": 161,
                    "value": "a",
                    "raw": "\"a\""
                  }
                ],
                "optional": false
              },
              "consequent": {
                "type": "CallExpression",
                "start": 165,
                "end": 173,
                "callee": {
                  "type": "Identifier",
                  "start": 165,
                  "end": 171,
                  "decorators": [],
                  "name": "getAny",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              },
              "alternate": {
                "type": "Literal",
                "start": 176,
                "end": 177,
                "value": 1,
                "raw": "1"
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 182,
      "end": 261,
      "id": {
        "type": "Identifier",
        "start": 191,
        "end": 198,
        "decorators": [],
        "name": "return3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 199,
          "end": 208,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 200,
            "end": 208,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 202,
              "end": 208
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 209,
        "end": 217,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 211,
          "end": 217
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 218,
        "end": 261,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 224,
            "end": 259,
            "argument": {
              "type": "ConditionalExpression",
              "start": 231,
              "end": 258,
              "test": {
                "type": "CallExpression",
                "start": 231,
                "end": 248,
                "callee": {
                  "type": "MemberExpression",
                  "start": 231,
                  "end": 243,
                  "object": {
                    "type": "Identifier",
                    "start": 231,
                    "end": 232,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 233,
                    "end": 243,
                    "decorators": [],
                    "name": "startsWith",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 244,
                    "end": 247,
                    "value": "a",
                    "raw": "\"a\""
                  }
                ],
                "optional": false
              },
              "consequent": {
                "type": "Literal",
                "start": 251,
                "end": 254,
                "value": "a",
                "raw": "\"a\""
              },
              "alternate": {
                "type": "Identifier",
                "start": 257,
                "end": 258,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 263,
      "end": 359,
      "id": {
        "type": "Identifier",
        "start": 272,
        "end": 279,
        "decorators": [],
        "name": "return4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 280,
          "end": 289,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 281,
            "end": 289,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 283,
              "end": 289
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 290,
        "end": 298,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 292,
          "end": 298
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 299,
        "end": 359,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 305,
            "end": 357,
            "argument": {
              "type": "TSAsExpression",
              "start": 312,
              "end": 356,
              "expression": {
                "type": "ConditionalExpression",
                "start": 313,
                "end": 345,
                "test": {
                  "type": "CallExpression",
                  "start": 313,
                  "end": 330,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 313,
                    "end": 325,
                    "object": {
                      "type": "Identifier",
                      "start": 313,
                      "end": 314,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 315,
                      "end": 325,
                      "decorators": [],
                      "name": "startsWith",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 326,
                      "end": 329,
                      "value": "a",
                      "raw": "\"a\""
                    }
                  ],
                  "optional": false
                },
                "consequent": {
                  "type": "CallExpression",
                  "start": 333,
                  "end": 341,
                  "callee": {
                    "type": "Identifier",
                    "start": 333,
                    "end": 339,
                    "decorators": [],
                    "name": "getAny",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "alternate": {
                  "type": "Literal",
                  "start": 344,
                  "end": 345,
                  "value": 1,
                  "raw": "1"
                }
              },
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 350,
                "end": 356
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 361,
      "end": 433,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 367,
          "end": 432,
          "id": {
            "type": "Identifier",
            "start": 367,
            "end": 374,
            "decorators": [],
            "name": "return5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 377,
            "end": 432,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 378,
                "end": 387,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 379,
                  "end": 387,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 381,
                    "end": 387
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 388,
              "end": 396,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 390,
                "end": 396
              }
            },
            "body": {
              "type": "ConditionalExpression",
              "start": 400,
              "end": 432,
              "test": {
                "type": "CallExpression",
                "start": 400,
                "end": 417,
                "callee": {
                  "type": "MemberExpression",
                  "start": 400,
                  "end": 412,
                  "object": {
                    "type": "Identifier",
                    "start": 400,
                    "end": 401,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 402,
                    "end": 412,
                    "decorators": [],
                    "name": "startsWith",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 413,
                    "end": 416,
                    "value": "a",
                    "raw": "\"a\""
                  }
                ],
                "optional": false
              },
              "consequent": {
                "type": "CallExpression",
                "start": 420,
                "end": 428,
                "callee": {
                  "type": "Identifier",
                  "start": 420,
                  "end": 426,
                  "decorators": [],
                  "name": "getAny",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              },
              "alternate": {
                "type": "Literal",
                "start": 431,
                "end": 432,
                "value": 1,
                "raw": "1"
              }
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 435,
      "end": 519,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 441,
          "end": 518,
          "id": {
            "type": "Identifier",
            "start": 441,
            "end": 448,
            "decorators": [],
            "name": "return6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 451,
            "end": 518,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 452,
                "end": 461,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 453,
                  "end": 461,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 455,
                    "end": 461
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 462,
              "end": 470,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 464,
                "end": 470
              }
            },
            "body": {
              "type": "TSAsExpression",
              "start": 474,
              "end": 518,
              "expression": {
                "type": "ConditionalExpression",
                "start": 475,
                "end": 507,
                "test": {
                  "type": "CallExpression",
                  "start": 475,
                  "end": 492,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 475,
                    "end": 487,
                    "object": {
                      "type": "Identifier",
                      "start": 475,
                      "end": 476,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 477,
                      "end": 487,
                      "decorators": [],
                      "name": "startsWith",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 488,
                      "end": 491,
                      "value": "a",
                      "raw": "\"a\""
                    }
                  ],
                  "optional": false
                },
                "consequent": {
                  "type": "CallExpression",
                  "start": 495,
                  "end": 503,
                  "callee": {
                    "type": "Identifier",
                    "start": 495,
                    "end": 501,
                    "decorators": [],
                    "name": "getAny",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "alternate": {
                  "type": "Literal",
                  "start": 506,
                  "end": 507,
                  "value": 1,
                  "raw": "1"
                }
              },
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 512,
                "end": 518
              }
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
