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
        "name": "return1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 17,
          "end": 27,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 18,
            "end": 27,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 20,
              "end": 27
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "declare": false,
      "typeParameters": null,
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
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 63,
      "end": 94,
      "id": {
        "type": "Identifier",
        "start": 80,
        "end": 86,
        "name": "getAny",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 88,
        "end": 93,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 90,
          "end": 93
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 96,
      "end": 180,
      "id": {
        "type": "Identifier",
        "start": 105,
        "end": 112,
        "name": "return2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 113,
          "end": 122,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 114,
            "end": 122,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 116,
              "end": 122
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 147,
                    "end": 157,
                    "name": "startsWith",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 158,
                    "end": 161,
                    "value": "a",
                    "raw": "\"a\""
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "consequent": {
                "type": "CallExpression",
                "start": 165,
                "end": 173,
                "callee": {
                  "type": "Identifier",
                  "start": 165,
                  "end": 171,
                  "name": "getAny",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
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
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 123,
        "end": 131,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 125,
          "end": 131
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 182,
      "end": 261,
      "id": {
        "type": "Identifier",
        "start": 191,
        "end": 198,
        "name": "return3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 199,
          "end": 208,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 200,
            "end": 208,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 202,
              "end": 208
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 233,
                    "end": 243,
                    "name": "startsWith",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 244,
                    "end": 247,
                    "value": "a",
                    "raw": "\"a\""
                  }
                ],
                "optional": false,
                "typeArguments": null
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
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 209,
        "end": 217,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 211,
          "end": 217
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 263,
      "end": 359,
      "id": {
        "type": "Identifier",
        "start": 272,
        "end": 279,
        "name": "return4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 280,
          "end": 289,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 281,
            "end": 289,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 283,
              "end": 289
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 315,
                      "end": 325,
                      "name": "startsWith",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 326,
                      "end": 329,
                      "value": "a",
                      "raw": "\"a\""
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "consequent": {
                  "type": "CallExpression",
                  "start": 333,
                  "end": 341,
                  "callee": {
                    "type": "Identifier",
                    "start": 333,
                    "end": 339,
                    "name": "getAny",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
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
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 290,
        "end": 298,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 292,
          "end": 298
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 361,
      "end": 433,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 367,
          "end": 432,
          "id": {
            "type": "Identifier",
            "start": 367,
            "end": 374,
            "name": "return5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 377,
            "end": 432,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 378,
                "end": 387,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 379,
                  "end": 387,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 381,
                    "end": 387
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 402,
                    "end": 412,
                    "name": "startsWith",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 413,
                    "end": 416,
                    "value": "a",
                    "raw": "\"a\""
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "consequent": {
                "type": "CallExpression",
                "start": 420,
                "end": 428,
                "callee": {
                  "type": "Identifier",
                  "start": 420,
                  "end": 426,
                  "name": "getAny",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              },
              "alternate": {
                "type": "Literal",
                "start": 431,
                "end": 432,
                "value": 1,
                "raw": "1"
              }
            },
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 388,
              "end": 396,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 390,
                "end": 396
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 435,
      "end": 519,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 441,
          "end": 518,
          "id": {
            "type": "Identifier",
            "start": 441,
            "end": 448,
            "name": "return6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 451,
            "end": 518,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 452,
                "end": 461,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 453,
                  "end": 461,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 455,
                    "end": 461
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 477,
                      "end": 487,
                      "name": "startsWith",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 488,
                      "end": 491,
                      "value": "a",
                      "raw": "\"a\""
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "consequent": {
                  "type": "CallExpression",
                  "start": 495,
                  "end": 503,
                  "callee": {
                    "type": "Identifier",
                    "start": 495,
                    "end": 501,
                    "name": "getAny",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
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
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 462,
              "end": 470,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 464,
                "end": 470
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
